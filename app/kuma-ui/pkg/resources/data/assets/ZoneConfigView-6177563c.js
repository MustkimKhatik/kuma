import{d as k,o as e,a as t,w as n,b as i,i as y,e as r,h as p,k as z,f as _,F as d,v as b,N as w,t as h}from"./index-d6e04092.js";import{f as v,A as N,d as $,E as B,g as V,_ as x}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{_ as C}from"./RouteTitle.vue_vue_type_script_setup_true_lang-11eb67ee.js";import{_ as S}from"./CodeBlock.vue_vue_type_style_index_0_lang-18044f14.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";const j=k({__name:"ZoneConfigView",setup(E){const{t:c}=v();function m(l){var o;const a=((o=l.zoneInsight)==null?void 0:o.subscriptions)??[];if(a.length>0){const s=a[a.length-1];if(s.config)return JSON.stringify(JSON.parse(s.config),null,2)}return null}return(l,a)=>(e(),t(x,{name:"zone-cp-config-view","data-testid":"zone-cp-config-view"},{default:n(({route:o})=>[i(N,null,{title:n(()=>[y("h2",null,[i(C,{title:r(c)("zone-cps.routes.item.navigation.zone-cp-config-view"),render:!0},null,8,["title"])])]),default:n(()=>[p(),i(r(z),{class:"mt-4"},{body:n(()=>[i($,{src:`/zone-cps/${o.params.zone}`},{default:n(({data:s,error:u})=>[u!==void 0?(e(),t(B,{key:0,error:u},null,8,["error"])):s===void 0?(e(),t(V,{key:1})):(e(!0),_(d,{key:2},b([m(s)],(f,g)=>(e(),_(d,{key:g},[f!==null?(e(),t(S,{key:0,id:"code-block-zone-config",language:"json",code:f,"is-searchable":"","query-key":"zone-config"},null,8,["code"])):(e(),t(r(w),{key:1,class:"mt-4","data-testid":"warning-no-subscriptions",appearance:"warning"},{alertMessage:n(()=>[p(h(r(c)("zone-cps.detail.no_subscriptions")),1)]),_:1}))],64))),128))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1}))}});export{j as default};