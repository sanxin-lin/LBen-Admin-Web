import{r as d,aj as u,j as e,B as a}from"./entry/index-Dbo3_afc-1721993229481.js";import{u as g,L as s}from"./Loading-BsT2ninQ.js";import{P as x}from"./index-MqP6Of9r.js";import{A as r}from"./index-YApr4_kH.js";import"./debounce-Cvb0dSk9.js";import"./useMenuSetting-Bic0zQ6z.js";import"./useDesign-mHzxmH92.js";import"./useContentViewHeight-DPbo3hFA.js";import"./index-CqkgspeZ.js";import"./useWindowSize-eZwsA2jU.js";import"./index-fs93L3hp.js";import"./isNumber-Bgt3tinB.js";const R=()=>{const i=d.useRef(null),o=g({absolute:!1,loading:!1,theme:u.DARK,background:"rgba(111,111,111,.7)",tip:"加载中..."}),n=t=>{o.absolute=t,o.loading=!0,setTimeout(()=>{o.loading=!1},2e3)},m=()=>{n(!1)},p=()=>{n(!0)},l=()=>{const t=s.open({tip:"加载中..."});setTimeout(()=>{t()},2e3)},c=()=>{const t=s.open({tip:"加载中...",absolute:!0,target:i});setTimeout(()=>{t()},2e3)};return e.jsx(x,{title:"Loading组件示例",children:e.jsxs("div",{ref:i,children:[e.jsx(r,{message:"组件方式"}),e.jsx(a,{className:"my-4 mr-4",type:"primary",onClick:m,children:"全屏 Loading"}),e.jsx(a,{className:"my-4",type:"primary",onClick:p,children:"容器内 Loading"}),e.jsx(s,{loading:o.loading,absolute:o.absolute,theme:o.theme,background:o.background,tip:o.tip}),e.jsx(r,{message:"函数方式"}),e.jsx(a,{className:"my-4 mr-4",type:"primary",onClick:l,children:"全屏 Loading"}),e.jsx(a,{className:"my-4",type:"primary",onClick:c,children:"容器内 Loading"})]})})};export{R as default};