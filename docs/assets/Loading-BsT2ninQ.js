var V=Object.defineProperty,k=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&I(e,n,t[n]);if(O)for(var n of O(t))_.call(t,n)&&I(e,n,t[n]);return e},P=(e,t)=>k(e,ee(t));var q=(e,t)=>{var n={};for(var i in e)M.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&O)for(var i of O(e))t.indexOf(i)<0&&_.call(e,i)&&(n[i]=e[i]);return n};import{o as te,K as H,s as ne,p as ie,r as a,C as R,t as S,D as oe,v as A,L as ae,a as F,j as D,e9 as re}from"./entry/index-Dbo3_afc-1721993229481.js";import{_ as se,c as le,e as ce}from"./debounce-Cvb0dSk9.js";function de(e,t,n){var i=n||{},o=i.noTrailing,r=o===void 0?!1:o,s=i.noLeading,l=s===void 0?!1:s,d=i.debounceMode,m=d===void 0?void 0:d,u,g=!1,$=0;function C(){u&&clearTimeout(u)}function c(v){var b=v||{},p=b.upcomingOnly,y=p===void 0?!1:p;C(),g=!y}function x(){for(var v=arguments.length,b=new Array(v),p=0;p<v;p++)b[p]=arguments[p];var y=this,w=Date.now()-$;if(g)return;function h(){$=Date.now(),t.apply(y,b)}function f(){u=void 0}!l&&m&&!u&&h(),C(),m===void 0&&w>e?l?($=Date.now(),r||(u=setTimeout(m?f:h,e))):h():r!==!0&&(u=setTimeout(m?f:h,m===void 0?e-w:e))}return x.cancel=c,x}function ue(e,t,n){var i={},o=i.atBegin,r=o===void 0?!1:o;return de(e,t,{debounceMode:r!==!1})}const pe=new H("antSpinMove",{to:{opacity:1}}),me=new H("antRotate",{to:{transform:"rotate(405deg)"}}),fe=e=>{const{componentCls:t,calc:n}=e;return{[`${t}`]:Object.assign(Object.assign({},ie(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${t}-text`]:{fontSize:e.fontSize,paddingTop:n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${t}-dot ${t}-dot-item`]:{backgroundColor:e.colorWhite},[`${t}-text`]:{color:e.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${t}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${t}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:n(e.dotSize).mul(-1).div(2).equal()},[`${t}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${t}-dot`]:{margin:n(e.dotSizeSM).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${t}-dot`]:{margin:n(e.dotSizeLG).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${t}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${t}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),height:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:pe,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:me,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t}-dot`]:{fontSize:e.dotSizeSM,i:{width:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),height:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${t}-dot`]:{fontSize:e.dotSizeLG,i:{width:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${t}-show-text ${t}-text`]:{display:"block"}})}},ge=e=>{const{controlHeightLG:t,controlHeight:n}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:t*.35,dotSizeLG:n}},ve=te("Spin",e=>{const t=ne(e,{spinDotDefault:e.colorTextDescription});return[fe(t)]},ge);var be=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n};let N=null;function Se(e,t){const{indicator:n}=t,i=`${e}-dot`;return n===null?null:a.isValidElement(n)?A(n,{className:S(n.props.className,i)}):a.isValidElement(N)?A(N,{className:S(N.props.className,i)}):a.createElement("span",{className:S(i,`${e}-dot-spin`)},a.createElement("i",{className:`${e}-dot-item`,key:1}),a.createElement("i",{className:`${e}-dot-item`,key:2}),a.createElement("i",{className:`${e}-dot-item`,key:3}),a.createElement("i",{className:`${e}-dot-item`,key:4}))}function ye(e,t){return!!e&&!!t&&!isNaN(Number(t))}const W=e=>{const{prefixCls:t,spinning:n=!0,delay:i=0,className:o,rootClassName:r,size:s="default",tip:l,wrapperClassName:d,style:m,children:u,fullscreen:g=!1}=e,$=be(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:C}=a.useContext(R),c=C("spin",t),[x,v,b]=ve(c),[p,y]=a.useState(()=>n&&!ye(n,i));a.useEffect(()=>{if(n){const z=ue(i,()=>{y(!0)});return z(),()=>{var j;(j=z==null?void 0:z.cancel)===null||j===void 0||j.call(z)}}y(!1)},[i,n]);const w=a.useMemo(()=>typeof u!="undefined"&&!g,[u,g]),{direction:h,spin:f}=a.useContext(R),Q=S(c,f==null?void 0:f.className,{[`${c}-sm`]:s==="small",[`${c}-lg`]:s==="large",[`${c}-spinning`]:p,[`${c}-show-text`]:!!l,[`${c}-fullscreen`]:g,[`${c}-fullscreen-show`]:g&&p,[`${c}-rtl`]:h==="rtl"},o,r,v,b),Y=S(`${c}-container`,{[`${c}-blur`]:p}),T=oe($,["indicator"]),Z=Object.assign(Object.assign({},f==null?void 0:f.style),m),L=a.createElement("div",Object.assign({},T,{style:Z,className:Q,"aria-live":"polite","aria-busy":p}),Se(c,e),l&&(w||g)?a.createElement("div",{className:`${c}-text`},l):null);return x(w?a.createElement("div",Object.assign({},T,{className:S(`${c}-nested-loading`,d,v,b)}),p&&a.createElement("div",{key:"loading"},L),a.createElement("div",{className:Y,key:"container"},u)):L)};W.setDefaultIndicator=e=>{N=e};var he=function(){var e=se(a.useState({}),2),t=e[1];return a.useCallback(function(){return t({})},[])};function $e(e,t){return function(n){return e(t(n))}}var xe=$e,we=xe,ze=we(Object.getPrototypeOf,Object),Ce=ze,Oe=le,Ne=Ce,je=ce,Ee="[object Object]",Pe=Function.prototype,De=Object.prototype,K=Pe.toString,Te=De.hasOwnProperty,Le=K.call(Object);function Ie(e){if(!je(e)||Oe(e)!=Ee)return!1;var t=Ne(e);if(t===null)return!0;var n=Te.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&K.call(n)==Le}var Me=Ie;const _e=ae(Me);var G=new WeakMap,X=new WeakMap;function U(e,t){var n=G.get(e);if(n)return n;if(X.has(e))return e;var i=new Proxy(e,{get:function(o,r,s){var l=Reflect.get(o,r,s),d=Reflect.getOwnPropertyDescriptor(o,r);return!(d!=null&&d.configurable)&&!(d!=null&&d.writable)?l:_e(l)||Array.isArray(l)?U(l,t):l},set:function(o,r,s){var l=Reflect.set(o,r,s);return t(),l},deleteProperty:function(o,r){var s=Reflect.deleteProperty(o,r);return t(),s}});return G.set(e,i),X.set(i,e),i}function Xe(e){var t=he(),n=a.useRef(e),i=F(function(){return U(n.current,function(){t()})},[]);return i}var J=(e=>(e.DEFAULT="default",e.SMALL="small",e.LARGE="large",e))(J||{});const B=e=>{const u=e,{tip:t="",size:n=J.LARGE,absolute:i=!1,loading:o=!1,background:r,theme:s}=u,l=q(u,["tip","size","absolute","loading","background","theme"]),d=S("full-loading",{absolute:i,theme:!!s}),m=F(()=>o?r?{backgroundColor:r}:{}:{display:"none"},[r,o]);return D.jsx("div",{className:d,style:m,children:D.jsx(W,P(E({},l),{tip:t,size:n,spinning:o}))})},qe=(e,t)=>{var s;const n=(s=t==null?void 0:t.current)!=null?s:document.body,i=document.createElement("div");n.appendChild(i);const o=re(i);return o.render(e),()=>{o.unmount(),n.removeChild(i)}};B.open=e=>qe(D.jsx(B,P(E({},e),{loading:!0})),e.target);export{B as L,W as S,Xe as u};