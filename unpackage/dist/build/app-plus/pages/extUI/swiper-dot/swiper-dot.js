!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=417)}({0:function(t,e,o){"use strict";function r(t,e,o,r,n,i,s,a,d,l){var c,u="function"==typeof t?t.options:t;if(d){u.components||(u.components={});var p=Object.prototype.hasOwnProperty;for(var f in d)p.call(d,f)&&!p.call(u.components,f)&&(u.components[f]=d[f])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(u.mixins||(u.mixins=[])).push(l)),e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var _=u.render;u.render=function(t,e){return c.call(e),_(t,e)}}else{var y=u.beforeCreate;u.beforeCreate=y?[].concat(y,c):[c]}return{exports:t,options:u}}o.d(e,"a",(function(){return r}))},1:function(t,e){t.exports={"@VERSION":2}},10:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(11).default,Vue.prototype.__$appStyle__)},11:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},12:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},13:function(t,e,o){"use strict";o.r(e);var r=o(4),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},19:function(t,e,o){"use strict";o.r(e);var r=o(5),n=o(2);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);var s=o(0);var a=Object(s.a)(n.default,r.b,r.c,!1,null,null,"78452328",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(13).default,this.options.style):Object.assign(this.options.style,o(13).default)}).call(a),e.default=a.exports},196:function(t,e,o){"use strict";o.r(e);var r=o(197),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},197:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created:function(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};e.default=r},198:function(t,e){t.exports={".uni-swiper__warp":{"":{flex:[1,0,0,16],flexDirection:["column",0,0,16],position:["relative",0,0,16],overflow:["hidden",0,0,16]}},".uni-swiper__dots-box":{"":{position:["absolute",0,0,17],bottom:["10",0,0,17],left:[0,0,0,17],right:[0,0,0,17],flex:[1,0,0,17],flexDirection:["row",0,0,17],justifyContent:["center",0,0,17],alignItems:["center",0,0,17]}},".uni-swiper__dots-item":{"":{width:["8",0,0,18],borderRadius:["100",0,0,18],marginLeft:["6",0,0,18],backgroundColor:["rgba(0,0,0,0.4)",0,0,18],"marginTop:first-child":[0,0,0,19],"marginRight:first-child":[0,0,0,19],"marginBottom:first-child":[0,0,0,19],"marginLeft:first-child":[0,0,0,19]}},".uni-swiper__dots-default":{"":{borderRadius:["100",0,0,20]}},".uni-swiper__dots-long":{"":{borderRadius:["50",0,0,21]}},".uni-swiper__dots-bar":{"":{borderRadius:["50",0,0,22]}},".uni-swiper__dots-nav":{"":{bottom:["0",0,0,23],paddingTop:["8",0,0,23],paddingRight:[0,0,0,23],paddingBottom:["8",0,0,23],paddingLeft:[0,0,0,23],flex:[1,0,0,23],flexDirection:["row",0,0,23],justifyContent:["flex-start",0,0,23],alignItems:["center",0,0,23],backgroundColor:["rgba(0,0,0,0.2)",0,0,23]}},".uni-swiper__dots-nav-item":{"":{fontSize:["14",0,0,24],color:["#ffffff",0,0,24],marginTop:[0,0,0,24],marginRight:["15",0,0,24],marginBottom:[0,0,0,24],marginLeft:["15",0,0,24]}},".uni-swiper__dots-indexes":{"":{justifyContent:["center",0,0,25],alignItems:["center",0,0,25]}},".uni-swiper__dots-indexes-text":{"":{color:["#ffffff",0,0,26],fontSize:["12",0,0,26],lineHeight:["14",0,0,26]}},"@VERSION":2}},199:function(t,e,o){"use strict";var r=o(200),n=o.n(r);e.default=n.a},2:function(t,e,o){"use strict";o.r(e);var r=o(3),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},20:function(t,e,o){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var s=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=r(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),d="";if(a.length>1){var l=a.pop();d=a.join("---COMMA---"),0===l.indexOf(" at ")?d+=l:d+="---COMMA---"+l}else d=a[0];console[s](d)}},200:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"\u5185\u5bb9 A"},{colorClass:"uni-bg-green",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"\u5185\u5bb9 B"},{colorClass:"uni-bg-blue",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"\u5185\u5bb9 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{},swiperDotIndex:0}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]},clickItem:function(t){this.swiperDotIndex=t},onBanner:function(e){t("log",22222,e," at pages/extUI/swiper-dot/swiper-dot.nvue:124")}}};e.default=o}).call(this,o(20).default)},201:function(t,e){t.exports={".swiper-box":{"":{height:["200",0,0,16]}},".swiper-item":{"":{flexDirection:["column",0,0,17],justifyContent:["center",0,0,17],alignItems:["center",0,0,17],height:["200",0,0,17],color:["#ffffff",0,0,17]}},".swiper-item0":{"":{backgroundColor:["#cee1fd",0,0,18]}},".swiper-item1":{"":{backgroundColor:["#b2cef7",0,0,19]}},".swiper-item2":{"":{backgroundColor:["#cee1fd",0,0,20]}},".image":{"":{width:["750rpx",0,0,21]}},".uni-bg-red":{"":{backgroundColor:["#ff5a5f",0,0,23]}},".uni-bg-green":{"":{backgroundColor:["#09bb07",0,0,24]}},".uni-bg-blue":{"":{backgroundColor:["#007aff",0,0,25]}},".example-body":{"":{flexDirection:["row",0,0,26],paddingTop:["20rpx",0,0,26],paddingRight:["20rpx",0,0,26],paddingBottom:["20rpx",0,0,26],paddingLeft:["20rpx",0,0,26]}},".example-body-item":{"":{flexDirection:["row",0,0,27],justifyContent:["center",0,0,27],alignItems:["center",0,0,27],marginTop:["15rpx",0,0,27],marginRight:["15rpx",0,0,27],marginBottom:["15rpx",0,0,27],marginLeft:["15rpx",0,0,27],paddingTop:["15rpx",0,0,27],paddingRight:["15rpx",0,0,27],paddingBottom:["15rpx",0,0,27],paddingLeft:["15rpx",0,0,27],height:["60rpx",0,0,27],flex:[1,0,0,27],borderColor:["#e5e5e5",0,0,27],borderStyle:["solid",0,0,27],borderWidth:["1",0,0,27],borderRadius:["5",0,0,27]}},".example-body-item-text":{"":{fontSize:["28rpx",0,0,28],color:["#333333",0,0,28]}},".example-body-dots":{"":{width:["16rpx",0,0,29],height:["16rpx",0,0,29],borderRadius:["50",0,0,29],backgroundColor:["#333333",0,0,29],marginLeft:["10rpx",0,0,29]}},".active":{"":{borderStyle:["solid",0,0,30],borderColor:["#007aff",0,0,30],borderWidth:["1",0,0,30]}},"@VERSION":2}},282:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return r}));var r={uniSwiperDot:o(418).default,uniSection:o(19).default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["content"]},[o("uni-swiper-dot",{staticClass:["uni-swiper-dot-box"],attrs:{info:t.info,current:t.current,mode:t.mode,dotsStyles:t.dotsStyles,field:"content"},on:{clickItem:t.clickItem}},[o("swiper",{staticClass:["swiper-box"],attrs:{current:t.swiperDotIndex},on:{change:t.change}},t._l(3,(function(e,r){return o("swiper-item",{key:r},[o("view",{staticClass:["swiper-item"],class:"swiper-item"+r},[o("u-text",{staticStyle:{color:"#fff",fontSize:"32px"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(r+1))])])])})),1)],1),o("uni-section",{attrs:{title:"\u6a21\u5f0f\u9009\u62e9",type:"line"}},[o("view",{staticClass:["example-body"]},[o("view",{staticClass:["example-body-item"],class:{active:0===t.modeIndex},on:{click:function(e){t.selectMode("default",0)}}},[o("u-text",{staticClass:["example-body-item-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("default")])]),o("view",{staticClass:["example-body-item"],class:{active:1===t.modeIndex},on:{click:function(e){t.selectMode("dot",1)}}},[o("u-text",{staticClass:["example-body-item-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("dot")])]),o("view",{staticClass:["example-body-item"],class:{active:2===t.modeIndex},on:{click:function(e){t.selectMode("round",2)}}},[o("u-text",{staticClass:["example-body-item-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("round")])]),o("view",{staticClass:["example-body-item"],class:{active:3===t.modeIndex},on:{click:function(e){t.selectMode("nav",3)}}},[o("u-text",{staticClass:["example-body-item-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("nav")])]),o("view",{staticClass:["example-body-item"],class:{active:4===t.modeIndex},on:{click:function(e){t.selectMode("indexes",4)}}},[o("u-text",{staticClass:["example-body-item-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("indexes")])])])]),o("uni-section",{attrs:{title:"\u989c\u8272\u6837\u5f0f\u9009\u62e9",type:"line"}},[o("view",{staticClass:["example-body"]},["nav"!==t.mode?t._l(t.dotStyle,(function(e,r){return o("view",{key:r,staticClass:["example-body-item"],class:{active:t.styleIndex===r},on:{click:function(e){t.selectStyle(r)}}},[o("view",{staticClass:["example-body-dots"],style:{"background-color":e.selectedBackgroundColor,border:e.selectedBorder}}),o("view",{staticClass:["example-body-dots"],style:{"background-color":e.backgroundColor,border:e.border}}),o("view",{staticClass:["example-body-dots"],style:{"background-color":e.backgroundColor,border:e.border}})])})):t._e(),"nav"===t.mode?t._l(t.dotStyle,(function(e,r){return o("view",{key:r,staticClass:["example-body-item"],class:{active:t.styleIndex===r},style:{"background-color":e.selectedBackgroundColor},on:{click:function(e){t.selectStyle(r)}}},[o("u-text",{staticClass:["example-body-item-text"],style:{color:e.color},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5185\u5bb9")])])})):t._e()],2)])],1)])},i=[]},3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#333"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1},overflow:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},303:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["uni-swiper__warp"]},[t._t("default"),"default"===t.mode?o("view",{key:"default",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return o("view",{key:r,staticClass:["uni-swiper__dots-item","uni-swiper__dots-bar"],style:{width:(r===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/2+"px","background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(e){t.clickItem(r)}}})})),0):t._e(),"dot"===t.mode?o("view",{key:"dot",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return o("view",{key:r,staticClass:["uni-swiper__dots-item"],style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:r!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){t.clickItem(r)}}})})),0):t._e(),"round"===t.mode?o("view",{key:"round",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return o("view",{key:r,staticClass:["uni-swiper__dots-item"],class:[r===t.current&&"uni-swiper__dots-long"],style:{width:(r===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:r!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){t.clickItem(r)}}})})),0):t._e(),"nav"===t.mode?o("view",{key:"nav",staticClass:["uni-swiper__dots-box","uni-swiper__dots-nav"],style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[o("u-text",{staticClass:["uni-swiper__dots-nav-item"],style:{color:t.dotsStyles.color},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])]):t._e(),"indexes"===t.mode?o("view",{key:"indexes",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return o("view",{key:r,staticClass:["uni-swiper__dots-item","uni-swiper__dots-indexes"],style:{width:t.dots.width+"px",height:t.dots.height+"px",color:r===t.current?t.dots.selectedColor:t.dots.color,"background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:r!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){t.clickItem(r)}}},[o("u-text",{staticClass:["uni-swiper__dots-indexes-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(r+1))])])})),0):t._e()],2)},n=[]},351:function(t,e,o){"use strict";o.r(e);var r=o(198),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},352:function(t,e,o){"use strict";o.r(e);var r=o(201),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},4:function(t,e){t.exports={".uni-section":{"":{backgroundColor:["#ffffff",0,0,16],marginTop:["10",0,0,16]}},".uni-section-header":{"":{position:["relative",0,0,17],flexDirection:["row",0,0,17],alignItems:["center",0,0,17],paddingTop:["12",0,0,17],paddingRight:["10",0,0,17],paddingBottom:["12",0,0,17],paddingLeft:["10",0,0,17],fontWeight:["normal",0,0,17]}},".uni-section__head":{"":{flexDirection:["row",0,0,18],justifyContent:["center",0,0,18],alignItems:["center",0,0,18],marginRight:["10",0,0,18]}},".line":{"":{height:["12",0,0,19],backgroundColor:["#2979ff",0,0,19],borderRadius:["10",0,0,19],width:["4",0,0,19]}},".circle":{"":{width:["8",0,0,20],height:["8",0,0,20],borderTopRightRadius:["50",0,0,20],borderTopLeftRadius:["50",0,0,20],borderBottomLeftRadius:["50",0,0,20],borderBottomRightRadius:["50",0,0,20],backgroundColor:["#2979ff",0,0,20]}},".uni-section__content":{"":{flexDirection:["column",0,0,21],flex:[1,0,0,21],color:["#333333",0,0,21]}},".uni-section__content-title":{"":{fontSize:["14",0,0,22],color:["#2979ff",0,0,22]}},".distraction":{"":{flexDirection:["row",0,0,23],alignItems:["center",0,0,23]}},".uni-section__content-sub":{"":{fontSize:["12",0,0,24],color:["#999999",0,0,24],lineHeight:["16",0,0,24],marginTop:["2",0,0,24]}},".is--hidden":{"":{overflow:["hidden",0,0,25]}},"@VERSION":2}},417:function(t,e,o){"use strict";o.r(e);o(10),o(12);var r=o(87);r.default.mpType="page",r.default.route="pages/extUI/swiper-dot/swiper-dot",r.default.el="#root",new Vue(r.default)},418:function(t,e,o){"use strict";o.r(e);var r=o(303),n=o(196);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);var s=o(0);var a=Object(s.a)(n.default,r.b,r.c,!1,null,"71539c7b","8151c062",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(351).default,this.options.style):Object.assign(this.options.style,o(351).default)}).call(a),e.default=a.exports},5:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["uni-section"]},[o("view",{staticClass:["uni-section-header"],attrs:{nvue:!0}},[t.type?o("view",{staticClass:["uni-section__head"]},[o("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),o("view",{staticClass:["uni-section__content"]},[o("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle},style:{color:t.color},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.title))]),t.subTitle?o("u-text",{staticClass:["uni-section__content-sub"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.subTitle))]):t._e()]),o("view",[t._t("right")],2)]),o("view",{class:{"is--hidden":t.overflow},style:{padding:t.padding?"10px":""}},[t._t("default")],2)])},n=[]},87:function(t,e,o){"use strict";var r=o(282),n=o(199),i=o(0);var s=Object(i.a)(n.default,r.b,r.c,!1,null,null,"1eeaf53f",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(352).default,this.options.style):Object.assign(this.options.style,o(352).default)}).call(s),e.default=s.exports}});