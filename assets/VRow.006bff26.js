var e=Object.assign;/* empty css              */import{V as t,u as n}from"./main.08b70a06.js";import{m as l}from"./mergeData.c85918c4.js";const a=["sm","md","lg","xl"],r=a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),o=a.reduce(((e,t)=>(e["offset"+n(t)]={type:[String,Number],default:null},e)),{}),s=a.reduce(((e,t)=>(e["order"+n(t)]={type:[String,Number],default:null},e)),{}),i={col:Object.keys(r),offset:Object.keys(o),order:Object.keys(s)};function u(e,t,n){let l=e;if(null!=n&&!1!==n){if(t){l+=`-${t.replace(e,"")}`}return"col"!==e||""!==n&&!0!==n?(l+=`-${n}`,l.toLowerCase()):l.toLowerCase()}}const c=new Map;var f=t.extend({name:"v-col",functional:!0,props:e(e(e(e(e(e({cols:{type:[Boolean,String,Number],default:!1}},r),{offset:{type:[String,Number],default:null}}),o),{order:{type:[String,Number],default:null}}),s),{alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}}),render(e,{props:t,data:n,children:a,parent:r}){let o="";for(const l in t)o+=String(t[l]);let s=c.get(o);if(!s){let e;for(e in s=[],i)i[e].forEach((n=>{const l=t[n],a=u(e,n,l);a&&s.push(a)}));const n=s.some((e=>e.startsWith("col-")));s.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),c.set(o,s)}return e(t.tag,l(n,{class:s}),a)}});const d=["sm","md","lg","xl"],g=["start","end","center"];function p(e,t){return d.reduce(((l,a)=>(l[e+n(a)]=t(),l)),{})}const y=e=>[...g,"baseline","stretch"].includes(e),m=p("align",(()=>({type:String,default:null,validator:y}))),b=e=>[...g,"space-between","space-around"].includes(e),S=p("justify",(()=>({type:String,default:null,validator:b}))),j=e=>[...g,"space-between","space-around","stretch"].includes(e),v=p("alignContent",(()=>({type:String,default:null,validator:j}))),h={align:Object.keys(m),justify:Object.keys(S),alignContent:Object.keys(v)},$={align:"align",justify:"justify",alignContent:"align-content"};function w(e,t,n){let l=$[e];if(null!=n){if(t){l+=`-${t.replace(e,"")}`}return l+=`-${n}`,l.toLowerCase()}}const C=new Map;var O=t.extend({name:"v-row",functional:!0,props:e(e(e(e(e({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},m),{justify:{type:String,default:null,validator:b}}),S),{alignContent:{type:String,default:null,validator:j}}),v),render(e,{props:t,data:n,children:a}){let r="";for(const l in t)r+=String(t[l]);let o=C.get(r);if(!o){let e;for(e in o=[],h)h[e].forEach((n=>{const l=t[n],a=w(e,n,l);a&&o.push(a)}));o.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),C.set(r,o)}return e(t.tag,l(n,{staticClass:"row",class:o}),a)}});export{f as _,O as a};
