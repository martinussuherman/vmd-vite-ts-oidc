import{m as c}from"./mergeData.33032ea6.js";import{u as m}from"./main.1db1b49a.js";function d(o=[],...s){return Array().concat(o,...s)}function u(o,s="top center 0",e){return{name:o,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:e},origin:{type:String,default:s}},render(r,n){const a=`transition${n.props.group?"-group":""}`,t={props:{name:o,mode:n.props.mode},on:{beforeEnter(i){i.style.transformOrigin=n.props.origin,i.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(t.on.leave=d(t.on.leave,i=>{const{offsetTop:p,offsetLeft:f,offsetWidth:l,offsetHeight:y}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=p+"px",i.style.left=f+"px",i.style.width=l+"px",i.style.height=y+"px"}),t.on.afterLeave=d(t.on.afterLeave,i=>{if(i&&i._transitionInitialStyles){const{position:p,top:f,left:l,width:y,height:g}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=p||"",i.style.top=f||"",i.style.left=l||"",i.style.width=y||"",i.style.height=g||""}})),n.props.hideOnLeave&&(t.on.leave=d(t.on.leave,i=>{i.style.setProperty("display","none","important")})),r(a,c(n.data,t),n.children)}}}function h(o,s,e="in-out"){return{name:o,functional:!0,props:{mode:{type:String,default:e}},render(r,n){return r("transition",c(n.data,{props:{name:o},on:s}),n.children)}}}function v(o="",s=!1){const e=s?"width":"height",r=`offset${m(e)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[e]:t.style[e]}},enter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const p=`${t[r]}px`;t.style[e]="0",t.offsetHeight,t.style.transition=i.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[e]=p})},afterEnter:a,enterCancelled:a,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[e]:t.style[e]},t.style.overflow="hidden",t.style[e]=`${t[r]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[e]="0")},afterLeave:n,leaveCancelled:n};function n(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const i=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,i!=null&&(t.style[e]=i),delete t._initialStyle}}const _=u("fab-transition","center center","out-in"),T=u("fade-transition"),b=u("slide-x-transition"),L=h("expand-transition",v()),E=h("expand-x-transition",v("",!0));export{E as V,T as a,b,L as c,_ as d};
