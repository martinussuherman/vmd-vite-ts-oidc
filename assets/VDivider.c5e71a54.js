var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,a=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,s=(e,s)=>{for(var o in s||(s={}))r.call(s,o)&&a(e,o,s[o]);if(t)for(var o of t(s))i.call(s,o)&&a(e,o,s[o]);return e};import{T as o}from"./mixins.486a061e.js";var l=o.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let r;return this.$attrs.role&&"separator"!==this.$attrs.role||(r=this.vertical?"vertical":"horizontal"),e("hr",{class:s({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:s({role:"separator","aria-orientation":r},this.$attrs),on:this.$listeners})}});export{l as _};
