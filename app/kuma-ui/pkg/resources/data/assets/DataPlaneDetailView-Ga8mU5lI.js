import{a as nt,K}from"./index-FZCiQto1.js";import{_ as L,a as b,o,b as y,w as a,r as V,m as s,f as t,d as Z,c as p,e as l,l as at,q as n,t as r,F as m,E as x,p as T,n as ot,A as st,I as it,X as D,Y as lt,Z as W,$ as J,a0 as Q,a1 as H,S as rt,C as dt,x as ct,y as ut}from"./index-Mzgj6Y4G.js";import{_ as pt}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5yGSZzGo.js";import{S as _t}from"./StatusBadge-JZQHHWZm.js";import{S as mt}from"./SummaryView-6_tz1MrP.js";import{T as X}from"./TagList-1AMuuMWZ.js";import{T as ft}from"./TextWithCopyButton-1wEvk7ih.js";import{_ as vt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-TwlB3Om2.js";import"./CopyButton-TPQGf4OQ.js";import"./AccordionList-suXOrv9U.js";const yt={},gt={class:"card"},ht={class:"title"},bt={class:"body"};function kt(_,e){const u=b("KCard");return o(),y(u,{class:"data-card"},{default:a(()=>[s("dl",null,[s("div",gt,[s("dt",ht,[V(_.$slots,"title",{},void 0,!0)]),t(),s("dd",bt,[V(_.$slots,"default",{},void 0,!0)])])])]),_:3})}const et=L(yt,[["render",kt],["__scopeId","data-v-6e083223"]]),wt={class:"service-traffic"},xt={class:"actions"},$t=Z({__name:"DataPlaneTraffic",setup(_){return(e,u)=>(o(),p("div",wt,[s("div",xt,[V(e.$slots,"actions",{},void 0,!0)]),t(),l(et,{class:"header"},{title:a(()=>[V(e.$slots,"title",{},void 0,!0)]),_:3}),t(),V(e.$slots,"default",{},void 0,!0)]))}}),O=L($t,[["__scopeId","data-v-5bd1dbf9"]]),Bt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Tt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Ct=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],St=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],tt=(_,e,u)=>{let k=_;return typeof e=="string"||Array.isArray(e)?k=_.toLocaleString(e,u):(e===!0||u!==void 0)&&(k=_.toLocaleString(void 0,u)),k};function Y(_,e){if(!Number.isFinite(_))throw new TypeError(`Expected a finite number, got ${typeof _}: ${_}`);e={bits:!1,binary:!1,space:!0,...e};const u=e.bits?e.binary?St:Ct:e.binary?Tt:Bt,k=e.space?" ":"";if(e.signed&&_===0)return` 0${k}${u[0]}`;const c=_<0,C=c?"-":e.signed?"+":"";c&&(_=-_);let w;if(e.minimumFractionDigits!==void 0&&(w={minimumFractionDigits:e.minimumFractionDigits}),e.maximumFractionDigits!==void 0&&(w={maximumFractionDigits:e.maximumFractionDigits,...w}),_<1){const S=tt(_,e.locale,w);return C+S+k+u[0]}const $=Math.min(Math.floor(e.binary?Math.log(_)/Math.log(1024):Math.log10(_)/3),u.length-1);_/=(e.binary?1024:1e3)**$,w||(_=_.toPrecision(3));const N=tt(Number(_),e.locale,w),B=u[$];return C+N+k+B}const It={class:"title"},Dt={key:0},Kt=Z({__name:"ServiceTrafficCard",props:{protocol:{},traffic:{}},setup(_){const{t:e}=at(),u=_,k=c=>{const C=c.target;if(c.isTrusted&&C.nodeName.toLowerCase()!=="a"){const w=C.closest(".service-traffic-card, a");if(w){const $=w.nodeName.toLowerCase()==="a"?w:w.querySelector("a");$!==null&&"click"in $&&typeof $.click=="function"&&$.click()}}};return(c,C)=>{const w=b("KBadge"),$=b("KSkeletonBox");return o(),y(et,{class:"service-traffic-card",onClick:k},{title:a(()=>[l(w,{appearance:u.protocol==="passthrough"?"success":"info"},{default:a(()=>[t(r(n(e)(`data-planes.components.service_traffic_card.protocol.${u.protocol}`,{},{defaultMessage:n(e)(`http.api.value.${u.protocol}`)})),1)]),_:1},8,["appearance"]),t(),s("div",It,[V(c.$slots,"default",{},void 0,!0)])]),default:a(()=>{var N,B,S,M,q,P,A,F,G;return[t(),u.traffic?(o(),p(m,{key:0},[u.traffic.name.length>0?(o(),p("dl",Dt,[u.protocol==="passthrough"?(o(!0),p(m,{key:0},x([["http","tcp"].reduce((g,U)=>{var v;const f="downstream";return Object.entries(((v=u.traffic)==null?void 0:v[U])||{}).reduce((I,[E,i])=>[`${f}_cx_tx_bytes_total`,`${f}_cx_rx_bytes_total`].includes(E)?{...I,[E]:i+(I[E]??0)}:I,g)},{})],(g,U)=>(o(),p(m,{key:U},[s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,r(n(Y)(g.downstream_cx_rx_bytes_total??0)),1)]),t(),s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,r(n(Y)(g.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):u.protocol==="grpc"?(o(),p(m,{key:1},[s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.grpc_success")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:((N=u.traffic.grpc)==null?void 0:N.success)??0})),1)]),t(),s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.grpc_failure")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:((B=u.traffic.grpc)==null?void 0:B.failure)??0})),1)])],64)):u.protocol==="http"?(o(),p(m,{key:2},[(o(!0),p(m,null,x([((S=u.traffic.http)==null?void 0:S.downstream_rq_1xx)??0].filter(g=>g!==0),g=>(o(),p("div",{key:g},[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.1xx")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:g})),1)]))),128)),t(),s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.2xx")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:((M=u.traffic.http)==null?void 0:M.downstream_rq_2xx)??0})),1)]),t(),(o(!0),p(m,null,x([((q=u.traffic.http)==null?void 0:q.downstream_rq_3xx)??0].filter(g=>g!==0),g=>(o(),p("div",{key:g},[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.3xx")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:g})),1)]))),128)),t(),s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.4xx")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:((P=u.traffic.http)==null?void 0:P.downstream_rq_4xx)??0})),1)]),t(),s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.5xx")),1),t(),s("dd",null,r(n(e)("common.formats.integer",{value:((A=u.traffic.http)==null?void 0:A.downstream_rq_5xx)??0})),1)])],64)):(o(),p(m,{key:3},[s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,r(n(Y)(((F=u.traffic.tcp)==null?void 0:F.downstream_cx_rx_bytes_total)??0)),1)]),t(),s("div",null,[s("dt",null,r(n(e)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,r(n(Y)(((G=u.traffic.tcp)==null?void 0:G.downstream_cx_tx_bytes_total)??0)),1)])],64))])):T("",!0)],64)):(o(),y($,{key:1,width:"10"}))]}),_:3})}}}),R=L(Kt,[["__scopeId","data-v-c99fad9b"]]),Vt={class:"body"},Nt=Z({__name:"ServiceTrafficGroup",props:{type:{}},setup(_){const e=_;return(u,k)=>{const c=b("KCard");return o(),y(c,{class:ot(["service-traffic-group",`type-${e.type}`])},{default:a(()=>[s("div",Vt,[V(u.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),z=L(Nt,[["__scopeId","data-v-baf4abf7"]]),Et=_=>(ct("data-v-1b209611"),_=_(),ut(),_),Rt={"data-testid":"dataplane-warnings"},zt=["data-testid","innerHTML"],Mt={key:0,"data-testid":"warning-stats-loading"},qt={class:"stack","data-testid":"dataplane-details"},Pt={class:"columns"},Ut={class:"status-with-reason"},Lt={class:"columns"},At={class:"columns"},Ft=Et(()=>s("span",null,"Outbounds",-1)),Gt={"data-testid":"dataplane-mtls"},Ot={class:"columns"},Yt=["innerHTML"],Zt={key:2,"data-testid":"dataplane-subscriptions"},Ht=Z({__name:"DataPlaneDetailView",props:{data:{}},setup(_){const{t:e,formatIsoDate:u}=at(),k=st(),c=_,C=it(()=>c.data.warnings.concat(...c.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(w,$)=>{const N=b("KTooltip"),B=b("KCard"),S=b("RouterLink"),M=b("KInputSwitch"),q=b("KButton"),P=b("DataCollection"),A=b("RouterView"),F=b("KAlert"),G=b("AppView"),g=b("DataSource"),U=b("RouteView");return o(),y(U,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:a(({route:f})=>[l(g,{src:c.data.dataplaneType==="delegated"?"":`/meshes/${f.params.mesh}/dataplanes/${f.params.dataPlane}/stats/${c.data.dataplaneType==="builtin"&&c.data.dataplane.networking.gateway?c.data.dataplane.networking.gateway.tags["kuma.io/service"]:"localhost_"}`},{default:a(({data:v,error:I,refresh:E})=>[l(G,null,H({default:a(()=>[t(),s("div",qt,[l(B,null,{default:a(()=>[s("div",Pt,[l(D,null,{title:a(()=>[t(r(n(e)("http.api.property.status")),1)]),body:a(()=>[s("div",Ut,[l(_t,{status:c.data.status},null,8,["status"]),t(),(o(!0),p(m,null,x([c.data.dataplane.networking.inbounds.filter(i=>!i.health.ready)],i=>(o(),p(m,{key:i},[i.length>0?(o(),y(N,{key:0,class:"reason-tooltip","position-fixed":""},{content:a(()=>[s("ul",null,[(o(!0),p(m,null,x(i,d=>(o(),p("li",{key:`${d.service}:${d.port}`},r(n(e)("data-planes.routes.item.unhealthy_inbound",{service:d.service,port:d.port})),1))),128))])]),default:a(()=>[l(n(lt),{color:n(nt),size:n(K),"hide-title":""},null,8,["color","size"]),t()]),_:2},1024)):T("",!0)],64))),128))])]),_:1}),t(),l(D,null,{title:a(()=>[t(r(n(e)("data-planes.routes.item.last_updated")),1)]),body:a(()=>[t(r(n(u)(c.data.modificationTime)),1)]),_:1}),t(),c.data.dataplane.networking.gateway?(o(),p(m,{key:0},[l(D,null,{title:a(()=>[t(r(n(e)("http.api.property.tags")),1)]),body:a(()=>[l(X,{tags:c.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:1}),t(),l(D,null,{title:a(()=>[t(r(n(e)("http.api.property.address")),1)]),body:a(()=>[l(ft,{text:`${c.data.dataplane.networking.address}`},null,8,["text"])]),_:1})],64)):T("",!0)])]),_:1}),t(),c.data.dataplaneType==="builtin"&&c.data.dataplane.networking.gateway?(o(),y(B,{key:0,class:"traffic","data-testid":"dataplane-traffic"},{default:a(()=>[s("div",Lt,[l(O,null,{title:a(()=>[l(n(W),{display:"inline-block",decorative:"",size:n(K)},null,8,["size"]),t(`

                  Inbounds
                `)]),default:a(()=>[t(),l(z,{type:"inbound"},{default:a(()=>[(o(!0),p(m,null,x([(v||{inbounds:[]}).inbounds.find(i=>{var d;return i.name===((d=c.data.dataplane.networking.gateway)==null?void 0:d.tags["kuma.io/service"])})],(i,d)=>(o(),y(R,{key:d,protocol:"http",traffic:i},{default:a(()=>[l(S,{to:{name:"data-plane-inbound-summary-overview-view",params:{service:c.data.dataplane.networking.gateway.tags["kuma.io/service"]},query:{inactive:f.params.inactive?null:void 0}}},{default:a(()=>[t(r(c.data.dataplane.networking.gateway.tags["kuma.io/service"]),1)]),_:2},1032,["to"]),t(),l(X,{tags:[{label:"kuma.io/service",value:c.data.dataplane.networking.gateway.tags["kuma.io/service"]}]},null,8,["tags"])]),_:2},1032,["traffic"]))),128))]),_:2},1024)]),_:2},1024),t(),l(O,null,H({title:a(()=>[l(n(J),{display:"inline-block",decorative:"",size:n(K)},null,8,["size"]),t(`

                  Outbounds
                `)]),default:a(()=>[t(),t(),v?(o(),p(m,{key:0},[l(z,{type:"passthrough"},{default:a(()=>[l(R,{protocol:"passthrough",traffic:v.passthrough},{default:a(()=>[t(`
                      Non mesh traffic
                    `)]),_:2},1032,["traffic"])]),_:2},1024),t(),(o(!0),p(m,null,x([f.params.inactive?v.outbounds:v.outbounds.filter(i=>{var d,h;return(i.protocol==="tcp"?(d=i.tcp)==null?void 0:d.downstream_cx_rx_bytes_total:(h=i.http)==null?void 0:h.downstream_rq_total)??0>0})],i=>(o(),p(m,{key:i},[i.length>0?(o(),y(z,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:a(()=>[(o(!0),p(m,null,x(i,d=>(o(),y(R,{key:`${d.name}`,protocol:d.protocol,traffic:d},{default:a(()=>[l(S,{to:{name:(h=>h.includes("bound")?h.replace("-inbound-","-outbound-"):"data-plane-outbound-summary-overview-view")(String(n(k).name)),params:{service:d.name},query:{inactive:f.params.inactive?null:void 0}}},{default:a(()=>[t(r(d.name),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic"]))),128))]),_:2},1024)):T("",!0)],64))),128))],64)):T("",!0)]),_:2},[v?{name:"actions",fn:a(()=>[l(M,{modelValue:f.params.inactive,"onUpdate:modelValue":i=>f.params.inactive=i,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:a(()=>[t(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(),l(q,{appearance:"primary",onClick:E},{default:a(()=>[l(n(Q),{size:n(K)},null,8,["size"]),t(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024)):c.data.dataplaneType==="standard"?(o(),y(B,{key:1,class:"traffic","data-testid":"dataplane-traffic"},{default:a(()=>[s("div",At,[l(O,null,{title:a(()=>[l(n(W),{display:"inline-block",decorative:"",size:n(K)},null,8,["size"]),t(`
                  Inbounds
                `)]),default:a(()=>[t(),l(z,{type:"inbound"},{default:a(()=>[l(P,{items:c.data.dataplane.networking.inbounds},{default:a(({items:i})=>[(o(!0),p(m,null,x(i,d=>(o(),p(m,{key:`${d.port}`},[(o(!0),p(m,null,x([(v||{inbounds:[]}).inbounds.find(h=>`${h.port}`==`${d.port}`)],h=>(o(),y(R,{key:h,protocol:d.protocol,traffic:typeof I>"u"?h:{name:"",protocol:d.protocol,port:`${d.port}`}},{default:a(()=>[l(S,{to:{name:(j=>j.includes("bound")?j.replace("-outbound-","-inbound-"):"data-plane-inbound-summary-overview-view")(String(n(k).name)),params:{service:`localhost_${d.port}`},query:{inactive:f.params.inactive?null:void 0}}},{default:a(()=>[t(`
                            :`+r(d.port),1)]),_:2},1032,["to"]),t(),l(X,{tags:[{label:"kuma.io/service",value:d.tags["kuma.io/service"]}]},null,8,["tags"])]),_:2},1032,["protocol","traffic"]))),128))],64))),128))]),_:2},1032,["items"])]),_:2},1024)]),_:2},1024),t(),l(O,null,H({title:a(()=>[l(n(J),{display:"inline-block",decorative:"",size:n(K)},null,8,["size"]),t(),Ft]),default:a(()=>[t(),t(),typeof I>"u"?(o(),p(m,{key:0},[typeof v>"u"?(o(),y(pt,{key:0})):(o(),p(m,{key:1},[l(z,{type:"passthrough"},{default:a(()=>[l(R,{protocol:"passthrough",traffic:v.passthrough},{default:a(()=>[t(`
                        Non mesh traffic
                      `)]),_:2},1032,["traffic"])]),_:2},1024),t(),l(P,{predicate:f.params.inactive?void 0:i=>{var d,h;return((i.protocol==="tcp"?(d=i.tcp)==null?void 0:d.downstream_cx_rx_bytes_total:(h=i.http)==null?void 0:h.downstream_rq_total)??0)>0},items:v.outbounds},{default:a(({items:i})=>[i.length>0?(o(),y(z,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:a(()=>[(o(!0),p(m,null,x(i,d=>(o(),y(R,{key:`${d.name}`,protocol:d.protocol,traffic:d},{default:a(()=>[l(S,{to:{name:(h=>h.includes("bound")?h.replace("-inbound-","-outbound-"):"data-plane-outbound-summary-overview-view")(String(n(k).name)),params:{service:d.name},query:{inactive:f.params.inactive?null:void 0}}},{default:a(()=>[t(r(d.name),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic"]))),128))]),_:2},1024)):T("",!0)]),_:2},1032,["predicate","items"])],64))],64)):(o(),y(rt,{key:1}))]),_:2},[v?{name:"actions",fn:a(()=>[l(M,{modelValue:f.params.inactive,"onUpdate:modelValue":i=>f.params.inactive=i,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:a(()=>[t(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(),l(q,{appearance:"primary",onClick:E},{default:a(()=>[l(n(Q),{size:n(K)},null,8,["size"]),t(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024)):T("",!0),t(),l(A,null,{default:a(i=>[i.route.name!==f.name?(o(),y(mt,{key:0,width:"670px",onClose:function(d){f.replace({name:"data-plane-detail-view",params:{mesh:f.params.mesh,dataPlane:f.params.dataPlane},query:{inactive:f.params.inactive?null:void 0}})}},{default:a(()=>[(o(),y(dt(i.Component),{"dataplane-type":c.data.dataplaneType,gateway:c.data.dataplane.networking.gateway,inbounds:i.route.name.includes("-inbound-")?c.data.dataplane.networking.inbounds:[],data:i.route.name.includes("-inbound-")?(v==null?void 0:v.inbounds)||[]:(v==null?void 0:v.outbounds)||[]},null,8,["dataplane-type","gateway","inbounds","data"]))]),_:2},1032,["onClose"])):T("",!0)]),_:2},1024),t(),s("div",Gt,[s("h2",null,r(n(e)("data-planes.routes.item.mtls.title")),1),t(),c.data.dataplaneInsight.mTLS?(o(!0),p(m,{key:0},x([c.data.dataplaneInsight.mTLS],i=>(o(),y(B,{key:i,class:"mt-4"},{default:a(()=>[s("div",Ot,[l(D,null,{title:a(()=>[t(r(n(e)("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:a(()=>[t(r(n(u)(i.certificateExpirationTime)),1)]),_:2},1024),t(),l(D,null,{title:a(()=>[t(r(n(e)("data-planes.routes.item.mtls.generation_time.title")),1)]),body:a(()=>[t(r(n(u)(i.lastCertificateRegeneration)),1)]),_:2},1024),t(),l(D,null,{title:a(()=>[t(r(n(e)("data-planes.routes.item.mtls.regenerations.title")),1)]),body:a(()=>[t(r(n(e)("common.formats.integer",{value:i.certificateRegenerations})),1)]),_:2},1024),t(),l(D,null,{title:a(()=>[t(r(n(e)("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:a(()=>[t(r(i.issuedBackend),1)]),_:2},1024),t(),l(D,null,{title:a(()=>[t(r(n(e)("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:a(()=>[s("ul",null,[(o(!0),p(m,null,x(i.supportedBackends,d=>(o(),p("li",{key:d},r(d),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(o(),y(F,{key:1,class:"mt-4",appearance:"warning"},{alertMessage:a(()=>[s("div",{innerHTML:n(e)("data-planes.routes.item.mtls.disabled")},null,8,Yt)]),_:1}))]),t(),c.data.dataplaneInsight.subscriptions.length>0?(o(),p("div",Zt,[s("h2",null,r(n(e)("data-planes.routes.item.subscriptions.title")),1),t(),l(B,{class:"mt-4"},{default:a(()=>[l(vt,{subscriptions:c.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):T("",!0)])]),_:2},[C.value.length>0||I?{name:"notifications",fn:a(()=>[s("ul",Rt,[(o(!0),p(m,null,x(C.value,i=>(o(),p("li",{key:i.kind,"data-testid":`warning-${i.kind}`,innerHTML:n(e)(`common.warnings.${i.kind}`,i.payload)},null,8,zt))),128)),t(),I?(o(),p("li",Mt,[t(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,r(I.toString()),1),t(`)
            `)])):T("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),sa=L(Ht,[["__scopeId","data-v-1b209611"]]);export{sa as default};