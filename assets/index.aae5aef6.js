import{V as a,E as n}from"./main.1db1b49a.js";var m=a.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:e=>!isNaN(Number(e))||["xs","sm","md","lg","xl"].includes(String(e))}},computed:{isMobile(){const{mobile:e,width:t,name:o,mobileBreakpoint:r}=this.$vuetify.breakpoint;if(r===this.mobileBreakpoint)return e;const i=parseInt(this.mobileBreakpoint,10);return!isNaN(i)?t<i:o===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&n("mobile-break-point","mobile-breakpoint",this)}});export{m as M};
