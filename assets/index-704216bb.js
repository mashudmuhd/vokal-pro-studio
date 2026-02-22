(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Zp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cd={exports:{}},Ys={},Nd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _i=Symbol.for("react.element"),em=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),sm=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),um=Symbol.for("react.lazy"),Tu=Symbol.iterator;function cm(t){return t===null||typeof t!="object"?null:(t=Tu&&t[Tu]||t["@@iterator"],typeof t=="function"?t:null)}var Td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,bd={};function yr(t,e,n){this.props=t,this.context=e,this.refs=bd,this.updater=n||Td}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rd(){}Rd.prototype=yr.prototype;function ol(t,e,n){this.props=t,this.context=e,this.refs=bd,this.updater=n||Td}var al=ol.prototype=new Rd;al.constructor=ol;Pd(al,yr.prototype);al.isPureReactComponent=!0;var Pu=Array.isArray,Ad=Object.prototype.hasOwnProperty,ll={current:null},Od={key:!0,ref:!0,__self:!0,__source:!0};function Ld(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ad.call(e,r)&&!Od.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_i,type:t,key:s,ref:o,props:i,_owner:ll.current}}function dm(t,e){return{$$typeof:_i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ul(t){return typeof t=="object"&&t!==null&&t.$$typeof===_i}function fm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bu=/\/+/g;function xo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fm(""+t.key):e.toString(36)}function Zi(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _i:case em:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xo(o,0):r,Pu(i)?(n="",t!=null&&(n=t.replace(bu,"$&/")+"/"),Zi(i,e,n,"",function(u){return u})):i!=null&&(ul(i)&&(i=dm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pu(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xo(s,a);o+=Zi(s,e,n,l,i)}else if(l=cm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xo(s,a++),o+=Zi(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Li(t,e,n){if(t==null)return t;var r=[],i=0;return Zi(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ke={current:null},es={transition:null},pm={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:es,ReactCurrentOwner:ll};function Dd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Li,forEach:function(t,e,n){Li(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Li(t,function(){e++}),e},toArray:function(t){return Li(t,function(e){return e})||[]},only:function(t){if(!ul(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=yr;M.Fragment=tm;M.Profiler=rm;M.PureComponent=ol;M.StrictMode=nm;M.Suspense=am;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;M.act=Dd;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ll.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ad.call(e,l)&&!Od.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_i,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:sm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:im,_context:t},t.Consumer=t};M.createElement=Ld;M.createFactory=function(t){var e=Ld.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:om,render:t}};M.isValidElement=ul;M.lazy=function(t){return{$$typeof:um,_payload:{_status:-1,_result:t},_init:hm}};M.memo=function(t,e){return{$$typeof:lm,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=es.transition;es.transition={};try{t()}finally{es.transition=e}};M.unstable_act=Dd;M.useCallback=function(t,e){return ke.current.useCallback(t,e)};M.useContext=function(t){return ke.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return ke.current.useDeferredValue(t)};M.useEffect=function(t,e){return ke.current.useEffect(t,e)};M.useId=function(){return ke.current.useId()};M.useImperativeHandle=function(t,e,n){return ke.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return ke.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return ke.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return ke.current.useMemo(t,e)};M.useReducer=function(t,e,n){return ke.current.useReducer(t,e,n)};M.useRef=function(t){return ke.current.useRef(t)};M.useState=function(t){return ke.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return ke.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return ke.current.useTransition()};M.version="18.3.1";Nd.exports=M;var E=Nd.exports;const mm=Zp(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=E,ym=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,xm=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function jd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wm.call(e,r)&&!_m.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ym,type:t,key:s,ref:o,props:i,_owner:xm.current}}Ys.Fragment=vm;Ys.jsx=jd;Ys.jsxs=jd;Cd.exports=Ys;var c=Cd.exports,na={},Md={exports:{}},Ue={},Ud={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,A){var R=k.length;k.push(A);e:for(;0<R;){var Q=R-1>>>1,ne=k[Q];if(0<i(ne,A))k[Q]=A,k[R]=ne,R=Q;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var A=k[0],R=k.pop();if(R!==A){k[0]=R;e:for(var Q=0,ne=k.length,Mn=ne>>>1;Q<Mn;){var qe=2*(Q+1)-1,pn=k[qe],mt=qe+1,Je=k[mt];if(0>i(pn,R))mt<ne&&0>i(Je,pn)?(k[Q]=Je,k[mt]=R,Q=mt):(k[Q]=pn,k[qe]=R,Q=qe);else if(mt<ne&&0>i(Je,R))k[Q]=Je,k[mt]=R,Q=mt;else break e}}return A}function i(k,A){var R=k.sortIndex-A.sortIndex;return R!==0?R:k.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],m=1,h=null,f=3,y=!1,w=!1,_=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=k)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function v(k){if(_=!1,g(k),!w)if(n(l)!==null)w=!0,jn(C);else{var A=n(u);A!==null&&kr(v,A.startTime-k)}}function C(k,A){w=!1,_&&(_=!1,p(b),b=-1),y=!0;var R=f;try{for(g(A),h=n(l);h!==null&&(!(h.expirationTime>A)||k&&!j());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var ne=Q(h.expirationTime<=A);A=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&r(l),g(A)}else r(l);h=n(l)}if(h!==null)var Mn=!0;else{var qe=n(u);qe!==null&&kr(v,qe.startTime-A),Mn=!1}return Mn}finally{h=null,f=R,y=!1}}var I=!1,P=null,b=-1,V=5,L=-1;function j(){return!(t.unstable_now()-L<V)}function se(){if(P!==null){var k=t.unstable_now();L=k;var A=!0;try{A=P(!0,k)}finally{A?$e():(I=!1,P=null)}}else I=!1}var $e;if(typeof d=="function")$e=function(){d(se)};else if(typeof MessageChannel<"u"){var Dn=new MessageChannel,hn=Dn.port2;Dn.port1.onmessage=se,$e=function(){hn.postMessage(null)}}else $e=function(){O(se,0)};function jn(k){P=k,I||(I=!0,$e())}function kr(k,A){b=O(function(){k(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,jn(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var R=f;f=A;try{return k()}finally{f=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,A){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var R=f;f=k;try{return A()}finally{f=R}},t.unstable_scheduleCallback=function(k,A,R){var Q=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,k={id:m++,callback:A,priorityLevel:k,startTime:R,expirationTime:ne,sortIndex:-1},R>Q?(k.sortIndex=R,e(u,k),n(l)===null&&k===n(u)&&(_?(p(b),b=-1):_=!0,kr(v,R-Q))):(k.sortIndex=ne,e(l,k),w||y||(w=!0,jn(C))),k},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(k){var A=f;return function(){var R=f;f=A;try{return k.apply(this,arguments)}finally{f=R}}}})(zd);Ud.exports=zd;var km=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=E,Me=km;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,ti={};function On(t,e){ar(t,e),ar(t+"Capture",e)}function ar(t,e){for(ti[t]=e,t=0;t<e.length;t++)$d.add(e[t])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ru={},Au={};function Im(t){return ra.call(Au,t)?!0:ra.call(Ru,t)?!1:Sm.test(t)?Au[t]=!0:(Ru[t]=!0,!1)}function Cm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nm(t,e,n,r){if(e===null||typeof e>"u"||Cm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ee(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){fe[t]=new Ee(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];fe[e]=new Ee(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){fe[t]=new Ee(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){fe[t]=new Ee(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){fe[t]=new Ee(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){fe[t]=new Ee(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){fe[t]=new Ee(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){fe[t]=new Ee(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){fe[t]=new Ee(t,5,!1,t.toLowerCase(),null,!1,!1)});var cl=/[\-:]([a-z])/g;function dl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cl,dl);fe[e]=new Ee(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cl,dl);fe[e]=new Ee(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cl,dl);fe[e]=new Ee(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){fe[t]=new Ee(t,1,!1,t.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){fe[t]=new Ee(t,1,!1,t.toLowerCase(),null,!0,!0)});function fl(t,e,n,r){var i=fe.hasOwnProperty(e)?fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nm(e,n,i,r)&&(n=null),r||i===null?Im(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),zn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),ml=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Bd=Symbol.for("react.offscreen"),Ou=Symbol.iterator;function Ir(t){return t===null||typeof t!="object"?null:(t=Ou&&t[Ou]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,_o;function Lr(t){if(_o===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_o=e&&e[1]||""}return`
`+_o+t}var ko=!1;function Eo(t,e){if(!t||ko)return"";ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ko=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lr(t):""}function Tm(t){switch(t.tag){case 5:return Lr(t.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return t=Eo(t.type,!1),t;case 11:return t=Eo(t.type.render,!1),t;case 1:return t=Eo(t.type,!0),t;default:return""}}function aa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $n:return"Fragment";case zn:return"Portal";case ia:return"Profiler";case hl:return"StrictMode";case sa:return"Suspense";case oa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vd:return(t.displayName||"Context")+".Consumer";case Fd:return(t._context.displayName||"Context")+".Provider";case pl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ml:return e=t.displayName||null,e!==null?e:aa(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return aa(t(e))}catch{}}return null}function Pm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(e);case 8:return e===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bm(t){var e=Hd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ji(t){t._valueTracker||(t._valueTracker=bm(t))}function Wd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function la(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kd(t,e){e=e.checked,e!=null&&fl(t,"checked",e,!1)}function ua(t,e){Kd(t,e);var n=sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ca(t,e.type,n):e.hasOwnProperty("defaultValue")&&ca(t,e.type,sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Du(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ca(t,e,n){(e!=="number"||gs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Dr=Array.isArray;function Jn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function da(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ju(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Dr(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sn(n)}}function Gd(t,e){var n=sn(e.value),r=sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mi,Yd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mi=Mi||document.createElement("div"),Mi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ni(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(t){Rm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fr[e]=Fr[t]})});function qd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fr.hasOwnProperty(t)&&Fr[t]?(""+e).trim():e+"px"}function Jd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Am=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(t,e){if(e){if(Am[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function pa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function gl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ga=null,Xn=null,Zn=null;function Uu(t){if(t=Si(t)){if(typeof ga!="function")throw Error(x(280));var e=t.stateNode;e&&(e=eo(e),ga(t.stateNode,t.type,e))}}function Xd(t){Xn?Zn?Zn.push(t):Zn=[t]:Xn=t}function Zd(){if(Xn){var t=Xn,e=Zn;if(Zn=Xn=null,Uu(t),e)for(t=0;t<e.length;t++)Uu(e[t])}}function ef(t,e){return t(e)}function tf(){}var So=!1;function nf(t,e,n){if(So)return t(e,n);So=!0;try{return ef(t,e,n)}finally{So=!1,(Xn!==null||Zn!==null)&&(tf(),Zd())}}function ri(t,e){var n=t.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var ya=!1;if(Tt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ya=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ya=!1}function Om(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(m){this.onError(m)}}var Vr=!1,ys=null,vs=!1,va=null,Lm={onError:function(t){Vr=!0,ys=t}};function Dm(t,e,n,r,i,s,o,a,l){Vr=!1,ys=null,Om.apply(Lm,arguments)}function jm(t,e,n,r,i,s,o,a,l){if(Dm.apply(this,arguments),Vr){if(Vr){var u=ys;Vr=!1,ys=null}else throw Error(x(198));vs||(vs=!0,va=u)}}function Ln(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zu(t){if(Ln(t)!==t)throw Error(x(188))}function Mm(t){var e=t.alternate;if(!e){if(e=Ln(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zu(i),t;if(s===r)return zu(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function sf(t){return t=Mm(t),t!==null?of(t):null}function of(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=of(t);if(e!==null)return e;t=t.sibling}return null}var af=Me.unstable_scheduleCallback,$u=Me.unstable_cancelCallback,Um=Me.unstable_shouldYield,zm=Me.unstable_requestPaint,te=Me.unstable_now,$m=Me.unstable_getCurrentPriorityLevel,yl=Me.unstable_ImmediatePriority,lf=Me.unstable_UserBlockingPriority,ws=Me.unstable_NormalPriority,Fm=Me.unstable_LowPriority,uf=Me.unstable_IdlePriority,qs=null,ft=null;function Vm(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(qs,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Wm,Bm=Math.log,Hm=Math.LN2;function Wm(t){return t>>>=0,t===0?32:31-(Bm(t)/Hm|0)|0}var Ui=64,zi=4194304;function jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jr(a):(s&=o,s!==0&&(r=jr(s)))}else o=n&~i,o!==0?r=jr(o):s!==0&&(r=jr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Km(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Km(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cf(){var t=Ui;return Ui<<=1,!(Ui&4194240)&&(Ui=64),t}function Io(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ki(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function Qm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function df(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ff,wl,hf,pf,mf,xa=!1,$i=[],Qt=null,Yt=null,qt=null,ii=new Map,si=new Map,$t=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fu(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":ii.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(e.pointerId)}}function Nr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Si(e),e!==null&&wl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qm(t,e,n,r,i){switch(e){case"focusin":return Qt=Nr(Qt,t,e,n,r,i),!0;case"dragenter":return Yt=Nr(Yt,t,e,n,r,i),!0;case"mouseover":return qt=Nr(qt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ii.set(s,Nr(ii.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,si.set(s,Nr(si.get(s)||null,t,e,n,r,i)),!0}return!1}function gf(t){var e=wn(t.target);if(e!==null){var n=Ln(e);if(n!==null){if(e=n.tag,e===13){if(e=rf(n),e!==null){t.blockedOn=e,mf(t.priority,function(){hf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ts(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_a(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return e=Si(n),e!==null&&wl(e),t.blockedOn=n,!1;e.shift()}return!0}function Vu(t,e,n){ts(t)&&n.delete(e)}function Jm(){xa=!1,Qt!==null&&ts(Qt)&&(Qt=null),Yt!==null&&ts(Yt)&&(Yt=null),qt!==null&&ts(qt)&&(qt=null),ii.forEach(Vu),si.forEach(Vu)}function Tr(t,e){t.blockedOn===e&&(t.blockedOn=null,xa||(xa=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Jm)))}function oi(t){function e(i){return Tr(i,t)}if(0<$i.length){Tr($i[0],t);for(var n=1;n<$i.length;n++){var r=$i[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Tr(Qt,t),Yt!==null&&Tr(Yt,t),qt!==null&&Tr(qt,t),ii.forEach(e),si.forEach(e),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)gf(n),n.blockedOn===null&&$t.shift()}var er=Dt.ReactCurrentBatchConfig,_s=!0;function Xm(t,e,n,r){var i=z,s=er.transition;er.transition=null;try{z=1,xl(t,e,n,r)}finally{z=i,er.transition=s}}function Zm(t,e,n,r){var i=z,s=er.transition;er.transition=null;try{z=4,xl(t,e,n,r)}finally{z=i,er.transition=s}}function xl(t,e,n,r){if(_s){var i=_a(t,e,n,r);if(i===null)Do(t,e,r,ks,n),Fu(t,r);else if(qm(i,t,e,n,r))r.stopPropagation();else if(Fu(t,r),e&4&&-1<Ym.indexOf(t)){for(;i!==null;){var s=Si(i);if(s!==null&&ff(s),s=_a(t,e,n,r),s===null&&Do(t,e,r,ks,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Do(t,e,r,null,n)}}var ks=null;function _a(t,e,n,r){if(ks=null,t=gl(r),t=wn(t),t!==null)if(e=Ln(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ks=t,null}function yf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case yl:return 1;case lf:return 4;case ws:case Fm:return 16;case uf:return 536870912;default:return 16}default:return 16}}var Kt=null,_l=null,ns=null;function vf(){if(ns)return ns;var t,e=_l,n=e.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ns=i.slice(t,1<r?1-r:void 0)}function rs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fi(){return!0}function Bu(){return!1}function ze(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fi:Bu,this.isPropagationStopped=Bu,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),e}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=ze(vr),Ei=X({},vr,{view:0,detail:0}),e0=ze(Ei),Co,No,Pr,Js=X({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pr&&(Pr&&t.type==="mousemove"?(Co=t.screenX-Pr.screenX,No=t.screenY-Pr.screenY):No=Co=0,Pr=t),Co)},movementY:function(t){return"movementY"in t?t.movementY:No}}),Hu=ze(Js),t0=X({},Js,{dataTransfer:0}),n0=ze(t0),r0=X({},Ei,{relatedTarget:0}),To=ze(r0),i0=X({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=ze(i0),o0=X({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=ze(o0),l0=X({},vr,{data:0}),Wu=ze(l0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=d0[t])?!!e[t]:!1}function El(){return f0}var h0=X({},Ei,{key:function(t){if(t.key){var e=u0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(t){return t.type==="keypress"?rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=ze(h0),m0=X({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=ze(m0),g0=X({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),y0=ze(g0),v0=X({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=ze(v0),x0=X({},Js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=ze(x0),k0=[9,13,27,32],Sl=Tt&&"CompositionEvent"in window,Br=null;Tt&&"documentMode"in document&&(Br=document.documentMode);var E0=Tt&&"TextEvent"in window&&!Br,wf=Tt&&(!Sl||Br&&8<Br&&11>=Br),Gu=String.fromCharCode(32),Qu=!1;function xf(t,e){switch(t){case"keyup":return k0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fn=!1;function S0(t,e){switch(t){case"compositionend":return _f(e);case"keypress":return e.which!==32?null:(Qu=!0,Gu);case"textInput":return t=e.data,t===Gu&&Qu?null:t;default:return null}}function I0(t,e){if(Fn)return t==="compositionend"||!Sl&&xf(t,e)?(t=vf(),ns=_l=Kt=null,Fn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wf&&e.locale!=="ko"?null:e.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C0[t.type]:e==="textarea"}function kf(t,e,n,r){Xd(r),e=Es(e,"onChange"),0<e.length&&(n=new kl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hr=null,ai=null;function N0(t){Of(t,0)}function Xs(t){var e=Hn(t);if(Wd(e))return t}function T0(t,e){if(t==="change")return e}var Ef=!1;if(Tt){var Po;if(Tt){var bo="oninput"in document;if(!bo){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),bo=typeof qu.oninput=="function"}Po=bo}else Po=!1;Ef=Po&&(!document.documentMode||9<document.documentMode)}function Ju(){Hr&&(Hr.detachEvent("onpropertychange",Sf),ai=Hr=null)}function Sf(t){if(t.propertyName==="value"&&Xs(ai)){var e=[];kf(e,ai,t,gl(t)),nf(N0,e)}}function P0(t,e,n){t==="focusin"?(Ju(),Hr=e,ai=n,Hr.attachEvent("onpropertychange",Sf)):t==="focusout"&&Ju()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xs(ai)}function R0(t,e){if(t==="click")return Xs(e)}function A0(t,e){if(t==="input"||t==="change")return Xs(e)}function O0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:O0;function li(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ra.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Xu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zu(t,e){var n=Xu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function If(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?If(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cf(){for(var t=window,e=gs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gs(t.document)}return e}function Il(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function L0(t){var e=Cf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&If(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zu(n,s);var o=Zu(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D0=Tt&&"documentMode"in document&&11>=document.documentMode,Vn=null,ka=null,Wr=null,Ea=!1;function ec(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ea||Vn==null||Vn!==gs(r)||(r=Vn,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&li(Wr,r)||(Wr=r,r=Es(ka,"onSelect"),0<r.length&&(e=new kl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vn)))}function Vi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bn={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},Ro={},Nf={};Tt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function Zs(t){if(Ro[t])return Ro[t];if(!Bn[t])return t;var e=Bn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nf)return Ro[t]=e[n];return t}var Tf=Zs("animationend"),Pf=Zs("animationiteration"),bf=Zs("animationstart"),Rf=Zs("transitionend"),Af=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(t,e){Af.set(t,e),On(e,[t])}for(var Ao=0;Ao<tc.length;Ao++){var Oo=tc[Ao],j0=Oo.toLowerCase(),M0=Oo[0].toUpperCase()+Oo.slice(1);an(j0,"on"+M0)}an(Tf,"onAnimationEnd");an(Pf,"onAnimationIteration");an(bf,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(Rf,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function nc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jm(r,e,void 0,t),t.currentTarget=null}function Of(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;nc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;nc(i,a,u),s=l}}}if(vs)throw t=va,vs=!1,va=null,t}function K(t,e){var n=e[Ta];n===void 0&&(n=e[Ta]=new Set);var r=t+"__bubble";n.has(r)||(Lf(e,t,2,!1),n.add(r))}function Lo(t,e,n){var r=0;e&&(r|=4),Lf(n,t,r,e)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function ui(t){if(!t[Bi]){t[Bi]=!0,$d.forEach(function(n){n!=="selectionchange"&&(U0.has(n)||Lo(n,!1,t),Lo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bi]||(e[Bi]=!0,Lo("selectionchange",!1,e))}}function Lf(t,e,n,r){switch(yf(e)){case 1:var i=Xm;break;case 4:i=Zm;break;default:i=xl}n=i.bind(null,e,n,t),i=void 0,!ya||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Do(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nf(function(){var u=s,m=gl(n),h=[];e:{var f=Af.get(t);if(f!==void 0){var y=kl,w=t;switch(t){case"keypress":if(rs(n)===0)break e;case"keydown":case"keyup":y=p0;break;case"focusin":w="focus",y=To;break;case"focusout":w="blur",y=To;break;case"beforeblur":case"afterblur":y=To;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=y0;break;case Tf:case Pf:case bf:y=s0;break;case Rf:y=w0;break;case"scroll":y=e0;break;case"wheel":y=_0;break;case"copy":case"cut":case"paste":y=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ku}var _=(e&4)!==0,O=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=ri(d,p),v!=null&&_.push(ci(d,v,g)))),O)break;d=d.return}0<_.length&&(f=new y(f,w,null,n,m),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==ma&&(w=n.relatedTarget||n.fromElement)&&(wn(w)||w[Pt]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?wn(w):null,w!==null&&(O=Ln(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=Hu,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ku,v="onPointerLeave",p="onPointerEnter",d="pointer"),O=y==null?f:Hn(y),g=w==null?f:Hn(w),f=new _(v,d+"leave",y,n,m),f.target=O,f.relatedTarget=g,v=null,wn(m)===u&&(_=new _(p,d+"enter",w,n,m),_.target=g,_.relatedTarget=O,v=_),O=v,y&&w)t:{for(_=y,p=w,d=0,g=_;g;g=Un(g))d++;for(g=0,v=p;v;v=Un(v))g++;for(;0<d-g;)_=Un(_),d--;for(;0<g-d;)p=Un(p),g--;for(;d--;){if(_===p||p!==null&&_===p.alternate)break t;_=Un(_),p=Un(p)}_=null}else _=null;y!==null&&rc(h,f,y,_,!1),w!==null&&O!==null&&rc(h,O,w,_,!0)}}e:{if(f=u?Hn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=T0;else if(Yu(f))if(Ef)C=A0;else{C=b0;var I=P0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=R0);if(C&&(C=C(t,u))){kf(h,C,n,m);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&ca(f,"number",f.value)}switch(I=u?Hn(u):window,t){case"focusin":(Yu(I)||I.contentEditable==="true")&&(Vn=I,ka=u,Wr=null);break;case"focusout":Wr=ka=Vn=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,ec(h,n,m);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":ec(h,n,m)}var P;if(Sl)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Fn?xf(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(wf&&n.locale!=="ko"&&(Fn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Fn&&(P=vf()):(Kt=m,_l="value"in Kt?Kt.value:Kt.textContent,Fn=!0)),I=Es(u,b),0<I.length&&(b=new Wu(b,t,null,n,m),h.push({event:b,listeners:I}),P?b.data=P:(P=_f(n),P!==null&&(b.data=P)))),(P=E0?S0(t,n):I0(t,n))&&(u=Es(u,"onBeforeInput"),0<u.length&&(m=new Wu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=P))}Of(h,e)})}function ci(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Es(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ri(t,n),s!=null&&r.unshift(ci(t,s,i)),s=ri(t,e),s!=null&&r.push(ci(t,s,i))),t=t.return}return r}function Un(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ri(n,s),l!=null&&o.unshift(ci(n,l,a))):i||(l=ri(n,s),l!=null&&o.push(ci(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var z0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function ic(t){return(typeof t=="string"?t:""+t).replace(z0,`
`).replace($0,"")}function Hi(t,e,n){if(e=ic(e),ic(t)!==e&&n)throw Error(x(425))}function Ss(){}var Sa=null,Ia=null;function Ca(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,F0=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(t){return sc.resolve(null).then(t).catch(B0)}:Na;function B0(t){setTimeout(function(){throw t})}function jo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oi(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function oc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wr=Math.random().toString(36).slice(2),ct="__reactFiber$"+wr,di="__reactProps$"+wr,Pt="__reactContainer$"+wr,Ta="__reactEvents$"+wr,H0="__reactListeners$"+wr,W0="__reactHandles$"+wr;function wn(t){var e=t[ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oc(t);t!==null;){if(n=t[ct])return n;t=oc(t)}return e}t=n,n=t.parentNode}return null}function Si(t){return t=t[ct]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function eo(t){return t[di]||null}var Pa=[],Wn=-1;function ln(t){return{current:t}}function G(t){0>Wn||(t.current=Pa[Wn],Pa[Wn]=null,Wn--)}function B(t,e){Wn++,Pa[Wn]=t.current,t.current=e}var on={},ye=ln(on),Ne=ln(!1),Cn=on;function lr(t,e){var n=t.type.contextTypes;if(!n)return on;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function Is(){G(Ne),G(ye)}function ac(t,e,n){if(ye.current!==on)throw Error(x(168));B(ye,e),B(Ne,n)}function Df(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Pm(t)||"Unknown",i));return X({},n,r)}function Cs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Cn=ye.current,B(ye,t),B(Ne,Ne.current),!0}function lc(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Df(t,e,Cn),r.__reactInternalMemoizedMergedChildContext=t,G(Ne),G(ye),B(ye,t)):G(Ne),B(Ne,n)}var _t=null,to=!1,Mo=!1;function jf(t){_t===null?_t=[t]:_t.push(t)}function K0(t){to=!0,jf(t)}function un(){if(!Mo&&_t!==null){Mo=!0;var t=0,e=z;try{var n=_t;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_t=null,to=!1}catch(i){throw _t!==null&&(_t=_t.slice(t+1)),af(yl,un),i}finally{z=e,Mo=!1}}return null}var Kn=[],Gn=0,Ns=null,Ts=0,Fe=[],Ve=0,Nn=null,Et=1,St="";function gn(t,e){Kn[Gn++]=Ts,Kn[Gn++]=Ns,Ns=t,Ts=e}function Mf(t,e,n){Fe[Ve++]=Et,Fe[Ve++]=St,Fe[Ve++]=Nn,Nn=t;var r=Et;t=St;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-st(e)+i|n<<i|r,St=s+t}else Et=1<<s|n<<i|r,St=t}function Cl(t){t.return!==null&&(gn(t,1),Mf(t,1,0))}function Nl(t){for(;t===Ns;)Ns=Kn[--Gn],Kn[Gn]=null,Ts=Kn[--Gn],Kn[Gn]=null;for(;t===Nn;)Nn=Fe[--Ve],Fe[Ve]=null,St=Fe[--Ve],Fe[Ve]=null,Et=Fe[--Ve],Fe[Ve]=null}var je=null,De=null,Y=!1,rt=null;function Uf(t,e){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,je=t,De=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,je=t,De=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nn!==null?{id:Et,overflow:St}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,je=t,De=null,!0):!1;default:return!1}}function ba(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ra(t){if(Y){var e=De;if(e){var n=e;if(!uc(t,e)){if(ba(t))throw Error(x(418));e=Jt(n.nextSibling);var r=je;e&&uc(t,e)?Uf(r,n):(t.flags=t.flags&-4097|2,Y=!1,je=t)}}else{if(ba(t))throw Error(x(418));t.flags=t.flags&-4097|2,Y=!1,je=t}}}function cc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;je=t}function Wi(t){if(t!==je)return!1;if(!Y)return cc(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ca(t.type,t.memoizedProps)),e&&(e=De)){if(ba(t))throw zf(),Error(x(418));for(;e;)Uf(t,e),e=Jt(e.nextSibling)}if(cc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){De=Jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}De=null}}else De=je?Jt(t.stateNode.nextSibling):null;return!0}function zf(){for(var t=De;t;)t=Jt(t.nextSibling)}function ur(){De=je=null,Y=!1}function Tl(t){rt===null?rt=[t]:rt.push(t)}var G0=Dt.ReactCurrentBatchConfig;function br(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ki(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dc(t){var e=t._init;return e(t._payload)}function $f(t){function e(p,d){if(t){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=tn(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,v){return d===null||d.tag!==6?(d=Ho(g,p.mode,v),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,v){var C=g.type;return C===$n?m(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ut&&dc(C)===d.type)?(v=i(d,g.props),v.ref=br(p,d,g),v.return=p,v):(v=cs(g.type,g.key,g.props,null,p.mode,v),v.ref=br(p,d,g),v.return=p,v)}function u(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Wo(g,p.mode,v),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function m(p,d,g,v,C){return d===null||d.tag!==7?(d=Sn(g,p.mode,v,C),d.return=p,d):(d=i(d,g),d.return=p,d)}function h(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ho(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Di:return g=cs(d.type,d.key,d.props,null,p.mode,g),g.ref=br(p,null,d),g.return=p,g;case zn:return d=Wo(d,p.mode,g),d.return=p,d;case Ut:var v=d._init;return h(p,v(d._payload),g)}if(Dr(d)||Ir(d))return d=Sn(d,p.mode,g,null),d.return=p,d;Ki(p,d)}return null}function f(p,d,g,v){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return g.key===C?l(p,d,g,v):null;case zn:return g.key===C?u(p,d,g,v):null;case Ut:return C=g._init,f(p,d,C(g._payload),v)}if(Dr(g)||Ir(g))return C!==null?null:m(p,d,g,v,null);Ki(p,g)}return null}function y(p,d,g,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,a(d,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return p=p.get(v.key===null?g:v.key)||null,l(d,p,v,C);case zn:return p=p.get(v.key===null?g:v.key)||null,u(d,p,v,C);case Ut:var I=v._init;return y(p,d,g,I(v._payload),C)}if(Dr(v)||Ir(v))return p=p.get(g)||null,m(d,p,v,C,null);Ki(d,v)}return null}function w(p,d,g,v){for(var C=null,I=null,P=d,b=d=0,V=null;P!==null&&b<g.length;b++){P.index>b?(V=P,P=null):V=P.sibling;var L=f(p,P,g[b],v);if(L===null){P===null&&(P=V);break}t&&P&&L.alternate===null&&e(p,P),d=s(L,d,b),I===null?C=L:I.sibling=L,I=L,P=V}if(b===g.length)return n(p,P),Y&&gn(p,b),C;if(P===null){for(;b<g.length;b++)P=h(p,g[b],v),P!==null&&(d=s(P,d,b),I===null?C=P:I.sibling=P,I=P);return Y&&gn(p,b),C}for(P=r(p,P);b<g.length;b++)V=y(P,p,b,g[b],v),V!==null&&(t&&V.alternate!==null&&P.delete(V.key===null?b:V.key),d=s(V,d,b),I===null?C=V:I.sibling=V,I=V);return t&&P.forEach(function(j){return e(p,j)}),Y&&gn(p,b),C}function _(p,d,g,v){var C=Ir(g);if(typeof C!="function")throw Error(x(150));if(g=C.call(g),g==null)throw Error(x(151));for(var I=C=null,P=d,b=d=0,V=null,L=g.next();P!==null&&!L.done;b++,L=g.next()){P.index>b?(V=P,P=null):V=P.sibling;var j=f(p,P,L.value,v);if(j===null){P===null&&(P=V);break}t&&P&&j.alternate===null&&e(p,P),d=s(j,d,b),I===null?C=j:I.sibling=j,I=j,P=V}if(L.done)return n(p,P),Y&&gn(p,b),C;if(P===null){for(;!L.done;b++,L=g.next())L=h(p,L.value,v),L!==null&&(d=s(L,d,b),I===null?C=L:I.sibling=L,I=L);return Y&&gn(p,b),C}for(P=r(p,P);!L.done;b++,L=g.next())L=y(P,p,b,L.value,v),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?b:L.key),d=s(L,d,b),I===null?C=L:I.sibling=L,I=L);return t&&P.forEach(function(se){return e(p,se)}),Y&&gn(p,b),C}function O(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===$n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:e:{for(var C=g.key,I=d;I!==null;){if(I.key===C){if(C=g.type,C===$n){if(I.tag===7){n(p,I.sibling),d=i(I,g.props.children),d.return=p,p=d;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ut&&dc(C)===I.type){n(p,I.sibling),d=i(I,g.props),d.ref=br(p,I,g),d.return=p,p=d;break e}n(p,I);break}else e(p,I);I=I.sibling}g.type===$n?(d=Sn(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=cs(g.type,g.key,g.props,null,p.mode,v),v.ref=br(p,d,g),v.return=p,p=v)}return o(p);case zn:e:{for(I=g.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Wo(g,p.mode,v),d.return=p,p=d}return o(p);case Ut:return I=g._init,O(p,d,I(g._payload),v)}if(Dr(g))return w(p,d,g,v);if(Ir(g))return _(p,d,g,v);Ki(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=Ho(g,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return O}var cr=$f(!0),Ff=$f(!1),Ps=ln(null),bs=null,Qn=null,Pl=null;function bl(){Pl=Qn=bs=null}function Rl(t){var e=Ps.current;G(Ps),t._currentValue=e}function Aa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function tr(t,e){bs=t,Pl=Qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function We(t){var e=t._currentValue;if(Pl!==t)if(t={context:t,memoizedValue:e,next:null},Qn===null){if(bs===null)throw Error(x(308));Qn=t,bs.dependencies={lanes:0,firstContext:t}}else Qn=Qn.next=t;return e}var xn=null;function Al(t){xn===null?xn=[t]:xn.push(t)}function Vf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Al(e)):(n.next=i.next,i.next=n),e.interleaved=n,bt(t,r)}function bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zt=!1;function Ol(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bt(t,n)}return i=r.interleaved,i===null?(e.next=e,Al(r)):(e.next=i.next,i.next=e),r.interleaved=e,bt(t,n)}function is(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vl(t,n)}}function fc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rs(t,e,n,r){var i=t.updateQueue;zt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,m=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(f=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=X({},h,f);break e;case 2:zt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,l=h):m=m.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(m===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pn|=o,t.lanes=o,t.memoizedState=h}}function hc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ii={},ht=ln(Ii),fi=ln(Ii),hi=ln(Ii);function _n(t){if(t===Ii)throw Error(x(174));return t}function Ll(t,e){switch(B(hi,e),B(fi,t),B(ht,Ii),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fa(e,t)}G(ht),B(ht,e)}function dr(){G(ht),G(fi),G(hi)}function Hf(t){_n(hi.current);var e=_n(ht.current),n=fa(e,t.type);e!==n&&(B(fi,t),B(ht,n))}function Dl(t){fi.current===t&&(G(ht),G(fi))}var q=ln(0);function As(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uo=[];function jl(){for(var t=0;t<Uo.length;t++)Uo[t]._workInProgressVersionPrimary=null;Uo.length=0}var ss=Dt.ReactCurrentDispatcher,zo=Dt.ReactCurrentBatchConfig,Tn=0,J=null,oe=null,le=null,Os=!1,Kr=!1,pi=0,Q0=0;function pe(){throw Error(x(321))}function Ml(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Ul(t,e,n,r,i,s){if(Tn=s,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ss.current=t===null||t.memoizedState===null?X0:Z0,t=n(r,i),Kr){s=0;do{if(Kr=!1,pi=0,25<=s)throw Error(x(301));s+=1,le=oe=null,e.updateQueue=null,ss.current=eg,t=n(r,i)}while(Kr)}if(ss.current=Ls,e=oe!==null&&oe.next!==null,Tn=0,le=oe=J=null,Os=!1,e)throw Error(x(300));return t}function zl(){var t=pi!==0;return pi=0,t}function ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?J.memoizedState=le=t:le=le.next=t,le}function Ke(){if(oe===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=le===null?J.memoizedState:le.next;if(e!==null)le=e,oe=t;else{if(t===null)throw Error(x(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?J.memoizedState=le=t:le=le.next=t}return le}function mi(t,e){return typeof e=="function"?e(t):e}function $o(t){var e=Ke(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var m=u.lane;if((Tn&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,J.lanes|=m,Pn|=m}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,at(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,J.lanes|=s,Pn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fo(t){var e=Ke(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Ce=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wf(){}function Kf(t,e){var n=J,r=Ke(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,$l(Yf.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,gi(9,Qf.bind(null,n,r,i,e),void 0,null),ue===null)throw Error(x(349));Tn&30||Gf(n,e,i)}return i}function Gf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qf(t,e,n,r){e.value=n,e.getSnapshot=r,qf(e)&&Jf(t)}function Yf(t,e,n){return n(function(){qf(e)&&Jf(t)})}function qf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function Jf(t){var e=bt(t,1);e!==null&&ot(e,t,1,-1)}function pc(t){var e=ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:t},e.queue=t,t=t.dispatch=J0.bind(null,J,t),[e.memoizedState,t]}function gi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xf(){return Ke().memoizedState}function os(t,e,n,r){var i=ut();J.flags|=t,i.memoizedState=gi(1|e,n,void 0,r===void 0?null:r)}function no(t,e,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&Ml(r,o.deps)){i.memoizedState=gi(e,n,s,r);return}}J.flags|=t,i.memoizedState=gi(1|e,n,s,r)}function mc(t,e){return os(8390656,8,t,e)}function $l(t,e){return no(2048,8,t,e)}function Zf(t,e){return no(4,2,t,e)}function eh(t,e){return no(4,4,t,e)}function th(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nh(t,e,n){return n=n!=null?n.concat([t]):null,no(4,4,th.bind(null,e,t),n)}function Fl(){}function rh(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ml(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ih(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ml(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sh(t,e,n){return Tn&21?(at(n,e)||(n=cf(),J.lanes|=n,Pn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function Y0(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=zo.transition;zo.transition={};try{t(!1),e()}finally{z=n,zo.transition=r}}function oh(){return Ke().memoizedState}function q0(t,e,n){var r=en(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ah(t))lh(e,n);else if(n=Vf(t,e,n,r),n!==null){var i=xe();ot(n,t,r,i),uh(n,e,r)}}function J0(t,e,n){var r=en(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ah(t))lh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=e.interleaved;l===null?(i.next=i,Al(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Vf(t,e,i,r),n!==null&&(i=xe(),ot(n,t,r,i),uh(n,e,r))}}function ah(t){var e=t.alternate;return t===J||e!==null&&e===J}function lh(t,e){Kr=Os=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vl(t,n)}}var Ls={readContext:We,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},X0={readContext:We,useCallback:function(t,e){return ut().memoizedState=[t,e===void 0?null:e],t},useContext:We,useEffect:mc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,os(4194308,4,th.bind(null,e,t),n)},useLayoutEffect:function(t,e){return os(4194308,4,t,e)},useInsertionEffect:function(t,e){return os(4,2,t,e)},useMemo:function(t,e){var n=ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=q0.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=ut();return t={current:t},e.memoizedState=t},useState:pc,useDebugValue:Fl,useDeferredValue:function(t){return ut().memoizedState=t},useTransition:function(){var t=pc(!1),e=t[0];return t=Y0.bind(null,t[1]),ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=ut();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ue===null)throw Error(x(349));Tn&30||Gf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mc(Yf.bind(null,r,s,t),[t]),r.flags|=2048,gi(9,Qf.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ut(),e=ue.identifierPrefix;if(Y){var n=St,r=Et;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Q0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z0={readContext:We,useCallback:rh,useContext:We,useEffect:$l,useImperativeHandle:nh,useInsertionEffect:Zf,useLayoutEffect:eh,useMemo:ih,useReducer:$o,useRef:Xf,useState:function(){return $o(mi)},useDebugValue:Fl,useDeferredValue:function(t){var e=Ke();return sh(e,oe.memoizedState,t)},useTransition:function(){var t=$o(mi)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:Wf,useSyncExternalStore:Kf,useId:oh,unstable_isNewReconciler:!1},eg={readContext:We,useCallback:rh,useContext:We,useEffect:$l,useImperativeHandle:nh,useInsertionEffect:Zf,useLayoutEffect:eh,useMemo:ih,useReducer:Fo,useRef:Xf,useState:function(){return Fo(mi)},useDebugValue:Fl,useDeferredValue:function(t){var e=Ke();return oe===null?e.memoizedState=t:sh(e,oe.memoizedState,t)},useTransition:function(){var t=Fo(mi)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:Wf,useSyncExternalStore:Kf,useId:oh,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ro={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=en(t),s=Nt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xt(t,s,i),e!==null&&(ot(e,t,i,r),is(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=en(t),s=Nt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xt(t,s,i),e!==null&&(ot(e,t,i,r),is(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=en(t),i=Nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xt(t,i,r),e!==null&&(ot(e,t,r,n),is(e,t,r))}};function gc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!li(n,r)||!li(i,s):!0}function ch(t,e,n){var r=!1,i=on,s=e.contextType;return typeof s=="object"&&s!==null?s=We(s):(i=Te(e)?Cn:ye.current,r=e.contextTypes,s=(r=r!=null)?lr(t,i):on),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ro,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ro.enqueueReplaceState(e,e.state,null)}function La(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ol(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=We(s):(s=Te(e)?Cn:ye.current,i.context=lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ro.enqueueReplaceState(i,i.state,null),Rs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fr(t,e){try{var n="",r=e;do n+=Tm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Da(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tg=typeof WeakMap=="function"?WeakMap:Map;function dh(t,e,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){js||(js=!0,Wa=r),Da(t,e)},n}function fh(t,e,n){n=Nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Da(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Da(t,e),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mg.bind(null,t,e,n),e.then(t,t))}function wc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nt(-1,1),e.tag=2,Xt(n,e,1))),n.lanes|=1),t)}var ng=Dt.ReactCurrentOwner,Ce=!1;function we(t,e,n,r){e.child=t===null?Ff(e,null,n,r):cr(e,t.child,n,r)}function _c(t,e,n,r,i){n=n.render;var s=e.ref;return tr(e,i),r=Ul(t,e,n,r,s,i),n=zl(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):(Y&&n&&Cl(e),e.flags|=1,we(t,e,r,i),e.child)}function kc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hh(t,e,s,r,i)):(t=cs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(o,r)&&t.ref===e.ref)return Rt(t,e,i)}return e.flags|=1,t=tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function hh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(li(s,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,Rt(t,e,i)}return ja(t,e,n,r,i)}function ph(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(qn,Oe),Oe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(qn,Oe),Oe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(qn,Oe),Oe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,B(qn,Oe),Oe|=r;return we(t,e,i,n),e.child}function mh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ja(t,e,n,r,i){var s=Te(n)?Cn:ye.current;return s=lr(e,s),tr(e,i),n=Ul(t,e,n,r,s,i),r=zl(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):(Y&&r&&Cl(e),e.flags|=1,we(t,e,n,i),e.child)}function Ec(t,e,n,r,i){if(Te(n)){var s=!0;Cs(e)}else s=!1;if(tr(e,i),e.stateNode===null)as(t,e),ch(e,n,r),La(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Te(n)?Cn:ye.current,u=lr(e,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yc(e,o,r,u),zt=!1;var f=e.memoizedState;o.state=f,Rs(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ne.current||zt?(typeof m=="function"&&(Oa(e,n,m,r),l=e.memoizedState),(a=zt||gc(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=Te(n)?Cn:ye.current,l=lr(e,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&yc(e,o,r,l),zt=!1,f=e.memoizedState,o.state=f,Rs(e,r,o,i);var w=e.memoizedState;a!==h||f!==w||Ne.current||zt?(typeof y=="function"&&(Oa(e,n,y,r),w=e.memoizedState),(u=zt||gc(e,n,u,r,f,w,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ma(t,e,n,r,s,i)}function Ma(t,e,n,r,i,s){mh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lc(e,n,!1),Rt(t,e,s);r=e.stateNode,ng.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cr(e,t.child,null,s),e.child=cr(e,null,a,s)):we(t,e,a,s),e.memoizedState=r.state,i&&lc(e,n,!0),e.child}function gh(t){var e=t.stateNode;e.pendingContext?ac(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ac(t,e.context,!1),Ll(t,e.containerInfo)}function Sc(t,e,n,r,i){return ur(),Tl(i),e.flags|=256,we(t,e,n,r),e.child}var Ua={dehydrated:null,treeContext:null,retryLane:0};function za(t){return{baseLanes:t,cachePool:null,transitions:null}}function yh(t,e,n){var r=e.pendingProps,i=q.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(q,i&1),t===null)return Ra(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oo(o,r,0,null),t=Sn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=za(n),e.memoizedState=Ua,t):Vl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rg(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=tn(a,s):(s=Sn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?za(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ua,r}return s=t.child,t=s.sibling,r=tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vl(t,e){return e=oo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gi(t,e,n,r){return r!==null&&Tl(r),cr(e,t.child,null,n),t=Vl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rg(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vo(Error(x(422))),Gi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=oo({mode:"visible",children:r.children},i,0,null),s=Sn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cr(e,t.child,null,o),e.child.memoizedState=za(o),e.memoizedState=Ua,s);if(!(e.mode&1))return Gi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Vo(s,r,void 0),Gi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ce||a){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(t,i),ot(r,t,i,-1))}return Ql(),r=Vo(Error(x(421))),Gi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,De=Jt(i.nextSibling),je=e,Y=!0,rt=null,t!==null&&(Fe[Ve++]=Et,Fe[Ve++]=St,Fe[Ve++]=Nn,Et=t.id,St=t.overflow,Nn=e),e=Vl(e,r.children),e.flags|=4096,e)}function Ic(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Aa(t.return,e,n)}function Bo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(we(t,e,r.children,n),r=q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ic(t,n,e);else if(t.tag===19)Ic(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&As(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&As(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bo(e,!0,n,null,s);break;case"together":Bo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function as(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ig(t,e,n){switch(e.tag){case 3:gh(e),ur();break;case 5:Hf(e);break;case 1:Te(e.type)&&Cs(e);break;case 4:Ll(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(Ps,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(q,q.current&1),e.flags|=128,null):n&e.child.childLanes?yh(t,e,n):(B(q,q.current&1),t=Rt(t,e,n),t!==null?t.sibling:null);B(q,q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(q,q.current),r)break;return null;case 22:case 23:return e.lanes=0,ph(t,e,n)}return Rt(t,e,n)}var wh,$a,xh,_h;wh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$a=function(){};xh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_n(ht.current);var s=null;switch(n){case"input":i=la(t,i),r=la(t,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=da(t,i),r=da(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ss)}ha(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_h=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rr(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sg(t,e,n){var r=e.pendingProps;switch(Nl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(e),null;case 1:return Te(e.type)&&Is(),me(e),null;case 3:return r=e.stateNode,dr(),G(Ne),G(ye),jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(Qa(rt),rt=null))),$a(t,e),me(e),null;case 5:Dl(e);var i=_n(hi.current);if(n=e.type,t!==null&&e.stateNode!=null)xh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return me(e),null}if(t=_n(ht.current),Wi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ct]=e,r[di]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)K(Mr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Lu(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":ju(r,s),K("invalid",r)}ha(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hi(r.textContent,a,t),i=["children",""+a]):ti.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":ji(r),Du(r,s,!0);break;case"textarea":ji(r),Mu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ss)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ct]=e,t[di]=r,wh(t,e,!1,!1),e.stateNode=t;e:{switch(o=pa(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)K(Mr[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Lu(t,r),i=la(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),K("invalid",t);break;case"textarea":ju(t,r),i=da(t,r),K("invalid",t);break;default:i=r}ha(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jd(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yd(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ni(t,l):typeof l=="number"&&ni(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ti.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",t):l!=null&&fl(t,s,l,o))}switch(n){case"input":ji(t),Du(t,r,!1);break;case"textarea":ji(t),Mu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return me(e),null;case 6:if(t&&e.stateNode!=null)_h(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=_n(hi.current),_n(ht.current),Wi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ct]=e,(s=r.nodeValue!==n)&&(t=je,t!==null))switch(t.tag){case 3:Hi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=e,e.stateNode=r}return me(e),null;case 13:if(G(q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&De!==null&&e.mode&1&&!(e.flags&128))zf(),ur(),e.flags|=98560,s=!1;else if(s=Wi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[ct]=e}else ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;me(e),s=!1}else rt!==null&&(Qa(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?ae===0&&(ae=3):Ql())),e.updateQueue!==null&&(e.flags|=4),me(e),null);case 4:return dr(),$a(t,e),t===null&&ui(e.stateNode.containerInfo),me(e),null;case 10:return Rl(e.type._context),me(e),null;case 17:return Te(e.type)&&Is(),me(e),null;case 19:if(G(q),s=e.memoizedState,s===null)return me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Rr(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=As(t),o!==null){for(e.flags|=128,Rr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(q,q.current&1|2),e.child}t=t.sibling}s.tail!==null&&te()>hr&&(e.flags|=128,r=!0,Rr(s,!1),e.lanes=4194304)}else{if(!r)if(t=As(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return me(e),null}else 2*te()-s.renderingStartTime>hr&&n!==1073741824&&(e.flags|=128,r=!0,Rr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=te(),e.sibling=null,n=q.current,B(q,r?n&1|2:n&1),e):(me(e),null);case 22:case 23:return Gl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Oe&1073741824&&(me(e),e.subtreeFlags&6&&(e.flags|=8192)):me(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function og(t,e){switch(Nl(e),e.tag){case 1:return Te(e.type)&&Is(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dr(),G(Ne),G(ye),jl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dl(e),null;case 13:if(G(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(q),null;case 4:return dr(),null;case 10:return Rl(e.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var Qi=!1,ge=!1,ag=typeof WeakSet=="function"?WeakSet:Set,N=null;function Yn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function Fa(t,e,n){try{n()}catch(r){Z(t,e,r)}}var Cc=!1;function lg(t,e){if(Sa=_s,t=Cf(),Il(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,m=0,h=t,f=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++m===r&&(l=o),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ia={focusedElem:t,selectionRange:n},_s=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,O=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:tt(e.type,_),O);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){Z(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return w=Cc,Cc=!1,w}function Gr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fa(e,n,s)}i=i.next}while(i!==r)}}function io(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Va(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kh(t){var e=t.alternate;e!==null&&(t.alternate=null,kh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ct],delete e[di],delete e[Ta],delete e[H0],delete e[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eh(t){return t.tag===5||t.tag===3||t.tag===4}function Nc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ba(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ss));else if(r!==4&&(t=t.child,t!==null))for(Ba(t,e,n),t=t.sibling;t!==null;)Ba(t,e,n),t=t.sibling}function Ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ha(t,e,n),t=t.sibling;t!==null;)Ha(t,e,n),t=t.sibling}var ce=null,nt=!1;function jt(t,e,n){for(n=n.child;n!==null;)Sh(t,e,n),n=n.sibling}function Sh(t,e,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(qs,n)}catch{}switch(n.tag){case 5:ge||Yn(n,e);case 6:var r=ce,i=nt;ce=null,jt(t,e,n),ce=r,nt=i,ce!==null&&(nt?(t=ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(nt?(t=ce,n=n.stateNode,t.nodeType===8?jo(t.parentNode,n):t.nodeType===1&&jo(t,n),oi(t)):jo(ce,n.stateNode));break;case 4:r=ce,i=nt,ce=n.stateNode.containerInfo,nt=!0,jt(t,e,n),ce=r,nt=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fa(n,e,o),i=i.next}while(i!==r)}jt(t,e,n);break;case 1:if(!ge&&(Yn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,e,a)}jt(t,e,n);break;case 21:jt(t,e,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,jt(t,e,n),ge=r):jt(t,e,n);break;default:jt(t,e,n)}}function Tc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ag),e.forEach(function(r){var i=yg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,nt=!1;break e;case 3:ce=a.stateNode.containerInfo,nt=!0;break e;case 4:ce=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(ce===null)throw Error(x(160));Sh(s,o,i),ce=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ih(e,t),e=e.sibling}function Ih(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),lt(t),r&4){try{Gr(3,t,t.return),io(3,t)}catch(_){Z(t,t.return,_)}try{Gr(5,t,t.return)}catch(_){Z(t,t.return,_)}}break;case 1:et(e,t),lt(t),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(et(e,t),lt(t),r&512&&n!==null&&Yn(n,n.return),t.flags&32){var i=t.stateNode;try{ni(i,"")}catch(_){Z(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kd(i,s),pa(a,o);var u=pa(a,s);for(o=0;o<l.length;o+=2){var m=l[o],h=l[o+1];m==="style"?Jd(i,h):m==="dangerouslySetInnerHTML"?Yd(i,h):m==="children"?ni(i,h):fl(i,m,h,u)}switch(a){case"input":ua(i,s);break;case"textarea":Gd(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Jn(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Jn(i,!!s.multiple,s.defaultValue,!0):Jn(i,!!s.multiple,s.multiple?[]:"",!1))}i[di]=s}catch(_){Z(t,t.return,_)}}break;case 6:if(et(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Z(t,t.return,_)}}break;case 3:if(et(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(e.containerInfo)}catch(_){Z(t,t.return,_)}break;case 4:et(e,t),lt(t);break;case 13:et(e,t),lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wl=te())),r&4&&Tc(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ge=(u=ge)||m,et(e,t),ge=u):et(e,t),lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!m&&t.mode&1)for(N=t,m=t.child;m!==null;){for(h=N=m;N!==null;){switch(f=N,y=f.child,f.tag){case 0:case 11:case 14:case 15:Gr(4,f,f.return);break;case 1:Yn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){Z(r,n,_)}}break;case 5:Yn(f,f.return);break;case 22:if(f.memoizedState!==null){bc(h);continue}}y!==null?(y.return=f,N=y):bc(h)}m=m.sibling}e:for(m=null,h=t;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qd("display",o))}catch(_){Z(t,t.return,_)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Z(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:et(e,t),lt(t),r&4&&Tc(t);break;case 21:break;default:et(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Eh(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var s=Nc(t);Ha(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nc(t);Ba(t,a,o);break;default:throw Error(x(161))}}catch(l){Z(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ug(t,e,n){N=t,Ch(t)}function Ch(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=Qi;var u=ge;if(Qi=o,(ge=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Rc(i):l!==null?(l.return=o,N=l):Rc(i);for(;s!==null;)N=s,Ch(s),s=s.sibling;N=i,Qi=a,ge=u}Pc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Pc(t)}}function Pc(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ge||io(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&oi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ge||e.flags&512&&Va(e)}catch(f){Z(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function bc(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Rc(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{io(4,e)}catch(l){Z(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Z(e,i,l)}}var s=e.return;try{Va(e)}catch(l){Z(e,s,l)}break;case 5:var o=e.return;try{Va(e)}catch(l){Z(e,o,l)}}}catch(l){Z(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var cg=Math.ceil,Ds=Dt.ReactCurrentDispatcher,Bl=Dt.ReactCurrentOwner,He=Dt.ReactCurrentBatchConfig,U=0,ue=null,ie=null,de=0,Oe=0,qn=ln(0),ae=0,yi=null,Pn=0,so=0,Hl=0,Qr=null,Ie=null,Wl=0,hr=1/0,wt=null,js=!1,Wa=null,Zt=null,Yi=!1,Gt=null,Ms=0,Yr=0,Ka=null,ls=-1,us=0;function xe(){return U&6?te():ls!==-1?ls:ls=te()}function en(t){return t.mode&1?U&2&&de!==0?de&-de:G0.transition!==null?(us===0&&(us=cf()),us):(t=z,t!==0||(t=window.event,t=t===void 0?16:yf(t.type)),t):1}function ot(t,e,n,r){if(50<Yr)throw Yr=0,Ka=null,Error(x(185));ki(t,n,r),(!(U&2)||t!==ue)&&(t===ue&&(!(U&2)&&(so|=n),ae===4&&Ft(t,de)),Pe(t,r),n===1&&U===0&&!(e.mode&1)&&(hr=te()+500,to&&un()))}function Pe(t,e){var n=t.callbackNode;Gm(t,e);var r=xs(t,t===ue?de:0);if(r===0)n!==null&&$u(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$u(n),e===1)t.tag===0?K0(Ac.bind(null,t)):jf(Ac.bind(null,t)),V0(function(){!(U&6)&&un()}),n=null;else{switch(df(r)){case 1:n=yl;break;case 4:n=lf;break;case 16:n=ws;break;case 536870912:n=uf;break;default:n=ws}n=Lh(n,Nh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nh(t,e){if(ls=-1,us=0,U&6)throw Error(x(327));var n=t.callbackNode;if(nr()&&t.callbackNode!==n)return null;var r=xs(t,t===ue?de:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Us(t,r);else{e=r;var i=U;U|=2;var s=Ph();(ue!==t||de!==e)&&(wt=null,hr=te()+500,En(t,e));do try{hg();break}catch(a){Th(t,a)}while(1);bl(),Ds.current=s,U=i,ie!==null?e=0:(ue=null,de=0,e=ae)}if(e!==0){if(e===2&&(i=wa(t),i!==0&&(r=i,e=Ga(t,i))),e===1)throw n=yi,En(t,0),Ft(t,r),Pe(t,te()),n;if(e===6)Ft(t,r);else{if(i=t.current.alternate,!(r&30)&&!dg(i)&&(e=Us(t,r),e===2&&(s=wa(t),s!==0&&(r=s,e=Ga(t,s))),e===1))throw n=yi,En(t,0),Ft(t,r),Pe(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:yn(t,Ie,wt);break;case 3:if(Ft(t,r),(r&130023424)===r&&(e=Wl+500-te(),10<e)){if(xs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Na(yn.bind(null,t,Ie,wt),e);break}yn(t,Ie,wt);break;case 4:if(Ft(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cg(r/1960))-r,10<r){t.timeoutHandle=Na(yn.bind(null,t,Ie,wt),r);break}yn(t,Ie,wt);break;case 5:yn(t,Ie,wt);break;default:throw Error(x(329))}}}return Pe(t,te()),t.callbackNode===n?Nh.bind(null,t):null}function Ga(t,e){var n=Qr;return t.current.memoizedState.isDehydrated&&(En(t,e).flags|=256),t=Us(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&Qa(e)),t}function Qa(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function dg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ft(t,e){for(e&=~Hl,e&=~so,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function Ac(t){if(U&6)throw Error(x(327));nr();var e=xs(t,0);if(!(e&1))return Pe(t,te()),null;var n=Us(t,e);if(t.tag!==0&&n===2){var r=wa(t);r!==0&&(e=r,n=Ga(t,r))}if(n===1)throw n=yi,En(t,0),Ft(t,e),Pe(t,te()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yn(t,Ie,wt),Pe(t,te()),null}function Kl(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(hr=te()+500,to&&un())}}function bn(t){Gt!==null&&Gt.tag===0&&!(U&6)&&nr();var e=U;U|=1;var n=He.transition,r=z;try{if(He.transition=null,z=1,t)return t()}finally{z=r,He.transition=n,U=e,!(U&6)&&un()}}function Gl(){Oe=qn.current,G(qn)}function En(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Is();break;case 3:dr(),G(Ne),G(ye),jl();break;case 5:Dl(r);break;case 4:dr();break;case 13:G(q);break;case 19:G(q);break;case 10:Rl(r.type._context);break;case 22:case 23:Gl()}n=n.return}if(ue=t,ie=t=tn(t.current,null),de=Oe=e,ae=0,yi=null,Hl=so=Pn=0,Ie=Qr=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function Th(t,e){do{var n=ie;try{if(bl(),ss.current=Ls,Os){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Os=!1}if(Tn=0,le=oe=J=null,Kr=!1,pi=0,Bl.current=null,n===null||n.return===null){ae=1,yi=e,ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=wc(o);if(y!==null){y.flags&=-257,xc(y,o,a,s,e),y.mode&1&&vc(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){vc(s,u,e),Ql();break e}l=Error(x(426))}}else if(Y&&a.mode&1){var O=wc(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),xc(O,o,a,s,e),Tl(fr(l,a));break e}}s=l=fr(l,a),ae!==4&&(ae=2),Qr===null?Qr=[s]:Qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=dh(s,l,e);fc(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zt===null||!Zt.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=fh(s,a,e);fc(s,v);break e}}s=s.return}while(s!==null)}Rh(n)}catch(C){e=C,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Ph(){var t=Ds.current;return Ds.current=Ls,t===null?Ls:t}function Ql(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(Pn&268435455)&&!(so&268435455)||Ft(ue,de)}function Us(t,e){var n=U;U|=2;var r=Ph();(ue!==t||de!==e)&&(wt=null,En(t,e));do try{fg();break}catch(i){Th(t,i)}while(1);if(bl(),U=n,Ds.current=r,ie!==null)throw Error(x(261));return ue=null,de=0,ae}function fg(){for(;ie!==null;)bh(ie)}function hg(){for(;ie!==null&&!Um();)bh(ie)}function bh(t){var e=Oh(t.alternate,t,Oe);t.memoizedProps=t.pendingProps,e===null?Rh(t):ie=e,Bl.current=null}function Rh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=og(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,ie=null;return}}else if(n=sg(n,e,Oe),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);ae===0&&(ae=5)}function yn(t,e,n){var r=z,i=He.transition;try{He.transition=null,z=1,pg(t,e,n,r)}finally{He.transition=i,z=r}return null}function pg(t,e,n,r){do nr();while(Gt!==null);if(U&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qm(t,s),t===ue&&(ie=ue=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yi||(Yi=!0,Lh(ws,function(){return nr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var o=z;z=1;var a=U;U|=4,Bl.current=null,lg(t,n),Ih(n,t),L0(Ia),_s=!!Sa,Ia=Sa=null,t.current=n,ug(n),zm(),U=a,z=o,He.transition=s}else t.current=n;if(Yi&&(Yi=!1,Gt=t,Ms=i),s=t.pendingLanes,s===0&&(Zt=null),Vm(n.stateNode),Pe(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(js)throw js=!1,t=Wa,Wa=null,t;return Ms&1&&t.tag!==0&&nr(),s=t.pendingLanes,s&1?t===Ka?Yr++:(Yr=0,Ka=t):Yr=0,un(),null}function nr(){if(Gt!==null){var t=df(Ms),e=He.transition,n=z;try{if(He.transition=null,z=16>t?16:t,Gt===null)var r=!1;else{if(t=Gt,Gt=null,Ms=0,U&6)throw Error(x(331));var i=U;for(U|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Gr(8,m,s)}var h=m.child;if(h!==null)h.return=m,N=h;else for(;N!==null;){m=N;var f=m.sibling,y=m.return;if(kh(m),m===u){N=null;break}if(f!==null){f.return=y,N=f;break}N=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var O=_.sibling;_.sibling=null,_=O}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:io(9,a)}}catch(C){Z(a,a.return,C)}if(a===o){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(U=i,un(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(qs,t)}catch{}r=!0}return r}finally{z=n,He.transition=e}}return!1}function Oc(t,e,n){e=fr(n,e),e=dh(t,e,1),t=Xt(t,e,1),e=xe(),t!==null&&(ki(t,1,e),Pe(t,e))}function Z(t,e,n){if(t.tag===3)Oc(t,t,n);else for(;e!==null;){if(e.tag===3){Oc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){t=fr(n,t),t=fh(e,t,1),e=Xt(e,t,1),t=xe(),e!==null&&(ki(e,1,t),Pe(e,t));break}}e=e.return}}function mg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ue===t&&(de&n)===n&&(ae===4||ae===3&&(de&130023424)===de&&500>te()-Wl?En(t,0):Hl|=n),Pe(t,e)}function Ah(t,e){e===0&&(t.mode&1?(e=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):e=1);var n=xe();t=bt(t,e),t!==null&&(ki(t,e,n),Pe(t,n))}function gg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ah(t,n)}function yg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Ah(t,n)}var Oh;Oh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ne.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,ig(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,Y&&e.flags&1048576&&Mf(e,Ts,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;as(t,e),t=e.pendingProps;var i=lr(e,ye.current);tr(e,n),i=Ul(null,e,r,t,i,n);var s=zl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(s=!0,Cs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ol(e),i.updater=ro,e.stateNode=i,i._reactInternals=e,La(e,r,t,n),e=Ma(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&Cl(e),we(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(as(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wg(r),t=tt(r,t),i){case 0:e=ja(null,e,r,t,n);break e;case 1:e=Ec(null,e,r,t,n);break e;case 11:e=_c(null,e,r,t,n);break e;case 14:e=kc(null,e,r,tt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),ja(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ec(t,e,r,i,n);case 3:e:{if(gh(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bf(t,e),Rs(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fr(Error(x(423)),e),e=Sc(t,e,r,n,i);break e}else if(r!==i){i=fr(Error(x(424)),e),e=Sc(t,e,r,n,i);break e}else for(De=Jt(e.stateNode.containerInfo.firstChild),je=e,Y=!0,rt=null,n=Ff(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){e=Rt(t,e,n);break e}we(t,e,r,n)}e=e.child}return e;case 5:return Hf(e),t===null&&Ra(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ca(r,i)?o=null:s!==null&&Ca(r,s)&&(e.flags|=32),mh(t,e),we(t,e,o,n),e.child;case 6:return t===null&&Ra(e),null;case 13:return yh(t,e,n);case 4:return Ll(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cr(e,null,r,n):we(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),_c(t,e,r,i,n);case 7:return we(t,e,e.pendingProps,n),e.child;case 8:return we(t,e,e.pendingProps.children,n),e.child;case 12:return we(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,B(Ps,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Ne.current){e=Rt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Aa(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Aa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,tr(e,n),i=We(i),r=r(i),e.flags|=1,we(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),kc(t,e,r,i,n);case 15:return hh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),as(t,e),e.tag=1,Te(r)?(t=!0,Cs(e)):t=!1,tr(e,n),ch(e,r,i),La(e,r,i,n),Ma(null,e,r,!0,t,n);case 19:return vh(t,e,n);case 22:return ph(t,e,n)}throw Error(x(156,e.tag))};function Lh(t,e){return af(t,e)}function vg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,e,n,r){return new vg(t,e,n,r)}function Yl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wg(t){if(typeof t=="function")return Yl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pl)return 11;if(t===ml)return 14}return 2}function tn(t,e){var n=t.alternate;return n===null?(n=Be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yl(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $n:return Sn(n.children,i,s,e);case hl:o=8,i|=8;break;case ia:return t=Be(12,n,e,i|2),t.elementType=ia,t.lanes=s,t;case sa:return t=Be(13,n,e,i),t.elementType=sa,t.lanes=s,t;case oa:return t=Be(19,n,e,i),t.elementType=oa,t.lanes=s,t;case Bd:return oo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fd:o=10;break e;case Vd:o=9;break e;case pl:o=11;break e;case ml:o=14;break e;case Ut:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Be(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sn(t,e,n,r){return t=Be(7,t,r,e),t.lanes=n,t}function oo(t,e,n,r){return t=Be(22,t,r,e),t.elementType=Bd,t.lanes=n,t.stateNode={isHidden:!1},t}function Ho(t,e,n){return t=Be(6,t,null,e),t.lanes=n,t}function Wo(t,e,n){return e=Be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ql(t,e,n,r,i,s,o,a,l){return t=new xg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Be(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(s),t}function _g(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dh(t){if(!t)return on;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Te(n))return Df(t,n,e)}return e}function jh(t,e,n,r,i,s,o,a,l){return t=ql(n,r,!0,t,i,s,o,a,l),t.context=Dh(null),n=t.current,r=xe(),i=en(n),s=Nt(r,i),s.callback=e??null,Xt(n,s,i),t.current.lanes=i,ki(t,i,r),Pe(t,r),t}function ao(t,e,n,r){var i=e.current,s=xe(),o=en(i);return n=Dh(n),e.context===null?e.context=n:e.pendingContext=n,e=Nt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xt(i,e,o),t!==null&&(ot(t,i,o,s),is(t,i,o)),o}function zs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jl(t,e){Lc(t,e),(t=t.alternate)&&Lc(t,e)}function kg(){return null}var Mh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xl(t){this._internalRoot=t}lo.prototype.render=Xl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));ao(t,e,null,null)};lo.prototype.unmount=Xl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bn(function(){ao(null,t,null,null)}),e[Pt]=null}};function lo(t){this._internalRoot=t}lo.prototype.unstable_scheduleHydration=function(t){if(t){var e=pf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$t.length&&e!==0&&e<$t[n].priority;n++);$t.splice(n,0,t),n===0&&gf(t)}};function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Eg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zs(o);s.call(u)}}var o=jh(e,r,t,0,null,!1,!1,"",Dc);return t._reactRootContainer=o,t[Pt]=o.current,ui(t.nodeType===8?t.parentNode:t),bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zs(l);a.call(u)}}var l=ql(t,0,!1,null,null,!1,!1,"",Dc);return t._reactRootContainer=l,t[Pt]=l.current,ui(t.nodeType===8?t.parentNode:t),bn(function(){ao(e,l,n,r)}),l}function co(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zs(o);a.call(l)}}ao(e,o,t,i)}else o=Eg(n,e,t,i,r);return zs(o)}ff=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jr(e.pendingLanes);n!==0&&(vl(e,n|1),Pe(e,te()),!(U&6)&&(hr=te()+500,un()))}break;case 13:bn(function(){var r=bt(t,1);if(r!==null){var i=xe();ot(r,t,1,i)}}),Jl(t,1)}};wl=function(t){if(t.tag===13){var e=bt(t,134217728);if(e!==null){var n=xe();ot(e,t,134217728,n)}Jl(t,134217728)}};hf=function(t){if(t.tag===13){var e=en(t),n=bt(t,e);if(n!==null){var r=xe();ot(n,t,e,r)}Jl(t,e)}};pf=function(){return z};mf=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};ga=function(t,e,n){switch(e){case"input":if(ua(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eo(r);if(!i)throw Error(x(90));Wd(r),ua(r,i)}}}break;case"textarea":Gd(t,n);break;case"select":e=n.value,e!=null&&Jn(t,!!n.multiple,e,!1)}};ef=Kl;tf=bn;var Sg={usingClientEntryPoint:!1,Events:[Si,Hn,eo,Xd,Zd,Kl]},Ar={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ig={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sf(t),t===null?null:t.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{qs=qi.inject(Ig),ft=qi}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;Ue.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(e))throw Error(x(200));return _g(t,e,null,n)};Ue.createRoot=function(t,e){if(!Zl(t))throw Error(x(299));var n=!1,r="",i=Mh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ql(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,ui(t.nodeType===8?t.parentNode:t),new Xl(e)};Ue.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=sf(e),t=t===null?null:t.stateNode,t};Ue.flushSync=function(t){return bn(t)};Ue.hydrate=function(t,e,n){if(!uo(e))throw Error(x(200));return co(null,t,e,!0,n)};Ue.hydrateRoot=function(t,e,n){if(!Zl(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jh(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,ui(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lo(e)};Ue.render=function(t,e,n){if(!uo(e))throw Error(x(200));return co(null,t,e,!1,n)};Ue.unmountComponentAtNode=function(t){if(!uo(t))throw Error(x(40));return t._reactRootContainer?(bn(function(){co(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};Ue.unstable_batchedUpdates=Kl;Ue.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uo(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return co(t,e,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function Uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)}catch(t){console.error(t)}}Uh(),Md.exports=Ue;var Cg=Md.exports,jc=Cg;na.createRoot=jc.createRoot,na.hydrateRoot=jc.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=t=>{const e=Tg(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>E.createElement("svg",{ref:l,...Pg,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:zh("lucide",i),...!s&&!bg(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,m])=>E.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,e)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(Rg,{ref:s,iconNode:e,className:zh(`lucide-${Ng(Mc(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Mc(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$h=$("chevron-right",Ag);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Fh=$("circle-alert",Og);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],yt=$("circle-check",Lg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],jg=$("circle-pause",Dg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ug=$("circle-play",Mg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Uc=$("crown",zg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],zc=$("download",$g);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vg=$("eye",Fg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Hg=$("file-code",Bg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],Ko=$("headset",Wg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],$c=$("history",Kg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Fc=$("loader-circle",Gg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ya=$("lock",Qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],qg=$("log-out",Yg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Vc=$("mail",Jg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],Zg=$("mic-vocal",Xg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],t1=$("panels-top-left",e1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],r1=$("pause",n1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Bc=$("phone",i1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Hc=$("play",s1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],a1=$("sparkles",o1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],u1=$("star",l1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],d1=$("toggle-left",c1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],h1=$("toggle-right",f1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Vh=$("user",p1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],g1=$("volume-2",m1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wc=$("x",y1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$s=$("zap",v1),w1=()=>{};/**
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
 */const Bh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},x1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,m=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[m],n[h],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new _1;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k1=function(t){const e=Bh(t);return Hh.encodeByteArray(e,!0)},Wh=function(t){return k1(t).replace(/\./g,"")},Kh=function(t){try{return Hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function E1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S1=()=>E1().__FIREBASE_DEFAULTS__,I1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kh(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return w1()||S1()||I1()||C1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},N1=t=>{var e,n;return(n=(e=eu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Gh=()=>{var t;return(t=eu())==null?void 0:t.config},Qh=t=>{var e;return(e=eu())==null?void 0:e[`_${t}`]};/**
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
 */function fo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function P1(t){return(await fetch(t,{credentials:"include"})).ok}const qr={};function b1(){const t={prod:[],emulator:[]};for(const e of Object.keys(qr))qr[e]?t.emulator.push(e):t.prod.push(e);return t}function R1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kc=!1;function A1(t,e){if(typeof window>"u"||typeof document>"u"||!fo(window.location.host)||qr[t]===e||qr[t]||Kc)return;qr[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=b1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,y){f.setAttribute("width","24"),f.setAttribute("id",y),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Kc=!0,o()},f}function m(f,y){f.setAttribute("id",y),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=R1(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),O=document.getElementById(_)||document.createElement("a"),p=n("preprendIcon"),d=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const g=f.element;a(g),m(O,_);const v=u();l(d,p),g.append(d,w,O,v),document.body.appendChild(g)}s?(w.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function L1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function D1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M1(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function U1(){try{return typeof indexedDB=="object"}catch{return!1}}function z1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const $1="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$1,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?F1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function F1(t,e){return t.replace(V1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V1=/\{\$([^}]+)}/g;function B1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gc(s)&&Gc(o)){if(!pr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gc(t){return t!==null&&typeof t=="object"}/**
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
 */function xr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ur(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function H1(t,e){const n=new W1(t,e);return n.subscribe.bind(n)}class W1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Go),i.error===void 0&&(i.error=Go),i.complete===void 0&&(i.complete=Go);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Go(){}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class G1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new T1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y1(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q1(t){return t===vn?void 0:t}function Y1(t){return t.instantiationMode==="EAGER"}/**
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
 */class q1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const J1={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},X1=F.INFO,Z1={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},ey=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Z1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=X1,this._logHandler=ey,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const ty=(t,e)=>e.some(n=>t instanceof n);let Qc,Yc;function ny(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ry(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,qa=new WeakMap,Jh=new WeakMap,Qo=new WeakMap,tu=new WeakMap;function iy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qh.set(n,t)}).catch(()=>{}),tu.set(e,t),e}function sy(t){if(qa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qa.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oy(t){Ja=t(Ja)}function ay(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yo(this),e,...n);return Jh.set(r,e.sort?e.sort():[e]),nn(r)}:ry().includes(t)?function(...e){return t.apply(Yo(this),e),nn(qh.get(this))}:function(...e){return nn(t.apply(Yo(this),e))}}function ly(t){return typeof t=="function"?ay(t):(t instanceof IDBTransaction&&sy(t),ty(t,ny())?new Proxy(t,Ja):t)}function nn(t){if(t instanceof IDBRequest)return iy(t);if(Qo.has(t))return Qo.get(t);const e=ly(t);return e!==t&&(Qo.set(t,e),tu.set(e,t)),e}const Yo=t=>tu.get(t);function uy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const cy=["get","getKey","getAll","getAllKeys","count"],dy=["put","add","delete","clear"],qo=new Map;function qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qo.set(e,s),s}oy(t=>({...t,get:(e,n,r)=>qc(e,n)||t.get(e,n,r),has:(e,n)=>!!qc(e,n)||t.has(e,n)}));/**
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
 */class fy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Jc="0.14.8";/**
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
 */const At=new Yh("@firebase/app"),py="@firebase/app-compat",my="@firebase/analytics-compat",gy="@firebase/analytics",yy="@firebase/app-check-compat",vy="@firebase/app-check",wy="@firebase/auth",xy="@firebase/auth-compat",_y="@firebase/database",ky="@firebase/data-connect",Ey="@firebase/database-compat",Sy="@firebase/functions",Iy="@firebase/functions-compat",Cy="@firebase/installations",Ny="@firebase/installations-compat",Ty="@firebase/messaging",Py="@firebase/messaging-compat",by="@firebase/performance",Ry="@firebase/performance-compat",Ay="@firebase/remote-config",Oy="@firebase/remote-config-compat",Ly="@firebase/storage",Dy="@firebase/storage-compat",jy="@firebase/firestore",My="@firebase/ai",Uy="@firebase/firestore-compat",zy="firebase",$y="12.9.0";/**
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
 */const Za="[DEFAULT]",Fy={[Xa]:"fire-core",[py]:"fire-core-compat",[gy]:"fire-analytics",[my]:"fire-analytics-compat",[vy]:"fire-app-check",[yy]:"fire-app-check-compat",[wy]:"fire-auth",[xy]:"fire-auth-compat",[_y]:"fire-rtdb",[ky]:"fire-data-connect",[Ey]:"fire-rtdb-compat",[Sy]:"fire-fn",[Iy]:"fire-fn-compat",[Cy]:"fire-iid",[Ny]:"fire-iid-compat",[Ty]:"fire-fcm",[Py]:"fire-fcm-compat",[by]:"fire-perf",[Ry]:"fire-perf-compat",[Ay]:"fire-rc",[Oy]:"fire-rc-compat",[Ly]:"fire-gcs",[Dy]:"fire-gcs-compat",[jy]:"fire-fst",[Uy]:"fire-fst-compat",[My]:"fire-vertex","fire-js":"fire-js",[zy]:"fire-js-all"};/**
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
 */const Fs=new Map,Vy=new Map,el=new Map;function Xc(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if(el.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;el.set(e,t);for(const n of Fs.values())Xc(n,t);for(const n of Vy.values())Xc(n,t);return!0}function Xh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Le(t){return t==null?!1:t.settings!==void 0}/**
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
 */const By={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new Ci("app","Firebase",By);/**
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
 */class Hy{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ni=$y;function Zh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Za,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Gh()),!n)throw rn.create("no-options");const s=Fs.get(i);if(s){if(pr(n,s.options)&&pr(r,s.config))return s;throw rn.create("duplicate-app",{appName:i})}const o=new q1(i);for(const l of el.values())o.addComponent(l);const a=new Hy(n,r,o);return Fs.set(i,a),a}function Wy(t=Za){const e=Fs.get(t);if(!e&&t===Za&&Gh())return Zh();if(!e)throw rn.create("no-app",{appName:t});return e}function rr(t,e,n){let r=Fy[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(o.join(" "));return}vi(new mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ky="firebase-heartbeat-database",Gy=1,wi="firebase-heartbeat-store";let Jo=null;function ep(){return Jo||(Jo=uy(Ky,Gy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),Jo}async function Qy(t){try{const n=(await ep()).transaction(wi),r=await n.objectStore(wi).get(tp(t));return await n.done,r}catch(e){if(e instanceof cn)At.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(n.message)}}}async function Zc(t,e){try{const r=(await ep()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,tp(t)),await r.done}catch(n){if(n instanceof cn)At.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(r.message)}}}function tp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yy=1024,qy=30;class Jy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ed();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>qy){const o=ev(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){At.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ed(),{heartbeatsToSend:r,unsentEntries:i}=Xy(this._heartbeatsCache.heartbeats),s=Wh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return At.warn(n),""}}}function ed(){return new Date().toISOString().substring(0,10)}function Xy(t,e=Yy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),td(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),td(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U1()?z1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function td(t){return Wh(JSON.stringify({version:2,heartbeats:t})).length}function ev(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function tv(t){vi(new mr("platform-logger",e=>new fy(e),"PRIVATE")),vi(new mr("heartbeat",e=>new Jy(e),"PRIVATE")),rr(Xa,Jc,t),rr(Xa,Jc,"esm2020"),rr("fire-js","")}tv("");var nv="firebase",rv="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(nv,rv,"app");function np(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iv=np,rp=new Ci("auth","Firebase",np());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Yh("@firebase/auth");function sv(t,...e){Vs.logLevel<=F.WARN&&Vs.warn(`Auth (${Ni}): ${t}`,...e)}function ds(t,...e){Vs.logLevel<=F.ERROR&&Vs.error(`Auth (${Ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw ru(t,...e)}function be(t,...e){return ru(t,...e)}function nu(t,e,n){const r={...iv(),[e]:n};return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function pt(t){return nu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ov(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(t,"argument-error"),nu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rp.create(t,...e)}function S(t,e,...n){if(!t)throw ru(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ds(e),new Error(e)}function Ot(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ip(){return nd()==="http:"||nd()==="https:"}function nd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ip()||D1()||"connection"in navigator)?navigator.onLine:!0}function lv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=O1()||j1()}get(){return av()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dv=new Ti(3e4,6e4);function Se(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Re(t,e,n,r,i={}){return op(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return L1()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&fo(t.emulatorConfig.host)&&(u.credentials="include"),sp.fetch()(await ap(t,t.config.apiHost,n,a),u)})}async function op(t,e,n){t._canInitEmulator=!1;const r={...uv,...e};try{const i=new hv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $r(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $r(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $r(t,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nu(t,m,u);Ge(t,m)}}catch(i){if(i instanceof cn)throw i;Ge(t,"network-request-failed",{message:String(i)})}}async function dn(t,e,n,r,i={}){const s=await Re(t,e,n,r,i);return"mfaPendingCredential"in s&&Ge(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ap(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?iu(t.config,i):`${t.config.apiScheme}://${i}`;return cv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function fv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),dv.get())})}}function $r(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=be(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){return t!==void 0&&t.getResponse!==void 0}function id(t){return t!==void 0&&t.enterprise!==void 0}class lp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(t){return(await Re(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function up(t,e){return Re(t,"GET","/v2/recaptchaConfig",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e){return Re(t,"POST","/v1/accounts:delete",e)}async function Bs(t,e){return Re(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gv(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=su(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jr(Xo(i.auth_time)),issuedAtTime:Jr(Xo(i.iat)),expirationTime:Jr(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xo(t){return Number(t)*1e3}function su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kh(n);return i?JSON.parse(i):(ds("Failed to decode base64 JWT payload"),null)}catch(i){return ds("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sd(t){const e=su(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&yv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jr(this.lastLoginAt),this.creationTime=Jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hs(t){var h;const e=t.auth,n=await t.getIdToken(),r=await gr(t,Bs(e,{idToken:n}));S(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?cp(i.providerUserInfo):[],o=xv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new nl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,m)}async function wv(t){const e=Qe(t);await Hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e){const n=await op(t,{},async()=>{const r=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ap(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&fo(t.emulatorConfig.host)&&(l.credentials="include"),sp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kv(t,e){return Re(t,"POST","/v2/accounts:revokeToken",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=sd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _v(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ir;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new vv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gv(this,e)}reload(){return wv(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(pt(this.auth));const e=await this.getIdToken();return await gr(this,mv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:y,providerData:w,stsTokenManager:_}=n;S(h&&_,e,"internal-error");const O=ir.fromJSON(this.name,_);S(typeof h=="string",e,"internal-error"),Mt(r,e.name),Mt(i,e.name),S(typeof f=="boolean",e,"internal-error"),S(typeof y=="boolean",e,"internal-error"),Mt(s,e.name),Mt(o,e.name),Mt(a,e.name),Mt(l,e.name),Mt(u,e.name),Mt(m,e.name);const p=new it({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:O,createdAt:u,lastLoginAt:m});return w&&Array.isArray(w)&&(p.providerData=w.map(d=>({...d}))),l&&(p._redirectEventId=l),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new ir;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ir;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;function Ct(t){Ot(t instanceof Function,"Expected a class definition");let e=od.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,od.set(t,e),e)}/**
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
 */class dp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dp.type="NONE";const ad=dp;/**
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
 */function fs(t,e,n){return`firebase:${t}:${e}:${n}`}class sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fs(this.userKey,i.apiKey,s),this.fullPersistenceKey=fs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bs(this.auth,{idToken:e}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sr(Ct(ad),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ct(ad);const o=fs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const m=await u._get(o);if(m){let h;if(typeof m=="string"){const f=await Bs(e,{idToken:m}).catch(()=>{});if(!f)break;h=await it._fromGetAccountInfoResponse(e,f,m)}else h=it._fromJSON(e,m);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new sr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new sr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yp(e))return"Blackberry";if(vp(e))return"Webos";if(hp(e))return"Safari";if((e.includes("chrome/")||pp(e))&&!e.includes("edge/"))return"Chrome";if(gp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fp(t=_e()){return/firefox\//i.test(t)}function hp(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pp(t=_e()){return/crios\//i.test(t)}function mp(t=_e()){return/iemobile/i.test(t)}function gp(t=_e()){return/android/i.test(t)}function yp(t=_e()){return/blackberry/i.test(t)}function vp(t=_e()){return/webos/i.test(t)}function ou(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ev(t=_e()){var e;return ou(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Sv(){return M1()&&document.documentMode===10}function wp(t=_e()){return ou(t)||gp(t)||vp(t)||yp(t)||/windows phone/i.test(t)||mp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t,e=[]){let n;switch(t){case"Browser":n=ld(_e());break;case"Worker":n=`${ld(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${r}`}/**
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
 */class Iv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cv(t,e={}){return Re(t,"GET","/v2/passwordPolicy",Se(t,e))}/**
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
 */const Nv=6;class Tv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Nv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new Iv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bs(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(pt(this));const n=e?Qe(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cv(this),n=new Tv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&sv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ye(t){return Qe(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=H1(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bv(t){Pi=t}function au(t){return Pi.loadJS(t)}function Rv(){return Pi.recaptchaV2Script}function Av(){return Pi.recaptchaEnterpriseScript}function Ov(){return Pi.gapiScript}function _p(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=500,Dv=6e4,Ji=1e12;class jv{constructor(e){this.auth=e,this.counter=Ji,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new zv(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Ji;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Ji;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Ji;return(r=this._widgets.get(n))==null||r.execute(),""}}class Mv{constructor(){this.enterprise=new Uv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Uv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zv{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$v(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Dv)},Lv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $v(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Fv="recaptcha-enterprise",Xr="NO_RECAPTCHA";class kp{constructor(e){this.type=Fv,this.auth=Ye(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{up(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lp(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;id(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xr)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Mv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&id(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Av();l.length!==0&&(l+=a),au(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Or(t,e,n,r=!1,i=!1){const s=new kp(t);let o;if(i)o=Xr;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function In(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Or(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Or(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Or(t,e,n);return r(t,a).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Or(t,e,n,!1,!0);return r(t,m)}return Promise.reject(l)})}else{const a=await Or(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Vv(t){const e=Ye(t),n=await up(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new lp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new kp(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e){const n=Xh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pr(s,e??{}))return i;Ge(i,"already-initialized")}return n.initialize({options:e})}function Hv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wv(t,e,n){const r=Ye(t);S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ep(e),{host:o,port:a}=Kv(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){S(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),S(pr(u,r.config.emulator)&&pr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,fo(o)?(P1(`${s}//${o}${l}`),A1("Auth",!0)):i||Gv()}function Ep(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kv(t){const e=Ep(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cd(o)}}}function cd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function Qv(t,e){return Re(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(t,e){return dn(t,"POST","/v1/accounts:signInWithPassword",Se(t,e))}async function qv(t,e){return Re(t,"POST","/v1/accounts:sendOobCode",Se(t,e))}async function Jv(t,e){return qv(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e){return dn(t,"POST","/v1/accounts:signInWithEmailLink",Se(t,e))}async function Zv(t,e){return dn(t,"POST","/v1/accounts:signInWithEmailLink",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends ho{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,n,"signInWithPassword",Yv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Xv(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,r,"signUpPassword",Qv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Zv(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e){return dn(t,"POST","/v1/accounts:signInWithIdp",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="http://localhost";class Rn extends ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Rn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:ew,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t,e){return Re(t,"POST","/v1/accounts:sendVerificationCode",Se(t,e))}async function tw(t,e){return dn(t,"POST","/v1/accounts:signInWithPhoneNumber",Se(t,e))}async function nw(t,e){const n=await dn(t,"POST","/v1/accounts:signInWithPhoneNumber",Se(t,e));if(n.temporaryProof)throw $r(t,"account-exists-with-different-credential",n);return n}const rw={USER_NOT_FOUND:"user-not-found"};async function iw(t,e){const n={...e,operation:"REAUTH"};return dn(t,"POST","/v1/accounts:signInWithPhoneNumber",Se(t,n),rw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends ho{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return tw(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return nw(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return iw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Zr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ow(t){const e=Ur(zr(t)).link,n=e?Ur(zr(e)).deep_link_id:null,r=Ur(zr(t)).deep_link_id;return(r?Ur(zr(r)).link:null)||r||n||e||t}class lu{constructor(e){const n=Ur(zr(e)),r=n.apiKey??null,i=n.oobCode??null,s=sw(n.mode??null);S(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ow(e);try{return new lu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.providerId=_r.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lu.parseLink(n);return S(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}_r.PROVIDER_ID="password";_r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bi extends uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends bi{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends bi{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends bi{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e){return dn(t,"POST","/v1/accounts:signUp",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),o=fd(r);return new An({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fd(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends cn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ws.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ws(e,n,r,i)}}function Sp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ws._fromErrorAndOperation(t,s,e,r):s})}async function lw(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
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
 */async function uw(t,e,n=!1){const{auth:r}=t;if(Le(r.app))return Promise.reject(pt(r));const i="reauthenticate";try{const s=await gr(t,Sp(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=su(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),An._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e,n=!1){if(Le(t.app))return Promise.reject(pt(t));const r="signIn",i=await Sp(t,r,e),s=await An._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Cp(t,e){return Ip(Ye(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e,n){var r;S(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),S(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t){const e=Ye(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dw(t,e,n){const r=Ye(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&cw(r,i,n),await In(r,i,"getOobCode",Jv,"EMAIL_PASSWORD_PROVIDER")}async function fw(t,e,n){if(Le(t.app))return Promise.reject(pt(t));const r=Ye(t),o=await In(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Np(t),l}),a=await An._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function hw(t,e,n){return Le(t.app)?Promise.reject(pt(t)):Cp(Qe(t),_r.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Np(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(t,e){return Re(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,pw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t,e){return Qe(t).setPersistence(e)}function yw(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function vw(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function ww(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function xw(t){return Qe(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){return Re(t,"POST","/v2/accounts/mfaEnrollment:start",Se(t,e))}const Ks="__sak";/**
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
 */class Tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=1e3,kw=10;class Pp extends Tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Sv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pp.type="LOCAL";const bp=Pp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends Tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rp.type="SESSION";const cu=Rp;/**
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
 */class po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new po(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Ew(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}po.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=du("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return window}function Iw(t){re().location.href=t}/**
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
 */function fu(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function Cw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Tw(){return fu()?self:null}/**
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
 */const Ap="firebaseLocalStorageDb",Pw=1,Gs="firebaseLocalStorage",Op="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mo(t,e){return t.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function bw(){const t=indexedDB.deleteDatabase(Ap);return new Ri(t).toPromise()}function rl(){const t=indexedDB.open(Ap,Pw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gs,{keyPath:Op})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gs)?e(r):(r.close(),await bw(),e(await rl()))})})}async function pd(t,e,n){const r=mo(t,!0).put({[Op]:e,value:n});return new Ri(r).toPromise()}async function Rw(t,e){const n=mo(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=mo(t,!0).delete(e);return new Ri(n).toPromise()}const Aw=800,Ow=3;class Lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ow)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=po._getInstance(Tw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Cw(),!this.activeServiceWorker)return;this.sender=new Sw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rl();return await pd(e,Ks,"1"),await md(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mo(i,!1).getAll();return new Ri(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lp.type="LOCAL";const Lw=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){return Re(t,"POST","/v2/accounts/mfaSignIn:start",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=_p("rcb"),Dw=new Ti(3e4,6e4);class jw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=re().grecaptcha)!=null&&e.render)}load(e,n=""){return S(Mw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&rd(re().grecaptcha)?Promise.resolve(re().grecaptcha):new Promise((r,i)=>{const s=re().setTimeout(()=>{i(be(e,"network-request-failed"))},Dw.get());re()[Zo]=()=>{re().clearTimeout(s),delete re()[Zo];const a=re().grecaptcha;if(!a||!rd(a)){i(be(e,"internal-error"));return}const l=a.render;a.render=(u,m)=>{const h=l(u,m);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Rv()}?${xr({onload:Zo,render:"explicit",hl:n})}`;au(o).catch(()=>{clearTimeout(s),i(be(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=re().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Uw{async load(e){return new jv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="recaptcha",zw={theme:"light",type:"image"};class $w{constructor(e,n,r={...zw}){this.parameters=r,this.type=ei,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ye(e),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Uw:new jw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=re()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(ip()&&!fu(),this.auth,"internal-error"),await Fw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pv(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Fw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Bw(t,e,n){if(Le(t.app))return Promise.reject(pt(t));const r=Ye(t),i=await Hw(r,e,Qe(n));return new Vw(i,s=>Cp(r,s))}async function Hw(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Vv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){S(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await In(t,o,"mfaSmsEnrollment",async(m,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Xr){S((n==null?void 0:n.type)===ei,m,"argument-error");const f=await ea(m,h,n);return hd(m,f)}return hd(m,h)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{S(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;S(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await In(t,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===Xr){S((n==null?void 0:n.type)===ei,h,"argument-error");const y=await ea(h,f,n);return gd(h,y)}return gd(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await In(t,s,"sendVerificationCode",async(u,m)=>{if(m.captchaResponse===Xr){S((n==null?void 0:n.type)===ei,u,"argument-error");const h=await ea(u,m,n);return dd(u,h)}return dd(u,m)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function ea(t,e,n){S(n.type===ei,t,"argument-error");const r=await n.verify();S(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Dp(t,e){return e?Ct(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hu extends ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ww(t){return Ip(t.auth,new hu(t),t.bypassAuthState)}function Kw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),uw(n,new hu(t),t.bypassAuthState)}async function Gw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),lw(n,new hu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ww;case"linkViaPopup":case"linkViaRedirect":return Gw;case"reauthViaPopup":case"reauthViaRedirect":return Kw;default:Ge(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Ti(2e3,1e4);async function Yw(t,e,n){if(Le(t.app))return Promise.reject(be(t,"operation-not-supported-in-this-environment"));const r=Ye(t);ov(t,e,uu);const i=Dp(r,n);return new kn(r,"signInViaPopup",e,i).executeNotNull()}class kn extends jp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qw.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="pendingRedirect",hs=new Map;class Jw extends jp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const r=await Xw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xw(t,e){const n=tx(e),r=ex(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Zw(t,e){hs.set(t._key(),e)}function ex(t){return Ct(t._redirectPersistence)}function tx(t){return fs(qw,t.config.apiKey,t.name)}async function nx(t,e,n=!1){if(Le(t.app))return Promise.reject(pt(t));const r=Ye(t),i=Dp(r,e),o=await new Jw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=10*60*1e3;class ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(be(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rx&&this.cachedEventUids.clear(),this.cachedEventUids.has(yd(e))}saveEventToCache(e){this.cachedEventUids.add(yd(e)),this.lastProcessedEventTime=Date.now()}}function yd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e={}){return Re(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lx=/^https?/;async function ux(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ox(t);for(const n of e)try{if(cx(n))return}catch{}Ge(t,"unauthorized-domain")}function cx(t){const e=tl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lx.test(n))return!1;if(ax.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const dx=new Ti(3e4,6e4);function vd(){const t=re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fx(t){return new Promise((e,n)=>{var i,s,o;function r(){vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vd(),n(be(t,"network-request-failed"))},timeout:dx.get()})}if((s=(i=re().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=re().gapi)!=null&&o.load)r();else{const a=_p("iframefcb");return re()[a]=()=>{gapi.load?r():n(be(t,"network-request-failed"))},au(`${Ov()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ps=null,e})}let ps=null;function hx(t){return ps=ps||fx(t),ps}/**
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
 */const px=new Ti(5e3,15e3),mx="__/auth/iframe",gx="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wx(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iu(e,gx):`https://${t.config.authDomain}/${mx}`,r={apiKey:e.apiKey,appName:t.name,v:Ni},i=vx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xr(r).slice(1)}`}async function xx(t){const e=await hx(t),n=re().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:wx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=be(t,"network-request-failed"),a=re().setTimeout(()=>{s(o)},px.get());function l(){re().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _x={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kx=500,Ex=600,Sx="_blank",Ix="http://localhost";class wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cx(t,e,n,r=kx,i=Ex){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={..._x,width:r.toString(),height:i.toString(),top:s,left:o},u=_e().toLowerCase();n&&(a=pp(u)?Sx:n),fp(u)&&(e=e||Ix,l.scrollbars="yes");const m=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(Ev(u)&&a!=="_self")return Nx(e||"",a),new wd(null);const h=window.open(e||"",a,m);S(h,t,"popup-blocked");try{h.focus()}catch{}return new wd(h)}function Nx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tx="__/auth/handler",Px="emulator/auth/handler",bx=encodeURIComponent("fac");async function xd(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ni,eventId:i};if(e instanceof uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",B1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,h]of Object.entries(s||{}))o[m]=h}if(e instanceof bi){const m=e.getScopes().filter(h=>h!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const l=await t._getAppCheckToken(),u=l?`#${bx}=${encodeURIComponent(l)}`:"";return`${Rx(t)}?${xr(a).slice(1)}${u}`}function Rx({config:t}){return t.emulator?iu(t,Px):`https://${t.authDomain}/${Tx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="webStorageSupport";class Ax{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cu,this._completeRedirectFn=nx,this._overrideRedirectResult=Zw}async _openPopup(e,n,r,i){var o;Ot((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await xd(e,n,r,tl(),i);return Cx(e,s,du())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xd(e,n,r,tl(),i);return Iw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xx(e),r=new ix(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ta,{type:ta},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ta];s!==void 0&&n(!!s),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wp()||hp()||ou()}}const Ox=Ax;var _d="@firebase/auth",kd="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Dx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jx(t){vi(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xp(t)},u=new Pv(r,i,s,l);return Hv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new mr("auth-internal",e=>{const n=Ye(e.getProvider("auth").getImmediate());return(r=>new Lx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(_d,kd,Dx(t)),rr(_d,kd,"esm2020")}/**
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
 */const Mx=5*60,Ux=Qh("authIdTokenMaxAge")||Mx;let Ed=null;const zx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ux)return;const i=n==null?void 0:n.token;Ed!==i&&(Ed=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $x(t=Wy()){const e=Xh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bv(t,{popupRedirectResolver:Ox,persistence:[Lw,bp,cu]}),r=Qh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zx(s.toString());vw(n,o,()=>o(n.currentUser)),yw(n,a=>o(a))}}const i=N1("auth");return i&&Wv(n,`http://${i}`),n}function Fx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=be("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Fx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jx("Browser");const Vx={apiKey:"AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",authDomain:"vokal-pro-studio-app-2026.firebaseapp.com",projectId:"vokal-pro-studio-app-2026",storageBucket:"vokal-pro-studio-app-2026.firebasestorage.app",messagingSenderId:"390591097726",appId:"1:390591097726:web:fceb62a64f27876578212f"},Bx=Zh(Vx),xt=$x(Bx);let Hx={data:""},Wx=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Hx},Kx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Gx=/\/\*[^]*?\*\/|  +/g,Sd=/\n+/g,Wt=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Wt(o,s):s+"{"+Wt(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Wt(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Wt.p?Wt.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},vt={},Up=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Up(t[n]);return e}return t},Qx=(t,e,n,r,i)=>{let s=Up(t),o=vt[s]||(vt[s]=(l=>{let u=0,m=11;for(;u<l.length;)m=101*m+l.charCodeAt(u++)>>>0;return"go"+m})(s));if(!vt[o]){let l=s!==t?t:(u=>{let m,h,f=[{}];for(;m=Kx.exec(u.replace(Gx,""));)m[4]?f.shift():m[3]?(h=m[3].replace(Sd," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][m[1]]=m[2].replace(Sd," ").trim();return f[0]})(t);vt[o]=Wt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&vt.g?vt.g:null;return n&&(vt.g=vt[o]),((l,u,m,h)=>{h?u.data=u.data.replace(h,l):u.data.indexOf(l)===-1&&(u.data=m?l+u.data:u.data+l)})(vt[o],e,r,a),o},Yx=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Wt(a,""):a===!1?"":a}return r+i+(o??"")},"");function go(t){let e=this||{},n=t.call?t(e.p):t;return Qx(n.unshift?n.raw?Yx(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Wx(e.target),e.g,e.o,e.k)}let zp,il,sl;go.bind({g:1});let Lt=go.bind({k:1});function qx(t,e,n,r){Wt.p=e,zp=t,il=n,sl=r}function fn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:il&&il()},a),n.o=/ *go\d+/.test(l),a.className=go.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),sl&&u[0]&&sl(a),zp(u,a)}return e?e(i):i}}var Jx=t=>typeof t=="function",Qs=(t,e)=>Jx(t)?t(e):t,Xx=(()=>{let t=0;return()=>(++t).toString()})(),$p=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Zx=20,pu="default",Fp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return Fp(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ms=[],Vp={toasts:[],pausedAt:void 0,settings:{toastLimit:Zx}},dt={},Bp=(t,e=pu)=>{dt[e]=Fp(dt[e]||Vp,t),ms.forEach(([n,r])=>{n===e&&r(dt[e])})},Hp=t=>Object.keys(dt).forEach(e=>Bp(t,e)),e_=t=>Object.keys(dt).find(e=>dt[e].toasts.some(n=>n.id===t)),yo=(t=pu)=>e=>{Bp(e,t)},t_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},n_=(t={},e=pu)=>{let[n,r]=E.useState(dt[e]||Vp),i=E.useRef(dt[e]);E.useEffect(()=>(i.current!==dt[e]&&r(dt[e]),ms.push([e,r]),()=>{let o=ms.findIndex(([a])=>a===e);o>-1&&ms.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||t_[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},r_=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Xx()}),Ai=t=>(e,n)=>{let r=r_(e,t,n);return yo(r.toasterId||e_(r.id))({type:2,toast:r}),r.id},D=(t,e)=>Ai("blank")(t,e);D.error=Ai("error");D.success=Ai("success");D.loading=Ai("loading");D.custom=Ai("custom");D.dismiss=(t,e)=>{let n={type:3,toastId:t};e?yo(e)(n):Hp(n)};D.dismissAll=t=>D.dismiss(void 0,t);D.remove=(t,e)=>{let n={type:4,toastId:t};e?yo(e)(n):Hp(n)};D.removeAll=t=>D.remove(void 0,t);D.promise=(t,e,n)=>{let r=D.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Qs(e.success,i):void 0;return s?D.success(s,{id:r,...n,...n==null?void 0:n.success}):D.dismiss(r),i}).catch(i=>{let s=e.error?Qs(e.error,i):void 0;s?D.error(s,{id:r,...n,...n==null?void 0:n.error}):D.dismiss(r)}),t};var i_=1e3,s_=(t,e="default")=>{let{toasts:n,pausedAt:r}=n_(t,e),i=E.useRef(new Map).current,s=E.useCallback((h,f=i_)=>{if(i.has(h))return;let y=setTimeout(()=>{i.delete(h),o({type:4,toastId:h})},f);i.set(h,y)},[]);E.useEffect(()=>{if(r)return;let h=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let w=(y.duration||0)+y.pauseDuration-(h-y.createdAt);if(w<0){y.visible&&D.dismiss(y.id);return}return setTimeout(()=>D.dismiss(y.id,e),w)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=E.useCallback(yo(e),[e]),a=E.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=E.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),u=E.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=E.useCallback((h,f)=>{let{reverseOrder:y=!1,gutter:w=8,defaultPosition:_}=f||{},O=n.filter(g=>(g.position||_)===(h.position||_)&&g.height),p=O.findIndex(g=>g.id===h.id),d=O.filter((g,v)=>v<p&&g.visible).length;return O.filter(g=>g.visible).slice(...y?[d+1]:[0,d]).reduce((g,v)=>g+(v.height||0)+w,0)},[n]);return E.useEffect(()=>{n.forEach(h=>{if(h.dismissed)s(h.id,h.removeDelay);else{let f=i.get(h.id);f&&(clearTimeout(f),i.delete(h.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:m}}},o_=Lt`
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
}`,u_=fn("div")`
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
`,d_=fn("div")`
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
}`,p_=fn("div")`
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
`,m_=fn("div")`
  position: absolute;
`,g_=fn("div")`
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
}`,v_=fn("div")`
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
`,k_="0%{opacity:0;} 100%{opacity:1;}",E_="0%{opacity:1;} 100%{opacity:0;}",S_=fn("div")`
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
`,I_=fn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,C_=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=$p()?[k_,E_]:[x_(n),__(n)];return{animation:e?`${Lt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Lt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},N_=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?C_(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(w_,{toast:t}),o=E.createElement(I_,{...t.ariaProps},Qs(t.message,t));return E.createElement(S_,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});qx(E.createElement);var T_=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},P_=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$p()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},b_=go`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Xi=16,Wp=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=s_(n,s);return E.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Xi,left:Xi,right:Xi,bottom:Xi,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(m=>{let h=m.position||e,f=u.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),y=P_(h,f);return E.createElement(T_,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?b_:"",style:y},m.type==="custom"?Qs(m.message,m):i?i(m):E.createElement(N_,{toast:m,position:h}))}))};const R_=()=>c.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),c.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),c.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),c.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});function A_({onGuestLogin:t}){const[e,n]=E.useState(!0),[r,i]=E.useState("email"),[s,o]=E.useState(""),[a,l]=E.useState(""),[u,m]=E.useState(""),[h,f]=E.useState(""),[y,w]=E.useState(""),[_,O]=E.useState(!0),[p,d]=E.useState(!1),[g,v]=E.useState(!1),C=async j=>{j.preventDefault(),d(!0);try{if(await gw(xt,_?bp:cu),e)await hw(xt,a,u),D.success("Successfully logged in!");else{const se=await fw(xt,a,u);await mw(se.user,{displayName:s}),D.success("Account created successfully!")}}catch(se){D.error(se.message.replace("Firebase:","").trim())}finally{d(!1)}},I=async()=>{if(!a){D.error("Please enter your email address first.");return}d(!0);try{await dw(xt,a),D.success("Password reset email sent! Check your inbox.")}catch(j){D.error(j.message.replace("Firebase:","").trim())}finally{d(!1)}},P=async()=>{d(!0);try{const j=new kt;await Yw(xt,j),D.success("Successfully logged in with Google!")}catch(j){D.error(j.message.replace("Firebase:","").trim())}finally{d(!1)}},b=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new $w(xt,"recaptcha-container",{size:"invisible"}))},V=async j=>{if(j.preventDefault(),!h.startsWith("+"))return D.error("Please enter phone number with country code (e.g. +91...)");d(!0);try{b();const se=window.recaptchaVerifier,$e=await Bw(xt,h,se);window.confirmationResult=$e,v(!0),D.success("OTP sent to your phone")}catch(se){D.error(se.message)}finally{d(!1)}},L=async j=>{j.preventDefault(),d(!0);try{await window.confirmationResult.confirm(y),D.success("Phone completely verified!")}catch{D.error("Invalid OTP Code")}finally{d(!1)}};return c.jsxs("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300",children:[c.jsx(Wp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),c.jsxs("div",{className:"w-full max-w-md relative z-10",children:[c.jsxs("div",{className:"mb-10 text-center",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-2",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Studio Edition • Access Portal"})]}),c.jsxs("div",{className:"bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),c.jsxs("button",{type:"button",onClick:P,disabled:p,className:"w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50",children:[c.jsx(R_,{})," Continue with Google"]}),c.jsxs("div",{className:"flex items-center gap-4 mb-6 opacity-30",children:[c.jsx("div",{className:"flex-1 h-px bg-white"}),c.jsx("div",{className:"text-[10px] font-black uppercase text-white tracking-widest",children:"Or Use"}),c.jsx("div",{className:"flex-1 h-px bg-white"})]}),c.jsxs("div",{className:"flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8",children:[c.jsxs("button",{onClick:()=>i("email"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="email"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Vc,{className:"w-4 h-4"})," Email"]}),c.jsxs("button",{onClick:()=>i("phone"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="phone"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[c.jsx(Bc,{className:"w-4 h-4"})," Phone"]})]}),r==="email"&&c.jsxs("form",{onSubmit:C,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[c.jsxs("div",{className:"space-y-4",children:[!e&&c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Vh,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Full Name",value:s,onChange:j=>o(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Vc,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"email",required:!0,placeholder:"Email Address",value:a,onChange:j=>l(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Ya,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"password",required:!0,placeholder:"Password",value:u,onChange:j=>m(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]})]}),e&&c.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 px-1",children:[c.jsxs("label",{className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:j=>O(j.target.checked),className:"rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500"}),"Remember me"]}),c.jsx("button",{type:"button",onClick:I,className:"hover:text-blue-400 transition-colors",children:"Forgot Password?"})]}),c.jsxs("button",{disabled:p,type:"submit",className:"w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[p?"Processing...":e?"Sign In To Studio":"Create Account",!p&&c.jsx($h,{className:"w-4 h-4"})]}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:e?"Don't have an account? Sign Up":"Already have an account? Sign In"})})]}),r==="phone"&&c.jsxs("form",{onSubmit:g?L:V,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[g?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Ya,{className:"h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors"})}),c.jsx("input",{type:"text",required:!0,placeholder:"Enter 6-digit OTP",value:y,onChange:j=>w(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center"})]}),c.jsx("button",{disabled:p,type:"submit",className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50",children:p?"Verifying...":"Verify & Enter"}),c.jsx("div",{className:"text-center mt-4",children:c.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:"Wrong Number? Go Back"})})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:c.jsx(Bc,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),c.jsx("input",{type:"tel",required:!0,placeholder:"+91 99999 99999",value:h,onChange:j=>f(j.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest"})]}),c.jsxs("button",{disabled:p,type:"submit",className:"w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[p?"Sending OTP...":"Send OTP Code",!p&&c.jsx($s,{className:"w-4 h-4"})]})]}),c.jsx("div",{id:"recaptcha-container"})]})]}),c.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600",children:[c.jsxs("button",{type:"button",onClick:t,className:"py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group",children:[c.jsx($s,{className:"w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform"})," Try Studio as Guest"]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2 opacity-50",children:[c.jsx(Fh,{className:"w-3 h-3"})," Secure Google Firebase Authentication"]})]})]})]})}const O_="AIzaSyAfkZmCJiBs2kUl_tOqP2xL2OAdu50xJ5g",L_="gemini-2.5-flash-preview-tts",D_="gemini-2.5-flash",j_=[{id:"Malayalam",native:"മലയാളം"},{id:"English",native:"English"},{id:"Hindi",native:"ഹിन्दी"},{id:"Tamil",native:"தமிழ்"}],M_=[{id:"English",label:"English Sub"},{id:"Malayalam",label:"Malayalam Sub"},{id:"Hindi",label:"Hindi Sub"},{id:"Tamil",label:"Tamil Sub"}],Id=[{id:"Callirrhoe",label:"Lalitha - Matriarch",type:"Female",desc:"Warm, expressive, maternal storytelling."},{id:"Morgan_Legend",label:"Morgan - The Legend",type:"Ultra Bass",desc:"Legendary voice with deep cinematic resonance."},{id:"Charon",label:"Charon - Deep Slow",type:"Slow Bass",desc:"Deep and slow flow."},{id:"Achernar",label:"Achernar - Calm",type:"Professional",desc:"Clear professional voice."}],U_=()=>{var wu,xu;const[t,e]=E.useState("studio"),[n,r]=E.useState("Malayalam"),[i,s]=E.useState("English"),[o,a]=E.useState(!1),[l,u]=E.useState(!1),[m,h]=E.useState(null),[f,y]=E.useState(O_),[w,_]=E.useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"),[O,p]=E.useState(!1),[d,g]=E.useState("Callirrhoe"),[v,C]=E.useState([]),[I,P]=E.useState(null),[b,V]=E.useState([]),[L,j]=E.useState(""),[se,$e]=E.useState(!1),[Dn,hn]=E.useState(null),[jn,kr]=E.useState(!1),[k,A]=E.useState(null),[R,Q]=E.useState(!1),[ne,Mn]=E.useState(!0),[qe,pn]=E.useState(!1),[mt,Je]=E.useState(!1),[z_,Kp]=E.useState(60);E.useEffect(()=>ww(xt,H=>{A(H),H&&Kp(60),Mn(!1)}),[]);const ee=E.useRef(null),Gp=(T,H)=>{const he=new ArrayBuffer(44+T.length*2),W=new DataView(he),Ae=(ve,gt)=>{for(let Ze=0;Ze<gt.length;Ze++)W.setUint8(ve+Ze,gt.charCodeAt(Ze))};Ae(0,"RIFF"),W.setUint32(4,32+T.length*2,!0),Ae(8,"WAVE"),Ae(12,"fmt "),W.setUint32(16,16,!0),W.setUint16(20,1,!0),W.setUint16(22,1,!0),W.setUint32(24,H,!0),W.setUint32(28,H*2,!0),W.setUint16(32,2,!0),W.setUint16(34,16,!0),Ae(36,"data"),W.setUint32(40,T.length*2,!0);let Xe=44;for(let ve=0;ve<T.length;ve++,Xe+=2)W.setInt16(Xe,T[ve],!0);return new Blob([he],{type:"audio/wav"})},mu=T=>T?T.trim().split(/\n\s*\n/).map(he=>{const W=he.split(`
`);if(W.length<3)return null;const Ae=W[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);if(!Ae)return null;const Xe=ve=>{const[gt,Ze,Oi]=ve.split(":"),[Er,_u]=Oi.split(",");return parseInt(gt)*3600+parseInt(Ze)*60+parseInt(Er)+parseInt(_u)/1e3};return{start:Xe(Ae[1]),end:Xe(Ae[2]),text:W.slice(2).join(" ")}}).filter(he=>he!==null):[];E.useEffect(()=>{ee.current=new Audio;const T=()=>{if(!ee.current||b.length===0)return;const H=ee.current.currentTime,he=b.find(W=>H>=W.start&&H<=W.end);j(he?he.text:"")};return ee.current.addEventListener("timeupdate",T),ee.current.onplay=()=>{I&&ee.current.src===I.url&&$e(!0)},ee.current.onpause=()=>{$e(!1),hn(null)},ee.current.onended=()=>{$e(!1),j(""),hn(null)},()=>{var H;return(H=ee.current)==null?void 0:H.removeEventListener("timeupdate",T)}},[b,I]);const gu=async()=>{kr(!0);try{const T="data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";ee.current.src=T,await ee.current.play().then(()=>ee.current.pause())}catch{console.warn("Engine Unlocked")}},yu=async(T,H)=>{if(!f)throw new Error("Gemini API Key is missing. Please enter it in the top right.");const he=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${f}`;let W=0;const Ae=5,Xe=async()=>{const ve=await fetch(he,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});if(!ve.ok){if(ve.status===429)throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");if(W<Ae){W++;const gt=Math.pow(2,W)*1e3;return await new Promise(Ze=>setTimeout(Ze,gt)),Xe()}throw new Error(`System Error: ${ve.status}`)}return await ve.json()};return Xe()},Qp=async()=>{var T,H,he,W,Ae,Xe,ve,gt,Ze,Oi;if(!O){if(!R&&k&&!qe){Je(!0),D.error("Please upgrade to a Studio Pro plan to generate full-length audios!",{icon:"👑"});return}if(jn||await gu(),!!w.trim()){p(!0),h(null);try{let Er=d==="Morgan_Legend"?"Charon":d;const Yp={contents:[{parts:[{text:`${d==="Callirrhoe"?"Speak in a mature, maternal, warm, highly expressive Malayalam female tone like KPAC Lalitha.":"Speak in a clear professional voice with deep cinematic bass."}: ${w}`}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:Er}}}}};let ku=null;if(o){const Sr=`Generate .SRT subtitles in ${i} for: "${w}"`;ku=yu(D_,{contents:[{role:"user",parts:[{text:Sr}]}]})}const[qp,vo]=await Promise.all([yu(L_,Yp),ku]),wo=(Ae=(W=(he=(H=(T=qp.candidates)==null?void 0:T[0])==null?void 0:H.content)==null?void 0:he.parts)==null?void 0:W[0])==null?void 0:Ae.inlineData,Eu=((Oi=(Ze=(gt=(ve=(Xe=vo==null?void 0:vo.candidates)==null?void 0:Xe[0])==null?void 0:ve.content)==null?void 0:gt.parts)==null?void 0:Ze[0])==null?void 0:Oi.text)||"";if(wo){const Sr=atob(wo.data),Su=Sr.length,Iu=new Int16Array(Su/2);for(let mn=0;mn<Su;mn+=2)Iu[mn/2]=Sr.charCodeAt(mn+1)<<8|Sr.charCodeAt(mn);const Jp=parseInt(wo.mimeType.split("rate=")[1])||24e3,Xp=Gp(Iu,Jp),Cu=URL.createObjectURL(Xp),Nu={url:Cu,srt:Eu,srtLang:o?i:"None",text:w.substring(0,40),date:new Date().toLocaleTimeString(),voice:d,timestamp:Date.now()};P(Nu),V(o?mu(Eu):[]),C(mn=>[Nu,...mn]),ee.current.src=Cu}}catch(Er){h(Er.message)}finally{p(!1)}}}};if(ne)return c.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center",children:c.jsx(Fc,{className:"w-10 h-10 text-blue-500 animate-spin"})});if(!k&&!R)return c.jsx(A_,{onGuestLogin:()=>Q(!0)});const vu=c.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:Id.map(T=>c.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${d===T.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>{g(T.id),u(!1)},children:[c.jsx("button",{onClick:H=>{H.stopPropagation(),Dn===T.id?(ee.current.pause(),hn(null)):(hn(T.id),se&&ee.current.pause(),setTimeout(()=>hn(null),3e3))},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${Dn===T.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":d===T.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:Dn===T.id?c.jsx(r1,{className:"w-4 h-4"}):c.jsx(Hc,{className:"w-4 h-4 ml-0.5"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${d===T.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:T.label}),c.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:T.type})]}),d===T.id&&c.jsx(yt,{className:"w-5 h-5 text-blue-500 shrink-0"})]},T.id))});return c.jsxs("div",{className:"h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans",children:[c.jsx(Wp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),mt&&c.jsx("div",{className:"fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500",children:[c.jsx("button",{onClick:()=>Je(!1),className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10",children:c.jsx(Wc,{className:"w-6 h-6"})}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"}),c.jsxs("div",{className:"p-12",children:[c.jsxs("div",{className:"text-center mb-12 relative z-10",children:[c.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-4",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})," PLANS"]}),c.jsx("p",{className:"text-slate-400 max-w-xl mx-auto font-medium",children:"Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities."})]}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:[c.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-emerald-500/30 transition-all group",children:[c.jsx("div",{className:"text-emerald-500 mb-6 bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",children:c.jsx($s,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Starter"}),c.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:"Perfect for testing"}),c.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹99 ",c.jsx("span",{className:"text-sm font-medium text-slate-500",children:"/ 3 Audio"})]}),c.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-emerald-500 shrink-0"})," 3 Audio Generations"]}),c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-emerald-500 shrink-0"})," Standard Quality"]})]}),c.jsx("button",{onClick:()=>{pn(!0),Je(!1),D.success("Starter Plan Activated!",{icon:"💳"})},className:"w-full py-4 bg-white/5 hover:bg-emerald-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Buy Now"})]}),c.jsxs("div",{className:"bg-gradient-to-b from-blue-900/40 to-black/80 border border-blue-500/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20",children:[c.jsx("div",{className:"absolute -top-4 inset-x-0 flex justify-center",children:c.jsx("span",{className:"bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30",children:"Most Popular"})}),c.jsx("div",{className:"text-blue-500 mb-6 bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center",children:c.jsx(u1,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Creator"}),c.jsx("div",{className:"text-blue-200/60 text-sm font-medium mb-6",children:"For serious creators"}),c.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹499 ",c.jsx("span",{className:"text-sm font-medium text-blue-500/50",children:"/ 100 Audio"})]}),c.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-blue-500 shrink-0"})," 100 Audio Generations"]}),c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-blue-500 shrink-0"})," Cinematic Vocals"]}),c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-blue-500 shrink-0"})," SRT Subtitle Export"]})]}),c.jsx("button",{onClick:()=>{pn(!0),Je(!1),D.success("Creator Plan Activated!",{icon:"💳"})},className:"w-full py-4 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Buy Creator"})]}),c.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-amber-500/30 transition-all group",children:[c.jsx("div",{className:"text-amber-500 mb-6 bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",children:c.jsx(Uc,{className:"w-8 h-8"})}),c.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Studio"}),c.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:"Unlimited Everything"}),c.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹999 ",c.jsx("span",{className:"text-sm font-medium text-slate-500",children:"/ Lifetime"})]}),c.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Unlimited Generations"]}),c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Priority Processing"]}),c.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[c.jsx(yt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Commercial Rights"]})]}),c.jsx("button",{onClick:()=>{pn(!0),Je(!1),D.success("Studio Plan Activated!",{icon:"💳"})},className:"w-full py-4 bg-white/5 hover:bg-amber-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Go Unlimited"})]})]})]})]})}),l&&c.jsxs("div",{className:"fixed inset-0 z-[60] lg:hidden flex flex-col justify-end",children:[c.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>u(!1)}),c.jsxs("div",{className:"relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6 shrink-0",children:[c.jsxs("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Ko,{className:"w-4 h-4 sm:w-5 sm:h-5 text-blue-500"})," Choose Voice Model"]}),c.jsx("button",{onClick:()=>u(!1),className:"p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:c.jsx(Wc,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar flex-1 pr-2",children:vu})]})]}),!jn&&c.jsxs("div",{onClick:gu,className:"fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)"},children:[c.jsx("style",{children:`
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
                    `}),c.jsxs("div",{style:{position:"relative",width:"320px",height:"320px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"40px",zIndex:10,flexShrink:0},children:[c.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",animation:"glow-pulse 2.5s ease-in-out infinite"}}),c.jsx("div",{style:{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.2)",animation:"spin-slow 12s linear infinite"},children:c.jsx("div",{style:{position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 14px 4px #3b82f6"}})}),c.jsx("div",{style:{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",border:"1px solid rgba(99,102,241,0.25)",animation:"spin-slow-rev 8s linear infinite"},children:c.jsx("div",{style:{position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:"#818cf8",boxShadow:"0 0 10px 3px #818cf8"}})}),c.jsx("div",{style:{position:"absolute",width:"160px",height:"160px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.15)",animation:"spin-slow 6s linear infinite"}}),c.jsx("div",{style:{position:"relative",zIndex:5,width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)",animation:"float-mic 3s ease-in-out infinite"},children:c.jsx(Zg,{style:{width:"44px",height:"44px",color:"white"}})})]}),c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"5px",height:"40px",marginBottom:"28px",zIndex:10},children:[["bar1","#3b82f6"],["bar2","#6366f1"],["bar3","#3b82f6"],["bar4","#60a5fa"],["bar5","#818cf8"],["bar1","#3b82f6"],["bar2","#6366f1"]].map(([T,H],he)=>c.jsx("div",{className:T,style:{width:"5px",borderRadius:"3px",background:H,opacity:.85}},he))}),c.jsx("h1",{style:{fontSize:"clamp(1rem,5vw,1.5rem)",fontWeight:900,letterSpacing:"0.35em",textTransform:"uppercase",zIndex:10,background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"text-shimmer 3s linear infinite",textAlign:"center",padding:"0 24px"},children:"Vokal Pro Studio"}),c.jsx("p",{style:{marginTop:"10px",fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(148,163,184,0.6)",zIndex:10,fontWeight:700},children:"AI Voice Engine"}),c.jsxs("div",{style:{position:"absolute",bottom:"60px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",zIndex:10},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"tap-bounce 1.5s ease-in-out infinite"},children:c.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",children:c.jsx("path",{d:"M6 1v12M6 13l-4-4M6 13l4-4",stroke:"#3b82f6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(148,163,184,0.45)",fontWeight:700,textTransform:"uppercase"},children:"Tap anywhere"})]})]}),c.jsx("aside",{className:"w-full md:w-20 bg-[#0F1118] border-t md:border-t-0 md:border-r border-white/5 flex md:flex-col items-center py-4 px-6 md:p-0 md:py-10 gap-4 md:gap-8 justify-between shrink-0 z-50 order-last md:order-first",children:c.jsxs("div",{className:"flex md:flex-col gap-4 md:gap-8 items-center w-full md:w-auto justify-between md:justify-start",children:[c.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-xl hidden md:flex items-center justify-center shadow-lg",children:c.jsx(g1,{className:"text-white w-5 h-5"})}),c.jsxs("nav",{className:"flex md:flex-col gap-2 md:gap-6 w-full md:w-auto justify-center",children:[c.jsx("button",{onClick:()=>e("studio"),className:`p-4 rounded-xl transition-all flex-1 md:flex-none flex justify-center ${t==="studio"?"bg-blue-600 text-white shadow-xl shadow-blue-600/20":"text-slate-600 hover:bg-white/5"}`,children:c.jsx(t1,{})}),c.jsx("button",{onClick:()=>e("vault"),className:`p-4 rounded-xl transition-all flex-1 md:flex-none flex justify-center ${t==="vault"?"bg-blue-600 text-white shadow-xl shadow-blue-600/20":"text-slate-600 hover:bg-white/5"}`,children:c.jsx($c,{})})]})]})}),c.jsxs("main",{className:"flex-1 p-6 md:p-12 overflow-y-auto flex flex-col h-full min-h-0 order-first md:order-last",children:[c.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6",children:[c.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[c.jsxs("h2",{className:"text-2xl font-black italic text-white uppercase tracking-tighter",children:["VOKAL ",c.jsx("span",{className:"text-blue-500",children:"PRO"})]}),c.jsx("p",{className:"text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]",children:"Studio Edition"})]}),c.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-4",children:[c.jsx("div",{className:"flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl",children:j_.map(T=>c.jsx("button",{onClick:()=>r(T.id),className:`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${n===T.id?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-slate-300 hover:bg-white/5"}`,children:T.native},T.id))}),c.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl",children:[c.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0",children:k!=null&&k.photoURL?c.jsx("img",{src:k.photoURL,alt:"User",className:"w-full h-full object-cover"}):c.jsx(Vh,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})}),c.jsxs("div",{className:"flex flex-col text-left justify-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]",children:k?k.displayName||((wu=k.email)==null?void 0:wu.split("@")[0])||k.phoneNumber:"Guest User"}),qe?c.jsxs("span",{className:"text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[c.jsx(Uc,{className:"w-3 h-3"})," Studio Pro"]}):R?c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Tryout Mode"}):c.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Free User"})]}),c.jsx("div",{className:"w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"}),c.jsx("button",{onClick:()=>{R?(Q(!1),D.success("Please sign in to continue")):xw(xt).then(()=>D.success("Signed out"))},className:"p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0",title:R?"Sign In":"Sign Out",children:R?c.jsx(Ya,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"}):c.jsx(qg,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"})})]})]})]}),t==="studio"&&c.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 flex-1 min-h-0",children:[c.jsxs("div",{className:"flex-1 flex flex-col gap-6 h-full",children:[m&&c.jsxs("div",{className:"p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4",children:[c.jsx(Fh,{className:"w-5 h-5 shrink-0"})," ",m]}),c.jsxs("div",{className:"flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border border-white/5 shadow-2xl p-1 flex flex-col transition-all duration-500 hover:border-blue-500/30",children:[c.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"}),c.jsx("textarea",{value:w,onChange:T=>{R&&T.target.value.length>50?(D.error("Guest Limit Exceeded (5s limit). Please create an account for unlimited access!",{icon:"🔒"}),_(T.target.value.substring(0,50))):!R&&k&&!qe&&T.target.value.length>800?(D.error("Free Plan Limit Exceeded (1 min limit). Upgrade to create longer audios!",{icon:"👑"}),Je(!0),_(T.target.value.substring(0,800))):_(T.target.value)},placeholder:"Type or paste your script here...",className:"flex-1 w-full min-h-[150px] lg:h-auto bg-transparent p-6 sm:p-10 outline-none text-lg sm:text-xl lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"})]}),c.jsxs("div",{className:"shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"}),c.jsxs("div",{className:"relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>a(!o),className:`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${o?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10":"bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300"}`,children:[o?c.jsx(h1,{className:"w-5 h-5"}):c.jsx(d1,{className:"w-5 h-5"})," Auto Subtitles"]}),o&&c.jsx("div",{className:"flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto",children:M_.map(T=>c.jsx("button",{onClick:()=>s(T.id),className:`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${i===T.id?"bg-white text-black border-white shadow-lg shadow-white/10":"bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300"}`,children:T.label},T.id))})]}),c.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10",children:[c.jsxs("button",{onClick:()=>u(!0),className:"lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95",children:[c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx(Ko,{className:"w-4 h-4 text-blue-500"})," Voice: ",((xu=Id.find(T=>T.id===d))==null?void 0:xu.label)||"Select"]}),c.jsx($h,{className:"w-4 h-4"})]}),c.jsxs("button",{onClick:Qp,disabled:O||!w.trim(),className:"w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale",children:[O?c.jsx(Fc,{className:"animate-spin w-5 h-5"}):c.jsx(a1,{className:"w-5 h-5"})," ",O?"Synthesizing...":"Generate Master"]})]})]})]}),c.jsxs("div",{className:"w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full pb-8 md:pb-0",children:[c.jsxs("div",{className:"hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group",children:[c.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3",children:[c.jsx(Ko,{className:"w-4 h-4 text-blue-500"})," Voice Models"]}),vu]}),c.jsxs("div",{className:"flex-1 bg-gradient-to-br from-[#050505] to-[#0A0B10] p-8 rounded-[2.5rem] border border-white/5 flex flex-col shadow-inner min-h-[160px] relative overflow-hidden group mb-6 lg:mb-0",children:[c.jsx("div",{className:"absolute -inset-10 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"}),c.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-2",children:[c.jsx(Vg,{className:"w-3 h-3 text-blue-500/60"})," Subtitle Engine"]}),c.jsx("div",{className:"relative z-10 mt-6 flex-1 flex items-center justify-center text-center",children:c.jsx("p",{className:`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${L?"text-white drop-shadow-md":"text-slate-600 italic"}`,children:L||"Awaiting Audio..."})})]}),I&&c.jsxs("div",{className:"shrink-0 bg-gradient-to-br from-blue-950/40 to-black backdrop-blur-3xl p-8 rounded-[2.5rem] border border-blue-500/30 flex flex-col gap-6 animate-in slide-in-from-bottom-8 fade-in duration-500 shadow-2xl shadow-blue-900/20 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-blue-500/5 mix-blend-overlay"}),c.jsx("div",{className:"absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"}),c.jsxs("div",{className:"relative z-10 flex items-center gap-4",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20 text-blue-400 flex items-center justify-center animate-pulse shadow-inner",children:c.jsx($s,{className:"w-6 h-6"})}),c.jsxs("div",{children:[c.jsx("div",{className:"text-white font-bold text-base",children:"Master Export Ready"}),c.jsx("div",{className:"text-[10px] text-blue-400/80 uppercase tracking-widest font-bold mt-1",children:"Lossless Studio Quality"})]})]}),c.jsxs("button",{onClick:()=>{ee.current.src!==I.url&&(ee.current.src=I.url),se?ee.current.pause():(ee.current.play(),$e(!0))},className:"relative z-10 w-full py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-3 transition-colors shadow-xl",children:[se?c.jsx(jg,{className:"w-5 h-5"}):c.jsx(Ug,{className:"w-5 h-5"})," ",se?"Pause Playback":"Play Master Track"]}),c.jsxs("div",{className:"relative z-10 flex gap-4",children:[c.jsxs("a",{href:I.url,download:"master_audio.wav",className:"flex-1 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white py-4 rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30",children:[c.jsx(zc,{className:"w-4 h-4"})," WAV HQ"]}),I.srt&&c.jsxs("button",{onClick:()=>{const T=new Blob([I.srt],{type:"text/plain"}),H=document.createElement("a");H.href=URL.createObjectURL(T),H.download="subtitles.srt",H.click()},className:"flex-1 bg-black/60 hover:bg-black/80 text-blue-100 py-4 rounded-xl text-[10px] font-black uppercase border border-blue-500/30 flex items-center justify-center gap-2 transition-colors hover:border-blue-500/50",children:[c.jsx(Hg,{className:"w-4 h-4 text-blue-400"})," SRT"]})]})]})]})]}),t==="vault"&&(v.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60",children:[c.jsx("div",{className:"w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl",children:c.jsx($c,{className:"w-10 h-10 text-slate-500"})}),c.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest mb-2",children:"Vault is Empty"}),c.jsx("p",{className:"text-sm font-medium text-slate-500 max-w-sm",children:"You haven't generated any studio audio yet. Go back to the studio to brew some magic."}),c.jsx("button",{onClick:()=>e("studio"),className:"mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20",children:"Go to Studio"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500",children:v.map(T=>c.jsxs("div",{className:"bg-[#0F1118] p-6 rounded-[2rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl",children:[c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("button",{onClick:()=>{ee.current.src=T.url,V(T.srt?mu(T.srt):[]),ee.current.play()},className:"w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner",children:c.jsx(Hc,{className:"w-5 h-5 fill-current ml-1"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm font-bold text-white italic line-clamp-1",children:['"',T.text,'..."']}),c.jsxs("div",{className:"text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest",children:[T.voice," • ",T.date]})]})]}),c.jsx("a",{href:T.url,download:!0,className:"p-3 text-slate-500 hover:text-white transition-colors",children:c.jsx(zc,{className:"w-5 h-5"})})]},T.timestamp))}))]})]})};na.createRoot(document.getElementById("root")).render(c.jsx(mm.StrictMode,{children:c.jsx(U_,{})}));
