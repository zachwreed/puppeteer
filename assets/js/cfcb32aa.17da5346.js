"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||p;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"PuppeteerNode.launch"},i="PuppeteerNode.launch() method",l={unversionedId:"api/puppeteer.puppeteernode.launch",id:"version-21.5.2/api/puppeteer.puppeteernode.launch",title:"PuppeteerNode.launch() method",description:"Launches a browser instance with given arguments and options when specified.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.puppeteernode.launch.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.launch",permalink:"/api/puppeteer.puppeteernode.launch",draft:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"PuppeteerNode.launch"},sidebar:"api",previous:{title:"PuppeteerNode.executablePath",permalink:"/api/puppeteer.puppeteernode.executablepath"},next:{title:"PuppeteerNode.trimCache",permalink:"/api/puppeteer.puppeteernode.trimcache"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"puppeteernodelaunch-method"}),"PuppeteerNode.launch() method"),(0,n.kt)("p",null,"Launches a browser instance with given arguments and options when specified."),(0,n.kt)("p",null,"When using with ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer-core"),", ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.launchoptions"}),"options.executablePath")," or ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.launchoptions"}),"options.channel")," must be provided."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class PuppeteerNode {\n  launch(options?: PuppeteerLaunchOptions): Promise<Browser>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteerlaunchoptions"}),"PuppeteerLaunchOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," Options to configure launching behavior.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.browser"}),"Browser"),">"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.google.com/chrome/browser/canary.html"}),"Chrome Canary")," or ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.chromium.org/getting-involved/dev-channel"}),"Dev Channel")," build is suggested. See ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"}),"this article")," for a description of the differences between Chromium and Chrome. ",(0,n.kt)("a",a({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"}),"This article")," describes some differences for Linux users. See ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developer.chrome.com/blog/chrome-for-testing/"}),"this doc")," for the description of Chrome for Testing."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.launchoptions"}),"options.ignoreDefaultArgs")," to filter out ",(0,n.kt)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio'],\n});\n")))}m.isMDXComponent=!0}}]);