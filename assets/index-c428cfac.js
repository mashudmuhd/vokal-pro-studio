(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Td={exports:{}},io={},Pd={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),im=Symbol.for("react.portal"),sm=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),cm=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),dm=Symbol.for("react.suspense"),fm=Symbol.for("react.memo"),hm=Symbol.for("react.lazy"),Mc=Symbol.iterator;function pm(t){return t===null||typeof t!="object"?null:(t=Mc&&t[Mc]||t["@@iterator"],typeof t=="function"?t:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Od={};function Ir(t,e,n){this.props=t,this.context=e,this.refs=Od,this.updater=n||Rd}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ir.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jd(){}jd.prototype=Ir.prototype;function xl(t,e,n){this.props=t,this.context=e,this.refs=Od,this.updater=n||Rd}var _l=xl.prototype=new jd;_l.constructor=xl;Ad(_l,Ir.prototype);_l.isPureReactComponent=!0;var Uc=Array.isArray,Ld=Object.prototype.hasOwnProperty,kl={current:null},Dd={key:!0,ref:!0,__self:!0,__source:!0};function Md(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ld.call(e,r)&&!Dd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ti,type:t,key:s,ref:o,props:i,_owner:kl.current}}function mm(t,e){return{$$typeof:Ti,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function El(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ti}function gm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $c=/\/+/g;function Ro(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gm(""+t.key):e.toString(36)}function ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ti:case im:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ro(o,0):r,Uc(i)?(n="",t!=null&&(n=t.replace($c,"$&/")+"/"),ls(i,e,n,"",function(u){return u})):i!=null&&(El(i)&&(i=mm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($c,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ro(s,a);o+=ls(s,e,n,l,i)}else if(l=pm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ro(s,a++),o+=ls(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vi(t,e,n){if(t==null)return t;var r=[],i=0;return ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ym(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ce={current:null},cs={transition:null},vm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:cs,ReactCurrentOwner:kl};function Ud(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Vi,forEach:function(t,e,n){Vi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vi(t,function(){e++}),e},toArray:function(t){return Vi(t,function(e){return e})||[]},only:function(t){if(!El(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Ir;U.Fragment=sm;U.Profiler=am;U.PureComponent=xl;U.StrictMode=om;U.Suspense=dm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;U.act=Ud;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ad({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ld.call(e,l)&&!Dd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ti,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:cm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lm,_context:t},t.Consumer=t};U.createElement=Md;U.createFactory=function(t){var e=Md.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:um,render:t}};U.isValidElement=El;U.lazy=function(t){return{$$typeof:hm,_payload:{_status:-1,_result:t},_init:ym}};U.memo=function(t,e){return{$$typeof:fm,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=cs.transition;cs.transition={};try{t()}finally{cs.transition=e}};U.unstable_act=Ud;U.useCallback=function(t,e){return Ce.current.useCallback(t,e)};U.useContext=function(t){return Ce.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ce.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ce.current.useEffect(t,e)};U.useId=function(){return Ce.current.useId()};U.useImperativeHandle=function(t,e,n){return Ce.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ce.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ce.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ce.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ce.current.useReducer(t,e,n)};U.useRef=function(t){return Ce.current.useRef(t)};U.useState=function(t){return Ce.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ce.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ce.current.useTransition()};U.version="18.3.1";Pd.exports=U;var k=Pd.exports;const $d=rm(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=k,xm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Em=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sm={key:!0,ref:!0,__self:!0,__source:!0};function zd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)km.call(e,r)&&!Sm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xm,type:t,key:s,ref:o,props:i,_owner:Em.current}}io.Fragment=_m;io.jsx=zd;io.jsxs=zd;Td.exports=io;var c=Td.exports,pa={},Fd={exports:{}},Ge={},Vd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,j){var D=E.length;E.push(j);e:for(;0<D;){var q=D-1>>>1,Q=E[q];if(0<i(Q,j))E[q]=j,E[D]=Q,D=q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var j=E[0],D=E.pop();if(D!==j){E[0]=D;e:for(var q=0,Q=E.length,Bn=Q>>>1;q<Bn;){var St=2*(q+1)-1,it=E[St],Qe=St+1,Hn=E[Qe];if(0>i(it,D))Qe<Q&&0>i(Hn,it)?(E[q]=Hn,E[Qe]=D,q=Qe):(E[q]=it,E[St]=D,q=St);else if(Qe<Q&&0>i(Hn,D))E[q]=Hn,E[Qe]=D,q=Qe;else break e}}return j}function i(E,j){var D=E.sortIndex-j.sortIndex;return D!==0?D:E.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],m=1,p=null,f=3,y=!1,w=!1,_=!1,O=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=E)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function v(E){if(_=!1,g(E),!w)if(n(l)!==null)w=!0,Bt(b);else{var j=n(u);j!==null&&Rr(v,j.startTime-E)}}function b(E,j){w=!1,_&&(_=!1,h(R),R=-1),y=!0;var D=f;try{for(g(j),p=n(l);p!==null&&(!(p.expirationTime>j)||E&&!A());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var Q=q(p.expirationTime<=j);j=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(l)&&r(l),g(j)}else r(l);p=n(l)}if(p!==null)var Bn=!0;else{var St=n(u);St!==null&&Rr(v,St.startTime-j),Bn=!1}return Bn}finally{p=null,f=D,y=!1}}var N=!1,T=null,R=-1,F=5,P=-1;function A(){return!(t.unstable_now()-P<F)}function oe(){if(T!==null){var E=t.unstable_now();P=E;var j=!0;try{j=T(!0,E)}finally{j?we():(N=!1,T=null)}}else N=!1}var we;if(typeof d=="function")we=function(){d(oe)};else if(typeof MessageChannel<"u"){var Pr=new MessageChannel,Po=Pr.port2;Pr.port1.onmessage=oe,we=function(){Po.postMessage(null)}}else we=function(){O(oe,0)};function Bt(E){T=E,N||(N=!0,we())}function Rr(E,j){R=O(function(){E(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,Bt(b))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var D=f;f=j;try{return E()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=f;f=E;try{return j()}finally{f=D}},t.unstable_scheduleCallback=function(E,j,D){var q=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?q+D:q):D=q,E){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=D+Q,E={id:m++,callback:j,priorityLevel:E,startTime:D,expirationTime:Q,sortIndex:-1},D>q?(E.sortIndex=D,e(u,E),n(l)===null&&E===n(u)&&(_?(h(R),R=-1):_=!0,Rr(v,D-q))):(E.sortIndex=Q,e(l,E),w||y||(w=!0,Bt(b))),E},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(E){var j=f;return function(){var D=f;f=j;try{return E.apply(this,arguments)}finally{f=D}}}})(Bd);Vd.exports=Bd;var Im=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=k,We=Im;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,li={};function Fn(t,e){mr(t,e),mr(t+"Capture",e)}function mr(t,e){for(li[t]=e,t=0;t<e.length;t++)Hd.add(e[t])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,Cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Fc={};function Nm(t){return ma.call(Fc,t)?!0:ma.call(zc,t)?!1:Cm.test(t)?Fc[t]=!0:(zc[t]=!0,!1)}function Tm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pm(t,e,n,r){if(e===null||typeof e>"u"||Tm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ne(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Ne(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Ne(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Ne(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Ne(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Ne(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Ne(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Ne(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Ne(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Ne(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function Il(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sl,Il);ve[e]=new Ne(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sl,Il);ve[e]=new Ne(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sl,Il);ve[e]=new Ne(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Ne(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Ne(t,1,!1,t.toLowerCase(),null,!0,!0)});function bl(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pm(e,n,i,r)&&(n=null),r||i===null?Nm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vt=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Cl=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Gd=Symbol.for("react.context"),Nl=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Kd=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function Ar(t){return t===null||typeof t!="object"?null:(t=Vc&&t[Vc]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,Ao;function Fr(t){if(Ao===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ao=e&&e[1]||""}return`
`+Ao+t}var Oo=!1;function jo(t,e){if(!t||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fr(t):""}function Rm(t){switch(t.tag){case 5:return Fr(t.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return t=jo(t.type,!1),t;case 11:return t=jo(t.type.render,!1),t;case 1:return t=jo(t.type,!0),t;default:return""}}function wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qn:return"Fragment";case Kn:return"Portal";case ga:return"Profiler";case Cl:return"StrictMode";case ya:return"Suspense";case va:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gd:return(t.displayName||"Context")+".Consumer";case Wd:return(t._context.displayName||"Context")+".Provider";case Nl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tl:return e=t.displayName||null,e!==null?e:wa(t.type)||"Memo";case Kt:e=t._payload,t=t._init;try{return wa(t(e))}catch{}}return null}function Am(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wa(e);case 8:return e===Cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Om(t){var e=Qd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hi(t){t._valueTracker||(t._valueTracker=Om(t))}function Yd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Is(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xa(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qd(t,e){e=e.checked,e!=null&&bl(t,"checked",e,!1)}function _a(t,e){qd(t,e);var n=pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&ka(t,e.type,pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ka(t,e,n){(e!=="number"||Is(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vr=Array.isArray;function sr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ea(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Vr(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pn(n)}}function Jd(t,e){var n=pn(e.value),r=pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wi,Zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ci(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jm=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(t){jm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qr[e]=Qr[t]})});function ef(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qr.hasOwnProperty(t)&&Qr[t]?(""+e).trim():e+"px"}function tf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ef(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Lm=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(t,e){if(e){if(Lm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function ba(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Pl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,or=null,ar=null;function Kc(t){if(t=Ai(t)){if(typeof Na!="function")throw Error(x(280));var e=t.stateNode;e&&(e=co(e),Na(t.stateNode,t.type,e))}}function nf(t){or?ar?ar.push(t):ar=[t]:or=t}function rf(){if(or){var t=or,e=ar;if(ar=or=null,Kc(t),e)for(t=0;t<e.length;t++)Kc(e[t])}}function sf(t,e){return t(e)}function of(){}var Lo=!1;function af(t,e,n){if(Lo)return t(e,n);Lo=!0;try{return sf(t,e,n)}finally{Lo=!1,(or!==null||ar!==null)&&(of(),rf())}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=co(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Ta=!1;if(Lt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ta=!1}function Dm(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(m){this.onError(m)}}var Yr=!1,bs=null,Cs=!1,Pa=null,Mm={onError:function(t){Yr=!0,bs=t}};function Um(t,e,n,r,i,s,o,a,l){Yr=!1,bs=null,Dm.apply(Mm,arguments)}function $m(t,e,n,r,i,s,o,a,l){if(Um.apply(this,arguments),Yr){if(Yr){var u=bs;Yr=!1,bs=null}else throw Error(x(198));Cs||(Cs=!0,Pa=u)}}function Vn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qc(t){if(Vn(t)!==t)throw Error(x(188))}function zm(t){var e=t.alternate;if(!e){if(e=Vn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qc(i),t;if(s===r)return Qc(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function cf(t){return t=zm(t),t!==null?uf(t):null}function uf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uf(t);if(e!==null)return e;t=t.sibling}return null}var df=We.unstable_scheduleCallback,Yc=We.unstable_cancelCallback,Fm=We.unstable_shouldYield,Vm=We.unstable_requestPaint,se=We.unstable_now,Bm=We.unstable_getCurrentPriorityLevel,Rl=We.unstable_ImmediatePriority,ff=We.unstable_UserBlockingPriority,Ns=We.unstable_NormalPriority,Hm=We.unstable_LowPriority,hf=We.unstable_IdlePriority,so=null,xt=null;function Wm(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(so,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Qm,Gm=Math.log,Km=Math.LN2;function Qm(t){return t>>>=0,t===0?32:31-(Gm(t)/Km|0)|0}var Gi=64,Ki=4194304;function Br(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ts(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Br(a):(s&=o,s!==0&&(r=Br(s)))}else o=n&~i,o!==0?r=Br(o):s!==0&&(r=Br(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ym(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ym(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ra(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pf(){var t=Gi;return Gi<<=1,!(Gi&4194240)&&(Gi=64),t}function Do(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Jm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Al(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function mf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gf,Ol,yf,vf,wf,Aa=!1,Qi=[],rn=null,sn=null,on=null,di=new Map,fi=new Map,Yt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(t,e){switch(t){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(e.pointerId)}}function jr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ai(e),e!==null&&Ol(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zm(t,e,n,r,i){switch(e){case"focusin":return rn=jr(rn,t,e,n,r,i),!0;case"dragenter":return sn=jr(sn,t,e,n,r,i),!0;case"mouseover":return on=jr(on,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return di.set(s,jr(di.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fi.set(s,jr(fi.get(s)||null,t,e,n,r,i)),!0}return!1}function xf(t){var e=Cn(t.target);if(e!==null){var n=Vn(e);if(n!==null){if(e=n.tag,e===13){if(e=lf(n),e!==null){t.blockedOn=e,wf(t.priority,function(){yf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return e=Ai(n),e!==null&&Ol(e),t.blockedOn=n,!1;e.shift()}return!0}function Jc(t,e,n){us(t)&&n.delete(e)}function eg(){Aa=!1,rn!==null&&us(rn)&&(rn=null),sn!==null&&us(sn)&&(sn=null),on!==null&&us(on)&&(on=null),di.forEach(Jc),fi.forEach(Jc)}function Lr(t,e){t.blockedOn===e&&(t.blockedOn=null,Aa||(Aa=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,eg)))}function hi(t){function e(i){return Lr(i,t)}if(0<Qi.length){Lr(Qi[0],t);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rn!==null&&Lr(rn,t),sn!==null&&Lr(sn,t),on!==null&&Lr(on,t),di.forEach(e),fi.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&Yt.shift()}var lr=Vt.ReactCurrentBatchConfig,Ps=!0;function tg(t,e,n,r){var i=V,s=lr.transition;lr.transition=null;try{V=1,jl(t,e,n,r)}finally{V=i,lr.transition=s}}function ng(t,e,n,r){var i=V,s=lr.transition;lr.transition=null;try{V=4,jl(t,e,n,r)}finally{V=i,lr.transition=s}}function jl(t,e,n,r){if(Ps){var i=Oa(t,e,n,r);if(i===null)Go(t,e,r,Rs,n),qc(t,r);else if(Zm(i,t,e,n,r))r.stopPropagation();else if(qc(t,r),e&4&&-1<Xm.indexOf(t)){for(;i!==null;){var s=Ai(i);if(s!==null&&gf(s),s=Oa(t,e,n,r),s===null&&Go(t,e,r,Rs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Go(t,e,r,null,n)}}var Rs=null;function Oa(t,e,n,r){if(Rs=null,t=Pl(r),t=Cn(t),t!==null)if(e=Vn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rs=t,null}function _f(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bm()){case Rl:return 1;case ff:return 4;case Ns:case Hm:return 16;case hf:return 536870912;default:return 16}default:return 16}}var tn=null,Ll=null,ds=null;function kf(){if(ds)return ds;var t,e=Ll,n=e.length,r,i="value"in tn?tn.value:tn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ds=i.slice(t,1<r?1-r:void 0)}function fs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yi(){return!0}function Xc(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yi:Xc,this.isPropagationStopped=Xc,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),e}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Ke(br),Ri=Z({},br,{view:0,detail:0}),rg=Ke(Ri),Mo,Uo,Dr,oo=Z({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Dr&&(Dr&&t.type==="mousemove"?(Mo=t.screenX-Dr.screenX,Uo=t.screenY-Dr.screenY):Uo=Mo=0,Dr=t),Mo)},movementY:function(t){return"movementY"in t?t.movementY:Uo}}),Zc=Ke(oo),ig=Z({},oo,{dataTransfer:0}),sg=Ke(ig),og=Z({},Ri,{relatedTarget:0}),$o=Ke(og),ag=Z({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),lg=Ke(ag),cg=Z({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ug=Ke(cg),dg=Z({},br,{data:0}),eu=Ke(dg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pg[t])?!!e[t]:!1}function Ml(){return mg}var gg=Z({},Ri,{key:function(t){if(t.key){var e=fg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(t){return t.type==="keypress"?fs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yg=Ke(gg),vg=Z({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Ke(vg),wg=Z({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),xg=Ke(wg),_g=Z({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),kg=Ke(_g),Eg=Z({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Ke(Eg),Ig=[9,13,27,32],Ul=Lt&&"CompositionEvent"in window,qr=null;Lt&&"documentMode"in document&&(qr=document.documentMode);var bg=Lt&&"TextEvent"in window&&!qr,Ef=Lt&&(!Ul||qr&&8<qr&&11>=qr),nu=String.fromCharCode(32),ru=!1;function Sf(t,e){switch(t){case"keyup":return Ig.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yn=!1;function Cg(t,e){switch(t){case"compositionend":return If(e);case"keypress":return e.which!==32?null:(ru=!0,nu);case"textInput":return t=e.data,t===nu&&ru?null:t;default:return null}}function Ng(t,e){if(Yn)return t==="compositionend"||!Ul&&Sf(t,e)?(t=kf(),ds=Ll=tn=null,Yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ef&&e.locale!=="ko"?null:e.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tg[t.type]:e==="textarea"}function bf(t,e,n,r){nf(r),e=As(e,"onChange"),0<e.length&&(n=new Dl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jr=null,pi=null;function Pg(t){Mf(t,0)}function ao(t){var e=Xn(t);if(Yd(e))return t}function Rg(t,e){if(t==="change")return e}var Cf=!1;if(Lt){var zo;if(Lt){var Fo="oninput"in document;if(!Fo){var su=document.createElement("div");su.setAttribute("oninput","return;"),Fo=typeof su.oninput=="function"}zo=Fo}else zo=!1;Cf=zo&&(!document.documentMode||9<document.documentMode)}function ou(){Jr&&(Jr.detachEvent("onpropertychange",Nf),pi=Jr=null)}function Nf(t){if(t.propertyName==="value"&&ao(pi)){var e=[];bf(e,pi,t,Pl(t)),af(Pg,e)}}function Ag(t,e,n){t==="focusin"?(ou(),Jr=e,pi=n,Jr.attachEvent("onpropertychange",Nf)):t==="focusout"&&ou()}function Og(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(pi)}function jg(t,e){if(t==="click")return ao(e)}function Lg(t,e){if(t==="input"||t==="change")return ao(e)}function Dg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:Dg;function mi(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ma.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function au(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lu(t,e){var n=au(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=au(n)}}function Tf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pf(){for(var t=window,e=Is();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Is(t.document)}return e}function $l(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mg(t){var e=Pf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tf(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lu(n,s);var o=lu(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=Lt&&"documentMode"in document&&11>=document.documentMode,qn=null,ja=null,Xr=null,La=!1;function cu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;La||qn==null||qn!==Is(r)||(r=qn,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&mi(Xr,r)||(Xr=r,r=As(ja,"onSelect"),0<r.length&&(e=new Dl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qn)))}function qi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jn={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},Vo={},Rf={};Lt&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function lo(t){if(Vo[t])return Vo[t];if(!Jn[t])return t;var e=Jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rf)return Vo[t]=e[n];return t}var Af=lo("animationend"),Of=lo("animationiteration"),jf=lo("animationstart"),Lf=lo("transitionend"),Df=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(t,e){Df.set(t,e),Fn(e,[t])}for(var Bo=0;Bo<uu.length;Bo++){var Ho=uu[Bo],$g=Ho.toLowerCase(),zg=Ho[0].toUpperCase()+Ho.slice(1);gn($g,"on"+zg)}gn(Af,"onAnimationEnd");gn(Of,"onAnimationIteration");gn(jf,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Lf,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function du(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$m(r,e,void 0,t),t.currentTarget=null}function Mf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;du(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;du(i,a,u),s=l}}}if(Cs)throw t=Pa,Cs=!1,Pa=null,t}function G(t,e){var n=e[za];n===void 0&&(n=e[za]=new Set);var r=t+"__bubble";n.has(r)||(Uf(e,t,2,!1),n.add(r))}function Wo(t,e,n){var r=0;e&&(r|=4),Uf(n,t,r,e)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function gi(t){if(!t[Ji]){t[Ji]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(Fg.has(n)||Wo(n,!1,t),Wo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ji]||(e[Ji]=!0,Wo("selectionchange",!1,e))}}function Uf(t,e,n,r){switch(_f(e)){case 1:var i=tg;break;case 4:i=ng;break;default:i=jl}n=i.bind(null,e,n,t),i=void 0,!Ta||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Go(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Cn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}af(function(){var u=s,m=Pl(n),p=[];e:{var f=Df.get(t);if(f!==void 0){var y=Dl,w=t;switch(t){case"keypress":if(fs(n)===0)break e;case"keydown":case"keyup":y=yg;break;case"focusin":w="focus",y=$o;break;case"focusout":w="blur",y=$o;break;case"beforeblur":case"afterblur":y=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xg;break;case Af:case Of:case jf:y=lg;break;case Lf:y=kg;break;case"scroll":y=rg;break;case"wheel":y=Sg;break;case"copy":case"cut":case"paste":y=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=tu}var _=(e&4)!==0,O=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,h!==null&&(v=ui(d,h),v!=null&&_.push(yi(d,v,g)))),O)break;d=d.return}0<_.length&&(f=new y(f,w,null,n,m),p.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Ca&&(w=n.relatedTarget||n.fromElement)&&(Cn(w)||w[Dt]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Cn(w):null,w!==null&&(O=Vn(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=Zc,v="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=tu,v="onPointerLeave",h="onPointerEnter",d="pointer"),O=y==null?f:Xn(y),g=w==null?f:Xn(w),f=new _(v,d+"leave",y,n,m),f.target=O,f.relatedTarget=g,v=null,Cn(m)===u&&(_=new _(h,d+"enter",w,n,m),_.target=g,_.relatedTarget=O,v=_),O=v,y&&w)t:{for(_=y,h=w,d=0,g=_;g;g=Gn(g))d++;for(g=0,v=h;v;v=Gn(v))g++;for(;0<d-g;)_=Gn(_),d--;for(;0<g-d;)h=Gn(h),g--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=Gn(_),h=Gn(h)}_=null}else _=null;y!==null&&fu(p,f,y,_,!1),w!==null&&O!==null&&fu(p,O,w,_,!0)}}e:{if(f=u?Xn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var b=Rg;else if(iu(f))if(Cf)b=Lg;else{b=Og;var N=Ag}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=jg);if(b&&(b=b(t,u))){bf(p,b,n,m);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ka(f,"number",f.value)}switch(N=u?Xn(u):window,t){case"focusin":(iu(N)||N.contentEditable==="true")&&(qn=N,ja=u,Xr=null);break;case"focusout":Xr=ja=qn=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,cu(p,n,m);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":cu(p,n,m)}var T;if(Ul)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Yn?Sf(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ef&&n.locale!=="ko"&&(Yn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Yn&&(T=kf()):(tn=m,Ll="value"in tn?tn.value:tn.textContent,Yn=!0)),N=As(u,R),0<N.length&&(R=new eu(R,t,null,n,m),p.push({event:R,listeners:N}),T?R.data=T:(T=If(n),T!==null&&(R.data=T)))),(T=bg?Cg(t,n):Ng(t,n))&&(u=As(u,"onBeforeInput"),0<u.length&&(m=new eu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=T))}Mf(p,e)})}function yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function As(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ui(t,n),s!=null&&r.unshift(yi(t,s,i)),s=ui(t,e),s!=null&&r.push(yi(t,s,i))),t=t.return}return r}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ui(n,s),l!=null&&o.unshift(yi(n,l,a))):i||(l=ui(n,s),l!=null&&o.push(yi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Vg=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function hu(t){return(typeof t=="string"?t:""+t).replace(Vg,`
`).replace(Bg,"")}function Xi(t,e,n){if(e=hu(e),hu(t)!==e&&n)throw Error(x(425))}function Os(){}var Da=null,Ma=null;function Ua(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(t){return pu.resolve(null).then(t).catch(Gg)}:$a;function Gg(t){setTimeout(function(){throw t})}function Ko(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),hi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Cr,vi="__reactProps$"+Cr,Dt="__reactContainer$"+Cr,za="__reactEvents$"+Cr,Kg="__reactListeners$"+Cr,Qg="__reactHandles$"+Cr;function Cn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dt]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mu(t);t!==null;){if(n=t[vt])return n;t=mu(t)}return e}t=n,n=t.parentNode}return null}function Ai(t){return t=t[vt]||t[Dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function co(t){return t[vi]||null}var Fa=[],Zn=-1;function yn(t){return{current:t}}function K(t){0>Zn||(t.current=Fa[Zn],Fa[Zn]=null,Zn--)}function W(t,e){Zn++,Fa[Zn]=t.current,t.current=e}var mn={},Ee=yn(mn),je=yn(!1),jn=mn;function gr(t,e){var n=t.type.contextTypes;if(!n)return mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function js(){K(je),K(Ee)}function gu(t,e,n){if(Ee.current!==mn)throw Error(x(168));W(Ee,e),W(je,n)}function $f(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Am(t)||"Unknown",i));return Z({},n,r)}function Ls(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mn,jn=Ee.current,W(Ee,t),W(je,je.current),!0}function yu(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=$f(t,e,jn),r.__reactInternalMemoizedMergedChildContext=t,K(je),K(Ee),W(Ee,t)):K(je),W(je,n)}var Nt=null,uo=!1,Qo=!1;function zf(t){Nt===null?Nt=[t]:Nt.push(t)}function Yg(t){uo=!0,zf(t)}function vn(){if(!Qo&&Nt!==null){Qo=!0;var t=0,e=V;try{var n=Nt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nt=null,uo=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(t+1)),df(Rl,vn),i}finally{V=e,Qo=!1}}return null}var er=[],tr=0,Ds=null,Ms=0,Ye=[],qe=0,Ln=null,Pt=1,Rt="";function Sn(t,e){er[tr++]=Ms,er[tr++]=Ds,Ds=t,Ms=e}function Ff(t,e,n){Ye[qe++]=Pt,Ye[qe++]=Rt,Ye[qe++]=Ln,Ln=t;var r=Pt;t=Rt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pt=1<<32-dt(e)+i|n<<i|r,Rt=s+t}else Pt=1<<s|n<<i|r,Rt=t}function zl(t){t.return!==null&&(Sn(t,1),Ff(t,1,0))}function Fl(t){for(;t===Ds;)Ds=er[--tr],er[tr]=null,Ms=er[--tr],er[tr]=null;for(;t===Ln;)Ln=Ye[--qe],Ye[qe]=null,Rt=Ye[--qe],Ye[qe]=null,Pt=Ye[--qe],Ye[qe]=null}var He=null,Be=null,Y=!1,ct=null;function Vf(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,He=t,Be=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,He=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ln!==null?{id:Pt,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,He=t,Be=null,!0):!1;default:return!1}}function Va(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ba(t){if(Y){var e=Be;if(e){var n=e;if(!vu(t,e)){if(Va(t))throw Error(x(418));e=an(n.nextSibling);var r=He;e&&vu(t,e)?Vf(r,n):(t.flags=t.flags&-4097|2,Y=!1,He=t)}}else{if(Va(t))throw Error(x(418));t.flags=t.flags&-4097|2,Y=!1,He=t}}}function wu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;He=t}function Zi(t){if(t!==He)return!1;if(!Y)return wu(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ua(t.type,t.memoizedProps)),e&&(e=Be)){if(Va(t))throw Bf(),Error(x(418));for(;e;)Vf(t,e),e=an(e.nextSibling)}if(wu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=He?an(t.stateNode.nextSibling):null;return!0}function Bf(){for(var t=Be;t;)t=an(t.nextSibling)}function yr(){Be=He=null,Y=!1}function Vl(t){ct===null?ct=[t]:ct.push(t)}var qg=Vt.ReactCurrentBatchConfig;function Mr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function es(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xu(t){var e=t._init;return e(t._payload)}function Hf(t){function e(h,d){if(t){var g=h.deletions;g===null?(h.deletions=[d],h.flags|=16):g.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=dn(h,d),h.index=0,h.sibling=null,h}function s(h,d,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<d?(h.flags|=2,d):g):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,g,v){return d===null||d.tag!==6?(d=ta(g,h.mode,v),d.return=h,d):(d=i(d,g),d.return=h,d)}function l(h,d,g,v){var b=g.type;return b===Qn?m(h,d,g.props.children,v,g.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kt&&xu(b)===d.type)?(v=i(d,g.props),v.ref=Mr(h,d,g),v.return=h,v):(v=ws(g.type,g.key,g.props,null,h.mode,v),v.ref=Mr(h,d,g),v.return=h,v)}function u(h,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=na(g,h.mode,v),d.return=h,d):(d=i(d,g.children||[]),d.return=h,d)}function m(h,d,g,v,b){return d===null||d.tag!==7?(d=An(g,h.mode,v,b),d.return=h,d):(d=i(d,g),d.return=h,d)}function p(h,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ta(""+d,h.mode,g),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Bi:return g=ws(d.type,d.key,d.props,null,h.mode,g),g.ref=Mr(h,null,d),g.return=h,g;case Kn:return d=na(d,h.mode,g),d.return=h,d;case Kt:var v=d._init;return p(h,v(d._payload),g)}if(Vr(d)||Ar(d))return d=An(d,h.mode,g,null),d.return=h,d;es(h,d)}return null}function f(h,d,g,v){var b=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bi:return g.key===b?l(h,d,g,v):null;case Kn:return g.key===b?u(h,d,g,v):null;case Kt:return b=g._init,f(h,d,b(g._payload),v)}if(Vr(g)||Ar(g))return b!==null?null:m(h,d,g,v,null);es(h,g)}return null}function y(h,d,g,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(g)||null,a(d,h,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bi:return h=h.get(v.key===null?g:v.key)||null,l(d,h,v,b);case Kn:return h=h.get(v.key===null?g:v.key)||null,u(d,h,v,b);case Kt:var N=v._init;return y(h,d,g,N(v._payload),b)}if(Vr(v)||Ar(v))return h=h.get(g)||null,m(d,h,v,b,null);es(d,v)}return null}function w(h,d,g,v){for(var b=null,N=null,T=d,R=d=0,F=null;T!==null&&R<g.length;R++){T.index>R?(F=T,T=null):F=T.sibling;var P=f(h,T,g[R],v);if(P===null){T===null&&(T=F);break}t&&T&&P.alternate===null&&e(h,T),d=s(P,d,R),N===null?b=P:N.sibling=P,N=P,T=F}if(R===g.length)return n(h,T),Y&&Sn(h,R),b;if(T===null){for(;R<g.length;R++)T=p(h,g[R],v),T!==null&&(d=s(T,d,R),N===null?b=T:N.sibling=T,N=T);return Y&&Sn(h,R),b}for(T=r(h,T);R<g.length;R++)F=y(T,h,R,g[R],v),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?R:F.key),d=s(F,d,R),N===null?b=F:N.sibling=F,N=F);return t&&T.forEach(function(A){return e(h,A)}),Y&&Sn(h,R),b}function _(h,d,g,v){var b=Ar(g);if(typeof b!="function")throw Error(x(150));if(g=b.call(g),g==null)throw Error(x(151));for(var N=b=null,T=d,R=d=0,F=null,P=g.next();T!==null&&!P.done;R++,P=g.next()){T.index>R?(F=T,T=null):F=T.sibling;var A=f(h,T,P.value,v);if(A===null){T===null&&(T=F);break}t&&T&&A.alternate===null&&e(h,T),d=s(A,d,R),N===null?b=A:N.sibling=A,N=A,T=F}if(P.done)return n(h,T),Y&&Sn(h,R),b;if(T===null){for(;!P.done;R++,P=g.next())P=p(h,P.value,v),P!==null&&(d=s(P,d,R),N===null?b=P:N.sibling=P,N=P);return Y&&Sn(h,R),b}for(T=r(h,T);!P.done;R++,P=g.next())P=y(T,h,R,P.value,v),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?R:P.key),d=s(P,d,R),N===null?b=P:N.sibling=P,N=P);return t&&T.forEach(function(oe){return e(h,oe)}),Y&&Sn(h,R),b}function O(h,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bi:e:{for(var b=g.key,N=d;N!==null;){if(N.key===b){if(b=g.type,b===Qn){if(N.tag===7){n(h,N.sibling),d=i(N,g.props.children),d.return=h,h=d;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kt&&xu(b)===N.type){n(h,N.sibling),d=i(N,g.props),d.ref=Mr(h,N,g),d.return=h,h=d;break e}n(h,N);break}else e(h,N);N=N.sibling}g.type===Qn?(d=An(g.props.children,h.mode,v,g.key),d.return=h,h=d):(v=ws(g.type,g.key,g.props,null,h.mode,v),v.ref=Mr(h,d,g),v.return=h,h=v)}return o(h);case Kn:e:{for(N=g.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(h,d.sibling),d=i(d,g.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=na(g,h.mode,v),d.return=h,h=d}return o(h);case Kt:return N=g._init,O(h,d,N(g._payload),v)}if(Vr(g))return w(h,d,g,v);if(Ar(g))return _(h,d,g,v);es(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,g),d.return=h,h=d):(n(h,d),d=ta(g,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return O}var vr=Hf(!0),Wf=Hf(!1),Us=yn(null),$s=null,nr=null,Bl=null;function Hl(){Bl=nr=$s=null}function Wl(t){var e=Us.current;K(Us),t._currentValue=e}function Ha(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cr(t,e){$s=t,Bl=nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Bl!==t)if(t={context:t,memoizedValue:e,next:null},nr===null){if($s===null)throw Error(x(308));nr=t,$s.dependencies={lanes:0,firstContext:t}}else nr=nr.next=t;return e}var Nn=null;function Gl(t){Nn===null?Nn=[t]:Nn.push(t)}function Gf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gl(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Kl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,Gl(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function hs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Al(t,n)}}function _u(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zs(t,e,n,r){var i=t.updateQueue;Qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,m=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(f=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(y,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,f=typeof w=="function"?w.call(y,p,f):w,f==null)break e;p=Z({},p,f);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,l=p):m=m.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(m===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mn|=o,t.lanes=o,t.memoizedState=p}}function ku(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Oi={},_t=yn(Oi),wi=yn(Oi),xi=yn(Oi);function Tn(t){if(t===Oi)throw Error(x(174));return t}function Ql(t,e){switch(W(xi,e),W(wi,t),W(_t,Oi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sa(e,t)}K(_t),W(_t,e)}function wr(){K(_t),K(wi),K(xi)}function Qf(t){Tn(xi.current);var e=Tn(_t.current),n=Sa(e,t.type);e!==n&&(W(wi,t),W(_t,n))}function Yl(t){wi.current===t&&(K(_t),K(wi))}var J=yn(0);function Fs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yo=[];function ql(){for(var t=0;t<Yo.length;t++)Yo[t]._workInProgressVersionPrimary=null;Yo.length=0}var ps=Vt.ReactCurrentDispatcher,qo=Vt.ReactCurrentBatchConfig,Dn=0,X=null,fe=null,pe=null,Vs=!1,Zr=!1,_i=0,Jg=0;function xe(){throw Error(x(321))}function Jl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function Xl(t,e,n,r,i,s){if(Dn=s,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ps.current=t===null||t.memoizedState===null?t0:n0,t=n(r,i),Zr){s=0;do{if(Zr=!1,_i=0,25<=s)throw Error(x(301));s+=1,pe=fe=null,e.updateQueue=null,ps.current=r0,t=n(r,i)}while(Zr)}if(ps.current=Bs,e=fe!==null&&fe.next!==null,Dn=0,pe=fe=X=null,Vs=!1,e)throw Error(x(300));return t}function Zl(){var t=_i!==0;return _i=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?X.memoizedState=pe=t:pe=pe.next=t,pe}function et(){if(fe===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=pe===null?X.memoizedState:pe.next;if(e!==null)pe=e,fe=t;else{if(t===null)throw Error(x(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},pe===null?X.memoizedState=pe=t:pe=pe.next=t}return pe}function ki(t,e){return typeof e=="function"?e(t):e}function Jo(t){var e=et(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var m=u.lane;if((Dn&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,X.lanes|=m,Mn|=m}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ht(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,X.lanes|=s,Mn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xo(t){var e=et(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ht(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yf(){}function qf(t,e){var n=X,r=et(),i=e(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,ec(Zf.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Ei(9,Xf.bind(null,n,r,i,e),void 0,null),me===null)throw Error(x(349));Dn&30||Jf(n,e,i)}return i}function Jf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xf(t,e,n,r){e.value=n,e.getSnapshot=r,eh(e)&&th(t)}function Zf(t,e,n){return n(function(){eh(e)&&th(t)})}function eh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function th(t){var e=Mt(t,1);e!==null&&ft(e,t,1,-1)}function Eu(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},e.queue=t,t=t.dispatch=e0.bind(null,X,t),[e.memoizedState,t]}function Ei(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nh(){return et().memoizedState}function ms(t,e,n,r){var i=yt();X.flags|=t,i.memoizedState=Ei(1|e,n,void 0,r===void 0?null:r)}function fo(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&Jl(r,o.deps)){i.memoizedState=Ei(e,n,s,r);return}}X.flags|=t,i.memoizedState=Ei(1|e,n,s,r)}function Su(t,e){return ms(8390656,8,t,e)}function ec(t,e){return fo(2048,8,t,e)}function rh(t,e){return fo(4,2,t,e)}function ih(t,e){return fo(4,4,t,e)}function sh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oh(t,e,n){return n=n!=null?n.concat([t]):null,fo(4,4,sh.bind(null,e,t),n)}function tc(){}function ah(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lh(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ch(t,e,n){return Dn&21?(ht(n,e)||(n=pf(),X.lanes|=n,Mn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function Xg(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=qo.transition;qo.transition={};try{t(!1),e()}finally{V=n,qo.transition=r}}function uh(){return et().memoizedState}function Zg(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dh(t))fh(e,n);else if(n=Gf(t,e,n,r),n!==null){var i=Ie();ft(n,t,r,i),hh(n,e,r)}}function e0(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dh(t))fh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,o)){var l=e.interleaved;l===null?(i.next=i,Gl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Gf(t,e,i,r),n!==null&&(i=Ie(),ft(n,t,r,i),hh(n,e,r))}}function dh(t){var e=t.alternate;return t===X||e!==null&&e===X}function fh(t,e){Zr=Vs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Al(t,n)}}var Bs={readContext:Ze,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},t0={readContext:Ze,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:Su,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ms(4194308,4,sh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ms(4194308,4,t,e)},useInsertionEffect:function(t,e){return ms(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zg.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:Eu,useDebugValue:tc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=Eu(!1),e=t[0];return t=Xg.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=X,i=yt();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),me===null)throw Error(x(349));Dn&30||Jf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Su(Zf.bind(null,r,s,t),[t]),r.flags|=2048,Ei(9,Xf.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yt(),e=me.identifierPrefix;if(Y){var n=Rt,r=Pt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_i++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},n0={readContext:Ze,useCallback:ah,useContext:Ze,useEffect:ec,useImperativeHandle:oh,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:lh,useReducer:Jo,useRef:nh,useState:function(){return Jo(ki)},useDebugValue:tc,useDeferredValue:function(t){var e=et();return ch(e,fe.memoizedState,t)},useTransition:function(){var t=Jo(ki)[0],e=et().memoizedState;return[t,e]},useMutableSource:Yf,useSyncExternalStore:qf,useId:uh,unstable_isNewReconciler:!1},r0={readContext:Ze,useCallback:ah,useContext:Ze,useEffect:ec,useImperativeHandle:oh,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:lh,useReducer:Xo,useRef:nh,useState:function(){return Xo(ki)},useDebugValue:tc,useDeferredValue:function(t){var e=et();return fe===null?e.memoizedState=t:ch(e,fe.memoizedState,t)},useTransition:function(){var t=Xo(ki)[0],e=et().memoizedState;return[t,e]},useMutableSource:Yf,useSyncExternalStore:qf,useId:uh,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ho={isMounted:function(t){return(t=t._reactInternals)?Vn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=un(t),s=jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ft(e,t,i,r),hs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=un(t),s=jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ft(e,t,i,r),hs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ie(),r=un(t),i=jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ft(e,t,r,n),hs(e,t,r))}};function Iu(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mi(n,r)||!mi(i,s):!0}function ph(t,e,n){var r=!1,i=mn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Le(e)?jn:Ee.current,r=e.contextTypes,s=(r=r!=null)?gr(t,i):mn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ho,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ho.enqueueReplaceState(e,e.state,null)}function Ga(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Le(e)?jn:Ee.current,i.context=gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ho.enqueueReplaceState(i,i.state,null),zs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e){try{var n="",r=e;do n+=Rm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ka(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var i0=typeof WeakMap=="function"?WeakMap:Map;function mh(t,e,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ws||(Ws=!0,rl=r),Ka(t,e)},n}function gh(t,e,n){n=jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ka(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ka(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new i0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=v0.bind(null,t,e,n),e.then(t,t))}function Nu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jt(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var s0=Vt.ReactCurrentOwner,Oe=!1;function Se(t,e,n,r){e.child=t===null?Wf(e,null,n,r):vr(e,t.child,n,r)}function Pu(t,e,n,r,i){n=n.render;var s=e.ref;return cr(e,i),r=Xl(t,e,n,r,s,i),n=Zl(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):(Y&&n&&zl(e),e.flags|=1,Se(t,e,r,i),e.child)}function Ru(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yh(t,e,s,r,i)):(t=ws(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(o,r)&&t.ref===e.ref)return Ut(t,e,i)}return e.flags|=1,t=dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function yh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Ut(t,e,i)}return Qa(t,e,n,r,i)}function vh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(ir,Fe),Fe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,W(ir,Fe),Fe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(ir,Fe),Fe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,W(ir,Fe),Fe|=r;return Se(t,e,i,n),e.child}function wh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qa(t,e,n,r,i){var s=Le(n)?jn:Ee.current;return s=gr(e,s),cr(e,i),n=Xl(t,e,n,r,s,i),r=Zl(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):(Y&&r&&zl(e),e.flags|=1,Se(t,e,n,i),e.child)}function Au(t,e,n,r,i){if(Le(n)){var s=!0;Ls(e)}else s=!1;if(cr(e,i),e.stateNode===null)gs(t,e),ph(e,n,r),Ga(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Le(n)?jn:Ee.current,u=gr(e,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bu(e,o,r,u),Qt=!1;var f=e.memoizedState;o.state=f,zs(e,r,o,i),l=e.memoizedState,a!==r||f!==l||je.current||Qt?(typeof m=="function"&&(Wa(e,n,m,r),l=e.memoizedState),(a=Qt||Iu(e,n,a,r,f,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:at(e.type,a),o.props=u,p=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=Le(n)?jn:Ee.current,l=gr(e,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||f!==l)&&bu(e,o,r,l),Qt=!1,f=e.memoizedState,o.state=f,zs(e,r,o,i);var w=e.memoizedState;a!==p||f!==w||je.current||Qt?(typeof y=="function"&&(Wa(e,n,y,r),w=e.memoizedState),(u=Qt||Iu(e,n,u,r,f,w,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ya(t,e,n,r,s,i)}function Ya(t,e,n,r,i,s){wh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yu(e,n,!1),Ut(t,e,s);r=e.stateNode,s0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vr(e,t.child,null,s),e.child=vr(e,null,a,s)):Se(t,e,a,s),e.memoizedState=r.state,i&&yu(e,n,!0),e.child}function xh(t){var e=t.stateNode;e.pendingContext?gu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gu(t,e.context,!1),Ql(t,e.containerInfo)}function Ou(t,e,n,r,i){return yr(),Vl(i),e.flags|=256,Se(t,e,n,r),e.child}var qa={dehydrated:null,treeContext:null,retryLane:0};function Ja(t){return{baseLanes:t,cachePool:null,transitions:null}}function _h(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),W(J,i&1),t===null)return Ba(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=go(o,r,0,null),t=An(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ja(n),e.memoizedState=qa,t):nc(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return o0(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dn(a,s):(s=An(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ja(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qa,r}return s=t.child,t=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nc(t,e){return e=go({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ts(t,e,n,r){return r!==null&&Vl(r),vr(e,t.child,null,n),t=nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zo(Error(x(422))),ts(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=go({mode:"visible",children:r.children},i,0,null),s=An(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vr(e,t.child,null,o),e.child.memoizedState=Ja(o),e.memoizedState=qa,s);if(!(e.mode&1))return ts(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Zo(s,r,void 0),ts(t,e,o,r)}if(a=(o&t.childLanes)!==0,Oe||a){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ft(r,t,i,-1))}return lc(),r=Zo(Error(x(421))),ts(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=w0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=an(i.nextSibling),He=e,Y=!0,ct=null,t!==null&&(Ye[qe++]=Pt,Ye[qe++]=Rt,Ye[qe++]=Ln,Pt=t.id,Rt=t.overflow,Ln=e),e=nc(e,r.children),e.flags|=4096,e)}function ju(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ha(t.return,e,n)}function ea(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Se(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ju(t,n,e);else if(t.tag===19)ju(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(W(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fs(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ea(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fs(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ea(e,!0,n,null,s);break;case"together":ea(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ut(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function a0(t,e,n){switch(e.tag){case 3:xh(e),yr();break;case 5:Qf(e);break;case 1:Le(e.type)&&Ls(e);break;case 4:Ql(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;W(Us,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?_h(t,e,n):(W(J,J.current&1),t=Ut(t,e,n),t!==null?t.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,vh(t,e,n)}return Ut(t,e,n)}var Eh,Xa,Sh,Ih;Eh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xa=function(){};Sh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(_t.current);var s=null;switch(n){case"input":i=xa(t,i),r=xa(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=Ea(t,i),r=Ea(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Os)}Ia(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ih=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ur(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function l0(t,e,n){var r=e.pendingProps;switch(Fl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Le(e.type)&&js(),_e(e),null;case 3:return r=e.stateNode,wr(),K(je),K(Ee),ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(ol(ct),ct=null))),Xa(t,e),_e(e),null;case 5:Yl(e);var i=Tn(xi.current);if(n=e.type,t!==null&&e.stateNode!=null)Sh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return _e(e),null}if(t=Tn(_t.current),Zi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[vi]=s,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)G(Hr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Bc(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":Wc(r,s),G("invalid",r)}Ia(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xi(r.textContent,a,t),i=["children",""+a]):li.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":Hi(r),Hc(r,s,!0);break;case"textarea":Hi(r),Gc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Os)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[vi]=r,Eh(t,e,!1,!1),e.stateNode=t;e:{switch(o=ba(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)G(Hr[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":Bc(t,r),i=xa(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),G("invalid",t);break;case"textarea":Wc(t,r),i=Ea(t,r),G("invalid",t);break;default:i=r}Ia(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zd(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ci(t,l):typeof l=="number"&&ci(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(li.hasOwnProperty(s)?l!=null&&s==="onScroll"&&G("scroll",t):l!=null&&bl(t,s,l,o))}switch(n){case"input":Hi(t),Hc(t,r,!1);break;case"textarea":Hi(t),Gc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?sr(t,!!r.multiple,s,!1):r.defaultValue!=null&&sr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)Ih(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Tn(xi.current),Tn(_t.current),Zi(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=He,t!==null))switch(t.tag){case 3:Xi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return _e(e),null;case 13:if(K(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&Be!==null&&e.mode&1&&!(e.flags&128))Bf(),yr(),e.flags|=98560,s=!1;else if(s=Zi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[vt]=e}else yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),s=!1}else ct!==null&&(ol(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?he===0&&(he=3):lc())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return wr(),Xa(t,e),t===null&&gi(e.stateNode.containerInfo),_e(e),null;case 10:return Wl(e.type._context),_e(e),null;case 17:return Le(e.type)&&js(),_e(e),null;case 19:if(K(J),s=e.memoizedState,s===null)return _e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ur(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fs(t),o!==null){for(e.flags|=128,Ur(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return W(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>_r&&(e.flags|=128,r=!0,Ur(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fs(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return _e(e),null}else 2*se()-s.renderingStartTime>_r&&n!==1073741824&&(e.flags|=128,r=!0,Ur(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=J.current,W(J,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return ac(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Fe&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function c0(t,e){switch(Fl(e),e.tag){case 1:return Le(e.type)&&js(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wr(),K(je),K(Ee),ql(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yl(e),null;case 13:if(K(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(J),null;case 4:return wr(),null;case 10:return Wl(e.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var ns=!1,ke=!1,u0=typeof WeakSet=="function"?WeakSet:Set,C=null;function rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Za(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Lu=!1;function d0(t,e){if(Da=Ps,t=Pf(),$l(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,m=0,p=t,f=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++m===r&&(l=o),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ma={focusedElem:t,selectionRange:n},Ps=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,O=w.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:at(e.type,_),O);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){ne(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return w=Lu,Lu=!1,w}function ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Za(e,n,s)}i=i.next}while(i!==r)}}function po(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function el(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bh(t){var e=t.alternate;e!==null&&(t.alternate=null,bh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[vi],delete e[za],delete e[Kg],delete e[Qg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ch(t){return t.tag===5||t.tag===3||t.tag===4}function Du(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ch(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Os));else if(r!==4&&(t=t.child,t!==null))for(tl(t,e,n),t=t.sibling;t!==null;)tl(t,e,n),t=t.sibling}function nl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nl(t,e,n),t=t.sibling;t!==null;)nl(t,e,n),t=t.sibling}var ge=null,lt=!1;function Wt(t,e,n){for(n=n.child;n!==null;)Nh(t,e,n),n=n.sibling}function Nh(t,e,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:ke||rr(n,e);case 6:var r=ge,i=lt;ge=null,Wt(t,e,n),ge=r,lt=i,ge!==null&&(lt?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(lt?(t=ge,n=n.stateNode,t.nodeType===8?Ko(t.parentNode,n):t.nodeType===1&&Ko(t,n),hi(t)):Ko(ge,n.stateNode));break;case 4:r=ge,i=lt,ge=n.stateNode.containerInfo,lt=!0,Wt(t,e,n),ge=r,lt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Za(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!ke&&(rr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,e,a)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Wt(t,e,n),ke=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function Mu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u0),e.forEach(function(r){var i=x0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,lt=!1;break e;case 3:ge=a.stateNode.containerInfo,lt=!0;break e;case 4:ge=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ge===null)throw Error(x(160));Nh(s,o,i),ge=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Th(e,t),e=e.sibling}function Th(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ot(e,t),gt(t),r&4){try{ei(3,t,t.return),po(3,t)}catch(_){ne(t,t.return,_)}try{ei(5,t,t.return)}catch(_){ne(t,t.return,_)}}break;case 1:ot(e,t),gt(t),r&512&&n!==null&&rr(n,n.return);break;case 5:if(ot(e,t),gt(t),r&512&&n!==null&&rr(n,n.return),t.flags&32){var i=t.stateNode;try{ci(i,"")}catch(_){ne(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qd(i,s),ba(a,o);var u=ba(a,s);for(o=0;o<l.length;o+=2){var m=l[o],p=l[o+1];m==="style"?tf(i,p):m==="dangerouslySetInnerHTML"?Zd(i,p):m==="children"?ci(i,p):bl(i,m,p,u)}switch(a){case"input":_a(i,s);break;case"textarea":Jd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?sr(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?sr(i,!!s.multiple,s.defaultValue,!0):sr(i,!!s.multiple,s.multiple?[]:"",!1))}i[vi]=s}catch(_){ne(t,t.return,_)}}break;case 6:if(ot(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ne(t,t.return,_)}}break;case 3:if(ot(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(e.containerInfo)}catch(_){ne(t,t.return,_)}break;case 4:ot(e,t),gt(t);break;case 13:ot(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=se())),r&4&&Mu(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||m,ot(e,t),ke=u):ot(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!m&&t.mode&1)for(C=t,m=t.child;m!==null;){for(p=C=m;C!==null;){switch(f=C,y=f.child,f.tag){case 0:case 11:case 14:case 15:ei(4,f,f.return);break;case 1:rr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){ne(r,n,_)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){$u(p);continue}}y!==null?(y.return=f,C=y):$u(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ef("display",o))}catch(_){ne(t,t.return,_)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){ne(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ot(e,t),gt(t),r&4&&Mu(t);break;case 21:break;default:ot(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ch(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ci(i,""),r.flags&=-33);var s=Du(t);nl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Du(t);tl(t,a,o);break;default:throw Error(x(161))}}catch(l){ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function f0(t,e,n){C=t,Ph(t)}function Ph(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ns;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ke;a=ns;var u=ke;if(ns=o,(ke=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?zu(i):l!==null?(l.return=o,C=l):zu(i);for(;s!==null;)C=s,Ph(s),s=s.sibling;C=i,ns=a,ke=u}Uu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Uu(t)}}function Uu(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ke||po(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ku(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ku(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&hi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ke||e.flags&512&&el(e)}catch(f){ne(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function $u(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function zu(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{po(4,e)}catch(l){ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ne(e,i,l)}}var s=e.return;try{el(e)}catch(l){ne(e,s,l)}break;case 5:var o=e.return;try{el(e)}catch(l){ne(e,o,l)}}}catch(l){ne(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var h0=Math.ceil,Hs=Vt.ReactCurrentDispatcher,rc=Vt.ReactCurrentOwner,Xe=Vt.ReactCurrentBatchConfig,$=0,me=null,ce=null,ye=0,Fe=0,ir=yn(0),he=0,Si=null,Mn=0,mo=0,ic=0,ti=null,Ae=null,sc=0,_r=1/0,bt=null,Ws=!1,rl=null,cn=null,rs=!1,nn=null,Gs=0,ni=0,il=null,ys=-1,vs=0;function Ie(){return $&6?se():ys!==-1?ys:ys=se()}function un(t){return t.mode&1?$&2&&ye!==0?ye&-ye:qg.transition!==null?(vs===0&&(vs=pf()),vs):(t=V,t!==0||(t=window.event,t=t===void 0?16:_f(t.type)),t):1}function ft(t,e,n,r){if(50<ni)throw ni=0,il=null,Error(x(185));Pi(t,n,r),(!($&2)||t!==me)&&(t===me&&(!($&2)&&(mo|=n),he===4&&qt(t,ye)),De(t,r),n===1&&$===0&&!(e.mode&1)&&(_r=se()+500,uo&&vn()))}function De(t,e){var n=t.callbackNode;qm(t,e);var r=Ts(t,t===me?ye:0);if(r===0)n!==null&&Yc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yc(n),e===1)t.tag===0?Yg(Fu.bind(null,t)):zf(Fu.bind(null,t)),Wg(function(){!($&6)&&vn()}),n=null;else{switch(mf(r)){case 1:n=Rl;break;case 4:n=ff;break;case 16:n=Ns;break;case 536870912:n=hf;break;default:n=Ns}n=Uh(n,Rh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rh(t,e){if(ys=-1,vs=0,$&6)throw Error(x(327));var n=t.callbackNode;if(ur()&&t.callbackNode!==n)return null;var r=Ts(t,t===me?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ks(t,r);else{e=r;var i=$;$|=2;var s=Oh();(me!==t||ye!==e)&&(bt=null,_r=se()+500,Rn(t,e));do try{g0();break}catch(a){Ah(t,a)}while(1);Hl(),Hs.current=s,$=i,ce!==null?e=0:(me=null,ye=0,e=he)}if(e!==0){if(e===2&&(i=Ra(t),i!==0&&(r=i,e=sl(t,i))),e===1)throw n=Si,Rn(t,0),qt(t,r),De(t,se()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!p0(i)&&(e=Ks(t,r),e===2&&(s=Ra(t),s!==0&&(r=s,e=sl(t,s))),e===1))throw n=Si,Rn(t,0),qt(t,r),De(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:In(t,Ae,bt);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=sc+500-se(),10<e)){if(Ts(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ie(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$a(In.bind(null,t,Ae,bt),e);break}In(t,Ae,bt);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h0(r/1960))-r,10<r){t.timeoutHandle=$a(In.bind(null,t,Ae,bt),r);break}In(t,Ae,bt);break;case 5:In(t,Ae,bt);break;default:throw Error(x(329))}}}return De(t,se()),t.callbackNode===n?Rh.bind(null,t):null}function sl(t,e){var n=ti;return t.current.memoizedState.isDehydrated&&(Rn(t,e).flags|=256),t=Ks(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&ol(e)),t}function ol(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function p0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~ic,e&=~mo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Fu(t){if($&6)throw Error(x(327));ur();var e=Ts(t,0);if(!(e&1))return De(t,se()),null;var n=Ks(t,e);if(t.tag!==0&&n===2){var r=Ra(t);r!==0&&(e=r,n=sl(t,r))}if(n===1)throw n=Si,Rn(t,0),qt(t,e),De(t,se()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Ae,bt),De(t,se()),null}function oc(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(_r=se()+500,uo&&vn())}}function Un(t){nn!==null&&nn.tag===0&&!($&6)&&ur();var e=$;$|=1;var n=Xe.transition,r=V;try{if(Xe.transition=null,V=1,t)return t()}finally{V=r,Xe.transition=n,$=e,!($&6)&&vn()}}function ac(){Fe=ir.current,K(ir)}function Rn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hg(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:wr(),K(je),K(Ee),ql();break;case 5:Yl(r);break;case 4:wr();break;case 13:K(J);break;case 19:K(J);break;case 10:Wl(r.type._context);break;case 22:case 23:ac()}n=n.return}if(me=t,ce=t=dn(t.current,null),ye=Fe=e,he=0,Si=null,ic=mo=Mn=0,Ae=ti=null,Nn!==null){for(e=0;e<Nn.length;e++)if(n=Nn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return t}function Ah(t,e){do{var n=ce;try{if(Hl(),ps.current=Bs,Vs){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vs=!1}if(Dn=0,pe=fe=X=null,Zr=!1,_i=0,rc.current=null,n===null||n.return===null){he=1,Si=e,ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Nu(o);if(y!==null){y.flags&=-257,Tu(y,o,a,s,e),y.mode&1&&Cu(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){Cu(s,u,e),lc();break e}l=Error(x(426))}}else if(Y&&a.mode&1){var O=Nu(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Tu(O,o,a,s,e),Vl(xr(l,a));break e}}s=l=xr(l,a),he!==4&&(he=2),ti===null?ti=[s]:ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=mh(s,l,e);_u(s,h);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=gh(s,a,e);_u(s,v);break e}}s=s.return}while(s!==null)}Lh(n)}catch(b){e=b,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Oh(){var t=Hs.current;return Hs.current=Bs,t===null?Bs:t}function lc(){(he===0||he===3||he===2)&&(he=4),me===null||!(Mn&268435455)&&!(mo&268435455)||qt(me,ye)}function Ks(t,e){var n=$;$|=2;var r=Oh();(me!==t||ye!==e)&&(bt=null,Rn(t,e));do try{m0();break}catch(i){Ah(t,i)}while(1);if(Hl(),$=n,Hs.current=r,ce!==null)throw Error(x(261));return me=null,ye=0,he}function m0(){for(;ce!==null;)jh(ce)}function g0(){for(;ce!==null&&!Fm();)jh(ce)}function jh(t){var e=Mh(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?Lh(t):ce=e,rc.current=null}function Lh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=c0(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ce=null;return}}else if(n=l0(n,e,Fe),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);he===0&&(he=5)}function In(t,e,n){var r=V,i=Xe.transition;try{Xe.transition=null,V=1,y0(t,e,n,r)}finally{Xe.transition=i,V=r}return null}function y0(t,e,n,r){do ur();while(nn!==null);if($&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jm(t,s),t===me&&(ce=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,Uh(Ns,function(){return ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=V;V=1;var a=$;$|=4,rc.current=null,d0(t,n),Th(n,t),Mg(Ma),Ps=!!Da,Ma=Da=null,t.current=n,f0(n),Vm(),$=a,V=o,Xe.transition=s}else t.current=n;if(rs&&(rs=!1,nn=t,Gs=i),s=t.pendingLanes,s===0&&(cn=null),Wm(n.stateNode),De(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ws)throw Ws=!1,t=rl,rl=null,t;return Gs&1&&t.tag!==0&&ur(),s=t.pendingLanes,s&1?t===il?ni++:(ni=0,il=t):ni=0,vn(),null}function ur(){if(nn!==null){var t=mf(Gs),e=Xe.transition,n=V;try{if(Xe.transition=null,V=16>t?16:t,nn===null)var r=!1;else{if(t=nn,nn=null,Gs=0,$&6)throw Error(x(331));var i=$;for($|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:ei(8,m,s)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var f=m.sibling,y=m.return;if(bh(m),m===u){C=null;break}if(f!==null){f.return=y,C=f;break}C=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var O=_.sibling;_.sibling=null,_=O}while(_!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ei(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,C=h;break e}C=s.return}}var d=t.current;for(C=d;C!==null;){o=C;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,C=g;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:po(9,a)}}catch(b){ne(a,a.return,b)}if(a===o){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if($=i,vn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(so,t)}catch{}r=!0}return r}finally{V=n,Xe.transition=e}}return!1}function Vu(t,e,n){e=xr(n,e),e=mh(t,e,1),t=ln(t,e,1),e=Ie(),t!==null&&(Pi(t,1,e),De(t,e))}function ne(t,e,n){if(t.tag===3)Vu(t,t,n);else for(;e!==null;){if(e.tag===3){Vu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=xr(n,t),t=gh(e,t,1),e=ln(e,t,1),t=Ie(),e!==null&&(Pi(e,1,t),De(e,t));break}}e=e.return}}function v0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ie(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ye&n)===n&&(he===4||he===3&&(ye&130023424)===ye&&500>se()-sc?Rn(t,0):ic|=n),De(t,e)}function Dh(t,e){e===0&&(t.mode&1?(e=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):e=1);var n=Ie();t=Mt(t,e),t!==null&&(Pi(t,e,n),De(t,n))}function w0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dh(t,n)}function x0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Dh(t,n)}var Mh;Mh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,a0(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,Y&&e.flags&1048576&&Ff(e,Ms,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gs(t,e),t=e.pendingProps;var i=gr(e,Ee.current);cr(e,n),i=Xl(null,e,r,t,i,n);var s=Zl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,Ls(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kl(e),i.updater=ho,e.stateNode=i,i._reactInternals=e,Ga(e,r,t,n),e=Ya(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&zl(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=k0(r),t=at(r,t),i){case 0:e=Qa(null,e,r,t,n);break e;case 1:e=Au(null,e,r,t,n);break e;case 11:e=Pu(null,e,r,t,n);break e;case 14:e=Ru(null,e,r,at(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Qa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Au(t,e,r,i,n);case 3:e:{if(xh(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kf(t,e),zs(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xr(Error(x(423)),e),e=Ou(t,e,r,n,i);break e}else if(r!==i){i=xr(Error(x(424)),e),e=Ou(t,e,r,n,i);break e}else for(Be=an(e.stateNode.containerInfo.firstChild),He=e,Y=!0,ct=null,n=Wf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){e=Ut(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return Qf(e),t===null&&Ba(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ua(r,i)?o=null:s!==null&&Ua(r,s)&&(e.flags|=32),wh(t,e),Se(t,e,o,n),e.child;case 6:return t===null&&Ba(e),null;case 13:return _h(t,e,n);case 4:return Ql(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vr(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Pu(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,W(Us,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!je.current){e=Ut(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ha(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ha(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cr(e,n),i=Ze(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Ru(t,e,r,i,n);case 15:return yh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),gs(t,e),e.tag=1,Le(r)?(t=!0,Ls(e)):t=!1,cr(e,n),ph(e,r,i),Ga(e,r,i,n),Ya(null,e,r,!0,t,n);case 19:return kh(t,e,n);case 22:return vh(t,e,n)}throw Error(x(156,e.tag))};function Uh(t,e){return df(t,e)}function _0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new _0(t,e,n,r)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function k0(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nl)return 11;if(t===Tl)return 14}return 2}function dn(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ws(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qn:return An(n.children,i,s,e);case Cl:o=8,i|=8;break;case ga:return t=Je(12,n,e,i|2),t.elementType=ga,t.lanes=s,t;case ya:return t=Je(13,n,e,i),t.elementType=ya,t.lanes=s,t;case va:return t=Je(19,n,e,i),t.elementType=va,t.lanes=s,t;case Kd:return go(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wd:o=10;break e;case Gd:o=9;break e;case Nl:o=11;break e;case Tl:o=14;break e;case Kt:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function An(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function go(t,e,n,r){return t=Je(22,t,r,e),t.elementType=Kd,t.lanes=n,t.stateNode={isHidden:!1},t}function ta(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function na(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function E0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uc(t,e,n,r,i,s,o,a,l){return t=new E0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(s),t}function S0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $h(t){if(!t)return mn;t=t._reactInternals;e:{if(Vn(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Le(n))return $f(t,n,e)}return e}function zh(t,e,n,r,i,s,o,a,l){return t=uc(n,r,!0,t,i,s,o,a,l),t.context=$h(null),n=t.current,r=Ie(),i=un(n),s=jt(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,Pi(t,i,r),De(t,r),t}function yo(t,e,n,r){var i=e.current,s=Ie(),o=un(i);return n=$h(n),e.context===null?e.context=n:e.pendingContext=n,e=jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ft(t,i,o,s),hs(t,i,o)),o}function Qs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dc(t,e){Bu(t,e),(t=t.alternate)&&Bu(t,e)}function I0(){return null}var Fh=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}vo.prototype.render=fc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));yo(t,e,null,null)};vo.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Un(function(){yo(null,t,null,null)}),e[Dt]=null}};function vo(t){this._internalRoot=t}vo.prototype.unstable_scheduleHydration=function(t){if(t){var e=vf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&xf(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function b0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qs(o);s.call(u)}}var o=zh(e,r,t,0,null,!1,!1,"",Hu);return t._reactRootContainer=o,t[Dt]=o.current,gi(t.nodeType===8?t.parentNode:t),Un(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qs(l);a.call(u)}}var l=uc(t,0,!1,null,null,!1,!1,"",Hu);return t._reactRootContainer=l,t[Dt]=l.current,gi(t.nodeType===8?t.parentNode:t),Un(function(){yo(e,l,n,r)}),l}function xo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Qs(o);a.call(l)}}yo(e,o,t,i)}else o=b0(n,e,t,i,r);return Qs(o)}gf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Br(e.pendingLanes);n!==0&&(Al(e,n|1),De(e,se()),!($&6)&&(_r=se()+500,vn()))}break;case 13:Un(function(){var r=Mt(t,1);if(r!==null){var i=Ie();ft(r,t,1,i)}}),dc(t,1)}};Ol=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Ie();ft(e,t,134217728,n)}dc(t,134217728)}};yf=function(t){if(t.tag===13){var e=un(t),n=Mt(t,e);if(n!==null){var r=Ie();ft(n,t,e,r)}dc(t,e)}};vf=function(){return V};wf=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Na=function(t,e,n){switch(e){case"input":if(_a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=co(r);if(!i)throw Error(x(90));Yd(r),_a(r,i)}}}break;case"textarea":Jd(t,n);break;case"select":e=n.value,e!=null&&sr(t,!!n.multiple,e,!1)}};sf=oc;of=Un;var C0={usingClientEntryPoint:!1,Events:[Ai,Xn,co,nf,rf,oc]},$r={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N0={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cf(t),t===null?null:t.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{so=is.inject(N0),xt=is}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(e))throw Error(x(200));return S0(t,e,null,n)};Ge.createRoot=function(t,e){if(!hc(t))throw Error(x(299));var n=!1,r="",i=Fh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=uc(t,1,!1,null,null,n,!1,r,i),t[Dt]=e.current,gi(t.nodeType===8?t.parentNode:t),new fc(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=cf(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return Un(t)};Ge.hydrate=function(t,e,n){if(!wo(e))throw Error(x(200));return xo(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!hc(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zh(e,null,t,1,n??null,i,!1,s,o),t[Dt]=e.current,gi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vo(e)};Ge.render=function(t,e,n){if(!wo(e))throw Error(x(200));return xo(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!wo(t))throw Error(x(40));return t._reactRootContainer?(Un(function(){xo(null,null,t,!1,function(){t._reactRootContainer=null,t[Dt]=null})}),!0):!1};Ge.unstable_batchedUpdates=oc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wo(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return xo(t,e,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh)}catch(t){console.error(t)}}Vh(),Fd.exports=Ge;var T0=Fd.exports,Wu=T0;pa.createRoot=Wu.createRoot,pa.hydrateRoot=Wu.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=t=>{const e=R0(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=k.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>k.createElement("svg",{ref:l,...A0,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Bh("lucide",i),...!s&&!O0(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,m])=>k.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(t,e)=>{const n=k.forwardRef(({className:r,...i},s)=>k.createElement(j0,{ref:s,iconNode:e,className:Bh(`lucide-${P0(Gu(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Gu(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Hh=H("chevron-right",L0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Wh=H("circle-alert",D0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],U0=H("circle-check",M0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],al=H("circle-pause",$0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ll=H("circle-play",z0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],_o=H("crown",F0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Gh=H("download",V0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],H0=H("eye",B0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],G0=H("file-code",W0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],Ys=H("headset",K0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],pc=H("history",Q0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Kh=H("loader-circle",Y0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],cl=H("lock",q0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],mc=H("log-out",J0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ku=H("mail",X0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],e1=H("panels-top-left",Z0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Qu=H("phone",t1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],r1=H("play",n1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],s1=H("sparkles",i1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gc=H("star",o1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],l1=H("toggle-left",a1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],u1=H("toggle-right",c1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Yu=H("trash-2",d1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ko=H("user",f1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],p1=H("volume-2",h1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qh=H("x",m1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ii=H("zap",g1),y1=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},v1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,m=s>>2,p=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[m],n[p],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):v1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new w1;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class w1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x1=function(t){const e=Yh(t);return qh.encodeByteArray(e,!0)},Jh=function(t){return x1(t).replace(/\./g,"")},Xh=function(t){try{return qh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=()=>_1().__FIREBASE_DEFAULTS__,E1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},S1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xh(t[1]);return e&&JSON.parse(e)},yc=()=>{try{return y1()||k1()||E1()||S1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I1=t=>{var e,n;return(n=(e=yc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Zh=()=>{var t;return(t=yc())==null?void 0:t.config},ep=t=>{var e;return(e=yc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function C1(t){return(await fetch(t,{credentials:"include"})).ok}const ri={};function N1(){const t={prod:[],emulator:[]};for(const e of Object.keys(ri))ri[e]?t.emulator.push(e):t.prod.push(e);return t}function T1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qu=!1;function P1(t,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||ri[t]===e||ri[t]||qu)return;ri[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=N1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,y){f.setAttribute("width","24"),f.setAttribute("id",y),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{qu=!0,o()},f}function m(f,y){f.setAttribute("id",y),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=T1(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),O=document.getElementById(_)||document.createElement("a"),h=n("preprendIcon"),d=document.getElementById(h)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const g=f.element;a(g),m(O,_);const v=u();l(d,h),g.append(d,w,O,v),document.body.appendChild(g)}s?(w.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(d.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function R1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function A1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function O1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L1(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function D1(){try{return typeof indexedDB=="object"}catch{return!1}}function M1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=U1,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,r)}}function $1(t,e){return t.replace(z1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const z1=/\{\$([^}]+)}/g;function F1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ju(s)&&Ju(o)){if(!kr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ju(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function V1(t,e){const n=new B1(t,e);return n.subscribe.bind(n)}class B1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");H1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ra),i.error===void 0&&(i.error=ra),i.complete===void 0&&(i.complete=ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ra(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new b1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K1(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:G1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G1(t){return t===bn?void 0:t}function K1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new W1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Y1={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},q1=B.INFO,J1={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},X1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=J1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tp{constructor(e){this.name=e,this._logLevel=q1,this._logHandler=X1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Z1=(t,e)=>e.some(n=>t instanceof n);let Xu,Zu;function ey(){return Xu||(Xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ty(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const np=new WeakMap,ul=new WeakMap,rp=new WeakMap,ia=new WeakMap,vc=new WeakMap;function ny(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&np.set(n,t)}).catch(()=>{}),vc.set(e,t),e}function ry(t){if(ul.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ul.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iy(t){dl=t(dl)}function sy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sa(this),e,...n);return rp.set(r,e.sort?e.sort():[e]),fn(r)}:ty().includes(t)?function(...e){return t.apply(sa(this),e),fn(np.get(this))}:function(...e){return fn(t.apply(sa(this),e))}}function oy(t){return typeof t=="function"?sy(t):(t instanceof IDBTransaction&&ry(t),Z1(t,ey())?new Proxy(t,dl):t)}function fn(t){if(t instanceof IDBRequest)return ny(t);if(ia.has(t))return ia.get(t);const e=oy(t);return e!==t&&(ia.set(t,e),vc.set(e,t)),e}const sa=t=>vc.get(t);function ay(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ly=["get","getKey","getAll","getAllKeys","count"],cy=["put","add","delete","clear"],oa=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ly.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return oa.set(e,s),s}iy(t=>({...t,get:(e,n,r)=>ed(e,n)||t.get(e,n,r),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",td="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new tp("@firebase/app"),fy="@firebase/app-compat",hy="@firebase/analytics-compat",py="@firebase/analytics",my="@firebase/app-check-compat",gy="@firebase/app-check",yy="@firebase/auth",vy="@firebase/auth-compat",wy="@firebase/database",xy="@firebase/data-connect",_y="@firebase/database-compat",ky="@firebase/functions",Ey="@firebase/functions-compat",Sy="@firebase/installations",Iy="@firebase/installations-compat",by="@firebase/messaging",Cy="@firebase/messaging-compat",Ny="@firebase/performance",Ty="@firebase/performance-compat",Py="@firebase/remote-config",Ry="@firebase/remote-config-compat",Ay="@firebase/storage",Oy="@firebase/storage-compat",jy="@firebase/firestore",Ly="@firebase/ai",Dy="@firebase/firestore-compat",My="firebase",Uy="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="[DEFAULT]",$y={[fl]:"fire-core",[fy]:"fire-core-compat",[py]:"fire-analytics",[hy]:"fire-analytics-compat",[gy]:"fire-app-check",[my]:"fire-app-check-compat",[yy]:"fire-auth",[vy]:"fire-auth-compat",[wy]:"fire-rtdb",[xy]:"fire-data-connect",[_y]:"fire-rtdb-compat",[ky]:"fire-fn",[Ey]:"fire-fn-compat",[Sy]:"fire-iid",[Iy]:"fire-iid-compat",[by]:"fire-fcm",[Cy]:"fire-fcm-compat",[Ny]:"fire-perf",[Ty]:"fire-perf-compat",[Py]:"fire-rc",[Ry]:"fire-rc-compat",[Ay]:"fire-gcs",[Oy]:"fire-gcs-compat",[jy]:"fire-fst",[Dy]:"fire-fst-compat",[Ly]:"fire-vertex","fire-js":"fire-js",[My]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map,zy=new Map,pl=new Map;function nd(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(pl.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of qs.values())nd(n,t);for(const n of zy.values())nd(n,t);return!0}function ip(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ve(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new ji("app","Firebase",Fy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=Uy;function sp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hl,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=Zh()),!n)throw hn.create("no-options");const s=qs.get(i);if(s){if(kr(n,s.options)&&kr(r,s.config))return s;throw hn.create("duplicate-app",{appName:i})}const o=new Q1(i);for(const l of pl.values())o.addComponent(l);const a=new Vy(n,r,o);return qs.set(i,a),a}function By(t=hl){const e=qs.get(t);if(!e&&t===hl&&Zh())return sp();if(!e)throw hn.create("no-app",{appName:t});return e}function dr(t,e,n){let r=$y[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(o.join(" "));return}bi(new Er(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="firebase-heartbeat-database",Wy=1,Ci="firebase-heartbeat-store";let aa=null;function op(){return aa||(aa=ay(Hy,Wy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),aa}async function Gy(t){try{const n=(await op()).transaction(Ci),r=await n.objectStore(Ci).get(ap(t));return await n.done,r}catch(e){if(e instanceof wn)$t.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function rd(t,e){try{const r=(await op()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,ap(t)),await r.done}catch(n){if(n instanceof wn)$t.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function ap(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1024,Qy=30;class Yy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=id();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Qy){const o=Xy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=id(),{heartbeatsToSend:r,unsentEntries:i}=qy(this._heartbeatsCache.heartbeats),s=Jh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $t.warn(n),""}}}function id(){return new Date().toISOString().substring(0,10)}function qy(t,e=Ky){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D1()?M1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sd(t){return Jh(JSON.stringify({version:2,heartbeats:t})).length}function Xy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){bi(new Er("platform-logger",e=>new uy(e),"PRIVATE")),bi(new Er("heartbeat",e=>new Yy(e),"PRIVATE")),dr(fl,td,t),dr(fl,td,"esm2020"),dr("fire-js","")}Zy("");var ev="firebase",tv="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(ev,tv,"app");function lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nv=lp,cp=new ji("auth","Firebase",lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new tp("@firebase/auth");function rv(t,...e){Js.logLevel<=B.WARN&&Js.warn(`Auth (${Li}): ${t}`,...e)}function xs(t,...e){Js.logLevel<=B.ERROR&&Js.error(`Auth (${Li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,...e){throw xc(t,...e)}function Me(t,...e){return xc(t,...e)}function wc(t,e,n){const r={...nv(),[e]:n};return new ji("auth","Firebase",r).create(e,{appName:t.name})}function kt(t){return wc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(t,"argument-error"),wc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cp.create(t,...e)}function S(t,e,...n){if(!t)throw xc(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xs(e),new Error(e)}function zt(t,e){t||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function up(){return od()==="http:"||od()==="https:"}function od(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(up()||O1()||"connection"in navigator)?navigator.onLine:!0}function ov(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=R1()||j1()}get(){return sv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cv=new Di(3e4,6e4);function Te(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ue(t,e,n,r,i={}){return fp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Nr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return A1()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Eo(t.emulatorConfig.host)&&(u.credentials="include"),dp.fetch()(await hp(t,t.config.apiHost,n,a),u)})}async function fp(t,e,n){t._canInitEmulator=!1;const r={...av,...e};try{const i=new dv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kr(t,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wc(t,m,u);tt(t,m)}}catch(i){if(i instanceof wn)throw i;tt(t,"network-request-failed",{message:String(i)})}}async function xn(t,e,n,r,i={}){const s=await Ue(t,e,n,r,i);return"mfaPendingCredential"in s&&tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function hp(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?_c(t.config,i):`${t.config.apiScheme}://${i}`;return lv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function uv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),cv.get())})}}function Kr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Me(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){return t!==void 0&&t.getResponse!==void 0}function ld(t){return t!==void 0&&t.enterprise!==void 0}class pp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(t){return(await Ue(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function mp(t,e){return Ue(t,"GET","/v2/recaptchaConfig",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(t,e){return Ue(t,"POST","/v1/accounts:delete",e)}async function Xs(t,e){return Ue(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pv(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=kc(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ii(la(i.auth_time)),issuedAtTime:ii(la(i.iat)),expirationTime:ii(la(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function la(t){return Number(t)*1e3}function kc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xh(n);return i?JSON.parse(i):(xs("Failed to decode base64 JWT payload"),null)}catch(i){return xs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cd(t){const e=kc(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&mv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Sr(t,Xs(e,{idToken:n}));S(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?gp(i.providerUserInfo):[],o=vv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new gl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,m)}async function yv(t){const e=nt(t);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e){const n=await fp(t,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await hp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Eo(t.emulatorConfig.host)&&(l.credentials="include"),dp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xv(t,e){return Ue(t,"POST","/v2/accounts:revokeToken",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=cd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fr;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ut{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new gv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pv(this,e)}reload(){return yv(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Sr(this,hv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:y,providerData:w,stsTokenManager:_}=n;S(p&&_,e,"internal-error");const O=fr.fromJSON(this.name,_);S(typeof p=="string",e,"internal-error"),Gt(r,e.name),Gt(i,e.name),S(typeof f=="boolean",e,"internal-error"),S(typeof y=="boolean",e,"internal-error"),Gt(s,e.name),Gt(o,e.name),Gt(a,e.name),Gt(l,e.name),Gt(u,e.name),Gt(m,e.name);const h=new ut({uid:p,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:O,createdAt:u,lastLoginAt:m});return w&&Array.isArray(w)&&(h.providerData=w.map(d=>({...d}))),l&&(h._redirectEventId=l),h}static async _fromIdTokenResponse(e,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new fr;a.updateFromIdToken(r);const l=new ut({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map;function Ot(t){zt(t instanceof Function,"Expected a class definition");let e=ud.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ud.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yp.type="NONE";const dd=yp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e,n){return`firebase:${t}:${e}:${n}`}class hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_s(this.userKey,i.apiKey,s),this.fullPersistenceKey=_s("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xs(this.auth,{idToken:e}).catch(()=>{});return n?ut._fromGetAccountInfoResponse(this.auth,n,e):null}return ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hr(Ot(dd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ot(dd);const o=_s(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const m=await u._get(o);if(m){let p;if(typeof m=="string"){const f=await Xs(e,{idToken:m}).catch(()=>{});if(!f)break;p=await ut._fromGetAccountInfoResponse(e,f,m)}else p=ut._fromJSON(e,m);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new hr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ep(e))return"Blackberry";if(Sp(e))return"Webos";if(wp(e))return"Safari";if((e.includes("chrome/")||xp(e))&&!e.includes("edge/"))return"Chrome";if(kp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vp(t=be()){return/firefox\//i.test(t)}function wp(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xp(t=be()){return/crios\//i.test(t)}function _p(t=be()){return/iemobile/i.test(t)}function kp(t=be()){return/android/i.test(t)}function Ep(t=be()){return/blackberry/i.test(t)}function Sp(t=be()){return/webos/i.test(t)}function Ec(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _v(t=be()){var e;return Ec(t)&&!!((e=window.navigator)!=null&&e.standalone)}function kv(){return L1()&&document.documentMode===10}function Ip(t=be()){return Ec(t)||kp(t)||Sp(t)||Ep(t)||/windows phone/i.test(t)||_p(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=fd(be());break;case"Worker":n=`${fd(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(t,e={}){return Ue(t,"GET","/v2/passwordPolicy",Te(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=6;class bv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Iv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hd(this),this.idTokenSubscription=new hd(this),this.beforeStateQueue=new Ev(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xs(this,{idToken:e}),r=await ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ov()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(kt(this));const n=e?nt(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sv(this),n=new bv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rt(t){return nt(t)}class hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=V1(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nv(t){Mi=t}function Sc(t){return Mi.loadJS(t)}function Tv(){return Mi.recaptchaV2Script}function Pv(){return Mi.recaptchaEnterpriseScript}function Rv(){return Mi.gapiScript}function Cp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=500,Ov=6e4,ss=1e12;class jv{constructor(e){this.auth=e,this.counter=ss,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Mv(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||ss;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||ss;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||ss;return(r=this._widgets.get(n))==null||r.execute(),""}}class Lv{constructor(){this.enterprise=new Dv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Dv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Mv{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Uv(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Ov)},Av))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Uv(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const $v="recaptcha-enterprise",si="NO_RECAPTCHA";class Np{constructor(e){this.type=$v,this.auth=rt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new pp(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(si)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ld(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Pv();l.length!==0&&(l+=a),Sc(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function zr(t,e,n,r=!1,i=!1){const s=new Np(t);let o;if(i)o=si;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function On(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await zr(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await zr(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await zr(t,e,n);return r(t,a).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await zr(t,e,n,!1,!0);return r(t,m)}return Promise.reject(l)})}else{const a=await zr(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function zv(t){const e=rt(t),n=await mp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new pp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Np(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e){const n=ip(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kr(s,e??{}))return i;tt(i,"already-initialized")}return n.initialize({options:e})}function Vv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bv(t,e,n){const r=rt(t);S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Tp(e),{host:o,port:a}=Hv(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){S(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),S(kr(u,r.config.emulator)&&kr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Eo(o)?(C1(`${s}//${o}${l}`),P1("Auth",!0)):i||Wv()}function Tp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hv(t){const e=Tp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pd(o)}}}function pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}async function Gv(t,e){return Ue(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(t,e){return xn(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}async function Qv(t,e){return Ue(t,"POST","/v1/accounts:sendOobCode",Te(t,e))}async function Yv(t,e){return Qv(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}async function Jv(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends So{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return On(e,n,"signInWithPassword",Kv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return qv(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return On(e,r,"signUpPassword",Gv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Jv(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e){return xn(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="http://localhost";class $n extends So{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pr(e,n)}buildRequest(){const e={requestUri:Xv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(t,e){return Ue(t,"POST","/v1/accounts:sendVerificationCode",Te(t,e))}async function Zv(t,e){return xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e))}async function ew(t,e){const n=await xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e));if(n.temporaryProof)throw Kr(t,"account-exists-with-different-credential",n);return n}const tw={USER_NOT_FOUND:"user-not-found"};async function nw(t,e){const n={...e,operation:"REAUTH"};return xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,n),tw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends So{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new oi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new oi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Zv(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return ew(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return nw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new oi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iw(t){const e=Wr(Gr(t)).link,n=e?Wr(Gr(e)).deep_link_id:null,r=Wr(Gr(t)).deep_link_id;return(r?Wr(Gr(r)).link:null)||r||n||e||t}class Ic{constructor(e){const n=Wr(Gr(e)),r=n.apiKey??null,i=n.oobCode??null,s=rw(n.mode??null);S(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=iw(e);try{return new Ic(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ic.parseLink(n);return S(r,"argument-error"),Ni._fromEmailAndCode(e,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends bc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ui{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ui{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ui{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return xn(t,"POST","/v1/accounts:signUp",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ut._fromIdTokenResponse(e,r,i),o=gd(r);return new zn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gd(r);return new zn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends wn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new eo(e,n,r,i)}}function Pp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eo._fromErrorAndOperation(t,s,e,r):s})}async function ow(t,e,n=!1){const r=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e,n=!1){const{auth:r}=t;if(Ve(r.app))return Promise.reject(kt(r));const i="reauthenticate";try{const s=await Sr(t,Pp(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=kc(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),zn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e,n=!1){if(Ve(t.app))return Promise.reject(kt(t));const r="signIn",i=await Pp(t,r,e),s=await zn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ap(t,e){return Rp(rt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t,e,n){var r;S(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),S(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t){const e=rt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cw(t,e,n){const r=rt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&lw(r,i,n),await On(r,i,"getOobCode",Yv,"EMAIL_PASSWORD_PROVIDER")}async function uw(t,e,n){if(Ve(t.app))return Promise.reject(kt(t));const r=rt(t),o=await On(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Op(t),l}),a=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function dw(t,e,n){return Ve(t.app)?Promise.reject(kt(t)):Ap(nt(t),Tr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Op(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t,e){return Ue(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Sr(r,fw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e){return nt(t).setPersistence(e)}function mw(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function gw(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function yw(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function vw(t){return nt(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t,e){return Ue(t,"POST","/v2/accounts/mfaEnrollment:start",Te(t,e))}const to="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=1e3,xw=10;class Lp extends jp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lp.type="LOCAL";const Dp=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends jp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mp.type="SESSION";const Cc=Mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Io(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _w(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Io.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Nc("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return window}function Ew(t){le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function Sw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bw(){return Tc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebaseLocalStorageDb",Cw=1,no="firebaseLocalStorage",$p="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bo(t,e){return t.transaction([no],e?"readwrite":"readonly").objectStore(no)}function Nw(){const t=indexedDB.deleteDatabase(Up);return new $i(t).toPromise()}function yl(){const t=indexedDB.open(Up,Cw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(no,{keyPath:$p})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(no)?e(r):(r.close(),await Nw(),e(await yl()))})})}async function vd(t,e,n){const r=bo(t,!0).put({[$p]:e,value:n});return new $i(r).toPromise()}async function Tw(t,e){const n=bo(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function wd(t,e){const n=bo(t,!0).delete(e);return new $i(n).toPromise()}const Pw=800,Rw=3;class zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(bw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Sw(),!this.activeServiceWorker)return;this.sender=new kw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await vd(e,to,"1"),await wd(e,to),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bo(i,!1).getAll();return new $i(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zp.type="LOCAL";const Aw=zp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){return Ue(t,"POST","/v2/accounts/mfaSignIn:start",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=Cp("rcb"),Ow=new Di(3e4,6e4);class jw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=le().grecaptcha)!=null&&e.render)}load(e,n=""){return S(Lw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&ad(le().grecaptcha)?Promise.resolve(le().grecaptcha):new Promise((r,i)=>{const s=le().setTimeout(()=>{i(Me(e,"network-request-failed"))},Ow.get());le()[ca]=()=>{le().clearTimeout(s),delete le()[ca];const a=le().grecaptcha;if(!a||!ad(a)){i(Me(e,"internal-error"));return}const l=a.render;a.render=(u,m)=>{const p=l(u,m);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${Tv()}?${Nr({onload:ca,render:"explicit",hl:n})}`;Sc(o).catch(()=>{clearTimeout(s),i(Me(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=le().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Lw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Dw{async load(e){return new jv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="recaptcha",Mw={theme:"light",type:"image"};class Uw{constructor(e,n,r={...Mw}){this.parameters=r,this.type=ai,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rt(e),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Dw:new jw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=le()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(up()&&!Tc(),this.auth,"internal-error"),await $w(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fv(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function $w(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=oi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Fw(t,e,n){if(Ve(t.app))return Promise.reject(kt(t));const r=rt(t),i=await Vw(r,e,nt(n));return new zw(i,s=>Ap(r,s))}async function Vw(t,e,n){var r;if(!t._getRecaptchaConfig())try{await zv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){S(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await On(t,o,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===si){S((n==null?void 0:n.type)===ai,m,"argument-error");const f=await ua(m,p,n);return yd(m,f)}return yd(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{S(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;S(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await On(t,a,"mfaSmsSignIn",async(p,f)=>{if(f.phoneSignInInfo.captchaResponse===si){S((n==null?void 0:n.type)===ai,p,"argument-error");const y=await ua(p,f,n);return xd(p,y)}return xd(p,f)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await On(t,s,"sendVerificationCode",async(u,m)=>{if(m.captchaResponse===si){S((n==null?void 0:n.type)===ai,u,"argument-error");const p=await ua(u,m,n);return md(u,p)}return md(u,m)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function ua(t,e,n){S(n.type===ai,t,"argument-error");const r=await n.verify();S(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){return e?Ot(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends So{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bw(t){return Rp(t.auth,new Pc(t),t.bypassAuthState)}function Hw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),aw(n,new Pc(t),t.bypassAuthState)}async function Ww(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),ow(n,new Pc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bw;case"linkViaPopup":case"linkViaRedirect":return Ww;case"reauthViaPopup":case"reauthViaRedirect":return Hw;default:tt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new Di(2e3,1e4);async function Kw(t,e,n){if(Ve(t.app))return Promise.reject(Me(t,"operation-not-supported-in-this-environment"));const r=rt(t);iv(t,e,bc);const i=Fp(r,n);return new Pn(r,"signInViaPopup",e,i).executeNotNull()}class Pn extends Vp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gw.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="pendingRedirect",ks=new Map;class Yw extends Vp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ks.get(this.auth._key());if(!e){try{const r=await qw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ks.set(this.auth._key(),e)}return this.bypassAuthState||ks.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qw(t,e){const n=Zw(e),r=Xw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Jw(t,e){ks.set(t._key(),e)}function Xw(t){return Ot(t._redirectPersistence)}function Zw(t){return _s(Qw,t.config.apiKey,t.name)}async function ex(t,e,n=!1){if(Ve(t.app))return Promise.reject(kt(t));const r=rt(t),i=Fp(r,e),o=await new Yw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=10*60*1e3;class nx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tx&&this.cachedEventUids.clear(),this.cachedEventUids.has(_d(e))}saveEventToCache(e){this.cachedEventUids.add(_d(e)),this.lastProcessedEventTime=Date.now()}}function _d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e={}){return Ue(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ox=/^https?/;async function ax(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ix(t);for(const n of e)try{if(lx(n))return}catch{}tt(t,"unauthorized-domain")}function lx(t){const e=ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ox.test(n))return!1;if(sx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new Di(3e4,6e4);function kd(){const t=le().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ux(t){return new Promise((e,n)=>{var i,s,o;function r(){kd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kd(),n(Me(t,"network-request-failed"))},timeout:cx.get()})}if((s=(i=le().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=le().gapi)!=null&&o.load)r();else{const a=Cp("iframefcb");return le()[a]=()=>{gapi.load?r():n(Me(t,"network-request-failed"))},Sc(`${Rv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Es=null,e})}let Es=null;function dx(t){return Es=Es||ux(t),Es}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new Di(5e3,15e3),hx="__/auth/iframe",px="emulator/auth/iframe",mx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yx(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_c(e,px):`https://${t.config.authDomain}/${hx}`,r={apiKey:e.apiKey,appName:t.name,v:Li},i=gx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Nr(r).slice(1)}`}async function vx(t){const e=await dx(t),n=le().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:yx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Me(t,"network-request-failed"),a=le().setTimeout(()=>{s(o)},fx.get());function l(){le().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xx=500,_x=600,kx="_blank",Ex="http://localhost";class Ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sx(t,e,n,r=xx,i=_x){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...wx,width:r.toString(),height:i.toString(),top:s,left:o},u=be().toLowerCase();n&&(a=xp(u)?kx:n),vp(u)&&(e=e||Ex,l.scrollbars="yes");const m=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(_v(u)&&a!=="_self")return Ix(e||"",a),new Ed(null);const p=window.open(e||"",a,m);S(p,t,"popup-blocked");try{p.focus()}catch{}return new Ed(p)}function Ix(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="__/auth/handler",Cx="emulator/auth/handler",Nx=encodeURIComponent("fac");async function Sd(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Li,eventId:i};if(e instanceof bc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",F1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries(s||{}))o[m]=p}if(e instanceof Ui){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const l=await t._getAppCheckToken(),u=l?`#${Nx}=${encodeURIComponent(l)}`:"";return`${Tx(t)}?${Nr(a).slice(1)}${u}`}function Tx({config:t}){return t.emulator?_c(t,Cx):`https://${t.authDomain}/${bx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="webStorageSupport";class Px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cc,this._completeRedirectFn=ex,this._overrideRedirectResult=Jw}async _openPopup(e,n,r,i){var o;zt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Sd(e,n,r,ml(),i);return Sx(e,s,Nc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sd(e,n,r,ml(),i);return Ew(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vx(e),r=new nx(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(da,{type:da},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[da];s!==void 0&&n(!!s),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ax(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ip()||wp()||Ec()}}const Rx=Px;var Id="@firebase/auth",bd="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jx(t){bi(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},u=new Cv(r,i,s,l);return Vv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bi(new Er("auth-internal",e=>{const n=rt(e.getProvider("auth").getImmediate());return(r=>new Ax(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Id,bd,Ox(t)),dr(Id,bd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=5*60,Dx=ep("authIdTokenMaxAge")||Lx;let Cd=null;const Mx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dx)return;const i=n==null?void 0:n.token;Cd!==i&&(Cd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ux(t=By()){const e=ip(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fv(t,{popupRedirectResolver:Rx,persistence:[Aw,Dp,Cc]}),r=ep("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Mx(s.toString());gw(n,o,()=>o(n.currentUser)),mw(n,a=>o(a))}}const i=I1("auth");return i&&Bv(n,`http://${i}`),n}function $x(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Nv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Me("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$x().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jx("Browser");const zx={apiKey:"AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",authDomain:"vokal-pro-studio-app-2026.firebaseapp.com",projectId:"vokal-pro-studio-app-2026",storageBucket:"vokal-pro-studio-app-2026.firebasestorage.app",messagingSenderId:"390591097726",appId:"1:390591097726:web:fceb62a64f27876578212f"},Fx=sp(zx),Ct=Ux(Fx);let Vx={data:""},Bx=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Vx},Hx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Wx=/\/\*[^]*?\*\/|  +/g,Nd=/\n+/g,en=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?en(o,s):s+"{"+en(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=en(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=en.p?en.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},It={},Hp=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Hp(t[n]);return e}return t},Gx=(t,e,n,r,i)=>{let s=Hp(t),o=It[s]||(It[s]=(l=>{let u=0,m=11;for(;u<l.length;)m=101*m+l.charCodeAt(u++)>>>0;return"go"+m})(s));if(!It[o]){let l=s!==t?t:(u=>{let m,p,f=[{}];for(;m=Hx.exec(u.replace(Wx,""));)m[4]?f.shift():m[3]?(p=m[3].replace(Nd," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][m[1]]=m[2].replace(Nd," ").trim();return f[0]})(t);It[o]=en(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&It.g?It.g:null;return n&&(It.g=It[o]),((l,u,m,p)=>{p?u.data=u.data.replace(p,l):u.data.indexOf(l)===-1&&(u.data=m?l+u.data:u.data+l)})(It[o],e,r,a),o},Kx=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":en(a,""):a===!1?"":a}return r+i+(o??"")},"");function Co(t){let e=this||{},n=t.call?t(e.p):t;return Gx(n.unshift?n.raw?Kx(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Bx(e.target),e.g,e.o,e.k)}let Wp,vl,wl;Co.bind({g:1});let Ft=Co.bind({k:1});function Qx(t,e,n,r){en.p=e,Wp=t,vl=n,wl=r}function _n(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:vl&&vl()},a),n.o=/ *go\d+/.test(l),a.className=Co.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),wl&&u[0]&&wl(a),Wp(u,a)}return e?e(i):i}}var Yx=t=>typeof t=="function",ro=(t,e)=>Yx(t)?t(e):t,qx=(()=>{let t=0;return()=>(++t).toString()})(),Gp=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Jx=20,Rc="default",Kp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return Kp(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Ss=[],Qp={toasts:[],pausedAt:void 0,settings:{toastLimit:Jx}},wt={},Yp=(t,e=Rc)=>{wt[e]=Kp(wt[e]||Qp,t),Ss.forEach(([n,r])=>{n===e&&r(wt[e])})},qp=t=>Object.keys(wt).forEach(e=>Yp(t,e)),Xx=t=>Object.keys(wt).find(e=>wt[e].toasts.some(n=>n.id===t)),No=(t=Rc)=>e=>{Yp(e,t)},Zx={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},e_=(t={},e=Rc)=>{let[n,r]=k.useState(wt[e]||Qp),i=k.useRef(wt[e]);k.useEffect(()=>(i.current!==wt[e]&&r(wt[e]),Ss.push([e,r]),()=>{let o=Ss.findIndex(([a])=>a===e);o>-1&&Ss.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||Zx[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},t_=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||qx()}),zi=t=>(e,n)=>{let r=t_(e,t,n);return No(r.toasterId||Xx(r.id))({type:2,toast:r}),r.id},L=(t,e)=>zi("blank")(t,e);L.error=zi("error");L.success=zi("success");L.loading=zi("loading");L.custom=zi("custom");L.dismiss=(t,e)=>{let n={type:3,toastId:t};e?No(e)(n):qp(n)};L.dismissAll=t=>L.dismiss(void 0,t);L.remove=(t,e)=>{let n={type:4,toastId:t};e?No(e)(n):qp(n)};L.removeAll=t=>L.remove(void 0,t);L.promise=(t,e,n)=>{let r=L.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?ro(e.success,i):void 0;return s?L.success(s,{id:r,...n,...n==null?void 0:n.success}):L.dismiss(r),i}).catch(i=>{let s=e.error?ro(e.error,i):void 0;s?L.error(s,{id:r,...n,...n==null?void 0:n.error}):L.dismiss(r)}),t};var n_=1e3,r_=(t,e="default")=>{let{toasts:n,pausedAt:r}=e_(t,e),i=k.useRef(new Map).current,s=k.useCallback((p,f=n_)=>{if(i.has(p))return;let y=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},f);i.set(p,y)},[]);k.useEffect(()=>{if(r)return;let p=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let w=(y.duration||0)+y.pauseDuration-(p-y.createdAt);if(w<0){y.visible&&L.dismiss(y.id);return}return setTimeout(()=>L.dismiss(y.id,e),w)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=k.useCallback(No(e),[e]),a=k.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=k.useCallback((p,f)=>{o({type:1,toast:{id:p,height:f}})},[o]),u=k.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=k.useCallback((p,f)=>{let{reverseOrder:y=!1,gutter:w=8,defaultPosition:_}=f||{},O=n.filter(g=>(g.position||_)===(p.position||_)&&g.height),h=O.findIndex(g=>g.id===p.id),d=O.filter((g,v)=>v<h&&g.visible).length;return O.filter(g=>g.visible).slice(...y?[d+1]:[0,d]).reduce((g,v)=>g+(v.height||0)+w,0)},[n]);return k.useEffect(()=>{n.forEach(p=>{if(p.dismissed)s(p.id,p.removeDelay);else{let f=i.get(p.id);f&&(clearTimeout(f),i.delete(p.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:m}}},i_=Ft`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,s_=Ft`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,o_=Ft`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,a_=_n("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${i_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${s_} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${o_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,l_=Ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,c_=_n("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${l_} 1s linear infinite;
`,u_=Ft`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,d_=Ft`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,f_=_n("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${u_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${d_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,h_=_n("div")`
  position: absolute;
`,p_=_n("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,m_=Ft`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,g_=_n("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${m_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,y_=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?k.createElement(g_,null,e):e:n==="blank"?null:k.createElement(p_,null,k.createElement(c_,{...r}),n!=="loading"&&k.createElement(h_,null,n==="error"?k.createElement(a_,{...r}):k.createElement(f_,{...r})))},v_=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,w_=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,x_="0%{opacity:0;} 100%{opacity:1;}",__="0%{opacity:1;} 100%{opacity:0;}",k_=_n("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,E_=_n("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,S_=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=Gp()?[x_,__]:[v_(n),w_(n)];return{animation:e?`${Ft(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ft(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},I_=k.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?S_(t.position||e||"top-center",t.visible):{opacity:0},s=k.createElement(y_,{toast:t}),o=k.createElement(E_,{...t.ariaProps},ro(t.message,t));return k.createElement(k_,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):k.createElement(k.Fragment,null,s,o))});Qx(k.createElement);var b_=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=k.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return k.createElement("div",{ref:s,className:e,style:n},i)},C_=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Gp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},N_=Co`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,os=16,Jp=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=r_(n,s);return k.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:os,left:os,right:os,bottom:os,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(m=>{let p=m.position||e,f=u.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),y=C_(p,f);return k.createElement(b_,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?N_:"",style:y},m.type==="custom"?ro(m.message,m):i?i(m):k.createElement(I_,{toast:m,position:p}))}))};const T_=()=>c.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),c.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),c.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),c.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});function P_({onGuestLogin:t}){const[e,n]=k.useState(!0),[r,i]=k.useState("email"),[s,o]=k.useState(""),[a,l]=k.useState(""),[u,m]=k.useState(""),[p,f]=k.useState(""),[y,w]=k.useState(""),[_,O]=k.useState(!0),[h,d]=k.useState(!1),[g,v]=k.useState(!1),b=async A=>{A.preventDefault(),d(!0);try{if(await pw(Ct,_?Dp:Cc),e)await dw(Ct,a,u),L.success("Successfully logged in!");else{const oe=await uw(Ct,a,u);await hw(oe.user,{displayName:s}),L.success("Account created successfully!")}}catch(oe){L.error(oe.message.replace("Firebase:","").trim())}finally{d(!1)}},N=async()=>{if(!a){L.error("Please enter your email address first.");return}d(!0);try{await cw(Ct,a),L.success("Password reset email sent! Check your inbox.")}catch(A){L.error(A.message.replace("Firebase:","").trim())}finally{d(!1)}},T=async()=>{d(!0);try{const A=new Tt;await Kw(Ct,A),L.success("Successfully logged in with Google!")}catch(A){L.error(A.message.replace("Firebase:","").trim())}finally{d(!1)}},R=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new Uw(Ct,"recaptcha-container",{size:"invisible"}))},F=async A=>{if(A.preventDefault(),!p.startsWith("+"))return L.error("Please enter phone number with country code (e.g. +91...)");d(!0);try{R();const oe=window.recaptchaVerifier,we=await Fw(Ct,p,oe);window.confirmationResult=we,v(!0),L.success("OTP sent to your phone")}catch(oe){L.error(oe.message)}finally{d(!1)}},P=async A=>{A.preventDefault(),d(!0);try{await window.confirmationResult.confirm(y),L.success("Phone completely verified!")}catch{L.error("Invalid OTP Code")}finally{d(!1)}};return c.jsxs("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300",children:[c.jsx(Jp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),c.jsxs("div",{className:"w-full max-w-md relative z-10",children:[c.jsxs("div",{className:"mb-10 text-center",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-2",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Studio Edition • Access Portal"})]}),c.jsxs("div",{className:"bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),c.jsxs("button",{type:"button",onClick:T,disabled:h,className:"w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50",children:[c.jsx(T_,{})," Continue with Google"]}),c.jsxs("div",{className:"flex items-center gap-4 mb-6 opacity-30",children:[c.jsx("div",{className:"flex-1 h-px bg-white"}),c.jsx("div",{className:"text-[10px] font-black uppercase text-white tracking-widest",children:"Or Use"}),c.jsx("div",{className:"flex-1 h-px bg-white"})]}),c.jsxs("div",{className:"flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8",children:[c.jsxs("button",{onClick:()=>i("email"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="email"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Ku,{className:"w-4 h-4"})," Email"]}),c.jsxs("button",{onClick:()=>i("phone"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="phone"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Qu,{className:"w-4 h-4"})," Phone"]})]}),r==="email"&&c.jsxs("form",{onSubmit:b,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("div",{className:"space-y-4",children:[!e&&c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(ko,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Full Name",value:s,onChange:A=>o(A.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Ku,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"email",required:!0,placeholder:"Email Address",value:a,onChange:A=>l(A.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(cl,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"password",required:!0,placeholder:"Password",value:u,onChange:A=>m(A.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]})]}),e&&c.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 px-1",children:[c.jsxs("label",{className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:A=>O(A.target.checked),className:"rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500"}),"Remember me"]}),c.jsx("button",{type:"button",onClick:N,className:"hover:text-blue-400 transition-colors",children:"Forgot Password?"})]}),c.jsxs("button",{disabled:h,type:"submit",className:"w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[h?"Processing...":e?"Sign In To Studio":"Create Account",!h&&c.jsx(Hh,{className:"w-4 h-4"})]}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:e?"Don't have an account? Sign Up":"Already have an account? Sign In"})})]}),r==="phone"&&c.jsxs("form",{onSubmit:g?P:F,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[g?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(cl,{className:"h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Enter 6-digit OTP",value:y,onChange:A=>w(A.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center"})]}),c.jsx("button",{disabled:h,type:"submit",className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50",children:h?"Verifying...":"Verify & Enter"}),c.jsx("div",{className:"text-center mt-4",children:c.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:"Wrong Number? Go Back"})})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Qu,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"tel",required:!0,placeholder:"+91 99999 99999",value:p,onChange:A=>f(A.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest"})]}),c.jsxs("button",{disabled:h,type:"submit",className:"w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[h?"Sending OTP...":"Send OTP Code",!h&&c.jsx(Ii,{className:"w-4 h-4"})]})]}),c.jsx("div",{id:"recaptcha-container"})]})]}),c.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600",children:[c.jsxs("button",{type:"button",onClick:t,className:"py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group",children:[c.jsx(Ii,{className:"w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform"})," Try Studio as Guest"]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2 opacity-50",children:[c.jsx(Wh,{className:"w-3 h-3"})," Secure Google Firebase Authentication"]})]})]})]})}const R_=({activeTab:t,onTabChange:e})=>{const n=[{id:"studio",label:"Studio",icon:e1},{id:"vault",label:"Vault",icon:pc},{id:"profile",label:"Profile",icon:ko}];return c.jsx("aside",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-[94%] max-w-[360px] md:w-24 bg-[#0F1118]/80 backdrop-blur-3xl border border-white/10 md:border-none md:bg-transparent rounded-[2rem] md:rounded-none flex md:flex-col items-center py-2.5 px-6 md:py-12 gap-4 md:gap-12 justify-center z-50 shadow-2xl shadow-black/80 md:shadow-none",children:c.jsxs("div",{className:"flex md:flex-col gap-8 md:gap-14 items-center w-full md:w-auto justify-around md:justify-start",children:[c.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-2xl hidden md:flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4",children:c.jsx(p1,{className:"text-white w-6 h-6"})}),c.jsx("nav",{className:"flex md:flex-col gap-10 md:gap-12 w-full md:w-auto justify-around md:justify-center",children:n.map(({id:r,label:i,icon:s})=>c.jsxs("button",{onClick:()=>e(r),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t===r?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[c.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t===r?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:c.jsx(s,{className:"w-5 h-5"})}),c.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t===r?"opacity-100":"opacity-40"}`,children:i})]},r))})]})})},A_=({user:t,isGuestMode:e,hasPlan:n,lang:r,languages:i,onLangChange:s,onSignOutAction:o})=>{var a;return c.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6",children:[c.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[c.jsxs("h2",{className:"text-2xl font-black italic text-white uppercase tracking-tighter transition-all hover:scale-105 duration-300",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]",children:"Studio Edition"})]}),c.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-4",children:[c.jsx("div",{className:"flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl",children:i.map(l=>c.jsx("button",{onClick:()=>s(l.id),className:`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${r===l.id?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-slate-300 hover:bg-white/5"}`,children:l.native},l.id))}),c.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl",children:[c.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:"User",className:"w-full h-full object-cover"}):c.jsx(ko,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})}),c.jsxs("div",{className:"flex flex-col text-left justify-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]",children:t?t.displayName||((a=t.email)==null?void 0:a.split("@")[0])||t.phoneNumber:"Guest User"}),n?c.jsxs("span",{className:"text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[c.jsx(_o,{className:"w-3 h-3"})," Studio Pro"]}):e?c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Tryout Mode"}):c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Free User"})]}),c.jsx("div",{className:"w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"}),c.jsx("button",{onClick:o,className:"p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0",title:e?"Sign In":"Sign Out",children:e?c.jsx(cl,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"}):c.jsx(mc,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"})})]})]})]})},O_=({error:t,script:e,setScript:n,isProcessing:r,isGuestMode:i,user:s,hasPlan:o,setShowPlans:a,enableSubtitles:l,setEnableSubtitles:u,srtLang:m,setSrtLang:p,subtitleLanguages:f,selectedVoice:y,setShowVoiceSheet:w,voiceList:_,onGenerate:O,currentAudio:h,activeSubtitle:d,isPlayingCurrent:g,onTogglePlay:v,onDownload:b,onDownloadSrt:N,playbackSpeed:T,setPlaybackSpeed:R})=>{var F;return c.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 flex-1",children:[c.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[t&&c.jsxs("div",{className:"p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4",children:[c.jsx(Wh,{className:"w-5 h-5 shrink-0"})," ",t]}),c.jsxs("div",{className:`flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border shadow-2xl p-1 flex flex-col transition-all duration-700 ${r?"border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]":"border-white/5 hover:border-blue-500/30"}`,children:[r&&c.jsx("div",{className:"absolute inset-0 bg-blue-500/5 rounded-[2.5rem] animate-pulse"}),c.jsx("textarea",{value:e,onChange:P=>{const A=P.target.value;i&&A.length>100?(n(A.substring(0,100)),L.error("Guest limit reached! Please sign up for more.",{id:"guest-limit"})):!o&&A.length>500?(a(!0),n(A.substring(0,500))):n(A)},placeholder:"Type or paste your script here...",className:"w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 pb-12 sm:p-8 sm:pb-14 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"}),c.jsxs("div",{className:"absolute bottom-5 right-6 sm:bottom-6 sm:right-8 text-[11px] font-black tracking-widest uppercase text-slate-600 pointer-events-none select-none flex items-center gap-1.5",children:[c.jsx("span",{className:e.length>=(i?100:o?1/0:500)?"text-blue-500":"text-slate-400",children:e.length}),c.jsx("span",{className:"opacity-40",children:"/"}),c.jsx("span",{children:i?100:o?"∞":500})]})]}),c.jsxs("div",{className:"shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"}),c.jsxs("div",{className:"relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>{if(!o){a(!0),L.error("Subtitles are a Premium feature! 👑");return}u(!l)},className:`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${l?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10":"bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300"}`,children:[!o&&c.jsx(_o,{className:"w-3.5 h-3.5 text-amber-500"}),l?c.jsx(u1,{className:"w-5 h-5"}):c.jsx(l1,{className:"w-5 h-5"})," Auto Subtitles"]}),l&&c.jsx("div",{className:"flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto",children:f.map(P=>c.jsx("button",{onClick:()=>p(P.id),className:`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${m===P.id?"bg-white text-black border-white shadow-lg shadow-white/10":"bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300"}`,children:P.label},P.id))})]}),c.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10",children:[c.jsxs("button",{onClick:()=>w(!0),className:"lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95",children:[c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx(Ys,{className:"w-4 h-4 text-blue-500"})," Voice: ",((F=_.find(P=>P.id===y))==null?void 0:F.label)||"Select"]}),c.jsx(Hh,{className:"w-4 h-4"})]}),c.jsxs("button",{onClick:O.handle,disabled:r||!e.trim(),className:"w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale",children:[r?c.jsx(Kh,{className:"animate-spin w-5 h-5"}):c.jsx(s1,{className:"w-5 h-5"})," ",r?"Synthesizing...":"Generate Master"]})]})]})]}),c.jsxs("div",{className:"w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full",children:[c.jsxs("div",{className:"hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group",children:[c.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Ys,{className:"w-4 h-4 text-blue-500"})," Voice Models"]}),c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:_.map(P=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${y===P.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>O.onVoiceSelect(P.id),children:[c.jsx("button",{onClick:A=>{A.stopPropagation(),O.onPreview(P.id)},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${O.playingPreview===P.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":y===P.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:O.playingPreview===P.id?c.jsx(al,{className:"w-4 h-4"}):c.jsx(ll,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${y===P.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:P.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:P.type})]})]},P.id))})]}),c.jsxs("div",{className:`shrink-0 lg:flex-1 flex flex-col p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${r?"bg-blue-600/5 border-blue-500/40":h?"bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30":"bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5"}`,children:[r&&c.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3",children:[r?c.jsx(Ii,{className:"w-3 h-3 text-blue-400 animate-bounce"}):c.jsx(H0,{className:"w-3 h-3 text-blue-500/60"}),r?"Engine Processing...":"Studio Output Engine"]}),c.jsx("div",{className:"relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center",children:r?c.jsxs("div",{className:"flex flex-col items-center gap-6",children:[c.jsx("div",{className:"flex items-end gap-1.5 h-16",children:[...Array(12)].map((P,A)=>c.jsx("div",{className:"w-1.5 bg-blue-500 rounded-full animate-wave",style:{animationDelay:`${A*.1}s`,height:"20%"}},A))}),c.jsx("p",{className:"text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse",children:"Synthesizing Voice..."})]}):c.jsx(c.Fragment,{children:c.jsx("p",{className:`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${d?"text-white drop-shadow-lg":"text-slate-600 italic"}`,children:d||(h?"Audio ready for playback":"Awaiting Audio...")})})}),h&&!r&&c.jsxs("div",{className:"relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("div",{className:"bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col gap-3",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-[10px] font-black uppercase text-slate-500 tracking-wider",children:"Voice Speed"}),c.jsxs("span",{className:"text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-md",children:[T,"x"]})]}),c.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.1",value:T,onChange:P=>R(parseFloat(P.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"}),c.jsxs("div",{className:"flex justify-between text-[8px] font-bold text-slate-600 uppercase",children:[c.jsx("span",{children:"Slow"}),c.jsx("span",{children:"Normal"}),c.jsx("span",{children:"Fast"})]})]}),c.jsxs("button",{onClick:v,className:`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${g?"bg-white text-black scale-[0.98]":"bg-blue-600 text-white hover:bg-blue-500"}`,children:[g?c.jsx(al,{className:"w-5 h-5"}):c.jsx(ll,{className:"w-5 h-5"}),g?"Pause Master":"Play Master Track"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:b,className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5",children:[c.jsx(Gh,{className:"w-4 h-4 text-blue-500"})," WAV"]}),h.srt&&c.jsxs("button",{onClick:N,className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors",children:[c.jsx(G0,{className:"w-4 h-4 text-emerald-500"})," SRT"]})]})]})]})]})]})},j_=({items:t,onPlay:e,onDelete:n,onClear:r,onStudioGo:i})=>t.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60 mt-20",children:[c.jsx("div",{className:"w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl",children:c.jsx(pc,{className:"w-10 h-10 text-slate-500"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest mb-2",children:"Vault is Empty"}),c.jsx("p",{className:"text-sm font-medium text-slate-500 max-w-sm",children:"You haven't generated any studio audio yet. Go back to the studio to brew some magic."}),c.jsx("button",{onClick:i,className:"mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20",children:"Go to Studio"})]}):c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex justify-between items-center px-4",children:[c.jsx("h3",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Your Master Collection"}),c.jsxs("button",{onClick:r,className:"text-[9px] font-black uppercase text-red-500/60 hover:text-red-500 transition-colors flex items-center gap-2",children:[c.jsx(Yu,{className:"w-3.5 h-3.5"})," Clear All"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500 pb-20",children:t.map(s=>c.jsxs("div",{className:"bg-[#0F1118] p-6 rounded-[2.5rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center gap-6 relative z-10",children:[c.jsx("button",{onClick:()=>e(s),className:"w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner",children:c.jsx(r1,{className:"w-5 h-5 fill-current ml-1"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm font-bold text-white italic line-clamp-1 group-hover:text-blue-200 transition-colors",children:['"',s.text,'..."']}),c.jsxs("div",{className:"text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest",children:[s.voice," • ",s.date]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 relative z-10",children:[c.jsx("a",{href:s.url,download:`${s.text.substring(0,10)}_master.wav`,className:"p-3 text-slate-600 hover:text-white transition-colors",children:c.jsx(Gh,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>n(s),className:"p-3 text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100",children:c.jsx(Yu,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-3xl -mr-12 -mt-12 transition-opacity opacity-0 group-hover:opacity-100"})]},s.timestamp))})]}),L_=({user:t,isGuestMode:e,hasPlan:n,vaultCount:r,onUpgrade:i,onSignOutAction:s})=>c.jsxs("div",{className:"flex flex-col items-center max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700",children:[c.jsxs("div",{className:"relative mb-10",children:[c.jsx("div",{className:"w-32 h-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20",children:c.jsx("div",{className:"w-full h-full rounded-[2.8rem] bg-[#0F1118] flex items-center justify-center overflow-hidden border border-white/5",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):c.jsx(ko,{className:"w-12 h-12 text-blue-500/50"})})}),c.jsx("div",{className:"absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-[#08090D]",children:c.jsx(gc,{className:"w-4 h-4 fill-current"})})]}),c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h3",{className:"text-3xl font-black text-white uppercase tracking-tighter mb-2",children:(t==null?void 0:t.displayName)||(e?"Guest Creator":"Pro User")}),c.jsx("p",{className:"text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]",children:(t==null?void 0:t.email)||"Studio Guest Access"})]}),c.jsxs("div",{className:"w-full grid gap-4",children:[c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),c.jsxs("div",{className:"relative flex items-center gap-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-inner",children:c.jsx(_o,{className:"w-7 h-7 text-blue-500"})}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Current Studio Plan"}),c.jsx("div",{className:"text-xl font-black text-white uppercase tracking-widest",children:n?"Studio Pro":e?"Guest Tier":"Free Plan"})]})]}),!n&&c.jsxs("button",{onClick:i,className:"relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 group",children:["Upgrade Now ",c.jsx(Ii,{className:"w-4 h-4 fill-current group-hover:animate-pulse"})]})]}),c.jsx("div",{className:"bg-[#0F1118]/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between shadow-xl",children:c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5",children:c.jsx(pc,{className:"w-6 h-6 text-slate-500"})}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Total Creations"}),c.jsxs("div",{className:"text-xl font-black text-white tracking-widest",children:[r," Master Tracks"]})]})]})}),c.jsxs("button",{onClick:s,className:"mt-6 w-full py-5 bg-white/5 hover:bg-red-500/10 text-slate-500 hover:text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 flex items-center justify-center gap-3",children:[c.jsx(mc,{className:"w-4 h-4"})," ",e?"Sign In to Pro Account":"Sign Out"]})]})]}),D_=({show:t,onClose:e,onSelectPlan:n})=>{if(!t)return null;const r=[{id:"starter",name:"Starter",desc:"Perfect for testing",price:"₹99",period:"/ 3 Audio",icon:Ii,color:"emerald",benefits:["3 Audio Generations","Standard Quality"],buttonText:"Buy Now"},{id:"creator",name:"Creator",desc:"For serious creators",price:"₹499",period:"/ 100 Audio",icon:gc,color:"blue",benefits:["100 Audio Generations","Cinematic Vocals","SRT Subtitle Export"],buttonText:"Buy Creator",popular:!0},{id:"studio",name:"Studio",desc:"Unlimited Everything",price:"₹999",period:"/ Lifetime",icon:_o,color:"amber",benefits:["Unlimited Generations","Priority Processing","Commercial Rights"],buttonText:"Go Unlimited"}];return c.jsx("div",{className:"fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col",children:[c.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10",children:c.jsx(Qh,{className:"w-6 h-6"})}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"}),c.jsxs("div",{className:"p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar",children:[c.jsxs("div",{className:"text-center mb-12 relative z-10",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-4",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})," PLANS"]}),c.jsx("p",{className:"text-slate-400 max-w-xl mx-auto font-medium",children:"Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities."})]}),c.jsx("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:r.map(i=>{const s=i.icon;let o="",a="",l="",u="";return i.color==="emerald"?(o="hover:border-emerald-500/30",a="hover:bg-emerald-500",l="bg-emerald-500/10",u="text-emerald-500"):i.color==="blue"?(o="bg-gradient-to-b from-blue-900/40 to-black/80 border-blue-500/30 transform md:-translate-y-4 shadow-2xl shadow-blue-900/20",a="bg-blue-600 hover:bg-blue-500",l="bg-blue-500/20",u="text-blue-500"):(o="hover:border-amber-500/30",a="hover:bg-amber-500",l="bg-amber-500/10",u="text-amber-500"),c.jsxs("div",{className:`${i.id!=="creator"?"bg-black/50 border border-white/10":""} rounded-3xl p-8 flex flex-col transition-all group relative ${o}`,children:[i.popular&&c.jsx("div",{className:"absolute -top-4 inset-x-0 flex justify-center",children:c.jsx("span",{className:"bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30",children:"Most Popular"})}),c.jsx("div",{className:`${u} mb-6 ${l} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`,children:c.jsx(s,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:i.name}),c.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:i.desc}),c.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:[i.price," ",c.jsx("span",{className:"text-sm font-medium text-slate-500",children:i.period})]}),c.jsx("ul",{className:"space-y-4 mb-8 flex-1",children:i.benefits.map((m,p)=>c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(U0,{className:`w-5 h-5 ${u} shrink-0`})," ",m]},p))}),c.jsx("button",{onClick:()=>n(i),className:`w-full py-4 text-white rounded-xl font-bold uppercase tracking-widest transition-all ${i.id!=="creator"?"bg-white/5 "+a:a+" shadow-xl shadow-blue-600/20"}`,children:i.buttonText})]},i.id)})})]})]})})},M_=({show:t,title:e,message:n,onConfirm:r,onCancel:i,type:s,confirmText:o})=>t?c.jsxs("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-300",children:[c.jsx("div",{className:"absolute inset-0 bg-black/90 backdrop-blur-md",onClick:i}),c.jsxs("div",{className:"relative w-full max-w-sm bg-[#0F1118] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${s==="danger"?"bg-red-500/10 text-red-500":"bg-blue-500/10 text-blue-500"}`,children:s==="danger"?c.jsx(mc,{className:"w-8 h-8"}):c.jsx(gc,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest text-center mb-3",children:e}),c.jsx("p",{className:"text-slate-400 text-sm font-medium text-center mb-8 leading-relaxed px-2",children:n}),c.jsxs("div",{className:"flex flex-col gap-3",children:[c.jsx("button",{onClick:r,className:`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl ${s==="danger"?"bg-red-500 hover:bg-red-400 text-white shadow-red-500/20":"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"}`,children:o||"Yes, I'm sure"}),c.jsx("button",{onClick:i,className:"w-full py-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5",children:"No, Cancel"})]})]})]}):null,fa=[{id:"Malayalam",native:"മലയാളം",defaultText:"മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"},{id:"English",native:"ENGLISH",defaultText:"Hello there! How is everyone doing today? Have you all had your food?"}],U_=[{id:"English",label:"English Sub"},{id:"Malayalam",label:"Malayalam Sub"}],ha=[{id:"Maya",label:"Maya",type:"Bright Female",desc:"Clear and energetic Malayalam output.",engine:"google",voice_id:"ml-IN-Wavenet-A",lang:"Malayalam"},{id:"Charan",label:"Charan",type:"Deep Male",desc:"Commanding and professional male narrative.",engine:"google",voice_id:"ml-IN-Wavenet-B",lang:"Malayalam"},{id:"Kavya",label:"Kavya",type:"Calm Female",desc:"Soft and storytelling-focused voice.",engine:"google",voice_id:"ml-IN-Wavenet-C",lang:"Malayalam"},{id:"Ravi",label:"Ravi",type:"Radio Male",desc:"Classic broadcast style male voice.",engine:"google",voice_id:"ml-IN-Standard-B",lang:"Malayalam"},{id:"Francis",label:"Francis",type:"Professional Male",desc:"Standard business narration.",engine:"google",voice_id:"en-US-Neural2-D",lang:"English"},{id:"Sarah",label:"Sarah",type:"Soft Female",desc:"Gentle and smooth American accent.",engine:"google",voice_id:"en-US-Neural2-F",lang:"English"},{id:"Jasper",label:"Jasper",type:"Studio Male",desc:"Premium high-fidelity male voice.",engine:"google",voice_id:"en-US-Studio-Q",lang:"English"},{id:"Emma",label:"Emma",type:"Expressive Female",desc:"High-pitch and lively character voice.",engine:"google",voice_id:"en-US-Neural2-H",lang:"English"}],$_="VokalProStudioDB",Et="audio_vault",z_=1,To=()=>new Promise((t,e)=>{const n=indexedDB.open($_,z_);n.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(Et)||i.createObjectStore(Et,{keyPath:"timestamp"})},n.onsuccess=r=>t(r.target.result),n.onerror=r=>e(r.target.error)}),F_=async(t,e)=>{try{const i=(await To()).transaction([Et],"readwrite").objectStore(Et),s={...t,audioBlob:e,url:null};return new Promise((o,a)=>{const l=i.put(s);l.onsuccess=()=>o(!0),l.onerror=u=>a(u.target.error)})}catch(n){return console.error("Failed to save to IndexedDB:",n),!1}},as=async()=>{try{const r=(await To()).transaction([Et],"readonly").objectStore(Et).getAll();return new Promise((i,s)=>{r.onsuccess=()=>{const o=r.result;o.sort((l,u)=>u.timestamp-l.timestamp);const a=o.map(l=>l.audioBlob?{...l,url:URL.createObjectURL(l.audioBlob)}:l);i(a)},r.onerror=o=>s(o.target.error)})}catch(t){return console.error("Failed to load from IndexedDB:",t),[]}},V_=async t=>{try{const r=(await To()).transaction([Et],"readwrite").objectStore(Et);return new Promise((i,s)=>{const o=r.delete(t);o.onsuccess=()=>i(!0),o.onerror=a=>s(a.target.error)})}catch(e){return console.error("Failed to delete from IndexedDB:",e),!1}},B_=async()=>{try{const n=(await To()).transaction([Et],"readwrite").objectStore(Et);return new Promise((r,i)=>{const s=n.clear();s.onsuccess=()=>r(!0),s.onerror=o=>i(o.target.error)})}catch(t){return console.error("Failed to clear IndexedDB:",t),!1}},H_={}.VITE_API_URL||"https://vokal-pro-api.vercel.app/api/generate",W_=()=>c.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes wave {
            0%, 100% { height: 20%; }
            50% { height: 100%; }
        }
        .animate-wave {
            animation: wave 1.2s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.5);
        }
    `}}),G_=()=>{const[t,e]=k.useState("studio"),[n,r]=k.useState("Malayalam"),[i,s]=k.useState("English"),[o,a]=k.useState(!1),[l,u]=k.useState(!1),[m,p]=k.useState(null),[f,y]=k.useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"),[w,_]=k.useState(!1),[O,h]=k.useState("Maya"),[d,g]=k.useState([]),[v,b]=k.useState(null),[N,T]=k.useState([]),[R,F]=k.useState(""),[P,A]=k.useState(!1),[oe,we]=k.useState(null),[Pr,Po]=k.useState(!1),[Bt,Rr]=k.useState(null),[E,j]=k.useState(!1),[D,q]=k.useState(!0),[Q,Bn]=k.useState(!1),[St,it]=k.useState(!1),[Qe,Hn]=k.useState(1),[kn,st]=k.useState({show:!1,title:"",message:"",onConfirm:null,type:"danger"}),ee=k.useRef(null),pt=k.useRef(new Audio);k.useEffect(()=>yw(Ct,M=>{Rr(M),q(!1)}),[]),k.useEffect(()=>{as().then(I=>{g(I)})},[]);const Ac=I=>I?I.trim().split(/\n\s*\n/).map(z=>{const te=z.split(`
`);if(te.length<3)return null;const ue=te[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);if(!ue)return null;const ae=Pe=>{const[re,mt,ie]=Pe.split(":"),[de,$e]=ie.split(",");return parseInt(re)*3600+parseInt(mt)*60+parseInt(de)+parseInt($e)/1e3};return{start:ae(ue[1]),end:ae(ue[2]),text:te.slice(2).join(" ")}}).filter(z=>z!==null):[],Xp=async(I,M)=>{if(M===1)return I;const z=await I.arrayBuffer(),ue=await new(window.AudioContext||window.webkitAudioContext)().decodeAudioData(z),ae=new OfflineAudioContext(ue.numberOfChannels,ue.length/M,ue.sampleRate),Pe=ae.createBufferSource();Pe.buffer=ue,Pe.playbackRate.value=M,Pe.connect(ae.destination),Pe.start();const re=await ae.startRendering(),mt=re.length*re.numberOfChannels*2+44,ie=new ArrayBuffer(mt),de=new DataView(ie),$e=(Ht,Re)=>{for(let ze=0;ze<Re.length;ze++)de.setUint8(Ht+ze,Re.charCodeAt(ze))};$e(0,"RIFF"),de.setUint32(4,mt-8,!0),$e(8,"WAVE"),$e(12,"fmt "),de.setUint32(16,16,!0),de.setUint16(20,1,!0),de.setUint16(22,re.numberOfChannels,!0),de.setUint32(24,re.sampleRate,!0),de.setUint32(28,re.sampleRate*re.numberOfChannels*2,!0),de.setUint16(32,re.numberOfChannels*2,!0),de.setUint16(34,16,!0),$e(36,"data"),de.setUint32(40,mt-44,!0);let En=44;for(let Ht=0;Ht<re.length;Ht++)for(let Re=0;Re<re.numberOfChannels;Re++){let ze=re.getChannelData(Re)[Ht];ze=Math.max(-1,Math.min(1,ze)),de.setInt16(En,ze<0?ze*32768:ze*32767,!0),En+=2}return new Blob([ie],{type:"audio/wav"})};k.useEffect(()=>{ee.current=new Audio;const I=()=>{if(!ee.current||N.length===0)return;const M=ee.current.currentTime,z=N.find(te=>M>=te.start&&M<=te.end);F(z?z.text:"")};return ee.current.addEventListener("timeupdate",I),ee.current.onplay=()=>{v&&ee.current.src===v.url&&A(!0)},ee.current.onpause=()=>{A(!1),we(null)},ee.current.onended=()=>{A(!1),F(""),we(null)},()=>{var M;return(M=ee.current)==null?void 0:M.removeEventListener("timeupdate",I)}},[N,v]);const Oc=async()=>{Po(!0);try{const I="data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";ee.current.src=I,await ee.current.play().then(()=>ee.current.pause())}catch{console.warn("Engine Unlocked")}},jc=async(I,M)=>{let z=0;const te=3,ue=async()=>{var Pe,re;const ae=await fetch(H_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:I,payload:M})});if(!ae.ok){const mt=await ae.text().catch(()=>"{}");let ie={};try{ie=JSON.parse(mt)}catch{}if(ae.status===429||((Pe=ie==null?void 0:ie.error)==null?void 0:Pe.code)===429||(ie==null?void 0:ie.error)==="TOO_MANY_REQUESTS")throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");if(z<te){z++;const $e=Math.pow(2,z)*1e3;return await new Promise(En=>setTimeout(En,$e)),ue()}const de=((re=ie==null?void 0:ie.error)==null?void 0:re.message)||(ie==null?void 0:ie.error)||mt;throw console.error("API Error details:",de),new Error(`System Error: ${ae.status}`)}return await ae.json()};return ue()},Zp=async()=>{var I,M,z,te,ue;if(!w){if(!Q&&f.length>500){it(!0),L.error("Upgrade to Premium to generate longer audio! 👑",{icon:"👑"});return}if(o&&!Q){it(!0),L.error("Auto Subtitles require a Premium plan! 👑",{icon:"👑"});return}if(E&&parseInt(localStorage.getItem("vokal_guest_used")||"0")+f.length>100){const Pe=await fetch("https://api64.ipify.org?format=json").catch(()=>null);Pe&&(await Pe.json()).ip;let re=localStorage.getItem("vokal_device_id");re||(re="DEV_"+Math.random().toString(36).substr(2,9).toUpperCase(),localStorage.setItem("vokal_device_id",re)),L.error(`Access Denied! Device (${re}) has reached the 100 char free limit. Please register to continue.`,{icon:"🛑",duration:7e3}),it(!0);return}if(Pr||await Oc(),!!f.trim()){_(!0),p(null);try{const ae=ha.find(Re=>Re.id===O),Pe=(ae==null?void 0:ae.voice_id)||"ml-IN-Wavenet-C",mt={text:f,voiceId:Pe,langCode:{Malayalam:"ml-IN",English:"en-US",Hindi:"hi-IN",Tamil:"ta-IN"}[n]||"ml-IN"};let ie=null;if(o){const Re=`Generate .SRT subtitles in ${i} for: "${f}"`;ie=jc("analysis",{contents:[{role:"user",parts:[{text:Re}]}]})}const[de,$e]=await Promise.all([jc("tts",mt),ie]),En=de==null?void 0:de.audio,Ht=((ue=(te=(z=(M=(I=$e==null?void 0:$e.candidates)==null?void 0:I[0])==null?void 0:M.content)==null?void 0:z.parts)==null?void 0:te[0])==null?void 0:ue.text)||"";if(En){const Re=atob(En),ze=new Array(Re.length);for(let Wn=0;Wn<Re.length;Wn++)ze[Wn]=Re.charCodeAt(Wn);const em=new Uint8Array(ze),tm=new Blob([em],{type:"audio/mpeg"}),nm={srt:Ht,srtLang:o?i:"None",text:f.substring(0,40),date:new Date().toLocaleTimeString(),voice:O,timestamp:Date.now()};await F_(nm,tm);const Dc=await as();if(g(Dc),E){let Wn=parseInt(localStorage.getItem("vokal_guest_used")||"0");localStorage.setItem("vokal_guest_used",Wn+f.length)}const Fi=Dc[0];b(Fi),T(o?Ac(Ht):[]),Fi&&Fi.url&&(ee.current.src=Fi.url),L.success("Studio Master Generated Successfully!",{icon:"✨"})}}catch(ae){p(ae.message),L.error("Generation Failed: "+ae.message,{icon:"❌"})}finally{_(!1)}}}},Lc=()=>{st({show:!0,title:E?"Exit Guest Mode?":"Sign Out?",message:E?"Are you sure you want to exit Tryout mode and sign in?":"Are you sure you want to sign out? You will need to log back in to access your pro features.",type:"danger",confirmText:E?"Sign In Now":"Sign Out Now",onConfirm:()=>{E?(j(!1),st(I=>({...I,show:!1}))):vw(Ct).then(()=>{L.success("Signed out successfully"),e("studio"),st(I=>({...I,show:!1}))})},onCancel:()=>st(I=>({...I,show:!1}))})};return D?c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center",children:c.jsx(Kh,{className:"w-10 h-10 text-blue-500 animate-spin"})}):!Bt&&!E?c.jsx(P_,{onGuestLogin:()=>j(!0)}):c.jsxs("div",{className:"h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans",children:[c.jsx(W_,{}),c.jsx(M_,{show:kn.show,title:kn.title,message:kn.message,type:kn.type,confirmText:kn.confirmText,onConfirm:kn.onConfirm,onCancel:()=>st({...kn,show:!1})}),c.jsx(Jp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx(D_,{show:St,onClose:()=>it(!1),onSelectPlan:I=>{Bn(!0),it(!1),L.success(`${I.name} Access Granted! (Payment portal coming soon)`,{icon:"💳"})}}),l&&c.jsxs("div",{className:"fixed inset-0 z-[60] lg:hidden flex flex-col justify-end",children:[c.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>u(!1)}),c.jsxs("div",{className:"relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6 shrink-0",children:[c.jsxs("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Ys,{className:"w-4 h-4 sm:w-5 sm:h-5 text-blue-500"})," Choose Voice Model"]}),c.jsx("button",{onClick:()=>u(!1),className:"p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:c.jsx(Qh,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar flex-1 pr-2",children:c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:ha.filter(I=>I.lang===n).map(I=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${O===I.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>{h(I.id),u(!1)},children:[c.jsx("button",{onClick:M=>{if(M.stopPropagation(),oe===I.id)pt.current.pause(),pt.current.currentTime=0,we(null);else{P&&ee.current.pause();const z="/vokal-pro-studio/",te=`previews/${n.toLowerCase()}/${I.id.toLowerCase()}.wav`;pt.current.src=z+te,pt.current.play().catch(ue=>{console.warn("Preview missing:",te),L.error(`Missing audio for ${n}: ${I.id}`,{icon:"📂",description:`File should be at: ${te}`})}),we(I.id),pt.current.onended=()=>we(null)}},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${oe===I.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":O===I.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:oe===I.id?c.jsx(al,{className:"w-4 h-4"}):c.jsx(ll,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${O===I.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:I.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:I.type})]})]},I.id))})})]})]}),!Pr&&c.jsxs("div",{onClick:Oc,className:"fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)"},children:[c.jsxs("div",{style:{position:"relative",width:"320px",height:"320px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"40px",zIndex:10,flexShrink:0},children:[c.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",animation:"glow-pulse 2.5s ease-in-out infinite"}}),c.jsx("div",{style:{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.2)",animation:"spin-slow 12s linear infinite"},children:c.jsx("div",{style:{position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 14px 4px #3b82f6"}})}),c.jsx("div",{style:{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",border:"1px solid rgba(99,102,241,0.25)",animation:"spin-slow-rev 8s linear infinite"},children:c.jsx("div",{style:{position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:"#818cf8",boxShadow:"0 0 10px 3px #818cf8"}})}),c.jsx("div",{style:{position:"absolute",width:"160px",height:"160px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.15)",animation:"spin-slow 6s linear infinite"}}),c.jsx("div",{style:{position:"relative",zIndex:5,width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)",animation:"float-mic 3s ease-in-out infinite"},children:c.jsx(Ys,{style:{width:"44px",height:"44px",color:"white"}})})]}),c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"5px",height:"40px",marginBottom:"28px",zIndex:10},children:[["bar1","#3b82f6"],["bar2","#6366f1"],["bar3","#3b82f6"],["bar4","#60a5fa"],["bar5","#818cf8"],["bar1","#3b82f6"],["bar2","#6366f1"]].map(([I,M],z)=>c.jsx("div",{className:`animate-${I}`,style:{width:"5px",borderRadius:"3px",background:M,opacity:.85}},z))}),c.jsx("h1",{style:{fontSize:"clamp(1rem,5vw,1.5rem)",fontWeight:900,letterSpacing:"0.35em",textTransform:"uppercase",zIndex:10,background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"text-shimmer 3s linear infinite",textAlign:"center",padding:"0 24px"},children:"Vokal Pro Studio"}),c.jsx("p",{style:{marginTop:"10px",fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(148,163,184,0.6)",zIndex:10,fontWeight:700},children:"AI Voice Engine"}),c.jsxs("div",{style:{position:"absolute",bottom:"60px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",zIndex:10},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"tap-bounce 1.5s ease-in-out infinite"},children:c.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",children:c.jsx("path",{d:"M6 1v12M6 13l-4-4M6 13l4-4",stroke:"#3b82f6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(148,163,184,0.45)",fontWeight:700,textTransform:"uppercase"},children:"Tap anywhere"})]})]}),c.jsx(R_,{activeTab:t,onTabChange:e}),c.jsxs("main",{className:"flex-1 p-6 sm:p-8 md:p-12 pb-32 md:pb-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last custom-scrollbar",children:[c.jsx(A_,{user:Bt,isGuestMode:E,hasPlan:Q,lang:n,languages:fa,onLangChange:I=>{r(I);const M=fa.find(z=>z.id===I);if(M){const z={Malayalam:"Maya",English:"Francis"};z[I]&&h(z[I]),(fa.some(ue=>ue.defaultText===f)||f.trim()==="")&&y(M.defaultText)}},onSignOutAction:Lc}),t==="studio"&&c.jsx(O_,{error:m,script:f,setScript:y,isProcessing:w,isGuestMode:E,user:Bt,hasPlan:Q,setShowPlans:it,enableSubtitles:o,setEnableSubtitles:a,srtLang:i,setSrtLang:s,subtitleLanguages:U_,selectedVoice:O,setShowVoiceSheet:u,voiceList:ha.filter(I=>I.lang===n),onGenerate:{handle:Zp,onVoiceSelect:h,playingPreview:oe,onPreview:I=>{if(oe===I)pt.current.pause(),pt.current.currentTime=0,we(null);else{P&&ee.current.pause();const M="/vokal-pro-studio/",z=`previews/${n.toLowerCase()}/${I.toLowerCase()}.wav`;pt.current.src=M+z,pt.current.play().catch(te=>{console.warn("Preview missing:",z),L.error(`Missing audio for ${n}: ${I}`,{icon:"📂",description:`File should be at: ${z}`})}),we(I),pt.current.onended=()=>we(null)}}},currentAudio:v,activeSubtitle:R,isPlayingCurrent:P,onTogglePlay:()=>{ee.current.src!==v.url&&(ee.current.src=v.url),P?ee.current.pause():(ee.current.playbackRate=Qe,ee.current.play())},onDownload:async()=>{const I=await fetch(v.url).then(ue=>ue.blob()),M=await Xp(I,Qe),z=URL.createObjectURL(M),te=document.createElement("a");te.href=z,te.download=`master_audio_${Qe}x.wav`,te.click()},playbackSpeed:Qe,setPlaybackSpeed:Hn,onDownloadSrt:()=>{const I=new Blob([v.srt],{type:"text/plain"}),M=document.createElement("a");M.href=URL.createObjectURL(I),M.download="subtitles.srt",M.click()}}),t==="vault"&&c.jsx(j_,{items:d,onPlay:I=>{ee.current.src=I.url,T(I.srt?Ac(I.srt):[]),ee.current.play(),A(!0),b(I)},onDelete:I=>{st({show:!0,title:"Delete Track?",message:"Are you sure you want to delete this master track from your history?",type:"danger",confirmText:"Delete Track",onConfirm:async()=>{await V_(I.timestamp);const M=await as();g(M),L.success("Track Deleted"),st(z=>({...z,show:!1}))},onCancel:()=>st(M=>({...M,show:!1}))})},onClear:()=>{st({show:!0,title:"Clear Vault?",message:"This will permanently remove all your generated audio from the local vault. This action cannot be undone.",type:"danger",confirmText:"Clear Vault",onConfirm:async()=>{await B_();const I=await as();g(I),L.success("Vault Cleared"),st(M=>({...M,show:!1}))},onCancel:()=>st(I=>({...I,show:!1}))})},onStudioGo:()=>e("studio")}),t==="profile"&&c.jsx(L_,{user:Bt,isGuestMode:E,hasPlan:Q,vaultCount:d.length,onUpgrade:()=>it(!0),onSignOutAction:Lc})]})]})};class K_ extends $d.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 text-center",children:c.jsxs("div",{className:"max-w-md w-full bg-[#0F1118] border border-red-500/20 rounded-[2.5rem] p-10 shadow-2xl",children:[c.jsx("div",{className:"w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6 mx-auto",children:c.jsx("svg",{className:"w-10 h-10 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),c.jsx("h2",{className:"text-2xl font-black text-white uppercase tracking-tighter mb-4",children:"Something went wrong"}),c.jsx("p",{className:"text-slate-400 text-sm mb-8",children:"We've encountered an unexpected error. Don't worry, your data is safe. Try refreshing the page."}),c.jsx("button",{onClick:()=>window.location.reload(),className:"w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-600/20",children:"Reload Application"}),!1]})}):this.props.children}}pa.createRoot(document.getElementById("root")).render(c.jsx($d.StrictMode,{children:c.jsx(K_,{children:c.jsx(G_,{})})}));
