import{d as f,y as g,l as y,c as v,o as r,a as u,w as e,b as n,e as s,h as a,i as d,t as h,j as z,z as p}from"./index-d6e04092.js";import{O as V,a as x,b as G}from"./OnboardingPage-c6ac9166.js";import{h as w,i as C,f as D,A as S,_ as B,e as M}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-11eb67ee.js";import"./store-1a3c4ff3.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";const O={class:"graph-list mb-6"},T={class:"radio-button-group"},k=f({__name:"DeploymentTypes",setup(A){const m=w(),c={standalone:C(),"multi-zone":m},{t:i}=D(),_=g(),o=y(_("use zones")?"multi-zone":"standalone"),b=v(()=>c[o.value]);return(U,t)=>(r(),u(B,null,{default:e(()=>[n(N,{title:s(i)("onboarding.routes.deployment-types.title")},null,8,["title"]),a(),n(S,null,{default:e(()=>[n(V,{"with-image":""},{header:e(()=>[n(x,null,{title:e(()=>[a(`
              Learn about deployments
            `)]),description:e(()=>[d("p",null,h(s(i)("common.product.name"))+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[d("div",O,[(r(),u(z(b.value)))]),a(),d("div",T,[n(s(p),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[a(`
              Standalone deployment
            `)]),_:1},8,["modelValue"]),a(),n(s(p),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[a(`
              Multi-zone deployment
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[n(G,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1})]),_:1})]),_:1}))}});const E=M(k,[["__scopeId","data-v-ebbd0722"]]);export{E as default};