var w=Object.defineProperty,$=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var h=(s,e,r)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,C=(s,e)=>{for(var r in e||(e={}))j.call(e,r)&&h(s,r,e[r]);if(x)for(var r of x(e))g.call(e,r)&&h(s,r,e[r]);return s},N=(s,e)=>$(s,E(e));var _=(s,e)=>{var r={};for(var i in s)j.call(s,i)&&e.indexOf(i)<0&&(r[i]=s[i]);if(s!=null&&x)for(var i of x(s))e.indexOf(i)<0&&g.call(s,i)&&(r[i]=s[i]);return r};import{j as a,r as y,an as B,ag as R}from"./entry/index-Dbo3_afc-1721993229481.js";import{u as v}from"./useDesign-mHzxmH92.js";import{B as S}from"./BasicArrow-BXTIjsuF.js";import"./IconPicker-CgkkXBkI.js";import{B as z}from"./BasicTitle-cKsQiyFr.js";import{S as W}from"./Skeleton-oSWxWPNN.js";const k=s=>{var c;const{title:e,show:r,canExpand:i,helpMessage:l="",className:m="",action:d,onExpand:o}=s,{prefixCls:n}=v("collapse-container"),t=(c=s.prefixCls)!=null?c:n,p=()=>{o==null||o()},u=()=>d?a.jsx("div",{onClick:p,children:d}):i?a.jsx(S,{up:!0,expand:r,onClick:p}):null;return a.jsxs("div",{className:`${t}__header px-2 py-5 ${m}`,children:[a.jsx(z,{helpMessage:l,normal:!0,children:e}),a.jsx("div",{className:`${t}__action`,children:u()})]})},P=s=>{const c=s,{loading:e,triggerWindowResize:r,children:i,footer:l,canExpand:m=!0,className:d=""}=c,o=_(c,["loading","triggerWindowResize","children","footer","canExpand","className"]),{prefixCls:n}=v("collapse-container"),[t,p]=y.useState(!0),u=f=>{p(B(f)?!t:f),r&&setTimeout(()=>{R()},200)};return a.jsxs("div",{className:`${n} ${d}`,children:[a.jsx(k,N(C({canExpand:m},o),{prefixCls:n,onExpand:u,show:t})),a.jsx("div",{className:"p-2",children:e?a.jsx(W,{active:e}):a.jsx("div",{className:`${n}__body`,style:t?{}:{display:"none"},children:i})}),l&&a.jsx("div",{className:`${n}__footer`,children:l})]})};export{P as C};