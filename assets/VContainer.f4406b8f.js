/* empty css              *//* empty css              */import{V as t}from"./main.08b70a06.js";import{m as r}from"./mergeData.c85918c4.js";var a,s=(a="container",t.extend({name:`v-${a}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:r,data:s,children:i}){s.staticClass=`${a} ${s.staticClass||""}`.trim();const{attrs:e}=s;if(e){s.attrs={};const t=Object.keys(e).filter((t=>{if("slot"===t)return!1;const r=e[t];return t.startsWith("data-")?(s.attrs[t]=r,!1):r||"string"==typeof r}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),t(r.tag,s,i)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:s,children:i}){let e;const{attrs:n}=s;return n&&(s.attrs={},e=Object.keys(n).filter((t=>{if("slot"===t)return!1;const r=n[t];return t.startsWith("data-")?(s.attrs[t]=r,!1):r||"string"==typeof r}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,r(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(e||[])}),i)}});export{s as _};
