(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rd={exports:{}},qs={},Ad={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),rm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),Au=Symbol.iterator;function hm(t){return t===null||typeof t!="object"?null:(t=Au&&t[Au]||t["@@iterator"],typeof t=="function"?t:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,jd={};function mr(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||Od}mr.prototype.isReactComponent={};mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dd(){}Dd.prototype=mr.prototype;function dl(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||Od}var fl=dl.prototype=new Dd;fl.constructor=dl;Ld(fl,mr.prototype);fl.isPureReactComponent=!0;var Ou=Array.isArray,Md=Object.prototype.hasOwnProperty,hl={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function zd(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Md.call(e,r)&&!Ud.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ki,type:t,key:s,ref:o,props:i,_owner:hl.current}}function pm(t,e){return{$$typeof:ki,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pl(t){return typeof t=="object"&&t!==null&&t.$$typeof===ki}function mm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lu=/\/+/g;function Eo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mm(""+t.key):e.toString(36)}function es(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ki:case rm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eo(o,0):r,Ou(i)?(n="",t!=null&&(n=t.replace(Lu,"$&/")+"/"),es(i,e,n,"",function(c){return c})):i!=null&&(pl(i)&&(i=pm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ou(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Eo(s,a);o+=es(s,e,n,l,i)}else if(l=hm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Eo(s,a++),o+=es(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ji(t,e,n){if(t==null)return t;var r=[],i=0;return es(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ee={current:null},ts={transition:null},ym={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ts,ReactCurrentOwner:hl};function $d(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:ji,forEach:function(t,e,n){ji(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ji(t,function(){e++}),e},toArray:function(t){return ji(t,function(e){return e})||[]},only:function(t){if(!pl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=mr;M.Fragment=im;M.Profiler=om;M.PureComponent=dl;M.StrictMode=sm;M.Suspense=cm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;M.act=$d;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ld({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Md.call(e,l)&&!Ud.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ki,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:lm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:am,_context:t},t.Consumer=t};M.createElement=zd;M.createFactory=function(t){var e=zd.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:um,render:t}};M.isValidElement=pl;M.lazy=function(t){return{$$typeof:fm,_payload:{_status:-1,_result:t},_init:gm}};M.memo=function(t,e){return{$$typeof:dm,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=ts.transition;ts.transition={};try{t()}finally{ts.transition=e}};M.unstable_act=$d;M.useCallback=function(t,e){return Ee.current.useCallback(t,e)};M.useContext=function(t){return Ee.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Ee.current.useDeferredValue(t)};M.useEffect=function(t,e){return Ee.current.useEffect(t,e)};M.useId=function(){return Ee.current.useId()};M.useImperativeHandle=function(t,e,n){return Ee.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Ee.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Ee.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Ee.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Ee.current.useReducer(t,e,n)};M.useRef=function(t){return Ee.current.useRef(t)};M.useState=function(t){return Ee.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Ee.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Ee.current.useTransition()};M.version="18.3.1";Ad.exports=M;var E=Ad.exports;const vm=nm(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=E,xm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Em=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sm={key:!0,ref:!0,__self:!0,__source:!0};function Fd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)km.call(e,r)&&!Sm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xm,type:t,key:s,ref:o,props:i,_owner:Em.current}}qs.Fragment=_m;qs.jsx=Fd;qs.jsxs=Fd;Rd.exports=qs;var u=Rd.exports,aa={},Vd={exports:{}},Fe={},Bd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,A){var D=k.length;k.push(A);e:for(;0<D;){var J=D-1>>>1,Y=k[J];if(0<i(Y,A))k[J]=A,k[D]=Y,D=J;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var A=k[0],D=k.pop();if(D!==A){k[0]=D;e:for(var J=0,Y=k.length,Dt=Y>>>1;J<Dt;){var gt=2*(J+1)-1,Xe=k[gt],Mt=gt+1,jn=k[Mt];if(0>i(Xe,D))Mt<Y&&0>i(jn,Xe)?(k[J]=jn,k[Mt]=D,J=Mt):(k[J]=Xe,k[gt]=D,J=gt);else if(Mt<Y&&0>i(jn,D))k[J]=jn,k[Mt]=D,J=Mt;else break e}}return A}function i(k,A){var D=k.sortIndex-A.sortIndex;return D!==0?D:k.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],m=1,h=null,f=3,y=!1,w=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=k)r(c),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(c)}}function v(k){if(_=!1,g(k),!w)if(n(l)!==null)w=!0,G(I);else{var A=n(c);A!==null&&_r(v,A.startTime-k)}}function I(k,A){w=!1,_&&(_=!1,p(P),P=-1),y=!0;var D=f;try{for(g(A),h=n(l);h!==null&&(!(h.expirationTime>A)||k&&!j());){var J=h.callback;if(typeof J=="function"){h.callback=null,f=h.priorityLevel;var Y=J(h.expirationTime<=A);A=t.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(l)&&r(l),g(A)}else r(l);h=n(l)}if(h!==null)var Dt=!0;else{var gt=n(c);gt!==null&&_r(v,gt.startTime-A),Dt=!1}return Dt}finally{h=null,f=D,y=!1}}var b=!1,T=null,P=-1,H=5,O=-1;function j(){return!(t.unstable_now()-O<H)}function ue(){if(T!==null){var k=t.unstable_now();O=k;var A=!0;try{A=T(!0,k)}finally{A?je():(b=!1,T=null)}}else b=!1}var je;if(typeof d=="function")je=function(){d(ue)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,wo=xr.port2;xr.port1.onmessage=ue,je=function(){wo.postMessage(null)}}else je=function(){R(ue,0)};function G(k){T=k,b||(b=!0,je())}function _r(k,A){P=R(function(){k(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,G(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var D=f;f=A;try{return k()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,A){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=f;f=k;try{return A()}finally{f=D}},t.unstable_scheduleCallback=function(k,A,D){var J=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,k){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,k={id:m++,callback:A,priorityLevel:k,startTime:D,expirationTime:Y,sortIndex:-1},D>J?(k.sortIndex=D,e(c,k),n(l)===null&&k===n(c)&&(_?(p(P),P=-1):_=!0,_r(v,D-J))):(k.sortIndex=Y,e(l,k),w||y||(w=!0,G(I))),k},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(k){var A=f;return function(){var D=f;f=A;try{return k.apply(this,arguments)}finally{f=D}}}})(Hd);Bd.exports=Hd;var Im=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=E,$e=Im;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wd=new Set,ni={};function On(t,e){sr(t,e),sr(t+"Capture",e)}function sr(t,e){for(ni[t]=e,t=0;t<e.length;t++)Wd.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ju={},Du={};function bm(t){return la.call(Du,t)?!0:la.call(ju,t)?!1:Nm.test(t)?Du[t]=!0:(ju[t]=!0,!1)}function Tm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pm(t,e,n,r){if(e===null||typeof e>"u"||Tm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Se(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new Se(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new Se(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new Se(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new Se(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new Se(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new Se(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new Se(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new Se(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new Se(t,5,!1,t.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ml,gl);pe[e]=new Se(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ml,gl);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ml,gl);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!0,!0)});function yl(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pm(e,n,i,r)&&(n=null),r||i===null?bm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),vl=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),Mu=Symbol.iterator;function Ir(t){return t===null||typeof t!="object"?null:(t=Mu&&t[Mu]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,So;function Lr(t){if(So===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);So=e&&e[1]||""}return`
`+So+t}var Io=!1;function Co(t,e){if(!t||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lr(t):""}function Rm(t){switch(t.tag){case 5:return Lr(t.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return t=Co(t.type,!1),t;case 11:return t=Co(t.type.render,!1),t;case 1:return t=Co(t.type,!0),t;default:return""}}function fa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Un:return"Fragment";case Mn:return"Portal";case ua:return"Profiler";case vl:return"StrictMode";case ca:return"Suspense";case da:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kd:return(t.displayName||"Context")+".Consumer";case Gd:return(t._context.displayName||"Context")+".Provider";case wl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xl:return e=t.displayName||null,e!==null?e:fa(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return fa(t(e))}catch{}}return null}function Am(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fa(e);case 8:return e===vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Om(t){var e=Yd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mi(t){t._valueTracker||(t._valueTracker=Om(t))}function qd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ha(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jd(t,e){e=e.checked,e!=null&&yl(t,"checked",e,!1)}function pa(t,e){Jd(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ma(t,e.type,n):e.hasOwnProperty("defaultValue")&&ma(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ma(t,e,n){(e!=="number"||vs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jr=Array.isArray;function Yn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ga(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $u(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(jr(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function Xd(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ui,ef=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ui.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(t){Lm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fr[e]=Fr[t]})});function tf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fr.hasOwnProperty(t)&&Fr[t]?(""+e).trim():e+"px"}function nf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(t,e){if(e){if(jm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function wa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function _l(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _a=null,qn=null,Jn=null;function Vu(t){if(t=Ii(t)){if(typeof _a!="function")throw Error(x(280));var e=t.stateNode;e&&(e=to(e),_a(t.stateNode,t.type,e))}}function rf(t){qn?Jn?Jn.push(t):Jn=[t]:qn=t}function sf(){if(qn){var t=qn,e=Jn;if(Jn=qn=null,Vu(t),e)for(t=0;t<e.length;t++)Vu(e[t])}}function of(t,e){return t(e)}function af(){}var No=!1;function lf(t,e,n){if(No)return t(e,n);No=!0;try{return of(t,e,n)}finally{No=!1,(qn!==null||Jn!==null)&&(af(),sf())}}function ii(t,e){var n=t.stateNode;if(n===null)return null;var r=to(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var ka=!1;if(bt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ka=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ka=!1}function Dm(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(m){this.onError(m)}}var Vr=!1,ws=null,xs=!1,Ea=null,Mm={onError:function(t){Vr=!0,ws=t}};function Um(t,e,n,r,i,s,o,a,l){Vr=!1,ws=null,Dm.apply(Mm,arguments)}function zm(t,e,n,r,i,s,o,a,l){if(Um.apply(this,arguments),Vr){if(Vr){var c=ws;Vr=!1,ws=null}else throw Error(x(198));xs||(xs=!0,Ea=c)}}function Ln(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bu(t){if(Ln(t)!==t)throw Error(x(188))}function $m(t){var e=t.alternate;if(!e){if(e=Ln(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bu(i),t;if(s===r)return Bu(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function cf(t){return t=$m(t),t!==null?df(t):null}function df(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=df(t);if(e!==null)return e;t=t.sibling}return null}var ff=$e.unstable_scheduleCallback,Hu=$e.unstable_cancelCallback,Fm=$e.unstable_shouldYield,Vm=$e.unstable_requestPaint,ne=$e.unstable_now,Bm=$e.unstable_getCurrentPriorityLevel,kl=$e.unstable_ImmediatePriority,hf=$e.unstable_UserBlockingPriority,_s=$e.unstable_NormalPriority,Hm=$e.unstable_LowPriority,pf=$e.unstable_IdlePriority,Js=null,ht=null;function Wm(t){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Js,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Qm,Gm=Math.log,Km=Math.LN2;function Qm(t){return t>>>=0,t===0?32:31-(Gm(t)/Km|0)|0}var zi=64,$i=4194304;function Dr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ks(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Dr(a):(s&=o,s!==0&&(r=Dr(s)))}else o=n&~i,o!==0?r=Dr(o):s!==0&&(r=Dr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Ym(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ym(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mf(){var t=zi;return zi<<=1,!(zi&4194240)&&(zi=64),t}function bo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ei(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function Jm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function El(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function gf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yf,Sl,vf,wf,xf,Ia=!1,Fi=[],qt=null,Jt=null,Xt=null,si=new Map,oi=new Map,Vt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wu(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(e.pointerId)}}function Nr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ii(e),e!==null&&Sl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zm(t,e,n,r,i){switch(e){case"focusin":return qt=Nr(qt,t,e,n,r,i),!0;case"dragenter":return Jt=Nr(Jt,t,e,n,r,i),!0;case"mouseover":return Xt=Nr(Xt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return si.set(s,Nr(si.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,Nr(oi.get(s)||null,t,e,n,r,i)),!0}return!1}function _f(t){var e=wn(t.target);if(e!==null){var n=Ln(e);if(n!==null){if(e=n.tag,e===13){if(e=uf(n),e!==null){t.blockedOn=e,xf(t.priority,function(){vf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ns(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ca(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return e=Ii(n),e!==null&&Sl(e),t.blockedOn=n,!1;e.shift()}return!0}function Gu(t,e,n){ns(t)&&n.delete(e)}function e0(){Ia=!1,qt!==null&&ns(qt)&&(qt=null),Jt!==null&&ns(Jt)&&(Jt=null),Xt!==null&&ns(Xt)&&(Xt=null),si.forEach(Gu),oi.forEach(Gu)}function br(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,e0)))}function ai(t){function e(i){return br(i,t)}if(0<Fi.length){br(Fi[0],t);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qt!==null&&br(qt,t),Jt!==null&&br(Jt,t),Xt!==null&&br(Xt,t),si.forEach(e),oi.forEach(e),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)_f(n),n.blockedOn===null&&Vt.shift()}var Xn=jt.ReactCurrentBatchConfig,Es=!0;function t0(t,e,n,r){var i=z,s=Xn.transition;Xn.transition=null;try{z=1,Il(t,e,n,r)}finally{z=i,Xn.transition=s}}function n0(t,e,n,r){var i=z,s=Xn.transition;Xn.transition=null;try{z=4,Il(t,e,n,r)}finally{z=i,Xn.transition=s}}function Il(t,e,n,r){if(Es){var i=Ca(t,e,n,r);if(i===null)Uo(t,e,r,Ss,n),Wu(t,r);else if(Zm(i,t,e,n,r))r.stopPropagation();else if(Wu(t,r),e&4&&-1<Xm.indexOf(t)){for(;i!==null;){var s=Ii(i);if(s!==null&&yf(s),s=Ca(t,e,n,r),s===null&&Uo(t,e,r,Ss,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uo(t,e,r,null,n)}}var Ss=null;function Ca(t,e,n,r){if(Ss=null,t=_l(r),t=wn(t),t!==null)if(e=Ln(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ss=t,null}function kf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bm()){case kl:return 1;case hf:return 4;case _s:case Hm:return 16;case pf:return 536870912;default:return 16}default:return 16}}var Qt=null,Cl=null,rs=null;function Ef(){if(rs)return rs;var t,e=Cl,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rs=i.slice(t,1<r?1-r:void 0)}function is(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vi(){return!0}function Ku(){return!1}function Ve(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vi:Ku,this.isPropagationStopped=Ku,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),e}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Ve(gr),Si=ee({},gr,{view:0,detail:0}),r0=Ve(Si),To,Po,Tr,Xs=ee({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Tr&&(Tr&&t.type==="mousemove"?(To=t.screenX-Tr.screenX,Po=t.screenY-Tr.screenY):Po=To=0,Tr=t),To)},movementY:function(t){return"movementY"in t?t.movementY:Po}}),Qu=Ve(Xs),i0=ee({},Xs,{dataTransfer:0}),s0=Ve(i0),o0=ee({},Si,{relatedTarget:0}),Ro=Ve(o0),a0=ee({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=Ve(a0),u0=ee({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=Ve(u0),d0=ee({},gr,{data:0}),Yu=Ve(d0),f0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=p0[t])?!!e[t]:!1}function bl(){return m0}var g0=ee({},Si,{key:function(t){if(t.key){var e=f0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=is(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(t){return t.type==="keypress"?is(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?is(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y0=Ve(g0),v0=ee({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=Ve(v0),w0=ee({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),x0=Ve(w0),_0=ee({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=Ve(_0),E0=ee({},Xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=Ve(E0),I0=[9,13,27,32],Tl=bt&&"CompositionEvent"in window,Br=null;bt&&"documentMode"in document&&(Br=document.documentMode);var C0=bt&&"TextEvent"in window&&!Br,Sf=bt&&(!Tl||Br&&8<Br&&11>=Br),Ju=String.fromCharCode(32),Xu=!1;function If(t,e){switch(t){case"keyup":return I0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zn=!1;function N0(t,e){switch(t){case"compositionend":return Cf(e);case"keypress":return e.which!==32?null:(Xu=!0,Ju);case"textInput":return t=e.data,t===Ju&&Xu?null:t;default:return null}}function b0(t,e){if(zn)return t==="compositionend"||!Tl&&If(t,e)?(t=Ef(),rs=Cl=Qt=null,zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sf&&e.locale!=="ko"?null:e.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T0[t.type]:e==="textarea"}function Nf(t,e,n,r){rf(r),e=Is(e,"onChange"),0<e.length&&(n=new Nl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hr=null,li=null;function P0(t){Uf(t,0)}function Zs(t){var e=Vn(t);if(qd(e))return t}function R0(t,e){if(t==="change")return e}var bf=!1;if(bt){var Ao;if(bt){var Oo="oninput"in document;if(!Oo){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Oo=typeof ec.oninput=="function"}Ao=Oo}else Ao=!1;bf=Ao&&(!document.documentMode||9<document.documentMode)}function tc(){Hr&&(Hr.detachEvent("onpropertychange",Tf),li=Hr=null)}function Tf(t){if(t.propertyName==="value"&&Zs(li)){var e=[];Nf(e,li,t,_l(t)),lf(P0,e)}}function A0(t,e,n){t==="focusin"?(tc(),Hr=e,li=n,Hr.attachEvent("onpropertychange",Tf)):t==="focusout"&&tc()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zs(li)}function L0(t,e){if(t==="click")return Zs(e)}function j0(t,e){if(t==="input"||t==="change")return Zs(e)}function D0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:D0;function ui(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!la.call(e,i)||!at(t[i],e[i]))return!1}return!0}function nc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rc(t,e){var n=nc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function Pf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rf(){for(var t=window,e=vs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vs(t.document)}return e}function Pl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M0(t){var e=Rf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pf(n.ownerDocument.documentElement,n)){if(r!==null&&Pl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rc(n,s);var o=rc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U0=bt&&"documentMode"in document&&11>=document.documentMode,$n=null,Na=null,Wr=null,ba=!1;function ic(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||$n==null||$n!==vs(r)||(r=$n,"selectionStart"in r&&Pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&ui(Wr,r)||(Wr=r,r=Is(Na,"onSelect"),0<r.length&&(e=new Nl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$n)))}function Bi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fn={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Lo={},Af={};bt&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function eo(t){if(Lo[t])return Lo[t];if(!Fn[t])return t;var e=Fn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Af)return Lo[t]=e[n];return t}var Of=eo("animationend"),Lf=eo("animationiteration"),jf=eo("animationstart"),Df=eo("transitionend"),Mf=new Map,sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(t,e){Mf.set(t,e),On(e,[t])}for(var jo=0;jo<sc.length;jo++){var Do=sc[jo],z0=Do.toLowerCase(),$0=Do[0].toUpperCase()+Do.slice(1);un(z0,"on"+$0)}un(Of,"onAnimationEnd");un(Lf,"onAnimationIteration");un(jf,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Df,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function oc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zm(r,e,void 0,t),t.currentTarget=null}function Uf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;oc(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;oc(i,a,c),s=l}}}if(xs)throw t=Ea,xs=!1,Ea=null,t}function K(t,e){var n=e[Oa];n===void 0&&(n=e[Oa]=new Set);var r=t+"__bubble";n.has(r)||(zf(e,t,2,!1),n.add(r))}function Mo(t,e,n){var r=0;e&&(r|=4),zf(n,t,r,e)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function ci(t){if(!t[Hi]){t[Hi]=!0,Wd.forEach(function(n){n!=="selectionchange"&&(F0.has(n)||Mo(n,!1,t),Mo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hi]||(e[Hi]=!0,Mo("selectionchange",!1,e))}}function zf(t,e,n,r){switch(kf(e)){case 1:var i=t0;break;case 4:i=n0;break;default:i=Il}n=i.bind(null,e,n,t),i=void 0,!ka||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uo(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}lf(function(){var c=s,m=_l(n),h=[];e:{var f=Mf.get(t);if(f!==void 0){var y=Nl,w=t;switch(t){case"keypress":if(is(n)===0)break e;case"keydown":case"keyup":y=y0;break;case"focusin":w="focus",y=Ro;break;case"focusout":w="blur",y=Ro;break;case"beforeblur":case"afterblur":y=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=x0;break;case Of:case Lf:case jf:y=l0;break;case Df:y=k0;break;case"scroll":y=r0;break;case"wheel":y=S0;break;case"copy":case"cut":case"paste":y=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qu}var _=(e&4)!==0,R=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var d=c,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=ii(d,p),v!=null&&_.push(di(d,v,g)))),R)break;d=d.return}0<_.length&&(f=new y(f,w,null,n,m),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==xa&&(w=n.relatedTarget||n.fromElement)&&(wn(w)||w[Tt]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?wn(w):null,w!==null&&(R=Ln(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(_=Qu,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=qu,v="onPointerLeave",p="onPointerEnter",d="pointer"),R=y==null?f:Vn(y),g=w==null?f:Vn(w),f=new _(v,d+"leave",y,n,m),f.target=R,f.relatedTarget=g,v=null,wn(m)===c&&(_=new _(p,d+"enter",w,n,m),_.target=g,_.relatedTarget=R,v=_),R=v,y&&w)t:{for(_=y,p=w,d=0,g=_;g;g=Dn(g))d++;for(g=0,v=p;v;v=Dn(v))g++;for(;0<d-g;)_=Dn(_),d--;for(;0<g-d;)p=Dn(p),g--;for(;d--;){if(_===p||p!==null&&_===p.alternate)break t;_=Dn(_),p=Dn(p)}_=null}else _=null;y!==null&&ac(h,f,y,_,!1),w!==null&&R!==null&&ac(h,R,w,_,!0)}}e:{if(f=c?Vn(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var I=R0;else if(Zu(f))if(bf)I=j0;else{I=O0;var b=A0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=L0);if(I&&(I=I(t,c))){Nf(h,I,n,m);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&ma(f,"number",f.value)}switch(b=c?Vn(c):window,t){case"focusin":(Zu(b)||b.contentEditable==="true")&&($n=b,Na=c,Wr=null);break;case"focusout":Wr=Na=$n=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,ic(h,n,m);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":ic(h,n,m)}var T;if(Tl)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else zn?If(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Sf&&n.locale!=="ko"&&(zn||P!=="onCompositionStart"?P==="onCompositionEnd"&&zn&&(T=Ef()):(Qt=m,Cl="value"in Qt?Qt.value:Qt.textContent,zn=!0)),b=Is(c,P),0<b.length&&(P=new Yu(P,t,null,n,m),h.push({event:P,listeners:b}),T?P.data=T:(T=Cf(n),T!==null&&(P.data=T)))),(T=C0?N0(t,n):b0(t,n))&&(c=Is(c,"onBeforeInput"),0<c.length&&(m=new Yu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=T))}Uf(h,e)})}function di(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Is(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ii(t,n),s!=null&&r.unshift(di(t,s,i)),s=ii(t,e),s!=null&&r.push(di(t,s,i))),t=t.return}return r}function Dn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ac(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ii(n,s),l!=null&&o.unshift(di(n,l,a))):i||(l=ii(n,s),l!=null&&o.push(di(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var V0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function lc(t){return(typeof t=="string"?t:""+t).replace(V0,`
`).replace(B0,"")}function Wi(t,e,n){if(e=lc(e),lc(t)!==e&&n)throw Error(x(425))}function Cs(){}var Ta=null,Pa=null;function Ra(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(t){return uc.resolve(null).then(t).catch(G0)}:Aa;function G0(t){setTimeout(function(){throw t})}function zo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ai(e)}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yr=Math.random().toString(36).slice(2),dt="__reactFiber$"+yr,fi="__reactProps$"+yr,Tt="__reactContainer$"+yr,Oa="__reactEvents$"+yr,K0="__reactListeners$"+yr,Q0="__reactHandles$"+yr;function wn(t){var e=t[dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tt]||n[dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cc(t);t!==null;){if(n=t[dt])return n;t=cc(t)}return e}t=n,n=t.parentNode}return null}function Ii(t){return t=t[dt]||t[Tt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function to(t){return t[fi]||null}var La=[],Bn=-1;function cn(t){return{current:t}}function Q(t){0>Bn||(t.current=La[Bn],La[Bn]=null,Bn--)}function W(t,e){Bn++,La[Bn]=t.current,t.current=e}var ln={},ve=cn(ln),Pe=cn(!1),Cn=ln;function or(t,e){var n=t.type.contextTypes;if(!n)return ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Re(t){return t=t.childContextTypes,t!=null}function Ns(){Q(Pe),Q(ve)}function dc(t,e,n){if(ve.current!==ln)throw Error(x(168));W(ve,e),W(Pe,n)}function $f(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Am(t)||"Unknown",i));return ee({},n,r)}function bs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ln,Cn=ve.current,W(ve,t),W(Pe,Pe.current),!0}function fc(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=$f(t,e,Cn),r.__reactInternalMemoizedMergedChildContext=t,Q(Pe),Q(ve),W(ve,t)):Q(Pe),W(Pe,n)}var _t=null,no=!1,$o=!1;function Ff(t){_t===null?_t=[t]:_t.push(t)}function Y0(t){no=!0,Ff(t)}function dn(){if(!$o&&_t!==null){$o=!0;var t=0,e=z;try{var n=_t;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_t=null,no=!1}catch(i){throw _t!==null&&(_t=_t.slice(t+1)),ff(kl,dn),i}finally{z=e,$o=!1}}return null}var Hn=[],Wn=0,Ts=null,Ps=0,Be=[],He=0,Nn=null,Et=1,St="";function gn(t,e){Hn[Wn++]=Ps,Hn[Wn++]=Ts,Ts=t,Ps=e}function Vf(t,e,n){Be[He++]=Et,Be[He++]=St,Be[He++]=Nn,Nn=t;var r=Et;t=St;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-st(e)+i|n<<i|r,St=s+t}else Et=1<<s|n<<i|r,St=t}function Rl(t){t.return!==null&&(gn(t,1),Vf(t,1,0))}function Al(t){for(;t===Ts;)Ts=Hn[--Wn],Hn[Wn]=null,Ps=Hn[--Wn],Hn[Wn]=null;for(;t===Nn;)Nn=Be[--He],Be[He]=null,St=Be[--He],Be[He]=null,Et=Be[--He],Be[He]=null}var ze=null,Ue=null,q=!1,rt=null;function Bf(t,e){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Ue=Zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nn!==null?{id:Et,overflow:St}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Ue=null,!0):!1;default:return!1}}function ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Da(t){if(q){var e=Ue;if(e){var n=e;if(!hc(t,e)){if(ja(t))throw Error(x(418));e=Zt(n.nextSibling);var r=ze;e&&hc(t,e)?Bf(r,n):(t.flags=t.flags&-4097|2,q=!1,ze=t)}}else{if(ja(t))throw Error(x(418));t.flags=t.flags&-4097|2,q=!1,ze=t}}}function pc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function Gi(t){if(t!==ze)return!1;if(!q)return pc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ra(t.type,t.memoizedProps)),e&&(e=Ue)){if(ja(t))throw Hf(),Error(x(418));for(;e;)Bf(t,e),e=Zt(e.nextSibling)}if(pc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=ze?Zt(t.stateNode.nextSibling):null;return!0}function Hf(){for(var t=Ue;t;)t=Zt(t.nextSibling)}function ar(){Ue=ze=null,q=!1}function Ol(t){rt===null?rt=[t]:rt.push(t)}var q0=jt.ReactCurrentBatchConfig;function Pr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ki(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mc(t){var e=t._init;return e(t._payload)}function Wf(t){function e(p,d){if(t){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=rn(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,v){return d===null||d.tag!==6?(d=Ko(g,p.mode,v),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,v){var I=g.type;return I===Un?m(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$t&&mc(I)===d.type)?(v=i(d,g.props),v.ref=Pr(p,d,g),v.return=p,v):(v=ds(g.type,g.key,g.props,null,p.mode,v),v.ref=Pr(p,d,g),v.return=p,v)}function c(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Qo(g,p.mode,v),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function m(p,d,g,v,I){return d===null||d.tag!==7?(d=Sn(g,p.mode,v,I),d.return=p,d):(d=i(d,g),d.return=p,d)}function h(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ko(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Di:return g=ds(d.type,d.key,d.props,null,p.mode,g),g.ref=Pr(p,null,d),g.return=p,g;case Mn:return d=Qo(d,p.mode,g),d.return=p,d;case $t:var v=d._init;return h(p,v(d._payload),g)}if(jr(d)||Ir(d))return d=Sn(d,p.mode,g,null),d.return=p,d;Ki(p,d)}return null}function f(p,d,g,v){var I=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return g.key===I?l(p,d,g,v):null;case Mn:return g.key===I?c(p,d,g,v):null;case $t:return I=g._init,f(p,d,I(g._payload),v)}if(jr(g)||Ir(g))return I!==null?null:m(p,d,g,v,null);Ki(p,g)}return null}function y(p,d,g,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,a(d,p,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return p=p.get(v.key===null?g:v.key)||null,l(d,p,v,I);case Mn:return p=p.get(v.key===null?g:v.key)||null,c(d,p,v,I);case $t:var b=v._init;return y(p,d,g,b(v._payload),I)}if(jr(v)||Ir(v))return p=p.get(g)||null,m(d,p,v,I,null);Ki(d,v)}return null}function w(p,d,g,v){for(var I=null,b=null,T=d,P=d=0,H=null;T!==null&&P<g.length;P++){T.index>P?(H=T,T=null):H=T.sibling;var O=f(p,T,g[P],v);if(O===null){T===null&&(T=H);break}t&&T&&O.alternate===null&&e(p,T),d=s(O,d,P),b===null?I=O:b.sibling=O,b=O,T=H}if(P===g.length)return n(p,T),q&&gn(p,P),I;if(T===null){for(;P<g.length;P++)T=h(p,g[P],v),T!==null&&(d=s(T,d,P),b===null?I=T:b.sibling=T,b=T);return q&&gn(p,P),I}for(T=r(p,T);P<g.length;P++)H=y(T,p,P,g[P],v),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?P:H.key),d=s(H,d,P),b===null?I=H:b.sibling=H,b=H);return t&&T.forEach(function(j){return e(p,j)}),q&&gn(p,P),I}function _(p,d,g,v){var I=Ir(g);if(typeof I!="function")throw Error(x(150));if(g=I.call(g),g==null)throw Error(x(151));for(var b=I=null,T=d,P=d=0,H=null,O=g.next();T!==null&&!O.done;P++,O=g.next()){T.index>P?(H=T,T=null):H=T.sibling;var j=f(p,T,O.value,v);if(j===null){T===null&&(T=H);break}t&&T&&j.alternate===null&&e(p,T),d=s(j,d,P),b===null?I=j:b.sibling=j,b=j,T=H}if(O.done)return n(p,T),q&&gn(p,P),I;if(T===null){for(;!O.done;P++,O=g.next())O=h(p,O.value,v),O!==null&&(d=s(O,d,P),b===null?I=O:b.sibling=O,b=O);return q&&gn(p,P),I}for(T=r(p,T);!O.done;P++,O=g.next())O=y(T,p,P,O.value,v),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?P:O.key),d=s(O,d,P),b===null?I=O:b.sibling=O,b=O);return t&&T.forEach(function(ue){return e(p,ue)}),q&&gn(p,P),I}function R(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Un&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:e:{for(var I=g.key,b=d;b!==null;){if(b.key===I){if(I=g.type,I===Un){if(b.tag===7){n(p,b.sibling),d=i(b,g.props.children),d.return=p,p=d;break e}}else if(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$t&&mc(I)===b.type){n(p,b.sibling),d=i(b,g.props),d.ref=Pr(p,b,g),d.return=p,p=d;break e}n(p,b);break}else e(p,b);b=b.sibling}g.type===Un?(d=Sn(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=ds(g.type,g.key,g.props,null,p.mode,v),v.ref=Pr(p,d,g),v.return=p,p=v)}return o(p);case Mn:e:{for(b=g.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Qo(g,p.mode,v),d.return=p,p=d}return o(p);case $t:return b=g._init,R(p,d,b(g._payload),v)}if(jr(g))return w(p,d,g,v);if(Ir(g))return _(p,d,g,v);Ki(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=Ko(g,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return R}var lr=Wf(!0),Gf=Wf(!1),Rs=cn(null),As=null,Gn=null,Ll=null;function jl(){Ll=Gn=As=null}function Dl(t){var e=Rs.current;Q(Rs),t._currentValue=e}function Ma(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zn(t,e){As=t,Ll=Gn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Te=!0),t.firstContext=null)}function Ke(t){var e=t._currentValue;if(Ll!==t)if(t={context:t,memoizedValue:e,next:null},Gn===null){if(As===null)throw Error(x(308));Gn=t,As.dependencies={lanes:0,firstContext:t}}else Gn=Gn.next=t;return e}var xn=null;function Ml(t){xn===null?xn=[t]:xn.push(t)}function Kf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ml(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pt(t,r)}function Pt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Ul(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ml(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pt(t,n)}function ss(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,El(t,n)}}function gc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Os(t,e,n,r){var i=t.updateQueue;Ft=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,m=c=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(f=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=ee({},h,f);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,l=h):m=m.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(m===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Tn|=o,t.lanes=o,t.memoizedState=h}}function yc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ci={},pt=cn(Ci),hi=cn(Ci),pi=cn(Ci);function _n(t){if(t===Ci)throw Error(x(174));return t}function zl(t,e){switch(W(pi,e),W(hi,t),W(pt,Ci),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ya(e,t)}Q(pt),W(pt,e)}function ur(){Q(pt),Q(hi),Q(pi)}function Yf(t){_n(pi.current);var e=_n(pt.current),n=ya(e,t.type);e!==n&&(W(hi,t),W(pt,n))}function $l(t){hi.current===t&&(Q(pt),Q(hi))}var X=cn(0);function Ls(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fo=[];function Fl(){for(var t=0;t<Fo.length;t++)Fo[t]._workInProgressVersionPrimary=null;Fo.length=0}var os=jt.ReactCurrentDispatcher,Vo=jt.ReactCurrentBatchConfig,bn=0,Z=null,ae=null,ce=null,js=!1,Gr=!1,mi=0,J0=0;function me(){throw Error(x(321))}function Vl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Bl(t,e,n,r,i,s){if(bn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,os.current=t===null||t.memoizedState===null?tg:ng,t=n(r,i),Gr){s=0;do{if(Gr=!1,mi=0,25<=s)throw Error(x(301));s+=1,ce=ae=null,e.updateQueue=null,os.current=rg,t=n(r,i)}while(Gr)}if(os.current=Ds,e=ae!==null&&ae.next!==null,bn=0,ce=ae=Z=null,js=!1,e)throw Error(x(300));return t}function Hl(){var t=mi!==0;return mi=0,t}function ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=t:ce=ce.next=t,ce}function Qe(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=ce===null?Z.memoizedState:ce.next;if(e!==null)ce=e,ae=t;else{if(t===null)throw Error(x(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Z.memoizedState=ce=t:ce=ce.next=t}return ce}function gi(t,e){return typeof e=="function"?e(t):e}function Bo(t){var e=Qe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var m=c.lane;if((bn&m)===m)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Z.lanes|=m,Tn|=m}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,at(r,e.memoizedState)||(Te=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Tn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ho(t){var e=Qe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Te=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qf(){}function Jf(t,e){var n=Z,r=Qe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Te=!0),r=r.queue,Wl(eh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,yi(9,Zf.bind(null,n,r,i,e),void 0,null),de===null)throw Error(x(349));bn&30||Xf(n,e,i)}return i}function Xf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zf(t,e,n,r){e.value=n,e.getSnapshot=r,th(e)&&nh(t)}function eh(t,e,n){return n(function(){th(e)&&nh(t)})}function th(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function nh(t){var e=Pt(t,1);e!==null&&ot(e,t,1,-1)}function vc(t){var e=ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:t},e.queue=t,t=t.dispatch=eg.bind(null,Z,t),[e.memoizedState,t]}function yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rh(){return Qe().memoizedState}function as(t,e,n,r){var i=ut();Z.flags|=t,i.memoizedState=yi(1|e,n,void 0,r===void 0?null:r)}function ro(t,e,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Vl(r,o.deps)){i.memoizedState=yi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=yi(1|e,n,s,r)}function wc(t,e){return as(8390656,8,t,e)}function Wl(t,e){return ro(2048,8,t,e)}function ih(t,e){return ro(4,2,t,e)}function sh(t,e){return ro(4,4,t,e)}function oh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ah(t,e,n){return n=n!=null?n.concat([t]):null,ro(4,4,oh.bind(null,e,t),n)}function Gl(){}function lh(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uh(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ch(t,e,n){return bn&21?(at(n,e)||(n=mf(),Z.lanes|=n,Tn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Te=!0),t.memoizedState=n)}function X0(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=Vo.transition;Vo.transition={};try{t(!1),e()}finally{z=n,Vo.transition=r}}function dh(){return Qe().memoizedState}function Z0(t,e,n){var r=nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fh(t))hh(e,n);else if(n=Kf(t,e,n,r),n!==null){var i=_e();ot(n,t,r,i),ph(n,e,r)}}function eg(t,e,n){var r=nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fh(t))hh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=e.interleaved;l===null?(i.next=i,Ml(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Kf(t,e,i,r),n!==null&&(i=_e(),ot(n,t,r,i),ph(n,e,r))}}function fh(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function hh(t,e){Gr=js=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ph(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,El(t,n)}}var Ds={readContext:Ke,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},tg={readContext:Ke,useCallback:function(t,e){return ut().memoizedState=[t,e===void 0?null:e],t},useContext:Ke,useEffect:wc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,as(4194308,4,oh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return as(4194308,4,t,e)},useInsertionEffect:function(t,e){return as(4,2,t,e)},useMemo:function(t,e){var n=ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Z0.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ut();return t={current:t},e.memoizedState=t},useState:vc,useDebugValue:Gl,useDeferredValue:function(t){return ut().memoizedState=t},useTransition:function(){var t=vc(!1),e=t[0];return t=X0.bind(null,t[1]),ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ut();if(q){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),de===null)throw Error(x(349));bn&30||Xf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wc(eh.bind(null,r,s,t),[t]),r.flags|=2048,yi(9,Zf.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ut(),e=de.identifierPrefix;if(q){var n=St,r=Et;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ng={readContext:Ke,useCallback:lh,useContext:Ke,useEffect:Wl,useImperativeHandle:ah,useInsertionEffect:ih,useLayoutEffect:sh,useMemo:uh,useReducer:Bo,useRef:rh,useState:function(){return Bo(gi)},useDebugValue:Gl,useDeferredValue:function(t){var e=Qe();return ch(e,ae.memoizedState,t)},useTransition:function(){var t=Bo(gi)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:qf,useSyncExternalStore:Jf,useId:dh,unstable_isNewReconciler:!1},rg={readContext:Ke,useCallback:lh,useContext:Ke,useEffect:Wl,useImperativeHandle:ah,useInsertionEffect:ih,useLayoutEffect:sh,useMemo:uh,useReducer:Ho,useRef:rh,useState:function(){return Ho(gi)},useDebugValue:Gl,useDeferredValue:function(t){var e=Qe();return ae===null?e.memoizedState=t:ch(e,ae.memoizedState,t)},useTransition:function(){var t=Ho(gi)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:qf,useSyncExternalStore:Jf,useId:dh,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ua(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var io={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_e(),i=nn(t),s=Nt(r,i);s.payload=e,n!=null&&(s.callback=n),e=en(t,s,i),e!==null&&(ot(e,t,i,r),ss(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_e(),i=nn(t),s=Nt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=en(t,s,i),e!==null&&(ot(e,t,i,r),ss(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_e(),r=nn(t),i=Nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=en(t,i,r),e!==null&&(ot(e,t,r,n),ss(e,t,r))}};function xc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ui(n,r)||!ui(i,s):!0}function mh(t,e,n){var r=!1,i=ln,s=e.contextType;return typeof s=="object"&&s!==null?s=Ke(s):(i=Re(e)?Cn:ve.current,r=e.contextTypes,s=(r=r!=null)?or(t,i):ln),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=io,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _c(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&io.enqueueReplaceState(e,e.state,null)}function za(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ul(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ke(s):(s=Re(e)?Cn:ve.current,i.context=or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ua(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&io.enqueueReplaceState(i,i.state,null),Os(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function cr(t,e){try{var n="",r=e;do n+=Rm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $a(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function gh(t,e,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Us||(Us=!0,qa=r),$a(t,e)},n}function yh(t,e,n){n=Nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$a(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$a(t,e),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ig;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vg.bind(null,t,e,n),e.then(t,t))}function Ec(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nt(-1,1),e.tag=2,en(n,e,1))),n.lanes|=1),t)}var sg=jt.ReactCurrentOwner,Te=!1;function xe(t,e,n,r){e.child=t===null?Gf(e,null,n,r):lr(e,t.child,n,r)}function Ic(t,e,n,r,i){n=n.render;var s=e.ref;return Zn(e,i),r=Bl(t,e,n,r,s,i),n=Hl(),t!==null&&!Te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):(q&&n&&Rl(e),e.flags|=1,xe(t,e,r,i),e.child)}function Cc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!eu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vh(t,e,s,r,i)):(t=ds(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(o,r)&&t.ref===e.ref)return Rt(t,e,i)}return e.flags|=1,t=rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function vh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ui(s,r)&&t.ref===e.ref)if(Te=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Te=!0);else return e.lanes=t.lanes,Rt(t,e,i)}return Fa(t,e,n,r,i)}function wh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Qn,De),De|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,W(Qn,De),De|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(Qn,De),De|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,W(Qn,De),De|=r;return xe(t,e,i,n),e.child}function xh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fa(t,e,n,r,i){var s=Re(n)?Cn:ve.current;return s=or(e,s),Zn(e,i),n=Bl(t,e,n,r,s,i),r=Hl(),t!==null&&!Te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):(q&&r&&Rl(e),e.flags|=1,xe(t,e,n,i),e.child)}function Nc(t,e,n,r,i){if(Re(n)){var s=!0;bs(e)}else s=!1;if(Zn(e,i),e.stateNode===null)ls(t,e),mh(e,n,r),za(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=Re(n)?Cn:ve.current,c=or(e,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&_c(e,o,r,c),Ft=!1;var f=e.memoizedState;o.state=f,Os(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Pe.current||Ft?(typeof m=="function"&&(Ua(e,n,m,r),l=e.memoizedState),(a=Ft||xc(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qf(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=Re(n)?Cn:ve.current,l=or(e,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&_c(e,o,r,l),Ft=!1,f=e.memoizedState,o.state=f,Os(e,r,o,i);var w=e.memoizedState;a!==h||f!==w||Pe.current||Ft?(typeof y=="function"&&(Ua(e,n,y,r),w=e.memoizedState),(c=Ft||xc(e,n,c,r,f,w,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Va(t,e,n,r,s,i)}function Va(t,e,n,r,i,s){xh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fc(e,n,!1),Rt(t,e,s);r=e.stateNode,sg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=lr(e,t.child,null,s),e.child=lr(e,null,a,s)):xe(t,e,a,s),e.memoizedState=r.state,i&&fc(e,n,!0),e.child}function _h(t){var e=t.stateNode;e.pendingContext?dc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dc(t,e.context,!1),zl(t,e.containerInfo)}function bc(t,e,n,r,i){return ar(),Ol(i),e.flags|=256,xe(t,e,n,r),e.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Ha(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),W(X,i&1),t===null)return Da(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ao(o,r,0,null),t=Sn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ha(n),e.memoizedState=Ba,t):Kl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return og(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=Sn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ba,r}return s=t.child,t=s.sibling,r=rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kl(t,e){return e=ao({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qi(t,e,n,r){return r!==null&&Ol(r),lr(e,t.child,null,n),t=Kl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function og(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wo(Error(x(422))),Qi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ao({mode:"visible",children:r.children},i,0,null),s=Sn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&lr(e,t.child,null,o),e.child.memoizedState=Ha(o),e.memoizedState=Ba,s);if(!(e.mode&1))return Qi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Wo(s,r,void 0),Qi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Te||a){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pt(t,i),ot(r,t,i,-1))}return Zl(),r=Wo(Error(x(421))),Qi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=Zt(i.nextSibling),ze=e,q=!0,rt=null,t!==null&&(Be[He++]=Et,Be[He++]=St,Be[He++]=Nn,Et=t.id,St=t.overflow,Nn=e),e=Kl(e,r.children),e.flags|=4096,e)}function Tc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ma(t.return,e,n)}function Go(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Eh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xe(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tc(t,n,e);else if(t.tag===19)Tc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(W(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ls(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Go(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ls(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Go(e,!0,n,null,s);break;case"together":Go(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ls(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ag(t,e,n){switch(e.tag){case 3:_h(e),ar();break;case 5:Yf(e);break;case 1:Re(e.type)&&bs(e);break;case 4:zl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;W(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?kh(t,e,n):(W(X,X.current&1),t=Rt(t,e,n),t!==null?t.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Eh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,wh(t,e,n)}return Rt(t,e,n)}var Sh,Wa,Ih,Ch;Sh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wa=function(){};Ih=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_n(pt.current);var s=null;switch(n){case"input":i=ha(t,i),r=ha(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=ga(t,i),r=ga(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cs)}va(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ni.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ni.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&K("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ch=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lg(t,e,n){var r=e.pendingProps;switch(Al(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(e),null;case 1:return Re(e.type)&&Ns(),ge(e),null;case 3:return r=e.stateNode,ur(),Q(Pe),Q(ve),Fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(Za(rt),rt=null))),Wa(t,e),ge(e),null;case 5:$l(e);var i=_n(pi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ih(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ge(e),null}if(t=_n(pt.current),Gi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dt]=e,r[fi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)K(Mr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Uu(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":$u(r,s),K("invalid",r)}va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wi(r.textContent,a,t),i=["children",""+a]):ni.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Mi(r),zu(r,s,!0);break;case"textarea":Mi(r),Fu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dt]=e,t[fi]=r,Sh(t,e,!1,!1),e.stateNode=t;e:{switch(o=wa(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)K(Mr[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Uu(t,r),i=ha(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",t);break;case"textarea":$u(t,r),i=ga(t,r),K("invalid",t);break;default:i=r}va(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ef(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ri(t,l):typeof l=="number"&&ri(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ni.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",t):l!=null&&yl(t,s,l,o))}switch(n){case"input":Mi(t),zu(t,r,!1);break;case"textarea":Mi(t),Fu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ge(e),null;case 6:if(t&&e.stateNode!=null)Ch(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=_n(pi.current),_n(pt.current),Gi(e)){if(r=e.stateNode,n=e.memoizedProps,r[dt]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Wi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=e,e.stateNode=r}return ge(e),null;case 13:if(Q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ue!==null&&e.mode&1&&!(e.flags&128))Hf(),ar(),e.flags|=98560,s=!1;else if(s=Gi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[dt]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ge(e),s=!1}else rt!==null&&(Za(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?le===0&&(le=3):Zl())),e.updateQueue!==null&&(e.flags|=4),ge(e),null);case 4:return ur(),Wa(t,e),t===null&&ci(e.stateNode.containerInfo),ge(e),null;case 10:return Dl(e.type._context),ge(e),null;case 17:return Re(e.type)&&Ns(),ge(e),null;case 19:if(Q(X),s=e.memoizedState,s===null)return ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Rr(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ls(t),o!==null){for(e.flags|=128,Rr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return W(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ne()>dr&&(e.flags|=128,r=!0,Rr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ls(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return ge(e),null}else 2*ne()-s.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Rr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ne(),e.sibling=null,n=X.current,W(X,r?n&1|2:n&1),e):(ge(e),null);case 22:case 23:return Xl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?De&1073741824&&(ge(e),e.subtreeFlags&6&&(e.flags|=8192)):ge(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function ug(t,e){switch(Al(e),e.tag){case 1:return Re(e.type)&&Ns(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),Q(Pe),Q(ve),Fl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $l(e),null;case 13:if(Q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(X),null;case 4:return ur(),null;case 10:return Dl(e.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Yi=!1,ye=!1,cg=typeof WeakSet=="function"?WeakSet:Set,N=null;function Kn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Ga(t,e,n){try{n()}catch(r){te(t,e,r)}}var Pc=!1;function dg(t,e){if(Ta=Es,t=Rf(),Pl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,m=0,h=t,f=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++m===r&&(l=o),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:t,selectionRange:n},Es=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,R=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:tt(e.type,_),R);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){te(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return w=Pc,Pc=!1,w}function Kr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ga(e,n,s)}i=i.next}while(i!==r)}}function so(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ka(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nh(t){var e=t.alternate;e!==null&&(t.alternate=null,Nh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dt],delete e[fi],delete e[Oa],delete e[K0],delete e[Q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bh(t){return t.tag===5||t.tag===3||t.tag===4}function Rc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cs));else if(r!==4&&(t=t.child,t!==null))for(Qa(t,e,n),t=t.sibling;t!==null;)Qa(t,e,n),t=t.sibling}function Ya(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ya(t,e,n),t=t.sibling;t!==null;)Ya(t,e,n),t=t.sibling}var fe=null,nt=!1;function Ut(t,e,n){for(n=n.child;n!==null;)Th(t,e,n),n=n.sibling}function Th(t,e,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Js,n)}catch{}switch(n.tag){case 5:ye||Kn(n,e);case 6:var r=fe,i=nt;fe=null,Ut(t,e,n),fe=r,nt=i,fe!==null&&(nt?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(nt?(t=fe,n=n.stateNode,t.nodeType===8?zo(t.parentNode,n):t.nodeType===1&&zo(t,n),ai(t)):zo(fe,n.stateNode));break;case 4:r=fe,i=nt,fe=n.stateNode.containerInfo,nt=!0,Ut(t,e,n),fe=r,nt=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ga(n,e,o),i=i.next}while(i!==r)}Ut(t,e,n);break;case 1:if(!ye&&(Kn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,e,a)}Ut(t,e,n);break;case 21:Ut(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Ut(t,e,n),ye=r):Ut(t,e,n);break;default:Ut(t,e,n)}}function Ac(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cg),e.forEach(function(r){var i=xg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,nt=!1;break e;case 3:fe=a.stateNode.containerInfo,nt=!0;break e;case 4:fe=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(fe===null)throw Error(x(160));Th(s,o,i),fe=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ph(e,t),e=e.sibling}function Ph(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),lt(t),r&4){try{Kr(3,t,t.return),so(3,t)}catch(_){te(t,t.return,_)}try{Kr(5,t,t.return)}catch(_){te(t,t.return,_)}}break;case 1:et(e,t),lt(t),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(et(e,t),lt(t),r&512&&n!==null&&Kn(n,n.return),t.flags&32){var i=t.stateNode;try{ri(i,"")}catch(_){te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jd(i,s),wa(a,o);var c=wa(a,s);for(o=0;o<l.length;o+=2){var m=l[o],h=l[o+1];m==="style"?nf(i,h):m==="dangerouslySetInnerHTML"?ef(i,h):m==="children"?ri(i,h):yl(i,m,h,c)}switch(a){case"input":pa(i,s);break;case"textarea":Xd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Yn(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Yn(i,!!s.multiple,s.defaultValue,!0):Yn(i,!!s.multiple,s.multiple?[]:"",!1))}i[fi]=s}catch(_){te(t,t.return,_)}}break;case 6:if(et(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){te(t,t.return,_)}}break;case 3:if(et(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(e.containerInfo)}catch(_){te(t,t.return,_)}break;case 4:et(e,t),lt(t);break;case 13:et(e,t),lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ql=ne())),r&4&&Ac(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(c=ye)||m,et(e,t),ye=c):et(e,t),lt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!m&&t.mode&1)for(N=t,m=t.child;m!==null;){for(h=N=m;N!==null;){switch(f=N,y=f.child,f.tag){case 0:case 11:case 14:case 15:Kr(4,f,f.return);break;case 1:Kn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){te(r,n,_)}}break;case 5:Kn(f,f.return);break;case 22:if(f.memoizedState!==null){Lc(h);continue}}y!==null?(y.return=f,N=y):Lc(h)}m=m.sibling}e:for(m=null,h=t;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tf("display",o))}catch(_){te(t,t.return,_)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){te(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:et(e,t),lt(t),r&4&&Ac(t);break;case 21:break;default:et(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bh(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var s=Rc(t);Ya(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rc(t);Qa(t,a,o);break;default:throw Error(x(161))}}catch(l){te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fg(t,e,n){N=t,Rh(t)}function Rh(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Yi;var c=ye;if(Yi=o,(ye=l)&&!c)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?jc(i):l!==null?(l.return=o,N=l):jc(i);for(;s!==null;)N=s,Rh(s),s=s.sibling;N=i,Yi=a,ye=c}Oc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Oc(t)}}function Oc(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||so(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&ai(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ye||e.flags&512&&Ka(e)}catch(f){te(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Lc(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function jc(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{so(4,e)}catch(l){te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){te(e,i,l)}}var s=e.return;try{Ka(e)}catch(l){te(e,s,l)}break;case 5:var o=e.return;try{Ka(e)}catch(l){te(e,o,l)}}}catch(l){te(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var hg=Math.ceil,Ms=jt.ReactCurrentDispatcher,Ql=jt.ReactCurrentOwner,Ge=jt.ReactCurrentBatchConfig,U=0,de=null,oe=null,he=0,De=0,Qn=cn(0),le=0,vi=null,Tn=0,oo=0,Yl=0,Qr=null,be=null,ql=0,dr=1/0,xt=null,Us=!1,qa=null,tn=null,qi=!1,Yt=null,zs=0,Yr=0,Ja=null,us=-1,cs=0;function _e(){return U&6?ne():us!==-1?us:us=ne()}function nn(t){return t.mode&1?U&2&&he!==0?he&-he:q0.transition!==null?(cs===0&&(cs=mf()),cs):(t=z,t!==0||(t=window.event,t=t===void 0?16:kf(t.type)),t):1}function ot(t,e,n,r){if(50<Yr)throw Yr=0,Ja=null,Error(x(185));Ei(t,n,r),(!(U&2)||t!==de)&&(t===de&&(!(U&2)&&(oo|=n),le===4&&Bt(t,he)),Ae(t,r),n===1&&U===0&&!(e.mode&1)&&(dr=ne()+500,no&&dn()))}function Ae(t,e){var n=t.callbackNode;qm(t,e);var r=ks(t,t===de?he:0);if(r===0)n!==null&&Hu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hu(n),e===1)t.tag===0?Y0(Dc.bind(null,t)):Ff(Dc.bind(null,t)),W0(function(){!(U&6)&&dn()}),n=null;else{switch(gf(r)){case 1:n=kl;break;case 4:n=hf;break;case 16:n=_s;break;case 536870912:n=pf;break;default:n=_s}n=zh(n,Ah.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ah(t,e){if(us=-1,cs=0,U&6)throw Error(x(327));var n=t.callbackNode;if(er()&&t.callbackNode!==n)return null;var r=ks(t,t===de?he:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$s(t,r);else{e=r;var i=U;U|=2;var s=Lh();(de!==t||he!==e)&&(xt=null,dr=ne()+500,En(t,e));do try{gg();break}catch(a){Oh(t,a)}while(1);jl(),Ms.current=s,U=i,oe!==null?e=0:(de=null,he=0,e=le)}if(e!==0){if(e===2&&(i=Sa(t),i!==0&&(r=i,e=Xa(t,i))),e===1)throw n=vi,En(t,0),Bt(t,r),Ae(t,ne()),n;if(e===6)Bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!pg(i)&&(e=$s(t,r),e===2&&(s=Sa(t),s!==0&&(r=s,e=Xa(t,s))),e===1))throw n=vi,En(t,0),Bt(t,r),Ae(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:yn(t,be,xt);break;case 3:if(Bt(t,r),(r&130023424)===r&&(e=ql+500-ne(),10<e)){if(ks(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_e(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Aa(yn.bind(null,t,be,xt),e);break}yn(t,be,xt);break;case 4:if(Bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hg(r/1960))-r,10<r){t.timeoutHandle=Aa(yn.bind(null,t,be,xt),r);break}yn(t,be,xt);break;case 5:yn(t,be,xt);break;default:throw Error(x(329))}}}return Ae(t,ne()),t.callbackNode===n?Ah.bind(null,t):null}function Xa(t,e){var n=Qr;return t.current.memoizedState.isDehydrated&&(En(t,e).flags|=256),t=$s(t,e),t!==2&&(e=be,be=n,e!==null&&Za(e)),t}function Za(t){be===null?be=t:be.push.apply(be,t)}function pg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bt(t,e){for(e&=~Yl,e&=~oo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function Dc(t){if(U&6)throw Error(x(327));er();var e=ks(t,0);if(!(e&1))return Ae(t,ne()),null;var n=$s(t,e);if(t.tag!==0&&n===2){var r=Sa(t);r!==0&&(e=r,n=Xa(t,r))}if(n===1)throw n=vi,En(t,0),Bt(t,e),Ae(t,ne()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yn(t,be,xt),Ae(t,ne()),null}function Jl(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(dr=ne()+500,no&&dn())}}function Pn(t){Yt!==null&&Yt.tag===0&&!(U&6)&&er();var e=U;U|=1;var n=Ge.transition,r=z;try{if(Ge.transition=null,z=1,t)return t()}finally{z=r,Ge.transition=n,U=e,!(U&6)&&dn()}}function Xl(){De=Qn.current,Q(Qn)}function En(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,H0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ns();break;case 3:ur(),Q(Pe),Q(ve),Fl();break;case 5:$l(r);break;case 4:ur();break;case 13:Q(X);break;case 19:Q(X);break;case 10:Dl(r.type._context);break;case 22:case 23:Xl()}n=n.return}if(de=t,oe=t=rn(t.current,null),he=De=e,le=0,vi=null,Yl=oo=Tn=0,be=Qr=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function Oh(t,e){do{var n=oe;try{if(jl(),os.current=Ds,js){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}js=!1}if(bn=0,ce=ae=Z=null,Gr=!1,mi=0,Ql.current=null,n===null||n.return===null){le=1,vi=e,oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ec(o);if(y!==null){y.flags&=-257,Sc(y,o,a,s,e),y.mode&1&&kc(s,c,e),e=y,l=c;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){kc(s,c,e),Zl();break e}l=Error(x(426))}}else if(q&&a.mode&1){var R=Ec(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Sc(R,o,a,s,e),Ol(cr(l,a));break e}}s=l=cr(l,a),le!==4&&(le=2),Qr===null?Qr=[s]:Qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=gh(s,l,e);gc(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tn===null||!tn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=yh(s,a,e);gc(s,v);break e}}s=s.return}while(s!==null)}Dh(n)}catch(I){e=I,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Lh(){var t=Ms.current;return Ms.current=Ds,t===null?Ds:t}function Zl(){(le===0||le===3||le===2)&&(le=4),de===null||!(Tn&268435455)&&!(oo&268435455)||Bt(de,he)}function $s(t,e){var n=U;U|=2;var r=Lh();(de!==t||he!==e)&&(xt=null,En(t,e));do try{mg();break}catch(i){Oh(t,i)}while(1);if(jl(),U=n,Ms.current=r,oe!==null)throw Error(x(261));return de=null,he=0,le}function mg(){for(;oe!==null;)jh(oe)}function gg(){for(;oe!==null&&!Fm();)jh(oe)}function jh(t){var e=Uh(t.alternate,t,De);t.memoizedProps=t.pendingProps,e===null?Dh(t):oe=e,Ql.current=null}function Dh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ug(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,oe=null;return}}else if(n=lg(n,e,De),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);le===0&&(le=5)}function yn(t,e,n){var r=z,i=Ge.transition;try{Ge.transition=null,z=1,yg(t,e,n,r)}finally{Ge.transition=i,z=r}return null}function yg(t,e,n,r){do er();while(Yt!==null);if(U&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jm(t,s),t===de&&(oe=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qi||(qi=!0,zh(_s,function(){return er(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=z;z=1;var a=U;U|=4,Ql.current=null,dg(t,n),Ph(n,t),M0(Pa),Es=!!Ta,Pa=Ta=null,t.current=n,fg(n),Vm(),U=a,z=o,Ge.transition=s}else t.current=n;if(qi&&(qi=!1,Yt=t,zs=i),s=t.pendingLanes,s===0&&(tn=null),Wm(n.stateNode),Ae(t,ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Us)throw Us=!1,t=qa,qa=null,t;return zs&1&&t.tag!==0&&er(),s=t.pendingLanes,s&1?t===Ja?Yr++:(Yr=0,Ja=t):Yr=0,dn(),null}function er(){if(Yt!==null){var t=gf(zs),e=Ge.transition,n=z;try{if(Ge.transition=null,z=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,zs=0,U&6)throw Error(x(331));var i=U;for(U|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Kr(8,m,s)}var h=m.child;if(h!==null)h.return=m,N=h;else for(;N!==null;){m=N;var f=m.sibling,y=m.return;if(Nh(m),m===c){N=null;break}if(f!==null){f.return=y,N=f;break}N=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:so(9,a)}}catch(I){te(a,a.return,I)}if(a===o){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(U=i,dn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Js,t)}catch{}r=!0}return r}finally{z=n,Ge.transition=e}}return!1}function Mc(t,e,n){e=cr(n,e),e=gh(t,e,1),t=en(t,e,1),e=_e(),t!==null&&(Ei(t,1,e),Ae(t,e))}function te(t,e,n){if(t.tag===3)Mc(t,t,n);else for(;e!==null;){if(e.tag===3){Mc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){t=cr(n,t),t=yh(e,t,1),e=en(e,t,1),t=_e(),e!==null&&(Ei(e,1,t),Ae(e,t));break}}e=e.return}}function vg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_e(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>ne()-ql?En(t,0):Yl|=n),Ae(t,e)}function Mh(t,e){e===0&&(t.mode&1?(e=$i,$i<<=1,!($i&130023424)&&($i=4194304)):e=1);var n=_e();t=Pt(t,e),t!==null&&(Ei(t,e,n),Ae(t,n))}function wg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mh(t,n)}function xg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Mh(t,n)}var Uh;Uh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pe.current)Te=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Te=!1,ag(t,e,n);Te=!!(t.flags&131072)}else Te=!1,q&&e.flags&1048576&&Vf(e,Ps,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ls(t,e),t=e.pendingProps;var i=or(e,ve.current);Zn(e,n),i=Bl(null,e,r,t,i,n);var s=Hl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Re(r)?(s=!0,bs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ul(e),i.updater=io,e.stateNode=i,i._reactInternals=e,za(e,r,t,n),e=Va(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Rl(e),xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ls(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kg(r),t=tt(r,t),i){case 0:e=Fa(null,e,r,t,n);break e;case 1:e=Nc(null,e,r,t,n);break e;case 11:e=Ic(null,e,r,t,n);break e;case 14:e=Cc(null,e,r,tt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Fa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Nc(t,e,r,i,n);case 3:e:{if(_h(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qf(t,e),Os(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cr(Error(x(423)),e),e=bc(t,e,r,n,i);break e}else if(r!==i){i=cr(Error(x(424)),e),e=bc(t,e,r,n,i);break e}else for(Ue=Zt(e.stateNode.containerInfo.firstChild),ze=e,q=!0,rt=null,n=Gf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=Rt(t,e,n);break e}xe(t,e,r,n)}e=e.child}return e;case 5:return Yf(e),t===null&&Da(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ra(r,i)?o=null:s!==null&&Ra(r,s)&&(e.flags|=32),xh(t,e),xe(t,e,o,n),e.child;case 6:return t===null&&Da(e),null;case 13:return kh(t,e,n);case 4:return zl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lr(e,null,r,n):xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ic(t,e,r,i,n);case 7:return xe(t,e,e.pendingProps,n),e.child;case 8:return xe(t,e,e.pendingProps.children,n),e.child;case 12:return xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,W(Rs,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Pe.current){e=Rt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?l.next=l:(l.next=m.next,m.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ma(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ma(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zn(e,n),i=Ke(i),r=r(i),e.flags|=1,xe(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Cc(t,e,r,i,n);case 15:return vh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),ls(t,e),e.tag=1,Re(r)?(t=!0,bs(e)):t=!1,Zn(e,n),mh(e,r,i),za(e,r,i,n),Va(null,e,r,!0,t,n);case 19:return Eh(t,e,n);case 22:return wh(t,e,n)}throw Error(x(156,e.tag))};function zh(t,e){return ff(t,e)}function _g(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(t,e,n,r){return new _g(t,e,n,r)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kg(t){if(typeof t=="function")return eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wl)return 11;if(t===xl)return 14}return 2}function rn(t,e){var n=t.alternate;return n===null?(n=We(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ds(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")eu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Un:return Sn(n.children,i,s,e);case vl:o=8,i|=8;break;case ua:return t=We(12,n,e,i|2),t.elementType=ua,t.lanes=s,t;case ca:return t=We(13,n,e,i),t.elementType=ca,t.lanes=s,t;case da:return t=We(19,n,e,i),t.elementType=da,t.lanes=s,t;case Qd:return ao(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gd:o=10;break e;case Kd:o=9;break e;case wl:o=11;break e;case xl:o=14;break e;case $t:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=We(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sn(t,e,n,r){return t=We(7,t,r,e),t.lanes=n,t}function ao(t,e,n,r){return t=We(22,t,r,e),t.elementType=Qd,t.lanes=n,t.stateNode={isHidden:!1},t}function Ko(t,e,n){return t=We(6,t,null,e),t.lanes=n,t}function Qo(t,e,n){return e=We(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Eg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(t,e,n,r,i,s,o,a,l){return t=new Eg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=We(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(s),t}function Sg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $h(t){if(!t)return ln;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Re(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Re(n))return $f(t,n,e)}return e}function Fh(t,e,n,r,i,s,o,a,l){return t=tu(n,r,!0,t,i,s,o,a,l),t.context=$h(null),n=t.current,r=_e(),i=nn(n),s=Nt(r,i),s.callback=e??null,en(n,s,i),t.current.lanes=i,Ei(t,i,r),Ae(t,r),t}function lo(t,e,n,r){var i=e.current,s=_e(),o=nn(i);return n=$h(n),e.context===null?e.context=n:e.pendingContext=n,e=Nt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=en(i,e,o),t!==null&&(ot(t,i,o,s),ss(t,i,o)),o}function Fs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nu(t,e){Uc(t,e),(t=t.alternate)&&Uc(t,e)}function Ig(){return null}var Vh=typeof reportError=="function"?reportError:function(t){console.error(t)};function ru(t){this._internalRoot=t}uo.prototype.render=ru.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));lo(t,e,null,null)};uo.prototype.unmount=ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pn(function(){lo(null,t,null,null)}),e[Tt]=null}};function uo(t){this._internalRoot=t}uo.prototype.unstable_scheduleHydration=function(t){if(t){var e=wf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vt.length&&e!==0&&e<Vt[n].priority;n++);Vt.splice(n,0,t),n===0&&_f(t)}};function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function co(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zc(){}function Cg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fs(o);s.call(c)}}var o=Fh(e,r,t,0,null,!1,!1,"",zc);return t._reactRootContainer=o,t[Tt]=o.current,ci(t.nodeType===8?t.parentNode:t),Pn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fs(l);a.call(c)}}var l=tu(t,0,!1,null,null,!1,!1,"",zc);return t._reactRootContainer=l,t[Tt]=l.current,ci(t.nodeType===8?t.parentNode:t),Pn(function(){lo(e,l,n,r)}),l}function fo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fs(o);a.call(l)}}lo(e,o,t,i)}else o=Cg(n,e,t,i,r);return Fs(o)}yf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Dr(e.pendingLanes);n!==0&&(El(e,n|1),Ae(e,ne()),!(U&6)&&(dr=ne()+500,dn()))}break;case 13:Pn(function(){var r=Pt(t,1);if(r!==null){var i=_e();ot(r,t,1,i)}}),nu(t,1)}};Sl=function(t){if(t.tag===13){var e=Pt(t,134217728);if(e!==null){var n=_e();ot(e,t,134217728,n)}nu(t,134217728)}};vf=function(t){if(t.tag===13){var e=nn(t),n=Pt(t,e);if(n!==null){var r=_e();ot(n,t,e,r)}nu(t,e)}};wf=function(){return z};xf=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};_a=function(t,e,n){switch(e){case"input":if(pa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=to(r);if(!i)throw Error(x(90));qd(r),pa(r,i)}}}break;case"textarea":Xd(t,n);break;case"select":e=n.value,e!=null&&Yn(t,!!n.multiple,e,!1)}};of=Jl;af=Pn;var Ng={usingClientEntryPoint:!1,Events:[Ii,Vn,to,rf,sf,Jl]},Ar={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bg={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cf(t),t===null?null:t.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||Ig,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Js=Ji.inject(bg),ht=Ji}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng;Fe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(e))throw Error(x(200));return Sg(t,e,null,n)};Fe.createRoot=function(t,e){if(!iu(t))throw Error(x(299));var n=!1,r="",i=Vh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tu(t,1,!1,null,null,n,!1,r,i),t[Tt]=e.current,ci(t.nodeType===8?t.parentNode:t),new ru(e)};Fe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=cf(e),t=t===null?null:t.stateNode,t};Fe.flushSync=function(t){return Pn(t)};Fe.hydrate=function(t,e,n){if(!co(e))throw Error(x(200));return fo(null,t,e,!0,n)};Fe.hydrateRoot=function(t,e,n){if(!iu(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fh(e,null,t,1,n??null,i,!1,s,o),t[Tt]=e.current,ci(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uo(e)};Fe.render=function(t,e,n){if(!co(e))throw Error(x(200));return fo(null,t,e,!1,n)};Fe.unmountComponentAtNode=function(t){if(!co(t))throw Error(x(40));return t._reactRootContainer?(Pn(function(){fo(null,null,t,!1,function(){t._reactRootContainer=null,t[Tt]=null})}),!0):!1};Fe.unstable_batchedUpdates=Jl;Fe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!co(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return fo(t,e,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Bh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)}catch(t){console.error(t)}}Bh(),Vd.exports=Fe;var Tg=Vd.exports,$c=Tg;aa.createRoot=$c.createRoot,aa.hydrateRoot=$c.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=t=>{const e=Rg(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ag={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>E.createElement("svg",{ref:l,...Ag,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Hh("lucide",i),...!s&&!Og(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,m])=>E.createElement(c,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(t,e)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(Lg,{ref:s,iconNode:e,className:Hh(`lucide-${Pg(Fc(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Fc(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Wh=F("chevron-right",jg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gh=F("circle-alert",Dg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vt=F("circle-check",Mg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],zg=F("circle-pause",Ug);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fg=F("circle-play",$g);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Yo=F("crown",Vg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Vc=F("download",Bg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Wg=F("eye",Hg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Kg=F("file-code",Gg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],qo=F("headset",Qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Jo=F("history",Yg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Bc=F("loader-circle",qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],el=F("lock",Jg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Hc=F("log-out",Xg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Wc=F("mail",Zg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],t1=F("mic-vocal",e1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],r1=F("panels-top-left",n1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],s1=F("pause",i1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Gc=F("phone",o1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Kc=F("play",a1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],u1=F("sparkles",l1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qc=F("star",c1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],f1=F("toggle-left",d1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],p1=F("toggle-right",h1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],fs=F("user",m1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],y1=F("volume-2",g1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yc=F("x",v1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],qr=F("zap",w1),x1=()=>{};/**
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
 */const Kh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,m=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(f=64)),r.push(n[m],n[h],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new k1;const f=s<<2|a>>4;if(r.push(f),c!==64){const y=a<<4&240|c>>2;if(r.push(y),h!==64){const w=c<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class k1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E1=function(t){const e=Kh(t);return Qh.encodeByteArray(e,!0)},Yh=function(t){return E1(t).replace(/\./g,"")},qh=function(t){try{return Qh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function S1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const I1=()=>S1().__FIREBASE_DEFAULTS__,C1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},N1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qh(t[1]);return e&&JSON.parse(e)},su=()=>{try{return x1()||I1()||C1()||N1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},b1=t=>{var e,n;return(n=(e=su())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Jh=()=>{var t;return(t=su())==null?void 0:t.config},Xh=t=>{var e;return(e=su())==null?void 0:e[`_${t}`]};/**
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
 */class T1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ho(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function P1(t){return(await fetch(t,{credentials:"include"})).ok}const Jr={};function R1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Jr))Jr[e]?t.emulator.push(e):t.prod.push(e);return t}function A1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qc=!1;function O1(t,e){if(typeof window>"u"||typeof document>"u"||!ho(window.location.host)||Jr[t]===e||Jr[t]||qc)return;Jr[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=R1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,y){f.setAttribute("width","24"),f.setAttribute("id",y),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{qc=!0,o()},f}function m(f,y){f.setAttribute("id",y),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=A1(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),R=document.getElementById(_)||document.createElement("a"),p=n("preprendIcon"),d=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const g=f.element;a(g),m(R,_);const v=c();l(d,p),g.append(d,w,R,v),document.body.appendChild(g)}s?(w.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function j1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function D1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U1(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z1(){try{return typeof indexedDB=="object"}catch{return!1}}function $1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const F1="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=F1,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?V1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,r)}}function V1(t,e){return t.replace(B1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const B1=/\{\$([^}]+)}/g;function H1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jc(s)&&Jc(o)){if(!fr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jc(t){return t!==null&&typeof t=="object"}/**
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
 */function vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ur(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function W1(t,e){const n=new G1(t,e);return n.subscribe.bind(n)}class G1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xo),i.error===void 0&&(i.error=Xo),i.complete===void 0&&(i.complete=Xo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xo(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class Q1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new T1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(q1(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Y1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Y1(t){return t===vn?void 0:t}function q1(t){return t.instantiationMode==="EAGER"}/**
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
 */class J1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Q1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const X1={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Z1=B.INFO,ey={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},ty=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ey[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zh{constructor(e){this.name=e,this._logLevel=Z1,this._logHandler=ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?X1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const ny=(t,e)=>e.some(n=>t instanceof n);let Xc,Zc;function ry(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iy(){return Zc||(Zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ep=new WeakMap,tl=new WeakMap,tp=new WeakMap,Zo=new WeakMap,ou=new WeakMap;function sy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ep.set(n,t)}).catch(()=>{}),ou.set(e,t),e}function oy(t){if(tl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tl.set(t,e)}let nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ay(t){nl=t(nl)}function ly(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ea(this),e,...n);return tp.set(r,e.sort?e.sort():[e]),sn(r)}:iy().includes(t)?function(...e){return t.apply(ea(this),e),sn(ep.get(this))}:function(...e){return sn(t.apply(ea(this),e))}}function uy(t){return typeof t=="function"?ly(t):(t instanceof IDBTransaction&&oy(t),ny(t,ry())?new Proxy(t,nl):t)}function sn(t){if(t instanceof IDBRequest)return sy(t);if(Zo.has(t))return Zo.get(t);const e=uy(t);return e!==t&&(Zo.set(t,e),ou.set(e,t)),e}const ea=t=>ou.get(t);function cy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dy=["get","getKey","getAll","getAllKeys","count"],fy=["put","add","delete","clear"],ta=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ta.get(e))return ta.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ta.set(e,s),s}ay(t=>({...t,get:(e,n,r)=>ed(e,n)||t.get(e,n,r),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
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
 */class hy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(py(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function py(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rl="@firebase/app",td="0.14.8";/**
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
 */const At=new Zh("@firebase/app"),my="@firebase/app-compat",gy="@firebase/analytics-compat",yy="@firebase/analytics",vy="@firebase/app-check-compat",wy="@firebase/app-check",xy="@firebase/auth",_y="@firebase/auth-compat",ky="@firebase/database",Ey="@firebase/data-connect",Sy="@firebase/database-compat",Iy="@firebase/functions",Cy="@firebase/functions-compat",Ny="@firebase/installations",by="@firebase/installations-compat",Ty="@firebase/messaging",Py="@firebase/messaging-compat",Ry="@firebase/performance",Ay="@firebase/performance-compat",Oy="@firebase/remote-config",Ly="@firebase/remote-config-compat",jy="@firebase/storage",Dy="@firebase/storage-compat",My="@firebase/firestore",Uy="@firebase/ai",zy="@firebase/firestore-compat",$y="firebase",Fy="12.9.0";/**
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
 */const il="[DEFAULT]",Vy={[rl]:"fire-core",[my]:"fire-core-compat",[yy]:"fire-analytics",[gy]:"fire-analytics-compat",[wy]:"fire-app-check",[vy]:"fire-app-check-compat",[xy]:"fire-auth",[_y]:"fire-auth-compat",[ky]:"fire-rtdb",[Ey]:"fire-data-connect",[Sy]:"fire-rtdb-compat",[Iy]:"fire-fn",[Cy]:"fire-fn-compat",[Ny]:"fire-iid",[by]:"fire-iid-compat",[Ty]:"fire-fcm",[Py]:"fire-fcm-compat",[Ry]:"fire-perf",[Ay]:"fire-perf-compat",[Oy]:"fire-rc",[Ly]:"fire-rc-compat",[jy]:"fire-gcs",[Dy]:"fire-gcs-compat",[My]:"fire-fst",[zy]:"fire-fst-compat",[Uy]:"fire-vertex","fire-js":"fire-js",[$y]:"fire-js-all"};/**
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
 */const Vs=new Map,By=new Map,sl=new Map;function nd(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(sl.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,t);for(const n of Vs.values())nd(n,t);for(const n of By.values())nd(n,t);return!0}function np(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Hy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Ni("app","Firebase",Hy);/**
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
 */class Wy{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=Fy;function rp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:il,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=Jh()),!n)throw on.create("no-options");const s=Vs.get(i);if(s){if(fr(n,s.options)&&fr(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new J1(i);for(const l of sl.values())o.addComponent(l);const a=new Wy(n,r,o);return Vs.set(i,a),a}function Gy(t=il){const e=Vs.get(t);if(!e&&t===il&&Jh())return rp();if(!e)throw on.create("no-app",{appName:t});return e}function tr(t,e,n){let r=Vy[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(o.join(" "));return}wi(new hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ky="firebase-heartbeat-database",Qy=1,xi="firebase-heartbeat-store";let na=null;function ip(){return na||(na=cy(Ky,Qy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),na}async function Yy(t){try{const n=(await ip()).transaction(xi),r=await n.objectStore(xi).get(sp(t));return await n.done,r}catch(e){if(e instanceof fn)At.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(n.message)}}}async function rd(t,e){try{const r=(await ip()).transaction(xi,"readwrite");await r.objectStore(xi).put(e,sp(t)),await r.done}catch(n){if(n instanceof fn)At.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(r.message)}}}function sp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qy=1024,Jy=30;class Xy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ev(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=id();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Jy){const o=tv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){At.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=id(),{heartbeatsToSend:r,unsentEntries:i}=Zy(this._heartbeatsCache.heartbeats),s=Yh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return At.warn(n),""}}}function id(){return new Date().toISOString().substring(0,10)}function Zy(t,e=qy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ev{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z1()?$1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sd(t){return Yh(JSON.stringify({version:2,heartbeats:t})).length}function tv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function nv(t){wi(new hr("platform-logger",e=>new hy(e),"PRIVATE")),wi(new hr("heartbeat",e=>new Xy(e),"PRIVATE")),tr(rl,td,t),tr(rl,td,"esm2020"),tr("fire-js","")}nv("");var rv="firebase",iv="12.9.0";/**
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
 */tr(rv,iv,"app");function op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sv=op,ap=new Ni("auth","Firebase",op());/**
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
 */const Bs=new Zh("@firebase/auth");function ov(t,...e){Bs.logLevel<=B.WARN&&Bs.warn(`Auth (${bi}): ${t}`,...e)}function hs(t,...e){Bs.logLevel<=B.ERROR&&Bs.error(`Auth (${bi}): ${t}`,...e)}/**
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
 */function Ye(t,...e){throw lu(t,...e)}function Oe(t,...e){return lu(t,...e)}function au(t,e,n){const r={...sv(),[e]:n};return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function mt(t){return au(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function av(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(t,"argument-error"),au(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ap.create(t,...e)}function S(t,e,...n){if(!t)throw lu(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hs(e),new Error(e)}function Ot(t,e){t||It(e)}/**
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
 */function ol(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function lp(){return od()==="http:"||od()==="https:"}function od(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function lv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lp()||D1()||"connection"in navigator)?navigator.onLine:!0}function uv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=L1()||M1()}get(){return lv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uu(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class up{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fv=new Ti(3e4,6e4);function Ie(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Le(t,e,n,r,i={}){return cp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return j1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ho(t.emulatorConfig.host)&&(c.credentials="include"),up.fetch()(await dp(t,t.config.apiHost,n,a),c)})}async function cp(t,e,n){t._canInitEmulator=!1;const r={...cv,...e};try{const i=new pv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $r(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $r(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $r(t,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw au(t,m,c);Ye(t,m)}}catch(i){if(i instanceof fn)throw i;Ye(t,"network-request-failed",{message:String(i)})}}async function hn(t,e,n,r,i={}){const s=await Le(t,e,n,r,i);return"mfaPendingCredential"in s&&Ye(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function dp(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?uu(t.config,i):`${t.config.apiScheme}://${i}`;return dv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function hv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),fv.get())})}}function $r(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Oe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function ad(t){return t!==void 0&&t.getResponse!==void 0}function ld(t){return t!==void 0&&t.enterprise!==void 0}class fp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function mv(t){return(await Le(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hp(t,e){return Le(t,"GET","/v2/recaptchaConfig",Ie(t,e))}/**
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
 */async function gv(t,e){return Le(t,"POST","/v1/accounts:delete",e)}async function Hs(t,e){return Le(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yv(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=cu(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xr(ra(i.auth_time)),issuedAtTime:Xr(ra(i.iat)),expirationTime:Xr(ra(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ra(t){return Number(t)*1e3}function cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hs("JWT malformed, contained fewer than 3 sections"),null;try{const i=qh(n);return i?JSON.parse(i):(hs("Failed to decode base64 JWT payload"),null)}catch(i){return hs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ud(t){const e=cu(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&vv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ws(t){var h;const e=t.auth,n=await t.getIdToken(),r=await pr(t,Hs(e,{idToken:n}));S(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?pp(i.providerUserInfo):[],o=_v(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,m)}async function xv(t){const e=qe(t);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _v(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function kv(t,e){const n=await cp(t,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await dp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ho(t.emulatorConfig.host)&&(l.credentials="include"),up.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ev(t,e){return Le(t,"POST","/v2/accounts:revokeToken",Ie(t,e))}/**
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
 */class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nr;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function zt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new wv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new al(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yv(this,e)}reload(){return xv(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await pr(this,gv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:y,providerData:w,stsTokenManager:_}=n;S(h&&_,e,"internal-error");const R=nr.fromJSON(this.name,_);S(typeof h=="string",e,"internal-error"),zt(r,e.name),zt(i,e.name),S(typeof f=="boolean",e,"internal-error"),S(typeof y=="boolean",e,"internal-error"),zt(s,e.name),zt(o,e.name),zt(a,e.name),zt(l,e.name),zt(c,e.name),zt(m,e.name);const p=new it({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:R,createdAt:c,lastLoginAt:m});return w&&Array.isArray(w)&&(p.providerData=w.map(d=>({...d}))),l&&(p._redirectEventId=l),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new nr;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ws(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new nr;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const cd=new Map;function Ct(t){Ot(t instanceof Function,"Expected a class definition");let e=cd.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cd.set(t,e),e)}/**
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
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mp.type="NONE";const dd=mp;/**
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
 */function ps(t,e,n){return`firebase:${t}:${e}:${n}`}class rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ps(this.userKey,i.apiKey,s),this.fullPersistenceKey=ps("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hs(this.auth,{idToken:e}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rr(Ct(dd),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ct(dd);const o=ps(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const m=await c._get(o);if(m){let h;if(typeof m=="string"){const f=await Hs(e,{idToken:m}).catch(()=>{});if(!f)break;h=await it._fromGetAccountInfoResponse(e,f,m)}else h=it._fromJSON(e,m);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new rr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rr(s,e,r))}}/**
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
 */function fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_p(e))return"Blackberry";if(kp(e))return"Webos";if(yp(e))return"Safari";if((e.includes("chrome/")||vp(e))&&!e.includes("edge/"))return"Chrome";if(xp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gp(t=ke()){return/firefox\//i.test(t)}function yp(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vp(t=ke()){return/crios\//i.test(t)}function wp(t=ke()){return/iemobile/i.test(t)}function xp(t=ke()){return/android/i.test(t)}function _p(t=ke()){return/blackberry/i.test(t)}function kp(t=ke()){return/webos/i.test(t)}function du(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sv(t=ke()){var e;return du(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Iv(){return U1()&&document.documentMode===10}function Ep(t=ke()){return du(t)||xp(t)||kp(t)||_p(t)||/windows phone/i.test(t)||wp(t)}/**
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
 */function Sp(t,e=[]){let n;switch(t){case"Browser":n=fd(ke());break;case"Worker":n=`${fd(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
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
 */class Cv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Nv(t,e={}){return Le(t,"GET","/v2/passwordPolicy",Ie(t,e))}/**
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
 */const bv=6;class Tv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Pv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hd(this),this.idTokenSubscription=new hd(this),this.beforeStateQueue=new Cv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ap,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hs(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(mt(this));const n=e?qe(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nv(this),n=new Tv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ev(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ov(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Je(t){return qe(t)}class hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=W1(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rv(t){Pi=t}function fu(t){return Pi.loadJS(t)}function Av(){return Pi.recaptchaV2Script}function Ov(){return Pi.recaptchaEnterpriseScript}function Lv(){return Pi.gapiScript}function Ip(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const jv=500,Dv=6e4,Xi=1e12;class Mv{constructor(e){this.auth=e,this.counter=Xi,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new $v(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Xi;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Xi;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Xi;return(r=this._widgets.get(n))==null||r.execute(),""}}class Uv{constructor(){this.enterprise=new zv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $v{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Fv(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Dv)},jv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Fv(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Vv="recaptcha-enterprise",Zr="NO_RECAPTCHA";class Cp{constructor(e){this.type=Vv,this.auth=Je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fp(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Zr)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Uv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ld(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ov();l.length!==0&&(l+=a),fu(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Or(t,e,n,r=!1,i=!1){const s=new Cp(t);let o;if(i)o=Zr;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function In(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Or(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Or(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Or(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Or(t,e,n,!1,!0);return r(t,m)}return Promise.reject(l)})}else{const a=await Or(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Bv(t){const e=Je(t),n=await hp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new fp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Cp(e).verify()}/**
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
 */function Hv(t,e){const n=np(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fr(s,e??{}))return i;Ye(i,"already-initialized")}return n.initialize({options:e})}function Wv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gv(t,e,n){const r=Je(t);S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Np(e),{host:o,port:a}=Kv(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){S(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),S(fr(c,r.config.emulator)&&fr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,ho(o)?(P1(`${s}//${o}${l}`),O1("Auth",!0)):i||Qv()}function Np(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kv(t){const e=Np(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pd(o)}}}function pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class po{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function Yv(t,e){return Le(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qv(t,e){return hn(t,"POST","/v1/accounts:signInWithPassword",Ie(t,e))}async function Jv(t,e){return Le(t,"POST","/v1/accounts:sendOobCode",Ie(t,e))}async function Xv(t,e){return Jv(t,e)}/**
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
 */async function Zv(t,e){return hn(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}async function ew(t,e){return hn(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}/**
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
 */class _i extends po{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,n,"signInWithPassword",qv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Zv(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,r,"signUpPassword",Yv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ew(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ir(t,e){return hn(t,"POST","/v1/accounts:signInWithIdp",Ie(t,e))}/**
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
 */const tw="http://localhost";class Rn extends po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Rn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ir(e,n)}buildRequest(){const e={requestUri:tw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vr(n)}return e}}/**
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
 */async function md(t,e){return Le(t,"POST","/v1/accounts:sendVerificationCode",Ie(t,e))}async function nw(t,e){return hn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e))}async function rw(t,e){const n=await hn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e));if(n.temporaryProof)throw $r(t,"account-exists-with-different-credential",n);return n}const iw={USER_NOT_FOUND:"user-not-found"};async function sw(t,e){const n={...e,operation:"REAUTH"};return hn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,n),iw)}/**
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
 */class ei extends po{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ei({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ei({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return nw(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return rw(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return sw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ei({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function ow(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aw(t){const e=Ur(zr(t)).link,n=e?Ur(zr(e)).deep_link_id:null,r=Ur(zr(t)).deep_link_id;return(r?Ur(zr(r)).link:null)||r||n||e||t}class hu{constructor(e){const n=Ur(zr(e)),r=n.apiKey??null,i=n.oobCode??null,s=ow(n.mode??null);S(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=aw(e);try{return new hu(n)}catch{return null}}}/**
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
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(e,n){return _i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hu.parseLink(n);return S(r,"argument-error"),_i._fromEmailAndCode(e,r.code,r.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends pu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends Ri{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class kt extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
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
 */class Wt extends Ri{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class Gt extends Ri{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
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
 */async function lw(t,e){return hn(t,"POST","/v1/accounts:signUp",Ie(t,e))}/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),o=gd(r);return new An({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gd(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gs extends fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gs(e,n,r,i)}}function bp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gs._fromErrorAndOperation(t,s,e,r):s})}async function uw(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
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
 */async function cw(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(mt(r));const i="reauthenticate";try{const s=await pr(t,bp(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=cu(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),An._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
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
 */async function Tp(t,e,n=!1){if(Me(t.app))return Promise.reject(mt(t));const r="signIn",i=await bp(t,r,e),s=await An._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Pp(t,e){return Tp(Je(t),e)}/**
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
 */function dw(t,e,n){var r;S(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),S(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Rp(t){const e=Je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fw(t,e,n){const r=Je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&dw(r,i,n),await In(r,i,"getOobCode",Xv,"EMAIL_PASSWORD_PROVIDER")}async function hw(t,e,n){if(Me(t.app))return Promise.reject(mt(t));const r=Je(t),o=await In(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Rp(t),l}),a=await An._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function pw(t,e,n){return Me(t.app)?Promise.reject(mt(t)):Pp(qe(t),wr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rp(t),r})}/**
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
 */async function mw(t,e){return Le(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pr(r,mw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function yw(t,e){return qe(t).setPersistence(e)}function vw(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function ww(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function xw(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function yd(t){return qe(t).signOut()}/**
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
 */function vd(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:start",Ie(t,e))}const Ks="__sak";/**
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
 */class Ap{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _w=1e3,kw=10;class Op extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Iv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Op.type="LOCAL";const Lp=Op;/**
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
 */class jp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jp.type="SESSION";const mu=jp;/**
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
 */function Ew(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Ew(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mo.receivers=[];/**
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
 */function gu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=gu("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function se(){return window}function Iw(t){se().location.href=t}/**
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
 */function yu(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Cw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bw(){return yu()?self:null}/**
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
 */const Dp="firebaseLocalStorageDb",Tw=1,Qs="firebaseLocalStorage",Mp="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function go(t,e){return t.transaction([Qs],e?"readwrite":"readonly").objectStore(Qs)}function Pw(){const t=indexedDB.deleteDatabase(Dp);return new Ai(t).toPromise()}function ll(){const t=indexedDB.open(Dp,Tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qs,{keyPath:Mp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qs)?e(r):(r.close(),await Pw(),e(await ll()))})})}async function wd(t,e,n){const r=go(t,!0).put({[Mp]:e,value:n});return new Ai(r).toPromise()}async function Rw(t,e){const n=go(t,!1).get(e),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=go(t,!0).delete(e);return new Ai(n).toPromise()}const Aw=800,Ow=3;class Up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ow)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mo._getInstance(bw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Cw(),!this.activeServiceWorker)return;this.sender=new Sw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ll();return await wd(e,Ks,"1"),await xd(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=go(i,!1).getAll();return new Ai(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Up.type="LOCAL";const Lw=Up;/**
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
 */function _d(t,e){return Le(t,"POST","/v2/accounts/mfaSignIn:start",Ie(t,e))}/**
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
 */const ia=Ip("rcb"),jw=new Ti(3e4,6e4);class Dw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=se().grecaptcha)!=null&&e.render)}load(e,n=""){return S(Mw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&ad(se().grecaptcha)?Promise.resolve(se().grecaptcha):new Promise((r,i)=>{const s=se().setTimeout(()=>{i(Oe(e,"network-request-failed"))},jw.get());se()[ia]=()=>{se().clearTimeout(s),delete se()[ia];const a=se().grecaptcha;if(!a||!ad(a)){i(Oe(e,"internal-error"));return}const l=a.render;a.render=(c,m)=>{const h=l(c,m);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Av()}?${vr({onload:ia,render:"explicit",hl:n})}`;fu(o).catch(()=>{clearTimeout(s),i(Oe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=se().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Uw{async load(e){return new Mv(e)}clearedOneInstance(){}}/**
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
 */const ti="recaptcha",zw={theme:"light",type:"image"};class $w{constructor(e,n,r={...zw}){this.parameters=r,this.type=ti,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Je(e),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Uw:new Dw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(lp()&&!yu(),this.auth,"internal-error"),await Fw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await mv(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Fw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Vw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ei._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Bw(t,e,n){if(Me(t.app))return Promise.reject(mt(t));const r=Je(t),i=await Hw(r,e,qe(n));return new Vw(i,s=>Pp(r,s))}async function Hw(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Bv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){S(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await In(t,o,"mfaSmsEnrollment",async(m,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Zr){S((n==null?void 0:n.type)===ti,m,"argument-error");const f=await sa(m,h,n);return vd(m,f)}return vd(m,h)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{S(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;S(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await In(t,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===Zr){S((n==null?void 0:n.type)===ti,h,"argument-error");const y=await sa(h,f,n);return _d(h,y)}return _d(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await In(t,s,"sendVerificationCode",async(c,m)=>{if(m.captchaResponse===Zr){S((n==null?void 0:n.type)===ti,c,"argument-error");const h=await sa(c,m,n);return md(c,h)}return md(c,m)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function sa(t,e,n){S(n.type===ti,t,"argument-error");const r=await n.verify();S(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function zp(t,e){return e?Ct(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vu extends po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ww(t){return Tp(t.auth,new vu(t),t.bypassAuthState)}function Gw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),cw(n,new vu(t),t.bypassAuthState)}async function Kw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),uw(n,new vu(t),t.bypassAuthState)}/**
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
 */class $p{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ww;case"linkViaPopup":case"linkViaRedirect":return Kw;case"reauthViaPopup":case"reauthViaRedirect":return Gw;default:Ye(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qw=new Ti(2e3,1e4);async function Yw(t,e,n){if(Me(t.app))return Promise.reject(Oe(t,"operation-not-supported-in-this-environment"));const r=Je(t);av(t,e,pu);const i=zp(r,n);return new kn(r,"signInViaPopup",e,i).executeNotNull()}class kn extends $p{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qw.get())};e()}}kn.currentPopupAction=null;/**
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
 */const qw="pendingRedirect",ms=new Map;class Jw extends $p{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ms.get(this.auth._key());if(!e){try{const r=await Xw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ms.set(this.auth._key(),e)}return this.bypassAuthState||ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xw(t,e){const n=tx(e),r=ex(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Zw(t,e){ms.set(t._key(),e)}function ex(t){return Ct(t._redirectPersistence)}function tx(t){return ps(qw,t.config.apiKey,t.name)}async function nx(t,e,n=!1){if(Me(t.app))return Promise.reject(mt(t));const r=Je(t),i=zp(r,e),o=await new Jw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rx=10*60*1e3;class ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Oe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rx&&this.cachedEventUids.clear(),this.cachedEventUids.has(kd(e))}saveEventToCache(e){this.cachedEventUids.add(kd(e)),this.lastProcessedEventTime=Date.now()}}function kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(t);default:return!1}}/**
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
 */async function ox(t,e={}){return Le(t,"GET","/v1/projects",e)}/**
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
 */const ax=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lx=/^https?/;async function ux(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ox(t);for(const n of e)try{if(cx(n))return}catch{}Ye(t,"unauthorized-domain")}function cx(t){const e=ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lx.test(n))return!1;if(ax.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const dx=new Ti(3e4,6e4);function Ed(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fx(t){return new Promise((e,n)=>{var i,s,o;function r(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),n(Oe(t,"network-request-failed"))},timeout:dx.get()})}if((s=(i=se().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=se().gapi)!=null&&o.load)r();else{const a=Ip("iframefcb");return se()[a]=()=>{gapi.load?r():n(Oe(t,"network-request-failed"))},fu(`${Lv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gs=null,e})}let gs=null;function hx(t){return gs=gs||fx(t),gs}/**
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
 */const px=new Ti(5e3,15e3),mx="__/auth/iframe",gx="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wx(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uu(e,gx):`https://${t.config.authDomain}/${mx}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=vx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vr(r).slice(1)}`}async function xx(t){const e=await hx(t),n=se().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:wx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Oe(t,"network-request-failed"),a=se().setTimeout(()=>{s(o)},px.get());function l(){se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _x={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kx=500,Ex=600,Sx="_blank",Ix="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cx(t,e,n,r=kx,i=Ex){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={..._x,width:r.toString(),height:i.toString(),top:s,left:o},c=ke().toLowerCase();n&&(a=vp(c)?Sx:n),gp(c)&&(e=e||Ix,l.scrollbars="yes");const m=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(Sv(c)&&a!=="_self")return Nx(e||"",a),new Sd(null);const h=window.open(e||"",a,m);S(h,t,"popup-blocked");try{h.focus()}catch{}return new Sd(h)}function Nx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bx="__/auth/handler",Tx="emulator/auth/handler",Px=encodeURIComponent("fac");async function Id(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof pu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",H1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,h]of Object.entries(s||{}))o[m]=h}if(e instanceof Ri){const m=e.getScopes().filter(h=>h!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const l=await t._getAppCheckToken(),c=l?`#${Px}=${encodeURIComponent(l)}`:"";return`${Rx(t)}?${vr(a).slice(1)}${c}`}function Rx({config:t}){return t.emulator?uu(t,Tx):`https://${t.authDomain}/${bx}`}/**
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
 */const oa="webStorageSupport";class Ax{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mu,this._completeRedirectFn=nx,this._overrideRedirectResult=Zw}async _openPopup(e,n,r,i){var o;Ot((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Id(e,n,r,ol(),i);return Cx(e,s,gu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Id(e,n,r,ol(),i);return Iw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xx(e),r=new ix(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oa,{type:oa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[oa];s!==void 0&&n(!!s),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ep()||yp()||du()}}const Ox=Ax;var Cd="@firebase/auth",Nd="1.12.0";/**
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
 */class Lx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dx(t){wi(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(t)},c=new Pv(r,i,s,l);return Wv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wi(new hr("auth-internal",e=>{const n=Je(e.getProvider("auth").getImmediate());return(r=>new Lx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Cd,Nd,jx(t)),tr(Cd,Nd,"esm2020")}/**
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
 */const Mx=5*60,Ux=Xh("authIdTokenMaxAge")||Mx;let bd=null;const zx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ux)return;const i=n==null?void 0:n.token;bd!==i&&(bd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $x(t=Gy()){const e=np(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hv(t,{popupRedirectResolver:Ox,persistence:[Lw,Lp,mu]}),r=Xh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zx(s.toString());ww(n,o,()=>o(n.currentUser)),vw(n,a=>o(a))}}const i=b1("auth");return i&&Gv(n,`http://${i}`),n}function Fx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Rv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Oe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Fx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dx("Browser");const Vx={apiKey:"AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",authDomain:"vokal-pro-studio-app-2026.firebaseapp.com",projectId:"vokal-pro-studio-app-2026",storageBucket:"vokal-pro-studio-app-2026.firebasestorage.app",messagingSenderId:"390591097726",appId:"1:390591097726:web:fceb62a64f27876578212f"},Bx=rp(Vx),ct=$x(Bx);let Hx={data:""},Wx=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Hx},Gx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Kx=/\/\*[^]*?\*\/|  +/g,Td=/\n+/g,Kt=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Kt(o,s):s+"{"+Kt(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Kt(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Kt.p?Kt.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},wt={},Vp=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Vp(t[n]);return e}return t},Qx=(t,e,n,r,i)=>{let s=Vp(t),o=wt[s]||(wt[s]=(l=>{let c=0,m=11;for(;c<l.length;)m=101*m+l.charCodeAt(c++)>>>0;return"go"+m})(s));if(!wt[o]){let l=s!==t?t:(c=>{let m,h,f=[{}];for(;m=Gx.exec(c.replace(Kx,""));)m[4]?f.shift():m[3]?(h=m[3].replace(Td," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][m[1]]=m[2].replace(Td," ").trim();return f[0]})(t);wt[o]=Kt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&wt.g?wt.g:null;return n&&(wt.g=wt[o]),((l,c,m,h)=>{h?c.data=c.data.replace(h,l):c.data.indexOf(l)===-1&&(c.data=m?l+c.data:c.data+l)})(wt[o],e,r,a),o},Yx=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Kt(a,""):a===!1?"":a}return r+i+(o??"")},"");function yo(t){let e=this||{},n=t.call?t(e.p):t;return Qx(n.unshift?n.raw?Yx(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Wx(e.target),e.g,e.o,e.k)}let Bp,ul,cl;yo.bind({g:1});let Lt=yo.bind({k:1});function qx(t,e,n,r){Kt.p=e,Bp=t,ul=n,cl=r}function pn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:ul&&ul()},a),n.o=/ *go\d+/.test(l),a.className=yo.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let c=t;return t[0]&&(c=a.as||t,delete a.as),cl&&c[0]&&cl(a),Bp(c,a)}return e?e(i):i}}var Jx=t=>typeof t=="function",Ys=(t,e)=>Jx(t)?t(e):t,Xx=(()=>{let t=0;return()=>(++t).toString()})(),Hp=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Zx=20,wu="default",Wp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return Wp(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ys=[],Gp={toasts:[],pausedAt:void 0,settings:{toastLimit:Zx}},ft={},Kp=(t,e=wu)=>{ft[e]=Wp(ft[e]||Gp,t),ys.forEach(([n,r])=>{n===e&&r(ft[e])})},Qp=t=>Object.keys(ft).forEach(e=>Kp(t,e)),e_=t=>Object.keys(ft).find(e=>ft[e].toasts.some(n=>n.id===t)),vo=(t=wu)=>e=>{Kp(e,t)},t_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},n_=(t={},e=wu)=>{let[n,r]=E.useState(ft[e]||Gp),i=E.useRef(ft[e]);E.useEffect(()=>(i.current!==ft[e]&&r(ft[e]),ys.push([e,r]),()=>{let o=ys.findIndex(([a])=>a===e);o>-1&&ys.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||t_[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},r_=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Xx()}),Oi=t=>(e,n)=>{let r=r_(e,t,n);return vo(r.toasterId||e_(r.id))({type:2,toast:r}),r.id},L=(t,e)=>Oi("blank")(t,e);L.error=Oi("error");L.success=Oi("success");L.loading=Oi("loading");L.custom=Oi("custom");L.dismiss=(t,e)=>{let n={type:3,toastId:t};e?vo(e)(n):Qp(n)};L.dismissAll=t=>L.dismiss(void 0,t);L.remove=(t,e)=>{let n={type:4,toastId:t};e?vo(e)(n):Qp(n)};L.removeAll=t=>L.remove(void 0,t);L.promise=(t,e,n)=>{let r=L.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Ys(e.success,i):void 0;return s?L.success(s,{id:r,...n,...n==null?void 0:n.success}):L.dismiss(r),i}).catch(i=>{let s=e.error?Ys(e.error,i):void 0;s?L.error(s,{id:r,...n,...n==null?void 0:n.error}):L.dismiss(r)}),t};var i_=1e3,s_=(t,e="default")=>{let{toasts:n,pausedAt:r}=n_(t,e),i=E.useRef(new Map).current,s=E.useCallback((h,f=i_)=>{if(i.has(h))return;let y=setTimeout(()=>{i.delete(h),o({type:4,toastId:h})},f);i.set(h,y)},[]);E.useEffect(()=>{if(r)return;let h=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let w=(y.duration||0)+y.pauseDuration-(h-y.createdAt);if(w<0){y.visible&&L.dismiss(y.id);return}return setTimeout(()=>L.dismiss(y.id,e),w)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=E.useCallback(vo(e),[e]),a=E.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=E.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),c=E.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=E.useCallback((h,f)=>{let{reverseOrder:y=!1,gutter:w=8,defaultPosition:_}=f||{},R=n.filter(g=>(g.position||_)===(h.position||_)&&g.height),p=R.findIndex(g=>g.id===h.id),d=R.filter((g,v)=>v<p&&g.visible).length;return R.filter(g=>g.visible).slice(...y?[d+1]:[0,d]).reduce((g,v)=>g+(v.height||0)+w,0)},[n]);return E.useEffect(()=>{n.forEach(h=>{if(h.dismissed)s(h.id,h.removeDelay);else{let f=i.get(h.id);f&&(clearTimeout(f),i.delete(h.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:m}}},o_=Lt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,a_=Lt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,l_=Lt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,u_=pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${o_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${a_} 0.15s ease-out forwards;
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
    animation: ${l_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,c_=Lt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,d_=pn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${c_} 1s linear infinite;
`,f_=Lt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,h_=Lt`
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
}`,p_=pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${f_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${h_} 0.2s ease-out forwards;
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
`,m_=pn("div")`
  position: absolute;
`,g_=pn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,y_=Lt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,v_=pn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${y_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,w_=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(v_,null,e):e:n==="blank"?null:E.createElement(g_,null,E.createElement(d_,{...r}),n!=="loading"&&E.createElement(m_,null,n==="error"?E.createElement(u_,{...r}):E.createElement(p_,{...r})))},x_=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,__=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,k_="0%{opacity:0;} 100%{opacity:1;}",E_="0%{opacity:1;} 100%{opacity:0;}",S_=pn("div")`
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
`,I_=pn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,C_=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=Hp()?[k_,E_]:[x_(n),__(n)];return{animation:e?`${Lt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Lt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},N_=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?C_(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(w_,{toast:t}),o=E.createElement(I_,{...t.ariaProps},Ys(t.message,t));return E.createElement(S_,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});qx(E.createElement);var b_=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},T_=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Hp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},P_=yo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Zi=16,Yp=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=s_(n,s);return E.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Zi,left:Zi,right:Zi,bottom:Zi,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(m=>{let h=m.position||e,f=c.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),y=T_(h,f);return E.createElement(b_,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?P_:"",style:y},m.type==="custom"?Ys(m.message,m):i?i(m):E.createElement(N_,{toast:m,position:h}))}))};const R_=()=>u.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[u.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),u.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),u.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),u.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});function A_({onGuestLogin:t}){const[e,n]=E.useState(!0),[r,i]=E.useState("email"),[s,o]=E.useState(""),[a,l]=E.useState(""),[c,m]=E.useState(""),[h,f]=E.useState(""),[y,w]=E.useState(""),[_,R]=E.useState(!0),[p,d]=E.useState(!1),[g,v]=E.useState(!1),I=async j=>{j.preventDefault(),d(!0);try{if(await yw(ct,_?Lp:mu),e)await pw(ct,a,c),L.success("Successfully logged in!");else{const ue=await hw(ct,a,c);await gw(ue.user,{displayName:s}),L.success("Account created successfully!")}}catch(ue){L.error(ue.message.replace("Firebase:","").trim())}finally{d(!1)}},b=async()=>{if(!a){L.error("Please enter your email address first.");return}d(!0);try{await fw(ct,a),L.success("Password reset email sent! Check your inbox.")}catch(j){L.error(j.message.replace("Firebase:","").trim())}finally{d(!1)}},T=async()=>{d(!0);try{const j=new kt;await Yw(ct,j),L.success("Successfully logged in with Google!")}catch(j){L.error(j.message.replace("Firebase:","").trim())}finally{d(!1)}},P=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new $w(ct,"recaptcha-container",{size:"invisible"}))},H=async j=>{if(j.preventDefault(),!h.startsWith("+"))return L.error("Please enter phone number with country code (e.g. +91...)");d(!0);try{P();const ue=window.recaptchaVerifier,je=await Bw(ct,h,ue);window.confirmationResult=je,v(!0),L.success("OTP sent to your phone")}catch(ue){L.error(ue.message)}finally{d(!1)}},O=async j=>{j.preventDefault(),d(!0);try{await window.confirmationResult.confirm(y),L.success("Phone completely verified!")}catch{L.error("Invalid OTP Code")}finally{d(!1)}};return u.jsxs("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300",children:[u.jsx(Yp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),u.jsxs("div",{className:"w-full max-w-md relative z-10",children:[u.jsxs("div",{className:"mb-10 text-center",children:[u.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-2",children:["VOKAL ",u.jsx("span",{className:"text-blue-500",children:"PRO"})]}),u.jsx("p",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Studio Edition • Access Portal"})]}),u.jsxs("div",{className:"bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),u.jsxs("button",{type:"button",onClick:T,disabled:p,className:"w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50",children:[u.jsx(R_,{})," Continue with Google"]}),u.jsxs("div",{className:"flex items-center gap-4 mb-6 opacity-30",children:[u.jsx("div",{className:"flex-1 h-px bg-white"}),u.jsx("div",{className:"text-[10px] font-black uppercase text-white tracking-widest",children:"Or Use"}),u.jsx("div",{className:"flex-1 h-px bg-white"})]}),u.jsxs("div",{className:"flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8",children:[u.jsxs("button",{onClick:()=>i("email"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="email"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[u.jsx(Wc,{className:"w-4 h-4"})," Email"]}),u.jsxs("button",{onClick:()=>i("phone"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="phone"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[u.jsx(Gc,{className:"w-4 h-4"})," Phone"]})]}),r==="email"&&u.jsxs("form",{onSubmit:I,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[u.jsxs("div",{className:"space-y-4",children:[!e&&u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(fs,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"text",required:!0,placeholder:"Full Name",value:s,onChange:j=>o(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(Wc,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"email",required:!0,placeholder:"Email Address",value:a,onChange:j=>l(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(el,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"password",required:!0,placeholder:"Password",value:c,onChange:j=>m(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]})]}),e&&u.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 px-1",children:[u.jsxs("label",{className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[u.jsx("input",{type:"checkbox",checked:_,onChange:j=>R(j.target.checked),className:"rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500"}),"Remember me"]}),u.jsx("button",{type:"button",onClick:b,className:"hover:text-blue-400 transition-colors",children:"Forgot Password?"})]}),u.jsxs("button",{disabled:p,type:"submit",className:"w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[p?"Processing...":e?"Sign In To Studio":"Create Account",!p&&u.jsx(Wh,{className:"w-4 h-4"})]}),u.jsx("div",{className:"text-center mt-6",children:u.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:e?"Don't have an account? Sign Up":"Already have an account? Sign In"})})]}),r==="phone"&&u.jsxs("form",{onSubmit:g?O:H,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[g?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(el,{className:"h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors"})}),u.jsx("input",{type:"text",required:!0,placeholder:"Enter 6-digit OTP",value:y,onChange:j=>w(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center"})]}),u.jsx("button",{disabled:p,type:"submit",className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50",children:p?"Verifying...":"Verify & Enter"}),u.jsx("div",{className:"text-center mt-4",children:u.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:"Wrong Number? Go Back"})})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(Gc,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"tel",required:!0,placeholder:"+91 99999 99999",value:h,onChange:j=>f(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest"})]}),u.jsxs("button",{disabled:p,type:"submit",className:"w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[p?"Sending OTP...":"Send OTP Code",!p&&u.jsx(qr,{className:"w-4 h-4"})]})]}),u.jsx("div",{id:"recaptcha-container"})]})]}),u.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600",children:[u.jsxs("button",{type:"button",onClick:t,className:"py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group",children:[u.jsx(qr,{className:"w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform"})," Try Studio as Guest"]}),u.jsxs("div",{className:"flex items-center gap-2 mt-2 opacity-50",children:[u.jsx(Gh,{className:"w-3 h-3"})," Secure Google Firebase Authentication"]})]})]})]})}const O_="https://vokal-pro-api.vercel.app/api/generate",L_=[{id:"Malayalam",native:"മലയാളം"},{id:"English",native:"English"},{id:"Hindi",native:"ഹിन्दी"},{id:"Tamil",native:"தமிழ்"}],j_=()=>u.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
    `}}),D_=[{id:"English",label:"English Sub"},{id:"Malayalam",label:"Malayalam Sub"},{id:"Hindi",label:"Hindi Sub"},{id:"Tamil",label:"Tamil Sub"}],Pd=[{id:"Maya",label:"Maya",type:"Female",desc:"Warm, expressive, maternal storytelling."},{id:"Francis",label:"Francis",type:"Ultra Bass",desc:"Legendary voice with deep cinematic resonance."},{id:"Charan",label:"Charan",type:"Slow Bass",desc:"Deep and slow flow."},{id:"Ahaana",label:"Ahaana",type:"Professional",desc:"Clear professional voice."}],M_=()=>{var Su,Iu;const[t,e]=E.useState("studio"),[n,r]=E.useState("Malayalam"),[i,s]=E.useState("English"),[o,a]=E.useState(!1),[l,c]=E.useState(!1),[m,h]=E.useState(null),[f,y]=E.useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"),[w,_]=E.useState(!1),[R,p]=E.useState("Maya"),[d,g]=E.useState([]),[v,I]=E.useState(null),[b,T]=E.useState([]),[P,H]=E.useState(""),[O,j]=E.useState(!1),[ue,je]=E.useState(null),[xr,wo]=E.useState(!1),[G,_r]=E.useState(null),[k,A]=E.useState(!1),[D,J]=E.useState(!0),[Y,Dt]=E.useState(!1),[gt,Xe]=E.useState(!1),[Mt,jn]=E.useState(60);E.useEffect(()=>xw(ct,$=>{_r($),$&&jn(60),J(!1)}),[]);const re=E.useRef(null),kr=E.useRef(new Audio),qp=(C,$)=>{const ie=new ArrayBuffer(44+C.length*2),V=new DataView(ie),we=(Ne,yt)=>{for(let Ze=0;Ze<yt.length;Ze++)V.setUint8(Ne+Ze,yt.charCodeAt(Ze))};we(0,"RIFF"),V.setUint32(4,32+C.length*2,!0),we(8,"WAVE"),we(12,"fmt "),V.setUint32(16,16,!0),V.setUint16(20,1,!0),V.setUint16(22,1,!0),V.setUint32(24,$,!0),V.setUint32(28,$*2,!0),V.setUint16(32,2,!0),V.setUint16(34,16,!0),we(36,"data"),V.setUint32(40,C.length*2,!0);let Ce=44;for(let Ne=0;Ne<C.length;Ne++,Ce+=2)V.setInt16(Ce,C[Ne],!0);return new Blob([ie],{type:"audio/wav"})},xu=C=>C?C.trim().split(/\n\s*\n/).map(ie=>{const V=ie.split(`
`);if(V.length<3)return null;const we=V[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);if(!we)return null;const Ce=Ne=>{const[yt,Ze,Li]=Ne.split(":"),[Er,xo]=Li.split(",");return parseInt(yt)*3600+parseInt(Ze)*60+parseInt(Er)+parseInt(xo)/1e3};return{start:Ce(we[1]),end:Ce(we[2]),text:V.slice(2).join(" ")}}).filter(ie=>ie!==null):[];E.useEffect(()=>{re.current=new Audio;const C=()=>{if(!re.current||b.length===0)return;const $=re.current.currentTime,ie=b.find(V=>$>=V.start&&$<=V.end);H(ie?ie.text:"")};return re.current.addEventListener("timeupdate",C),re.current.onplay=()=>{v&&re.current.src===v.url&&j(!0)},re.current.onpause=()=>{j(!1),je(null)},re.current.onended=()=>{j(!1),H(""),je(null)},()=>{var $;return($=re.current)==null?void 0:$.removeEventListener("timeupdate",C)}},[b,v]);const _u=async()=>{wo(!0);try{const C="data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";re.current.src=C,await re.current.play().then(()=>re.current.pause())}catch{console.warn("Engine Unlocked")}},ku=async(C,$)=>{let ie=0;const V=3,we=async()=>{const Ce=await fetch(O_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:C,payload:$})});if(!Ce.ok){const Ne=await Ce.json().catch(()=>({}));if(Ce.status===429||(Ne==null?void 0:Ne.error)==="TOO_MANY_REQUESTS")throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");if(ie<V){ie++;const yt=Math.pow(2,ie)*1e3;return await new Promise(Ze=>setTimeout(Ze,yt)),we()}throw new Error(`System Error: ${Ce.status}`)}return await Ce.json()};return we()},Jp=async()=>{var C,$,ie,V,we,Ce,Ne,yt,Ze,Li;if(!w){if(!k&&G&&!Y){Xe(!0),L.error("Please upgrade to a Studio Pro plan to generate full-length audios!",{icon:"👑"});return}if(xr||await _u(),!!f.trim()){_(!0),h(null);try{let xo={Maya:"Aoede",Francis:"Charon",Charan:"Charon",Ahaana:"Kore"}[R]||R;const Xp={contents:[{parts:[{text:`${R==="Maya"||R==="Ahaana"?"Speak in a natural, warm, and expressive Malayalam female voice with a steady, conversational pace. Ensure the flow is natural and not rushed.":"Speak in a clear, professional male voice with a natural, steady conversational flow. Maintain a balanced and natural speed."}: ${f}`}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:xo}}}}};let Cu=null;if(o){const Sr=`Generate .SRT subtitles in ${i} for: "${f}"`;Cu=ku("analysis",{contents:[{role:"user",parts:[{text:Sr}]}]})}const[Zp,_o]=await Promise.all([ku("tts",Xp),Cu]),ko=(we=(V=(ie=($=(C=Zp.candidates)==null?void 0:C[0])==null?void 0:$.content)==null?void 0:ie.parts)==null?void 0:V[0])==null?void 0:we.inlineData,Nu=((Li=(Ze=(yt=(Ne=(Ce=_o==null?void 0:_o.candidates)==null?void 0:Ce[0])==null?void 0:Ne.content)==null?void 0:yt.parts)==null?void 0:Ze[0])==null?void 0:Li.text)||"";if(ko){const Sr=atob(ko.data),bu=Sr.length,Tu=new Int16Array(bu/2);for(let mn=0;mn<bu;mn+=2)Tu[mn/2]=Sr.charCodeAt(mn+1)<<8|Sr.charCodeAt(mn);const em=parseInt(ko.mimeType.split("rate=")[1])||24e3,tm=qp(Tu,em),Pu=URL.createObjectURL(tm),Ru={url:Pu,srt:Nu,srtLang:o?i:"None",text:f.substring(0,40),date:new Date().toLocaleTimeString(),voice:R,timestamp:Date.now()};I(Ru),T(o?xu(Nu):[]),g(mn=>[Ru,...mn]),re.current.src=Pu,L.success("Studio Master Generated Successfully!",{icon:"✨"})}}catch(Er){h(Er.message),L.error("Generation Failed: "+Er.message,{icon:"❌"})}finally{_(!1)}}}};if(D)return u.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center",children:u.jsx(Bc,{className:"w-10 h-10 text-blue-500 animate-spin"})});if(!G&&!k)return u.jsx(A_,{onGuestLogin:()=>A(!0)});const Eu=u.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:Pd.map(C=>u.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${R===C.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>{p(C.id),c(!1)},children:[u.jsx("button",{onClick:$=>{if($.stopPropagation(),ue===C.id)kr.current.pause(),kr.current.currentTime=0,je(null);else{O&&re.current.pause();const ie="/vokal-pro-studio/",V=`previews/${n.toLowerCase()}/${C.id.toLowerCase()}.wav`;kr.current.src=ie+V,kr.current.play().catch(we=>{console.warn("Preview missing:",V),L.error(`Missing audio for ${n}: ${C.id}`,{icon:"📂",description:`File should be at: ${V}`})}),je(C.id),kr.current.onended=()=>je(null)}},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${ue===C.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":R===C.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:ue===C.id?u.jsx(s1,{className:"w-4 h-4"}):u.jsx(Kc,{className:"w-4 h-4 ml-0.5"})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${R===C.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:C.label}),u.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:C.type})]}),R===C.id&&u.jsx(vt,{className:"w-5 h-5 text-blue-500 shrink-0"})]},C.id))});return u.jsxs("div",{className:"h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans",children:[u.jsx(j_,{}),u.jsx(Yp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),gt&&u.jsx("div",{className:"fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col",children:[u.jsx("button",{onClick:()=>Xe(!1),className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10",children:u.jsx(Yc,{className:"w-6 h-6"})}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"}),u.jsxs("div",{className:"p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar",children:[u.jsxs("div",{className:"text-center mb-12 relative z-10",children:[u.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-4",children:["VOKAL ",u.jsx("span",{className:"text-blue-500",children:"PRO"})," PLANS"]}),u.jsx("p",{className:"text-slate-400 max-w-xl mx-auto font-medium",children:"Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities."})]}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:[u.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-emerald-500/30 transition-all group",children:[u.jsx("div",{className:"text-emerald-500 mb-6 bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",children:u.jsx(qr,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Starter"}),u.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:"Perfect for testing"}),u.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹99 ",u.jsx("span",{className:"text-sm font-medium text-slate-500",children:"/ 3 Audio"})]}),u.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-emerald-500 shrink-0"})," 3 Audio Generations"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-emerald-500 shrink-0"})," Standard Quality"]})]}),u.jsx("button",{onClick:()=>{Dt(!0),Xe(!1),L.success("Starter Plan Activated!",{icon:"💳"})},className:"w-full py-4 bg-white/5 hover:bg-emerald-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Buy Now"})]}),u.jsxs("div",{className:"bg-gradient-to-b from-blue-900/40 to-black/80 border border-blue-500/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20",children:[u.jsx("div",{className:"absolute -top-4 inset-x-0 flex justify-center",children:u.jsx("span",{className:"bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30",children:"Most Popular"})}),u.jsx("div",{className:"text-blue-500 mb-6 bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center",children:u.jsx(Qc,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Creator"}),u.jsx("div",{className:"text-blue-200/60 text-sm font-medium mb-6",children:"For serious creators"}),u.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹499 ",u.jsx("span",{className:"text-sm font-medium text-blue-500/50",children:"/ 100 Audio"})]}),u.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-blue-500 shrink-0"})," 100 Audio Generations"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-blue-500 shrink-0"})," Cinematic Vocals"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-blue-500 shrink-0"})," SRT Subtitle Export"]})]}),u.jsx("button",{onClick:()=>{Dt(!0),Xe(!1),L.success("Creator Plan Activated!",{icon:"💳"})},className:"w-full py-4 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Buy Creator"})]}),u.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-amber-500/30 transition-all group",children:[u.jsx("div",{className:"text-amber-500 mb-6 bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",children:u.jsx(Yo,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Studio"}),u.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:"Unlimited Everything"}),u.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹999 ",u.jsx("span",{className:"text-sm font-medium text-slate-500",children:"/ Lifetime"})]}),u.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Unlimited Generations"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Priority Processing"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(vt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Commercial Rights"]})]}),u.jsx("button",{onClick:()=>{Dt(!0),Xe(!1),L.success("Studio Plan Activated!",{icon:"💳"})},className:"w-full py-4 bg-white/5 hover:bg-amber-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Go Unlimited"})]})]})]})]})}),l&&u.jsxs("div",{className:"fixed inset-0 z-[60] lg:hidden flex flex-col justify-end",children:[u.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>c(!1)}),u.jsxs("div",{className:"relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300",children:[u.jsxs("div",{className:"flex justify-between items-center mb-6 shrink-0",children:[u.jsxs("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3",children:[u.jsx(qo,{className:"w-4 h-4 sm:w-5 sm:h-5 text-blue-500"})," Choose Voice Model"]}),u.jsx("button",{onClick:()=>c(!1),className:"p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:u.jsx(Yc,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"overflow-y-auto custom-scrollbar flex-1 pr-2",children:Eu})]})]}),!xr&&u.jsxs("div",{onClick:_u,className:"fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)"},children:[u.jsx("style",{children:`
                        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                        @keyframes spin-slow-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                        @keyframes float-mic { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-14px) scale(1.05); } }
                        @keyframes bar1 { 0%,100%{height:12px} 50%{height:40px} }
                        @keyframes bar2 { 0%,100%{height:28px} 50%{height:10px} }
                        @keyframes bar3 { 0%,100%{height:20px} 25%{height:44px} 75%{height:8px} }
                        @keyframes bar4 { 0%,100%{height:36px} 40%{height:14px} }
                        @keyframes bar5 { 0%,100%{height:16px} 60%{height:38px} }
                        @keyframes glow-pulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.8;transform:scale(1.08)} }
                        @keyframes text-shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
                        @keyframes tap-bounce { 0%,100%{transform:translateY(0);opacity:1} 50%{transform:translateY(6px);opacity:0.5} }
                        .bar1{animation:bar1 0.9s ease-in-out infinite}
                        .bar2{animation:bar2 0.7s ease-in-out infinite}
                        .bar3{animation:bar3 1.1s ease-in-out infinite}
                        .bar4{animation:bar4 0.8s ease-in-out infinite 0.1s}
                        .bar5{animation:bar5 1s ease-in-out infinite 0.2s}
                    `}),u.jsxs("div",{style:{position:"relative",width:"320px",height:"320px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"40px",zIndex:10,flexShrink:0},children:[u.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",animation:"glow-pulse 2.5s ease-in-out infinite"}}),u.jsx("div",{style:{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.2)",animation:"spin-slow 12s linear infinite"},children:u.jsx("div",{style:{position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 14px 4px #3b82f6"}})}),u.jsx("div",{style:{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",border:"1px solid rgba(99,102,241,0.25)",animation:"spin-slow-rev 8s linear infinite"},children:u.jsx("div",{style:{position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:"#818cf8",boxShadow:"0 0 10px 3px #818cf8"}})}),u.jsx("div",{style:{position:"absolute",width:"160px",height:"160px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.15)",animation:"spin-slow 6s linear infinite"}}),u.jsx("div",{style:{position:"relative",zIndex:5,width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)",animation:"float-mic 3s ease-in-out infinite"},children:u.jsx(t1,{style:{width:"44px",height:"44px",color:"white"}})})]}),u.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"5px",height:"40px",marginBottom:"28px",zIndex:10},children:[["bar1","#3b82f6"],["bar2","#6366f1"],["bar3","#3b82f6"],["bar4","#60a5fa"],["bar5","#818cf8"],["bar1","#3b82f6"],["bar2","#6366f1"]].map(([C,$],ie)=>u.jsx("div",{className:C,style:{width:"5px",borderRadius:"3px",background:$,opacity:.85}},ie))}),u.jsx("h1",{style:{fontSize:"clamp(1rem,5vw,1.5rem)",fontWeight:900,letterSpacing:"0.35em",textTransform:"uppercase",zIndex:10,background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"text-shimmer 3s linear infinite",textAlign:"center",padding:"0 24px"},children:"Vokal Pro Studio"}),u.jsx("p",{style:{marginTop:"10px",fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(148,163,184,0.6)",zIndex:10,fontWeight:700},children:"AI Voice Engine"}),u.jsxs("div",{style:{position:"absolute",bottom:"60px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",zIndex:10},children:[u.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"tap-bounce 1.5s ease-in-out infinite"},children:u.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",children:u.jsx("path",{d:"M6 1v12M6 13l-4-4M6 13l4-4",stroke:"#3b82f6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(148,163,184,0.45)",fontWeight:700,textTransform:"uppercase"},children:"Tap anywhere"})]})]}),u.jsx("aside",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-[94%] max-w-[360px] md:w-24 bg-[#0F1118]/80 backdrop-blur-3xl border border-white/10 md:border-none md:bg-transparent rounded-[2rem] md:rounded-none flex md:flex-col items-center py-2.5 px-6 md:py-12 gap-4 md:gap-12 justify-center z-50 shadow-2xl shadow-black/80 md:shadow-none",children:u.jsxs("div",{className:"flex md:flex-col gap-8 md:gap-14 items-center w-full md:w-auto justify-around md:justify-start",children:[u.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-2xl hidden md:flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4",children:u.jsx(y1,{className:"text-white w-6 h-6"})}),u.jsxs("nav",{className:"flex md:flex-col gap-10 md:gap-12 w-full md:w-auto justify-around md:justify-center",children:[u.jsxs("button",{onClick:()=>e("studio"),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t==="studio"?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[u.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t==="studio"?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:u.jsx(r1,{className:"w-5 h-5"})}),u.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t==="studio"?"opacity-100":"opacity-40"}`,children:"Studio"})]}),u.jsxs("button",{onClick:()=>e("vault"),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t==="vault"?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[u.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t==="vault"?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:u.jsx(Jo,{className:"w-5 h-5"})}),u.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t==="vault"?"opacity-100":"opacity-40"}`,children:"Vault"})]}),u.jsxs("button",{onClick:()=>e("profile"),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t==="profile"?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[u.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t==="profile"?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:u.jsx(fs,{className:"w-5 h-5"})}),u.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t==="profile"?"opacity-100":"opacity-40"}`,children:"Profile"})]})]})]})}),u.jsxs("main",{className:"flex-1 p-6 sm:p-8 md:p-12 pb-32 md:pb-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last custom-scrollbar",children:[u.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6",children:[u.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[u.jsxs("h2",{className:"text-2xl font-black italic text-white uppercase tracking-tighter",children:["VOKAL ",u.jsx("span",{className:"text-blue-500",children:"PRO"})]}),u.jsx("p",{className:"text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]",children:"Studio Edition"})]}),u.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-4",children:[u.jsx("div",{className:"flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl",children:L_.map(C=>u.jsx("button",{onClick:()=>r(C.id),className:`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${n===C.id?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-slate-300 hover:bg-white/5"}`,children:C.native},C.id))}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl",children:[u.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0",children:G!=null&&G.photoURL?u.jsx("img",{src:G.photoURL,alt:"User",className:"w-full h-full object-cover"}):u.jsx(fs,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})}),u.jsxs("div",{className:"flex flex-col text-left justify-center",children:[u.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]",children:G?G.displayName||((Su=G.email)==null?void 0:Su.split("@")[0])||G.phoneNumber:"Guest User"}),Y?u.jsxs("span",{className:"text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[u.jsx(Yo,{className:"w-3 h-3"})," Studio Pro"]}):k?u.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Tryout Mode"}):u.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Free User"})]}),u.jsx("div",{className:"w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"}),u.jsx("button",{onClick:()=>{k?(A(!1),L.success("Please sign in to continue")):yd(ct).then(()=>L.success("Signed out"))},className:"p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0",title:k?"Sign In":"Sign Out",children:k?u.jsx(el,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"}):u.jsx(Hc,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"})})]})]})]}),t==="studio"&&u.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 flex-1",children:[u.jsxs("div",{className:"flex flex-col gap-4",children:[m&&u.jsxs("div",{className:"p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4",children:[u.jsx(Gh,{className:"w-5 h-5 shrink-0"})," ",m]}),u.jsxs("div",{className:`flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border shadow-2xl p-1 flex flex-col transition-all duration-700 ${w?"border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]":"border-white/5 hover:border-blue-500/30"}`,children:[w&&u.jsx("div",{className:"absolute inset-0 bg-blue-500/5 rounded-[2.5rem] animate-pulse"}),u.jsx("textarea",{value:f,onChange:C=>{k&&C.target.value.length>50?(L.error("Guest Limit Exceeded (5s limit). Please create an account for unlimited access!",{icon:"🔒"}),y(C.target.value.substring(0,50))):!k&&G&&!Y&&C.target.value.length>800?(L.error("Free Plan Limit Exceeded (1 min limit). Upgrade to create longer audios!",{icon:"👑"}),Xe(!0),y(C.target.value.substring(0,800))):y(C.target.value)},placeholder:"Type or paste your script here...",className:"w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 sm:p-8 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"})]}),u.jsxs("div",{className:"shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"}),u.jsxs("div",{className:"relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto",children:[u.jsxs("button",{onClick:()=>a(!o),className:`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${o?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10":"bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300"}`,children:[o?u.jsx(p1,{className:"w-5 h-5"}):u.jsx(f1,{className:"w-5 h-5"})," Auto Subtitles"]}),o&&u.jsx("div",{className:"flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto",children:D_.map(C=>u.jsx("button",{onClick:()=>s(C.id),className:`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${i===C.id?"bg-white text-black border-white shadow-lg shadow-white/10":"bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300"}`,children:C.label},C.id))})]}),u.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10",children:[u.jsxs("button",{onClick:()=>c(!0),className:"lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95",children:[u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx(qo,{className:"w-4 h-4 text-blue-500"})," Voice: ",((Iu=Pd.find(C=>C.id===R))==null?void 0:Iu.label)||"Select"]}),u.jsx(Wh,{className:"w-4 h-4"})]}),u.jsxs("button",{onClick:Jp,disabled:w||!f.trim(),className:"w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale",children:[w?u.jsx(Bc,{className:"animate-spin w-5 h-5"}):u.jsx(u1,{className:"w-5 h-5"})," ",w?"Synthesizing...":"Generate Master"]})]})]})]}),u.jsxs("div",{className:"w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full",children:[u.jsxs("div",{className:"hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group",children:[u.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"}),u.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3",children:[u.jsx(qo,{className:"w-4 h-4 text-blue-500"})," Voice Models"]}),Eu]}),u.jsxs("div",{className:`shrink-0 lg:flex-1 flex flex-col p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${w?"bg-blue-600/5 border-blue-500/40":v?"bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30":"bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5"}`,children:[w&&u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"}),v&&u.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -mr-20 -mt-20"}),u.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3",children:[w?u.jsx(qr,{className:"w-3 h-3 text-blue-400 animate-bounce"}):u.jsx(Wg,{className:"w-3 h-3 text-blue-500/60"}),w?"Engine Processing...":"Studio Output Engine"]}),u.jsx("div",{className:"relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center",children:w?u.jsxs("div",{className:"flex flex-col items-center gap-6",children:[u.jsx("div",{className:"flex items-end gap-1.5 h-16",children:[...Array(12)].map((C,$)=>u.jsx("div",{className:"w-1.5 bg-blue-500 rounded-full animate-wave",style:{animationDelay:`${$*.1}s`,height:"20%"}},$))}),u.jsx("p",{className:"text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse",children:"Synthesizing Voice..."})]}):u.jsxs(u.Fragment,{children:[u.jsx("p",{className:`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${P?"text-white drop-shadow-lg":"text-slate-600 italic"}`,children:P||(v?"Audio ready for playback":"Awaiting Audio...")}),v&&!P&&!O&&u.jsx("div",{className:"mt-4 w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-blue-500 w-1/3"})})]})}),v&&!w&&u.jsxs("div",{className:"relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500",children:[u.jsxs("button",{onClick:()=>{re.current.src!==v.url&&(re.current.src=v.url),O?re.current.pause():(re.current.play(),j(!0))},className:`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${O?"bg-white text-black scale-[0.98]":"bg-blue-600 text-white hover:bg-blue-500"}`,children:[O?u.jsx(zg,{className:"w-5 h-5"}):u.jsx(Fg,{className:"w-5 h-5"}),O?"Pause Master":"Play Master Track"]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsxs("a",{href:v.url,download:"master_audio.wav",className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5",children:[u.jsx(Vc,{className:"w-4 h-4 text-blue-500"})," WAV"]}),v.srt&&u.jsxs("button",{onClick:()=>{const C=new Blob([v.srt],{type:"text/plain"}),$=document.createElement("a");$.href=URL.createObjectURL(C),$.download="subtitles.srt",$.click()},className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors",children:[u.jsx(Kg,{className:"w-4 h-4 text-emerald-500"})," SRT"]})]})]})]})]})]}),t==="vault"&&(d.length===0?u.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60",children:[u.jsx("div",{className:"w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl",children:u.jsx(Jo,{className:"w-10 h-10 text-slate-500"})}),u.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest mb-2",children:"Vault is Empty"}),u.jsx("p",{className:"text-sm font-medium text-slate-500 max-w-sm",children:"You haven't generated any studio audio yet. Go back to the studio to brew some magic."}),u.jsx("button",{onClick:()=>e("studio"),className:"mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20",children:"Go to Studio"})]}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500",children:d.map(C=>u.jsxs("div",{className:"bg-[#0F1118] p-6 rounded-[2rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl",children:[u.jsxs("div",{className:"flex items-center gap-6",children:[u.jsx("button",{onClick:()=>{re.current.src=C.url,T(C.srt?xu(C.srt):[]),re.current.play()},className:"w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner",children:u.jsx(Kc,{className:"w-5 h-5 fill-current ml-1"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"text-sm font-bold text-white italic line-clamp-1",children:['"',C.text,'..."']}),u.jsxs("div",{className:"text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest",children:[C.voice," • ",C.date]})]})]}),u.jsx("a",{href:C.url,download:!0,className:"p-3 text-slate-500 hover:text-white transition-colors",children:u.jsx(Vc,{className:"w-5 h-5"})})]},C.timestamp))})),t==="profile"&&u.jsxs("div",{className:"flex flex-col items-center max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700",children:[u.jsxs("div",{className:"relative mb-10",children:[u.jsx("div",{className:"w-32 h-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20",children:u.jsx("div",{className:"w-full h-full rounded-[2.8rem] bg-[#0F1118] flex items-center justify-center overflow-hidden border border-white/5",children:G!=null&&G.photoURL?u.jsx("img",{src:G.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):u.jsx(fs,{className:"w-12 h-12 text-blue-500/50"})})}),u.jsx("div",{className:"absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-[#08090D]",children:u.jsx(Qc,{className:"w-4 h-4 fill-current"})})]}),u.jsxs("div",{className:"text-center mb-12",children:[u.jsx("h3",{className:"text-3xl font-black text-white uppercase tracking-tighter mb-2",children:(G==null?void 0:G.displayName)||(k?"Guest Creator":"Pro User")}),u.jsx("p",{className:"text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]",children:(G==null?void 0:G.email)||"Studio Guest Access"})]}),u.jsxs("div",{className:"w-full grid gap-4",children:[u.jsxs("div",{className:"bg-[#0F1118] border border-white/5 p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),u.jsxs("div",{className:"relative flex items-center gap-6",children:[u.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-inner",children:u.jsx(Yo,{className:"w-7 h-7 text-blue-500"})}),u.jsxs("div",{className:"text-left",children:[u.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Current Studio Plan"}),u.jsx("div",{className:"text-xl font-black text-white uppercase tracking-widest",children:Y?"Studio Pro":k?"Guest Tier":"Free Plan"})]})]}),!Y&&u.jsxs("button",{onClick:()=>Xe(!0),className:"relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 group",children:["Upgrade Now ",u.jsx(qr,{className:"w-4 h-4 fill-current group-hover:animate-pulse"})]})]}),u.jsx("div",{className:"bg-[#0F1118]/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between shadow-xl",children:u.jsxs("div",{className:"flex items-center gap-6",children:[u.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5",children:u.jsx(Jo,{className:"w-6 h-6 text-slate-500"})}),u.jsxs("div",{className:"text-left",children:[u.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Total Creations"}),u.jsxs("div",{className:"text-xl font-black text-white tracking-widest",children:[d.length," Master Tracks"]})]})]})}),u.jsxs("button",{onClick:()=>{k?A(!1):yd(ct).then(()=>{L.success("Signed out successfully"),e("studio")})},className:"mt-6 w-full py-5 bg-white/5 hover:bg-red-500/10 text-slate-500 hover:text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 flex items-center justify-center gap-3",children:[u.jsx(Hc,{className:"w-4 h-4"})," ",k?"Sign In to Pro Account":"Sign Out"]})]})]})]})]})};aa.createRoot(document.getElementById("root")).render(u.jsx(vm.StrictMode,{children:u.jsx(M_,{})}));
