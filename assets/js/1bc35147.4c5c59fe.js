"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[7865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"CameraFlyHome"},l="CameraFlyHome",i={unversionedId:"components/CameraFlyHome",id:"components/CameraFlyHome",title:"CameraFlyHome",description:"CameraFlyHome is a kind of operation of the camera.",source:"@site/docs/components/CameraFlyHome.mdx",sourceDirName:"components",slug:"/components/CameraFlyHome",permalink:"/components/CameraFlyHome",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/CameraFlyHome.mdx",tags:[],version:"current",frontMatter:{title:"CameraFlyHome"},sidebar:"docs",previous:{title:"Camera",permalink:"/components/Camera"},next:{title:"CameraFlyTo",permalink:"/components/CameraFlyTo"}},m={},p=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cameraflyhome"},"CameraFlyHome"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CameraFlyHome")," is a kind of operation of the camera."),(0,a.kt)("p",null,"When it is mounted, ",(0,a.kt)("inlineCode",{parentName:"p"},"camera.flyHome(duration)")," will be execute."),(0,a.kt)("p",null,"If any property is changed, the current camera flight will be canceled and a new one is executed."),(0,a.kt)("p",null,"See also: ",(0,a.kt)("a",{parentName:"p",href:"https://cesium.com/docs/cesiumjs-ref-doc/Camera.html?classFilter=camer#flyHome"},"Camera#flyHome")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/cameraflyhome--basic%22"},"CameraFlyHome"))),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Inside ",(0,a.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,a.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"duration"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Duration of camera flight (second)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cancelFlightOnUnmount"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"If true, cancel camera flight if this component is unmounted. Default value is false.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"once"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"If true, camera flight will be executed only once time.")))))}u.isMDXComponent=!0}}]);