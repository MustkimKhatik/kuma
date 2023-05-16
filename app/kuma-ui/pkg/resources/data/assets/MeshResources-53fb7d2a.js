import{T as c,z as i}from"./kongponents.es-f7d67eb2.js";import{u as m}from"./store-c25c3bc2.js";import{a as h}from"./index-e77322c8.js";import{d as M,c as U,o as A,j as R,g as o,w as n,h as s,i as t,e,t as r,p as f,m as b}from"./index-ff8f00ce.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const l=_=>(f("data-v-88c956eb"),_=_(),b(),_),C={class:"kcard-switcher"},y=l(()=>t("p",null,[s(`
          We can create multiple isolated Mesh resources (i.e. per application/`),t("wbr"),s("team/"),t("wbr"),s(`business unit).
        `)],-1)),E={class:"resource-list-actions mt-4"},T=l(()=>t("p",null,`
          We need a data plane proxy for each replica of our services within a Mesh resource.
        `,-1)),K={class:"resource-list-actions mt-4"},g={class:"resource-list-actions mt-4"},k=["href"],S=["href"],x=["href"],D=M({__name:"MeshResources",setup(_){const a=h(),p=m(),u=U(()=>({name:p.getters["config/getEnvironment"]==="universal"?"universal-dataplane":"kubernetes-dataplane"}));return(d,P)=>(A(),R("div",C,[o(e(i),{title:"Create a virtual mesh"},{body:n(()=>[y,s(),t("div",E,[o(e(c),{icon:"plus",appearance:"creation",to:{name:"create-mesh"}},{default:n(()=>[s(`
            Create mesh
          `)]),_:1})])]),_:1}),s(),o(e(i),{title:"Connect data plane proxies"},{body:n(()=>[T,s(),t("div",K,[o(e(c),{to:u.value,appearance:"primary"},{default:n(()=>[s(`
            Get started
          `)]),_:1},8,["to"])])]),_:1}),s(),o(e(i),{title:`Apply ${e(a)("KUMA_PRODUCT_NAME")} policies`},{body:n(()=>[t("p",null,`
          We can apply `+r(e(a)("KUMA_PRODUCT_NAME"))+` policies to secure, observe, route and manage the Mesh and its data plane proxies.
        `,1),s(),t("div",g,[o(e(c),{to:`${e(a)("KUMA_DOCS_URL")}/policies/?${e(a)("KUMA_UTM_QUERY_PARAMS")}`,appearance:"primary",target:"_blank"},{default:n(()=>[s(`
            Explore policies
          `)]),_:1},8,["to"])])]),_:1},8,["title"]),s(),o(e(i),{title:"Resources"},{body:n(()=>[t("p",null,`
          Join the `+r(e(a)("KUMA_PRODUCT_NAME"))+` community and ask questions:
        `,1),s(),t("ul",null,[t("li",null,[t("a",{href:`${e(a)("KUMA_DOCS_URL")}/?${e(a)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},r(e(a)("KUMA_PRODUCT_NAME"))+` Documentation
            `,9,k)]),s(),t("li",null,[t("a",{href:`${e(a)("KUMA_CHAT_URL")}/?${e(a)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},r(e(a)("KUMA_PRODUCT_NAME"))+`  Community Chat
            `,9,S)]),s(),t("li",null,[t("a",{href:`https://github.com/kumahq/kuma?${e(a)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},r(e(a)("KUMA_PRODUCT_NAME"))+` GitHub Repository
            `,9,x)])])]),_:1})]))}});const Q=v(D,[["__scopeId","data-v-88c956eb"]]);export{Q as M};