"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[3411],{51671:function(e,n,a){a.r(n);var t=a(1413),o=a(29439),r=a(30646),i=a(80506),s=a(47313),c=a(2135),l=a(54987),m=a(23008),u=a(48949),p=a(35399),g=a(46417),d=p.revenueGenerated,y=[{title:"Source",dataIndex:"source",key:"source"},{title:"Visitors",dataIndex:"visitors",key:"visitors"},{title:"Page View",dataIndex:"pageView",key:"pageView"},{title:"Revenue",dataIndex:"revenue",key:"revenue"},{title:"Trend",dataIndex:"trend",key:"trend"}],h=s.memo((function(){var e=(0,s.useState)({revenueTab:"today"}),n=(0,o.Z)(e,2),a=n[0],p=n[1],h=a.revenueTab,v=[];null!==d&&d[h].map((function(e){var n=e.key,a=e.name,t=e.icon,o=e.visitors,i=e.pageView,s=e.revenue,c=e.trend,l=e.type;return v.push({key:n,source:(0,g.jsxs)("div",{className:"ninjadash-revenue-company align-center-v",children:[(0,g.jsx)("div",{className:"ninjadash-revenue-company__icon ninjadash-revenue-company__icon-".concat(t),children:(0,g.jsx)("i",{className:"fa fa-".concat(t)})}),(0,g.jsx)("div",{className:"ninjadash-revenue-company__content",children:(0,g.jsx)("span",{className:"ninjadash-revenue-company__text",children:a})})]}),visitors:o,pageView:i,revenue:(0,g.jsx)("span",{className:"ninjadash-revenue",children:s}),trend:(0,g.jsxs)("div",{className:"ninjadash-trend-progress align-center-v ninjadash-trend-progress-".concat(t),children:[(0,g.jsxs)("span",{className:"ninjadash-trend-percentage",children:[c,"%"]}),(0,g.jsx)(r.Z,{percent:c,strokeWidth:4,status:"active",showInfo:!1,className:"ninjadash-trend-progress ninjadash-trend-progress-".concat(l)})]})})}));var k=function(e,n){n.preventDefault(),p((0,t.Z)((0,t.Z)({},a),{},{revenueTab:e}))};return(0,g.jsx)("div",{className:"full-width-table",children:(0,g.jsx)(m.BorderLessHeading,{children:(0,g.jsx)(l.Cards,{isbutton:(0,g.jsx)("div",{className:"ninjadash-card-nav",children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{className:"today"===h?"ninjadash-active":"ninjadash-today",children:(0,g.jsx)(c.rU,{onClick:function(e){return k("today",e)},to:"#",children:"Today"})}),(0,g.jsx)("li",{className:"week"===h?"ninjadash-active":"ninjadash-week",children:(0,g.jsx)(c.rU,{onClick:function(e){return k("week",e)},to:"#",children:"Week"})}),(0,g.jsx)("li",{className:"month"===h?"ninjadash-active":"ninjadash-month",children:(0,g.jsx)(c.rU,{onClick:function(e){return k("month",e)},to:"#",children:"Month"})})]})}),title:"Source Of Revenue Generated",size:"large",children:(0,g.jsx)(m.TableDefaultStyle,{className:"ninjadash-having-header-bg",children:(0,g.jsx)(u.RevenueGeneratedWrapper,{children:(0,g.jsx)("div",{className:"table-responsive",children:(0,g.jsx)(i.Z,{columns:y,dataSource:v,pagination:!1})})})})})})})}));n.default=h},43681:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(1413),o=a(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=a(6476),s=function(e,n){return o.createElement(i.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:r}))};s.displayName="CheckOutlined";var c=o.forwardRef(s)},32697:function(e,n,a){a.d(n,{Z:function(){return C}});var t=a(4942),o=a(87462),r=a(46123),i=a.n(r),s=a(56482),c=a(47313),l=a(74714),m=a(4431),u=a(93433),p=a(29439),g=a(205),d=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},y=c.createContext(null),h=function(e,n){var a=e.defaultValue,r=e.children,s=e.options,m=void 0===s?[]:s,h=e.prefixCls,v=e.className,k=e.style,f=e.onChange,S=d(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),$=c.useContext(l.E_),w=$.getPrefixCls,C=$.direction,x=c.useState(S.value||a||[]),P=(0,p.Z)(x,2),G=P[0],I=P[1],O=c.useState([]),B=(0,p.Z)(O,2),R=B[0],j=B[1];c.useEffect((function(){"value"in S&&I(S.value||[])}),[S.value]);var D=function(){return m.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},N=w("checkbox",h),Z="".concat(N,"-group"),M=(0,g.Z)(S,["value","disabled"]);m&&m.length>0&&(r=D().map((function(e){return c.createElement(b,{prefixCls:N,key:e.value.toString(),disabled:"disabled"in e?e.disabled:S.disabled,value:e.value,checked:G.includes(e.value),onChange:e.onChange,className:"".concat(Z,"-item"),style:e.style},e.label)})));var E={toggleOption:function(e){var n=G.indexOf(e.value),a=(0,u.Z)(G);-1===n?a.push(e.value):a.splice(n,1),"value"in S||I(a);var t=D();null===f||void 0===f||f(a.filter((function(e){return R.includes(e)})).sort((function(e,n){return t.findIndex((function(n){return n.value===e}))-t.findIndex((function(e){return e.value===n}))})))},value:G,disabled:S.disabled,name:S.name,registerValue:function(e){j((function(n){return[].concat((0,u.Z)(n),[e])}))},cancelValue:function(e){j((function(n){return n.filter((function(n){return n!==e}))}))}},W=i()(Z,(0,t.Z)({},"".concat(Z,"-rtl"),"rtl"===C),v);return c.createElement("div",(0,o.Z)({className:W,style:k},M,{ref:n}),c.createElement(y.Provider,{value:E},r))},v=c.forwardRef(h),k=c.memo(v),f=a(98438),S=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},$=function(e,n){var a,r,u=e.prefixCls,p=e.className,g=e.children,d=e.indeterminate,h=void 0!==d&&d,v=e.style,k=e.onMouseEnter,$=e.onMouseLeave,b=e.skipGroup,w=void 0!==b&&b,C=e.disabled,x=S(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),P=c.useContext(l.E_),G=P.getPrefixCls,I=P.direction,O=c.useContext(y),B=(0,c.useContext)(m.aM).isFormItemInput,R=(0,c.useContext)(f.Z),j=null!==(r=(null===O||void 0===O?void 0:O.disabled)||C)&&void 0!==r?r:R,D=c.useRef(x.value);c.useEffect((function(){null===O||void 0===O||O.registerValue(x.value)}),[]),c.useEffect((function(){if(!w)return x.value!==D.current&&(null===O||void 0===O||O.cancelValue(D.current),null===O||void 0===O||O.registerValue(x.value),D.current=x.value),function(){return null===O||void 0===O?void 0:O.cancelValue(x.value)}}),[x.value]);var N=G("checkbox",u),Z=(0,o.Z)({},x);O&&!w&&(Z.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),O.toggleOption&&O.toggleOption({label:g,value:x.value})},Z.name=O.name,Z.checked=O.value.includes(x.value));var M=i()((a={},(0,t.Z)(a,"".concat(N,"-wrapper"),!0),(0,t.Z)(a,"".concat(N,"-rtl"),"rtl"===I),(0,t.Z)(a,"".concat(N,"-wrapper-checked"),Z.checked),(0,t.Z)(a,"".concat(N,"-wrapper-disabled"),j),(0,t.Z)(a,"".concat(N,"-wrapper-in-form-item"),B),a),p),E=i()((0,t.Z)({},"".concat(N,"-indeterminate"),h)),W=h?"mixed":void 0;return c.createElement("label",{className:M,style:v,onMouseEnter:k,onMouseLeave:$},c.createElement(s.default,(0,o.Z)({"aria-checked":W},Z,{prefixCls:N,className:E,disabled:j,ref:n})),void 0!==g&&c.createElement("span",null,g))};var b=c.forwardRef($),w=b;w.Group=k,w.__ANT_CHECKBOX=!0;var C=w},74294:function(e,n,a){var t=a(4942),o=a(87462),r=a(46123),i=a.n(r),s=a(61310),c=a(205),l=a(47313),m=a(74714),u=a(82926),p=a(98438),g=a(21631),d=a(4431),y=a(53553),h=a(55681),v=a(87632),k=a(45531),f=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},S="SECRET_COMBOBOX_MODE_DO_NOT_USE",$=function(e,n){var a,r,$=e.prefixCls,b=e.bordered,w=void 0===b||b,C=e.className,x=e.getPopupContainer,P=e.dropdownClassName,G=e.popupClassName,I=e.listHeight,O=void 0===I?256:I,B=e.placement,R=e.listItemHeight,j=void 0===R?24:R,D=e.size,N=e.disabled,Z=e.notFoundContent,M=e.status,E=e.showArrow,W=f(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),V=l.useContext(m.E_),L=V.getPopupContainer,H=V.getPrefixCls,_=V.renderEmpty,J=V.direction,T=V.virtual,A=V.dropdownMatchSelectWidth,F=l.useContext(g.Z),U=H("select",$),z=H(),Q=(0,k.ri)(U,J),X=Q.compactSize,Y=Q.compactItemClassnames,q=l.useMemo((function(){var e=W.mode;if("combobox"!==e)return e===S?"combobox":e}),[W.mode]),K="multiple"===q||"tags"===q,ee=void 0!==E?E:W.loading||!(K||"combobox"===q),ne=(0,l.useContext)(d.aM),ae=ne.status,te=ne.hasFeedback,oe=ne.isFormItemInput,re=ne.feedbackIcon,ie=(0,h.F)(ae,M);r=void 0!==Z?Z:"combobox"===q?null:(_||u.Z)("Select");var se=(0,v.Z)((0,o.Z)((0,o.Z)({},W),{multiple:K,hasFeedback:te,feedbackIcon:re,showArrow:ee,prefixCls:U})),ce=se.suffixIcon,le=se.itemIcon,me=se.removeIcon,ue=se.clearIcon,pe=(0,c.Z)(W,["suffixIcon","itemIcon"]),ge=i()(G||P,(0,t.Z)({},"".concat(U,"-dropdown-").concat(J),"rtl"===J)),de=X||D||F,ye=l.useContext(p.Z),he=null!==N&&void 0!==N?N:ye,ve=i()((a={},(0,t.Z)(a,"".concat(U,"-lg"),"large"===de),(0,t.Z)(a,"".concat(U,"-sm"),"small"===de),(0,t.Z)(a,"".concat(U,"-rtl"),"rtl"===J),(0,t.Z)(a,"".concat(U,"-borderless"),!w),(0,t.Z)(a,"".concat(U,"-in-form-item"),oe),a),(0,h.Z)(U,ie,te),Y,C);return l.createElement(s.ZP,(0,o.Z)({ref:n,virtual:T,dropdownMatchSelectWidth:A},pe,{transitionName:(0,y.mL)(z,(0,y.q0)(B),W.transitionName),listHeight:O,listItemHeight:j,mode:q,prefixCls:U,placement:void 0!==B?B:"rtl"===J?"bottomRight":"bottomLeft",direction:J,inputIcon:ce,menuItemSelectedIcon:le,removeIcon:me,clearIcon:ue,notFoundContent:r,className:ve,getPopupContainer:x||L,dropdownClassName:ge,showArrow:te||E,disabled:he}))},b=l.forwardRef($);b.SECRET_COMBOBOX_MODE_DO_NOT_USE=S,b.Option=s.Wx,b.OptGroup=s.Xo,n.Z=b},56482:function(e,n,a){a.r(n),a.d(n,{Checkbox:function(){return g}});var t=a(87462),o=a(1413),r=a(4942),i=a(29439),s=a(45987),c=a(46123),l=a.n(c),m=a(10288),u=a(47313),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],g=(0,u.forwardRef)((function(e,n){var a,c=e.prefixCls,g=void 0===c?"rc-checkbox":c,d=e.className,y=e.style,h=e.checked,v=e.disabled,k=e.defaultChecked,f=void 0!==k&&k,S=e.type,$=void 0===S?"checkbox":S,b=e.onChange,w=(0,s.Z)(e,p),C=(0,u.useRef)(null),x=(0,m.Z)(f,{value:h}),P=(0,i.Z)(x,2),G=P[0],I=P[1];(0,u.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=C.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=C.current)||void 0===e||e.blur()},input:C.current}}));var O=l()(g,d,(a={},(0,r.Z)(a,"".concat(g,"-checked"),G),(0,r.Z)(a,"".concat(g,"-disabled"),v),a));return u.createElement("span",{className:O,style:y},u.createElement("input",(0,t.Z)({},w,{className:"".concat(g,"-input"),ref:C,onChange:function(n){v||("checked"in e||I(n.target.checked),null===b||void 0===b||b({target:(0,o.Z)((0,o.Z)({},e),{},{type:$,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:v,checked:!!G,type:$})),u.createElement("span",{className:"".concat(g,"-inner")}))}));n.default=g},42386:function(e,n,a){var t;function o(e){if("undefined"===typeof document)return 0;if(e||void 0===t){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var a=document.createElement("div"),o=a.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",a.appendChild(n),document.body.appendChild(a);var r=n.offsetWidth;a.style.overflow="scroll";var i=n.offsetWidth;r===i&&(i=a.clientWidth),document.body.removeChild(a),t=r-i}return t}function r(e){var n=e.match(/^(.*)px$/),a=Number(null===n||void 0===n?void 0:n[1]);return Number.isNaN(a)?o():a}function i(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),a=n.width,t=n.height;return{width:r(a),height:r(t)}}a.d(n,{Z:function(){return o},o:function(){return i}})},35399:function(e){e.exports=JSON.parse('{"salesLocation":{"today":[["United states","90","$536"],["United kingdom","70","$573"],["Canada","70","$457"],["Japan","30","$524"],["Bangladesh","50","$354"],["India","60","$654"]],"week":[["Japan","90","$336"],["United kingdom","70","$873"],["Canada","70","$557"],["Japan","30","$525"],["Bangladesh","50","$352"],["Pakistan","60","$658"]],"month":[["Russia","90","$534"],["Germany","70","$573"],["Canada","70","$487"],["Japan","30","$514"],["Bangladesh","50","$394"],["Vutan","60","$354"]]},"topSaleProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280","sold":"126","revenue":"$38,536"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"week":[{"key":"1","img":"1.png","name":"Samsung Note 10 256GB","price":"$450","sold":"300","revenue":"$43060"},{"key":"2","img":"2.png","name":"Full Sleeve Shirt","price":"$49","sold":"300","revenue":"$3178"},{"key":"3","img":"3.png","name":"Nike Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Bata Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy Premio 256GB","price":"$670","sold":"126","revenue":"$40,988"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}]},"browserState":{"today":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"}],"week":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"}],"month":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"13025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"13025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"2.5%","cte":"14025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"16025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"11025","goalRate":"90%"}]},"revenueGenerated":{"today":[{"key":"1","icon":"google","name":"Google","visitors":"23,397","pageView":"17,201","revenue":"$5,536","trend":"90","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"23,397","pageView":"14,201","revenue":"$5,536","trend":"57","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"78","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,397","pageView":"13,201","revenue":"$5,536","trend":"96","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"21","type":"warning"}],"week":[{"key":"1","icon":"google","name":"Google","visitors":"26,397","pageView":"53,465","revenue":"$4,617","trend":"70","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"22,454","pageView":"83,734","revenue":"$4,328","trend":"53","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"29,364","pageView":"74,345","revenue":"$6,438","trend":"86","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"24,565","pageView":"24,572","revenue":"$4,257","trend":"98","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"16,637","pageView":"30,234","revenue":"$8,559","trend":"20","type":"warning"}],"month":[{"key":"1","icon":"google","name":"Google","visitors":"29,575","pageView":"11,317","revenue":"$8,472","trend":"60","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"11,159","pageView":"10,470","revenue":"$6,538","trend":"54","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"21,341","pageView":"22,010","revenue":"$6,017","trend":"71","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,258","pageView":"11,184","revenue":"$6,368","trend":"92","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"22,249","pageView":"10,151","revenue":"$5,536","trend":"20","type":"warning"}]},"trafficChannel":[{"icon":"facebook","name":"Facebook","user":"3,397","session":"123","bounce":"2,584","duration":"00:01:05"},{"icon":"twitter","name":"Twitter","user":"2,397","session":"433","bounce":"2,024","duration":"00:02:35"},{"icon":"instagram","name":"Instagram","user":"6,397","session":"234","bounce":"2,404","duration":"00:01:65"},{"icon":"youtube","name":"Youtube","user":"1,397","session":"678","bounce":"2,681","duration":"00:04:05"}],"newProduct":{"today":[{"key":"1","img":"6.png","name":"UV Protected Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Black Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Women Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Mackbook Pro","price":"$38,536"}],"week":[{"key":"1","img":"6.png","name":"New Model Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Smart Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Men Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Toshiba Pro","price":"$38,536"}],"month":[{"key":"1","img":"6.png","name":"Computer Light Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Large Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"High Quality Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Lenovo Pro","price":"$38,536"}]},"bestSeller":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"On Process"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Richard Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Pending"},{"key":"2","img":"11.png","name":"Jhon Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"David Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Pending"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Michel Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"On Process"},{"key":"2","img":"11.png","name":"Christopher Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Joseph White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Richard Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"activeUserData":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Theme Jhone","company":"Daraz","product":"Cool watch","revenue":"$28,336","status":"Done"},{"key":"2","img":"11.png","name":"Elon Mask","company":"Picaboo","product":"Tea Cup","revenue":"$22","status":"Pensing"},{"key":"3","img":"12.png","name":"Shamim Ahmed","company":"Yahoo","product":"Rocking Chair","revenue":"$1,007","status":"Pending"},{"key":"4","img":"13.png","name":"Tanjim Hasan","company":"Sovware","product":"DSLR Camera","revenue":"$1,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"topProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","deals":"$60","amount":"454"},{"key":"3","img":"3.png","name":"Marco Shoes","deals":"$80","amount":"7898"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","deals":"$480","amount":"21"},{"key":"5","img":"4.png","name":"Microlab Headphone","deals":"$10","amount":"56446"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}]},"recentDeal":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$280"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$280"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","price":"$280"},{"key":"5","img":"4.png","name":"Microlab Headphone","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}]},"memberProgressData":{"today":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}],"week":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}],"month":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}]},"resentSeller":{"all":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"pending":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"done":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}]}}')}}]);