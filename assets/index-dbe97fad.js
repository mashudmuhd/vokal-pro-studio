(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function om(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jd={exports:{}},Xs={},Ld={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),am=Symbol.for("react.portal"),lm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),cm=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),pm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),gm=Symbol.for("react.lazy"),Du=Symbol.iterator;function ym(t){return t===null||typeof t!="object"?null:(t=Du&&t[Du]||t["@@iterator"],typeof t=="function"?t:null)}var Dd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Md=Object.assign,Ud={};function yr(t,e,n){this.props=t,this.context=e,this.refs=Ud,this.updater=n||Dd}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zd(){}zd.prototype=yr.prototype;function ml(t,e,n){this.props=t,this.context=e,this.refs=Ud,this.updater=n||Dd}var gl=ml.prototype=new zd;gl.constructor=ml;Md(gl,yr.prototype);gl.isPureReactComponent=!0;var Mu=Array.isArray,$d=Object.prototype.hasOwnProperty,yl={current:null},Fd={key:!0,ref:!0,__self:!0,__source:!0};function Vd(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$d.call(e,r)&&!Fd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Si,type:t,key:s,ref:o,props:i,_owner:yl.current}}function vm(t,e){return{$$typeof:Si,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Si}function wm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uu=/\/+/g;function Io(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wm(""+t.key):e.toString(36)}function ns(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Si:case am:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Io(o,0):r,Mu(i)?(n="",t!=null&&(n=t.replace(Uu,"$&/")+"/"),ns(i,e,n,"",function(c){return c})):i!=null&&(vl(i)&&(i=vm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mu(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Io(s,a);o+=ns(s,e,n,l,i)}else if(l=ym(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Io(s,a++),o+=ns(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mi(t,e,n){if(t==null)return t;var r=[],i=0;return ns(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ee={current:null},rs={transition:null},km={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:rs,ReactCurrentOwner:yl};function Bd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Mi,forEach:function(t,e,n){Mi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Mi(t,function(){e++}),e},toArray:function(t){return Mi(t,function(e){return e})||[]},only:function(t){if(!vl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=yr;M.Fragment=lm;M.Profiler=cm;M.PureComponent=ml;M.StrictMode=um;M.Suspense=pm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;M.act=Bd;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Md({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$d.call(e,l)&&!Fd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Si,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:fm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dm,_context:t},t.Consumer=t};M.createElement=Vd;M.createFactory=function(t){var e=Vd.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:hm,render:t}};M.isValidElement=vl;M.lazy=function(t){return{$$typeof:gm,_payload:{_status:-1,_result:t},_init:xm}};M.memo=function(t,e){return{$$typeof:mm,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=rs.transition;rs.transition={};try{t()}finally{rs.transition=e}};M.unstable_act=Bd;M.useCallback=function(t,e){return Ee.current.useCallback(t,e)};M.useContext=function(t){return Ee.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Ee.current.useDeferredValue(t)};M.useEffect=function(t,e){return Ee.current.useEffect(t,e)};M.useId=function(){return Ee.current.useId()};M.useImperativeHandle=function(t,e,n){return Ee.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Ee.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Ee.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Ee.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Ee.current.useReducer(t,e,n)};M.useRef=function(t){return Ee.current.useRef(t)};M.useState=function(t){return Ee.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Ee.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Ee.current.useTransition()};M.version="18.3.1";Ld.exports=M;var E=Ld.exports;const _m=om(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=E,Sm=Symbol.for("react.element"),Im=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,Cm=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nm={key:!0,ref:!0,__self:!0,__source:!0};function Hd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bm.call(e,r)&&!Nm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Sm,type:t,key:s,ref:o,props:i,_owner:Cm.current}}Xs.Fragment=Im;Xs.jsx=Hd;Xs.jsxs=Hd;jd.exports=Xs;var u=jd.exports,da={},Wd={exports:{}},Fe={},Gd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(_,A){var D=_.length;_.push(A);e:for(;0<D;){var J=D-1>>>1,Y=_[J];if(0<i(Y,A))_[J]=A,_[D]=Y,D=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],D=_.pop();if(D!==A){_[0]=D;e:for(var J=0,Y=_.length,Ut=Y>>>1;J<Ut;){var vt=2*(J+1)-1,Xe=_[vt],zt=vt+1,Mn=_[zt];if(0>i(Xe,D))zt<Y&&0>i(Mn,Xe)?(_[J]=Mn,_[zt]=D,J=zt):(_[J]=Xe,_[vt]=D,J=vt);else if(zt<Y&&0>i(Mn,D))_[J]=Mn,_[zt]=D,J=zt;else break e}}return A}function i(_,A){var D=_.sortIndex-A.sortIndex;return D!==0?D:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],m=1,h=null,f=3,y=!1,w=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=_)r(c),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(c)}}function v(_){if(k=!1,g(_),!w)if(n(l)!==null)w=!0,G(I);else{var A=n(c);A!==null&&Er(v,A.startTime-_)}}function I(_,A){w=!1,k&&(k=!1,p(P),P=-1),y=!0;var D=f;try{for(g(A),h=n(l);h!==null&&(!(h.expirationTime>A)||_&&!L());){var J=h.callback;if(typeof J=="function"){h.callback=null,f=h.priorityLevel;var Y=J(h.expirationTime<=A);A=t.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(l)&&r(l),g(A)}else r(l);h=n(l)}if(h!==null)var Ut=!0;else{var vt=n(c);vt!==null&&Er(v,vt.startTime-A),Ut=!1}return Ut}finally{h=null,f=D,y=!1}}var N=!1,T=null,P=-1,H=5,j=-1;function L(){return!(t.unstable_now()-j<H)}function ue(){if(T!==null){var _=t.unstable_now();j=_;var A=!0;try{A=T(!0,_)}finally{A?Le():(N=!1,T=null)}}else N=!1}var Le;if(typeof d=="function")Le=function(){d(ue)};else if(typeof MessageChannel<"u"){var _r=new MessageChannel,ko=_r.port2;_r.port1.onmessage=ue,Le=function(){ko.postMessage(null)}}else Le=function(){R(ue,0)};function G(_){T=_,N||(N=!0,Le())}function Er(_,A){P=R(function(){_(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,G(I))},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(_){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var D=f;f=A;try{return _()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=f;f=_;try{return A()}finally{f=D}},t.unstable_scheduleCallback=function(_,A,D){var J=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,_){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,_={id:m++,callback:A,priorityLevel:_,startTime:D,expirationTime:Y,sortIndex:-1},D>J?(_.sortIndex=D,e(c,_),n(l)===null&&_===n(c)&&(k?(p(P),P=-1):k=!0,Er(v,D-J))):(_.sortIndex=Y,e(l,_),w||y||(w=!0,G(I))),_},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(_){var A=f;return function(){var D=f;f=A;try{return _.apply(this,arguments)}finally{f=D}}}})(Kd);Gd.exports=Kd;var Tm=Gd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=E,$e=Tm;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qd=new Set,ii={};function Ln(t,e){ar(t,e),ar(t+"Capture",e)}function ar(t,e){for(ii[t]=e,t=0;t<e.length;t++)Qd.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zu={},$u={};function Am(t){return fa.call($u,t)?!0:fa.call(zu,t)?!1:Rm.test(t)?$u[t]=!0:(zu[t]=!0,!1)}function Om(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jm(t,e,n,r){if(e===null||typeof e>"u"||Om(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Se(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new Se(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new Se(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new Se(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new Se(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new Se(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new Se(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new Se(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new Se(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new Se(t,5,!1,t.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function xl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wl,xl);pe[e]=new Se(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wl,xl);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wl,xl);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!0,!0)});function kl(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jm(e,n,i,r)&&(n=null),r||i===null?Am(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mt=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),zn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),Yd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Jd=Symbol.for("react.offscreen"),Fu=Symbol.iterator;function Cr(t){return t===null||typeof t!="object"?null:(t=Fu&&t[Fu]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,bo;function Dr(t){if(bo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bo=e&&e[1]||""}return`
`+bo+t}var Co=!1;function No(t,e){if(!t||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Dr(t):""}function Lm(t){switch(t.tag){case 5:return Dr(t.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return t=No(t.type,!1),t;case 11:return t=No(t.type.render,!1),t;case 1:return t=No(t.type,!0),t;default:return""}}function ga(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $n:return"Fragment";case zn:return"Portal";case ha:return"Profiler";case _l:return"StrictMode";case pa:return"Suspense";case ma:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qd:return(t.displayName||"Context")+".Consumer";case Yd:return(t._context.displayName||"Context")+".Provider";case El:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sl:return e=t.displayName||null,e!==null?e:ga(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return ga(t(e))}catch{}}return null}function Dm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(e);case 8:return e===_l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mm(t){var e=Xd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zi(t){t._valueTracker||(t._valueTracker=Mm(t))}function Zd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ya(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ef(t,e){e=e.checked,e!=null&&kl(t,"checked",e,!1)}function va(t,e){ef(t,e);var n=un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&wa(t,e.type,un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wa(t,e,n){(e!=="number"||xs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mr=Array.isArray;function Jn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Mr(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:un(n)}}function tf(t,e){var n=un(e.value),r=un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $i,rf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$i.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function si(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Um=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(t){Um.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Br[e]=Br[t]})});function sf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Br.hasOwnProperty(t)&&Br[t]?(""+e).trim():e+"px"}function of(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(t,e){if(e){if(zm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Il(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,Xn=null,Zn=null;function Gu(t){if(t=Ci(t)){if(typeof Ia!="function")throw Error(x(280));var e=t.stateNode;e&&(e=ro(e),Ia(t.stateNode,t.type,e))}}function af(t){Xn?Zn?Zn.push(t):Zn=[t]:Xn=t}function lf(){if(Xn){var t=Xn,e=Zn;if(Zn=Xn=null,Gu(t),e)for(t=0;t<e.length;t++)Gu(e[t])}}function uf(t,e){return t(e)}function cf(){}var To=!1;function df(t,e,n){if(To)return t(e,n);To=!0;try{return uf(t,e,n)}finally{To=!1,(Xn!==null||Zn!==null)&&(cf(),lf())}}function oi(t,e){var n=t.stateNode;if(n===null)return null;var r=ro(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var ba=!1;if(Pt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{ba=!1}function $m(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(m){this.onError(m)}}var Hr=!1,ks=null,_s=!1,Ca=null,Fm={onError:function(t){Hr=!0,ks=t}};function Vm(t,e,n,r,i,s,o,a,l){Hr=!1,ks=null,$m.apply(Fm,arguments)}function Bm(t,e,n,r,i,s,o,a,l){if(Vm.apply(this,arguments),Hr){if(Hr){var c=ks;Hr=!1,ks=null}else throw Error(x(198));_s||(_s=!0,Ca=c)}}function Dn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ff(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ku(t){if(Dn(t)!==t)throw Error(x(188))}function Hm(t){var e=t.alternate;if(!e){if(e=Dn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ku(i),t;if(s===r)return Ku(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function hf(t){return t=Hm(t),t!==null?pf(t):null}function pf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pf(t);if(e!==null)return e;t=t.sibling}return null}var mf=$e.unstable_scheduleCallback,Qu=$e.unstable_cancelCallback,Wm=$e.unstable_shouldYield,Gm=$e.unstable_requestPaint,re=$e.unstable_now,Km=$e.unstable_getCurrentPriorityLevel,bl=$e.unstable_ImmediatePriority,gf=$e.unstable_UserBlockingPriority,Es=$e.unstable_NormalPriority,Qm=$e.unstable_LowPriority,yf=$e.unstable_IdlePriority,Zs=null,mt=null;function Ym(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Zs,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Xm,qm=Math.log,Jm=Math.LN2;function Xm(t){return t>>>=0,t===0?32:31-(qm(t)/Jm|0)|0}var Fi=64,Vi=4194304;function Ur(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ss(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ur(a):(s&=o,s!==0&&(r=Ur(s)))}else o=n&~i,o!==0?r=Ur(o):s!==0&&(r=Ur(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Zm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zm(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vf(){var t=Fi;return Fi<<=1,!(Fi&4194240)&&(Fi=64),t}function Po(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ii(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function t0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function wf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xf,Nl,kf,_f,Ef,Ta=!1,Bi=[],Xt=null,Zt=null,en=null,ai=new Map,li=new Map,Ht=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(e.pointerId)}}function Tr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ci(e),e!==null&&Nl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function r0(t,e,n,r,i){switch(e){case"focusin":return Xt=Tr(Xt,t,e,n,r,i),!0;case"dragenter":return Zt=Tr(Zt,t,e,n,r,i),!0;case"mouseover":return en=Tr(en,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ai.set(s,Tr(ai.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,li.set(s,Tr(li.get(s)||null,t,e,n,r,i)),!0}return!1}function Sf(t){var e=kn(t.target);if(e!==null){var n=Dn(e);if(n!==null){if(e=n.tag,e===13){if(e=ff(n),e!==null){t.blockedOn=e,Ef(t.priority,function(){kf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function is(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=Ci(n),e!==null&&Nl(e),t.blockedOn=n,!1;e.shift()}return!0}function qu(t,e,n){is(t)&&n.delete(e)}function i0(){Ta=!1,Xt!==null&&is(Xt)&&(Xt=null),Zt!==null&&is(Zt)&&(Zt=null),en!==null&&is(en)&&(en=null),ai.forEach(qu),li.forEach(qu)}function Pr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ta||(Ta=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,i0)))}function ui(t){function e(i){return Pr(i,t)}if(0<Bi.length){Pr(Bi[0],t);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Pr(Xt,t),Zt!==null&&Pr(Zt,t),en!==null&&Pr(en,t),ai.forEach(e),li.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Sf(n),n.blockedOn===null&&Ht.shift()}var er=Mt.ReactCurrentBatchConfig,Is=!0;function s0(t,e,n,r){var i=$,s=er.transition;er.transition=null;try{$=1,Tl(t,e,n,r)}finally{$=i,er.transition=s}}function o0(t,e,n,r){var i=$,s=er.transition;er.transition=null;try{$=4,Tl(t,e,n,r)}finally{$=i,er.transition=s}}function Tl(t,e,n,r){if(Is){var i=Pa(t,e,n,r);if(i===null)$o(t,e,r,bs,n),Yu(t,r);else if(r0(i,t,e,n,r))r.stopPropagation();else if(Yu(t,r),e&4&&-1<n0.indexOf(t)){for(;i!==null;){var s=Ci(i);if(s!==null&&xf(s),s=Pa(t,e,n,r),s===null&&$o(t,e,r,bs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $o(t,e,r,null,n)}}var bs=null;function Pa(t,e,n,r){if(bs=null,t=Il(r),t=kn(t),t!==null)if(e=Dn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ff(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bs=t,null}function If(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case bl:return 1;case gf:return 4;case Es:case Qm:return 16;case yf:return 536870912;default:return 16}default:return 16}}var qt=null,Pl=null,ss=null;function bf(){if(ss)return ss;var t,e=Pl,n=e.length,r,i="value"in qt?qt.value:qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ss=i.slice(t,1<r?1-r:void 0)}function os(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hi(){return!0}function Ju(){return!1}function Ve(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hi:Ju,this.isPropagationStopped=Ju,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),e}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ve(vr),bi=ee({},vr,{view:0,detail:0}),a0=Ve(bi),Ro,Ao,Rr,eo=ee({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rr&&(Rr&&t.type==="mousemove"?(Ro=t.screenX-Rr.screenX,Ao=t.screenY-Rr.screenY):Ao=Ro=0,Rr=t),Ro)},movementY:function(t){return"movementY"in t?t.movementY:Ao}}),Xu=Ve(eo),l0=ee({},eo,{dataTransfer:0}),u0=Ve(l0),c0=ee({},bi,{relatedTarget:0}),Oo=Ve(c0),d0=ee({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=Ve(d0),h0=ee({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=Ve(h0),m0=ee({},vr,{data:0}),Zu=Ve(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v0[t])?!!e[t]:!1}function Al(){return w0}var x0=ee({},bi,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=os(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(t){return t.type==="keypress"?os(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?os(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Ve(x0),_0=ee({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=Ve(_0),E0=ee({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),S0=Ve(E0),I0=ee({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=Ve(I0),C0=ee({},eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=Ve(C0),T0=[9,13,27,32],Ol=Pt&&"CompositionEvent"in window,Wr=null;Pt&&"documentMode"in document&&(Wr=document.documentMode);var P0=Pt&&"TextEvent"in window&&!Wr,Cf=Pt&&(!Ol||Wr&&8<Wr&&11>=Wr),tc=String.fromCharCode(32),nc=!1;function Nf(t,e){switch(t){case"keyup":return T0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fn=!1;function R0(t,e){switch(t){case"compositionend":return Tf(e);case"keypress":return e.which!==32?null:(nc=!0,tc);case"textInput":return t=e.data,t===tc&&nc?null:t;default:return null}}function A0(t,e){if(Fn)return t==="compositionend"||!Ol&&Nf(t,e)?(t=bf(),ss=Pl=qt=null,Fn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cf&&e.locale!=="ko"?null:e.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O0[t.type]:e==="textarea"}function Pf(t,e,n,r){af(r),e=Cs(e,"onChange"),0<e.length&&(n=new Rl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gr=null,ci=null;function j0(t){Ff(t,0)}function to(t){var e=Hn(t);if(Zd(e))return t}function L0(t,e){if(t==="change")return e}var Rf=!1;if(Pt){var jo;if(Pt){var Lo="oninput"in document;if(!Lo){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),Lo=typeof ic.oninput=="function"}jo=Lo}else jo=!1;Rf=jo&&(!document.documentMode||9<document.documentMode)}function sc(){Gr&&(Gr.detachEvent("onpropertychange",Af),ci=Gr=null)}function Af(t){if(t.propertyName==="value"&&to(ci)){var e=[];Pf(e,ci,t,Il(t)),df(j0,e)}}function D0(t,e,n){t==="focusin"?(sc(),Gr=e,ci=n,Gr.attachEvent("onpropertychange",Af)):t==="focusout"&&sc()}function M0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return to(ci)}function U0(t,e){if(t==="click")return to(e)}function z0(t,e){if(t==="input"||t==="change")return to(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:$0;function di(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fa.call(e,i)||!at(t[i],e[i]))return!1}return!0}function oc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ac(t,e){var n=oc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oc(n)}}function Of(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Of(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jf(){for(var t=window,e=xs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xs(t.document)}return e}function jl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F0(t){var e=jf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Of(n.ownerDocument.documentElement,n)){if(r!==null&&jl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ac(n,s);var o=ac(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V0=Pt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ra=null,Kr=null,Aa=!1;function lc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||Vn==null||Vn!==xs(r)||(r=Vn,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&di(Kr,r)||(Kr=r,r=Cs(Ra,"onSelect"),0<r.length&&(e=new Rl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vn)))}function Wi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bn={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Do={},Lf={};Pt&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function no(t){if(Do[t])return Do[t];if(!Bn[t])return t;var e=Bn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lf)return Do[t]=e[n];return t}var Df=no("animationend"),Mf=no("animationiteration"),Uf=no("animationstart"),zf=no("transitionend"),$f=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(t,e){$f.set(t,e),Ln(e,[t])}for(var Mo=0;Mo<uc.length;Mo++){var Uo=uc[Mo],B0=Uo.toLowerCase(),H0=Uo[0].toUpperCase()+Uo.slice(1);dn(B0,"on"+H0)}dn(Df,"onAnimationEnd");dn(Mf,"onAnimationIteration");dn(Uf,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(zf,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function cc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bm(r,e,void 0,t),t.currentTarget=null}function Ff(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cc(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cc(i,a,c),s=l}}}if(_s)throw t=Ca,_s=!1,Ca=null,t}function K(t,e){var n=e[Ma];n===void 0&&(n=e[Ma]=new Set);var r=t+"__bubble";n.has(r)||(Vf(e,t,2,!1),n.add(r))}function zo(t,e,n){var r=0;e&&(r|=4),Vf(n,t,r,e)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function fi(t){if(!t[Gi]){t[Gi]=!0,Qd.forEach(function(n){n!=="selectionchange"&&(W0.has(n)||zo(n,!1,t),zo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gi]||(e[Gi]=!0,zo("selectionchange",!1,e))}}function Vf(t,e,n,r){switch(If(e)){case 1:var i=s0;break;case 4:i=o0;break;default:i=Tl}n=i.bind(null,e,n,t),i=void 0,!ba||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $o(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}df(function(){var c=s,m=Il(n),h=[];e:{var f=$f.get(t);if(f!==void 0){var y=Rl,w=t;switch(t){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":y=k0;break;case"focusin":w="focus",y=Oo;break;case"focusout":w="blur",y=Oo;break;case"beforeblur":case"afterblur":y=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=S0;break;case Df:case Mf:case Uf:y=f0;break;case zf:y=b0;break;case"scroll":y=a0;break;case"wheel":y=N0;break;case"copy":case"cut":case"paste":y=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ec}var k=(e&4)!==0,R=!k&&t==="scroll",p=k?f!==null?f+"Capture":null:f;k=[];for(var d=c,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=oi(d,p),v!=null&&k.push(hi(d,v,g)))),R)break;d=d.return}0<k.length&&(f=new y(f,w,null,n,m),h.push({event:f,listeners:k}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Sa&&(w=n.relatedTarget||n.fromElement)&&(kn(w)||w[Rt]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?kn(w):null,w!==null&&(R=Dn(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=Xu,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(k=ec,v="onPointerLeave",p="onPointerEnter",d="pointer"),R=y==null?f:Hn(y),g=w==null?f:Hn(w),f=new k(v,d+"leave",y,n,m),f.target=R,f.relatedTarget=g,v=null,kn(m)===c&&(k=new k(p,d+"enter",w,n,m),k.target=g,k.relatedTarget=R,v=k),R=v,y&&w)t:{for(k=y,p=w,d=0,g=k;g;g=Un(g))d++;for(g=0,v=p;v;v=Un(v))g++;for(;0<d-g;)k=Un(k),d--;for(;0<g-d;)p=Un(p),g--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=Un(k),p=Un(p)}k=null}else k=null;y!==null&&dc(h,f,y,k,!1),w!==null&&R!==null&&dc(h,R,w,k,!0)}}e:{if(f=c?Hn(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var I=L0;else if(rc(f))if(Rf)I=z0;else{I=M0;var N=D0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=U0);if(I&&(I=I(t,c))){Pf(h,I,n,m);break e}N&&N(t,f,c),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&wa(f,"number",f.value)}switch(N=c?Hn(c):window,t){case"focusin":(rc(N)||N.contentEditable==="true")&&(Vn=N,Ra=c,Kr=null);break;case"focusout":Kr=Ra=Vn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,lc(h,n,m);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":lc(h,n,m)}var T;if(Ol)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fn?Nf(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Cf&&n.locale!=="ko"&&(Fn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fn&&(T=bf()):(qt=m,Pl="value"in qt?qt.value:qt.textContent,Fn=!0)),N=Cs(c,P),0<N.length&&(P=new Zu(P,t,null,n,m),h.push({event:P,listeners:N}),T?P.data=T:(T=Tf(n),T!==null&&(P.data=T)))),(T=P0?R0(t,n):A0(t,n))&&(c=Cs(c,"onBeforeInput"),0<c.length&&(m=new Zu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=T))}Ff(h,e)})}function hi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oi(t,n),s!=null&&r.unshift(hi(t,s,i)),s=oi(t,e),s!=null&&r.push(hi(t,s,i))),t=t.return}return r}function Un(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=oi(n,s),l!=null&&o.unshift(hi(n,l,a))):i||(l=oi(n,s),l!=null&&o.push(hi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function fc(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(K0,"")}function Ki(t,e,n){if(e=fc(e),fc(t)!==e&&n)throw Error(x(425))}function Ns(){}var Oa=null,ja=null;function La(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,hc=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof hc<"u"?function(t){return hc.resolve(null).then(t).catch(q0)}:Da;function q0(t){setTimeout(function(){throw t})}function Fo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(e)}function tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wr=Math.random().toString(36).slice(2),ht="__reactFiber$"+wr,pi="__reactProps$"+wr,Rt="__reactContainer$"+wr,Ma="__reactEvents$"+wr,J0="__reactListeners$"+wr,X0="__reactHandles$"+wr;function kn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rt]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pc(t);t!==null;){if(n=t[ht])return n;t=pc(t)}return e}t=n,n=t.parentNode}return null}function Ci(t){return t=t[ht]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function ro(t){return t[pi]||null}var Ua=[],Wn=-1;function fn(t){return{current:t}}function Q(t){0>Wn||(t.current=Ua[Wn],Ua[Wn]=null,Wn--)}function W(t,e){Wn++,Ua[Wn]=t.current,t.current=e}var cn={},ve=fn(cn),Pe=fn(!1),Nn=cn;function lr(t,e){var n=t.type.contextTypes;if(!n)return cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Re(t){return t=t.childContextTypes,t!=null}function Ts(){Q(Pe),Q(ve)}function mc(t,e,n){if(ve.current!==cn)throw Error(x(168));W(ve,e),W(Pe,n)}function Bf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Dm(t)||"Unknown",i));return ee({},n,r)}function Ps(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cn,Nn=ve.current,W(ve,t),W(Pe,Pe.current),!0}function gc(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Bf(t,e,Nn),r.__reactInternalMemoizedMergedChildContext=t,Q(Pe),Q(ve),W(ve,t)):Q(Pe),W(Pe,n)}var Et=null,io=!1,Vo=!1;function Hf(t){Et===null?Et=[t]:Et.push(t)}function Z0(t){io=!0,Hf(t)}function hn(){if(!Vo&&Et!==null){Vo=!0;var t=0,e=$;try{var n=Et;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,io=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),mf(bl,hn),i}finally{$=e,Vo=!1}}return null}var Gn=[],Kn=0,Rs=null,As=0,Be=[],He=0,Tn=null,It=1,bt="";function vn(t,e){Gn[Kn++]=As,Gn[Kn++]=Rs,Rs=t,As=e}function Wf(t,e,n){Be[He++]=It,Be[He++]=bt,Be[He++]=Tn,Tn=t;var r=It;t=bt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-st(e)+i|n<<i|r,bt=s+t}else It=1<<s|n<<i|r,bt=t}function Ll(t){t.return!==null&&(vn(t,1),Wf(t,1,0))}function Dl(t){for(;t===Rs;)Rs=Gn[--Kn],Gn[Kn]=null,As=Gn[--Kn],Gn[Kn]=null;for(;t===Tn;)Tn=Be[--He],Be[He]=null,bt=Be[--He],Be[He]=null,It=Be[--He],Be[He]=null}var ze=null,Ue=null,q=!1,rt=null;function Gf(t,e){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Ue=tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tn!==null?{id:It,overflow:bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Ue=null,!0):!1;default:return!1}}function za(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $a(t){if(q){var e=Ue;if(e){var n=e;if(!yc(t,e)){if(za(t))throw Error(x(418));e=tn(n.nextSibling);var r=ze;e&&yc(t,e)?Gf(r,n):(t.flags=t.flags&-4097|2,q=!1,ze=t)}}else{if(za(t))throw Error(x(418));t.flags=t.flags&-4097|2,q=!1,ze=t}}}function vc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function Qi(t){if(t!==ze)return!1;if(!q)return vc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!La(t.type,t.memoizedProps)),e&&(e=Ue)){if(za(t))throw Kf(),Error(x(418));for(;e;)Gf(t,e),e=tn(e.nextSibling)}if(vc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=tn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=ze?tn(t.stateNode.nextSibling):null;return!0}function Kf(){for(var t=Ue;t;)t=tn(t.nextSibling)}function ur(){Ue=ze=null,q=!1}function Ml(t){rt===null?rt=[t]:rt.push(t)}var eg=Mt.ReactCurrentBatchConfig;function Ar(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Yi(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wc(t){var e=t._init;return e(t._payload)}function Qf(t){function e(p,d){if(t){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=on(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,v){return d===null||d.tag!==6?(d=Yo(g,p.mode,v),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,v){var I=g.type;return I===$n?m(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&wc(I)===d.type)?(v=i(d,g.props),v.ref=Ar(p,d,g),v.return=p,v):(v=hs(g.type,g.key,g.props,null,p.mode,v),v.ref=Ar(p,d,g),v.return=p,v)}function c(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=qo(g,p.mode,v),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function m(p,d,g,v,I){return d===null||d.tag!==7?(d=bn(g,p.mode,v,I),d.return=p,d):(d=i(d,g),d.return=p,d)}function h(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Yo(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ui:return g=hs(d.type,d.key,d.props,null,p.mode,g),g.ref=Ar(p,null,d),g.return=p,g;case zn:return d=qo(d,p.mode,g),d.return=p,d;case Vt:var v=d._init;return h(p,v(d._payload),g)}if(Mr(d)||Cr(d))return d=bn(d,p.mode,g,null),d.return=p,d;Yi(p,d)}return null}function f(p,d,g,v){var I=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:return g.key===I?l(p,d,g,v):null;case zn:return g.key===I?c(p,d,g,v):null;case Vt:return I=g._init,f(p,d,I(g._payload),v)}if(Mr(g)||Cr(g))return I!==null?null:m(p,d,g,v,null);Yi(p,g)}return null}function y(p,d,g,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,a(d,p,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ui:return p=p.get(v.key===null?g:v.key)||null,l(d,p,v,I);case zn:return p=p.get(v.key===null?g:v.key)||null,c(d,p,v,I);case Vt:var N=v._init;return y(p,d,g,N(v._payload),I)}if(Mr(v)||Cr(v))return p=p.get(g)||null,m(d,p,v,I,null);Yi(d,v)}return null}function w(p,d,g,v){for(var I=null,N=null,T=d,P=d=0,H=null;T!==null&&P<g.length;P++){T.index>P?(H=T,T=null):H=T.sibling;var j=f(p,T,g[P],v);if(j===null){T===null&&(T=H);break}t&&T&&j.alternate===null&&e(p,T),d=s(j,d,P),N===null?I=j:N.sibling=j,N=j,T=H}if(P===g.length)return n(p,T),q&&vn(p,P),I;if(T===null){for(;P<g.length;P++)T=h(p,g[P],v),T!==null&&(d=s(T,d,P),N===null?I=T:N.sibling=T,N=T);return q&&vn(p,P),I}for(T=r(p,T);P<g.length;P++)H=y(T,p,P,g[P],v),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?P:H.key),d=s(H,d,P),N===null?I=H:N.sibling=H,N=H);return t&&T.forEach(function(L){return e(p,L)}),q&&vn(p,P),I}function k(p,d,g,v){var I=Cr(g);if(typeof I!="function")throw Error(x(150));if(g=I.call(g),g==null)throw Error(x(151));for(var N=I=null,T=d,P=d=0,H=null,j=g.next();T!==null&&!j.done;P++,j=g.next()){T.index>P?(H=T,T=null):H=T.sibling;var L=f(p,T,j.value,v);if(L===null){T===null&&(T=H);break}t&&T&&L.alternate===null&&e(p,T),d=s(L,d,P),N===null?I=L:N.sibling=L,N=L,T=H}if(j.done)return n(p,T),q&&vn(p,P),I;if(T===null){for(;!j.done;P++,j=g.next())j=h(p,j.value,v),j!==null&&(d=s(j,d,P),N===null?I=j:N.sibling=j,N=j);return q&&vn(p,P),I}for(T=r(p,T);!j.done;P++,j=g.next())j=y(T,p,P,j.value,v),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?P:j.key),d=s(j,d,P),N===null?I=j:N.sibling=j,N=j);return t&&T.forEach(function(ue){return e(p,ue)}),q&&vn(p,P),I}function R(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===$n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:e:{for(var I=g.key,N=d;N!==null;){if(N.key===I){if(I=g.type,I===$n){if(N.tag===7){n(p,N.sibling),d=i(N,g.props.children),d.return=p,p=d;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&wc(I)===N.type){n(p,N.sibling),d=i(N,g.props),d.ref=Ar(p,N,g),d.return=p,p=d;break e}n(p,N);break}else e(p,N);N=N.sibling}g.type===$n?(d=bn(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=hs(g.type,g.key,g.props,null,p.mode,v),v.ref=Ar(p,d,g),v.return=p,p=v)}return o(p);case zn:e:{for(N=g.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=qo(g,p.mode,v),d.return=p,p=d}return o(p);case Vt:return N=g._init,R(p,d,N(g._payload),v)}if(Mr(g))return w(p,d,g,v);if(Cr(g))return k(p,d,g,v);Yi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=Yo(g,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return R}var cr=Qf(!0),Yf=Qf(!1),Os=fn(null),js=null,Qn=null,Ul=null;function zl(){Ul=Qn=js=null}function $l(t){var e=Os.current;Q(Os),t._currentValue=e}function Fa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function tr(t,e){js=t,Ul=Qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Te=!0),t.firstContext=null)}function Ke(t){var e=t._currentValue;if(Ul!==t)if(t={context:t,memoizedValue:e,next:null},Qn===null){if(js===null)throw Error(x(308));Qn=t,js.dependencies={lanes:0,firstContext:t}}else Qn=Qn.next=t;return e}var _n=null;function Fl(t){_n===null?_n=[t]:_n.push(t)}function qf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fl(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Vl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,Fl(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function as(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cl(t,n)}}function xc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ls(t,e,n,r){var i=t.updateQueue;Bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,m=c=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,k=a;switch(f=e,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=ee({},h,f);break e;case 2:Bt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,l=h):m=m.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(m===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rn|=o,t.lanes=o,t.memoizedState=h}}function kc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ni={},gt=fn(Ni),mi=fn(Ni),gi=fn(Ni);function En(t){if(t===Ni)throw Error(x(174));return t}function Bl(t,e){switch(W(gi,e),W(mi,t),W(gt,Ni),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ka(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ka(e,t)}Q(gt),W(gt,e)}function dr(){Q(gt),Q(mi),Q(gi)}function Xf(t){En(gi.current);var e=En(gt.current),n=ka(e,t.type);e!==n&&(W(mi,t),W(gt,n))}function Hl(t){mi.current===t&&(Q(gt),Q(mi))}var X=fn(0);function Ds(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bo=[];function Wl(){for(var t=0;t<Bo.length;t++)Bo[t]._workInProgressVersionPrimary=null;Bo.length=0}var ls=Mt.ReactCurrentDispatcher,Ho=Mt.ReactCurrentBatchConfig,Pn=0,Z=null,ae=null,ce=null,Ms=!1,Qr=!1,yi=0,tg=0;function me(){throw Error(x(321))}function Gl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Kl(t,e,n,r,i,s){if(Pn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ls.current=t===null||t.memoizedState===null?sg:og,t=n(r,i),Qr){s=0;do{if(Qr=!1,yi=0,25<=s)throw Error(x(301));s+=1,ce=ae=null,e.updateQueue=null,ls.current=ag,t=n(r,i)}while(Qr)}if(ls.current=Us,e=ae!==null&&ae.next!==null,Pn=0,ce=ae=Z=null,Ms=!1,e)throw Error(x(300));return t}function Ql(){var t=yi!==0;return yi=0,t}function dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=t:ce=ce.next=t,ce}function Qe(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=ce===null?Z.memoizedState:ce.next;if(e!==null)ce=e,ae=t;else{if(t===null)throw Error(x(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Z.memoizedState=ce=t:ce=ce.next=t}return ce}function vi(t,e){return typeof e=="function"?e(t):e}function Wo(t){var e=Qe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var m=c.lane;if((Pn&m)===m)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Z.lanes|=m,Rn|=m}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,at(r,e.memoizedState)||(Te=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Rn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Go(t){var e=Qe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Te=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zf(){}function eh(t,e){var n=Z,r=Qe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Te=!0),r=r.queue,Yl(rh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,wi(9,nh.bind(null,n,r,i,e),void 0,null),de===null)throw Error(x(349));Pn&30||th(n,e,i)}return i}function th(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nh(t,e,n,r){e.value=n,e.getSnapshot=r,ih(e)&&sh(t)}function rh(t,e,n){return n(function(){ih(e)&&sh(t)})}function ih(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function sh(t){var e=At(t,1);e!==null&&ot(e,t,1,-1)}function _c(t){var e=dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:t},e.queue=t,t=t.dispatch=ig.bind(null,Z,t),[e.memoizedState,t]}function wi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function oh(){return Qe().memoizedState}function us(t,e,n,r){var i=dt();Z.flags|=t,i.memoizedState=wi(1|e,n,void 0,r===void 0?null:r)}function so(t,e,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Gl(r,o.deps)){i.memoizedState=wi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=wi(1|e,n,s,r)}function Ec(t,e){return us(8390656,8,t,e)}function Yl(t,e){return so(2048,8,t,e)}function ah(t,e){return so(4,2,t,e)}function lh(t,e){return so(4,4,t,e)}function uh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ch(t,e,n){return n=n!=null?n.concat([t]):null,so(4,4,uh.bind(null,e,t),n)}function ql(){}function dh(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fh(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hh(t,e,n){return Pn&21?(at(n,e)||(n=vf(),Z.lanes|=n,Rn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Te=!0),t.memoizedState=n)}function ng(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Ho.transition;Ho.transition={};try{t(!1),e()}finally{$=n,Ho.transition=r}}function ph(){return Qe().memoizedState}function rg(t,e,n){var r=sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mh(t))gh(e,n);else if(n=qf(t,e,n,r),n!==null){var i=ke();ot(n,t,r,i),yh(n,e,r)}}function ig(t,e,n){var r=sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mh(t))gh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=e.interleaved;l===null?(i.next=i,Fl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=qf(t,e,i,r),n!==null&&(i=ke(),ot(n,t,r,i),yh(n,e,r))}}function mh(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function gh(t,e){Qr=Ms=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cl(t,n)}}var Us={readContext:Ke,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},sg={readContext:Ke,useCallback:function(t,e){return dt().memoizedState=[t,e===void 0?null:e],t},useContext:Ke,useEffect:Ec,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,us(4194308,4,uh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return us(4194308,4,t,e)},useInsertionEffect:function(t,e){return us(4,2,t,e)},useMemo:function(t,e){var n=dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rg.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=dt();return t={current:t},e.memoizedState=t},useState:_c,useDebugValue:ql,useDeferredValue:function(t){return dt().memoizedState=t},useTransition:function(){var t=_c(!1),e=t[0];return t=ng.bind(null,t[1]),dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=dt();if(q){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),de===null)throw Error(x(349));Pn&30||th(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ec(rh.bind(null,r,s,t),[t]),r.flags|=2048,wi(9,nh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dt(),e=de.identifierPrefix;if(q){var n=bt,r=It;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=yi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},og={readContext:Ke,useCallback:dh,useContext:Ke,useEffect:Yl,useImperativeHandle:ch,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:fh,useReducer:Wo,useRef:oh,useState:function(){return Wo(vi)},useDebugValue:ql,useDeferredValue:function(t){var e=Qe();return hh(e,ae.memoizedState,t)},useTransition:function(){var t=Wo(vi)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:Zf,useSyncExternalStore:eh,useId:ph,unstable_isNewReconciler:!1},ag={readContext:Ke,useCallback:dh,useContext:Ke,useEffect:Yl,useImperativeHandle:ch,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:fh,useReducer:Go,useRef:oh,useState:function(){return Go(vi)},useDebugValue:ql,useDeferredValue:function(t){var e=Qe();return ae===null?e.memoizedState=t:hh(e,ae.memoizedState,t)},useTransition:function(){var t=Go(vi)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:Zf,useSyncExternalStore:eh,useId:ph,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Va(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oo={isMounted:function(t){return(t=t._reactInternals)?Dn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=sn(t),s=Tt(r,i);s.payload=e,n!=null&&(s.callback=n),e=nn(t,s,i),e!==null&&(ot(e,t,i,r),as(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=sn(t),s=Tt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nn(t,s,i),e!==null&&(ot(e,t,i,r),as(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=sn(t),i=Tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=nn(t,i,r),e!==null&&(ot(e,t,r,n),as(e,t,r))}};function Sc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!di(n,r)||!di(i,s):!0}function vh(t,e,n){var r=!1,i=cn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ke(s):(i=Re(e)?Nn:ve.current,r=e.contextTypes,s=(r=r!=null)?lr(t,i):cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ic(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oo.enqueueReplaceState(e,e.state,null)}function Ba(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ke(s):(s=Re(e)?Nn:ve.current,i.context=lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Va(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oo.enqueueReplaceState(i,i.state,null),Ls(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fr(t,e){try{var n="",r=e;do n+=Lm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ko(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ha(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function wh(t,e,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$s||($s=!0,el=r),Ha(t,e)},n}function xh(t,e,n){n=Tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ha(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ha(t,e),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_g.bind(null,t,e,n),e.then(t,t))}function Cc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tt(-1,1),e.tag=2,nn(n,e,1))),n.lanes|=1),t)}var ug=Mt.ReactCurrentOwner,Te=!1;function xe(t,e,n,r){e.child=t===null?Yf(e,null,n,r):cr(e,t.child,n,r)}function Tc(t,e,n,r,i){n=n.render;var s=e.ref;return tr(e,i),r=Kl(t,e,n,r,s,i),n=Ql(),t!==null&&!Te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(q&&n&&Ll(e),e.flags|=1,xe(t,e,r,i),e.child)}function Pc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!iu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kh(t,e,s,r,i)):(t=hs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(o,r)&&t.ref===e.ref)return Ot(t,e,i)}return e.flags|=1,t=on(s,r),t.ref=e.ref,t.return=e,e.child=t}function kh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(di(s,r)&&t.ref===e.ref)if(Te=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Te=!0);else return e.lanes=t.lanes,Ot(t,e,i)}return Wa(t,e,n,r,i)}function _h(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(qn,De),De|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,W(qn,De),De|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(qn,De),De|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,W(qn,De),De|=r;return xe(t,e,i,n),e.child}function Eh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wa(t,e,n,r,i){var s=Re(n)?Nn:ve.current;return s=lr(e,s),tr(e,i),n=Kl(t,e,n,r,s,i),r=Ql(),t!==null&&!Te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(q&&r&&Ll(e),e.flags|=1,xe(t,e,n,i),e.child)}function Rc(t,e,n,r,i){if(Re(n)){var s=!0;Ps(e)}else s=!1;if(tr(e,i),e.stateNode===null)cs(t,e),vh(e,n,r),Ba(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=Re(n)?Nn:ve.current,c=lr(e,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Ic(e,o,r,c),Bt=!1;var f=e.memoizedState;o.state=f,Ls(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Pe.current||Bt?(typeof m=="function"&&(Va(e,n,m,r),l=e.memoizedState),(a=Bt||Sc(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jf(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=Re(n)?Nn:ve.current,l=lr(e,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Ic(e,o,r,l),Bt=!1,f=e.memoizedState,o.state=f,Ls(e,r,o,i);var w=e.memoizedState;a!==h||f!==w||Pe.current||Bt?(typeof y=="function"&&(Va(e,n,y,r),w=e.memoizedState),(c=Bt||Sc(e,n,c,r,f,w,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ga(t,e,n,r,s,i)}function Ga(t,e,n,r,i,s){Eh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gc(e,n,!1),Ot(t,e,s);r=e.stateNode,ug.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cr(e,t.child,null,s),e.child=cr(e,null,a,s)):xe(t,e,a,s),e.memoizedState=r.state,i&&gc(e,n,!0),e.child}function Sh(t){var e=t.stateNode;e.pendingContext?mc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mc(t,e.context,!1),Bl(t,e.containerInfo)}function Ac(t,e,n,r,i){return ur(),Ml(i),e.flags|=256,xe(t,e,n,r),e.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ih(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),W(X,i&1),t===null)return $a(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uo(o,r,0,null),t=bn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qa(n),e.memoizedState=Ka,t):Jl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cg(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=on(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=on(a,s):(s=bn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ka,r}return s=t.child,t=s.sibling,r=on(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jl(t,e){return e=uo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qi(t,e,n,r){return r!==null&&Ml(r),cr(e,t.child,null,n),t=Jl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cg(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ko(Error(x(422))),qi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uo({mode:"visible",children:r.children},i,0,null),s=bn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cr(e,t.child,null,o),e.child.memoizedState=Qa(o),e.memoizedState=Ka,s);if(!(e.mode&1))return qi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Ko(s,r,void 0),qi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Te||a){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),ot(r,t,i,-1))}return ru(),r=Ko(Error(x(421))),qi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Eg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=tn(i.nextSibling),ze=e,q=!0,rt=null,t!==null&&(Be[He++]=It,Be[He++]=bt,Be[He++]=Tn,It=t.id,bt=t.overflow,Tn=e),e=Jl(e,r.children),e.flags|=4096,e)}function Oc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fa(t.return,e,n)}function Qo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xe(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oc(t,n,e);else if(t.tag===19)Oc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(W(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ds(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ds(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qo(e,!0,n,null,s);break;case"together":Qo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ot(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=on(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=on(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dg(t,e,n){switch(e.tag){case 3:Sh(e),ur();break;case 5:Xf(e);break;case 1:Re(e.type)&&Ps(e);break;case 4:Bl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;W(Os,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Ih(t,e,n):(W(X,X.current&1),t=Ot(t,e,n),t!==null?t.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,_h(t,e,n)}return Ot(t,e,n)}var Ch,Ya,Nh,Th;Ch=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Nh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,En(gt.current);var s=null;switch(n){case"input":i=ya(t,i),r=ya(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=xa(t,i),r=xa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ns)}_a(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ii.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ii.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&K("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Th=function(t,e,n,r){n!==r&&(e.flags|=4)};function Or(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fg(t,e,n){var r=e.pendingProps;switch(Dl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(e),null;case 1:return Re(e.type)&&Ts(),ge(e),null;case 3:return r=e.stateNode,dr(),Q(Pe),Q(ve),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(rl(rt),rt=null))),Ya(t,e),ge(e),null;case 5:Hl(e);var i=En(gi.current);if(n=e.type,t!==null&&e.stateNode!=null)Nh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ge(e),null}if(t=En(gt.current),Qi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[pi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)K(zr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Vu(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":Hu(r,s),K("invalid",r)}_a(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ki(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ki(r.textContent,a,t),i=["children",""+a]):ii.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":zi(r),Bu(r,s,!0);break;case"textarea":zi(r),Wu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ns)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[pi]=r,Ch(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ea(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)K(zr[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Vu(t,r),i=ya(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",t);break;case"textarea":Hu(t,r),i=xa(t,r),K("invalid",t);break;default:i=r}_a(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?of(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&si(t,l):typeof l=="number"&&si(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ii.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",t):l!=null&&kl(t,s,l,o))}switch(n){case"input":zi(t),Bu(t,r,!1);break;case"textarea":zi(t),Wu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ge(e),null;case 6:if(t&&e.stateNode!=null)Th(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=En(gi.current),En(gt.current),Qi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Ki(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return ge(e),null;case 13:if(Q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ue!==null&&e.mode&1&&!(e.flags&128))Kf(),ur(),e.flags|=98560,s=!1;else if(s=Qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[ht]=e}else ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ge(e),s=!1}else rt!==null&&(rl(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?le===0&&(le=3):ru())),e.updateQueue!==null&&(e.flags|=4),ge(e),null);case 4:return dr(),Ya(t,e),t===null&&fi(e.stateNode.containerInfo),ge(e),null;case 10:return $l(e.type._context),ge(e),null;case 17:return Re(e.type)&&Ts(),ge(e),null;case 19:if(Q(X),s=e.memoizedState,s===null)return ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Or(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ds(t),o!==null){for(e.flags|=128,Or(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return W(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>hr&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ds(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return ge(e),null}else 2*re()-s.renderingStartTime>hr&&n!==1073741824&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=X.current,W(X,r?n&1|2:n&1),e):(ge(e),null);case 22:case 23:return nu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?De&1073741824&&(ge(e),e.subtreeFlags&6&&(e.flags|=8192)):ge(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function hg(t,e){switch(Dl(e),e.tag){case 1:return Re(e.type)&&Ts(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dr(),Q(Pe),Q(ve),Wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hl(e),null;case 13:if(Q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(X),null;case 4:return dr(),null;case 10:return $l(e.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var Ji=!1,ye=!1,pg=typeof WeakSet=="function"?WeakSet:Set,C=null;function Yn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function qa(t,e,n){try{n()}catch(r){ne(t,e,r)}}var jc=!1;function mg(t,e){if(Oa=Is,t=jf(),jl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,m=0,h=t,f=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++m===r&&(l=o),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:t,selectionRange:n},Is=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,R=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?k:tt(e.type,k),R);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){ne(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return w=jc,jc=!1,w}function Yr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qa(e,n,s)}i=i.next}while(i!==r)}}function ao(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ja(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ph(t){var e=t.alternate;e!==null&&(t.alternate=null,Ph(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[pi],delete e[Ma],delete e[J0],delete e[X0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rh(t){return t.tag===5||t.tag===3||t.tag===4}function Lc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ns));else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}var fe=null,nt=!1;function $t(t,e,n){for(n=n.child;n!==null;)Ah(t,e,n),n=n.sibling}function Ah(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:ye||Yn(n,e);case 6:var r=fe,i=nt;fe=null,$t(t,e,n),fe=r,nt=i,fe!==null&&(nt?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(nt?(t=fe,n=n.stateNode,t.nodeType===8?Fo(t.parentNode,n):t.nodeType===1&&Fo(t,n),ui(t)):Fo(fe,n.stateNode));break;case 4:r=fe,i=nt,fe=n.stateNode.containerInfo,nt=!0,$t(t,e,n),fe=r,nt=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qa(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!ye&&(Yn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,e,a)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,$t(t,e,n),ye=r):$t(t,e,n);break;default:$t(t,e,n)}}function Dc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pg),e.forEach(function(r){var i=Sg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,nt=!1;break e;case 3:fe=a.stateNode.containerInfo,nt=!0;break e;case 4:fe=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(fe===null)throw Error(x(160));Ah(s,o,i),fe=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Oh(e,t),e=e.sibling}function Oh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),ct(t),r&4){try{Yr(3,t,t.return),ao(3,t)}catch(k){ne(t,t.return,k)}try{Yr(5,t,t.return)}catch(k){ne(t,t.return,k)}}break;case 1:et(e,t),ct(t),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(et(e,t),ct(t),r&512&&n!==null&&Yn(n,n.return),t.flags&32){var i=t.stateNode;try{si(i,"")}catch(k){ne(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ef(i,s),Ea(a,o);var c=Ea(a,s);for(o=0;o<l.length;o+=2){var m=l[o],h=l[o+1];m==="style"?of(i,h):m==="dangerouslySetInnerHTML"?rf(i,h):m==="children"?si(i,h):kl(i,m,h,c)}switch(a){case"input":va(i,s);break;case"textarea":tf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Jn(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Jn(i,!!s.multiple,s.defaultValue,!0):Jn(i,!!s.multiple,s.multiple?[]:"",!1))}i[pi]=s}catch(k){ne(t,t.return,k)}}break;case 6:if(et(e,t),ct(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){ne(t,t.return,k)}}break;case 3:if(et(e,t),ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(e.containerInfo)}catch(k){ne(t,t.return,k)}break;case 4:et(e,t),ct(t);break;case 13:et(e,t),ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(eu=re())),r&4&&Dc(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(c=ye)||m,et(e,t),ye=c):et(e,t),ct(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!m&&t.mode&1)for(C=t,m=t.child;m!==null;){for(h=C=m;C!==null;){switch(f=C,y=f.child,f.tag){case 0:case 11:case 14:case 15:Yr(4,f,f.return);break;case 1:Yn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(k){ne(r,n,k)}}break;case 5:Yn(f,f.return);break;case 22:if(f.memoizedState!==null){Uc(h);continue}}y!==null?(y.return=f,C=y):Uc(h)}m=m.sibling}e:for(m=null,h=t;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sf("display",o))}catch(k){ne(t,t.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){ne(t,t.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:et(e,t),ct(t),r&4&&Dc(t);break;case 21:break;default:et(e,t),ct(t)}}function ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rh(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var s=Lc(t);Za(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lc(t);Xa(t,a,o);break;default:throw Error(x(161))}}catch(l){ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gg(t,e,n){C=t,jh(t)}function jh(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ji;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Ji;var c=ye;if(Ji=o,(ye=l)&&!c)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?zc(i):l!==null?(l.return=o,C=l):zc(i);for(;s!==null;)C=s,jh(s),s=s.sibling;C=i,Ji=a,ye=c}Mc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Mc(t)}}function Mc(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||ao(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&ui(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ye||e.flags&512&&Ja(e)}catch(f){ne(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Uc(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function zc(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ao(4,e)}catch(l){ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ne(e,i,l)}}var s=e.return;try{Ja(e)}catch(l){ne(e,s,l)}break;case 5:var o=e.return;try{Ja(e)}catch(l){ne(e,o,l)}}}catch(l){ne(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var yg=Math.ceil,zs=Mt.ReactCurrentDispatcher,Xl=Mt.ReactCurrentOwner,Ge=Mt.ReactCurrentBatchConfig,U=0,de=null,oe=null,he=0,De=0,qn=fn(0),le=0,xi=null,Rn=0,lo=0,Zl=0,qr=null,Ne=null,eu=0,hr=1/0,_t=null,$s=!1,el=null,rn=null,Xi=!1,Jt=null,Fs=0,Jr=0,tl=null,ds=-1,fs=0;function ke(){return U&6?re():ds!==-1?ds:ds=re()}function sn(t){return t.mode&1?U&2&&he!==0?he&-he:eg.transition!==null?(fs===0&&(fs=vf()),fs):(t=$,t!==0||(t=window.event,t=t===void 0?16:If(t.type)),t):1}function ot(t,e,n,r){if(50<Jr)throw Jr=0,tl=null,Error(x(185));Ii(t,n,r),(!(U&2)||t!==de)&&(t===de&&(!(U&2)&&(lo|=n),le===4&&Wt(t,he)),Ae(t,r),n===1&&U===0&&!(e.mode&1)&&(hr=re()+500,io&&hn()))}function Ae(t,e){var n=t.callbackNode;e0(t,e);var r=Ss(t,t===de?he:0);if(r===0)n!==null&&Qu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qu(n),e===1)t.tag===0?Z0($c.bind(null,t)):Hf($c.bind(null,t)),Y0(function(){!(U&6)&&hn()}),n=null;else{switch(wf(r)){case 1:n=bl;break;case 4:n=gf;break;case 16:n=Es;break;case 536870912:n=yf;break;default:n=Es}n=Vh(n,Lh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lh(t,e){if(ds=-1,fs=0,U&6)throw Error(x(327));var n=t.callbackNode;if(nr()&&t.callbackNode!==n)return null;var r=Ss(t,t===de?he:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vs(t,r);else{e=r;var i=U;U|=2;var s=Mh();(de!==t||he!==e)&&(_t=null,hr=re()+500,In(t,e));do try{xg();break}catch(a){Dh(t,a)}while(1);zl(),zs.current=s,U=i,oe!==null?e=0:(de=null,he=0,e=le)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=nl(t,i))),e===1)throw n=xi,In(t,0),Wt(t,r),Ae(t,re()),n;if(e===6)Wt(t,r);else{if(i=t.current.alternate,!(r&30)&&!vg(i)&&(e=Vs(t,r),e===2&&(s=Na(t),s!==0&&(r=s,e=nl(t,s))),e===1))throw n=xi,In(t,0),Wt(t,r),Ae(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:wn(t,Ne,_t);break;case 3:if(Wt(t,r),(r&130023424)===r&&(e=eu+500-re(),10<e)){if(Ss(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Da(wn.bind(null,t,Ne,_t),e);break}wn(t,Ne,_t);break;case 4:if(Wt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yg(r/1960))-r,10<r){t.timeoutHandle=Da(wn.bind(null,t,Ne,_t),r);break}wn(t,Ne,_t);break;case 5:wn(t,Ne,_t);break;default:throw Error(x(329))}}}return Ae(t,re()),t.callbackNode===n?Lh.bind(null,t):null}function nl(t,e){var n=qr;return t.current.memoizedState.isDehydrated&&(In(t,e).flags|=256),t=Vs(t,e),t!==2&&(e=Ne,Ne=n,e!==null&&rl(e)),t}function rl(t){Ne===null?Ne=t:Ne.push.apply(Ne,t)}function vg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wt(t,e){for(e&=~Zl,e&=~lo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function $c(t){if(U&6)throw Error(x(327));nr();var e=Ss(t,0);if(!(e&1))return Ae(t,re()),null;var n=Vs(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=nl(t,r))}if(n===1)throw n=xi,In(t,0),Wt(t,e),Ae(t,re()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,Ne,_t),Ae(t,re()),null}function tu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(hr=re()+500,io&&hn())}}function An(t){Jt!==null&&Jt.tag===0&&!(U&6)&&nr();var e=U;U|=1;var n=Ge.transition,r=$;try{if(Ge.transition=null,$=1,t)return t()}finally{$=r,Ge.transition=n,U=e,!(U&6)&&hn()}}function nu(){De=qn.current,Q(qn)}function In(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Q0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ts();break;case 3:dr(),Q(Pe),Q(ve),Wl();break;case 5:Hl(r);break;case 4:dr();break;case 13:Q(X);break;case 19:Q(X);break;case 10:$l(r.type._context);break;case 22:case 23:nu()}n=n.return}if(de=t,oe=t=on(t.current,null),he=De=e,le=0,xi=null,Zl=lo=Rn=0,Ne=qr=null,_n!==null){for(e=0;e<_n.length;e++)if(n=_n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_n=null}return t}function Dh(t,e){do{var n=oe;try{if(zl(),ls.current=Us,Ms){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ms=!1}if(Pn=0,ce=ae=Z=null,Qr=!1,yi=0,Xl.current=null,n===null||n.return===null){le=1,xi=e,oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Cc(o);if(y!==null){y.flags&=-257,Nc(y,o,a,s,e),y.mode&1&&bc(s,c,e),e=y,l=c;var w=e.updateQueue;if(w===null){var k=new Set;k.add(l),e.updateQueue=k}else w.add(l);break e}else{if(!(e&1)){bc(s,c,e),ru();break e}l=Error(x(426))}}else if(q&&a.mode&1){var R=Cc(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Nc(R,o,a,s,e),Ml(fr(l,a));break e}}s=l=fr(l,a),le!==4&&(le=2),qr===null?qr=[s]:qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=wh(s,l,e);xc(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rn===null||!rn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=xh(s,a,e);xc(s,v);break e}}s=s.return}while(s!==null)}zh(n)}catch(I){e=I,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Mh(){var t=zs.current;return zs.current=Us,t===null?Us:t}function ru(){(le===0||le===3||le===2)&&(le=4),de===null||!(Rn&268435455)&&!(lo&268435455)||Wt(de,he)}function Vs(t,e){var n=U;U|=2;var r=Mh();(de!==t||he!==e)&&(_t=null,In(t,e));do try{wg();break}catch(i){Dh(t,i)}while(1);if(zl(),U=n,zs.current=r,oe!==null)throw Error(x(261));return de=null,he=0,le}function wg(){for(;oe!==null;)Uh(oe)}function xg(){for(;oe!==null&&!Wm();)Uh(oe)}function Uh(t){var e=Fh(t.alternate,t,De);t.memoizedProps=t.pendingProps,e===null?zh(t):oe=e,Xl.current=null}function zh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hg(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,oe=null;return}}else if(n=fg(n,e,De),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);le===0&&(le=5)}function wn(t,e,n){var r=$,i=Ge.transition;try{Ge.transition=null,$=1,kg(t,e,n,r)}finally{Ge.transition=i,$=r}return null}function kg(t,e,n,r){do nr();while(Jt!==null);if(U&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t0(t,s),t===de&&(oe=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,Vh(Es,function(){return nr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=$;$=1;var a=U;U|=4,Xl.current=null,mg(t,n),Oh(n,t),F0(ja),Is=!!Oa,ja=Oa=null,t.current=n,gg(n),Gm(),U=a,$=o,Ge.transition=s}else t.current=n;if(Xi&&(Xi=!1,Jt=t,Fs=i),s=t.pendingLanes,s===0&&(rn=null),Ym(n.stateNode),Ae(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($s)throw $s=!1,t=el,el=null,t;return Fs&1&&t.tag!==0&&nr(),s=t.pendingLanes,s&1?t===tl?Jr++:(Jr=0,tl=t):Jr=0,hn(),null}function nr(){if(Jt!==null){var t=wf(Fs),e=Ge.transition,n=$;try{if(Ge.transition=null,$=16>t?16:t,Jt===null)var r=!1;else{if(t=Jt,Jt=null,Fs=0,U&6)throw Error(x(331));var i=U;for(U|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Yr(8,m,s)}var h=m.child;if(h!==null)h.return=m,C=h;else for(;C!==null;){m=C;var f=m.sibling,y=m.return;if(Ph(m),m===c){C=null;break}if(f!==null){f.return=y,C=f;break}C=y}}}var w=s.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var d=t.current;for(C=d;C!==null;){o=C;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,C=g;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ao(9,a)}}catch(I){ne(a,a.return,I)}if(a===o){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(U=i,hn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Zs,t)}catch{}r=!0}return r}finally{$=n,Ge.transition=e}}return!1}function Fc(t,e,n){e=fr(n,e),e=wh(t,e,1),t=nn(t,e,1),e=ke(),t!==null&&(Ii(t,1,e),Ae(t,e))}function ne(t,e,n){if(t.tag===3)Fc(t,t,n);else for(;e!==null;){if(e.tag===3){Fc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){t=fr(n,t),t=xh(e,t,1),e=nn(e,t,1),t=ke(),e!==null&&(Ii(e,1,t),Ae(e,t));break}}e=e.return}}function _g(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>re()-eu?In(t,0):Zl|=n),Ae(t,e)}function $h(t,e){e===0&&(t.mode&1?(e=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):e=1);var n=ke();t=At(t,e),t!==null&&(Ii(t,e,n),Ae(t,n))}function Eg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$h(t,n)}function Sg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),$h(t,n)}var Fh;Fh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pe.current)Te=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Te=!1,dg(t,e,n);Te=!!(t.flags&131072)}else Te=!1,q&&e.flags&1048576&&Wf(e,As,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cs(t,e),t=e.pendingProps;var i=lr(e,ve.current);tr(e,n),i=Kl(null,e,r,t,i,n);var s=Ql();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Re(r)?(s=!0,Ps(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vl(e),i.updater=oo,e.stateNode=i,i._reactInternals=e,Ba(e,r,t,n),e=Ga(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Ll(e),xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bg(r),t=tt(r,t),i){case 0:e=Wa(null,e,r,t,n);break e;case 1:e=Rc(null,e,r,t,n);break e;case 11:e=Tc(null,e,r,t,n);break e;case 14:e=Pc(null,e,r,tt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Wa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Rc(t,e,r,i,n);case 3:e:{if(Sh(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Jf(t,e),Ls(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fr(Error(x(423)),e),e=Ac(t,e,r,n,i);break e}else if(r!==i){i=fr(Error(x(424)),e),e=Ac(t,e,r,n,i);break e}else for(Ue=tn(e.stateNode.containerInfo.firstChild),ze=e,q=!0,rt=null,n=Yf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){e=Ot(t,e,n);break e}xe(t,e,r,n)}e=e.child}return e;case 5:return Xf(e),t===null&&$a(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,La(r,i)?o=null:s!==null&&La(r,s)&&(e.flags|=32),Eh(t,e),xe(t,e,o,n),e.child;case 6:return t===null&&$a(e),null;case 13:return Ih(t,e,n);case 4:return Bl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cr(e,null,r,n):xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Tc(t,e,r,i,n);case 7:return xe(t,e,e.pendingProps,n),e.child;case 8:return xe(t,e,e.pendingProps.children,n),e.child;case 12:return xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,W(Os,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Pe.current){e=Ot(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?l.next=l:(l.next=m.next,m.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fa(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,tr(e,n),i=Ke(i),r=r(i),e.flags|=1,xe(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Pc(t,e,r,i,n);case 15:return kh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),cs(t,e),e.tag=1,Re(r)?(t=!0,Ps(e)):t=!1,tr(e,n),vh(e,r,i),Ba(e,r,i,n),Ga(null,e,r,!0,t,n);case 19:return bh(t,e,n);case 22:return _h(t,e,n)}throw Error(x(156,e.tag))};function Vh(t,e){return mf(t,e)}function Ig(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(t,e,n,r){return new Ig(t,e,n,r)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bg(t){if(typeof t=="function")return iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===El)return 11;if(t===Sl)return 14}return 2}function on(t,e){var n=t.alternate;return n===null?(n=We(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")iu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $n:return bn(n.children,i,s,e);case _l:o=8,i|=8;break;case ha:return t=We(12,n,e,i|2),t.elementType=ha,t.lanes=s,t;case pa:return t=We(13,n,e,i),t.elementType=pa,t.lanes=s,t;case ma:return t=We(19,n,e,i),t.elementType=ma,t.lanes=s,t;case Jd:return uo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yd:o=10;break e;case qd:o=9;break e;case El:o=11;break e;case Sl:o=14;break e;case Vt:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=We(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bn(t,e,n,r){return t=We(7,t,r,e),t.lanes=n,t}function uo(t,e,n,r){return t=We(22,t,r,e),t.elementType=Jd,t.lanes=n,t.stateNode={isHidden:!1},t}function Yo(t,e,n){return t=We(6,t,null,e),t.lanes=n,t}function qo(t,e,n){return e=We(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function su(t,e,n,r,i,s,o,a,l){return t=new Cg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=We(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(s),t}function Ng(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bh(t){if(!t)return cn;t=t._reactInternals;e:{if(Dn(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Re(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Re(n))return Bf(t,n,e)}return e}function Hh(t,e,n,r,i,s,o,a,l){return t=su(n,r,!0,t,i,s,o,a,l),t.context=Bh(null),n=t.current,r=ke(),i=sn(n),s=Tt(r,i),s.callback=e??null,nn(n,s,i),t.current.lanes=i,Ii(t,i,r),Ae(t,r),t}function co(t,e,n,r){var i=e.current,s=ke(),o=sn(i);return n=Bh(n),e.context===null?e.context=n:e.pendingContext=n,e=Tt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nn(i,e,o),t!==null&&(ot(t,i,o,s),as(t,i,o)),o}function Bs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ou(t,e){Vc(t,e),(t=t.alternate)&&Vc(t,e)}function Tg(){return null}var Wh=typeof reportError=="function"?reportError:function(t){console.error(t)};function au(t){this._internalRoot=t}fo.prototype.render=au.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));co(t,e,null,null)};fo.prototype.unmount=au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;An(function(){co(null,t,null,null)}),e[Rt]=null}};function fo(t){this._internalRoot=t}fo.prototype.unstable_scheduleHydration=function(t){if(t){var e=_f();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&Sf(t)}};function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ho(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bc(){}function Pg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bs(o);s.call(c)}}var o=Hh(e,r,t,0,null,!1,!1,"",Bc);return t._reactRootContainer=o,t[Rt]=o.current,fi(t.nodeType===8?t.parentNode:t),An(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bs(l);a.call(c)}}var l=su(t,0,!1,null,null,!1,!1,"",Bc);return t._reactRootContainer=l,t[Rt]=l.current,fi(t.nodeType===8?t.parentNode:t),An(function(){co(e,l,n,r)}),l}function po(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bs(o);a.call(l)}}co(e,o,t,i)}else o=Pg(n,e,t,i,r);return Bs(o)}xf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ur(e.pendingLanes);n!==0&&(Cl(e,n|1),Ae(e,re()),!(U&6)&&(hr=re()+500,hn()))}break;case 13:An(function(){var r=At(t,1);if(r!==null){var i=ke();ot(r,t,1,i)}}),ou(t,1)}};Nl=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=ke();ot(e,t,134217728,n)}ou(t,134217728)}};kf=function(t){if(t.tag===13){var e=sn(t),n=At(t,e);if(n!==null){var r=ke();ot(n,t,e,r)}ou(t,e)}};_f=function(){return $};Ef=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Ia=function(t,e,n){switch(e){case"input":if(va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ro(r);if(!i)throw Error(x(90));Zd(r),va(r,i)}}}break;case"textarea":tf(t,n);break;case"select":e=n.value,e!=null&&Jn(t,!!n.multiple,e,!1)}};uf=tu;cf=An;var Rg={usingClientEntryPoint:!1,Events:[Ci,Hn,ro,af,lf,tu]},jr={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ag={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hf(t),t===null?null:t.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{Zs=Zi.inject(Ag),mt=Zi}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Fe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(e))throw Error(x(200));return Ng(t,e,null,n)};Fe.createRoot=function(t,e){if(!lu(t))throw Error(x(299));var n=!1,r="",i=Wh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=su(t,1,!1,null,null,n,!1,r,i),t[Rt]=e.current,fi(t.nodeType===8?t.parentNode:t),new au(e)};Fe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=hf(e),t=t===null?null:t.stateNode,t};Fe.flushSync=function(t){return An(t)};Fe.hydrate=function(t,e,n){if(!ho(e))throw Error(x(200));return po(null,t,e,!0,n)};Fe.hydrateRoot=function(t,e,n){if(!lu(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hh(e,null,t,1,n??null,i,!1,s,o),t[Rt]=e.current,fi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fo(e)};Fe.render=function(t,e,n){if(!ho(e))throw Error(x(200));return po(null,t,e,!1,n)};Fe.unmountComponentAtNode=function(t){if(!ho(t))throw Error(x(40));return t._reactRootContainer?(An(function(){po(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1};Fe.unstable_batchedUpdates=tu;Fe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ho(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return po(t,e,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)}catch(t){console.error(t)}}Gh(),Wd.exports=Fe;var Og=Wd.exports,Hc=Og;da.createRoot=Hc.createRoot,da.hydrateRoot=Hc.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=t=>{const e=Lg(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>E.createElement("svg",{ref:l,...Dg,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Kh("lucide",i),...!s&&!Mg(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,m])=>E.createElement(c,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(t,e)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(Ug,{ref:s,iconNode:e,className:Kh(`lucide-${jg(Wc(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Wc(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qh=F("chevron-right",zg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Yh=F("circle-alert",$g);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xt=F("circle-check",Fg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],Bg=F("circle-pause",Vg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wg=F("circle-play",Hg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Jo=F("crown",Gg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Gc=F("download",Kg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Yg=F("eye",Qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Jg=F("file-code",qg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],Xo=F("headset",Xg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Zo=F("history",Zg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Kc=F("loader-circle",e1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],il=F("lock",t1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ea=F("log-out",n1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Qc=F("mail",r1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],s1=F("mic-vocal",i1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],a1=F("panels-top-left",o1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],u1=F("pause",l1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yc=F("phone",c1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],qc=F("play",d1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],h1=F("sparkles",f1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ta=F("star",p1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],g1=F("toggle-left",m1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],v1=F("toggle-right",y1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Jc=F("trash-2",w1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ps=F("user",x1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],_1=F("volume-2",k1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xc=F("x",E1);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xr=F("zap",S1),I1=()=>{};/**
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
 */const qh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},b1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,m=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(f=64)),r.push(n[m],n[h],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):b1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new C1;const f=s<<2|a>>4;if(r.push(f),c!==64){const y=a<<4&240|c>>2;if(r.push(y),h!==64){const w=c<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class C1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N1=function(t){const e=qh(t);return Jh.encodeByteArray(e,!0)},Xh=function(t){return N1(t).replace(/\./g,"")},Zh=function(t){try{return Jh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function T1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P1=()=>T1().__FIREBASE_DEFAULTS__,R1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},A1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zh(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return I1()||P1()||R1()||A1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O1=t=>{var e,n;return(n=(e=uu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ep=()=>{var t;return(t=uu())==null?void 0:t.config},tp=t=>{var e;return(e=uu())==null?void 0:e[`_${t}`]};/**
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
 */class j1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L1(t){return(await fetch(t,{credentials:"include"})).ok}const Zr={};function D1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zr))Zr[e]?t.emulator.push(e):t.prod.push(e);return t}function M1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zc=!1;function U1(t,e){if(typeof window>"u"||typeof document>"u"||!mo(window.location.host)||Zr[t]===e||Zr[t]||Zc)return;Zr[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=D1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,y){f.setAttribute("width","24"),f.setAttribute("id",y),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Zc=!0,o()},f}function m(f,y){f.setAttribute("id",y),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=M1(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),k=n("learnmore"),R=document.getElementById(k)||document.createElement("a"),p=n("preprendIcon"),d=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const g=f.element;a(g),m(R,k);const v=c();l(d,p),g.append(d,w,R,v),document.body.appendChild(g)}s?(w.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function z1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function $1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function V1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B1(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H1(){try{return typeof indexedDB=="object"}catch{return!1}}function W1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const G1="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=G1,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?K1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function K1(t,e){return t.replace(Q1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Q1=/\{\$([^}]+)}/g;function Y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ed(s)&&ed(o)){if(!pr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
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
 */function xr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function q1(t,e){const n=new J1(t,e);return n.subscribe.bind(n)}class J1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=na),i.error===void 0&&(i.error=na),i.complete===void 0&&(i.complete=na);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function na(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class Z1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new j1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ty(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ey(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ey(t){return t===xn?void 0:t}function ty(t){return t.instantiationMode==="EAGER"}/**
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
 */class ny{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const ry={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},iy=B.INFO,sy={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},oy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sy[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class np{constructor(e){this.name=e,this._logLevel=iy,this._logHandler=oy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const ay=(t,e)=>e.some(n=>t instanceof n);let td,nd;function ly(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uy(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rp=new WeakMap,sl=new WeakMap,ip=new WeakMap,ra=new WeakMap,cu=new WeakMap;function cy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rp.set(n,t)}).catch(()=>{}),cu.set(e,t),e}function dy(t){if(sl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ip.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fy(t){ol=t(ol)}function hy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ia(this),e,...n);return ip.set(r,e.sort?e.sort():[e]),an(r)}:uy().includes(t)?function(...e){return t.apply(ia(this),e),an(rp.get(this))}:function(...e){return an(t.apply(ia(this),e))}}function py(t){return typeof t=="function"?hy(t):(t instanceof IDBTransaction&&dy(t),ay(t,ly())?new Proxy(t,ol):t)}function an(t){if(t instanceof IDBRequest)return cy(t);if(ra.has(t))return ra.get(t);const e=py(t);return e!==t&&(ra.set(t,e),cu.set(e,t)),e}const ia=t=>cu.get(t);function my(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=an(o);return r&&o.addEventListener("upgradeneeded",l=>{r(an(o.result),l.oldVersion,l.newVersion,an(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gy=["get","getKey","getAll","getAllKeys","count"],yy=["put","add","delete","clear"],sa=new Map;function rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return sa.set(e,s),s}fy(t=>({...t,get:(e,n,r)=>rd(e,n)||t.get(e,n,r),has:(e,n)=>!!rd(e,n)||t.has(e,n)}));/**
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
 */class vy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",id="0.14.8";/**
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
 */const jt=new np("@firebase/app"),xy="@firebase/app-compat",ky="@firebase/analytics-compat",_y="@firebase/analytics",Ey="@firebase/app-check-compat",Sy="@firebase/app-check",Iy="@firebase/auth",by="@firebase/auth-compat",Cy="@firebase/database",Ny="@firebase/data-connect",Ty="@firebase/database-compat",Py="@firebase/functions",Ry="@firebase/functions-compat",Ay="@firebase/installations",Oy="@firebase/installations-compat",jy="@firebase/messaging",Ly="@firebase/messaging-compat",Dy="@firebase/performance",My="@firebase/performance-compat",Uy="@firebase/remote-config",zy="@firebase/remote-config-compat",$y="@firebase/storage",Fy="@firebase/storage-compat",Vy="@firebase/firestore",By="@firebase/ai",Hy="@firebase/firestore-compat",Wy="firebase",Gy="12.9.0";/**
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
 */const ll="[DEFAULT]",Ky={[al]:"fire-core",[xy]:"fire-core-compat",[_y]:"fire-analytics",[ky]:"fire-analytics-compat",[Sy]:"fire-app-check",[Ey]:"fire-app-check-compat",[Iy]:"fire-auth",[by]:"fire-auth-compat",[Cy]:"fire-rtdb",[Ny]:"fire-data-connect",[Ty]:"fire-rtdb-compat",[Py]:"fire-fn",[Ry]:"fire-fn-compat",[Ay]:"fire-iid",[Oy]:"fire-iid-compat",[jy]:"fire-fcm",[Ly]:"fire-fcm-compat",[Dy]:"fire-perf",[My]:"fire-perf-compat",[Uy]:"fire-rc",[zy]:"fire-rc-compat",[$y]:"fire-gcs",[Fy]:"fire-gcs-compat",[Vy]:"fire-fst",[Hy]:"fire-fst-compat",[By]:"fire-vertex","fire-js":"fire-js",[Wy]:"fire-js-all"};/**
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
 */const Hs=new Map,Qy=new Map,ul=new Map;function sd(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(ul.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of Hs.values())sd(n,t);for(const n of Qy.values())sd(n,t);return!0}function sp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Yy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new Ti("app","Firebase",Yy);/**
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
 */class qy{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=Gy;function op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ll,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=ep()),!n)throw ln.create("no-options");const s=Hs.get(i);if(s){if(pr(n,s.options)&&pr(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new ny(i);for(const l of ul.values())o.addComponent(l);const a=new qy(n,r,o);return Hs.set(i,a),a}function Jy(t=ll){const e=Hs.get(t);if(!e&&t===ll&&ep())return op();if(!e)throw ln.create("no-app",{appName:t});return e}function rr(t,e,n){let r=Ky[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(o.join(" "));return}ki(new mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xy="firebase-heartbeat-database",Zy=1,_i="firebase-heartbeat-store";let oa=null;function ap(){return oa||(oa=my(Xy,Zy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),oa}async function ev(t){try{const n=(await ap()).transaction(_i),r=await n.objectStore(_i).get(lp(t));return await n.done,r}catch(e){if(e instanceof pn)jt.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function od(t,e){try{const r=(await ap()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,lp(t)),await r.done}catch(n){if(n instanceof pn)jt.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function lp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tv=1024,nv=30;class rv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ad();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>nv){const o=ov(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ad(),{heartbeatsToSend:r,unsentEntries:i}=iv(this._heartbeatsCache.heartbeats),s=Xh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return jt.warn(n),""}}}function ad(){return new Date().toISOString().substring(0,10)}function iv(t,e=tv){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ld(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ld(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H1()?W1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ev(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return od(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return od(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ld(t){return Xh(JSON.stringify({version:2,heartbeats:t})).length}function ov(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function av(t){ki(new mr("platform-logger",e=>new vy(e),"PRIVATE")),ki(new mr("heartbeat",e=>new rv(e),"PRIVATE")),rr(al,id,t),rr(al,id,"esm2020"),rr("fire-js","")}av("");var lv="firebase",uv="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(lv,uv,"app");function up(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cv=up,cp=new Ti("auth","Firebase",up());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new np("@firebase/auth");function dv(t,...e){Ws.logLevel<=B.WARN&&Ws.warn(`Auth (${Pi}): ${t}`,...e)}function ms(t,...e){Ws.logLevel<=B.ERROR&&Ws.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,...e){throw fu(t,...e)}function Oe(t,...e){return fu(t,...e)}function du(t,e,n){const r={...cv(),[e]:n};return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function yt(t){return du(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(t,"argument-error"),du(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cp.create(t,...e)}function S(t,e,...n){if(!t)throw fu(e,...n)}function Ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ms(e),new Error(e)}function Lt(t,e){t||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dp(){return ud()==="http:"||ud()==="https:"}function ud(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dp()||F1()||"connection"in navigator)?navigator.onLine:!0}function pv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=z1()||V1()}get(){return hv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yv=new Ri(3e4,6e4);function Ie(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function je(t,e,n,r,i={}){return hp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return $1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&mo(t.emulatorConfig.host)&&(c.credentials="include"),fp.fetch()(await pp(t,t.config.apiHost,n,a),c)})}async function hp(t,e,n){t._canInitEmulator=!1;const r={...mv,...e};try{const i=new wv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vr(t,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw du(t,m,c);Ye(t,m)}}catch(i){if(i instanceof pn)throw i;Ye(t,"network-request-failed",{message:String(i)})}}async function mn(t,e,n,r,i={}){const s=await je(t,e,n,r,i);return"mfaPendingCredential"in s&&Ye(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function pp(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?hu(t.config,i):`${t.config.apiScheme}://${i}`;return gv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function vv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),yv.get())})}}function Vr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Oe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){return t!==void 0&&t.getResponse!==void 0}function dd(t){return t!==void 0&&t.enterprise!==void 0}class mp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(t){return(await je(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function gp(t,e){return je(t,"GET","/v2/recaptchaConfig",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function Gs(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _v(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=pu(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ei(aa(i.auth_time)),issuedAtTime:ei(aa(i.iat)),expirationTime:ei(aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function aa(t){return Number(t)*1e3}function pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zh(n);return i?JSON.parse(i):(ms("Failed to decode base64 JWT payload"),null)}catch(i){return ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fd(t){const e=pu(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&Ev(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ev({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ks(t){var h;const e=t.auth,n=await t.getIdToken(),r=await gr(t,Gs(e,{idToken:n}));S(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?yp(i.providerUserInfo):[],o=bv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,m)}async function Iv(t){const e=qe(t);await Ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(t,e){const n=await hp(t,{},async()=>{const r=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await pp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&mo(t.emulatorConfig.host)&&(l.credentials="include"),fp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Nv(t,e){return je(t,"POST","/v2/accounts:revokeToken",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=fd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Cv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ir;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Sv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _v(this,e)}reload(){return Iv(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await gr(this,kv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:y,providerData:w,stsTokenManager:k}=n;S(h&&k,e,"internal-error");const R=ir.fromJSON(this.name,k);S(typeof h=="string",e,"internal-error"),Ft(r,e.name),Ft(i,e.name),S(typeof f=="boolean",e,"internal-error"),S(typeof y=="boolean",e,"internal-error"),Ft(s,e.name),Ft(o,e.name),Ft(a,e.name),Ft(l,e.name),Ft(c,e.name),Ft(m,e.name);const p=new it({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:R,createdAt:c,lastLoginAt:m});return w&&Array.isArray(w)&&(p.providerData=w.map(d=>({...d}))),l&&(p._redirectEventId=l),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new ir;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ks(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ir;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new Map;function Nt(t){Lt(t instanceof Function,"Expected a class definition");let e=hd.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hd.set(t,e),e)}/**
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
 */class vp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vp.type="NONE";const pd=vp;/**
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
 */function gs(t,e,n){return`firebase:${t}:${e}:${n}`}class sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gs(this.auth,{idToken:e}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sr(Nt(pd),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nt(pd);const o=gs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const m=await c._get(o);if(m){let h;if(typeof m=="string"){const f=await Gs(e,{idToken:m}).catch(()=>{});if(!f)break;h=await it._fromGetAccountInfoResponse(e,f,m)}else h=it._fromJSON(e,m);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new sr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new sr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sp(e))return"Blackberry";if(Ip(e))return"Webos";if(xp(e))return"Safari";if((e.includes("chrome/")||kp(e))&&!e.includes("edge/"))return"Chrome";if(Ep(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wp(t=_e()){return/firefox\//i.test(t)}function xp(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kp(t=_e()){return/crios\//i.test(t)}function _p(t=_e()){return/iemobile/i.test(t)}function Ep(t=_e()){return/android/i.test(t)}function Sp(t=_e()){return/blackberry/i.test(t)}function Ip(t=_e()){return/webos/i.test(t)}function mu(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tv(t=_e()){var e;return mu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Pv(){return B1()&&document.documentMode===10}function bp(t=_e()){return mu(t)||Ep(t)||Ip(t)||Sp(t)||/windows phone/i.test(t)||_p(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e=[]){let n;switch(t){case"Browser":n=md(_e());break;case"Worker":n=`${md(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class Rv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Av(t,e={}){return je(t,"GET","/v2/passwordPolicy",Ie(t,e))}/**
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
 */const Ov=6;class jv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ov,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gd(this),this.idTokenSubscription=new gd(this),this.beforeStateQueue=new Rv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gs(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(yt(this));const n=e?qe(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Av(this),n=new jv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Nv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&dv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Je(t){return qe(t)}class gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=q1(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dv(t){Ai=t}function gu(t){return Ai.loadJS(t)}function Mv(){return Ai.recaptchaV2Script}function Uv(){return Ai.recaptchaEnterpriseScript}function zv(){return Ai.gapiScript}function Np(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=500,Fv=6e4,es=1e12;class Vv{constructor(e){this.auth=e,this.counter=es,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Wv(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||es;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||es;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||es;return(r=this._widgets.get(n))==null||r.execute(),""}}class Bv{constructor(){this.enterprise=new Hv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Hv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Wv{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Gv(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Fv)},$v))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Gv(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Kv="recaptcha-enterprise",ti="NO_RECAPTCHA";class Tp{constructor(e){this.type=Kv,this.auth=Je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new mp(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;dd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ti)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Uv();l.length!==0&&(l+=a),gu(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Lr(t,e,n,r=!1,i=!1){const s=new Tp(t);let o;if(i)o=ti;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Cn(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Lr(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Lr(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Lr(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Lr(t,e,n,!1,!0);return r(t,m)}return Promise.reject(l)})}else{const a=await Lr(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Qv(t){const e=Je(t),n=await gp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new mp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Tp(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){const n=sp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pr(s,e??{}))return i;Ye(i,"already-initialized")}return n.initialize({options:e})}function qv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jv(t,e,n){const r=Je(t);S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Pp(e),{host:o,port:a}=Xv(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){S(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),S(pr(c,r.config.emulator)&&pr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,mo(o)?(L1(`${s}//${o}${l}`),U1("Auth",!0)):i||Zv()}function Pp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xv(t){const e=Pp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yd(o)}}}function yd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,n){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}async function ew(t,e){return je(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t,e){return mn(t,"POST","/v1/accounts:signInWithPassword",Ie(t,e))}async function nw(t,e){return je(t,"POST","/v1/accounts:sendOobCode",Ie(t,e))}async function rw(t,e){return nw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t,e){return mn(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}async function sw(t,e){return mn(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends go{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ei(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cn(e,n,"signInWithPassword",tw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return iw(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cn(e,r,"signUpPassword",ew,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return sw(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e){return mn(t,"POST","/v1/accounts:signInWithIdp",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="http://localhost";class On extends go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new On(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:ow,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(t,e){return je(t,"POST","/v1/accounts:sendVerificationCode",Ie(t,e))}async function aw(t,e){return mn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e))}async function lw(t,e){const n=await mn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e));if(n.temporaryProof)throw Vr(t,"account-exists-with-different-credential",n);return n}const uw={USER_NOT_FOUND:"user-not-found"};async function cw(t,e){const n={...e,operation:"REAUTH"};return mn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,n),uw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends go{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ni({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ni({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return aw(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return lw(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return cw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ni({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fw(t){const e=$r(Fr(t)).link,n=e?$r(Fr(e)).deep_link_id:null,r=$r(Fr(t)).deep_link_id;return(r?$r(Fr(r)).link:null)||r||n||e||t}class yu{constructor(e){const n=$r(Fr(e)),r=n.apiKey??null,i=n.oobCode??null,s=dw(n.mode??null);S(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fw(e);try{return new yu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.providerId=kr.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yu.parseLink(n);return S(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}kr.PROVIDER_ID="password";kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oi extends vu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Oi{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return On._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Oi{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Oi{constructor(){super("twitter.com")}static credential(e,n){return On._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,e){return mn(t,"POST","/v1/accounts:signUp",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),o=wd(r);return new jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wd(r);return new jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends pn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qs(e,n,r,i)}}function Rp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(t,s,e,r):s})}async function pw(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}/**
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
 */async function mw(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await gr(t,Rp(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=pu(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e,n=!1){if(Me(t.app))return Promise.reject(yt(t));const r="signIn",i=await Rp(t,r,e),s=await jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Op(t,e){return Ap(Je(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t,e,n){var r;S(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),S(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t){const e=Je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yw(t,e,n){const r=Je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&gw(r,i,n),await Cn(r,i,"getOobCode",rw,"EMAIL_PASSWORD_PROVIDER")}async function vw(t,e,n){if(Me(t.app))return Promise.reject(yt(t));const r=Je(t),o=await Cn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jp(t),l}),a=await jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ww(t,e,n){return Me(t.app)?Promise.reject(yt(t)):Op(qe(t),kr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,e){return je(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,xw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e){return qe(t).setPersistence(e)}function Ew(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function Sw(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function Iw(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function xd(t){return qe(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:start",Ie(t,e))}const Ys="__sak";/**
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
 */class Lp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=1e3,Cw=10;class Dp extends Lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Pv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dp.type="LOCAL";const Mp=Dp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Up.type="SESSION";const wu=Up;/**
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
 */function Nw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Nw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=xu("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function Pw(t){se().location.href=t}/**
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
 */function ku(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Rw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Aw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ow(){return ku()?self:null}/**
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
 */const zp="firebaseLocalStorageDb",jw=1,qs="firebaseLocalStorage",$p="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vo(t,e){return t.transaction([qs],e?"readwrite":"readonly").objectStore(qs)}function Lw(){const t=indexedDB.deleteDatabase(zp);return new ji(t).toPromise()}function fl(){const t=indexedDB.open(zp,jw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qs,{keyPath:$p})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qs)?e(r):(r.close(),await Lw(),e(await fl()))})})}async function _d(t,e,n){const r=vo(t,!0).put({[$p]:e,value:n});return new ji(r).toPromise()}async function Dw(t,e){const n=vo(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function Ed(t,e){const n=vo(t,!0).delete(e);return new ji(n).toPromise()}const Mw=800,Uw=3;class Fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Uw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yo._getInstance(Ow()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Rw(),!this.activeServiceWorker)return;this.sender=new Tw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Aw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fl();return await _d(e,Ys,"1"),await Ed(e,Ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_d(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Dw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vo(i,!1).getAll();return new ji(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fp.type="LOCAL";const zw=Fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:start",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=Np("rcb"),$w=new Ri(3e4,6e4);class Fw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=se().grecaptcha)!=null&&e.render)}load(e,n=""){return S(Vw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&cd(se().grecaptcha)?Promise.resolve(se().grecaptcha):new Promise((r,i)=>{const s=se().setTimeout(()=>{i(Oe(e,"network-request-failed"))},$w.get());se()[la]=()=>{se().clearTimeout(s),delete se()[la];const a=se().grecaptcha;if(!a||!cd(a)){i(Oe(e,"internal-error"));return}const l=a.render;a.render=(c,m)=>{const h=l(c,m);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Mv()}?${xr({onload:la,render:"explicit",hl:n})}`;gu(o).catch(()=>{clearTimeout(s),i(Oe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=se().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Vw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Bw{async load(e){return new Vv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="recaptcha",Hw={theme:"light",type:"image"};class Ww{constructor(e,n,r={...Hw}){this.parameters=r,this.type=ri,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Je(e),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Bw:new Fw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(dp()&&!ku(),this.auth,"internal-error"),await Gw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await xv(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Gw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ni._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Qw(t,e,n){if(Me(t.app))return Promise.reject(yt(t));const r=Je(t),i=await Yw(r,e,qe(n));return new Kw(i,s=>Op(r,s))}async function Yw(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Qv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){S(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Cn(t,o,"mfaSmsEnrollment",async(m,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===ti){S((n==null?void 0:n.type)===ri,m,"argument-error");const f=await ua(m,h,n);return kd(m,f)}return kd(m,h)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{S(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;S(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Cn(t,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===ti){S((n==null?void 0:n.type)===ri,h,"argument-error");const y=await ua(h,f,n);return Sd(h,y)}return Sd(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Cn(t,s,"sendVerificationCode",async(c,m)=>{if(m.captchaResponse===ti){S((n==null?void 0:n.type)===ri,c,"argument-error");const h=await ua(c,m,n);return vd(c,h)}return vd(c,m)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function ua(t,e,n){S(n.type===ri,t,"argument-error");const r=await n.verify();S(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Vp(t,e){return e?Nt(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _u extends go{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qw(t){return Ap(t.auth,new _u(t),t.bypassAuthState)}function Jw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),mw(n,new _u(t),t.bypassAuthState)}async function Xw(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),pw(n,new _u(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qw;case"linkViaPopup":case"linkViaRedirect":return Xw;case"reauthViaPopup":case"reauthViaRedirect":return Jw;default:Ye(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Ri(2e3,1e4);async function ex(t,e,n){if(Me(t.app))return Promise.reject(Oe(t,"operation-not-supported-in-this-environment"));const r=Je(t);fv(t,e,vu);const i=Vp(r,n);return new Sn(r,"signInViaPopup",e,i).executeNotNull()}class Sn extends Bp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zw.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="pendingRedirect",ys=new Map;class nx extends Bp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const r=await rx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rx(t,e){const n=ox(e),r=sx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ix(t,e){ys.set(t._key(),e)}function sx(t){return Nt(t._redirectPersistence)}function ox(t){return gs(tx,t.config.apiKey,t.name)}async function ax(t,e,n=!1){if(Me(t.app))return Promise.reject(yt(t));const r=Je(t),i=Vp(r,e),o=await new nx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=10*60*1e3;class ux{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Oe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(e))}saveEventToCache(e){this.cachedEventUids.add(Id(e)),this.lastProcessedEventTime=Date.now()}}function Id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e={}){return je(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hx=/^https?/;async function px(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dx(t);for(const n of e)try{if(mx(n))return}catch{}Ye(t,"unauthorized-domain")}function mx(t){const e=cl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hx.test(n))return!1;if(fx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gx=new Ri(3e4,6e4);function bd(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yx(t){return new Promise((e,n)=>{var i,s,o;function r(){bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(Oe(t,"network-request-failed"))},timeout:gx.get()})}if((s=(i=se().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=se().gapi)!=null&&o.load)r();else{const a=Np("iframefcb");return se()[a]=()=>{gapi.load?r():n(Oe(t,"network-request-failed"))},gu(`${zv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vs=null,e})}let vs=null;function vx(t){return vs=vs||yx(t),vs}/**
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
 */const wx=new Ri(5e3,15e3),xx="__/auth/iframe",kx="emulator/auth/iframe",_x={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sx(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hu(e,kx):`https://${t.config.authDomain}/${xx}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},i=Ex.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xr(r).slice(1)}`}async function Ix(t){const e=await vx(t),n=se().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:Sx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_x,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Oe(t,"network-request-failed"),a=se().setTimeout(()=>{s(o)},wx.get());function l(){se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const bx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cx=500,Nx=600,Tx="_blank",Px="http://localhost";class Cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rx(t,e,n,r=Cx,i=Nx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...bx,width:r.toString(),height:i.toString(),top:s,left:o},c=_e().toLowerCase();n&&(a=kp(c)?Tx:n),wp(c)&&(e=e||Px,l.scrollbars="yes");const m=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(Tv(c)&&a!=="_self")return Ax(e||"",a),new Cd(null);const h=window.open(e||"",a,m);S(h,t,"popup-blocked");try{h.focus()}catch{}return new Cd(h)}function Ax(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ox="__/auth/handler",jx="emulator/auth/handler",Lx=encodeURIComponent("fac");async function Nd(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(e instanceof vu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Y1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,h]of Object.entries(s||{}))o[m]=h}if(e instanceof Oi){const m=e.getScopes().filter(h=>h!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const l=await t._getAppCheckToken(),c=l?`#${Lx}=${encodeURIComponent(l)}`:"";return`${Dx(t)}?${xr(a).slice(1)}${c}`}function Dx({config:t}){return t.emulator?hu(t,jx):`https://${t.authDomain}/${Ox}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="webStorageSupport";class Mx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wu,this._completeRedirectFn=ax,this._overrideRedirectResult=ix}async _openPopup(e,n,r,i){var o;Lt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Nd(e,n,r,cl(),i);return Rx(e,s,xu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nd(e,n,r,cl(),i);return Pw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ix(e),r=new ux(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ca,{type:ca},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ca];s!==void 0&&n(!!s),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=px(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bp()||xp()||mu()}}const Ux=Mx;var Td="@firebase/auth",Pd="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fx(t){ki(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cp(t)},c=new Lv(r,i,s,l);return qv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ki(new mr("auth-internal",e=>{const n=Je(e.getProvider("auth").getImmediate());return(r=>new zx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Td,Pd,$x(t)),rr(Td,Pd,"esm2020")}/**
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
 */const Vx=5*60,Bx=tp("authIdTokenMaxAge")||Vx;let Rd=null;const Hx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bx)return;const i=n==null?void 0:n.token;Rd!==i&&(Rd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wx(t=Jy()){const e=sp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yv(t,{popupRedirectResolver:Ux,persistence:[zw,Mp,wu]}),r=tp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Hx(s.toString());Sw(n,o,()=>o(n.currentUser)),Ew(n,a=>o(a))}}const i=O1("auth");return i&&Jv(n,`http://${i}`),n}function Gx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Dv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Oe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Gx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fx("Browser");const Kx={apiKey:"AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",authDomain:"vokal-pro-studio-app-2026.firebaseapp.com",projectId:"vokal-pro-studio-app-2026",storageBucket:"vokal-pro-studio-app-2026.firebasestorage.app",messagingSenderId:"390591097726",appId:"1:390591097726:web:fceb62a64f27876578212f"},Qx=op(Kx),ft=Wx(Qx);let Yx={data:""},qx=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Yx},Jx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Xx=/\/\*[^]*?\*\/|  +/g,Ad=/\n+/g,Yt=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Yt(o,s):s+"{"+Yt(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Yt(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Yt.p?Yt.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},kt={},Wp=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Wp(t[n]);return e}return t},Zx=(t,e,n,r,i)=>{let s=Wp(t),o=kt[s]||(kt[s]=(l=>{let c=0,m=11;for(;c<l.length;)m=101*m+l.charCodeAt(c++)>>>0;return"go"+m})(s));if(!kt[o]){let l=s!==t?t:(c=>{let m,h,f=[{}];for(;m=Jx.exec(c.replace(Xx,""));)m[4]?f.shift():m[3]?(h=m[3].replace(Ad," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][m[1]]=m[2].replace(Ad," ").trim();return f[0]})(t);kt[o]=Yt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&kt.g?kt.g:null;return n&&(kt.g=kt[o]),((l,c,m,h)=>{h?c.data=c.data.replace(h,l):c.data.indexOf(l)===-1&&(c.data=m?l+c.data:c.data+l)})(kt[o],e,r,a),o},ek=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Yt(a,""):a===!1?"":a}return r+i+(o??"")},"");function wo(t){let e=this||{},n=t.call?t(e.p):t;return Zx(n.unshift?n.raw?ek(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,qx(e.target),e.g,e.o,e.k)}let Gp,hl,pl;wo.bind({g:1});let Dt=wo.bind({k:1});function tk(t,e,n,r){Yt.p=e,Gp=t,hl=n,pl=r}function gn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:hl&&hl()},a),n.o=/ *go\d+/.test(l),a.className=wo.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let c=t;return t[0]&&(c=a.as||t,delete a.as),pl&&c[0]&&pl(a),Gp(c,a)}return e?e(i):i}}var nk=t=>typeof t=="function",Js=(t,e)=>nk(t)?t(e):t,rk=(()=>{let t=0;return()=>(++t).toString()})(),Kp=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ik=20,Eu="default",Qp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return Qp(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ws=[],Yp={toasts:[],pausedAt:void 0,settings:{toastLimit:ik}},pt={},qp=(t,e=Eu)=>{pt[e]=Qp(pt[e]||Yp,t),ws.forEach(([n,r])=>{n===e&&r(pt[e])})},Jp=t=>Object.keys(pt).forEach(e=>qp(t,e)),sk=t=>Object.keys(pt).find(e=>pt[e].toasts.some(n=>n.id===t)),xo=(t=Eu)=>e=>{qp(e,t)},ok={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ak=(t={},e=Eu)=>{let[n,r]=E.useState(pt[e]||Yp),i=E.useRef(pt[e]);E.useEffect(()=>(i.current!==pt[e]&&r(pt[e]),ws.push([e,r]),()=>{let o=ws.findIndex(([a])=>a===e);o>-1&&ws.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||ok[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},lk=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||rk()}),Li=t=>(e,n)=>{let r=lk(e,t,n);return xo(r.toasterId||sk(r.id))({type:2,toast:r}),r.id},O=(t,e)=>Li("blank")(t,e);O.error=Li("error");O.success=Li("success");O.loading=Li("loading");O.custom=Li("custom");O.dismiss=(t,e)=>{let n={type:3,toastId:t};e?xo(e)(n):Jp(n)};O.dismissAll=t=>O.dismiss(void 0,t);O.remove=(t,e)=>{let n={type:4,toastId:t};e?xo(e)(n):Jp(n)};O.removeAll=t=>O.remove(void 0,t);O.promise=(t,e,n)=>{let r=O.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Js(e.success,i):void 0;return s?O.success(s,{id:r,...n,...n==null?void 0:n.success}):O.dismiss(r),i}).catch(i=>{let s=e.error?Js(e.error,i):void 0;s?O.error(s,{id:r,...n,...n==null?void 0:n.error}):O.dismiss(r)}),t};var uk=1e3,ck=(t,e="default")=>{let{toasts:n,pausedAt:r}=ak(t,e),i=E.useRef(new Map).current,s=E.useCallback((h,f=uk)=>{if(i.has(h))return;let y=setTimeout(()=>{i.delete(h),o({type:4,toastId:h})},f);i.set(h,y)},[]);E.useEffect(()=>{if(r)return;let h=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let w=(y.duration||0)+y.pauseDuration-(h-y.createdAt);if(w<0){y.visible&&O.dismiss(y.id);return}return setTimeout(()=>O.dismiss(y.id,e),w)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=E.useCallback(xo(e),[e]),a=E.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=E.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),c=E.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=E.useCallback((h,f)=>{let{reverseOrder:y=!1,gutter:w=8,defaultPosition:k}=f||{},R=n.filter(g=>(g.position||k)===(h.position||k)&&g.height),p=R.findIndex(g=>g.id===h.id),d=R.filter((g,v)=>v<p&&g.visible).length;return R.filter(g=>g.visible).slice(...y?[d+1]:[0,d]).reduce((g,v)=>g+(v.height||0)+w,0)},[n]);return E.useEffect(()=>{n.forEach(h=>{if(h.dismissed)s(h.id,h.removeDelay);else{let f=i.get(h.id);f&&(clearTimeout(f),i.delete(h.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:m}}},dk=Dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fk=Dt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hk=Dt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pk=gn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${dk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fk} 0.15s ease-out forwards;
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
    animation: ${hk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,mk=Dt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,gk=gn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${mk} 1s linear infinite;
`,yk=Dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vk=Dt`
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
}`,wk=gn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vk} 0.2s ease-out forwards;
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
`,xk=gn("div")`
  position: absolute;
`,kk=gn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_k=Dt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ek=gn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_k} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Sk=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(Ek,null,e):e:n==="blank"?null:E.createElement(kk,null,E.createElement(gk,{...r}),n!=="loading"&&E.createElement(xk,null,n==="error"?E.createElement(pk,{...r}):E.createElement(wk,{...r})))},Ik=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bk=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ck="0%{opacity:0;} 100%{opacity:1;}",Nk="0%{opacity:1;} 100%{opacity:0;}",Tk=gn("div")`
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
`,Pk=gn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Rk=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=Kp()?[Ck,Nk]:[Ik(n),bk(n)];return{animation:e?`${Dt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Dt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ak=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Rk(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(Sk,{toast:t}),o=E.createElement(Pk,{...t.ariaProps},Js(t.message,t));return E.createElement(Tk,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});tk(E.createElement);var Ok=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},jk=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Kp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Lk=wo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ts=16,Xp=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=ck(n,s);return E.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:ts,left:ts,right:ts,bottom:ts,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(m=>{let h=m.position||e,f=c.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),y=jk(h,f);return E.createElement(Ok,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?Lk:"",style:y},m.type==="custom"?Js(m.message,m):i?i(m):E.createElement(Ak,{toast:m,position:h}))}))};const Dk=()=>u.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[u.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),u.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),u.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),u.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});function Mk({onGuestLogin:t}){const[e,n]=E.useState(!0),[r,i]=E.useState("email"),[s,o]=E.useState(""),[a,l]=E.useState(""),[c,m]=E.useState(""),[h,f]=E.useState(""),[y,w]=E.useState(""),[k,R]=E.useState(!0),[p,d]=E.useState(!1),[g,v]=E.useState(!1),I=async L=>{L.preventDefault(),d(!0);try{if(await _w(ft,k?Mp:wu),e)await ww(ft,a,c),O.success("Successfully logged in!");else{const ue=await vw(ft,a,c);await kw(ue.user,{displayName:s}),O.success("Account created successfully!")}}catch(ue){O.error(ue.message.replace("Firebase:","").trim())}finally{d(!1)}},N=async()=>{if(!a){O.error("Please enter your email address first.");return}d(!0);try{await yw(ft,a),O.success("Password reset email sent! Check your inbox.")}catch(L){O.error(L.message.replace("Firebase:","").trim())}finally{d(!1)}},T=async()=>{d(!0);try{const L=new St;await ex(ft,L),O.success("Successfully logged in with Google!")}catch(L){O.error(L.message.replace("Firebase:","").trim())}finally{d(!1)}},P=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new Ww(ft,"recaptcha-container",{size:"invisible"}))},H=async L=>{if(L.preventDefault(),!h.startsWith("+"))return O.error("Please enter phone number with country code (e.g. +91...)");d(!0);try{P();const ue=window.recaptchaVerifier,Le=await Qw(ft,h,ue);window.confirmationResult=Le,v(!0),O.success("OTP sent to your phone")}catch(ue){O.error(ue.message)}finally{d(!1)}},j=async L=>{L.preventDefault(),d(!0);try{await window.confirmationResult.confirm(y),O.success("Phone completely verified!")}catch{O.error("Invalid OTP Code")}finally{d(!1)}};return u.jsxs("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300",children:[u.jsx(Xp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),u.jsxs("div",{className:"w-full max-w-md relative z-10",children:[u.jsxs("div",{className:"mb-10 text-center",children:[u.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-2",children:["VOKAL ",u.jsx("span",{className:"text-blue-500",children:"PRO"})]}),u.jsx("p",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Studio Edition • Access Portal"})]}),u.jsxs("div",{className:"bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),u.jsxs("button",{type:"button",onClick:T,disabled:p,className:"w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50",children:[u.jsx(Dk,{})," Continue with Google"]}),u.jsxs("div",{className:"flex items-center gap-4 mb-6 opacity-30",children:[u.jsx("div",{className:"flex-1 h-px bg-white"}),u.jsx("div",{className:"text-[10px] font-black uppercase text-white tracking-widest",children:"Or Use"}),u.jsx("div",{className:"flex-1 h-px bg-white"})]}),u.jsxs("div",{className:"flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8",children:[u.jsxs("button",{onClick:()=>i("email"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="email"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[u.jsx(Qc,{className:"w-4 h-4"})," Email"]}),u.jsxs("button",{onClick:()=>i("phone"),className:`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${r==="phone"?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-white"}`,children:[u.jsx(Yc,{className:"w-4 h-4"})," Phone"]})]}),r==="email"&&u.jsxs("form",{onSubmit:I,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[u.jsxs("div",{className:"space-y-4",children:[!e&&u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(ps,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"text",required:!0,placeholder:"Full Name",value:s,onChange:L=>o(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(Qc,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"email",required:!0,placeholder:"Email Address",value:a,onChange:L=>l(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]}),u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(il,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"password",required:!0,placeholder:"Password",value:c,onChange:L=>m(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm"})]})]}),e&&u.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 px-1",children:[u.jsxs("label",{className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[u.jsx("input",{type:"checkbox",checked:k,onChange:L=>R(L.target.checked),className:"rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500"}),"Remember me"]}),u.jsx("button",{type:"button",onClick:N,className:"hover:text-blue-400 transition-colors",children:"Forgot Password?"})]}),u.jsxs("button",{disabled:p,type:"submit",className:"w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[p?"Processing...":e?"Sign In To Studio":"Create Account",!p&&u.jsx(Qh,{className:"w-4 h-4"})]}),u.jsx("div",{className:"text-center mt-6",children:u.jsx("button",{type:"button",onClick:()=>n(!e),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:e?"Don't have an account? Sign Up":"Already have an account? Sign In"})})]}),r==="phone"&&u.jsxs("form",{onSubmit:g?j:H,className:"space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[g?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(il,{className:"h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors"})}),u.jsx("input",{type:"text",required:!0,placeholder:"Enter 6-digit OTP",value:y,onChange:L=>w(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center"})]}),u.jsx("button",{disabled:p,type:"submit",className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50",children:p?"Verifying...":"Verify & Enter"}),u.jsx("div",{className:"text-center mt-4",children:u.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors",children:"Wrong Number? Go Back"})})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx(Yc,{className:"h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors"})}),u.jsx("input",{type:"tel",required:!0,placeholder:"+91 99999 99999",value:h,onChange:L=>f(L.target.value),className:"w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest"})]}),u.jsxs("button",{disabled:p,type:"submit",className:"w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50",children:[p?"Sending OTP...":"Send OTP Code",!p&&u.jsx(Xr,{className:"w-4 h-4"})]})]}),u.jsx("div",{id:"recaptcha-container"})]})]}),u.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600",children:[u.jsxs("button",{type:"button",onClick:t,className:"py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group",children:[u.jsx(Xr,{className:"w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform"})," Try Studio as Guest"]}),u.jsxs("div",{className:"flex items-center gap-2 mt-2 opacity-50",children:[u.jsx(Yh,{className:"w-3 h-3"})," Secure Google Firebase Authentication"]})]})]})]})}const Uk="https://vokal-pro-api.vercel.app/api/generate",zk=[{id:"Malayalam",native:"മലയാളം"},{id:"English",native:"English"},{id:"Hindi",native:"ഹിन्दी"},{id:"Tamil",native:"தமிழ்"}],$k=()=>u.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
    `}}),Fk=[{id:"English",label:"English Sub"},{id:"Malayalam",label:"Malayalam Sub"},{id:"Hindi",label:"Hindi Sub"},{id:"Tamil",label:"Tamil Sub"}],Od=[{id:"Maya",label:"Maya",type:"Female",desc:"Warm, expressive, maternal storytelling."},{id:"Francis",label:"Francis",type:"Ultra Bass",desc:"Legendary voice with deep cinematic resonance."},{id:"Charan",label:"Charan",type:"Slow Bass",desc:"Deep and slow flow."},{id:"Ahaana",label:"Ahaana",type:"Professional",desc:"Clear professional voice."}],Vk=()=>{var Nu,Tu;const[t,e]=E.useState("studio"),[n,r]=E.useState("Malayalam"),[i,s]=E.useState("English"),[o,a]=E.useState(!1),[l,c]=E.useState(!1),[m,h]=E.useState(null),[f,y]=E.useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?"),[w,k]=E.useState(!1),[R,p]=E.useState("Maya"),[d,g]=E.useState([]),[v,I]=E.useState(null),[N,T]=E.useState([]),[P,H]=E.useState(""),[j,L]=E.useState(!1),[ue,Le]=E.useState(null),[_r,ko]=E.useState(!1),[G,Er]=E.useState(null),[_,A]=E.useState(!1),[D,J]=E.useState(!0),[Y,Ut]=E.useState(!1),[vt,Xe]=E.useState(!1),[zt,Mn]=E.useState(60),[lt,ut]=E.useState({show:!1,title:"",message:"",onConfirm:null,type:"danger"});E.useEffect(()=>Iw(ft,z=>{Er(z),z&&Mn(60),J(!1)}),[]);const Zp=()=>lt.show?u.jsxs("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-300",children:[u.jsx("div",{className:"absolute inset-0 bg-black/90 backdrop-blur-md",onClick:()=>ut({...lt,show:!1})}),u.jsxs("div",{className:"relative w-full max-w-sm bg-[#0F1118] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[u.jsx("div",{className:`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${lt.type==="danger"?"bg-red-500/10 text-red-500":"bg-blue-500/10 text-blue-500"}`,children:lt.type==="danger"?u.jsx(ea,{className:"w-8 h-8"}):u.jsx(ta,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest text-center mb-3",children:lt.title}),u.jsx("p",{className:"text-slate-400 text-sm font-medium text-center mb-8 leading-relaxed px-2",children:lt.message}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx("button",{onClick:()=>{lt.onConfirm(),ut({...lt,show:!1})},className:`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl ${lt.type==="danger"?"bg-red-500 hover:bg-red-400 text-white shadow-red-500/20":"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"}`,children:"Yes, I'm sure"}),u.jsx("button",{onClick:()=>ut({...lt,show:!1}),className:"w-full py-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5",children:"No, Cancel"})]})]})]}):null,ie=E.useRef(null),Sr=E.useRef(new Audio),em=(b,z)=>{const te=new ArrayBuffer(44+b.length*2),V=new DataView(te),we=(Ce,wt)=>{for(let Ze=0;Ze<wt.length;Ze++)V.setUint8(Ce+Ze,wt.charCodeAt(Ze))};we(0,"RIFF"),V.setUint32(4,32+b.length*2,!0),we(8,"WAVE"),we(12,"fmt "),V.setUint32(16,16,!0),V.setUint16(20,1,!0),V.setUint16(22,1,!0),V.setUint32(24,z,!0),V.setUint32(28,z*2,!0),V.setUint16(32,2,!0),V.setUint16(34,16,!0),we(36,"data"),V.setUint32(40,b.length*2,!0);let be=44;for(let Ce=0;Ce<b.length;Ce++,be+=2)V.setInt16(be,b[Ce],!0);return new Blob([te],{type:"audio/wav"})},Su=b=>b?b.trim().split(/\n\s*\n/).map(te=>{const V=te.split(`
`);if(V.length<3)return null;const we=V[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);if(!we)return null;const be=Ce=>{const[wt,Ze,Di]=Ce.split(":"),[Ir,_o]=Di.split(",");return parseInt(wt)*3600+parseInt(Ze)*60+parseInt(Ir)+parseInt(_o)/1e3};return{start:be(we[1]),end:be(we[2]),text:V.slice(2).join(" ")}}).filter(te=>te!==null):[];E.useEffect(()=>{ie.current=new Audio;const b=()=>{if(!ie.current||N.length===0)return;const z=ie.current.currentTime,te=N.find(V=>z>=V.start&&z<=V.end);H(te?te.text:"")};return ie.current.addEventListener("timeupdate",b),ie.current.onplay=()=>{v&&ie.current.src===v.url&&L(!0)},ie.current.onpause=()=>{L(!1),Le(null)},ie.current.onended=()=>{L(!1),H(""),Le(null)},()=>{var z;return(z=ie.current)==null?void 0:z.removeEventListener("timeupdate",b)}},[N,v]);const Iu=async()=>{ko(!0);try{const b="data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";ie.current.src=b,await ie.current.play().then(()=>ie.current.pause())}catch{console.warn("Engine Unlocked")}},bu=async(b,z)=>{let te=0;const V=3,we=async()=>{const be=await fetch(Uk,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:b,payload:z})});if(!be.ok){const Ce=await be.json().catch(()=>({}));if(be.status===429||(Ce==null?void 0:Ce.error)==="TOO_MANY_REQUESTS")throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");if(te<V){te++;const wt=Math.pow(2,te)*1e3;return await new Promise(Ze=>setTimeout(Ze,wt)),we()}throw new Error(`System Error: ${be.status}`)}return await be.json()};return we()},tm=async()=>{var b,z,te,V,we,be,Ce,wt,Ze,Di;if(!w){if(!_&&G&&!Y){Xe(!0),O.error("Please upgrade to a Studio Pro plan to generate full-length audios!",{icon:"👑"});return}if(_r||await Iu(),!!f.trim()){k(!0),h(null);try{let _o={Maya:"Aoede",Francis:"Charon",Charan:"Charon",Ahaana:"Kore"}[R]||R;const nm={contents:[{parts:[{text:`${R==="Maya"||R==="Ahaana"?"Speak in a natural, warm, and expressive Malayalam female voice with a steady, conversational pace. Ensure the flow is natural and not rushed.":"Speak in a clear, professional male voice with a natural, steady conversational flow. Maintain a balanced and natural speed."}: ${f}`}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:_o}}}}};let Pu=null;if(o){const br=`Generate .SRT subtitles in ${i} for: "${f}"`;Pu=bu("analysis",{contents:[{role:"user",parts:[{text:br}]}]})}const[rm,Eo]=await Promise.all([bu("tts",nm),Pu]),So=(we=(V=(te=(z=(b=rm.candidates)==null?void 0:b[0])==null?void 0:z.content)==null?void 0:te.parts)==null?void 0:V[0])==null?void 0:we.inlineData,Ru=((Di=(Ze=(wt=(Ce=(be=Eo==null?void 0:Eo.candidates)==null?void 0:be[0])==null?void 0:Ce.content)==null?void 0:wt.parts)==null?void 0:Ze[0])==null?void 0:Di.text)||"";if(So){const br=atob(So.data),Au=br.length,Ou=new Int16Array(Au/2);for(let yn=0;yn<Au;yn+=2)Ou[yn/2]=br.charCodeAt(yn+1)<<8|br.charCodeAt(yn);const im=parseInt(So.mimeType.split("rate=")[1])||24e3,sm=em(Ou,im),ju=URL.createObjectURL(sm),Lu={url:ju,srt:Ru,srtLang:o?i:"None",text:f.substring(0,40),date:new Date().toLocaleTimeString(),voice:R,timestamp:Date.now()};I(Lu),T(o?Su(Ru):[]),g(yn=>[Lu,...yn]),ie.current.src=ju,O.success("Studio Master Generated Successfully!",{icon:"✨"})}}catch(Ir){h(Ir.message),O.error("Generation Failed: "+Ir.message,{icon:"❌"})}finally{k(!1)}}}};if(D)return u.jsx("div",{className:"min-h-screen bg-[#08090D] flex items-center justify-center",children:u.jsx(Kc,{className:"w-10 h-10 text-blue-500 animate-spin"})});if(!G&&!_)return u.jsx(Mk,{onGuestLogin:()=>A(!0)});const Cu=u.jsx("div",{className:"space-y-3 relative z-10 w-full mb-4",children:Od.map(b=>u.jsxs("div",{className:`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${R===b.id?"bg-blue-500/10 border-blue-500/30 shadow-inner":"bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5"}`,onClick:()=>{p(b.id),c(!1)},children:[u.jsx("button",{onClick:z=>{if(z.stopPropagation(),ue===b.id)Sr.current.pause(),Sr.current.currentTime=0,Le(null);else{j&&ie.current.pause();const te="/vokal-pro-studio/",V=`previews/${n.toLowerCase()}/${b.id.toLowerCase()}.wav`;Sr.current.src=te+V,Sr.current.play().catch(we=>{console.warn("Preview missing:",V),O.error(`Missing audio for ${n}: ${b.id}`,{icon:"📂",description:`File should be at: ${V}`})}),Le(b.id),Sr.current.onended=()=>Le(null)}},className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${ue===b.id?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/20":R===b.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white"}`,children:ue===b.id?u.jsx(u1,{className:"w-4 h-4"}):u.jsx(qc,{className:"w-4 h-4 ml-0.5"})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:`text-sm font-bold mb-1 transition-colors ${R===b.id?"text-white":"text-slate-300 group-hover:text-white"}`,children:b.label}),u.jsx("div",{className:"text-[10px] text-slate-500 font-medium",children:b.type})]}),R===b.id&&u.jsx(xt,{className:"w-5 h-5 text-blue-500 shrink-0"})]},b.id))});return u.jsxs("div",{className:"h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans",children:[u.jsx($k,{}),u.jsx(Zp,{}),u.jsx(Xp,{position:"top-center",toastOptions:{style:{background:"#1c1c24",color:"#fff",border:"1px solid rgba(255,255,255,0.1)"}}}),vt&&u.jsx("div",{className:"fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col",children:[u.jsx("button",{onClick:()=>Xe(!1),className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10",children:u.jsx(Xc,{className:"w-6 h-6"})}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"}),u.jsxs("div",{className:"p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar",children:[u.jsxs("div",{className:"text-center mb-12 relative z-10",children:[u.jsxs("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter mb-4",children:["VOKAL ",u.jsx("span",{className:"text-blue-500",children:"PRO"})," PLANS"]}),u.jsx("p",{className:"text-slate-400 max-w-xl mx-auto font-medium",children:"Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities."})]}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:[u.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-emerald-500/30 transition-all group",children:[u.jsx("div",{className:"text-emerald-500 mb-6 bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",children:u.jsx(Xr,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Starter"}),u.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:"Perfect for testing"}),u.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹99 ",u.jsx("span",{className:"text-sm font-medium text-slate-500",children:"/ 3 Audio"})]}),u.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-emerald-500 shrink-0"})," 3 Audio Generations"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-emerald-500 shrink-0"})," Standard Quality"]})]}),u.jsx("button",{onClick:()=>{ut({show:!0,title:"Activate Starter",message:"Are you sure you want to activate the Starter Plan?",type:"primary",onConfirm:()=>{Ut(!0),Xe(!1),O.success("Starter Plan Activated!",{icon:"💳"})}})},className:"w-full py-4 bg-white/5 hover:bg-emerald-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Buy Now"})]}),u.jsxs("div",{className:"bg-gradient-to-b from-blue-900/40 to-black/80 border border-blue-500/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20",children:[u.jsx("div",{className:"absolute -top-4 inset-x-0 flex justify-center",children:u.jsx("span",{className:"bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30",children:"Most Popular"})}),u.jsx("div",{className:"text-blue-500 mb-6 bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center",children:u.jsx(ta,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Creator"}),u.jsx("div",{className:"text-blue-200/60 text-sm font-medium mb-6",children:"For serious creators"}),u.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹499 ",u.jsx("span",{className:"text-sm font-medium text-blue-500/50",children:"/ 100 Audio"})]}),u.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-blue-500 shrink-0"})," 100 Audio Generations"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-blue-500 shrink-0"})," Cinematic Vocals"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-blue-500 shrink-0"})," SRT Subtitle Export"]})]}),u.jsx("button",{onClick:()=>{ut({show:!0,title:"Activate Creator",message:"Are you sure you want to activate the Creator Plan?",type:"primary",onConfirm:()=>{Ut(!0),Xe(!1),O.success("Creator Plan Activated!",{icon:"💳"})}})},className:"w-full py-4 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Buy Creator"})]}),u.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-amber-500/30 transition-all group",children:[u.jsx("div",{className:"text-amber-500 mb-6 bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",children:u.jsx(Jo,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-black text-white uppercase tracking-widest mb-2",children:"Studio"}),u.jsx("div",{className:"text-slate-400 text-sm font-medium mb-6",children:"Unlimited Everything"}),u.jsxs("div",{className:"text-4xl font-black text-white mb-8",children:["₹999 ",u.jsx("span",{className:"text-sm font-medium text-slate-500",children:"/ Lifetime"})]}),u.jsxs("ul",{className:"space-y-4 mb-8 flex-1",children:[u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Unlimited Generations"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Priority Processing"]}),u.jsxs("li",{className:"flex gap-3 text-slate-300 text-sm",children:[u.jsx(xt,{className:"w-5 h-5 text-amber-500 shrink-0"})," Commercial Rights"]})]}),u.jsx("button",{onClick:()=>{ut({show:!0,title:"Go Unlimited",message:"Are you sure you want to activate the Studio Unlimited Plan?",type:"primary",onConfirm:()=>{Ut(!0),Xe(!1),O.success("Studio Plan Activated!",{icon:"💳"})}})},className:"w-full py-4 bg-white/5 hover:bg-amber-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all",children:"Go Unlimited"})]})]})]})]})}),l&&u.jsxs("div",{className:"fixed inset-0 z-[60] lg:hidden flex flex-col justify-end",children:[u.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>c(!1)}),u.jsxs("div",{className:"relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300",children:[u.jsxs("div",{className:"flex justify-between items-center mb-6 shrink-0",children:[u.jsxs("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3",children:[u.jsx(Xo,{className:"w-4 h-4 sm:w-5 sm:h-5 text-blue-500"})," Choose Voice Model"]}),u.jsx("button",{onClick:()=>c(!1),className:"p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:u.jsx(Xc,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"overflow-y-auto custom-scrollbar flex-1 pr-2",children:Cu})]})]}),!_r&&u.jsxs("div",{onClick:Iu,className:"fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)"},children:[u.jsx("style",{children:`
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
                    `}),u.jsxs("div",{style:{position:"relative",width:"320px",height:"320px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"40px",zIndex:10,flexShrink:0},children:[u.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",animation:"glow-pulse 2.5s ease-in-out infinite"}}),u.jsx("div",{style:{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.2)",animation:"spin-slow 12s linear infinite"},children:u.jsx("div",{style:{position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 14px 4px #3b82f6"}})}),u.jsx("div",{style:{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",border:"1px solid rgba(99,102,241,0.25)",animation:"spin-slow-rev 8s linear infinite"},children:u.jsx("div",{style:{position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:"#818cf8",boxShadow:"0 0 10px 3px #818cf8"}})}),u.jsx("div",{style:{position:"absolute",width:"160px",height:"160px",borderRadius:"50%",border:"1px solid rgba(59,130,246,0.15)",animation:"spin-slow 6s linear infinite"}}),u.jsx("div",{style:{position:"relative",zIndex:5,width:"100px",height:"100px",borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)",animation:"float-mic 3s ease-in-out infinite"},children:u.jsx(s1,{style:{width:"44px",height:"44px",color:"white"}})})]}),u.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"5px",height:"40px",marginBottom:"28px",zIndex:10},children:[["bar1","#3b82f6"],["bar2","#6366f1"],["bar3","#3b82f6"],["bar4","#60a5fa"],["bar5","#818cf8"],["bar1","#3b82f6"],["bar2","#6366f1"]].map(([b,z],te)=>u.jsx("div",{className:b,style:{width:"5px",borderRadius:"3px",background:z,opacity:.85}},te))}),u.jsx("h1",{style:{fontSize:"clamp(1rem,5vw,1.5rem)",fontWeight:900,letterSpacing:"0.35em",textTransform:"uppercase",zIndex:10,background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"text-shimmer 3s linear infinite",textAlign:"center",padding:"0 24px"},children:"Vokal Pro Studio"}),u.jsx("p",{style:{marginTop:"10px",fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(148,163,184,0.6)",zIndex:10,fontWeight:700},children:"AI Voice Engine"}),u.jsxs("div",{style:{position:"absolute",bottom:"60px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",zIndex:10},children:[u.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"tap-bounce 1.5s ease-in-out infinite"},children:u.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",children:u.jsx("path",{d:"M6 1v12M6 13l-4-4M6 13l4-4",stroke:"#3b82f6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(148,163,184,0.45)",fontWeight:700,textTransform:"uppercase"},children:"Tap anywhere"})]})]}),u.jsx("aside",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-[94%] max-w-[360px] md:w-24 bg-[#0F1118]/80 backdrop-blur-3xl border border-white/10 md:border-none md:bg-transparent rounded-[2rem] md:rounded-none flex md:flex-col items-center py-2.5 px-6 md:py-12 gap-4 md:gap-12 justify-center z-50 shadow-2xl shadow-black/80 md:shadow-none",children:u.jsxs("div",{className:"flex md:flex-col gap-8 md:gap-14 items-center w-full md:w-auto justify-around md:justify-start",children:[u.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-2xl hidden md:flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4",children:u.jsx(_1,{className:"text-white w-6 h-6"})}),u.jsxs("nav",{className:"flex md:flex-col gap-10 md:gap-12 w-full md:w-auto justify-around md:justify-center",children:[u.jsxs("button",{onClick:()=>e("studio"),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t==="studio"?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[u.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t==="studio"?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:u.jsx(a1,{className:"w-5 h-5"})}),u.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t==="studio"?"opacity-100":"opacity-40"}`,children:"Studio"})]}),u.jsxs("button",{onClick:()=>e("vault"),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t==="vault"?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[u.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t==="vault"?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:u.jsx(Zo,{className:"w-5 h-5"})}),u.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t==="vault"?"opacity-100":"opacity-40"}`,children:"Vault"})]}),u.jsxs("button",{onClick:()=>e("profile"),className:`flex flex-col items-center gap-1.5 group transition-all duration-300 ${t==="profile"?"text-blue-500":"text-slate-600 hover:text-slate-400"}`,children:[u.jsx("div",{className:`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${t==="profile"?"bg-blue-600 text-white shadow-xl shadow-blue-600/40":"bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5"}`,children:u.jsx(ps,{className:"w-5 h-5"})}),u.jsx("span",{className:`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${t==="profile"?"opacity-100":"opacity-40"}`,children:"Profile"})]})]})]})}),u.jsxs("main",{className:"flex-1 p-6 sm:p-8 md:p-12 pb-32 md:pb-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last custom-scrollbar",children:[u.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6",children:[u.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[u.jsxs("h2",{className:"text-2xl font-black italic text-white uppercase tracking-tighter",children:["VOKAL ",u.jsx("span",{className:"text-blue-500",children:"PRO"})]}),u.jsx("p",{className:"text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]",children:"Studio Edition"})]}),u.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-4",children:[u.jsx("div",{className:"flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl",children:zk.map(b=>u.jsx("button",{onClick:()=>r(b.id),className:`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${n===b.id?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-500 hover:text-slate-300 hover:bg-white/5"}`,children:b.native},b.id))}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl",children:[u.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0",children:G!=null&&G.photoURL?u.jsx("img",{src:G.photoURL,alt:"User",className:"w-full h-full object-cover"}):u.jsx(ps,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})}),u.jsxs("div",{className:"flex flex-col text-left justify-center",children:[u.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]",children:G?G.displayName||((Nu=G.email)==null?void 0:Nu.split("@")[0])||G.phoneNumber:"Guest User"}),Y?u.jsxs("span",{className:"text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[u.jsx(Jo,{className:"w-3 h-3"})," Studio Pro"]}):_?u.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Tryout Mode"}):u.jsx("span",{className:"text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5",children:"Free User"})]}),u.jsx("div",{className:"w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"}),u.jsx("button",{onClick:()=>{_?(A(!1),O.success("Please sign in to continue")):ut({show:!0,title:"Sign Out?",message:"Are you sure you want to sign out from Vokal Pro? Any unsaved progress may be lost.",type:"danger",onConfirm:()=>{xd(ft).then(()=>{O.success("Signed out successfully"),e("studio")})}})},className:"p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0",title:_?"Sign In":"Sign Out",children:_?u.jsx(il,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"}):u.jsx(ea,{className:"w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform"})})]})]})]}),t==="studio"&&u.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 flex-1",children:[u.jsxs("div",{className:"flex flex-col gap-4",children:[m&&u.jsxs("div",{className:"p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4",children:[u.jsx(Yh,{className:"w-5 h-5 shrink-0"})," ",m]}),u.jsxs("div",{className:`flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border shadow-2xl p-1 flex flex-col transition-all duration-700 ${w?"border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]":"border-white/5 hover:border-blue-500/30"}`,children:[w&&u.jsx("div",{className:"absolute inset-0 bg-blue-500/5 rounded-[2.5rem] animate-pulse"}),u.jsx("textarea",{value:f,onChange:b=>{_&&b.target.value.length>50?(O.error("Guest Limit Exceeded (5s limit). Please create an account for unlimited access!",{icon:"🔒"}),y(b.target.value.substring(0,50))):!_&&G&&!Y&&b.target.value.length>800?(O.error("Free Plan Limit Exceeded (1 min limit). Upgrade to create longer audios!",{icon:"👑"}),Xe(!0),y(b.target.value.substring(0,800))):y(b.target.value)},placeholder:"Type or paste your script here...",className:"w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 sm:p-8 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"})]}),u.jsxs("div",{className:"shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"}),u.jsxs("div",{className:"relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto",children:[u.jsxs("button",{onClick:()=>a(!o),className:`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${o?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10":"bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300"}`,children:[o?u.jsx(v1,{className:"w-5 h-5"}):u.jsx(g1,{className:"w-5 h-5"})," Auto Subtitles"]}),o&&u.jsx("div",{className:"flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto",children:Fk.map(b=>u.jsx("button",{onClick:()=>s(b.id),className:`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${i===b.id?"bg-white text-black border-white shadow-lg shadow-white/10":"bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300"}`,children:b.label},b.id))})]}),u.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10",children:[u.jsxs("button",{onClick:()=>c(!0),className:"lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95",children:[u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx(Xo,{className:"w-4 h-4 text-blue-500"})," Voice: ",((Tu=Od.find(b=>b.id===R))==null?void 0:Tu.label)||"Select"]}),u.jsx(Qh,{className:"w-4 h-4"})]}),u.jsxs("button",{onClick:tm,disabled:w||!f.trim(),className:"w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale",children:[w?u.jsx(Kc,{className:"animate-spin w-5 h-5"}):u.jsx(h1,{className:"w-5 h-5"})," ",w?"Synthesizing...":"Generate Master"]})]})]})]}),u.jsxs("div",{className:"w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full",children:[u.jsxs("div",{className:"hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group",children:[u.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"}),u.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3",children:[u.jsx(Xo,{className:"w-4 h-4 text-blue-500"})," Voice Models"]}),Cu]}),u.jsxs("div",{className:`shrink-0 lg:flex-1 flex flex-col p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${w?"bg-blue-600/5 border-blue-500/40":v?"bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30":"bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5"}`,children:[w&&u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"}),v&&u.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -mr-20 -mt-20"}),u.jsxs("h4",{className:"text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3",children:[w?u.jsx(Xr,{className:"w-3 h-3 text-blue-400 animate-bounce"}):u.jsx(Yg,{className:"w-3 h-3 text-blue-500/60"}),w?"Engine Processing...":"Studio Output Engine"]}),u.jsx("div",{className:"relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center",children:w?u.jsxs("div",{className:"flex flex-col items-center gap-6",children:[u.jsx("div",{className:"flex items-end gap-1.5 h-16",children:[...Array(12)].map((b,z)=>u.jsx("div",{className:"w-1.5 bg-blue-500 rounded-full animate-wave",style:{animationDelay:`${z*.1}s`,height:"20%"}},z))}),u.jsx("p",{className:"text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse",children:"Synthesizing Voice..."})]}):u.jsxs(u.Fragment,{children:[u.jsx("p",{className:`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${P?"text-white drop-shadow-lg":"text-slate-600 italic"}`,children:P||(v?"Audio ready for playback":"Awaiting Audio...")}),v&&!P&&!j&&u.jsx("div",{className:"mt-4 w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-blue-500 w-1/3"})})]})}),v&&!w&&u.jsxs("div",{className:"relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500",children:[u.jsxs("button",{onClick:()=>{ie.current.src!==v.url&&(ie.current.src=v.url),j?ie.current.pause():(ie.current.play(),L(!0))},className:`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${j?"bg-white text-black scale-[0.98]":"bg-blue-600 text-white hover:bg-blue-500"}`,children:[j?u.jsx(Bg,{className:"w-5 h-5"}):u.jsx(Wg,{className:"w-5 h-5"}),j?"Pause Master":"Play Master Track"]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsxs("a",{href:v.url,download:"master_audio.wav",className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5",children:[u.jsx(Gc,{className:"w-4 h-4 text-blue-500"})," WAV"]}),v.srt&&u.jsxs("button",{onClick:()=>{const b=new Blob([v.srt],{type:"text/plain"}),z=document.createElement("a");z.href=URL.createObjectURL(b),z.download="subtitles.srt",z.click()},className:"flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors",children:[u.jsx(Jg,{className:"w-4 h-4 text-emerald-500"})," SRT"]})]})]})]})]})]}),t==="vault"&&(d.length===0?u.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60",children:[u.jsx("div",{className:"w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl",children:u.jsx(Zo,{className:"w-10 h-10 text-slate-500"})}),u.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-widest mb-2",children:"Vault is Empty"}),u.jsx("p",{className:"text-sm font-medium text-slate-500 max-w-sm",children:"You haven't generated any studio audio yet. Go back to the studio to brew some magic."}),u.jsx("button",{onClick:()=>e("studio"),className:"mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20",children:"Go to Studio"})]}):u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex justify-between items-center px-4",children:[u.jsx("h3",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]",children:"Your Master Collection"}),u.jsxs("button",{onClick:()=>{ut({show:!0,title:"Clear Vault?",message:"This will permanently remove all your generated audio from the local vault. This action cannot be undone.",type:"danger",onConfirm:()=>{g([]),localStorage.removeItem("vokal_vault"),O.success("Vault Cleared")}})},className:"text-[9px] font-black uppercase text-red-500/60 hover:text-red-500 transition-colors flex items-center gap-2",children:[u.jsx(Jc,{className:"w-3.5 h-3.5"})," Clear All"]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500 pb-20",children:d.map(b=>u.jsxs("div",{className:"bg-[#0F1118] p-6 rounded-[2.5rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl relative overflow-hidden",children:[u.jsxs("div",{className:"flex items-center gap-6 relative z-10",children:[u.jsx("button",{onClick:()=>{ie.current.src=b.url,T(b.srt?Su(b.srt):[]),ie.current.play()},className:"w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner",children:u.jsx(qc,{className:"w-5 h-5 fill-current ml-1"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"text-sm font-bold text-white italic line-clamp-1 group-hover:text-blue-200 transition-colors",children:['"',b.text,'..."']}),u.jsxs("div",{className:"text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest",children:[b.voice," • ",b.date]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 relative z-10",children:[u.jsx("a",{href:b.url,download:!0,className:"p-3 text-slate-600 hover:text-white transition-colors",children:u.jsx(Gc,{className:"w-5 h-5"})}),u.jsx("button",{onClick:()=>{ut({show:!0,title:"Delete Track?",message:"Are you sure you want to delete this master track from your history?",type:"danger",onConfirm:()=>{const z=d.filter(te=>te.timestamp!==b.timestamp);g(z),localStorage.setItem("vokal_vault",JSON.stringify(z)),O.success("Track Deleted")}})},className:"p-3 text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100",children:u.jsx(Jc,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-3xl -mr-12 -mt-12 transition-opacity opacity-0 group-hover:opacity-100"})]},b.timestamp))})]})),t==="profile"&&u.jsxs("div",{className:"flex flex-col items-center max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700",children:[u.jsxs("div",{className:"relative mb-10",children:[u.jsx("div",{className:"w-32 h-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20",children:u.jsx("div",{className:"w-full h-full rounded-[2.8rem] bg-[#0F1118] flex items-center justify-center overflow-hidden border border-white/5",children:G!=null&&G.photoURL?u.jsx("img",{src:G.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):u.jsx(ps,{className:"w-12 h-12 text-blue-500/50"})})}),u.jsx("div",{className:"absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-[#08090D]",children:u.jsx(ta,{className:"w-4 h-4 fill-current"})})]}),u.jsxs("div",{className:"text-center mb-12",children:[u.jsx("h3",{className:"text-3xl font-black text-white uppercase tracking-tighter mb-2",children:(G==null?void 0:G.displayName)||(_?"Guest Creator":"Pro User")}),u.jsx("p",{className:"text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]",children:(G==null?void 0:G.email)||"Studio Guest Access"})]}),u.jsxs("div",{className:"w-full grid gap-4",children:[u.jsxs("div",{className:"bg-[#0F1118] border border-white/5 p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),u.jsxs("div",{className:"relative flex items-center gap-6",children:[u.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-inner",children:u.jsx(Jo,{className:"w-7 h-7 text-blue-500"})}),u.jsxs("div",{className:"text-left",children:[u.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Current Studio Plan"}),u.jsx("div",{className:"text-xl font-black text-white uppercase tracking-widest",children:Y?"Studio Pro":_?"Guest Tier":"Free Plan"})]})]}),!Y&&u.jsxs("button",{onClick:()=>Xe(!0),className:"relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 group",children:["Upgrade Now ",u.jsx(Xr,{className:"w-4 h-4 fill-current group-hover:animate-pulse"})]})]}),u.jsx("div",{className:"bg-[#0F1118]/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between shadow-xl",children:u.jsxs("div",{className:"flex items-center gap-6",children:[u.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5",children:u.jsx(Zo,{className:"w-6 h-6 text-slate-500"})}),u.jsxs("div",{className:"text-left",children:[u.jsx("div",{className:"text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1",children:"Total Creations"}),u.jsxs("div",{className:"text-xl font-black text-white tracking-widest",children:[d.length," Master Tracks"]})]})]})}),u.jsxs("button",{onClick:()=>{_?A(!1):ut({show:!0,title:"Sign Out?",message:"Are you sure you want to sign out? You will need to log back in to access your pro features.",type:"danger",onConfirm:()=>{xd(ft).then(()=>{O.success("Signed out successfully"),e("studio")})}})},className:"mt-6 w-full py-5 bg-white/5 hover:bg-red-500/10 text-slate-500 hover:text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 flex items-center justify-center gap-3",children:[u.jsx(ea,{className:"w-4 h-4"})," ",_?"Sign In to Pro Account":"Sign Out"]})]})]})]})]})};da.createRoot(document.getElementById("root")).render(u.jsx(_m.StrictMode,{children:u.jsx(Vk,{})}));
