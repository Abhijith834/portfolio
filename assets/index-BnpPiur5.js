(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Nx(){if(Hg)return mo;Hg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var Gg;function Ox(){return Gg||(Gg=1,Lf.exports=Nx()),Lf.exports}var ht=Ox(),Nf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Px(){if(Vg)return ae;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function M(D,$,xt){this.props=D,this.context=$,this.refs=C,this.updater=xt||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=M.prototype;function B(D,$,xt){this.props=D,this.context=$,this.refs=C,this.updater=xt||y}var N=B.prototype=new _;N.constructor=B,b(N,M.prototype),N.isPureReactComponent=!0;var U=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(D,$,xt,Mt,Z,mt){return xt=mt.ref,{$$typeof:o,type:D,key:$,ref:xt!==void 0?xt:null,props:mt}}function z(D,$){return I(D.type,$,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function R(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(xt){return $[xt]})}var H=/\/+/g;function nt(D,$){return typeof D=="object"&&D!==null&&D.key!=null?R(""+D.key):$.toString(36)}function at(){}function ct(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(at,at):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function pt(D,$,xt,Mt,Z){var mt=typeof D;(mt==="undefined"||mt==="boolean")&&(D=null);var St=!1;if(D===null)St=!0;else switch(mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(D.$$typeof){case o:case e:St=!0;break;case g:return St=D._init,pt(St(D._payload),$,xt,Mt,Z)}}if(St)return Z=Z(D),St=Mt===""?"."+nt(D,0):Mt,U(Z)?(xt="",St!=null&&(xt=St.replace(H,"$&/")+"/"),pt(Z,$,xt,"",function(se){return se})):Z!=null&&(w(Z)&&(Z=z(Z,xt+(Z.key==null||D&&D.key===Z.key?"":(""+Z.key).replace(H,"$&/")+"/")+St)),$.push(Z)),1;St=0;var At=Mt===""?".":Mt+":";if(U(D))for(var Ut=0;Ut<D.length;Ut++)Mt=D[Ut],mt=At+nt(Mt,Ut),St+=pt(Mt,$,xt,mt,Z);else if(Ut=S(D),typeof Ut=="function")for(D=Ut.call(D),Ut=0;!(Mt=D.next()).done;)Mt=Mt.value,mt=At+nt(Mt,Ut++),St+=pt(Mt,$,xt,mt,Z);else if(mt==="object"){if(typeof D.then=="function")return pt(ct(D),$,xt,Mt,Z);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function O(D,$,xt){if(D==null)return D;var Mt=[],Z=0;return pt(D,Mt,"","",function(mt){return $.call(xt,mt,Z++)}),Mt}function J(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(xt){(D._status===0||D._status===-1)&&(D._status=1,D._result=xt)},function(xt){(D._status===0||D._status===-1)&&(D._status=2,D._result=xt)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function yt(){}return ae.Children={map:O,forEach:function(D,$,xt){O(D,function(){$.apply(this,arguments)},xt)},count:function(D){var $=0;return O(D,function(){$++}),$},toArray:function(D){return O(D,function($){return $})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ae.Component=M,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=B,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ae.__COMPILER_RUNTIME={__proto__:null,c:function(D){return k.H.useMemoCache(D)}},ae.cache=function(D){return function(){return D.apply(null,arguments)}},ae.cloneElement=function(D,$,xt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Mt=b({},D.props),Z=D.key,mt=void 0;if($!=null)for(St in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(Z=""+$.key),$)!G.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(Mt[St]=$[St]);var St=arguments.length-2;if(St===1)Mt.children=xt;else if(1<St){for(var At=Array(St),Ut=0;Ut<St;Ut++)At[Ut]=arguments[Ut+2];Mt.children=At}return I(D.type,Z,void 0,void 0,mt,Mt)},ae.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ae.createElement=function(D,$,xt){var Mt,Z={},mt=null;if($!=null)for(Mt in $.key!==void 0&&(mt=""+$.key),$)G.call($,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Z[Mt]=$[Mt]);var St=arguments.length-2;if(St===1)Z.children=xt;else if(1<St){for(var At=Array(St),Ut=0;Ut<St;Ut++)At[Ut]=arguments[Ut+2];Z.children=At}if(D&&D.defaultProps)for(Mt in St=D.defaultProps,St)Z[Mt]===void 0&&(Z[Mt]=St[Mt]);return I(D,mt,void 0,void 0,null,Z)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(D){return{$$typeof:d,render:D}},ae.isValidElement=w,ae.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:J}},ae.memo=function(D,$){return{$$typeof:p,type:D,compare:$===void 0?null:$}},ae.startTransition=function(D){var $=k.T,xt={};k.T=xt;try{var Mt=D(),Z=k.S;Z!==null&&Z(xt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(yt,q)}catch(mt){q(mt)}finally{k.T=$}},ae.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ae.use=function(D){return k.H.use(D)},ae.useActionState=function(D,$,xt){return k.H.useActionState(D,$,xt)},ae.useCallback=function(D,$){return k.H.useCallback(D,$)},ae.useContext=function(D){return k.H.useContext(D)},ae.useDebugValue=function(){},ae.useDeferredValue=function(D,$){return k.H.useDeferredValue(D,$)},ae.useEffect=function(D,$,xt){var Mt=k.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(D,$)},ae.useId=function(){return k.H.useId()},ae.useImperativeHandle=function(D,$,xt){return k.H.useImperativeHandle(D,$,xt)},ae.useInsertionEffect=function(D,$){return k.H.useInsertionEffect(D,$)},ae.useLayoutEffect=function(D,$){return k.H.useLayoutEffect(D,$)},ae.useMemo=function(D,$){return k.H.useMemo(D,$)},ae.useOptimistic=function(D,$){return k.H.useOptimistic(D,$)},ae.useReducer=function(D,$,xt){return k.H.useReducer(D,$,xt)},ae.useRef=function(D){return k.H.useRef(D)},ae.useState=function(D){return k.H.useState(D)},ae.useSyncExternalStore=function(D,$,xt){return k.H.useSyncExternalStore(D,$,xt)},ae.useTransition=function(){return k.H.useTransition()},ae.version="19.1.0",ae}var kg;function ad(){return kg||(kg=1,Nf.exports=Px()),Nf.exports}var qe=ad(),Of={exports:{}},go={},Pf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Bx(){return Xg||(Xg=1,function(o){function e(O,J){var q=O.length;O.push(J);t:for(;0<q;){var yt=q-1>>>1,D=O[yt];if(0<l(D,J))O[yt]=J,O[q]=D,q=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var J=O[0],q=O.pop();if(q!==J){O[0]=q;t:for(var yt=0,D=O.length,$=D>>>1;yt<$;){var xt=2*(yt+1)-1,Mt=O[xt],Z=xt+1,mt=O[Z];if(0>l(Mt,q))Z<D&&0>l(mt,Mt)?(O[yt]=mt,O[Z]=q,yt=Z):(O[yt]=Mt,O[xt]=q,yt=xt);else if(Z<D&&0>l(mt,q))O[yt]=mt,O[Z]=q,yt=Z;else break t}}return J}function l(O,J){var q=O.sortIndex-J.sortIndex;return q!==0?q:O.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,y=!1,b=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var J=i(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=O)r(p),J.sortIndex=J.expirationTime,e(m,J);else break;J=i(p)}}function k(O){if(C=!1,U(O),!b)if(i(m)!==null)b=!0,G||(G=!0,nt());else{var J=i(p);J!==null&&pt(k,J.startTime-O)}}var G=!1,I=-1,z=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<z)}function H(){if(M=!1,G){var O=o.unstable_now();w=O;var J=!0;try{t:{b=!1,C&&(C=!1,B(I),I=-1),y=!0;var q=S;try{e:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,S=v.priorityLevel;var D=yt(v.expirationTime<=O);if(O=o.unstable_now(),typeof D=="function"){v.callback=D,U(O),J=!0;break e}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)J=!0;else{var $=i(p);$!==null&&pt(k,$.startTime-O),J=!1}}break t}finally{v=null,S=q,y=!1}J=void 0}}finally{J?nt():G=!1}}}var nt;if(typeof N=="function")nt=function(){N(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ct=at.port2;at.port1.onmessage=H,nt=function(){ct.postMessage(null)}}else nt=function(){_(H,0)};function pt(O,J){I=_(function(){O(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var q=S;S=J;try{return O()}finally{S=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=S;S=O;try{return J()}finally{S=q}},o.unstable_scheduleCallback=function(O,J,q){var yt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=q+D,O={id:g++,callback:J,priorityLevel:O,startTime:q,expirationTime:D,sortIndex:-1},q>yt?(O.sortIndex=q,e(p,O),i(m)===null&&O===i(p)&&(C?(B(I),I=-1):C=!0,pt(k,q-yt))):(O.sortIndex=D,e(m,O),b||y||(b=!0,G||(G=!0,nt()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var J=S;return function(){var q=S;S=J;try{return O.apply(this,arguments)}finally{S=q}}}}(Bf)),Bf}var Wg;function Ix(){return Wg||(Wg=1,Pf.exports=Bx()),Pf.exports}var If={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function zx(){if(qg)return An;qg=1;var o=ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.0",An}var Yg;function Fx(){if(Yg)return If.exports;Yg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=zx(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Hx(){if(jg)return go;jg=1;var o=Ix(),e=ad(),i=Fx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case z:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var pt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],D=-1;function $(t){return{current:t}}function xt(t){0>D||(t.current=yt[D],yt[D]=null,D--)}function Mt(t,n){D++,yt[D]=t.current,t.current=n}var Z=$(null),mt=$(null),St=$(null),At=$(null);function Ut(t,n){switch(Mt(St,n),Mt(mt,t),Mt(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=pg(n),t=mg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Z),Mt(Z,t)}function se(){xt(Z),xt(mt),xt(St)}function Zt(t){t.memoizedState!==null&&Mt(At,t);var n=Z.current,a=mg(n,t.type);n!==a&&(Mt(mt,t),Mt(Z,a))}function Fe(t){mt.current===t&&(xt(Z),xt(mt)),At.current===t&&(xt(At),co._currentValue=q)}var Be=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Un=o.unstable_shouldYield,me=o.unstable_requestPaint,ne=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,De=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,tt=o.unstable_IdlePriority,gt=o.log,Et=o.unstable_setDisableYieldValue,ft=null,Ot=null;function Rt(t){if(typeof gt=="function"&&Et(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ft,t)}catch{}}var Ht=Math.clz32?Math.clz32:zt,Jt=Math.log,bt=Math.LN2;function zt(t){return t>>>=0,t===0?32:31-(Jt(t)/bt|0)|0}var Yt=256,Kt=4194304;function Pt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Pt(s):(x&=E,x!==0?c=Pt(x):a||(a=E&~t,a!==0&&(c=Pt(a))))):(E=s&~f,E!==0?c=Pt(E):x!==0?c=Pt(x):a||(a=s&~t,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),t}function Lt(){var t=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),t}function lt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _t(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bt(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-Ht(a),vt=1<<ut;E[ut]=0,P[ut]=-1;var et=Q[ut];if(et!==null)for(Q[ut]=null,ut=0;ut<et.length;ut++){var it=et[ut];it!==null&&(it.lane&=-536870913)}a&=~vt}s!==0&&Nt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ht(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ie(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ht(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function He(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:Og(t.type))}function Gn(t,n){var a=J.p;try{return J.p=t,n()}finally{J.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,vn="__reactProps$"+hn,Ln="__reactContainer$"+hn,Va="__reactEvents$"+hn,Oo="__reactListeners$"+hn,Po="__reactHandles$"+hn,ka="__reactResources$"+hn,ra="__reactMarker$"+hn;function sa(t){delete t[sn],delete t[vn],delete t[Va],delete t[Oo],delete t[Po]}function Ai(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ln]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xg(t);t!==null;){if(a=t[sn])return a;t=xg(t)}return n}t=a,a=t.parentNode}return null}function Ri(t){if(t=t[sn]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oa(t){var n=t[ka];return n||(n=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[ra]=!0}var Bo=new Set,Io={};function Ci(t,n){A(t,n),A(t+"Capture",n)}function A(t,n){for(Io[t]=n,t=0;t<n.length;t++)Bo.add(n[t])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function j(t){return Be.call(ot,t)?!0:Be.call(rt,t)?!1:Y.test(t)?ot[t]=!0:(rt[t]=!0,!1)}function Tt(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var It,$t;function Wt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+$t}var kt=!1;function he(t,n){if(!t||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(it){var et=it}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(it){et=it}t.call(vt.prototype)}}else{try{throw Error()}catch(it){et=it}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var P=x.split(`
`),Q=E.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===Q.length)for(s=P.length-1,c=Q.length-1;1<=s&&0<=c&&P[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==Q[c]){var ut=`
`+P[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function ye(t){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Wt("Activity");default:return""}}function Xe(t){try{var n="";do n+=ye(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(t){var n=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=qt(t))}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_e(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function En(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var la=/[\n"\\]/g;function Ge(t){return t.replace(la,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wi(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ge(n)):t.value!==""+ge(n)&&(t.value=""+ge(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,x,ge(n)):a!=null?Tn(t,x,ge(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ge(E):t.removeAttribute("name")}function Ie(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Tn(t,n,a){n==="number"&&En(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function on(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ge(a):""}function xn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function gi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Di=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Di.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function md(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&pd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&pd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(t){return L0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Uc=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mr=null,yr=null;function gd(t){var n=Ri(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(wi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));wi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(t,!!a.multiple,n,!1)}}}var Nc=!1;function _d(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Mr!==null||yr!==null)&&(El(),Mr&&(n=Mr,t=yr,yr=Mr=null,gd(n),t)))for(n=0;n<t.length;n++)gd(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(Ui)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Oc=!1}var ca=null,Pc=null,Fo=null;function vd(){if(Fo)return Fo;var t,n=Pc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Fo=c.slice(t,1<s?1-s:void 0)}function Ho(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function xd(){return!1}function Nn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:xd,this.isPropagationStopped=xd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Nn(Wa),Ts=g({},Wa,{view:0,detail:0}),N0=Nn(Ts),Bc,Ic,bs,ko=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Bc=t.screenX-bs.screenX,Ic=t.screenY-bs.screenY):Ic=Bc=0,bs=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Sd=Nn(ko),O0=g({},ko,{dataTransfer:0}),P0=Nn(O0),B0=g({},Ts,{relatedTarget:0}),zc=Nn(B0),I0=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Nn(I0),F0=g({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=Nn(F0),G0=g({},Wa,{data:0}),Md=Nn(G0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=X0[t])?!!n[t]:!1}function Fc(){return W0}var q0=g({},Ts,{key:function(t){if(t.key){var n=V0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y0=Nn(q0),j0=g({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Nn(j0),Z0=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),K0=Nn(Z0),Q0=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=Nn(Q0),$0=g({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=Nn($0),ev=g({},Wa,{newState:0,oldState:0}),nv=Nn(ev),iv=[9,13,27,32],Hc=Ui&&"CompositionEvent"in window,As=null;Ui&&"documentMode"in document&&(As=document.documentMode);var av=Ui&&"TextEvent"in window&&!As,Ed=Ui&&(!Hc||As&&8<As&&11>=As),Td=" ",bd=!1;function Ad(t,n){switch(t){case"keyup":return iv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function rv(t,n){switch(t){case"compositionend":return Rd(n);case"keypress":return n.which!==32?null:(bd=!0,Td);case"textInput":return t=n.data,t===Td&&bd?null:t;default:return null}}function sv(t,n){if(Er)return t==="compositionend"||!Hc&&Ad(t,n)?(t=vd(),Fo=Pc=ca=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ed&&n.locale!=="ko"?null:n.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ov[t.type]:n==="textarea"}function wd(t,n,a,s){Mr?yr?yr.push(s):yr=[s]:Mr=s,n=wl(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function lv(t){cg(t,0)}function Xo(t){var n=Xa(t);if(Se(n))return t}function Dd(t,n){if(t==="change")return n}var Ud=!1;if(Ui){var Gc;if(Ui){var Vc="oninput"in document;if(!Vc){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),Vc=typeof Ld.oninput=="function"}Gc=Vc}else Gc=!1;Ud=Gc&&(!document.documentMode||9<document.documentMode)}function Nd(){Rs&&(Rs.detachEvent("onpropertychange",Od),Cs=Rs=null)}function Od(t){if(t.propertyName==="value"&&Xo(Cs)){var n=[];wd(n,Cs,t,Lc(t)),_d(lv,n)}}function cv(t,n,a){t==="focusin"?(Nd(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",Od)):t==="focusout"&&Nd()}function uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Cs)}function fv(t,n){if(t==="click")return Xo(n)}function hv(t,n){if(t==="input"||t==="change")return Xo(n)}function dv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:dv;function ws(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Be.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,n){var a=Pd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pd(a)}}function Id(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Id(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=En(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=En(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var pv=Ui&&"documentMode"in document&&11>=document.documentMode,Tr=null,Xc=null,Ds=null,Wc=!1;function Fd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Tr==null||Tr!==En(s)||(s=Tr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=wl(Xc,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var br={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},qc={},Hd={};Ui&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ya(t){if(qc[t])return qc[t];if(!br[t])return t;var n=br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hd)return qc[t]=n[a];return t}var Gd=Ya("animationend"),Vd=Ya("animationiteration"),kd=Ya("animationstart"),mv=Ya("transitionrun"),gv=Ya("transitionstart"),_v=Ya("transitioncancel"),Xd=Ya("transitionend"),Wd=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function si(t,n){Wd.set(t,n),Ci(n,[t])}var qd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=qd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},qd.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Jn=[],Ar=0,jc=0;function Wo(){for(var t=Ar,n=jc=Ar=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Yd(a,c,f)}}function qo(t,n,a,s){Jn[Ar++]=t,Jn[Ar++]=n,Jn[Ar++]=a,Jn[Ar++]=s,jc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Zc(t,n,a,s){return qo(t,n,a,s),Yo(t)}function Rr(t,n){return qo(t,null,null,n),Yo(t)}function Yd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ht(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(t){if(50<eo)throw eo=0,ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Cr={};function vv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new vv(t,n,a,s)}function Kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Kc(t)&&(x=1);else if(typeof t=="string")x=Sx(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=kn(31,a,n,c),t.elementType=w,t.lanes=f,t;case b:return ja(a.children,c,f,n);case C:x=8,c|=24;break;case M:return t=kn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case k:return t=kn(13,a,n,c),t.elementType=k,t.lanes=f,t;case G:return t=kn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case N:x=10;break t;case B:x=9;break t;case U:x=11;break t;case I:x=14;break t;case z:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ja(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function Qc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function Jc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wr=[],Dr=0,Zo=null,Ko=0,$n=[],ti=0,Za=null,Ni=1,Oi="";function Ka(t,n){wr[Dr++]=Ko,wr[Dr++]=Zo,Zo=t,Ko=n}function Zd(t,n,a){$n[ti++]=Ni,$n[ti++]=Oi,$n[ti++]=Za,Za=t;var s=Ni;t=Oi;var c=32-Ht(s)-1;s&=~(1<<c),a+=1;var f=32-Ht(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ni=1<<32-Ht(n)+c|a<<c|s,Oi=f+t}else Ni=1<<f|a<<c|s,Oi=t}function $c(t){t.return!==null&&(Ka(t,1),Zd(t,1,0))}function tu(t){for(;t===Zo;)Zo=wr[--Dr],wr[Dr]=null,Ko=wr[--Dr],wr[Dr]=null;for(;t===Za;)Za=$n[--ti],$n[ti]=null,Oi=$n[--ti],$n[ti]=null,Ni=$n[--ti],$n[ti]=null}var wn=null,je=null,be=!1,Qa=null,_i=!1,eu=Error(r(519));function Ja(t){var n=Error(r(418,""));throw Ns(Qn(n,t)),eu}function Kd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[vn]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)pe(io[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Ie(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ye(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),xn(n,s.value,s.defaultValue,s.children),Ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||dg(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Ja(t)}function Qd(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:wn=wn.return}}function Us(t){if(t!==wn)return!1;if(!be)return Qd(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&je&&Ja(t),Qd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){je=li(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}je=null}}else n===27?(n=je,ba(t.type)?(t=yf,yf=null,je=t):je=n):je=wn?li(t.stateNode.nextSibling):null;return!0}function Ls(){je=wn=null,be=!1}function Jd(){var t=Qa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Qa=null),t}function Ns(t){Qa===null?Qa=[t]:Qa.push(t)}var nu=$(null),$a=null,Pi=null;function ua(t,n,a){Mt(nu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=nu.current,xt(nu)}function iu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function au(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),iu(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),iu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Os(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;Vn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===At.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}c=c.return}t!==null&&au(n,t,a,s),n.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return $d($a,t)}function Jo(t,n){return $a===null&&tr(t),$d(t,n)}function $d(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var xv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Sv=o.unstable_scheduleCallback,Mv=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new xv,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&Sv(Mv,function(){t.controller.abort()})}var Bs=null,su=0,Ur=0,Lr=null;function yv(t,n){if(Bs===null){var a=Bs=[];su=0,Ur=cf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return su++,n.then(tp,tp),n}function tp(){if(--su===0&&Bs!==null){Lr!==null&&(Lr.status="fulfilled");var t=Bs;Bs=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ev(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var ep=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&yv(t,n),ep!==null&&ep(t,n)};var er=$(null);function ou(){var t=er.current;return t!==null?t:Ve.pooledCache}function $o(t,n){n===null?Mt(er,er.current):Mt(er,n.pool)}function np(){var t=ou();return t===null?null:{parent:ln._currentValue,pool:t}}var Is=Error(r(460)),ip=Error(r(474)),tl=Error(r(542)),lu={then:function(){}};function ap(t){return t=t.status,t==="fulfilled"||t==="rejected"}function el(){}function rp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(el,el),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,op(t),t;default:if(typeof n.status=="string")n.then(el,el);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,op(t),t}throw zs=n,Is}}var zs=null;function sp(){if(zs===null)throw Error(r(459));var t=zs;return zs=null,t}function op(t){if(t===Is||t===tl)throw Error(r(483))}var fa=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Yo(t),Yd(t,null,a),n}return qo(t,s,n,a),Yo(t)}function Fs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ie(t,a)}}function fu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hu=!1;function Hs(){if(hu){var t=Lr;if(t!==null)throw t}}function Gs(t,n,a,s){hu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,Q=P.next;P.next=null,x===null?f=Q:x.next=Q,x=P;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==x&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=P))}if(f!==null){var vt=c.baseState;x=0,ut=Q=P=null,E=f;do{var et=E.lane&-536870913,it=et!==E.lane;if(it?(xe&et)===et:(s&et)===et){et!==0&&et===Ur&&(hu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var te=t,jt=E;et=n;var Oe=a;switch(jt.tag){case 1:if(te=jt.payload,typeof te=="function"){vt=te.call(Oe,vt,et);break t}vt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=jt.payload,et=typeof te=="function"?te.call(Oe,vt,et):te,et==null)break t;vt=g({},vt,et);break t;case 2:fa=!0}}et=E.callback,et!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=it,P=vt):ut=ut.next=it,x|=et;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;it=E,E=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(P=vt),c.baseState=P,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=x,t.lanes=x,t.memoizedState=vt}}function lp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function cp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lp(a[t],n)}var Nr=$(null),nl=$(0);function up(t,n){t=ki,Mt(nl,t),Mt(Nr,n),ki=t|n.baseLanes}function du(){Mt(nl,ki),Mt(Nr,Nr.current)}function pu(){ki=nl.current,xt(Nr),xt(nl)}var pa=0,ce=null,Le=null,nn=null,il=!1,Or=!1,nr=!1,al=0,Vs=0,Pr=null,Tv=0;function Ke(){throw Error(r(321))}function mu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function gu(t,n,a,s,c,f){return pa=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Yp:jp,nr=!1,f=a(s,c),nr=!1,Or&&(f=hp(n,a,s,c)),fp(t),f}function fp(t){O.H=ul;var n=Le!==null&&Le.next!==null;if(pa=0,nn=Le=ce=null,il=!1,Vs=0,Pr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Qo(t)&&(pn=!0))}function hp(t,n,a,s){ce=t;var c=0;do{if(Or&&(Pr=null),Vs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,nn=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Uv,f=n(a,s)}while(Or);return f}function bv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ks(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(ce.flags|=1024),n}function _u(){var t=al!==0;return al=0,t}function vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xu(t){if(il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}il=!1}pa=0,nn=Le=ce=null,Or=!1,Vs=al=0,Pr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ce.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Le===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=nn===null?ce.memoizedState:nn.next;if(n!==null)nn=n,Le=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?ce.memoizedState=nn=t:nn=nn.next=t}return nn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(t){var n=Vs;return Vs+=1,Pr===null&&(Pr=[]),t=rp(Pr,t,n),n=ce,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Yp:jp),t}function rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ks(t);if(t.$$typeof===N)return bn(t)}throw Error(r(438,String(t)))}function Mu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function sl(t){var n=an();return yu(n,Le,t)}function yu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,P=null,Q=n,ut=!1;do{var vt=Q.lane&-536870913;if(vt!==Q.lane?(xe&vt)===vt:(pa&vt)===vt){var et=Q.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),vt===Ur&&(ut=!0);else if((pa&et)===et){Q=Q.next,et===Ur&&(ut=!0);continue}else vt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(E=P=vt,x=f):P=P.next=vt,ce.lanes|=et,Ma|=et;vt=Q.action,nr&&a(f,vt),f=Q.hasEagerState?Q.eagerState:a(f,vt)}else et={lane:vt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(E=P=et,x=f):P=P.next=et,ce.lanes|=vt,Ma|=vt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?x=f:P.next=E,!Vn(f,t.memoizedState)&&(pn=!0,ut&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Eu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function dp(t,n,a){var s=ce,c=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Vn((Le||c).memoizedState,a);x&&(c.memoizedState=a,pn=!0),c=c.queue;var E=gp.bind(null,s,c,t);if(Xs(2048,8,E,[t]),c.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Br(9,ol(),mp.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(pa&124)!==0||pp(s,n,a)}return a}function pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Su(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mp(t,n,a,s){n.value=a,n.getSnapshot=s,_p(n)&&vp(t)}function gp(t,n,a){return a(function(){_p(n)&&vp(t)})}function _p(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function vp(t){var n=Rr(t,2);n!==null&&jn(n,t,2)}function Tu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),nr){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function xp(t,n,a,s){return t.baseState=a,yu(t,Le,typeof s=="function"?s:Ii)}function Av(t,n,a,s,c){if(cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Sp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var E=a(c,s),P=O.S;P!==null&&P(x,E),Mp(t,n,E)}catch(Q){bu(t,n,Q)}finally{O.T=f}}else try{f=a(c,s),Mp(t,n,f)}catch(Q){bu(t,n,Q)}}function Mp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){yp(t,n,s)},function(s){return bu(t,n,s)}):yp(t,n,a)}function yp(t,n,a){n.status="fulfilled",n.value=a,Ep(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sp(t,a)))}function bu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ep(n),n=n.next;while(n!==s)}t.action=null}function Ep(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tp(t,n){return n}function bp(t,n){if(be){var a=Ve.formState;if(a!==null){t:{var s=ce;if(be){if(je){e:{for(var c=je,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=li(c.nextSibling),s=c.data==="F!";break t}}Ja(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:n},a.queue=s,a=Xp.bind(null,ce,s),s.dispatch=a,s=Tu(!1),f=Du.bind(null,ce,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Av.bind(null,ce,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Ap(t){var n=an();return Rp(n,Le,t)}function Rp(t,n,a){if(n=yu(t,n,Tp)[0],t=sl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ks(n)}catch(x){throw x===Is?tl:x}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Br(9,ol(),Rv.bind(null,c,a),null)),[s,f,t]}function Rv(t,n){t.action=n}function Cp(t){var n=an(),a=Le;if(a!==null)return Rp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Su(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ol(){return{destroy:void 0,resource:void 0}}function wp(){return an().memoizedState}function ll(t,n,a,s){var c=On();s=s===void 0?null:s,ce.flags|=t,c.memoizedState=Br(1|n,ol(),a,s)}function Xs(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&mu(s,Le.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(ce.flags|=t,c.memoizedState=Br(1|n,f,a,s))}function Dp(t,n){ll(8390656,8,t,n)}function Up(t,n){Xs(2048,8,t,n)}function Lp(t,n){return Xs(4,2,t,n)}function Np(t,n){return Xs(4,4,t,n)}function Op(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pp(t,n,a){a=a!=null?a.concat([t]):null,Xs(4,4,Op.bind(null,n,t),a)}function Au(){}function Bp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ip(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mu(n,s[1]))return s[0];if(s=t(),nr){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[s,n],s}function Ru(t,n,a){return a===void 0||(pa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Hm(),ce.lanes|=t,Ma|=t,a)}function zp(t,n,a,s){return Vn(a,n)?a:Nr.current!==null?(t=Ru(t,a,s),Vn(t,n)||(pn=!0),t):(pa&42)===0?(pn=!0,t.memoizedState=a):(t=Hm(),ce.lanes|=t,Ma|=t,n)}function Fp(t,n,a,s,c){var f=J.p;J.p=f!==0&&8>f?f:8;var x=O.T,E={};O.T=E,Du(t,!1,n,a);try{var P=c(),Q=O.S;if(Q!==null&&Q(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=Ev(P,s);Ws(t,n,ut,Yn(t))}else Ws(t,n,s,Yn(t))}catch(vt){Ws(t,n,{then:function(){},status:"rejected",reason:vt},Yn())}finally{J.p=f,O.T=x}}function Cv(){}function Cu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Hp(t).queue;Fp(t,c,n,q,a===null?Cv:function(){return Gp(t),a(s)})}function Hp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gp(t){var n=Hp(t).next.queue;Ws(t,n,{},Yn())}function wu(){return bn(co)}function Vp(){return an().memoizedState}function kp(){return an().memoizedState}function wv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ha(a);var s=da(n,t,a);s!==null&&(jn(s,n,a),Fs(s,n,a)),n={cache:ru()},t.payload=n;return}n=n.return}}function Dv(t,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cl(t)?Wp(n,a):(a=Zc(t,n,a,s),a!==null&&(jn(a,t,s),qp(a,n,s)))}function Xp(t,n,a){var s=Yn();Ws(t,n,a,s)}function Ws(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cl(t))Wp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Vn(E,x))return qo(t,n,c,0),Ve===null&&Wo(),!1}catch{}finally{}if(a=Zc(t,n,c,s),a!==null)return jn(a,t,s),qp(a,n,s),!0}return!1}function Du(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},cl(t)){if(n)throw Error(r(479))}else n=Zc(t,a,s,2),n!==null&&jn(n,t,2)}function cl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Wp(t,n){Or=il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ie(t,a)}}var ul={readContext:bn,use:rl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Yp={readContext:bn,use:rl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Dp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ll(4194308,4,Op.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ll(4194308,4,t,n)},useInsertionEffect:function(t,n){ll(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(nr){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(nr){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Dv.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Tu(t);var n=t.queue,a=Xp.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Au,useDeferredValue:function(t,n){var a=On();return Ru(a,t,n)},useTransition:function(){var t=Tu(!1);return t=Fp.bind(null,ce,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,c=On();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||pp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Dp(gp.bind(null,s,f,t),[t]),s.flags|=2048,Br(9,ol(),mp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Ve.identifierPrefix;if(be){var a=Oi,s=Ni;a=(s&~(1<<32-Ht(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Tv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:wu,useFormState:bp,useActionState:bp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Du.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mu,useCacheRefresh:function(){return On().memoizedState=wv.bind(null,ce)}},jp={readContext:bn,use:rl,useCallback:Bp,useContext:bn,useEffect:Up,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Ip,useReducer:sl,useRef:wp,useState:function(){return sl(Ii)},useDebugValue:Au,useDeferredValue:function(t,n){var a=an();return zp(a,Le.memoizedState,t,n)},useTransition:function(){var t=sl(Ii)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:dp,useId:Vp,useHostTransitionStatus:wu,useFormState:Ap,useActionState:Ap,useOptimistic:function(t,n){var a=an();return xp(a,Le,t,n)},useMemoCache:Mu,useCacheRefresh:kp},Uv={readContext:bn,use:rl,useCallback:Bp,useContext:bn,useEffect:Up,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Ip,useReducer:Eu,useRef:wp,useState:function(){return Eu(Ii)},useDebugValue:Au,useDeferredValue:function(t,n){var a=an();return Le===null?Ru(a,t,n):zp(a,Le.memoizedState,t,n)},useTransition:function(){var t=Eu(Ii)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:dp,useId:Vp,useHostTransitionStatus:wu,useFormState:Cp,useActionState:Cp,useOptimistic:function(t,n){var a=an();return Le!==null?xp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:kp},Ir=null,qs=0;function fl(t){var n=qs;return qs+=1,Ir===null&&(Ir=[]),rp(Ir,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zp(t){var n=t._init;return n(t._payload)}function Kp(t){function n(W,V){if(t){var K=W.deletions;K===null?(W.deletions=[V],W.flags|=16):K.push(V)}}function a(W,V){if(!t)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function s(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Li(W,V),W.index=0,W.sibling=null,W}function f(W,V,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<V?(W.flags|=67108866,V):K):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function x(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,V,K,dt){return V===null||V.tag!==6?(V=Qc(K,W.mode,dt),V.return=W,V):(V=c(V,K),V.return=W,V)}function P(W,V,K,dt){var Ft=K.type;return Ft===b?ut(W,V,K.props.children,dt,K.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===z&&Zp(Ft)===V.type)?(V=c(V,K.props),Ys(V,K),V.return=W,V):(V=jo(K.type,K.key,K.props,null,W.mode,dt),Ys(V,K),V.return=W,V)}function Q(W,V,K,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Jc(K,W.mode,dt),V.return=W,V):(V=c(V,K.children||[]),V.return=W,V)}function ut(W,V,K,dt,Ft){return V===null||V.tag!==7?(V=ja(K,W.mode,dt,Ft),V.return=W,V):(V=c(V,K),V.return=W,V)}function vt(W,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Qc(""+V,W.mode,K),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return K=jo(V.type,V.key,V.props,null,W.mode,K),Ys(K,V),K.return=W,K;case y:return V=Jc(V,W.mode,K),V.return=W,V;case z:var dt=V._init;return V=dt(V._payload),vt(W,V,K)}if(pt(V)||nt(V))return V=ja(V,W.mode,K,null),V.return=W,V;if(typeof V.then=="function")return vt(W,fl(V),K);if(V.$$typeof===N)return vt(W,Jo(W,V),K);hl(W,V)}return null}function et(W,V,K,dt){var Ft=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:E(W,V,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===Ft?P(W,V,K,dt):null;case y:return K.key===Ft?Q(W,V,K,dt):null;case z:return Ft=K._init,K=Ft(K._payload),et(W,V,K,dt)}if(pt(K)||nt(K))return Ft!==null?null:ut(W,V,K,dt,null);if(typeof K.then=="function")return et(W,V,fl(K),dt);if(K.$$typeof===N)return et(W,V,Jo(W,K),dt);hl(W,K)}return null}function it(W,V,K,dt,Ft){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(K)||null,E(V,W,""+dt,Ft);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case S:return W=W.get(dt.key===null?K:dt.key)||null,P(V,W,dt,Ft);case y:return W=W.get(dt.key===null?K:dt.key)||null,Q(V,W,dt,Ft);case z:var fe=dt._init;return dt=fe(dt._payload),it(W,V,K,dt,Ft)}if(pt(dt)||nt(dt))return W=W.get(K)||null,ut(V,W,dt,Ft,null);if(typeof dt.then=="function")return it(W,V,K,fl(dt),Ft);if(dt.$$typeof===N)return it(W,V,K,Jo(V,dt),Ft);hl(V,dt)}return null}function te(W,V,K,dt){for(var Ft=null,fe=null,Vt=V,Qt=V=0,gn=null;Vt!==null&&Qt<K.length;Qt++){Vt.index>Qt?(gn=Vt,Vt=null):gn=Vt.sibling;var Ee=et(W,Vt,K[Qt],dt);if(Ee===null){Vt===null&&(Vt=gn);break}t&&Vt&&Ee.alternate===null&&n(W,Vt),V=f(Ee,V,Qt),fe===null?Ft=Ee:fe.sibling=Ee,fe=Ee,Vt=gn}if(Qt===K.length)return a(W,Vt),be&&Ka(W,Qt),Ft;if(Vt===null){for(;Qt<K.length;Qt++)Vt=vt(W,K[Qt],dt),Vt!==null&&(V=f(Vt,V,Qt),fe===null?Ft=Vt:fe.sibling=Vt,fe=Vt);return be&&Ka(W,Qt),Ft}for(Vt=s(Vt);Qt<K.length;Qt++)gn=it(Vt,W,Qt,K[Qt],dt),gn!==null&&(t&&gn.alternate!==null&&Vt.delete(gn.key===null?Qt:gn.key),V=f(gn,V,Qt),fe===null?Ft=gn:fe.sibling=gn,fe=gn);return t&&Vt.forEach(function(Da){return n(W,Da)}),be&&Ka(W,Qt),Ft}function jt(W,V,K,dt){if(K==null)throw Error(r(151));for(var Ft=null,fe=null,Vt=V,Qt=V=0,gn=null,Ee=K.next();Vt!==null&&!Ee.done;Qt++,Ee=K.next()){Vt.index>Qt?(gn=Vt,Vt=null):gn=Vt.sibling;var Da=et(W,Vt,Ee.value,dt);if(Da===null){Vt===null&&(Vt=gn);break}t&&Vt&&Da.alternate===null&&n(W,Vt),V=f(Da,V,Qt),fe===null?Ft=Da:fe.sibling=Da,fe=Da,Vt=gn}if(Ee.done)return a(W,Vt),be&&Ka(W,Qt),Ft;if(Vt===null){for(;!Ee.done;Qt++,Ee=K.next())Ee=vt(W,Ee.value,dt),Ee!==null&&(V=f(Ee,V,Qt),fe===null?Ft=Ee:fe.sibling=Ee,fe=Ee);return be&&Ka(W,Qt),Ft}for(Vt=s(Vt);!Ee.done;Qt++,Ee=K.next())Ee=it(Vt,W,Qt,Ee.value,dt),Ee!==null&&(t&&Ee.alternate!==null&&Vt.delete(Ee.key===null?Qt:Ee.key),V=f(Ee,V,Qt),fe===null?Ft=Ee:fe.sibling=Ee,fe=Ee);return t&&Vt.forEach(function(Lx){return n(W,Lx)}),be&&Ka(W,Qt),Ft}function Oe(W,V,K,dt){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:t:{for(var Ft=K.key;V!==null;){if(V.key===Ft){if(Ft=K.type,Ft===b){if(V.tag===7){a(W,V.sibling),dt=c(V,K.props.children),dt.return=W,W=dt;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===z&&Zp(Ft)===V.type){a(W,V.sibling),dt=c(V,K.props),Ys(dt,K),dt.return=W,W=dt;break t}a(W,V);break}else n(W,V);V=V.sibling}K.type===b?(dt=ja(K.props.children,W.mode,dt,K.key),dt.return=W,W=dt):(dt=jo(K.type,K.key,K.props,null,W.mode,dt),Ys(dt,K),dt.return=W,W=dt)}return x(W);case y:t:{for(Ft=K.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(W,V.sibling),dt=c(V,K.children||[]),dt.return=W,W=dt;break t}else{a(W,V);break}else n(W,V);V=V.sibling}dt=Jc(K,W.mode,dt),dt.return=W,W=dt}return x(W);case z:return Ft=K._init,K=Ft(K._payload),Oe(W,V,K,dt)}if(pt(K))return te(W,V,K,dt);if(nt(K)){if(Ft=nt(K),typeof Ft!="function")throw Error(r(150));return K=Ft.call(K),jt(W,V,K,dt)}if(typeof K.then=="function")return Oe(W,V,fl(K),dt);if(K.$$typeof===N)return Oe(W,V,Jo(W,K),dt);hl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(W,V.sibling),dt=c(V,K),dt.return=W,W=dt):(a(W,V),dt=Qc(K,W.mode,dt),dt.return=W,W=dt),x(W)):a(W,V)}return function(W,V,K,dt){try{qs=0;var Ft=Oe(W,V,K,dt);return Ir=null,Ft}catch(Vt){if(Vt===Is||Vt===tl)throw Vt;var fe=kn(29,Vt,null,W.mode);return fe.lanes=dt,fe.return=W,fe}finally{}}}var zr=Kp(!0),Qp=Kp(!1),ei=$(null),vi=null;function ma(t){var n=t.alternate;Mt(cn,cn.current&1),Mt(ei,t),vi===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(vi=t)}function Jp(t){if(t.tag===22){if(Mt(cn,cn.current),Mt(ei,t),vi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(vi=t)}}else ga()}function ga(){Mt(cn,cn.current),Mt(ei,ei.current)}function zi(t){xt(ei),vi===t&&(vi=null),xt(cn)}var cn=$(0);function dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Mf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(jn(n,t,s),Fs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(jn(n,t,s),Fs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(jn(n,t,a),Fs(n,t,a))}};function $p(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(c,f):!0}function tm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Lu.enqueueReplaceState(n,n.state,null)}function ir(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function em(t){pl(t)}function nm(t){console.error(t)}function im(t){pl(t)}function ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function am(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Nu(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(t,n)},a}function rm(t){return t=ha(t),t.tag=3,t}function sm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){am(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){am(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Lv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return vi===null?af():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(be)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==eu&&(t=Error(r(422),{cause:s}),Ns(Qn(t,a)))):(s!==eu&&(n=Error(r(423),{cause:s}),Ns(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Nu(t.stateNode,s,c),fu(t,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),to===null?to=[f]:to.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Nu(a.stateNode,s,t),fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=rm(c),sm(c,t,a,s),fu(a,c),!1}a=a.return}while(a!==null);return!1}var om=Error(r(461)),pn=!1;function Sn(t,n,a,s){n.child=t===null?Qp(n,null,a,s):zr(n,t.child,a,s)}function lm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return tr(n),s=gu(t,n,a,x,f,c),E=_u(),t!==null&&!pn?(vu(t,n,c),Fi(t,n,c)):(be&&E&&$c(n),n.flags|=1,Sn(t,n,s,c),n.child)}function cm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Kc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,um(t,n,f,s,c)):(t=jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Gu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(x,s)&&t.ref===n.ref)return Fi(t,n,c)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function um(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Gu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Fi(t,n,c)}return Ou(t,n,a,s,c)}function fm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return hm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$o(n,f!==null?f.cachePool:null),f!==null?up(n,f):du(),Jp(n);else return n.lanes=n.childLanes=536870912,hm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?($o(n,f.cachePool),up(n,f),ga(),n.memoizedState=null):(t!==null&&$o(n,null),du(),ga());return Sn(t,n,c,a),n.child}function hm(t,n,a,s){var c=ou();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&$o(n,null),du(),Jp(n),t!==null&&Os(t,n,s,!0),null}function gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ou(t,n,a,s,c){return tr(n),a=gu(t,n,a,s,void 0,c),s=_u(),t!==null&&!pn?(vu(t,n,c),Fi(t,n,c)):(be&&s&&$c(n),n.flags|=1,Sn(t,n,a,c),n.child)}function dm(t,n,a,s,c,f){return tr(n),n.updateQueue=null,a=hp(n,s,a,c),fp(t),s=_u(),t!==null&&!pn?(vu(t,n,f),Fi(t,n,f)):(be&&s&&$c(n),n.flags|=1,Sn(t,n,a,f),n.child)}function pm(t,n,a,s,c){if(tr(n),n.stateNode===null){var f=Cr,x=a.contextType;typeof x=="object"&&x!==null&&(f=bn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},cu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?bn(x):Cr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Uu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Lu.enqueueReplaceState(f,f.state,null),Gs(n,s,f,c),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=ir(a,E);f.props=P;var Q=f.context,ut=a.contextType;x=Cr,typeof ut=="object"&&ut!==null&&(x=bn(ut));var vt=a.getDerivedStateFromProps;ut=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==x)&&tm(n,f,s,x),fa=!1;var et=n.memoizedState;f.state=et,Gs(n,s,f,c),Hs(),Q=n.memoizedState,E||et!==Q||fa?(typeof vt=="function"&&(Uu(n,a,vt,s),Q=n.memoizedState),(P=fa||$p(n,a,P,s,et,Q,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=x,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uu(t,n),x=n.memoizedProps,ut=ir(a,x),f.props=ut,vt=n.pendingProps,et=f.context,Q=a.contextType,P=Cr,typeof Q=="object"&&Q!==null&&(P=bn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||et!==P)&&tm(n,f,s,P),fa=!1,et=n.memoizedState,f.state=et,Gs(n,s,f,c),Hs();var it=n.memoizedState;x!==vt||et!==it||fa||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof E=="function"&&(Uu(n,a,E,s),it=n.memoizedState),(ut=fa||$p(n,a,ut,s,et,it,P)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=P,s=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,gl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=zr(n,t.child,null,c),n.child=zr(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Fi(t,n,c),t}function mm(t,n,a,s){return Ls(),n.flags|=256,Sn(t,n,a,s),n.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(t){return{baseLanes:t,cachePool:np()}}function Iu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function gm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?ma(n):ga(),be){var E=je,P;if(P=E){t:{for(P=E,E=_i;P.nodeType!==8;){if(!E){E=null;break t}if(P=li(P.nextSibling),P===null){E=null;break t}}E=P}E!==null?(n.memoizedState={dehydrated:E,treeContext:Za!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=E,P.return=n,n.child=P,wn=n,je=null,P=!0):P=!1}P||Ja(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Mf(E)?n.lanes=32:n.lanes=536870912,null;zi(n)}return E=s.children,s=s.fallback,c?(ga(),c=n.mode,E=_l({mode:"hidden",children:E},c),s=ja(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,c=n.child,c.memoizedState=Bu(a),c.childLanes=Iu(t,x,a),n.memoizedState=Pu,s):(ma(n),zu(n,E))}if(P=t.memoizedState,P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Fu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),c=s.fallback,E=n.mode,s=_l({mode:"visible",children:s.children},E),c=ja(c,E,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,zr(n,t.child,null,a),s=n.child,s.memoizedState=Bu(a),s.childLanes=Iu(t,x,a),n.memoizedState=Pu,n=c);else if(ma(n),Mf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,s=Error(r(419)),s.stack="",s.digest=x,Ns({value:s,source:null,stack:null}),n=Fu(t,n,a)}else if(pn||Os(t,n,a,!1),x=(a&t.childLanes)!==0,pn||x){if(x=Ve,x!==null&&(s=a&-a,s=(s&42)!==0?1:He(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Rr(t,s),jn(x,t,s),om;E.data==="$?"||af(),n=Fu(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,je=li(E.nextSibling),wn=n,be=!0,Qa=null,_i=!1,t!==null&&($n[ti++]=Ni,$n[ti++]=Oi,$n[ti++]=Za,Ni=t.id,Oi=t.overflow,Za=n),n=zu(n,s.children),n.flags|=4096);return n}return c?(ga(),c=s.fallback,E=n.mode,P=t.child,Q=P.sibling,s=Li(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,Q!==null?c=Li(Q,c):(c=ja(c,E,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,E=t.child.memoizedState,E===null?E=Bu(a):(P=E.cachePool,P!==null?(Q=ln._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=np(),E={baseLanes:E.baseLanes|a,cachePool:P}),c.memoizedState=E,c.childLanes=Iu(t,x,a),n.memoizedState=Pu,s):(ma(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function zu(t,n){return n=_l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _l(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fu(t,n,a){return zr(n,t.child,null,a),t=zu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _m(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),iu(t.return,n,a)}function Hu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function vm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(t,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,a,n);else if(t.tag===19)_m(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Mt(cn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&dl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Hu(n,!0,a,null,f);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function Nv(t,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),ua(n,ln,t.memoizedState.cache),Ls();break;case 27:case 5:Zt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gm(t,n,a):(ma(n),t=Fi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return vm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,fm(t,n,a);case 24:ua(n,ln,t.memoizedState.cache)}return Fi(t,n,a)}function xm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Gu(t,a)&&(n.flags&128)===0)return pn=!1,Nv(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,be&&(n.flags&1048576)!==0&&Zd(n,Ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Kc(s)?(t=ir(s,t),n.tag=1,n=pm(null,n,s,t,a)):(n.tag=0,n=Ou(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=lm(null,n,s,t,a);break t}else if(c===I){n.tag=14,n=cm(null,n,s,t,a);break t}}throw n=ct(s)||s,Error(r(306,n,""))}}return n;case 0:return Ou(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ir(s,n.pendingProps),pm(t,n,s,c,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,uu(t,n),Gs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,ua(n,ln,s),s!==f.cache&&au(n,[ln],a,!0),Hs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=mm(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Ns(c),n=mm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=li(t.firstChild),wn=n,be=!0,Qa=null,_i=!0,a=Qp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),s===c){n=Fi(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return gl(t,n),t===null?(a=Eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Ul(St.current).createElement(a),s[sn]=n,s[vn]=t,yn(s,a,t),en(s),n.stateNode=s):n.memoizedState=Eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&be&&(s=n.stateNode=Sg(n.type,n.pendingProps,St.current),wn=n,_i=!0,c=je,ba(n.type)?(yf=c,je=li(s.firstChild)):je=c),Sn(t,n,n.pendingProps.children,a),gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=je)&&(s=ox(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,wn=n,je=li(s.firstChild),_i=!1,c=!0):c=!1),c||Ja(n)),Zt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:x!==null&&vf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=gu(t,n,bv,null,null,a),co._currentValue=c),gl(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=je)&&(a=lx(a,n.pendingProps,_i),a!==null?(n.stateNode=a,wn=n,je=null,t=!0):t=!1),t||Ja(n)),null;case 13:return gm(t,n,a);case 4:return Ut(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zr(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return lm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),Sn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=bn(c),s=s(c),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return cm(t,n,n.type,n.pendingProps,a);case 15:return um(t,n,n.type,n.pendingProps,a);case 19:return vm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=_l(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Li(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return fm(t,n,a);case 24:return tr(n),s=bn(ln),t===null?(c=ou(),c===null&&(c=Ve,f=ru(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},cu(n),ua(n,ln,c)):((t.lanes&a)!==0&&(uu(t,n),Gs(n,null,null,a),Hs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,ln,s)):(s=f.cache,ua(n,ln,s),s!==c.cache&&au(n,[ln],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function Sm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Cg(n)){if(n=ei.current,n!==null&&((xe&4194048)===xe?vi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==vi))throw zs=lu,ip;t.flags|=8192}}function vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Lt():536870912,t.lanes|=n,Vr|=n)}function js(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ov(t,n,a){var s=n.pendingProps;switch(tu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(ln),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jd())),We(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(We(n),Sm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),We(n),Sm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),We(n),n.flags&=-16777217),null;case 27:Fe(n),a=St.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=Z.current,Us(n)?Kd(n):(t=Sg(c,s,a),n.stateNode=t,Hi(n))}return We(n),null;case 5:if(Fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=Z.current,Us(n))Kd(n);else{switch(c=Ul(St.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[sn]=n,t[vn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(yn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||dg(t.nodeValue,a)),t||Ja(n)}else t=Ul(t).createTextNode(s),t[sn]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=Jd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(zi(n),n):(zi(n),null)}if(zi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),vl(n,n.updateQueue),We(n),null;case 4:return se(),t===null&&df(n.stateNode.containerInfo),We(n),null;case 10:return Bi(n.type),We(n),null;case 19:if(xt(cn),c=n.memoizedState,c===null)return We(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)js(c,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=dl(t),f!==null){for(n.flags|=128,js(c,!1),t=f.updateQueue,n.updateQueue=t,vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)jd(a,t),a=a.sibling;return Mt(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ne()>Ml&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304)}else{if(!s)if(t=dl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,vl(n,t),js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return We(n),null}else 2*ne()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ne(),n.sibling=null,t=cn.current,Mt(cn,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return zi(n),pu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(ln),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Pv(t,n){switch(tu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(ln),se(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 13:if(zi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xt(cn),null;case 4:return se(),null;case 10:return Bi(n.type),null;case 22:case 23:return zi(n),pu(),t!==null&&xt(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(ln),null;case 25:return null;default:return null}}function Mm(t,n){switch(tu(n),n.tag){case 3:Bi(ln),se();break;case 26:case 27:case 5:Fe(n);break;case 4:se();break;case 13:zi(n);break;case 19:xt(cn);break;case 10:Bi(n.type);break;case 22:case 23:zi(n),pu(),t!==null&&xt(er);break;case 24:Bi(ln)}}function Zs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){ze(n,n.return,E)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var P=a,Q=E;try{Q()}catch(ut){ze(c,P,ut)}}}s=s.next}while(s!==f)}}catch(ut){ze(n,n.return,ut)}}function ym(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cp(n,a)}catch(s){ze(t,t.return,s)}}}function Em(t,n,a){a.props=ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){ze(t,n,c)}}function xi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Tm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function Vu(t,n,a){try{var s=t.stateNode;nx(s,t.type,a,n),s[vn]=n}catch(c){ze(t,t.return,c)}}function bm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xu(t,n,a),t=t.sibling;t!==null;)Xu(t,n,a),t=t.sibling}function xl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(xl(t,n,a),t=t.sibling;t!==null;)xl(t,n,a),t=t.sibling}function Am(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[sn]=t,n[vn]=a}catch(f){ze(t,t.return,f)}}var Gi=!1,Qe=!1,Wu=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Bv(t,n){if(t=t.containerInfo,gf=Il,t=zd(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,P=-1,Q=0,ut=0,vt=t,et=null;e:for(;;){for(var it;vt!==a||c!==0&&vt.nodeType!==3||(E=x+c),vt!==f||s!==0&&vt.nodeType!==3||(P=x+s),vt.nodeType===3&&(x+=vt.nodeValue.length),(it=vt.firstChild)!==null;)et=vt,vt=it;for(;;){if(vt===t)break e;if(et===a&&++Q===c&&(E=x),et===f&&++ut===s&&(P=x),(it=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=it}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Il=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var te=ir(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(te,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(jt){ze(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Cm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),s&4&&Zs(5,a);break;case 1:if(va(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){ze(a,a.return,x)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}s&64&&ym(a),s&512&&Ks(a,a.return);break;case 3:if(va(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cp(t,n)}catch(x){ze(a,a.return,x)}}break;case 27:n===null&&s&4&&Am(a);case 26:case 5:va(t,a),n===null&&s&4&&Tm(a),s&512&&Ks(a,a.return);break;case 12:va(t,a);break;case 13:va(t,a),s&4&&Um(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Wv.bind(null,a),cx(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Gi;var f=Qe;Gi=s,(Qe=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),Gi=c,Qe=f}break;case 30:break;default:va(t,a)}}function wm(t){var n=t.alternate;n!==null&&(t.alternate=null,wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&sa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,Pn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)Dm(t,n,a),a=a.sibling}function Dm(t,n,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Qe||xi(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||xi(a,n);var s=ke,c=Pn;ba(a.type)&&(ke=a.stateNode,Pn=!1),Vi(t,n,a),ro(a.stateNode),ke=s,Pn=c;break;case 5:Qe||xi(a,n);case 6:if(s=ke,c=Pn,ke=null,Vi(t,n,a),ke=s,Pn=c,ke!==null)if(Pn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:ke!==null&&(Pn?(t=ke,vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):vg(ke,a.stateNode));break;case 4:s=ke,c=Pn,ke=a.stateNode.containerInfo,Pn=!0,Vi(t,n,a),ke=s,Pn=c;break;case 0:case 11:case 14:case 15:Qe||_a(2,a,n),Qe||_a(4,a,n),Vi(t,n,a);break;case 1:Qe||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Em(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Vi(t,n,a),Qe=s;break;default:Vi(t,n,a)}}function Um(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){ze(n,n.return,a)}}function Iv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rm),n;default:throw Error(r(435,t.tag))}}function qu(t,n){var a=Iv(t);n.forEach(function(s){var c=qv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(ba(E.type)){ke=E.stateNode,Pn=!1;break t}break;case 5:ke=E.stateNode,Pn=!1;break t;case 3:case 4:ke=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(ke===null)throw Error(r(160));Dm(f,x,c),ke=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Lm(n,t),n=n.sibling}var oi=null;function Lm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(_a(3,t,t.return),Zs(3,t),_a(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=oi;if(Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ra]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[sn]=t,en(f),s=f;break t;case"link":var x=Ag("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Ag("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,en(f),s=f}t.stateNode=s}else Rg(c,t.type,t.stateNode);else t.stateNode=bg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Rg(c,t.type,t.stateNode):bg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),a!==null&&s&4&&Vu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),t.flags&32){c=t.stateNode;try{gi(c,"")}catch(it){ze(t,t.return,it)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Wu=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){ze(t,t.return,it)}}break;case 3:if(Ol=null,c=oi,oi=Ll(n.containerInfo),Xn(n,t),oi=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(it){ze(t,t.return,it)}Wu&&(Wu=!1,Nm(t));break;case 4:s=oi,oi=Ll(t.stateNode.containerInfo),Xn(n,t),Wn(t),oi=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=ne()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=Gi,ut=Qe;if(Gi=Q||c,Qe=ut||P,Xn(n,t),Qe=ut,Gi=Q,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Gi||Qe||ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=P.stateNode;var vt=P.memoizedProps.style,et=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){ze(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){ze(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qu(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(bm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ku(t);xl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(gi(x,""),a.flags&=-33);var E=ku(t);xl(t,E,x);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=ku(t);Xu(t,Q,P);break;default:throw Error(r(161))}}catch(ut){ze(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Nm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cm(t,n.alternate,n),n=n.sibling}function ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ar(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Em(n,n.return,a),ar(n);break;case 27:ro(n.stateNode);case 26:case 5:xi(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),Zs(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)lp(P[c],E)}catch(Q){ze(s,s.return,Q)}}a&&x&64&&ym(f),Ks(f,f.return);break;case 27:Am(f);case 26:case 5:xa(c,f,a),a&&s===null&&x&4&&Tm(f),Ks(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&x&4&&Um(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),Ks(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function Yu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function ju(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function Si(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Om(t,n,a,s),n=n.sibling}function Om(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,s),c&2048&&Zs(9,n);break;case 1:Si(t,n,a,s);break;case 3:Si(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(c&2048){Si(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){ze(n,n.return,P)}}else Si(t,n,a,s);break;case 13:Si(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,s):Qs(t,n):f._visibility&2?Si(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yu(x,n);break;case 24:Si(t,n,a,s),c&2048&&ju(n.alternate,n);break;default:Si(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,E=a,P=s,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Fr(f,x,E,P,c),Zs(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Fr(f,x,E,P,c):Qs(f,x):(ut._visibility|=2,Fr(f,x,E,P,c)),c&&Q&2048&&Yu(x.alternate,x);break;case 24:Fr(f,x,E,P,c),c&&Q&2048&&ju(x.alternate,x);break;default:Fr(f,x,E,P,c)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Qs(a,s),c&2048&&Yu(s.alternate,s);break;case 24:Qs(a,s),c&2048&&ju(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function Hr(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Pm(t),t=t.sibling}function Pm(t){switch(t.tag){case 26:Hr(t),t.flags&Js&&t.memoizedState!==null&&yx(oi,t.memoizedState,t.memoizedProps);break;case 5:Hr(t);break;case 3:case 4:var n=oi;oi=Ll(t.stateNode.containerInfo),Hr(t),oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Hr(t),Js=n):Hr(t));break;default:Hr(t)}}function Bm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,zm(s,t)}Bm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Im(t),t=t.sibling}function Im(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&_a(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sl(t)):$s(t);break;default:$s(t)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,zm(s,t)}Bm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}t=t.sibling}}function zm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(wm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var zv={getCacheForType:function(t){var n=bn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Fv=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ve=null,de=null,xe=0,Re=0,qn=null,Sa=!1,Gr=!1,Zu=!1,ki=0,Ze=0,Ma=0,rr=0,Ku=0,ni=0,Vr=0,to=null,Bn=null,Qu=!1,Ju=0,Ml=1/0,yl=null,ya=null,Mn=0,Ea=null,kr=null,Xr=0,$u=0,tf=null,Fm=null,eo=0,ef=null;function Yn(){if((Ae&2)!==0&&xe!==0)return xe&-xe;if(O.T!==null){var t=Ur;return t!==0?t:cf()}return Me()}function Hm(){ni===0&&(ni=(xe&536870912)===0||be?X():536870912);var t=ei.current;return t!==null&&(t.flags|=32),ni}function jn(t,n,a){(t===Ve&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),Ta(t,xe,ni,!1)),_t(t,a),((Ae&2)===0||t!==Ve)&&(t===Ve&&((Ae&2)===0&&(rr|=a),Ze===4&&Ta(t,xe,ni,!1)),Mi(t))}function Gm(t,n,a){if((Ae&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||ee(t,n),c=s?Vv(t,n):rf(t,n,!0),f=s;do{if(c===0){Gr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Hv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=to;var P=E.current.memoizedState.isDehydrated;if(P&&(Wr(E,x).flags|=256),x=rf(E,x,!1),x!==2){if(Zu&&!P){E.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ni,!Sa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ju+300-ne(),10<c)){if(Ta(s,n,ni,!Sa),le(s,0,!0)!==0)break t;s.timeoutHandle=gg(Vm.bind(null,s,a,Bn,yl,Qu,n,ni,rr,Vr,Sa,f,2,-0,0),c);break t}Vm(s,a,Bn,yl,Qu,n,ni,rr,Vr,Sa,f,0,-0,0)}}break}while(!0);Mi(t)}function Vm(t,n,a,s,c,f,x,E,P,Q,ut,vt,et,it){if(t.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:Mx},Pm(n),vt=Ex(),vt!==null)){t.cancelPendingCommit=vt(Zm.bind(null,t,n,f,a,s,c,x,E,P,ut,1,et,it)),Ta(t,f,x,!Q);return}Zm(t,n,f,a,s,c,x,E,P)}function Hv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~Ku,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ht(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Nt(t,a,n)}function El(){return(Ae&6)===0?(no(0),!1):!0}function nf(){if(de!==null){if(Re===0)var t=de.return;else t=de,Pi=$a=null,xu(t),Ir=null,qs=0,t=de;for(;t!==null;)Mm(t.alternate,t),t=t.return;de=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ax(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ve=t,de=a=Li(t.current,null),xe=n,Re=0,qn=null,Sa=!1,Gr=ee(t,n),Zu=!1,Vr=ni=Ku=rr=Ma=Ze=0,Bn=to=null,Qu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ht(s),f=1<<c;n|=t[c],s&=~f}return ki=n,Wo(),a}function km(t,n){ce=null,O.H=ul,n===Is||n===tl?(n=sp(),Re=3):n===ip?(n=sp(),Re=4):Re=n===om?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,de===null&&(Ze=1,ml(t,Qn(n,t.current)))}function Xm(){var t=O.H;return O.H=ul,t===null?ul:t}function Wm(){var t=O.A;return O.A=zv,t}function af(){Ze=4,Sa||(xe&4194048)!==xe&&ei.current!==null||(Gr=!0),(Ma&134217727)===0&&(rr&134217727)===0||Ve===null||Ta(Ve,xe,ni,!1)}function rf(t,n,a){var s=Ae;Ae|=2;var c=Xm(),f=Wm();(Ve!==t||xe!==n)&&(yl=null,Wr(t,n)),n=!1;var x=Ze;t:do try{if(Re!==0&&de!==null){var E=de,P=qn;switch(Re){case 8:nf(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var Q=Re;if(Re=0,qn=null,qr(t,E,P,Q),a&&Gr){x=0;break t}break;default:Q=Re,Re=0,qn=null,qr(t,E,P,Q)}}Gv(),x=Ze;break}catch(ut){km(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Pi=$a=null,Ae=s,O.H=c,O.A=f,de===null&&(Ve=null,xe=0,Wo()),x}function Gv(){for(;de!==null;)qm(de)}function Vv(t,n){var a=Ae;Ae|=2;var s=Xm(),c=Wm();Ve!==t||xe!==n?(yl=null,Ml=ne()+500,Wr(t,n)):Gr=ee(t,n);t:do try{if(Re!==0&&de!==null){n=de;var f=qn;e:switch(Re){case 1:Re=0,qn=null,qr(t,n,f,1);break;case 2:case 9:if(ap(f)){Re=0,qn=null,Ym(n);break}n=function(){Re!==2&&Re!==9||Ve!==t||(Re=7),Mi(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:ap(f)?(Re=0,qn=null,Ym(n)):(Re=0,qn=null,qr(t,n,f,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var E=de;if(!x||Cg(x)){Re=0,qn=null;var P=E.sibling;if(P!==null)de=P;else{var Q=E.return;Q!==null?(de=Q,Tl(Q)):de=null}break e}}Re=0,qn=null,qr(t,n,f,5);break;case 6:Re=0,qn=null,qr(t,n,f,6);break;case 8:nf(),Ze=6;break t;default:throw Error(r(462))}}kv();break}catch(ut){km(t,ut)}while(!0);return Pi=$a=null,O.H=s,O.A=c,Ae=a,de!==null?0:(Ve=null,xe=0,Wo(),Ze)}function kv(){for(;de!==null&&!Un();)qm(de)}function qm(t){var n=xm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Tl(t):de=n}function Ym(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=dm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:xu(n);default:Mm(a,n),n=de=jd(n,ki),n=xm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Tl(t):de=n}function qr(t,n,a,s){Pi=$a=null,xu(n),Ir=null,qs=0;var c=n.return;try{if(Lv(t,c,n,a,xe)){Ze=1,ml(t,Qn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ze=1,ml(t,Qn(a,t.current)),de=null;return}n.flags&32768?(be||s===1?t=!0:Gr||(xe&536870912)!==0?t=!1:(Sa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),jm(n,t)):Tl(n)}function Tl(t){var n=t;do{if((n.flags&32768)!==0){jm(n,Sa);return}t=n.return;var a=Ov(n.alternate,n,ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ze===0&&(Ze=5)}function jm(t,n){do{var a=Pv(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ze=6,de=null}function Zm(t,n,a,s,c,f,x,E,P){t.cancelPendingCommit=null;do bl();while(Mn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=jc,Bt(t,a,f,x,E,P),t===Ve&&(de=Ve=null,xe=0),kr=n,Ea=t,Xr=a,$u=f,tf=c,Fm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yv(L,function(){return tg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=J.p,J.p=2,x=Ae,Ae|=4;try{Bv(t,n,a)}finally{Ae=x,J.p=c,O.T=s}}Mn=1,Km(),Qm(),Jm()}}function Km(){if(Mn===1){Mn=0;var t=Ea,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=J.p;J.p=2;var c=Ae;Ae|=4;try{Lm(n,t);var f=_f,x=zd(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Id(E.ownerDocument.documentElement,E)){if(P!==null&&kc(E)){var Q=P.start,ut=P.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var vt=E.ownerDocument||document,et=vt&&vt.defaultView||window;if(et.getSelection){var it=et.getSelection(),te=E.textContent.length,jt=Math.min(P.start,te),Oe=P.end===void 0?jt:Math.min(P.end,te);!it.extend&&jt>Oe&&(x=Oe,Oe=jt,jt=x);var W=Bd(E,jt),V=Bd(E,Oe);if(W&&V&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=vt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),jt>Oe?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(vt=[],it=E;it=it.parentNode;)it.nodeType===1&&vt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<vt.length;E++){var dt=vt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Il=!!gf,_f=gf=null}finally{Ae=c,J.p=s,O.T=a}}t.current=n,Mn=2}}function Qm(){if(Mn===2){Mn=0;var t=Ea,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=J.p;J.p=2;var c=Ae;Ae|=4;try{Cm(t,n.alternate,n)}finally{Ae=c,J.p=s,O.T=a}}Mn=3}}function Jm(){if(Mn===4||Mn===3){Mn=0,me();var t=Ea,n=kr,a=Xr,s=Fm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,kr=Ea=null,$m(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),tn(a),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=J.p,J.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{O.T=n,J.p=c}}(Xr&3)!==0&&bl(),Mi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===ef?eo++:(eo=0,ef=t):eo=0,no(0)}}function $m(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function bl(t){return Km(),Qm(),Jm(),tg()}function tg(){if(Mn!==5)return!1;var t=Ea,n=$u;$u=0;var a=tn(Xr),s=O.T,c=J.p;try{J.p=32>a?32:a,O.T=null,a=tf,tf=null;var f=Ea,x=Xr;if(Mn=0,kr=Ea=null,Xr=0,(Ae&6)!==0)throw Error(r(331));var E=Ae;if(Ae|=4,Im(f.current),Om(f,f.current,x,a),Ae=E,no(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{J.p=c,O.T=s,$m(t,n)}}function eg(t,n,a){n=Qn(a,n),n=Nu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(_t(t,2),Mi(t))}function ze(t,n,a){if(t.tag===3)eg(t,t,a);else for(;n!==null;){if(n.tag===3){eg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=Qn(a,t),a=rm(2),s=da(n,a,2),s!==null&&(sm(a,s,n,t),_t(s,2),Mi(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Fv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Zu=!0,c.add(a),t=Xv.bind(null,t,n,a),n.then(t,t))}function Xv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(xe&a)===a&&(Ze===4||Ze===3&&(xe&62914560)===xe&&300>ne()-Ju?(Ae&2)===0&&Wr(t,0):Ku|=a,Vr===xe&&(Vr=0)),Mi(t)}function ng(t,n){n===0&&(n=Lt()),t=Rr(t,n),t!==null&&(_t(t,n),Mi(t))}function Wv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ng(t,a)}function qv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ng(t,a)}function Yv(t,n){return ue(t,n)}var Al=null,Yr=null,of=!1,Rl=!1,lf=!1,sr=0;function Mi(t){t!==Yr&&t.next===null&&(Yr===null?Al=Yr=t:Yr=Yr.next=t),Rl=!0,of||(of=!0,Zv())}function no(t,n){if(!lf&&Rl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ht(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,sg(s,f))}else f=xe,f=le(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ee(s,f)||(a=!0,sg(s,f));s=s.next}while(a);lf=!1}}function jv(){ig()}function ig(){Rl=of=!1;var t=0;sr!==0&&(ix()&&(t=sr),sr=0);for(var n=ne(),a=null,s=Al;s!==null;){var c=s.next,f=ag(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(Rl=!0)),s=c}no(t)}function ag(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ht(f),E=1<<x,P=c[x];P===-1?((E&a)===0||(E&s)!==0)&&(c[x]=Ue(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ve,a=xe,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&F(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&F(s),tn(a)){case 2:case 8:a=Gt;break;case 32:a=L;break;case 268435456:a=tt;break;default:a=L}return s=rg.bind(null,t),a=ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&F(s),t.callbackPriority=2,t.callbackNode=null,2}function rg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(bl()&&t.callbackNode!==a)return null;var s=xe;return s=le(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Gm(t,s,n),ag(t,ne()),t.callbackNode!=null&&t.callbackNode===a?rg.bind(null,t):null)}function sg(t,n){if(bl())return null;Gm(t,n,!0)}function Zv(){rx(function(){(Ae&6)!==0?ue(De,jv):ig()})}function cf(){return sr===0&&(sr=X()),sr}function og(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zo(""+t)}function lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Kv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=og((c[vn]||null).action),x=s.submitter;x&&(n=(n=x[vn]||null)?og(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Vo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var P=x?lg(c,x):new FormData(c);Cu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=x?lg(c,x):new FormData(c),Cu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var uf=0;uf<Yc.length;uf++){var ff=Yc[uf],Qv=ff.toLowerCase(),Jv=ff[0].toUpperCase()+ff.slice(1);si(Qv,"on"+Jv)}si(Gd,"onAnimationEnd"),si(Vd,"onAnimationIteration"),si(kd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(mv,"onTransitionRun"),si(gv,"onTransitionStart"),si(_v,"onTransitionCancel"),si(Xd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],P=E.instance,Q=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){pl(ut)}c.currentTarget=null,f=P}else for(x=0;x<s.length;x++){if(E=s[x],P=E.instance,Q=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){pl(ut)}c.currentTarget=null,f=P}}}}function pe(t,n){var a=n[Va];a===void 0&&(a=n[Va]=new Set);var s=t+"__bubble";a.has(s)||(ug(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),ug(a,t,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Cl]){t[Cl]=!0,Bo.forEach(function(a){a!=="selectionchange"&&($v.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,hf("selectionchange",!1,n))}}function ug(t,n,a,s){switch(Og(n)){case 2:var c=Ax;break;case 8:c=Rx;break;default:c=Rf}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=Ai(E),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=f=x;continue t}E=E.parentNode}}s=s.return}_d(function(){var Q=f,ut=Lc(a),vt=[];t:{var et=Wd.get(t);if(et!==void 0){var it=Vo,te=t;switch(t){case"keypress":if(Ho(a)===0)break t;case"keydown":case"keyup":it=Y0;break;case"focusin":te="focus",it=zc;break;case"focusout":te="blur",it=zc;break;case"beforeblur":case"afterblur":it=zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=K0;break;case Gd:case Vd:case kd:it=z0;break;case Xd:it=J0;break;case"scroll":case"scrollend":it=N0;break;case"wheel":it=tv;break;case"copy":case"cut":case"paste":it=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=yd;break;case"toggle":case"beforetoggle":it=nv}var jt=(n&4)!==0,Oe=!jt&&(t==="scroll"||t==="scrollend"),W=jt?et!==null?et+"Capture":null:et;jt=[];for(var V=Q,K;V!==null;){var dt=V;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||W===null||(dt=ys(V,W),dt!=null&&jt.push(ao(V,dt,K))),Oe)break;V=V.return}0<jt.length&&(et=new it(et,te,null,a,ut),vt.push({event:et,listeners:jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",et&&a!==Uc&&(te=a.relatedTarget||a.fromElement)&&(Ai(te)||te[Ln]))break t;if((it||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=Q,te=te?Ai(te):null,te!==null&&(Oe=u(te),jt=te.tag,te!==Oe||jt!==5&&jt!==27&&jt!==6)&&(te=null)):(it=null,te=Q),it!==te)){if(jt=Sd,dt="onMouseLeave",W="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(jt=yd,dt="onPointerLeave",W="onPointerEnter",V="pointer"),Oe=it==null?et:Xa(it),K=te==null?et:Xa(te),et=new jt(dt,V+"leave",it,a,ut),et.target=Oe,et.relatedTarget=K,dt=null,Ai(ut)===Q&&(jt=new jt(W,V+"enter",te,a,ut),jt.target=K,jt.relatedTarget=Oe,dt=jt),Oe=dt,it&&te)e:{for(jt=it,W=te,V=0,K=jt;K;K=jr(K))V++;for(K=0,dt=W;dt;dt=jr(dt))K++;for(;0<V-K;)jt=jr(jt),V--;for(;0<K-V;)W=jr(W),K--;for(;V--;){if(jt===W||W!==null&&jt===W.alternate)break e;jt=jr(jt),W=jr(W)}jt=null}else jt=null;it!==null&&fg(vt,et,it,jt,!1),te!==null&&Oe!==null&&fg(vt,Oe,te,jt,!0)}}t:{if(et=Q?Xa(Q):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Ft=Dd;else if(Cd(et))if(Ud)Ft=hv;else{Ft=uv;var fe=cv}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Dc(Q.elementType)&&(Ft=Dd):Ft=fv;if(Ft&&(Ft=Ft(t,Q))){wd(vt,Ft,a,ut);break t}fe&&fe(t,et,Q),t==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&Tn(et,"number",et.value)}switch(fe=Q?Xa(Q):window,t){case"focusin":(Cd(fe)||fe.contentEditable==="true")&&(Tr=fe,Xc=Q,Ds=null);break;case"focusout":Ds=Xc=Tr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Fd(vt,a,ut);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":Fd(vt,a,ut)}var Vt;if(Hc)t:{switch(t){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Er?Ad(t,a)&&(Qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(Ed&&a.locale!=="ko"&&(Er||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Er&&(Vt=vd()):(ca=ut,Pc="value"in ca?ca.value:ca.textContent,Er=!0)),fe=wl(Q,Qt),0<fe.length&&(Qt=new Md(Qt,t,null,a,ut),vt.push({event:Qt,listeners:fe}),Vt?Qt.data=Vt:(Vt=Rd(a),Vt!==null&&(Qt.data=Vt)))),(Vt=av?rv(t,a):sv(t,a))&&(Qt=wl(Q,"onBeforeInput"),0<Qt.length&&(fe=new Md("onBeforeInput","beforeinput",null,a,ut),vt.push({event:fe,listeners:Qt}),fe.data=Vt)),Kv(vt,t,Q,a,ut)}cg(vt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ys(t,a),c!=null&&s.unshift(ao(t,c,f)),c=ys(t,n),c!=null&&s.push(ao(t,c,f))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fg(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,P=E.alternate,Q=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||Q===null||(P=Q,c?(Q=ys(a,f),Q!=null&&x.unshift(ao(a,Q,P))):c||(Q=ys(a,f),Q!=null&&x.push(ao(a,Q,P)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var tx=/\r\n?/g,ex=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(tx,`
`).replace(ex,"")}function dg(t,n){return n=hg(n),hg(t)===n}function Dl(){}function Ne(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||gi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&gi(t,""+s);break;case"className":Ct(t,"class",s);break;case"tabIndex":Ct(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,s);break;case"style":md(t,s,f);break;case"data":if(n!=="object"){Ct(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=zo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",c.name,c,null),Ne(t,n,"formEncType",c.formEncType,c,null),Ne(t,n,"formMethod",c.formMethod,c,null),Ne(t,n,"formTarget",c.formTarget,c,null)):(Ne(t,n,"encType",c.encType,c,null),Ne(t,n,"method",c.method,c,null),Ne(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=zo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=zo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=U0.get(a)||a,Tt(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":md(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?gi(t,s):(typeof s=="number"||typeof s=="bigint")&&gi(t,""+s);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,x,a,null)}}c&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var E=f=x=c=null,P=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":x=ut;break;case"checked":P=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ut,a,null)}}Ie(t,f,E,P,Q,x,c,!1),Ye(t);return;case"select":pe("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ne(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?on(t,!!s,n,!1):a!=null&&on(t,!!s,a,!0);return;case"textarea":pe("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ne(t,n,x,E,a,null)}xn(t,s,c,f),Ye(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,P,s,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)pe(io[s],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,Q,s,a,null)}return;default:if(Dc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&mf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ne(t,n,E,s,a,null))}function nx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,P=null,Q=null,ut=null;for(it in a){var vt=a[it];if(a.hasOwnProperty(it)&&vt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=vt;default:s.hasOwnProperty(it)||Ne(t,n,it,null,s,vt)}}for(var et in s){var it=s[et];if(vt=a[et],s.hasOwnProperty(et)&&(it!=null||vt!=null))switch(et){case"type":f=it;break;case"name":c=it;break;case"checked":Q=it;break;case"defaultChecked":ut=it;break;case"value":x=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==vt&&Ne(t,n,et,it,s,vt)}}wi(t,x,E,P,Q,ut,f,c);return;case"select":it=x=E=et=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==P&&Ne(t,n,c,f,s,P)}n=E,a=x,s=it,et!=null?on(t,!!a,et,!1):!!s!=!!a&&(n!=null?on(t,!!a,n,!0):on(t,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ne(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(t,n,x,c,s,f)}dn(t,et,it);return;case"option":for(var te in a)if(et=a[te],a.hasOwnProperty(te)&&et!=null&&!s.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:Ne(t,n,te,null,s,et)}for(P in s)if(et=s[P],it=a[P],s.hasOwnProperty(P)&&et!==it&&(et!=null||it!=null))switch(P){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(t,n,P,et,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)et=a[jt],a.hasOwnProperty(jt)&&et!=null&&!s.hasOwnProperty(jt)&&Ne(t,n,jt,null,s,et);for(Q in s)if(et=s[Q],it=a[Q],s.hasOwnProperty(Q)&&et!==it&&(et!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ne(t,n,Q,et,s,it)}return;default:if(Dc(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!s.hasOwnProperty(Oe)&&mf(t,n,Oe,void 0,s,et);for(ut in s)et=s[ut],it=a[ut],!s.hasOwnProperty(ut)||et===it||et===void 0&&it===void 0||mf(t,n,ut,et,s,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!s.hasOwnProperty(W)&&Ne(t,n,W,null,s,et);for(vt in s)et=s[vt],it=a[vt],!s.hasOwnProperty(vt)||et===it||et==null&&it==null||Ne(t,n,vt,et,s,it)}var gf=null,_f=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function ix(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(sx)}:gg;function sx(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function vg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&ro(x.documentElement),a&2&&ro(x.body),a&4)for(a=x.head,ro(a),x=a.firstChild;x;){var E=x.nextSibling,P=x.nodeName;x[ra]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=E}}if(c===0){t.removeChild(f),po(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);po(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ox(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function lx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function cx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var yf=null;function xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Sg(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);sa(t)}var ii=new Map,Mg=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=J.d;J.d={f:ux,r:fx,D:hx,C:dx,L:px,m:mx,X:_x,S:gx,M:vx};function ux(){var t=Xi.f(),n=El();return t||n}function fx(t){var n=Ri(t);n!==null&&n.tag===5&&n.type==="form"?Gp(n):Xi.r(t)}var Zr=typeof document>"u"?null:document;function yg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=Ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Mg.has(c)||(Mg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),en(n),s.head.appendChild(n)))}}function hx(t){Xi.D(t),yg("dns-prefetch",t,null)}function dx(t,n){Xi.C(t,n),yg("preconnect",t,n)}function px(t,n,a){Xi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ge(a.imageSizes)+'"]')):c+='[href="'+Ge(t)+'"]';var f=c;switch(n){case"style":f=Kr(t);break;case"script":f=Qr(t)}ii.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(so(f))||n==="script"&&s.querySelector(oo(f))||(n=s.createElement("link"),yn(n,"link",t),en(n),s.head.appendChild(n)))}}function mx(t,n){Xi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ge(s)+'"][href="'+Ge(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(t)}if(!ii.has(f)&&(t=g({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}s=a.createElement("link"),yn(s,"link",t),en(s),a.head.appendChild(s)}}}function gx(t,n,a){Xi.S(t,n,a);var s=Zr;if(s&&t){var c=oa(s).hoistableStyles,f=Kr(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(so(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&Ef(t,a);var P=x=s.createElement("link");en(P),yn(P,"link",t),P._p=new Promise(function(Q,ut){P.onload=Q,P.onerror=ut}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function _x(t,n){Xi.X(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(oo(c)),f||(t=g({src:t,async:!0},n),(n=ii.get(c))&&Tf(t,n),f=a.createElement("script"),en(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function vx(t,n){Xi.M(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(oo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&Tf(t,n),f=a.createElement("script"),en(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Eg(t,n,a,s){var c=(c=St.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=oa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Kr(a.href);var f=oa(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(so(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||xx(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=oa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Kr(t){return'href="'+Ge(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function Tg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function xx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),en(n),t.head.appendChild(n))}function Qr(t){return'[src="'+Ge(t)+'"]'}function oo(t){return"script[async]"+t}function bg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),yn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Kr(a.href);var f=t.querySelector(so(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Tg(a),(c=ii.get(c))&&Ef(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var x=f;return x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),yn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=Qr(a.src),(c=t.querySelector(oo(f)))?(n.instance=c,en(c),c):(s=a,(c=ii.get(f))&&(s=g({},a),Tf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Ag(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ra]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function Rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Sx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Cg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function Mx(){}function yx(t,n,a){if(lo===null)throw Error(r(475));var s=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(a.href),f=t.querySelector(so(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=Tg(a),(c=ii.get(c))&&Ef(a,c),f=f.createElement("link"),en(f);var x=f;x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Ex(){if(lo===null)throw Error(r(475));var t=lo;return t.stylesheets&&t.count===0&&bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(Tx,t),Bl=null,Pl.call(t))}function Tx(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var co={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function bx(t,n,a,s,c,f,x,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function wg(t,n,a,s,c,f,x,E,P,Q,ut,vt){return t=new bx(t,n,a,x,E,P,Q,vt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},cu(f),t}function Dg(t){return t?(t=Cr,t):Cr}function Ug(t,n,a,s,c,f){c=Dg(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(jn(a,t,n),Fs(a,t,n))}function Lg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Af(t,n){Lg(t,n),(t=t.alternate)&&Lg(t,n)}function Ng(t){if(t.tag===13){var n=Rr(t,67108864);n!==null&&jn(n,t,67108864),Af(t,67108864)}}var Il=!0;function Ax(t,n,a,s){var c=O.T;O.T=null;var f=J.p;try{J.p=2,Rf(t,n,a,s)}finally{J.p=f,O.T=c}}function Rx(t,n,a,s){var c=O.T;O.T=null;var f=J.p;try{J.p=8,Rf(t,n,a,s)}finally{J.p=f,O.T=c}}function Rf(t,n,a,s){if(Il){var c=Cf(s);if(c===null)pf(t,n,s,zl,a),Pg(t,s);else if(wx(c,t,n,a,s))s.stopPropagation();else if(Pg(t,s),n&4&&-1<Cx.indexOf(t)){for(;c!==null;){var f=Ri(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Pt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var P=1<<31-Ht(x);E.entanglements[1]|=P,x&=~P}Mi(f),(Ae&6)===0&&(Ml=ne()+500,no(0))}}break;case 13:E=Rr(f,2),E!==null&&jn(E,f,2),El(),Af(f,2)}if(f=Cf(s),f===null&&pf(t,n,s,zl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Cf(t){return t=Lc(t),wf(t)}var zl=null;function wf(t){if(zl=null,t=Ai(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zl=t,null}function Og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case De:return 2;case Gt:return 8;case L:case T:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Df=!1,Aa=null,Ra=null,Ca=null,uo=new Map,fo=new Map,wa=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pg(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ri(n),n!==null&&Ng(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function wx(t,n,a,s,c){switch(n){case"focusin":return Aa=ho(Aa,t,n,a,s,c),!0;case"dragenter":return Ra=ho(Ra,t,n,a,s,c),!0;case"mouseover":return Ca=ho(Ca,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return uo.set(f,ho(uo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,c)),!0}return!1}function Bg(t){var n=Ai(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var s=Yn();s=He(s);var c=Rr(a,s);c!==null&&jn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Cf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=Ri(a),n!==null&&Ng(n),t.blockedOn=a,!1;n.shift()}return!0}function Ig(t,n,a){Fl(t)&&a.delete(n)}function Dx(){Df=!1,Aa!==null&&Fl(Aa)&&(Aa=null),Ra!==null&&Fl(Ra)&&(Ra=null),Ca!==null&&Fl(Ca)&&(Ca=null),uo.forEach(Ig),fo.forEach(Ig)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dx)))}var Gl=null;function zg(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var f=Ri(a);f!==null&&(t.splice(n,3),n-=3,Cu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function po(t){function n(P){return Hl(P,t)}Aa!==null&&Hl(Aa,t),Ra!==null&&Hl(Ra,t),Ca!==null&&Hl(Ca,t),uo.forEach(n),fo.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Bg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[vn]||null;if(typeof f=="function")x||zg(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[vn]||null)E=x.formAction;else if(wf(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),zg(a)}}}function Uf(t){this._internalRoot=t}Vl.prototype.render=Uf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Ug(a,s,t,n,null,null)},Vl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ug(t.current,2,null,t,null,null),El(),n[Ln]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Bg(t)}};var Fg=e.version;if(Fg!=="19.1.0")throw Error(r(527,Fg,"19.1.0"));J.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Ux={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{ft=kl.inject(Ux),Ot=kl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=em,f=nm,x=im,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=wg(t,1,!1,null,null,a,s,c,f,x,E,null),t[Ln]=n.current,df(t),new Uf(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=em,x=nm,E=im,P=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=wg(t,1,!0,n,a??null,s,c,f,x,E,P,Q),n.context=Dg(null),a=n.current,s=Yn(),s=He(s),c=ha(s),c.callback=null,da(a,c,s),a=s,n.current.lanes=a,_t(n,a),Mi(n),t[Ln]=n.current,df(t),new Vl(n)},go.version="19.1.0",go}var Zg;function Gx(){if(Zg)return Of.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Of.exports=Hx(),Of.exports}var Vx=Gx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="176",kx=0,Kg=1,Xx=2,J_=1,Wx=2,Ki=3,Ha=0,zn=1,Qi=2,za=0,ds=1,Qg=2,Jg=3,$g=4,qx=5,mr=100,Yx=101,jx=102,Zx=103,Kx=104,Qx=200,Jx=201,$x=202,tS=203,_h=204,vh=205,eS=206,nS=207,iS=208,aS=209,rS=210,sS=211,oS=212,lS=213,cS=214,xh=0,Sh=1,Mh=2,ms=3,yh=4,Eh=5,Th=6,bh=7,$_=0,uS=1,fS=2,Fa=0,hS=1,dS=2,pS=3,mS=4,gS=5,_S=6,vS=7,t0=300,gs=301,_s=302,Ah=303,Rh=304,Ac=306,Ch=1e3,_r=1001,wh=1002,mi=1003,xS=1004,Xl=1005,Ei=1006,zf=1007,vr=1008,na=1009,e0=1010,n0=1011,To=1012,sd=1013,xr=1014,Ji=1015,Co=1016,od=1017,ld=1018,bo=1020,i0=35902,a0=1021,r0=1022,pi=1023,Ao=1026,Ro=1027,s0=1028,cd=1029,o0=1030,ud=1031,fd=1033,pc=33776,mc=33777,gc=33778,_c=33779,Dh=35840,Uh=35841,Lh=35842,Nh=35843,Oh=36196,Ph=37492,Bh=37496,Ih=37808,zh=37809,Fh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,jh=37819,Zh=37820,Kh=37821,vc=36492,Qh=36494,Jh=36495,l0=36283,$h=36284,td=36285,ed=36286,SS=3200,MS=3201,yS=0,ES=1,Ia="",ri="srgb",vs="srgb-linear",Mc="linear",Pe="srgb",Jr=7680,t_=519,TS=512,bS=513,AS=514,c0=515,RS=516,CS=517,wS=518,DS=519,e_=35044,n_="300 es",$i=2e3,yc=2001;class Ss{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,nd=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function US(o,e){return(o%e+e)%e}function Hf(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(e,i,r,l,u,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],y=r[5],b=r[8],C=l[0],M=l[3],_=l[6],B=l[1],N=l[4],U=l[7],k=l[2],G=l[5],I=l[8];return u[0]=h*C+d*B+m*k,u[3]=h*M+d*N+m*G,u[6]=h*_+d*U+m*I,u[1]=p*C+g*B+v*k,u[4]=p*M+g*N+v*G,u[7]=p*_+g*U+v*I,u[2]=S*C+y*B+b*k,u[5]=S*M+y*N+b*G,u[8]=S*_+y*U+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,S=d*m-g*u,y=p*u-h*m,b=i*v+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Gf.makeScale(e,i)),this}rotate(e){return this.premultiply(Gf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Gf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new re;function u0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LS(){const o=Ec("canvas");return o.style.display="block",o}const i_={};function xc(o){o in i_||(i_[o]=!0,console.warn(o))}function NS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function OS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function PS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const a_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:e,whitePoint:r,transfer:Mc,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Te=BS();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class IS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=Ec("canvas")),$r.width=e.width,$r.height=e.height;const l=$r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ea(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Vf(l[h].image)):u.push(Vf(l[h]))}else u=Vf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Vf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?IS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FS=0;class Fn extends Ss{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=_r,l=_r,u=Ei,h=vr,d=pi,m=na,p=Fn.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=wo(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=t0;Fn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],S=m[1],y=m[5],b=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,k=(_+1)/2,G=(g+S)/4,I=(v+C)/4,z=(b+M)/4;return N>U&&N>k?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=I/r):U>k?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=z/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=I/u,l=z/u),this.set(r,l,u,i),this}let B=Math.sqrt((M-b)*(M-b)+(v-C)*(v-C)+(S-g)*(S-g));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(v-C)/B,this.z=(S-g)/B,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends Ss{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new hd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends HS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class f0 extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=u[h+0],y=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(v!==C||m!==S||p!==y||g!==b){let M=1-d;const _=m*S+p*y+g*b+v*C,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const k=Math.sqrt(N),G=Math.atan2(k,_*B);M=Math.sin(M*G)/k,d=Math.sin(d*G)/k}const U=d*B;if(m=m*M+S*U,p=p*M+y*U,g=g*M+b*U,v=v*M+C*U,M===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=k,p*=k,g*=k,v*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],S=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+g*v+m*y-p*S,e[i+1]=m*b+g*S+p*v-d*y,e[i+2]=p*b+g*y+d*S-m*v,e[i+3]=g*b-d*v-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),S=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"YXZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"ZXY":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"ZYX":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"YZX":this._x=S*g*v+p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v-S*y*b;break;case"XZY":this._x=S*g*v-p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(s_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new st,s_=new Do;class Uo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(u,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Wl.copy(r.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),ql.subVectors(this.max,vo),ts.subVectors(e.a,vo),es.subVectors(e.b,vo),ns.subVectors(e.c,vo),Ua.subVectors(es,ts),La.subVectors(ns,es),or.subVectors(ts,ns);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-or.z,or.y,Ua.z,0,-Ua.x,La.z,0,-La.x,or.z,0,-or.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-or.y,or.x,0];return!Xf(i,ts,es,ns,ql)||(i=[1,0,0,0,1,0,0,0,1],!Xf(i,ts,es,ns,ql))?!1:(Yl.crossVectors(Ua,La),i=[Yl.x,Yl.y,Yl.z],Xf(i,ts,es,ns,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new st,new st,new st,new st,new st,new st,new st,new st],ci=new st,Wl=new Uo,ts=new st,es=new st,ns=new st,Ua=new st,La=new st,or=new st,vo=new st,ql=new st,Yl=new st,lr=new st;function Xf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){lr.fromArray(o,u);const d=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=e.dot(lr),p=i.dot(lr),g=r.dot(lr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const VS=new Uo,xo=new st,Wf=new st;class Rc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):VS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const i=xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Wf)),this.expandByPoint(xo.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new st,qf=new st,jl=new st,Na=new st,Yf=new st,Zl=new st,jf=new st;class h0{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){qf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(qf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Na.dot(this.direction),m=-Na.dot(jl),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,S,y,b;if(g>0)if(v=h*m-d,S=h*d-m,b=u*g,v>=0)if(S>=-b)if(S<=b){const C=1/g;v*=C,S*=C,y=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(qf).addScaledVector(jl,S),y}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,u){Yf.subVectors(i,e),Zl.subVectors(r,e),jf.crossVectors(Yf,Zl);let h=this.direction.dot(jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const m=d*this.direction.dot(Zl.crossVectors(Na,Zl));if(m<0)return null;const p=d*this.direction.dot(Yf.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(jf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,m,p,g,v,S,y,b,C,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,S,y,b,C,M)}set(e,i,r,l,u,h,d,m,p,g,v,S,y,b,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=b,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),h=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*g,y=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,y=m*v,b=p*g,C=p*v;i[0]=S+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,y=m*v,b=p*g,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,y=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=b*p-y,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-S*v,i[8]=b*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+b,i[10]=S-C*v}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+C,i[5]=h*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*g,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kS,e,XS)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(r,Zn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(r,Zn)),Oa.normalize(),Kl.crossVectors(Zn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Zn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Zn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],y=r[13],b=r[2],C=r[6],M=r[10],_=r[14],B=r[3],N=r[7],U=r[11],k=r[15],G=l[0],I=l[4],z=l[8],w=l[12],R=l[1],H=l[5],nt=l[9],at=l[13],ct=l[2],pt=l[6],O=l[10],J=l[14],q=l[3],yt=l[7],D=l[11],$=l[15];return u[0]=h*G+d*R+m*ct+p*q,u[4]=h*I+d*H+m*pt+p*yt,u[8]=h*z+d*nt+m*O+p*D,u[12]=h*w+d*at+m*J+p*$,u[1]=g*G+v*R+S*ct+y*q,u[5]=g*I+v*H+S*pt+y*yt,u[9]=g*z+v*nt+S*O+y*D,u[13]=g*w+v*at+S*J+y*$,u[2]=b*G+C*R+M*ct+_*q,u[6]=b*I+C*H+M*pt+_*yt,u[10]=b*z+C*nt+M*O+_*D,u[14]=b*w+C*at+M*J+_*$,u[3]=B*G+N*R+U*ct+k*q,u[7]=B*I+N*H+U*pt+k*yt,u[11]=B*z+N*nt+U*O+k*D,u[15]=B*w+N*at+U*J+k*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],S=e[10],y=e[14],b=e[3],C=e[7],M=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*S+r*p*S+l*d*y-r*m*y)+C*(+i*m*y-i*p*S+u*h*S-l*h*y+l*p*g-u*m*g)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*S+l*h*v-r*h*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],S=e[10],y=e[11],b=e[12],C=e[13],M=e[14],_=e[15],B=v*M*p-C*S*p+C*m*y-d*M*y-v*m*_+d*S*_,N=b*S*p-g*M*p-b*m*y+h*M*y+g*m*_-h*S*_,U=g*C*p-b*v*p+b*d*y-h*C*y-g*d*_+h*v*_,k=b*v*m-g*C*m-b*d*S+h*C*S+g*d*M-h*v*M,G=i*B+r*N+l*U+u*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=B*I,e[1]=(C*S*u-v*M*u-C*l*y+r*M*y+v*l*_-r*S*_)*I,e[2]=(d*M*u-C*m*u+C*l*p-r*M*p-d*l*_+r*m*_)*I,e[3]=(v*m*u-d*S*u-v*l*p+r*S*p+d*l*y-r*m*y)*I,e[4]=N*I,e[5]=(g*M*u-b*S*u+b*l*y-i*M*y-g*l*_+i*S*_)*I,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*I,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*y+i*m*y)*I,e[8]=U*I,e[9]=(b*v*u-g*C*u-b*r*y+i*C*y+g*r*_-i*v*_)*I,e[10]=(h*C*u-b*d*u+b*r*p-i*C*p-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*y-i*d*y)*I,e[12]=k*I,e[13]=(g*C*l-b*v*l+b*r*S-i*C*S-g*r*M+i*v*M)*I,e[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*M-i*d*M)*I,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,S=u*p,y=u*g,b=u*v,C=h*g,M=h*v,_=d*v,B=m*p,N=m*g,U=m*v,k=r.x,G=r.y,I=r.z;return l[0]=(1-(C+_))*k,l[1]=(y+U)*k,l[2]=(b-N)*k,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(S+_))*G,l[6]=(M+B)*G,l[7]=0,l[8]=(b+N)*I,l[9]=(M-B)*I,l[10]=(1-(S+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],ui.copy(this);const p=1/u,g=1/h,v=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,i.setFromRotationMatrix(ui),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=$i){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let y,b;if(d===$i)y=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===yc)y=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=$i){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(h-u),S=(i+e)*p,y=(r+l)*g;let b,C;if(d===$i)b=(h+u)*v,C=-2*v;else if(d===yc)b=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new st,ui=new $e,kS=new st(0,0,0),XS=new st(1,1,1),Oa=new st,Kl=new st,Zn=new st,o_=new $e,l_=new Do;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WS=0;const c_=new st,as=new Do,Yi=new $e,Ql=new st,So=new st,qS=new st,YS=new Do,u_=new st(1,0,0),f_=new st(0,1,0),h_=new st(0,0,1),d_={type:"added"},jS={type:"removed"},rs={type:"childadded",child:null},Zf={type:"childremoved",child:null};class Hn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new st,i=new ia,r=new Do,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new re}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(u_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,i){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(So,Ql,this.up):Yi.lookAt(Ql,So,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Yi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d_),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jS),Zf.child=e,this.dispatchEvent(Zf),Zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d_),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,YS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new st(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new st,ji=new st,Kf=new st,Zi=new st,ss=new st,os=new st,p_=new st,Qf=new st,Jf=new st,$f=new st,th=new Je,eh=new Je,nh=new Je;class di{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){fi.subVectors(l,i),ji.subVectors(r,i),Kf.subVectors(e,i);const h=fi.dot(fi),d=fi.dot(ji),m=fi.dot(Kf),p=ji.dot(ji),g=ji.dot(Kf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Zi.x),m.addScaledVector(h,Zi.y),m.addScaledVector(d,Zi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,r),nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(th,u.x),h.addScaledVector(eh,u.y),h.addScaledVector(nh,u.z),h}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),ji.subVectors(e,i),fi.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),fi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ss.subVectors(l,r),os.subVectors(u,r),Qf.subVectors(e,r);const m=ss.dot(Qf),p=os.dot(Qf);if(m<=0&&p<=0)return i.copy(r);Jf.subVectors(e,l);const g=ss.dot(Jf),v=os.dot(Jf);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ss,h);$f.subVectors(e,u);const y=ss.dot($f),b=os.dot($f);if(b>=0&&y<=b)return i.copy(u);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(os,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return p_.subVectors(u,l),d=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(p_,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function ih(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=US(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ih(h,u,e+1/3),this.g=ih(h,u,e),this.b=ih(h,u,e-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=p0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Te.fromWorkingColorSpace(Cn.copy(this),e),Math.round(ve(Cn.r*255,0,255))*65536+Math.round(ve(Cn.g*255,0,255))*256+Math.round(ve(Cn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ri){Te.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Hf(Pa.h,Jl.h,i),l=Hf(Pa.s,Jl.s,i),u=Hf(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ce;Ce.NAMES=p0;let ZS=0;class Lo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ds,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class m0 extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new st,$l=new we;let KS=0;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=e_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e_&&(e.usage=this.usage),e}}class g0 extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class _0 extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class bi extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let QS=0;const ai=new $e,ah=new Hn,ls=new st,Kn=new Uo,Mo=new Uo,_n=new st;class aa extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?_0:g0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new re().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Mo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,Mo.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Mo.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Mo.min),Kn.expandByPoint(Mo.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(e,p),_n.add(ls)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let z=0;z<r.count;z++)d[z]=new st,m[z]=new st;const p=new st,g=new st,v=new st,S=new we,y=new we,b=new we,C=new st,M=new st;function _(z,w,R){p.fromBufferAttribute(r,z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),S.fromBufferAttribute(u,z),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,R),g.sub(p),v.sub(p),y.sub(S),b.sub(S);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(H),d[z].add(C),d[w].add(C),d[R].add(C),m[z].add(M),m[w].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let z=0,w=B.length;z<w;++z){const R=B[z],H=R.start,nt=R.count;for(let at=H,ct=H+nt;at<ct;at+=3)_(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new st,U=new st,k=new st,G=new st;function I(z){k.fromBufferAttribute(l,z),G.copy(k);const w=d[z];N.copy(w),N.sub(k.multiplyScalar(k.dot(w))).normalize(),U.crossVectors(G,w);const H=U.dot(m[z])<0?-1:1;h.setXYZW(z,N.x,N.y,N.z,H)}for(let z=0,w=B.length;z<w;++z){const R=B[z],H=R.start,nt=R.count;for(let at=H,ct=H+nt;at<ct;at+=3)I(e.getX(at+0)),I(e.getX(at+1)),I(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,g=new st,v=new st;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)S[b++]=p[y++]}return new Ti(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],y=e(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m_=new $e,cr=new h0,tc=new Rc,g_=new st,ec=new st,nc=new st,ic=new st,rh=new st,ac=new st,__=new st,rc=new st;class ta extends Hn{constructor(e=new aa,i=new m0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ac.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(rh.fromBufferAttribute(v,e),h?ac.addScaledVector(rh,g):ac.addScaledVector(rh.sub(i),g))}i.add(ac)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),cr.copy(e.ray).recast(e.near),!(tc.containsPoint(cr.origin)===!1&&(cr.intersectSphere(tc,g_)===null||cr.origin.distanceToSquared(g_)>(e.far-e.near)**2))&&(m_.copy(u).invert(),cr.copy(e.ray).applyMatrix4(m_),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,k=N;U<k;U+=3){const G=d.getX(U),I=d.getX(U+1),z=d.getX(U+2);l=sc(this,_,e,r,p,g,v,G,I,z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const B=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=sc(this,h,e,r,p,g,v,B,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,k=N;U<k;U+=3){const G=U,I=U+1,z=U+2;l=sc(this,_,e,r,p,g,v,G,I,z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const B=M,N=M+1,U=M+2;l=sc(this,h,e,r,p,g,v,B,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function JS(o,e,i,r,l,u,h,d){let m;if(e.side===zn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ha,d),m===null)return null;rc.copy(d),rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(rc);return p<i.near||p>i.far?null:{distance:p,point:rc.clone(),object:o}}function sc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ec),o.getVertexPosition(m,nc),o.getVertexPosition(p,ic);const g=JS(o,e,i,r,ec,nc,ic,__);if(g){const v=new st;di.getBarycoord(__,ec,nc,ic,v),l&&(g.uv=di.getInterpolatedAttribute(l,d,m,p,v,new we)),u&&(g.uv1=di.getInterpolatedAttribute(u,d,m,p,v,new we)),h&&(g.normal=di.getInterpolatedAttribute(h,d,m,p,v,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new st,materialIndex:0};di.getNormal(ec,nc,ic,S.normal),g.face=S,g.barycoord=v}return g}class No extends aa{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(v,2));function b(C,M,_,B,N,U,k,G,I,z,w){const R=U/I,H=k/z,nt=U/2,at=k/2,ct=G/2,pt=I+1,O=z+1;let J=0,q=0;const yt=new st;for(let D=0;D<O;D++){const $=D*H-at;for(let xt=0;xt<pt;xt++){const Mt=xt*R-nt;yt[C]=Mt*B,yt[M]=$*N,yt[_]=ct,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[_]=G>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(xt/I),v.push(1-D/z),J+=1}}for(let D=0;D<z;D++)for(let $=0;$<I;$++){const xt=S+$+pt*D,Mt=S+$+pt*(D+1),Z=S+($+1)+pt*(D+1),mt=S+($+1)+pt*D;m.push(xt,Mt,mt),m.push(Mt,Z,mt),q+=6}d.addGroup(y,q,w),y+=q,S+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=xs(o[i]);for(const l in r)e[l]=r[l]}return e}function $S(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function v0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const tM={clone:xs,merge:Dn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=$S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class x0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=$i}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new st,v_=new we,x_=new we;class hi extends x0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,v_,x_),i.subVectors(x_,v_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ff*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class iM extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(cs,us,e,i);l.layers=this.layers,this.add(l);const u=new hi(cs,us,e,i);u.layers=this.layers,this.add(u);const h=new hi(cs,us,e,i);h.layers=this.layers,this.add(h);const d=new hi(cs,us,e,i);d.layers=this.layers,this.add(d);const m=new hi(cs,us,e,i);m.layers=this.layers,this.add(m);const p=new hi(cs,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class S0 extends Fn{constructor(e=[],i=gs,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aM extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new S0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ei}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new No(5,5,5),u=new Ga({name:"CubemapFromEquirect",uniforms:xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:za});u.uniforms.tEquirect.value=i;const h=new ta(l,u),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=Ei),new iM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class oc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rM={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class sM extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const oh=new st,oM=new st,lM=new re;class dr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=oh.subVectors(r,i).cross(oM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(oh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||lM.getNormalMatrix(e),l=this.coplanarPoint(oh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Rc,lc=new st;class M0{constructor(e=new dr,i=new dr,r=new dr,l=new dr,u=new dr,h=new dr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=$i){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],S=l[7],y=l[8],b=l[9],C=l[10],M=l[11],_=l[12],B=l[13],N=l[14],U=l[15];if(r[0].setComponents(m-u,S-p,M-y,U-_).normalize(),r[1].setComponents(m+u,S+p,M+y,U+_).normalize(),r[2].setComponents(m+h,S+g,M+b,U+B).normalize(),r[3].setComponents(m-h,S-g,M-b,U-B).normalize(),r[4].setComponents(m-d,S-v,M-C,U-N).normalize(),i===$i)r[5].setComponents(m+d,S+v,M+C,U+N).normalize();else if(i===yc)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends Lo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new st,bc=new st,S_=new $e,yo=new h0,cc=new Rc,lh=new st,M_=new st;class cM extends Hn{constructor(e=new aa,i=new y0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Tc.fromBufferAttribute(i,l-1),bc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Tc.distanceTo(bc);e.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(l),cc.radius+=u,e.ray.intersectsSphere(cc)===!1)return;S_.copy(l).invert(),yo.copy(e.ray).applyMatrix4(S_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const _=g.getX(C),B=g.getX(C+1),N=uc(this,e,yo,m,_,B,C);N&&i.push(N)}if(this.isLineLoop){const C=g.getX(b-1),M=g.getX(y),_=uc(this,e,yo,m,C,M,b-1);_&&i.push(_)}}else{const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const _=uc(this,e,yo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=uc(this,e,yo,m,b-1,y,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function uc(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(Tc.fromBufferAttribute(d,l),bc.fromBufferAttribute(d,u),i.distanceSqToSegment(Tc,bc,lh,M_)>r)return;lh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(lh);if(!(p<e.near||p>e.far))return{distance:p,point:M_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const y_=new st,E_=new st;class uM extends cM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)y_.fromBufferAttribute(i,l),E_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+y_.distanceTo(E_);e.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E0 extends Fn{constructor(e,i,r=xr,l,u,h,d=mi,m=mi,p,g=Ao){if(g!==Ao&&g!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cc extends aa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,S=i/m,y=[],b=[],C=[],M=[];for(let _=0;_<g;_++){const B=_*S-h;for(let N=0;N<p;N++){const U=N*v-u;b.push(U,-B,0),C.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const N=B+p*_,U=B+p*(_+1),k=B+1+p*(_+1),G=B+1+p*_;y.push(N,U,G),y.push(U,k,G)}this.setIndex(y),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(C,3)),this.setAttribute("uv",new bi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class fM extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class T0 extends x0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dM extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=T_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=T_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function T_(){return performance.now()}function b_(o,e,i,r){const l=mM(r);switch(i){case a0:return o*e;case s0:return o*e/l.components*l.byteLength;case cd:return o*e/l.components*l.byteLength;case o0:return o*e*2/l.components*l.byteLength;case ud:return o*e*2/l.components*l.byteLength;case r0:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case fd:return o*e*4/l.components*l.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Nh:return Math.max(o,16)*Math.max(e,8)/4;case Dh:case Lh:return Math.max(o,8)*Math.max(e,8)/2;case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case vc:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case l0:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mM(o){switch(o){case na:case e0:return{byteLength:1,components:1};case To:case n0:case Co:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case xr:case sd:case Ji:return{byteLength:4,components:1};case i0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function b0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function gM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<v.length;y++){const b=v[S],C=v[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,v[S]=C)}v.length=S+1;for(let y=0,b=v.length;y<b;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,my=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:SM,alphatest_fragment:MM,alphatest_pars_fragment:yM,aomap_fragment:EM,aomap_pars_fragment:TM,batching_pars_vertex:bM,batching_vertex:AM,begin_vertex:RM,beginnormal_vertex:CM,bsdfs:wM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:PM,color_fragment:BM,color_pars_fragment:IM,color_pars_vertex:zM,color_vertex:FM,common:HM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:VM,displacementmap_pars_vertex:kM,displacementmap_vertex:XM,emissivemap_fragment:WM,emissivemap_pars_fragment:qM,colorspace_fragment:YM,colorspace_pars_fragment:jM,envmap_fragment:ZM,envmap_common_pars_fragment:KM,envmap_pars_fragment:QM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:cy,envmap_vertex:$M,fog_vertex:ty,fog_pars_vertex:ey,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ay,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:oy,lights_pars_begin:ly,lights_toon_fragment:uy,lights_toon_pars_fragment:fy,lights_phong_fragment:hy,lights_phong_pars_fragment:dy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:gy,lights_fragment_maps:_y,lights_fragment_end:vy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:yy,map_fragment:Ey,map_pars_fragment:Ty,map_particle_fragment:by,map_particle_pars_fragment:Ay,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Cy,morphinstance_vertex:wy,morphcolor_vertex:Dy,morphnormal_vertex:Uy,morphtarget_pars_vertex:Ly,morphtarget_vertex:Ny,normal_fragment_begin:Oy,normal_fragment_maps:Py,normal_pars_fragment:By,normal_pars_vertex:Iy,normal_vertex:zy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:ky,opaque_fragment:Xy,packing:Wy,premultiplied_alpha_fragment:qy,project_vertex:Yy,dithering_fragment:jy,dithering_pars_fragment:Zy,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:$y,shadowmap_vertex:tE,shadowmask_pars_fragment:eE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:aE,skinnormal_vertex:rE,specularmap_fragment:sE,specularmap_pars_fragment:oE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:uE,transmission_pars_fragment:fE,uv_pars_fragment:hE,uv_pars_vertex:dE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:xE,cube_vert:SE,cube_frag:ME,depth_vert:yE,depth_frag:EE,distanceRGBA_vert:TE,distanceRGBA_frag:bE,equirect_vert:AE,equirect_frag:RE,linedashed_vert:CE,linedashed_frag:wE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:LE,meshlambert_frag:NE,meshmatcap_vert:OE,meshmatcap_frag:PE,meshnormal_vert:BE,meshnormal_frag:IE,meshphong_vert:zE,meshphong_frag:FE,meshphysical_vert:HE,meshphysical_frag:GE,meshtoon_vert:VE,meshtoon_frag:kE,points_vert:XE,points_frag:WE,shadow_vert:qE,shadow_frag:YE,sprite_vert:jE,sprite_frag:ZE},Dt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},yi={basic:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Dn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Dn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Dn([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Dn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Dn([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Dn([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Dn([Dt.common,Dt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Dn([Dt.lights,Dt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};yi.physical={uniforms:Dn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const fc={r:0,b:0,g:0},fr=new ia,KE=new $e;function QE(o,e,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,g,v=null,S=0,y=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function C(N){let U=!1;const k=b(N);k===null?_(d,m):k&&k.isColor&&(_(k,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const k=b(U);k&&(k.isCubeTexture||k.mapping===Ac)?(g===void 0&&(g=new ta(new No(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:xs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fr.copy(U.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(fr)),g.material.toneMapped=Te.getTransfer(k.colorSpace)!==Pe,(v!==k||S!==k.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=k,S=k.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new ta(new Cc(2,2),new Ga({name:"BackgroundMaterial",uniforms:xs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(k.colorSpace)!==Pe,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||S!==k.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=k,S=k.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(fc,v0(o)),r.buffers.color.setClear(fc.r,fc.g,fc.b,U,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:M,dispose:B}}function JE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(R,H,nt,at,ct){let pt=!1;const O=v(at,nt,H);u!==O&&(u=O,p(u.object)),pt=y(R,at,nt,ct),pt&&b(R,at,nt,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,U(R,H,nt,at),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,H,nt){const at=nt.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let pt=ct[H.id];pt===void 0&&(pt={},ct[H.id]=pt);let O=pt[at];return O===void 0&&(O=S(m()),pt[at]=O),O}function S(R){const H=[],nt=[],at=[];for(let ct=0;ct<i;ct++)H[ct]=0,nt[ct]=0,at[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:at,object:R,attributes:{},index:null}}function y(R,H,nt,at){const ct=u.attributes,pt=H.attributes;let O=0;const J=nt.getAttributes();for(const q in J)if(J[q].location>=0){const D=ct[q];let $=pt[q];if($===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),D===void 0||D.attribute!==$||$&&D.data!==$.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function b(R,H,nt,at){const ct={},pt=H.attributes;let O=0;const J=nt.getAttributes();for(const q in J)if(J[q].location>=0){let D=pt[q];D===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(D=R.instanceColor));const $={};$.attribute=D,D&&D.data&&($.data=D.data),ct[q]=$,O++}u.attributes=ct,u.attributesNum=O,u.index=at}function C(){const R=u.newAttributes;for(let H=0,nt=R.length;H<nt;H++)R[H]=0}function M(R){_(R,0)}function _(R,H){const nt=u.newAttributes,at=u.enabledAttributes,ct=u.attributeDivisors;nt[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),ct[R]!==H&&(o.vertexAttribDivisor(R,H),ct[R]=H)}function B(){const R=u.newAttributes,H=u.enabledAttributes;for(let nt=0,at=H.length;nt<at;nt++)H[nt]!==R[nt]&&(o.disableVertexAttribArray(nt),H[nt]=0)}function N(R,H,nt,at,ct,pt,O){O===!0?o.vertexAttribIPointer(R,H,nt,ct,pt):o.vertexAttribPointer(R,H,nt,at,ct,pt)}function U(R,H,nt,at){C();const ct=at.attributes,pt=nt.getAttributes(),O=H.defaultAttributeValues;for(const J in pt){const q=pt[J];if(q.location>=0){let yt=ct[J];if(yt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const D=yt.normalized,$=yt.itemSize,xt=e.get(yt);if(xt===void 0)continue;const Mt=xt.buffer,Z=xt.type,mt=xt.bytesPerElement,St=Z===o.INT||Z===o.UNSIGNED_INT||yt.gpuType===sd;if(yt.isInterleavedBufferAttribute){const At=yt.data,Ut=At.stride,se=yt.offset;if(At.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)_(q.location+Zt,At.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)M(q.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Zt=0;Zt<q.locationSize;Zt++)N(q.location+Zt,$/q.locationSize,Z,D,Ut*mt,(se+$/q.locationSize*Zt)*mt,St)}else{if(yt.isInstancedBufferAttribute){for(let At=0;At<q.locationSize;At++)_(q.location+At,yt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let At=0;At<q.locationSize;At++)M(q.location+At);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let At=0;At<q.locationSize;At++)N(q.location+At,$/q.locationSize,Z,D,$*mt,$/q.locationSize*At*mt,St)}}else if(O!==void 0){const D=O[J];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(q.location,D);break;case 3:o.vertexAttrib3fv(q.location,D);break;case 4:o.vertexAttrib4fv(q.location,D);break;default:o.vertexAttrib1fv(q.location,D)}}}}B()}function k(){z();for(const R in r){const H=r[R];for(const nt in H){const at=H[nt];for(const ct in at)g(at[ct].object),delete at[ct];delete H[nt]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const nt in H){const at=H[nt];for(const ct in at)g(at[ct].object),delete at[ct];delete H[nt]}delete r[R.id]}function I(R){for(const H in r){const nt=r[H];if(nt[R.id]===void 0)continue;const at=nt[R.id];for(const ct in at)g(at[ct].object),delete at[ct];delete nt[R.id]}}function z(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function $E(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];i.update(y,r,1)}function m(p,g,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let b=0;for(let C=0;C<v;C++)b+=g[C]*S[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function tT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==pi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const z=I===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==na&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ji&&!z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:k,maxSamples:G}}function eT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new dr,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const b=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const B=u?0:r,N=B*4;let U=_.clippingState||null;m.value=U,U=g(b,S,N,y);for(let k=0;k!==N;++k)U[k]=i[k];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,y,b){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const _=y+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=y;N!==C;++N,U+=4)h.copy(v[N]).applyMatrix4(B,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function nT(o){let e=new WeakMap;function i(h,d){return d===Ah?h.mapping=gs:d===Rh&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ah||d===Rh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new aM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const hs=4,A_=[.125,.215,.35,.446,.526,.582],gr=20,ch=new T0,R_=new Ce;let uh=null,fh=0,hh=0,dh=!1;const pr=(1+Math.sqrt(5))/2,fs=1/pr,C_=[new st(-pr,fs,0),new st(pr,fs,0),new st(-fs,0,pr),new st(fs,0,pr),new st(0,pr,-fs),new st(0,pr,fs),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],iT=new st;class w_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=iT}=u;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,fh,hh),this._renderer.xr.enabled=dh,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Co,format:pi,colorSpace:vs,depthBuffer:!1},l=D_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(u)),this._blurMaterial=rT(u,e,i)}return l}_compileMaterial(e){const i=new ta(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l,u){const m=new hi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(R_),v.toneMapping=Fa,v.autoClear=!1;const b=new m0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),C=new ta(new No,b);let M=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,M=!0):(b.color.copy(R_),M=!0);for(let B=0;B<6;B++){const N=B%3;N===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[B],u.y,u.z)):N===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[B]));const U=this._cubeSize;hc(l,N*U,B>2?U:0,U,U),v.setRenderTarget(l),M&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===gs||e.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ta(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;hc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=C_[(l-u-1)%C_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ta(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*gr-1),C=u/b,M=isFinite(u)?1+Math.floor(g*C):gr;M>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${gr}`);const _=[];let B=0;for(let I=0;I<gr;++I){const z=I/C,w=Math.exp(-z*z/2);_.push(w),I===0?B+=w:I<M&&(B+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-r;const U=this._sizeLods[l],k=3*U*(l>N-hs?l-N+hs:0),G=4*(this._cubeSize-U);hc(i,k,G,3*U,2*U),m.setRenderTarget(i),m.render(v,ch)}}function aT(o){const e=[],i=[],r=[];let l=o;const u=o-hs+1+A_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=A_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,C=3,M=2,_=1,B=new Float32Array(C*b*y),N=new Float32Array(M*b*y),U=new Float32Array(_*b*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,z=G>2?0:-1,w=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];B.set(w,C*b*G),N.set(S,M*b*G);const R=[G,G,G,G,G,G];U.set(R,_*b*G)}const k=new aa;k.setAttribute("position",new Ti(B,C)),k.setAttribute("uv",new Ti(N,M)),k.setAttribute("faceIndex",new Ti(U,_)),e.push(k),l>hs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function D_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function rT(o,e,i){const r=new Float32Array(gr),l=new st(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function U_(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function L_(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ah||m===Rh,g=m===gs||m===_s;if(p||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new w_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new w_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function oT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function lT(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(v){const S=[],y=v.index,b=v.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let N=0,U=B.length;N<U;N+=3){const k=B[N+0],G=B[N+1],I=B[N+2];S.push(k,G,G,I,I,k)}}else if(b!==void 0){const B=b.array;C=b.version;for(let N=0,U=B.length/3-1;N<U;N+=3){const k=N+0,G=N+1,I=N+2;S.push(k,G,G,I,I,k)}}else return;const M=new(u0(S)?_0:g0)(S,1);M.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,M)}function g(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function cT(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*h),i.update(y,r,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,u,S*h,b),i.update(y,r,b))}function g(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(S,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,C,0,b);let _=0;for(let B=0;B<b;B++)_+=y[B]*C[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function uT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function fT(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let w=function(){I.dispose(),r.delete(d),d.removeEventListener("dispose",w)};S!==void 0&&S.texture.dispose();const y=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let N=0;y===!0&&(N=1),b===!0&&(N=2),C===!0&&(N=3);let U=d.attributes.position.count*N,k=1;U>e.maxTextureSize&&(k=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const G=new Float32Array(U*k*4*v),I=new f0(G,U,k,v);I.type=Ji,I.needsUpdate=!0;const z=N*4;for(let R=0;R<v;R++){const H=M[R],nt=_[R],at=B[R],ct=U*k*4*R;for(let pt=0;pt<H.count;pt++){const O=pt*z;y===!0&&(l.fromBufferAttribute(H,pt),G[ct+O+0]=l.x,G[ct+O+1]=l.y,G[ct+O+2]=l.z,G[ct+O+3]=0),b===!0&&(l.fromBufferAttribute(nt,pt),G[ct+O+4]=l.x,G[ct+O+5]=l.y,G[ct+O+6]=l.z,G[ct+O+7]=0),C===!0&&(l.fromBufferAttribute(at,pt),G[ct+O+8]=l.x,G[ct+O+9]=l.y,G[ct+O+10]=l.z,G[ct+O+11]=at.itemSize===4?l.w:1)}}S={count:v,texture:I,size:new we(U,k)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let C=0;C<p.length;C++)y+=p[C];const b=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function hT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const A0=new Fn,N_=new E0(1,1),R0=new f0,C0=new GS,w0=new S0,O_=[],P_=[],B_=new Float32Array(16),I_=new Float32Array(9),z_=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=O_[l];if(u===void 0&&(u=new Float32Array(l),O_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function wc(o,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function _T(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;z_.set(r),o.uniformMatrix2fv(this.addr,!1,z_),fn(i,r)}}function vT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;I_.set(r),o.uniformMatrix3fv(this.addr,!1,I_),fn(i,r)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;B_.set(r),o.uniformMatrix4fv(this.addr,!1,B_),fn(i,r)}}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function TT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function CT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(N_.compareFunction=c0,u=N_):u=A0,i.setTexture2D(e||u,l)}function wT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||C0,l)}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||w0,l)}function UT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||R0,l)}function LT(o){switch(o){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return yT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return bT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}function NT(o,e){o.uniform1fv(this.addr,e)}function OT(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function PT(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function BT(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function IT(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function zT(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function FT(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HT(o,e){o.uniform1iv(this.addr,e)}function GT(o,e){o.uniform2iv(this.addr,e)}function VT(o,e){o.uniform3iv(this.addr,e)}function kT(o,e){o.uniform4iv(this.addr,e)}function XT(o,e){o.uniform1uiv(this.addr,e)}function WT(o,e){o.uniform2uiv(this.addr,e)}function qT(o,e){o.uniform3uiv(this.addr,e)}function YT(o,e){o.uniform4uiv(this.addr,e)}function jT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||A0,u[h])}function ZT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||C0,u[h])}function KT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||w0,u[h])}function QT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||R0,u[h])}function JT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return BT;case 35674:return IT;case 35675:return zT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=LT(i.type)}}class tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function F_(o,e){o.seq.push(e),o.map[e.id]=e}function nb(o,e,i){const r=o.name,l=r.length;for(ph.lastIndex=0;;){const u=ph.exec(r),h=ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){F_(i,p===void 0?new $T(d,o,e):new tb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new eb(d),F_(i,v)),i=v}}}class Sc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);nb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function H_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const ib=37297;let ab=0;function rb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const G_=new re;function sb(o){Te._getMatrix(G_,Te.workingColorSpace,o);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Mc:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function V_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+rb(o.getShaderSource(e),h)}else return l}function ob(o,e){const i=sb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function lb(o,e){let i;switch(e){case hS:i="Linear";break;case dS:i="Reinhard";break;case pS:i="Cineon";break;case mS:i="ACESFilmic";break;case _S:i="AgX";break;case vS:i="Neutral";break;case gS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new st;function cb(){Te.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ub(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function fb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function hb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Eo(o){return o!==""}function k_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const db=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(o){return o.replace(db,mb)}const pb=new Map;function mb(o,e){let i=oe[e];if(i===void 0){const r=pb.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return id(i)}const gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(o){return o.replace(gb,_b)}function _b(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function xb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Mb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function yb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Eb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=vb(i),p=xb(i),g=Sb(i),v=Mb(i),S=yb(i),y=ub(i),b=fb(u),C=l.createProgram();let M,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Eo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),_=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?oe.tonemapping_pars_fragment:"",i.toneMapping!==Fa?lb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,ob("linearToOutputTexel",i.outputColorSpace),cb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Eo).join(`
`)),h=id(h),h=k_(h,i),h=X_(h,i),d=id(d),d=k_(d,i),d=X_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+M+h,U=B+_+d,k=H_(l,l.VERTEX_SHADER,N),G=H_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,k),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(H){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(k).trim(),ct=l.getShaderInfoLog(G).trim();let pt=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,G);else{const J=V_(l,k,"vertex"),q=V_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+nt+`
`+J+`
`+q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(at===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:pt,programLog:nt,vertexShader:{log:at,prefix:M},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(k),l.deleteShader(G),z=new Sc(l,C),w=hb(l,C)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,ib)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=G,this}let Tb=0;class bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Ab(e),i.set(e,r)),r}}class Ab{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function Rb(o,e,i,r,l,u,h){const d=new d0,m=new bb,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,H,nt,at){const ct=nt.fog,pt=at.geometry,O=w.isMeshStandardMaterial?nt.environment:null,J=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),q=J&&J.mapping===Ac?J.image.height:null,yt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const D=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,$=D!==void 0?D.length:0;let xt=0;pt.morphAttributes.position!==void 0&&(xt=1),pt.morphAttributes.normal!==void 0&&(xt=2),pt.morphAttributes.color!==void 0&&(xt=3);let Mt,Z,mt,St;if(yt){const Me=yi[yt];Mt=Me.vertexShader,Z=Me.fragmentShader}else Mt=w.vertexShader,Z=w.fragmentShader,m.update(w),mt=m.getVertexShaderID(w),St=m.getFragmentShaderID(w);const At=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),se=at.isInstancedMesh===!0,Zt=at.isBatchedMesh===!0,Fe=!!w.map,Be=!!w.matcap,ue=!!J,F=!!w.aoMap,Un=!!w.lightMap,me=!!w.bumpMap,ne=!!w.normalMap,Xt=!!w.displacementMap,De=!!w.emissiveMap,Gt=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,gt=w.dispersion>0,Et=w.iridescence>0,ft=w.sheen>0,Ot=w.transmission>0,Rt=T&&!!w.anisotropyMap,Ht=tt&&!!w.clearcoatMap,Jt=tt&&!!w.clearcoatNormalMap,bt=tt&&!!w.clearcoatRoughnessMap,zt=Et&&!!w.iridescenceMap,Yt=Et&&!!w.iridescenceThicknessMap,Kt=ft&&!!w.sheenColorMap,Pt=ft&&!!w.sheenRoughnessMap,le=!!w.specularMap,ee=!!w.specularColorMap,Ue=!!w.specularIntensityMap,X=Ot&&!!w.transmissionMap,Lt=Ot&&!!w.thicknessMap,lt=!!w.gradientMap,_t=!!w.alphaMap,Bt=w.alphaTest>0,Nt=!!w.alphaHash,ie=!!w.extensions;let He=Fa;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(He=o.toneMapping);const tn={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Z,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&at._colorsTexture!==null,instancing:se,instancingColor:se&&at.instanceColor!==null,instancingMorph:se&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:vs,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:Be,envMap:ue,envMapMode:ue&&J.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Un,bumpMap:me,normalMap:ne,displacementMap:S&&Xt,emissiveMap:De,normalMapObjectSpace:ne&&w.normalMapType===ES,normalMapTangentSpace:ne&&w.normalMapType===yS,metalnessMap:Gt,roughnessMap:L,anisotropy:T,anisotropyMap:Rt,clearcoat:tt,clearcoatMap:Ht,clearcoatNormalMap:Jt,clearcoatRoughnessMap:bt,dispersion:gt,iridescence:Et,iridescenceMap:zt,iridescenceThicknessMap:Yt,sheen:ft,sheenColorMap:Kt,sheenRoughnessMap:Pt,specularMap:le,specularColorMap:ee,specularIntensityMap:Ue,transmission:Ot,transmissionMap:X,thicknessMap:Lt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Bt,alphaHash:Nt,combine:w.combine,mapUv:Fe&&C(w.map.channel),aoMapUv:F&&C(w.aoMap.channel),lightMapUv:Un&&C(w.lightMap.channel),bumpMapUv:me&&C(w.bumpMap.channel),normalMapUv:ne&&C(w.normalMap.channel),displacementMapUv:Xt&&C(w.displacementMap.channel),emissiveMapUv:De&&C(w.emissiveMap.channel),metalnessMapUv:Gt&&C(w.metalnessMap.channel),roughnessMapUv:L&&C(w.roughnessMap.channel),anisotropyMapUv:Rt&&C(w.anisotropyMap.channel),clearcoatMapUv:Ht&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&C(w.sheenRoughnessMap.channel),specularMapUv:le&&C(w.specularMap.channel),specularColorMapUv:ee&&C(w.specularColorMap.channel),specularIntensityMapUv:Ue&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Lt&&C(w.thicknessMap.channel),alphaMapUv:_t&&C(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(ne||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!pt.attributes.uv&&(Fe||_t),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:at.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qi,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&w.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const R=b[w.type];let H;if(R){const nt=yi[R];H=tM.clone(nt.uniforms)}else H=w.uniforms;return H}function k(w,R){let H;for(let nt=0,at=g.length;nt<at;nt++){const ct=g[nt];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new Eb(o,R,w,u),g.push(H)),H}function G(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:k,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:z}}function Cb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function wb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function j_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,b,C,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:b,renderOrder:v.renderOrder,z:C,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,S,y,b,C,M){const _=h(v,S,y,b,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,b,C,M){const _=h(v,S,y,b,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||wb),r.length>1&&r.sort(S||Y_),l.length>1&&l.sort(S||Y_)}function g(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Db(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new j_,o.set(r,[h])):l>=u.length?(h=new j_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Ub(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Ce};break;case"SpotLight":i={position:new st,direction:new st,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function Lb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Nb=0;function Ob(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Pb(o){const e=new Ub,i=Lb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new $e,h=new $e;function d(p){let g=0,v=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,C=0,M=0,_=0,B=0,N=0,U=0,k=0,G=0,I=0;p.sort(Ob);for(let w=0,R=p.length;w<R;w++){const H=p[w],nt=H.color,at=H.intensity,ct=H.distance,pt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=nt.r*at,v+=nt.g*at,S+=nt.b*at;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],at);I++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,q=i.get(H);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=pt,r.directionalShadowMatrix[y]=H.shadow.matrix,B++}r.directional[y]=O,y++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(nt).multiplyScalar(at),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[C]=O;const J=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,J.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[C]=J.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=pt,U++}C++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(nt).multiplyScalar(at),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=O,M++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const J=H.shadow,q=i.get(H);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=pt,r.pointShadowMatrix[b]=H.shadow.matrix,N++}r.point[b]=O,b++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(at),O.groundColor.copy(H.groundColor).multiplyScalar(at),r.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const z=r.hash;(z.directionalLength!==y||z.pointLength!==b||z.spotLength!==C||z.rectAreaLength!==M||z.hemiLength!==_||z.numDirectionalShadows!==B||z.numPointShadows!==N||z.numSpotShadows!==U||z.numSpotMaps!==k||z.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+k-G,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,z.directionalLength=y,z.pointLength=b,z.spotLength=C,z.rectAreaLength=M,z.hemiLength=_,z.numDirectionalShadows=B,z.numPointShadows=N,z.numSpotShadows=U,z.numSpotMaps=k,z.numLightProbes=I,r.version=Nb++)}function m(p,g){let v=0,S=0,y=0,b=0,C=0;const M=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function Z_(o){const e=new Pb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Bb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Z_(o),e.set(l,[d])):u>=h.length?(d=new Z_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fb(o,e,i){let r=new M0;const l=new we,u=new we,h=new Je,d=new fM({depthPacking:MS}),m=new hM,p={},g=i.maxTextureSize,v={[Ha]:zn,[zn]:Ha,[Qi]:Qi},S=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ib,fragmentShader:zb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new aa;b.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ta(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let _=this.type;this.render=function(G,I,z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(za),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const at=_!==Ki&&this.type===Ki,ct=_===Ki&&this.type!==Ki;for(let pt=0,O=G.length;pt<O;pt++){const J=G[pt],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,q.mapSize.y=u.y)),q.map===null||at===!0||ct===!0){const $=this.type!==Ki?{minFilter:mi,magFilter:mi}:{};q.map!==null&&q.map.dispose(),q.map=new Sr(l.x,l.y,$),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const D=q.getViewportCount();for(let $=0;$<D;$++){const xt=q.getViewport($);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),nt.viewport(h),q.updateMatrices(J,$),r=q.getFrustum(),U(I,z,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Ki&&B(q,z),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,H)};function B(G,I){const z=e.update(C);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,z,S,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,z,y,C,null)}function N(G,I,z,w){let R=null;const H=z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)R=H;else if(R=z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const nt=R.uuid,at=I.uuid;let ct=p[nt];ct===void 0&&(ct={},p[nt]=ct);let pt=ct[at];pt===void 0&&(pt=R.clone(),ct[at]=pt,I.addEventListener("dispose",k)),R=pt}if(R.visible=I.visible,R.wireframe=I.wireframe,w===Ki?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const nt=o.properties.get(R);nt.light=z}return R}function U(G,I,z,w,R){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Ki)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,G.matrixWorld);const at=e.update(G),ct=G.material;if(Array.isArray(ct)){const pt=at.groups;for(let O=0,J=pt.length;O<J;O++){const q=pt[O],yt=ct[q.materialIndex];if(yt&&yt.visible){const D=N(G,yt,w,R);G.onBeforeShadow(o,G,I,z,at,D,q),o.renderBufferDirect(z,null,at,D,G,q),G.onAfterShadow(o,G,I,z,at,D,q)}}}else if(ct.visible){const pt=N(G,ct,w,R);G.onBeforeShadow(o,G,I,z,at,pt,null),o.renderBufferDirect(z,null,at,pt,G,null),G.onAfterShadow(o,G,I,z,at,pt,null)}}const nt=G.children;for(let at=0,ct=nt.length;at<ct;at++)U(nt[at],I,z,w,R)}function k(G){G.target.removeEventListener("dispose",k);for(const z in p){const w=p[z],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const Hb={[xh]:Sh,[Mh]:Th,[yh]:bh,[ms]:Eh,[Sh]:xh,[Th]:Mh,[bh]:yh,[Eh]:ms};function Gb(o,e){function i(){let X=!1;const Lt=new Je;let lt=null;const _t=new Je(0,0,0,0);return{setMask:function(Bt){lt!==Bt&&!X&&(o.colorMask(Bt,Bt,Bt,Bt),lt=Bt)},setLocked:function(Bt){X=Bt},setClear:function(Bt,Nt,ie,He,tn){tn===!0&&(Bt*=He,Nt*=He,ie*=He),Lt.set(Bt,Nt,ie,He),_t.equals(Lt)===!1&&(o.clearColor(Bt,Nt,ie,He),_t.copy(Lt))},reset:function(){X=!1,lt=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,Lt=!1,lt=null,_t=null,Bt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ie=e.get("EXT_clip_control");Nt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const He=Bt;Bt=null,this.setClear(He)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?At(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(Nt){lt!==Nt&&!X&&(o.depthMask(Nt),lt=Nt)},setFunc:function(Nt){if(Lt&&(Nt=Hb[Nt]),_t!==Nt){switch(Nt){case xh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Eh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Nt}},setLocked:function(Nt){X=Nt},setClear:function(Nt){Bt!==Nt&&(Lt&&(Nt=1-Nt),o.clearDepth(Nt),Bt=Nt)},reset:function(){X=!1,lt=null,_t=null,Bt=null,Lt=!1}}}function l(){let X=!1,Lt=null,lt=null,_t=null,Bt=null,Nt=null,ie=null,He=null,tn=null;return{setTest:function(Me){X||(Me?At(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!X&&(o.stencilMask(Me),Lt=Me)},setFunc:function(Me,Gn,hn){(lt!==Me||_t!==Gn||Bt!==hn)&&(o.stencilFunc(Me,Gn,hn),lt=Me,_t=Gn,Bt=hn)},setOp:function(Me,Gn,hn){(Nt!==Me||ie!==Gn||He!==hn)&&(o.stencilOp(Me,Gn,hn),Nt=Me,ie=Gn,He=hn)},setLocked:function(Me){X=Me},setClear:function(Me){tn!==Me&&(o.clearStencil(Me),tn=Me)},reset:function(){X=!1,Lt=null,lt=null,_t=null,Bt=null,Nt=null,ie=null,He=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,B=null,N=null,U=null,k=null,G=null,I=new Ce(0,0,0),z=0,w=!1,R=null,H=null,nt=null,at=null,ct=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,J=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=J>=2);let yt=null,D={};const $=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),Mt=new Je().fromArray($),Z=new Je().fromArray(xt);function mt(X,Lt,lt,_t){const Bt=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(X,Nt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<lt;ie++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Bt):o.texImage2D(Lt+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Bt);return Nt}const St={};St[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(ms),me(!1),ne(Kg),At(o.CULL_FACE),F(za);function At(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function Ut(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function se(X,Lt){return v[X]!==Lt?(o.bindFramebuffer(X,Lt),v[X]=Lt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Zt(X,Lt){let lt=y,_t=!1;if(X){lt=S.get(Lt),lt===void 0&&(lt=[],S.set(Lt,lt));const Bt=X.textures;if(lt.length!==Bt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ie=Bt.length;Nt<ie;Nt++)lt[Nt]=o.COLOR_ATTACHMENT0+Nt;lt.length=Bt.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Fe(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Be={[mr]:o.FUNC_ADD,[Yx]:o.FUNC_SUBTRACT,[jx]:o.FUNC_REVERSE_SUBTRACT};Be[Zx]=o.MIN,Be[Kx]=o.MAX;const ue={[Qx]:o.ZERO,[Jx]:o.ONE,[$x]:o.SRC_COLOR,[_h]:o.SRC_ALPHA,[rS]:o.SRC_ALPHA_SATURATE,[iS]:o.DST_COLOR,[eS]:o.DST_ALPHA,[tS]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[aS]:o.ONE_MINUS_DST_COLOR,[nS]:o.ONE_MINUS_DST_ALPHA,[sS]:o.CONSTANT_COLOR,[oS]:o.ONE_MINUS_CONSTANT_COLOR,[lS]:o.CONSTANT_ALPHA,[cS]:o.ONE_MINUS_CONSTANT_ALPHA};function F(X,Lt,lt,_t,Bt,Nt,ie,He,tn,Me){if(X===za){C===!0&&(Ut(o.BLEND),C=!1);return}if(C===!1&&(At(o.BLEND),C=!0),X!==qx){if(X!==M||Me!==w){if((_!==mr||U!==mr)&&(o.blendEquation(o.FUNC_ADD),_=mr,U=mr),Me)switch(X){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qg:o.blendFunc(o.ONE,o.ONE);break;case Jg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $g:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Jg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $g:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,N=null,k=null,G=null,I.set(0,0,0),z=0,M=X,w=Me}return}Bt=Bt||Lt,Nt=Nt||lt,ie=ie||_t,(Lt!==_||Bt!==U)&&(o.blendEquationSeparate(Be[Lt],Be[Bt]),_=Lt,U=Bt),(lt!==B||_t!==N||Nt!==k||ie!==G)&&(o.blendFuncSeparate(ue[lt],ue[_t],ue[Nt],ue[ie]),B=lt,N=_t,k=Nt,G=ie),(He.equals(I)===!1||tn!==z)&&(o.blendColor(He.r,He.g,He.b,tn),I.copy(He),z=tn),M=X,w=!1}function Un(X,Lt){X.side===Qi?Ut(o.CULL_FACE):At(o.CULL_FACE);let lt=X.side===zn;Lt&&(lt=!lt),me(lt),X.blending===ds&&X.transparent===!1?F(za):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function me(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function ne(X){X!==kx?(At(o.CULL_FACE),X!==H&&(X===Kg?o.cullFace(o.BACK):X===Xx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),H=X}function Xt(X){X!==nt&&(O&&o.lineWidth(X),nt=X)}function De(X,Lt,lt){X?(At(o.POLYGON_OFFSET_FILL),(at!==Lt||ct!==lt)&&(o.polygonOffset(Lt,lt),at=Lt,ct=lt)):Ut(o.POLYGON_OFFSET_FILL)}function Gt(X){X?At(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function L(X){X===void 0&&(X=o.TEXTURE0+pt-1),yt!==X&&(o.activeTexture(X),yt=X)}function T(X,Lt,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+pt-1:lt=yt);let _t=D[lt];_t===void 0&&(_t={type:void 0,texture:void 0},D[lt]=_t),(_t.type!==X||_t.texture!==Lt)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(X,Lt||St[X]),_t.type=X,_t.texture=Lt)}function tt(){const X=D[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function gt(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(X){Mt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function Pt(X){Z.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function le(X,Lt){let lt=p.get(Lt);lt===void 0&&(lt=new WeakMap,p.set(Lt,lt));let _t=lt.get(X);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,X.name),lt.set(X,_t))}function ee(X,Lt){const _t=p.get(Lt).get(X);m.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,X.__bindingPointIndex),m.set(Lt,_t))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},yt=null,D={},v={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,B=null,N=null,U=null,k=null,G=null,I=new Ce(0,0,0),z=0,w=!1,R=null,H=null,nt=null,at=null,ct=null,Mt.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ut,bindFramebuffer:se,drawBuffers:Zt,useProgram:Fe,setBlending:F,setMaterial:Un,setFlipSided:me,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:Gt,activeTexture:L,bindTexture:T,unbindTexture:tt,compressedTexImage2D:gt,compressedTexImage3D:Et,texImage2D:zt,texImage3D:Yt,updateUBOMapping:le,uniformBlockBinding:ee,texStorage2D:Jt,texStorage3D:bt,texSubImage2D:ft,texSubImage3D:Ot,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ht,scissor:Kt,viewport:Pt,reset:Ue}}function Vb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return y?new OffscreenCanvas(L,T):Ec("canvas")}function C(L,T,tt){let gt=1;const Et=Gt(L);if((Et.width>tt||Et.height>tt)&&(gt=tt/Math.max(Et.width,Et.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(gt*Et.width),Ot=Math.floor(gt*Et.height);v===void 0&&(v=b(ft,Ot));const Rt=T?b(ft,Ot):v;return Rt.width=ft,Rt.height=Ot,Rt.getContext("2d").drawImage(L,0,0,ft,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ft+"x"+Ot+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,T,tt,gt,Et=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=T;if(T===o.RED&&(tt===o.FLOAT&&(ft=o.R32F),tt===o.HALF_FLOAT&&(ft=o.R16F),tt===o.UNSIGNED_BYTE&&(ft=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.R8UI),tt===o.UNSIGNED_SHORT&&(ft=o.R16UI),tt===o.UNSIGNED_INT&&(ft=o.R32UI),tt===o.BYTE&&(ft=o.R8I),tt===o.SHORT&&(ft=o.R16I),tt===o.INT&&(ft=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ft=o.RG32F),tt===o.HALF_FLOAT&&(ft=o.RG16F),tt===o.UNSIGNED_BYTE&&(ft=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),tt===o.UNSIGNED_INT&&(ft=o.RG32UI),tt===o.BYTE&&(ft=o.RG8I),tt===o.SHORT&&(ft=o.RG16I),tt===o.INT&&(ft=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),tt===o.UNSIGNED_INT&&(ft=o.RGB32UI),tt===o.BYTE&&(ft=o.RGB8I),tt===o.SHORT&&(ft=o.RGB16I),tt===o.INT&&(ft=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),tt===o.BYTE&&(ft=o.RGBA8I),tt===o.SHORT&&(ft=o.RGBA16I),tt===o.INT&&(ft=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),T===o.RGBA){const Ot=Et?Mc:Te.getTransfer(gt);tt===o.FLOAT&&(ft=o.RGBA32F),tt===o.HALF_FLOAT&&(ft=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ft=Ot===Pe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function U(L,T){let tt;return L?T===null||T===xr||T===bo?tt=o.DEPTH24_STENCIL8:T===Ji?tt=o.DEPTH32F_STENCIL8:T===To&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xr||T===bo?tt=o.DEPTH_COMPONENT24:T===Ji?tt=o.DEPTH_COMPONENT32F:T===To&&(tt=o.DEPTH_COMPONENT16),tt}function k(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function G(L){const T=L.target;T.removeEventListener("dispose",G),z(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),R(T)}function z(L){const T=r.get(L);if(T.__webglInit===void 0)return;const tt=L.source,gt=S.get(tt);if(gt){const Et=gt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(L),Object.keys(gt).length===0&&S.delete(tt)}r.remove(L)}function w(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const tt=L.source,gt=S.get(tt);delete gt[T.__cacheKey],h.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let Et=0;Et<T.__webglFramebuffer[gt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[gt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[gt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=L.textures;for(let gt=0,Et=tt.length;gt<Et;gt++){const ft=r.get(tt[gt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(tt[gt])}r.remove(L)}let H=0;function nt(){H=0}function at(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function ct(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function pt(L,T){const tt=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const gt=L.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(tt,L,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function O(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Z(tt,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function J(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Z(tt,L,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function q(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){mt(tt,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const yt={[Ch]:o.REPEAT,[_r]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},D={[mi]:o.NEAREST,[xS]:o.NEAREST_MIPMAP_NEAREST,[Xl]:o.NEAREST_MIPMAP_LINEAR,[Ei]:o.LINEAR,[zf]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},$={[TS]:o.NEVER,[DS]:o.ALWAYS,[bS]:o.LESS,[c0]:o.LEQUAL,[AS]:o.EQUAL,[wS]:o.GEQUAL,[RS]:o.GREATER,[CS]:o.NOTEQUAL};function xt(L,T){if(T.type===Ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===zf||T.magFilter===Xl||T.magFilter===vr||T.minFilter===Ei||T.minFilter===zf||T.minFilter===Xl||T.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,D[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==Xl&&T.minFilter!==vr||T.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(L,T){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",G));const gt=T.source;let Et=S.get(gt);Et===void 0&&(Et={},S.set(gt,Et));const ft=ct(T);if(ft!==L.__cacheKey){Et[ft]===void 0&&(Et[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Et[ft].usedTimes++;const Ot=Et[L.__cacheKey];Ot!==void 0&&(Et[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(T)),L.__cacheKey=ft,L.__webglTexture=Et[ft].texture}return tt}function Z(L,T,tt){let gt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=o.TEXTURE_3D);const Et=Mt(L,T),ft=T.source;i.bindTexture(gt,L.__webglTexture,o.TEXTURE0+tt);const Ot=r.get(ft);if(ft.version!==Ot.__version||Et===!0){i.activeTexture(o.TEXTURE0+tt);const Rt=Te.getPrimaries(Te.workingColorSpace),Ht=T.colorSpace===Ia?null:Te.getPrimaries(T.colorSpace),Jt=T.colorSpace===Ia||Rt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let bt=C(T.image,!1,l.maxTextureSize);bt=De(T,bt);const zt=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let Kt=N(T.internalFormat,zt,Yt,T.colorSpace,T.isVideoTexture);xt(gt,T);let Pt;const le=T.mipmaps,ee=T.isVideoTexture!==!0,Ue=Ot.__version===void 0||Et===!0,X=ft.dataReady,Lt=k(T,bt);if(T.isDepthTexture)Kt=U(T.format===Ro,T.type),Ue&&(ee?i.texStorage2D(o.TEXTURE_2D,1,Kt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,bt.width,bt.height,0,zt,Yt,null));else if(T.isDataTexture)if(le.length>0){ee&&Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Kt,le[0].width,le[0].height);for(let lt=0,_t=le.length;lt<_t;lt++)Pt=le[lt],ee?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Pt.width,Pt.height,zt,Yt,Pt.data):i.texImage2D(o.TEXTURE_2D,lt,Kt,Pt.width,Pt.height,0,zt,Yt,Pt.data);T.generateMipmaps=!1}else ee?(Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Kt,bt.width,bt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,zt,Yt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Kt,bt.width,bt.height,0,zt,Yt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Kt,le[0].width,le[0].height,bt.depth);for(let lt=0,_t=le.length;lt<_t;lt++)if(Pt=le[lt],T.format!==pi)if(zt!==null)if(ee){if(X)if(T.layerUpdates.size>0){const Bt=b_(Pt.width,Pt.height,T.format,T.type);for(const Nt of T.layerUpdates){const ie=Pt.data.subarray(Nt*Bt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Nt,Pt.width,Pt.height,1,zt,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Pt.width,Pt.height,bt.depth,zt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Kt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Pt.width,Pt.height,bt.depth,zt,Yt,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,Kt,Pt.width,Pt.height,bt.depth,0,zt,Yt,Pt.data)}else{ee&&Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Kt,le[0].width,le[0].height);for(let lt=0,_t=le.length;lt<_t;lt++)Pt=le[lt],T.format!==pi?zt!==null?ee?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Pt.width,Pt.height,zt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,Kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Pt.width,Pt.height,zt,Yt,Pt.data):i.texImage2D(o.TEXTURE_2D,lt,Kt,Pt.width,Pt.height,0,zt,Yt,Pt.data)}else if(T.isDataArrayTexture)if(ee){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Kt,bt.width,bt.height,bt.depth),X)if(T.layerUpdates.size>0){const lt=b_(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Bt=bt.data.subarray(_t*lt/bt.data.BYTES_PER_ELEMENT,(_t+1)*lt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,zt,Yt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,zt,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,bt.width,bt.height,bt.depth,0,zt,Yt,bt.data);else if(T.isData3DTexture)ee?(Ue&&i.texStorage3D(o.TEXTURE_3D,Lt,Kt,bt.width,bt.height,bt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,zt,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,bt.width,bt.height,bt.depth,0,zt,Yt,bt.data);else if(T.isFramebufferTexture){if(Ue)if(ee)i.texStorage2D(o.TEXTURE_2D,Lt,Kt,bt.width,bt.height);else{let lt=bt.width,_t=bt.height;for(let Bt=0;Bt<Lt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Kt,lt,_t,0,zt,Yt,null),lt>>=1,_t>>=1}}else if(le.length>0){if(ee&&Ue){const lt=Gt(le[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Kt,lt.width,lt.height)}for(let lt=0,_t=le.length;lt<_t;lt++)Pt=le[lt],ee?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,zt,Yt,Pt):i.texImage2D(o.TEXTURE_2D,lt,Kt,zt,Yt,Pt);T.generateMipmaps=!1}else if(ee){if(Ue){const lt=Gt(bt);i.texStorage2D(o.TEXTURE_2D,Lt,Kt,lt.width,lt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,zt,Yt,bt);M(T)&&_(gt),Ot.__version=ft.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function mt(L,T,tt){if(T.image.length!==6)return;const gt=Mt(L,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const ft=r.get(Et);if(Et.version!==ft.__version||gt===!0){i.activeTexture(o.TEXTURE0+tt);const Ot=Te.getPrimaries(Te.workingColorSpace),Rt=T.colorSpace===Ia?null:Te.getPrimaries(T.colorSpace),Ht=T.colorSpace===Ia||Ot===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!Jt&&!bt?zt[_t]=C(T.image[_t],!0,l.maxCubemapSize):zt[_t]=bt?T.image[_t].image:T.image[_t],zt[_t]=De(T,zt[_t]);const Yt=zt[0],Kt=u.convert(T.format,T.colorSpace),Pt=u.convert(T.type),le=N(T.internalFormat,Kt,Pt,T.colorSpace),ee=T.isVideoTexture!==!0,Ue=ft.__version===void 0||gt===!0,X=Et.dataReady;let Lt=k(T,Yt);xt(o.TEXTURE_CUBE_MAP,T);let lt;if(Jt){ee&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,le,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){lt=zt[_t].mipmaps;for(let Bt=0;Bt<lt.length;Bt++){const Nt=lt[Bt];T.format!==pi?Kt!==null?ee?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,Nt.width,Nt.height,Kt,Nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,le,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,Nt.width,Nt.height,Kt,Pt,Nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,le,Nt.width,Nt.height,0,Kt,Pt,Nt.data)}}}else{if(lt=T.mipmaps,ee&&Ue){lt.length>0&&Lt++;const _t=Gt(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ee?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,Kt,Pt,zt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,zt[_t].width,zt[_t].height,0,Kt,Pt,zt[_t].data);for(let Bt=0;Bt<lt.length;Bt++){const ie=lt[Bt].image[_t].image;ee?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,ie.width,ie.height,Kt,Pt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,le,ie.width,ie.height,0,Kt,Pt,ie.data)}}else{ee?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Kt,Pt,zt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Kt,Pt,zt[_t]);for(let Bt=0;Bt<lt.length;Bt++){const Nt=lt[Bt];ee?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Kt,Pt,Nt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,le,Kt,Pt,Nt.image[_t])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),ft.__version=Et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function St(L,T,tt,gt,Et,ft){const Ot=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),Ht=N(tt.internalFormat,Ot,Rt,tt.colorSpace),Jt=r.get(T),bt=r.get(tt);if(bt.__renderTarget=T,!Jt.__hasExternalTextures){const zt=Math.max(1,T.width>>ft),Yt=Math.max(1,T.height>>ft);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,ft,Ht,zt,Yt,T.depth,0,Ot,Rt,null):i.texImage2D(Et,ft,Ht,zt,Yt,0,Ot,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,Et,bt.__webglTexture,0,me(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,Et,bt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(L,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const gt=T.depthTexture,Et=gt&&gt.isDepthTexture?gt.type:null,ft=U(T.stencilBuffer,Et),Ot=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=me(T);ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ft,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,L)}else{const gt=T.textures;for(let Et=0;Et<gt.length;Et++){const ft=gt[Et],Ot=u.convert(ft.format,ft.colorSpace),Rt=u.convert(ft.type),Ht=N(ft.internalFormat,Ot,Rt,ft.colorSpace),Jt=me(T);tt&&ne(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Ht,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ut(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const Et=gt.__webglTexture,ft=me(T);if(T.depthTexture.format===Ao)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Ro)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function se(L){const T=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",Et)};gt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=gt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=L.texture.mipmaps;gt&&gt.length>0?Ut(T.__webglFramebuffer[0],L):Ut(T.__webglFramebuffer,L)}else if(tt){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=o.createRenderbuffer(),At(T.__webglDepthbuffer[gt],L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,ft)}}else{const gt=L.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),At(T.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(L,T,tt){const gt=r.get(L);T!==void 0&&St(gt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&se(L)}function Fe(L){const T=L.texture,tt=r.get(L),gt=r.get(T);L.addEventListener("dispose",I);const Et=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Ot=Et.length>1;if(Ot||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=T.version,h.memory.textures++),ft){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Ht=0;Ht<T.mipmaps.length;Ht++)tt.__webglFramebuffer[Rt][Ht]=o.createFramebuffer()}else tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Jt=r.get(Et[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&ne(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Ht=Et[Rt];tt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const Jt=u.convert(Ht.format,Ht.colorSpace),bt=u.convert(Ht.type),zt=N(Ht.internalFormat,Jt,bt,Ht.colorSpace,L.isXRRenderTarget===!0),Yt=me(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,zt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),At(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),xt(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)St(tt.__webglFramebuffer[Rt][Ht],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ht);else St(tt.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Jt=Et[Rt],bt=r.get(Jt);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),xt(o.TEXTURE_2D,Jt),St(tt.__webglFramebuffer,L,Jt,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),M(Jt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,gt.__webglTexture),xt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)St(tt.__webglFramebuffer[Ht],L,T,o.COLOR_ATTACHMENT0,Rt,Ht);else St(tt.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Rt,0);M(T)&&_(Rt),i.unbindTexture()}L.depthBuffer&&se(L)}function Be(L){const T=L.textures;for(let tt=0,gt=T.length;tt<gt;tt++){const Et=T[tt];if(M(Et)){const ft=B(L),Ot=r.get(Et).__webglTexture;i.bindTexture(ft,Ot),_(ft),i.unbindTexture()}}}const ue=[],F=[];function Un(L){if(L.samples>0){if(ne(L)===!1){const T=L.textures,tt=L.width,gt=L.height;let Et=o.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(L),Rt=T.length>1;if(Rt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Jt]);const bt=r.get(T[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,Et,o.NEAREST),m===!0&&(ue.length=0,F.length=0,ue.push(o.COLOR_ATTACHMENT0+Jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ue.push(ft),F.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Jt]);const bt=r.get(T[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function me(L){return Math.min(l.maxSamples,L.samples)}function ne(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function De(L,T){const tt=L.colorSpace,gt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==vs&&tt!==Ia&&(Te.getTransfer(tt)===Pe?(gt!==pi||Et!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=nt,this.setTexture2D=pt,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ne}function kb(o,e){function i(r,l=Ia){let u;const h=Te.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return o.UNSIGNED_SHORT_5_5_5_1;if(r===i0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===e0)return o.BYTE;if(r===n0)return o.SHORT;if(r===To)return o.UNSIGNED_SHORT;if(r===sd)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===Ji)return o.FLOAT;if(r===Co)return o.HALF_FLOAT;if(r===a0)return o.ALPHA;if(r===r0)return o.RGB;if(r===pi)return o.RGBA;if(r===Ao)return o.DEPTH_COMPONENT;if(r===Ro)return o.DEPTH_STENCIL;if(r===s0)return o.RED;if(r===cd)return o.RED_INTEGER;if(r===o0)return o.RG;if(r===ud)return o.RG_INTEGER;if(r===fd)return o.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===_c)if(h===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh||r===Ph||r===Bh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Oh||r===Ph)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===zh||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vc||r===Qh||r===Jh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===vc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===l0||r===$h||r===td||r===ed)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===vc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ga({vertexShader:Xb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ta(new Cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yb extends Ss{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,y=null,b=null;const C=new qb,M=i.getContextAttributes();let _=null,B=null;const N=[],U=[],k=new we;let G=null;const I=new hi;I.viewport=new Je;const z=new hi;z.viewport=new Je;const w=[I,z],R=new dM;let H=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=N[Z];return mt===void 0&&(mt=new sh,N[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=N[Z];return mt===void 0&&(mt=new sh,N[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=N[Z];return mt===void 0&&(mt=new sh,N[Z]=mt),mt.getHandSpace()};function at(Z){const mt=U.indexOf(Z.inputSource);if(mt===-1)return;const St=N[mt];St!==void 0&&(St.update(Z.inputSource,Z.frame,p||h),St.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ct(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",pt);for(let Z=0;Z<N.length;Z++){const mt=U[Z];mt!==null&&(U[Z]=null,N[Z].disconnect(mt))}H=null,nt=null,C.reset(),e.setRenderTarget(_),y=null,S=null,v=null,l=null,B=null,Mt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,At=null,Ut=null;M.depth&&(Ut=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?Ro:Ao,At=M.stencil?bo:xr);const se={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(se),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Sr(S.textureWidth,S.textureHeight,{format:pi,type:na,depthTexture:new E0(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Sr(y.framebufferWidth,y.framebufferHeight,{format:pi,type:na,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pt(Z){for(let mt=0;mt<Z.removed.length;mt++){const St=Z.removed[mt],At=U.indexOf(St);At>=0&&(U[At]=null,N[At].disconnect(St))}for(let mt=0;mt<Z.added.length;mt++){const St=Z.added[mt];let At=U.indexOf(St);if(At===-1){for(let se=0;se<N.length;se++)if(se>=U.length){U.push(St),At=se;break}else if(U[se]===null){U[se]=St,At=se;break}if(At===-1)break}const Ut=N[At];Ut&&Ut.connect(St)}}const O=new st,J=new st;function q(Z,mt,St){O.setFromMatrixPosition(mt.matrixWorld),J.setFromMatrixPosition(St.matrixWorld);const At=O.distanceTo(J),Ut=mt.projectionMatrix.elements,se=St.projectionMatrix.elements,Zt=Ut[14]/(Ut[10]-1),Fe=Ut[14]/(Ut[10]+1),Be=(Ut[9]+1)/Ut[5],ue=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],Un=(se[8]+1)/se[0],me=Zt*F,ne=Zt*Un,Xt=At/(-F+Un),De=Xt*-F;if(mt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ut[10]===-1)Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Gt=Zt+Xt,L=Fe+Xt,T=me-De,tt=ne+(At-De),gt=Be*Fe/L*Gt,Et=ue*Fe/L*Gt;Z.projectionMatrix.makePerspective(T,tt,gt,Et,Gt,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let mt=Z.near,St=Z.far;C.texture!==null&&(C.depthNear>0&&(mt=C.depthNear),C.depthFar>0&&(St=C.depthFar)),R.near=z.near=I.near=mt,R.far=z.far=I.far=St,(H!==R.near||nt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,nt=R.far),I.layers.mask=Z.layers.mask|2,z.layers.mask=Z.layers.mask|4,R.layers.mask=I.layers.mask|z.layers.mask;const At=Z.parent,Ut=R.cameras;yt(R,At);for(let se=0;se<Ut.length;se++)yt(Ut[se],At);Ut.length===2?q(R,I,z):R.projectionMatrix.copy(I.projectionMatrix),D(Z,R,At)};function D(Z,mt,St){St===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(St.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=nd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(Z){m=Z,S!==null&&(S.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function xt(Z,mt){if(g=mt.getViewerPose(p||h),b=mt,g!==null){const St=g.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let At=!1;St.length!==R.cameras.length&&(R.cameras.length=0,At=!0);for(let Zt=0;Zt<St.length;Zt++){const Fe=St[Zt];let Be=null;if(y!==null)Be=y.getViewport(Fe);else{const F=v.getViewSubImage(S,Fe);Be=F.viewport,Zt===0&&(e.setRenderTargetTextures(B,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(B))}let ue=w[Zt];ue===void 0&&(ue=new hi,ue.layers.enable(Zt),ue.viewport=new Je,w[Zt]=ue),ue.matrix.fromArray(Fe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Fe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Be.x,Be.y,Be.width,Be.height),Zt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),At===!0&&R.cameras.push(ue)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(St[0]);Zt&&Zt.isValid&&Zt.texture&&C.init(e,Zt,l.renderState)}}for(let St=0;St<N.length;St++){const At=U[St],Ut=N[St];At!==null&&Ut!==void 0&&Ut.update(At,mt,p||h)}$&&$(Z,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Mt=new b0;Mt.setAnimationLoop(xt),this.setAnimationLoop=function(Z){$=Z},this.dispose=function(){}}}const hr=new ia,jb=new $e;function Zb(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,v0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,B,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===zn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===zn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=e.get(_),N=B.envMap,U=B.envMapRotation;N&&(M.envMap.value=N,hr.copy(U),hr.x*=-1,hr.y*=-1,hr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),M.envMapRotation.value.setFromMatrix4(jb.makeRotationFromEuler(hr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,B,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const B=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Kb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const U=N.program;r.uniformBlockBinding(B,U)}function p(B,N){let U=l[B.id];U===void 0&&(b(B),U=g(B),l[B.id]=U,B.addEventListener("dispose",M));const k=N.program;r.updateUBOMapping(B,k);const G=e.render.frame;u[B.id]!==G&&(S(B),u[B.id]=G)}function g(B){const N=v();B.__bindingPointIndex=N;const U=o.createBuffer(),k=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,k,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],U=B.uniforms,k=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,I=U.length;G<I;G++){const z=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,R=z.length;w<R;w++){const H=z[w];if(y(H,G,w,k)===!0){const nt=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let pt=0;pt<at.length;pt++){const O=at[pt],J=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,nt+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,N,U,k){const G=B.value,I=N+"_"+U;if(k[I]===void 0)return typeof G=="number"||typeof G=="boolean"?k[I]=G:k[I]=G.clone(),!0;{const z=k[I];if(typeof G=="number"||typeof G=="boolean"){if(z!==G)return k[I]=G,!0}else if(z.equals(G)===!1)return z.copy(G),!0}return!1}function b(B){const N=B.uniforms;let U=0;const k=16;for(let I=0,z=N.length;I<z;I++){const w=Array.isArray(N[I])?N[I]:[N[I]];for(let R=0,H=w.length;R<H;R++){const nt=w[R],at=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,pt=at.length;ct<pt;ct++){const O=at[ct],J=C(O),q=U%k,yt=q%J.boundary,D=q+yt;U+=yt,D!==0&&k-D<J.storage&&(U+=k-D),nt.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=J.storage}}}const G=U%k;return G>0&&(U+=k-G),B.__size=U,B.__cache={},this}function C(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Qb{constructor(e={}){const{canvas:i=LS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let k=!1;this._outputColorSpace=ri;let G=0,I=0,z=null,w=-1,R=null;const H=new Je,nt=new Je;let at=null;const ct=new Ce(0);let pt=0,O=i.width,J=i.height,q=1,yt=null,D=null;const $=new Je(0,0,O,J),xt=new Je(0,0,O,J);let Mt=!1;const Z=new M0;let mt=!1,St=!1;const At=new $e,Ut=new $e,se=new st,Zt=new Je,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ue(){return z===null?q:1}let F=r;function Un(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),F===null){const Y="webgl2";if(F=Un(Y,A),F===null)throw Un(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,ne,Xt,De,Gt,L,T,tt,gt,Et,ft,Ot,Rt,Ht,Jt,bt,zt,Yt,Kt,Pt,le,ee,Ue,X;function Lt(){me=new oT(F),me.init(),ee=new kb(F,me),ne=new tT(F,me,e,ee),Xt=new Gb(F,me),ne.reverseDepthBuffer&&S&&Xt.buffers.depth.setReversed(!0),De=new uT(F),Gt=new Cb,L=new Vb(F,me,Xt,Gt,ne,ee,De),T=new nT(U),tt=new sT(U),gt=new gM(F),Ue=new JE(F,gt),Et=new lT(F,gt,De,Ue),ft=new hT(F,Et,gt,De),Kt=new fT(F,ne,L),bt=new eT(Gt),Ot=new Rb(U,T,tt,me,ne,Ue,bt),Rt=new Zb(U,Gt),Ht=new Db,Jt=new Bb(me),Yt=new QE(U,T,tt,Xt,ft,y,m),zt=new Fb(U,ft,ne),X=new Kb(F,De,ne,Xt),Pt=new $E(F,me,De),le=new cT(F,me,De),De.programs=Ot.programs,U.capabilities=ne,U.extensions=me,U.properties=Gt,U.renderLists=Ht,U.shadowMap=zt,U.state=Xt,U.info=De}Lt();const lt=new Yb(U,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,J,!1))},this.getSize=function(A){return A.set(O,J)},this.setSize=function(A,Y,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,J=Y,i.width=Math.floor(A*q),i.height=Math.floor(Y*q),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(O*q,J*q).floor()},this.setDrawingBufferSize=function(A,Y,rt){O=A,J=Y,q=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,Y,rt,ot){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,Y,rt,ot),Xt.viewport(H.copy($).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,Y,rt,ot){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,Y,rt,ot),Xt.scissor(nt.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(A){Xt.setScissorTest(Mt=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let ot=0;if(A){let j=!1;if(z!==null){const Tt=z.texture.format;j=Tt===fd||Tt===ud||Tt===cd}if(j){const Tt=z.texture.type,Ct=Tt===na||Tt===xr||Tt===To||Tt===bo||Tt===od||Tt===ld,wt=Yt.getClearColor(),It=Yt.getClearAlpha(),$t=wt.r,Wt=wt.g,kt=wt.b;Ct?(b[0]=$t,b[1]=Wt,b[2]=kt,b[3]=It,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=$t,C[1]=Wt,C[2]=kt,C[3]=It,F.clearBufferiv(F.COLOR,0,C))}else ot|=F.COLOR_BUFFER_BIT}Y&&(ot|=F.DEPTH_BUFFER_BIT),rt&&(ot|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Yt.dispose(),Ht.dispose(),Jt.dispose(),Gt.dispose(),T.dispose(),tt.dispose(),ft.dispose(),Ue.dispose(),X.dispose(),Ot.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",sn),lt.removeEventListener("sessionend",vn),Ln.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=De.autoReset,Y=zt.enabled,rt=zt.autoUpdate,ot=zt.needsUpdate,j=zt.type;Lt(),De.autoReset=A,zt.enabled=Y,zt.autoUpdate=rt,zt.needsUpdate=ot,zt.type=j}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const Y=A.target;Y.removeEventListener("dispose",ie),He(Y)}function He(A){tn(A),Gt.remove(A)}function tn(A){const Y=Gt.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){Ot.releaseProgram(rt)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,ot,j,Tt){Y===null&&(Y=Fe);const Ct=j.isMesh&&j.matrixWorld.determinant()<0,wt=Xa(A,Y,rt,ot,j);Xt.setMaterial(ot,Ct);let It=rt.index,$t=1;if(ot.wireframe===!0){if(It=Et.getWireframeAttribute(rt),It===void 0)return;$t=2}const Wt=rt.drawRange,kt=rt.attributes.position;let he=Wt.start*$t,ye=(Wt.start+Wt.count)*$t;Tt!==null&&(he=Math.max(he,Tt.start*$t),ye=Math.min(ye,(Tt.start+Tt.count)*$t)),It!==null?(he=Math.max(he,0),ye=Math.min(ye,It.count)):kt!=null&&(he=Math.max(he,0),ye=Math.min(ye,kt.count));const Xe=ye-he;if(Xe<0||Xe===1/0)return;Ue.setup(j,ot,wt,rt,It);let ge,_e=Pt;if(It!==null&&(ge=gt.get(It),_e=le,_e.setIndex(ge)),j.isMesh)ot.wireframe===!0?(Xt.setLineWidth(ot.wireframeLinewidth*ue()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(j.isLine){let qt=ot.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*ue()),j.isLineSegments?_e.setMode(F.LINES):j.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else j.isPoints?_e.setMode(F.POINTS):j.isSprite&&_e.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))_e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ye=j._multiDrawCounts,Se=j._multiDrawCount,En=It?gt.get(It).bytesPerElement:1,la=Gt.get(ot).currentProgram.getUniforms();for(let Ge=0;Ge<Se;Ge++)la.setValue(F,"_gl_DrawID",Ge),_e.render(qt[Ge]/En,Ye[Ge])}else if(j.isInstancedMesh)_e.renderInstances(he,Xe,j.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,qt);_e.renderInstances(he,Xe,Ye)}else _e.render(he,Xe)};function Me(A,Y,rt){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,sa(A,Y,rt),A.side=Ha,A.needsUpdate=!0,sa(A,Y,rt),A.side=Qi):sa(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),_=Jt.get(rt),_.init(Y),N.push(_),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ot=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];Me(wt,rt,j),ot.add(wt)}else Me(Tt,rt,j),ot.add(Tt)}),_=N.pop(),ot},this.compileAsync=function(A,Y,rt=null){const ot=this.compile(A,Y,rt);return new Promise(j=>{function Tt(){if(ot.forEach(function(Ct){Gt.get(Ct).currentProgram.isReady()&&ot.delete(Ct)}),ot.size===0){j(A);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function hn(A){Gn&&Gn(A)}function sn(){Ln.stop()}function vn(){Ln.start()}const Ln=new b0;Ln.setAnimationLoop(hn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){Gn=A,lt.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},lt.addEventListener("sessionstart",sn),lt.addEventListener("sessionend",vn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Y),Y=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Y,z),_=Jt.get(A,N.length),_.init(Y),N.push(_),Ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(Ut),St=this.localClippingEnabled,mt=bt.init(this.clippingPlanes,St),M=Ht.get(A,B.length),M.init(),B.push(M),lt.enabled===!0&&lt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Va(Tt,Y,-1/0,U.sortObjects)}Va(A,Y,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(yt,D),Be=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Be&&Yt.addToRenderList(M,A),this.info.render.frame++,mt===!0&&bt.beginShadows();const rt=_.state.shadowsArray;zt.render(rt,A,Y),mt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,j=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(j.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const It=Tt[Ct];Po(ot,j,A,It)}Be&&Yt.render(A);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const It=Tt[Ct];Oo(M,A,It,It.viewport)}}else j.length>0&&Po(ot,j,A,Y),Be&&Yt.render(A),Oo(M,A,Y);z!==null&&I===0&&(L.updateMultisampleRenderTarget(z),L.updateRenderTargetMipmap(z)),A.isScene===!0&&A.onAfterRender(U,A,Y),Ue.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],mt===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Va(A,Y,rt,ot){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){ot&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const Ct=ft.update(A),wt=A.material;wt.visible&&M.push(A,Ct,wt,rt,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Ct=ft.update(A),wt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Zt.copy(Ct.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(wt)){const It=Ct.groups;for(let $t=0,Wt=It.length;$t<Wt;$t++){const kt=It[$t],he=wt[kt.materialIndex];he&&he.visible&&M.push(A,Ct,he,rt,Zt.z,kt)}}else wt.visible&&M.push(A,Ct,wt,rt,Zt.z,null)}}const Tt=A.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Va(Tt[Ct],Y,rt,ot)}function Oo(A,Y,rt,ot){const j=A.opaque,Tt=A.transmissive,Ct=A.transparent;_.setupLightsView(rt),mt===!0&&bt.setGlobalState(U.clippingPlanes,rt),ot&&Xt.viewport(H.copy(ot)),j.length>0&&ka(j,Y,rt),Tt.length>0&&ka(Tt,Y,rt),Ct.length>0&&ka(Ct,Y,rt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Po(A,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new Sr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Co:na,minFilter:vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[ot.id],Ct=ot.viewport||H;Tt.setSize(Ct.z*U.transmissionResolutionScale,Ct.w*U.transmissionResolutionScale);const wt=U.getRenderTarget();U.setRenderTarget(Tt),U.getClearColor(ct),pt=U.getClearAlpha(),pt<1&&U.setClearColor(16777215,.5),U.clear(),Be&&Yt.render(rt);const It=U.toneMapping;U.toneMapping=Fa;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),mt===!0&&bt.setGlobalState(U.clippingPlanes,ot),ka(A,rt,ot),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,he=Y.length;kt<he;kt++){const ye=Y[kt],Xe=ye.object,ge=ye.geometry,_e=ye.material,qt=ye.group;if(_e.side===Qi&&Xe.layers.test(ot.layers)){const Ye=_e.side;_e.side=zn,_e.needsUpdate=!0,ra(Xe,rt,ot,ge,_e,qt),_e.side=Ye,_e.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}U.setRenderTarget(wt),U.setClearColor(ct,pt),$t!==void 0&&(ot.viewport=$t),U.toneMapping=It}function ka(A,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Ct=A[j],wt=Ct.object,It=Ct.geometry,$t=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&ot!==null&&(Wt=ot),wt.layers.test(rt.layers)&&ra(wt,Y,rt,It,Wt,$t)}}function ra(A,Y,rt,ot,j,Tt){A.onBeforeRender(U,Y,rt,ot,j,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(U,Y,rt,ot,A,Tt),j.transparent===!0&&j.side===Qi&&j.forceSinglePass===!1?(j.side=zn,j.needsUpdate=!0,U.renderBufferDirect(rt,Y,ot,j,A,Tt),j.side=Ha,j.needsUpdate=!0,U.renderBufferDirect(rt,Y,ot,j,A,Tt),j.side=Qi):U.renderBufferDirect(rt,Y,ot,j,A,Tt),A.onAfterRender(U,Y,rt,ot,j,Tt)}function sa(A,Y,rt){Y.isScene!==!0&&(Y=Fe);const ot=Gt.get(A),j=_.state.lights,Tt=_.state.shadowsArray,Ct=j.state.version,wt=Ot.getParameters(A,j.state,Tt,Y,rt),It=Ot.getProgramCacheKey(wt);let $t=ot.programs;ot.environment=A.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(A.isMeshStandardMaterial?tt:T).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ie),$t=new Map,ot.programs=$t);let Wt=$t.get(It);if(Wt!==void 0){if(ot.currentProgram===Wt&&ot.lightsStateVersion===Ct)return Ri(A,wt),Wt}else wt.uniforms=Ot.getUniforms(A),A.onBeforeCompile(wt,U),Wt=Ot.acquireProgram(wt,It),$t.set(It,Wt),ot.uniforms=wt.uniforms;const kt=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=bt.uniform),Ri(A,wt),ot.needsLights=en(A),ot.lightsStateVersion=Ct,ot.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),ot.currentProgram=Wt,ot.uniformsList=null,Wt}function Ai(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Sc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ri(A,Y){const rt=Gt.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Xa(A,Y,rt,ot,j){Y.isScene!==!0&&(Y=Fe),L.resetTextureUnits();const Tt=Y.fog,Ct=ot.isMeshStandardMaterial?Y.environment:null,wt=z===null?U.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:vs,It=(ot.isMeshStandardMaterial?tt:T).get(ot.envMap||Ct),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),kt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,ye=!!rt.morphAttributes.color;let Xe=Fa;ot.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const ge=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_e=ge!==void 0?ge.length:0,qt=Gt.get(ot),Ye=_.state.lights;if(mt===!0&&(St===!0||A!==R)){const dn=A===R&&ot.id===w;bt.setState(ot,A,dn)}let Se=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==wt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==It||ot.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Wt||qt.morphTargets!==kt||qt.morphNormals!==he||qt.morphColors!==ye||qt.toneMapping!==Xe||qt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,qt.__version=ot.version);let En=qt.currentProgram;Se===!0&&(En=sa(ot,Y,j));let la=!1,Ge=!1,wi=!1;const Ie=En.getUniforms(),Tn=qt.uniforms;if(Xt.useProgram(En.program)&&(la=!0,Ge=!0,wi=!0),ot.id!==w&&(w=ot.id,Ge=!0),la||R!==A){Xt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),OS(At),PS(At),Ie.setValue(F,"projectionMatrix",At)):Ie.setValue(F,"projectionMatrix",A.projectionMatrix),Ie.setValue(F,"viewMatrix",A.matrixWorldInverse);const xn=Ie.map.cameraPosition;xn!==void 0&&xn.setValue(F,se.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ge=!0,wi=!0)}if(j.isSkinnedMesh){Ie.setOptional(F,j,"bindMatrix"),Ie.setOptional(F,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ie.setValue(F,"boneTexture",dn.boneTexture,L))}j.isBatchedMesh&&(Ie.setOptional(F,j,"batchingTexture"),Ie.setValue(F,"batchingTexture",j._matricesTexture,L),Ie.setOptional(F,j,"batchingIdTexture"),Ie.setValue(F,"batchingIdTexture",j._indirectTexture,L),Ie.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ie.setValue(F,"batchingColorTexture",j._colorsTexture,L));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Kt.update(j,rt,En),(Ge||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Ie.setValue(F,"receiveShadow",j.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Tn.envMap.value=It,Tn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Ge&&(Ie.setValue(F,"toneMappingExposure",U.toneMappingExposure),qt.needsLights&&oa(Tn,wi),Tt&&ot.fog===!0&&Rt.refreshFogUniforms(Tn,Tt),Rt.refreshMaterialUniforms(Tn,ot,q,J,_.state.transmissionRenderTarget[A.id]),Sc.upload(F,Ai(qt),Tn,L)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Sc.upload(F,Ai(qt),Tn,L),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ie.setValue(F,"center",j.center),Ie.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ie.setValue(F,"normalMatrix",j.normalMatrix),Ie.setValue(F,"modelMatrix",j.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const dn=ot.uniformsGroups;for(let xn=0,gi=dn.length;xn<gi;xn++){const Di=dn[xn];X.update(Di,En),X.bind(Di,En)}}return En}function oa(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,Y,rt){const ot=Gt.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=Y,Gt.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=Gt.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Bo=F.createFramebuffer();this.setRenderTarget=function(A,Y=0,rt=0){z=A,G=Y,I=rt;let ot=!0,j=null,Tt=!1,Ct=!1;if(A){const It=Gt.get(A);if(It.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(F.FRAMEBUFFER,null),ot=!1;else if(It.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(It.__hasExternalTextures)L.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&Gt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Wt=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?j=Wt[Y][rt]:j=Wt[Y],Tt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?j=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?j=Wt[rt]:j=Wt,H.copy(A.viewport),nt.copy(A.scissor),at=A.scissorTest}else H.copy($).multiplyScalar(q).floor(),nt.copy(xt).multiplyScalar(q).floor(),at=Mt;if(rt!==0&&(j=Bo),Xt.bindFramebuffer(F.FRAMEBUFFER,j)&&ot&&Xt.drawBuffers(A,j),Xt.viewport(H),Xt.scissor(nt),Xt.setScissorTest(at),Tt){const It=Gt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,rt)}else if(Ct){const It=Gt.get(A.texture),$t=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,rt,$t)}else if(A!==null&&rt!==0){const It=Gt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(A,Y,rt,ot,j,Tt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Xt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const It=A.texture,$t=It.format,Wt=It.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ot&&rt>=0&&rt<=A.height-j&&F.readPixels(Y,rt,ot,j,ee.convert($t),ee.convert(Wt),Tt)}finally{const It=z!==null?Gt.get(z).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,ot,j,Tt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(Y>=0&&Y<=A.width-ot&&rt>=0&&rt<=A.height-j){Xt.bindFramebuffer(F.FRAMEBUFFER,wt);const It=A.texture,$t=It.format,Wt=It.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(Y,rt,ot,j,ee.convert($t),ee.convert(Wt),0);const he=z!==null?Gt.get(z).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,he);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await NS(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(kt),F.deleteSync(ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const ot=Math.pow(2,-rt),j=Math.floor(A.image.width*ot),Tt=Math.floor(A.image.height*ot),Ct=Y!==null?Y.x:0,wt=Y!==null?Y.y:0;L.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Ct,wt,j,Tt),Xt.unbindTexture()};const Io=F.createFramebuffer(),Ci=F.createFramebuffer();this.copyTextureToTexture=function(A,Y,rt=null,ot=null,j=0,Tt=null){Tt===null&&(j!==0?(xc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ct,wt,It,$t,Wt,kt,he,ye,Xe;const ge=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(rt!==null)Ct=rt.max.x-rt.min.x,wt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,Wt=rt.min.y,kt=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-j);Ct=Math.floor(ge.width*on),wt=Math.floor(ge.height*on),A.isDataArrayTexture?It=ge.depth:A.isData3DTexture?It=Math.floor(ge.depth*on):It=1,$t=0,Wt=0,kt=0}ot!==null?(he=ot.x,ye=ot.y,Xe=ot.z):(he=0,ye=0,Xe=0);const _e=ee.convert(Y.format),qt=ee.convert(Y.type);let Ye;Y.isData3DTexture?(L.setTexture3D(Y,0),Ye=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(L.setTexture2DArray(Y,0),Ye=F.TEXTURE_2D_ARRAY):(L.setTexture2D(Y,0),Ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),En=F.getParameter(F.UNPACK_IMAGE_HEIGHT),la=F.getParameter(F.UNPACK_SKIP_PIXELS),Ge=F.getParameter(F.UNPACK_SKIP_ROWS),wi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const Ie=A.isDataArrayTexture||A.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const on=Gt.get(A),dn=Gt.get(Y),xn=Gt.get(on.__renderTarget),gi=Gt.get(dn.__renderTarget);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Di=0;Di<It;Di++)Ie&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,j,kt+Di),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,Tt,Xe+Di)),F.blitFramebuffer($t,Wt,Ct,wt,he,ye,Ct,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Gt.has(A)){const on=Gt.get(A),dn=Gt.get(Y);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,Io),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci);for(let xn=0;xn<It;xn++)Ie?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,on.__webglTexture,j,kt+xn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,on.__webglTexture,j),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,Tt,Xe+xn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,Tt),j!==0?F.blitFramebuffer($t,Wt,Ct,wt,he,ye,Ct,wt,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(Ye,Tt,he,ye,Xe+xn,$t,Wt,Ct,wt):F.copyTexSubImage2D(Ye,Tt,he,ye,$t,Wt,Ct,wt);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ye,Tt,he,ye,Xe,Ct,wt,It,_e,qt,ge.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Ye,Tt,he,ye,Xe,Ct,wt,It,_e,ge.data):F.texSubImage3D(Ye,Tt,he,ye,Xe,Ct,wt,It,_e,qt,ge):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,he,ye,Ct,wt,_e,qt,ge.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,he,ye,ge.width,ge.height,_e,ge.data):F.texSubImage2D(F.TEXTURE_2D,Tt,he,ye,Ct,wt,_e,qt,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,En),F.pixelStorei(F.UNPACK_SKIP_PIXELS,la),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,wi),Tt===0&&Y.generateMipmaps&&F.generateMipmap(Ye),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,rt=null,ot=null,j=0){return xc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,rt,ot,j)},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){G=0,I=0,z=null,Xt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Jb=()=>{const o=qe.useRef(null);return qe.useEffect(()=>{const e=o.current;if(!e)return;const i=window.innerWidth,r=window.innerHeight,l=60,u=Math.sqrt(3)/2*l,h=120,d=.1,m=5,p=.3,g=.005,v=getComputedStyle(document.documentElement).getPropertyValue("--triangle-line-color").trim()||"#00ffff",S=new sM,y=new T0(-i/2,i/2,r/2,-r/2,1,1e3);y.position.z=5;const b=new Qb({antialias:!0,alpha:!0});b.setSize(i,r),b.setPixelRatio(window.devicePixelRatio),e.appendChild(b.domElement);const C=Math.ceil(i/l)*2,M=Math.ceil(r/u)+1,_=new y0({color:v}),B=[];for(let I=0;I<M;I++)for(let z=0;z<C;z++){const w=z*(l/2)-i/2,R=I*u-r/2,nt=(z+I)%2===0?[[0,0],[l/2,u],[l,0]]:[[0,u],[l/2,0],[l,u]],at=(nt[0][0]+nt[1][0]+nt[2][0])/3+w,ct=(nt[0][1]+nt[1][1]+nt[2][1])/3+R,pt=new aa,O=[];for(let D=0;D<3;D++){const[$,xt]=nt[D];O.push($+w-at,xt+R-ct,0);const[Mt,Z]=nt[(D+1)%3];O.push(Mt+w-at,Z+R-ct,0)}pt.setAttribute("position",new bi(O,3));const J=new uM(pt,_);J.position.set(at,ct,0),S.add(J);const q=new we(nt[0][0]+w-at,nt[0][1]+R-ct),yt=Math.atan2(q.y,q.x);B.push({mesh:J,bx:at,by:ct,cx:at,cy:ct,origAng:yt,rot:0})}const N=new we(1/0,1/0),U=I=>{N.x=I.clientX/i*2-1,N.y=-(I.clientY/r)*2+1,N.x*=i/2,N.y*=r/2};window.addEventListener("mousemove",U);const k=new pM,G=()=>{requestAnimationFrame(G);const I=k.getElapsedTime();for(let z of B){const w=N.x-z.cx,R=N.y-z.cy,H=Math.hypot(w,R);let nt=0;H<h&&(nt=Math.atan2(R,w)-z.origAng),z.rot+=(nt-z.rot)*d,z.mesh.rotation.z=z.rot;const at=m*Math.sin(I*Math.PI*2*p+z.bx*g);z.mesh.position.x=z.bx,z.mesh.position.y=z.by+at,z.cx=z.mesh.position.x,z.cy=z.mesh.position.y}b.render(S,y)};return G(),()=>{window.removeEventListener("mousemove",U),e&&b.domElement&&e.removeChild(b.domElement)}},[]),ht.jsx("div",{id:"background-triangles",ref:o})},$b=({onContactClick:o,onResumeClick:e})=>{const[i,r]=qe.useState(!1);return qe.useEffect(()=>{const l=()=>r(window.scrollY>0);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),ht.jsxs("header",{className:`site-header${i?" scrolled":""}`,children:[ht.jsx("div",{className:"nav-pill",children:ht.jsxs("ul",{className:"nav-list",children:[ht.jsx("li",{className:"nav-item",children:ht.jsx("a",{href:"#",children:"Home "})}),ht.jsx("li",{className:"nav-item",children:ht.jsx("a",{href:"#projects",children:"Projects"})}),ht.jsx("li",{className:"nav-item",onClick:o,children:"Contact"})]})}),ht.jsx("div",{className:"header-pill",onClick:e,children:"Resume"}),ht.jsxs("div",{className:"combined-pill",children:[ht.jsx("div",{className:"combined-item",children:ht.jsx("a",{href:"#",children:"Home "})}),ht.jsx("div",{className:"combined-item",children:ht.jsx("a",{href:"#projects",children:"Projects"})}),ht.jsx("div",{className:"combined-item",onClick:o,children:"Contact"}),ht.jsx("div",{className:"combined-item",onClick:e,children:"Resume"})]})]})},tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGSSURBVHgBtVK/T8JQEH6V3XSBpYNMxNFEmRjEjalWdxNXpuJkXAATE0eJjkDkH1DZjYEwKSR0Y0QSCwkMNGknfqXewb3kUZuqiX7J5fruvvf1u14Z+wNIfkXXdZOQDiEwyxA9iktJknrsO4BA3g1GPtAJEAqQdHweDAaVZrP50mq1+vF4XEkkEkfhcPiYqAVwdMbvbQgCpyiwWCycarV6oijK9Xg8tlOp1LZhGP1IJHJRKpU07AMvQyN/GaOGXjudzhUcY91u906cwTTNCtVvqVTzCsicrGnabrvdPqejBfHEe/V6Pa2q6t58PrepJIsiUaxMJhMT3zYajR6IpFNfxwPWsY886m+tfRMR0+nUoccdfAFbrZrNZjMbcygU2vS7x8i6Wy6X1Ww2eyBYXgLPWMfgo/qJ3Cw7lvWMlpHsOM4ruPrAXCwW8eeLDYfDRxK59xOJcje4GbzgDWFjFo3pO1KG2/cKeVausyAAIceZuIVGo5G2bftNEMixnwCISYh3dx143me/gbv6AdGVQVlm/4lPCc3AMjBvveMAAAAASUVORK5CYII=",eA=""+new URL("Frame 3-CXiQzxMW.webp",import.meta.url).href,nA=()=>ht.jsxs("section",{className:"intro-wrapper",children:[ht.jsxs("div",{className:"intro-row",children:[ht.jsx("div",{className:"intro-avatar",children:ht.jsx("img",{src:eA,alt:"Abhi profile"})}),ht.jsxs("div",{className:"intro-greeting",children:[ht.jsxs("h1",{className:"intro-title",children:["Hi, I am ",ht.jsx("span",{className:"intro-name",children:"Abhi"})," ",ht.jsx("span",{className:"intro-wave",children:"👋"})]}),ht.jsx("h2",{className:"intro-subtitle",children:"AI Engineer / Front-end developer"}),ht.jsxs("div",{className:"intro-location",children:[ht.jsx("img",{src:tA,alt:"",className:"intro-location-icon"}),ht.jsx("span",{className:"intro-location-text",children:"Hertfordshire, UK"})]})]})]}),ht.jsxs("div",{className:"intro-links",children:[ht.jsx("a",{href:"https://www.linkedin.com/in/your-id","aria-label":"LinkedIn",className:"link-btn li"}),ht.jsx("a",{href:"https://github.com/your-id","aria-label":"GitHub",className:"link-btn gh"}),ht.jsx("a",{href:"mailto:you@example.com","aria-label":"E-mail",className:"link-btn gm"})]}),ht.jsx("p",{className:"intro-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."})]}),iA=""+new URL("python-DO7bWKAZ.png",import.meta.url).href,aA=""+new URL("figma-CozZC_9l.webp",import.meta.url).href,rA=""+new URL("pytorch-CoosGphT.webp",import.meta.url).href,sA=""+new URL("react-B3VHkfZD.webp",import.meta.url).href,oA=""+new URL("numpy-BRSZ1Cc-.webp",import.meta.url).href,lA=""+new URL("js-Bm5ATEye.webp",import.meta.url).href,cA=""+new URL("huggingface-BZabPc59.webp",import.meta.url).href,uA=""+new URL("threejs-DwP3X5Tz.webp",import.meta.url).href,fA=""+new URL("docker-1kIsLsNd.webp",import.meta.url).href,hA=""+new URL("sql-server-CMxbmI3Y.webp",import.meta.url).href,dA=""+new URL("ollama-H65p_0IK.webp",import.meta.url).href,pA=""+new URL("git-BBtEDBz1.webp",import.meta.url).href,mA=""+new URL("opencv-D0D4F90-.jpg",import.meta.url).href,gA=""+new URL("java-C8Lp2q9b.webp",import.meta.url).href,_A=""+new URL("tensorflow-Mlfy9GRp.webp",import.meta.url).href,vA=""+new URL("keras_black-DLGw5dpI.png",import.meta.url).href,mh=[{name:"Python",iconSrc:iA},{name:"Figma",iconSrc:aA},{name:"Pytorch",iconSrc:rA},{name:"React",iconSrc:sA},{name:"Numpy",iconSrc:oA},{name:"JavaScript",iconSrc:lA},{name:"Huggingface",iconSrc:cA},{name:"ThreeJs",iconSrc:uA},{name:"Docker",iconSrc:fA},{name:"SQL",iconSrc:hA},{name:"Ollama",iconSrc:dA},{name:"Git",iconSrc:pA},{name:"OpenCv",iconSrc:mA},{name:"Java",iconSrc:gA},{name:"Tensorflow",iconSrc:_A},{name:"Keras",iconSrc:vA}],K_=[{title:"Lorem ipsum.",details:["A-1","A-2","A-3","A-4","A-5","A-6","A-7"]},{title:"Dolor sit.",details:["B-1","B-2","B-3","B-4","B-5","B-6","B-7"]}],Q_=[{title:"Lorem – 2024",details:["Issued by Lorem Ipsum Academy","sfgswgrwesgrswegrweg"]},{title:"Dolor – 2023",details:["Issued by Dolor Institute","Issued by Lorem Ipsum Academy","sfgswgrwesgrswegrweg"]}];function xA(){const[r,l]=qe.useState("education"),[u,h]=qe.useState("education"),[d,m]=qe.useState(!1),p=qe.useRef(null),[g,v]=qe.useState([]);qe.useEffect(()=>{if(!p.current)return;const z=Array.from(p.current.querySelectorAll(".timeline-item"));v(z.map(w=>w.offsetTop+2))},[u]);const S=z=>{z!==r&&(l(z),m(!0),window.requestAnimationFrame(()=>{const w=Array.from(p.current.querySelectorAll(".timeline-item"));v(w.map(R=>R.offsetTop+2))}),setTimeout(()=>{h(z),m(!1)},100))},y=r==="education"?K_:Q_,b=u==="education"?K_:Q_,C=r==="education"?"16px":"calc(100% - 16px)",M=r==="education"?"left":"right",_=r==="education"?"32px":"0",B=r==="education"?"0":"32px",[N,U]=qe.useState(window.innerWidth);qe.useEffect(()=>{const z=()=>U(window.innerWidth);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]);const k=N<=890,G=k?[...mh,...mh]:mh,I=qe.useRef(null);return qe.useEffect(()=>{const z=I.current;if(!z||!k)return;const w=.1;let R=0,H;function nt(){R+=w,R>=z.scrollWidth/2&&(R=0),z.scrollLeft=R,H=requestAnimationFrame(nt)}return H=requestAnimationFrame(nt),()=>cancelAnimationFrame(H)},[k]),ht.jsxs("section",{className:"tech-edu-wrapper",children:[ht.jsxs("div",{className:"tech-card",children:[ht.jsx("h3",{className:"card-title",children:"TECHNOLOGIES I USE"}),ht.jsx("div",{className:"tech-scroll",ref:I,children:ht.jsx("ul",{className:"tech-list",children:G.map(({name:z,iconSrc:w},R)=>ht.jsxs("li",{className:"tech-item",children:[ht.jsx("img",{className:"tech-icon",src:w,alt:`${z} logo`,width:32,height:32}),ht.jsx("span",{className:"tech-title",children:z})]},R))})})]}),ht.jsxs("div",{className:"edu-card",children:[ht.jsxs("div",{className:"tab-bar",children:[ht.jsx("div",{className:"tab-slider",style:{left:r==="education"?"0%":"50%"}}),ht.jsx("button",{className:"tab",onClick:()=>S("education"),children:"EDUCATION"}),ht.jsx("button",{className:"tab",onClick:()=>S("cert"),children:"CERTIFICATES"})]}),ht.jsxs("div",{className:"timeline",style:{"--axis-x":C},children:[g.map((z,w)=>ht.jsx("span",{className:"timeline-dot",style:{top:`${z}px`,left:C}},w)),b.map(({title:z,details:w},R)=>ht.jsx("div",{className:`timeline-item ${d?"fade-out":""}`,children:ht.jsxs("div",{className:`timeline-content ${d?"":u==="education"?"slide-in-left":"slide-in-right"}`,style:{textAlign:M,paddingLeft:_,paddingRight:B,"--content-delay":"100ms","--slide-dur":"350ms"},children:[ht.jsx("h4",{children:z}),ht.jsx("ul",{children:w.map((H,nt)=>ht.jsx("li",{children:H},nt))})]})},`${u}-${R}`))]}),ht.jsx("div",{ref:p,"aria-hidden":"true",style:{position:"absolute",left:"-9999px",visibility:"hidden",width:"100%",pointerEvents:"none"},children:ht.jsx("div",{className:"timeline",style:{"--axis-x":C},children:y.map(({title:z,details:w},R)=>ht.jsx("div",{className:"timeline-item",children:ht.jsxs("div",{className:"timeline-content",style:{textAlign:M,paddingLeft:_,paddingRight:B},children:[ht.jsx("h4",{children:z}),ht.jsx("ul",{children:w.map((H,nt)=>ht.jsx("li",{children:H},nt))})]})},`m-${R}`))})})]})]})}const SA=[{title:"Project One",imageSrc:"https://via.placeholder.com/600x400",description:"A brief overview of what Project One is about.",link:"https://example.com/project-one"},{title:"Project Two",imageSrc:"https://via.placeholder.com/600x400",description:"A brief overview of what Project Two is about.",link:"https://example.com/project-two"},{title:"Project Three",imageSrc:"https://via.placeholder.com/600x400",description:"A brief overview of what Project Three is about.",link:"https://example.com/project-three"},{title:"Project Four",imageSrc:"https://via.placeholder.com/600x400",description:"A brief overview of what Project Four is about.",link:"https://example.com/project-four"},{title:"Project Five",imageSrc:"https://via.placeholder.com/600x400",description:"A brief overview of what Project Five is about.",link:"https://example.com/project-five"},{title:"Project Six",imageSrc:"https://via.placeholder.com/600x400",description:"A brief overview of what Project Six is about.",link:"https://example.com/project-six"}],MA=()=>ht.jsxs("section",{id:"projects",className:"projects-wrapper",children:[ht.jsx("h3",{className:"projects-title",children:"PROJECTS"}),ht.jsx("div",{className:"projects-grid",children:SA.map((o,e)=>ht.jsxs("div",{className:"project-card",children:[ht.jsx("h4",{className:"project-name",children:o.title}),ht.jsx("div",{className:"project-image",children:ht.jsx("img",{src:o.imageSrc,alt:o.title})}),ht.jsx("p",{className:"project-desc",children:o.description}),ht.jsx("a",{href:o.link,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:"View Project →"})]},e))})]}),yA=()=>ht.jsx("footer",{className:"site-footer",children:ht.jsxs("div",{className:"footer-inner",children:[ht.jsx("span",{className:"footer-copy",children:"© 2025 Abhi. All rights reserved."}),ht.jsxs("div",{className:"footer-links",children:[ht.jsx("a",{href:"https://www.linkedin.com/in/your-id","aria-label":"LinkedIn",className:"link-btn li",target:"_blank",rel:"noopener noreferrer"}),ht.jsx("a",{href:"https://github.com/your-id","aria-label":"GitHub",className:"link-btn gh",target:"_blank",rel:"noopener noreferrer"}),ht.jsx("a",{href:"mailto:you@example.com","aria-label":"E‑mail",className:"link-btn gm"})]})]})}),EA="data:image/svg+xml,%3csvg%20width='51'%20height='51'%20viewBox='0%200%2051%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='50'%20height='50'%20rx='5.5'%20fill='%23080D17'%20stroke='white'/%3e%3crect%20x='4.5'%20y='4.5'%20width='41'%20height='41'%20stroke='black'/%3e%3cpath%20d='M42.5%2014.5C42.5%2012.575%2040.925%2011%2039%2011H11C9.075%2011%207.5%2012.575%207.5%2014.5M42.5%2014.5V35.5C42.5%2037.425%2040.925%2039%2039%2039H11C9.075%2039%207.5%2037.425%207.5%2035.5V14.5M42.5%2014.5L25%2026.75L7.5%2014.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",TA="data:image/svg+xml,%3csvg%20width='51'%20height='52'%20viewBox='0%200%2051%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='1'%20width='50'%20height='50'%20rx='5.5'%20fill='%23080D17'%20stroke='white'/%3e%3crect%20width='38'%20height='38'%20transform='translate(6.5%207)'%20fill='%23080D17'/%3e%3cpath%20d='M31.8333%2019.6667C34.3529%2019.6667%2036.7693%2020.6676%2038.5508%2022.4492C40.3324%2024.2307%2041.3333%2026.6471%2041.3333%2029.1667V40.25H35V29.1667C35%2028.3268%2034.6664%2027.5214%2034.0725%2026.9275C33.4786%2026.3336%2032.6732%2026%2031.8333%2026C30.9935%2026%2030.188%2026.3336%2029.5942%2026.9275C29.0003%2027.5214%2028.6667%2028.3268%2028.6667%2029.1667V40.25H22.3333V29.1667C22.3333%2026.6471%2023.3342%2024.2307%2025.1158%2022.4492C26.8974%2020.6676%2029.3138%2019.6667%2031.8333%2019.6667Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2021.25H9.66667V40.25H16V21.25Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8333%2016.5C14.5822%2016.5%2016%2015.0822%2016%2013.3333C16%2011.5844%2014.5822%2010.1667%2012.8333%2010.1667C11.0844%2010.1667%209.66667%2011.5844%209.66667%2013.3333C9.66667%2015.0822%2011.0844%2016.5%2012.8333%2016.5Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",bA="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='25'%20cy='25'%20r='24.5'%20fill='%23080D17'%20stroke='white'/%3e%3cpath%20d='M19.5%2040.6667C11.1667%2043.1667%2011.1667%2036.5%207.83334%2035.6667M31.1667%2045.6667V39.2167C31.2292%2038.4219%2031.1218%2037.623%2030.8517%2036.873C30.5816%2036.123%2030.1549%2035.439%2029.6%2034.8667C34.8333%2034.2833%2040.3333%2032.3%2040.3333%2023.2C40.3329%2020.873%2039.4378%2018.6353%2037.8333%2016.95C38.5931%2014.9142%2038.5394%2012.6639%2037.6833%2010.6667C37.6833%2010.6667%2035.7167%2010.0833%2031.1667%2013.1333C27.3467%2012.098%2023.32%2012.098%2019.5%2013.1333C14.95%2010.0833%2012.9833%2010.6667%2012.9833%2010.6667C12.1273%2012.6639%2012.0736%2014.9142%2012.8333%2016.95C11.2169%2018.6478%2010.3209%2020.9058%2010.3333%2023.25C10.3333%2032.2833%2015.8333%2034.2667%2021.0667%2034.9167C20.5183%2035.4833%2020.0954%2036.159%2019.8255%2036.8999C19.5556%2037.6407%2019.4447%2038.4301%2019.5%2039.2167V45.6667'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function AA({open:o,onClose:e}){const[i,r]=qe.useState(o);qe.useEffect(()=>{o&&r(!0),document.body.style.overflow=o?"hidden":""},[o]);const l=()=>{o||r(!1)},[u,h]=qe.useState({name:"",email:"",message:""}),d=p=>h(g=>({...g,[p.target.name]:p.target.value})),m=p=>{p.preventDefault(),alert("Thanks for your message!"),h({name:"",email:"",message:""})};return i?ht.jsx("div",{className:`contact-overlay ${o?"open":"close"}`,"data-role":"overlay",onClick:p=>p.target.dataset.role==="overlay"&&e(),onAnimationEnd:l,children:ht.jsxs("div",{className:`contact-modal ${o?"open":"close"}`,children:[ht.jsx("button",{className:"close-btn","aria-label":"Close",onClick:e,children:"✕"}),ht.jsx("h3",{className:"contact-title",children:"GET IN TOUCH"}),ht.jsxs("form",{className:"contact-form",onSubmit:m,children:[ht.jsxs("div",{className:"field-group",children:[ht.jsx("label",{htmlFor:"name",children:"Name"}),ht.jsx("input",{id:"name",name:"name",value:u.name,onChange:d,required:!0})]}),ht.jsxs("div",{className:"field-group",children:[ht.jsx("label",{htmlFor:"email",children:"Email"}),ht.jsx("input",{id:"email",type:"email",name:"email",value:u.email,onChange:d,required:!0})]}),ht.jsxs("div",{className:"field-group",children:[ht.jsx("label",{htmlFor:"message",children:"Message"}),ht.jsx("textarea",{id:"message",name:"message",rows:"5",value:u.message,onChange:d,required:!0})]}),ht.jsx("button",{type:"submit",className:"submit-btn",children:"Send Message"})]}),ht.jsxs("div",{className:"contact-links",children:[ht.jsx("a",{href:"mailto:you@example.com","aria-label":"Email",children:ht.jsx("img",{src:EA,alt:"Email"})}),ht.jsx("a",{href:"https://www.linkedin.com/in/your-id","aria-label":"LinkedIn",target:"_blank",rel:"noreferrer",children:ht.jsx("img",{src:TA,alt:"LinkedIn"})}),ht.jsx("a",{href:"https://github.com/your-id","aria-label":"GitHub",target:"_blank",rel:"noreferrer",children:ht.jsx("img",{src:bA,alt:"GitHub"})})]})]})}):null}const RA=""+new URL("resume-DiHNr1cf.pdf",import.meta.url).href,D0=Object.fromEntries(Object.entries(Object.assign({"../assets/resume/resume.pdf":RA})).map(([o,e])=>[o.split(".").pop().toLowerCase(),e])),gh=Object.keys(D0);function CA({open:o,onClose:e}){const[i,r]=qe.useState(o),[l,u]=qe.useState(gh[0]??"");qe.useEffect(()=>{o&&r(!0),document.body.style.overflow=o?"hidden":""},[o]);const h=()=>!o&&r(!1);if(!i)return null;const d=D0[l];return ht.jsx("div",{className:`resume-overlay ${o?"open":"close"}`,"data-role":"overlay",onClick:m=>m.target.dataset.role==="overlay"&&e(),onAnimationEnd:h,children:ht.jsxs("div",{className:`resume-modal ${o?"open":"close"}`,children:[ht.jsx("button",{className:"close-btn","aria-label":"Close",onClick:e,children:"✕"}),ht.jsx("h3",{className:"resume-title",children:"Resume download"}),ht.jsxs("div",{className:"controls",children:[ht.jsx("select",{value:l,onChange:m=>u(m.target.value),className:"ext-select","aria-label":"Choose file format",children:gh.map(m=>ht.jsxs("option",{value:m,children:[".",m.toUpperCase()]},m))}),ht.jsx("a",{href:d,download:!0,className:"download-btn",children:"Download"})]}),gh.length===0&&ht.jsxs("p",{style:{textAlign:"center",marginTop:"12px",opacity:.8},children:["No résumé files found in ",ht.jsx("code",{children:"assets/resume/"}),"."]})]})})}function wA(){const[o,e]=qe.useState(!1),[i,r]=qe.useState(!1);return ht.jsxs("div",{children:[ht.jsx($b,{onContactClick:()=>e(!0),onResumeClick:()=>r(!0)}),ht.jsx(Jb,{}),ht.jsx(nA,{}),ht.jsx(xA,{}),ht.jsx(MA,{}),ht.jsx(yA,{}),ht.jsx(AA,{open:o,onClose:()=>e(!1)}),ht.jsx(CA,{open:i,onClose:()=>r(!1)})]})}Vx.createRoot(document.getElementById("root")).render(ht.jsx(qe.StrictMode,{children:ht.jsx(wA,{})}));
