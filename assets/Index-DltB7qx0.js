import{r as f,aA as I,j as r,bu as M,bn as O,a4 as T,bh as C,bv as R}from"./entry/index-Dbo3_afc-1721993229481.js";import{u as S}from"./useEarliest-TICvMVV0.js";import{u as w}from"./Loading-BsT2ninQ.js";import{P as Y}from"./index-MqP6Of9r.js";import{u as _}from"./useLocale-DOr0Jbh6.js";import{u as H}from"./index-Bu3RQGxH.js";import{i as U}from"./isNumber-Bgt3tinB.js";import{C as g}from"./CollapseContainer-D0FDo9Kj.js";import"./IconPicker-CgkkXBkI.js";import"./debounce-Cvb0dSk9.js";import"./useMenuSetting-Bic0zQ6z.js";import"./useDesign-mHzxmH92.js";import"./useContentViewHeight-DPbo3hFA.js";import"./index-CqkgspeZ.js";import"./useWindowSize-eZwsA2jU.js";import"./index-fs93L3hp.js";import"./BasicArrow-BXTIjsuF.js";import"./BasicTitle-cKsQiyFr.js";import"./Skeleton-oSWxWPNN.js";var k=function(s,e,a){a===void 0&&(a={});var c=H(s),u=f.useRef(null),l=f.useCallback(function(){u.current&&clearInterval(u.current)},[]);return f.useEffect(function(){if(!(!I(e)||e<0))return a.immediate&&c(),u.current=setInterval(c,e),l},[e,a.immediate]),l};const x=1e3,v=x*60,j=v*60,h=j*24,m=s=>{const{value:e,step:a=60,mode:c="relative"}=s,[u,l]=f.useState(""),{t:n}=_(),E=()=>{let i=0;if(U(e)){const p=e.toString().length>10?e:e*1e3;i=new Date(p).getTime()}else C(e)?i=new Date(e).getTime():R(e)&&(i=e.getTime());return i},D=()=>{const i=E();c==="relative"?l(N(i)):c==="datetime"?l(M(e)):c==="date"&&l(O(e))},N=i=>{const p=new Date().getTime(),b=T(i).isBefore(p);let t=p-i;b||(t=-t);let o="",d=n(b?"component.time.before":"component.time.after");return t<x?o=n("component.time.just"):t<v?o=parseInt(String(t/x))+n("component.time.seconds")+d:t>=v&&t<j?o=Math.floor(t/v)+n("component.time.minutes")+d:t>=j&&t<h?o=Math.floor(t/j)+n("component.time.hours")+d:t>=h&&t<262386e4?o=Math.floor(t/h)+n("component.time.days")+d:t>=262386e4&&t<=3156786e4&&b?o=T(i).format("MM-DD-HH-mm"):o=T(i).format("YYYY"),o};return k(D,a*x),f.useEffect(()=>{D()},[e]),r.jsx("span",{children:u})},re=()=>{const s=S(()=>new Date().getTime()),e=w({time1:s.current-60*3*1e3,time2:s.current-86400*3*1e3});return r.jsxs(Y,{title:"时间组件示例",children:[r.jsxs(g,{title:"基础示例",children:[r.jsx(m,{value:e.time1}),r.jsx("br",{}),r.jsx(m,{value:e.time2})]}),r.jsxs(g,{title:"定时更新",className:"my-4",children:[r.jsx(m,{value:s.current,step:1}),r.jsx("br",{}),r.jsx(m,{value:s.current,step:5})]}),r.jsxs(g,{title:"定时更新",children:[r.jsx(m,{value:s.current,mode:"date"}),r.jsx("br",{}),r.jsx(m,{value:s.current,mode:"datetime"}),r.jsx("br",{}),r.jsx(m,{value:s.current})]})]})};export{re as default};