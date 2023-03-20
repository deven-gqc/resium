"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[3989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"advanced",title:"Advanced"},a="Advanced",c={unversionedId:"advanced",id:"advanced",title:"Advanced",description:"Get Cesium context with your component",source:"@site/docs/04-advanced.md",sourceDirName:".",slug:"/advanced",permalink:"/advanced",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/04-advanced.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"advanced",title:"Advanced"},sidebar:"docs",previous:{title:"setup",permalink:"/components/setup"},next:{title:"Migration Guide",permalink:"/migration"}},p={},s=[{value:"Get Cesium context with your component",id:"get-cesium-context-with-your-component",level:2},{value:"Define a new Cesium component",id:"define-a-new-cesium-component",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced"},"Advanced"),(0,o.kt)("h2",{id:"get-cesium-context-with-your-component"},"Get Cesium context with your component"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCesium")," hooks is available with Resium:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useCesium } from "resium";\n\nconst ExampleComponent = () => {\n  const { viewer } = useCesium();\n  return <p>Cesium Viewer object is{viewer ? "" : " not"} provided here.</p>;\n};\n\nexport default ExampleComponent;\n')),(0,o.kt)("p",null,"In TypeScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Viewer } from "cesium";\nimport { useCesium } from "resium";\n\nconst ExampleComponent = () => {\n  const { viewer } = useCesium();\n  return <p>Cesium Viewer object is{viewer ? "" : " not"} provided here.</p>;\n};\n\nexport default ExampleComponent;\n')),(0,o.kt)("p",null,"Structure of the context is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reearth/resium/blob/master/src/core/context.ts#L22"},"here"),"."),(0,o.kt)("h2",{id:"define-a-new-cesium-component"},"Define a new Cesium component"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createCesiumComponent")," function is available in Resium. For details refer to source codes of components in ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory."))}m.isMDXComponent=!0}}]);