var s=Object.assign;import{R as t,M as a,C as e}from"./mergeData.c85918c4.js";import{d as i}from"./main.08b70a06.js";import{m as r}from"./mixins.1d8c402a.js";var o=r(e,a,t).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return s({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles(){return s({height:i(this.size),minWidth:i(this.size),width:i(this.size)},this.measurableStyles)}},render(s){const t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return s("div",this.setBackgroundColor(this.color,t),this.$slots.default)}});export{o as _};
