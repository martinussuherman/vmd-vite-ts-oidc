var e=Object.defineProperty,s=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,a=(s,t,i)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,r=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&a(e,n,r[n]);if(t)for(var n of t(r))i.call(r,n)&&a(e,n,r[n]);return e};import{_ as n}from"./VIcon.ea10f671.js";import{C as l,m as o,B as h}from"./mergeData.406b82ca.js";import{m as u,T as d,f as p}from"./mixins.486a061e.js";import{d as g,o as c,j as m,c as v,D as f}from"./main.3b7a6220.js";import{i as b}from"./index.517eb191.js";var y=u(d).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,s){const{children:t,listeners:i,props:a}=s,n={staticClass:"v-label",class:r({"v-label--active":a.value,"v-label--is-disabled":a.disabled},p(s)),attrs:{for:a.for,"aria-hidden":!a.for},on:i,style:{left:g(a.left),right:g(a.right),position:a.absolute?"absolute":"relative"},ref:"label"};return e("label",l.options.methods.setTextColor(a.focused&&a.color,n),t)}}),S=u(l,d).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,s){return this.$createElement("div",{staticClass:"v-messages__message",key:s},c(this,"default",{message:e,key:s})||[e])}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}});var $=u(l,b("form"),d).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,s){m(e,s)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:e=>e?Array.isArray(e)?e:[e]:[],reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(e=!1,s){const t=[];s=s||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],a="function"==typeof e?e(s):e;!1===a||"string"==typeof a?t.push(a||""):"boolean"!=typeof a&&v(`Rules should return a string or boolean, received '${typeof a}' instead`,this)}return this.errorBucket=t,this.valid=0===t.length,this.valid}}});var D=u(h,$).extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return r({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((e=>{if("string"==typeof e)return e;const s=e(this.internalValue);return"string"==typeof s?s:""})).filter((e=>""!==e)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,s,t={}){const i=this[`${e}Icon`],a=`click:${f(e)}`,r=!(!this.listeners$[a]&&!s),l=o({attrs:{"aria-label":r?f(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(a,e),s&&s(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0},t);return this.$createElement("div",{staticClass:"v-input__icon",class:e?`v-input__icon--${f(e)}`:void 0},[this.$createElement(n,l,i)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:g(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(y,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(S,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:e=>c(this,"message",e)}}):null},genSlot(e,s,t){if(!t.length)return null;const i=`${e}-${s}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},t)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});export{D as V,$ as a,y as b};
