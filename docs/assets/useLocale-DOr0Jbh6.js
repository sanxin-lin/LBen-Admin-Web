var j=Object.defineProperty;var T=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var P=(t,e,n)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,y=(t,e)=>{for(var n in e||(e={}))F.call(e,n)&&P(t,n,e[n]);if(T)for(var n of T(e))M.call(e,n)&&P(t,n,e[n]);return t};var k=(t,e,n)=>new Promise((r,i)=>{var s=c=>{try{f(n.next(c))}catch(o){i(o)}},a=c=>{try{f(n.throw(c))}catch(o){i(o)}},f=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,a);f((n=n.apply(t,e)).next())});import{r as p,e0 as U,e1 as O,b as B,e2 as H,e3 as J,e4 as G}from"./entry/index-Dbo3_afc-1721993229481.js";function W(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`)}}const v={};function C(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&v[e[0]]||(typeof e[0]=="string"&&(v[e[0]]=new Date),W(...e))}const z=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function E(t,e,n){t.loadNamespaces(e,z(t,n))}function R(t,e,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,z(t,r))}function Y(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(f,c)=>{const o=e.services.backendConnector.state[`${f}|${c}`];return o===-1||o===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(r,t)&&(!i||a(s,t)))}function q(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(C("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):Y(t,e,n)}const K=p.createContext();class Q{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const X=(t,e)=>{const n=p.useRef();return p.useEffect(()=>{n.current=t},[t,e]),n.current};function A(t,e,n,r){return t.getFixedT(e,n,r)}function Z(t,e,n,r){return p.useCallback(A(t,e,n,r),[t,e,n,r])}function D(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=p.useContext(K)||{},s=n||r||O();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Q),!s){C("You will need to pass in an i18next instance by using initReactI18next");const u=(d,g)=>typeof g=="string"?g:g&&typeof g=="object"&&typeof g.defaultValue=="string"?g.defaultValue:Array.isArray(d)?d[d.length-1]:d,l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}s.options.react&&s.options.react.wait!==void 0&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a=y(y(y({},U()),s.options.react),e),{useSuspense:f,keyPrefix:c}=a;let o=i||s.options&&s.options.defaultNS;o=typeof o=="string"?[o]:o||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(o);const m=(s.isInitialized||s.initializedStoreOnce)&&o.every(u=>q(u,s,a)),$=Z(s,e.lng||null,a.nsMode==="fallback"?o:o[0],c),x=()=>$,L=()=>A(s,e.lng||null,a.nsMode==="fallback"?o:o[0],c),[I,N]=p.useState(x);let w=o.join();e.lng&&(w=`${e.lng}${w}`);const S=X(w),h=p.useRef(!0);p.useEffect(()=>{const{bindI18n:u,bindI18nStore:l}=a;h.current=!0,!m&&!f&&(e.lng?R(s,e.lng,o,()=>{h.current&&N(L)}):E(s,o,()=>{h.current&&N(L)})),m&&S&&S!==w&&h.current&&N(L);function d(){h.current&&N(L)}return u&&s&&s.on(u,d),l&&s&&s.store.on(l,d),()=>{h.current=!1,u&&s&&u.split(" ").forEach(g=>s.off(g,d)),l&&s&&l.split(" ").forEach(g=>s.store.off(g,d))}},[s,w]),p.useEffect(()=>{h.current&&m&&N(x)},[s,c,m]);const b=[I,s,m];if(b.t=I,b.i18n=s,b.ready=m,m||!m&&!f)return b;throw new Promise(u=>{e.lng?R(s,e.lng,o,()=>u()):E(s,o,()=>u())})}const ee=()=>{const{t,i18n:e}=D(),{locale:n,showPicker:r}=B(a=>({locale:a.localInfo.locale,showPicker:a.localInfo.showPicker})),{setLocaleInfo:i}=H();return{t,changeLocale:a=>k(void 0,null,function*(){const f=e.language;return a===f||!J.includes(a)||(yield e.changeLanguage(a),i({locale:a}),G(a)),a}),locale:n,showPicker:r}};export{ee as u};
