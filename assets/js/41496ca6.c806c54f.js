"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[7425],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,N=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,o(o({ref:e},d),{},{components:n})):a.createElement(N,o({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7302:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"GeoJsonDataSource"},o="GeoJsonDataSource",i={unversionedId:"components/GeoJsonDataSource",id:"components/GeoJsonDataSource",title:"GeoJsonDataSource",description:"GeoJsonDataSource provides the way to load and show GeoJSON data into the scene.",source:"@site/docs/components/GeoJsonDataSource.mdx",sourceDirName:"components",slug:"/components/GeoJsonDataSource",permalink:"/components/GeoJsonDataSource",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/GeoJsonDataSource.mdx",tags:[],version:"current",frontMatter:{title:"GeoJsonDataSource"},sidebar:"docs",previous:{title:"Fog",permalink:"/components/Fog"},next:{title:"Globe",permalink:"/components/Globe"}},m={},p=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2},{value:"Cesium properties",id:"cesium-properties",level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",level:3},{value:"Cesium events",id:"cesium-events",level:3},{value:"Other properties",id:"other-properties",level:3}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geojsondatasource"},"GeoJsonDataSource"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GeoJsonDataSource")," provides the way to load and show GeoJSON data into the scene.\nBoth GeoJSON and TopoJSON are supported, and can be loaded from a URL, string or raw object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,r.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html"},"GeoJsonDataSource")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),": ",(0,r.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/geojsondatasource--basic%22"},"GeoJsonDataSource"))),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Inside ",(0,r.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,r.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clustering"),(0,r.kt)("td",{parentName:"tr",align:null},"EntityCluster"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},"Color"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"credit"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," Credit"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceUri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"describe"),(0,r.kt)("td",{parentName:"tr",align:null},"describe"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"markerSize"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"markerSymbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"markerColor"),(0,r.kt)("td",{parentName:"tr",align:null},"Color"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stroke"),(0,r.kt)("td",{parentName:"tr",align:null},"Color"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clampToGround"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"(GeoJsonDataSource: GeoJsonDataSource) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onError"),(0,r.kt)("td",{parentName:"tr",align:null},"(GeoJsonDataSource: GeoJsonDataSource, error: any) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"(GeoJsonDataSource: GeoJsonDataSource, isLoaded: boolean) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"other-properties"},"Other properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDoubleClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseDown"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseUp"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMiddleClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMiddleDown"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMiddleUp"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseMove"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPinchEnd"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPinchMove"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPinchStart"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRightClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRightDown"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRightUp"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseEnter"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseLeave"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onLoad"),(0,r.kt)("td",{parentName:"tr",align:null},"(GeoJsonDataSouce: GeoJsonDataSource) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls when the Promise for loading data is fullfilled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);