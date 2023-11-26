"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={sidebar_label:"ElementHandle.boxModel"},p="ElementHandle.boxModel() method",i={unversionedId:"api/puppeteer.elementhandle.boxmodel",id:"version-21.5.2/api/puppeteer.elementhandle.boxmodel",title:"ElementHandle.boxModel() method",description:"This method returns boxes of the element, or null if the element is not part of the layout (example none).",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.elementhandle.boxmodel.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.boxmodel",permalink:"/api/puppeteer.elementhandle.boxmodel",draft:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"ElementHandle.boxModel"},sidebar:"api",previous:{title:"ElementHandle.boundingBox",permalink:"/api/puppeteer.elementhandle.boundingbox"},next:{title:"ElementHandle.click",permalink:"/api/puppeteer.elementhandle.click"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],u={toc:c};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"elementhandleboxmodel-method"}),"ElementHandle.boxModel() method"),(0,r.kt)("p",null,"This method returns boxes of the element, or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the element is ",(0,r.kt)("a",o({parentName:"p"},{href:"https://drafts.csswg.org/css-display-4/#box-generation"}),"not part of the layout")," (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"display: none"),")."),(0,r.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  boxModel(): Promise<BoxModel | null>;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.boxmodel"}),"BoxModel")," ","|"," null",">"),(0,r.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"Boxes are represented as an array of points; Each Point is an object ",(0,r.kt)("inlineCode",{parentName:"p"},"{x, y}"),". Box points are sorted clock-wise."))}m.isMDXComponent=!0}}]);