import{_ as i}from"./mergeData.33032ea6.js";import{a as p}from"./index.bf8f8f41.js";import{S as l}from"./index.881ea6df.js";import{m}from"./mixins.920312b6.js";import{d as o,n as _}from"./main.1db1b49a.js";import{_ as c}from"./VContainer.6ed9572b.js";import{a as u,_ as n}from"./VRow.6c92fe07.js";import{_ as d}from"./VSpacer.48af1fcd.js";import{_ as f}from"./VIcon.9026c1b5.js";import"./vuex-oidc.esm.585ece34.js";/* empty css              *//* empty css              */var v=m(i,p("footer",["height","inset"]),l).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...i.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(!!this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(!!this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(!!this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...i.options.computed.styles.call(this),height:isNaN(t)?t:o(t),left:o(this.computedLeft),right:o(this.computedRight),bottom:o(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const s=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,s,this.$slots.default)}}),g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(v,{attrs:{id:"dashboard-core-footer"}},[e(c,[e(u,{attrs:{align:"center","no-gutters":""}},[t._l(t.links,function(r,h){return e(n,{key:h,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[e("a",{staticClass:"mr-0 grey--text text--darken-3",attrs:{href:r.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(r.text)}})])}),e(d,{staticClass:"hidden-sm-and-down"}),e(n,{attrs:{cols:"12",md:"auto"}},[e("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v(" \xA9 2019, made with "),e(f,{attrs:{size:"18"}},[t._v(" mdi-heart ")]),t._v(" by "),e("a",{attrs:{href:"https://www.creative-tim.com"}},[t._v("Creative Tim")]),t._v(" for a better web. ")],1)])],2)],1)],1)},b=[];const x={name:"DashboardCoreFooter",data:()=>({links:[{href:"#",text:"Creative Tim"},{href:"#",text:"About Us"},{href:"#",text:"Blog"},{href:"#",text:"Licenses"}]})},a={};var y=_(x,g,b,!1,C,null,null,null);function C(t){for(let s in a)this[s]=a[s]}var A=function(){return y.exports}();export{A as default};
