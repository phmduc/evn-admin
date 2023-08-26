"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[7977],{55010:function(t,e,n){n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var u=3,l=0,c=0,f=n.length;c<f;++c)i.options.useIndianSeparators&&4===c&&(u=2,l=1),0!==c&&l%u==0&&(a=i.options.separator+a),l++,a=n[f-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},87977:function(t,e,n){var r=n(47313),i=n(55010);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],u=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(c){l=!0,i=c}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return p((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},g=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==c(t,2)[1]}))),n=r.useMemo((function(){return s(s({},m),e)}),[t]),a=n.ref,o=n.startOnMount,u=n.enableReinitialize,f=n.delay,p=n.onEnd,g=n.onStart,y=n.onPauseResume,b=n.onReset,v=n.onUpdate,V=l(n,d),w=r.useRef(),E=r.useRef(),O=r.useRef(!1),S=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,h=e.suffix,d=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,b=e.scrollSpyDelay,v=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:h,useEasing:d,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:b,scrollSpyOnce:v})}("string"===typeof a?a:a.current,V)})),F=h((function(t){var e=w.current;if(e&&!t)return e;var n=S();return w.current=n,n})),j=h((function(){var t=function(){return F(!0).start((function(){null===p||void 0===p||p({pauseResume:A,reset:P,start:x,update:R})}))};f&&f>0?E.current=setTimeout(t,1e3*f):t(),null===g||void 0===g||g({pauseResume:A,reset:P,update:R})})),A=h((function(){F().pauseResume(),null===y||void 0===y||y({reset:P,start:x,update:R})})),P=h((function(){F().el&&(E.current&&clearTimeout(E.current),F().reset(),null===b||void 0===b||b({pauseResume:A,start:x,update:R}))})),R=h((function(t){F().update(t),null===v||void 0===v||v({pauseResume:A,reset:P,start:x})})),x=h((function(){P(),j()})),D=h((function(t){o&&(t&&P(),j())}));return r.useEffect((function(){O.current?u&&D(!0):(O.current=!0,D())}),[u,O,D,f,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){P()}}),[P]),{start:x,pauseResume:A,reset:P,update:R,getCountUp:F}},y=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,o=t.style,c=l(t,y),f=r.useRef(null),p=r.useRef(!1),d=g(s(s({},c),{},{ref:f,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),m=d.start,b=d.reset,v=d.update,V=d.pauseResume,w=d.getCountUp,E=h((function(){m()})),O=h((function(e){t.preserveValue||b(),v(e)})),S=h((function(){"function"!==typeof t.children||f.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){S()}),[S]),r.useEffect((function(){p.current&&O(t.end)}),[t.end,O]);var F=n&&t;return r.useEffect((function(){n&&p.current&&E()}),[E,n,F]),r.useEffect((function(){!n&&p.current&&E()}),[E,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof a?a({countUpRef:f,start:m,reset:b,update:v,pauseResume:V,getCountUp:w}):r.createElement("span",u({className:e,ref:f,style:o},i),"undefined"!==typeof t.start?w().formattingFn(t.start):"")}}}]);