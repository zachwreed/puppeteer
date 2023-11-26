"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69129],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_label:"Tracing"},p="Tracing class",l={unversionedId:"api/puppeteer.tracing",id:"version-21.5.2/api/puppeteer.tracing",title:"Tracing class",description:"The Tracing class exposes the tracing audit interface.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.tracing.md",sourceDirName:"api",slug:"/api/puppeteer.tracing",permalink:"/api/puppeteer.tracing",draft:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Tracing"},sidebar:"api",previous:{title:"Touchscreen.touchStart",permalink:"/api/puppeteer.touchscreen.touchstart"},next:{title:"Tracing.start",permalink:"/api/puppeteer.tracing.start"}},c={},s=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}],u={toc:s};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"tracing-class"}),"Tracing class"),(0,a.kt)("p",null,"The Tracing class exposes the tracing audit interface."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class Tracing\n")),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.stop")," to create a trace file which can be opened in Chrome DevTools or ",(0,a.kt)("a",n({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tracing")," class."),(0,a.kt)("h2",n({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.tracing.start({path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait page.tracing.stop();\n")),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.tracing.start"}),"start(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Starts a trace for the current page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.tracing.stop"}),"stop()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Stops a trace started with the ",(0,a.kt)("code",null,"start")," method.")))))}d.isMDXComponent=!0}}]);