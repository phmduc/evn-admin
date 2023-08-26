"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[3704],{54987:function(n,e,t){t.r(e),t.d(e,{Cards:function(){return d}});var r=t(38537),a=(t(47313),t(2135)),o=t(24728),i=t(90722),l=t(33464),s=t(46417);function d(n){var e=n.title,t=n.children,d=n.more,c=n.moreText,u=n.size,p=n.headless,f=n.caption,h=n.isbutton,b=n.bodyStyle,x=n.headStyle,g=n.border,m=n.bodypadding,y=n.className;return(0,s.jsx)(s.Fragment,{children:p?(0,s.jsxs)(o.CardFrame,{bodypadding:m&&m,bodyStyle:b&&b,size:u,style:{width:"100%"},bordered:g,className:y,children:[e&&(0,s.jsx)(l.default,{as:"h4",children:e}),f&&(0,s.jsx)("p",{children:f}),t]}):(0,s.jsx)(o.CardFrame,{size:u,title:e,bodyStyle:b&&b,headStyle:x&&x,bordered:g,className:y,bodypadding:m&&m,extra:(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)(i.Dropdown,{content:d,placement:"bottom",children:(0,s.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:c?"More":(0,s.jsx)(r.Z,{})})}),h&&h]}),style:{width:"100%"},children:t})})}d.defaultProps={border:!1}},24728:function(n,e,t){t.r(e),t.d(e,{CardFrame:function(){return l}});var r,a=t(30168),o=t(28080),i=t(70244),l=(0,i.ZP)(o.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var e=n.isbutton,t=n.theme;return e&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(t)}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"25px !important"}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent].Warning}),(function(n){var e=n.theme;return e[e.mainContent].success}),(function(n){var e=n.theme;return e[e.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},28019:function(n,e,t){t.r(e),t.d(e,{MainWraper:function(){return l},SocialIcon:function(){return s}});var r,a,o=t(30168),i=t(70244),l=i.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 18px 0;\n  h1{\n    font-size: 22px;\n    font-weight: 600;\n    padding-top: 5px;\n    margin: 0;\n  }\n  p{\n    margin: 0;\n    color: #868EAE;\n  }\n  .social-icon{\n    span{\n      font-size: 20px;\n    }\n  }\n"]))),s=i.ZP.div(a||(a=(0,o.Z)(["\n  width: 50px;\n  height: 50px;\n  background: ",";\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n"])),(function(n){return n.bgColor}))},93282:function(n,e,t){t.r(e),t.d(e,{SocialMediaContent:function(){return s}});t(47313);var r=t(21280),a=t.n(r),o=t(28019),i=t(33464),l=t(46417);function s(n){var e=n.icon,t=n.bgColor,r=n.title,s=n.subTitle;return(0,l.jsxs)(o.MainWraper,{children:[(0,l.jsx)(o.SocialIcon,{className:"social-icon",bgColor:t,children:(0,l.jsx)(a(),{className:"super-crazy-colors",name:e,size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}})}),(0,l.jsx)(i.default,{as:"h1",children:r}),(0,l.jsx)("p",{children:s})]})}},83704:function(n,e,t){t.r(e);t(47313);var r=t(68197),a=t(59624),o=t(4389),i=t(54987),l=t(93282),s=t(46417);e.default=function(){return(0,s.jsx)(o.SocialMediaWrapper,{children:(0,s.jsx)(i.Cards,{title:"Social Media Overview",size:"large",children:(0,s.jsxs)(r.Z,{gutter:25,children:[(0,s.jsx)(a.Z,{xxl:8,md:4,xs:8,children:(0,s.jsx)(l.SocialMediaContent,{icon:"facebook",bgColor:"#2366B8",title:"5,461",subTitle:"Likes"})}),(0,s.jsx)(a.Z,{xxl:8,md:4,xs:8,children:(0,s.jsx)(l.SocialMediaContent,{icon:"twitter",bgColor:"#00ABE4",title:"5,461",subTitle:"Followers"})}),(0,s.jsx)(a.Z,{xxl:8,md:4,xs:8,children:(0,s.jsx)(l.SocialMediaContent,{icon:"instagram",bgColor:"linear-gradient(to top, #ffc107 0%,#f44336 31%,#9c27b0 65%,#9c27b0 100%)",title:"5,461",subTitle:"Followers"})}),(0,s.jsx)(a.Z,{xxl:8,md:4,xs:8,children:(0,s.jsx)(l.SocialMediaContent,{icon:"youtube-play",bgColor:"#E32212",title:"5,461",subTitle:"Subscribers"})}),(0,s.jsx)(a.Z,{xxl:8,md:4,xs:8,children:(0,s.jsx)(l.SocialMediaContent,{icon:"pinterest-p",bgColor:"#E32212",title:"5,461",subTitle:"Followers"})}),(0,s.jsx)(a.Z,{xxl:8,md:4,xs:8,children:(0,s.jsx)(l.SocialMediaContent,{icon:"linkedin",bgColor:"#007CBC",title:"5,461",subTitle:"Followers"})})]})})})}},21280:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=l(t(47313)),i=l(t(75192));function l(n){return n&&n.__esModule?n:{default:n}}var s=function(n){function e(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.displayName="FontAwesome",n}return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),a(e,[{key:"render",value:function(){var n=this.props,e=n.border,t=n.cssModule,a=n.className,i=n.fixedWidth,l=n.flip,s=n.inverse,d=n.name,c=n.pulse,u=n.rotate,p=n.size,f=n.spin,h=n.stack,b=n.tag,x=void 0===b?"span":b,g=n.ariaLabel,m=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(n,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),y=g?{"aria-label":g}:{"aria-hidden":!0},v=[];return t?(v.push(t.fa),v.push(t["fa-"+d]),p&&v.push(t["fa-"+p]),f&&v.push(t["fa-spin"]),c&&v.push(t["fa-pulse"]),e&&v.push(t["fa-border"]),i&&v.push(t["fa-fw"]),s&&v.push(t["fa-inverse"]),l&&v.push(t["fa-flip-"+l]),u&&v.push(t["fa-rotate-"+u]),h&&v.push(t["fa-stack-"+h])):(v.push("fa"),v.push("fa-"+d),p&&v.push("fa-"+p),f&&v.push("fa-spin"),c&&v.push("fa-pulse"),e&&v.push("fa-border"),i&&v.push("fa-fw"),s&&v.push("fa-inverse"),l&&v.push("fa-flip-"+l),u&&v.push("fa-rotate-"+u),h&&v.push("fa-stack-"+h)),a&&v.push(a),o.default.createElement(x,r({},m,y,{className:v.join(" ")}))}}]),e}(o.default.Component);s.propTypes={ariaLabel:i.default.string,border:i.default.bool,className:i.default.string,cssModule:i.default.object,fixedWidth:i.default.bool,flip:i.default.oneOf(["horizontal","vertical"]),inverse:i.default.bool,name:i.default.string.isRequired,pulse:i.default.bool,rotate:i.default.oneOf([90,180,270]),size:i.default.oneOf(["lg","2x","3x","4x","5x"]),spin:i.default.bool,stack:i.default.oneOf(["1x","2x"]),tag:i.default.string},e.default=s,n.exports=e.default}}]);