var r=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(e,o,t)=>o in e?r(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;import{K as a,V as l}from"./vendor.7f795ca3.js";import{C as i}from"./Emit.fff78aba.js";import{n as c}from"./main.87e7283d.js";var s=Object.defineProperty,p=Object.getOwnPropertyDescriptor;let u=class extends l{constructor(){var r,e;super(...arguments),n(this,"symbol"!=typeof(r="oidcSignInPopupCallback")?r+"":r,e)}mounted(){this.oidcSignInPopupCallback().then((r=>{console.log(null==r?void 0:r.profile.name)})).catch((r=>{console.error(r),this.$router.push("/oidc-callback-error")}))}};u=((r,e,o,t)=>{for(var n,a=t>1?void 0:t?p(e,o):e,l=r.length-1;l>=0;l--)(n=r[l])&&(a=(t?n(e,o,a):n(a))||a);return t&&a&&s(e,o,a),a})([i({methods:((r,a)=>{for(var l in a||(a={}))o.call(a,l)&&n(r,l,a[l]);if(e)for(var l of e(a))t.call(a,l)&&n(r,l,a[l]);return r})({},a("oidcStore",{oidcSignInPopupCallback:"oidcSignInPopupCallback"}))})],u);const f={};var b=c(u,(function(){var r=this.$createElement;return(this._self._c||r)("div")}),[],!1,d,null,null,null);function d(r){for(let e in f)this[e]=f[e]}var m=function(){return b.exports}();export{m as default};
