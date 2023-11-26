"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,d=m["".concat(l,".").concat(h)]||m[h]||s[h]||a;return r?n.createElement(d,c(c({ref:t},i),{},{components:r})):n.createElement(d,c({ref:t},i))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>i});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={sidebar_label:"Touchscreen.touchMove"},p="Touchscreen.touchMove() method",l={unversionedId:"api/puppeteer.touchscreen.touchmove",id:"api/puppeteer.touchscreen.touchmove",title:"Touchscreen.touchMove() method",description:"Dispatches a touchMove event.",source:"@site/../docs/api/puppeteer.touchscreen.touchmove.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen.touchmove",permalink:"/next/api/puppeteer.touchscreen.touchmove",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Touchscreen.touchMove"},sidebar:"api",previous:{title:"Touchscreen.touchEnd",permalink:"/next/api/puppeteer.touchscreen.touchend"},next:{title:"Touchscreen.touchStart",permalink:"/next/api/puppeteer.touchscreen.touchstart"}},u={},i=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:i};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"touchscreentouchmove-method"}),"Touchscreen.touchMove() method"),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"touchMove")," event."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Touchscreen {\n  abstract touchMove(x: number, y: number): Promise<void>;\n}\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Horizontal position of the move.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Vertical position of the move.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Not every ",(0,n.kt)("inlineCode",{parentName:"p"},"touchMove")," call results in a ",(0,n.kt)("inlineCode",{parentName:"p"},"touchmove")," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model"}),"throttles")," touch move events."))}m.isMDXComponent=!0}}]);