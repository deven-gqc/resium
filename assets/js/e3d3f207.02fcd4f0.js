"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[1492],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(h,l(l({ref:e},m),{},{components:r})):n.createElement(h,l({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8043:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"PathGraphics"},l="PathGraphics",p={unversionedId:"components/PathGraphics",id:"components/PathGraphics",title:"PathGraphics",description:"PathGraphics is a path visualization for the entity.",source:"@site/docs/components/PathGraphics.mdx",sourceDirName:"components",slug:"/components/PathGraphics",permalink:"/components/PathGraphics",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/PathGraphics.mdx",tags:[],version:"current",frontMatter:{title:"PathGraphics"},sidebar:"docs",previous:{title:"ParticleSystem",permalink:"/components/ParticleSystem"},next:{title:"PlaneGraphics",permalink:"/components/PlaneGraphics"}},o={},s=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2},{value:"Cesium properties",id:"cesium-properties",level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",level:3},{value:"Cesium events",id:"cesium-events",level:3},{value:"Other properties",id:"other-properties",level:3}],m={toc:s};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pathgraphics"},"PathGraphics"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PathGraphics")," is a path visualization for the entity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,a.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html"},"PathGraphics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/pathgraphics--basic%22"},"PathGraphics"))),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"PathGraphics can be mounted only inside",(0,a.kt)("a",{parentName:"p",href:"/components/Entity"},"Entity")," components,\nand can not be mounted more than once for each entity."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"distanceDisplayCondition"),(0,a.kt)("td",{parentName:"tr",align:null},"DistanceDisplayCondition ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"width"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"material"),(0,a.kt)("td",{parentName:"tr",align:null},"Color ","|"," MaterialProperty"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"leadTime"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trailTime"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resolution"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onDefinitionChange"),(0,a.kt)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"other-properties"},"Other properties"),(0,a.kt)("p",null,"N/A"))}c.isMDXComponent=!0}}]);