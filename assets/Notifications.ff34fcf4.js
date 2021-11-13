import{B as x}from"./VComponent.cf2cca4b.js";import{n as u}from"./main.f0f00b8b.js";import{C,h as _,l as i,D as w,i as S,j as l,f as n,e as c,m as d,E as m,F as h,G as v,y as T,x as p,w as g}from"./vendor.177a8b68.js";var V=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"},[o("h5",{staticClass:"font-weight-light"},[a._v(" "+a._s(a.subheading)+" "),a.text?[o("span",{staticClass:"subtitle-1",domProps:{textContent:a._s(a.text)}})]:a._e()],2),o("div",{staticClass:"pt-2"},[a._t("default")],2)])},j=[];const A={name:"Subheading",props:{subheading:{type:String,default:""},text:{type:String,default:""}}},b={};var M=u(A,V,j,!1,D,null,null,null);function D(a){for(let e in b)this[e]=b[e]}var f=function(){return M.exports}(),R=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o(C,a._g(a._b({staticClass:"v-alert--material",attrs:{dark:""},scopedSlots:a._u([a.$attrs.icon?{key:"prepend",fn:function(){return[o(_,{staticClass:"v-alert__icon elevation-6 white",attrs:{light:"",color:a.$attrs.color}},[a._v(" "+a._s(a.$attrs.icon)+" ")])]},proxy:!0}:null,a.$attrs.dismissible?{key:"close",fn:function(t){var s=t.toggle;return[o(i,{attrs:{"aria-label":a.$vuetify.lang.t("$vuetify.close"),color:"",icon:"",small:""},on:{click:s}},[o(_,[a._v(" $vuetify.icons.cancel ")])],1)]}}:null],null,!0)},"v-alert",a.$attrs,!1),a.$listeners),[a._t("default")],2)},E=[];const N={name:"MaterialAlert"},y={};var B=u(N,R,E,!1,F,null,null,null);function F(a){for(let e in y)this[e]=y[e]}var r=function(){return B.exports}(),I=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o(w,a._b({staticClass:"v-snackbar--material",model:{value:a.internalValue,callback:function(t){a.internalValue=t},expression:"internalValue"}},"v-snackbar",Object.assign({},a.$attrs,{color:"transparent"}),!1),[o(r,{staticClass:"ma-0",attrs:{color:a.$attrs.color,dismissible:a.dismissible,type:a.type,dark:""},model:{value:a.internalValue,callback:function(t){a.internalValue=t},expression:"internalValue"}},[a._t("default")],2)],1)},Y=[];const P={name:"BaseMaterialSnackbar",props:{dismissible:{type:Boolean,default:!0},type:{type:String,default:""},value:Boolean},data(){return{internalValue:this.value}},watch:{internalValue(a,e){a!==e&&this.$emit("input",a)},value(a,e){a!==e&&(this.internalValue=a)}}},k={};var L=u(P,I,Y,!1,O,null,null,null);function O(a){for(let e in k)this[e]=k[e]}var W=function(){return L.exports}(),G=function(){var a,e=this,o=e.$createElement,t=e._self._c||o;return t(S,{attrs:{id:"alerts",fluid:"",tag:"section"}},[t("base-v-component",{attrs:{heading:"Alerts",link:"components/alerts"}}),t(l,[t(n,{attrs:{cols:"12",md:"6"}},[t(c,[t(d,[t(f,{attrs:{subheading:"Notification Style"}}),t(r,{attrs:{color:"info",dark:""}},[e._v(" This is a plain notification. ")]),t(r,{attrs:{color:"info",dark:"",dismissible:""}},[e._v(" This is a notification with close button. ")]),t(r,{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")]),t(r,{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1)],1)],1),t(n,{attrs:{cols:"12",md:"6"}},[t(c,[t(d,[t(f,{attrs:{subheading:"Notification states"}}),e._l(e.colors,function(s){return t(r,{key:s,attrs:{color:s,dark:"",dismissible:""}},[t("span",{staticClass:"text-uppercase",domProps:{textContent:e._s(s)}}),e._v(' \u2014 This is a regular alert made with the color of "'+e._s(s)+'" ')])}),t(r,{attrs:{color:"secondary",dark:"",dismissible:""}},[t("span",[e._v("PRIMARY")]),e._v(' \u2014 This is a regular alert made with the color "secondary" ')]),t(r,{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[t("span",[e._v("PINK DARKEN-1")]),e._v(' \u2014 This is a regular alert made with the color "pink darken-1" ')])],2)],1)],1),t(n,{attrs:{cols:"12"}},[t(c,[t(d,{staticClass:"text-center"},[t(f,{staticClass:"text-center",attrs:{subheading:"Snackbar Locations"}}),t(l,{staticClass:"mt-n12",attrs:{justify:"center"}},[t(n,{attrs:{cols:"10",lg:"8"}},[t(l,e._l(e.directions,function(s){return t(n,{key:s,attrs:{cols:"4"}},[t(i,{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(J){e.randomColor(),e.direction=s,e.snackbar=!0}}},[e._v(" "+e._s(s)+" ")])],1)}),1)],1)],1),t(f,{staticClass:"text-center",attrs:{subheading:"Dialogs"}}),t(l,{staticClass:"mt-n12",attrs:{justify:"center"}},[t(n,{attrs:{cols:"10",lg:"8"}},[t(l,[t(n,{attrs:{cols:"4"}},[t(i,{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(s){e.dialog=!0}}},[e._v(" Classic Dialog ")])],1),t(n,{attrs:{cols:"4"}},[t(i,{attrs:{color:"info",default:"",rounded:""},on:{click:function(s){e.dialog2=!0}}},[e._v(" Notice Modal ")])],1),t(n,{attrs:{cols:"4"}},[t(i,{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(s){e.dialog3=!0}}},[e._v(" Small Alert Modal ")])],1)],1)],1)],1)],1)],1)],1)],1),t(W,e._b({attrs:{type:e.color},model:{value:e.snackbar,callback:function(s){e.snackbar=s},expression:"snackbar"}},"material-snackbar",(a={},a[e.parsedDirection[0]]=!0,a[e.parsedDirection[1]]=!0,a),!1),[e._v(" Welcome to "),t("span",{staticClass:"font-weight-bold"},[e._v("\xA0MATERIAL DASHBOARD\xA0")]),e._v(" \u2014 a beautiful admin panel for every web developer. ")]),t(m,{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(s){e.dialog=s},expression:"dialog"}},[t(c,{staticClass:"text-center"},[t(h,[e._v(" Dialog Title "),t(v),t(_,{attrs:{"aria-label":"Close"},on:{click:function(s){e.dialog=!1}}},[e._v(" mdi-close ")])],1),t(d,[e._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ")]),t(T,[t(v),t(i,{attrs:{color:"error",text:""},on:{click:function(s){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1),t(m,{attrs:{"max-width":"500"},model:{value:e.dialog2,callback:function(s){e.dialog2=s},expression:"dialog2"}},[t(c,[t(h,[e._v(" How do you become an affiliate? "),t(v),t(_,{attrs:{"aria-label":"Close"},on:{click:function(s){e.dialog2=!1}}},[e._v(" mdi-close ")])],1),t(d,{staticClass:"body-1 text-center"},[t(l,[t(n,{attrs:{cols:"12",md:"8"}},[t("div",[t("div",[t("strong",[e._v("1. Register")])]),t("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you. ")])])]),t(n,{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[t(p,[t(g,{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),t(n,{attrs:{cols:"12",md:"8"}},[t("div",[t("div",[t("strong",[e._v("2. Apply")])]),t("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at "),t("a",{attrs:{href:"http://www.creative-tim.com/"}},[e._v("Creative Tim")]),e._v(". You can choose a social network or go for the classic version, whatever works best for you. ")])])]),t(n,{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[t(p,[t(g,{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),t(n,{attrs:{cols:"12"}},[e._v(" If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help! ")])],1),t(i,{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(s){e.dialog2=!1}}},[e._v(" Sounds good ")])],1)],1)],1),t(m,{attrs:{"max-width":"300"},model:{value:e.dialog3,callback:function(s){e.dialog3=s},expression:"dialog3"}},[t(c,[t(h,[e._v(" Are you sure? "),t(v),t(_,{attrs:{"aria-label":"Close"},on:{click:function(s){e.dialog3=!1}}},[e._v(" mdi-close ")])],1),t(d,{staticClass:"pb-6 pt-12 text-center"},[t(i,{staticClass:"mr-3",attrs:{text:""},on:{click:function(s){e.dialog3=!1}}},[e._v(" Nevermind ")]),t(i,{attrs:{color:"success",text:""},on:{click:function(s){e.dialog3=!1}}},[e._v(" Yes ")])],1)],1)],1)],1)},H=[];const K={name:"DashboardNotifications",components:{BaseVComponent:x},data:()=>({color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}),computed:{parsedDirection(){return this.direction.split(" ")}},methods:{randomColor(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}},$={};var q=u(K,G,H,!1,z,null,null,null);function z(a){for(let e in $)this[e]=$[e]}var Z=function(){return q.exports}();export{Z as default};
