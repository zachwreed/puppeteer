"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"Frame.goto"},p="Frame.goto() method",l={unversionedId:"api/puppeteer.frame.goto",id:"version-21.5.2/api/puppeteer.frame.goto",title:"Frame.goto() method",description:"Navigates the frame to the given url.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.frame.goto.md",sourceDirName:"api",slug:"/api/puppeteer.frame.goto",permalink:"/api/puppeteer.frame.goto",draft:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Frame.goto"},sidebar:"api",previous:{title:"Frame.focus",permalink:"/api/puppeteer.frame.focus"},next:{title:"Frame.hover",permalink:"/api/puppeteer.frame.hover"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"framegoto-method"}),"Frame.goto() method"),(0,n.kt)("p",null,"Navigates the frame to the given ",(0,n.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  abstract goto(\n    url: string,\n    options?: {\n      referer?: string;\n      referrerPolicy?: string;\n      timeout?: number;\n      waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }\n  ): Promise<HTTPResponse | null>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"url"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URL to navigate the frame to. The URL should include scheme, e.g. ",(0,n.kt)("code",null,"https://"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"{ referer?: string; referrerPolicy?: string; timeout?: number; waitUntil?: ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteerlifecycleevent"}),"PuppeteerLifeCycleEvent")," ","|"," ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteerlifecycleevent"}),"PuppeteerLifeCycleEvent"),"[","]","; }"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," Options to configure waiting behavior.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.httpresponse"}),"HTTPResponse")," ","|"," null",">"),(0,n.kt)("p",null,"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."),(0,n.kt)("h2",a({},{id:"exceptions"}),"Exceptions"),(0,n.kt)("p",null,"If:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"there's an SSL error (e.g. in case of self-signed certificates). - target URL is invalid. - the timeout is exceeded during navigation. - the remote server does not respond or is unreachable. - the main resource failed to load.")),(0,n.kt)("p",null,'This method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.httpresponse.status"}),"HTTPResponse.status()"),"."),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Navigation to ",(0,n.kt)("inlineCode",{parentName:"p"},"about:blank")," or navigation to the same URL with a different hash will succeed and return ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("admonition",a({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"Headless mode doesn't support navigation to a PDF document. See the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=761295"}),"upstream issue"),".")))}m.isMDXComponent=!0}}]);