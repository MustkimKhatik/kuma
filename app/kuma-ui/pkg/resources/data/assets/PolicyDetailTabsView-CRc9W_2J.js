import{d as x,r as a,o as m,m as r,w as t,b as o,l as D,aF as R,c as T,T as v,p as C,e as i,R as P,G as k,t as A,E as S}from"./index-Bhm2pUpK.js";const X={key:0},g=x({__name:"PolicyDetailTabsView",setup(B){return(L,N)=>{const p=a("RouteTitle"),_=a("XAction"),d=a("XTabs"),h=a("RouterView"),u=a("DataLoader"),f=a("AppView"),y=a("DataSource"),b=a("RouteView");return m(),r(b,{name:"policy-detail-tabs-view",params:{mesh:"",policy:"",policyPath:""}},{default:t(({route:e,t:c,uri:w})=>[o(y,{src:w(D(R),"/meshes/:mesh/policy-path/:path/policy/:name",{mesh:e.params.mesh,path:e.params.policyPath,name:e.params.policy})},{default:t(({data:s,error:V})=>[o(f,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"policy-list-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath}},text:c("policies.routes.item.breadcrumbs")}]},{title:t(()=>[s?(m(),T("h1",X,[o(v,{text:s.name},{default:t(()=>[o(p,{title:c("policies.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["text"])])):C("",!0)]),default:t(()=>[i(),o(u,{data:[s],errors:[V]},{default:t(()=>{var l;return[o(d,{selected:(l=e.child())==null?void 0:l.name},P({_:2},[k(e.children,({name:n})=>({name:`${n}-tab`,fn:t(()=>[o(_,{to:{name:n}},{default:t(()=>[i(A(c(`policies.routes.item.navigation.${n}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),i(),o(h,null,{default:t(n=>[(m(),r(S(n.Component),{data:s},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{g as default};
