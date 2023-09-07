import{f as v,A as E,d as h,E as w,o as x,T as R,S as C,p as I,K as N,_ as T,e as L}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{d as S,r as V,o as r,a as l,w as s,b as a,i as A,e as t,h as u,k as B,t as _,f,F as y,R as $,H as Z,x as O,J as D}from"./index-d6e04092.js";import{_ as F}from"./RouteTitle.vue_vue_type_script_setup_true_lang-11eb67ee.js";import{g as K}from"./dataplane-30467516.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";const P=S({__name:"ZoneEgressListView",props:{page:{type:Number,required:!0},size:{type:Number,required:!0}},setup(z){const c=z,{t:n}=v();function b(g){return g.map(m=>{const{name:p}=m,d={name:"zone-egress-detail-view",params:{zoneEgress:p}},{networking:e}=m.zoneEgress;let i;e!=null&&e.address&&(e!=null&&e.port)&&(i=`${e.address}:${e.port}`);const o=K(m.zoneEgressInsight??{});return{detailViewRoute:d,name:p,addressPort:i,status:o}})}return(g,m)=>{const p=V("RouterLink");return r(),l(T,{name:"zone-egress-list-view"},{default:s(({route:d})=>[a(E,null,{title:s(()=>[A("h1",null,[a(F,{title:t(n)("zone-egresses.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[u(),a(h,{src:`/zone-egress-overviews?size=${c.size}&page=${c.page}`},{default:s(({data:e,error:i})=>[a(t(B),null,{body:s(()=>[i!==void 0?(r(),l(w,{key:0,error:i},null,8,["error"])):(r(),l(x,{key:1,class:"zone-egress-collection","data-testid":"zone-egress-collection",headers:[{label:"Name",key:"name"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":c.page,"page-size":c.size,total:e==null?void 0:e.total,items:e?b(e.items):void 0,error:i,"empty-state-message":t(n)("common.emptyState.message",{type:"Zone Egresses"}),"empty-state-cta-to":t(n)("zone-egresses.href.docs"),"empty-state-cta-text":t(n)("common.documentation"),onChange:d.update},{name:s(({row:o,rowValue:k})=>[a(p,{to:o.detailViewRoute,"data-testid":"detail-view-link"},{default:s(()=>[u(_(k),1)]),_:2},1032,["to"])]),addressPort:s(({rowValue:o})=>[o?(r(),l(R,{key:0,text:o},null,8,["text"])):(r(),f(y,{key:1},[u(_(t(n)("common.collection.none")),1)],64))]),status:s(({rowValue:o})=>[o?(r(),l(C,{key:0,status:o},null,8,["status"])):(r(),f(y,{key:1},[u(_(t(n)("common.collection.none")),1)],64))]),actions:s(({row:o})=>[a(t($),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:s(()=>[a(t(Z),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:s(()=>[a(t(O),{color:t(I),icon:"more",size:t(N)},null,8,["color","size"])]),_:1})]),items:s(()=>[a(t(D),{item:{to:o.detailViewRoute,label:t(n)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]))]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});const W=L(P,[["__scopeId","data-v-2c3bc02a"]]);export{W as default};