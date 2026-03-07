(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function am(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rd={exports:{}},to={},Ad={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),lm=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),mm=Symbol.for("react.suspense"),gm=Symbol.for("react.memo"),ym=Symbol.for("react.lazy"),Dc=Symbol.iterator;function vm(t){return t===null||typeof t!="object"?null:(t=Dc&&t[Dc]||t["@@iterator"],typeof t=="function"?t:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,jd={};function xr(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||Od}xr.prototype.isReactComponent={};xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dd(){}Dd.prototype=xr.prototype;function ml(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||Od}var gl=ml.prototype=new Dd;gl.constructor=ml;Ld(gl,xr.prototype);gl.isPureReactComponent=!0;var Mc=Array.isArray,Md=Object.prototype.hasOwnProperty,yl={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function $d(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Md.call(e,r)&&!Ud.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ci,type:t,key:s,ref:o,props:i,_owner:yl.current}}function wm(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function xm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uc=/\/+/g;function To(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xm(""+t.key):e.toString(36)}function ss(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ci:case lm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+To(o,0):r,Mc(i)?(n="",t!=null&&(n=t.replace(Uc,"$&/")+"/"),ss(i,e,n,"",function(u){return u})):i!=null&&(vl(i)&&(i=wm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+To(s,a);o+=ss(s,e,n,l,i)}else if(l=vm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+To(s,a++),o+=ss(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $i(t,e,n){if(t==null)return t;var r=[],i=0;return ss(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _m(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ce={current:null},os={transition:null},km={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:os,ReactCurrentOwner:yl};function zd(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:$i,forEach:function(t,e,n){$i(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $i(t,function(){e++}),e},toArray:function(t){return $i(t,function(e){return e})||[]},only:function(t){if(!vl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=xr;U.Fragment=cm;U.Profiler=dm;U.PureComponent=ml;U.StrictMode=um;U.Suspense=mm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;U.act=zd;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ld({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Md.call(e,l)&&!Ud.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ci,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:hm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fm,_context:t},t.Consumer=t};U.createElement=$d;U.createFactory=function(t){var e=$d.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:pm,render:t}};U.isValidElement=vl;U.lazy=function(t){return{$$typeof:ym,_payload:{_status:-1,_result:t},_init:_m}};U.memo=function(t,e){return{$$typeof:gm,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=os.transition;os.transition={};try{t()}finally{os.transition=e}};U.unstable_act=zd;U.useCallback=function(t,e){return Ce.current.useCallback(t,e)};U.useContext=function(t){return Ce.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ce.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ce.current.useEffect(t,e)};U.useId=function(){return Ce.current.useId()};U.useImperativeHandle=function(t,e,n){return Ce.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ce.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ce.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ce.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ce.current.useReducer(t,e,n)};U.useRef=function(t){return Ce.current.useRef(t)};U.useState=function(t){return Ce.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ce.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ce.current.useTransition()};U.version="18.3.1";Ad.exports=U;var S=Ad.exports;const Fd=am(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=S,Sm=Symbol.for("react.element"),Im=Symbol.for("react.fragment"),Cm=Object.prototype.hasOwnProperty,bm=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nm={key:!0,ref:!0,__self:!0,__source:!0};function Vd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Cm.call(e,r)&&!Nm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Sm,type:t,key:s,ref:o,props:i,_owner:bm.current}}to.Fragment=Im;to.jsx=Vd;to.jsxs=Vd;Rd.exports=to;var c=Rd.exports,da={},Bd={exports:{}},Be={},Hd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,A){var D=E.length;E.push(A);e:for(;0<D;){var q=D-1>>>1,J=E[q];if(0<i(J,A))E[q]=A,E[D]=J,D=q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var A=E[0],D=E.pop();if(D!==A){E[0]=D;e:for(var q=0,J=E.length,zn=J>>>1;q<zn;){var xt=2*(q+1)-1,_t=E[xt],_e=xt+1,ge=E[_e];if(0>i(_t,D))_e<J&&0>i(ge,_t)?(E[q]=ge,E[_e]=D,q=_e):(E[q]=_t,E[xt]=D,q=xt);else if(_e<J&&0>i(ge,D))E[q]=ge,E[_e]=D,q=_e;else break e}}return A}function i(E,A){var D=E.sortIndex-A.sortIndex;return D!==0?D:E.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],m=1,p=null,f=3,y=!1,w=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=E)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function v(E){if(_=!1,g(E),!w)if(n(l)!==null)w=!0,wt(C);else{var A=n(u);A!==null&&Cr(v,A.startTime-E)}}function C(E,A){w=!1,_&&(_=!1,h(k),k=-1),y=!0;var D=f;try{for(g(A),p=n(l);p!==null&&(!(p.expirationTime>A)||E&&!L());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var J=q(p.expirationTime<=A);A=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&r(l),g(A)}else r(l);p=n(l)}if(p!==null)var zn=!0;else{var xt=n(u);xt!==null&&Cr(v,xt.startTime-A),zn=!1}return zn}finally{p=null,f=D,y=!1}}var T=!1,P=null,k=-1,M=5,O=-1;function L(){return!(t.unstable_now()-O<M)}function ie(){if(P!==null){var E=t.unstable_now();O=E;var A=!0;try{A=P(!0,E)}finally{A?me():(T=!1,P=null)}}else T=!1}var me;if(typeof d=="function")me=function(){d(ie)};else if(typeof MessageChannel<"u"){var Ir=new MessageChannel,Co=Ir.port2;Ir.port1.onmessage=ie,me=function(){Co.postMessage(null)}}else me=function(){R(ie,0)};function wt(E){P=E,T||(T=!0,me())}function Cr(E,A){k=R(function(){E(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,wt(C))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var D=f;f=A;try{return E()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,A){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=f;f=E;try{return A()}finally{f=D}},t.unstable_scheduleCallback=function(E,A,D){var q=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?q+D:q):D=q,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=D+J,E={id:m++,callback:A,priorityLevel:E,startTime:D,expirationTime:J,sortIndex:-1},D>q?(E.sortIndex=D,e(u,E),n(l)===null&&E===n(u)&&(_?(h(k),k=-1):_=!0,Cr(v,D-q))):(E.sortIndex=J,e(l,E),w||y||(w=!0,wt(C))),E},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(E){var A=f;return function(){var D=f;f=A;try{return E.apply(this,arguments)}finally{f=D}}}})(Wd);Hd.exports=Wd;var Tm=Hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=S,Ve=Tm;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,si={};function Un(t,e){ur(t,e),ur(t+"Capture",e)}function ur(t,e){for(si[t]=e,t=0;t<e.length;t++)Gd.add(e[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},zc={};function Am(t){return fa.call(zc,t)?!0:fa.call($c,t)?!1:Rm.test(t)?zc[t]=!0:($c[t]=!0,!1)}function Om(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lm(t,e,n,r){if(e===null||typeof e>"u"||Om(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function xl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wl,xl);pe[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wl,xl);pe[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wl,xl);pe[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function _l(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lm(e,n,i,r)&&(n=null),r||i===null?Am(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Tr(t){return t===null||typeof t!="object"?null:(t=Fc&&t[Fc]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Po;function Ur(t){if(Po===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Po=e&&e[1]||""}return`
`+Po+t}var Ro=!1;function Ao(t,e){if(!t||Ro)return"";Ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ro=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ur(t):""}function jm(t){switch(t.tag){case 5:return Ur(t.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return t=Ao(t.type,!1),t;case 11:return t=Ao(t.type.render,!1),t;case 1:return t=Ao(t.type,!0),t;default:return""}}function ga(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bn:return"Fragment";case Vn:return"Portal";case ha:return"Profiler";case kl:return"StrictMode";case pa:return"Suspense";case ma:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qd:return(t.displayName||"Context")+".Consumer";case Kd:return(t._context.displayName||"Context")+".Provider";case El:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sl:return e=t.displayName||null,e!==null?e:ga(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return ga(t(e))}catch{}}return null}function Dm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(e);case 8:return e===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mm(t){var e=qd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fi(t){t._valueTracker||(t._valueTracker=Mm(t))}function Jd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ks(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ya(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xd(t,e){e=e.checked,e!=null&&_l(t,"checked",e,!1)}function va(t,e){Xd(t,e);var n=dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&wa(t,e.type,dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wa(t,e,n){(e!=="number"||ks(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $r=Array.isArray;function er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if($r(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dn(n)}}function Zd(t,e){var n=dn(e.value),r=dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ef(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ef(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vi,tf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Um=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(t){Um.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wr[e]=Wr[t]})});function nf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wr.hasOwnProperty(t)&&Wr[t]?(""+e).trim():e+"px"}function rf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $m=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(t,e){if(e){if($m[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Il(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,tr=null,nr=null;function Gc(t){if(t=Ti(t)){if(typeof Ia!="function")throw Error(x(280));var e=t.stateNode;e&&(e=oo(e),Ia(t.stateNode,t.type,e))}}function sf(t){tr?nr?nr.push(t):nr=[t]:tr=t}function of(){if(tr){var t=tr,e=nr;if(nr=tr=null,Gc(t),e)for(t=0;t<e.length;t++)Gc(e[t])}}function af(t,e){return t(e)}function lf(){}var Oo=!1;function cf(t,e,n){if(Oo)return t(e,n);Oo=!0;try{return af(t,e,n)}finally{Oo=!1,(tr!==null||nr!==null)&&(lf(),of())}}function ai(t,e){var n=t.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Ca=!1;if(Ot)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Ca=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Ca=!1}function zm(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(m){this.onError(m)}}var Gr=!1,Es=null,Ss=!1,ba=null,Fm={onError:function(t){Gr=!0,Es=t}};function Vm(t,e,n,r,i,s,o,a,l){Gr=!1,Es=null,zm.apply(Fm,arguments)}function Bm(t,e,n,r,i,s,o,a,l){if(Vm.apply(this,arguments),Gr){if(Gr){var u=Es;Gr=!1,Es=null}else throw Error(x(198));Ss||(Ss=!0,ba=u)}}function $n(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kc(t){if($n(t)!==t)throw Error(x(188))}function Hm(t){var e=t.alternate;if(!e){if(e=$n(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kc(i),t;if(s===r)return Kc(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function df(t){return t=Hm(t),t!==null?ff(t):null}function ff(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ff(t);if(e!==null)return e;t=t.sibling}return null}var hf=Ve.unstable_scheduleCallback,Qc=Ve.unstable_cancelCallback,Wm=Ve.unstable_shouldYield,Gm=Ve.unstable_requestPaint,re=Ve.unstable_now,Km=Ve.unstable_getCurrentPriorityLevel,Cl=Ve.unstable_ImmediatePriority,pf=Ve.unstable_UserBlockingPriority,Is=Ve.unstable_NormalPriority,Qm=Ve.unstable_LowPriority,mf=Ve.unstable_IdlePriority,no=null,mt=null;function Ym(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(no,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Xm,qm=Math.log,Jm=Math.LN2;function Xm(t){return t>>>=0,t===0?32:31-(qm(t)/Jm|0)|0}var Bi=64,Hi=4194304;function zr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zr(a):(s&=o,s!==0&&(r=zr(s)))}else o=n&~i,o!==0?r=zr(o):s!==0&&(r=zr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function Zm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zm(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gf(){var t=Bi;return Bi<<=1,!(Bi&4194240)&&(Bi=64),t}function Lo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function tg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function yf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vf,Nl,wf,xf,_f,Ta=!1,Wi=[],en=null,tn=null,nn=null,li=new Map,ci=new Map,Gt=[],ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":li.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(e.pointerId)}}function Rr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ti(e),e!==null&&Nl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rg(t,e,n,r,i){switch(e){case"focusin":return en=Rr(en,t,e,n,r,i),!0;case"dragenter":return tn=Rr(tn,t,e,n,r,i),!0;case"mouseover":return nn=Rr(nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return li.set(s,Rr(li.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ci.set(s,Rr(ci.get(s)||null,t,e,n,r,i)),!0}return!1}function kf(t){var e=Sn(t.target);if(e!==null){var n=$n(e);if(n!==null){if(e=n.tag,e===13){if(e=uf(n),e!==null){t.blockedOn=e,_f(t.priority,function(){wf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function as(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=Ti(n),e!==null&&Nl(e),t.blockedOn=n,!1;e.shift()}return!0}function qc(t,e,n){as(t)&&n.delete(e)}function ig(){Ta=!1,en!==null&&as(en)&&(en=null),tn!==null&&as(tn)&&(tn=null),nn!==null&&as(nn)&&(nn=null),li.forEach(qc),ci.forEach(qc)}function Ar(t,e){t.blockedOn===e&&(t.blockedOn=null,Ta||(Ta=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,ig)))}function ui(t){function e(i){return Ar(i,t)}if(0<Wi.length){Ar(Wi[0],t);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(en!==null&&Ar(en,t),tn!==null&&Ar(tn,t),nn!==null&&Ar(nn,t),li.forEach(e),ci.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)kf(n),n.blockedOn===null&&Gt.shift()}var rr=zt.ReactCurrentBatchConfig,bs=!0;function sg(t,e,n,r){var i=B,s=rr.transition;rr.transition=null;try{B=1,Tl(t,e,n,r)}finally{B=i,rr.transition=s}}function og(t,e,n,r){var i=B,s=rr.transition;rr.transition=null;try{B=4,Tl(t,e,n,r)}finally{B=i,rr.transition=s}}function Tl(t,e,n,r){if(bs){var i=Pa(t,e,n,r);if(i===null)Ho(t,e,r,Ns,n),Yc(t,r);else if(rg(i,t,e,n,r))r.stopPropagation();else if(Yc(t,r),e&4&&-1<ng.indexOf(t)){for(;i!==null;){var s=Ti(i);if(s!==null&&vf(s),s=Pa(t,e,n,r),s===null&&Ho(t,e,r,Ns,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ho(t,e,r,null,n)}}var Ns=null;function Pa(t,e,n,r){if(Ns=null,t=Il(r),t=Sn(t),t!==null)if(e=$n(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ns=t,null}function Ef(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case Cl:return 1;case pf:return 4;case Is:case Qm:return 16;case mf:return 536870912;default:return 16}default:return 16}}var Xt=null,Pl=null,ls=null;function Sf(){if(ls)return ls;var t,e=Pl,n=e.length,r,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ls=i.slice(t,1<r?1-r:void 0)}function cs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gi(){return!0}function Jc(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gi:Jc,this.isPropagationStopped=Jc,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),e}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=He(_r),Ni=ee({},_r,{view:0,detail:0}),ag=He(Ni),jo,Do,Or,ro=ee({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Or&&(Or&&t.type==="mousemove"?(jo=t.screenX-Or.screenX,Do=t.screenY-Or.screenY):Do=jo=0,Or=t),jo)},movementY:function(t){return"movementY"in t?t.movementY:Do}}),Xc=He(ro),lg=ee({},ro,{dataTransfer:0}),cg=He(lg),ug=ee({},Ni,{relatedTarget:0}),Mo=He(ug),dg=ee({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=He(dg),hg=ee({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pg=He(hg),mg=ee({},_r,{data:0}),Zc=He(mg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vg[t])?!!e[t]:!1}function Al(){return wg}var xg=ee({},Ni,{key:function(t){if(t.key){var e=gg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(t){return t.type==="keypress"?cs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_g=He(xg),kg=ee({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=He(kg),Eg=ee({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),Sg=He(Eg),Ig=ee({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cg=He(Ig),bg=ee({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=He(bg),Tg=[9,13,27,32],Ol=Ot&&"CompositionEvent"in window,Kr=null;Ot&&"documentMode"in document&&(Kr=document.documentMode);var Pg=Ot&&"TextEvent"in window&&!Kr,If=Ot&&(!Ol||Kr&&8<Kr&&11>=Kr),tu=String.fromCharCode(32),nu=!1;function Cf(t,e){switch(t){case"keyup":return Tg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1;function Rg(t,e){switch(t){case"compositionend":return bf(e);case"keypress":return e.which!==32?null:(nu=!0,tu);case"textInput":return t=e.data,t===tu&&nu?null:t;default:return null}}function Ag(t,e){if(Hn)return t==="compositionend"||!Ol&&Cf(t,e)?(t=Sf(),ls=Pl=Xt=null,Hn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return If&&e.locale!=="ko"?null:e.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Og[t.type]:e==="textarea"}function Nf(t,e,n,r){sf(r),e=Ts(e,"onChange"),0<e.length&&(n=new Rl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qr=null,di=null;function Lg(t){$f(t,0)}function io(t){var e=Kn(t);if(Jd(e))return t}function jg(t,e){if(t==="change")return e}var Tf=!1;if(Ot){var Uo;if(Ot){var $o="oninput"in document;if(!$o){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),$o=typeof iu.oninput=="function"}Uo=$o}else Uo=!1;Tf=Uo&&(!document.documentMode||9<document.documentMode)}function su(){Qr&&(Qr.detachEvent("onpropertychange",Pf),di=Qr=null)}function Pf(t){if(t.propertyName==="value"&&io(di)){var e=[];Nf(e,di,t,Il(t)),cf(Lg,e)}}function Dg(t,e,n){t==="focusin"?(su(),Qr=e,di=n,Qr.attachEvent("onpropertychange",Pf)):t==="focusout"&&su()}function Mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(di)}function Ug(t,e){if(t==="click")return io(e)}function $g(t,e){if(t==="input"||t==="change")return io(e)}function zg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lt=typeof Object.is=="function"?Object.is:zg;function fi(t,e){if(lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fa.call(e,i)||!lt(t[i],e[i]))return!1}return!0}function ou(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function au(t,e){var n=ou(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function Rf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Af(){for(var t=window,e=ks();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ks(t.document)}return e}function Ll(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fg(t){var e=Af(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rf(n.ownerDocument.documentElement,n)){if(r!==null&&Ll(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=au(n,s);var o=au(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vg=Ot&&"documentMode"in document&&11>=document.documentMode,Wn=null,Ra=null,Yr=null,Aa=!1;function lu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||Wn==null||Wn!==ks(r)||(r=Wn,"selectionStart"in r&&Ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&fi(Yr,r)||(Yr=r,r=Ts(Ra,"onSelect"),0<r.length&&(e=new Rl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wn)))}function Ki(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gn={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},zo={},Of={};Ot&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function so(t){if(zo[t])return zo[t];if(!Gn[t])return t;var e=Gn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Of)return zo[t]=e[n];return t}var Lf=so("animationend"),jf=so("animationiteration"),Df=so("animationstart"),Mf=so("transitionend"),Uf=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){Uf.set(t,e),Un(e,[t])}for(var Fo=0;Fo<cu.length;Fo++){var Vo=cu[Fo],Bg=Vo.toLowerCase(),Hg=Vo[0].toUpperCase()+Vo.slice(1);hn(Bg,"on"+Hg)}hn(Lf,"onAnimationEnd");hn(jf,"onAnimationIteration");hn(Df,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Mf,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function uu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bm(r,e,void 0,t),t.currentTarget=null}function $f(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uu(i,a,u),s=l}}}if(Ss)throw t=ba,Ss=!1,ba=null,t}function K(t,e){var n=e[Ma];n===void 0&&(n=e[Ma]=new Set);var r=t+"__bubble";n.has(r)||(zf(e,t,2,!1),n.add(r))}function Bo(t,e,n){var r=0;e&&(r|=4),zf(n,t,r,e)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function hi(t){if(!t[Qi]){t[Qi]=!0,Gd.forEach(function(n){n!=="selectionchange"&&(Wg.has(n)||Bo(n,!1,t),Bo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qi]||(e[Qi]=!0,Bo("selectionchange",!1,e))}}function zf(t,e,n,r){switch(Ef(e)){case 1:var i=sg;break;case 4:i=og;break;default:i=Tl}n=i.bind(null,e,n,t),i=void 0,!Ca||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ho(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cf(function(){var u=s,m=Il(n),p=[];e:{var f=Uf.get(t);if(f!==void 0){var y=Rl,w=t;switch(t){case"keypress":if(cs(n)===0)break e;case"keydown":case"keyup":y=_g;break;case"focusin":w="focus",y=Mo;break;case"focusout":w="blur",y=Mo;break;case"beforeblur":case"afterblur":y=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sg;break;case Lf:case jf:case Df:y=fg;break;case Mf:y=Cg;break;case"scroll":y=ag;break;case"wheel":y=Ng;break;case"copy":case"cut":case"paste":y=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu}var _=(e&4)!==0,R=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,h!==null&&(v=ai(d,h),v!=null&&_.push(pi(d,v,g)))),R)break;d=d.return}0<_.length&&(f=new y(f,w,null,n,m),p.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Sa&&(w=n.relatedTarget||n.fromElement)&&(Sn(w)||w[Lt]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Sn(w):null,w!==null&&(R=$n(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=Xc,v="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=eu,v="onPointerLeave",h="onPointerEnter",d="pointer"),R=y==null?f:Kn(y),g=w==null?f:Kn(w),f=new _(v,d+"leave",y,n,m),f.target=R,f.relatedTarget=g,v=null,Sn(m)===u&&(_=new _(h,d+"enter",w,n,m),_.target=g,_.relatedTarget=R,v=_),R=v,y&&w)t:{for(_=y,h=w,d=0,g=_;g;g=Fn(g))d++;for(g=0,v=h;v;v=Fn(v))g++;for(;0<d-g;)_=Fn(_),d--;for(;0<g-d;)h=Fn(h),g--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=Fn(_),h=Fn(h)}_=null}else _=null;y!==null&&du(p,f,y,_,!1),w!==null&&R!==null&&du(p,R,w,_,!0)}}e:{if(f=u?Kn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=jg;else if(ru(f))if(Tf)C=$g;else{C=Mg;var T=Dg}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Ug);if(C&&(C=C(t,u))){Nf(p,C,n,m);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&wa(f,"number",f.value)}switch(T=u?Kn(u):window,t){case"focusin":(ru(T)||T.contentEditable==="true")&&(Wn=T,Ra=u,Yr=null);break;case"focusout":Yr=Ra=Wn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,lu(p,n,m);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":lu(p,n,m)}var P;if(Ol)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Hn?Cf(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(If&&n.locale!=="ko"&&(Hn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Hn&&(P=Sf()):(Xt=m,Pl="value"in Xt?Xt.value:Xt.textContent,Hn=!0)),T=Ts(u,k),0<T.length&&(k=new Zc(k,t,null,n,m),p.push({event:k,listeners:T}),P?k.data=P:(P=bf(n),P!==null&&(k.data=P)))),(P=Pg?Rg(t,n):Ag(t,n))&&(u=Ts(u,"onBeforeInput"),0<u.length&&(m=new Zc("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=P))}$f(p,e)})}function pi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ts(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ai(t,n),s!=null&&r.unshift(pi(t,s,i)),s=ai(t,e),s!=null&&r.push(pi(t,s,i))),t=t.return}return r}function Fn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function du(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ai(n,s),l!=null&&o.unshift(pi(n,l,a))):i||(l=ai(n,s),l!=null&&o.push(pi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gg=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function fu(t){return(typeof t=="string"?t:""+t).replace(Gg,`
`).replace(Kg,"")}function Yi(t,e,n){if(e=fu(e),fu(t)!==e&&n)throw Error(x(425))}function Ps(){}var Oa=null,La=null;function ja(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(t){return hu.resolve(null).then(t).catch(qg)}:Da;function qg(t){setTimeout(function(){throw t})}function Wo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(e)}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var kr=Math.random().toString(36).slice(2),ht="__reactFiber$"+kr,mi="__reactProps$"+kr,Lt="__reactContainer$"+kr,Ma="__reactEvents$"+kr,Jg="__reactListeners$"+kr,Xg="__reactHandles$"+kr;function Sn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lt]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pu(t);t!==null;){if(n=t[ht])return n;t=pu(t)}return e}t=n,n=t.parentNode}return null}function Ti(t){return t=t[ht]||t[Lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function oo(t){return t[mi]||null}var Ua=[],Qn=-1;function pn(t){return{current:t}}function Q(t){0>Qn||(t.current=Ua[Qn],Ua[Qn]=null,Qn--)}function G(t,e){Qn++,Ua[Qn]=t.current,t.current=e}var fn={},xe=pn(fn),Ae=pn(!1),Rn=fn;function dr(t,e){var n=t.type.contextTypes;if(!n)return fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(t){return t=t.childContextTypes,t!=null}function Rs(){Q(Ae),Q(xe)}function mu(t,e,n){if(xe.current!==fn)throw Error(x(168));G(xe,e),G(Ae,n)}function Ff(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Dm(t)||"Unknown",i));return ee({},n,r)}function As(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fn,Rn=xe.current,G(xe,t),G(Ae,Ae.current),!0}function gu(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Ff(t,e,Rn),r.__reactInternalMemoizedMergedChildContext=t,Q(Ae),Q(xe),G(xe,t)):Q(Ae),G(Ae,n)}var Ct=null,ao=!1,Go=!1;function Vf(t){Ct===null?Ct=[t]:Ct.push(t)}function Zg(t){ao=!0,Vf(t)}function mn(){if(!Go&&Ct!==null){Go=!0;var t=0,e=B;try{var n=Ct;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ct=null,ao=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(t+1)),hf(Cl,mn),i}finally{B=e,Go=!1}}return null}var Yn=[],qn=0,Os=null,Ls=0,Ge=[],Ke=0,An=null,Nt=1,Tt="";function _n(t,e){Yn[qn++]=Ls,Yn[qn++]=Os,Os=t,Ls=e}function Bf(t,e,n){Ge[Ke++]=Nt,Ge[Ke++]=Tt,Ge[Ke++]=An,An=t;var r=Nt;t=Tt;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-ot(e)+i|n<<i|r,Tt=s+t}else Nt=1<<s|n<<i|r,Tt=t}function jl(t){t.return!==null&&(_n(t,1),Bf(t,1,0))}function Dl(t){for(;t===Os;)Os=Yn[--qn],Yn[qn]=null,Ls=Yn[--qn],Yn[qn]=null;for(;t===An;)An=Ge[--Ke],Ge[Ke]=null,Tt=Ge[--Ke],Ge[Ke]=null,Nt=Ge[--Ke],Ge[Ke]=null}var Fe=null,ze=null,Y=!1,it=null;function Hf(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fe=t,ze=rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fe=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=An!==null?{id:Nt,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fe=t,ze=null,!0):!1;default:return!1}}function $a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function za(t){if(Y){var e=ze;if(e){var n=e;if(!yu(t,e)){if($a(t))throw Error(x(418));e=rn(n.nextSibling);var r=Fe;e&&yu(t,e)?Hf(r,n):(t.flags=t.flags&-4097|2,Y=!1,Fe=t)}}else{if($a(t))throw Error(x(418));t.flags=t.flags&-4097|2,Y=!1,Fe=t}}}function vu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fe=t}function qi(t){if(t!==Fe)return!1;if(!Y)return vu(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ja(t.type,t.memoizedProps)),e&&(e=ze)){if($a(t))throw Wf(),Error(x(418));for(;e;)Hf(t,e),e=rn(e.nextSibling)}if(vu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=Fe?rn(t.stateNode.nextSibling):null;return!0}function Wf(){for(var t=ze;t;)t=rn(t.nextSibling)}function fr(){ze=Fe=null,Y=!1}function Ml(t){it===null?it=[t]:it.push(t)}var e0=zt.ReactCurrentBatchConfig;function Lr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ji(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wu(t){var e=t._init;return e(t._payload)}function Gf(t){function e(h,d){if(t){var g=h.deletions;g===null?(h.deletions=[d],h.flags|=16):g.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=ln(h,d),h.index=0,h.sibling=null,h}function s(h,d,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<d?(h.flags|=2,d):g):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,g,v){return d===null||d.tag!==6?(d=Zo(g,h.mode,v),d.return=h,d):(d=i(d,g),d.return=h,d)}function l(h,d,g,v){var C=g.type;return C===Bn?m(h,d,g.props.children,v,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&wu(C)===d.type)?(v=i(d,g.props),v.ref=Lr(h,d,g),v.return=h,v):(v=gs(g.type,g.key,g.props,null,h.mode,v),v.ref=Lr(h,d,g),v.return=h,v)}function u(h,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ea(g,h.mode,v),d.return=h,d):(d=i(d,g.children||[]),d.return=h,d)}function m(h,d,g,v,C){return d===null||d.tag!==7?(d=Tn(g,h.mode,v,C),d.return=h,d):(d=i(d,g),d.return=h,d)}function p(h,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Zo(""+d,h.mode,g),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zi:return g=gs(d.type,d.key,d.props,null,h.mode,g),g.ref=Lr(h,null,d),g.return=h,g;case Vn:return d=ea(d,h.mode,g),d.return=h,d;case Ht:var v=d._init;return p(h,v(d._payload),g)}if($r(d)||Tr(d))return d=Tn(d,h.mode,g,null),d.return=h,d;Ji(h,d)}return null}function f(h,d,g,v){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(h,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zi:return g.key===C?l(h,d,g,v):null;case Vn:return g.key===C?u(h,d,g,v):null;case Ht:return C=g._init,f(h,d,C(g._payload),v)}if($r(g)||Tr(g))return C!==null?null:m(h,d,g,v,null);Ji(h,g)}return null}function y(h,d,g,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(g)||null,a(d,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zi:return h=h.get(v.key===null?g:v.key)||null,l(d,h,v,C);case Vn:return h=h.get(v.key===null?g:v.key)||null,u(d,h,v,C);case Ht:var T=v._init;return y(h,d,g,T(v._payload),C)}if($r(v)||Tr(v))return h=h.get(g)||null,m(d,h,v,C,null);Ji(d,v)}return null}function w(h,d,g,v){for(var C=null,T=null,P=d,k=d=0,M=null;P!==null&&k<g.length;k++){P.index>k?(M=P,P=null):M=P.sibling;var O=f(h,P,g[k],v);if(O===null){P===null&&(P=M);break}t&&P&&O.alternate===null&&e(h,P),d=s(O,d,k),T===null?C=O:T.sibling=O,T=O,P=M}if(k===g.length)return n(h,P),Y&&_n(h,k),C;if(P===null){for(;k<g.length;k++)P=p(h,g[k],v),P!==null&&(d=s(P,d,k),T===null?C=P:T.sibling=P,T=P);return Y&&_n(h,k),C}for(P=r(h,P);k<g.length;k++)M=y(P,h,k,g[k],v),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?k:M.key),d=s(M,d,k),T===null?C=M:T.sibling=M,T=M);return t&&P.forEach(function(L){return e(h,L)}),Y&&_n(h,k),C}function _(h,d,g,v){var C=Tr(g);if(typeof C!="function")throw Error(x(150));if(g=C.call(g),g==null)throw Error(x(151));for(var T=C=null,P=d,k=d=0,M=null,O=g.next();P!==null&&!O.done;k++,O=g.next()){P.index>k?(M=P,P=null):M=P.sibling;var L=f(h,P,O.value,v);if(L===null){P===null&&(P=M);break}t&&P&&L.alternate===null&&e(h,P),d=s(L,d,k),T===null?C=L:T.sibling=L,T=L,P=M}if(O.done)return n(h,P),Y&&_n(h,k),C;if(P===null){for(;!O.done;k++,O=g.next())O=p(h,O.value,v),O!==null&&(d=s(O,d,k),T===null?C=O:T.sibling=O,T=O);return Y&&_n(h,k),C}for(P=r(h,P);!O.done;k++,O=g.next())O=y(P,h,k,O.value,v),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?k:O.key),d=s(O,d,k),T===null?C=O:T.sibling=O,T=O);return t&&P.forEach(function(ie){return e(h,ie)}),Y&&_n(h,k),C}function R(h,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Bn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zi:e:{for(var C=g.key,T=d;T!==null;){if(T.key===C){if(C=g.type,C===Bn){if(T.tag===7){n(h,T.sibling),d=i(T,g.props.children),d.return=h,h=d;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&wu(C)===T.type){n(h,T.sibling),d=i(T,g.props),d.ref=Lr(h,T,g),d.return=h,h=d;break e}n(h,T);break}else e(h,T);T=T.sibling}g.type===Bn?(d=Tn(g.props.children,h.mode,v,g.key),d.return=h,h=d):(v=gs(g.type,g.key,g.props,null,h.mode,v),v.ref=Lr(h,d,g),v.return=h,h=v)}return o(h);case Vn:e:{for(T=g.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(h,d.sibling),d=i(d,g.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=ea(g,h.mode,v),d.return=h,h=d}return o(h);case Ht:return T=g._init,R(h,d,T(g._payload),v)}if($r(g))return w(h,d,g,v);if(Tr(g))return _(h,d,g,v);Ji(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,g),d.return=h,h=d):(n(h,d),d=Zo(g,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return R}var hr=Gf(!0),Kf=Gf(!1),js=pn(null),Ds=null,Jn=null,Ul=null;function $l(){Ul=Jn=Ds=null}function zl(t){var e=js.current;Q(js),t._currentValue=e}function Fa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ir(t,e){Ds=t,Ul=Jn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Re=!0),t.firstContext=null)}function qe(t){var e=t._currentValue;if(Ul!==t)if(t={context:t,memoizedValue:e,next:null},Jn===null){if(Ds===null)throw Error(x(308));Jn=t,Ds.dependencies={lanes:0,firstContext:t}}else Jn=Jn.next=t;return e}var In=null;function Fl(t){In===null?In=[t]:In.push(t)}function Qf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fl(e)):(n.next=i.next,i.next=n),e.interleaved=n,jt(t,r)}function jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Vl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Fl(r)):(e.next=i.next,i.next=e),r.interleaved=e,jt(t,n)}function us(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bl(t,n)}}function xu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ms(t,e,n,r){var i=t.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,m=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(f=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(y,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,f=typeof w=="function"?w.call(y,p,f):w,f==null)break e;p=ee({},p,f);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,l=p):m=m.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(m===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ln|=o,t.lanes=o,t.memoizedState=p}}function _u(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Pi={},gt=pn(Pi),gi=pn(Pi),yi=pn(Pi);function Cn(t){if(t===Pi)throw Error(x(174));return t}function Bl(t,e){switch(G(yi,e),G(gi,t),G(gt,Pi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_a(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_a(e,t)}Q(gt),G(gt,e)}function pr(){Q(gt),Q(gi),Q(yi)}function qf(t){Cn(yi.current);var e=Cn(gt.current),n=_a(e,t.type);e!==n&&(G(gi,t),G(gt,n))}function Hl(t){gi.current===t&&(Q(gt),Q(gi))}var X=pn(0);function Us(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ko=[];function Wl(){for(var t=0;t<Ko.length;t++)Ko[t]._workInProgressVersionPrimary=null;Ko.length=0}var ds=zt.ReactCurrentDispatcher,Qo=zt.ReactCurrentBatchConfig,On=0,Z=null,ae=null,ue=null,$s=!1,qr=!1,vi=0,t0=0;function ye(){throw Error(x(321))}function Gl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!lt(t[n],e[n]))return!1;return!0}function Kl(t,e,n,r,i,s){if(On=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ds.current=t===null||t.memoizedState===null?s0:o0,t=n(r,i),qr){s=0;do{if(qr=!1,vi=0,25<=s)throw Error(x(301));s+=1,ue=ae=null,e.updateQueue=null,ds.current=a0,t=n(r,i)}while(qr)}if(ds.current=zs,e=ae!==null&&ae.next!==null,On=0,ue=ae=Z=null,$s=!1,e)throw Error(x(300));return t}function Ql(){var t=vi!==0;return vi=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=t:ue=ue.next=t,ue}function Je(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=ue===null?Z.memoizedState:ue.next;if(e!==null)ue=e,ae=t;else{if(t===null)throw Error(x(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?Z.memoizedState=ue=t:ue=ue.next=t}return ue}function wi(t,e){return typeof e=="function"?e(t):e}function Yo(t){var e=Je(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var m=u.lane;if((On&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Z.lanes|=m,Ln|=m}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,lt(r,e.memoizedState)||(Re=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Ln|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qo(t){var e=Je(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);lt(s,e.memoizedState)||(Re=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jf(){}function Xf(t,e){var n=Z,r=Je(),i=e(),s=!lt(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,Yl(th.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,xi(9,eh.bind(null,n,r,i,e),void 0,null),de===null)throw Error(x(349));On&30||Zf(n,e,i)}return i}function Zf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eh(t,e,n,r){e.value=n,e.getSnapshot=r,nh(e)&&rh(t)}function th(t,e,n){return n(function(){nh(e)&&rh(t)})}function nh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!lt(t,n)}catch{return!0}}function rh(t){var e=jt(t,1);e!==null&&at(e,t,1,-1)}function ku(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:t},e.queue=t,t=t.dispatch=i0.bind(null,Z,t),[e.memoizedState,t]}function xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ih(){return Je().memoizedState}function fs(t,e,n,r){var i=ft();Z.flags|=t,i.memoizedState=xi(1|e,n,void 0,r===void 0?null:r)}function lo(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Gl(r,o.deps)){i.memoizedState=xi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=xi(1|e,n,s,r)}function Eu(t,e){return fs(8390656,8,t,e)}function Yl(t,e){return lo(2048,8,t,e)}function sh(t,e){return lo(4,2,t,e)}function oh(t,e){return lo(4,4,t,e)}function ah(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lh(t,e,n){return n=n!=null?n.concat([t]):null,lo(4,4,ah.bind(null,e,t),n)}function ql(){}function ch(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uh(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dh(t,e,n){return On&21?(lt(n,e)||(n=gf(),Z.lanes|=n,Ln|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Re=!0),t.memoizedState=n)}function n0(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Qo.transition;Qo.transition={};try{t(!1),e()}finally{B=n,Qo.transition=r}}function fh(){return Je().memoizedState}function r0(t,e,n){var r=an(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hh(t))ph(e,n);else if(n=Qf(t,e,n,r),n!==null){var i=Se();at(n,t,r,i),mh(n,e,r)}}function i0(t,e,n){var r=an(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hh(t))ph(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,lt(a,o)){var l=e.interleaved;l===null?(i.next=i,Fl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Qf(t,e,i,r),n!==null&&(i=Se(),at(n,t,r,i),mh(n,e,r))}}function hh(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function ph(t,e){qr=$s=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bl(t,n)}}var zs={readContext:qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},s0={readContext:qe,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:qe,useEffect:Eu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fs(4194308,4,ah.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fs(4194308,4,t,e)},useInsertionEffect:function(t,e){return fs(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=r0.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:ku,useDebugValue:ql,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=ku(!1),e=t[0];return t=n0.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ft();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),de===null)throw Error(x(349));On&30||Zf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eu(th.bind(null,r,s,t),[t]),r.flags|=2048,xi(9,eh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=de.identifierPrefix;if(Y){var n=Tt,r=Nt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=t0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},o0={readContext:qe,useCallback:ch,useContext:qe,useEffect:Yl,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:uh,useReducer:Yo,useRef:ih,useState:function(){return Yo(wi)},useDebugValue:ql,useDeferredValue:function(t){var e=Je();return dh(e,ae.memoizedState,t)},useTransition:function(){var t=Yo(wi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:fh,unstable_isNewReconciler:!1},a0={readContext:qe,useCallback:ch,useContext:qe,useEffect:Yl,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:uh,useReducer:qo,useRef:ih,useState:function(){return qo(wi)},useDebugValue:ql,useDeferredValue:function(t){var e=Je();return ae===null?e.memoizedState=t:dh(e,ae.memoizedState,t)},useTransition:function(){var t=qo(wi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:fh,unstable_isNewReconciler:!1};function nt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Va(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var co={isMounted:function(t){return(t=t._reactInternals)?$n(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=an(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(at(e,t,i,r),us(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=an(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(at(e,t,i,r),us(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=an(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=sn(t,i,r),e!==null&&(at(e,t,r,n),us(e,t,r))}};function Su(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fi(n,r)||!fi(i,s):!0}function gh(t,e,n){var r=!1,i=fn,s=e.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=Oe(e)?Rn:xe.current,r=e.contextTypes,s=(r=r!=null)?dr(t,i):fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=co,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Iu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&co.enqueueReplaceState(e,e.state,null)}function Ba(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=Oe(e)?Rn:xe.current,i.context=dr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Va(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&co.enqueueReplaceState(i,i.state,null),Ms(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mr(t,e){try{var n="",r=e;do n+=jm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ha(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l0=typeof WeakMap=="function"?WeakMap:Map;function yh(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vs||(Vs=!0,el=r),Ha(t,e)},n}function vh(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ha(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ha(t,e),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new l0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=k0.bind(null,t,e,n),e.then(t,t))}function bu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,sn(n,e,1))),n.lanes|=1),t)}var c0=zt.ReactCurrentOwner,Re=!1;function Ee(t,e,n,r){e.child=t===null?Kf(e,null,n,r):hr(e,t.child,n,r)}function Tu(t,e,n,r,i){n=n.render;var s=e.ref;return ir(e,i),r=Kl(t,e,n,r,s,i),n=Ql(),t!==null&&!Re?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(Y&&n&&jl(e),e.flags|=1,Ee(t,e,r,i),e.child)}function Pu(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ic(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wh(t,e,s,r,i)):(t=gs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fi,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function wh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fi(s,r)&&t.ref===e.ref)if(Re=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Re=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return Wa(t,e,n,r,i)}function xh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Zn,Ue),Ue|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Zn,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Zn,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Zn,Ue),Ue|=r;return Ee(t,e,i,n),e.child}function _h(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wa(t,e,n,r,i){var s=Oe(n)?Rn:xe.current;return s=dr(e,s),ir(e,i),n=Kl(t,e,n,r,s,i),r=Ql(),t!==null&&!Re?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(Y&&r&&jl(e),e.flags|=1,Ee(t,e,n,i),e.child)}function Ru(t,e,n,r,i){if(Oe(n)){var s=!0;As(e)}else s=!1;if(ir(e,i),e.stateNode===null)hs(t,e),gh(e,n,r),Ba(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=Oe(n)?Rn:xe.current,u=dr(e,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Iu(e,o,r,u),Wt=!1;var f=e.memoizedState;o.state=f,Ms(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ae.current||Wt?(typeof m=="function"&&(Va(e,n,m,r),l=e.memoizedState),(a=Wt||Su(e,n,a,r,f,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Yf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nt(e.type,a),o.props=u,p=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qe(l):(l=Oe(n)?Rn:xe.current,l=dr(e,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||f!==l)&&Iu(e,o,r,l),Wt=!1,f=e.memoizedState,o.state=f,Ms(e,r,o,i);var w=e.memoizedState;a!==p||f!==w||Ae.current||Wt?(typeof y=="function"&&(Va(e,n,y,r),w=e.memoizedState),(u=Wt||Su(e,n,u,r,f,w,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ga(t,e,n,r,s,i)}function Ga(t,e,n,r,i,s){_h(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gu(e,n,!1),Dt(t,e,s);r=e.stateNode,c0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hr(e,t.child,null,s),e.child=hr(e,null,a,s)):Ee(t,e,a,s),e.memoizedState=r.state,i&&gu(e,n,!0),e.child}function kh(t){var e=t.stateNode;e.pendingContext?mu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mu(t,e.context,!1),Bl(t,e.containerInfo)}function Au(t,e,n,r,i){return fr(),Ml(i),e.flags|=256,Ee(t,e,n,r),e.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eh(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return za(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ho(o,r,0,null),t=Tn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qa(n),e.memoizedState=Ka,t):Jl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return u0(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ln(a,s):(s=Tn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ka,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jl(t,e){return e=ho({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xi(t,e,n,r){return r!==null&&Ml(r),hr(e,t.child,null,n),t=Jl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jo(Error(x(422))),Xi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ho({mode:"visible",children:r.children},i,0,null),s=Tn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hr(e,t.child,null,o),e.child.memoizedState=Qa(o),e.memoizedState=Ka,s);if(!(e.mode&1))return Xi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Jo(s,r,void 0),Xi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Re||a){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jt(t,i),at(r,t,i,-1))}return rc(),r=Jo(Error(x(421))),Xi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=E0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ze=rn(i.nextSibling),Fe=e,Y=!0,it=null,t!==null&&(Ge[Ke++]=Nt,Ge[Ke++]=Tt,Ge[Ke++]=An,Nt=t.id,Tt=t.overflow,An=e),e=Jl(e,r.children),e.flags|=4096,e)}function Ou(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fa(t.return,e,n)}function Xo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ou(t,n,e);else if(t.tag===19)Ou(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Us(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Us(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xo(e,!0,n,null,s);break;case"together":Xo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ln|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function d0(t,e,n){switch(e.tag){case 3:kh(e),fr();break;case 5:qf(e);break;case 1:Oe(e.type)&&As(e);break;case 4:Bl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(js,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Eh(t,e,n):(G(X,X.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,xh(t,e,n)}return Dt(t,e,n)}var Ih,Ya,Ch,bh;Ih=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Ch=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cn(gt.current);var s=null;switch(n){case"input":i=ya(t,i),r=ya(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=xa(t,i),r=xa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ps)}ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(si.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(si.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bh=function(t,e,n,r){n!==r&&(e.flags|=4)};function jr(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function f0(t,e,n){var r=e.pendingProps;switch(Dl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return Oe(e.type)&&Rs(),ve(e),null;case 3:return r=e.stateNode,pr(),Q(Ae),Q(xe),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(rl(it),it=null))),Ya(t,e),ve(e),null;case 5:Hl(e);var i=Cn(yi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ch(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ve(e),null}if(t=Cn(gt.current),qi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[mi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)K(Fr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Vc(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":Hc(r,s),K("invalid",r)}ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),i=["children",""+a]):si.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Fi(r),Bc(r,s,!0);break;case"textarea":Fi(r),Wc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ps)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ef(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[mi]=r,Ih(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ea(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)K(Fr[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Vc(t,r),i=ya(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",t);break;case"textarea":Hc(t,r),i=xa(t,r),K("invalid",t);break;default:i=r}ka(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oi(t,l):typeof l=="number"&&oi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(si.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",t):l!=null&&_l(t,s,l,o))}switch(n){case"input":Fi(t),Bc(t,r,!1);break;case"textarea":Fi(t),Wc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?er(t,!!r.multiple,s,!1):r.defaultValue!=null&&er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)bh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Cn(yi.current),Cn(gt.current),qi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=Fe,t!==null))switch(t.tag){case 3:Yi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return ve(e),null;case 13:if(Q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&ze!==null&&e.mode&1&&!(e.flags&128))Wf(),fr(),e.flags|=98560,s=!1;else if(s=qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[ht]=e}else fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else it!==null&&(rl(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?le===0&&(le=3):rc())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return pr(),Ya(t,e),t===null&&hi(e.stateNode.containerInfo),ve(e),null;case 10:return zl(e.type._context),ve(e),null;case 17:return Oe(e.type)&&Rs(),ve(e),null;case 19:if(Q(X),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)jr(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Us(t),o!==null){for(e.flags|=128,jr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>gr&&(e.flags|=128,r=!0,jr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Us(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return ve(e),null}else 2*re()-s.renderingStartTime>gr&&n!==1073741824&&(e.flags|=128,r=!0,jr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return nc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function h0(t,e){switch(Dl(e),e.tag){case 1:return Oe(e.type)&&Rs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pr(),Q(Ae),Q(xe),Wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hl(e),null;case 13:if(Q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(X),null;case 4:return pr(),null;case 10:return zl(e.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Zi=!1,we=!1,p0=typeof WeakSet=="function"?WeakSet:Set,N=null;function Xn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function qa(t,e,n){try{n()}catch(r){te(t,e,r)}}var Lu=!1;function m0(t,e){if(Oa=bs,t=Af(),Ll(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,m=0,p=t,f=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++m===r&&(l=o),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(La={focusedElem:t,selectionRange:n},bs=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,R=w.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:nt(e.type,_),R);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){te(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return w=Lu,Lu=!1,w}function Jr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qa(e,n,s)}i=i.next}while(i!==r)}}function uo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ja(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nh(t){var e=t.alternate;e!==null&&(t.alternate=null,Nh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[mi],delete e[Ma],delete e[Jg],delete e[Xg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Th(t){return t.tag===5||t.tag===3||t.tag===4}function ju(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Th(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ps));else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}var fe=null,rt=!1;function Vt(t,e,n){for(n=n.child;n!==null;)Ph(t,e,n),n=n.sibling}function Ph(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(no,n)}catch{}switch(n.tag){case 5:we||Xn(n,e);case 6:var r=fe,i=rt;fe=null,Vt(t,e,n),fe=r,rt=i,fe!==null&&(rt?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(rt?(t=fe,n=n.stateNode,t.nodeType===8?Wo(t.parentNode,n):t.nodeType===1&&Wo(t,n),ui(t)):Wo(fe,n.stateNode));break;case 4:r=fe,i=rt,fe=n.stateNode.containerInfo,rt=!0,Vt(t,e,n),fe=r,rt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qa(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!we&&(Xn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,e,a)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Vt(t,e,n),we=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function Du(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p0),e.forEach(function(r){var i=S0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,rt=!1;break e;case 3:fe=a.stateNode.containerInfo,rt=!0;break e;case 4:fe=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(fe===null)throw Error(x(160));Ph(s,o,i),fe=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rh(e,t),e=e.sibling}function Rh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),dt(t),r&4){try{Jr(3,t,t.return),uo(3,t)}catch(_){te(t,t.return,_)}try{Jr(5,t,t.return)}catch(_){te(t,t.return,_)}}break;case 1:tt(e,t),dt(t),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(tt(e,t),dt(t),r&512&&n!==null&&Xn(n,n.return),t.flags&32){var i=t.stateNode;try{oi(i,"")}catch(_){te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xd(i,s),Ea(a,o);var u=Ea(a,s);for(o=0;o<l.length;o+=2){var m=l[o],p=l[o+1];m==="style"?rf(i,p):m==="dangerouslySetInnerHTML"?tf(i,p):m==="children"?oi(i,p):_l(i,m,p,u)}switch(a){case"input":va(i,s);break;case"textarea":Zd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?er(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?er(i,!!s.multiple,s.defaultValue,!0):er(i,!!s.multiple,s.multiple?[]:"",!1))}i[mi]=s}catch(_){te(t,t.return,_)}}break;case 6:if(tt(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){te(t,t.return,_)}}break;case 3:if(tt(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(e.containerInfo)}catch(_){te(t,t.return,_)}break;case 4:tt(e,t),dt(t);break;case 13:tt(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=re())),r&4&&Du(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||m,tt(e,t),we=u):tt(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!m&&t.mode&1)for(N=t,m=t.child;m!==null;){for(p=N=m;N!==null;){switch(f=N,y=f.child,f.tag){case 0:case 11:case 14:case 15:Jr(4,f,f.return);break;case 1:Xn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){te(r,n,_)}}break;case 5:Xn(f,f.return);break;case 22:if(f.memoizedState!==null){Uu(p);continue}}y!==null?(y.return=f,N=y):Uu(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nf("display",o))}catch(_){te(t,t.return,_)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){te(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tt(e,t),dt(t),r&4&&Du(t);break;case 21:break;default:tt(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Th(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var s=ju(t);Za(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ju(t);Xa(t,a,o);break;default:throw Error(x(161))}}catch(l){te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function g0(t,e,n){N=t,Ah(t)}function Ah(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=Zi;var u=we;if(Zi=o,(we=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?$u(i):l!==null?(l.return=o,N=l):$u(i);for(;s!==null;)N=s,Ah(s),s=s.sibling;N=i,Zi=a,we=u}Mu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Mu(t)}}function Mu(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||uo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_u(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_u(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&ui(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}we||e.flags&512&&Ja(e)}catch(f){te(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Uu(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function $u(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uo(4,e)}catch(l){te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){te(e,i,l)}}var s=e.return;try{Ja(e)}catch(l){te(e,s,l)}break;case 5:var o=e.return;try{Ja(e)}catch(l){te(e,o,l)}}}catch(l){te(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var y0=Math.ceil,Fs=zt.ReactCurrentDispatcher,Xl=zt.ReactCurrentOwner,Ye=zt.ReactCurrentBatchConfig,z=0,de=null,oe=null,he=0,Ue=0,Zn=pn(0),le=0,_i=null,Ln=0,fo=0,Zl=0,Xr=null,Pe=null,ec=0,gr=1/0,St=null,Vs=!1,el=null,on=null,es=!1,Zt=null,Bs=0,Zr=0,tl=null,ps=-1,ms=0;function Se(){return z&6?re():ps!==-1?ps:ps=re()}function an(t){return t.mode&1?z&2&&he!==0?he&-he:e0.transition!==null?(ms===0&&(ms=gf()),ms):(t=B,t!==0||(t=window.event,t=t===void 0?16:Ef(t.type)),t):1}function at(t,e,n,r){if(50<Zr)throw Zr=0,tl=null,Error(x(185));bi(t,n,r),(!(z&2)||t!==de)&&(t===de&&(!(z&2)&&(fo|=n),le===4&&Kt(t,he)),Le(t,r),n===1&&z===0&&!(e.mode&1)&&(gr=re()+500,ao&&mn()))}function Le(t,e){var n=t.callbackNode;eg(t,e);var r=Cs(t,t===de?he:0);if(r===0)n!==null&&Qc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qc(n),e===1)t.tag===0?Zg(zu.bind(null,t)):Vf(zu.bind(null,t)),Yg(function(){!(z&6)&&mn()}),n=null;else{switch(yf(r)){case 1:n=Cl;break;case 4:n=pf;break;case 16:n=Is;break;case 536870912:n=mf;break;default:n=Is}n=zh(n,Oh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Oh(t,e){if(ps=-1,ms=0,z&6)throw Error(x(327));var n=t.callbackNode;if(sr()&&t.callbackNode!==n)return null;var r=Cs(t,t===de?he:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hs(t,r);else{e=r;var i=z;z|=2;var s=jh();(de!==t||he!==e)&&(St=null,gr=re()+500,Nn(t,e));do try{x0();break}catch(a){Lh(t,a)}while(1);$l(),Fs.current=s,z=i,oe!==null?e=0:(de=null,he=0,e=le)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=nl(t,i))),e===1)throw n=_i,Nn(t,0),Kt(t,r),Le(t,re()),n;if(e===6)Kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!v0(i)&&(e=Hs(t,r),e===2&&(s=Na(t),s!==0&&(r=s,e=nl(t,s))),e===1))throw n=_i,Nn(t,0),Kt(t,r),Le(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:kn(t,Pe,St);break;case 3:if(Kt(t,r),(r&130023424)===r&&(e=ec+500-re(),10<e)){if(Cs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Da(kn.bind(null,t,Pe,St),e);break}kn(t,Pe,St);break;case 4:if(Kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y0(r/1960))-r,10<r){t.timeoutHandle=Da(kn.bind(null,t,Pe,St),r);break}kn(t,Pe,St);break;case 5:kn(t,Pe,St);break;default:throw Error(x(329))}}}return Le(t,re()),t.callbackNode===n?Oh.bind(null,t):null}function nl(t,e){var n=Xr;return t.current.memoizedState.isDehydrated&&(Nn(t,e).flags|=256),t=Hs(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&rl(e)),t}function rl(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function v0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~Zl,e&=~fo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function zu(t){if(z&6)throw Error(x(327));sr();var e=Cs(t,0);if(!(e&1))return Le(t,re()),null;var n=Hs(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=nl(t,r))}if(n===1)throw n=_i,Nn(t,0),Kt(t,e),Le(t,re()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kn(t,Pe,St),Le(t,re()),null}function tc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(gr=re()+500,ao&&mn())}}function jn(t){Zt!==null&&Zt.tag===0&&!(z&6)&&sr();var e=z;z|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,t)return t()}finally{B=r,Ye.transition=n,z=e,!(z&6)&&mn()}}function nc(){Ue=Zn.current,Q(Zn)}function Nn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qg(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rs();break;case 3:pr(),Q(Ae),Q(xe),Wl();break;case 5:Hl(r);break;case 4:pr();break;case 13:Q(X);break;case 19:Q(X);break;case 10:zl(r.type._context);break;case 22:case 23:nc()}n=n.return}if(de=t,oe=t=ln(t.current,null),he=Ue=e,le=0,_i=null,Zl=fo=Ln=0,Pe=Xr=null,In!==null){for(e=0;e<In.length;e++)if(n=In[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}In=null}return t}function Lh(t,e){do{var n=oe;try{if($l(),ds.current=zs,$s){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$s=!1}if(On=0,ue=ae=Z=null,qr=!1,vi=0,Xl.current=null,n===null||n.return===null){le=1,_i=e,oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=bu(o);if(y!==null){y.flags&=-257,Nu(y,o,a,s,e),y.mode&1&&Cu(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){Cu(s,u,e),rc();break e}l=Error(x(426))}}else if(Y&&a.mode&1){var R=bu(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Nu(R,o,a,s,e),Ml(mr(l,a));break e}}s=l=mr(l,a),le!==4&&(le=2),Xr===null?Xr=[s]:Xr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=yh(s,l,e);xu(s,h);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(on===null||!on.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=vh(s,a,e);xu(s,v);break e}}s=s.return}while(s!==null)}Mh(n)}catch(C){e=C,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function jh(){var t=Fs.current;return Fs.current=zs,t===null?zs:t}function rc(){(le===0||le===3||le===2)&&(le=4),de===null||!(Ln&268435455)&&!(fo&268435455)||Kt(de,he)}function Hs(t,e){var n=z;z|=2;var r=jh();(de!==t||he!==e)&&(St=null,Nn(t,e));do try{w0();break}catch(i){Lh(t,i)}while(1);if($l(),z=n,Fs.current=r,oe!==null)throw Error(x(261));return de=null,he=0,le}function w0(){for(;oe!==null;)Dh(oe)}function x0(){for(;oe!==null&&!Wm();)Dh(oe)}function Dh(t){var e=$h(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?Mh(t):oe=e,Xl.current=null}function Mh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h0(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,oe=null;return}}else if(n=f0(n,e,Ue),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);le===0&&(le=5)}function kn(t,e,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,_0(t,e,n,r)}finally{Ye.transition=i,B=r}return null}function _0(t,e,n,r){do sr();while(Zt!==null);if(z&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tg(t,s),t===de&&(oe=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||es||(es=!0,zh(Is,function(){return sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=B;B=1;var a=z;z|=4,Xl.current=null,m0(t,n),Rh(n,t),Fg(La),bs=!!Oa,La=Oa=null,t.current=n,g0(n),Gm(),z=a,B=o,Ye.transition=s}else t.current=n;if(es&&(es=!1,Zt=t,Bs=i),s=t.pendingLanes,s===0&&(on=null),Ym(n.stateNode),Le(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vs)throw Vs=!1,t=el,el=null,t;return Bs&1&&t.tag!==0&&sr(),s=t.pendingLanes,s&1?t===tl?Zr++:(Zr=0,tl=t):Zr=0,mn(),null}function sr(){if(Zt!==null){var t=yf(Bs),e=Ye.transition,n=B;try{if(Ye.transition=null,B=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,Bs=0,z&6)throw Error(x(331));var i=z;for(z|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Jr(8,m,s)}var p=m.child;if(p!==null)p.return=m,N=p;else for(;N!==null;){m=N;var f=m.sibling,y=m.return;if(Nh(m),m===u){N=null;break}if(f!==null){f.return=y,N=f;break}N=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,N=h;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uo(9,a)}}catch(C){te(a,a.return,C)}if(a===o){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(z=i,mn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(no,t)}catch{}r=!0}return r}finally{B=n,Ye.transition=e}}return!1}function Fu(t,e,n){e=mr(n,e),e=yh(t,e,1),t=sn(t,e,1),e=Se(),t!==null&&(bi(t,1,e),Le(t,e))}function te(t,e,n){if(t.tag===3)Fu(t,t,n);else for(;e!==null;){if(e.tag===3){Fu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){t=mr(n,t),t=vh(e,t,1),e=sn(e,t,1),t=Se(),e!==null&&(bi(e,1,t),Le(e,t));break}}e=e.return}}function k0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>re()-ec?Nn(t,0):Zl|=n),Le(t,e)}function Uh(t,e){e===0&&(t.mode&1?(e=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):e=1);var n=Se();t=jt(t,e),t!==null&&(bi(t,e,n),Le(t,n))}function E0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uh(t,n)}function S0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Uh(t,n)}var $h;$h=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ae.current)Re=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Re=!1,d0(t,e,n);Re=!!(t.flags&131072)}else Re=!1,Y&&e.flags&1048576&&Bf(e,Ls,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hs(t,e),t=e.pendingProps;var i=dr(e,xe.current);ir(e,n),i=Kl(null,e,r,t,i,n);var s=Ql();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Oe(r)?(s=!0,As(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vl(e),i.updater=co,e.stateNode=i,i._reactInternals=e,Ba(e,r,t,n),e=Ga(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&jl(e),Ee(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=C0(r),t=nt(r,t),i){case 0:e=Wa(null,e,r,t,n);break e;case 1:e=Ru(null,e,r,t,n);break e;case 11:e=Tu(null,e,r,t,n);break e;case 14:e=Pu(null,e,r,nt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Wa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Ru(t,e,r,i,n);case 3:e:{if(kh(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Yf(t,e),Ms(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mr(Error(x(423)),e),e=Au(t,e,r,n,i);break e}else if(r!==i){i=mr(Error(x(424)),e),e=Au(t,e,r,n,i);break e}else for(ze=rn(e.stateNode.containerInfo.firstChild),Fe=e,Y=!0,it=null,n=Kf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){e=Dt(t,e,n);break e}Ee(t,e,r,n)}e=e.child}return e;case 5:return qf(e),t===null&&za(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ja(r,i)?o=null:s!==null&&ja(r,s)&&(e.flags|=32),_h(t,e),Ee(t,e,o,n),e.child;case 6:return t===null&&za(e),null;case 13:return Eh(t,e,n);case 4:return Bl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hr(e,null,r,n):Ee(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Tu(t,e,r,i,n);case 7:return Ee(t,e,e.pendingProps,n),e.child;case 8:return Ee(t,e,e.pendingProps.children,n),e.child;case 12:return Ee(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(js,r._currentValue),r._currentValue=o,s!==null)if(lt(s.value,o)){if(s.children===i.children&&!Ae.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=At(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fa(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ee(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ir(e,n),i=qe(i),r=r(i),e.flags|=1,Ee(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),Pu(t,e,r,i,n);case 15:return wh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),hs(t,e),e.tag=1,Oe(r)?(t=!0,As(e)):t=!1,ir(e,n),gh(e,r,i),Ba(e,r,i,n),Ga(null,e,r,!0,t,n);case 19:return Sh(t,e,n);case 22:return xh(t,e,n)}throw Error(x(156,e.tag))};function zh(t,e){return hf(t,e)}function I0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new I0(t,e,n,r)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C0(t){if(typeof t=="function")return ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===El)return 11;if(t===Sl)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ic(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bn:return Tn(n.children,i,s,e);case kl:o=8,i|=8;break;case ha:return t=Qe(12,n,e,i|2),t.elementType=ha,t.lanes=s,t;case pa:return t=Qe(13,n,e,i),t.elementType=pa,t.lanes=s,t;case ma:return t=Qe(19,n,e,i),t.elementType=ma,t.lanes=s,t;case Yd:return ho(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kd:o=10;break e;case Qd:o=9;break e;case El:o=11;break e;case Sl:o=14;break e;case Ht:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Tn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function ho(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Yd,t.lanes=n,t.stateNode={isHidden:!1},t}function Zo(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function ea(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lo(0),this.expirationTimes=Lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sc(t,e,n,r,i,s,o,a,l){return t=new b0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(s),t}function N0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fh(t){if(!t)return fn;t=t._reactInternals;e:{if($n(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Oe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Oe(n))return Ff(t,n,e)}return e}function Vh(t,e,n,r,i,s,o,a,l){return t=sc(n,r,!0,t,i,s,o,a,l),t.context=Fh(null),n=t.current,r=Se(),i=an(n),s=At(r,i),s.callback=e??null,sn(n,s,i),t.current.lanes=i,bi(t,i,r),Le(t,r),t}function po(t,e,n,r){var i=e.current,s=Se(),o=an(i);return n=Fh(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sn(i,e,o),t!==null&&(at(t,i,o,s),us(t,i,o)),o}function Ws(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oc(t,e){Vu(t,e),(t=t.alternate)&&Vu(t,e)}function T0(){return null}var Bh=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}mo.prototype.render=ac.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));po(t,e,null,null)};mo.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jn(function(){po(null,t,null,null)}),e[Lt]=null}};function mo(t){this._internalRoot=t}mo.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&kf(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function go(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function P0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ws(o);s.call(u)}}var o=Vh(e,r,t,0,null,!1,!1,"",Bu);return t._reactRootContainer=o,t[Lt]=o.current,hi(t.nodeType===8?t.parentNode:t),jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ws(l);a.call(u)}}var l=sc(t,0,!1,null,null,!1,!1,"",Bu);return t._reactRootContainer=l,t[Lt]=l.current,hi(t.nodeType===8?t.parentNode:t),jn(function(){po(e,l,n,r)}),l}function yo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ws(o);a.call(l)}}po(e,o,t,i)}else o=P0(n,e,t,i,r);return Ws(o)}vf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zr(e.pendingLanes);n!==0&&(bl(e,n|1),Le(e,re()),!(z&6)&&(gr=re()+500,mn()))}break;case 13:jn(function(){var r=jt(t,1);if(r!==null){var i=Se();at(r,t,1,i)}}),oc(t,1)}};Nl=function(t){if(t.tag===13){var e=jt(t,134217728);if(e!==null){var n=Se();at(e,t,134217728,n)}oc(t,134217728)}};wf=function(t){if(t.tag===13){var e=an(t),n=jt(t,e);if(n!==null){var r=Se();at(n,t,e,r)}oc(t,e)}};xf=function(){return B};_f=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ia=function(t,e,n){switch(e){case"input":if(va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oo(r);if(!i)throw Error(x(90));Jd(r),va(r,i)}}}break;case"textarea":Zd(t,n);break;case"select":e=n.value,e!=null&&er(t,!!n.multiple,e,!1)}};af=tc;lf=jn;var R0={usingClientEntryPoint:!1,Events:[Ti,Kn,oo,sf,of,tc]},Dr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=df(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{no=ts.inject(A0),mt=ts}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(e))throw Error(x(200));return N0(t,e,null,n)};Be.createRoot=function(t,e){if(!lc(t))throw Error(x(299));var n=!1,r="",i=Bh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sc(t,1,!1,null,null,n,!1,r,i),t[Lt]=e.current,hi(t.nodeType===8?t.parentNode:t),new ac(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=df(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return jn(t)};Be.hydrate=function(t,e,n){if(!go(e))throw Error(x(200));return yo(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!lc(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vh(e,null,t,1,n??null,i,!1,s,o),t[Lt]=e.current,hi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mo(e)};Be.render=function(t,e,n){if(!go(e))throw Error(x(200));return yo(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!go(t))throw Error(x(40));return t._reactRootContainer?(jn(function(){yo(null,null,t,!1,function(){t._reactRootContainer=null,t[Lt]=null})}),!0):!1};Be.unstable_batchedUpdates=tc;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!go(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return yo(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hh)}catch(t){console.error(t)}}Hh(),Bd.exports=Be;var O0=Bd.exports,Hu=O0;da.createRoot=Hu.createRoot,da.hydrateRoot=Hu.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=t=>{const e=j0(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=S.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>S.createElement("svg",{ref:l,...D0,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Wh("lucide",i),...!s&&!M0(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,m])=>S.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(t,e)=>{const n=S.forwardRef(({className:r,...i},s)=>S.createElement(U0,{ref:s,iconNode:e,className:Wh(`lucide-${L0(Wu(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Wu(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gh=H("chevron-right",$0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Kh=H("circle-alert",z0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],V0=H("circle-check",F0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],Gu=H("circle-pause",B0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ku=H("circle-play",H0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],cc=H("crown",W0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Qh=H("download",G0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Q0=H("eye",K0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],q0=H("file-code",Y0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],Gs=H("headset",J0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],uc=H("history",X0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Yh=H("loader-circle",Z0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],il=H("lock",e1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],dc=H("log-out",t1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Qu=H("mail",n1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],i1=H("panels-top-left",r1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],o1=H("pause",s1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yu=H("phone",a1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],qh=H("play",l1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],u1=H("sparkles",c1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fc=H("star",d1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],h1=H("toggle-left",f1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],m1=H("toggle-right",p1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],qu=H("trash-2",g1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],vo=H("user",y1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],w1=H("volume-2",v1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jh=H("x",x1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ki=H("zap",_1),k1=()=>{};/**
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
 */const Xh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},E1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,m=s>>2,p=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[m],n[p],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):E1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new S1;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I1=function(t){const e=Xh(t);return Zh.encodeByteArray(e,!0)},ep=function(t){return I1(t).replace(/\./g,"")},tp=function(t){try{return Zh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function C1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b1=()=>C1().__FIREBASE_DEFAULTS__,N1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},T1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tp(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return k1()||b1()||N1()||T1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},P1=t=>{var e,n;return(n=(e=hc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},np=()=>{var t;return(t=hc())==null?void 0:t.config},rp=t=>{var e;return(e=hc())==null?void 0:e[`_${t}`]};/**
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
 */class R1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function A1(t){return(await fetch(t,{credentials:"include"})).ok}const ei={};function O1(){const t={prod:[],emulator:[]};for(const e of Object.keys(ei))ei[e]?t.emulator.push(e):t.prod.push(e);return t}function L1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ju=!1;function j1(t,e){if(typeof window>"u"||typeof document>"u"||!wo(window.location.host)||ei[t]===e||ei[t]||Ju)return;ei[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=O1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,y){f.setAttribute("width","24"),f.setAttribute("id",y),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Ju=!0,o()},f}function m(f,y){f.setAttribute("id",y),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=L1(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),R=document.getElementById(_)||document.createElement("a"),h=n("preprendIcon"),d=document.getElementById(h)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const g=f.element;a(g),m(R,_);const v=u();l(d,h),g.append(d,w,R,v),document.body.appendChild(g)}s?(w.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function M1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function U1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z1(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F1(){try{return typeof indexedDB=="object"}catch{return!1}}function V1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const B1="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=B1,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?H1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function H1(t,e){return t.replace(W1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const W1=/\{\$([^}]+)}/g;function G1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xu(s)&&Xu(o)){if(!yr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xu(t){return t!==null&&typeof t=="object"}/**
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
 */function Er(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Br(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function K1(t,e){const n=new Q1(t,e);return n.subscribe.bind(n)}class Q1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ta),i.error===void 0&&(i.error=ta),i.complete===void 0&&(i.complete=ta);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ta(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class q1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new R1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(t){return t===En?void 0:t}function X1(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new q1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const ey={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},ty=W.INFO,ny={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},ry=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ny[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ip{constructor(e){this.name=e,this._logLevel=ty,this._logHandler=ry,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const iy=(t,e)=>e.some(n=>t instanceof n);let Zu,ed;function sy(){return Zu||(Zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oy(){return ed||(ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,sl=new WeakMap,op=new WeakMap,na=new WeakMap,pc=new WeakMap;function ay(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sp.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function ly(t){if(sl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cy(t){ol=t(ol)}function uy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ra(this),e,...n);return op.set(r,e.sort?e.sort():[e]),cn(r)}:oy().includes(t)?function(...e){return t.apply(ra(this),e),cn(sp.get(this))}:function(...e){return cn(t.apply(ra(this),e))}}function dy(t){return typeof t=="function"?uy(t):(t instanceof IDBTransaction&&ly(t),iy(t,sy())?new Proxy(t,ol):t)}function cn(t){if(t instanceof IDBRequest)return ay(t);if(na.has(t))return na.get(t);const e=dy(t);return e!==t&&(na.set(t,e),pc.set(e,t)),e}const ra=t=>pc.get(t);function fy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cn(o.result),l.oldVersion,l.newVersion,cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const hy=["get","getKey","getAll","getAllKeys","count"],py=["put","add","delete","clear"],ia=new Map;function td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=py.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ia.set(e,s),s}cy(t=>({...t,get:(e,n,r)=>td(e,n)||t.get(e,n,r),has:(e,n)=>!!td(e,n)||t.has(e,n)}));/**
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
 */class my{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",nd="0.14.8";/**
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
 */const Mt=new ip("@firebase/app"),yy="@firebase/app-compat",vy="@firebase/analytics-compat",wy="@firebase/analytics",xy="@firebase/app-check-compat",_y="@firebase/app-check",ky="@firebase/auth",Ey="@firebase/auth-compat",Sy="@firebase/database",Iy="@firebase/data-connect",Cy="@firebase/database-compat",by="@firebase/functions",Ny="@firebase/functions-compat",Ty="@firebase/installations",Py="@firebase/installations-compat",Ry="@firebase/messaging",Ay="@firebase/messaging-compat",Oy="@firebase/performance",Ly="@firebase/performance-compat",jy="@firebase/remote-config",Dy="@firebase/remote-config-compat",My="@firebase/storage",Uy="@firebase/storage-compat",$y="@firebase/firestore",zy="@firebase/ai",Fy="@firebase/firestore-compat",Vy="firebase",By="12.9.0";/**
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
 */const ll="[DEFAULT]",Hy={[al]:"fire-core",[yy]:"fire-core-compat",[wy]:"fire-analytics",[vy]:"fire-analytics-compat",[_y]:"fire-app-check",[xy]:"fire-app-check-compat",[ky]:"fire-auth",[Ey]:"fire-auth-compat",[Sy]:"fire-rtdb",[Iy]:"fire-data-connect",[Cy]:"fire-rtdb-compat",[by]:"fire-fn",[Ny]:"fire-fn-compat",[Ty]:"fire-iid",[Py]:"fire-iid-compat",[Ry]:"fire-fcm",[Ay]:"fire-fcm-compat",[Oy]:"fire-perf",[Ly]:"fire-perf-compat",[jy]:"fire-rc",[Dy]:"fire-rc-compat",[My]:"fire-gcs",[Uy]:"fire-gcs-compat",[$y]:"fire-fst",[Fy]:"fire-fst-compat",[zy]:"fire-vertex","fire-js":"fire-js",[Vy]:"fire-js-all"};/**
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
 */const Ks=new Map,Wy=new Map,cl=new Map;function rd(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(cl.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of Ks.values())rd(n,t);for(const n of Wy.values())rd(n,t);return!0}function ap(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $e(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Gy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new Ri("app","Firebase",Gy);/**
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
 */class Ky{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const Ai=By;function lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ll,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=np()),!n)throw un.create("no-options");const s=Ks.get(i);if(s){if(yr(n,s.options)&&yr(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new Z1(i);for(const l of cl.values())o.addComponent(l);const a=new Ky(n,r,o);return Ks.set(i,a),a}function Qy(t=ll){const e=Ks.get(t);if(!e&&t===ll&&np())return lp();if(!e)throw un.create("no-app",{appName:t});return e}function or(t,e,n){let r=Hy[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(o.join(" "));return}Ei(new vr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yy="firebase-heartbeat-database",qy=1,Si="firebase-heartbeat-store";let sa=null;function cp(){return sa||(sa=fy(Yy,qy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Si)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),sa}async function Jy(t){try{const n=(await cp()).transaction(Si),r=await n.objectStore(Si).get(up(t));return await n.done,r}catch(e){if(e instanceof gn)Mt.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function id(t,e){try{const r=(await cp()).transaction(Si,"readwrite");await r.objectStore(Si).put(e,up(t)),await r.done}catch(n){if(n instanceof gn)Mt.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(r.message)}}}function up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xy=1024,Zy=30;class ev{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Zy){const o=rv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sd(),{heartbeatsToSend:r,unsentEntries:i}=tv(this._heartbeatsCache.heartbeats),s=ep(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mt.warn(n),""}}}function sd(){return new Date().toISOString().substring(0,10)}function tv(t,e=Xy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F1()?V1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return id(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return id(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function od(t){return ep(JSON.stringify({version:2,heartbeats:t})).length}function rv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function iv(t){Ei(new vr("platform-logger",e=>new my(e),"PRIVATE")),Ei(new vr("heartbeat",e=>new ev(e),"PRIVATE")),or(al,nd,t),or(al,nd,"esm2020"),or("fire-js","")}iv("");var sv="firebase",ov="12.9.0";/**
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
 */or(sv,ov,"app");function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const av=dp,fp=new Ri("auth","Firebase",dp());/**
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
 */const Qs=new ip("@firebase/auth");function lv(t,...e){Qs.logLevel<=W.WARN&&Qs.warn(`Auth (${Ai}): ${t}`,...e)}function ys(t,...e){Qs.logLevel<=W.ERROR&&Qs.error(`Auth (${Ai}): ${t}`,...e)}/**
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
 */function Xe(t,...e){throw gc(t,...e)}function je(t,...e){return gc(t,...e)}function mc(t,e,n){const r={...av(),[e]:n};return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function yt(t){return mc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(t,"argument-error"),mc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fp.create(t,...e)}function I(t,e,...n){if(!t)throw gc(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function Ut(t,e){t||Pt(e)}/**
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
 */function ul(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function hp(){return ad()==="http:"||ad()==="https:"}function ad(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function uv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hp()||U1()||"connection"in navigator)?navigator.onLine:!0}function dv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=D1()||$1()}get(){return uv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yc(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pv=new Oi(3e4,6e4);function Ne(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function De(t,e,n,r,i={}){return mp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Er({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return M1()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&wo(t.emulatorConfig.host)&&(u.credentials="include"),pp.fetch()(await gp(t,t.config.apiHost,n,a),u)})}async function mp(t,e,n){t._canInitEmulator=!1;const r={...fv,...e};try{const i=new gv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hr(t,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mc(t,m,u);Xe(t,m)}}catch(i){if(i instanceof gn)throw i;Xe(t,"network-request-failed",{message:String(i)})}}async function yn(t,e,n,r,i={}){const s=await De(t,e,n,r,i);return"mfaPendingCredential"in s&&Xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gp(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?yc(t.config,i):`${t.config.apiScheme}://${i}`;return hv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function mv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),pv.get())})}}function Hr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=je(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function ld(t){return t!==void 0&&t.getResponse!==void 0}function cd(t){return t!==void 0&&t.enterprise!==void 0}class yp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function yv(t){return(await De(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function vp(t,e){return De(t,"GET","/v2/recaptchaConfig",Ne(t,e))}/**
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
 */async function vv(t,e){return De(t,"POST","/v1/accounts:delete",e)}async function Ys(t,e){return De(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wv(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=vc(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ti(oa(i.auth_time)),issuedAtTime:ti(oa(i.iat)),expirationTime:ti(oa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oa(t){return Number(t)*1e3}function vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=tp(n);return i?JSON.parse(i):(ys("Failed to decode base64 JWT payload"),null)}catch(i){return ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ud(t){const e=vc(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&xv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _v{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qs(t){var p;const e=t.auth,n=await t.getIdToken(),r=await wr(t,Ys(e,{idToken:n}));I(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?wp(i.providerUserInfo):[],o=Ev(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,m)}async function kv(t){const e=Ze(t);await qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ev(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Sv(t,e){const n=await mp(t,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await gp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&wo(t.emulatorConfig.host)&&(l.credentials="include"),pp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Iv(t,e){return De(t,"POST","/v2/accounts:revokeToken",Ne(t,e))}/**
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
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){I(e.length!==0,"internal-error");const n=ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ar;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Bt(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new _v(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wr(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wv(this,e)}reload(){return kv(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await wr(this,vv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:y,providerData:w,stsTokenManager:_}=n;I(p&&_,e,"internal-error");const R=ar.fromJSON(this.name,_);I(typeof p=="string",e,"internal-error"),Bt(r,e.name),Bt(i,e.name),I(typeof f=="boolean",e,"internal-error"),I(typeof y=="boolean",e,"internal-error"),Bt(s,e.name),Bt(o,e.name),Bt(a,e.name),Bt(l,e.name),Bt(u,e.name),Bt(m,e.name);const h=new st({uid:p,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:R,createdAt:u,lastLoginAt:m});return w&&Array.isArray(w)&&(h.providerData=w.map(d=>({...d}))),l&&(h._redirectEventId=l),h}static async _fromIdTokenResponse(e,n,r=!1){const i=new ar;i.updateFromServerResponse(n);const s=new st({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];I(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ar;a.updateFromIdToken(r);const l=new st({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const dd=new Map;function Rt(t){Ut(t instanceof Function,"Expected a class definition");let e=dd.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dd.set(t,e),e)}/**
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
 */class xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xp.type="NONE";const fd=xp;/**
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
 */function vs(t,e,n){return`firebase:${t}:${e}:${n}`}class lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vs(this.userKey,i.apiKey,s),this.fullPersistenceKey=vs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ys(this.auth,{idToken:e}).catch(()=>{});return n?st._fromGetAccountInfoResponse(this.auth,n,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new lr(Rt(fd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(fd);const o=vs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const m=await u._get(o);if(m){let p;if(typeof m=="string"){const f=await Ys(e,{idToken:m}).catch(()=>{});if(!f)break;p=await st._fromGetAccountInfoResponse(e,f,m)}else p=st._fromJSON(e,m);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new lr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new lr(s,e,r))}}/**
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
 */function hd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cp(e))return"Blackberry";if(bp(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||Ep(e))&&!e.includes("edge/"))return"Chrome";if(Ip(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _p(t=Ie()){return/firefox\//i.test(t)}function kp(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ep(t=Ie()){return/crios\//i.test(t)}function Sp(t=Ie()){return/iemobile/i.test(t)}function Ip(t=Ie()){return/android/i.test(t)}function Cp(t=Ie()){return/blackberry/i.test(t)}function bp(t=Ie()){return/webos/i.test(t)}function wc(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cv(t=Ie()){var e;return wc(t)&&!!((e=window.navigator)!=null&&e.standalone)}function bv(){return z1()&&document.documentMode===10}function Np(t=Ie()){return wc(t)||Ip(t)||bp(t)||Cp(t)||/windows phone/i.test(t)||Sp(t)}/**
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
 */function Tp(t,e=[]){let n;switch(t){case"Browser":n=hd(Ie());break;case"Worker":n=`${hd(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
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
 */class Nv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Tv(t,e={}){return De(t,"GET","/v2/passwordPolicy",Ne(t,e))}/**
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
 */const Pv=6;class Rv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Pv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Av{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new Nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ys(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(yt(this));const n=e?Ze(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tv(this),n=new Rv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Iv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&lv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function et(t){return Ze(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=K1(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ov(t){Li=t}function xc(t){return Li.loadJS(t)}function Lv(){return Li.recaptchaV2Script}function jv(){return Li.recaptchaEnterpriseScript}function Dv(){return Li.gapiScript}function Pp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Mv=500,Uv=6e4,ns=1e12;class $v{constructor(e){this.auth=e,this.counter=ns,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Vv(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||ns;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||ns;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||ns;return(r=this._widgets.get(n))==null||r.execute(),""}}class zv{constructor(){this.enterprise=new Fv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Fv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Vv{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Bv(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Uv)},Mv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Bv(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Hv="recaptcha-enterprise",ni="NO_RECAPTCHA";class Rp{constructor(e){this.type=Hv,this.auth=et(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yp(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ni)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jv();l.length!==0&&(l+=a),xc(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Mr(t,e,n,r=!1,i=!1){const s=new Rp(t);let o;if(i)o=ni;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Pn(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Mr(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Mr(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Mr(t,e,n);return r(t,a).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Mr(t,e,n,!1,!0);return r(t,m)}return Promise.reject(l)})}else{const a=await Mr(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Wv(t){const e=et(t),n=await vp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new yp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Rp(e).verify()}/**
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
 */function Gv(t,e){const n=ap(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yr(s,e??{}))return i;Xe(i,"already-initialized")}return n.initialize({options:e})}function Kv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qv(t,e,n){const r=et(t);I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ap(e),{host:o,port:a}=Yv(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){I(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),I(yr(u,r.config.emulator)&&yr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,wo(o)?(A1(`${s}//${o}${l}`),j1("Auth",!0)):i||qv()}function Ap(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yv(t){const e=Ap(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:md(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:md(o)}}}function md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function Jv(t,e){return De(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xv(t,e){return yn(t,"POST","/v1/accounts:signInWithPassword",Ne(t,e))}async function Zv(t,e){return De(t,"POST","/v1/accounts:sendOobCode",Ne(t,e))}async function ew(t,e){return Zv(t,e)}/**
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
 */async function tw(t,e){return yn(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}async function nw(t,e){return yn(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}/**
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
 */class Ii extends xo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pn(e,n,"signInWithPassword",Xv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return tw(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pn(e,r,"signUpPassword",Jv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return nw(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cr(t,e){return yn(t,"POST","/v1/accounts:signInWithIdp",Ne(t,e))}/**
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
 */const rw="http://localhost";class Dn extends xo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cr(e,n)}buildRequest(){const e={requestUri:rw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
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
 */async function gd(t,e){return De(t,"POST","/v1/accounts:sendVerificationCode",Ne(t,e))}async function iw(t,e){return yn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e))}async function sw(t,e){const n=await yn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e));if(n.temporaryProof)throw Hr(t,"account-exists-with-different-credential",n);return n}const ow={USER_NOT_FOUND:"user-not-found"};async function aw(t,e){const n={...e,operation:"REAUTH"};return yn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,n),ow)}/**
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
 */class ri extends xo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ri({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ri({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return iw(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return sw(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return aw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ri({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function lw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cw(t){const e=Vr(Br(t)).link,n=e?Vr(Br(e)).deep_link_id:null,r=Vr(Br(t)).deep_link_id;return(r?Vr(Br(r)).link:null)||r||n||e||t}class _c{constructor(e){const n=Vr(Br(e)),r=n.apiKey??null,i=n.oobCode??null,s=lw(n.mode??null);I(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=cw(e);try{return new _c(n)}catch{return null}}}/**
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
 */class Sr{constructor(){this.providerId=Sr.PROVIDER_ID}static credential(e,n){return Ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_c.parseLink(n);return I(r,"argument-error"),Ii._fromEmailAndCode(e,r.code,r.tenantId)}}Sr.PROVIDER_ID="password";Sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ji extends kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends ji{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Yt extends ji{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class qt extends ji{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
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
 */async function uw(t,e){return yn(t,"POST","/v1/accounts:signUp",Ne(t,e))}/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await st._fromIdTokenResponse(e,r,i),o=yd(r);return new Mn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yd(r);return new Mn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Js extends gn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Js.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Js(e,n,r,i)}}function Op(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Js._fromErrorAndOperation(t,s,e,r):s})}async function dw(t,e,n=!1){const r=await wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mn._forOperation(t,"link",r)}/**
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
 */async function fw(t,e,n=!1){const{auth:r}=t;if($e(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await wr(t,Op(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=vc(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),Mn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}/**
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
 */async function Lp(t,e,n=!1){if($e(t.app))return Promise.reject(yt(t));const r="signIn",i=await Op(t,r,e),s=await Mn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jp(t,e){return Lp(et(t),e)}/**
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
 */function hw(t,e,n){var r;I(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),I(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Dp(t){const e=et(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pw(t,e,n){const r=et(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&hw(r,i,n),await Pn(r,i,"getOobCode",ew,"EMAIL_PASSWORD_PROVIDER")}async function mw(t,e,n){if($e(t.app))return Promise.reject(yt(t));const r=et(t),o=await Pn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dp(t),l}),a=await Mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function gw(t,e,n){return $e(t.app)?Promise.reject(yt(t)):jp(Ze(t),Sr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dp(t),r})}/**
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
 */async function yw(t,e){return De(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ze(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await wr(r,yw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function ww(t,e){return Ze(t).setPersistence(e)}function xw(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function _w(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function kw(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function Ew(t){return Ze(t).signOut()}/**
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
 */function vd(t,e){return De(t,"POST","/v2/accounts/mfaEnrollment:start",Ne(t,e))}const Xs="__sak";/**
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
 */class Mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xs,"1"),this.storage.removeItem(Xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sw=1e3,Iw=10;class Up extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Iw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Up.type="LOCAL";const $p=Up;/**
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
 */class zp extends Mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zp.type="SESSION";const Ec=zp;/**
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
 */function Cw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Cw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
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
 */function Sc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sc("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function se(){return window}function Nw(t){se().location.href=t}/**
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
 */function Ic(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Tw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Rw(){return Ic()?self:null}/**
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
 */const Fp="firebaseLocalStorageDb",Aw=1,Zs="firebaseLocalStorage",Vp="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ko(t,e){return t.transaction([Zs],e?"readwrite":"readonly").objectStore(Zs)}function Ow(){const t=indexedDB.deleteDatabase(Fp);return new Di(t).toPromise()}function fl(){const t=indexedDB.open(Fp,Aw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zs,{keyPath:Vp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zs)?e(r):(r.close(),await Ow(),e(await fl()))})})}async function wd(t,e,n){const r=ko(t,!0).put({[Vp]:e,value:n});return new Di(r).toPromise()}async function Lw(t,e){const n=ko(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=ko(t,!0).delete(e);return new Di(n).toPromise()}const jw=800,Dw=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Dw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(Rw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Tw(),!this.activeServiceWorker)return;this.sender=new bw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fl();return await wd(e,Xs,"1"),await xd(e,Xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ko(i,!1).getAll();return new Di(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const Mw=Bp;/**
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
 */function _d(t,e){return De(t,"POST","/v2/accounts/mfaSignIn:start",Ne(t,e))}/**
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
 */const aa=Pp("rcb"),Uw=new Oi(3e4,6e4);class $w{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=se().grecaptcha)!=null&&e.render)}load(e,n=""){return I(zw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&ld(se().grecaptcha)?Promise.resolve(se().grecaptcha):new Promise((r,i)=>{const s=se().setTimeout(()=>{i(je(e,"network-request-failed"))},Uw.get());se()[aa]=()=>{se().clearTimeout(s),delete se()[aa];const a=se().grecaptcha;if(!a||!ld(a)){i(je(e,"internal-error"));return}const l=a.render;a.render=(u,m)=>{const p=l(u,m);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${Lv()}?${Er({onload:aa,render:"explicit",hl:n})}`;xc(o).catch(()=>{clearTimeout(s),i(je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=se().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Fw{async load(e){return new $v(e)}clearedOneInstance(){}}/**
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
 */const ii="recaptcha",Vw={theme:"light",type:"image"};class Bw{constructor(e,n,r={...Vw}){this.parameters=r,this.type=ii,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=et(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fw:new $w,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(hp()&&!Ic(),this.auth,"internal-error"),await Hw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await yv(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Hw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ww{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ri._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Gw(t,e,n){if($e(t.app))return Promise.reject(yt(t));const r=et(t),i=await Kw(r,e,Ze(n));return new Ww(i,s=>jp(r,s))}async function Kw(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Wv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){I(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Pn(t,o,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===ni){I((n==null?void 0:n.type)===ii,m,"argument-error");const f=await la(m,p,n);return vd(m,f)}return vd(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{I(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;I(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Pn(t,a,"mfaSmsSignIn",async(p,f)=>{if(f.phoneSignInInfo.captchaResponse===ni){I((n==null?void 0:n.type)===ii,p,"argument-error");const y=await la(p,f,n);return _d(p,y)}return _d(p,f)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Pn(t,s,"sendVerificationCode",async(u,m)=>{if(m.captchaResponse===ni){I((n==null?void 0:n.type)===ii,u,"argument-error");const p=await la(u,m,n);return gd(u,p)}return gd(u,m)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function la(t,e,n){I(n.type===ii,t,"argument-error");const r=await n.verify();I(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Hp(t,e){return e?Rt(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cc extends xo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qw(t){return Lp(t.auth,new Cc(t),t.bypassAuthState)}function Yw(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),fw(n,new Cc(t),t.bypassAuthState)}async function qw(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),dw(n,new Cc(t),t.bypassAuthState)}/**
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
 */class Wp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qw;case"linkViaPopup":case"linkViaRedirect":return qw;case"reauthViaPopup":case"reauthViaRedirect":return Yw;default:Xe(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jw=new Oi(2e3,1e4);async function Xw(t,e,n){if($e(t.app))return Promise.reject(je(t,"operation-not-supported-in-this-environment"));const r=et(t);cv(t,e,kc);const i=Hp(r,n);return new bn(r,"signInViaPopup",e,i).executeNotNull()}class bn extends Wp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jw.get())};e()}}bn.currentPopupAction=null;/**
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
 */const Zw="pendingRedirect",ws=new Map;class ex extends Wp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const r=await tx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tx(t,e){const n=ix(e),r=rx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nx(t,e){ws.set(t._key(),e)}function rx(t){return Rt(t._redirectPersistence)}function ix(t){return vs(Zw,t.config.apiKey,t.name)}async function sx(t,e,n=!1){if($e(t.app))return Promise.reject(yt(t));const r=et(t),i=Hp(r,e),o=await new ex(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ox=10*60*1e3;class ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ox&&this.cachedEventUids.clear(),this.cachedEventUids.has(kd(e))}saveEventToCache(e){this.cachedEventUids.add(kd(e)),this.lastProcessedEventTime=Date.now()}}function kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gp(t);default:return!1}}/**
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
 */async function cx(t,e={}){return De(t,"GET","/v1/projects",e)}/**
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
 */const ux=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dx=/^https?/;async function fx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cx(t);for(const n of e)try{if(hx(n))return}catch{}Xe(t,"unauthorized-domain")}function hx(t){const e=ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dx.test(n))return!1;if(ux.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const px=new Oi(3e4,6e4);function Ed(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mx(t){return new Promise((e,n)=>{var i,s,o;function r(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),n(je(t,"network-request-failed"))},timeout:px.get()})}if((s=(i=se().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=se().gapi)!=null&&o.load)r();else{const a=Pp("iframefcb");return se()[a]=()=>{gapi.load?r():n(je(t,"network-request-failed"))},xc(`${Dv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xs=null,e})}let xs=null;function gx(t){return xs=xs||mx(t),xs}/**
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
 */const yx=new Oi(5e3,15e3),vx="__/auth/iframe",wx="emulator/auth/iframe",xx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_x=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kx(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yc(e,wx):`https://${t.config.authDomain}/${vx}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=_x.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Er(r).slice(1)}`}async function Ex(t){const e=await gx(t),n=se().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:kx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=se().setTimeout(()=>{s(o)},yx.get());function l(){se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ix=500,Cx=600,bx="_blank",Nx="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tx(t,e,n,r=Ix,i=Cx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Sx,width:r.toString(),height:i.toString(),top:s,left:o},u=Ie().toLowerCase();n&&(a=Ep(u)?bx:n),_p(u)&&(e=e||Nx,l.scrollbars="yes");const m=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(Cv(u)&&a!=="_self")return Px(e||"",a),new Sd(null);const p=window.open(e||"",a,m);I(p,t,"popup-blocked");try{p.focus()}catch{}return new Sd(p)}function Px(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rx="__/auth/handler",Ax="emulator/auth/handler",Ox=encodeURIComponent("fac");async function Id(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",G1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries(s||{}))o[m]=p}if(e instanceof ji){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const l=await t._getAppCheckToken(),u=l?`#${Ox}=${encodeURIComponent(l)}`:"";return`${Lx(t)}?${Er(a).slice(1)}${u}`}function Lx({config:t}){return t.emulator?yc(t,Ax):`https://${t.authDomain}/${Rx}`}/**
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
 */const ca="webStorageSupport";class jx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ec,this._completeRedirectFn=sx,this._overrideRedirectResult=nx}async _openPopup(e,n,r,i){var o;Ut((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Id(e,n,r,ul(),i);return Tx(e,s,Sc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Id(e,n,r,ul(),i);return Nw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ex(e),r=new ax(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ca,{type:ca},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ca];s!==void 0&&n(!!s),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Np()||kp()||wc()}}const Dx=jx;var Cd="@firebase/auth",bd="1.12.0";/**
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
 */class Mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ux(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $x(t){Ei(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tp(t)},u=new Av(r,i,s,l);return Kv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new vr("auth-internal",e=>{const n=et(e.getProvider("auth").getImmediate());return(r=>new Mx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(Cd,bd,Ux(t)),or(Cd,bd,"esm2020")}/**
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
 */const zx=5*60,Fx=rp("authIdTokenMaxAge")||zx;let Nd=null;const Vx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Fx)return;const i=n==null?void 0:n.token;Nd!==i&&(Nd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bx(t=Qy()){const e=ap(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gv(t,{popupRedirectResolver:Dx,persistence:[Mw,$p,Ec]}),r=rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Vx(s.toString());_w(n,o,()=>o(n.currentUser)),xw(n,a=>o(a))}}const i=P1("auth");return i&&Qv(n,`http://${i}`),n}function Hx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ov({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Hx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$x("Browser");const Wx={apiKey:"AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",authDomain:"vokal-pro-studio-app-2026.firebaseapp.com",projectId:"vokal-pro-studio-app-2026",storageBucket:"vokal-pro-studio-app-2026.firebasestorage.app",messagingSenderId:"390591097726",appId:"1:390591097726:web:fceb62a64f27876578212f"},Gx=lp(Wx),It=Bx(Gx);let Kx={data:""},Qx=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Kx},Yx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,qx=/\/\*[^]*?\*\/|  +/g,Td=/\n+/g,Jt=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Jt(o,s):s+"{"+Jt(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Jt(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Jt.p?Jt.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Et={},Kp=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Kp(t[n]);return e}return t},Jx=(t,e,n,r,i)=>{let s=Kp(t),o=Et[s]||(Et[s]=(l=>{let u=0,m=11;for(;u<l.length;)m=101*m+l.charCodeAt(u++)>>>0;return"go"+m})(s));if(!Et[o]){let l=s!==t?t:(u=>{let m,p,f=[{}];for(;m=Yx.exec(u.replace(qx,""));)m[4]?f.shift():m[3]?(p=m[3].replace(Td," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][m[1]]=m[2].replace(Td," ").trim();return f[0]})(t);Et[o]=Jt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Et.g?Et.g:null;return n&&(Et.g=Et[o]),((l,u,m,p)=>{p?u.data=u.data.replace(p,l):u.data.indexOf(l)===-1&&(u.data=m?l+u.data:u.data+l)})(Et[o],e,r,a),o},Xx=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Jt(a,""):a===!1?"":a}return r+i+(o??"")},"");function Eo(t){let e=this||{},n=t.call?t(e.p):t;return Jx(n.unshift?n.raw?Xx(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Qx(e.target),e.g,e.o,e.k)}let Qp,hl,pl;Eo.bind({g:1});let $t=Eo.bind({k:1});function Zx(t,e,n,r){Jt.p=e,Qp=t,hl=n,pl=r}function vn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:hl&&hl()},a),n.o=/ *go\d+/.test(l),a.className=Eo.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),pl&&u[0]&&pl(a),Qp(u,a)}return e?e(i):i}}var e_=t=>typeof t=="function",eo=(t,e)=>e_(t)?t(e):t,t_=(()=>{let t=0;return()=>(++t).toString()})(),Yp=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),n_=20,bc="default",qp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return qp(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},_s=[],Jp={toasts:[],pausedAt:void 0,settings:{toastLimit:n_}},pt={},Xp=(t,e=bc)=>{pt[e]=qp(pt[e]||Jp,t),_s.forEach(([n,r])=>{n===e&&r(pt[e])})},Zp=t=>Object.keys(pt).forEach(e=>Xp(t,e)),r_=t=>Object.keys(pt).find(e=>pt[e].toasts.some(n=>n.id===t)),So=(t=bc)=>e=>{Xp(e,t)},i_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},s_=(t={},e=bc)=>{let[n,r]=S.useState(pt[e]||Jp),i=S.useRef(pt[e]);S.useEffect(()=>(i.current!==pt[e]&&r(pt[e]),_s.push([e,r]),()=>{let o=_s.findIndex(([a])=>a===e);o>-1&&_s.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||i_[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},o_=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||t_()}),Mi=t=>(e,n)=>{let r=o_(e,t,n);return So(r.toasterId||r_(r.id))({type:2,toast:r}),r.id},j=(t,e)=>Mi("blank")(t,e);j.error=Mi("error");j.success=Mi("success");j.loading=Mi("loading");j.custom=Mi("custom");j.dismiss=(t,e)=>{let n={type:3,toastId:t};e?So(e)(n):Zp(n)};j.dismissAll=t=>j.dismiss(void 0,t);j.remove=(t,e)=>{let n={type:4,toastId:t};e?So(e)(n):Zp(n)};j.removeAll=t=>j.remove(void 0,t);j.promise=(t,e,n)=>{let r=j.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?eo(e.success,i):void 0;return s?j.success(s,{id:r,...n,...n==null?void 0:n.success}):j.dismiss(r),i}).catch(i=>{let s=e.error?eo(e.error,i):void 0;s?j.error(s,{id:r,...n,...n==null?void 0:n.error}):j.dismiss(r)}),t};var a_=1e3,l_=(t,e="default")=>{let{toasts:n,pausedAt:r}=s_(t,e),i=S.useRef(new Map).current,s=S.useCallback((p,f=a_)=>{if(i.has(p))return;let y=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},f);i.set(p,y)},[]);S.useEffect(()=>{if(r)return;let p=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let w=(y.duration||0)+y.pauseDuration-(p-y.createdAt);if(w<0){y.visible&&j.dismiss(y.id);return}return setTimeout(()=>j.dismiss(y.id,e),w)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=S.useCallback(So(e),[e]),a=S.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=S.useCallback((p,f)=>{o({type:1,toast:{id:p,height:f}})},[o]),u=S.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=S.useCallback((p,f)=>{let{reverseOrder:y=!1,gutter:w=8,defaultPosition:_}=f||{},R=n.filter(g=>(g.position||_)===(p.position||_)&&g.height),h=R.findIndex(g=>g.id===p.id),d=R.filter((g,v)=>v<h&&g.visible).length;return R.filter(g=>g.visible).slice(...y?[d+1]:[0,d]).reduce((g,v)=>g+(v.height||0)+w,0)},[n]);return S.useEffect(()=>{n.forEach(p=>{if(p.dismissed)s(p.id,p.removeDelay);else{let f=i.get(p.id);f&&(clearTimeout(f),i.delete(p.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:m}}},c_=$t`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,u_=$t`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,d_=$t`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,f_=vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${c_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${u_} 0.15s ease-out forwards;
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
    animation: ${d_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,h_=$t`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,p_=vn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${h_} 1s linear infinite;
`,m_=$t`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,g_=$t`
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
}`,y_=vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${m_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${g_} 0.2s ease-out forwards;
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
`,v_=vn("div")`
  position: absolute;
`,w_=vn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,x_=$t`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,__=vn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,k_=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?S.createElement(__,null,e):e:n==="blank"?null:S.createElement(w_,null,S.createElement(p_,{...r}),n!=="loading"&&S.createElement(v_,null,n==="error"?S.createElement(f_,{...r}):S.createElement(y_,{...r})))},E_=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,S_=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,I_="0%{opacity:0;} 100%{opacity:1;}",C_="0%{opacity:1;} 100%{opacity:0;}",b_=vn("div")`
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
`,N_=vn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,T_=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=Yp()?[I_,C_]:[E_(n),S_(n)];return{animation:e?`${$t(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$t(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},P_=S.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?T_(t.position||e||"top-center",t.visible):{opacity:0},s=S.createElement(k_,{toast:t}),o=S.createElement(N_,{...t.ariaProps},eo(t.message,t));return S.createElement(b_,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):S.createElement(S.Fragment,null,s,o))});Zx(S.createElement);var R_=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=S.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return S.createElement("div",{ref:s,className:e,style:n},i)},A_=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Yp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},O_=Eo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,rs=16,em=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=l_(n,s);return S.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:rs,left:rs,right:rs,bottom:rs,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(m=>{let p=m.position||e,f=u.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),y=A_(p,f);return S.createElement(R_,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?O_:"",style:y},m.type==="custom"?eo(m.message,m):i?i(m):S.createElement(P_,{toast:m,position:p}))}))};const L_=()=>c.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),c.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),c.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),c.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});function j_({onGuestLogin:t}){const[e,n]=S.useState(!0),[r,i]=S.useState("email"),[s,o]=S.useState(""),[a,l]=S.useState(""),[u,m]=S.useState(""),[p,f]=S.useState(""),[y,w]=S.useState(""),[_,R]=S.useState(!0),[h,d]=S.useState(!1),[g,v]=S.useState(!1),C=async L=>{L.preventDefault(),d(!0);try{if(await ww(It,_?$p:Ec),e)await gw(It,a,u),j.success("Successfully logged in!");else{const ie=await mw(It,a,u);await vw(ie.user,{displayName:s}),j.success("Account created successfully!")}}catch(ie){j.error(ie.message.replace("Firebase:","").trim())}finally{d(!1)}},T=async()=>{if(!a){j.error("Please enter your email address first.");return}d(!0);try{await pw(It,a),j.success("Password reset email sent! Check your inbox.")}catch(L){j.error(L.message.replace("Firebase:","").trim())}finally{d(!1)}},P=async()=>{d(!0);try{const L=new bt;await Xw(It,L),j.success("Successfully logged in with Google!")}catch(L){j.error(L.message.replace("Firebase:","").trim())}finally{d(!1)}},k=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new Bw(It,"recaptcha-container",{size:"invisible"}))},M=async L=>{if(L.preventDefault(),!p.startsWith("+"))return j.error("Please enter phone number with country code (e.g. +91...)");d(!0);try{k();const ie=window.recaptchaVerifier,me=await Gw(It,p,ie);window.confirmationResult=me,v(!0),j.success("OTP sent to your phone")}catch(ie){j.error(ie.message)}finally{d(!1)}},O=async L=>{L.preventDefault(),d(!0);try{await window.confirmationResult.confirm(y),j.success("Phone completely verified!")}catch{j.error("Invalid OTP Code")}finally{d(!1)}};return c.jsxs("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300",children:[c.jsx(em,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),c.jsxs("div",{className:"w-full max-w-md relative z-10",children:[c.jsxs("div",{className:"mb-10 text-center",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-2",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Studio Edition • Access Portal"})]}),c.jsxs("div",{className:"bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),c.jsxs("button",{type:"button",onClick:P,disabled:h,className:"w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50",children:[c.jsx(L_,{})," Continue with Google"]}),c.jsxs("div",{className:"flex items-center gap-4 mb-6 opacity-30",children:[c.jsx("div",{className:"flex-1 h-px bg-white"}),c.jsx("div",{className:"text-[10px] font-black uppercase text-white tracking-widest",children:"Or Use"}),c.jsx("div",{className:"flex-1 h-px bg-white"})]}),c.jsxs("div",{className:"flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8",children:[c.jsxs("button",{onClick:()=>i("email"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="email"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Qu,{className:"w-4 h-4"})," Email"]}),c.jsxs("button",{onClick:()=>i("phone"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="phone"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Yu,{className:"w-4 h-4"})," Phone"]})]}),r==="email"&&c.jsxs("form",{onSubmit:C,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("div",{className:"space-y-4",children:[!e&&c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(vo,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Full Name",value:s,onChange:L=>o(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Qu,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"email",required:!0,placeholder:"Email Address",value:a,onChange:L=>l(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(il,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"password",required:!0,placeholder:"Password",value:u,onChange:L=>m(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]})]}),e&&c.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 px-1",children:[c.jsxs("label",{className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:L=>R(L.target.checked),className:"rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500"}),"Remember me"]}),c.jsx("button",{type:"button",onClick:T,className:"hover:text-blue-400 transition-colors",children:"Forgot Password?"})]}),c.jsxs("button",{disabled:h,type:"submit",className:"w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[h?"Processing...":e?"Sign In To Studio":"Create Account",!h&&c.jsx(Gh,{className:"w-4 h-4"})]}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:e?"Don't have an account? Sign Up":"Already have an account? Sign In"})})]}),r==="phone"&&c.jsxs("form",{onSubmit:g?O:M,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[g?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(il,{className:"h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Enter 6-digit OTP",value:y,onChange:L=>w(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center"})]}),c.jsx("button",{disabled:h,type:"submit",className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50",children:h?"Verifying...":"Verify & Enter"}),c.jsx("div",{className:"text-center mt-4",children:c.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:"Wrong Number? Go Back"})})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Yu,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"tel",required:!0,placeholder:"+91 99999 99999",value:p,onChange:L=>f(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest"})]}),c.jsxs("button",{disabled:h,type:"submit",className:"w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[h?"Sending OTP...":"Send OTP Code",!h&&c.jsx(ki,{className:"w-4 h-4"})]})]}),c.jsx("div",{id:"recaptcha-container"})]})]}),c.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600",children:[c.jsxs("button",{type:"button",onClick:t,className:"py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group",children:[c.jsx(ki,{className:"w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform"})," Try Studio as Guest"]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2 opacity-50",children:[c.jsx(Kh,{className:"w-3 h-3"})," Secure Google Firebase Authentication"]})]})]})]})}const D_=({activeTab:t,onTabChange:e})=>{const n=[{id:"studio",label:"Studio",icon:i1},{id:"vault",label:"Vault",icon:uc},{id:"profile",label:"Profile",icon:vo}];return c.jsx("aside",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-[94%] max-w-[360px] md:w-24 bg-[#0F1118]/80 backdrop-blur-3xl border border-white/10 md:border-none md:bg-transparent rounded-[2rem] md:rounded-none flex md:flex-col items-center py-2.5 px-6 md:py-12 gap-4 md:gap-12 justify-center z-50 shadow-2xl shadow-black/80 md:shadow-none",children:c.jsxs("div",{className:"flex md:flex-col gap-8 md:gap-14 items-center w-full md:w-auto justify-around md:justify-start",children:[c.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-2xl hidden md:flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4",children:c.jsx(w1,{className:"text-white w-6 h-6"})}),c.jsx("nav",{className:"flex md:flex-col gap-10 md:gap-12 w-full md:w-auto justify-around md:justify-center",children:n.map(({id:r,label:i,icon:s})=>c.jsxs("button",{onClick:()=>e(r),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t===r?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[c.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t===r?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:c.jsx(s,{className:"w-5 h-5"})}),c.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t===r?"opacity-100":"opacity-40"}`,children:i})]},r))})]})})},M_=({user:t,isGuestMode:e,hasPlan:n,lang:r,languages:i,onLangChange:s,onSignOutAction:o})=>{var a;return c.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6",children:[c.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[c.jsxs("h2",{className:"text-2xl font-black italic text-white uppercase tracking-tighter transition-all hover:scale-105 duration-300",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]",children:"Studio Edition"})]}),c.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-4",children:[c.jsx("div",{className:"flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl",children:i.map(l=>c.jsx("button",{onClick:()=>s(l.id),className:`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${r===l.id?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-slate-300 hover:bg-white/5"}`,children:l.native},l.id))}),c.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl",children:[c.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:"User",className:"w-full h-full object-cover"}):c.jsx(vo,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})}),c.jsxs("div",{className:"flex flex-col text-left justify-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]",children:t?t.displayName||((a=t.email)==null?void 0:a.split("@")[0])||t.phoneNumber:"Guest User"}),n?c.jsxs("span",{className:"text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[c.jsx(cc,{className:"w-3 h-3"})," Studio Pro"]}):e?c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Tryout Mode"}):c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Free User"})]}),c.jsx("div",{className:"w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"}),c.jsx("button",{onClick:o,className:"p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0",title:e?"Sign In":"Sign Out",children:e?c.jsx(il,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"}):c.jsx(dc,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"})})]})]})]})},U_=({error:t,script:e,setScript:n,isProcessing:r,isGuestMode:i,user:s,hasPlan:o,setShowPlans:a,enableSubtitles:l,setEnableSubtitles:u,srtLang:m,setSrtLang:p,subtitleLanguages:f,selectedVoice:y,setShowVoiceSheet:w,voiceList:_,onGenerate:R,currentAudio:h,activeSubtitle:d,isPlayingCurrent:g,onTogglePlay:v,onDownload:C,onDownloadSrt:T})=>{var P;return c.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 flex-1",children:[c.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[t&&c.jsxs("div",{className:"p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4",children:[c.jsx(Kh,{className:"w-5 h-5 shrink-0"})," ",t]}),c.jsxs("div",{className:`flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border shadow-2xl p-1 flex flex-col transition-all duration-700 ${r?"border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]":"border-white/5 hover:border-blue-500/30"}`,children:[r&&c.jsx("div",{className:"absolute inset-0 bg-blue-500/5 rounded-[2.5rem] animate-pulse"}),c.jsx("textarea",{value:e,onChange:k=>{const M=k.target.value;i&&M.length>100?n(M.substring(0,100)):!i&&s&&!o&&M.length>500?(a(!0),n(M.substring(0,500))):n(M)},placeholder:"Type or paste your script here...",className:"w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 pb-12 sm:p-8 sm:pb-14 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"}),c.jsxs("div",{className:"absolute bottom-5 right-6 sm:bottom-6 sm:right-8 text-[11px] font-black tracking-widest uppercase text-slate-600 pointer-events-none select-none flex items-center gap-1.5",children:[c.jsx("span",{className:e.length>=(i?100:o?1/0:500)?"text-blue-500":"text-slate-400",children:e.length}),c.jsx("span",{className:"opacity-40",children:"/"}),c.jsx("span",{children:i?100:o?"∞":500})]})]}),c.jsxs("div",{className:"shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"}),c.jsxs("div",{className:"relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>u(!l),className:`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${l?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10":"bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300"}`,children:[l?c.jsx(m1,{className:"w-5 h-5"}):c.jsx(h1,{className:"w-5 h-5"})," Auto Subtitles"]}),l&&c.jsx("div",{className:"flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto",children:f.map(k=>c.jsx("button",{onClick:()=>p(k.id),className:`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${m===k.id?"bg-white text-black border-white shadow-lg shadow-white/10":"bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300"}`,children:k.label},k.id))})]}),c.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10",children:[c.jsxs("button",{onClick:()=>w(!0),className:"lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95",children:[c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx(Gs,{className:"w-4 h-4 text-blue-500"})," Voice: ",((P=_.find(k=>k.id===y))==null?void 0:P.label)||"Select"]}),c.jsx(Gh,{className:"w-4 h-4"})]}),c.jsxs("button",{onClick:R,disabled:r||!e.trim(),className:"w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale",children:[r?c.jsx(Yh,{className:"animate-spin w-5 h-5"}):c.jsx(u1,{className:"w-5 h-5"})," ",r?"Synthesizing...":"Generate Master"]})]})]})]}),c.jsxs("div",{className:"w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full",children:[c.jsxs("div",{className:"hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group",children:[c.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Gs,{className:"w-4 h-4 text-blue-500"})," Voice Models"]}),c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:_.map(k=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${y===k.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>R.onVoiceSelect(k.id),children:[c.jsx("button",{onClick:M=>{M.stopPropagation(),R.onPreview(k.id)},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${R.playingPreview===k.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":y===k.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:R.playingPreview===k.id?c.jsx(Gu,{className:"w-4 h-4"}):c.jsx(Ku,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${y===k.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:k.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:k.type})]})]},k.id))})]}),c.jsxs("div",{className:`shrink-0 lg:flex-1 flex flex-col p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${r?"bg-blue-600/5 border-blue-500/40":h?"bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30":"bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5"}`,children:[r&&c.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3",children:[r?c.jsx(ki,{className:"w-3 h-3 text-blue-400 animate-bounce"}):c.jsx(Q0,{className:"w-3 h-3 text-blue-500/60"}),r?"Engine Processing...":"Studio Output Engine"]}),c.jsx("div",{className:"relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center",children:r?c.jsxs("div",{className:"flex flex-col items-center gap-6",children:[c.jsx("div",{className:"flex items-end gap-1.5 h-16",children:[...Array(12)].map((k,M)=>c.jsx("div",{className:"w-1.5 bg-blue-500 rounded-full animate-wave",style:{animationDelay:`${M*.1}s`,height:"20%"}},M))}),c.jsx("p",{className:"text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse",children:"Synthesizing Voice..."})]}):c.jsx(c.Fragment,{children:c.jsx("p",{className:`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${d?"text-white drop-shadow-lg":"text-slate-600 italic"}`,children:d||(h?"Audio ready for playback":"Awaiting Audio...")})})}),h&&!r&&c.jsxs("div",{className:"relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("button",{onClick:v,className:`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${g?"bg-white text-black scale-[0.98]":"bg-blue-600 text-white hover:bg-blue-500"}`,children:[g?c.jsx(Gu,{className:"w-5 h-5"}):c.jsx(Ku,{className:"w-5 h-5"}),g?"Pause Master":"Play Master Track"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:C,className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5",children:[c.jsx(Qh,{className:"w-4 h-4 text-blue-500"})," WAV"]}),h.srt&&c.jsxs("button",{onClick:T,className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors",children:[c.jsx(q0,{className:"w-4 h-4 text-emerald-500"})," SRT"]})]})]})]})]})]})},$_=({items:t,onPlay:e,onDelete:n,onClear:r,onStudioGo:i})=>t.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60 mt-20",children:[c.jsx("div",{className:"w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl",children:c.jsx(uc,{className:"w-10 h-10 text-slate-500"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest mb-2",children:"Vault is Empty"}),c.jsx("p",{className:"text-sm font-medium text-slate-500 max-w-sm",children:"You haven't generated any studio audio yet. Go back to the studio to brew some magic."}),c.jsx("button",{onClick:i,className:"mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20",children:"Go to Studio"})]}):c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex justify-between items-center px-4",children:[c.jsx("h3",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Your Master Collection"}),c.jsxs("button",{onClick:r,className:"text-[9px] font-black uppercase text-red-500/60 hover:text-red-500 transition-colors flex items-center gap-2",children:[c.jsx(qu,{className:"w-3.5 h-3.5"})," Clear All"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500 pb-20",children:t.map(s=>c.jsxs("div",{className:"bg-[#0F1118] p-6 rounded-[2.5rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center gap-6 relative z-10",children:[c.jsx("button",{onClick:()=>e(s),className:"w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner",children:c.jsx(qh,{className:"w-5 h-5 fill-current ml-1"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm font-bold text-white italic line-clamp-1 group-hover:text-blue-200 transition-colors",children:['"',s.text,'..."']}),c.jsxs("div",{className:"text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest",children:[s.voice," • ",s.date]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 relative z-10",children:[c.jsx("a",{href:s.url,download:`${s.text.substring(0,10)}_master.wav`,className:"p-3 text-slate-600 hover:text-white transition-colors",children:c.jsx(Qh,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>n(s),className:"p-3 text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100",children:c.jsx(qu,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-3xl -mr-12 -mt-12 transition-opacity opacity-0 group-hover:opacity-100"})]},s.timestamp))})]}),z_=({user:t,isGuestMode:e,hasPlan:n,vaultCount:r,onUpgrade:i,onSignOutAction:s})=>c.jsxs("div",{className:"flex flex-col items-center max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700",children:[c.jsxs("div",{className:"relative mb-10",children:[c.jsx("div",{className:"w-32 h-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20",children:c.jsx("div",{className:"w-full h-full rounded-[2.8rem] bg-[#0F1118] flex items-center justify-center overflow-hidden border border-white/5",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):c.jsx(vo,{className:"w-12 h-12 text-blue-500/50"})})}),c.jsx("div",{className:"absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-[#08090D]",children:c.jsx(fc,{className:"w-4 h-4 fill-current"})})]}),c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h3",{className:"text-3xl font-black text-white uppercase tracking-tighter mb-2",children:(t==null?void 0:t.displayName)||(e?"Guest Creator":"Pro User")}),c.jsx("p",{className:"text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]",children:(t==null?void 0:t.email)||"Studio Guest Access"})]}),c.jsxs("div",{className:"w-full grid gap-4",children:[c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),c.jsxs("div",{className:"relative flex items-center gap-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-inner",children:c.jsx(cc,{className:"w-7 h-7 text-blue-500"})}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Current Studio Plan"}),c.jsx("div",{className:"text-xl font-black text-white uppercase tracking-widest",children:n?"Studio Pro":e?"Guest Tier":"Free Plan"})]})]}),!n&&c.jsxs("button",{onClick:i,className:"relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 group",children:["Upgrade Now ",c.jsx(ki,{className:"w-4 h-4 fill-current group-hover:animate-pulse"})]})]}),c.jsx("div",{className:"bg-[#0F1118]/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between shadow-xl",children:c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5",children:c.jsx(uc,{className:"w-6 h-6 text-slate-500"})}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Total Creations"}),c.jsxs("div",{className:"text-xl font-black text-white tracking-widest",children:[r," Master Tracks"]})]})]})}),c.jsxs("button",{onClick:s,className:"mt-6 w-full py-5 bg-white/5 hover:bg-red-500/10 text-slate-500 hover:text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 flex items-center justify-center gap-3",children:[c.jsx(dc,{className:"w-4 h-4"})," ",e?"Sign In to Pro Account":"Sign Out"]})]})]}),F_=({show:t,onClose:e,onSelectPlan:n})=>{if(!t)return null;const r=[{id:"starter",name:"Starter",desc:"Perfect for testing",price:"₹99",period:"/ 3 Audio",icon:ki,color:"emerald",benefits:["3 Audio Generations","Standard Quality"],buttonText:"Buy Now"},{id:"creator",name:"Creator",desc:"For serious creators",price:"₹499",period:"/ 100 Audio",icon:fc,color:"blue",benefits:["100 Audio Generations","Cinematic Vocals","SRT Subtitle Export"],buttonText:"Buy Creator",popular:!0},{id:"studio",name:"Studio",desc:"Unlimited Everything",price:"₹999",period:"/ Lifetime",icon:cc,color:"amber",benefits:["Unlimited Generations","Priority Processing","Commercial Rights"],buttonText:"Go Unlimited"}];return c.jsx("div",{className:"fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col",children:[c.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10",children:c.jsx(Jh,{className:"w-6 h-6"})}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"}),c.jsxs("div",{className:"p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar",children:[c.jsxs("div",{className:"text-center mb-12 relative z-10",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-4",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})," PLANS"]}),c.jsx("p",{className:"text-slate-400 max-w-xl mx-auto font-medium",children:"Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities."})]}),c.jsx("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:r.map(i=>{const s=i.icon;let o="",a="",l="",u="";return i.color==="emerald"?(o="hover:border-emerald-500/30",a="hover:bg-emerald-500",l="bg-emerald-500/10",u="text-emerald-500"):i.color==="blue"?(o="bg-gradient-to-b from-blue-900/40 to-black/80 border-blue-500/30 transform md:-translate-y-4 shadow-2xl shadow-blue-900/20",a="bg-blue-600 hover:bg-blue-500",l="bg-blue-500/20",u="text-blue-500"):(o="hover:border-amber-500/30",a="hover:bg-amber-500",l="bg-amber-500/10",u="text-amber-500"),c.jsxs("div",{className:`${i.id!=="creator"?"bg-black/50 border border-white/10":""} rounded-3xl p-8 flex flex-col transition-all group relative ${o}`,children:[i.popular&&c.jsx("div",{className:"absolute -top-4 inset-x-0 flex justify-center",children:c.jsx("span",{className:"bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30",children:"Most Popular"})}),c.jsx("div",{className:`${u} mb-6 ${l} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`,children:c.jsx(s,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:i.name}),c.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:i.desc}),c.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:[i.price," ",c.jsx("span",{className:"text-sm font-medium text-slate-500",children:i.period})]}),c.jsx("ul",{className:"space-y-4 mb-8 flex-1",children:i.benefits.map((m,p)=>c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(V0,{className:`w-5 h-5 ${u} shrink-0`})," ",m]},p))}),c.jsx("button",{onClick:()=>n(i),className:`w-full py-4 text-white rounded-xl font-bold uppercase tracking-widest transition-all ${i.id!=="creator"?"bg-white/5 "+a:a+" shadow-xl shadow-blue-600/20"}`,children:i.buttonText})]},i.id)})})]})]})})},V_=({show:t,title:e,message:n,onConfirm:r,onCancel:i,type:s,confirmText:o})=>t?c.jsxs("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-300",children:[c.jsx("div",{className:"absolute inset-0 bg-black/90 backdrop-blur-md",onClick:i}),c.jsxs("div",{className:"relative w-full max-w-sm bg-[#0F1118] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${s==="danger"?"bg-red-500/10 text-red-500":"bg-blue-500/10 text-blue-500"}`,children:s==="danger"?c.jsx(dc,{className:"w-8 h-8"}):c.jsx(fc,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest text-center mb-3",children:e}),c.jsx("p",{className:"text-slate-400 text-sm font-medium text-center mb-8 leading-relaxed px-2",children:n}),c.jsxs("div",{className:"flex flex-col gap-3",children:[c.jsx("button",{onClick:r,className:`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl ${s==="danger"?"bg-red-500 hover:bg-red-400 text-white shadow-red-500/20":"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"}`,children:o||"Yes, I'm sure"}),c.jsx("button",{onClick:i,className:"w-full py-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5",children:"No, Cancel"})]})]})]}):null,ua=[{id:"Malayalam",native:"മലയാളം",defaultText:"മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"},{id:"English",native:"ENGLISH",defaultText:"Hello there! How is everyone doing today? Have you all had your food?"},{id:"Hindi",native:"हिन्दी",defaultText:"नमस्ते! आप सब कैसे हैं? क्या आप सभी ने खाना खा लिया?"},{id:"Tamil",native:"தமிழ்",defaultText:"வணக்கம்! எல்லாரும் எப்படி இருக்கீங்க? எல்லாரும் சாப்பிட்டாச்சா?"}],B_=[{id:"English",label:"English Sub"},{id:"Malayalam",label:"Malayalam Sub"},{id:"Hindi",label:"Hindi Sub"},{id:"Tamil",label:"Tamil Sub"}],Pd=[{id:"Maya",label:"Maya",type:"Female",desc:"Warm, expressive, maternal storytelling."},{id:"Francis",label:"Francis",type:"Ultra Bass",desc:"Legendary voice with deep cinematic resonance."},{id:"Charan",label:"Charan",type:"Slow Bass",desc:"Deep and slow flow."},{id:"Ahaana",label:"Ahaana",type:"Professional",desc:"Clear professional voice."}],H_={Maya:"Aoede",Francis:"Charon",Charan:"Charon",Ahaana:"Kore"},W_="VokalProStudioDB",vt="audio_vault",G_=1,Io=()=>new Promise((t,e)=>{const n=indexedDB.open(W_,G_);n.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(vt)||i.createObjectStore(vt,{keyPath:"timestamp"})},n.onsuccess=r=>t(r.target.result),n.onerror=r=>e(r.target.error)}),K_=async(t,e)=>{try{const i=(await Io()).transaction([vt],"readwrite").objectStore(vt),s={...t,audioBlob:e,url:null};return new Promise((o,a)=>{const l=i.put(s);l.onsuccess=()=>o(!0),l.onerror=u=>a(u.target.error)})}catch(n){return console.error("Failed to save to IndexedDB:",n),!1}},is=async()=>{try{const r=(await Io()).transaction([vt],"readonly").objectStore(vt).getAll();return new Promise((i,s)=>{r.onsuccess=()=>{const o=r.result;o.sort((l,u)=>u.timestamp-l.timestamp);const a=o.map(l=>l.audioBlob?{...l,url:URL.createObjectURL(l.audioBlob)}:l);i(a)},r.onerror=o=>s(o.target.error)})}catch(t){return console.error("Failed to load from IndexedDB:",t),[]}},Q_=async t=>{try{const r=(await Io()).transaction([vt],"readwrite").objectStore(vt);return new Promise((i,s)=>{const o=r.delete(t);o.onsuccess=()=>i(!0),o.onerror=a=>s(a.target.error)})}catch(e){return console.error("Failed to delete from IndexedDB:",e),!1}},Y_=async()=>{try{const n=(await Io()).transaction([vt],"readwrite").objectStore(vt);return new Promise((r,i)=>{const s=n.clear();s.onsuccess=()=>r(!0),s.onerror=o=>i(o.target.error)})}catch(t){return console.error("Failed to clear IndexedDB:",t),!1}},q_={}.VITE_API_URL||"https://vokal-pro-api.vercel.app/api/generate",J_=()=>c.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
    `}}),X_=()=>{const[t,e]=S.useState("studio"),[n,r]=S.useState("Malayalam"),[i,s]=S.useState("English"),[o,a]=S.useState(!1),[l,u]=S.useState(!1),[m,p]=S.useState(null),[f,y]=S.useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"),[w,_]=S.useState(!1),[R,h]=S.useState("Maya"),[d,g]=S.useState([]),[v,C]=S.useState(null),[T,P]=S.useState([]),[k,M]=S.useState(""),[O,L]=S.useState(!1),[ie,me]=S.useState(null),[Ir,Co]=S.useState(!1),[wt,Cr]=S.useState(null),[E,A]=S.useState(!1),[D,q]=S.useState(!0),[J,zn]=S.useState(!1),[xt,_t]=S.useState(!1),[_e,ge]=S.useState({show:!1,title:"",message:"",onConfirm:null,type:"danger"}),ne=S.useRef(null),ct=S.useRef(new Audio);S.useEffect(()=>kw(It,$=>{Cr($),q(!1)}),[]),S.useEffect(()=>{is().then(b=>{g(b)})},[]);const tm=(b,$)=>{const V=new ArrayBuffer(44+b.length*2),F=new DataView(V),ke=(Me,ut)=>{for(let We=0;We<ut.length;We++)F.setUint8(Me+We,ut.charCodeAt(We))};ke(0,"RIFF"),F.setUint32(4,32+b.length*2,!0),ke(8,"WAVE"),ke(12,"fmt "),F.setUint32(16,16,!0),F.setUint16(20,1,!0),F.setUint16(22,1,!0),F.setUint32(24,$,!0),F.setUint32(28,$*2,!0),F.setUint16(32,2,!0),F.setUint16(34,16,!0),ke(36,"data"),F.setUint32(40,b.length*2,!0);let Te=44;for(let Me=0;Me<b.length;Me++,Te+=2)F.setInt16(Te,b[Me],!0);return new Blob([V],{type:"audio/wav"})},Nc=b=>b?b.trim().split(/\n\s*\n/).map(V=>{const F=V.split(`
`);if(F.length<3)return null;const ke=F[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);if(!ke)return null;const Te=Me=>{const[ut,We,ce]=Me.split(":"),[kt,Ft]=ce.split(",");return parseInt(ut)*3600+parseInt(We)*60+parseInt(kt)+parseInt(Ft)/1e3};return{start:Te(ke[1]),end:Te(ke[2]),text:F.slice(2).join(" ")}}).filter(V=>V!==null):[];S.useEffect(()=>{ne.current=new Audio;const b=()=>{if(!ne.current||T.length===0)return;const $=ne.current.currentTime,V=T.find(F=>$>=F.start&&$<=F.end);M(V?V.text:"")};return ne.current.addEventListener("timeupdate",b),ne.current.onplay=()=>{v&&ne.current.src===v.url&&L(!0)},ne.current.onpause=()=>{L(!1),me(null)},ne.current.onended=()=>{L(!1),M(""),me(null)},()=>{var $;return($=ne.current)==null?void 0:$.removeEventListener("timeupdate",b)}},[T,v]);const Tc=async()=>{Co(!0);try{const b="data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";ne.current.src=b,await ne.current.play().then(()=>ne.current.pause())}catch{console.warn("Engine Unlocked")}},Pc=async(b,$)=>{let V=0;const F=3,ke=async()=>{var Me,ut;const Te=await fetch(q_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:b,payload:$})});if(!Te.ok){const We=await Te.text().catch(()=>"{}");let ce={};try{ce=JSON.parse(We)}catch{}if(Te.status===429||((Me=ce==null?void 0:ce.error)==null?void 0:Me.code)===429||(ce==null?void 0:ce.error)==="TOO_MANY_REQUESTS")throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");if(V<F){V++;const Ft=Math.pow(2,V)*1e3;return await new Promise(br=>setTimeout(br,Ft)),ke()}const kt=((ut=ce==null?void 0:ce.error)==null?void 0:ut.message)||(ce==null?void 0:ce.error)||We;throw console.error("API Error details:",kt),new Error(`System Error: ${Te.status}`)}return await Te.json()};return ke()},nm=async()=>{var b,$,V,F,ke,Te,Me,ut,We,ce;if(!w){if(!E&&wt&&!J&&f.length>500){_t(!0),j.error("Please upgrade to a Studio Pro plan to generate longer audio!",{icon:"👑"});return}if(E&&parseInt(localStorage.getItem("vokal_guest_used")||"0")+f.length>100){const Ft=await fetch("https://api64.ipify.org?format=json").catch(()=>null),br=Ft?(await Ft.json()).ip:"Unknown";let wn=localStorage.getItem("vokal_device_id");wn||(wn="DEV_"+Math.random().toString(36).substr(2,9).toUpperCase(),localStorage.setItem("vokal_device_id",wn)),j.error(`Access Denied! Device (${wn}) / IP (${br}) has exhausted the 100 character free limit. Please register to continue.`,{icon:"🛑",duration:7e3});return}if(Ir||await Tc(),!!f.trim()){_(!0),p(null);try{let kt=H_[R]||R;const br={contents:[{parts:[{text:`${R==="Maya"||R==="Ahaana"?"You must dictate the following text exactly as written, with no preamble. Use a warm, natural, and expressive female voice, keeping the speed perfectly steady and consistent: ":"You must dictate the following text exactly as written, with no preamble. Use a clear, professional male voice with a highly consistent, steady pacing and tone: "}

TEXT:
${f}`}]}],generationConfig:{temperature:.1,topP:.8,responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:kt}}}}};let wn=null;if(o){const Nr=`Generate .SRT subtitles in ${i} for: "${f}"`;wn=Pc("analysis",{contents:[{role:"user",parts:[{text:Nr}]}]})}const[rm,bo]=await Promise.all([Pc("tts",br),wn]),No=(ke=(F=(V=($=(b=rm.candidates)==null?void 0:b[0])==null?void 0:$.content)==null?void 0:V.parts)==null?void 0:F[0])==null?void 0:ke.inlineData,Ac=((ce=(We=(ut=(Me=(Te=bo==null?void 0:bo.candidates)==null?void 0:Te[0])==null?void 0:Me.content)==null?void 0:ut.parts)==null?void 0:We[0])==null?void 0:ce.text)||"";if(No){const Nr=atob(No.data),Oc=Nr.length,Lc=new Int16Array(Oc/2);for(let xn=0;xn<Oc;xn+=2)Lc[xn/2]=Nr.charCodeAt(xn+1)<<8|Nr.charCodeAt(xn);const im=parseInt(No.mimeType.split("rate=")[1])||24e3,sm=tm(Lc,im),om={srt:Ac,srtLang:o?i:"None",text:f.substring(0,40),date:new Date().toLocaleTimeString(),voice:R,timestamp:Date.now()};await K_(om,sm);const jc=await is();if(g(jc),E){let xn=parseInt(localStorage.getItem("vokal_guest_used")||"0");localStorage.setItem("vokal_guest_used",xn+f.length)}const Ui=jc[0];C(Ui),P(o?Nc(Ac):[]),Ui&&Ui.url&&(ne.current.src=Ui.url),j.success("Studio Master Generated Successfully!",{icon:"✨"})}}catch(kt){p(kt.message),j.error("Generation Failed: "+kt.message,{icon:"❌"})}finally{_(!1)}}}},Rc=()=>{ge({show:!0,title:E?"Exit Guest Mode?":"Sign Out?",message:E?"Are you sure you want to exit Tryout mode and sign in?":"Are you sure you want to sign out? You will need to log back in to access your pro features.",type:"danger",confirmText:E?"Sign In Now":"Sign Out Now",onConfirm:()=>{E?(A(!1),ge(b=>({...b,show:!1}))):Ew(It).then(()=>{j.success("Signed out successfully"),e("studio"),ge(b=>({...b,show:!1}))})},onCancel:()=>ge(b=>({...b,show:!1}))})};return D?c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center",children:c.jsx(Yh,{className:"w-10 h-10 text-blue-500 animate-spin"})}):!wt&&!E?c.jsx(j_,{onGuestLogin:()=>A(!0)}):c.jsxs("div",{className:"h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans",children:[c.jsx(J_,{}),c.jsx(V_,{show:_e.show,title:_e.title,message:_e.message,type:_e.type,confirmText:_e.confirmText,onConfirm:_e.onConfirm,onCancel:()=>ge({..._e,show:!1})}),c.jsx(em,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx(F_,{show:xt,onClose:()=>_t(!1),onSelectPlan:b=>{zn(!0),_t(!1),j.success(`${b.name} Access Granted! (Payment portal coming soon)`,{icon:"💳"})}}),l&&c.jsxs("div",{className:"fixed inset-0 z-[60] lg:hidden flex flex-col justify-end",children:[c.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>u(!1)}),c.jsxs("div",{className:"relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6 shrink-0",children:[c.jsxs("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Gs,{className:"w-4 h-4 sm:w-5 sm:h-5 text-blue-500"})," Choose Voice Model"]}),c.jsx("button",{onClick:()=>u(!1),className:"p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:c.jsx(Jh,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar flex-1 pr-2",children:c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:Pd.map(b=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${R===b.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>{h(b.id),u(!1)},children:[c.jsx("button",{onClick:$=>{if($.stopPropagation(),ie===b.id)ct.current.pause(),ct.current.currentTime=0,me(null);else{O&&ne.current.pause();const V="/vokal-pro-studio/",F=`previews/${n.toLowerCase()}/${b.id.toLowerCase()}.wav`;ct.current.src=V+F,ct.current.play().catch(ke=>{console.warn("Preview missing:",F),j.error(`Missing audio for ${n}: ${b.id}`,{icon:"📂",description:`File should be at: ${F}`})}),me(b.id),ct.current.onended=()=>me(null)}},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${ie===b.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":R===b.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:ie===b.id?c.jsx(o1,{className:"w-4 h-4"}):c.jsx(qh,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${R===b.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:b.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:b.type})]})]},b.id))})})]})]}),!Ir&&c.jsxs("div",{onClick:Tc,className:"fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)"},children:[c.jsxs("div",{style:{position:"relative",width:"320px",height:"320px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"40px",zIndex:10,flexShrink:0},children:[c.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",animation:"glow-pulse 2.5s ease-in-out infinite"}}),c.jsx("div",{style:{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.2)",animation:"spin-slow 12s linear infinite"},children:c.jsx("div",{style:{position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 14px 4px #3b82f6"}})}),c.jsx("div",{style:{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",border:"1px solid rgba(99,102,241,0.25)",animation:"spin-slow-rev 8s linear infinite"},children:c.jsx("div",{style:{position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:"#818cf8",boxShadow:"0 0 10px 3px #818cf8"}})}),c.jsx("div",{style:{position:"absolute",width:"160px",height:"160px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.15)",animation:"spin-slow 6s linear infinite"}}),c.jsx("div",{style:{position:"relative",zIndex:5,width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)",animation:"float-mic 3s ease-in-out infinite"},children:c.jsx(Gs,{style:{width:"44px",height:"44px",color:"white"}})})]}),c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"5px",height:"40px",marginBottom:"28px",zIndex:10},children:[["bar1","#3b82f6"],["bar2","#6366f1"],["bar3","#3b82f6"],["bar4","#60a5fa"],["bar5","#818cf8"],["bar1","#3b82f6"],["bar2","#6366f1"]].map(([b,$],V)=>c.jsx("div",{className:`animate-${b}`,style:{width:"5px",borderRadius:"3px",background:$,opacity:.85}},V))}),c.jsx("h1",{style:{fontSize:"clamp(1rem,5vw,1.5rem)",fontWeight:900,letterSpacing:"0.35em",textTransform:"uppercase",zIndex:10,background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"text-shimmer 3s linear infinite",textAlign:"center",padding:"0 24px"},children:"Vokal Pro Studio"}),c.jsx("p",{style:{marginTop:"10px",fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(148,163,184,0.6)",zIndex:10,fontWeight:700},children:"AI Voice Engine"}),c.jsxs("div",{style:{position:"absolute",bottom:"60px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",zIndex:10},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"tap-bounce 1.5s ease-in-out infinite"},children:c.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",children:c.jsx("path",{d:"M6 1v12M6 13l-4-4M6 13l4-4",stroke:"#3b82f6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(148,163,184,0.45)",fontWeight:700,textTransform:"uppercase"},children:"Tap anywhere"})]})]}),c.jsx(D_,{activeTab:t,onTabChange:e}),c.jsxs("main",{className:"flex-1 p-6 sm:p-8 md:p-12 pb-32 md:pb-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last custom-scrollbar",children:[c.jsx(M_,{user:wt,isGuestMode:E,hasPlan:J,lang:n,languages:ua,onLangChange:b=>{r(b);const $=ua.find(V=>V.id===b);$&&(ua.some(F=>F.defaultText===f)||f.trim()==="")&&y($.defaultText)},onSignOutAction:Rc}),t==="studio"&&c.jsx(U_,{error:m,script:f,setScript:y,isProcessing:w,isGuestMode:E,user:wt,hasPlan:J,setShowPlans:_t,enableSubtitles:o,setEnableSubtitles:a,srtLang:i,setSrtLang:s,subtitleLanguages:B_,selectedVoice:R,setShowVoiceSheet:u,voiceList:Pd,onGenerate:Object.assign(nm,{onVoiceSelect:h,onPreview:b=>{if(ie===b)ct.current.pause(),ct.current.currentTime=0,me(null);else{O&&ne.current.pause();const $="/vokal-pro-studio/",V=`previews/${n.toLowerCase()}/${b.toLowerCase()}.wav`;ct.current.src=$+V,ct.current.play().catch(F=>{console.warn("Preview missing:",V),j.error(`Missing audio for ${n}: ${b}`,{icon:"📂",description:`File should be at: ${V}`})}),me(b),ct.current.onended=()=>me(null)}},playingPreview:ie}),currentAudio:v,activeSubtitle:k,isPlayingCurrent:O,onTogglePlay:()=>{ne.current.src!==v.url&&(ne.current.src=v.url),O?ne.current.pause():(ne.current.play(),L(!0))},onDownload:()=>{const b=document.createElement("a");b.href=v.url,b.download="master_audio.wav",b.click()},onDownloadSrt:()=>{const b=new Blob([v.srt],{type:"text/plain"}),$=document.createElement("a");$.href=URL.createObjectURL(b),$.download="subtitles.srt",$.click()}}),t==="vault"&&c.jsx($_,{items:d,onPlay:b=>{ne.current.src=b.url,P(b.srt?Nc(b.srt):[]),ne.current.play(),L(!0),C(b)},onDelete:b=>{ge({show:!0,title:"Delete Track?",message:"Are you sure you want to delete this master track from your history?",type:"danger",confirmText:"Delete Track",onConfirm:async()=>{await Q_(b.timestamp);const $=await is();g($),j.success("Track Deleted"),ge(V=>({...V,show:!1}))},onCancel:()=>ge($=>({...$,show:!1}))})},onClear:()=>{ge({show:!0,title:"Clear Vault?",message:"This will permanently remove all your generated audio from the local vault. This action cannot be undone.",type:"danger",confirmText:"Clear Vault",onConfirm:async()=>{await Y_();const b=await is();g(b),j.success("Vault Cleared"),ge($=>({...$,show:!1}))},onCancel:()=>ge(b=>({...b,show:!1}))})},onStudioGo:()=>e("studio")}),t==="profile"&&c.jsx(z_,{user:wt,isGuestMode:E,hasPlan:J,vaultCount:d.length,onUpgrade:()=>_t(!0),onSignOutAction:Rc})]})]})};class Z_ extends Fd.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 text-center",children:c.jsxs("div",{className:"max-w-md w-full bg-[#0F1118] border border-red-500/20 rounded-[2.5rem] p-10 shadow-2xl",children:[c.jsx("div",{className:"w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6 mx-auto",children:c.jsx("svg",{className:"w-10 h-10 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),c.jsx("h2",{className:"text-2xl font-black text-white uppercase tracking-tighter mb-4",children:"Something went wrong"}),c.jsx("p",{className:"text-slate-400 text-sm mb-8",children:"We've encountered an unexpected error. Don't worry, your data is safe. Try refreshing the page."}),c.jsx("button",{onClick:()=>window.location.reload(),className:"w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-600/20",children:"Reload Application"}),!1]})}):this.props.children}}da.createRoot(document.getElementById("root")).render(c.jsx(Fd.StrictMode,{children:c.jsx(Z_,{children:c.jsx(X_,{})})}));
