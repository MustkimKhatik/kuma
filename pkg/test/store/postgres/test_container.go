package postgres

import (
	"context"
	"database/sql"
	"fmt"
	"os"
	"path"
	"runtime"
	"strconv"
	"strings"

	_ "github.com/jackc/pgx/v5/stdlib"
	_ "github.com/lib/pq"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"

	"github.com/kumahq/kuma/pkg/config"
	pg_config "github.com/kumahq/kuma/pkg/config/plugins/resources/postgres"
	"github.com/kumahq/kuma/pkg/core"
	"github.com/kumahq/kuma/pkg/plugins/common/postgres"
	util_files "github.com/kumahq/kuma/pkg/util/files"
)

type PostgresContainer struct {
	container testcontainers.Container
	WithTLS   bool
}

func findProjectRoot(cwd, callerFile string) string {
	projectRootParent := util_files.GetProjectRootParent(cwd)
	fileRelativeToProjectRootParent := util_files.RelativeToProjectRootParent(callerFile)
	projectRoot := util_files.GetProjectRoot(cwd)
	fileRelativeToProjectRoot := util_files.RelativeToProjectRoot(callerFile)

	file := path.Join(projectRootParent, fileRelativeToProjectRootParent)
	if !util_files.FileExists(file) {
		file = path.Join(projectRoot, fileRelativeToProjectRoot)
	}
	if !util_files.FileExists(file) {
		file = path.Join(util_files.GetGopath(), "pkg", "mod", util_files.RelativeToPkgMod(callerFile))
	}

	return util_files.GetProjectRoot(file)
}

func resourceDir() string {
	cwd, _ := os.Getwd()
	_, callerFile, _, _ := runtime.Caller(0)

	dir := findProjectRoot(cwd, callerFile)
	rDir := path.Join(dir, "tools/postgres")
	err := os.Chmod(path.Join(rDir, "certs/postgres.client.key"), 0o600)
	if err != nil {
		panic(err)
	}
	return rDir
}

func (v *PostgresContainer) Start() error {
	ctx := context.Background()

	buildArgs := map[string]*string{}

	mode := "standard"
	if v.WithTLS {
		mode = "tls"
	}
	buildArgs["MODE"] = &mode

	// Add a uniqueId to make each image different, this was causing flakiness as test-container
	// deletes the image that it builds unconditionally during teardown and fails if the image doesn't exist.
	// In the case of parallel tests it's possible that the same image was used in multiple tests and the second teardown would fail.
	uniqueId := strconv.Itoa(GinkgoParallelProcess())
	buildArgs["UNIQUEID"] = &uniqueId

	req := testcontainers.ContainerRequest{
		FromDockerfile: testcontainers.FromDockerfile{
			Context:   resourceDir(),
			BuildArgs: buildArgs,
		},
		Env: map[string]string{
			"POSTGRES_USER":     "kuma",
			"POSTGRES_PASSWORD": "kuma",
			"POSTGRES_DB":       "kuma",
		},
		ExposedPorts: []string{"5432/tcp"},
		WaitingFor:   wait.ForListeningPort("5432"),
	}
	c, err := testcontainers.GenericContainer(ctx, testcontainers.GenericContainerRequest{
		ContainerRequest: req,
		Started:          true,
	})
	if err != nil {
		return err
	}
	v.container = c
	return nil
}

func (v *PostgresContainer) Stop() error {
	if v.container != nil {
		return v.container.Terminate(context.Background())
	}
	return nil
}

type DbOption string

const (
	WithRandomDb DbOption = "random-db"
)

func (v *PostgresContainer) Config(dbOpts ...DbOption) (*pg_config.PostgresStoreConfig, error) {
	cfg := pg_config.DefaultPostgresStoreConfig()
	ip, err := v.container.Host(context.Background())
	if err != nil {
		return nil, err
	}
	port, err := v.container.MappedPort(context.Background(), "5432")
	if err != nil {
		return nil, err
	}
	cfg.Host = ip
	cfg.Port = port.Int()
	rDir := resourceDir()
	if v.WithTLS {
		cfg.TLS.Mode = pg_config.VerifyCa
		cfg.TLS.KeyPath = path.Join(rDir, "certs/postgres.client.key")
		cfg.TLS.CertPath = path.Join(rDir, "certs/postgres.client.crt")
		cfg.TLS.CAPath = path.Join(rDir, "certs/rootCA.crt")
	}
	if err := config.Load("", cfg); err != nil {
		return nil, err
	}
	var db *sql.DB

	// make sure the server is reachable
	Eventually(func() error {
		var dbErr error
		db, dbErr = postgres.ConnectToDb(*cfg)
		return dbErr
	}, "10s", "100ms").Should(Succeed())
	defer db.Close()
	for _, o := range dbOpts {
		switch o {
		case WithRandomDb:
			dbName := fmt.Sprintf("kuma_%s", strings.ReplaceAll(core.NewUUID(), "-", ""))
			statement := fmt.Sprintf("CREATE DATABASE %s", dbName)
			if _, err = db.Exec(statement); err != nil {
				return nil, err
			}
			cfg.DbName = dbName

			// make sure the database instance is reachable
			Eventually(func() error {
				var dbAccessErr error
				_, dbAccessErr = postgres.ConnectToDb(*cfg)
				return dbAccessErr
			}, "10s", "100ms").Should(Succeed())
		}
	}
	return cfg, nil
}
