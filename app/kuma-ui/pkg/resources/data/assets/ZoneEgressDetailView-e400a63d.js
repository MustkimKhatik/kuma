import{f as y,A as k,D as g,S as w,T as b,_ as z}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{_ as E}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-a3f55cd8.js";import{g as C}from"./dataplane-30467516.js";import{d as v,r as B,o as i,a as _,w as t,b as e,i as l,h as s,t as d,e as n,f,F as I,g as V}from"./index-d6e04092.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";import"./AccordionList-1e614c4c.js";const x={class:"stack","data-testid":"detail-view-details"},D={class:"columns",style:{"--columns":"2"}},N={key:0},Z=v({__name:"ZoneEgressDetailView",props:{data:{}},setup(h){const a=h,{t:r}=y();return(p,S)=>{const c=B("KCard");return i(),_(z,{name:"zone-egress-detail-view","data-testid":"zone-egress-detail-view"},{default:t(()=>[e(k,null,{default:t(()=>{var u;return[l("div",x,[e(c,null,{body:t(()=>[l("div",D,[e(g,null,{title:t(()=>[s(d(n(r)("http.api.property.status")),1)]),body:t(()=>[e(w,{status:n(C)(a.data.zoneEgressInsight)},null,8,["status"])]),_:1}),s(),e(g,null,{title:t(()=>[s(d(n(r)("http.api.property.address")),1)]),body:t(()=>{var o,m;return[(o=a.data.zoneEgress.networking)!=null&&o.address&&((m=a.data.zoneEgress.networking)!=null&&m.port)?(i(),_(b,{key:0,text:`${a.data.zoneEgress.networking.address}:${a.data.zoneEgress.networking.port}`},null,8,["text"])):(i(),f(I,{key:1},[s(d(n(r)("common.detail.none")),1)],64))]}),_:1})])]),_:1}),s(),(((u=p.data.zoneEgressInsight)==null?void 0:u.subscriptions)??[]).length>0?(i(),f("div",N,[l("h2",null,d(n(r)("zone-egresses.detail.subscriptions")),1),s(),e(c,{class:"mt-4"},{body:t(()=>{var o;return[e(E,{subscriptions:((o=p.data.zoneEgressInsight)==null?void 0:o.subscriptions)??[]},null,8,["subscriptions"])]}),_:1})])):V("",!0)])]}),_:1})]),_:1})}}});export{Z as default};