import{_ as d}from"./EnvoyData.vue_vue_type_script_setup_true_lang-gXMagPEz.js";import{d as l,r as s,o as m,m as _,w as t,b as a,e as g}from"./index-Be4yFAuI.js";import"./kong-icons.es366-C6ehf1Zr.js";import"./CodeBlock-B09wfSDq.js";const E=l({__name:"ZoneEgressStatsView",setup(u){return(f,h)=>{const n=s("RouteTitle"),r=s("KCard"),p=s("AppView"),c=s("RouteView");return m(),_(c,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:i})=>[a(n,{render:!1,title:i("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"]),g(),a(p,null,{default:t(()=>[a(r,null,{default:t(()=>[a(d,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{E as default};