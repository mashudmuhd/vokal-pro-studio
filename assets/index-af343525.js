(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function om(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rd={exports:{}},ro={},Ad={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),am=Symbol.for("react.portal"),lm=Symbol.for("react.fragment"),cm=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),pm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),gm=Symbol.for("react.lazy"),Dc=Symbol.iterator;function ym(t){return t===null||typeof t!="object"?null:(t=Dc&&t[Dc]||t["@@iterator"],typeof t=="function"?t:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,jd={};function wr(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||Od}wr.prototype.isReactComponent={};wr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dd(){}Dd.prototype=wr.prototype;function ml(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||Od}var gl=ml.prototype=new Dd;gl.constructor=ml;Ld(gl,wr.prototype);gl.isPureReactComponent=!0;var Mc=Array.isArray,Md=Object.prototype.hasOwnProperty,yl={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function $d(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Md.call(e,r)&&!Ud.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bi,type:t,key:s,ref:o,props:i,_owner:yl.current}}function vm(t,e){return{$$typeof:bi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vl(t){return typeof t=="object"&&t!==null&&t.$$typeof===bi}function wm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uc=/\/+/g;function Po(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wm(""+t.key):e.toString(36)}function as(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bi:case am:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Po(o,0):r,Mc(i)?(n="",t!=null&&(n=t.replace(Uc,"$&/")+"/"),as(i,e,n,"",function(u){return u})):i!=null&&(vl(i)&&(i=vm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Po(s,a);o+=as(s,e,n,l,i)}else if(l=ym(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Po(s,a++),o+=as(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fi(t,e,n){if(t==null)return t;var r=[],i=0;return as(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},ls={transition:null},_m={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ls,ReactCurrentOwner:yl};function zd(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Fi,forEach:function(t,e,n){Fi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fi(t,function(){e++}),e},toArray:function(t){return Fi(t,function(e){return e})||[]},only:function(t){if(!vl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=wr;U.Fragment=lm;U.Profiler=um;U.PureComponent=ml;U.StrictMode=cm;U.Suspense=pm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;U.act=zd;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ld({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Md.call(e,l)&&!Ud.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bi,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:fm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dm,_context:t},t.Consumer=t};U.createElement=$d;U.createFactory=function(t){var e=$d.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:hm,render:t}};U.isValidElement=vl;U.lazy=function(t){return{$$typeof:gm,_payload:{_status:-1,_result:t},_init:xm}};U.memo=function(t,e){return{$$typeof:mm,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=ls.transition;ls.transition={};try{t()}finally{ls.transition=e}};U.unstable_act=zd;U.useCallback=function(t,e){return Ie.current.useCallback(t,e)};U.useContext=function(t){return Ie.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ie.current.useEffect(t,e)};U.useId=function(){return Ie.current.useId()};U.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ie.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};U.useRef=function(t){return Ie.current.useRef(t)};U.useState=function(t){return Ie.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ie.current.useTransition()};U.version="18.3.1";Ad.exports=U;var E=Ad.exports;const Fd=om(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=E,Em=Symbol.for("react.element"),Sm=Symbol.for("react.fragment"),Im=Object.prototype.hasOwnProperty,Cm=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bm={key:!0,ref:!0,__self:!0,__source:!0};function Vd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Im.call(e,r)&&!bm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Em,type:t,key:s,ref:o,props:i,_owner:Cm.current}}ro.Fragment=Sm;ro.jsx=Vd;ro.jsxs=Vd;Rd.exports=ro;var c=Rd.exports,da={},Bd={exports:{}},Fe={},Hd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,A){var j=S.length;S.push(A);e:for(;0<j;){var q=j-1>>>1,J=S[q];if(0<i(J,A))S[q]=A,S[j]=J,j=q;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var A=S[0],j=S.pop();if(j!==A){S[0]=j;e:for(var q=0,J=S.length,Un=J>>>1;q<Un;){var xt=2*(q+1)-1,_t=S[xt],_e=xt+1,me=S[_e];if(0>i(_t,j))_e<J&&0>i(me,_t)?(S[q]=me,S[_e]=j,q=_e):(S[q]=_t,S[xt]=j,q=xt);else if(_e<J&&0>i(me,j))S[q]=me,S[_e]=j,q=_e;else break e}}return A}function i(S,A){var j=S.sortIndex-A.sortIndex;return j!==0?j:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],m=1,p=null,f=3,y=!1,w=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(S){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=S)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function v(S){if(_=!1,g(S),!w)if(n(l)!==null)w=!0,wt(C);else{var A=n(u);A!==null&&Ir(v,A.startTime-S)}}function C(S,A){w=!1,_&&(_=!1,h(k),k=-1),y=!0;var j=f;try{for(g(A),p=n(l);p!==null&&(!(p.expirationTime>A)||S&&!L());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var J=q(p.expirationTime<=A);A=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&r(l),g(A)}else r(l);p=n(l)}if(p!==null)var Un=!0;else{var xt=n(u);xt!==null&&Ir(v,xt.startTime-A),Un=!1}return Un}finally{p=null,f=j,y=!1}}var T=!1,P=null,k=-1,M=5,O=-1;function L(){return!(t.unstable_now()-O<M)}function ie(){if(P!==null){var S=t.unstable_now();O=S;var A=!0;try{A=P(!0,S)}finally{A?pe():(T=!1,P=null)}}else T=!1}var pe;if(typeof d=="function")pe=function(){d(ie)};else if(typeof MessageChannel<"u"){var Sr=new MessageChannel,No=Sr.port2;Sr.port1.onmessage=ie,pe=function(){No.postMessage(null)}}else pe=function(){R(ie,0)};function wt(S){P=S,T||(T=!0,pe())}function Ir(S,A){k=R(function(){S(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,wt(C))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(S){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var j=f;f=A;try{return S()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var j=f;f=S;try{return A()}finally{f=j}},t.unstable_scheduleCallback=function(S,A,j){var q=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?q+j:q):j=q,S){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,S={id:m++,callback:A,priorityLevel:S,startTime:j,expirationTime:J,sortIndex:-1},j>q?(S.sortIndex=j,e(u,S),n(l)===null&&S===n(u)&&(_?(h(k),k=-1):_=!0,Ir(v,j-q))):(S.sortIndex=J,e(l,S),w||y||(w=!0,wt(C))),S},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(S){var A=f;return function(){var j=f;f=A;try{return S.apply(this,arguments)}finally{f=j}}}})(Wd);Hd.exports=Wd;var Nm=Hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=E,ze=Nm;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kd=new Set,oi={};function Dn(t,e){cr(t,e),cr(t+"Capture",e)}function cr(t,e){for(oi[t]=e,t=0;t<e.length;t++)Kd.add(e[t])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,Pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},zc={};function Rm(t){return fa.call(zc,t)?!0:fa.call($c,t)?!1:Pm.test(t)?zc[t]=!0:($c[t]=!0,!1)}function Am(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Om(t,e,n,r){if(e===null||typeof e>"u"||Am(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ce(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){he[t]=new Ce(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];he[e]=new Ce(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){he[t]=new Ce(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){he[t]=new Ce(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){he[t]=new Ce(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){he[t]=new Ce(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){he[t]=new Ce(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){he[t]=new Ce(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){he[t]=new Ce(t,5,!1,t.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function xl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wl,xl);he[e]=new Ce(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wl,xl);he[e]=new Ce(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wl,xl);he[e]=new Ce(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){he[t]=new Ce(t,1,!1,t.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){he[t]=new Ce(t,1,!1,t.toLowerCase(),null,!0,!0)});function _l(t,e,n,r){var i=he.hasOwnProperty(e)?he[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Om(e,n,i,r)&&(n=null),r||i===null?Rm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Pr(t){return t===null||typeof t!="object"?null:(t=Fc&&t[Fc]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Ro;function $r(t){if(Ro===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ro=e&&e[1]||""}return`
`+Ro+t}var Ao=!1;function Oo(t,e){if(!t||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$r(t):""}function Lm(t){switch(t.tag){case 5:return $r(t.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return t=Oo(t.type,!1),t;case 11:return t=Oo(t.type.render,!1),t;case 1:return t=Oo(t.type,!0),t;default:return""}}function ga(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vn:return"Fragment";case Fn:return"Portal";case ha:return"Profiler";case kl:return"StrictMode";case pa:return"Suspense";case ma:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qd:return(t.displayName||"Context")+".Consumer";case Gd:return(t._context.displayName||"Context")+".Provider";case El:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sl:return e=t.displayName||null,e!==null?e:ga(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return ga(t(e))}catch{}}return null}function jm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(e);case 8:return e===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dm(t){var e=qd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bi(t){t._valueTracker||(t._valueTracker=Dm(t))}function Jd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ss(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ya(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xd(t,e){e=e.checked,e!=null&&_l(t,"checked",e,!1)}function va(t,e){Xd(t,e);var n=dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&wa(t,e.type,dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wa(t,e,n){(e!=="number"||Ss(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zr=Array.isArray;function Zn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(zr(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dn(n)}}function Zd(t,e){var n=dn(e.value),r=dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ef(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ef(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hi,tf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mm=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(t){Mm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Kr[e]=Kr[t]})});function nf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Kr.hasOwnProperty(t)&&Kr[t]?(""+e).trim():e+"px"}function rf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Um=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(t,e){if(e){if(Um[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Il(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,er=null,tr=null;function Kc(t){if(t=Pi(t)){if(typeof Ia!="function")throw Error(x(280));var e=t.stateNode;e&&(e=lo(e),Ia(t.stateNode,t.type,e))}}function sf(t){er?tr?tr.push(t):tr=[t]:er=t}function of(){if(er){var t=er,e=tr;if(tr=er=null,Kc(t),e)for(t=0;t<e.length;t++)Kc(e[t])}}function af(t,e){return t(e)}function lf(){}var Lo=!1;function cf(t,e,n){if(Lo)return t(e,n);Lo=!0;try{return af(t,e,n)}finally{Lo=!1,(er!==null||tr!==null)&&(lf(),of())}}function li(t,e){var n=t.stateNode;if(n===null)return null;var r=lo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Ca=!1;if(Lt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Ca=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Ca=!1}function $m(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(m){this.onError(m)}}var Gr=!1,Is=null,Cs=!1,ba=null,zm={onError:function(t){Gr=!0,Is=t}};function Fm(t,e,n,r,i,s,o,a,l){Gr=!1,Is=null,$m.apply(zm,arguments)}function Vm(t,e,n,r,i,s,o,a,l){if(Fm.apply(this,arguments),Gr){if(Gr){var u=Is;Gr=!1,Is=null}else throw Error(x(198));Cs||(Cs=!0,ba=u)}}function Mn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gc(t){if(Mn(t)!==t)throw Error(x(188))}function Bm(t){var e=t.alternate;if(!e){if(e=Mn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gc(i),t;if(s===r)return Gc(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function df(t){return t=Bm(t),t!==null?ff(t):null}function ff(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ff(t);if(e!==null)return e;t=t.sibling}return null}var hf=ze.unstable_scheduleCallback,Qc=ze.unstable_cancelCallback,Hm=ze.unstable_shouldYield,Wm=ze.unstable_requestPaint,re=ze.unstable_now,Km=ze.unstable_getCurrentPriorityLevel,Cl=ze.unstable_ImmediatePriority,pf=ze.unstable_UserBlockingPriority,bs=ze.unstable_NormalPriority,Gm=ze.unstable_LowPriority,mf=ze.unstable_IdlePriority,io=null,mt=null;function Qm(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(io,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Jm,Ym=Math.log,qm=Math.LN2;function Jm(t){return t>>>=0,t===0?32:31-(Ym(t)/qm|0)|0}var Wi=64,Ki=4194304;function Fr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ns(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fr(a):(s&=o,s!==0&&(r=Fr(s)))}else o=n&~i,o!==0?r=Fr(o):s!==0&&(r=Fr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Xm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Xm(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gf(){var t=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),t}function jo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ni(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function e0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var F=0;function yf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vf,Nl,wf,xf,_f,Ta=!1,Gi=[],en=null,tn=null,nn=null,ci=new Map,ui=new Map,Kt=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(e.pointerId)}}function Ar(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pi(e),e!==null&&Nl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n0(t,e,n,r,i){switch(e){case"focusin":return en=Ar(en,t,e,n,r,i),!0;case"dragenter":return tn=Ar(tn,t,e,n,r,i),!0;case"mouseover":return nn=Ar(nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ci.set(s,Ar(ci.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ui.set(s,Ar(ui.get(s)||null,t,e,n,r,i)),!0}return!1}function kf(t){var e=kn(t.target);if(e!==null){var n=Mn(e);if(n!==null){if(e=n.tag,e===13){if(e=uf(n),e!==null){t.blockedOn=e,_f(t.priority,function(){wf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=Pi(n),e!==null&&Nl(e),t.blockedOn=n,!1;e.shift()}return!0}function qc(t,e,n){cs(t)&&n.delete(e)}function r0(){Ta=!1,en!==null&&cs(en)&&(en=null),tn!==null&&cs(tn)&&(tn=null),nn!==null&&cs(nn)&&(nn=null),ci.forEach(qc),ui.forEach(qc)}function Or(t,e){t.blockedOn===e&&(t.blockedOn=null,Ta||(Ta=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,r0)))}function di(t){function e(i){return Or(i,t)}if(0<Gi.length){Or(Gi[0],t);for(var n=1;n<Gi.length;n++){var r=Gi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(en!==null&&Or(en,t),tn!==null&&Or(tn,t),nn!==null&&Or(nn,t),ci.forEach(e),ui.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)kf(n),n.blockedOn===null&&Kt.shift()}var nr=Ft.ReactCurrentBatchConfig,Ts=!0;function i0(t,e,n,r){var i=F,s=nr.transition;nr.transition=null;try{F=1,Tl(t,e,n,r)}finally{F=i,nr.transition=s}}function s0(t,e,n,r){var i=F,s=nr.transition;nr.transition=null;try{F=4,Tl(t,e,n,r)}finally{F=i,nr.transition=s}}function Tl(t,e,n,r){if(Ts){var i=Pa(t,e,n,r);if(i===null)Wo(t,e,r,Ps,n),Yc(t,r);else if(n0(i,t,e,n,r))r.stopPropagation();else if(Yc(t,r),e&4&&-1<t0.indexOf(t)){for(;i!==null;){var s=Pi(i);if(s!==null&&vf(s),s=Pa(t,e,n,r),s===null&&Wo(t,e,r,Ps,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wo(t,e,r,null,n)}}var Ps=null;function Pa(t,e,n,r){if(Ps=null,t=Il(r),t=kn(t),t!==null)if(e=Mn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ps=t,null}function Ef(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case Cl:return 1;case pf:return 4;case bs:case Gm:return 16;case mf:return 536870912;default:return 16}default:return 16}}var Xt=null,Pl=null,us=null;function Sf(){if(us)return us;var t,e=Pl,n=e.length,r,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return us=i.slice(t,1<r?1-r:void 0)}function ds(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qi(){return!0}function Jc(){return!1}function Ve(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qi:Jc,this.isPropagationStopped=Jc,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),e}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ve(xr),Ti=ee({},xr,{view:0,detail:0}),o0=Ve(Ti),Do,Mo,Lr,so=ee({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lr&&(Lr&&t.type==="mousemove"?(Do=t.screenX-Lr.screenX,Mo=t.screenY-Lr.screenY):Mo=Do=0,Lr=t),Do)},movementY:function(t){return"movementY"in t?t.movementY:Mo}}),Xc=Ve(so),a0=ee({},so,{dataTransfer:0}),l0=Ve(a0),c0=ee({},Ti,{relatedTarget:0}),Uo=Ve(c0),u0=ee({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=Ve(u0),f0=ee({},xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h0=Ve(f0),p0=ee({},xr,{data:0}),Zc=Ve(p0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y0[t])?!!e[t]:!1}function Al(){return v0}var w0=ee({},Ti,{key:function(t){if(t.key){var e=m0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(t){return t.type==="keypress"?ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x0=Ve(w0),_0=ee({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Ve(_0),k0=ee({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),E0=Ve(k0),S0=ee({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=Ve(S0),C0=ee({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=Ve(C0),N0=[9,13,27,32],Ol=Lt&&"CompositionEvent"in window,Qr=null;Lt&&"documentMode"in document&&(Qr=document.documentMode);var T0=Lt&&"TextEvent"in window&&!Qr,If=Lt&&(!Ol||Qr&&8<Qr&&11>=Qr),tu=String.fromCharCode(32),nu=!1;function Cf(t,e){switch(t){case"keyup":return N0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bn=!1;function P0(t,e){switch(t){case"compositionend":return bf(e);case"keypress":return e.which!==32?null:(nu=!0,tu);case"textInput":return t=e.data,t===tu&&nu?null:t;default:return null}}function R0(t,e){if(Bn)return t==="compositionend"||!Ol&&Cf(t,e)?(t=Sf(),us=Pl=Xt=null,Bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return If&&e.locale!=="ko"?null:e.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A0[t.type]:e==="textarea"}function Nf(t,e,n,r){sf(r),e=Rs(e,"onChange"),0<e.length&&(n=new Rl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yr=null,fi=null;function O0(t){$f(t,0)}function oo(t){var e=Kn(t);if(Jd(e))return t}function L0(t,e){if(t==="change")return e}var Tf=!1;if(Lt){var $o;if(Lt){var zo="oninput"in document;if(!zo){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),zo=typeof iu.oninput=="function"}$o=zo}else $o=!1;Tf=$o&&(!document.documentMode||9<document.documentMode)}function su(){Yr&&(Yr.detachEvent("onpropertychange",Pf),fi=Yr=null)}function Pf(t){if(t.propertyName==="value"&&oo(fi)){var e=[];Nf(e,fi,t,Il(t)),cf(O0,e)}}function j0(t,e,n){t==="focusin"?(su(),Yr=e,fi=n,Yr.attachEvent("onpropertychange",Pf)):t==="focusout"&&su()}function D0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(fi)}function M0(t,e){if(t==="click")return oo(e)}function U0(t,e){if(t==="input"||t==="change")return oo(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:$0;function hi(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fa.call(e,i)||!at(t[i],e[i]))return!1}return!0}function ou(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function au(t,e){var n=ou(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function Rf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Af(){for(var t=window,e=Ss();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ss(t.document)}return e}function Ll(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z0(t){var e=Af(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rf(n.ownerDocument.documentElement,n)){if(r!==null&&Ll(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=au(n,s);var o=au(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var F0=Lt&&"documentMode"in document&&11>=document.documentMode,Hn=null,Ra=null,qr=null,Aa=!1;function lu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||Hn==null||Hn!==Ss(r)||(r=Hn,"selectionStart"in r&&Ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&hi(qr,r)||(qr=r,r=Rs(Ra,"onSelect"),0<r.length&&(e=new Rl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hn)))}function Yi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wn={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},Fo={},Of={};Lt&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function ao(t){if(Fo[t])return Fo[t];if(!Wn[t])return t;var e=Wn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Of)return Fo[t]=e[n];return t}var Lf=ao("animationend"),jf=ao("animationiteration"),Df=ao("animationstart"),Mf=ao("transitionend"),Uf=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){Uf.set(t,e),Dn(e,[t])}for(var Vo=0;Vo<cu.length;Vo++){var Bo=cu[Vo],V0=Bo.toLowerCase(),B0=Bo[0].toUpperCase()+Bo.slice(1);hn(V0,"on"+B0)}hn(Lf,"onAnimationEnd");hn(jf,"onAnimationIteration");hn(Df,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Mf,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function uu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Vm(r,e,void 0,t),t.currentTarget=null}function $f(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uu(i,a,u),s=l}}}if(Cs)throw t=ba,Cs=!1,ba=null,t}function G(t,e){var n=e[Ma];n===void 0&&(n=e[Ma]=new Set);var r=t+"__bubble";n.has(r)||(zf(e,t,2,!1),n.add(r))}function Ho(t,e,n){var r=0;e&&(r|=4),zf(n,t,r,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function pi(t){if(!t[qi]){t[qi]=!0,Kd.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||Ho(n,!1,t),Ho(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,Ho("selectionchange",!1,e))}}function zf(t,e,n,r){switch(Ef(e)){case 1:var i=i0;break;case 4:i=s0;break;default:i=Tl}n=i.bind(null,e,n,t),i=void 0,!Ca||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wo(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cf(function(){var u=s,m=Il(n),p=[];e:{var f=Uf.get(t);if(f!==void 0){var y=Rl,w=t;switch(t){case"keypress":if(ds(n)===0)break e;case"keydown":case"keyup":y=x0;break;case"focusin":w="focus",y=Uo;break;case"focusout":w="blur",y=Uo;break;case"beforeblur":case"afterblur":y=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=l0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=E0;break;case Lf:case jf:case Df:y=d0;break;case Mf:y=I0;break;case"scroll":y=o0;break;case"wheel":y=b0;break;case"copy":case"cut":case"paste":y=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu}var _=(e&4)!==0,R=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,h!==null&&(v=li(d,h),v!=null&&_.push(mi(d,v,g)))),R)break;d=d.return}0<_.length&&(f=new y(f,w,null,n,m),p.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Sa&&(w=n.relatedTarget||n.fromElement)&&(kn(w)||w[jt]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?kn(w):null,w!==null&&(R=Mn(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=Xc,v="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=eu,v="onPointerLeave",h="onPointerEnter",d="pointer"),R=y==null?f:Kn(y),g=w==null?f:Kn(w),f=new _(v,d+"leave",y,n,m),f.target=R,f.relatedTarget=g,v=null,kn(m)===u&&(_=new _(h,d+"enter",w,n,m),_.target=g,_.relatedTarget=R,v=_),R=v,y&&w)t:{for(_=y,h=w,d=0,g=_;g;g=zn(g))d++;for(g=0,v=h;v;v=zn(v))g++;for(;0<d-g;)_=zn(_),d--;for(;0<g-d;)h=zn(h),g--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=zn(_),h=zn(h)}_=null}else _=null;y!==null&&du(p,f,y,_,!1),w!==null&&R!==null&&du(p,R,w,_,!0)}}e:{if(f=u?Kn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=L0;else if(ru(f))if(Tf)C=U0;else{C=D0;var T=j0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=M0);if(C&&(C=C(t,u))){Nf(p,C,n,m);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&wa(f,"number",f.value)}switch(T=u?Kn(u):window,t){case"focusin":(ru(T)||T.contentEditable==="true")&&(Hn=T,Ra=u,qr=null);break;case"focusout":qr=Ra=Hn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,lu(p,n,m);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":lu(p,n,m)}var P;if(Ol)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Bn?Cf(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(If&&n.locale!=="ko"&&(Bn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Bn&&(P=Sf()):(Xt=m,Pl="value"in Xt?Xt.value:Xt.textContent,Bn=!0)),T=Rs(u,k),0<T.length&&(k=new Zc(k,t,null,n,m),p.push({event:k,listeners:T}),P?k.data=P:(P=bf(n),P!==null&&(k.data=P)))),(P=T0?P0(t,n):R0(t,n))&&(u=Rs(u,"onBeforeInput"),0<u.length&&(m=new Zc("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=P))}$f(p,e)})}function mi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=li(t,n),s!=null&&r.unshift(mi(t,s,i)),s=li(t,e),s!=null&&r.push(mi(t,s,i))),t=t.return}return r}function zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function du(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=li(n,s),l!=null&&o.unshift(mi(n,l,a))):i||(l=li(n,s),l!=null&&o.push(mi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var W0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function fu(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace(K0,"")}function Ji(t,e,n){if(e=fu(e),fu(t)!==e&&n)throw Error(x(425))}function As(){}var Oa=null,La=null;function ja(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(t){return hu.resolve(null).then(t).catch(Y0)}:Da;function Y0(t){setTimeout(function(){throw t})}function Ko(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),di(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(e)}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _r=Math.random().toString(36).slice(2),ht="__reactFiber$"+_r,gi="__reactProps$"+_r,jt="__reactContainer$"+_r,Ma="__reactEvents$"+_r,q0="__reactListeners$"+_r,J0="__reactHandles$"+_r;function kn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jt]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pu(t);t!==null;){if(n=t[ht])return n;t=pu(t)}return e}t=n,n=t.parentNode}return null}function Pi(t){return t=t[ht]||t[jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function lo(t){return t[gi]||null}var Ua=[],Gn=-1;function pn(t){return{current:t}}function Q(t){0>Gn||(t.current=Ua[Gn],Ua[Gn]=null,Gn--)}function K(t,e){Gn++,Ua[Gn]=t.current,t.current=e}var fn={},xe=pn(fn),Re=pn(!1),Tn=fn;function ur(t,e){var n=t.type.contextTypes;if(!n)return fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(t){return t=t.childContextTypes,t!=null}function Os(){Q(Re),Q(xe)}function mu(t,e,n){if(xe.current!==fn)throw Error(x(168));K(xe,e),K(Re,n)}function Ff(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,jm(t)||"Unknown",i));return ee({},n,r)}function Ls(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fn,Tn=xe.current,K(xe,t),K(Re,Re.current),!0}function gu(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Ff(t,e,Tn),r.__reactInternalMemoizedMergedChildContext=t,Q(Re),Q(xe),K(xe,t)):Q(Re),K(Re,n)}var bt=null,co=!1,Go=!1;function Vf(t){bt===null?bt=[t]:bt.push(t)}function X0(t){co=!0,Vf(t)}function mn(){if(!Go&&bt!==null){Go=!0;var t=0,e=F;try{var n=bt;for(F=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,co=!1}catch(i){throw bt!==null&&(bt=bt.slice(t+1)),hf(Cl,mn),i}finally{F=e,Go=!1}}return null}var Qn=[],Yn=0,js=null,Ds=0,He=[],We=0,Pn=null,Tt=1,Pt="";function wn(t,e){Qn[Yn++]=Ds,Qn[Yn++]=js,js=t,Ds=e}function Bf(t,e,n){He[We++]=Tt,He[We++]=Pt,He[We++]=Pn,Pn=t;var r=Tt;t=Pt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-st(e)+i|n<<i|r,Pt=s+t}else Tt=1<<s|n<<i|r,Pt=t}function jl(t){t.return!==null&&(wn(t,1),Bf(t,1,0))}function Dl(t){for(;t===js;)js=Qn[--Yn],Qn[Yn]=null,Ds=Qn[--Yn],Qn[Yn]=null;for(;t===Pn;)Pn=He[--We],He[We]=null,Pt=He[--We],He[We]=null,Tt=He[--We],He[We]=null}var $e=null,Ue=null,Y=!1,rt=null;function Hf(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Ue=rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pn!==null?{id:Tt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Ue=null,!0):!1;default:return!1}}function $a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function za(t){if(Y){var e=Ue;if(e){var n=e;if(!yu(t,e)){if($a(t))throw Error(x(418));e=rn(n.nextSibling);var r=$e;e&&yu(t,e)?Hf(r,n):(t.flags=t.flags&-4097|2,Y=!1,$e=t)}}else{if($a(t))throw Error(x(418));t.flags=t.flags&-4097|2,Y=!1,$e=t}}}function vu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function Xi(t){if(t!==$e)return!1;if(!Y)return vu(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ja(t.type,t.memoizedProps)),e&&(e=Ue)){if($a(t))throw Wf(),Error(x(418));for(;e;)Hf(t,e),e=rn(e.nextSibling)}if(vu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=$e?rn(t.stateNode.nextSibling):null;return!0}function Wf(){for(var t=Ue;t;)t=rn(t.nextSibling)}function dr(){Ue=$e=null,Y=!1}function Ml(t){rt===null?rt=[t]:rt.push(t)}var Z0=Ft.ReactCurrentBatchConfig;function jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Zi(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wu(t){var e=t._init;return e(t._payload)}function Kf(t){function e(h,d){if(t){var g=h.deletions;g===null?(h.deletions=[d],h.flags|=16):g.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=ln(h,d),h.index=0,h.sibling=null,h}function s(h,d,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<d?(h.flags|=2,d):g):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,g,v){return d===null||d.tag!==6?(d=ea(g,h.mode,v),d.return=h,d):(d=i(d,g),d.return=h,d)}function l(h,d,g,v){var C=g.type;return C===Vn?m(h,d,g.props.children,v,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&wu(C)===d.type)?(v=i(d,g.props),v.ref=jr(h,d,g),v.return=h,v):(v=vs(g.type,g.key,g.props,null,h.mode,v),v.ref=jr(h,d,g),v.return=h,v)}function u(h,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ta(g,h.mode,v),d.return=h,d):(d=i(d,g.children||[]),d.return=h,d)}function m(h,d,g,v,C){return d===null||d.tag!==7?(d=bn(g,h.mode,v,C),d.return=h,d):(d=i(d,g),d.return=h,d)}function p(h,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ea(""+d,h.mode,g),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vi:return g=vs(d.type,d.key,d.props,null,h.mode,g),g.ref=jr(h,null,d),g.return=h,g;case Fn:return d=ta(d,h.mode,g),d.return=h,d;case Ht:var v=d._init;return p(h,v(d._payload),g)}if(zr(d)||Pr(d))return d=bn(d,h.mode,g,null),d.return=h,d;Zi(h,d)}return null}function f(h,d,g,v){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(h,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vi:return g.key===C?l(h,d,g,v):null;case Fn:return g.key===C?u(h,d,g,v):null;case Ht:return C=g._init,f(h,d,C(g._payload),v)}if(zr(g)||Pr(g))return C!==null?null:m(h,d,g,v,null);Zi(h,g)}return null}function y(h,d,g,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(g)||null,a(d,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vi:return h=h.get(v.key===null?g:v.key)||null,l(d,h,v,C);case Fn:return h=h.get(v.key===null?g:v.key)||null,u(d,h,v,C);case Ht:var T=v._init;return y(h,d,g,T(v._payload),C)}if(zr(v)||Pr(v))return h=h.get(g)||null,m(d,h,v,C,null);Zi(d,v)}return null}function w(h,d,g,v){for(var C=null,T=null,P=d,k=d=0,M=null;P!==null&&k<g.length;k++){P.index>k?(M=P,P=null):M=P.sibling;var O=f(h,P,g[k],v);if(O===null){P===null&&(P=M);break}t&&P&&O.alternate===null&&e(h,P),d=s(O,d,k),T===null?C=O:T.sibling=O,T=O,P=M}if(k===g.length)return n(h,P),Y&&wn(h,k),C;if(P===null){for(;k<g.length;k++)P=p(h,g[k],v),P!==null&&(d=s(P,d,k),T===null?C=P:T.sibling=P,T=P);return Y&&wn(h,k),C}for(P=r(h,P);k<g.length;k++)M=y(P,h,k,g[k],v),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?k:M.key),d=s(M,d,k),T===null?C=M:T.sibling=M,T=M);return t&&P.forEach(function(L){return e(h,L)}),Y&&wn(h,k),C}function _(h,d,g,v){var C=Pr(g);if(typeof C!="function")throw Error(x(150));if(g=C.call(g),g==null)throw Error(x(151));for(var T=C=null,P=d,k=d=0,M=null,O=g.next();P!==null&&!O.done;k++,O=g.next()){P.index>k?(M=P,P=null):M=P.sibling;var L=f(h,P,O.value,v);if(L===null){P===null&&(P=M);break}t&&P&&L.alternate===null&&e(h,P),d=s(L,d,k),T===null?C=L:T.sibling=L,T=L,P=M}if(O.done)return n(h,P),Y&&wn(h,k),C;if(P===null){for(;!O.done;k++,O=g.next())O=p(h,O.value,v),O!==null&&(d=s(O,d,k),T===null?C=O:T.sibling=O,T=O);return Y&&wn(h,k),C}for(P=r(h,P);!O.done;k++,O=g.next())O=y(P,h,k,O.value,v),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?k:O.key),d=s(O,d,k),T===null?C=O:T.sibling=O,T=O);return t&&P.forEach(function(ie){return e(h,ie)}),Y&&wn(h,k),C}function R(h,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Vn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vi:e:{for(var C=g.key,T=d;T!==null;){if(T.key===C){if(C=g.type,C===Vn){if(T.tag===7){n(h,T.sibling),d=i(T,g.props.children),d.return=h,h=d;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&wu(C)===T.type){n(h,T.sibling),d=i(T,g.props),d.ref=jr(h,T,g),d.return=h,h=d;break e}n(h,T);break}else e(h,T);T=T.sibling}g.type===Vn?(d=bn(g.props.children,h.mode,v,g.key),d.return=h,h=d):(v=vs(g.type,g.key,g.props,null,h.mode,v),v.ref=jr(h,d,g),v.return=h,h=v)}return o(h);case Fn:e:{for(T=g.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(h,d.sibling),d=i(d,g.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=ta(g,h.mode,v),d.return=h,h=d}return o(h);case Ht:return T=g._init,R(h,d,T(g._payload),v)}if(zr(g))return w(h,d,g,v);if(Pr(g))return _(h,d,g,v);Zi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,g),d.return=h,h=d):(n(h,d),d=ea(g,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return R}var fr=Kf(!0),Gf=Kf(!1),Ms=pn(null),Us=null,qn=null,Ul=null;function $l(){Ul=qn=Us=null}function zl(t){var e=Ms.current;Q(Ms),t._currentValue=e}function Fa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rr(t,e){Us=t,Ul=qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pe=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(Ul!==t)if(t={context:t,memoizedValue:e,next:null},qn===null){if(Us===null)throw Error(x(308));qn=t,Us.dependencies={lanes:0,firstContext:t}}else qn=qn.next=t;return e}var En=null;function Fl(t){En===null?En=[t]:En.push(t)}function Qf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fl(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Vl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,Fl(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function fs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bl(t,n)}}function xu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $s(t,e,n,r){var i=t.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,m=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(f=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(y,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,f=typeof w=="function"?w.call(y,p,f):w,f==null)break e;p=ee({},p,f);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,l=p):m=m.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(m===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);An|=o,t.lanes=o,t.memoizedState=p}}function _u(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ri={},gt=pn(Ri),yi=pn(Ri),vi=pn(Ri);function Sn(t){if(t===Ri)throw Error(x(174));return t}function Bl(t,e){switch(K(vi,e),K(yi,t),K(gt,Ri),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_a(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_a(e,t)}Q(gt),K(gt,e)}function hr(){Q(gt),Q(yi),Q(vi)}function qf(t){Sn(vi.current);var e=Sn(gt.current),n=_a(e,t.type);e!==n&&(K(yi,t),K(gt,n))}function Hl(t){yi.current===t&&(Q(gt),Q(yi))}var X=pn(0);function zs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qo=[];function Wl(){for(var t=0;t<Qo.length;t++)Qo[t]._workInProgressVersionPrimary=null;Qo.length=0}var hs=Ft.ReactCurrentDispatcher,Yo=Ft.ReactCurrentBatchConfig,Rn=0,Z=null,ae=null,ce=null,Fs=!1,Jr=!1,wi=0,eg=0;function ye(){throw Error(x(321))}function Kl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Gl(t,e,n,r,i,s){if(Rn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hs.current=t===null||t.memoizedState===null?ig:sg,t=n(r,i),Jr){s=0;do{if(Jr=!1,wi=0,25<=s)throw Error(x(301));s+=1,ce=ae=null,e.updateQueue=null,hs.current=og,t=n(r,i)}while(Jr)}if(hs.current=Vs,e=ae!==null&&ae.next!==null,Rn=0,ce=ae=Z=null,Fs=!1,e)throw Error(x(300));return t}function Ql(){var t=wi!==0;return wi=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=t:ce=ce.next=t,ce}function Ye(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=ce===null?Z.memoizedState:ce.next;if(e!==null)ce=e,ae=t;else{if(t===null)throw Error(x(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Z.memoizedState=ce=t:ce=ce.next=t}return ce}function xi(t,e){return typeof e=="function"?e(t):e}function qo(t){var e=Ye(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var m=u.lane;if((Rn&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Z.lanes|=m,An|=m}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,at(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,An|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jo(t){var e=Ye(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Pe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jf(){}function Xf(t,e){var n=Z,r=Ye(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,Yl(th.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,_i(9,eh.bind(null,n,r,i,e),void 0,null),ue===null)throw Error(x(349));Rn&30||Zf(n,e,i)}return i}function Zf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eh(t,e,n,r){e.value=n,e.getSnapshot=r,nh(e)&&rh(t)}function th(t,e,n){return n(function(){nh(e)&&rh(t)})}function nh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function rh(t){var e=Dt(t,1);e!==null&&ot(e,t,1,-1)}function ku(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:t},e.queue=t,t=t.dispatch=rg.bind(null,Z,t),[e.memoizedState,t]}function _i(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ih(){return Ye().memoizedState}function ps(t,e,n,r){var i=ft();Z.flags|=t,i.memoizedState=_i(1|e,n,void 0,r===void 0?null:r)}function uo(t,e,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Kl(r,o.deps)){i.memoizedState=_i(e,n,s,r);return}}Z.flags|=t,i.memoizedState=_i(1|e,n,s,r)}function Eu(t,e){return ps(8390656,8,t,e)}function Yl(t,e){return uo(2048,8,t,e)}function sh(t,e){return uo(4,2,t,e)}function oh(t,e){return uo(4,4,t,e)}function ah(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lh(t,e,n){return n=n!=null?n.concat([t]):null,uo(4,4,ah.bind(null,e,t),n)}function ql(){}function ch(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uh(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dh(t,e,n){return Rn&21?(at(n,e)||(n=gf(),Z.lanes|=n,An|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pe=!0),t.memoizedState=n)}function tg(t,e){var n=F;F=n!==0&&4>n?n:4,t(!0);var r=Yo.transition;Yo.transition={};try{t(!1),e()}finally{F=n,Yo.transition=r}}function fh(){return Ye().memoizedState}function ng(t,e,n){var r=an(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hh(t))ph(e,n);else if(n=Qf(t,e,n,r),n!==null){var i=Ee();ot(n,t,r,i),mh(n,e,r)}}function rg(t,e,n){var r=an(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hh(t))ph(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=e.interleaved;l===null?(i.next=i,Fl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Qf(t,e,i,r),n!==null&&(i=Ee(),ot(n,t,r,i),mh(n,e,r))}}function hh(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function ph(t,e){Jr=Fs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bl(t,n)}}var Vs={readContext:Qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},ig={readContext:Qe,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:Eu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ps(4194308,4,ah.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ps(4194308,4,t,e)},useInsertionEffect:function(t,e){return ps(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ng.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:ku,useDebugValue:ql,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=ku(!1),e=t[0];return t=tg.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ft();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ue===null)throw Error(x(349));Rn&30||Zf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eu(th.bind(null,r,s,t),[t]),r.flags|=2048,_i(9,eh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=ue.identifierPrefix;if(Y){var n=Pt,r=Tt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sg={readContext:Qe,useCallback:ch,useContext:Qe,useEffect:Yl,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:uh,useReducer:qo,useRef:ih,useState:function(){return qo(xi)},useDebugValue:ql,useDeferredValue:function(t){var e=Ye();return dh(e,ae.memoizedState,t)},useTransition:function(){var t=qo(xi)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:fh,unstable_isNewReconciler:!1},og={readContext:Qe,useCallback:ch,useContext:Qe,useEffect:Yl,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:uh,useReducer:Jo,useRef:ih,useState:function(){return Jo(xi)},useDebugValue:ql,useDeferredValue:function(t){var e=Ye();return ae===null?e.memoizedState=t:dh(e,ae.memoizedState,t)},useTransition:function(){var t=Jo(xi)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:fh,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Va(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fo={isMounted:function(t){return(t=t._reactInternals)?Mn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=an(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(ot(e,t,i,r),fs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=an(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(ot(e,t,i,r),fs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ee(),r=an(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=sn(t,i,r),e!==null&&(ot(e,t,r,n),fs(e,t,r))}};function Su(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hi(n,r)||!hi(i,s):!0}function gh(t,e,n){var r=!1,i=fn,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Ae(e)?Tn:xe.current,r=e.contextTypes,s=(r=r!=null)?ur(t,i):fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Iu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fo.enqueueReplaceState(e,e.state,null)}function Ba(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Ae(e)?Tn:xe.current,i.context=ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Va(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fo.enqueueReplaceState(i,i.state,null),$s(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function pr(t,e){try{var n="",r=e;do n+=Lm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ha(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ag=typeof WeakMap=="function"?WeakMap:Map;function yh(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hs||(Hs=!0,el=r),Ha(t,e)},n}function vh(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ha(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ha(t,e),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ag;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_g.bind(null,t,e,n),e.then(t,t))}function bu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,sn(n,e,1))),n.lanes|=1),t)}var lg=Ft.ReactCurrentOwner,Pe=!1;function ke(t,e,n,r){e.child=t===null?Gf(e,null,n,r):fr(e,t.child,n,r)}function Tu(t,e,n,r,i){n=n.render;var s=e.ref;return rr(e,i),r=Gl(t,e,n,r,s,i),n=Ql(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(Y&&n&&jl(e),e.flags|=1,ke(t,e,r,i),e.child)}function Pu(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ic(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wh(t,e,s,r,i)):(t=vs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&t.ref===e.ref)return Mt(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function wh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hi(s,r)&&t.ref===e.ref)if(Pe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pe=!0);else return e.lanes=t.lanes,Mt(t,e,i)}return Wa(t,e,n,r,i)}function xh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Xn,De),De|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(Xn,De),De|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(Xn,De),De|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(Xn,De),De|=r;return ke(t,e,i,n),e.child}function _h(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wa(t,e,n,r,i){var s=Ae(n)?Tn:xe.current;return s=ur(e,s),rr(e,i),n=Gl(t,e,n,r,s,i),r=Ql(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(Y&&r&&jl(e),e.flags|=1,ke(t,e,n,i),e.child)}function Ru(t,e,n,r,i){if(Ae(n)){var s=!0;Ls(e)}else s=!1;if(rr(e,i),e.stateNode===null)ms(t,e),gh(e,n,r),Ba(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Ae(n)?Tn:xe.current,u=ur(e,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Iu(e,o,r,u),Wt=!1;var f=e.memoizedState;o.state=f,$s(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Re.current||Wt?(typeof m=="function"&&(Va(e,n,m,r),l=e.memoizedState),(a=Wt||Su(e,n,a,r,f,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Yf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tt(e.type,a),o.props=u,p=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=Ae(n)?Tn:xe.current,l=ur(e,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||f!==l)&&Iu(e,o,r,l),Wt=!1,f=e.memoizedState,o.state=f,$s(e,r,o,i);var w=e.memoizedState;a!==p||f!==w||Re.current||Wt?(typeof y=="function"&&(Va(e,n,y,r),w=e.memoizedState),(u=Wt||Su(e,n,u,r,f,w,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ka(t,e,n,r,s,i)}function Ka(t,e,n,r,i,s){_h(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gu(e,n,!1),Mt(t,e,s);r=e.stateNode,lg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fr(e,t.child,null,s),e.child=fr(e,null,a,s)):ke(t,e,a,s),e.memoizedState=r.state,i&&gu(e,n,!0),e.child}function kh(t){var e=t.stateNode;e.pendingContext?mu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mu(t,e.context,!1),Bl(t,e.containerInfo)}function Au(t,e,n,r,i){return dr(),Ml(i),e.flags|=256,ke(t,e,n,r),e.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eh(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(X,i&1),t===null)return za(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mo(o,r,0,null),t=bn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qa(n),e.memoizedState=Ga,t):Jl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cg(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ln(a,s):(s=bn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ga,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jl(t,e){return e=mo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function es(t,e,n,r){return r!==null&&Ml(r),fr(e,t.child,null,n),t=Jl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cg(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xo(Error(x(422))),es(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mo({mode:"visible",children:r.children},i,0,null),s=bn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fr(e,t.child,null,o),e.child.memoizedState=Qa(o),e.memoizedState=Ga,s);if(!(e.mode&1))return es(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Xo(s,r,void 0),es(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),ot(r,t,i,-1))}return rc(),r=Xo(Error(x(421))),es(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=rn(i.nextSibling),$e=e,Y=!0,rt=null,t!==null&&(He[We++]=Tt,He[We++]=Pt,He[We++]=Pn,Tt=t.id,Pt=t.overflow,Pn=e),e=Jl(e,r.children),e.flags|=4096,e)}function Ou(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fa(t.return,e,n)}function Zo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ou(t,n,e);else if(t.tag===19)Ou(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zs(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zs(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zo(e,!0,n,null,s);break;case"together":Zo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ms(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),An|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ug(t,e,n){switch(e.tag){case 3:kh(e),dr();break;case 5:qf(e);break;case 1:Ae(e.type)&&Ls(e);break;case 4:Bl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(Ms,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Eh(t,e,n):(K(X,X.current&1),t=Mt(t,e,n),t!==null?t.sibling:null);K(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,xh(t,e,n)}return Mt(t,e,n)}var Ih,Ya,Ch,bh;Ih=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Ch=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Sn(gt.current);var s=null;switch(n){case"input":i=ya(t,i),r=ya(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=xa(t,i),r=xa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=As)}ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Dr(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dg(t,e,n){var r=e.pendingProps;switch(Dl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return Ae(e.type)&&Os(),ve(e),null;case 3:return r=e.stateNode,hr(),Q(Re),Q(xe),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(rl(rt),rt=null))),Ya(t,e),ve(e),null;case 5:Hl(e);var i=Sn(vi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ch(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ve(e),null}if(t=Sn(gt.current),Xi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[gi]=s,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Vr.length;i++)G(Vr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Vc(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":Hc(r,s),G("invalid",r)}ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ji(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ji(r.textContent,a,t),i=["children",""+a]):oi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":Bi(r),Bc(r,s,!0);break;case"textarea":Bi(r),Wc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=As)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ef(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[gi]=r,Ih(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ea(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vr.length;i++)G(Vr[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":Vc(t,r),i=ya(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),G("invalid",t);break;case"textarea":Hc(t,r),i=xa(t,r),G("invalid",t);break;default:i=r}ka(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ai(t,l):typeof l=="number"&&ai(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&G("scroll",t):l!=null&&_l(t,s,l,o))}switch(n){case"input":Bi(t),Bc(t,r,!1);break;case"textarea":Bi(t),Wc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)bh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Sn(vi.current),Sn(gt.current),Xi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:Ji(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return ve(e),null;case 13:if(Q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&Ue!==null&&e.mode&1&&!(e.flags&128))Wf(),dr(),e.flags|=98560,s=!1;else if(s=Xi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[ht]=e}else dr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else rt!==null&&(rl(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?le===0&&(le=3):rc())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return hr(),Ya(t,e),t===null&&pi(e.stateNode.containerInfo),ve(e),null;case 10:return zl(e.type._context),ve(e),null;case 17:return Ae(e.type)&&Os(),ve(e),null;case 19:if(Q(X),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Dr(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zs(t),o!==null){for(e.flags|=128,Dr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>mr&&(e.flags|=128,r=!0,Dr(s,!1),e.lanes=4194304)}else{if(!r)if(t=zs(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Dr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return ve(e),null}else 2*re()-s.renderingStartTime>mr&&n!==1073741824&&(e.flags|=128,r=!0,Dr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=X.current,K(X,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return nc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?De&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function fg(t,e){switch(Dl(e),e.tag){case 1:return Ae(e.type)&&Os(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hr(),Q(Re),Q(xe),Wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hl(e),null;case 13:if(Q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));dr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(X),null;case 4:return hr(),null;case 10:return zl(e.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var ts=!1,we=!1,hg=typeof WeakSet=="function"?WeakSet:Set,N=null;function Jn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function qa(t,e,n){try{n()}catch(r){te(t,e,r)}}var Lu=!1;function pg(t,e){if(Oa=Ts,t=Af(),Ll(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,m=0,p=t,f=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++m===r&&(l=o),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(La={focusedElem:t,selectionRange:n},Ts=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,R=w.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:tt(e.type,_),R);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){te(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return w=Lu,Lu=!1,w}function Xr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qa(e,n,s)}i=i.next}while(i!==r)}}function ho(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ja(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nh(t){var e=t.alternate;e!==null&&(t.alternate=null,Nh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[gi],delete e[Ma],delete e[q0],delete e[J0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Th(t){return t.tag===5||t.tag===3||t.tag===4}function ju(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Th(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=As));else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}var de=null,nt=!1;function Vt(t,e,n){for(n=n.child;n!==null;)Ph(t,e,n),n=n.sibling}function Ph(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(io,n)}catch{}switch(n.tag){case 5:we||Jn(n,e);case 6:var r=de,i=nt;de=null,Vt(t,e,n),de=r,nt=i,de!==null&&(nt?(t=de,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(nt?(t=de,n=n.stateNode,t.nodeType===8?Ko(t.parentNode,n):t.nodeType===1&&Ko(t,n),di(t)):Ko(de,n.stateNode));break;case 4:r=de,i=nt,de=n.stateNode.containerInfo,nt=!0,Vt(t,e,n),de=r,nt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qa(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!we&&(Jn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,e,a)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Vt(t,e,n),we=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function Du(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hg),e.forEach(function(r){var i=Eg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,nt=!1;break e;case 3:de=a.stateNode.containerInfo,nt=!0;break e;case 4:de=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(de===null)throw Error(x(160));Ph(s,o,i),de=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rh(e,t),e=e.sibling}function Rh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),dt(t),r&4){try{Xr(3,t,t.return),ho(3,t)}catch(_){te(t,t.return,_)}try{Xr(5,t,t.return)}catch(_){te(t,t.return,_)}}break;case 1:et(e,t),dt(t),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(et(e,t),dt(t),r&512&&n!==null&&Jn(n,n.return),t.flags&32){var i=t.stateNode;try{ai(i,"")}catch(_){te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xd(i,s),Ea(a,o);var u=Ea(a,s);for(o=0;o<l.length;o+=2){var m=l[o],p=l[o+1];m==="style"?rf(i,p):m==="dangerouslySetInnerHTML"?tf(i,p):m==="children"?ai(i,p):_l(i,m,p,u)}switch(a){case"input":va(i,s);break;case"textarea":Zd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Zn(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zn(i,!!s.multiple,s.defaultValue,!0):Zn(i,!!s.multiple,s.multiple?[]:"",!1))}i[gi]=s}catch(_){te(t,t.return,_)}}break;case 6:if(et(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){te(t,t.return,_)}}break;case 3:if(et(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(e.containerInfo)}catch(_){te(t,t.return,_)}break;case 4:et(e,t),dt(t);break;case 13:et(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=re())),r&4&&Du(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||m,et(e,t),we=u):et(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!m&&t.mode&1)for(N=t,m=t.child;m!==null;){for(p=N=m;N!==null;){switch(f=N,y=f.child,f.tag){case 0:case 11:case 14:case 15:Xr(4,f,f.return);break;case 1:Jn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){te(r,n,_)}}break;case 5:Jn(f,f.return);break;case 22:if(f.memoizedState!==null){Uu(p);continue}}y!==null?(y.return=f,N=y):Uu(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nf("display",o))}catch(_){te(t,t.return,_)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){te(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:et(e,t),dt(t),r&4&&Du(t);break;case 21:break;default:et(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Th(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var s=ju(t);Za(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ju(t);Xa(t,a,o);break;default:throw Error(x(161))}}catch(l){te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mg(t,e,n){N=t,Ah(t)}function Ah(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ts;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=ts;var u=we;if(ts=o,(we=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?$u(i):l!==null?(l.return=o,N=l):$u(i);for(;s!==null;)N=s,Ah(s),s=s.sibling;N=i,ts=a,we=u}Mu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Mu(t)}}function Mu(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||ho(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_u(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_u(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&di(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}we||e.flags&512&&Ja(e)}catch(f){te(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Uu(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function $u(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ho(4,e)}catch(l){te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){te(e,i,l)}}var s=e.return;try{Ja(e)}catch(l){te(e,s,l)}break;case 5:var o=e.return;try{Ja(e)}catch(l){te(e,o,l)}}}catch(l){te(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var gg=Math.ceil,Bs=Ft.ReactCurrentDispatcher,Xl=Ft.ReactCurrentOwner,Ge=Ft.ReactCurrentBatchConfig,$=0,ue=null,oe=null,fe=0,De=0,Xn=pn(0),le=0,ki=null,An=0,po=0,Zl=0,Zr=null,Te=null,ec=0,mr=1/0,It=null,Hs=!1,el=null,on=null,ns=!1,Zt=null,Ws=0,ei=0,tl=null,gs=-1,ys=0;function Ee(){return $&6?re():gs!==-1?gs:gs=re()}function an(t){return t.mode&1?$&2&&fe!==0?fe&-fe:Z0.transition!==null?(ys===0&&(ys=gf()),ys):(t=F,t!==0||(t=window.event,t=t===void 0?16:Ef(t.type)),t):1}function ot(t,e,n,r){if(50<ei)throw ei=0,tl=null,Error(x(185));Ni(t,n,r),(!($&2)||t!==ue)&&(t===ue&&(!($&2)&&(po|=n),le===4&&Gt(t,fe)),Oe(t,r),n===1&&$===0&&!(e.mode&1)&&(mr=re()+500,co&&mn()))}function Oe(t,e){var n=t.callbackNode;Zm(t,e);var r=Ns(t,t===ue?fe:0);if(r===0)n!==null&&Qc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qc(n),e===1)t.tag===0?X0(zu.bind(null,t)):Vf(zu.bind(null,t)),Q0(function(){!($&6)&&mn()}),n=null;else{switch(yf(r)){case 1:n=Cl;break;case 4:n=pf;break;case 16:n=bs;break;case 536870912:n=mf;break;default:n=bs}n=zh(n,Oh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Oh(t,e){if(gs=-1,ys=0,$&6)throw Error(x(327));var n=t.callbackNode;if(ir()&&t.callbackNode!==n)return null;var r=Ns(t,t===ue?fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ks(t,r);else{e=r;var i=$;$|=2;var s=jh();(ue!==t||fe!==e)&&(It=null,mr=re()+500,Cn(t,e));do try{wg();break}catch(a){Lh(t,a)}while(1);$l(),Bs.current=s,$=i,oe!==null?e=0:(ue=null,fe=0,e=le)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=nl(t,i))),e===1)throw n=ki,Cn(t,0),Gt(t,r),Oe(t,re()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!yg(i)&&(e=Ks(t,r),e===2&&(s=Na(t),s!==0&&(r=s,e=nl(t,s))),e===1))throw n=ki,Cn(t,0),Gt(t,r),Oe(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:xn(t,Te,It);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=ec+500-re(),10<e)){if(Ns(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ee(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Da(xn.bind(null,t,Te,It),e);break}xn(t,Te,It);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gg(r/1960))-r,10<r){t.timeoutHandle=Da(xn.bind(null,t,Te,It),r);break}xn(t,Te,It);break;case 5:xn(t,Te,It);break;default:throw Error(x(329))}}}return Oe(t,re()),t.callbackNode===n?Oh.bind(null,t):null}function nl(t,e){var n=Zr;return t.current.memoizedState.isDehydrated&&(Cn(t,e).flags|=256),t=Ks(t,e),t!==2&&(e=Te,Te=n,e!==null&&rl(e)),t}function rl(t){Te===null?Te=t:Te.push.apply(Te,t)}function yg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~Zl,e&=~po,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function zu(t){if($&6)throw Error(x(327));ir();var e=Ns(t,0);if(!(e&1))return Oe(t,re()),null;var n=Ks(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=nl(t,r))}if(n===1)throw n=ki,Cn(t,0),Gt(t,e),Oe(t,re()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,Te,It),Oe(t,re()),null}function tc(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(mr=re()+500,co&&mn())}}function On(t){Zt!==null&&Zt.tag===0&&!($&6)&&ir();var e=$;$|=1;var n=Ge.transition,r=F;try{if(Ge.transition=null,F=1,t)return t()}finally{F=r,Ge.transition=n,$=e,!($&6)&&mn()}}function nc(){De=Xn.current,Q(Xn)}function Cn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Os();break;case 3:hr(),Q(Re),Q(xe),Wl();break;case 5:Hl(r);break;case 4:hr();break;case 13:Q(X);break;case 19:Q(X);break;case 10:zl(r.type._context);break;case 22:case 23:nc()}n=n.return}if(ue=t,oe=t=ln(t.current,null),fe=De=e,le=0,ki=null,Zl=po=An=0,Te=Zr=null,En!==null){for(e=0;e<En.length;e++)if(n=En[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}En=null}return t}function Lh(t,e){do{var n=oe;try{if($l(),hs.current=Vs,Fs){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fs=!1}if(Rn=0,ce=ae=Z=null,Jr=!1,wi=0,Xl.current=null,n===null||n.return===null){le=1,ki=e,oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=bu(o);if(y!==null){y.flags&=-257,Nu(y,o,a,s,e),y.mode&1&&Cu(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){Cu(s,u,e),rc();break e}l=Error(x(426))}}else if(Y&&a.mode&1){var R=bu(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Nu(R,o,a,s,e),Ml(pr(l,a));break e}}s=l=pr(l,a),le!==4&&(le=2),Zr===null?Zr=[s]:Zr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=yh(s,l,e);xu(s,h);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(on===null||!on.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=vh(s,a,e);xu(s,v);break e}}s=s.return}while(s!==null)}Mh(n)}catch(C){e=C,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function jh(){var t=Bs.current;return Bs.current=Vs,t===null?Vs:t}function rc(){(le===0||le===3||le===2)&&(le=4),ue===null||!(An&268435455)&&!(po&268435455)||Gt(ue,fe)}function Ks(t,e){var n=$;$|=2;var r=jh();(ue!==t||fe!==e)&&(It=null,Cn(t,e));do try{vg();break}catch(i){Lh(t,i)}while(1);if($l(),$=n,Bs.current=r,oe!==null)throw Error(x(261));return ue=null,fe=0,le}function vg(){for(;oe!==null;)Dh(oe)}function wg(){for(;oe!==null&&!Hm();)Dh(oe)}function Dh(t){var e=$h(t.alternate,t,De);t.memoizedProps=t.pendingProps,e===null?Mh(t):oe=e,Xl.current=null}function Mh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fg(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,oe=null;return}}else if(n=dg(n,e,De),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);le===0&&(le=5)}function xn(t,e,n){var r=F,i=Ge.transition;try{Ge.transition=null,F=1,xg(t,e,n,r)}finally{Ge.transition=i,F=r}return null}function xg(t,e,n,r){do ir();while(Zt!==null);if($&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e0(t,s),t===ue&&(oe=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ns||(ns=!0,zh(bs,function(){return ir(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=F;F=1;var a=$;$|=4,Xl.current=null,pg(t,n),Rh(n,t),z0(La),Ts=!!Oa,La=Oa=null,t.current=n,mg(n),Wm(),$=a,F=o,Ge.transition=s}else t.current=n;if(ns&&(ns=!1,Zt=t,Ws=i),s=t.pendingLanes,s===0&&(on=null),Qm(n.stateNode),Oe(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hs)throw Hs=!1,t=el,el=null,t;return Ws&1&&t.tag!==0&&ir(),s=t.pendingLanes,s&1?t===tl?ei++:(ei=0,tl=t):ei=0,mn(),null}function ir(){if(Zt!==null){var t=yf(Ws),e=Ge.transition,n=F;try{if(Ge.transition=null,F=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,Ws=0,$&6)throw Error(x(331));var i=$;for($|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Xr(8,m,s)}var p=m.child;if(p!==null)p.return=m,N=p;else for(;N!==null;){m=N;var f=m.sibling,y=m.return;if(Nh(m),m===u){N=null;break}if(f!==null){f.return=y,N=f;break}N=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,N=h;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ho(9,a)}}catch(C){te(a,a.return,C)}if(a===o){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if($=i,mn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(io,t)}catch{}r=!0}return r}finally{F=n,Ge.transition=e}}return!1}function Fu(t,e,n){e=pr(n,e),e=yh(t,e,1),t=sn(t,e,1),e=Ee(),t!==null&&(Ni(t,1,e),Oe(t,e))}function te(t,e,n){if(t.tag===3)Fu(t,t,n);else for(;e!==null;){if(e.tag===3){Fu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){t=pr(n,t),t=vh(e,t,1),e=sn(e,t,1),t=Ee(),e!==null&&(Ni(e,1,t),Oe(e,t));break}}e=e.return}}function _g(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ee(),t.pingedLanes|=t.suspendedLanes&n,ue===t&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>re()-ec?Cn(t,0):Zl|=n),Oe(t,e)}function Uh(t,e){e===0&&(t.mode&1?(e=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):e=1);var n=Ee();t=Dt(t,e),t!==null&&(Ni(t,e,n),Oe(t,n))}function kg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uh(t,n)}function Eg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Uh(t,n)}var $h;$h=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Re.current)Pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pe=!1,ug(t,e,n);Pe=!!(t.flags&131072)}else Pe=!1,Y&&e.flags&1048576&&Bf(e,Ds,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ms(t,e),t=e.pendingProps;var i=ur(e,xe.current);rr(e,n),i=Gl(null,e,r,t,i,n);var s=Ql();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ae(r)?(s=!0,Ls(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vl(e),i.updater=fo,e.stateNode=i,i._reactInternals=e,Ba(e,r,t,n),e=Ka(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&jl(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ms(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ig(r),t=tt(r,t),i){case 0:e=Wa(null,e,r,t,n);break e;case 1:e=Ru(null,e,r,t,n);break e;case 11:e=Tu(null,e,r,t,n);break e;case 14:e=Pu(null,e,r,tt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Wa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ru(t,e,r,i,n);case 3:e:{if(kh(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Yf(t,e),$s(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=pr(Error(x(423)),e),e=Au(t,e,r,n,i);break e}else if(r!==i){i=pr(Error(x(424)),e),e=Au(t,e,r,n,i);break e}else for(Ue=rn(e.stateNode.containerInfo.firstChild),$e=e,Y=!0,rt=null,n=Gf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){e=Mt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return qf(e),t===null&&za(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ja(r,i)?o=null:s!==null&&ja(r,s)&&(e.flags|=32),_h(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&za(e),null;case 13:return Eh(t,e,n);case 4:return Bl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Tu(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(Ms,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Re.current){e=Mt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fa(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rr(e,n),i=Qe(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Pu(t,e,r,i,n);case 15:return wh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),ms(t,e),e.tag=1,Ae(r)?(t=!0,Ls(e)):t=!1,rr(e,n),gh(e,r,i),Ba(e,r,i,n),Ka(null,e,r,!0,t,n);case 19:return Sh(t,e,n);case 22:return xh(t,e,n)}throw Error(x(156,e.tag))};function zh(t,e){return hf(t,e)}function Sg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new Sg(t,e,n,r)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ig(t){if(typeof t=="function")return ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===El)return 11;if(t===Sl)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ic(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vn:return bn(n.children,i,s,e);case kl:o=8,i|=8;break;case ha:return t=Ke(12,n,e,i|2),t.elementType=ha,t.lanes=s,t;case pa:return t=Ke(13,n,e,i),t.elementType=pa,t.lanes=s,t;case ma:return t=Ke(19,n,e,i),t.elementType=ma,t.lanes=s,t;case Yd:return mo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gd:o=10;break e;case Qd:o=9;break e;case El:o=11;break e;case Sl:o=14;break e;case Ht:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function mo(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=Yd,t.lanes=n,t.stateNode={isHidden:!1},t}function ea(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function ta(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sc(t,e,n,r,i,s,o,a,l){return t=new Cg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(s),t}function bg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fh(t){if(!t)return fn;t=t._reactInternals;e:{if(Mn(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ae(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ae(n))return Ff(t,n,e)}return e}function Vh(t,e,n,r,i,s,o,a,l){return t=sc(n,r,!0,t,i,s,o,a,l),t.context=Fh(null),n=t.current,r=Ee(),i=an(n),s=Ot(r,i),s.callback=e??null,sn(n,s,i),t.current.lanes=i,Ni(t,i,r),Oe(t,r),t}function go(t,e,n,r){var i=e.current,s=Ee(),o=an(i);return n=Fh(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sn(i,e,o),t!==null&&(ot(t,i,o,s),fs(t,i,o)),o}function Gs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oc(t,e){Vu(t,e),(t=t.alternate)&&Vu(t,e)}function Ng(){return null}var Bh=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}yo.prototype.render=ac.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));go(t,e,null,null)};yo.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;On(function(){go(null,t,null,null)}),e[jt]=null}};function yo(t){this._internalRoot=t}yo.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&kf(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function Tg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Gs(o);s.call(u)}}var o=Vh(e,r,t,0,null,!1,!1,"",Bu);return t._reactRootContainer=o,t[jt]=o.current,pi(t.nodeType===8?t.parentNode:t),On(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Gs(l);a.call(u)}}var l=sc(t,0,!1,null,null,!1,!1,"",Bu);return t._reactRootContainer=l,t[jt]=l.current,pi(t.nodeType===8?t.parentNode:t),On(function(){go(e,l,n,r)}),l}function wo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gs(o);a.call(l)}}go(e,o,t,i)}else o=Tg(n,e,t,i,r);return Gs(o)}vf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fr(e.pendingLanes);n!==0&&(bl(e,n|1),Oe(e,re()),!($&6)&&(mr=re()+500,mn()))}break;case 13:On(function(){var r=Dt(t,1);if(r!==null){var i=Ee();ot(r,t,1,i)}}),oc(t,1)}};Nl=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=Ee();ot(e,t,134217728,n)}oc(t,134217728)}};wf=function(t){if(t.tag===13){var e=an(t),n=Dt(t,e);if(n!==null){var r=Ee();ot(n,t,e,r)}oc(t,e)}};xf=function(){return F};_f=function(t,e){var n=F;try{return F=t,e()}finally{F=n}};Ia=function(t,e,n){switch(e){case"input":if(va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lo(r);if(!i)throw Error(x(90));Jd(r),va(r,i)}}}break;case"textarea":Zd(t,n);break;case"select":e=n.value,e!=null&&Zn(t,!!n.multiple,e,!1)}};af=tc;lf=On;var Pg={usingClientEntryPoint:!1,Events:[Pi,Kn,lo,sf,of,tc]},Mr={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rg={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=df(t),t===null?null:t.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||Ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{io=rs.inject(Rg),mt=rs}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;Fe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(e))throw Error(x(200));return bg(t,e,null,n)};Fe.createRoot=function(t,e){if(!lc(t))throw Error(x(299));var n=!1,r="",i=Bh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sc(t,1,!1,null,null,n,!1,r,i),t[jt]=e.current,pi(t.nodeType===8?t.parentNode:t),new ac(e)};Fe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=df(e),t=t===null?null:t.stateNode,t};Fe.flushSync=function(t){return On(t)};Fe.hydrate=function(t,e,n){if(!vo(e))throw Error(x(200));return wo(null,t,e,!0,n)};Fe.hydrateRoot=function(t,e,n){if(!lc(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vh(e,null,t,1,n??null,i,!1,s,o),t[jt]=e.current,pi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yo(e)};Fe.render=function(t,e,n){if(!vo(e))throw Error(x(200));return wo(null,t,e,!1,n)};Fe.unmountComponentAtNode=function(t){if(!vo(t))throw Error(x(40));return t._reactRootContainer?(On(function(){wo(null,null,t,!1,function(){t._reactRootContainer=null,t[jt]=null})}),!0):!1};Fe.unstable_batchedUpdates=tc;Fe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vo(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return wo(t,e,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hh)}catch(t){console.error(t)}}Hh(),Bd.exports=Fe;var Ag=Bd.exports,Hu=Ag;da.createRoot=Hu.createRoot,da.hydrateRoot=Hu.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=t=>{const e=Lg(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>E.createElement("svg",{ref:l,...jg,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Wh("lucide",i),...!s&&!Dg(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,m])=>E.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(t,e)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(Mg,{ref:s,iconNode:e,className:Wh(`lucide-${Og(Wu(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Wu(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Kh=B("chevron-right",Ug);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gh=B("circle-alert",$g);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Fg=B("circle-check",zg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],Ku=B("circle-pause",Vg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gu=B("circle-play",Bg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],cc=B("crown",Hg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Qh=B("download",Wg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Gg=B("eye",Kg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Yg=B("file-code",Qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],Qs=B("headset",qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],uc=B("history",Jg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Yh=B("loader-circle",Xg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],il=B("lock",Zg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],dc=B("log-out",e1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Qu=B("mail",t1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],r1=B("panels-top-left",n1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],s1=B("pause",i1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yu=B("phone",o1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],qh=B("play",a1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],c1=B("sparkles",l1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fc=B("star",u1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],f1=B("toggle-left",d1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],p1=B("toggle-right",h1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],qu=B("trash-2",m1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xo=B("user",g1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],v1=B("volume-2",y1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jh=B("x",w1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ei=B("zap",x1),_1=()=>{};/**
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
 */const Xh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},k1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,m=s>>2,p=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[m],n[p],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):k1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new E1;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class E1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S1=function(t){const e=Xh(t);return Zh.encodeByteArray(e,!0)},ep=function(t){return S1(t).replace(/\./g,"")},tp=function(t){try{return Zh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function I1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const C1=()=>I1().__FIREBASE_DEFAULTS__,b1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},N1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tp(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return _1()||C1()||b1()||N1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T1=t=>{var e,n;return(n=(e=hc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},np=()=>{var t;return(t=hc())==null?void 0:t.config},rp=t=>{var e;return(e=hc())==null?void 0:e[`_${t}`]};/**
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
 */class P1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _o(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function R1(t){return(await fetch(t,{credentials:"include"})).ok}const ti={};function A1(){const t={prod:[],emulator:[]};for(const e of Object.keys(ti))ti[e]?t.emulator.push(e):t.prod.push(e);return t}function O1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ju=!1;function L1(t,e){if(typeof window>"u"||typeof document>"u"||!_o(window.location.host)||ti[t]===e||ti[t]||Ju)return;ti[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=A1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,y){f.setAttribute("width","24"),f.setAttribute("id",y),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Ju=!0,o()},f}function m(f,y){f.setAttribute("id",y),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=O1(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),R=document.getElementById(_)||document.createElement("a"),h=n("preprendIcon"),d=document.getElementById(h)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const g=f.element;a(g),m(R,_);const v=u();l(d,h),g.append(d,w,R,v),document.body.appendChild(g)}s?(w.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function D1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function M1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function U1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $1(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z1(){try{return typeof indexedDB=="object"}catch{return!1}}function F1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const V1="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=V1,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?B1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function B1(t,e){return t.replace(H1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const H1=/\{\$([^}]+)}/g;function W1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xu(s)&&Xu(o)){if(!gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xu(t){return t!==null&&typeof t=="object"}/**
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
 */function kr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Br(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Hr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function K1(t,e){const n=new G1(t,e);return n.subscribe.bind(n)}class G1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Q1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=na),i.error===void 0&&(i.error=na),i.complete===void 0&&(i.complete=na);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function na(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class Y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new P1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J1(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q1(t){return t===_n?void 0:t}function J1(t){return t.instantiationMode==="EAGER"}/**
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
 */class X1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const Z1={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ey=H.INFO,ty={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},ny=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ty[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ip{constructor(e){this.name=e,this._logLevel=ey,this._logHandler=ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const ry=(t,e)=>e.some(n=>t instanceof n);let Zu,ed;function iy(){return Zu||(Zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sy(){return ed||(ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,sl=new WeakMap,op=new WeakMap,ra=new WeakMap,pc=new WeakMap;function oy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sp.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function ay(t){if(sl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ly(t){ol=t(ol)}function cy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ia(this),e,...n);return op.set(r,e.sort?e.sort():[e]),cn(r)}:sy().includes(t)?function(...e){return t.apply(ia(this),e),cn(sp.get(this))}:function(...e){return cn(t.apply(ia(this),e))}}function uy(t){return typeof t=="function"?cy(t):(t instanceof IDBTransaction&&ay(t),ry(t,iy())?new Proxy(t,ol):t)}function cn(t){if(t instanceof IDBRequest)return oy(t);if(ra.has(t))return ra.get(t);const e=uy(t);return e!==t&&(ra.set(t,e),pc.set(e,t)),e}const ia=t=>pc.get(t);function dy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cn(o.result),l.oldVersion,l.newVersion,cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fy=["get","getKey","getAll","getAllKeys","count"],hy=["put","add","delete","clear"],sa=new Map;function td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return sa.set(e,s),s}ly(t=>({...t,get:(e,n,r)=>td(e,n)||t.get(e,n,r),has:(e,n)=>!!td(e,n)||t.has(e,n)}));/**
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
 */class py{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(my(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function my(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",nd="0.14.8";/**
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
 */const Ut=new ip("@firebase/app"),gy="@firebase/app-compat",yy="@firebase/analytics-compat",vy="@firebase/analytics",wy="@firebase/app-check-compat",xy="@firebase/app-check",_y="@firebase/auth",ky="@firebase/auth-compat",Ey="@firebase/database",Sy="@firebase/data-connect",Iy="@firebase/database-compat",Cy="@firebase/functions",by="@firebase/functions-compat",Ny="@firebase/installations",Ty="@firebase/installations-compat",Py="@firebase/messaging",Ry="@firebase/messaging-compat",Ay="@firebase/performance",Oy="@firebase/performance-compat",Ly="@firebase/remote-config",jy="@firebase/remote-config-compat",Dy="@firebase/storage",My="@firebase/storage-compat",Uy="@firebase/firestore",$y="@firebase/ai",zy="@firebase/firestore-compat",Fy="firebase",Vy="12.9.0";/**
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
 */const ll="[DEFAULT]",By={[al]:"fire-core",[gy]:"fire-core-compat",[vy]:"fire-analytics",[yy]:"fire-analytics-compat",[xy]:"fire-app-check",[wy]:"fire-app-check-compat",[_y]:"fire-auth",[ky]:"fire-auth-compat",[Ey]:"fire-rtdb",[Sy]:"fire-data-connect",[Iy]:"fire-rtdb-compat",[Cy]:"fire-fn",[by]:"fire-fn-compat",[Ny]:"fire-iid",[Ty]:"fire-iid-compat",[Py]:"fire-fcm",[Ry]:"fire-fcm-compat",[Ay]:"fire-perf",[Oy]:"fire-perf-compat",[Ly]:"fire-rc",[jy]:"fire-rc-compat",[Dy]:"fire-gcs",[My]:"fire-gcs-compat",[Uy]:"fire-fst",[zy]:"fire-fst-compat",[$y]:"fire-vertex","fire-js":"fire-js",[Fy]:"fire-js-all"};/**
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
 */const Ys=new Map,Hy=new Map,cl=new Map;function rd(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Si(t){const e=t.name;if(cl.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of Ys.values())rd(n,t);for(const n of Hy.values())rd(n,t);return!0}function ap(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Wy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new Ai("app","Firebase",Wy);/**
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
 */class Ky{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=Vy;function lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ll,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=np()),!n)throw un.create("no-options");const s=Ys.get(i);if(s){if(gr(n,s.options)&&gr(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new X1(i);for(const l of cl.values())o.addComponent(l);const a=new Ky(n,r,o);return Ys.set(i,a),a}function Gy(t=ll){const e=Ys.get(t);if(!e&&t===ll&&np())return lp();if(!e)throw un.create("no-app",{appName:t});return e}function sr(t,e,n){let r=By[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(o.join(" "));return}Si(new yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Qy="firebase-heartbeat-database",Yy=1,Ii="firebase-heartbeat-store";let oa=null;function cp(){return oa||(oa=dy(Qy,Yy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),oa}async function qy(t){try{const n=(await cp()).transaction(Ii),r=await n.objectStore(Ii).get(up(t));return await n.done,r}catch(e){if(e instanceof gn)Ut.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function id(t,e){try{const r=(await cp()).transaction(Ii,"readwrite");await r.objectStore(Ii).put(e,up(t)),await r.done}catch(n){if(n instanceof gn)Ut.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jy=1024,Xy=30;class Zy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Xy){const o=nv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sd(),{heartbeatsToSend:r,unsentEntries:i}=ev(this._heartbeatsCache.heartbeats),s=ep(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ut.warn(n),""}}}function sd(){return new Date().toISOString().substring(0,10)}function ev(t,e=Jy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z1()?F1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return id(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return id(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function od(t){return ep(JSON.stringify({version:2,heartbeats:t})).length}function nv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function rv(t){Si(new yr("platform-logger",e=>new py(e),"PRIVATE")),Si(new yr("heartbeat",e=>new Zy(e),"PRIVATE")),sr(al,nd,t),sr(al,nd,"esm2020"),sr("fire-js","")}rv("");var iv="firebase",sv="12.9.0";/**
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
 */sr(iv,sv,"app");function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ov=dp,fp=new Ai("auth","Firebase",dp());/**
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
 */const qs=new ip("@firebase/auth");function av(t,...e){qs.logLevel<=H.WARN&&qs.warn(`Auth (${Oi}): ${t}`,...e)}function ws(t,...e){qs.logLevel<=H.ERROR&&qs.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw gc(t,...e)}function Le(t,...e){return gc(t,...e)}function mc(t,e,n){const r={...ov(),[e]:n};return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function yt(t){return mc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qe(t,"argument-error"),mc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fp.create(t,...e)}function I(t,e,...n){if(!t)throw gc(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ws(e),new Error(e)}function $t(t,e){t||Rt(e)}/**
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
 */function cv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hp()||M1()||"connection"in navigator)?navigator.onLine:!0}function uv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,$t(n>e,"Short delay should be less than long delay!"),this.isMobile=j1()||U1()}get(){return cv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yc(t,e){$t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hv=new Li(3e4,6e4);function be(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function je(t,e,n,r,i={}){return mp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=kr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return D1()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&_o(t.emulatorConfig.host)&&(u.credentials="include"),pp.fetch()(await gp(t,t.config.apiHost,n,a),u)})}async function mp(t,e,n){t._canInitEmulator=!1;const r={...dv,...e};try{const i=new mv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wr(t,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mc(t,m,u);qe(t,m)}}catch(i){if(i instanceof gn)throw i;qe(t,"network-request-failed",{message:String(i)})}}async function yn(t,e,n,r,i={}){const s=await je(t,e,n,r,i);return"mfaPendingCredential"in s&&qe(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gp(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?yc(t.config,i):`${t.config.apiScheme}://${i}`;return fv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function pv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"network-request-failed")),hv.get())})}}function Wr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Le(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function ld(t){return t!==void 0&&t.getResponse!==void 0}function cd(t){return t!==void 0&&t.enterprise!==void 0}class yp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function gv(t){return(await je(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function vp(t,e){return je(t,"GET","/v2/recaptchaConfig",be(t,e))}/**
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
 */async function yv(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function Js(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vv(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=vc(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ni(aa(i.auth_time)),issuedAtTime:ni(aa(i.iat)),expirationTime:ni(aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function aa(t){return Number(t)*1e3}function vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ws("JWT malformed, contained fewer than 3 sections"),null;try{const i=tp(n);return i?JSON.parse(i):(ws("Failed to decode base64 JWT payload"),null)}catch(i){return ws("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ud(t){const e=vc(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&wv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xs(t){var p;const e=t.auth,n=await t.getIdToken(),r=await vr(t,Js(e,{idToken:n}));I(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?wp(i.providerUserInfo):[],o=kv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,m)}async function _v(t){const e=Je(t);await Xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ev(t,e){const n=await mp(t,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await gp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&_o(t.emulatorConfig.host)&&(l.credentials="include"),pp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sv(t,e){return je(t,"POST","/v2/accounts:revokeToken",be(t,e))}/**
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
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){I(e.length!==0,"internal-error");const n=ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ev(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new or;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Bt(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new xv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vv(this,e)}reload(){return _v(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await vr(this,yv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:y,providerData:w,stsTokenManager:_}=n;I(p&&_,e,"internal-error");const R=or.fromJSON(this.name,_);I(typeof p=="string",e,"internal-error"),Bt(r,e.name),Bt(i,e.name),I(typeof f=="boolean",e,"internal-error"),I(typeof y=="boolean",e,"internal-error"),Bt(s,e.name),Bt(o,e.name),Bt(a,e.name),Bt(l,e.name),Bt(u,e.name),Bt(m,e.name);const h=new it({uid:p,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:R,createdAt:u,lastLoginAt:m});return w&&Array.isArray(w)&&(h.providerData=w.map(d=>({...d}))),l&&(h._redirectEventId=l),h}static async _fromIdTokenResponse(e,n,r=!1){const i=new or;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];I(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new or;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const dd=new Map;function At(t){$t(t instanceof Function,"Expected a class definition");let e=dd.get(t);return e?($t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dd.set(t,e),e)}/**
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
 */function xs(t,e,n){return`firebase:${t}:${e}:${n}`}class ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Js(this.auth,{idToken:e}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ar(At(fd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(fd);const o=xs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const m=await u._get(o);if(m){let p;if(typeof m=="string"){const f=await Js(e,{idToken:m}).catch(()=>{});if(!f)break;p=await it._fromGetAccountInfoResponse(e,f,m)}else p=it._fromJSON(e,m);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ar(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ar(s,e,r))}}/**
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
 */function hd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cp(e))return"Blackberry";if(bp(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||Ep(e))&&!e.includes("edge/"))return"Chrome";if(Ip(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _p(t=Se()){return/firefox\//i.test(t)}function kp(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ep(t=Se()){return/crios\//i.test(t)}function Sp(t=Se()){return/iemobile/i.test(t)}function Ip(t=Se()){return/android/i.test(t)}function Cp(t=Se()){return/blackberry/i.test(t)}function bp(t=Se()){return/webos/i.test(t)}function wc(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Iv(t=Se()){var e;return wc(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Cv(){return $1()&&document.documentMode===10}function Np(t=Se()){return wc(t)||Ip(t)||bp(t)||Cp(t)||/windows phone/i.test(t)||Sp(t)}/**
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
 */function Tp(t,e=[]){let n;switch(t){case"Browser":n=hd(Se());break;case"Worker":n=`${hd(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
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
 */class bv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Nv(t,e={}){return je(t,"GET","/v2/passwordPolicy",be(t,e))}/**
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
 */const Tv=6;class Pv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Tv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Rv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ar.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Js(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(yt(this));const n=e?Je(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nv(this),n=new Pv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&av(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xe(t){return Je(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=K1(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Av(t){ji=t}function xc(t){return ji.loadJS(t)}function Ov(){return ji.recaptchaV2Script}function Lv(){return ji.recaptchaEnterpriseScript}function jv(){return ji.gapiScript}function Pp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Dv=500,Mv=6e4,is=1e12;class Uv{constructor(e){this.auth=e,this.counter=is,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Fv(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||is;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||is;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||is;return(r=this._widgets.get(n))==null||r.execute(),""}}class $v{constructor(){this.enterprise=new zv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Fv{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Vv(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Mv)},Dv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Vv(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Bv="recaptcha-enterprise",ri="NO_RECAPTCHA";class Rp{constructor(e){this.type=Bv,this.auth=Xe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yp(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ri)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $v().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Lv();l.length!==0&&(l+=a),xc(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ur(t,e,n,r=!1,i=!1){const s=new Rp(t);let o;if(i)o=ri;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Nn(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ur(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ur(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ur(t,e,n);return r(t,a).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Ur(t,e,n,!1,!0);return r(t,m)}return Promise.reject(l)})}else{const a=await Ur(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Hv(t){const e=Xe(t),n=await vp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new yp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Rp(e).verify()}/**
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
 */function Wv(t,e){const n=ap(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gr(s,e??{}))return i;qe(i,"already-initialized")}return n.initialize({options:e})}function Kv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gv(t,e,n){const r=Xe(t);I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ap(e),{host:o,port:a}=Qv(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){I(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),I(gr(u,r.config.emulator)&&gr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,_o(o)?(R1(`${s}//${o}${l}`),L1("Auth",!0)):i||Yv()}function Ap(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qv(t){const e=Ap(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:md(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:md(o)}}}function md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ko{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function qv(t,e){return je(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jv(t,e){return yn(t,"POST","/v1/accounts:signInWithPassword",be(t,e))}async function Xv(t,e){return je(t,"POST","/v1/accounts:sendOobCode",be(t,e))}async function Zv(t,e){return Xv(t,e)}/**
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
 */async function ew(t,e){return yn(t,"POST","/v1/accounts:signInWithEmailLink",be(t,e))}async function tw(t,e){return yn(t,"POST","/v1/accounts:signInWithEmailLink",be(t,e))}/**
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
 */class Ci extends ko{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nn(e,n,"signInWithPassword",Jv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ew(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nn(e,r,"signUpPassword",qv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return tw(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lr(t,e){return yn(t,"POST","/v1/accounts:signInWithIdp",be(t,e))}/**
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
 */const nw="http://localhost";class Ln extends ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}buildRequest(){const e={requestUri:nw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kr(n)}return e}}/**
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
 */async function gd(t,e){return je(t,"POST","/v1/accounts:sendVerificationCode",be(t,e))}async function rw(t,e){return yn(t,"POST","/v1/accounts:signInWithPhoneNumber",be(t,e))}async function iw(t,e){const n=await yn(t,"POST","/v1/accounts:signInWithPhoneNumber",be(t,e));if(n.temporaryProof)throw Wr(t,"account-exists-with-different-credential",n);return n}const sw={USER_NOT_FOUND:"user-not-found"};async function ow(t,e){const n={...e,operation:"REAUTH"};return yn(t,"POST","/v1/accounts:signInWithPhoneNumber",be(t,n),sw)}/**
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
 */class ii extends ko{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ii({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ii({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return rw(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return iw(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return ow(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ii({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function aw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lw(t){const e=Br(Hr(t)).link,n=e?Br(Hr(e)).deep_link_id:null,r=Br(Hr(t)).deep_link_id;return(r?Br(Hr(r)).link:null)||r||n||e||t}class _c{constructor(e){const n=Br(Hr(e)),r=n.apiKey??null,i=n.oobCode??null,s=aw(n.mode??null);I(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=lw(e);try{return new _c(n)}catch{return null}}}/**
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
 */class Er{constructor(){this.providerId=Er.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_c.parseLink(n);return I(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Er.PROVIDER_ID="password";Er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Di extends kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends Di{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Yt extends Di{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class qt extends Di{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
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
 */async function cw(t,e){return yn(t,"POST","/v1/accounts:signUp",be(t,e))}/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),o=yd(r);return new jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yd(r);return new jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zs extends gn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zs(e,n,r,i)}}function Op(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zs._fromErrorAndOperation(t,s,e,r):s})}async function uw(t,e,n=!1){const r=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}/**
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
 */async function dw(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await vr(t,Op(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=vc(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),s}}/**
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
 */async function Lp(t,e,n=!1){if(Me(t.app))return Promise.reject(yt(t));const r="signIn",i=await Op(t,r,e),s=await jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jp(t,e){return Lp(Xe(t),e)}/**
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
 */function fw(t,e,n){var r;I(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),I(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Dp(t){const e=Xe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hw(t,e,n){const r=Xe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&fw(r,i,n),await Nn(r,i,"getOobCode",Zv,"EMAIL_PASSWORD_PROVIDER")}async function pw(t,e,n){if(Me(t.app))return Promise.reject(yt(t));const r=Xe(t),o=await Nn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dp(t),l}),a=await jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mw(t,e,n){return Me(t.app)?Promise.reject(yt(t)):jp(Je(t),Er.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dp(t),r})}/**
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
 */async function gw(t,e){return je(t,"POST","/v1/accounts:update",e)}/**
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
 */async function yw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vr(r,gw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function vw(t,e){return Je(t).setPersistence(e)}function ww(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function xw(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function _w(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function kw(t){return Je(t).signOut()}/**
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
 */function vd(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:start",be(t,e))}const eo="__sak";/**
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
 */class Mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ew=1e3,Sw=10;class Up extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Cv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Up.type="LOCAL";const $p=Up;/**
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
 */function Iw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Iw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eo.receivers=[];/**
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
 */class Cw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sc("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function se(){return window}function bw(t){se().location.href=t}/**
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
 */function Ic(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Nw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Pw(){return Ic()?self:null}/**
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
 */const Fp="firebaseLocalStorageDb",Rw=1,to="firebaseLocalStorage",Vp="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function So(t,e){return t.transaction([to],e?"readwrite":"readonly").objectStore(to)}function Aw(){const t=indexedDB.deleteDatabase(Fp);return new Mi(t).toPromise()}function fl(){const t=indexedDB.open(Fp,Rw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(to,{keyPath:Vp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(to)?e(r):(r.close(),await Aw(),e(await fl()))})})}async function wd(t,e,n){const r=So(t,!0).put({[Vp]:e,value:n});return new Mi(r).toPromise()}async function Ow(t,e){const n=So(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=So(t,!0).delete(e);return new Mi(n).toPromise()}const Lw=800,jw=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eo._getInstance(Pw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Nw(),!this.activeServiceWorker)return;this.sender=new Cw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fl();return await wd(e,eo,"1"),await xd(e,eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ow(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=So(i,!1).getAll();return new Mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const Dw=Bp;/**
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
 */function _d(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:start",be(t,e))}/**
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
 */const la=Pp("rcb"),Mw=new Li(3e4,6e4);class Uw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=se().grecaptcha)!=null&&e.render)}load(e,n=""){return I($w(n),e,"argument-error"),this.shouldResolveImmediately(n)&&ld(se().grecaptcha)?Promise.resolve(se().grecaptcha):new Promise((r,i)=>{const s=se().setTimeout(()=>{i(Le(e,"network-request-failed"))},Mw.get());se()[la]=()=>{se().clearTimeout(s),delete se()[la];const a=se().grecaptcha;if(!a||!ld(a)){i(Le(e,"internal-error"));return}const l=a.render;a.render=(u,m)=>{const p=l(u,m);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${Ov()}?${kr({onload:la,render:"explicit",hl:n})}`;xc(o).catch(()=>{clearTimeout(s),i(Le(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=se().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $w(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class zw{async load(e){return new Uv(e)}clearedOneInstance(){}}/**
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
 */const si="recaptcha",Fw={theme:"light",type:"image"};class Vw{constructor(e,n,r={...Fw}){this.parameters=r,this.type=si,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zw:new Uw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(hp()&&!Ic(),this.auth,"internal-error"),await Bw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await gv(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Bw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Hw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ii._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Ww(t,e,n){if(Me(t.app))return Promise.reject(yt(t));const r=Xe(t),i=await Kw(r,e,Je(n));return new Hw(i,s=>jp(r,s))}async function Kw(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Hv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){I(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Nn(t,o,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===ri){I((n==null?void 0:n.type)===si,m,"argument-error");const f=await ca(m,p,n);return vd(m,f)}return vd(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{I(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;I(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Nn(t,a,"mfaSmsSignIn",async(p,f)=>{if(f.phoneSignInInfo.captchaResponse===ri){I((n==null?void 0:n.type)===si,p,"argument-error");const y=await ca(p,f,n);return _d(p,y)}return _d(p,f)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Nn(t,s,"sendVerificationCode",async(u,m)=>{if(m.captchaResponse===ri){I((n==null?void 0:n.type)===si,u,"argument-error");const p=await ca(u,m,n);return gd(u,p)}return gd(u,m)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function ca(t,e,n){I(n.type===si,t,"argument-error");const r=await n.verify();I(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Hp(t,e){return e?At(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cc extends ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gw(t){return Lp(t.auth,new Cc(t),t.bypassAuthState)}function Qw(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),dw(n,new Cc(t),t.bypassAuthState)}async function Yw(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),uw(n,new Cc(t),t.bypassAuthState)}/**
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
 */class Wp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gw;case"linkViaPopup":case"linkViaRedirect":return Yw;case"reauthViaPopup":case"reauthViaRedirect":return Qw;default:qe(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qw=new Li(2e3,1e4);async function Jw(t,e,n){if(Me(t.app))return Promise.reject(Le(t,"operation-not-supported-in-this-environment"));const r=Xe(t);lv(t,e,kc);const i=Hp(r,n);return new In(r,"signInViaPopup",e,i).executeNotNull()}class In extends Wp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qw.get())};e()}}In.currentPopupAction=null;/**
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
 */const Xw="pendingRedirect",_s=new Map;class Zw extends Wp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const r=await ex(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ex(t,e){const n=rx(e),r=nx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tx(t,e){_s.set(t._key(),e)}function nx(t){return At(t._redirectPersistence)}function rx(t){return xs(Xw,t.config.apiKey,t.name)}async function ix(t,e,n=!1){if(Me(t.app))return Promise.reject(yt(t));const r=Xe(t),i=Hp(r,e),o=await new Zw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sx=10*60*1e3;class ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ax(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Kp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(kd(e))}saveEventToCache(e){this.cachedEventUids.add(kd(e)),this.lastProcessedEventTime=Date.now()}}function kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ax(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kp(t);default:return!1}}/**
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
 */async function lx(t,e={}){return je(t,"GET","/v1/projects",e)}/**
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
 */const cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ux=/^https?/;async function dx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lx(t);for(const n of e)try{if(fx(n))return}catch{}qe(t,"unauthorized-domain")}function fx(t){const e=ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ux.test(n))return!1;if(cx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hx=new Li(3e4,6e4);function Ed(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function px(t){return new Promise((e,n)=>{var i,s,o;function r(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),n(Le(t,"network-request-failed"))},timeout:hx.get()})}if((s=(i=se().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=se().gapi)!=null&&o.load)r();else{const a=Pp("iframefcb");return se()[a]=()=>{gapi.load?r():n(Le(t,"network-request-failed"))},xc(`${jv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ks=null,e})}let ks=null;function mx(t){return ks=ks||px(t),ks}/**
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
 */const gx=new Li(5e3,15e3),yx="__/auth/iframe",vx="emulator/auth/iframe",wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _x(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yc(e,vx):`https://${t.config.authDomain}/${yx}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=xx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${kr(r).slice(1)}`}async function kx(t){const e=await mx(t),n=se().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:_x(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=se().setTimeout(()=>{s(o)},gx.get());function l(){se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Ex={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sx=500,Ix=600,Cx="_blank",bx="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nx(t,e,n,r=Sx,i=Ix){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Ex,width:r.toString(),height:i.toString(),top:s,left:o},u=Se().toLowerCase();n&&(a=Ep(u)?Cx:n),_p(u)&&(e=e||bx,l.scrollbars="yes");const m=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(Iv(u)&&a!=="_self")return Tx(e||"",a),new Sd(null);const p=window.open(e||"",a,m);I(p,t,"popup-blocked");try{p.focus()}catch{}return new Sd(p)}function Tx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Px="__/auth/handler",Rx="emulator/auth/handler",Ax=encodeURIComponent("fac");async function Id(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",W1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries(s||{}))o[m]=p}if(e instanceof Di){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const l=await t._getAppCheckToken(),u=l?`#${Ax}=${encodeURIComponent(l)}`:"";return`${Ox(t)}?${kr(a).slice(1)}${u}`}function Ox({config:t}){return t.emulator?yc(t,Rx):`https://${t.authDomain}/${Px}`}/**
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
 */const ua="webStorageSupport";class Lx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ec,this._completeRedirectFn=ix,this._overrideRedirectResult=tx}async _openPopup(e,n,r,i){var o;$t((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Id(e,n,r,ul(),i);return Nx(e,s,Sc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Id(e,n,r,ul(),i);return bw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($t(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kx(e),r=new ox(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ua,{type:ua},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ua];s!==void 0&&n(!!s),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Np()||kp()||wc()}}const jx=Lx;var Cd="@firebase/auth",bd="1.12.0";/**
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
 */class Dx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ux(t){Si(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tp(t)},u=new Rv(r,i,s,l);return Kv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Si(new yr("auth-internal",e=>{const n=Xe(e.getProvider("auth").getImmediate());return(r=>new Dx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(Cd,bd,Mx(t)),sr(Cd,bd,"esm2020")}/**
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
 */const $x=5*60,zx=rp("authIdTokenMaxAge")||$x;let Nd=null;const Fx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zx)return;const i=n==null?void 0:n.token;Nd!==i&&(Nd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vx(t=Gy()){const e=ap(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wv(t,{popupRedirectResolver:jx,persistence:[Dw,$p,Ec]}),r=rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Fx(s.toString());xw(n,o,()=>o(n.currentUser)),ww(n,a=>o(a))}}const i=T1("auth");return i&&Gv(n,`http://${i}`),n}function Bx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Av({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Le("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Bx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ux("Browser");const Hx={apiKey:"AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",authDomain:"vokal-pro-studio-app-2026.firebaseapp.com",projectId:"vokal-pro-studio-app-2026",storageBucket:"vokal-pro-studio-app-2026.firebasestorage.app",messagingSenderId:"390591097726",appId:"1:390591097726:web:fceb62a64f27876578212f"},Wx=lp(Hx),Ct=Vx(Wx);let Kx={data:""},Gx=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Kx},Qx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Yx=/\/\*[^]*?\*\/|  +/g,Td=/\n+/g,Jt=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Jt(o,s):s+"{"+Jt(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Jt(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Jt.p?Jt.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},St={},Gp=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Gp(t[n]);return e}return t},qx=(t,e,n,r,i)=>{let s=Gp(t),o=St[s]||(St[s]=(l=>{let u=0,m=11;for(;u<l.length;)m=101*m+l.charCodeAt(u++)>>>0;return"go"+m})(s));if(!St[o]){let l=s!==t?t:(u=>{let m,p,f=[{}];for(;m=Qx.exec(u.replace(Yx,""));)m[4]?f.shift():m[3]?(p=m[3].replace(Td," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][m[1]]=m[2].replace(Td," ").trim();return f[0]})(t);St[o]=Jt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&St.g?St.g:null;return n&&(St.g=St[o]),((l,u,m,p)=>{p?u.data=u.data.replace(p,l):u.data.indexOf(l)===-1&&(u.data=m?l+u.data:u.data+l)})(St[o],e,r,a),o},Jx=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Jt(a,""):a===!1?"":a}return r+i+(o??"")},"");function Io(t){let e=this||{},n=t.call?t(e.p):t;return qx(n.unshift?n.raw?Jx(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Gx(e.target),e.g,e.o,e.k)}let Qp,hl,pl;Io.bind({g:1});let zt=Io.bind({k:1});function Xx(t,e,n,r){Jt.p=e,Qp=t,hl=n,pl=r}function vn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:hl&&hl()},a),n.o=/ *go\d+/.test(l),a.className=Io.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),pl&&u[0]&&pl(a),Qp(u,a)}return e?e(i):i}}var Zx=t=>typeof t=="function",no=(t,e)=>Zx(t)?t(e):t,e_=(()=>{let t=0;return()=>(++t).toString()})(),Yp=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),t_=20,bc="default",qp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return qp(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Es=[],Jp={toasts:[],pausedAt:void 0,settings:{toastLimit:t_}},pt={},Xp=(t,e=bc)=>{pt[e]=qp(pt[e]||Jp,t),Es.forEach(([n,r])=>{n===e&&r(pt[e])})},Zp=t=>Object.keys(pt).forEach(e=>Xp(t,e)),n_=t=>Object.keys(pt).find(e=>pt[e].toasts.some(n=>n.id===t)),Co=(t=bc)=>e=>{Xp(e,t)},r_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},i_=(t={},e=bc)=>{let[n,r]=E.useState(pt[e]||Jp),i=E.useRef(pt[e]);E.useEffect(()=>(i.current!==pt[e]&&r(pt[e]),Es.push([e,r]),()=>{let o=Es.findIndex(([a])=>a===e);o>-1&&Es.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||r_[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},s_=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||e_()}),Ui=t=>(e,n)=>{let r=s_(e,t,n);return Co(r.toasterId||n_(r.id))({type:2,toast:r}),r.id},D=(t,e)=>Ui("blank")(t,e);D.error=Ui("error");D.success=Ui("success");D.loading=Ui("loading");D.custom=Ui("custom");D.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Co(e)(n):Zp(n)};D.dismissAll=t=>D.dismiss(void 0,t);D.remove=(t,e)=>{let n={type:4,toastId:t};e?Co(e)(n):Zp(n)};D.removeAll=t=>D.remove(void 0,t);D.promise=(t,e,n)=>{let r=D.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?no(e.success,i):void 0;return s?D.success(s,{id:r,...n,...n==null?void 0:n.success}):D.dismiss(r),i}).catch(i=>{let s=e.error?no(e.error,i):void 0;s?D.error(s,{id:r,...n,...n==null?void 0:n.error}):D.dismiss(r)}),t};var o_=1e3,a_=(t,e="default")=>{let{toasts:n,pausedAt:r}=i_(t,e),i=E.useRef(new Map).current,s=E.useCallback((p,f=o_)=>{if(i.has(p))return;let y=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},f);i.set(p,y)},[]);E.useEffect(()=>{if(r)return;let p=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let w=(y.duration||0)+y.pauseDuration-(p-y.createdAt);if(w<0){y.visible&&D.dismiss(y.id);return}return setTimeout(()=>D.dismiss(y.id,e),w)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=E.useCallback(Co(e),[e]),a=E.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=E.useCallback((p,f)=>{o({type:1,toast:{id:p,height:f}})},[o]),u=E.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=E.useCallback((p,f)=>{let{reverseOrder:y=!1,gutter:w=8,defaultPosition:_}=f||{},R=n.filter(g=>(g.position||_)===(p.position||_)&&g.height),h=R.findIndex(g=>g.id===p.id),d=R.filter((g,v)=>v<h&&g.visible).length;return R.filter(g=>g.visible).slice(...y?[d+1]:[0,d]).reduce((g,v)=>g+(v.height||0)+w,0)},[n]);return E.useEffect(()=>{n.forEach(p=>{if(p.dismissed)s(p.id,p.removeDelay);else{let f=i.get(p.id);f&&(clearTimeout(f),i.delete(p.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:m}}},l_=zt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,c_=zt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,u_=zt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,d_=vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${l_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${c_} 0.15s ease-out forwards;
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
    animation: ${u_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,f_=zt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,h_=vn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${f_} 1s linear infinite;
`,p_=zt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,m_=zt`
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
}`,g_=vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${p_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${m_} 0.2s ease-out forwards;
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
`,y_=vn("div")`
  position: absolute;
`,v_=vn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,w_=zt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,x_=vn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,__=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(x_,null,e):e:n==="blank"?null:E.createElement(v_,null,E.createElement(h_,{...r}),n!=="loading"&&E.createElement(y_,null,n==="error"?E.createElement(d_,{...r}):E.createElement(g_,{...r})))},k_=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,E_=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,S_="0%{opacity:0;} 100%{opacity:1;}",I_="0%{opacity:1;} 100%{opacity:0;}",C_=vn("div")`
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
`,b_=vn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,N_=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=Yp()?[S_,I_]:[k_(n),E_(n)];return{animation:e?`${zt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${zt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},T_=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?N_(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(__,{toast:t}),o=E.createElement(b_,{...t.ariaProps},no(t.message,t));return E.createElement(C_,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});Xx(E.createElement);var P_=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},R_=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Yp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},A_=Io`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ss=16,em=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=a_(n,s);return E.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:ss,left:ss,right:ss,bottom:ss,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(m=>{let p=m.position||e,f=u.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),y=R_(p,f);return E.createElement(P_,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?A_:"",style:y},m.type==="custom"?no(m.message,m):i?i(m):E.createElement(T_,{toast:m,position:p}))}))};const O_=()=>c.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),c.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),c.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),c.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});function L_({onGuestLogin:t}){const[e,n]=E.useState(!0),[r,i]=E.useState("email"),[s,o]=E.useState(""),[a,l]=E.useState(""),[u,m]=E.useState(""),[p,f]=E.useState(""),[y,w]=E.useState(""),[_,R]=E.useState(!0),[h,d]=E.useState(!1),[g,v]=E.useState(!1),C=async L=>{L.preventDefault(),d(!0);try{if(await vw(Ct,_?$p:Ec),e)await mw(Ct,a,u),D.success("Successfully logged in!");else{const ie=await pw(Ct,a,u);await yw(ie.user,{displayName:s}),D.success("Account created successfully!")}}catch(ie){D.error(ie.message.replace("Firebase:","").trim())}finally{d(!1)}},T=async()=>{if(!a){D.error("Please enter your email address first.");return}d(!0);try{await hw(Ct,a),D.success("Password reset email sent! Check your inbox.")}catch(L){D.error(L.message.replace("Firebase:","").trim())}finally{d(!1)}},P=async()=>{d(!0);try{const L=new Nt;await Jw(Ct,L),D.success("Successfully logged in with Google!")}catch(L){D.error(L.message.replace("Firebase:","").trim())}finally{d(!1)}},k=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new Vw(Ct,"recaptcha-container",{size:"invisible"}))},M=async L=>{if(L.preventDefault(),!p.startsWith("+"))return D.error("Please enter phone number with country code (e.g. +91...)");d(!0);try{k();const ie=window.recaptchaVerifier,pe=await Ww(Ct,p,ie);window.confirmationResult=pe,v(!0),D.success("OTP sent to your phone")}catch(ie){D.error(ie.message)}finally{d(!1)}},O=async L=>{L.preventDefault(),d(!0);try{await window.confirmationResult.confirm(y),D.success("Phone completely verified!")}catch{D.error("Invalid OTP Code")}finally{d(!1)}};return c.jsxs("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300",children:[c.jsx(em,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),c.jsxs("div",{className:"w-full max-w-md relative z-10",children:[c.jsxs("div",{className:"mb-10 text-center",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-2",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Studio Edition • Access Portal"})]}),c.jsxs("div",{className:"bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),c.jsxs("button",{type:"button",onClick:P,disabled:h,className:"w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50",children:[c.jsx(O_,{})," Continue with Google"]}),c.jsxs("div",{className:"flex items-center gap-4 mb-6 opacity-30",children:[c.jsx("div",{className:"flex-1 h-px bg-white"}),c.jsx("div",{className:"text-[10px] font-black uppercase text-white tracking-widest",children:"Or Use"}),c.jsx("div",{className:"flex-1 h-px bg-white"})]}),c.jsxs("div",{className:"flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8",children:[c.jsxs("button",{onClick:()=>i("email"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="email"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Qu,{className:"w-4 h-4"})," Email"]}),c.jsxs("button",{onClick:()=>i("phone"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="phone"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Yu,{className:"w-4 h-4"})," Phone"]})]}),r==="email"&&c.jsxs("form",{onSubmit:C,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("div",{className:"space-y-4",children:[!e&&c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(xo,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Full Name",value:s,onChange:L=>o(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Qu,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"email",required:!0,placeholder:"Email Address",value:a,onChange:L=>l(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(il,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"password",required:!0,placeholder:"Password",value:u,onChange:L=>m(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]})]}),e&&c.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 px-1",children:[c.jsxs("label",{className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:L=>R(L.target.checked),className:"rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500"}),"Remember me"]}),c.jsx("button",{type:"button",onClick:T,className:"hover:text-blue-400 transition-colors",children:"Forgot Password?"})]}),c.jsxs("button",{disabled:h,type:"submit",className:"w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[h?"Processing...":e?"Sign In To Studio":"Create Account",!h&&c.jsx(Kh,{className:"w-4 h-4"})]}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:e?"Don't have an account? Sign Up":"Already have an account? Sign In"})})]}),r==="phone"&&c.jsxs("form",{onSubmit:g?O:M,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[g?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(il,{className:"h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Enter 6-digit OTP",value:y,onChange:L=>w(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center"})]}),c.jsx("button",{disabled:h,type:"submit",className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50",children:h?"Verifying...":"Verify & Enter"}),c.jsx("div",{className:"text-center mt-4",children:c.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:"Wrong Number? Go Back"})})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Yu,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"tel",required:!0,placeholder:"+91 99999 99999",value:p,onChange:L=>f(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest"})]}),c.jsxs("button",{disabled:h,type:"submit",className:"w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[h?"Sending OTP...":"Send OTP Code",!h&&c.jsx(Ei,{className:"w-4 h-4"})]})]}),c.jsx("div",{id:"recaptcha-container"})]})]}),c.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600",children:[c.jsxs("button",{type:"button",onClick:t,className:"py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group",children:[c.jsx(Ei,{className:"w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform"})," Try Studio as Guest"]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2 opacity-50",children:[c.jsx(Gh,{className:"w-3 h-3"})," Secure Google Firebase Authentication"]})]})]})]})}const j_=({activeTab:t,onTabChange:e})=>{const n=[{id:"studio",label:"Studio",icon:r1},{id:"vault",label:"Vault",icon:uc},{id:"profile",label:"Profile",icon:xo}];return c.jsx("aside",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-[94%] max-w-[360px] md:w-24 bg-[#0F1118]/80 backdrop-blur-3xl border border-white/10 md:border-none md:bg-transparent rounded-[2rem] md:rounded-none flex md:flex-col items-center py-2.5 px-6 md:py-12 gap-4 md:gap-12 justify-center z-50 shadow-2xl shadow-black/80 md:shadow-none",children:c.jsxs("div",{className:"flex md:flex-col gap-8 md:gap-14 items-center w-full md:w-auto justify-around md:justify-start",children:[c.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-2xl hidden md:flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4",children:c.jsx(v1,{className:"text-white w-6 h-6"})}),c.jsx("nav",{className:"flex md:flex-col gap-10 md:gap-12 w-full md:w-auto justify-around md:justify-center",children:n.map(({id:r,label:i,icon:s})=>c.jsxs("button",{onClick:()=>e(r),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t===r?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[c.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t===r?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:c.jsx(s,{className:"w-5 h-5"})}),c.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t===r?"opacity-100":"opacity-40"}`,children:i})]},r))})]})})},D_=({user:t,isGuestMode:e,hasPlan:n,lang:r,languages:i,onLangChange:s,onSignOutAction:o})=>{var a;return c.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6",children:[c.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[c.jsxs("h2",{className:"text-2xl font-black italic text-white uppercase tracking-tighter transition-all hover:scale-105 duration-300",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]",children:"Studio Edition"})]}),c.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-4",children:[c.jsx("div",{className:"flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl",children:i.map(l=>c.jsx("button",{onClick:()=>s(l.id),className:`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${r===l.id?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-slate-300 hover:bg-white/5"}`,children:l.native},l.id))}),c.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl",children:[c.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:"User",className:"w-full h-full object-cover"}):c.jsx(xo,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})}),c.jsxs("div",{className:"flex flex-col text-left justify-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]",children:t?t.displayName||((a=t.email)==null?void 0:a.split("@")[0])||t.phoneNumber:"Guest User"}),n?c.jsxs("span",{className:"text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[c.jsx(cc,{className:"w-3 h-3"})," Studio Pro"]}):e?c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Tryout Mode"}):c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Free User"})]}),c.jsx("div",{className:"w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"}),c.jsx("button",{onClick:o,className:"p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0",title:e?"Sign In":"Sign Out",children:e?c.jsx(il,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"}):c.jsx(dc,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"})})]})]})]})},M_=({error:t,script:e,setScript:n,isProcessing:r,isGuestMode:i,user:s,hasPlan:o,setShowPlans:a,enableSubtitles:l,setEnableSubtitles:u,srtLang:m,setSrtLang:p,subtitleLanguages:f,selectedVoice:y,setShowVoiceSheet:w,voiceList:_,onGenerate:R,currentAudio:h,activeSubtitle:d,isPlayingCurrent:g,onTogglePlay:v,onDownload:C,onDownloadSrt:T})=>{var P;return c.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 flex-1",children:[c.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[t&&c.jsxs("div",{className:"p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4",children:[c.jsx(Gh,{className:"w-5 h-5 shrink-0"})," ",t]}),c.jsxs("div",{className:`flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border shadow-2xl p-1 flex flex-col transition-all duration-700 ${r?"border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]":"border-white/5 hover:border-blue-500/30"}`,children:[r&&c.jsx("div",{className:"absolute inset-0 bg-blue-500/5 rounded-[2.5rem] animate-pulse"}),c.jsx("textarea",{value:e,onChange:k=>{const M=k.target.value;i&&M.length>50?n(M.substring(0,50)):!i&&s&&!o&&M.length>500?(a(!0),n(M.substring(0,500))):n(M)},placeholder:"Type or paste your script here...",className:"w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 pb-12 sm:p-8 sm:pb-14 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"}),c.jsxs("div",{className:"absolute bottom-5 right-6 sm:bottom-6 sm:right-8 text-[11px] font-black tracking-widest uppercase text-slate-600 pointer-events-none select-none flex items-center gap-1.5",children:[c.jsx("span",{className:e.length>=(i?50:o?1/0:500)?"text-blue-500":"text-slate-400",children:e.length}),c.jsx("span",{className:"opacity-40",children:"/"}),c.jsx("span",{children:i?50:o?"∞":500})]})]}),c.jsxs("div",{className:"shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"}),c.jsxs("div",{className:"relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>u(!l),className:`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${l?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10":"bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300"}`,children:[l?c.jsx(p1,{className:"w-5 h-5"}):c.jsx(f1,{className:"w-5 h-5"})," Auto Subtitles"]}),l&&c.jsx("div",{className:"flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto",children:f.map(k=>c.jsx("button",{onClick:()=>p(k.id),className:`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${m===k.id?"bg-white text-black border-white shadow-lg shadow-white/10":"bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300"}`,children:k.label},k.id))})]}),c.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10",children:[c.jsxs("button",{onClick:()=>w(!0),className:"lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95",children:[c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx(Qs,{className:"w-4 h-4 text-blue-500"})," Voice: ",((P=_.find(k=>k.id===y))==null?void 0:P.label)||"Select"]}),c.jsx(Kh,{className:"w-4 h-4"})]}),c.jsxs("button",{onClick:R,disabled:r||!e.trim(),className:"w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale",children:[r?c.jsx(Yh,{className:"animate-spin w-5 h-5"}):c.jsx(c1,{className:"w-5 h-5"})," ",r?"Synthesizing...":"Generate Master"]})]})]})]}),c.jsxs("div",{className:"w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full",children:[c.jsxs("div",{className:"hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group",children:[c.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Qs,{className:"w-4 h-4 text-blue-500"})," Voice Models"]}),c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:_.map(k=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${y===k.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>R.onVoiceSelect(k.id),children:[c.jsx("button",{onClick:M=>{M.stopPropagation(),R.onPreview(k.id)},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${R.playingPreview===k.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":y===k.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:R.playingPreview===k.id?c.jsx(Ku,{className:"w-4 h-4"}):c.jsx(Gu,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${y===k.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:k.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:k.type})]})]},k.id))})]}),c.jsxs("div",{className:`shrink-0 lg:flex-1 flex flex-col p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${r?"bg-blue-600/5 border-blue-500/40":h?"bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30":"bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5"}`,children:[r&&c.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3",children:[r?c.jsx(Ei,{className:"w-3 h-3 text-blue-400 animate-bounce"}):c.jsx(Gg,{className:"w-3 h-3 text-blue-500/60"}),r?"Engine Processing...":"Studio Output Engine"]}),c.jsx("div",{className:"relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center",children:r?c.jsxs("div",{className:"flex flex-col items-center gap-6",children:[c.jsx("div",{className:"flex items-end gap-1.5 h-16",children:[...Array(12)].map((k,M)=>c.jsx("div",{className:"w-1.5 bg-blue-500 rounded-full animate-wave",style:{animationDelay:`${M*.1}s`,height:"20%"}},M))}),c.jsx("p",{className:"text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse",children:"Synthesizing Voice..."})]}):c.jsx(c.Fragment,{children:c.jsx("p",{className:`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${d?"text-white drop-shadow-lg":"text-slate-600 italic"}`,children:d||(h?"Audio ready for playback":"Awaiting Audio...")})})}),h&&!r&&c.jsxs("div",{className:"relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("button",{onClick:v,className:`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${g?"bg-white text-black scale-[0.98]":"bg-blue-600 text-white hover:bg-blue-500"}`,children:[g?c.jsx(Ku,{className:"w-5 h-5"}):c.jsx(Gu,{className:"w-5 h-5"}),g?"Pause Master":"Play Master Track"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:C,className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5",children:[c.jsx(Qh,{className:"w-4 h-4 text-blue-500"})," WAV"]}),h.srt&&c.jsxs("button",{onClick:T,className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors",children:[c.jsx(Yg,{className:"w-4 h-4 text-emerald-500"})," SRT"]})]})]})]})]})]})},U_=({items:t,onPlay:e,onDelete:n,onClear:r,onStudioGo:i})=>t.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60 mt-20",children:[c.jsx("div",{className:"w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl",children:c.jsx(uc,{className:"w-10 h-10 text-slate-500"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest mb-2",children:"Vault is Empty"}),c.jsx("p",{className:"text-sm font-medium text-slate-500 max-w-sm",children:"You haven't generated any studio audio yet. Go back to the studio to brew some magic."}),c.jsx("button",{onClick:i,className:"mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20",children:"Go to Studio"})]}):c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex justify-between items-center px-4",children:[c.jsx("h3",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Your Master Collection"}),c.jsxs("button",{onClick:r,className:"text-[9px] font-black uppercase text-red-500/60 hover:text-red-500 transition-colors flex items-center gap-2",children:[c.jsx(qu,{className:"w-3.5 h-3.5"})," Clear All"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500 pb-20",children:t.map(s=>c.jsxs("div",{className:"bg-[#0F1118] p-6 rounded-[2.5rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center gap-6 relative z-10",children:[c.jsx("button",{onClick:()=>e(s),className:"w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner",children:c.jsx(qh,{className:"w-5 h-5 fill-current ml-1"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm font-bold text-white italic line-clamp-1 group-hover:text-blue-200 transition-colors",children:['"',s.text,'..."']}),c.jsxs("div",{className:"text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest",children:[s.voice," • ",s.date]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 relative z-10",children:[c.jsx("a",{href:s.url,download:`${s.text.substring(0,10)}_master.wav`,className:"p-3 text-slate-600 hover:text-white transition-colors",children:c.jsx(Qh,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>n(s),className:"p-3 text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100",children:c.jsx(qu,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-3xl -mr-12 -mt-12 transition-opacity opacity-0 group-hover:opacity-100"})]},s.timestamp))})]}),$_=({user:t,isGuestMode:e,hasPlan:n,vaultCount:r,onUpgrade:i,onSignOutAction:s})=>c.jsxs("div",{className:"flex flex-col items-center max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700",children:[c.jsxs("div",{className:"relative mb-10",children:[c.jsx("div",{className:"w-32 h-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20",children:c.jsx("div",{className:"w-full h-full rounded-[2.8rem] bg-[#0F1118] flex items-center justify-center overflow-hidden border border-white/5",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):c.jsx(xo,{className:"w-12 h-12 text-blue-500/50"})})}),c.jsx("div",{className:"absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-[#08090D]",children:c.jsx(fc,{className:"w-4 h-4 fill-current"})})]}),c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h3",{className:"text-3xl font-black text-white uppercase tracking-tighter mb-2",children:(t==null?void 0:t.displayName)||(e?"Guest Creator":"Pro User")}),c.jsx("p",{className:"text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]",children:(t==null?void 0:t.email)||"Studio Guest Access"})]}),c.jsxs("div",{className:"w-full grid gap-4",children:[c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),c.jsxs("div",{className:"relative flex items-center gap-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-inner",children:c.jsx(cc,{className:"w-7 h-7 text-blue-500"})}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Current Studio Plan"}),c.jsx("div",{className:"text-xl font-black text-white uppercase tracking-widest",children:n?"Studio Pro":e?"Guest Tier":"Free Plan"})]})]}),!n&&c.jsxs("button",{onClick:i,className:"relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 group",children:["Upgrade Now ",c.jsx(Ei,{className:"w-4 h-4 fill-current group-hover:animate-pulse"})]})]}),c.jsx("div",{className:"bg-[#0F1118]/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between shadow-xl",children:c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5",children:c.jsx(uc,{className:"w-6 h-6 text-slate-500"})}),c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Total Creations"}),c.jsxs("div",{className:"text-xl font-black text-white tracking-widest",children:[r," Master Tracks"]})]})]})}),c.jsxs("button",{onClick:s,className:"mt-6 w-full py-5 bg-white/5 hover:bg-red-500/10 text-slate-500 hover:text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 flex items-center justify-center gap-3",children:[c.jsx(dc,{className:"w-4 h-4"})," ",e?"Sign In to Pro Account":"Sign Out"]})]})]}),z_=({show:t,onClose:e,onSelectPlan:n})=>{if(!t)return null;const r=[{id:"starter",name:"Starter",desc:"Perfect for testing",price:"₹99",period:"/ 3 Audio",icon:Ei,color:"emerald",benefits:["3 Audio Generations","Standard Quality"],buttonText:"Buy Now"},{id:"creator",name:"Creator",desc:"For serious creators",price:"₹499",period:"/ 100 Audio",icon:fc,color:"blue",benefits:["100 Audio Generations","Cinematic Vocals","SRT Subtitle Export"],buttonText:"Buy Creator",popular:!0},{id:"studio",name:"Studio",desc:"Unlimited Everything",price:"₹999",period:"/ Lifetime",icon:cc,color:"amber",benefits:["Unlimited Generations","Priority Processing","Commercial Rights"],buttonText:"Go Unlimited"}];return c.jsx("div",{className:"fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col",children:[c.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10",children:c.jsx(Jh,{className:"w-6 h-6"})}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"}),c.jsxs("div",{className:"p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar",children:[c.jsxs("div",{className:"text-center mb-12 relative z-10",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-4",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})," PLANS"]}),c.jsx("p",{className:"text-slate-400 max-w-xl mx-auto font-medium",children:"Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities."})]}),c.jsx("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:r.map(i=>{const s=i.icon;let o="",a="",l="",u="";return i.color==="emerald"?(o="hover:border-emerald-500/30",a="hover:bg-emerald-500",l="bg-emerald-500/10",u="text-emerald-500"):i.color==="blue"?(o="bg-gradient-to-b from-blue-900/40 to-black/80 border-blue-500/30 transform md:-translate-y-4 shadow-2xl shadow-blue-900/20",a="bg-blue-600 hover:bg-blue-500",l="bg-blue-500/20",u="text-blue-500"):(o="hover:border-amber-500/30",a="hover:bg-amber-500",l="bg-amber-500/10",u="text-amber-500"),c.jsxs("div",{className:`${i.id!=="creator"?"bg-black/50 border border-white/10":""} rounded-3xl p-8 flex flex-col transition-all group relative ${o}`,children:[i.popular&&c.jsx("div",{className:"absolute -top-4 inset-x-0 flex justify-center",children:c.jsx("span",{className:"bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30",children:"Most Popular"})}),c.jsx("div",{className:`${u} mb-6 ${l} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`,children:c.jsx(s,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:i.name}),c.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:i.desc}),c.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:[i.price," ",c.jsx("span",{className:"text-sm font-medium text-slate-500",children:i.period})]}),c.jsx("ul",{className:"space-y-4 mb-8 flex-1",children:i.benefits.map((m,p)=>c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(Fg,{className:`w-5 h-5 ${u} shrink-0`})," ",m]},p))}),c.jsx("button",{onClick:()=>n(i),className:`w-full py-4 text-white rounded-xl font-bold uppercase tracking-widest transition-all ${i.id!=="creator"?"bg-white/5 "+a:a+" shadow-xl shadow-blue-600/20"}`,children:i.buttonText})]},i.id)})})]})]})})},F_=({show:t,title:e,message:n,onConfirm:r,onCancel:i,type:s,confirmText:o})=>t?c.jsxs("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-300",children:[c.jsx("div",{className:"absolute inset-0 bg-black/90 backdrop-blur-md",onClick:i}),c.jsxs("div",{className:"relative w-full max-w-sm bg-[#0F1118] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${s==="danger"?"bg-red-500/10 text-red-500":"bg-blue-500/10 text-blue-500"}`,children:s==="danger"?c.jsx(dc,{className:"w-8 h-8"}):c.jsx(fc,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest text-center mb-3",children:e}),c.jsx("p",{className:"text-slate-400 text-sm font-medium text-center mb-8 leading-relaxed px-2",children:n}),c.jsxs("div",{className:"flex flex-col gap-3",children:[c.jsx("button",{onClick:r,className:`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl ${s==="danger"?"bg-red-500 hover:bg-red-400 text-white shadow-red-500/20":"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"}`,children:o||"Yes, I'm sure"}),c.jsx("button",{onClick:i,className:"w-full py-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5",children:"No, Cancel"})]})]})]}):null,V_=[{id:"Malayalam",native:"മലയാളം"},{id:"English",native:"English"},{id:"Hindi",native:"ഹിന്ദി"},{id:"Tamil",native:"தமிழ்"}],B_=[{id:"English",label:"English Sub"},{id:"Malayalam",label:"Malayalam Sub"},{id:"Hindi",label:"Hindi Sub"},{id:"Tamil",label:"Tamil Sub"}],Pd=[{id:"Maya",label:"Maya",type:"Female",desc:"Warm, expressive, maternal storytelling."},{id:"Francis",label:"Francis",type:"Ultra Bass",desc:"Legendary voice with deep cinematic resonance."},{id:"Charan",label:"Charan",type:"Slow Bass",desc:"Deep and slow flow."},{id:"Ahaana",label:"Ahaana",type:"Professional",desc:"Clear professional voice."}],H_={Maya:"Aoede",Francis:"Charon",Charan:"Charon",Ahaana:"Kore"},W_="VokalProStudioDB",vt="audio_vault",K_=1,bo=()=>new Promise((t,e)=>{const n=indexedDB.open(W_,K_);n.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(vt)||i.createObjectStore(vt,{keyPath:"timestamp"})},n.onsuccess=r=>t(r.target.result),n.onerror=r=>e(r.target.error)}),G_=async(t,e)=>{try{const i=(await bo()).transaction([vt],"readwrite").objectStore(vt),s={...t,audioBlob:e,url:null};return new Promise((o,a)=>{const l=i.put(s);l.onsuccess=()=>o(!0),l.onerror=u=>a(u.target.error)})}catch(n){return console.error("Failed to save to IndexedDB:",n),!1}},os=async()=>{try{const r=(await bo()).transaction([vt],"readonly").objectStore(vt).getAll();return new Promise((i,s)=>{r.onsuccess=()=>{const o=r.result;o.sort((l,u)=>u.timestamp-l.timestamp);const a=o.map(l=>l.audioBlob?{...l,url:URL.createObjectURL(l.audioBlob)}:l);i(a)},r.onerror=o=>s(o.target.error)})}catch(t){return console.error("Failed to load from IndexedDB:",t),[]}},Q_=async t=>{try{const r=(await bo()).transaction([vt],"readwrite").objectStore(vt);return new Promise((i,s)=>{const o=r.delete(t);o.onsuccess=()=>i(!0),o.onerror=a=>s(a.target.error)})}catch(e){return console.error("Failed to delete from IndexedDB:",e),!1}},Y_=async()=>{try{const n=(await bo()).transaction([vt],"readwrite").objectStore(vt);return new Promise((r,i)=>{const s=n.clear();s.onsuccess=()=>r(!0),s.onerror=o=>i(o.target.error)})}catch(t){return console.error("Failed to clear IndexedDB:",t),!1}},q_=()=>c.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
    `}}),J_=()=>{const[t,e]=E.useState("studio"),[n,r]=E.useState("Malayalam"),[i,s]=E.useState("English"),[o,a]=E.useState(!1),[l,u]=E.useState(!1),[m,p]=E.useState(null),[f,y]=E.useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"),[w,_]=E.useState(!1),[R,h]=E.useState("Maya"),[d,g]=E.useState([]),[v,C]=E.useState(null),[T,P]=E.useState([]),[k,M]=E.useState(""),[O,L]=E.useState(!1),[ie,pe]=E.useState(null),[Sr,No]=E.useState(!1),[wt,Ir]=E.useState(null),[S,A]=E.useState(!1),[j,q]=E.useState(!0),[J,Un]=E.useState(!1),[xt,_t]=E.useState(!1),[_e,me]=E.useState({show:!1,title:"",message:"",onConfirm:null,type:"danger"}),ne=E.useRef(null),lt=E.useRef(new Audio);E.useEffect(()=>_w(Ct,z=>{Ir(z),q(!1)}),[]),E.useEffect(()=>{os().then(b=>{g(b)})},[]);const tm=(b,z)=>{const W=new ArrayBuffer(44+b.length*2),V=new DataView(W),Ne=(Be,ct)=>{for(let Ze=0;Ze<ct.length;Ze++)V.setUint8(Be+Ze,ct.charCodeAt(Ze))};Ne(0,"RIFF"),V.setUint32(4,32+b.length*2,!0),Ne(8,"WAVE"),Ne(12,"fmt "),V.setUint32(16,16,!0),V.setUint16(20,1,!0),V.setUint16(22,1,!0),V.setUint32(24,z,!0),V.setUint32(28,z*2,!0),V.setUint16(32,2,!0),V.setUint16(34,16,!0),Ne(36,"data"),V.setUint32(40,b.length*2,!0);let kt=44;for(let Be=0;Be<b.length;Be++,kt+=2)V.setInt16(kt,b[Be],!0);return new Blob([W],{type:"audio/wav"})},Nc=b=>b?b.trim().split(/\n\s*\n/).map(W=>{const V=W.split(`
`);if(V.length<3)return null;const Ne=V[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);if(!Ne)return null;const kt=Be=>{const[ct,Ze,ut]=Be.split(":"),[Et,Cr]=ut.split(",");return parseInt(ct)*3600+parseInt(Ze)*60+parseInt(Et)+parseInt(Cr)/1e3};return{start:kt(Ne[1]),end:kt(Ne[2]),text:V.slice(2).join(" ")}}).filter(W=>W!==null):[];E.useEffect(()=>{ne.current=new Audio;const b=()=>{if(!ne.current||T.length===0)return;const z=ne.current.currentTime,W=T.find(V=>z>=V.start&&z<=V.end);M(W?W.text:"")};return ne.current.addEventListener("timeupdate",b),ne.current.onplay=()=>{v&&ne.current.src===v.url&&L(!0)},ne.current.onpause=()=>{L(!1),pe(null)},ne.current.onended=()=>{L(!1),M(""),pe(null)},()=>{var z;return(z=ne.current)==null?void 0:z.removeEventListener("timeupdate",b)}},[T,v]);const Tc=async()=>{No(!0);try{const b="data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";ne.current.src=b,await ne.current.play().then(()=>ne.current.pause())}catch{console.warn("Engine Unlocked")}},Pc=async(b,z)=>{let W=0;const V=3,Ne="AIzaSyCU0XtCg15RIE9gEzqlubEOicNiTGQOu44",Be=`https://generativelanguage.googleapis.com/v1beta/models/${{tts:"gemini-2.5-flash-preview-tts",analysis:"gemini-1.5-flash"}[b]}:generateContent?key=${Ne}`,ct=async()=>{var Et,Cr;const Ze={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)},ut=await fetch(Be,Ze);if(!ut.ok){const $i=await ut.text().catch(()=>"{}");let ge={};try{ge=JSON.parse($i)}catch{}if(ut.status===429||((Et=ge==null?void 0:ge.error)==null?void 0:Et.code)===429||(ge==null?void 0:ge.error)==="TOO_MANY_REQUESTS")throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");if(W<V){W++;const $n=Math.pow(2,W)*1e3;return await new Promise(br=>setTimeout(br,$n)),ct()}const To=((Cr=ge==null?void 0:ge.error)==null?void 0:Cr.message)||(ge==null?void 0:ge.error)||$i;throw console.error("API Error details:",To),new Error(`System Error: ${ut.status}`)}return await ut.json()};return ct()},nm=async()=>{var b,z,W,V,Ne,kt,Be,ct,Ze,ut;if(!w){if(!S&&wt&&!J&&f.length>500){_t(!0),D.error("Please upgrade to a Studio Pro plan to generate longer audio!",{icon:"👑"});return}if(Sr||await Tc(),!!f.trim()){_(!0),p(null);try{let Et=H_[R]||R;const $i={contents:[{parts:[{text:`${R==="Maya"||R==="Ahaana"?"Speak in a natural, warm, and expressive Malayalam female voice with a steady, conversational pace. Ensure the flow is natural and not rushed.":"Speak in a clear, professional male voice with a natural, steady conversational flow. Maintain a balanced and natural speed."}: ${f}`}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:Et}}}}};let ge=null;if(o){const Nr=`Generate .SRT subtitles in ${i} for: "${f}"`;ge=Pc("analysis",{contents:[{role:"user",parts:[{text:Nr}]}]})}const[To,$n]=await Promise.all([Pc("tts",$i),ge]),br=(Ne=(V=(W=(z=(b=To.candidates)==null?void 0:b[0])==null?void 0:z.content)==null?void 0:W.parts)==null?void 0:V[0])==null?void 0:Ne.inlineData,Ac=((ut=(Ze=(ct=(Be=(kt=$n==null?void 0:$n.candidates)==null?void 0:kt[0])==null?void 0:Be.content)==null?void 0:ct.parts)==null?void 0:Ze[0])==null?void 0:ut.text)||"";if(br){const Nr=atob(br.data),Oc=Nr.length,Lc=new Int16Array(Oc/2);for(let Tr=0;Tr<Oc;Tr+=2)Lc[Tr/2]=Nr.charCodeAt(Tr+1)<<8|Nr.charCodeAt(Tr);const rm=parseInt(br.mimeType.split("rate=")[1])||24e3,im=tm(Lc,rm),sm={srt:Ac,srtLang:o?i:"None",text:f.substring(0,40),date:new Date().toLocaleTimeString(),voice:R,timestamp:Date.now()};await G_(sm,im);const jc=await os();g(jc);const zi=jc[0];C(zi),P(o?Nc(Ac):[]),zi&&zi.url&&(ne.current.src=zi.url),D.success("Studio Master Generated Successfully!",{icon:"✨"})}}catch(Et){p(Et.message),D.error("Generation Failed: "+Et.message,{icon:"❌"})}finally{_(!1)}}}},Rc=()=>{me({show:!0,title:S?"Exit Guest Mode?":"Sign Out?",message:S?"Are you sure you want to exit Tryout mode and sign in?":"Are you sure you want to sign out? You will need to log back in to access your pro features.",type:"danger",confirmText:S?"Sign In Now":"Sign Out Now",onConfirm:()=>{S?(A(!1),me(b=>({...b,show:!1}))):kw(Ct).then(()=>{D.success("Signed out successfully"),e("studio"),me(b=>({...b,show:!1}))})},onCancel:()=>me(b=>({...b,show:!1}))})};return j?c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center",children:c.jsx(Yh,{className:"w-10 h-10 text-blue-500 animate-spin"})}):!wt&&!S?c.jsx(L_,{onGuestLogin:()=>A(!0)}):c.jsxs("div",{className:"h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans",children:[c.jsx(q_,{}),c.jsx(F_,{show:_e.show,title:_e.title,message:_e.message,type:_e.type,confirmText:_e.confirmText,onConfirm:_e.onConfirm,onCancel:()=>me({..._e,show:!1})}),c.jsx(em,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx(z_,{show:xt,onClose:()=>_t(!1),onSelectPlan:b=>{Un(!0),_t(!1),D.success(`${b.name} Access Granted! (Payment portal coming soon)`,{icon:"💳"})}}),l&&c.jsxs("div",{className:"fixed inset-0 z-[60] lg:hidden flex flex-col justify-end",children:[c.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>u(!1)}),c.jsxs("div",{className:"relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6 shrink-0",children:[c.jsxs("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Qs,{className:"w-4 h-4 sm:w-5 sm:h-5 text-blue-500"})," Choose Voice Model"]}),c.jsx("button",{onClick:()=>u(!1),className:"p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:c.jsx(Jh,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar flex-1 pr-2",children:c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:Pd.map(b=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${R===b.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>{h(b.id),u(!1)},children:[c.jsx("button",{onClick:z=>{if(z.stopPropagation(),ie===b.id)lt.current.pause(),lt.current.currentTime=0,pe(null);else{O&&ne.current.pause();const W="/vokal-pro-studio/",V=`previews/${n.toLowerCase()}/${b.id.toLowerCase()}.wav`;lt.current.src=W+V,lt.current.play().catch(Ne=>{console.warn("Preview missing:",V),D.error(`Missing audio for ${n}: ${b.id}`,{icon:"📂",description:`File should be at: ${V}`})}),pe(b.id),lt.current.onended=()=>pe(null)}},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${ie===b.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":R===b.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:ie===b.id?c.jsx(s1,{className:"w-4 h-4"}):c.jsx(qh,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${R===b.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:b.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:b.type})]})]},b.id))})})]})]}),!Sr&&c.jsxs("div",{onClick:Tc,className:"fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)"},children:[c.jsxs("div",{style:{position:"relative",width:"320px",height:"320px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"40px",zIndex:10,flexShrink:0},children:[c.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",animation:"glow-pulse 2.5s ease-in-out infinite"}}),c.jsx("div",{style:{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.2)",animation:"spin-slow 12s linear infinite"},children:c.jsx("div",{style:{position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 14px 4px #3b82f6"}})}),c.jsx("div",{style:{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",border:"1px solid rgba(99,102,241,0.25)",animation:"spin-slow-rev 8s linear infinite"},children:c.jsx("div",{style:{position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:"#818cf8",boxShadow:"0 0 10px 3px #818cf8"}})}),c.jsx("div",{style:{position:"absolute",width:"160px",height:"160px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.15)",animation:"spin-slow 6s linear infinite"}}),c.jsx("div",{style:{position:"relative",zIndex:5,width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)",animation:"float-mic 3s ease-in-out infinite"},children:c.jsx(Qs,{style:{width:"44px",height:"44px",color:"white"}})})]}),c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"5px",height:"40px",marginBottom:"28px",zIndex:10},children:[["bar1","#3b82f6"],["bar2","#6366f1"],["bar3","#3b82f6"],["bar4","#60a5fa"],["bar5","#818cf8"],["bar1","#3b82f6"],["bar2","#6366f1"]].map(([b,z],W)=>c.jsx("div",{className:`animate-${b}`,style:{width:"5px",borderRadius:"3px",background:z,opacity:.85}},W))}),c.jsx("h1",{style:{fontSize:"clamp(1rem,5vw,1.5rem)",fontWeight:900,letterSpacing:"0.35em",textTransform:"uppercase",zIndex:10,background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"text-shimmer 3s linear infinite",textAlign:"center",padding:"0 24px"},children:"Vokal Pro Studio"}),c.jsx("p",{style:{marginTop:"10px",fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(148,163,184,0.6)",zIndex:10,fontWeight:700},children:"AI Voice Engine"}),c.jsxs("div",{style:{position:"absolute",bottom:"60px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",zIndex:10},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"tap-bounce 1.5s ease-in-out infinite"},children:c.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",children:c.jsx("path",{d:"M6 1v12M6 13l-4-4M6 13l4-4",stroke:"#3b82f6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(148,163,184,0.45)",fontWeight:700,textTransform:"uppercase"},children:"Tap anywhere"})]})]}),c.jsx(j_,{activeTab:t,onTabChange:e}),c.jsxs("main",{className:"flex-1 p-6 sm:p-8 md:p-12 pb-32 md:pb-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last custom-scrollbar",children:[c.jsx(D_,{user:wt,isGuestMode:S,hasPlan:J,lang:n,languages:V_,onLangChange:r,onSignOutAction:Rc}),t==="studio"&&c.jsx(M_,{error:m,script:f,setScript:y,isProcessing:w,isGuestMode:S,user:wt,hasPlan:J,setShowPlans:_t,enableSubtitles:o,setEnableSubtitles:a,srtLang:i,setSrtLang:s,subtitleLanguages:B_,selectedVoice:R,setShowVoiceSheet:u,voiceList:Pd,onGenerate:Object.assign(nm,{onVoiceSelect:h,onPreview:b=>{if(ie===b)lt.current.pause(),lt.current.currentTime=0,pe(null);else{O&&ne.current.pause();const z="/vokal-pro-studio/",W=`previews/${n.toLowerCase()}/${b.toLowerCase()}.wav`;lt.current.src=z+W,lt.current.play().catch(V=>{console.warn("Preview missing:",W),D.error(`Missing audio for ${n}: ${b}`,{icon:"📂",description:`File should be at: ${W}`})}),pe(b),lt.current.onended=()=>pe(null)}},playingPreview:ie}),currentAudio:v,activeSubtitle:k,isPlayingCurrent:O,onTogglePlay:()=>{ne.current.src!==v.url&&(ne.current.src=v.url),O?ne.current.pause():(ne.current.play(),L(!0))},onDownload:()=>{const b=document.createElement("a");b.href=v.url,b.download="master_audio.wav",b.click()},onDownloadSrt:()=>{const b=new Blob([v.srt],{type:"text/plain"}),z=document.createElement("a");z.href=URL.createObjectURL(b),z.download="subtitles.srt",z.click()}}),t==="vault"&&c.jsx(U_,{items:d,onPlay:b=>{ne.current.src=b.url,P(b.srt?Nc(b.srt):[]),ne.current.play(),L(!0),C(b)},onDelete:b=>{me({show:!0,title:"Delete Track?",message:"Are you sure you want to delete this master track from your history?",type:"danger",confirmText:"Delete Track",onConfirm:async()=>{await Q_(b.timestamp);const z=await os();g(z),D.success("Track Deleted"),me(W=>({...W,show:!1}))},onCancel:()=>me(z=>({...z,show:!1}))})},onClear:()=>{me({show:!0,title:"Clear Vault?",message:"This will permanently remove all your generated audio from the local vault. This action cannot be undone.",type:"danger",confirmText:"Clear Vault",onConfirm:async()=>{await Y_();const b=await os();g(b),D.success("Vault Cleared"),me(z=>({...z,show:!1}))},onCancel:()=>me(b=>({...b,show:!1}))})},onStudioGo:()=>e("studio")}),t==="profile"&&c.jsx($_,{user:wt,isGuestMode:S,hasPlan:J,vaultCount:d.length,onUpgrade:()=>_t(!0),onSignOutAction:Rc})]})]})};class X_ extends Fd.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 text-center",children:c.jsxs("div",{className:"max-w-md w-full bg-[#0F1118] border border-red-500/20 rounded-[2.5rem] p-10 shadow-2xl",children:[c.jsx("div",{className:"w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6 mx-auto",children:c.jsx("svg",{className:"w-10 h-10 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),c.jsx("h2",{className:"text-2xl font-black text-white uppercase tracking-tighter mb-4",children:"Something went wrong"}),c.jsx("p",{className:"text-slate-400 text-sm mb-8",children:"We've encountered an unexpected error. Don't worry, your data is safe. Try refreshing the page."}),c.jsx("button",{onClick:()=>window.location.reload(),className:"w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-600/20",children:"Reload Application"}),!1]})}):this.props.children}}da.createRoot(document.getElementById("root")).render(c.jsx(Fd.StrictMode,{children:c.jsx(X_,{children:c.jsx(J_,{})})}));
