import{r as o,b5 as it,F as st,aZ as ct,t as G,b3 as Ie,_ as De,b4 as Ee,o as ze,s as We,p as ie,bO as dt,q as te,R as ut,C as le,bP as ce,bQ as Be,A as de,bR as mt,aU as ft,D as He,n as X,bU as pt,B as Pe,c7 as qe,c8 as ye,bd as Fe,x as gt,c5 as ht,c9 as bt,aW as Ct,ca as vt,cb as yt,cc as xt,cd as $t,ce as ke,cf as ee,cg as St,G as wt,w as Ne,N as Ot,aR as It,I as Et,S as Pt,au as Ft,b_ as Nt,ax as jt,bZ as Mt,O as Rt,b9 as _t,Q as Vt,ch as Ae,ci as Tt,cj as Lt,ck as Dt,cl as zt,a$ as Wt,v as Bt,bc as Ht,cm as qt,cn as kt}from"./entry/index-Dbo3_afc-1721993229481.js";import{d as At,D as Ge,h as Gt,T as Xt}from"./index-CqkgspeZ.js";import{h as Kt}from"./useDesign-mHzxmH92.js";import{C as Xe,R as Ut}from"./row-CTndlXs8.js";const je=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Me=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ce=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Me(r.overflowY,t)||Me(r.overflowX,t)||(n=>{const a=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch(i){return null}})(n);return!!a&&(a.clientHeight<n.scrollHeight||a.clientWidth<n.scrollWidth)})(e)}return!1},fe=(e,t,r,n,a,l,i,s)=>l<e&&i>t||l>e&&i<t?0:l<=e&&s<=r||i>=t&&s>=r?l-e-n:i>t&&s<r||l<e&&s>r?i-t+a:0,Yt=e=>{const t=e.parentElement;return t==null?e.getRootNode().host||null:t},Re=(e,t)=>{var r,n,a,l;if(typeof document=="undefined")return[];const{scrollMode:i,block:s,inline:u,boundary:g,skipOverflowHiddenElements:f}=t,y=typeof g=="function"?g:j=>j!==g;if(!je(e))throw new TypeError("Invalid target");const F=document.scrollingElement||document.documentElement,m=[];let $=e;for(;je($)&&y($);){if($=Yt($),$===F){m.push($);break}$!=null&&$===document.body&&Ce($)&&!Ce(document.documentElement)||$!=null&&Ce($,f)&&m.push($)}const w=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,O=(l=(a=window.visualViewport)==null?void 0:a.height)!=null?l:innerHeight,{scrollX:c,scrollY:d}=window,{height:x,width:v,top:b,right:p,bottom:S,left:E}=e.getBoundingClientRect(),{top:V,right:T,bottom:M,left:B}=(j=>{const C=window.getComputedStyle(j);return{top:parseFloat(C.scrollMarginTop)||0,right:parseFloat(C.scrollMarginRight)||0,bottom:parseFloat(C.scrollMarginBottom)||0,left:parseFloat(C.scrollMarginLeft)||0}})(e);let N=s==="start"||s==="nearest"?b-V:s==="end"?S+M:b+x/2-V+M,P=u==="center"?E+v/2-B+T:u==="end"?p+T:E-B;const h=[];for(let j=0;j<m.length;j++){const C=m[j],{height:z,width:K,top:H,right:D,bottom:q,left:Y}=C.getBoundingClientRect();if(i==="if-needed"&&b>=0&&E>=0&&S<=O&&p<=w&&b>=H&&S<=q&&E>=Y&&p<=D)return h;const U=getComputedStyle(C),A=parseInt(U.borderLeftWidth,10),I=parseInt(U.borderTopWidth,10),R=parseInt(U.borderRightWidth,10),_=parseInt(U.borderBottomWidth,10);let W=0,k=0;const Q="offsetWidth"in C?C.offsetWidth-C.clientWidth-A-R:0,Z="offsetHeight"in C?C.offsetHeight-C.clientHeight-I-_:0,J="offsetWidth"in C?C.offsetWidth===0?0:K/C.offsetWidth:0,L="offsetHeight"in C?C.offsetHeight===0?0:z/C.offsetHeight:0;if(F===C)W=s==="start"?N:s==="end"?N-O:s==="nearest"?fe(d,d+O,O,I,_,d+N,d+N+x,x):N-O/2,k=u==="start"?P:u==="center"?P-w/2:u==="end"?P-w:fe(c,c+w,w,A,R,c+P,c+P+v,v),W=Math.max(0,W+d),k=Math.max(0,k+c);else{W=s==="start"?N-H-I:s==="end"?N-q+_+Z:s==="nearest"?fe(H,q,z,I,_+Z,N,N+x,x):N-(H+z/2)+Z/2,k=u==="start"?P-Y-A:u==="center"?P-(Y+K/2)+Q/2:u==="end"?P-D+R+Q:fe(Y,D,K,A,R+Q,P,P+v,v);const{scrollLeft:re,scrollTop:ue}=C;W=L===0?0:Math.max(0,Math.min(ue+W/L,C.scrollHeight-z/L+Z)),k=J===0?0:Math.max(0,Math.min(re+k/J,C.scrollWidth-K/J+Q)),N+=ue-W,P+=re-k}h.push({el:C,top:W,left:k})}return h},Qt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Zt(e,t){if(!e.isConnected||!(a=>{let l=a;for(;l&&l.parentNode;){if(l.parentNode===document)return!0;l=l.parentNode instanceof ShadowRoot?l.parentNode.host:l.parentNode}return!1})(e))return;const r=(a=>{const l=window.getComputedStyle(a);return{top:parseFloat(l.scrollMarginTop)||0,right:parseFloat(l.scrollMarginRight)||0,bottom:parseFloat(l.scrollMarginBottom)||0,left:parseFloat(l.scrollMarginLeft)||0}})(e);if((a=>typeof a=="object"&&typeof a.behavior=="function")(t))return t.behavior(Re(e,t));const n=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:a,top:l,left:i}of Re(e,Qt(t))){const s=l-r.top+r.bottom,u=i-r.left+r.right;a.scroll({top:s,left:u,behavior:n})}}var Jt=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],en=o.forwardRef(function(e,t){var r=e.prefixCls,n=r===void 0?"rc-checkbox":r,a=e.className,l=e.style,i=e.checked,s=e.disabled,u=e.defaultChecked,g=u===void 0?!1:u,f=e.type,y=f===void 0?"checkbox":f,F=e.title,m=e.onChange,$=it(e,Jt),w=o.useRef(null),O=st(g,{value:i}),c=ct(O,2),d=c[0],x=c[1];o.useImperativeHandle(t,function(){return{focus:function(S){var E;(E=w.current)===null||E===void 0||E.focus(S)},blur:function(){var S;(S=w.current)===null||S===void 0||S.blur()},input:w.current}});var v=G(n,a,Ie(Ie({},"".concat(n,"-checked"),d),"".concat(n,"-disabled"),s)),b=function(S){s||("checked"in e||x(S.target.checked),m==null||m({target:Ee(Ee({},e),{},{type:y,checked:S.target.checked}),stopPropagation:function(){S.stopPropagation()},preventDefault:function(){S.preventDefault()},nativeEvent:S.nativeEvent}))};return o.createElement("span",{className:v,title:F,style:l},o.createElement("input",De({},$,{className:"".concat(n,"-input"),ref:w,onChange:b,disabled:s,checked:!!d,type:y})),o.createElement("span",{className:"".concat(n,"-inner")}))});const tn=e=>{const{checkboxCls:t}=e,r=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},ie(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[r]:Object.assign(Object.assign({},ie(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${r}`]:{marginInlineStart:0},[`&${r}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},ie(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},dt(e))},[`${t}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${te(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${r}:not(${r}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${r}:not(${r}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${r}-checked:not(${r}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${r}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function nn(e,t){const r=We(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[tn(r)]}const Ke=ze("Checkbox",(e,t)=>{let{prefixCls:r}=t;return[nn(r,e)]}),Ue=ut.createContext(null);var rn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const on=(e,t)=>{var r;const{prefixCls:n,className:a,rootClassName:l,children:i,indeterminate:s=!1,style:u,onMouseEnter:g,onMouseLeave:f,skipGroup:y=!1,disabled:F}=e,m=rn(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:$,direction:w,checkbox:O}=o.useContext(le),c=o.useContext(Ue),{isFormItemInput:d}=o.useContext(ce),x=o.useContext(Be),v=(r=(c==null?void 0:c.disabled)||F)!==null&&r!==void 0?r:x,b=o.useRef(m.value);o.useEffect(()=>{c==null||c.registerValue(m.value)},[]),o.useEffect(()=>{if(!y)return m.value!==b.current&&(c==null||c.cancelValue(b.current),c==null||c.registerValue(m.value),b.current=m.value),()=>c==null?void 0:c.cancelValue(m.value)},[m.value]);const p=$("checkbox",n),S=de(p),[E,V,T]=Ke(p,S),M=Object.assign({},m);c&&!y&&(M.onChange=function(){m.onChange&&m.onChange.apply(m,arguments),c.toggleOption&&c.toggleOption({label:i,value:m.value})},M.name=c.name,M.checked=c.value.includes(m.value));const B=G(`${p}-wrapper`,{[`${p}-rtl`]:w==="rtl",[`${p}-wrapper-checked`]:M.checked,[`${p}-wrapper-disabled`]:v,[`${p}-wrapper-in-form-item`]:d},O==null?void 0:O.className,a,l,T,S,V),N=G({[`${p}-indeterminate`]:s},mt,V),P=s?"mixed":void 0;return E(o.createElement(ft,{component:"Checkbox",disabled:v},o.createElement("label",{className:B,style:Object.assign(Object.assign({},O==null?void 0:O.style),u),onMouseEnter:g,onMouseLeave:f},o.createElement(en,Object.assign({"aria-checked":P},M,{prefixCls:p,className:N,disabled:v,ref:t})),i!==void 0&&o.createElement("span",null,i))))},Ye=o.forwardRef(on);var an=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ln=o.forwardRef((e,t)=>{const{defaultValue:r,children:n,options:a=[],prefixCls:l,className:i,rootClassName:s,style:u,onChange:g}=e,f=an(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:y,direction:F}=o.useContext(le),[m,$]=o.useState(f.value||r||[]),[w,O]=o.useState([]);o.useEffect(()=>{"value"in f&&$(f.value||[])},[f.value]);const c=o.useMemo(()=>a.map(h=>typeof h=="string"||typeof h=="number"?{label:h,value:h}:h),[a]),d=h=>{O(j=>j.filter(C=>C!==h))},x=h=>{O(j=>[].concat(X(j),[h]))},v=h=>{const j=m.indexOf(h.value),C=X(m);j===-1?C.push(h.value):C.splice(j,1),"value"in f||$(C),g==null||g(C.filter(z=>w.includes(z)).sort((z,K)=>{const H=c.findIndex(q=>q.value===z),D=c.findIndex(q=>q.value===K);return H-D}))},b=y("checkbox",l),p=`${b}-group`,S=de(b),[E,V,T]=Ke(b,S),M=He(f,["value","disabled"]),B=a.length?c.map(h=>o.createElement(Ye,{prefixCls:b,key:h.value.toString(),disabled:"disabled"in h?h.disabled:f.disabled,value:h.value,checked:m.includes(h.value),onChange:h.onChange,className:`${p}-item`,style:h.style,title:h.title,id:h.id,required:h.required},h.label)):n,N={toggleOption:v,value:m,disabled:f.disabled,name:f.name,registerValue:x,cancelValue:d},P=G(p,{[`${p}-rtl`]:F==="rtl"},i,s,T,S,V);return E(o.createElement("div",Object.assign({className:P,style:u},M,{ref:t}),o.createElement(Ue.Provider,{value:N},B)))}),Qe=Ye;Qe.Group=ln;Qe.__ANT_CHECKBOX=!0;var sn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ze=e=>{const{getPopupContainer:t,getPrefixCls:r,direction:n}=o.useContext(le),{prefixCls:a,type:l="default",danger:i,disabled:s,loading:u,onClick:g,htmlType:f,children:y,className:F,menu:m,arrow:$,autoFocus:w,overlay:O,trigger:c,align:d,open:x,onOpenChange:v,placement:b,getPopupContainer:p,href:S,icon:E=o.createElement(Kt,null),title:V,buttonsRender:T=_=>_,mouseEnterDelay:M,mouseLeaveDelay:B,overlayClassName:N,overlayStyle:P,destroyPopupOnHide:h,dropdownRender:j}=e,C=sn(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),z=r("dropdown",a),K=`${z}-button`,H={menu:m,arrow:$,autoFocus:w,align:d,disabled:s,trigger:s?[]:c,onOpenChange:v,getPopupContainer:p||t,mouseEnterDelay:M,mouseLeaveDelay:B,overlayClassName:N,overlayStyle:P,destroyPopupOnHide:h,dropdownRender:j},{compactSize:D,compactItemClassnames:q}=pt(z,n),Y=G(K,q,F);"overlay"in e&&(H.overlay=O),"open"in e&&(H.open=x),"placement"in e?H.placement=b:H.placement=n==="rtl"?"bottomLeft":"bottomRight";const U=o.createElement(Pe,{type:l,danger:i,disabled:s,loading:u,onClick:g,htmlType:f,href:S,title:V},y),A=o.createElement(Pe,{type:l,danger:i,icon:E}),[I,R]=T([U,A]);return o.createElement(At.Compact,Object.assign({className:Y,size:D,block:!0},C),I,o.createElement(Ge,Object.assign({},H),R))};Ze.__ANT_BUTTON=!0;const cn=Ge;cn.Button=Ze;function pe(e){const[t,r]=o.useState(e);return o.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const dn=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},un=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${te(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),_e=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},mn=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},ie(e)),un(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},_e(e,e.controlHeightSM)),"&-large":Object.assign({},_e(e,e.controlHeightLG))})}},fn=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:a,labelRequiredMarkColor:l,labelColor:i,labelFontSize:s,labelHeight:u,labelColonMarginInlineStart:g,labelColonMarginInlineEnd:f,itemMarginBottom:y}=e;return{[t]:Object.assign(Object.assign({},ie(e)),{marginBottom:y,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${a}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:u,color:i,fontSize:s,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:l,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:g,marginInlineEnd:f},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${a}-col-'"]):not([class*="' ${a}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:qe,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},pn=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]:{[`& + ${r}-control`]:{minWidth:"unset"}}}}},gn=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},ae=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),hn=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${r} ${r}-label`]:ae(e),[`${t}:not(${t}-inline)`]:{[r]:{flexWrap:"wrap",[`${r}-label, ${r}-control`]:{[`&:not([class*=" ${n}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},bn=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-vertical`]:{[r]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]:ae(e),[`@media (max-width: ${te(e.screenXSMax)})`]:[hn(e),{[t]:{[`.${n}-col-xs-24${r}-label`]:ae(e)}}],[`@media (max-width: ${te(e.screenSMMax)})`]:{[t]:{[`.${n}-col-sm-24${r}-label`]:ae(e)}},[`@media (max-width: ${te(e.screenMDMax)})`]:{[t]:{[`.${n}-col-md-24${r}-label`]:ae(e)}},[`@media (max-width: ${te(e.screenLGMax)})`]:{[t]:{[`.${n}-col-lg-24${r}-label`]:ae(e)}}}},Cn=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0}),Je=(e,t)=>We(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),xe=ze("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=Je(e,r);return[mn(n),fn(n),dn(n),pn(n),gn(n),bn(n),Gt(n),qe]},Cn,{order:-1e3}),Ve=[];function ve(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}const et=e=>{let{help:t,helpStatus:r,errors:n=Ve,warnings:a=Ve,className:l,fieldId:i,onVisibleChanged:s}=e;const{prefixCls:u}=o.useContext(ye),g=`${u}-item-explain`,f=de(u),[y,F,m]=xe(u,f),$=o.useMemo(()=>Fe(u),[u]),w=pe(n),O=pe(a),c=o.useMemo(()=>t!=null?[ve(t,"help",r)]:[].concat(X(w.map((x,v)=>ve(x,"error","error",v))),X(O.map((x,v)=>ve(x,"warning","warning",v)))),[t,r,w,O]),d={};return i&&(d.id=`${i}_help`),y(o.createElement(gt,{motionDeadline:$.motionDeadline,motionName:`${u}-show-help`,visible:!!c.length,onVisibleChanged:s},x=>{const{className:v,style:b}=x;return o.createElement("div",Object.assign({},d,{className:G(g,v,m,f,l,F),style:b,role:"alert"}),o.createElement(ht,Object.assign({keys:c},Fe(u),{motionName:`${u}-show-help-item`,component:!1}),p=>{const{key:S,error:E,errorStatus:V,className:T,style:M}=p;return o.createElement("div",{key:S,className:G(T,{[`${g}-${V}`]:V}),style:M},E)}))}))},vn=["parentNode"],yn="form_item";function se(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function tt(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:vn.includes(r)?`${yn}_${r}`:r}function nt(e,t,r,n,a,l){let i=n;return l!==void 0?i=l:r.validating?i="validating":e.length?i="error":t.length?i="warning":(r.touched||a&&r.validated)&&(i="success"),i}function Te(e){return se(e).join("_")}function rt(e){const[t]=bt(),r=o.useRef({}),n=o.useMemo(()=>e!=null?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:a=>l=>{const i=Te(a);l?r.current[i]=l:delete r.current[i]}},scrollToField:function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=se(a),s=tt(i,n.__INTERNAL__.name),u=s?document.getElementById(s):null;u&&Zt(u,Object.assign({scrollMode:"if-needed",block:"nearest"},l))},getFieldInstance:a=>{const l=Te(a);return r.current[l]}}),[e,t]);return[n]}var xn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $n=(e,t)=>{const r=o.useContext(Be),{getPrefixCls:n,direction:a,form:l}=o.useContext(le),{prefixCls:i,className:s,rootClassName:u,size:g,disabled:f=r,form:y,colon:F,labelAlign:m,labelWrap:$,labelCol:w,wrapperCol:O,hideRequiredMark:c,layout:d="horizontal",scrollToFirstError:x,requiredMark:v,onFinishFailed:b,name:p,style:S,feedbackIcons:E,variant:V}=e,T=xn(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),M=Ct(g),B=o.useContext(vt),N=o.useMemo(()=>v!==void 0?v:c?!1:l&&l.requiredMark!==void 0?l.requiredMark:!0,[c,v,l]),P=F!=null?F:l==null?void 0:l.colon,h=n("form",i),j=de(h),[C,z,K]=xe(h,j),H=G(h,`${h}-${d}`,{[`${h}-hide-required-mark`]:N===!1,[`${h}-rtl`]:a==="rtl",[`${h}-${M}`]:M},K,j,z,l==null?void 0:l.className,s,u),[D]=rt(y),{__INTERNAL__:q}=D;q.name=p;const Y=o.useMemo(()=>({name:p,labelAlign:m,labelCol:w,labelWrap:$,wrapperCol:O,vertical:d==="vertical",colon:P,requiredMark:N,itemRef:q.itemRef,form:D,feedbackIcons:E}),[p,m,w,O,d,P,N,D,E]);o.useImperativeHandle(t,()=>D);const U=(I,R)=>{if(I){let _={block:"nearest"};typeof I=="object"&&(_=I),D.scrollToField(R,_)}},A=I=>{if(b==null||b(I),I.errorFields.length){const R=I.errorFields[0].name;if(x!==void 0){U(x,R);return}l&&l.scrollToFirstError!==void 0&&U(l.scrollToFirstError,R)}};return C(o.createElement(yt.Provider,{value:V},o.createElement(xt,{disabled:f},o.createElement($t.Provider,{value:M},o.createElement(ke,{validateMessages:B},o.createElement(ee.Provider,{value:Y},o.createElement(St,Object.assign({id:p},T,{name:p,onFinishFailed:A,form:D,style:Object.assign(Object.assign({},l==null?void 0:l.style),S),className:H}))))))))},Sn=o.forwardRef($n);function wn(e){if(typeof e=="function")return e;const t=wt(e);return t.length<=1?t[0]:t}const ot=()=>{const{status:e,errors:t=[],warnings:r=[]}=o.useContext(ce);return{status:e,errors:t,warnings:r}};ot.Context=ce;function On(e){const[t,r]=o.useState(e),n=o.useRef(null),a=o.useRef([]),l=o.useRef(!1);o.useEffect(()=>(l.current=!1,()=>{l.current=!0,Ne.cancel(n.current),n.current=null}),[]);function i(s){l.current||(n.current===null&&(a.current=[],n.current=Ne(()=>{n.current=null,r(u=>{let g=u;return a.current.forEach(f=>{g=f(g)}),g})})),a.current.push(s))}return[t,i]}function In(){const{itemRef:e}=o.useContext(ee),t=o.useRef({});function r(n,a){const l=a&&typeof a=="object"&&a.ref,i=n.join("_");return(t.current.name!==i||t.current.originRef!==l)&&(t.current.name=i,t.current.originRef=l,t.current.ref=Ot(e(n),l)),t.current.ref}return r}const En=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},Pn=It(["Form","item-item"],(e,t)=>{let{rootPrefixCls:r}=t;const n=Je(e,r);return[En(n)]}),Fn=e=>{const{prefixCls:t,status:r,wrapperCol:n,children:a,errors:l,warnings:i,_internalItemRender:s,extra:u,help:g,fieldId:f,marginBottom:y,onErrorVisibleChanged:F}=e,m=`${t}-item`,$=o.useContext(ee),w=n||$.wrapperCol||{},O=G(`${m}-control`,w.className),c=o.useMemo(()=>Object.assign({},$),[$]);delete c.labelCol,delete c.wrapperCol;const d=o.createElement("div",{className:`${m}-control-input`},o.createElement("div",{className:`${m}-control-input-content`},a)),x=o.useMemo(()=>({prefixCls:t,status:r}),[t,r]),v=y!==null||l.length||i.length?o.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},o.createElement(ye.Provider,{value:x},o.createElement(et,{fieldId:f,errors:l,warnings:i,help:g,helpStatus:r,className:`${m}-explain-connected`,onVisibleChanged:F})),!!y&&o.createElement("div",{style:{width:0,height:y}})):null,b={};f&&(b.id=`${f}_extra`);const p=u?o.createElement("div",Object.assign({},b,{className:`${m}-extra`}),u):null,S=s&&s.mark==="pro_table_render"&&s.render?s.render(e,{input:d,errorList:v,extra:p}):o.createElement(o.Fragment,null,d,v,p);return o.createElement(ee.Provider,{value:c},o.createElement(Xe,Object.assign({},w,{className:O}),S),o.createElement(Pn,{prefixCls:t}))};var Nn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},jn=function(t,r){return o.createElement(Et,De({},t,{ref:r,icon:Nn}))},Mn=o.forwardRef(jn),Rn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function _n(e){return e?typeof e=="object"&&!o.isValidElement(e)?e:{title:e}:null}const Vn=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:a,labelAlign:l,colon:i,required:s,requiredMark:u,tooltip:g}=e;var f;const[y]=Pt("Form"),{vertical:F,labelAlign:m,labelCol:$,labelWrap:w,colon:O}=o.useContext(ee);if(!r)return null;const c=a||$||{},d=l||m,x=`${t}-item-label`,v=G(x,d==="left"&&`${x}-left`,c.className,{[`${x}-wrap`]:!!w});let b=r;const p=i===!0||O!==!1&&i!==!1;p&&!F&&typeof r=="string"&&r.trim()!==""&&(b=r.replace(/[:|：]\s*$/,""));const E=_n(g);if(E){const{icon:B=o.createElement(Mn,null)}=E,N=Rn(E,["icon"]),P=o.createElement(Xt,Object.assign({},N),o.cloneElement(B,{className:`${t}-item-tooltip`,title:"",onClick:h=>{h.preventDefault()},tabIndex:null}));b=o.createElement(o.Fragment,null,b,P)}const V=u==="optional",T=typeof u=="function";T?b=u(b,{required:!!s}):V&&!s&&(b=o.createElement(o.Fragment,null,b,o.createElement("span",{className:`${t}-item-optional`,title:""},(y==null?void 0:y.optional)||((f=Ft.Form)===null||f===void 0?void 0:f.optional))));const M=G({[`${t}-item-required`]:s,[`${t}-item-required-mark-optional`]:V||T,[`${t}-item-no-colon`]:!p});return o.createElement(Xe,Object.assign({},c,{className:v}),o.createElement("label",{htmlFor:n,className:M,title:typeof r=="string"?r:""},b))},Tn={success:Nt,warning:jt,error:Mt,validating:Rt};function at(e){let{children:t,errors:r,warnings:n,hasFeedback:a,validateStatus:l,prefixCls:i,meta:s,noStyle:u}=e;const g=`${i}-item`,{feedbackIcons:f}=o.useContext(ee),y=nt(r,n,s,null,!!a,l),{isFormItemInput:F,status:m,hasFeedback:$,feedbackIcon:w}=o.useContext(ce),O=o.useMemo(()=>{var c;let d;if(a){const v=a!==!0&&a.icons||f,b=y&&((c=v==null?void 0:v({status:y,errors:r,warnings:n}))===null||c===void 0?void 0:c[y]),p=y&&Tn[y];d=b!==!1&&p?o.createElement("span",{className:G(`${g}-feedback-icon`,`${g}-feedback-icon-${y}`)},b||o.createElement(p,null)):null}const x={status:y||"",errors:r,warnings:n,hasFeedback:!!a,feedbackIcon:d,isFormItemInput:!0};return u&&(x.status=(y!=null?y:m)||"",x.isFormItemInput=F,x.hasFeedback=!!(a!=null?a:$),x.feedbackIcon=a!==void 0?x.feedbackIcon:w),x},[y,a,u,F,m]);return o.createElement(ce.Provider,{value:O},t)}var Ln=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function Dn(e){const{prefixCls:t,className:r,rootClassName:n,style:a,help:l,errors:i,warnings:s,validateStatus:u,meta:g,hasFeedback:f,hidden:y,children:F,fieldId:m,required:$,isRequired:w,onSubItemMetaChange:O}=e,c=Ln(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),d=`${t}-item`,{requiredMark:x}=o.useContext(ee),v=o.useRef(null),b=pe(i),p=pe(s),S=l!=null,E=!!(S||i.length||s.length),V=!!v.current&&_t(v.current),[T,M]=o.useState(null);Vt(()=>{if(E&&v.current){const j=getComputedStyle(v.current);M(parseInt(j.marginBottom,10))}},[E,V]);const B=j=>{j||M(null)},P=function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const C=j?b:g.errors,z=j?p:g.warnings;return nt(C,z,g,"",!!f,u)}(),h=G(d,r,n,{[`${d}-with-help`]:S||b.length||p.length,[`${d}-has-feedback`]:P&&f,[`${d}-has-success`]:P==="success",[`${d}-has-warning`]:P==="warning",[`${d}-has-error`]:P==="error",[`${d}-is-validating`]:P==="validating",[`${d}-hidden`]:y});return o.createElement("div",{className:h,style:a,ref:v},o.createElement(Ut,Object.assign({className:`${d}-row`},He(c,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),o.createElement(Vn,Object.assign({htmlFor:m},e,{requiredMark:x,required:$!=null?$:w,prefixCls:t})),o.createElement(Fn,Object.assign({},e,g,{errors:b,warnings:p,prefixCls:t,status:P,help:l,marginBottom:T,onErrorVisibleChanged:B}),o.createElement(Ae.Provider,{value:O},o.createElement(at,{prefixCls:t,meta:g,errors:g.errors,warnings:g.warnings,hasFeedback:f,validateStatus:P},F)))),!!T&&o.createElement("div",{className:`${d}-margin-offset`,style:{marginBottom:-T}}))}const zn="__SPLIT__";function Wn(e,t){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(a=>{const l=e[a],i=t[a];return l===i||typeof l=="function"||typeof i=="function"})}const Bn=o.memo(e=>{let{children:t}=e;return t},(e,t)=>Wn(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function Le(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Hn(e){const{name:t,noStyle:r,className:n,dependencies:a,prefixCls:l,shouldUpdate:i,rules:s,children:u,required:g,label:f,messageVariables:y,trigger:F="onChange",validateTrigger:m,hidden:$,help:w}=e,{getPrefixCls:O}=o.useContext(le),{name:c}=o.useContext(ee),d=wn(u),x=typeof d=="function",v=o.useContext(Ae),{validateTrigger:b}=o.useContext(Tt),p=m!==void 0?m:b,S=t!=null,E=O("form",l),V=de(E),[T,M,B]=xe(E,V);Ht();const N=o.useContext(Lt),P=o.useRef(),[h,j]=On({}),[C,z]=Dt(()=>Le()),K=I=>{const R=N==null?void 0:N.getKey(I.name);if(z(I.destroy?Le():I,!0),r&&w!==!1&&v){let _=I.name;if(I.destroy)_=P.current||_;else if(R!==void 0){const[W,k]=R;_=[W].concat(X(k)),P.current=_}v(I,_)}},H=(I,R)=>{j(_=>{const W=Object.assign({},_),Q=[].concat(X(I.name.slice(0,-1)),X(R)).join(zn);return I.destroy?delete W[Q]:W[Q]=I,W})},[D,q]=o.useMemo(()=>{const I=X(C.errors),R=X(C.warnings);return Object.values(h).forEach(_=>{I.push.apply(I,X(_.errors||[])),R.push.apply(R,X(_.warnings||[]))}),[I,R]},[h,C.errors,C.warnings]),Y=In();function U(I,R,_){return r&&!$?o.createElement(at,{prefixCls:E,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:C,errors:D,warnings:q,noStyle:!0},I):o.createElement(Dn,Object.assign({key:"row"},e,{className:G(n,B,V,M),prefixCls:E,fieldId:R,isRequired:_,errors:D,warnings:q,meta:C,onSubItemMetaChange:H}),I)}if(!S&&!x&&!a)return T(U(d));let A={};return typeof f=="string"?A.label=f:t&&(A.label=String(t)),y&&(A=Object.assign(Object.assign({},A),y)),T(o.createElement(zt,Object.assign({},e,{messageVariables:A,trigger:F,validateTrigger:p,onMetaChange:K}),(I,R,_)=>{const W=se(t).length&&R?R.name:[],k=tt(W,c),Q=g!==void 0?g:!!(s&&s.some(L=>{if(L&&typeof L=="object"&&L.required&&!L.warningOnly)return!0;if(typeof L=="function"){const re=L(_);return re&&re.required&&!re.warningOnly}return!1})),Z=Object.assign({},I);let J=null;if(Array.isArray(d)&&S)J=d;else if(!(x&&(!(i||a)||S))){if(!(a&&!x&&!S))if(o.isValidElement(d)){const L=Object.assign(Object.assign({},d.props),Z);if(L.id||(L.id=k),w||D.length>0||q.length>0||e.extra){const oe=[];(w||D.length>0)&&oe.push(`${k}_help`),e.extra&&oe.push(`${k}_extra`),L["aria-describedby"]=oe.join(" ")}D.length>0&&(L["aria-invalid"]="true"),Q&&(L["aria-required"]="true"),Wt(d)&&(L.ref=Y(W,d)),new Set([].concat(X(se(F)),X(se(p)))).forEach(oe=>{L[oe]=function(){for(var $e,Se,ge,we,he,Oe=arguments.length,be=new Array(Oe),me=0;me<Oe;me++)be[me]=arguments[me];(ge=Z[oe])===null||ge===void 0||($e=ge).call.apply($e,[Z].concat(be)),(he=(we=d.props)[oe])===null||he===void 0||(Se=he).call.apply(Se,[we].concat(be))}});const ue=[L["aria-required"],L["aria-invalid"],L["aria-describedby"]];J=o.createElement(Bn,{control:Z,update:d,childProps:ue},Bt(d,L))}else x&&(i||a)&&!S?J=d(_):J=d}return U(J,k,Q)}))}const lt=Hn;lt.useStatus=ot;var qn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const kn=e=>{var{prefixCls:t,children:r}=e,n=qn(e,["prefixCls","children"]);const{getPrefixCls:a}=o.useContext(le),l=a("form",t),i=o.useMemo(()=>({prefixCls:l,status:"error"}),[l]);return o.createElement(qt,Object.assign({},n),(s,u,g)=>o.createElement(ye.Provider,{value:i},r(s.map(f=>Object.assign(Object.assign({},f),{fieldKey:f.key})),u,{errors:g.errors,warnings:g.warnings})))};function An(){const{form:e}=o.useContext(ee);return e}const ne=Sn;ne.Item=lt;ne.List=kn;ne.ErrorList=et;ne.useForm=rt;ne.useFormInstance=An;ne.useWatch=kt;ne.Provider=ke;ne.create=()=>{};export{Qe as C,cn as D,ne as F,en as a,nn as g};