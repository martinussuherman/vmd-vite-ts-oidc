import{h as t,d as o,m as s,j as a,e,l as n,g as i,H as r,x as l,I as c}from"./vendor.c2655881.js";import{n as d}from"./main.d508d02b.js";const m={};var _=d({name:"DashboardButtons",data:()=>({colors:["default","secondary","info","success","warning","error"],icons:{left:"mdi-chevron-left",right:"mdi-chevron-right",info:"mdi-exclamation",success:"mdi-check",warning:"mdi-alert",error:"mdi-close"},social:[{color:"#55ACEE",icon:"mdi-twitter",text:"Connect with Twitter"},{color:"#3B5998",icon:"mdi-facebook",text:"Share - 2.2K"},{color:"#DD4b39",icon:"mdi-google-plus",text:"Share on Google+"},{color:"#0976B4",icon:"mdi-linkedin",text:"Connect with LinkedIn"},{color:"#CC2127",icon:"mdi-pinterest",text:"Pint It - 212"},{color:"#E52D27",icon:"mdi-youtube",text:"View on Youtube"},{color:"#35465C",icon:"mdi-tumblr",text:"Repost"},{color:"#333333",icon:"mdi-github-circle",text:"Connect with Github"},{color:"#1769FF",icon:"mdi-behance",text:"Follow Us"},{color:"#EA4C89",icon:"mdi-dribbble",text:"Follow us on Dribbble"},{color:"#FF4500",icon:"mdi-reddit",text:"Repost - 232"}]})},(function(){var d=this,m=d.$createElement,_=d._self._c||m;return _(t,{attrs:{id:"buttons",fluid:"",tag:"section"}},[_("base-v-component",{attrs:{heading:"Buttons",link:"components/buttons"}}),d._v(" "),_(o,[_(s,{staticClass:"pt-0"},[_(a,[_(e,{attrs:{cols:"12",md:"6"}},[_("base-subheading",[_("h5",{staticClass:"font-weight-light"},[d._v("Pick your Color")])]),d._v(" "),_("div",d._l(d.colors,(function(t,o){return _(n,{key:o,staticClass:"ma-1",attrs:{elevation:"1",color:"default"===t?void 0:t}},[d._v("\n              "+d._s(t)+"\n            ")])})),1)],1),d._v(" "),_(e,{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[_("base-subheading",[_("h5",{staticClass:"font-weight-light"},[d._v("Buttons with Label")])]),d._v(" "),_("div",[d._l(["left","right"],(function(t,o){return _(n,{key:o,staticClass:"ma-1",attrs:{elevation:"1"}},[_(i,{class:"right"===t&&"order-last",attrs:{left:"left"===t,right:"right"===t},domProps:{textContent:d._s(d.icons[t])}}),d._v("\n              "+d._s(t)+"\n            ")],1)})),d._v(" "),d._l(d.colors.slice(2),(function(t,o){return _(n,{key:"btn-"+o,staticClass:"ma-1",attrs:{elevation:"1",color:"default"===t?void 0:t}},[_(i,{attrs:{left:""},domProps:{textContent:d._s(d.icons[t])}}),d._v("\n              "+d._s(t)+"\n            ")],1)}))],2)],1),d._v(" "),_(e,{attrs:{cols:"12",md:"6"}},[_("base-subheading",[_("h5",{staticClass:"font-weight-light"},[d._v("Pick your Size")])]),d._v(" "),d._l(3,(function(t){return _(n,{key:t,staticClass:"ma-1",attrs:{elevation:"1",small:1===t,large:3===t,color:"secondary"}},[d._v("\n            "+d._s(1===t?"small":2===t?"regular":"large")+"\n          ")])}))],2),d._v(" "),_(e,{attrs:{cols:"12",md:"6"}},[_("base-subheading",[_("h5",{staticClass:"font-weight-light"},[d._v("Pick your Style")])]),d._v(" "),_(n,{staticClass:"ma-1",attrs:{color:"secondary"}},[d._v(" Default ")]),d._v(" "),_(n,{staticClass:"ma-1",attrs:{elevation:"1",color:"secondary",rounded:""}},[d._v("\n            Rounded\n          ")]),d._v(" "),_(n,{staticClass:"ma-1",attrs:{color:"secondary",elevation:"1",rounded:""}},[_(i,{attrs:{left:""}},[d._v(" mdi-heart ")]),d._v("\n            With Icon\n          ")],1),d._v(" "),_(n,{staticClass:"ma-1",attrs:{color:"secondary",elevation:"1",fab:"",small:""}},[_(i,[d._v(" mdi-heart ")])],1),d._v(" "),_(n,{staticClass:"ma-1",attrs:{color:"secondary",text:""}},[d._v(" Simple ")])],1),d._v(" "),_(e,{attrs:{cols:"12",md:"6"}},[_("base-subheading",[_("h5",{staticClass:"font-weight-light"},[d._v("Pagination")])]),d._v(" "),_(r,{staticClass:"justify-start",attrs:{length:5,value:1,circle:""}}),d._v(" "),_(r,{staticClass:"justify-start",attrs:{length:3,value:2,circle:"","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"}})],1),d._v(" "),_(e,{attrs:{cols:"12",md:"6"}},[_("base-subheading",[_("h5",{staticClass:"font-weight-light"},[d._v("Button Group")])]),d._v(" "),_(l,[_(c,{attrs:{color:"teal"}},d._l(["left","middle","right"],(function(t){return _(n,{key:t},[d._v("\n                "+d._s(t)+"\n              ")])})),1)],1),d._v(" "),_("div",{staticClass:"my-6"}),d._v(" "),_(c,{attrs:{color:"teal",rounded:""}},d._l(4,(function(t){return _(n,{key:t},[d._v("\n              "+d._s(t)+"\n            ")])})),1),d._v(" "),_("div",{staticClass:"my-2"}),d._v(" "),_(c,{attrs:{color:"teal",rounded:""}},d._l(3,(function(t){return _(n,{key:t},[d._v("\n              "+d._s(t+4)+"\n            ")])})),1)],1),d._v(" "),d._l(d.social,(function(t,o){return[_(e,{key:o,staticClass:"py-1",attrs:{cols:"12"}},[0===o?_("base-subheading",{key:"heading-"+o},[_("h5",{staticClass:"font-weight-light"},[d._v("Social buttons")])]):d._e(),d._v(" "),_(a,{attrs:{dense:""}},[_(e,{attrs:{cols:"auto",md:"4",sm:"5"}},[_(n,{attrs:{elevation:"1",color:t.color,dark:""}},[_(i,{attrs:{left:""},domProps:{textContent:d._s(t.icon)}}),d._v("\n                  "+d._s(t.text)+"\n                ")],1)],1),d._v(" "),_(e,{attrs:{cols:"auto",md:"1",sm:"1"}},[_(n,{attrs:{elevation:"1",color:t.color,dark:"","min-width":"0","max-width":"41"}},[_(i,{domProps:{textContent:d._s(t.icon)}})],1)],1),d._v(" "),_(e,{attrs:{cols:"auto",md:"1",sm:"1"}},[_(n,{attrs:{elevation:"1",color:t.color,dark:"",fab:"","min-width":"0",small:""}},[_(i,{domProps:{textContent:d._s(t.icon)}})],1)],1),d._v(" "),_(e,{attrs:{cols:"auto",md:"1",sm:"1"}},[_(n,{attrs:{color:t.color,dark:"",icon:"","min-width":"0"}},[_(i,{attrs:{color:t.color},domProps:{textContent:d._s(t.icon)}})],1)],1),d._v(" "),_(e,{attrs:{cols:"auto",md:"3",sm:"4"}},[_(n,{attrs:{color:t.color,dark:"",text:""}},[_(i,{attrs:{left:"",color:t.color},domProps:{textContent:d._s(t.icon)}}),d._v("\n                  "+d._s(t.text)+"\n                ")],1)],1)],1)],1)]}))],2)],1)],1)],1)}),[],!1,(function(t){for(let o in m)this[o]=m[o]}),null,null,null);_.options.__file="src/views/dashboard/component/Buttons.vue";var v=_.exports;export default v;
