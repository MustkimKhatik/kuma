import{d as R,r,o as d,m,w as a,b as t,k as c,l as g,aF as u,T as f,e as o,t as p,R as D,p as x}from"./index-BmC53MqS.js";import{_ as S}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-DxNahgdA.js";import{T as F}from"./TagList-D3kKi2NS.js";import"./CodeBlock-Cp1tR1M3.js";import"./toYaml-DB9FPXFY.js";const b={class:"stack"},M={class:"columns"},$=R({__name:"ExternalServiceDetailView",setup(N){return(T,B)=>{const v=r("KCard"),C=r("DataSource"),y=r("DataLoader"),w=r("AppView"),V=r("RouteView");return d(),m(V,{name:"external-service-detail-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:i,uri:_})=>[t(w,null,{default:a(()=>[c("div",b,[t(y,{src:_(g(u),"/meshes/:mesh/external-services/:name",{mesh:e.params.mesh,name:e.params.service})},{default:a(({data:n})=>[t(v,{"data-testid":"external-service-details"},{default:a(()=>[c("div",M,[t(f,null,{title:a(()=>[o(p(i("http.api.property.address")),1)]),body:a(()=>[t(D,{text:n.networking.address},null,8,["text"])]),_:2},1024),o(),n.tags?(d(),m(f,{key:0},{title:a(()=>[o(p(i("http.api.property.tags")),1)]),body:a(()=>[t(F,{tags:n.tags},null,8,["tags"])]),_:2},1024)):x("",!0)])]),_:2},1024),o(),c("div",null,[c("h3",null,p(i("external-services.detail.config")),1),o(),t(S,{class:"mt-4","data-testid":"external-service-config",resource:n.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:s=>e.update({codeSearch:s}),onFilterModeChange:s=>e.update({codeFilter:s}),onRegExpModeChange:s=>e.update({codeRegExp:s})},{default:a(({copy:s,copying:k})=>[k?(d(),m(C,{key:0,src:_(g(u),"/meshes/:mesh/external-services/:name/as/kubernetes",{mesh:e.params.mesh,name:e.params.service},{cacheControl:"no-store"}),onChange:l=>{s(h=>h(l))},onError:l=>{s((h,E)=>E(l))}},null,8,["src","onChange","onError"])):x("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])]),_:2},1032,["src"])])]),_:2},1024)]),_:1})}}});export{$ as default};