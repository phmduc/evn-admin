"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6036,31,9395,6560],{4377:function(n,t,e){e(47313);t.Z=e.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},3284:function(n,t,e){e.r(t),e.d(t,{BtnGroup:function(){return s},Button:function(){return p}});var r=e(1413),a=e(29439),o=e(45987),i=e(47313),d=e(71128),c=e(46417),l=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function p(n){var t=n.type,e=n.shape,p=n.icon,s=n.size,h=n.outlined,u=n.ghost,m=n.transparented,g=n.raised,f=n.squared,x=n.color,b=n.social,y=n.load,v=n.children,w=(0,o.Z)(n,l),j=(0,i.useState)({loading:!1}),k=(0,a.Z)(j,2),C=k[0],Z=k[1];return(0,c.jsx)(d.ButtonStyled,(0,r.Z)((0,r.Z)({squared:f,outlined:h?1:0,ghost:u,transparent:m?1:0,raised:g?1:0,data:t,size:s,shape:e,type:t,icon:p,color:x,social:b,onClick:y&&function(){Z({loading:!0})},loading:C.loading},w),{},{children:v}))}function s(n){var t=n.children;return(0,c.jsx)(d.ButtonStyledGroup,{children:t})}p.defaultProps={type:"default"}},71128:function(n,t,e){e.r(t),e.d(t,{ButtonStyled:function(){return l},ButtonStyledGroup:function(){return p}});var r,a,o=e(30168),i=e(59491),d=e(70244),c=i.Z.Group,l=(0,d.ZP)(i.Z)(r||(r=(0,o.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var t=n.type,e=n.theme;return"default"!==t&&e["".concat(t,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var t=n.theme;return"default"!==n.type?"#ffffff":t[t.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var t=n.size,e=n.theme;return"default"!==t?e["btn-height-".concat(t)]:"44px"}),(function(n){var t=n.type,e=n.theme;return"default"!==t?e["white-color"]:e["light-color"]}),(function(n){var t=n.type,e=n.theme;return"default"!==t&&e["".concat(t,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var t=n.transparent,e=n.theme,r=n.type;return t&&function(n,t){return"\n        background: ".concat(n["".concat(t,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(t,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==t&&n["".concat(t,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==t&&n["".concat(t,"-hover")],"; \n        }\n    ")}(e,r)}),(function(n){var t=n.outlined,e=n.theme,r=n.type;return t&&function(n,t){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==t?n["".concat(t,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==t?n["".concat(t,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==t?n["".concat(t,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==t?n["".concat(t,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==t?n["".concat(t,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(e,r)}),(function(n){var t=n.ghost,e=n.theme;return t&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(e)}),(function(n){var t=n.raised,e=n.theme,r=n.type;return t&&function(n,t){return"\n        box-shadow: 0 8px 13px ".concat("white"!==t?n["".concat(t,"-color")]:n["light-color"],"20;\n    ")}(e,r)}),(function(n){var t=n.squared,e=n.theme,r=n.type;return t&&function(n,t){return"\n    background: ".concat("default"!==t&&n["".concat(t,"-color")],";\n    border: 1px solid ").concat("default"!==t?n["".concat(t,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==t&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        border: 1px solid ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        color: ").concat("default"!==t&&"#ffffff",";\n    }\n")}(e,r)}),(function(n){var t=n.squared,e=n.outlined,r=n.theme,a=n.type;return t&&e&&function(n,t){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==t?n["".concat(t,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==t&&n["".concat(t,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        border: 1px solid ").concat("default"!==t&&n["".concat(t,"-hover")],";\n        color: ").concat((function(n){var t=n.theme;return"default"!==n.type&&t["white-color"]}),";\n    }\n")}(r,a)}),(function(n){var t=n.social,e=n.color,r=n.shape;return t&&function(n,t){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(t?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(e,r)})),p=(0,d.ZP)(c)(a||(a=(0,o.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var t=n.theme;return t[t.mainContent].bgNormal}))},54987:function(n,t,e){e.r(t),e.d(t,{Cards:function(){return l}});var r=e(38537),a=(e(47313),e(2135)),o=e(24728),i=e(90722),d=e(33464),c=e(46417);function l(n){var t=n.title,e=n.children,l=n.more,p=n.moreText,s=n.size,h=n.headless,u=n.caption,m=n.isbutton,g=n.bodyStyle,f=n.headStyle,x=n.border,b=n.bodypadding,y=n.className;return(0,c.jsx)(c.Fragment,{children:h?(0,c.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:g&&g,size:s,style:{width:"100%"},bordered:x,className:y,children:[t&&(0,c.jsx)(d.default,{as:"h4",children:t}),u&&(0,c.jsx)("p",{children:u}),e]}):(0,c.jsx)(o.CardFrame,{size:s,title:t,bodyStyle:g&&g,headStyle:f&&f,bordered:x,className:y,bodypadding:b&&b,extra:(0,c.jsxs)(c.Fragment,{children:[l&&(0,c.jsx)(i.Dropdown,{content:l,placement:"bottom",children:(0,c.jsx)(a.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:p?"More":(0,c.jsx)(r.Z,{})})}),m&&m]}),style:{width:"100%"},children:e})})}l.defaultProps={border:!1}},24728:function(n,t,e){e.r(t),e.d(t,{CardFrame:function(){return d}});var r,a=e(30168),o=e(28080),i=e(70244),d=(0,i.ZP)(o.Z)(r||(r=(0,a.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var t=n.isbutton,e=n.theme;return t&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(e)}),(function(n){var t=n.theme;return t[t.mainContent]["white-background"]}),(function(n){var t=n.theme;return t[t.mainContent]["border-color-default"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.bodypadding;return t?"".concat(t," !important"):"25px !important"}),(function(n){var t=n.bodypadding;return t?"".concat(t," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent].Warning}),(function(n){var t=n.theme;return t[t.mainContent].success}),(function(n){var t=n.theme;return t[t.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},24441:function(n,t,e){e.r(t),e.d(t,{PageHeader:function(){return c}});var r=e(28709),a=e(2135),o=e(79585),i=e(7489),d=e(46417);function c(n){var t=n.title,c=n.subTitle,l=n.routes,p=n.buttons,s=n.ghost,h=n.bgColor,u=n.className,m=l?(0,d.jsx)(r.Z,{separator:(0,d.jsx)("span",{className:"ninjadash-seperator"}),children:l.map((function(n,t){return t+1===l.length?(0,d.jsx)(r.Z.Item,{children:n.breadcrumbName},t):(0,d.jsxs)(r.Z.Item,{children:[(0,d.jsx)(o.Q,{src:e(4377).Z})," ",(0,d.jsx)(a.rU,{to:n.path,children:n.breadcrumbName})]},t)}))}):"";return(0,d.jsx)(i.HeaderWrapper,{bgColor:h,children:(0,d.jsx)(i.PageHeaderStyle,{className:u,title:t,subTitle:c,breadcrumb:m,extra:p,ghost:s})})}},7489:function(n,t,e){e.r(t),e.d(t,{HeaderWrapper:function(){return l},PageHeaderStyle:function(){return c}});var r,a,o=e(30168),i=e(94475),d=e(70244),c=(0,d.ZP)(i.Z)(r||(r=(0,o.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var t=n.theme;return t[t.mainContent]["main-background-light"]}),(function(n){var t=n.theme;return t[t.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var t=n.theme;return t[t.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var t=n.theme;return t[t.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-light-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]})),l=d.ZP.div(a||(a=(0,o.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var t=n.theme;return n.bgColor||t[t.mainContent]["main-background-light"]}),(function(n){var t=n.theme;return t[t.mainContent]["dark-text"]}),(function(n){var t=n.theme;return t[t.mainContent]["gray-text"]}))},16036:function(n,t,e){e.r(t);e(47313);var r=e(55291),a=e(68197),o=e(59624),i=e(57325),d=e(61033),c=e(39548),l=e(67440),p=e(2135),s=e(8281),h=e(24441),u=e(23008),m=e(54987),g=e(90722),f=e(3284),x=e(46417);t.default=function(){return(0,x.jsxs)(s.DropdownStyle,{children:[(0,x.jsx)(h.PageHeader,{className:"ninjadash-page-header-main",title:"Dropdown",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Dropdown"}]}),(0,x.jsx)(u.Main,{children:(0,x.jsxs)(a.Z,{gutter:25,children:[(0,x.jsxs)(o.Z,{md:12,xs:24,children:[(0,x.jsx)(m.Cards,{title:"Basic Dropdown",caption:"The simplest use of Steps",children:(0,x.jsx)(g.Dropdown,{placement:"bottomLeft",children:(0,x.jsx)(p.rU,{to:"#",children:"Hover me"})})}),(0,x.jsxs)(m.Cards,{title:"Event menu ",caption:"The simplest use of Dropdown",children:[(0,x.jsx)(g.Dropdown,{action:["hover"],placement:"bottomLeft",children:(0,x.jsx)(p.rU,{to:"#",children:"hover me "})}),(0,x.jsx)(g.Dropdown,{action:["click"],placement:"bottom",children:(0,x.jsx)(p.rU,{to:"#",children:"click "})}),(0,x.jsx)(g.Dropdown,{action:["contextMenu"],placement:"bottomRight",children:(0,x.jsx)(p.rU,{to:"#",children:"context"})})]})]}),(0,x.jsxs)(o.Z,{md:12,xs:24,children:[(0,x.jsxs)(m.Cards,{title:"Placement",caption:"The simplest use of Dropdown",children:[(0,x.jsx)(g.Dropdown,{placement:"bottomLeft",children:(0,x.jsx)(f.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Bottom Left"})}),(0,x.jsx)(g.Dropdown,{placement:"bottom",children:(0,x.jsx)(f.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Bottom Center"})}),(0,x.jsx)(g.Dropdown,{placement:"bottomRight",children:(0,x.jsx)(f.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Bottom Right"})}),(0,x.jsx)("br",{}),(0,x.jsx)(g.Dropdown,{placement:"topLeft",children:(0,x.jsx)(f.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Top Left"})}),(0,x.jsx)(g.Dropdown,{placement:"topCenter",children:(0,x.jsx)(f.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Top Center"})}),(0,x.jsx)(g.Dropdown,{placement:"topRight",children:(0,x.jsx)(f.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Top Right"})})]}),(0,x.jsx)(m.Cards,{title:"Button with dropdown menu",caption:"The simplest use of Dropdown",children:(0,x.jsxs)(s.DropdownIconStyleWrapper,{children:[(0,x.jsxs)(f.Button,{onClick:function(){r.ZP.info("Click on left button.")},className:"btn-outlined",size:"default",outlined:!0,type:"light",children:["Bottom Left Click",(0,x.jsx)(g.Dropdown,{placement:"bottomLeft",action:["hover"],children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsxs)(f.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Bottom Right hover",(0,x.jsx)(g.Dropdown,{placement:"bottomRight",title:"with title",children:(0,x.jsx)(c.Z,{})})]}),(0,x.jsxs)(f.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Top Left hover",(0,x.jsx)(g.Dropdown,{placement:"topLeft",children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsxs)(f.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Top Right hover",(0,x.jsx)(g.Dropdown,{placement:"topRight",children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsxs)(f.Button,{className:"btn-outlined",outlined:!0,type:"error",children:[(0,x.jsx)(i.Z,{title:"tooltip",children:"Tooltip"},"leftButton"),(0,x.jsx)(g.Dropdown,{placement:"bottomLeft",size:"small",children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsxs)(f.Button,{className:"btn-outlined",outlined:!0,type:"warning",children:["Warning",(0,x.jsx)(g.Dropdown,{placement:"bottomLeft",size:"small",children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsxs)(f.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Info",(0,x.jsx)(g.Dropdown,{placement:"bottomLeft",size:"small",children:(0,x.jsx)(l.Z,{})})]})]})})]})]})})]})}},39548:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(1413),a=e(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},i=e(6476),d=function(n,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};d.displayName="UserOutlined";var c=a.forwardRef(d)}}]);