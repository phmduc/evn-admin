"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9866],{54987:function(n,e,t){t.r(e),t.d(e,{Cards:function(){return l}});var r=t(38537),a=(t(47313),t(2135)),i=t(24728),s=t(90722),o=t(33464),d=t(46417);function l(n){var e=n.title,t=n.children,l=n.more,c=n.moreText,h=n.size,p=n.headless,x=n.caption,u=n.isbutton,m=n.bodyStyle,f=n.headStyle,g=n.border,b=n.bodypadding,v=n.className;return(0,d.jsx)(d.Fragment,{children:p?(0,d.jsxs)(i.CardFrame,{bodypadding:b&&b,bodyStyle:m&&m,size:h,style:{width:"100%"},bordered:g,className:v,children:[e&&(0,d.jsx)(o.default,{as:"h4",children:e}),x&&(0,d.jsx)("p",{children:x}),t]}):(0,d.jsx)(i.CardFrame,{size:h,title:e,bodyStyle:m&&m,headStyle:f&&f,bordered:g,className:v,bodypadding:b&&b,extra:(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(s.Dropdown,{content:l,placement:"bottom",children:(0,d.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:c?"More":(0,d.jsx)(r.Z,{})})}),u&&u]}),style:{width:"100%"},children:t})})}l.defaultProps={border:!1}},24728:function(n,e,t){t.r(e),t.d(e,{CardFrame:function(){return o}});var r,a=t(30168),i=t(28080),s=t(70244),o=(0,s.ZP)(i.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var e=n.isbutton,t=n.theme;return e&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(t)}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"25px !important"}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent].Warning}),(function(n){var e=n.theme;return e[e.mainContent].success}),(function(n){var e=n.theme;return e[e.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},95597:function(n,e,t){t.r(e);t(47313);var r=t(30646),a=t(64843),i=t(57366),s=t(1084),o=t(4389),d=t(54987),l=t(33464),c=t(3284),h=t(90722),p=t(46417);e.default=function(){var n=(0,s.v9)((function(n){return{rtl:n.ChangeLayoutMode.rtlData}})).rtl;return(0,p.jsxs)(o.OverviewCard,{children:[(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between overview-head",children:[(0,p.jsx)(l.default,{as:"h4",children:"Daily Overview"}),(0,p.jsx)(h.Dropdown,{children:(0,p.jsxs)(c.Button,{children:["Export ",(0,p.jsx)(i.Z,{})]})})]}),(0,p.jsx)("div",{className:"overview-box",children:(0,p.jsxs)(d.Cards,{headless:!0,children:[(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,p.jsxs)("div",{className:"overview-box-single",children:[(0,p.jsx)(l.default,{as:"h2",className:"color-primary",children:"5,461"}),(0,p.jsx)("p",{children:"Users Today"})]}),(0,p.jsxs)("div",{className:"overview-box-single text-right",children:[(0,p.jsx)(l.default,{as:"h2",children:"8,085"}),(0,p.jsx)("p",{children:"Expected Users"})]})]}),(0,p.jsx)(r.Z,{percent:70,showInfo:!1,className:"progress-primary"}),(0,p.jsxs)("p",{children:[(0,p.jsxs)("span",{className:"growth-upward",children:[(0,p.jsx)(a.Z,{}),"25% ",(0,p.jsx)("span",{children:"Since yesterday"})]}),(0,p.jsx)("span",{className:"overview-box-percentage",style:{float:n?"left":"right"},children:"70%"})]})]})}),(0,p.jsx)("div",{className:"overview-box",children:(0,p.jsxs)(d.Cards,{headless:!0,children:[(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,p.jsxs)("div",{className:"overview-box-single",children:[(0,p.jsx)(l.default,{as:"h2",className:"color-info",children:"140"}),(0,p.jsx)("p",{children:"Goals Today"})]}),(0,p.jsxs)("div",{className:"overview-box-single text-right",children:[(0,p.jsx)(l.default,{as:"h2",children:"120"}),(0,p.jsx)("p",{children:"Expected Goals"})]})]}),(0,p.jsx)(r.Z,{percent:70,showInfo:!1,className:"progress-info"}),(0,p.jsxs)("p",{children:[(0,p.jsxs)("span",{className:"growth-downward",children:[(0,p.jsx)(i.Z,{}),"25% ",(0,p.jsx)("span",{children:"Since yesterday"})]}),(0,p.jsx)("span",{className:"overview-box-percentage",style:{float:n?"left":"right"},children:"70%"})]})]})})]})}},43681:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413),a=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},s=t(6476),o=function(n,e){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:i}))};o.displayName="CheckOutlined";var d=a.forwardRef(o)},64843:function(n,e,t){var r=t(1413),a=t(45987),i=t(61962),s=t(75192),o=t.n(s),d=["color","size"],l=function(n){var e=n.color,t=n.size,s=(0,a.Z)(n,d);return i.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e},s),i.createElement("path",{d:"M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"}))};l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.defaultProps={color:"currentColor",size:"24"},e.Z=l}}]);