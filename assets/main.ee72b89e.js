import{v as e,V as o,i as t,a as n,b as r,R as i}from"./vendor.eb48b554.js";function a(e,o,t,n,r,i,a,s){var c,p="function"==typeof e?e.options:e;if(o&&(p.render=o,p.staticRenderFns=t,p._compiled=!0),n&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=c):r&&(c=s?function(){r.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(p.functional){p._injectStyles=c;var l=p.render;p.render=function(e,o){return c.call(o),l(e,o)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:p}}const s={};var c=a({name:"App"},(function(){var e=this.$createElement;return(this._self._c||e)("router-view")}),[],!1,(function(e){for(let o in s)this[o]=s[o]}),null,null,null);c.options.__file="src/App.vue";var p=c.exports;let l;const d={},u=function(e,o){if(!o)return e();if(void 0===l){const e=document.createElement("link").relList;l=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(o.map((e=>{if(e in d)return;d[e]=!0;const o=e.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=o?"stylesheet":l,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o?new Promise(((e,o)=>{n.addEventListener("load",e),n.addEventListener("error",o)})):void 0}))).then((()=>e()))};const _={namespaced:!0,dispatchEventsOnWindow:!0},m={userLoaded:e=>window.console.log("OIDC user is loaded:",e),userUnloaded:()=>window.console.log("OIDC user is unloaded"),accessTokenExpiring:()=>window.console.log("Access token will expire"),accessTokenExpired:()=>window.console.log("Access token did expire"),silentRenewError:()=>window.console.log("OIDC user is unloaded"),userSignedOut:()=>window.console.log("OIDC user is signed out"),oidcError:e=>window.console.log("OIDC error",e),automaticSilentRenewError:e=>window.console.log("OIDC automaticSilentRenewError",e)};async function f(){return e(await async function(){const e=await fetch("/vmd-vite-ts-oidc//oidc.json"),o=await e.json(),t={authority:o.authority,clientId:o.clientId,responseType:o.responseType,scope:o.scope,redirectUri:o.redirectUri,popupRedirectUri:o.popupRedirectUri,automaticSilentRenew:o.automaticSilentRenew,automaticSilentSignin:o.automaticSilentSignin,silentRedirectUri:o.silentRedirectUri,postLogoutRedirectUri:o.postLogoutRedirectUri};return window.console.log(t),t}(),_,m)}o.use(r);const h={primary:"#4CAF50",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"};var E=new r({theme:{themes:{dark:h,light:h}},directives:{Ripple:i}});!async function(){o.config.productionTip=!1;const e=await async function(){o.use(t);const e={barColor:"rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",barImage:"/vmd-vite-ts-oidc//pexels-brady-knoll-5187131.jpg",drawer:null};return new t.Store({state:e,mutations:{setBarImage(e,o){e.barImage=o},setDrawer(e,o){e.drawer=o}},actions:{},modules:{oidcStore:await f()}})}(),r=await async function(){return o.use(n),new n({mode:"history",base:"/vmd-vite-ts-oidc/",routes:[{path:"/",component:()=>u((()=>import("./Index.3a633bc5.js")),["/vmd-vite-ts-oidc/assets/Index.3a633bc5.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"]),children:[{name:"Dashboard",path:"",component:()=>u((()=>import("./Dashboard.fea9c40f.js")),["/vmd-vite-ts-oidc/assets/Dashboard.fea9c40f.js","/vmd-vite-ts-oidc/assets/Dashboard.08bc606a.css","/vmd-vite-ts-oidc/assets/MaterialCard.3d7a8597.js","/vmd-vite-ts-oidc/assets/MaterialCard.4b40b7b4.css","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"User Profile",path:"pages/user",component:()=>u((()=>import("./UserProfile.ce724e86.js")),["/vmd-vite-ts-oidc/assets/UserProfile.ce724e86.js","/vmd-vite-ts-oidc/assets/MaterialCard.3d7a8597.js","/vmd-vite-ts-oidc/assets/MaterialCard.4b40b7b4.css","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"Notifications",path:"components/notifications",component:()=>u((()=>import("./Notifications.5694367e.js")),["/vmd-vite-ts-oidc/assets/Notifications.5694367e.js","/vmd-vite-ts-oidc/assets/Notifications.d969176c.css","/vmd-vite-ts-oidc/assets/VComponent.e4db095d.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"Icons",path:"components/icons",component:()=>u((()=>import("./Icons.817e72f4.js")),["/vmd-vite-ts-oidc/assets/Icons.817e72f4.js","/vmd-vite-ts-oidc/assets/VComponent.e4db095d.js","/vmd-vite-ts-oidc/assets/MaterialCard.3d7a8597.js","/vmd-vite-ts-oidc/assets/MaterialCard.4b40b7b4.css","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"Buttons",path:"components/buttons",component:()=>u((()=>import("./Buttons.51c5ea30.js")),["/vmd-vite-ts-oidc/assets/Buttons.51c5ea30.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"Typography",path:"components/typography",component:()=>u((()=>import("./Typography.6ffc4f36.js")),["/vmd-vite-ts-oidc/assets/Typography.6ffc4f36.js","/vmd-vite-ts-oidc/assets/Typography.172ca1e2.css","/vmd-vite-ts-oidc/assets/MaterialCard.3d7a8597.js","/vmd-vite-ts-oidc/assets/MaterialCard.4b40b7b4.css","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css","/vmd-vite-ts-oidc/assets/VComponent.e4db095d.js"])},{name:"Regular Tables",path:"tables/regular-tables",component:()=>u((()=>import("./RegularTables.2d6058fe.js")),["/vmd-vite-ts-oidc/assets/RegularTables.2d6058fe.js","/vmd-vite-ts-oidc/assets/VComponent.e4db095d.js","/vmd-vite-ts-oidc/assets/MaterialCard.3d7a8597.js","/vmd-vite-ts-oidc/assets/MaterialCard.4b40b7b4.css","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"Google Maps",path:"maps/google-maps",component:()=>u((()=>import("./GoogleMaps.45ebcacf.js")),["/vmd-vite-ts-oidc/assets/GoogleMaps.45ebcacf.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{name:"Upgrade",path:"upgrade",component:()=>u((()=>import("./Upgrade.57115c08.js")),["/vmd-vite-ts-oidc/assets/Upgrade.57115c08.js","/vmd-vite-ts-oidc/assets/Upgrade.c119d22a.css","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css"])},{path:"oidc-callback",name:"OidcCallback",component:()=>u((()=>import("./OidcCallback.490d5fc0.js")),["/vmd-vite-ts-oidc/assets/OidcCallback.490d5fc0.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css","/vmd-vite-ts-oidc/assets/Emit.4d7b36b1.js"]),meta:{isOidcCallback:!0}},{path:"oidc-popup-callback",name:"oidcPopupCallback",component:()=>u((()=>import("./OidcPopupCallback.4c0561d7.js")),["/vmd-vite-ts-oidc/assets/OidcPopupCallback.4c0561d7.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css","/vmd-vite-ts-oidc/assets/Emit.4d7b36b1.js"]),meta:{isOidcCallback:!0}},{path:"oidc-callback-error",name:"oidcCallbackError",component:()=>u((()=>import("./OidcCallbackError.7ef89c21.js")),["/vmd-vite-ts-oidc/assets/OidcCallbackError.7ef89c21.js","/vmd-vite-ts-oidc/assets/vendor.eb48b554.js","/vmd-vite-ts-oidc/assets/vendor.6a8dfc42.css","/vmd-vite-ts-oidc/assets/Emit.4d7b36b1.js"]),meta:{isPublic:!0}}]}]})}();new o({router:r,store:e,vuetify:E,render:e=>e(p)}).$mount("#app")}();export{u as _,a as n};