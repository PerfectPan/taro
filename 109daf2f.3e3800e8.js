(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1735:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},1736:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,c={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}n.d(e,"a",(function(){return a}))},1737:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(0),c=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var u=c.a.createContext({}),b=function(t){var e=c.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},O={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},s=c.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,r=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=b(n),d=a,j=s["".concat(r,".").concat(d)]||s[d]||O[d]||l;return n?c.a.createElement(j,o(o({ref:e},u),{},{components:n})):c.a.createElement(j,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},174:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return b}));var a=n(1735),c=n(1736),l=(n(0),n(1737)),r={title:"Taro.chooseLocation(option)",sidebar_label:"chooseLocation"},o={unversionedId:"apis/location/chooseLocation",id:"apis/location/chooseLocation",isDocsHomePage:!1,title:"Taro.chooseLocation(option)",description:"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002",source:"@site/docs/apis/location/chooseLocation.md",slug:"/apis/location/chooseLocation",permalink:"/taro/docs/next/apis/location/chooseLocation",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/location/chooseLocation.md",version:"current",sidebar_label:"chooseLocation",sidebar:"API",previous:{title:"Taro.getLocation(option)",permalink:"/taro/docs/next/apis/location/getLocation"},next:{title:"Taro.updateShareMenu(option)",permalink:"/taro/docs/next/apis/share/updateShareMenu"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function b(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(l.a)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002"),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"chooseLocation")," api\u529f\u80fd\u662f\u4f9d\u8d56\u4e8e\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 api \u5bc6\u94a5\u3002\u5982\u679c\u60a8\u6ca1\u6709\uff0c\u53ef\u4ee5\u524d\u5f80\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"https://lbs.qq.com/console/mykey.html?console=mykey"}),"\u5f00\u53d1\u8005\u63a7\u5236\u53f0"),"\u8fdb\u884c\u7533\u8bf7\u3002"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(l.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.a)("h3",{id:"option"},"Option"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"complete"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.a)("tr",null,Object(l.a)("td",null,"fail"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.a)("tr",null,Object(l.a)("td",null,"latitude"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u76ee\u6807\u5730\u7eac\u5ea6")),Object(l.a)("tr",null,Object(l.a)("td",null,"longitude"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u76ee\u6807\u5730\u7ecf\u5ea6")),Object(l.a)("tr",null,Object(l.a)("td",null,"success"),Object(l.a)("td",null,Object(l.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"address"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u8be6\u7ec6\u5730\u5740")),Object(l.a)("tr",null,Object(l.a)("td",null,"latitude"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u7eac\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(l.a)("tr",null,Object(l.a)("td",null,"longitude"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u7ecf\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(l.a)("tr",null,Object(l.a)("td",null,"name"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u4f4d\u7f6e\u540d\u79f0")),Object(l.a)("tr",null,Object(l.a)("td",null,"errMsg"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(l.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// config/index.js\n\n// \u83b7\u5f97 api \u5bc6\u94a5\u540e\uff0c\u60a8\u9700\u8981\u5c06\u5b83\u586b\u5165\u9879\u76ee\u7684\u5e38\u91cf\u914d\u7f6e`defineConstants.LOCATION_APIKEY`\u4e2d\uff1a\nconst config = {\n  defineConstants: {\n    LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')\n  },\n  // ...\n}\n")),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.chooseLocation"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0}}]);