import{d as B,e as d,o as l,p as u,w as a,a as i,b as s,l as v,R as K,m as z,ae as P,q as f,t as o,K as w,ad as $,A as q,c as y,J as _,V as F,S as M,F as G,_ as H}from"./index-CseWi7we.js";import{F as O}from"./FilterBar-DvzjzBOG.js";import{S as Z}from"./SummaryView-Lz-7sJWM.js";const j=["innerHTML"],J={key:0},U={key:1},W=B({__name:"DataPlaneListView",props:{mesh:{}},setup(b){const C=b;return(Q,r)=>{const T=d("RouteTitle"),h=d("XIcon"),x=d("XSelect"),g=d("XAction"),V=d("KTruncate"),S=d("XActionGroup"),L=d("RouterView"),A=d("DataCollection"),D=d("DataLoader"),I=d("KCard"),R=d("AppView"),X=d("RouteView");return l(),u(X,{name:"data-plane-list-view",params:{page:1,size:50,dataplaneType:"all",s:"",mesh:"",dataPlane:""}},{default:a(({can:k,route:t,t:p,me:m,uri:E})=>[i(T,{render:!1,title:p("data-planes.routes.items.title")},null,8,["title"]),r[14]||(r[14]=s()),i(R,{docs:p("data-planes.href.docs.data_plane_proxy")},{default:a(()=>[v("div",{innerHTML:p("data-planes.routes.items.intro",{},{defaultMessage:""})},null,8,j),r[13]||(r[13]=s()),i(I,null,{default:a(()=>[v("search",null,[i(O,{class:"data-plane-proxy-filter",placeholder:"service:backend",query:t.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...k("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:n=>t.update({...Object.fromEntries(n.entries())})},null,8,["query","fields","onChange"]),r[1]||(r[1]=s()),i(x,{label:"Type",selected:t.params.dataplaneType,onChange:n=>t.update({dataplaneType:n})},K({selected:a(({item:n})=>[n!=="all"?(l(),u(h,{key:0,size:z(P),name:n},null,8,["size","name"])):f("",!0),s(" "+o(p(`data-planes.type.${n}`)),1)]),_:2},[w(["all","standard","builtin","delegated"],n=>({name:`${n}-option`,fn:a(()=>[n!=="all"?(l(),u(h,{key:0,name:n},null,8,["name"])):f("",!0),s(" "+o(p(`data-planes.type.${n}`)),1)])}))]),1032,["selected","onChange"])]),r[12]||(r[12]=s()),i(D,{src:E(z($),"/meshes/:mesh/dataplanes/of/:type",{mesh:t.params.mesh,type:t.params.dataplaneType},{page:t.params.page,size:t.params.size,search:t.params.s})},{loadable:a(({data:n})=>[i(A,{type:"data-planes",items:(n==null?void 0:n.items)??[void 0],total:n==null?void 0:n.total,page:t.params.page,"page-size":t.params.size,onChange:t.update},{default:a(()=>[i(q,{class:"data-plane-collection","data-testid":"data-plane-collection",headers:[{...m.get("headers.type"),label:" ",key:"type"},{...m.get("headers.name"),label:"Name",key:"name"},{...m.get("headers.namespace"),label:"Namespace",key:"namespace"},...k("use zones")?[{...m.get("headers.zone"),label:"Zone",key:"zone"}]:[],...k("use service-insights",C.mesh)?[{...m.get("headers.services"),label:"Services",key:"services"}]:[],{...m.get("headers.certificate"),label:"Certificate Info",key:"certificate"},{...m.get("headers.status"),label:"Status",key:"status"},{...m.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...m.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:n==null?void 0:n.items,"is-selected-row":e=>e.name===t.params.dataPlane,onResize:m.set},{type:a(({row:e})=>[i(h,{name:e.dataplaneType},{default:a(()=>[s(o(p(`data-planes.type.${e.dataplaneType}`)),1)]),_:2},1032,["name"])]),name:a(({row:e})=>[i(g,{"data-action":"",class:"name-link",title:e.name,to:{name:"data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:t.params.page,size:t.params.size,s:t.params.s,dataplaneType:t.params.dataplaneType}}},{default:a(()=>[s(o(e.name),1)]),_:2},1032,["title","to"])]),namespace:a(({row:e})=>[s(o(e.namespace),1)]),services:a(({row:e})=>[e.services.length>0?(l(),u(V,{key:0,width:"auto"},{default:a(()=>[(l(!0),y(_,null,w(e.services,(c,N)=>(l(),y("div",{key:N},[i(F,{text:c},{default:a(()=>[e.dataplaneType==="standard"?(l(),u(g,{key:0,to:{name:"service-detail-view",params:{service:c}}},{default:a(()=>[s(o(c),1)]),_:2},1032,["to"])):e.dataplaneType==="delegated"?(l(),u(g,{key:1,to:{name:"delegated-gateway-detail-view",params:{service:c}}},{default:a(()=>[s(o(c),1)]),_:2},1032,["to"])):(l(),y(_,{key:2},[s(o(c),1)],64))]),_:2},1032,["text"])]))),128))]),_:2},1024)):(l(),y(_,{key:1},[s(o(p("common.collection.none")),1)],64))]),zone:a(({row:e})=>[e.zone?(l(),u(g,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[s(o(e.zone),1)]),_:2},1032,["to"])):(l(),y(_,{key:1},[s(o(p("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var c;return[(c=e.dataplaneInsight.mTLS)!=null&&c.certificateExpirationTime?(l(),y(_,{key:0},[s(o(p("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(l(),y(_,{key:1},[s(o(p("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[i(M,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(l(),u(h,{key:0,class:"mr-1",name:"warning"},{default:a(()=>[v("ul",null,[e.warnings.length>0?(l(),y("li",J,o(p("data-planes.components.data-plane-list.version_mismatch")),1)):f("",!0),r[2]||(r[2]=s()),e.isCertExpired?(l(),y("li",U,o(p("data-planes.components.data-plane-list.cert_expired")),1)):f("",!0)])]),_:2},1024)):(l(),y(_,{key:1},[s(o(p("common.collection.none")),1)],64))]),actions:a(({row:e})=>[i(S,null,{default:a(()=>[i(g,{to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:a(()=>[s(o(p("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),r[11]||(r[11]=s()),i(L,null,{default:a(({Component:e})=>[t.child()?(l(),u(Z,{key:0,onClose:c=>t.replace({name:t.name,params:{mesh:t.params.mesh},query:{page:t.params.page,size:t.params.size,s:t.params.s}})},{default:a(()=>[typeof n<"u"?(l(),u(G(e),{key:0,items:n.items},null,8,["items"])):f("",!0)]),_:2},1032,["onClose"])):f("",!0)]),_:2},1024)]),_:2},1032,["items","total","page","page-size","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}}),te=H(W,[["__scopeId","data-v-d396f3c0"]]);export{te as default};