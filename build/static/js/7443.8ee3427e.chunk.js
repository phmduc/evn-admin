(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[7443],{84896:function(e,n,a){"use strict";a.r(n);var t=a(29439),o=a(47313),i=a(80506),r=a(2135),s=a(54987),g=a(23008),u=a(35399),c=a(46417),l=u.topProduct,m=[{title:"Product Name",dataIndex:"productname",key:"prroductname"},{title:"Deals",dataIndex:"deals",key:"deals"},{title:"Amount",dataIndex:"amount",key:"amount"}],p=o.memo((function(){var e=(0,o.useState)("today"),n=(0,t.Z)(e,2),u=n[0],p=n[1],d=function(e,n){n.preventDefault(),p(e)},y=[];return l[u].map((function(e){var n=e.key,t=e.img,o=e.name,i=e.deals,r=e.amount;return y.push({key:n,productname:(0,c.jsxs)("div",{className:"ninjadash-info-element align-center-v",children:[(0,c.jsx)("img",{src:a(62667)("./".concat(t)),alt:"ninjadash Product"}),(0,c.jsx)("span",{className:"ninjadash-info-element__text",children:o})]}),deals:i,amount:r})})),(0,c.jsx)("div",{className:"full-width-table",children:(0,c.jsx)(g.BorderLessHeading,{children:(0,c.jsx)(s.Cards,{isbutton:(0,c.jsx)("div",{className:"ninjadash-card-nav",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"today"===u?"ninjadash-active":"ninjadash-year",children:(0,c.jsx)(r.rU,{onClick:function(e){return d("today",e)},to:"#",children:"Year"})}),(0,c.jsx)("li",{className:"week"===u?"ninjadash-active":"ninjadash-week",children:(0,c.jsx)(r.rU,{onClick:function(e){return d("week",e)},to:"#",children:"Week"})}),(0,c.jsx)("li",{className:"month"===u?"ninjadash-active":"ninjadash-month",children:(0,c.jsx)(r.rU,{onClick:function(e){return d("month",e)},to:"#",children:"Month"})})]})}),title:"Top Product",size:"large",children:(0,c.jsx)(g.TableDefaultStyle,{className:"ninjadash-having-header-bg",children:(0,c.jsx)("div",{className:"ninjadash-top-product table-responsive",children:(0,c.jsx)(i.Z,{columns:m,dataSource:y,pagination:!1})})})})})})}));n.default=p},43681:function(e,n,a){"use strict";a.d(n,{Z:function(){return g}});var t=a(1413),o=a(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},r=a(6476),s=function(e,n){return o.createElement(r.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:i}))};s.displayName="CheckOutlined";var g=o.forwardRef(s)},32697:function(e,n,a){"use strict";a.d(n,{Z:function(){return $}});var t=a(4942),o=a(87462),i=a(46123),r=a.n(i),s=a(56482),g=a(47313),u=a(74714),c=a(4431),l=a(93433),m=a(29439),p=a(205),d=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},y=g.createContext(null),A=function(e,n){var a=e.defaultValue,i=e.children,s=e.options,c=void 0===s?[]:s,A=e.prefixCls,h=e.className,k=e.style,v=e.onChange,f=d(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),C=g.useContext(u.E_),b=C.getPrefixCls,$=C.direction,w=g.useState(f.value||a||[]),x=(0,m.Z)(w,2),E=x[0],B=x[1],G=g.useState([]),I=(0,m.Z)(G,2),M=I[0],R=I[1];g.useEffect((function(){"value"in f&&B(f.value||[])}),[f.value]);var O=function(){return c.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},D=b("checkbox",A),P="".concat(D,"-group"),U=(0,p.Z)(f,["value","disabled"]);c&&c.length>0&&(i=O().map((function(e){return g.createElement(S,{prefixCls:D,key:e.value.toString(),disabled:"disabled"in e?e.disabled:f.disabled,value:e.value,checked:E.includes(e.value),onChange:e.onChange,className:"".concat(P,"-item"),style:e.style},e.label)})));var N={toggleOption:function(e){var n=E.indexOf(e.value),a=(0,l.Z)(E);-1===n?a.push(e.value):a.splice(n,1),"value"in f||B(a);var t=O();null===v||void 0===v||v(a.filter((function(e){return M.includes(e)})).sort((function(e,n){return t.findIndex((function(n){return n.value===e}))-t.findIndex((function(e){return e.value===n}))})))},value:E,disabled:f.disabled,name:f.name,registerValue:function(e){R((function(n){return[].concat((0,l.Z)(n),[e])}))},cancelValue:function(e){R((function(n){return n.filter((function(n){return n!==e}))}))}},Z=r()(P,(0,t.Z)({},"".concat(P,"-rtl"),"rtl"===$),h);return g.createElement("div",(0,o.Z)({className:Z,style:k},U,{ref:n}),g.createElement(y.Provider,{value:N},i))},h=g.forwardRef(A),k=g.memo(h),v=a(98438),f=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},C=function(e,n){var a,i,l=e.prefixCls,m=e.className,p=e.children,d=e.indeterminate,A=void 0!==d&&d,h=e.style,k=e.onMouseEnter,C=e.onMouseLeave,S=e.skipGroup,b=void 0!==S&&S,$=e.disabled,w=f(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),x=g.useContext(u.E_),E=x.getPrefixCls,B=x.direction,G=g.useContext(y),I=(0,g.useContext)(c.aM).isFormItemInput,M=(0,g.useContext)(v.Z),R=null!==(i=(null===G||void 0===G?void 0:G.disabled)||$)&&void 0!==i?i:M,O=g.useRef(w.value);g.useEffect((function(){null===G||void 0===G||G.registerValue(w.value)}),[]),g.useEffect((function(){if(!b)return w.value!==O.current&&(null===G||void 0===G||G.cancelValue(O.current),null===G||void 0===G||G.registerValue(w.value),O.current=w.value),function(){return null===G||void 0===G?void 0:G.cancelValue(w.value)}}),[w.value]);var D=E("checkbox",l),P=(0,o.Z)({},w);G&&!b&&(P.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),G.toggleOption&&G.toggleOption({label:p,value:w.value})},P.name=G.name,P.checked=G.value.includes(w.value));var U=r()((a={},(0,t.Z)(a,"".concat(D,"-wrapper"),!0),(0,t.Z)(a,"".concat(D,"-rtl"),"rtl"===B),(0,t.Z)(a,"".concat(D,"-wrapper-checked"),P.checked),(0,t.Z)(a,"".concat(D,"-wrapper-disabled"),R),(0,t.Z)(a,"".concat(D,"-wrapper-in-form-item"),I),a),m),N=r()((0,t.Z)({},"".concat(D,"-indeterminate"),A)),Z=A?"mixed":void 0;return g.createElement("label",{className:U,style:h,onMouseEnter:k,onMouseLeave:C},g.createElement(s.default,(0,o.Z)({"aria-checked":Z},P,{prefixCls:D,className:N,disabled:R,ref:n})),void 0!==p&&g.createElement("span",null,p))};var S=g.forwardRef(C),b=S;b.Group=k,b.__ANT_CHECKBOX=!0;var $=b},74294:function(e,n,a){"use strict";var t=a(4942),o=a(87462),i=a(46123),r=a.n(i),s=a(61310),g=a(205),u=a(47313),c=a(74714),l=a(82926),m=a(98438),p=a(21631),d=a(4431),y=a(53553),A=a(55681),h=a(87632),k=a(45531),v=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},f="SECRET_COMBOBOX_MODE_DO_NOT_USE",C=function(e,n){var a,i,C=e.prefixCls,S=e.bordered,b=void 0===S||S,$=e.className,w=e.getPopupContainer,x=e.dropdownClassName,E=e.popupClassName,B=e.listHeight,G=void 0===B?256:B,I=e.placement,M=e.listItemHeight,R=void 0===M?24:M,O=e.size,D=e.disabled,P=e.notFoundContent,U=e.status,N=e.showArrow,Z=v(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),j=u.useContext(c.E_),Q=j.getPopupContainer,J=j.getPrefixCls,V=j.renderEmpty,W=j.direction,T=j.virtual,Y=j.dropdownMatchSelectWidth,H=u.useContext(p.Z),L=J("select",C),F=J(),q=(0,k.ri)(L,W),_=q.compactSize,X=q.compactItemClassnames,K=u.useMemo((function(){var e=Z.mode;if("combobox"!==e)return e===f?"combobox":e}),[Z.mode]),z="multiple"===K||"tags"===K,ee=void 0!==N?N:Z.loading||!(z||"combobox"===K),ne=(0,u.useContext)(d.aM),ae=ne.status,te=ne.hasFeedback,oe=ne.isFormItemInput,ie=ne.feedbackIcon,re=(0,A.F)(ae,U);i=void 0!==P?P:"combobox"===K?null:(V||l.Z)("Select");var se=(0,h.Z)((0,o.Z)((0,o.Z)({},Z),{multiple:z,hasFeedback:te,feedbackIcon:ie,showArrow:ee,prefixCls:L})),ge=se.suffixIcon,ue=se.itemIcon,ce=se.removeIcon,le=se.clearIcon,me=(0,g.Z)(Z,["suffixIcon","itemIcon"]),pe=r()(E||x,(0,t.Z)({},"".concat(L,"-dropdown-").concat(W),"rtl"===W)),de=_||O||H,ye=u.useContext(m.Z),Ae=null!==D&&void 0!==D?D:ye,he=r()((a={},(0,t.Z)(a,"".concat(L,"-lg"),"large"===de),(0,t.Z)(a,"".concat(L,"-sm"),"small"===de),(0,t.Z)(a,"".concat(L,"-rtl"),"rtl"===W),(0,t.Z)(a,"".concat(L,"-borderless"),!b),(0,t.Z)(a,"".concat(L,"-in-form-item"),oe),a),(0,A.Z)(L,re,te),X,$);return u.createElement(s.ZP,(0,o.Z)({ref:n,virtual:T,dropdownMatchSelectWidth:Y},me,{transitionName:(0,y.mL)(F,(0,y.q0)(I),Z.transitionName),listHeight:G,listItemHeight:R,mode:K,prefixCls:L,placement:void 0!==I?I:"rtl"===W?"bottomRight":"bottomLeft",direction:W,inputIcon:ge,menuItemSelectedIcon:ue,removeIcon:ce,clearIcon:le,notFoundContent:i,className:he,getPopupContainer:w||Q,dropdownClassName:pe,showArrow:te||N,disabled:Ae}))},S=u.forwardRef(C);S.SECRET_COMBOBOX_MODE_DO_NOT_USE=f,S.Option=s.Wx,S.OptGroup=s.Xo,n.Z=S},56482:function(e,n,a){"use strict";a.r(n),a.d(n,{Checkbox:function(){return p}});var t=a(87462),o=a(1413),i=a(4942),r=a(29439),s=a(45987),g=a(46123),u=a.n(g),c=a(10288),l=a(47313),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],p=(0,l.forwardRef)((function(e,n){var a,g=e.prefixCls,p=void 0===g?"rc-checkbox":g,d=e.className,y=e.style,A=e.checked,h=e.disabled,k=e.defaultChecked,v=void 0!==k&&k,f=e.type,C=void 0===f?"checkbox":f,S=e.onChange,b=(0,s.Z)(e,m),$=(0,l.useRef)(null),w=(0,c.Z)(v,{value:A}),x=(0,r.Z)(w,2),E=x[0],B=x[1];(0,l.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=$.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=$.current)||void 0===e||e.blur()},input:$.current}}));var G=u()(p,d,(a={},(0,i.Z)(a,"".concat(p,"-checked"),E),(0,i.Z)(a,"".concat(p,"-disabled"),h),a));return l.createElement("span",{className:G,style:y},l.createElement("input",(0,t.Z)({},b,{className:"".concat(p,"-input"),ref:$,onChange:function(n){h||("checked"in e||B(n.target.checked),null===S||void 0===S||S({target:(0,o.Z)((0,o.Z)({},e),{},{type:C,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:h,checked:!!E,type:C})),l.createElement("span",{className:"".concat(p,"-inner")}))}));n.default=p},42386:function(e,n,a){"use strict";var t;function o(e){if("undefined"===typeof document)return 0;if(e||void 0===t){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var a=document.createElement("div"),o=a.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",a.appendChild(n),document.body.appendChild(a);var i=n.offsetWidth;a.style.overflow="scroll";var r=n.offsetWidth;i===r&&(r=a.clientWidth),document.body.removeChild(a),t=i-r}return t}function i(e){var n=e.match(/^(.*)px$/),a=Number(null===n||void 0===n?void 0:n[1]);return Number.isNaN(a)?o():a}function r(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),a=n.width,t=n.height;return{width:i(a),height:i(t)}}a.d(n,{Z:function(){return o},o:function(){return r}})},62667:function(e,n,a){var t={"./1.png":61569,"./2.png":89487,"./3.png":81399,"./4.png":36057,"./5.png":5974,"./6.png":59152,"./7.png":84105,"./8.png":57356,"./9.png":71055};function o(e){var n=i(e);return a(n)}function i(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=i,e.exports=o,o.id=62667},61569:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAS0lEQVRYR+3UsREAMAgDsbD/PMxHehq3FMoEuUfn6u55B175yLqCIpulIoqkqWKEEUZSAUZSITvCCCOpACOpkB1hhJFUgJFU6MyOfASiah+48bsdAAAAAElFTkSuQmCC"},89487:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAS0lEQVRYR+3UsREAMAgDsbD/PMxHehq3FMoEuUfn6u55B175yLqCIpulIoqkqWKEEUZSAUZSITvCCCOpACOpkB1hhJFUgJFU6MyOfASiah+48bsdAAAAAElFTkSuQmCC"},81399:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAS0lEQVRYR+3UsREAMAgDsbD/PMxHehq3FMoEuUfn6u55B175yLqCIpulIoqkqWKEEUZSAUZSITvCCCOpACOpkB1hhJFUgJFU6MyOfASiah+48bsdAAAAAElFTkSuQmCC"},36057:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAS0lEQVRYR+3UsREAMAgDsbD/PMxHehq3FMoEuUfn6u55B175yLqCIpulIoqkqWKEEUZSAUZSITvCCCOpACOpkB1hhJFUgJFU6MyOfASiah+48bsdAAAAAElFTkSuQmCC"},5974:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAS0lEQVRYR+3UsREAMAgDsbD/PMxHehq3FMoEuUfn6u55B175yLqCIpulIoqkqWKEEUZSAUZSITvCCCOpACOpkB1hhJFUgJFU6MyOfASiah+48bsdAAAAAElFTkSuQmCC"},59152:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},84105:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},57356:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},71055:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},35399:function(e){"use strict";e.exports=JSON.parse('{"salesLocation":{"today":[["United states","90","$536"],["United kingdom","70","$573"],["Canada","70","$457"],["Japan","30","$524"],["Bangladesh","50","$354"],["India","60","$654"]],"week":[["Japan","90","$336"],["United kingdom","70","$873"],["Canada","70","$557"],["Japan","30","$525"],["Bangladesh","50","$352"],["Pakistan","60","$658"]],"month":[["Russia","90","$534"],["Germany","70","$573"],["Canada","70","$487"],["Japan","30","$514"],["Bangladesh","50","$394"],["Vutan","60","$354"]]},"topSaleProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280","sold":"126","revenue":"$38,536"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"week":[{"key":"1","img":"1.png","name":"Samsung Note 10 256GB","price":"$450","sold":"300","revenue":"$43060"},{"key":"2","img":"2.png","name":"Full Sleeve Shirt","price":"$49","sold":"300","revenue":"$3178"},{"key":"3","img":"3.png","name":"Nike Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Bata Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy Premio 256GB","price":"$670","sold":"126","revenue":"$40,988"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}]},"browserState":{"today":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"}],"week":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"}],"month":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"13025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"13025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"2.5%","cte":"14025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"16025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"11025","goalRate":"90%"}]},"revenueGenerated":{"today":[{"key":"1","icon":"google","name":"Google","visitors":"23,397","pageView":"17,201","revenue":"$5,536","trend":"90","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"23,397","pageView":"14,201","revenue":"$5,536","trend":"57","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"78","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,397","pageView":"13,201","revenue":"$5,536","trend":"96","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"21","type":"warning"}],"week":[{"key":"1","icon":"google","name":"Google","visitors":"26,397","pageView":"53,465","revenue":"$4,617","trend":"70","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"22,454","pageView":"83,734","revenue":"$4,328","trend":"53","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"29,364","pageView":"74,345","revenue":"$6,438","trend":"86","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"24,565","pageView":"24,572","revenue":"$4,257","trend":"98","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"16,637","pageView":"30,234","revenue":"$8,559","trend":"20","type":"warning"}],"month":[{"key":"1","icon":"google","name":"Google","visitors":"29,575","pageView":"11,317","revenue":"$8,472","trend":"60","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"11,159","pageView":"10,470","revenue":"$6,538","trend":"54","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"21,341","pageView":"22,010","revenue":"$6,017","trend":"71","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,258","pageView":"11,184","revenue":"$6,368","trend":"92","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"22,249","pageView":"10,151","revenue":"$5,536","trend":"20","type":"warning"}]},"trafficChannel":[{"icon":"facebook","name":"Facebook","user":"3,397","session":"123","bounce":"2,584","duration":"00:01:05"},{"icon":"twitter","name":"Twitter","user":"2,397","session":"433","bounce":"2,024","duration":"00:02:35"},{"icon":"instagram","name":"Instagram","user":"6,397","session":"234","bounce":"2,404","duration":"00:01:65"},{"icon":"youtube","name":"Youtube","user":"1,397","session":"678","bounce":"2,681","duration":"00:04:05"}],"newProduct":{"today":[{"key":"1","img":"6.png","name":"UV Protected Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Black Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Women Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Mackbook Pro","price":"$38,536"}],"week":[{"key":"1","img":"6.png","name":"New Model Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Smart Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Men Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Toshiba Pro","price":"$38,536"}],"month":[{"key":"1","img":"6.png","name":"Computer Light Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Large Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"High Quality Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Lenovo Pro","price":"$38,536"}]},"bestSeller":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"On Process"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Richard Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Pending"},{"key":"2","img":"11.png","name":"Jhon Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"David Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Pending"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Michel Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"On Process"},{"key":"2","img":"11.png","name":"Christopher Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Joseph White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Richard Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"activeUserData":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Theme Jhone","company":"Daraz","product":"Cool watch","revenue":"$28,336","status":"Done"},{"key":"2","img":"11.png","name":"Elon Mask","company":"Picaboo","product":"Tea Cup","revenue":"$22","status":"Pensing"},{"key":"3","img":"12.png","name":"Shamim Ahmed","company":"Yahoo","product":"Rocking Chair","revenue":"$1,007","status":"Pending"},{"key":"4","img":"13.png","name":"Tanjim Hasan","company":"Sovware","product":"DSLR Camera","revenue":"$1,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"topProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","deals":"$60","amount":"454"},{"key":"3","img":"3.png","name":"Marco Shoes","deals":"$80","amount":"7898"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","deals":"$480","amount":"21"},{"key":"5","img":"4.png","name":"Microlab Headphone","deals":"$10","amount":"56446"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}]},"recentDeal":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$280"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$280"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","price":"$280"},{"key":"5","img":"4.png","name":"Microlab Headphone","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}]},"memberProgressData":{"today":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}],"week":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}],"month":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}]},"resentSeller":{"all":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"pending":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"done":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}]}}')}}]);