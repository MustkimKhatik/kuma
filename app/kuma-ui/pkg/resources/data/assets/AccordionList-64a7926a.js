import{d as v,ao as m,t as i,f as y,o as c,j as l,m as A,Q as s,l as h,h as x,w as b,k as O,T as I,x as L,q as p,ap as g}from"./index-77212499.js";const $=["aria-expanded"],k={key:0,class:"accordion-item-content","data-testid":"accordion-item-content"},B=v({__name:"AccordionItem",setup(r){const e=m("parentAccordion"),t=i(null),n=y(()=>e===void 0?!1:e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.includes(t.value):t.value===e.active.value);e!==void 0&&(t.value=e.count.value++);function o(){n.value?u():_()}function u(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.splice(e.active.value.indexOf(t.value),1):e.active.value=null)}function _(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.push(t.value):e.active.value=t.value)}function d(a){a instanceof HTMLElement&&(a.style.height=`${a.scrollHeight}px`)}function f(a){a instanceof HTMLElement&&(a.style.height="auto")}return(a,N)=>(c(),l("li",{class:L(["accordion-item",{active:n.value}])},[A("button",{class:"accordion-item-header",type:"button","aria-expanded":n.value?"true":"false","data-testid":"accordion-item-button",onClick:o},[s(a.$slots,"accordion-header",{},void 0,!0)],8,$),h(),x(I,{name:"accordion",onEnter:d,onAfterEnter:f,onBeforeLeave:d},{default:b(()=>[n.value?(c(),l("div",k,[s(a.$slots,"accordion-content",{},void 0,!0)])):O("",!0)]),_:3})],2))}});const V=p(B,[["__scopeId","data-v-53a0b6ce"]]),C={class:"accordion-list"},E=v({__name:"AccordionList",props:{initiallyOpen:{type:[Number,Array],required:!1,default:null},multipleOpen:{type:Boolean,required:!1,default:!1}},setup(r){const e=r,t=i(0),n=i(e.initiallyOpen!==null?e.initiallyOpen:e.multipleOpen?[]:null);return g("parentAccordion",{multipleOpen:e.multipleOpen,active:n,count:t}),(o,u)=>(c(),l("ul",C,[s(o.$slots,"default",{},void 0,!0)]))}});const q=p(E,[["__scopeId","data-v-bdbadd5e"]]);export{V as A,q as a};