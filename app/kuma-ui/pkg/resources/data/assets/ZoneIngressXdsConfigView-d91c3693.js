import{E as d}from"./EnvoyData-9a5ca825.js";import{g as l}from"./dataplane-dcd0858b.js";import{d as g,a as e,o as _,b as f,w as o,e as t,p as h,f as w,q as C}from"./index-57969804.js";import"./index-9dd3e7d3.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-f897c61d.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-1df62ed5.js";import"./ErrorBlock-4916afd1.js";import"./TextWithCopyButton-d6fe657f.js";import"./CopyButton-6b38cf98.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-0a3eaa51.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-724f73d8.js";const k=g({__name:"ZoneIngressXdsConfigView",props:{data:{}},setup(s){const a=s;return(V,x)=>{const r=e("RouteTitle"),i=e("KCard"),p=e("AppView"),c=e("RouteView");return _(),f(c,{name:"zone-ingress-xds-config-view",params:{zoneIngress:"",codeSearch:""}},{default:o(({route:n,t:m})=>[t(p,null,{title:o(()=>[h("h2",null,[t(r,{title:m("zone-ingresses.routes.item.navigation.zone-ingress-xds-config-view")},null,8,["title"])])]),default:o(()=>[w(),t(i,null,{body:o(()=>[t(d,{status:C(l)(a.data.zoneIngressInsight),resource:"Zone",src:`/zone-ingresses/${n.params.zoneIngress}/data-path/xds`,query:n.params.codeSearch,onQueryChange:u=>n.update({codeSearch:u})},null,8,["status","src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{k as default};