import{d as $,r as i,o,m as d,w as t,b as s,k,A as E,e as c,t as l,c as p,L as _,S as L,p as u,E as I,q as N}from"./index-DTYyGdcl.js";import{F as R}from"./FilterBar-D1KtUwR6.js";import{S as X}from"./SummaryView-Drj6Vcv1.js";const q={class:"stack"},P={key:0},T={key:1},F=$({__name:"BuiltinGatewayDataplanesView",setup(G){return(K,j)=>{const g=i("XAction"),z=i("XIcon"),v=i("XActionGroup"),w=i("RouterView"),b=i("DataCollection"),C=i("DataLoader"),V=i("KCard"),x=i("DataSource"),S=i("AppView"),A=i("RouteView");return o(),d(A,{name:"builtin-gateway-dataplanes-view",params:{mesh:"",gateway:"",listener:"",page:1,size:50,s:"",dataPlane:""}},{default:t(({can:h,route:a,t:m,me:r})=>[s(S,null,{default:t(()=>[s(x,{src:`/meshes/${a.params.mesh}/mesh-gateways/${a.params.gateway}`},{default:t(({data:f,error:B})=>[k("div",q,[s(V,null,{default:t(()=>[s(C,{src:f===void 0?"":`/meshes/${a.params.mesh}/dataplanes/for/service-insight/${f.selectors[0].match["kuma.io/service"]}?page=${a.params.page}&size=${a.params.size}&search=${a.params.s}`,data:[f],errors:[B]},{loadable:t(({data:n})=>[s(b,{type:"data-planes",items:(n==null?void 0:n.items)??[void 0],total:n==null?void 0:n.total,page:a.params.page,"page-size":a.params.size,onChange:a.update},{default:t(()=>[s(E,{class:"data-plane-collection","data-testid":"data-plane-collection",headers:[{...r.get("headers.name"),label:"Name",key:"name"},{...r.get("headers.namespace"),label:"Namespace",key:"namespace"},...h("use zones")?[{...r.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...r.get("headers.certificate"),label:"Certificate Info",key:"certificate"},{...r.get("headers.status"),label:"Status",key:"status"},{...r.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...r.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:n==null?void 0:n.items,"is-selected-row":e=>e.name===a.params.dataPlane,onResize:r.set},{toolbar:t(()=>[s(R,{class:"data-plane-proxy-filter",placeholder:"name:dataplane-name",query:a.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...h("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:e=>a.update({...Object.fromEntries(e.entries())})},null,8,["query","fields","onChange"])]),namespace:t(({row:e})=>[c(l(e.namespace),1)]),name:t(({row:e})=>[s(g,{"data-action":"",class:"name-link",title:e.name,to:{name:"builtin-gateway-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:a.params.page,size:a.params.size,s:a.params.s}}},{default:t(()=>[c(l(e.name),1)]),_:2},1032,["title","to"])]),zone:t(({row:e})=>[e.zone?(o(),d(g,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:t(()=>[c(l(e.zone),1)]),_:2},1032,["to"])):(o(),p(_,{key:1},[c(l(m("common.collection.none")),1)],64))]),certificate:t(({row:e})=>{var y;return[(y=e.dataplaneInsight.mTLS)!=null&&y.certificateExpirationTime?(o(),p(_,{key:0},[c(l(m("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(o(),p(_,{key:1},[c(l(m("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:t(({row:e})=>[s(L,{status:e.status},null,8,["status"])]),warnings:t(({row:e})=>[e.isCertExpired||e.warnings.length>0?(o(),d(z,{key:0,class:"mr-1",name:"warning"},{default:t(()=>[k("ul",null,[e.warnings.length>0?(o(),p("li",P,l(m("data-planes.components.data-plane-list.version_mismatch")),1)):u("",!0),c(),e.isCertExpired?(o(),p("li",T,l(m("data-planes.components.data-plane-list.cert_expired")),1)):u("",!0)])]),_:2},1024)):(o(),p(_,{key:1},[c(l(m("common.collection.none")),1)],64))]),actions:t(({row:e})=>[s(v,null,{default:t(()=>[s(g,{to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:t(()=>[c(l(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),c(),a.params.dataPlane?(o(),d(w,{key:0},{default:t(e=>[s(X,{onClose:y=>a.replace({name:a.name,params:{mesh:a.params.mesh},query:{page:a.params.page,size:a.params.size,s:a.params.s}})},{default:t(()=>[typeof n<"u"?(o(),d(I(e.Component),{key:0,items:n.items},null,8,["items"])):u("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):u("",!0)]),_:2},1032,["items","total","page","page-size","onChange"])]),_:2},1032,["src","data","errors"])]),_:2},1024)])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),H=N(F,[["__scopeId","data-v-a3954c97"]]);export{H as default};