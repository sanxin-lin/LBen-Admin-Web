var p=Object.defineProperty,y=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(a,t,s)=>t in a?p(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,f=(a,t)=>{for(var s in t||(t={}))w.call(t,s)&&h(a,s,t[s]);if(m)for(var s of m(t))T.call(t,s)&&h(a,s,t[s]);return a},g=(a,t)=>y(a,S(t));var c=(a,t,s)=>new Promise((n,i)=>{var l=e=>{try{r(s.next(e))}catch(o){i(o)}},d=e=>{try{r(s.throw(e))}catch(o){i(o)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,d);r((s=s.apply(a,t)).next())});import{r as F,u as R,a2 as V,bG as b}from"./entry/index-Dbo3_afc-1721993229481.js";import{g as E,f as v}from"./useModal-D6jWE9f_.js";const B=["getFieldValue","getFieldsValue","getFieldError","getFieldWarning","getFieldsError","isFieldsTouched","isFieldTouched","isFieldValidating","isFieldsValidating","resetFields","setFields","setFieldValue","setFieldsValue","validateFields","submit","getInternalHooks","scrollToField","getFieldInstance"],M=a=>B.reduce((t,s)=>(t[s]=(...n)=>c(void 0,null,function*(){const i=yield a();return i==null?void 0:i[s](...n)}),t),{}),A=a=>{const t=F.useRef(null),s=F.useRef(!1);function n(){return c(this,null,function*(){const r=t.current;return r||v("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield V(),r})}R(()=>{t.current=null,s.current=!1}),F.useEffect(()=>{var r;a&&((r=t.current)==null||r.setProps(a))},[a]);const i=E(),l=r=>{s&&b()&&r===t.current||(t.current=r,s.current=!0,i())},d=g(f({},M(n)),{setProps:r=>c(void 0,null,function*(){const e=yield n();e==null||e.setProps(r)}),updateSchemas:r=>c(void 0,null,function*(){const e=yield n();e==null||e.updateSchemas(r)}),resetSchemas:r=>c(void 0,null,function*(){const e=yield n();e==null||e.resetSchemas(r)}),removeSchemaByField:r=>c(void 0,null,function*(){const e=yield n();e==null||e.removeSchemaByField(r)}),appendSchemaByField:(r,e,o)=>c(void 0,null,function*(){const u=yield n();u==null||u.appendSchemaByField(r,e,o)})});return[l,d]};export{A as u};