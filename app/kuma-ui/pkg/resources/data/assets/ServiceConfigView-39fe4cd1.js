import{f as l,m as u,A as p,d,E as h,g as v,_ as k}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{_ as g}from"./RouteTitle.vue_vue_type_script_setup_true_lang-11eb67ee.js";import{_ as w}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-6ec28ba6.js";import{d as $,r as C,o as r,a,w as e,b as o,i as V,e as c,h as b}from"./index-d6e04092.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-18044f14.js";import"./toYaml-4e00099e.js";const q=$({__name:"ServiceConfigView",setup(y){const{t:n}=l(),m=u();return(A,B)=>{const _=C("KCard");return r(),a(k,{name:"service-config-view","data-testid":"service-config-view"},{default:e(({route:t})=>[o(p,null,{title:e(()=>[V("h2",null,[o(g,{title:c(n)("services.routes.item.navigation.service-config-view"),render:!0},null,8,["title"])])]),default:e(()=>[b(),o(_,null,{body:e(()=>[o(d,{src:`/meshes/${t.params.mesh}/external-services/${t.params.service}`},{default:e(({data:s,error:i})=>[i?(r(),a(h,{key:0,error:i},null,8,["error"])):s===void 0?(r(),a(v,{key:1})):(r(),a(w,{key:2,id:"code-block-service",resource:s,"resource-fetcher":f=>c(m).getExternalService({mesh:s.mesh,name:s.name},f),"is-searchable":""},null,8,["resource","resource-fetcher"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{q as default};