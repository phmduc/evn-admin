"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[1919,31,9395,6560],{4377:function(n,e,t){t(47313);e.Z=t.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},3284:function(n,e,t){t.r(e),t.d(e,{BtnGroup:function(){return p},Button:function(){return s}});var a=t(1413),r=t(29439),o=t(45987),i=t(47313),l=t(71128),d=t(46417),c=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function s(n){var e=n.type,t=n.shape,s=n.icon,p=n.size,h=n.outlined,u=n.ghost,m=n.transparented,x=n.raised,g=n.squared,f=n.color,b=n.social,v=n.load,y=n.children,j=(0,o.Z)(n,c),k=(0,i.useState)({loading:!1}),w=(0,r.Z)(k,2),C=w[0],Z=w[1];return(0,d.jsx)(l.ButtonStyled,(0,a.Z)((0,a.Z)({squared:g,outlined:h?1:0,ghost:u,transparent:m?1:0,raised:x?1:0,data:e,size:p,shape:t,type:e,icon:s,color:f,social:b,onClick:v&&function(){Z({loading:!0})},loading:C.loading},j),{},{children:y}))}function p(n){var e=n.children;return(0,d.jsx)(l.ButtonStyledGroup,{children:e})}s.defaultProps={type:"default"}},71128:function(n,e,t){t.r(e),t.d(e,{ButtonStyled:function(){return c},ButtonStyledGroup:function(){return s}});var a,r,o=t(30168),i=t(59491),l=t(70244),d=i.Z.Group,c=(0,l.ZP)(i.Z)(a||(a=(0,o.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var e=n.theme;return"default"!==n.type?"#ffffff":e[e.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var e=n.size,t=n.theme;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(function(n){var e=n.type,t=n.theme;return"default"!==e?t["white-color"]:t["light-color"]}),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.transparent,t=n.theme,a=n.type;return e&&function(n,e){return"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    ")}(t,a)}),(function(n){var e=n.outlined,t=n.theme,a=n.type;return e&&function(n,e){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,a)}),(function(n){var e=n.ghost,t=n.theme;return e&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var e=n.raised,t=n.theme,a=n.type;return e&&function(n,e){return"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    ")}(t,a)}),(function(n){var e=n.squared,t=n.theme,a=n.type;return e&&function(n,e){return"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n")}(t,a)}),(function(n){var e=n.squared,t=n.outlined,a=n.theme,r=n.type;return e&&t&&function(n,e){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((function(n){var e=n.theme;return"default"!==n.type&&e["white-color"]}),";\n    }\n")}(a,r)}),(function(n){var e=n.social,t=n.color,a=n.shape;return e&&function(n,e){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,a)})),s=(0,l.ZP)(d)(r||(r=(0,o.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var e=n.theme;return e[e.mainContent].bgNormal}))},54987:function(n,e,t){t.r(e),t.d(e,{Cards:function(){return c}});var a=t(38537),r=(t(47313),t(2135)),o=t(24728),i=t(90722),l=t(33464),d=t(46417);function c(n){var e=n.title,t=n.children,c=n.more,s=n.moreText,p=n.size,h=n.headless,u=n.caption,m=n.isbutton,x=n.bodyStyle,g=n.headStyle,f=n.border,b=n.bodypadding,v=n.className;return(0,d.jsx)(d.Fragment,{children:h?(0,d.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:x&&x,size:p,style:{width:"100%"},bordered:f,className:v,children:[e&&(0,d.jsx)(l.default,{as:"h4",children:e}),u&&(0,d.jsx)("p",{children:u}),t]}):(0,d.jsx)(o.CardFrame,{size:p,title:e,bodyStyle:x&&x,headStyle:g&&g,bordered:f,className:v,bodypadding:b&&b,extra:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.Dropdown,{content:c,placement:"bottom",children:(0,d.jsx)(r.rU,{onClick:function(n){return n.preventDefault()},to:"#",children:s?"More":(0,d.jsx)(a.Z,{})})}),m&&m]}),style:{width:"100%"},children:t})})}c.defaultProps={border:!1}},24728:function(n,e,t){t.r(e),t.d(e,{CardFrame:function(){return l}});var a,r=t(30168),o=t(28080),i=t(70244),l=(0,i.ZP)(o.Z)(a||(a=(0,r.Z)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(function(n){var e=n.isbutton,t=n.theme;return e&&function(n){return"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n")}(t)}),(function(n){var e=n.theme;return e[e.mainContent]["white-background"]}),(function(n){var e=n.theme;return e[e.mainContent]["border-color-default"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"25px !important"}),(function(n){var e=n.bodypadding;return e?"".concat(e," !important"):"15px !important"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent].Warning}),(function(n){var e=n.theme;return e[e.mainContent].success}),(function(n){var e=n.theme;return e[e.mainContent].danger}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-left":" margin-right"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" margin-right":" margin-left"}),(function(n){return n.theme.rtl?" right":" left"}))},24441:function(n,e,t){t.r(e),t.d(e,{PageHeader:function(){return d}});var a=t(28709),r=t(2135),o=t(79585),i=t(7489),l=t(46417);function d(n){var e=n.title,d=n.subTitle,c=n.routes,s=n.buttons,p=n.ghost,h=n.bgColor,u=n.className,m=c?(0,l.jsx)(a.Z,{separator:(0,l.jsx)("span",{className:"ninjadash-seperator"}),children:c.map((function(n,e){return e+1===c.length?(0,l.jsx)(a.Z.Item,{children:n.breadcrumbName},e):(0,l.jsxs)(a.Z.Item,{children:[(0,l.jsx)(o.Q,{src:t(4377).Z})," ",(0,l.jsx)(r.rU,{to:n.path,children:n.breadcrumbName})]},e)}))}):"";return(0,l.jsx)(i.HeaderWrapper,{bgColor:h,children:(0,l.jsx)(i.PageHeaderStyle,{className:u,title:e,subTitle:d,breadcrumb:m,extra:s,ghost:p})})}},7489:function(n,e,t){t.r(e),t.d(e,{HeaderWrapper:function(){return c},PageHeaderStyle:function(){return d}});var a,r,o=t(30168),i=t(94475),l=t(70244),d=(0,l.ZP)(i.Z)(a||(a=(0,o.Z)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){var e=n.theme;return e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["main-background"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["extra-light"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){var e=n.theme;return e[e.mainContent]["menu-active"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme.rtl?"margin-left":"margin-right"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"right":"left"}),(function(n){return n.theme.rtl?"padding-right":"padding-left"}),(function(n){var e=n.theme;return e[e.mainContent]["light-text"]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){return n.theme["primary-color"]}),(function(n){return n.theme["primary-color"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-light-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]})),c=l.ZP.div(r||(r=(0,o.Z)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(function(n){var e=n.theme;return n.bgColor||e[e.mainContent]["main-background-light"]}),(function(n){var e=n.theme;return e[e.mainContent]["dark-text"]}),(function(n){var e=n.theme;return e[e.mainContent]["gray-text"]}))},92017:function(n,e,t){t.r(e);var a=t(1413),r=t(29439),o=t(47313),i=t(68197),l=t(59624),d=t(72652),c=t(58467),s=t(60213),p=t(34794),h=t(58034),u=t(34996),m=t(37167),x=t(3811),g=t(39673),f=t(24441),b=t(54987),v=t(23008),y=t(3284),j=t(46417),k=(0,o.lazy)((function(){return Promise.all([t.e(1874),t.e(5192),t.e(3393),t.e(7605),t.e(9483),t.e(870),t.e(5268),t.e(6992),t.e(4181),t.e(6018),t.e(7127),t.e(3006),t.e(2029),t.e(6673),t.e(955),t.e(913),t.e(5407),t.e(2741),t.e(7238),t.e(980),t.e(6706),t.e(9566),t.e(4762),t.e(9674),t.e(8949),t.e(8642),t.e(9846),t.e(8281),t.e(2034),t.e(5437),t.e(8695),t.e(3505),t.e(4150),t.e(1096),t.e(1807),t.e(2877)]).then(t.bind(t,89316))})),w=(0,o.lazy)((function(){return Promise.all([t.e(1874),t.e(5192),t.e(3393),t.e(7605),t.e(9483),t.e(870),t.e(5268),t.e(6992),t.e(4181),t.e(6018),t.e(7127),t.e(3006),t.e(2029),t.e(6673),t.e(955),t.e(913),t.e(5407),t.e(2741),t.e(7238),t.e(980),t.e(6706),t.e(9566),t.e(4762),t.e(9674),t.e(8949),t.e(8642),t.e(9846),t.e(8281),t.e(2034),t.e(5437),t.e(8695),t.e(3505),t.e(4150),t.e(1096),t.e(1807),t.e(2877)]).then(t.bind(t,6406))})),C=(0,o.lazy)((function(){return Promise.all([t.e(1874),t.e(5192),t.e(3393),t.e(7605),t.e(9483),t.e(870),t.e(5268),t.e(6992),t.e(4181),t.e(6018),t.e(7127),t.e(3006),t.e(2029),t.e(6673),t.e(955),t.e(913),t.e(5407),t.e(2741),t.e(7238),t.e(980),t.e(6706),t.e(9566),t.e(4762),t.e(9674),t.e(8949),t.e(8642),t.e(9846),t.e(8281),t.e(2034),t.e(5437),t.e(8695),t.e(3505),t.e(4150),t.e(1096),t.e(1807),t.e(2877)]).then(t.bind(t,86207))})),Z=(0,o.lazy)((function(){return Promise.all([t.e(1874),t.e(5192),t.e(3393),t.e(7605),t.e(9483),t.e(870),t.e(5268),t.e(6992),t.e(4181),t.e(6018),t.e(7127),t.e(3006),t.e(2029),t.e(6673),t.e(955),t.e(913),t.e(5407),t.e(2741),t.e(7238),t.e(980),t.e(6706),t.e(9566),t.e(4762),t.e(9674),t.e(8949),t.e(8642),t.e(9846),t.e(8281),t.e(2034),t.e(5437),t.e(8695),t.e(3505),t.e(4150),t.e(1096),t.e(1807),t.e(2877)]).then(t.bind(t,25554))})),N=(0,o.lazy)((function(){return Promise.all([t.e(1874),t.e(5192),t.e(3393),t.e(7605),t.e(9483),t.e(870),t.e(5268),t.e(6992),t.e(4181),t.e(6018),t.e(7127),t.e(3006),t.e(2029),t.e(6673),t.e(955),t.e(913),t.e(5407),t.e(2741),t.e(7238),t.e(980),t.e(6706),t.e(9566),t.e(4762),t.e(9674),t.e(8949),t.e(8642),t.e(9846),t.e(8281),t.e(2034),t.e(5437),t.e(8695),t.e(3505),t.e(4150),t.e(1096),t.e(1807),t.e(2877)]).then(t.bind(t,26979))})),z=(0,o.lazy)((function(){return Promise.all([t.e(1874),t.e(5192),t.e(3393),t.e(7605),t.e(9483),t.e(870),t.e(5268),t.e(6992),t.e(4181),t.e(6018),t.e(7127),t.e(3006),t.e(2029),t.e(6673),t.e(955),t.e(913),t.e(5407),t.e(2741),t.e(7238),t.e(980),t.e(6706),t.e(9566),t.e(4762),t.e(9674),t.e(8949),t.e(8642),t.e(9846),t.e(8281),t.e(2034),t.e(5437),t.e(8695),t.e(3505),t.e(4150),t.e(1096),t.e(1807),t.e(2877)]).then(t.bind(t,74205))})),P=(0,o.lazy)((function(){return t.e(3936).then(t.bind(t,23936))}));e.default=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],S=e[1],L=(0,o.useState)({responsive:0,collapsed:!1}),B=(0,r.Z)(L,2),D=B[0],A=B[1],W=D.responsive,H=D.collapsed;(0,o.useLayoutEffect)((function(){function n(){var n=window.innerWidth;A({responsive:n})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]);var E=function(){A((0,a.Z)((0,a.Z)({},D),{},{collapsed:!H}))},F=function(){S(!t)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f.PageHeader,{className:"ninjadash-page-header-main",title:"Dashboard",routes:[{path:"/admin",breadcrumbName:"Email"},{path:"",breadcrumbName:"Email"}]}),t&&(0,j.jsx)(x.default,{close:function(){S(!1)}}),(0,j.jsx)(v.Main,{children:(0,j.jsx)(g.EmailWrapper,{children:(0,j.jsxs)(i.Z,{gutter:25,children:[(0,j.jsxs)(l.Z,{className:"trigger-col",xxl:5,xl:7,lg:8,xs:24,children:[W<=991&&(0,j.jsx)(y.Button,{type:"link",className:"mail-sidebar-trigger",style:{marginTop:0},onClick:E,children:H?(0,j.jsx)(h.Z,{}):(0,j.jsx)(u.Z,{})}),W>991?(0,j.jsx)("div",{className:"mail-sideabr",children:(0,j.jsxs)(b.Cards,{headless:!0,children:[(0,j.jsx)("div",{className:"mail-sidebar-top",children:(0,j.jsxs)(y.Button,{onClick:F,shape:"round",type:"primary",size:"default",block:!0,children:[(0,j.jsx)(s.Z,{})," Compose"]})}),(0,j.jsx)("div",{className:"mail-sidebar-bottom",children:(0,j.jsx)(m.default,{})})]})}):(0,j.jsx)(g.MailSideBar,{className:H?"mail-sideabr show":"mail-sideabr hide",children:(0,j.jsxs)(b.Cards,{headless:!0,children:[(0,j.jsx)(y.Button,{type:"link",className:"mail-sidebar-trigger trigger-close",style:{marginTop:0},onClick:E,children:(0,j.jsx)(p.Z,{})}),(0,j.jsx)("div",{className:"mail-sidebar-top",children:(0,j.jsx)(y.Button,{onClick:F,shape:"round",type:"primary",size:"default",block:!0,children:"+ Compose"})}),(0,j.jsx)("div",{className:"mail-sidebar-bottom",children:(0,j.jsx)(m.default,{toggleCollapsed:E})})]})})]}),(0,j.jsx)(l.Z,{xxl:19,xl:17,lg:16,children:(0,j.jsx)(o.Suspense,{fallback:(0,j.jsx)("div",{className:"spin",children:(0,j.jsx)(d.Z,{})}),children:(0,j.jsxs)(c.Z5,{children:[(0,j.jsx)(c.AW,{path:"inbox",element:(0,j.jsx)(k,{})}),(0,j.jsx)(c.AW,{path:"sent",element:(0,j.jsx)(w,{})}),(0,j.jsx)(c.AW,{path:"drafts",element:(0,j.jsx)(C,{})}),(0,j.jsx)(c.AW,{path:"starred",element:(0,j.jsx)(Z,{})}),(0,j.jsx)(c.AW,{path:"spam",element:(0,j.jsx)(z,{})}),(0,j.jsx)(c.AW,{path:"trash",element:(0,j.jsx)(N,{})}),(0,j.jsx)(c.AW,{path:"single/:id/*",element:(0,j.jsx)(P,{})})]})})})]})})})]})}},37167:function(n,e,t){t.r(e);var a=t(93433),r=t(1413),o=t(29439),i=t(47313),l=t(2135),d=t(12008),c=t(66672),s=t(22458),p=t(57604),h=t(52121),u=t(60213),m=t(29800),x=t(58959),g=t(23350),f=t(55638),b=t(39673),v=t(3284),y=t(33464),j=t(46417),k=i.memo((function(n){var e=n.toggleCollapsed,t=(0,i.useState)({labels:["personal","social","promotions"],newLabel:"",addNewDisplay:!1}),k=(0,o.Z)(t,2),w=k[0],C=k[1],Z=w.labels,N=w.newLabel,z=w.addNewDisplay,P=function(n){n.preventDefault(),C((0,r.Z)((0,r.Z)({},w),{},{addNewDisplay:!0}))},S=function(n){n.preventDefault(),n.stopPropagation(),""!==N?C((0,r.Z)((0,r.Z)({},w),{},{labels:[].concat((0,a.Z)(Z),[N]),newLabel:""})):alert("Please Give a label...")};return(0,j.jsxs)(b.EmailNav,{children:[(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsxs)(l.OL,{to:"./inbox",onClick:e,children:[(0,j.jsx)(s.Z,{}),(0,j.jsxs)("span",{className:"nav-text",children:[(0,j.jsx)("span",{children:"Inbox"}),(0,j.jsx)("span",{className:"badge badge-primary",children:"3"})]})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(l.OL,{to:"./starred",onClick:e,children:[(0,j.jsx)(p.Z,{}),(0,j.jsx)("span",{className:"nav-text",children:(0,j.jsx)("span",{children:"Starred"})})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(l.OL,{to:"./sent",onClick:e,children:[(0,j.jsx)(h.Z,{}),(0,j.jsx)("span",{className:"nav-text",children:(0,j.jsx)("span",{children:"Sent"})})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(l.OL,{to:"./drafts",onClick:e,children:[(0,j.jsx)(m.Z,{}),(0,j.jsx)("span",{className:"nav-text",children:(0,j.jsx)("span",{children:"Drafts"})}),(0,j.jsx)("span",{className:"badge badge-primary",children:"12"})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(l.OL,{to:"./spam",onClick:e,children:[(0,j.jsx)(x.Z,{}),(0,j.jsx)("span",{className:"nav-text",children:(0,j.jsx)("span",{children:"Spam"})})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(l.OL,{to:"./trash",onClick:e,children:[(0,j.jsx)(g.Z,{}),(0,j.jsx)("span",{className:"nav-text",children:(0,j.jsx)("span",{children:"Trash"})})]})})]}),(0,j.jsxs)("div",{className:"nav-labels",children:[(0,j.jsx)("p",{children:"Labels"}),(0,j.jsxs)("ul",{children:[Z.map((function(n){return(0,j.jsx)("li",{children:(0,j.jsxs)(l.rU,{to:"#",children:[(0,j.jsx)(f.Z,{})," ",n]})},n)})),(0,j.jsxs)("li",{className:"add-label-btn",onKeyPress:function(){},onClick:P,role:"menuitem",children:[(0,j.jsxs)(l.OL,{onClick:P,to:"./newLabels",children:[(0,j.jsx)(u.Z,{})," Add New Label"]}),z&&(0,j.jsx)("div",{className:"add-label",children:(0,j.jsxs)(d.Z,{onSubmit:S,children:[(0,j.jsx)(y.default,{label:3,children:"Add New Label"}),(0,j.jsx)(c.Z,{onChange:function(n){C((0,r.Z)((0,r.Z)({},w),{},{newLabel:n.target.value}))},value:N,name:N,type:"text",placeholder:"Enter label name"}),(0,j.jsxs)("div",{className:"btn-group",children:[(0,j.jsx)(v.Button,{size:"default",onClick:S,type:"primary",children:"Add Label"}),(0,j.jsx)(v.Button,{onClick:function(n){n.preventDefault(),n.stopPropagation(),C((0,r.Z)((0,r.Z)({},w),{},{addNewDisplay:!1}))},type:"default",children:"Cancel"})]})]})})]})]})]})]})}));e.default=k}}]);