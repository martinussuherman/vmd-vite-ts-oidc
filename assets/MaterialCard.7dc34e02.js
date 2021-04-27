import{d as t,u as a,w as s,x as e,g as i,f as l,y as o}from"./vendor.c2655881.js";import{n}from"./main.d508d02b.js";const r={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},c={};var d=n(r,(function(){var n=this,r=n.$createElement,c=n._self._c||r;return c(t,n._b({staticClass:"v-card--material pa-3",class:n.classes},"v-card",n.$attrs,!1),[c("div",{staticClass:"d-flex grow flex-wrap"},[n.avatar?c(a,{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[c(s,{attrs:{src:n.avatar}})],1):c(e,{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!n.$slots.image},attrs:{color:n.color,"max-height":n.icon?90:void 0,width:n.icon?"auto":"100%",elevation:"6",dark:""}},[n.$slots.heading?n._t("heading"):n.$slots.image?n._t("image"):n.title&&!n.icon?c("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:n._s(n.title)}}):n.icon?c(i,{attrs:{size:"32"},domProps:{textContent:n._s(n.icon)}}):n._e(),n._v(" "),n.text?c("div",{staticClass:"headline font-weight-thin",domProps:{textContent:n._s(n.text)}}):n._e()],2),n._v(" "),n.$slots["after-heading"]?c("div",{staticClass:"ml-6"},[n._t("after-heading")],2):n.icon&&n.title?c("div",{staticClass:"ml-4"},[c("div",{staticClass:"card-title font-weight-light",domProps:{textContent:n._s(n.title)}})]):n._e()],1),n._v(" "),n._t("default"),n._v(" "),n.$slots.actions?[c(l,{staticClass:"mt-2"}),n._v(" "),c(o,{staticClass:"pb-0"},[n._t("actions")],2)]:n._e()],2)}),[],!1,(function(t){for(let a in c)this[a]=c[a]}),null,null,null);d.options.__file="src/components/base/MaterialCard.vue";var h=d.exports;export{h as _};
