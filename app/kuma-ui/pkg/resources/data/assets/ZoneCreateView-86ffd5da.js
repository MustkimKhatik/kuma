import{z as G,s as M,D as T,u as O,i as R,e as N,X as B}from"./kongponents.es-d381709c.js";import{d as Z,u as D,c as y,o as z,j as E,i as t,t as o,e as n,h as e,g as l,p as W,m as X,w as u,z as x,r as f,b as S,f as $,F as A,R as j}from"./index-61cef882.js";import{_ as m}from"./CodeBlock.vue_vue_type_style_index_0_lang-4f359e86.js";import{a as H,d as K,b as q,u as J}from"./index-01e79acb.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{E as Q}from"./ErrorBlock-e115e1aa.js";import{_ as Y}from"./EntityScanner.vue_vue_type_script_setup_true_lang-2351ed11.js";const ee=p=>(W("data-v-f9aa9fb7"),p=p(),X(),p),ne={href:"https://helm.sh/docs/intro/install/"},te=ee(()=>t("p",null,"On your local machine, create a namespace in your Kubernetes cluster and pull down the kong Helm repo.",-1)),oe={class:"k-input-label mt-4"},se={class:"mt-4"},ae=Z({__name:"ZoneCreateKubernetesInstructions",props:{zoneName:{type:String,required:!0},zoneIngressEnabled:{type:Boolean,required:!0},zoneEgressEnabled:{type:Boolean,required:!0},token:{type:String,required:!0},base64EncodedToken:{type:String,required:!0}},setup(p){const s=p,k=H(),r=K(),a=q(),b=D(),v=y(()=>a.t("zones.form.kubernetes.secret.command",{token:s.base64EncodedToken}).trim()),h=y(()=>{const i={zoneName:s.zoneName,globalKdsAddress:r(),zoneIngressEnabled:String(s.zoneIngressEnabled),zoneEgressEnabled:String(s.zoneEgressEnabled)};return typeof b.params.virtualControlPlaneId=="string"&&(i.controlPlaneId=b.params.virtualControlPlaneId),a.t("zones.form.kubernetes.connectZone.config",i).trim()});return(i,g)=>(z(),E("div",null,[t("h3",null,"1. "+o(n(a).t("zones.form.kubernetes.prerequisites.title")),1),e(),t("ul",null,[t("li",null,[t("b",null,o(n(a).t("zones.form.kubernetes.prerequisites.step1Label"))+o(s.zoneIngressEnabled?" "+n(a).t("zones.form.kubernetes.prerequisites.step1LabelAddendum"):""),1),e(`:
        `+o(n(a).t("zones.form.kubernetes.prerequisites.step1Description",{productName:n(k)("KUMA_PRODUCT_NAME")})),1)]),e(),t("li",null,[t("b",null,o(n(a).t("zones.form.kubernetes.prerequisites.step2Label")),1),e(`:
        `+o(n(a).t("zones.form.kubernetes.prerequisites.step2Description")),1)]),e(),t("li",null,[t("a",ne,o(n(a).t("zones.form.kubernetes.prerequisites.step3LinkTitle")),1),e(" "+o(n(a).t("zones.form.kubernetes.prerequisites.step3Tail")),1)])]),e(),t("h3",null,"2. "+o(n(a).t("zones.form.kubernetes.helm.title")),1),e(),te,e(),t("ol",null,[t("li",null,[e(o(n(a).t("zones.form.kubernetes.helm.step1Description"))+" ",1),l(m,{id:"zone-kubernetes-create-namespace",class:"mt-4",code:n(a).t("zones.form.kubernetes.helm.step1Command"),language:"bash"},null,8,["code"])]),e(),t("li",null,[e(o(n(a).t("zones.form.kubernetes.helm.step2Description"))+" ",1),l(m,{id:"zone-kubernetes-add-charts-repo",class:"mt-4",code:n(a).t("zones.form.kubernetes.helm.step2Command"),language:"bash"},null,8,["code"])]),e(),t("li",null,[e(o(n(a).t("zones.form.kubernetes.helm.step3Description"))+" ",1),l(m,{id:"zone-kubernetes-repo-update",class:"mt-4",code:n(a).t("zones.form.kubernetes.helm.step3Command"),language:"bash"},null,8,["code"])])]),e(),t("h3",null,"3. "+o(n(a).t("zones.form.kubernetes.secret.title")),1),e(),t("p",null,o(n(a).t("zones.form.kubernetes.secret.description1")),1),e(),l(m,{id:"zone-kubernetes-token",class:"mt-4",code:s.token,language:"bash"},null,8,["code"]),e(),t("p",null,o(n(a).t("zones.form.kubernetes.secret.description2")),1),e(),l(m,{id:"zone-kubernetes-create-secret",class:"mt-4",code:v.value,language:"bash"},null,8,["code"]),e(),t("h3",null,"4. "+o(n(a).t("zones.form.kubernetes.connectZone.title")),1),e(),t("p",null,o(n(a).t("zones.form.kubernetes.connectZone.description1")),1),e(),t("span",oe,o(n(a).t("zones.form.kubernetes.connectZone.fileName")),1),e(),l(m,{id:"zone-kubernetes-config-code-block",code:h.value,language:"yaml"},null,8,["code"]),e(),t("p",se,o(n(a).t("zones.form.kubernetes.connectZone.description2")),1),e(),l(m,{id:"zone-kubernetes-command-code-block",class:"mt-4",code:n(a).t("zones.form.kubernetes.connectZone.command"),language:"bash"},null,8,["code"])]))}});const le=C(ae,[["__scopeId","data-v-f9aa9fb7"]]),re={class:"k-input-label mt-4"},ue={class:"mt-4"},ie=Z({__name:"ZoneCreateUniversalInstructions",props:{zoneName:{type:String,required:!0},token:{type:String,required:!0},base64EncodedToken:{type:String,required:!0}},setup(p){const s=p,k=K(),r=q(),a=D(),b=y(()=>{const v={zoneName:s.zoneName,globalKdsAddress:k(),token:s.base64EncodedToken};return typeof a.params.virtualControlPlaneId=="string"&&(v.controlPlaneId=a.params.virtualControlPlaneId),r.t("zones.form.universal.connectZone.config",v).trim()});return(v,h)=>(z(),E("div",null,[t("h3",null,"1. "+o(n(r).t("zones.form.universal.copySaveToken.title")),1),e(),l(n(G),{class:"mt-4",appearance:"info"},{alertMessage:u(()=>[e(o(n(r).t("zones.form.universal.copySaveToken.alertMessage")),1)]),_:1}),e(),l(m,{id:"zone-kubernetes-token",class:"mt-4",code:s.token,language:"bash"},null,8,["code"]),e(),t("h3",null,"2. "+o(n(r).t("zones.form.universal.connectZone.title")),1),e(),t("p",null,o(n(r).t("zones.form.universal.connectZone.description1")),1),e(),t("span",re,o(n(r).t("zones.form.universal.connectZone.fileName")),1),e(),l(m,{id:"zone-universal-config-code-block",class:"mt-4",code:b.value,language:"yaml"},null,8,["code"]),e(),t("p",ue,o(n(r).t("zones.form.universal.connectZone.description2")),1),e(),l(m,{id:"zone-universal-connect-command-code-block",class:"mt-4",code:n(r).t("zones.form.universal.connectZone.command"),language:"bash"},null,8,["code"])]))}});const ce=C(ie,[["__scopeId","data-v-9ef21d8f"]]),de={class:"app-title-bar"},me={class:"title-wrapper"},pe={class:"title"},be={class:"action-list"},ve=Z({__name:"WizardTitleBar",setup(p){return(s,k)=>(z(),E("div",de,[t("div",me,[l(n(M),{icon:"kong"}),e(),t("span",pe,[x(s.$slots,"title",{},void 0,!0)])]),e(),t("div",be,[x(s.$slots,"actions",{},void 0,!0)])]))}});const _e=C(ve,[["__scopeId","data-v-f0a75c34"]]),fe={class:"form-content"},ze={class:"form-wrapper mt-4"},ke={key:1,class:"form-wrapper mt-4"},ge={class:"k-input-label"},he={class:"radio-button-group"},ye={class:"k-input-label"},Ee={class:"radio-button-group"},Ie={class:"k-input-label"},Ze={class:"radio-button-group"},Ce={class:"mt-6"},Ve={class:"mt-2"},we=Z({__name:"ZoneCreateView",setup(p){const s=q(),k=J(),r=f(null),a=f(!1),b=f(null),v=f(!1),h=f(null),i=f(""),g=f("kubernetes"),V=f(!0),w=f(!0),I=y(()=>r.value!==null&&r.value.token?r.value.token:""),L=y(()=>I.value!==""?window.btoa(I.value):""),U=y(()=>i.value!=="");async function P(){a.value=!0,b.value=null;try{r.value=await k.createZone({name:i.value})}catch(d){d instanceof Error?b.value=d:console.error(d)}finally{a.value=!1}}async function F(){v.value=!1,h.value=null;try{const d=await k.getZoneOverview({name:i.value}),c=j(d.zoneInsight);v.value=c==="online"}catch(d){d instanceof Error?h.value=d:console.error(d)}}return(d,c)=>(z(),E(A,null,[l(_e,{class:"mb-6"},{title:u(()=>[e(o(n(s).t("zones.create.pageTitle")),1)]),actions:u(()=>[l(n(T),{appearance:"outline",to:{name:"zone-list-view"}},{default:u(()=>[e(o(n(s).t("zones.form.exit")),1)]),_:1})]),_:1}),e(),t("div",fe,[t("h1",null,o(n(s).t("zones.create.pageTitle")),1),e(),t("div",ze,[t("div",null,[l(n(O),{for:"zone-name"},{default:u(()=>[e(o(n(s).t("zones.form.nameLabel"))+` *
        `,1)]),_:1}),e(),l(n(R),{id:"zone-name",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=_=>i.value=_),type:"text",name:"zone-name","data-testid":"name-input",disabled:r.value!==null},null,8,["modelValue","disabled"])]),e(),l(n(T),{appearance:"creation",icon:a.value?"spinner":"plus",disabled:!U.value||a.value||r.value!==null,"data-testid":"create-zone-button",onClick:P},{default:u(()=>[e(o(n(s).t("zones.form.createZoneButtonLabel")),1)]),_:1},8,["icon","disabled"])]),e(),b.value!==null?(z(),S(Q,{key:0,class:"mt-4",error:b.value},{default:u(()=>[e(o(n(s).t("zones.create.errorTitle")),1)]),_:1},8,["error"])):$("",!0),e(),r.value!==null?(z(),E("div",ke,[t("div",null,[t("span",ge,o(n(s).t("zones.form.environmentLabel"))+` *
        `,1),e(),t("div",he,[l(n(N),{id:"zone-environment-universal",modelValue:g.value,"onUpdate:modelValue":c[1]||(c[1]=_=>g.value=_),"selected-value":"universal",name:"zone-environment","data-testid":"environment-universal-radio-button"},{default:u(()=>[e(o(n(s).t("zones.form.universalLabel")),1)]),_:1},8,["modelValue"]),e(),l(n(N),{id:"zone-environment-kubernetes",modelValue:g.value,"onUpdate:modelValue":c[2]||(c[2]=_=>g.value=_),"selected-value":"kubernetes",name:"zone-environment","data-testid":"environment-kubernetes-radio-button"},{default:u(()=>[e(o(n(s).t("zones.form.kubernetesLabel")),1)]),_:1},8,["modelValue"])])]),e(),g.value==="kubernetes"?(z(),E(A,{key:0},[t("div",null,[t("span",ye,o(n(s).t("zones.form.zoneIngressLabel"))+` *
          `,1),e(),t("div",Ee,[l(n(B),{id:"zone-ingress-enabled",modelValue:V.value,"onUpdate:modelValue":c[3]||(c[3]=_=>V.value=_),"data-testid":"ingress-input-switch"},{label:u(()=>[e(o(n(s).t("zones.form.zoneIngressEnabledLabel")),1)]),_:1},8,["modelValue"])])]),e(),t("div",null,[t("span",Ie,o(n(s).t("zones.form.zoneEgressLabel"))+` *
          `,1),e(),t("div",Ze,[l(n(B),{id:"zone-egress-enabled",modelValue:w.value,"onUpdate:modelValue":c[4]||(c[4]=_=>w.value=_),"data-testid":"egress-input-switch"},{label:u(()=>[e(o(n(s).t("zones.form.zoneEgressEnabledLabel")),1)]),_:1},8,["modelValue"])])])],64)):$("",!0),e(),t("h2",Ce,o(n(s).t("zones.form.connectZone")),1),e(),g.value==="universal"?(z(),S(ce,{key:1,"zone-name":i.value,token:I.value,"base64-encoded-token":L.value},null,8,["zone-name","token","base64-encoded-token"])):(z(),S(le,{key:2,"zone-name":i.value,"zone-ingress-enabled":V.value,"zone-egress-enabled":w.value,token:I.value,"base64-encoded-token":L.value},null,8,["zone-name","zone-ingress-enabled","zone-egress-enabled","token","base64-encoded-token"])),e(),l(Y,{"loader-function":F,"has-error":h.value!==null,"can-complete":v.value},{"loading-title":u(()=>[e(o(n(s).t("zones.form.scan.waitTitle")),1)]),"complete-title":u(()=>[e(o(n(s).t("zones.form.scan.completeTitle")),1)]),"complete-content":u(()=>[t("p",null,o(n(s).t("zones.form.scan.completeDescription",{name:i.value})),1),e(),t("p",Ve,[l(n(T),{appearance:"primary",to:{name:"zone-detail-view",params:{zone:i.value}}},{default:u(()=>[e(o(n(s).t("zones.form.scan.completeButtonLabel",{name:i.value})),1)]),_:1},8,["to"])])]),"error-title":u(()=>[t("h3",null,o(n(s).t("zones.form.scan.errorTitle")),1)]),"error-content":u(()=>[t("p",null,o(n(s).t("zones.form.scan.errorDescription")),1)]),_:1},8,["has-error","can-complete"])])):$("",!0)])],64))}});const xe=C(we,[["__scopeId","data-v-358a7fb3"]]);export{xe as default};