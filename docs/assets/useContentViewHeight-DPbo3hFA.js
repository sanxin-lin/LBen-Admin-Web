import{r as t,o as re,s as oe,p as ne,q as se,N as ae,C as B,aW as ie,A as W,t as A,G as ce,v as le,c as ge,a as de}from"./entry/index-Dbo3_afc-1721993229481.js";import{R as ue}from"./useDesign-mHzxmH92.js";import{r as he,P as me}from"./index-CqkgspeZ.js";import{b as fe,a as pe}from"./useWindowSize-eZwsA2jU.js";const I=t.createContext({}),Se=e=>{const{antCls:o,componentCls:n,iconCls:r,avatarBg:s,avatarColor:u,containerSize:l,containerSizeLG:c,containerSizeSM:S,textFontSize:g,textFontSizeLG:y,textFontSizeSM:j,borderRadius:h,borderRadiusLG:m,borderRadiusSM:x,lineWidth:H,lineType:O}=e,b=(z,v,E)=>({width:z,height:z,borderRadius:"50%",[`&${n}-square`]:{borderRadius:E},[`&${n}-icon`]:{fontSize:v,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:u,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:s,border:`${se(H)} ${O} transparent`,"&-image":{background:"transparent"},[`${o}-image-img`]:{display:"block"}}),b(l,g,h)),{"&-lg":Object.assign({},b(c,y,m)),"&-sm":Object.assign({},b(S,j,x)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},ve=e=>{const{componentCls:o,groupBorderColor:n,groupOverlapping:r,groupSpace:s}=e;return{[`${o}-group`]:{display:"inline-flex",[`${o}`]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:r}},[`${o}-group-popover`]:{[`${o} + ${o}`]:{marginInlineStart:s}}}},Ce=e=>{const{controlHeight:o,controlHeightLG:n,controlHeightSM:r,fontSize:s,fontSizeLG:u,fontSizeXL:l,fontSizeHeading3:c,marginXS:S,marginXXS:g,colorBorderBg:y}=e;return{containerSize:o,containerSizeLG:n,containerSizeSM:r,textFontSize:Math.round((u+l)/2),textFontSizeLG:c,textFontSizeSM:s,groupSpace:g,groupOverlapping:-S,groupBorderColor:y}},V=re("Avatar",e=>{const{colorTextLightSolid:o,colorTextPlaceholder:n}=e,r=oe(e,{avatarBg:n,avatarColor:o});return[Se(r),ve(r)]},Ce);var ye=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)o.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};const xe=(e,o)=>{const[n,r]=t.useState(1),[s,u]=t.useState(!1),[l,c]=t.useState(!0),S=t.useRef(null),g=t.useRef(null),y=ae(o,S),{getPrefixCls:j,avatar:h}=t.useContext(B),m=t.useContext(I),x=()=>{if(!g.current||!S.current)return;const a=g.current.offsetWidth,i=S.current.offsetWidth;if(a!==0&&i!==0){const{gap:C=4}=e;C*2<i&&r(i-C*2<a?(i-C*2)/a:1)}};t.useEffect(()=>{u(!0)},[]),t.useEffect(()=>{c(!0),r(1)},[e.src]),t.useEffect(x,[e.gap]);const H=()=>{const{onError:a}=e;(a==null?void 0:a())!==!1&&c(!1)},{prefixCls:O,shape:b,size:z,src:v,srcSet:E,icon:f,className:P,rootClassName:$,alt:R,draggable:_,children:k,crossOrigin:q}=e,N=ye(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),d=ie(a=>{var i,C;return(C=(i=z!=null?z:m==null?void 0:m.size)!==null&&i!==void 0?i:a)!==null&&C!==void 0?C:"default"}),D=Object.keys(typeof d=="object"?d||{}:{}).some(a=>["xs","sm","md","lg","xl","xxl"].includes(a)),G=fe(D),J=t.useMemo(()=>{if(typeof d!="object")return{};const a=he.find(C=>G[C]),i=d[a];return i?{width:i,height:i,fontSize:i&&(f||k)?i/2:18}:{}},[G,d]),p=j("avatar",O),L=W(p),[K,Q,U]=V(p,L),Y=A({[`${p}-lg`]:d==="large",[`${p}-sm`]:d==="small"}),M=t.isValidElement(v),Z=b||(m==null?void 0:m.shape)||"circle",ee=A(p,Y,h==null?void 0:h.className,`${p}-${Z}`,{[`${p}-image`]:M||v&&l,[`${p}-icon`]:!!f},U,L,P,$,Q),te=typeof d=="number"?{width:d,height:d,fontSize:f?d/2:18}:{};let w;if(typeof v=="string"&&l)w=t.createElement("img",{src:v,draggable:_,srcSet:E,onError:H,alt:R,crossOrigin:q});else if(M)w=v;else if(f)w=f;else if(s||n!==1){const a=`scale(${n})`,i={msTransform:a,WebkitTransform:a,transform:a};w=t.createElement(ue,{onResize:x},t.createElement("span",{className:`${p}-string`,ref:g,style:Object.assign({},i)},k))}else w=t.createElement("span",{className:`${p}-string`,style:{opacity:0},ref:g},k);return delete N.onError,delete N.gap,K(t.createElement("span",Object.assign({},N,{style:Object.assign(Object.assign(Object.assign(Object.assign({},te),J),h==null?void 0:h.style),N.style),className:ee,ref:y}),w))},X=t.forwardRef(xe),T=e=>{const{size:o,shape:n}=t.useContext(I),r=t.useMemo(()=>({size:e.size||o,shape:e.shape||n}),[e.size,e.shape,o,n]);return t.createElement(I.Provider,{value:r},e.children)},be=e=>{const{getPrefixCls:o,direction:n}=t.useContext(B),{prefixCls:r,className:s,rootClassName:u,style:l,maxCount:c,maxStyle:S,size:g,shape:y,maxPopoverPlacement:j="top",maxPopoverTrigger:h="hover",children:m}=e,x=o("avatar",r),H=`${x}-group`,O=W(x),[b,z,v]=V(x,O),E=A(H,{[`${H}-rtl`]:n==="rtl"},v,O,s,u,z),f=ce(m).map(($,R)=>le($,{key:`avatar-key-${R}`})),P=f.length;if(c&&c<P){const $=f.slice(0,c),R=f.slice(c,P);return $.push(t.createElement(me,{key:"avatar-popover-key",content:R,trigger:h,placement:j,overlayClassName:`${H}-popover`,destroyTooltipOnHide:!0},t.createElement(X,{style:S},`+${P-c}`))),b(t.createElement(T,{shape:y,size:g},t.createElement("div",{className:E,style:l},$)))}return b(t.createElement(T,{shape:y,size:g},t.createElement("div",{className:E,style:l},f)))},ze=X;ze.Group=be;const F=ge(e=>({headerHeight:0,footerHeight:0,setHeaderHeight(o){e({headerHeight:o})},setFooterHeight(o){e({footerHeight:o})}}));function we(){const{headerHeight:e,footerHeight:o,setFooterHeight:n,setHeaderHeight:r}=F();return{headerHeight:e,footerHeight:o,setFooterHeight:n,setHeaderHeight:r}}function je(){const e=F(c=>c.headerHeight),o=F(c=>c.footerHeight),[n,r]=t.useState(window.innerHeight),[s,u]=t.useState(window.innerHeight),l=n-e-o||0;return pe(()=>{r(window.innerHeight)},{wait:100,immediate:!0}),de(()=>({contentHeight:l,setPageHeight:u,pageHeight:s}),[l,u,s])}export{ze as A,je as a,we as u};
