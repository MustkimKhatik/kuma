import{d as x,a as t,o as m,b as l,w as e,e as o,O as _,f as c,G as D,t as R,E as T,m as h,a1 as C}from"./index-DPw5bDvs.js";const $=x({__name:"ZoneEgressDetailTabsView",setup(A){return(E,S)=>{const p=t("RouteTitle"),u=t("XAction"),d=t("XTabs"),z=t("RouterView"),f=t("DataLoader"),b=t("AppView"),w=t("DataSource"),g=t("RouteView");return m(),l(g,{name:"zone-egress-detail-tabs-view",params:{zone:"",zoneEgress:""}},{default:e(({route:s,can:v,t:r})=>[o(w,{src:`/zone-egress-overviews/${s.params.zoneEgress}`},{default:e(({data:n,error:V})=>[o(b,{breadcrumbs:[...v("use zones")?[{to:{name:"zone-cp-list-view"},text:r("zone-cps.routes.item.breadcrumbs")},{to:{name:"zone-cp-detail-view",params:{zone:s.params.zone}},text:s.params.zone}]:[],{to:{name:"zone-egress-list-view",params:{zone:s.params.zone}},text:r("zone-egresses.routes.item.breadcrumbs")}]},_({default:e(()=>[c(),o(f,{data:[n],errors:[V]},{default:e(()=>{var i;return[o(d,{selected:(i=s.child())==null?void 0:i.name},_({_:2},[D(s.children,({name:a})=>({name:`${a}-tab`,fn:e(()=>[o(u,{to:{name:a}},{default:e(()=>[c(R(r(`zone-egresses.routes.item.navigation.${a}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),c(),o(z,null,{default:e(a=>[(m(),l(T(a.Component),{data:n},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},[n?{name:"title",fn:e(()=>[h("h1",null,[o(C,{text:n.name},{default:e(()=>[o(p,{title:r("zone-egresses.routes.item.title",{name:n.name})},null,8,["title"])]),_:2},1032,["text"])])]),key:"0"}:void 0]),1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{$ as default};