import{d as A,u as E,r as n,v as S,A as x,D as Z,j as p,e as b,b as V,i as B,g as k,h as L,f as M,G as w,o as i}from"./index-ff8f00ce.js";import{_ as O}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-fd0292b8.js";import{_ as P}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-8b120a53.js";import{D as q}from"./DataOverview-40f12b14.js";import{u as C}from"./store-c25c3bc2.js";import{u as F}from"./index-e77322c8.js";import{Q as f}from"./QueryParameter-70743f73.js";import"./kongponents.es-f7d67eb2.js";import"./AccordionList-a08d2c4c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DefinitionListItem-ef94942e.js";import"./EnvoyData-f1f45e83.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-73bd2930.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-f9ff563c.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-6ea2d4b8.js";import"./ErrorBlock-fb5de6a0.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-ccbf9197.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-e918ca3b.js";import"./TabsWidget-07bc6739.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-fad15eb7.js";import"./StatusBadge-16fb9416.js";const G={class:"zoneingresses"},Q={key:1,class:"kcard-stack"},R={class:"kcard-border"},U={key:0,class:"kcard-border"},fe=A({__name:"ZoneIngressListView",props:{selectedZoneIngressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const l=z,v=F(),D={title:"No Data",message:"There are no Zone Ingresses present."},g=E(),_=C(),u=n(!0),c=n(null),r=n({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),o=n(null),y=n(null),h=n(l.offset);S(()=>g.params.mesh,function(){g.name==="zone-ingress-list-view"&&m(0)}),x(function(){N(l.offset)});function N(e){_.getters["config/getMulticlusterStatus"]&&m(e)}async function m(e){var a;h.value=e,f.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=w;try{const{items:s,next:d}=await v.getAllZoneIngressOverviews({size:t,offset:e});y.value=d,r.value.data=T(s??[]),await I({name:l.selectedZoneIngressName??((a=r.value.data[0])==null?void 0:a.entity.name)})}catch(s){r.value.data=[],o.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function T(e){return e.map(t=>{const{name:a}=t,s={name:"zone-ingress-detail-view",params:{zoneIngress:a}},d=Z(t.zoneIngressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function I({name:e}){if(e===void 0){o.value=null,f.set("zoneIngress",null);return}try{o.value=await v.getZoneIngressOverview({name:e}),f.set("zoneIngress",e)}catch(t){console.error(t)}}return(e,t)=>{var a;return i(),p("div",G,[b(_).getters["config/getMulticlusterStatus"]===!1?(i(),V(O,{key:0})):(i(),p("div",Q,[B("div",R,[k(q,{"selected-entity-name":(a=o.value)==null?void 0:a.name,"page-size":b(w),"is-loading":u.value,error:c.value,"empty-state":D,"table-data":r.value,"table-data-is-empty":r.value.data.length===0,next:y.value,"page-offset":h.value,onTableAction:I,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),L(),o.value!==null?(i(),p("div",U,[k(P,{"zone-ingress-overview":o.value},null,8,["zone-ingress-overview"])])):M("",!0)]))])}}});export{fe as default};