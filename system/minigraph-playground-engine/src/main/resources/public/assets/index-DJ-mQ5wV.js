import{j as m,T as Fh,_ as po,H as dc,W as kg}from"./vendor-panels-Cixz1HBJ.js";import{a as ef,b as Dg,r as T,N as Og,R as tf,u as Rg,B as zg,c as Bg,d as nf,e as Hg}from"./vendor-router-DUFbnzxw.js";import{N as Gg,H as Mi,P as ki,M as Ug,u as Lg,a as Yg,B as qg,b as Ig,C as Xg,c as Jg,i as Zg}from"./vendor-xyflow-k-RwjR-l.js";import{c as Qg,a as Vg,d as ho,J as Tc}from"./vendor-json-view-Djmwb-hd.js";import{M as Kg,r as $g}from"./vendor-markdown-Cp1IxVgw.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();var ec={exports:{}},co={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Wg(){return Th||(Th=1,(function(r){function n(z,U){var $=z.length;z.push(U);e:for(;0<$;){var F=$-1>>>1,ee=z[F];if(0<d(ee,U))z[F]=U,z[$]=ee,$=F;else break e}}function s(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var U=z[0],$=z.pop();if($!==U){z[0]=$;e:for(var F=0,ee=z.length,ce=ee>>>1;F<ce;){var se=2*(F+1)-1,ne=z[se],ge=se+1,de=z[ge];if(0>d(ne,$))ge<ee&&0>d(de,ne)?(z[F]=de,z[ge]=$,F=ge):(z[F]=ne,z[se]=$,F=se);else if(ge<ee&&0>d(de,$))z[F]=de,z[ge]=$,F=ge;else break e}}return U}function d(z,U){var $=z.sortIndex-U.sortIndex;return $!==0?$:z.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var b=Date,g=b.now();r.unstable_now=function(){return b.now()-g}}var f=[],v=[],w=1,_=null,E=3,M=!1,j=!1,x=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function Y(z){for(var U=s(v);U!==null;){if(U.callback===null)u(v);else if(U.startTime<=z)u(v),U.sortIndex=U.expirationTime,n(f,U);else break;U=s(v)}}function C(z){if(x=!1,Y(z),!j)if(s(f)!==null)j=!0,B||(B=!0,P());else{var U=s(v);U!==null&&re(C,U.startTime-z)}}var B=!1,R=-1,I=5,J=-1;function Z(){return y?!0:!(r.unstable_now()-J<I)}function K(){if(y=!1,B){var z=r.unstable_now();J=z;var U=!0;try{e:{j=!1,x&&(x=!1,O(R),R=-1),M=!0;var $=E;try{t:{for(Y(z),_=s(f);_!==null&&!(_.expirationTime>z&&Z());){var F=_.callback;if(typeof F=="function"){_.callback=null,E=_.priorityLevel;var ee=F(_.expirationTime<=z);if(z=r.unstable_now(),typeof ee=="function"){_.callback=ee,Y(z),U=!0;break t}_===s(f)&&u(f),Y(z)}else u(f);_=s(f)}if(_!==null)U=!0;else{var ce=s(v);ce!==null&&re(C,ce.startTime-z),U=!1}}break e}finally{_=null,E=$,M=!1}U=void 0}}finally{U?P():B=!1}}}var P;if(typeof k=="function")P=function(){k(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,te=le.port2;le.port1.onmessage=K,P=function(){te.postMessage(null)}}else P=function(){N(K,0)};function re(z,U){R=N(function(){z(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(z){switch(E){case 1:case 2:case 3:var U=3;break;default:U=E}var $=E;E=U;try{return z()}finally{E=$}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=E;E=z;try{return U()}finally{E=$}},r.unstable_scheduleCallback=function(z,U,$){var F=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?F+$:F):$=F,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,z={id:w++,callback:U,priorityLevel:z,startTime:$,expirationTime:ee,sortIndex:-1},$>F?(z.sortIndex=$,n(v,z),s(f)===null&&z===s(v)&&(x?(O(R),R=-1):x=!0,re(C,$-F))):(z.sortIndex=ee,n(f,z),j||M||(j=!0,B||(B=!0,P()))),z},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(z){var U=E;return function(){var $=E;E=U;try{return z.apply(this,arguments)}finally{E=$}}}})(nc)),nc}var Eh;function Pg(){return Eh||(Eh=1,tc.exports=Wg()),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function Fg(){if(Ah)return co;Ah=1;var r=Pg(),n=ef(),s=Dg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(h(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(l=o.return,l!==null){a=l;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return f(o),e;if(i===l)return f(o),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=o,l=i;else{for(var c=!1,p=o.child;p;){if(p===a){c=!0,a=o,l=i;break}if(p===l){c=!0,l=o,a=i;break}p=p.sibling}if(!c){for(p=i.child;p;){if(p===a){c=!0,a=i,l=o;break}if(p===l){c=!0,l=i,a=o;break}p=p.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,E=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),k=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case N:return"Profiler";case y:return"StrictMode";case C:return"Suspense";case B:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case k:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}var re=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},F=[],ee=-1;function ce(e){return{current:e}}function se(e){0>ee||(e.current=F[ee],F[ee]=null,ee--)}function ne(e,t){ee++,F[ee]=e.current,e.current=t}var ge=ce(null),de=ce(null),me=ce(null),Me=ce(null);function He(e,t){switch(ne(me,t),ne(de,e),ne(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qp(t),e=Vp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(ge),ne(ge,e)}function Se(){se(ge),se(de),se(me)}function Oe(e){e.memoizedState!==null&&ne(Me,e);var t=ge.current,a=Vp(t,e.type);t!==a&&(ne(de,e),ne(ge,a))}function oe(e){de.current===e&&(se(ge),se(de)),Me.current===e&&(se(Me),oo._currentValue=$)}var pe,be;function W(e){if(pe===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pe+e+be}var ye=!1;function Ee(e,t){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(q){var L=q}Reflect.construct(e,[],V)}else{try{V.call()}catch(q){L=q}e.call(V.prototype)}}else{try{throw Error()}catch(q){L=q}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(q){if(q&&L&&typeof q.stack=="string")return[q.stack,L.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],p=i[1];if(c&&p){var S=c.split(`
`),G=p.split(`
`);for(o=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;if(l===S.length||o===G.length)for(l=S.length-1,o=G.length-1;1<=l&&0<=o&&S[l]!==G[o];)o--;for(;1<=l&&0<=o;l--,o--)if(S[l]!==G[o]){if(l!==1||o!==1)do if(l--,o--,0>o||S[l]!==G[o]){var X=`
`+S[l].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=l&&0<=o);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?W(a):""}function fe(e,t){switch(e.tag){case 26:case 27:case 5:return W(e.type);case 16:return W("Lazy");case 13:return e.child!==t&&t!==null?W("Suspense Fallback"):W("Suspense");case 19:return W("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return W("Activity");default:return""}}function De(e){try{var t="",a=null;do t+=fe(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ge=Object.prototype.hasOwnProperty,dt=r.unstable_scheduleCallback,et=r.unstable_cancelCallback,ct=r.unstable_shouldYield,ra=r.unstable_requestPaint,ve=r.unstable_now,fn=r.unstable_getCurrentPriorityLevel,ja=r.unstable_ImmediatePriority,mo=r.unstable_UserBlockingPriority,ca=r.unstable_NormalPriority,Hi=r.unstable_LowPriority,go=r.unstable_IdlePriority,Gi=r.log,Ui=r.unstable_setDisableYieldValue,ua=null,wt=null;function on(e){if(typeof Gi=="function"&&Ui(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(ua,e)}catch{}}var Tt=Math.clz32?Math.clz32:we,Li=Math.log,Yi=Math.LN2;function we(e){return e>>>=0,e===0?32:31-(Li(e)/Yi|0)|0}var pt=256,$e=262144,sn=4194304;function mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yo(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var o=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?o=mn(l):(c&=p,c!==0?o=mn(c):a||(a=p&~e,a!==0&&(o=mn(a))))):(p=l&~i,p!==0?o=mn(p):c!==0?o=mn(c):a||(a=l&~e,a!==0&&(o=mn(a)))),o===0?0:t!==0&&t!==o&&(t&i)===0&&(i=o&-o,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:o}function vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cc(){var e=sn;return sn<<=1,(sn&62914560)===0&&(sn=4194304),e}function qi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bf(e,t,a,l,o,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,S=e.expirationTimes,G=e.hiddenUpdates;for(a=c&~a;0<a;){var X=31-Tt(a),V=1<<X;p[X]=0,S[X]=-1;var L=G[X];if(L!==null)for(G[X]=null,X=0;X<L.length;X++){var q=L[X];q!==null&&(q.lane&=-536870913)}a&=~V}l!==0&&jc(e,l,0),i!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function jc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Tt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Mc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Tt(a),o=1<<l;o&t|e[l]&t&&(e[l]|=t),a&=~o}}function kc(e,t){var a=t&-t;return a=(a&42)!==0?1:Ii(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dc(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:yh(e.type))}function Oc(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var Bn=Math.random().toString(36).slice(2),gt="__reactFiber$"+Bn,At="__reactProps$"+Bn,Ma="__reactContainer$"+Bn,Ji="__reactEvents$"+Bn,_f="__reactListeners$"+Bn,xf="__reactHandles$"+Bn,Rc="__reactResources$"+Bn,_l="__reactMarker$"+Bn;function Zi(e){delete e[gt],delete e[At],delete e[Ji],delete e[_f],delete e[xf]}function ka(e){var t=e[gt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ma]||a[gt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=th(e);e!==null;){if(a=e[gt])return a;e=th(e)}return t}e=a,a=e.parentNode}return null}function Da(e){if(e=e[gt]||e[Ma]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Oa(e){var t=e[Rc];return t||(t=e[Rc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[_l]=!0}var zc=new Set,Bc={};function da(e,t){Ra(e,t),Ra(e+"Capture",t)}function Ra(e,t){for(Bc[e]=t,e=0;e<t.length;e++)zc.add(t[e])}var Sf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hc={},Gc={};function wf(e){return Ge.call(Gc,e)?!0:Ge.call(Hc,e)?!1:Sf.test(e)?Gc[e]=!0:(Hc[e]=!0,!1)}function vo(e,t,a){if(wf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bo(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function gn(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tf(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){if(!e._valueTracker){var t=Uc(e)?"checked":"value";e._valueTracker=Tf(e,t,""+e[t])}}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Uc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ef=/[\n"\\]/g;function Jt(e){return e.replace(Ef,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vi(e,t,a,l,o,i,c,p){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Ki(e,c,Xt(t)):a!=null?Ki(e,c,Xt(a)):l!=null&&e.removeAttribute("value"),o==null&&i!=null&&(e.defaultChecked=!!i),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Xt(p):e.removeAttribute("name")}function Yc(e,t,a,l,o,i,c,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Qi(e);return}a=a!=null?""+Xt(a):"",t=t!=null?""+Xt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Qi(e)}function Ki(e,t,a){t==="number"&&_o(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function za(e,t,a,l){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qc(e,t,a){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Xt(a):""}function Ic(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(re(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Qi(e)}function Ba(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Af=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Af.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Jc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&a[o]!==l&&Xc(e,o,l)}else for(var i in t)t.hasOwnProperty(i)&&Xc(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xo(e){return Cf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var Wi=null;function Pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Ga=null;function Zc(e){var t=Da(e);if(t&&(e=t.stateNode)){var a=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var o=l[At]||null;if(!o)throw Error(u(90));Vi(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Lc(l)}break e;case"textarea":qc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&za(e,!!a.multiple,t,!1)}}}var Fi=!1;function Qc(e,t,a){if(Fi)return e(t,a);Fi=!0;try{var l=e(t);return l}finally{if(Fi=!1,(Ha!==null||Ga!==null)&&(ri(),Ha&&(t=Ha,e=Ga,Ga=Ha=null,Zc(t),e)))for(t=0;t<e.length;t++)Zc(e[t])}}function Sl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[At]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=!1;if(vn)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){es=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{es=!1}var Hn=null,ts=null,So=null;function Vc(){if(So)return So;var e,t=ts,a=t.length,l,o="value"in Hn?Hn.value:Hn.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===o[i-l];l++);return So=o.slice(e,1<l?1-l:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Kc(){return!1}function Nt(e){function t(a,l,o,i,c){this._reactName=a,this._targetInst=o,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?To:Kc,this.isPropagationStopped=Kc,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Nt(pa),Tl=_({},pa,{view:0,detail:0}),jf=Nt(Tl),ns,as,El,Ao=_({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(ns=e.screenX-El.screenX,as=e.screenY-El.screenY):as=ns=0,El=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:as}}),$c=Nt(Ao),Mf=_({},Ao,{dataTransfer:0}),kf=Nt(Mf),Df=_({},Tl,{relatedTarget:0}),ls=Nt(Df),Of=_({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Nt(Of),zf=_({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=Nt(zf),Hf=_({},pa,{data:0}),Wc=Nt(Hf),Gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function os(){return Yf}var qf=_({},Tl,{key:function(e){if(e.key){var t=Gf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=Nt(qf),Xf=_({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=Nt(Xf),Jf=_({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),Zf=Nt(Jf),Qf=_({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Nt(Qf),Kf=_({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$f=Nt(Kf),Wf=_({},pa,{newState:0,oldState:0}),Pf=Nt(Wf),Ff=[9,13,27,32],is=vn&&"CompositionEvent"in window,Al=null;vn&&"documentMode"in document&&(Al=document.documentMode);var em=vn&&"TextEvent"in window&&!Al,Fc=vn&&(!is||Al&&8<Al&&11>=Al),eu=" ",tu=!1;function nu(e,t){switch(e){case"keyup":return Ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ua=!1;function tm(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function nm(e,t){if(Ua)return e==="compositionend"||!is&&nu(e,t)?(e=Vc(),So=ts=Hn=null,Ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fc&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function ou(e,t,a,l){Ha?Ga?Ga.push(l):Ga=[l]:Ha=l,t=mi(t,"onChange"),0<t.length&&(a=new Eo("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Nl=null,Cl=null;function lm(e){Yp(e,0)}function No(e){var t=xl(e);if(Lc(t))return e}function iu(e,t){if(e==="change")return t}var su=!1;if(vn){var ss;if(vn){var rs="oninput"in document;if(!rs){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),rs=typeof ru.oninput=="function"}ss=rs}else ss=!1;su=ss&&(!document.documentMode||9<document.documentMode)}function cu(){Nl&&(Nl.detachEvent("onpropertychange",uu),Cl=Nl=null)}function uu(e){if(e.propertyName==="value"&&No(Cl)){var t=[];ou(t,Cl,e,Pi(e)),Qc(lm,t)}}function om(e,t,a){e==="focusin"?(cu(),Nl=t,Cl=a,Nl.attachEvent("onpropertychange",uu)):e==="focusout"&&cu()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Cl)}function sm(e,t){if(e==="click")return No(t)}function rm(e,t){if(e==="input"||e==="change")return No(t)}function cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:cm;function jl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var o=a[l];if(!Ge.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,t){var a=du(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=du(a)}}function hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_o(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_o(e.document)}return t}function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var um=vn&&"documentMode"in document&&11>=document.documentMode,La=null,us=null,Ml=null,ds=!1;function mu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ds||La==null||La!==_o(l)||(l=La,"selectionStart"in l&&cs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ml&&jl(Ml,l)||(Ml=l,l=mi(us,"onSelect"),0<l.length&&(t=new Eo("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=La)))}function ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ya={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},ps={},gu={};vn&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function fa(e){if(ps[e])return ps[e];if(!Ya[e])return e;var t=Ya[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gu)return ps[e]=t[a];return e}var yu=fa("animationend"),vu=fa("animationiteration"),bu=fa("animationstart"),dm=fa("transitionrun"),pm=fa("transitionstart"),hm=fa("transitioncancel"),_u=fa("transitionend"),xu=new Map,hs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hs.push("scrollEnd");function tn(e,t){xu.set(e,t),da(t,[e])}var Co=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],qa=0,fs=0;function jo(){for(var e=qa,t=fs=qa=0;t<e;){var a=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var o=Zt[t];Zt[t++]=null;var i=Zt[t];if(Zt[t++]=null,l!==null&&o!==null){var c=l.pending;c===null?o.next=o:(o.next=c.next,c.next=o),l.pending=o}i!==0&&Su(a,o,i)}}function Mo(e,t,a,l){Zt[qa++]=e,Zt[qa++]=t,Zt[qa++]=a,Zt[qa++]=l,fs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ms(e,t,a,l){return Mo(e,t,a,l),ko(e)}function ma(e,t){return Mo(e,null,null,t),ko(e)}function Su(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var o=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(o=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,o&&t!==null&&(o=31-Tt(a),e=i.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=a|536870912),i):null}function ko(e){if(50<Pl)throw Pl=0,Tr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function fm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,a,l){return new fm(e,t,a,l)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,t){var a=e.alternate;return a===null?(a=zt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Do(e,t,a,l,o,i){var c=0;if(l=e,typeof e=="function")gs(e)&&(c=1);else if(typeof e=="string")c=bg(e,a,ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=zt(31,a,t,o),e.elementType=J,e.lanes=i,e;case x:return ga(a.children,o,i,t);case y:c=8,o|=24;break;case N:return e=zt(12,a,t,o|2),e.elementType=N,e.lanes=i,e;case C:return e=zt(13,a,t,o),e.elementType=C,e.lanes=i,e;case B:return e=zt(19,a,t,o),e.elementType=B,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:c=10;break e;case O:c=9;break e;case Y:c=11;break e;case R:c=14;break e;case I:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=zt(c,a,t,o),t.elementType=e,t.type=l,t.lanes=i,t}function ga(e,t,a,l){return e=zt(7,e,l,t),e.lanes=a,e}function ys(e,t,a){return e=zt(6,e,null,t),e.lanes=a,e}function Tu(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function vs(e,t,a){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Eu=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var a=Eu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:De(t)},Eu.set(e,t),t)}return{value:e,source:t,stack:De(t)}}var Xa=[],Ja=0,Oo=null,kl=0,Vt=[],Kt=0,Gn=null,rn=1,cn="";function _n(e,t){Xa[Ja++]=kl,Xa[Ja++]=Oo,Oo=e,kl=t}function Au(e,t,a){Vt[Kt++]=rn,Vt[Kt++]=cn,Vt[Kt++]=Gn,Gn=e;var l=rn;e=cn;var o=32-Tt(l)-1;l&=~(1<<o),a+=1;var i=32-Tt(t)+o;if(30<i){var c=o-o%5;i=(l&(1<<c)-1).toString(32),l>>=c,o-=c,rn=1<<32-Tt(t)+o|a<<o|l,cn=i+e}else rn=1<<i|a<<o|l,cn=e}function bs(e){e.return!==null&&(_n(e,1),Au(e,1,0))}function _s(e){for(;e===Oo;)Oo=Xa[--Ja],Xa[Ja]=null,kl=Xa[--Ja],Xa[Ja]=null;for(;e===Gn;)Gn=Vt[--Kt],Vt[Kt]=null,cn=Vt[--Kt],Vt[Kt]=null,rn=Vt[--Kt],Vt[Kt]=null}function Nu(e,t){Vt[Kt++]=rn,Vt[Kt++]=cn,Vt[Kt++]=Gn,rn=t.id,cn=t.overflow,Gn=e}var yt=null,Qe=null,ke=!1,Un=null,$t=!1,xs=Error(u(519));function Ln(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Dl(Qt(t,e)),xs}function Cu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[gt]=e,t[At]=l,a){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(a=0;a<eo.length;a++)Ne(eo[a],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Yc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Ic(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Jp(t.textContent,a)?(l.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),l.onScroll!=null&&Ne("scroll",t),l.onScrollEnd!=null&&Ne("scrollend",t),l.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||Ln(e,!0)}function ju(e){for(yt=e.return;yt;)switch(yt.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:yt=yt.return}}function Za(e){if(e!==yt)return!1;if(!ke)return ju(e),ke=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ur(e.type,e.memoizedProps)),a=!a),a&&Qe&&Ln(e),ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Qe=eh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Qe=eh(e)}else t===27?(t=Qe,ea(e.type)?(e=Xr,Xr=null,Qe=e):Qe=t):Qe=yt?Pt(e.stateNode.nextSibling):null;return!0}function ya(){Qe=yt=null,ke=!1}function Ss(){var e=Un;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),Un=null),e}function Dl(e){Un===null?Un=[e]:Un.push(e)}var ws=ce(null),va=null,xn=null;function Yn(e,t,a){ne(ws,t._currentValue),t._currentValue=a}function Sn(e){e._currentValue=ws.current,se(ws)}function Ts(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Es(e,t,a,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var i=o.dependencies;if(i!==null){var c=o.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=o;for(var S=0;S<t.length;S++)if(p.context===t[S]){i.lanes|=a,p=i.alternate,p!==null&&(p.lanes|=a),Ts(i.return,a,e),l||(c=null);break e}i=p.next}}else if(o.tag===18){if(c=o.return,c===null)throw Error(u(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Ts(c,a,e),c=null}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===e){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}}function Qa(e,t,a,l){e=null;for(var o=t,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var c=o.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var p=o.type;Rt(o.pendingProps.value,c.value)||(e!==null?e.push(p):e=[p])}}else if(o===Me.current){if(c=o.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(oo):e=[oo])}o=o.return}e!==null&&Es(t,e,a,l),t.flags|=262144}function Ro(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){va=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return Mu(va,e)}function zo(e,t){return va===null&&ba(e),Mu(e,t)}function Mu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},xn===null){if(e===null)throw Error(u(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return a}var mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},gm=r.unstable_scheduleCallback,ym=r.unstable_NormalPriority,ot={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function As(){return{controller:new mm,data:new Map,refCount:0}}function Ol(e){e.refCount--,e.refCount===0&&gm(ym,function(){e.controller.abort()})}var Rl=null,Ns=0,Va=0,Ka=null;function vm(e,t){if(Rl===null){var a=Rl=[];Ns=0,Va=Mr(),Ka={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ns++,t.then(ku,ku),t}function ku(){if(--Ns===0&&Rl!==null){Ka!==null&&(Ka.status="fulfilled");var e=Rl;Rl=null,Va=0,Ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),l}var Du=z.S;z.S=function(e,t){mp=ve(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vm(e,t),Du!==null&&Du(e,t)};var _a=ce(null);function Cs(){var e=_a.current;return e!==null?e:Je.pooledCache}function Bo(e,t){t===null?ne(_a,_a.current):ne(_a,t.pool)}function Ou(){var e=Cs();return e===null?null:{parent:ot._currentValue,pool:e}}var $a=Error(u(460)),js=Error(u(474)),Ho=Error(u(542)),Go={then:function(){}};function Ru(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(yn,yn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hu(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hu(e),e}throw Sa=t,$a}}function xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sa=a,$a):a}}var Sa=null;function Bu(){if(Sa===null)throw Error(u(459));var e=Sa;return Sa=null,e}function Hu(e){if(e===$a||e===Ho)throw Error(u(483))}var Wa=null,zl=0;function Uo(e){var t=zl;return zl+=1,Wa===null&&(Wa=[]),zu(Wa,e,t)}function Bl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lo(e,t){throw t.$$typeof===E?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gu(e){function t(D,A){if(e){var H=D.deletions;H===null?(D.deletions=[A],D.flags|=16):H.push(A)}}function a(D,A){if(!e)return null;for(;A!==null;)t(D,A),A=A.sibling;return null}function l(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function o(D,A){return D=bn(D,A),D.index=0,D.sibling=null,D}function i(D,A,H){return D.index=H,e?(H=D.alternate,H!==null?(H=H.index,H<A?(D.flags|=67108866,A):H):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function c(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function p(D,A,H,Q){return A===null||A.tag!==6?(A=ys(H,D.mode,Q),A.return=D,A):(A=o(A,H),A.return=D,A)}function S(D,A,H,Q){var ue=H.type;return ue===x?X(D,A,H.props.children,Q,H.key):A!==null&&(A.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===I&&xa(ue)===A.type)?(A=o(A,H.props),Bl(A,H),A.return=D,A):(A=Do(H.type,H.key,H.props,null,D.mode,Q),Bl(A,H),A.return=D,A)}function G(D,A,H,Q){return A===null||A.tag!==4||A.stateNode.containerInfo!==H.containerInfo||A.stateNode.implementation!==H.implementation?(A=vs(H,D.mode,Q),A.return=D,A):(A=o(A,H.children||[]),A.return=D,A)}function X(D,A,H,Q,ue){return A===null||A.tag!==7?(A=ga(H,D.mode,Q,ue),A.return=D,A):(A=o(A,H),A.return=D,A)}function V(D,A,H){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=ys(""+A,D.mode,H),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return H=Do(A.type,A.key,A.props,null,D.mode,H),Bl(H,A),H.return=D,H;case j:return A=vs(A,D.mode,H),A.return=D,A;case I:return A=xa(A),V(D,A,H)}if(re(A)||P(A))return A=ga(A,D.mode,H,null),A.return=D,A;if(typeof A.then=="function")return V(D,Uo(A),H);if(A.$$typeof===k)return V(D,zo(D,A),H);Lo(D,A)}return null}function L(D,A,H,Q){var ue=A!==null?A.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ue!==null?null:p(D,A,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return H.key===ue?S(D,A,H,Q):null;case j:return H.key===ue?G(D,A,H,Q):null;case I:return H=xa(H),L(D,A,H,Q)}if(re(H)||P(H))return ue!==null?null:X(D,A,H,Q,null);if(typeof H.then=="function")return L(D,A,Uo(H),Q);if(H.$$typeof===k)return L(D,A,zo(D,H),Q);Lo(D,H)}return null}function q(D,A,H,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return D=D.get(H)||null,p(A,D,""+Q,ue);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return D=D.get(Q.key===null?H:Q.key)||null,S(A,D,Q,ue);case j:return D=D.get(Q.key===null?H:Q.key)||null,G(A,D,Q,ue);case I:return Q=xa(Q),q(D,A,H,Q,ue)}if(re(Q)||P(Q))return D=D.get(H)||null,X(A,D,Q,ue,null);if(typeof Q.then=="function")return q(D,A,H,Uo(Q),ue);if(Q.$$typeof===k)return q(D,A,H,zo(A,Q),ue);Lo(A,Q)}return null}function ae(D,A,H,Q){for(var ue=null,Re=null,ie=A,xe=A=0,je=null;ie!==null&&xe<H.length;xe++){ie.index>xe?(je=ie,ie=null):je=ie.sibling;var ze=L(D,ie,H[xe],Q);if(ze===null){ie===null&&(ie=je);break}e&&ie&&ze.alternate===null&&t(D,ie),A=i(ze,A,xe),Re===null?ue=ze:Re.sibling=ze,Re=ze,ie=je}if(xe===H.length)return a(D,ie),ke&&_n(D,xe),ue;if(ie===null){for(;xe<H.length;xe++)ie=V(D,H[xe],Q),ie!==null&&(A=i(ie,A,xe),Re===null?ue=ie:Re.sibling=ie,Re=ie);return ke&&_n(D,xe),ue}for(ie=l(ie);xe<H.length;xe++)je=q(ie,D,xe,H[xe],Q),je!==null&&(e&&je.alternate!==null&&ie.delete(je.key===null?xe:je.key),A=i(je,A,xe),Re===null?ue=je:Re.sibling=je,Re=je);return e&&ie.forEach(function(oa){return t(D,oa)}),ke&&_n(D,xe),ue}function he(D,A,H,Q){if(H==null)throw Error(u(151));for(var ue=null,Re=null,ie=A,xe=A=0,je=null,ze=H.next();ie!==null&&!ze.done;xe++,ze=H.next()){ie.index>xe?(je=ie,ie=null):je=ie.sibling;var oa=L(D,ie,ze.value,Q);if(oa===null){ie===null&&(ie=je);break}e&&ie&&oa.alternate===null&&t(D,ie),A=i(oa,A,xe),Re===null?ue=oa:Re.sibling=oa,Re=oa,ie=je}if(ze.done)return a(D,ie),ke&&_n(D,xe),ue;if(ie===null){for(;!ze.done;xe++,ze=H.next())ze=V(D,ze.value,Q),ze!==null&&(A=i(ze,A,xe),Re===null?ue=ze:Re.sibling=ze,Re=ze);return ke&&_n(D,xe),ue}for(ie=l(ie);!ze.done;xe++,ze=H.next())ze=q(ie,D,xe,ze.value,Q),ze!==null&&(e&&ze.alternate!==null&&ie.delete(ze.key===null?xe:ze.key),A=i(ze,A,xe),Re===null?ue=ze:Re.sibling=ze,Re=ze);return e&&ie.forEach(function(Mg){return t(D,Mg)}),ke&&_n(D,xe),ue}function Xe(D,A,H,Q){if(typeof H=="object"&&H!==null&&H.type===x&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case M:e:{for(var ue=H.key;A!==null;){if(A.key===ue){if(ue=H.type,ue===x){if(A.tag===7){a(D,A.sibling),Q=o(A,H.props.children),Q.return=D,D=Q;break e}}else if(A.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===I&&xa(ue)===A.type){a(D,A.sibling),Q=o(A,H.props),Bl(Q,H),Q.return=D,D=Q;break e}a(D,A);break}else t(D,A);A=A.sibling}H.type===x?(Q=ga(H.props.children,D.mode,Q,H.key),Q.return=D,D=Q):(Q=Do(H.type,H.key,H.props,null,D.mode,Q),Bl(Q,H),Q.return=D,D=Q)}return c(D);case j:e:{for(ue=H.key;A!==null;){if(A.key===ue)if(A.tag===4&&A.stateNode.containerInfo===H.containerInfo&&A.stateNode.implementation===H.implementation){a(D,A.sibling),Q=o(A,H.children||[]),Q.return=D,D=Q;break e}else{a(D,A);break}else t(D,A);A=A.sibling}Q=vs(H,D.mode,Q),Q.return=D,D=Q}return c(D);case I:return H=xa(H),Xe(D,A,H,Q)}if(re(H))return ae(D,A,H,Q);if(P(H)){if(ue=P(H),typeof ue!="function")throw Error(u(150));return H=ue.call(H),he(D,A,H,Q)}if(typeof H.then=="function")return Xe(D,A,Uo(H),Q);if(H.$$typeof===k)return Xe(D,A,zo(D,H),Q);Lo(D,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,A!==null&&A.tag===6?(a(D,A.sibling),Q=o(A,H),Q.return=D,D=Q):(a(D,A),Q=ys(H,D.mode,Q),Q.return=D,D=Q),c(D)):a(D,A)}return function(D,A,H,Q){try{zl=0;var ue=Xe(D,A,H,Q);return Wa=null,ue}catch(ie){if(ie===$a||ie===Ho)throw ie;var Re=zt(29,ie,null,D.mode);return Re.lanes=Q,Re.return=D,Re}finally{}}}var wa=Gu(!0),Uu=Gu(!1),qn=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ks(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function In(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=ko(e),Su(e,null,a),t}return Mo(e,l,t,a),ko(e)}function Hl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Mc(e,a)}}function Ds(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?o=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Os=!1;function Gl(){if(Os){var e=Ka;if(e!==null)throw e}}function Ul(e,t,a,l){Os=!1;var o=e.updateQueue;qn=!1;var i=o.firstBaseUpdate,c=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var S=p,G=S.next;S.next=null,c===null?i=G:c.next=G,c=S;var X=e.alternate;X!==null&&(X=X.updateQueue,p=X.lastBaseUpdate,p!==c&&(p===null?X.firstBaseUpdate=G:p.next=G,X.lastBaseUpdate=S))}if(i!==null){var V=o.baseState;c=0,X=G=S=null,p=i;do{var L=p.lane&-536870913,q=L!==p.lane;if(q?(Ce&L)===L:(l&L)===L){L!==0&&L===Va&&(Os=!0),X!==null&&(X=X.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ae=e,he=p;L=t;var Xe=a;switch(he.tag){case 1:if(ae=he.payload,typeof ae=="function"){V=ae.call(Xe,V,L);break e}V=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=he.payload,L=typeof ae=="function"?ae.call(Xe,V,L):ae,L==null)break e;V=_({},V,L);break e;case 2:qn=!0}}L=p.callback,L!==null&&(e.flags|=64,q&&(e.flags|=8192),q=o.callbacks,q===null?o.callbacks=[L]:q.push(L))}else q={lane:L,tag:p.tag,payload:p.payload,callback:p.callback,next:null},X===null?(G=X=q,S=V):X=X.next=q,c|=L;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;q=p,p=q.next,q.next=null,o.lastBaseUpdate=q,o.shared.pending=null}}while(!0);X===null&&(S=V),o.baseState=S,o.firstBaseUpdate=G,o.lastBaseUpdate=X,i===null&&(o.shared.lanes=0),Kn|=c,e.lanes=c,e.memoizedState=V}}function Lu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lu(a[e],t)}var Pa=ce(null),Yo=ce(0);function qu(e,t){e=kn,ne(Yo,e),ne(Pa,t),kn=e|t.baseLanes}function Rs(){ne(Yo,kn),ne(Pa,Pa.current)}function zs(){kn=Yo.current,se(Pa),se(Yo)}var Bt=ce(null),Wt=null;function Jn(e){var t=e.alternate;ne(tt,tt.current&1),ne(Bt,e),Wt===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Wt=e)}function Bs(e){ne(tt,tt.current),ne(Bt,e),Wt===null&&(Wt=e)}function Iu(e){e.tag===22?(ne(tt,tt.current),ne(Bt,e),Wt===null&&(Wt=e)):Zn()}function Zn(){ne(tt,tt.current),ne(Bt,Bt.current)}function Ht(e){se(Bt),Wt===e&&(Wt=null),se(tt)}var tt=ce(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qr(a)||Ir(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,_e=null,qe=null,it=null,Io=!1,Fa=!1,Ta=!1,Xo=0,Ll=0,el=null,_m=0;function Pe(){throw Error(u(321))}function Hs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Rt(e[a],t[a]))return!1;return!0}function Gs(e,t,a,l,o,i){return wn=i,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Ad:Fs,Ta=!1,i=a(l,o),Ta=!1,Fa&&(i=Ju(t,a,l,o)),Xu(e),i}function Xu(e){z.H=Il;var t=qe!==null&&qe.next!==null;if(wn=0,it=qe=_e=null,Io=!1,Ll=0,el=null,t)throw Error(u(300));e===null||st||(e=e.dependencies,e!==null&&Ro(e)&&(st=!0))}function Ju(e,t,a,l){_e=e;var o=0;do{if(Fa&&(el=null),Ll=0,Fa=!1,25<=o)throw Error(u(301));if(o+=1,it=qe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Nd,i=t(a,l)}while(Fa);return i}function xm(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Yl(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(_e.flags|=1024),t}function Us(){var e=Xo!==0;return Xo=0,e}function Ls(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ys(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}wn=0,it=qe=_e=null,Fa=!1,Ll=Xo=0,el=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?_e.memoizedState=it=e:it=it.next=e,it}function nt(){if(qe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=it===null?_e.memoizedState:it.next;if(t!==null)it=t,qe=e;else{if(e===null)throw _e.alternate===null?Error(u(467)):Error(u(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},it===null?_e.memoizedState=it=e:it=it.next=e}return it}function Jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yl(e){var t=Ll;return Ll+=1,el===null&&(el=[]),e=zu(el,e,t),t=_e,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Ad:Fs),e}function Zo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yl(e);if(e.$$typeof===k)return vt(e)}throw Error(u(438,String(e)))}function qs(e){var t=null,a=_e.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Jo(),_e.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Z;return t.index++,a}function Tn(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=nt();return Is(t,qe,e)}function Is(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var o=e.baseQueue,i=l.pending;if(i!==null){if(o!==null){var c=o.next;o.next=i.next,i.next=c}t.baseQueue=o=i,l.pending=null}if(i=e.baseState,o===null)e.memoizedState=i;else{t=o.next;var p=c=null,S=null,G=t,X=!1;do{var V=G.lane&-536870913;if(V!==G.lane?(Ce&V)===V:(wn&V)===V){var L=G.revertLane;if(L===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),V===Va&&(X=!0);else if((wn&L)===L){G=G.next,L===Va&&(X=!0);continue}else V={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},S===null?(p=S=V,c=i):S=S.next=V,_e.lanes|=L,Kn|=L;V=G.action,Ta&&a(i,V),i=G.hasEagerState?G.eagerState:a(i,V)}else L={lane:V,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},S===null?(p=S=L,c=i):S=S.next=L,_e.lanes|=V,Kn|=V;G=G.next}while(G!==null&&G!==t);if(S===null?c=i:S.next=p,!Rt(i,e.memoizedState)&&(st=!0,X&&(a=Ka,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=S,l.lastRenderedState=i}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xs(e){var t=nt(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var c=o=o.next;do i=e(i,c.action),c=c.next;while(c!==o);Rt(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Zu(e,t,a){var l=_e,o=nt(),i=ke;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!Rt((qe||o).memoizedState,a);if(c&&(o.memoizedState=a,st=!0),o=o.queue,Qs(Ku.bind(null,l,o,e),[e]),o.getSnapshot!==t||c||it!==null&&it.memoizedState.tag&1){if(l.flags|=2048,tl(9,{destroy:void 0},Vu.bind(null,l,o,a,t),null),Je===null)throw Error(u(349));i||(wn&127)!==0||Qu(l,t,a)}return a}function Qu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=_e.updateQueue,t===null?(t=Jo(),_e.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Vu(e,t,a,l){t.value=a,t.getSnapshot=l,$u(t)&&Wu(e)}function Ku(e,t,a){return a(function(){$u(t)&&Wu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Rt(e,a)}catch{return!0}}function Wu(e){var t=ma(e,2);t!==null&&Dt(t,e,2)}function Js(e){var t=Et();if(typeof e=="function"){var a=e;if(e=a(),Ta){on(!0);try{a()}finally{on(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Pu(e,t,a,l){return e.baseState=a,Is(e,qe,typeof l=="function"?l:Tn)}function Sm(e,t,a,l,o){if($o(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Fu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Fu(e,t){var a=t.action,l=t.payload,o=e.state;if(t.isTransition){var i=z.T,c={};z.T=c;try{var p=a(o,l),S=z.S;S!==null&&S(c,p),ed(e,t,p)}catch(G){Zs(e,t,G)}finally{i!==null&&c.types!==null&&(i.types=c.types),z.T=i}}else try{i=a(o,l),ed(e,t,i)}catch(G){Zs(e,t,G)}}function ed(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){td(e,t,l)},function(l){return Zs(e,t,l)}):td(e,t,a)}function td(e,t,a){t.status="fulfilled",t.value=a,nd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Fu(e,a)))}function Zs(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,nd(t),t=t.next;while(t!==l)}e.action=null}function nd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ad(e,t){return t}function ld(e,t){if(ke){var a=Je.formState;if(a!==null){e:{var l=_e;if(ke){if(Qe){t:{for(var o=Qe,i=$t;o.nodeType!==8;){if(!i){o=null;break t}if(o=Pt(o.nextSibling),o===null){o=null;break t}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){Qe=Pt(o.nextSibling),l=o.data==="F!";break e}}Ln(l)}l=!1}l&&(t=a[0])}}return a=Et(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ad,lastRenderedState:t},a.queue=l,a=wd.bind(null,_e,l),l.dispatch=a,l=Js(!1),i=Ps.bind(null,_e,!1,l.queue),l=Et(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,a=Sm.bind(null,_e,o,i,a),o.dispatch=a,l.memoizedState=e,[t,a,!1]}function od(e){var t=nt();return id(t,qe,e)}function id(e,t,a){if(t=Is(e,t,ad)[0],e=Qo(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Yl(t)}catch(c){throw c===$a?Ho:c}else l=t;t=nt();var o=t.queue,i=o.dispatch;return a!==t.memoizedState&&(_e.flags|=2048,tl(9,{destroy:void 0},wm.bind(null,o,a),null)),[l,i,e]}function wm(e,t){e.action=t}function sd(e){var t=nt(),a=qe;if(a!==null)return id(t,a,e);nt(),t=t.memoizedState,a=nt();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function tl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=_e.updateQueue,t===null&&(t=Jo(),_e.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function rd(){return nt().memoizedState}function Vo(e,t,a,l){var o=Et();_e.flags|=e,o.memoizedState=tl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ko(e,t,a,l){var o=nt();l=l===void 0?null:l;var i=o.memoizedState.inst;qe!==null&&l!==null&&Hs(l,qe.memoizedState.deps)?o.memoizedState=tl(t,i,a,l):(_e.flags|=e,o.memoizedState=tl(1|t,i,a,l))}function cd(e,t){Vo(8390656,8,e,t)}function Qs(e,t){Ko(2048,8,e,t)}function Tm(e){_e.flags|=4;var t=_e.updateQueue;if(t===null)t=Jo(),_e.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ud(e){var t=nt().memoizedState;return Tm({ref:t,nextImpl:e}),function(){if((Be&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function dd(e,t){return Ko(4,2,e,t)}function pd(e,t){return Ko(4,4,e,t)}function hd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fd(e,t,a){a=a!=null?a.concat([e]):null,Ko(4,4,hd.bind(null,t,e),a)}function Vs(){}function md(e,t){var a=nt();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Hs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function gd(e,t){var a=nt();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Hs(t,l[1]))return l[0];if(l=e(),Ta){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,t],l}function Ks(e,t,a){return a===void 0||(wn&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=yp(),_e.lanes|=e,Kn|=e,a)}function yd(e,t,a,l){return Rt(a,t)?a:Pa.current!==null?(e=Ks(e,a,l),Rt(e,t)||(st=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(Ce&261930)===0?(st=!0,e.memoizedState=a):(e=yp(),_e.lanes|=e,Kn|=e,t)}function vd(e,t,a,l,o){var i=U.p;U.p=i!==0&&8>i?i:8;var c=z.T,p={};z.T=p,Ps(e,!1,t,a);try{var S=o(),G=z.S;if(G!==null&&G(p,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var X=bm(S,l);ql(e,t,X,Lt(e))}else ql(e,t,l,Lt(e))}catch(V){ql(e,t,{then:function(){},status:"rejected",reason:V},Lt())}finally{U.p=i,c!==null&&p.types!==null&&(c.types=p.types),z.T=c}}function Em(){}function $s(e,t,a,l){if(e.tag!==5)throw Error(u(476));var o=bd(e).queue;vd(e,o,t,$,a===null?Em:function(){return _d(e),a(l)})}function bd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _d(e){var t=bd(e);t.next===null&&(t=e.alternate.memoizedState),ql(e,t.next.queue,{},Lt())}function Ws(){return vt(oo)}function xd(){return nt().memoizedState}function Sd(){return nt().memoizedState}function Am(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Lt();e=In(a);var l=Xn(t,e,a);l!==null&&(Dt(l,t,a),Hl(l,t,a)),t={cache:As()},e.payload=t;return}t=t.return}}function Nm(e,t,a){var l=Lt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$o(e)?Td(t,a):(a=ms(e,t,a,l),a!==null&&(Dt(a,e,l),Ed(a,t,l)))}function wd(e,t,a){var l=Lt();ql(e,t,a,l)}function ql(e,t,a,l){var o={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($o(e))Td(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,p=i(c,a);if(o.hasEagerState=!0,o.eagerState=p,Rt(p,c))return Mo(e,t,o,0),Je===null&&jo(),!1}catch{}finally{}if(a=ms(e,t,o,l),a!==null)return Dt(a,e,l),Ed(a,t,l),!0}return!1}function Ps(e,t,a,l){if(l={lane:2,revertLane:Mr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},$o(e)){if(t)throw Error(u(479))}else t=ms(e,a,l,2),t!==null&&Dt(t,e,2)}function $o(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Td(e,t){Fa=Io=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ed(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Mc(e,a)}}var Il={readContext:vt,use:Zo,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};Il.useEffectEvent=Pe;var Ad={readContext:vt,use:Zo,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:cd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Vo(4194308,4,hd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){Vo(4,2,e,t)},useMemo:function(e,t){var a=Et();t=t===void 0?null:t;var l=e();if(Ta){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Et();if(a!==void 0){var o=a(t);if(Ta){on(!0);try{a(t)}finally{on(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Nm.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Js(e);var t=e.queue,a=wd.bind(null,_e,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Vs,useDeferredValue:function(e,t){var a=Et();return Ks(a,e,t)},useTransition:function(){var e=Js(!1);return e=vd.bind(null,_e,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=_e,o=Et();if(ke){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Je===null)throw Error(u(349));(Ce&127)!==0||Qu(l,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,cd(Ku.bind(null,l,i,e),[e]),l.flags|=2048,tl(9,{destroy:void 0},Vu.bind(null,l,i,a,t),null),a},useId:function(){var e=Et(),t=Je.identifierPrefix;if(ke){var a=cn,l=rn;a=(l&~(1<<32-Tt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Xo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=_m++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ws,useFormState:ld,useActionState:ld,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ps.bind(null,_e,!0,a),a.dispatch=t,[e,t]},useMemoCache:qs,useCacheRefresh:function(){return Et().memoizedState=Am.bind(null,_e)},useEffectEvent:function(e){var t=Et(),a={impl:e};return t.memoizedState=a,function(){if((Be&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Fs={readContext:vt,use:Zo,useCallback:md,useContext:vt,useEffect:Qs,useImperativeHandle:fd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:gd,useReducer:Qo,useRef:rd,useState:function(){return Qo(Tn)},useDebugValue:Vs,useDeferredValue:function(e,t){var a=nt();return yd(a,qe.memoizedState,e,t)},useTransition:function(){var e=Qo(Tn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:Zu,useId:xd,useHostTransitionStatus:Ws,useFormState:od,useActionState:od,useOptimistic:function(e,t){var a=nt();return Pu(a,qe,e,t)},useMemoCache:qs,useCacheRefresh:Sd};Fs.useEffectEvent=ud;var Nd={readContext:vt,use:Zo,useCallback:md,useContext:vt,useEffect:Qs,useImperativeHandle:fd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:gd,useReducer:Xs,useRef:rd,useState:function(){return Xs(Tn)},useDebugValue:Vs,useDeferredValue:function(e,t){var a=nt();return qe===null?Ks(a,e,t):yd(a,qe.memoizedState,e,t)},useTransition:function(){var e=Xs(Tn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:Zu,useId:xd,useHostTransitionStatus:Ws,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var a=nt();return qe!==null?Pu(a,qe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qs,useCacheRefresh:Sd};Nd.useEffectEvent=ud;function er(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Lt(),o=In(l);o.payload=t,a!=null&&(o.callback=a),t=Xn(e,o,l),t!==null&&(Dt(t,e,l),Hl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Lt(),o=In(l);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=Xn(e,o,l),t!==null&&(Dt(t,e,l),Hl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Lt(),l=In(a);l.tag=2,t!=null&&(l.callback=t),t=Xn(e,l,a),t!==null&&(Dt(t,e,a),Hl(t,e,a))}};function Cd(e,t,a,l,o,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!jl(a,l)||!jl(o,i):!0}function jd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&tr.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function Md(e){Co(e)}function kd(e){console.error(e)}function Dd(e){Co(e)}function Wo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Od(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function nr(e,t,a){return a=In(a),a.tag=3,a.payload={element:null},a.callback=function(){Wo(e,t)},a}function Rd(e){return e=In(e),e.tag=3,e}function zd(e,t,a,l){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var i=l.value;e.payload=function(){return o(i)},e.callback=function(){Od(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Od(t,a,l),typeof o!="function"&&($n===null?$n=new Set([this]):$n.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function Cm(e,t,a,l,o){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Qa(t,a,o,!0),a=Bt.current,a!==null){switch(a.tag){case 31:case 13:return Wt===null?ci():a.alternate===null&&Fe===0&&(Fe=3),a.flags&=-257,a.flags|=65536,a.lanes=o,l===Go?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Nr(e,l,o)),!1;case 22:return a.flags|=65536,l===Go?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Nr(e,l,o)),!1}throw Error(u(435,a.tag))}return Nr(e,l,o),ci(),!1}if(ke)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==xs&&(e=Error(u(422),{cause:l}),Dl(Qt(e,a)))):(l!==xs&&(t=Error(u(423),{cause:l}),Dl(Qt(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=Qt(l,a),o=nr(e.stateNode,l,o),Ds(e,o),Fe!==4&&(Fe=2)),!1;var i=Error(u(520),{cause:l});if(i=Qt(i,a),Wl===null?Wl=[i]:Wl.push(i),Fe!==4&&(Fe=2),t===null)return!0;l=Qt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=nr(a.stateNode,l,e),Ds(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))))return a.flags|=65536,o&=-o,a.lanes|=o,o=Rd(o),zd(o,e,a,l),Ds(a,o),!1}a=a.return}while(a!==null);return!1}var ar=Error(u(461)),st=!1;function bt(e,t,a,l){t.child=e===null?Uu(t,null,a,l):wa(t,e.child,a,l)}function Bd(e,t,a,l,o){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var p in l)p!=="ref"&&(c[p]=l[p])}else c=l;return ba(t),l=Gs(e,t,a,c,i,o),p=Us(),e!==null&&!st?(Ls(e,t,o),En(e,t,o)):(ke&&p&&bs(t),t.flags|=1,bt(e,t,l,o),t.child)}function Hd(e,t,a,l,o){if(e===null){var i=a.type;return typeof i=="function"&&!gs(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Gd(e,t,i,l,o)):(e=Do(a.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!dr(e,o)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:jl,a(c,l)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=bn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,a,l,o){if(e!==null){var i=e.memoizedProps;if(jl(i,l)&&e.ref===t.ref)if(st=!1,t.pendingProps=l=i,dr(e,o))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,En(e,t,o)}return lr(e,t,a,l,o)}function Ud(e,t,a,l){var o=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~i}else l=0,t.child=null;return Ld(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bo(t,i!==null?i.cachePool:null),i!==null?qu(t,i):Rs(),Iu(t);else return l=t.lanes=536870912,Ld(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Bo(t,i.cachePool),qu(t,i),Zn(),t.memoizedState=null):(e!==null&&Bo(t,null),Rs(),Zn());return bt(e,t,o,a),t.child}function Xl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ld(e,t,a,l,o){var i=Cs();return i=i===null?null:{parent:ot._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Bo(t,null),Rs(),Iu(t),e!==null&&Qa(e,t,l,!0),t.childLanes=o,null}function Po(e,t){return t=ei({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yd(e,t,a){return wa(t,e.child,null,a),e=Po(t,t.pendingProps),e.flags|=2,Ht(t),t.memoizedState=null,e}function jm(e,t,a){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ke){if(l.mode==="hidden")return e=Po(t,l),t.lanes=536870912,Xl(null,e);if(Bs(t),(e=Qe)?(e=Fp(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:rn,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},a=Tu(e),a.return=t,t.child=a,yt=t,Qe=null)):e=null,e===null)throw Ln(t);return t.lanes=536870912,null}return Po(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Bs(t),o)if(t.flags&256)t.flags&=-257,t=Yd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(st||Qa(e,t,a,!1),o=(a&e.childLanes)!==0,st||o){if(l=Je,l!==null&&(c=kc(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,ma(e,c),Dt(l,e,c),ar;ci(),t=Yd(e,t,a)}else e=i.treeContext,Qe=Pt(c.nextSibling),yt=t,ke=!0,Un=null,$t=!1,e!==null&&Nu(t,e),t=Po(t,l),t.flags|=4096;return t}return e=bn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function lr(e,t,a,l,o){return ba(t),a=Gs(e,t,a,l,void 0,o),l=Us(),e!==null&&!st?(Ls(e,t,o),En(e,t,o)):(ke&&l&&bs(t),t.flags|=1,bt(e,t,a,o),t.child)}function qd(e,t,a,l,o,i){return ba(t),t.updateQueue=null,a=Ju(t,l,a,o),Xu(e),l=Us(),e!==null&&!st?(Ls(e,t,i),En(e,t,i)):(ke&&l&&bs(t),t.flags|=1,bt(e,t,a,i),t.child)}function Id(e,t,a,l,o){if(ba(t),t.stateNode===null){var i=Ia,c=a.contextType;typeof c=="object"&&c!==null&&(i=vt(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ms(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?vt(c):Ia,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(er(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&tr.enqueueReplaceState(i,i.state,null),Ul(t,l,i,o),Gl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var p=t.memoizedProps,S=Ea(a,p);i.props=S;var G=i.context,X=a.contextType;c=Ia,typeof X=="object"&&X!==null&&(c=vt(X));var V=a.getDerivedStateFromProps;X=typeof V=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,X||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||G!==c)&&jd(t,i,l,c),qn=!1;var L=t.memoizedState;i.state=L,Ul(t,l,i,o),Gl(),G=t.memoizedState,p||L!==G||qn?(typeof V=="function"&&(er(t,a,V,l),G=t.memoizedState),(S=qn||Cd(t,a,S,l,L,G,c))?(X||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=G),i.props=l,i.state=G,i.context=c,l=S):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,ks(e,t),c=t.memoizedProps,X=Ea(a,c),i.props=X,V=t.pendingProps,L=i.context,G=a.contextType,S=Ia,typeof G=="object"&&G!==null&&(S=vt(G)),p=a.getDerivedStateFromProps,(G=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==V||L!==S)&&jd(t,i,l,S),qn=!1,L=t.memoizedState,i.state=L,Ul(t,l,i,o),Gl();var q=t.memoizedState;c!==V||L!==q||qn||e!==null&&e.dependencies!==null&&Ro(e.dependencies)?(typeof p=="function"&&(er(t,a,p,l),q=t.memoizedState),(X=qn||Cd(t,a,X,l,L,q,S)||e!==null&&e.dependencies!==null&&Ro(e.dependencies))?(G||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,q,S),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,q,S)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=q),i.props=l,i.state=q,i.context=S,l=X):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Fo(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=wa(t,e.child,null,o),t.child=wa(t,null,a,o)):bt(e,t,a,o),t.memoizedState=i.state,e=t.child):e=En(e,t,o),e}function Xd(e,t,a,l){return ya(),t.flags|=256,bt(e,t,a,l),t.child}var or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ir(e){return{baseLanes:e,cachePool:Ou()}}function sr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ut),e}function Jd(e,t,a){var l=t.pendingProps,o=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),c&&(o=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ke){if(o?Jn(t):Zn(),(e=Qe)?(e=Fp(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:rn,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},a=Tu(e),a.return=t,t.child=a,yt=t,Qe=null)):e=null,e===null)throw Ln(t);return Ir(e)?t.lanes=32:t.lanes=536870912,null}var p=l.children;return l=l.fallback,o?(Zn(),o=t.mode,p=ei({mode:"hidden",children:p},o),l=ga(l,o,a,null),p.return=t,l.return=t,p.sibling=l,t.child=p,l=t.child,l.memoizedState=ir(a),l.childLanes=sr(e,c,a),t.memoizedState=or,Xl(null,l)):(Jn(t),rr(t,p))}var S=e.memoizedState;if(S!==null&&(p=S.dehydrated,p!==null)){if(i)t.flags&256?(Jn(t),t.flags&=-257,t=cr(e,t,a)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),p=l.fallback,o=t.mode,l=ei({mode:"visible",children:l.children},o),p=ga(p,o,a,null),p.flags|=2,l.return=t,p.return=t,l.sibling=p,t.child=l,wa(t,e.child,null,a),l=t.child,l.memoizedState=ir(a),l.childLanes=sr(e,c,a),t.memoizedState=or,t=Xl(null,l));else if(Jn(t),Ir(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var G=c.dgst;c=G,l=Error(u(419)),l.stack="",l.digest=c,Dl({value:l,source:null,stack:null}),t=cr(e,t,a)}else if(st||Qa(e,t,a,!1),c=(a&e.childLanes)!==0,st||c){if(c=Je,c!==null&&(l=kc(c,a),l!==0&&l!==S.retryLane))throw S.retryLane=l,ma(e,l),Dt(c,e,l),ar;qr(p)||ci(),t=cr(e,t,a)}else qr(p)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Qe=Pt(p.nextSibling),yt=t,ke=!0,Un=null,$t=!1,e!==null&&Nu(t,e),t=rr(t,l.children),t.flags|=4096);return t}return o?(Zn(),p=l.fallback,o=t.mode,S=e.child,G=S.sibling,l=bn(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,G!==null?p=bn(G,p):(p=ga(p,o,a,null),p.flags|=2),p.return=t,l.return=t,l.sibling=p,t.child=l,Xl(null,l),l=t.child,p=e.child.memoizedState,p===null?p=ir(a):(o=p.cachePool,o!==null?(S=ot._currentValue,o=o.parent!==S?{parent:S,pool:S}:o):o=Ou(),p={baseLanes:p.baseLanes|a,cachePool:o}),l.memoizedState=p,l.childLanes=sr(e,c,a),t.memoizedState=or,Xl(e.child,l)):(Jn(t),a=e.child,e=a.sibling,a=bn(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function rr(e,t){return t=ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ei(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function cr(e,t,a){return wa(t,e.child,null,a),e=rr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ts(e.return,t,a)}function ur(e,t,a,l,o,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:o,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=o,c.treeForkCount=i)}function Qd(e,t,a){var l=t.pendingProps,o=l.revealOrder,i=l.tail;l=l.children;var c=tt.current,p=(c&2)!==0;if(p?(c=c&1|2,t.flags|=128):c&=1,ne(tt,c),bt(e,t,l,a),l=ke?kl:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,a,t);else if(e.tag===19)Zd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&qo(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),ur(t,!1,o,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&qo(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}ur(t,!0,a,null,i,l);break;case"together":ur(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function En(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Qa(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=bn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=bn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function dr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ro(e)))}function Mm(e,t,a){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),Yn(t,ot,e.memoizedState.cache),ya();break;case 27:case 5:Oe(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bs(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Jd(e,t,a):(Jn(t),e=En(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var o=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Qa(e,t,a,!1),l=(a&t.childLanes)!==0),o){if(l)return Qd(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(tt,tt.current),l)break;return null;case 22:return t.lanes=0,Ud(e,t,a,t.pendingProps);case 24:Yn(t,ot,e.memoizedState.cache)}return En(e,t,a)}function Vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!dr(e,a)&&(t.flags&128)===0)return st=!1,Mm(e,t,a);st=(e.flags&131072)!==0}else st=!1,ke&&(t.flags&1048576)!==0&&Au(t,kl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=xa(t.elementType),t.type=e,typeof e=="function")gs(e)?(l=Ea(e,l),t.tag=1,t=Id(null,t,e,l,a)):(t.tag=0,t=lr(null,t,e,l,a));else{if(e!=null){var o=e.$$typeof;if(o===Y){t.tag=11,t=Bd(null,t,e,l,a);break e}else if(o===R){t.tag=14,t=Hd(null,t,e,l,a);break e}}throw t=te(e)||e,Error(u(306,t,""))}}return t;case 0:return lr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,o=Ea(l,t.pendingProps),Id(e,t,l,o,a);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;o=i.element,ks(e,t),Ul(t,l,null,a);var c=t.memoizedState;if(l=c.cache,Yn(t,ot,l),l!==i.cache&&Es(t,[ot],a,!0),Gl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Xd(e,t,l,a);break e}else if(l!==o){o=Qt(Error(u(424)),t),Dl(o),t=Xd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=Pt(e.firstChild),yt=t,ke=!0,Un=null,$t=!0,a=Uu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ya(),l===o){t=En(e,t,a);break e}bt(e,t,l,a)}t=t.child}return t;case 26:return Fo(e,t),e===null?(a=oh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ke||(a=t.type,e=t.pendingProps,l=gi(me.current).createElement(a),l[gt]=t,l[At]=e,_t(l,a,e),ht(l),t.stateNode=l):t.memoizedState=oh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&ke&&(l=t.stateNode=nh(t.type,t.pendingProps,me.current),yt=t,$t=!0,o=Qe,ea(t.type)?(Xr=o,Qe=Pt(l.firstChild)):Qe=o),bt(e,t,t.pendingProps.children,a),Fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ke&&((o=l=Qe)&&(l=ig(l,t.type,t.pendingProps,$t),l!==null?(t.stateNode=l,yt=t,Qe=Pt(l.firstChild),$t=!1,o=!0):o=!1),o||Ln(t)),Oe(t),o=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Ur(o,i)?l=null:c!==null&&Ur(o,c)&&(t.flags|=32),t.memoizedState!==null&&(o=Gs(e,t,xm,null,null,a),oo._currentValue=o),Fo(e,t),bt(e,t,l,a),t.child;case 6:return e===null&&ke&&((e=a=Qe)&&(a=sg(a,t.pendingProps,$t),a!==null?(t.stateNode=a,yt=t,Qe=null,e=!0):e=!1),e||Ln(t)),null;case 13:return Jd(e,t,a);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=wa(t,null,l,a):bt(e,t,l,a),t.child;case 11:return Bd(e,t,t.type,t.pendingProps,a);case 7:return bt(e,t,t.pendingProps,a),t.child;case 8:return bt(e,t,t.pendingProps.children,a),t.child;case 12:return bt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Yn(t,t.type,l.value),bt(e,t,l.children,a),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,ba(t),o=vt(o),l=l(o),t.flags|=1,bt(e,t,l,a),t.child;case 14:return Hd(e,t,t.type,t.pendingProps,a);case 15:return Gd(e,t,t.type,t.pendingProps,a);case 19:return Qd(e,t,a);case 31:return jm(e,t,a);case 22:return Ud(e,t,a,t.pendingProps);case 24:return ba(t),l=vt(ot),e===null?(o=Cs(),o===null&&(o=Je,i=As(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=a),o=i),t.memoizedState={parent:l,cache:o},Ms(t),Yn(t,ot,o)):((e.lanes&a)!==0&&(ks(e,t),Ul(t,null,null,a),Gl()),o=e.memoizedState,i=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Yn(t,ot,l)):(l=i.cache,Yn(t,ot,l),l!==o.cache&&Es(t,[ot],a,!0))),bt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function An(e){e.flags|=4}function pr(e,t,a,l,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(xp())e.flags|=8192;else throw Sa=Go,js}else e.flags&=-16777217}function Kd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!uh(t))if(xp())e.flags|=8192;else throw Sa=Go,js}function ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Cc():536870912,e.lanes|=t,ol|=t)}function Jl(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function km(e,t,a){var l=t.pendingProps;switch(_s(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Sn(ot),Se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Za(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ss())),Ve(t),null;case 26:var o=t.type,i=t.memoizedState;return e===null?(An(t),i!==null?(Ve(t),Kd(t,i)):(Ve(t),pr(t,o,null,l,a))):i?i!==e.memoizedState?(An(t),Ve(t),Kd(t,i)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&An(t),Ve(t),pr(t,o,e,l,a)),null;case 27:if(oe(t),a=me.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}e=ge.current,Za(t)?Cu(t):(e=nh(o,l,a),t.stateNode=e,An(t))}return Ve(t),null;case 5:if(oe(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}if(i=ge.current,Za(t))Cu(t);else{var c=gi(me.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(o,{is:l.is}):c.createElement(o)}}i[gt]=t,i[At]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(_t(i,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&An(t)}}return Ve(t),pr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=me.current,Za(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,o=yt,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[gt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Jp(e.nodeValue,a)),e||Ln(t,!0)}else e=gi(e).createTextNode(l),e[gt]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Za(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[gt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=Ss(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ht(t),t):(Ht(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ve(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Za(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[gt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else o=Ss(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Ht(t),t):(Ht(t),null)}return Ht(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==o&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ti(t,t.updateQueue),Ve(t),null);case 4:return Se(),e===null&&Rr(t.stateNode.containerInfo),Ve(t),null;case 10:return Sn(t.type),Ve(t),null;case 19:if(se(tt),l=t.memoizedState,l===null)return Ve(t),null;if(o=(t.flags&128)!==0,i=l.rendering,i===null)if(o)Jl(l,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=qo(e),i!==null){for(t.flags|=128,Jl(l,!1),e=i.updateQueue,t.updateQueue=e,ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wu(a,e),a=a.sibling;return ne(tt,tt.current&1|2),ke&&_n(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ve()>ii&&(t.flags|=128,o=!0,Jl(l,!1),t.lanes=4194304)}else{if(!o)if(e=qo(i),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,ti(t,e),Jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ke)return Ve(t),null}else 2*ve()-l.renderingStartTime>ii&&a!==536870912&&(t.flags|=128,o=!0,Jl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ve(),e.sibling=null,a=tt.current,ne(tt,o?a&1|2:a&1),ke&&_n(t,l.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ht(t),zs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&se(_a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(ot),Ve(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Dm(e,t){switch(_s(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(ot),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oe(t),null;case 31:if(t.memoizedState!==null){if(Ht(t),t.alternate===null)throw Error(u(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(tt),null;case 4:return Se(),null;case 10:return Sn(t.type),null;case 22:case 23:return Ht(t),zs(),e!==null&&se(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(ot),null;case 25:return null;default:return null}}function $d(e,t){switch(_s(t),t.tag){case 3:Sn(ot),Se();break;case 26:case 27:case 5:oe(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&Ht(t);break;case 13:Ht(t);break;case 19:se(tt);break;case 10:Sn(t.type);break;case 22:case 23:Ht(t),zs(),e!==null&&se(_a);break;case 24:Sn(ot)}}function Zl(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==o)}}catch(p){Le(t,t.return,p)}}function Qn(e,t,a){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var i=o.next;l=i;do{if((l.tag&e)===e){var c=l.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,o=t;var S=a,G=p;try{G()}catch(X){Le(o,S,X)}}}l=l.next}while(l!==i)}}catch(X){Le(t,t.return,X)}}function Wd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yu(t,a)}catch(l){Le(e,e.return,l)}}}function Pd(e,t,a){a.props=Ea(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Le(e,t,l)}}function Ql(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(o){Le(e,t,o)}}function un(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(o){Le(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Le(e,t,o)}else a.current=null}function Fd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(o){Le(e,e.return,o)}}function hr(e,t,a){try{var l=e.stateNode;eg(l,e.type,a,t),l[At]=t}catch(o){Le(e,e.return,o)}}function ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function fr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=yn));else if(l!==4&&(l===27&&ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(mr(e,t,a),e=e.sibling;e!==null;)mr(e,t,a),e=e.sibling}function ni(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ni(e,t,a),e=e.sibling;e!==null;)ni(e,t,a),e=e.sibling}function tp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);_t(t,l,a),t[gt]=e,t[At]=a}catch(i){Le(e,e.return,i)}}var Nn=!1,rt=!1,gr=!1,np=typeof WeakSet=="function"?WeakSet:Set,ft=null;function Om(e,t){if(e=e.containerInfo,Hr=wi,e=fu(e),cs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var o=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,p=-1,S=-1,G=0,X=0,V=e,L=null;t:for(;;){for(var q;V!==a||o!==0&&V.nodeType!==3||(p=c+o),V!==i||l!==0&&V.nodeType!==3||(S=c+l),V.nodeType===3&&(c+=V.nodeValue.length),(q=V.firstChild)!==null;)L=V,V=q;for(;;){if(V===e)break t;if(L===a&&++G===o&&(p=c),L===i&&++X===l&&(S=c),(q=V.nextSibling)!==null)break;V=L,L=V.parentNode}V=q}a=p===-1||S===-1?null:{start:p,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gr={focusedElem:e,selectionRange:a},wi=!1,ft=t;ft!==null;)if(t=ft,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ft=e;else for(;ft!==null;){switch(t=ft,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,o=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var ae=Ea(a.type,o);e=l.getSnapshotBeforeUpdate(ae,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(he){Le(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Yr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,ft=e;break}ft=t.return}}function ap(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:jn(e,a),l&4&&Zl(5,a);break;case 1:if(jn(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Le(a,a.return,c)}else{var o=Ea(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Le(a,a.return,c)}}l&64&&Wd(a),l&512&&Ql(a,a.return);break;case 3:if(jn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yu(e,t)}catch(c){Le(a,a.return,c)}}break;case 27:t===null&&l&4&&tp(a);case 26:case 5:jn(e,a),t===null&&l&4&&Fd(a),l&512&&Ql(a,a.return);break;case 12:jn(e,a);break;case 31:jn(e,a),l&4&&ip(e,a);break;case 13:jn(e,a),l&4&&sp(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qm.bind(null,a),rg(e,a))));break;case 22:if(l=a.memoizedState!==null||Nn,!l){t=t!==null&&t.memoizedState!==null||rt,o=Nn;var i=rt;Nn=l,(rt=t)&&!i?Mn(e,a,(a.subtreeFlags&8772)!==0):jn(e,a),Nn=o,rt=i}break;case 30:break;default:jn(e,a)}}function lp(e){var t=e.alternate;t!==null&&(e.alternate=null,lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Ct=!1;function Cn(e,t,a){for(a=a.child;a!==null;)op(e,t,a),a=a.sibling}function op(e,t,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ua,a)}catch{}switch(a.tag){case 26:rt||un(a,t),Cn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rt||un(a,t);var l=We,o=Ct;ea(a.type)&&(We=a.stateNode,Ct=!1),Cn(e,t,a),no(a.stateNode),We=l,Ct=o;break;case 5:rt||un(a,t);case 6:if(l=We,o=Ct,We=null,Cn(e,t,a),We=l,Ct=o,We!==null)if(Ct)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(i){Le(a,t,i)}else try{We.removeChild(a.stateNode)}catch(i){Le(a,t,i)}break;case 18:We!==null&&(Ct?(e=We,Wp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hl(e)):Wp(We,a.stateNode));break;case 4:l=We,o=Ct,We=a.stateNode.containerInfo,Ct=!0,Cn(e,t,a),We=l,Ct=o;break;case 0:case 11:case 14:case 15:Qn(2,a,t),rt||Qn(4,a,t),Cn(e,t,a);break;case 1:rt||(un(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Pd(a,t,l)),Cn(e,t,a);break;case 21:Cn(e,t,a);break;case 22:rt=(l=rt)||a.memoizedState!==null,Cn(e,t,a),rt=l;break;default:Cn(e,t,a)}}function ip(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hl(e)}catch(a){Le(t,t.return,a)}}}function sp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(a){Le(t,t.return,a)}}function Rm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new np),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new np),t;default:throw Error(u(435,e.tag))}}function ai(e,t){var a=Rm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var o=Im.bind(null,e,l);l.then(o,o)}})}function jt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var o=a[l],i=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(ea(p.type)){We=p.stateNode,Ct=!1;break e}break;case 5:We=p.stateNode,Ct=!1;break e;case 3:case 4:We=p.stateNode.containerInfo,Ct=!0;break e}p=p.return}if(We===null)throw Error(u(160));op(i,c,o),We=null,Ct=!1,i=o.alternate,i!==null&&(i.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rp(t,e),t=t.sibling}var nn=null;function rp(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Mt(e),l&4&&(Qn(3,e,e.return),Zl(3,e),Qn(5,e,e.return));break;case 1:jt(t,e),Mt(e),l&512&&(rt||a===null||un(a,a.return)),l&64&&Nn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var o=nn;if(jt(t,e),Mt(e),l&512&&(rt||a===null||un(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":i=o.getElementsByTagName("title")[0],(!i||i[_l]||i[gt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=o.createElement(l),o.head.insertBefore(i,o.querySelector("head > title"))),_t(i,l,a),i[gt]=e,ht(i),l=i;break e;case"link":var c=rh("link","href",o).get(l+(a.href||""));if(c){for(var p=0;p<c.length;p++)if(i=c[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}i=o.createElement(l),_t(i,l,a),o.head.appendChild(i);break;case"meta":if(c=rh("meta","content",o).get(l+(a.content||""))){for(p=0;p<c.length;p++)if(i=c[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}i=o.createElement(l),_t(i,l,a),o.head.appendChild(i);break;default:throw Error(u(468,l))}i[gt]=e,ht(i),l=i}e.stateNode=l}else ch(o,e.type,e.stateNode);else e.stateNode=sh(o,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?ch(o,e.type,e.stateNode):sh(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hr(e,e.memoizedProps,a.memoizedProps)}break;case 27:jt(t,e),Mt(e),l&512&&(rt||a===null||un(a,a.return)),a!==null&&l&4&&hr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jt(t,e),Mt(e),l&512&&(rt||a===null||un(a,a.return)),e.flags&32){o=e.stateNode;try{Ba(o,"")}catch(ae){Le(e,e.return,ae)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,hr(e,o,a!==null?a.memoizedProps:o)),l&1024&&(gr=!0);break;case 6:if(jt(t,e),Mt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ae){Le(e,e.return,ae)}}break;case 3:if(bi=null,o=nn,nn=yi(t.containerInfo),jt(t,e),nn=o,Mt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{hl(t.containerInfo)}catch(ae){Le(e,e.return,ae)}gr&&(gr=!1,cp(e));break;case 4:l=nn,nn=yi(e.stateNode.containerInfo),jt(t,e),Mt(e),nn=l;break;case 12:jt(t,e),Mt(e);break;case 31:jt(t,e),Mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ai(e,l)));break;case 13:jt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oi=ve()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ai(e,l)));break;case 22:o=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,G=Nn,X=rt;if(Nn=G||o,rt=X||S,jt(t,e),rt=X,Nn=G,Mt(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||S||Nn||rt||Aa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(i=S.stateNode,o)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=S.stateNode;var V=S.memoizedProps.style,L=V!=null&&V.hasOwnProperty("display")?V.display:null;p.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(ae){Le(S,S.return,ae)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(ae){Le(S,S.return,ae)}}}else if(t.tag===18){if(a===null){S=t;try{var q=S.stateNode;o?Pp(q,!0):Pp(S.stateNode,!1)}catch(ae){Le(S,S.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ai(e,a))));break;case 19:jt(t,e),Mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ai(e,l)));break;case 30:break;case 21:break;default:jt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(ep(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var o=a.stateNode,i=fr(e);ni(e,i,o);break;case 5:var c=a.stateNode;a.flags&32&&(Ba(c,""),a.flags&=-33);var p=fr(e);ni(e,p,c);break;case 3:case 4:var S=a.stateNode.containerInfo,G=fr(e);mr(e,G,S);break;default:throw Error(u(161))}}catch(X){Le(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ap(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),Aa(t);break;case 1:un(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Pd(t,t.return,a),Aa(t);break;case 27:no(t.stateNode);case 26:case 5:un(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function Mn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:Mn(o,i,a),Zl(4,i);break;case 1:if(Mn(o,i,a),l=i,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(G){Le(l,l.return,G)}if(l=i,o=l.updateQueue,o!==null){var p=l.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)Lu(S[o],p)}catch(G){Le(l,l.return,G)}}a&&c&64&&Wd(i),Ql(i,i.return);break;case 27:tp(i);case 26:case 5:Mn(o,i,a),a&&l===null&&c&4&&Fd(i),Ql(i,i.return);break;case 12:Mn(o,i,a);break;case 31:Mn(o,i,a),a&&c&4&&ip(o,i);break;case 13:Mn(o,i,a),a&&c&4&&sp(o,i);break;case 22:i.memoizedState===null&&Mn(o,i,a),Ql(i,i.return);break;case 30:break;default:Mn(o,i,a)}t=t.sibling}}function yr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ol(a))}function vr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ol(e))}function an(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)up(e,t,a,l),t=t.sibling}function up(e,t,a,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,a,l),o&2048&&Zl(9,t);break;case 1:an(e,t,a,l);break;case 3:an(e,t,a,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ol(e)));break;case 12:if(o&2048){an(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,p=i.onPostCommit;typeof p=="function"&&p(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Le(t,t.return,S)}}else an(e,t,a,l);break;case 31:an(e,t,a,l);break;case 13:an(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?an(e,t,a,l):Vl(e,t):i._visibility&2?an(e,t,a,l):(i._visibility|=2,nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&yr(c,t);break;case 24:an(e,t,a,l),o&2048&&vr(t.alternate,t);break;default:an(e,t,a,l)}}function nl(e,t,a,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,p=a,S=l,G=c.flags;switch(c.tag){case 0:case 11:case 15:nl(i,c,p,S,o),Zl(8,c);break;case 23:break;case 22:var X=c.stateNode;c.memoizedState!==null?X._visibility&2?nl(i,c,p,S,o):Vl(i,c):(X._visibility|=2,nl(i,c,p,S,o)),o&&G&2048&&yr(c.alternate,c);break;case 24:nl(i,c,p,S,o),o&&G&2048&&vr(c.alternate,c);break;default:nl(i,c,p,S,o)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,o=l.flags;switch(l.tag){case 22:Vl(a,l),o&2048&&yr(l.alternate,l);break;case 24:Vl(a,l),o&2048&&vr(l.alternate,l);break;default:Vl(a,l)}t=t.sibling}}var Kl=8192;function al(e,t,a){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)dp(e,t,a),e=e.sibling}function dp(e,t,a){switch(e.tag){case 26:al(e,t,a),e.flags&Kl&&e.memoizedState!==null&&_g(a,nn,e.memoizedState,e.memoizedProps);break;case 5:al(e,t,a);break;case 3:case 4:var l=nn;nn=yi(e.stateNode.containerInfo),al(e,t,a),nn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Kl,Kl=16777216,al(e,t,a),Kl=l):al(e,t,a));break;default:al(e,t,a)}}function pp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $l(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ft=l,fp(l,e)}pp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hp(e),e=e.sibling}function hp(e){switch(e.tag){case 0:case 11:case 15:$l(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:$l(e);break;case 12:$l(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,li(e)):$l(e);break;default:$l(e)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ft=l,fp(l,e)}pp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),li(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,li(t));break;default:li(t)}e=e.sibling}}function fp(e,t){for(;ft!==null;){var a=ft;switch(a.tag){case 0:case 11:case 15:Qn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ol(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ft=l;else e:for(a=e;ft!==null;){l=ft;var o=l.sibling,i=l.return;if(lp(l),l===a){ft=null;break e}if(o!==null){o.return=i,ft=o;break e}ft=i}}}var zm={getCacheForType:function(e){var t=vt(ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return vt(ot).controller.signal}},Bm=typeof WeakMap=="function"?WeakMap:Map,Be=0,Je=null,Ae=null,Ce=0,Ue=0,Gt=null,Vn=!1,ll=!1,br=!1,kn=0,Fe=0,Kn=0,Na=0,_r=0,Ut=0,ol=0,Wl=null,kt=null,xr=!1,oi=0,mp=0,ii=1/0,si=null,$n=null,ut=0,Wn=null,il=null,Dn=0,Sr=0,wr=null,gp=null,Pl=0,Tr=null;function Lt(){return(Be&2)!==0&&Ce!==0?Ce&-Ce:z.T!==null?Mr():Dc()}function yp(){if(Ut===0)if((Ce&536870912)===0||ke){var e=$e;$e<<=1,($e&3932160)===0&&($e=262144),Ut=e}else Ut=536870912;return e=Bt.current,e!==null&&(e.flags|=32),Ut}function Dt(e,t,a){(e===Je&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(sl(e,0),Pn(e,Ce,Ut,!1)),bl(e,a),((Be&2)===0||e!==Je)&&(e===Je&&((Be&2)===0&&(Na|=a),Fe===4&&Pn(e,Ce,Ut,!1)),dn(e))}function vp(e,t,a){if((Be&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||vl(e,t),o=l?Um(e,t):Ar(e,t,!0),i=l;do{if(o===0){ll&&!l&&Pn(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Hm(a)){o=Ar(e,t,!1),i=!1;continue}if(o===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var p=e;o=Wl;var S=p.current.memoizedState.isDehydrated;if(S&&(sl(p,c).flags|=256),c=Ar(p,c,!1),c!==2){if(br&&!S){p.errorRecoveryDisabledLanes|=i,Na|=i,o=4;break e}i=kt,kt=o,i!==null&&(kt===null?kt=i:kt.push.apply(kt,i))}o=c}if(i=!1,o!==2)continue}}if(o===1){sl(e,0),Pn(e,t,0,!0);break}e:{switch(l=e,i=o,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Pn(l,t,Ut,!Vn);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=oi+300-ve(),10<o)){if(Pn(l,t,Ut,!Vn),yo(l,0,!0)!==0)break e;Dn=t,l.timeoutHandle=Kp(bp.bind(null,l,a,kt,si,xr,t,Ut,Na,ol,Vn,i,"Throttled",-0,0),o);break e}bp(l,a,kt,si,xr,t,Ut,Na,ol,Vn,i,null,-0,0)}}break}while(!0);dn(e)}function bp(e,t,a,l,o,i,c,p,S,G,X,V,L,q){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},dp(t,i,V);var ae=(i&62914560)===i?oi-ve():(i&4194048)===i?mp-ve():0;if(ae=xg(V,ae),ae!==null){Dn=i,e.cancelPendingCommit=ae(Np.bind(null,e,t,i,a,l,o,c,p,S,X,V,null,L,q)),Pn(e,i,c,!G);return}}Np(e,t,i,a,l,o,c,p,S)}function Hm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var o=a[l],i=o.getSnapshot;o=o.value;try{if(!Rt(i(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,a,l){t&=~_r,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var i=31-Tt(o),c=1<<i;l[i]=-1,o&=~c}a!==0&&jc(e,a,t)}function ri(){return(Be&6)===0?(Fl(0),!1):!0}function Er(){if(Ae!==null){if(Ue===0)var e=Ae.return;else e=Ae,xn=va=null,Ys(e),Wa=null,zl=0,e=Ae;for(;e!==null;)$d(e.alternate,e),e=e.return;Ae=null}}function sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ag(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Dn=0,Er(),Je=e,Ae=a=bn(e.current,null),Ce=t,Ue=0,Gt=null,Vn=!1,ll=vl(e,t),br=!1,ol=Ut=_r=Na=Kn=Fe=0,kt=Wl=null,xr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-Tt(l),i=1<<o;t|=e[o],l&=~i}return kn=t,jo(),a}function _p(e,t){_e=null,z.H=Il,t===$a||t===Ho?(t=Bu(),Ue=3):t===js?(t=Bu(),Ue=4):Ue=t===ar?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Ae===null&&(Fe=1,Wo(e,Qt(t,e.current)))}function xp(){var e=Bt.current;return e===null?!0:(Ce&4194048)===Ce?Wt===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Wt:!1}function Sp(){var e=z.H;return z.H=Il,e===null?Il:e}function wp(){var e=z.A;return z.A=zm,e}function ci(){Fe=4,Vn||(Ce&4194048)!==Ce&&Bt.current!==null||(ll=!0),(Kn&134217727)===0&&(Na&134217727)===0||Je===null||Pn(Je,Ce,Ut,!1)}function Ar(e,t,a){var l=Be;Be|=2;var o=Sp(),i=wp();(Je!==e||Ce!==t)&&(si=null,sl(e,t)),t=!1;var c=Fe;e:do try{if(Ue!==0&&Ae!==null){var p=Ae,S=Gt;switch(Ue){case 8:Er(),c=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var G=Ue;if(Ue=0,Gt=null,rl(e,p,S,G),a&&ll){c=0;break e}break;default:G=Ue,Ue=0,Gt=null,rl(e,p,S,G)}}Gm(),c=Fe;break}catch(X){_p(e,X)}while(!0);return t&&e.shellSuspendCounter++,xn=va=null,Be=l,z.H=o,z.A=i,Ae===null&&(Je=null,Ce=0,jo()),c}function Gm(){for(;Ae!==null;)Tp(Ae)}function Um(e,t){var a=Be;Be|=2;var l=Sp(),o=wp();Je!==e||Ce!==t?(si=null,ii=ve()+500,sl(e,t)):ll=vl(e,t);e:do try{if(Ue!==0&&Ae!==null){t=Ae;var i=Gt;t:switch(Ue){case 1:Ue=0,Gt=null,rl(e,t,i,1);break;case 2:case 9:if(Ru(i)){Ue=0,Gt=null,Ep(t);break}t=function(){Ue!==2&&Ue!==9||Je!==e||(Ue=7),dn(e)},i.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Ru(i)?(Ue=0,Gt=null,Ep(t)):(Ue=0,Gt=null,rl(e,t,i,7));break;case 5:var c=null;switch(Ae.tag){case 26:c=Ae.memoizedState;case 5:case 27:var p=Ae;if(c?uh(c):p.stateNode.complete){Ue=0,Gt=null;var S=p.sibling;if(S!==null)Ae=S;else{var G=p.return;G!==null?(Ae=G,ui(G)):Ae=null}break t}}Ue=0,Gt=null,rl(e,t,i,5);break;case 6:Ue=0,Gt=null,rl(e,t,i,6);break;case 8:Er(),Fe=6;break e;default:throw Error(u(462))}}Lm();break}catch(X){_p(e,X)}while(!0);return xn=va=null,z.H=l,z.A=o,Be=a,Ae!==null?0:(Je=null,Ce=0,jo(),Fe)}function Lm(){for(;Ae!==null&&!ct();)Tp(Ae)}function Tp(e){var t=Vd(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?ui(e):Ae=t}function Ep(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qd(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=qd(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:Ys(t);default:$d(a,t),t=Ae=wu(t,kn),t=Vd(a,t,kn)}e.memoizedProps=e.pendingProps,t===null?ui(e):Ae=t}function rl(e,t,a,l){xn=va=null,Ys(t),Wa=null,zl=0;var o=t.return;try{if(Cm(e,o,t,a,Ce)){Fe=1,Wo(e,Qt(a,e.current)),Ae=null;return}}catch(i){if(o!==null)throw Ae=o,i;Fe=1,Wo(e,Qt(a,e.current)),Ae=null;return}t.flags&32768?(ke||l===1?e=!0:ll||(Ce&536870912)!==0?e=!1:(Vn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ap(t,e)):ui(t)}function ui(e){var t=e;do{if((t.flags&32768)!==0){Ap(t,Vn);return}e=t.return;var a=km(t.alternate,t,kn);if(a!==null){Ae=a;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Fe===0&&(Fe=5)}function Ap(e,t){do{var a=Dm(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);Fe=6,Ae=null}function Np(e,t,a,l,o,i,c,p,S){e.cancelPendingCommit=null;do di();while(ut!==0);if((Be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=fs,bf(e,a,i,c,p,S),e===Je&&(Ae=Je=null,Ce=0),il=t,Wn=e,Dn=a,Sr=i,wr=o,gp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xm(ca,function(){return Dp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,o=U.p,U.p=2,c=Be,Be|=4;try{Om(e,t,a)}finally{Be=c,U.p=o,z.T=l}}ut=1,Cp(),jp(),Mp()}}function Cp(){if(ut===1){ut=0;var e=Wn,t=il,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=U.p;U.p=2;var o=Be;Be|=4;try{rp(t,e);var i=Gr,c=fu(e.containerInfo),p=i.focusedElem,S=i.selectionRange;if(c!==p&&p&&p.ownerDocument&&hu(p.ownerDocument.documentElement,p)){if(S!==null&&cs(p)){var G=S.start,X=S.end;if(X===void 0&&(X=G),"selectionStart"in p)p.selectionStart=G,p.selectionEnd=Math.min(X,p.value.length);else{var V=p.ownerDocument||document,L=V&&V.defaultView||window;if(L.getSelection){var q=L.getSelection(),ae=p.textContent.length,he=Math.min(S.start,ae),Xe=S.end===void 0?he:Math.min(S.end,ae);!q.extend&&he>Xe&&(c=Xe,Xe=he,he=c);var D=pu(p,he),A=pu(p,Xe);if(D&&A&&(q.rangeCount!==1||q.anchorNode!==D.node||q.anchorOffset!==D.offset||q.focusNode!==A.node||q.focusOffset!==A.offset)){var H=V.createRange();H.setStart(D.node,D.offset),q.removeAllRanges(),he>Xe?(q.addRange(H),q.extend(A.node,A.offset)):(H.setEnd(A.node,A.offset),q.addRange(H))}}}}for(V=[],q=p;q=q.parentNode;)q.nodeType===1&&V.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<V.length;p++){var Q=V[p];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}wi=!!Hr,Gr=Hr=null}finally{Be=o,U.p=l,z.T=a}}e.current=t,ut=2}}function jp(){if(ut===2){ut=0;var e=Wn,t=il,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=U.p;U.p=2;var o=Be;Be|=4;try{ap(e,t.alternate,t)}finally{Be=o,U.p=l,z.T=a}}ut=3}}function Mp(){if(ut===4||ut===3){ut=0,ra();var e=Wn,t=il,a=Dn,l=gp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ut=5:(ut=0,il=Wn=null,kp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&($n=null),Xi(a),t=t.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ua,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=z.T,o=U.p,U.p=2,z.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var p=l[c];i(p.value,{componentStack:p.stack})}}finally{z.T=t,U.p=o}}(Dn&3)!==0&&di(),dn(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===Tr?Pl++:(Pl=0,Tr=e):Pl=0,Fl(0)}}function kp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ol(t)))}function di(){return Cp(),jp(),Mp(),Dp()}function Dp(){if(ut!==5)return!1;var e=Wn,t=Sr;Sr=0;var a=Xi(Dn),l=z.T,o=U.p;try{U.p=32>a?32:a,z.T=null,a=wr,wr=null;var i=Wn,c=Dn;if(ut=0,il=Wn=null,Dn=0,(Be&6)!==0)throw Error(u(331));var p=Be;if(Be|=4,hp(i.current),up(i,i.current,c,a),Be=p,Fl(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ua,i)}catch{}return!0}finally{U.p=o,z.T=l,kp(e,t)}}function Op(e,t,a){t=Qt(a,t),t=nr(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(bl(e,2),dn(e))}function Le(e,t,a){if(e.tag===3)Op(e,e,a);else for(;t!==null;){if(t.tag===3){Op(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($n===null||!$n.has(l))){e=Qt(a,e),a=Rd(2),l=Xn(t,a,2),l!==null&&(zd(a,l,t,e),bl(l,2),dn(l));break}}t=t.return}}function Nr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Bm;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(a)||(br=!0,o.add(a),e=Ym.bind(null,e,t,a),t.then(e,e))}function Ym(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Je===e&&(Ce&a)===a&&(Fe===4||Fe===3&&(Ce&62914560)===Ce&&300>ve()-oi?(Be&2)===0&&sl(e,0):_r|=a,ol===Ce&&(ol=0)),dn(e)}function Rp(e,t){t===0&&(t=Cc()),e=ma(e,t),e!==null&&(bl(e,t),dn(e))}function qm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rp(e,a)}function Im(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Rp(e,a)}function Xm(e,t){return dt(e,t)}var pi=null,cl=null,Cr=!1,hi=!1,jr=!1,Fn=0;function dn(e){e!==cl&&e.next===null&&(cl===null?pi=cl=e:cl=cl.next=e),hi=!0,Cr||(Cr=!0,Zm())}function Fl(e,t){if(!jr&&hi){jr=!0;do for(var a=!1,l=pi;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var i=0;else{var c=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-Tt(42|e)+1)-1,i&=o&~(c&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Gp(l,i))}else i=Ce,i=yo(l,l===Je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||vl(l,i)||(a=!0,Gp(l,i));l=l.next}while(a);jr=!1}}function Jm(){zp()}function zp(){hi=Cr=!1;var e=0;Fn!==0&&ng()&&(e=Fn);for(var t=ve(),a=null,l=pi;l!==null;){var o=l.next,i=Bp(l,t);i===0?(l.next=null,a===null?pi=o:a.next=o,o===null&&(cl=a)):(a=l,(e!==0||(i&3)!==0)&&(hi=!0)),l=o}ut!==0&&ut!==5||Fl(e),Fn!==0&&(Fn=0)}function Bp(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-Tt(i),p=1<<c,S=o[c];S===-1?((p&a)===0||(p&l)!==0)&&(o[c]=vf(p,t)):S<=t&&(e.expiredLanes|=p),i&=~p}if(t=Je,a=Ce,a=yo(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&et(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||vl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&et(l),Xi(a)){case 2:case 8:a=mo;break;case 32:a=ca;break;case 268435456:a=go;break;default:a=ca}return l=Hp.bind(null,e),a=dt(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&et(l),e.callbackPriority=2,e.callbackNode=null,2}function Hp(e,t){if(ut!==0&&ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(di()&&e.callbackNode!==a)return null;var l=Ce;return l=yo(e,e===Je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(vp(e,l,t),Bp(e,ve()),e.callbackNode!=null&&e.callbackNode===a?Hp.bind(null,e):null)}function Gp(e,t){if(di())return null;vp(e,t,!0)}function Zm(){lg(function(){(Be&6)!==0?dt(ja,Jm):zp()})}function Mr(){if(Fn===0){var e=Va;e===0&&(e=pt,pt<<=1,(pt&261888)===0&&(pt=256)),Fn=e}return Fn}function Up(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xo(""+e)}function Lp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Qm(e,t,a,l,o){if(t==="submit"&&a&&a.stateNode===o){var i=Up((o[At]||null).action),c=l.submitter;c&&(t=(t=c[At]||null)?Up(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var p=new Eo("action","action",null,l,o);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fn!==0){var S=c?Lp(o,c):new FormData(o);$s(a,{pending:!0,data:S,method:o.method,action:i},null,S)}}else typeof i=="function"&&(p.preventDefault(),S=c?Lp(o,c):new FormData(o),$s(a,{pending:!0,data:S,method:o.method,action:i},i,S))},currentTarget:o}]})}}for(var kr=0;kr<hs.length;kr++){var Dr=hs[kr],Vm=Dr.toLowerCase(),Km=Dr[0].toUpperCase()+Dr.slice(1);tn(Vm,"on"+Km)}tn(yu,"onAnimationEnd"),tn(vu,"onAnimationIteration"),tn(bu,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(dm,"onTransitionRun"),tn(pm,"onTransitionStart"),tn(hm,"onTransitionCancel"),tn(_u,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),da("onBeforeInput",["compositionend","keypress","textInput","paste"]),da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$m=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eo));function Yp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],o=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var p=l[c],S=p.instance,G=p.currentTarget;if(p=p.listener,S!==i&&o.isPropagationStopped())break e;i=p,o.currentTarget=G;try{i(o)}catch(X){Co(X)}o.currentTarget=null,i=S}else for(c=0;c<l.length;c++){if(p=l[c],S=p.instance,G=p.currentTarget,p=p.listener,S!==i&&o.isPropagationStopped())break e;i=p,o.currentTarget=G;try{i(o)}catch(X){Co(X)}o.currentTarget=null,i=S}}}}function Ne(e,t){var a=t[Ji];a===void 0&&(a=t[Ji]=new Set);var l=e+"__bubble";a.has(l)||(qp(t,e,2,!1),a.add(l))}function Or(e,t,a){var l=0;t&&(l|=4),qp(a,e,l,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[fi]){e[fi]=!0,zc.forEach(function(a){a!=="selectionchange"&&($m.has(a)||Or(a,!1,e),Or(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,Or("selectionchange",!1,t))}}function qp(e,t,a,l){switch(yh(t)){case 2:var o=Tg;break;case 8:o=Eg;break;default:o=Kr}a=o.bind(null,t,a,e),o=void 0,!es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function zr(e,t,a,l,o){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var p=l.stateNode.containerInfo;if(p===o)break;if(c===4)for(c=l.return;c!==null;){var S=c.tag;if((S===3||S===4)&&c.stateNode.containerInfo===o)return;c=c.return}for(;p!==null;){if(c=ka(p),c===null)return;if(S=c.tag,S===5||S===6||S===26||S===27){l=i=c;continue e}p=p.parentNode}}l=l.return}Qc(function(){var G=i,X=Pi(a),V=[];e:{var L=xu.get(e);if(L!==void 0){var q=Eo,ae=e;switch(e){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":q=If;break;case"focusin":ae="focus",q=ls;break;case"focusout":ae="blur",q=ls;break;case"beforeblur":case"afterblur":q=ls;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Zf;break;case yu:case vu:case bu:q=Rf;break;case _u:q=Vf;break;case"scroll":case"scrollend":q=jf;break;case"wheel":q=$f;break;case"copy":case"cut":case"paste":q=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Pc;break;case"toggle":case"beforetoggle":q=Pf}var he=(t&4)!==0,Xe=!he&&(e==="scroll"||e==="scrollend"),D=he?L!==null?L+"Capture":null:L;he=[];for(var A=G,H;A!==null;){var Q=A;if(H=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||H===null||D===null||(Q=Sl(A,D),Q!=null&&he.push(to(A,Q,H))),Xe)break;A=A.return}0<he.length&&(L=new q(L,ae,null,a,X),V.push({event:L,listeners:he}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",L&&a!==Wi&&(ae=a.relatedTarget||a.fromElement)&&(ka(ae)||ae[Ma]))break e;if((q||L)&&(L=X.window===X?X:(L=X.ownerDocument)?L.defaultView||L.parentWindow:window,q?(ae=a.relatedTarget||a.toElement,q=G,ae=ae?ka(ae):null,ae!==null&&(Xe=h(ae),he=ae.tag,ae!==Xe||he!==5&&he!==27&&he!==6)&&(ae=null)):(q=null,ae=G),q!==ae)){if(he=$c,Q="onMouseLeave",D="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(he=Pc,Q="onPointerLeave",D="onPointerEnter",A="pointer"),Xe=q==null?L:xl(q),H=ae==null?L:xl(ae),L=new he(Q,A+"leave",q,a,X),L.target=Xe,L.relatedTarget=H,Q=null,ka(X)===G&&(he=new he(D,A+"enter",ae,a,X),he.target=H,he.relatedTarget=Xe,Q=he),Xe=Q,q&&ae)t:{for(he=Wm,D=q,A=ae,H=0,Q=D;Q;Q=he(Q))H++;Q=0;for(var ue=A;ue;ue=he(ue))Q++;for(;0<H-Q;)D=he(D),H--;for(;0<Q-H;)A=he(A),Q--;for(;H--;){if(D===A||A!==null&&D===A.alternate){he=D;break t}D=he(D),A=he(A)}he=null}else he=null;q!==null&&Ip(V,L,q,he,!1),ae!==null&&Xe!==null&&Ip(V,Xe,ae,he,!0)}}e:{if(L=G?xl(G):window,q=L.nodeName&&L.nodeName.toLowerCase(),q==="select"||q==="input"&&L.type==="file")var Re=iu;else if(lu(L))if(su)Re=rm;else{Re=im;var ie=om}else q=L.nodeName,!q||q.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?G&&$i(G.elementType)&&(Re=iu):Re=sm;if(Re&&(Re=Re(e,G))){ou(V,Re,a,X);break e}ie&&ie(e,L,G),e==="focusout"&&G&&L.type==="number"&&G.memoizedProps.value!=null&&Ki(L,"number",L.value)}switch(ie=G?xl(G):window,e){case"focusin":(lu(ie)||ie.contentEditable==="true")&&(La=ie,us=G,Ml=null);break;case"focusout":Ml=us=La=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,mu(V,a,X);break;case"selectionchange":if(um)break;case"keydown":case"keyup":mu(V,a,X)}var xe;if(is)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Ua?nu(e,a)&&(je="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(Fc&&a.locale!=="ko"&&(Ua||je!=="onCompositionStart"?je==="onCompositionEnd"&&Ua&&(xe=Vc()):(Hn=X,ts="value"in Hn?Hn.value:Hn.textContent,Ua=!0)),ie=mi(G,je),0<ie.length&&(je=new Wc(je,e,null,a,X),V.push({event:je,listeners:ie}),xe?je.data=xe:(xe=au(a),xe!==null&&(je.data=xe)))),(xe=em?tm(e,a):nm(e,a))&&(je=mi(G,"onBeforeInput"),0<je.length&&(ie=new Wc("onBeforeInput","beforeinput",null,a,X),V.push({event:ie,listeners:je}),ie.data=xe)),Qm(V,e,G,a,X)}Yp(V,t)})}function to(e,t,a){return{instance:e,listener:t,currentTarget:a}}function mi(e,t){for(var a=t+"Capture",l=[];e!==null;){var o=e,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=Sl(e,a),o!=null&&l.unshift(to(e,o,i)),o=Sl(e,t),o!=null&&l.push(to(e,o,i))),e.tag===3)return l;e=e.return}return[]}function Wm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ip(e,t,a,l,o){for(var i=t._reactName,c=[];a!==null&&a!==l;){var p=a,S=p.alternate,G=p.stateNode;if(p=p.tag,S!==null&&S===l)break;p!==5&&p!==26&&p!==27||G===null||(S=G,o?(G=Sl(a,i),G!=null&&c.unshift(to(a,G,S))):o||(G=Sl(a,i),G!=null&&c.push(to(a,G,S)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Pm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Xp(e){return(typeof e=="string"?e:""+e).replace(Pm,`
`).replace(Fm,"")}function Jp(e,t){return t=Xp(t),Xp(e)===t}function Ie(e,t,a,l,o,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ba(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ba(e,""+l);break;case"className":bo(e,"class",l);break;case"tabIndex":bo(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bo(e,a,l);break;case"style":Jc(e,l,i);break;case"data":if(t!=="object"){bo(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=xo(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ie(e,t,"name",o.name,o,null),Ie(e,t,"formEncType",o.formEncType,o,null),Ie(e,t,"formMethod",o.formMethod,o,null),Ie(e,t,"formTarget",o.formTarget,o,null)):(Ie(e,t,"encType",o.encType,o,null),Ie(e,t,"method",o.method,o,null),Ie(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=xo(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=yn);break;case"onScroll":l!=null&&Ne("scroll",e);break;case"onScrollEnd":l!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=xo(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),vo(e,"popover",l);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vo(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nf.get(a)||a,vo(e,a,l))}}function Br(e,t,a,l,o,i){switch(a){case"style":Jc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ba(e,l):(typeof l=="number"||typeof l=="bigint")&&Ba(e,""+l);break;case"onScroll":l!=null&&Ne("scroll",e);break;case"onScrollEnd":l!=null&&Ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),i=e[At]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,o),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,o);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):vo(e,a,l)}}}function _t(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var l=!1,o=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ie(e,t,i,c,a,null)}}o&&Ie(e,t,"srcSet",a.srcSet,a,null),l&&Ie(e,t,"src",a.src,a,null);return;case"input":Ne("invalid",e);var p=i=c=o=null,S=null,G=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":o=X;break;case"type":c=X;break;case"checked":S=X;break;case"defaultChecked":G=X;break;case"value":i=X;break;case"defaultValue":p=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(u(137,t));break;default:Ie(e,t,l,X,a,null)}}Yc(e,i,p,S,G,c,o,!1);return;case"select":Ne("invalid",e),l=c=i=null;for(o in a)if(a.hasOwnProperty(o)&&(p=a[o],p!=null))switch(o){case"value":i=p;break;case"defaultValue":c=p;break;case"multiple":l=p;default:Ie(e,t,o,p,a,null)}t=i,a=c,e.multiple=!!l,t!=null?za(e,!!l,t,!1):a!=null&&za(e,!!l,a,!0);return;case"textarea":Ne("invalid",e),i=o=l=null;for(c in a)if(a.hasOwnProperty(c)&&(p=a[c],p!=null))switch(c){case"value":l=p;break;case"defaultValue":o=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:Ie(e,t,c,p,a,null)}Ic(e,l,o,i);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ie(e,t,S,l,a,null)}return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(l=0;l<eo.length;l++)Ne(eo[l],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in a)if(a.hasOwnProperty(G)&&(l=a[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ie(e,t,G,l,a,null)}return;default:if($i(t)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Br(e,t,X,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&Ie(e,t,p,l,a,null))}function eg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,c=null,p=null,S=null,G=null,X=null;for(q in a){var V=a[q];if(a.hasOwnProperty(q)&&V!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":S=V;default:l.hasOwnProperty(q)||Ie(e,t,q,null,l,V)}}for(var L in l){var q=l[L];if(V=a[L],l.hasOwnProperty(L)&&(q!=null||V!=null))switch(L){case"type":i=q;break;case"name":o=q;break;case"checked":G=q;break;case"defaultChecked":X=q;break;case"value":c=q;break;case"defaultValue":p=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,t));break;default:q!==V&&Ie(e,t,L,q,l,V)}}Vi(e,c,p,S,G,X,i,o);return;case"select":q=c=p=L=null;for(i in a)if(S=a[i],a.hasOwnProperty(i)&&S!=null)switch(i){case"value":break;case"multiple":q=S;default:l.hasOwnProperty(i)||Ie(e,t,i,null,l,S)}for(o in l)if(i=l[o],S=a[o],l.hasOwnProperty(o)&&(i!=null||S!=null))switch(o){case"value":L=i;break;case"defaultValue":p=i;break;case"multiple":c=i;default:i!==S&&Ie(e,t,o,i,l,S)}t=p,a=c,l=q,L!=null?za(e,!!a,L,!1):!!l!=!!a&&(t!=null?za(e,!!a,t,!0):za(e,!!a,a?[]:"",!1));return;case"textarea":q=L=null;for(p in a)if(o=a[p],a.hasOwnProperty(p)&&o!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ie(e,t,p,null,l,o)}for(c in l)if(o=l[c],i=a[c],l.hasOwnProperty(c)&&(o!=null||i!=null))switch(c){case"value":L=o;break;case"defaultValue":q=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==i&&Ie(e,t,c,o,l,i)}qc(e,L,q);return;case"option":for(var ae in a)if(L=a[ae],a.hasOwnProperty(ae)&&L!=null&&!l.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Ie(e,t,ae,null,l,L)}for(S in l)if(L=l[S],q=a[S],l.hasOwnProperty(S)&&L!==q&&(L!=null||q!=null))switch(S){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Ie(e,t,S,L,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)L=a[he],a.hasOwnProperty(he)&&L!=null&&!l.hasOwnProperty(he)&&Ie(e,t,he,null,l,L);for(G in l)if(L=l[G],q=a[G],l.hasOwnProperty(G)&&L!==q&&(L!=null||q!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:Ie(e,t,G,L,l,q)}return;default:if($i(t)){for(var Xe in a)L=a[Xe],a.hasOwnProperty(Xe)&&L!==void 0&&!l.hasOwnProperty(Xe)&&Br(e,t,Xe,void 0,l,L);for(X in l)L=l[X],q=a[X],!l.hasOwnProperty(X)||L===q||L===void 0&&q===void 0||Br(e,t,X,L,l,q);return}}for(var D in a)L=a[D],a.hasOwnProperty(D)&&L!=null&&!l.hasOwnProperty(D)&&Ie(e,t,D,null,l,L);for(V in l)L=l[V],q=a[V],!l.hasOwnProperty(V)||L===q||L==null&&q==null||Ie(e,t,V,L,l,q)}function Zp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var o=a[l],i=o.transferSize,c=o.initiatorType,p=o.duration;if(i&&p&&Zp(c)){for(c=0,p=o.responseEnd,l+=1;l<a.length;l++){var S=a[l],G=S.startTime;if(G>p)break;var X=S.transferSize,V=S.initiatorType;X&&Zp(V)&&(S=S.responseEnd,c+=X*(S<p?1:(p-G)/(S-G)))}if(--l,t+=8*(i+c)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hr=null,Gr=null;function gi(e){return e.nodeType===9?e:e.ownerDocument}function Qp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ur(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lr=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===Lr?!1:(Lr=e,!0):(Lr=null,!1)}var Kp=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,lg=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(e){return $p.resolve(null).then(e).catch(og)}:Kp;function og(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function Wp(e,t){var a=t,l=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(o),hl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")no(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,no(a);for(var i=a.firstChild;i;){var c=i.nextSibling,p=i.nodeName;i[_l]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&no(e.ownerDocument.body);a=o}while(a);hl(t)}function Pp(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Yr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yr(a),Zi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ig(e,t,a,l){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function sg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function Fp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function qr(e){return e.data==="$?"||e.data==="$~"}function Ir(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xr=null;function eh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nh(e,t,a){switch(t=gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function no(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zi(e)}var Ft=new Map,ah=new Set;function yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=U.d;U.d={f:cg,r:ug,D:dg,C:pg,L:hg,m:fg,X:gg,S:mg,M:yg};function cg(){var e=On.f(),t=ri();return e||t}function ug(e){var t=Da(e);t!==null&&t.tag===5&&t.type==="form"?_d(t):On.r(e)}var ul=typeof document>"u"?null:document;function lh(e,t,a){var l=ul;if(l&&typeof t=="string"&&t){var o=Jt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),ah.has(o)||(ah.add(o),e={rel:e,crossOrigin:a,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),_t(t,"link",e),ht(t),l.head.appendChild(t)))}}function dg(e){On.D(e),lh("dns-prefetch",e,null)}function pg(e,t){On.C(e,t),lh("preconnect",e,t)}function hg(e,t,a){On.L(e,t,a);var l=ul;if(l&&e&&t){var o='link[rel="preload"][as="'+Jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Jt(a.imageSizes)+'"]')):o+='[href="'+Jt(e)+'"]';var i=o;switch(t){case"style":i=dl(e);break;case"script":i=pl(e)}Ft.has(i)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ft.set(i,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(ao(i))||t==="script"&&l.querySelector(lo(i))||(t=l.createElement("link"),_t(t,"link",e),ht(t),l.head.appendChild(t)))}}function fg(e,t){On.m(e,t);var a=ul;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Jt(l)+'"][href="'+Jt(e)+'"]',i=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=pl(e)}if(!Ft.has(i)&&(e=_({rel:"modulepreload",href:e},t),Ft.set(i,e),a.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lo(i)))return}l=a.createElement("link"),_t(l,"link",e),ht(l),a.head.appendChild(l)}}}function mg(e,t,a){On.S(e,t,a);var l=ul;if(l&&e){var o=Oa(l).hoistableStyles,i=dl(e);t=t||"default";var c=o.get(i);if(!c){var p={loading:0,preload:null};if(c=l.querySelector(ao(i)))p.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ft.get(i))&&Jr(e,a);var S=c=l.createElement("link");ht(S),_t(S,"link",e),S._p=new Promise(function(G,X){S.onload=G,S.onerror=X}),S.addEventListener("load",function(){p.loading|=1}),S.addEventListener("error",function(){p.loading|=2}),p.loading|=4,vi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:p},o.set(i,c)}}}function gg(e,t){On.X(e,t);var a=ul;if(a&&e){var l=Oa(a).hoistableScripts,o=pl(e),i=l.get(o);i||(i=a.querySelector(lo(o)),i||(e=_({src:e,async:!0},t),(t=Ft.get(o))&&Zr(e,t),i=a.createElement("script"),ht(i),_t(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(o,i))}}function yg(e,t){On.M(e,t);var a=ul;if(a&&e){var l=Oa(a).hoistableScripts,o=pl(e),i=l.get(o);i||(i=a.querySelector(lo(o)),i||(e=_({src:e,async:!0,type:"module"},t),(t=Ft.get(o))&&Zr(e,t),i=a.createElement("script"),ht(i),_t(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(o,i))}}function oh(e,t,a,l){var o=(o=me.current)?yi(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=dl(a.href),a=Oa(o).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dl(a.href);var i=Oa(o).hoistableStyles,c=i.get(e);if(c||(o=o.ownerDocument||o,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=o.querySelector(ao(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Ft.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ft.set(e,a),i||vg(o,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pl(a),a=Oa(o).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function dl(e){return'href="'+Jt(e)+'"'}function ao(e){return'link[rel="stylesheet"]['+e+"]"}function ih(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function vg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_t(t,"link",a),ht(t),e.head.appendChild(t))}function pl(e){return'[src="'+Jt(e)+'"]'}function lo(e){return"script[async]"+e}function sh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Jt(a.href)+'"]');if(l)return t.instance=l,ht(l),l;var o=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ht(l),_t(l,"style",o),vi(l,a.precedence,e),t.instance=l;case"stylesheet":o=dl(a.href);var i=e.querySelector(ao(o));if(i)return t.state.loading|=4,t.instance=i,ht(i),i;l=ih(a),(o=Ft.get(o))&&Jr(l,o),i=(e.ownerDocument||e).createElement("link"),ht(i);var c=i;return c._p=new Promise(function(p,S){c.onload=p,c.onerror=S}),_t(i,"link",l),t.state.loading|=4,vi(i,a.precedence,e),t.instance=i;case"script":return i=pl(a.src),(o=e.querySelector(lo(i)))?(t.instance=o,ht(o),o):(l=a,(o=Ft.get(i))&&(l=_({},a),Zr(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),ht(o),_t(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,vi(l,a.precedence,e));return t.instance}function vi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,i=o,c=0;c<l.length;c++){var p=l[c];if(p.dataset.precedence===t)i=p;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bi=null;function rh(e,t,a){if(bi===null){var l=new Map,o=bi=new Map;o.set(a,l)}else o=bi,l=o.get(a),l||(l=new Map,o.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var i=a[o];if(!(i[_l]||i[gt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var p=l.get(c);p?p.push(i):l.set(c,[i])}}return l}function ch(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _g(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=dl(l.href),i=t.querySelector(ao(o));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_i.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,ht(i);return}i=t.ownerDocument||t,l=ih(l),(o=Ft.get(o))&&Jr(l,o),i=i.createElement("link"),ht(i);var c=i;c._p=new Promise(function(p,S){c.onload=p,c.onerror=S}),_t(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_i.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Qr=0;function xg(e,t){return e.stylesheets&&e.count===0&&Si(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Si(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Qr===0&&(Qr=62500*tg());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Si(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Qr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function _i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Si(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xi=null;function Si(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xi=new Map,t.forEach(Sg,e),xi=null,_i.call(e))}function Sg(e,t){if(!(t.state.loading&4)){var a=xi.get(e);if(a)var l=a.get(null);else{a=new Map,xi.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var c=o[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}o=t.instance,c=o.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,o),a.set(c,o),this.count++,l=_i.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),i?i.parentNode.insertBefore(o,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var oo={$$typeof:k,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function wg(e,t,a,l,o,i,c,p,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.hiddenUpdates=qi(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function dh(e,t,a,l,o,i,c,p,S,G,X,V){return e=new wg(e,t,a,c,S,G,X,V,p),t=1,i===!0&&(t|=24),i=zt(3,null,null,t),e.current=i,i.stateNode=e,t=As(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Ms(i),e}function ph(e){return e?(e=Ia,e):Ia}function hh(e,t,a,l,o,i){o=ph(o),l.context===null?l.context=o:l.pendingContext=o,l=In(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Xn(e,l,t),a!==null&&(Dt(a,e,t),Hl(a,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Vr(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ma(e,67108864);t!==null&&Dt(t,e,67108864),Vr(e,67108864)}}function gh(e){if(e.tag===13||e.tag===31){var t=Lt();t=Ii(t);var a=ma(e,t);a!==null&&Dt(a,e,t),Vr(e,t)}}var wi=!0;function Tg(e,t,a,l){var o=z.T;z.T=null;var i=U.p;try{U.p=2,Kr(e,t,a,l)}finally{U.p=i,z.T=o}}function Eg(e,t,a,l){var o=z.T;z.T=null;var i=U.p;try{U.p=8,Kr(e,t,a,l)}finally{U.p=i,z.T=o}}function Kr(e,t,a,l){if(wi){var o=$r(l);if(o===null)zr(e,t,l,Ti,a),vh(e,l);else if(Ng(o,e,t,a,l))l.stopPropagation();else if(vh(e,l),t&4&&-1<Ag.indexOf(e)){for(;o!==null;){var i=Da(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=mn(i.pendingLanes);if(c!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var S=1<<31-Tt(c);p.entanglements[1]|=S,c&=~S}dn(i),(Be&6)===0&&(ii=ve()+500,Fl(0))}}break;case 31:case 13:p=ma(i,2),p!==null&&Dt(p,i,2),ri(),Vr(i,2)}if(i=$r(l),i===null&&zr(e,t,l,Ti,a),i===o)break;o=i}o!==null&&l.stopPropagation()}else zr(e,t,l,null,a)}}function $r(e){return e=Pi(e),Wr(e)}var Ti=null;function Wr(e){if(Ti=null,e=ka(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ti=e,null}function yh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fn()){case ja:return 2;case mo:return 8;case ca:case Hi:return 32;case go:return 268435456;default:return 32}default:return 32}}var Pr=!1,ta=null,na=null,aa=null,io=new Map,so=new Map,la=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vh(e,t){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function ro(e,t,a,l,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Da(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ng(e,t,a,l,o){switch(t){case"focusin":return ta=ro(ta,e,t,a,l,o),!0;case"dragenter":return na=ro(na,e,t,a,l,o),!0;case"mouseover":return aa=ro(aa,e,t,a,l,o),!0;case"pointerover":var i=o.pointerId;return io.set(i,ro(io.get(i)||null,e,t,a,l,o)),!0;case"gotpointercapture":return i=o.pointerId,so.set(i,ro(so.get(i)||null,e,t,a,l,o)),!0}return!1}function bh(e){var t=ka(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,Oc(e.priority,function(){gh(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,Oc(e.priority,function(){gh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$r(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Wi=l,a.target.dispatchEvent(l),Wi=null}else return t=Da(a),t!==null&&mh(t),e.blockedOn=a,!1;t.shift()}return!0}function _h(e,t,a){Ei(e)&&a.delete(t)}function Cg(){Pr=!1,ta!==null&&Ei(ta)&&(ta=null),na!==null&&Ei(na)&&(na=null),aa!==null&&Ei(aa)&&(aa=null),io.forEach(_h),so.forEach(_h)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Pr||(Pr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cg)))}var Ni=null;function xh(e){Ni!==e&&(Ni=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ni===e&&(Ni=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(Wr(l||a)===null)continue;break}var i=Da(a);i!==null&&(e.splice(t,3),t-=3,$s(i,{pending:!0,data:o,method:a.method,action:l},l,o))}}))}function hl(e){function t(S){return Ai(S,e)}ta!==null&&Ai(ta,e),na!==null&&Ai(na,e),aa!==null&&Ai(aa,e),io.forEach(t),so.forEach(t);for(var a=0;a<la.length;a++){var l=la[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<la.length&&(a=la[0],a.blockedOn===null);)bh(a),a.blockedOn===null&&la.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var o=a[l],i=a[l+1],c=o[At]||null;if(typeof i=="function")c||xh(a);else if(c){var p=null;if(i&&i.hasAttribute("formAction")){if(o=i,c=i[At]||null)p=c.formAction;else if(Wr(o)!==null)continue}else p=c.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),xh(a)}}}function Sh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return o=c})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Fr(e){this._internalRoot=e}Ci.prototype.render=Fr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=Lt();hh(a,l,e,t,null,null)},Ci.prototype.unmount=Fr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hh(e.current,2,null,e,null,null),ri(),t[Ma]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<la.length&&t!==0&&t<la[a].priority;a++);la.splice(a,0,e),a===0&&bh(e)}};var wh=n.version;if(wh!=="19.2.4")throw Error(u(527,wh,"19.2.4"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var jg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{ua=ji.inject(jg),wt=ji}catch{}}return co.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,l="",o=Md,i=kd,c=Dd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=dh(e,1,!1,null,null,a,l,null,o,i,c,Sh),e[Ma]=t.current,Rr(e),new Fr(t)},co.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var l=!1,o="",i=Md,c=kd,p=Dd,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),t=dh(e,1,!0,t,a??null,l,o,S,i,c,p,Sh),t.context=ph(null),a=t.current,l=Lt(),l=Ii(l),o=In(l),o.callback=null,Xn(a,o,l),a=l,t.current.lanes=a,bl(t,a),dn(t),e[Ma]=t.current,Rr(e),new Ci(t)},co.version="19.2.4",co}var Nh;function ey(){if(Nh)return ec.exports;Nh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),ec.exports=Fg(),ec.exports}var ty=ey(),ac={exports:{}},lc={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function ny(){if(Ch)return lc;Ch=1;var r=ef().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return lc.c=function(n){return r.H.useMemoCache(n)},lc}var jh;function ay(){return jh||(jh=1,ac.exports=ny()),ac.exports}var Te=ay();const ly="_wrapper_bt1w8_2",oy="_header_bt1w8_10",iy="_headerActions_bt1w8_21",sy="_title_bt1w8_27",ry="_panelGroup_bt1w8_36",cy="_clipboardToggle_bt1w8_43",uy="_helpToggle_bt1w8_66",dy="_helpButtonWrapper_bt1w8_93",py="_helpTogglePulsing_bt1w8_97",hy="_helpHint_bt1w8_112",fy="_helpHintFading_bt1w8_139",my="_helpHintKbd_bt1w8_144",gy="_resizeHandle_bt1w8_153",Ot={wrapper:ly,header:oy,headerActions:iy,title:sy,panelGroup:ry,clipboardToggle:cy,helpToggle:uy,helpButtonWrapper:dy,helpTogglePulsing:py,helpHint:hy,helpHintFading:fy,helpHintKbd:my,resizeHandle:gy},yy=r=>{try{return!new DOMParser().parseFromString(r.trim(),"text/xml").querySelector("parsererror")}catch{return!1}},vy=r=>{try{return JSON.parse(r),!0}catch{return!1}},by=r=>r.trim()?vy(r)?{valid:!0,error:null,type:"json"}:yy(r)?{valid:!0,error:null,type:"xml"}:{valid:!1,error:"Invalid JSON/XML format",type:null}:{valid:!0,error:null,type:null},pc=r=>{try{const n=JSON.parse(r);return JSON.stringify(n,null,2)}catch{return r}},_y=()=>{const r=Te.c(8);let n;r[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],r[0]=n):n=r[0];const[s,u]=T.useState(n),d=T.useRef(0);let h;r[1]===Symbol.for("react.memo_cache_sentinel")?(h=new Set,r[1]=h):h=r[1];const b=T.useRef(h);let g,f;r[2]===Symbol.for("react.memo_cache_sentinel")?(g=()=>()=>{b.current.forEach(clearTimeout)},f=[],r[2]=g,r[3]=f):(g=r[2],f=r[3]),T.useEffect(g,f);let v;r[4]===Symbol.for("react.memo_cache_sentinel")?(v=(j,x)=>{const y=x===void 0?"info":x,N=d.current=d.current+1;u(k=>[...k,{id:N,message:j,type:y}]);const O=setTimeout(()=>{b.current.delete(O),u(k=>k.filter(Y=>Y.id!==N))},3e3);b.current.add(O)},r[4]=v):v=r[4];const w=v;let _;r[5]===Symbol.for("react.memo_cache_sentinel")?(_=j=>{u(x=>x.filter(y=>y.id!==j))},r[5]=_):_=r[5];const E=_;let M;return r[6]!==s?(M={toasts:s,addToast:w,removeToast:E},r[6]=s,r[7]=M):M=r[7],M},ia=(r,n)=>{const s=T.useCallback(()=>{try{const h=window.localStorage.getItem(r);return h?JSON.parse(h):n}catch{return n}},[r]),[u,d]=T.useState(s);return T.useEffect(()=>{d(s())},[r]),T.useEffect(()=>{try{window.localStorage.setItem(r,JSON.stringify(u))}catch(h){console.error(`Error setting localStorage key "${r}":`,h)}},[r,u]),T.useEffect(()=>{const h=b=>{(b.key===r||b.key===null)&&d(s())};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)},[r,s]),T.useEffect(()=>{const h=()=>d(s());return window.addEventListener("focus",h),document.addEventListener("visibilitychange",h),()=>{window.removeEventListener("focus",h),document.removeEventListener("visibilitychange",h)}},[s]),[u,d]},xy=200,Mh=50,Sy=8,wy=2e4,Rn=[{path:"/json-path",label:"JSON-Path",title:"JSON-Path Playground",wsPath:"/ws/json/path",storageKeyPayload:"jsonpath-last-payload",storageKeyHistory:"jsonpath-command-history",storageKeyTab:"jsonpath-right-tab",supportsUpload:!0,tabs:["payload","graph","graph-data"]},{path:"/",label:"Minigraph",title:"Minigraph Playground",wsPath:"/ws/graph/playground",storageKeyPayload:"minigraph-last-payload",storageKeyHistory:"minigraph-command-history",storageKeyTab:"minigraph-right-tab",storageKeySavedGraphs:"minigraph-saved-graphs",storageKeyHelpTopic:"minigraph-help-topic",supportsClipboard:!0,supportsHelp:!0,tabs:["graph","graph-data"]}],Di={json_simple:JSON.stringify({name:"John Doe",age:30,city:"New York"},null,2),json_nested:JSON.stringify({user:{name:"Jane Smith",profile:{email:"jane@example.com",address:{city:"San Francisco",country:"USA"}}}},null,2),json_array:JSON.stringify([{id:1,name:"Item 1",status:"active"},{id:2,name:"Item 2",status:"pending"},{id:3,name:"Item 3",status:"inactive"}],null,2),xml_simple:`<?xml version="1.0" encoding="UTF-8"?>
<person>
  <name>John Doe</name>
  <age>30</age>
  <city>New York</city>
</person>`,xml_nested:`<?xml version="1.0" encoding="UTF-8"?>
<user>
  <name>Jane Smith</name>
  <profile>
    <email>jane@example.com</email>
    <address>
      <city>San Francisco</city>
      <country>USA</country>
    </address>
  </profile>
</user>`,xml_array:`<?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <id>1</id>
    <name>Item 1</name>
    <status>active</status>
  </item>
  <item>
    <id>2</id>
    <name>Item 2</name>
    <status>pending</status>
  </item>
  <item>
    <id>3</id>
    <name>Item 3</name>
    <status>inactive</status>
  </item>
</items>`};function af(r){return`ws://${window.location.host}${r}`}function oc(r,n,s,u){const d=r[n]??{phase:"idle",messages:[]},h=[...d.messages,{id:s,raw:u}];return h.length>xy&&h.shift(),{...r,[n]:{...d,messages:h}}}function Ty(r,n){const s=r[n.path]??{phase:"idle",messages:[]};switch(n.type){case"CONNECTING":return{...r,[n.path]:{...s,phase:"connecting"}};case"CONNECTED":return oc({...r,[n.path]:{...s,phase:"connected"}},n.path,n.id,n.msg);case"MESSAGE_RECEIVED":return oc(r,n.path,n.id,n.msg);case"DISCONNECTED":return oc({...r,[n.path]:{...s,phase:"idle"}},n.path,n.id,n.msg);case"CONNECT_ERROR":return{...r,[n.path]:{...s,phase:"idle"}};case"CLEAR_MESSAGES":return{...r,[n.path]:{...s,messages:[]}};default:return r}}const lf=T.createContext(null);function Ey({children:r}){const[n,s]=T.useReducer(Ty,{}),u=T.useRef({}),d=T.useRef({}),h=T.useRef({});T.useEffect(()=>()=>{Object.entries(u.current).forEach(([R,I])=>{I==null||I.close();const J=d.current[R];J&&clearInterval(J)})},[]);const b=R=>af(R),g=R=>(h.current[R]=(h.current[R]??0)+1,h.current[R]),f=()=>{const R=new Date().toString(),I=R.indexOf("GMT");return I>0?R.substring(0,I).trim():R},v=(R,I)=>JSON.stringify({type:R,message:I,time:f()}),w=R=>{try{const I=JSON.parse(R);if(I!==null&&typeof I=="object"){const J=I.type;return J==="ping"||J==="pong"}}catch{}return!1},_=T.useCallback((R,I)=>{if(!window.WebSocket){I==null||I("WebSocket not supported by your browser","error");return}const J=u.current[R];if(J&&(J.readyState===WebSocket.OPEN||J.readyState===WebSocket.CONNECTING)){I==null||I("Already connected","error");return}s({type:"CONNECTING",path:R});const Z=new WebSocket(b(R));u.current[R]=Z,Z.onopen=()=>{s({type:"CONNECTED",path:R,id:g(R),msg:v("info","connected")}),I==null||I("Connected to WebSocket","success"),Z.send(JSON.stringify({type:"welcome"})),d.current[R]=setInterval(()=>{Z.readyState===WebSocket.OPEN&&Z.send(v("ping","keep alive"))},wy)},Z.onmessage=K=>{w(K.data)||s({type:"MESSAGE_RECEIVED",path:R,id:g(R),msg:K.data})},Z.onerror=()=>{s({type:"CONNECT_ERROR",path:R})},Z.onclose=K=>{const P=d.current[R];P&&(clearInterval(P),d.current[R]=null),s({type:"DISCONNECTED",path:R,id:g(R),msg:v("info",`disconnected - (${K.code}) ${K.reason}`)}),I==null||I("Disconnected from WebSocket","info"),u.current[R]===Z&&(u.current[R]=null)}},[]),E=T.useCallback(R=>{const I=u.current[R];I?I.close():s({type:"MESSAGE_RECEIVED",path:R,id:g(R),msg:v("error","already disconnected")})},[]);T.useEffect(()=>(Rn.forEach(R=>{_(R.wsPath)}),()=>{Rn.forEach(R=>{const I=u.current[R.wsPath];I&&I.close()})}),[]);const M=T.useCallback((R,I)=>{const J=u.current[R];return J&&J.readyState===WebSocket.OPEN?(J.send(I),!0):!1},[]),j=T.useCallback((R,I)=>{s({type:"MESSAGE_RECEIVED",path:R,id:g(R),msg:I})},[]),x=T.useCallback(R=>{s({type:"CLEAR_MESSAGES",path:R})},[]),[y,N]=T.useState({}),O=T.useCallback((R,I)=>{N(J=>{if(I===null){const Z={...J};return delete Z[R],Z}return{...J,[R]:I}})},[]),k=T.useCallback(R=>y[R]??null,[y]),Y=T.useCallback(R=>{const I=y[R]??null;return I!==null&&N(J=>{const Z={...J};return delete Z[R],Z}),I},[y]),C=T.useCallback(R=>n[R]??{phase:"idle",messages:[]},[n]),B=T.useMemo(()=>({getSlot:C,connect:_,disconnect:E,send:M,appendMessage:j,clearMessages:x,setPendingPayload:O,peekPendingPayload:k,takePendingPayload:Y}),[C,_,E,M,j,x,O,k,Y]);return m.jsx(lf.Provider,{value:B,children:r})}function Ec(){const r=T.useContext(lf);if(!r)throw new Error("useWebSocketContext must be used inside <WebSocketProvider>");return r}const Ay=r=>{try{const n=JSON.parse(r);return{type:n.type||"info",message:n.message||r,time:n.time,raw:r}}catch{return{type:"raw",message:r,time:null,raw:r}}},Ny=r=>({info:"ℹ️",error:"❌",ping:"🔄",welcome:"👋",raw:""})[r]??"•",fo=r=>{try{const n=JSON.parse(r);if(typeof n=="object"&&n!==null)return{isJSON:!0,data:n}}catch{}return{isJSON:!1,data:null}};function Cy(r){if(!r.includes("Graph exported to "))return null;const n=Nc(r);if(!n)return null;const s=n.split("/")[4];return s?{graphName:s,apiPath:n}:null}function jy(r){return r.includes("Invalid filename")?{reason:"invalid-name"}:r.includes("Expect root node name")?{reason:"root-name-conflict"}:null}function Ac(r){const n=fo(r);return n.isJSON?(typeof n.data.type=="string",!1):!0}function Nc(r){const n=r.match(/\/api\/graph\/model\/([^\s'"]+)/);return n?n[0]:null}function of(r){return Ac(r)?Nc(r)!==null:!1}function sf(r){const n=r.match(/\/api\/json\/content\/([\w-]+)/);return n?n[0]:null}function My(r){const n=r.match(/Large payload \((\d+)\)\s*->\s*GET\s+(\/api\/inspect\/[^\s]+)/i);if(!n)return null;const s=parseInt(n[1],10),u=n[2],h=`${u.split("/").filter(Boolean).pop()??"payload"}.json`;return{apiPath:u,byteSize:s,filename:h}}function ky(r){const n=r.match(/You may upload .*?->\s*POST\s+(\/api\/mock\/[\w-]+)/i);return n?n[1]:null}function Dy(r){if(!r.startsWith("> "))return!1;const n=r.slice(2).trim().toLowerCase();return n==="help"||n.startsWith("help ")?!0:n.startsWith("describe ")?!n.slice(9).trim().startsWith("graph"):!1}function Oy(r){if(!r.startsWith("> ")||!r.slice(2).trimStart().toLowerCase().startsWith("import graph from "))return null;const s=r.slice(2).trimStart().slice(18).trim();return s.length>0?s:null}function Ry(r){if(!Ac(r)||r.startsWith("> ")||of(r))return null;const n=r.toLowerCase();return n.includes("graph model imported as draft")?"import-graph":n.includes(" -> ")&&n.includes("removed")||n.startsWith("node ")&&(n.includes(" created")||n.includes(" updated")||n.includes(" deleted")||n.includes(" connected to ")||n.includes(" imported from ")||n.includes(" overwritten by node from "))?"node-mutation":null}const zy={command:"",historyIndex:-1,draftCommand:""};function By(r,n){switch(n.type){case"SET_COMMAND":return{...r,command:n.value,historyIndex:-1,draftCommand:""};case"CLEAR_COMMAND":return{...r,command:"",historyIndex:-1,draftCommand:""};case"SET_HISTORY_INDEX":return{...r,historyIndex:n.index,command:n.command};case"ENTER_HISTORY":return{...r,historyIndex:0,command:n.command,draftCommand:r.command};case"EXIT_HISTORY":return{...r,historyIndex:-1,command:r.draftCommand,draftCommand:""};default:return r}}function Hy(r){const n=Te.c(77),{wsPath:s,storageKeyHistory:u,payload:d,addToast:h,bus:b,handleLocalCommand:g}=r,f=Ec();let v;n[0]!==f||n[1]!==s?(v=f.getSlot(s),n[0]=f,n[1]=s,n[2]=v):v=n[2];const{phase:w,messages:_}=v,E=w==="connected",M=w==="connecting",[j,x]=T.useReducer(By,zy),{command:y,historyIndex:N}=j;let O;n[3]===Symbol.for("react.memo_cache_sentinel")?(O=[],n[3]=O):O=n[3];const[k,Y]=ia(u,O),C=T.useRef(null),B=T.useRef(!1);let R;n[4]===Symbol.for("react.memo_cache_sentinel")?(R=()=>{C.current&&(C.current.scrollTop=C.current.scrollHeight)},n[4]=R):R=n[4];let I;n[5]!==_?(I=[_],n[5]=_,n[6]=I):I=n[6],T.useEffect(R,I);let J;n[7]!==h||n[8]!==f||n[9]!==s?(J=()=>{f.connect(s,h)},n[7]=h,n[8]=f,n[9]=s,n[10]=J):J=n[10];const Z=J;let K;n[11]!==f||n[12]!==s?(K=()=>{f.disconnect(s)},n[11]=f,n[12]=s,n[13]=K):K=n[13];const P=K;let le;n[14]!==y||n[15]!==f||n[16]!==g||n[17]!==k||n[18]!==d||n[19]!==w||n[20]!==Y||n[21]!==s?(le=()=>{if(w!=="connected")return;const W=y.trim();if(W.length!==0){if((g==null?void 0:g(W))===!0){k[0]!==W&&Y(ye=>[W,...ye].slice(0,Mh)),f.appendMessage(s,"> "+W),x({type:"CLEAR_COMMAND"});return}f.send(s,W),k[0]!==W&&Y(ye=>[W,...ye].slice(0,Mh)),W==="load"&&(d.length===0?f.appendMessage(s,"ERROR: please paste JSON/XML payload in input text area"):f.send(s,d)),x({type:"CLEAR_COMMAND"})}},n[14]=y,n[15]=f,n[16]=g,n[17]=k,n[18]=d,n[19]=w,n[20]=Y,n[21]=s,n[22]=le):le=n[22];const te=le;let re;n[23]!==k||n[24]!==N?(re=W=>{if(W.key==="ArrowUp"){if(W.preventDefault(),k.length===0)return;if(N===-1)x({type:"ENTER_HISTORY",command:k[0]});else if(N<k.length-1){const ye=N+1;x({type:"SET_HISTORY_INDEX",index:ye,command:k[ye]})}}else if(W.key==="ArrowDown")if(W.preventDefault(),N<=0)N===0&&x({type:"EXIT_HISTORY"});else{const ye=N-1;x({type:"SET_HISTORY_INDEX",index:ye,command:k[ye]})}},n[23]=k,n[24]=N,n[25]=re):re=n[25];const z=re;let U,$;n[26]!==h||n[27]!==b||n[28]!==f||n[29]!==d||n[30]!==s?($=()=>{if(b)return b.on("upload.contentPath",W=>{if(!B.current)return;if(B.current=!1,d.length===0){f.appendMessage(s,"ERROR: please paste JSON/XML payload in the input text area");return}let ye;try{ye=JSON.stringify(JSON.parse(d))}catch{f.appendMessage(s,"ERROR: payload is not valid JSON — cannot upload");return}fetch(W.uploadPath,{method:"POST",headers:{"Content-Type":"application/json"},body:ye}).then(Ee=>{if(!Ee.ok)throw new Error(`HTTP ${Ee.status}`);h("Payload uploaded successfully","success")}).catch(Ee=>{f.appendMessage(s,`ERROR: upload failed — ${Ee.message}`),h(`Upload failed: ${Ee.message}`,"error")})})},U=[b,d,s,f,h],n[26]=h,n[27]=b,n[28]=f,n[29]=d,n[30]=s,n[31]=U,n[32]=$):(U=n[31],$=n[32]),T.useEffect($,U);let F,ee;n[33]!==h||n[34]!==b||n[35]!==f||n[36]!==_||n[37]!==d||n[38]!==s?(F=()=>{if(b||!B.current||_.length===0)return;const W=_[_.length-1].raw,ye=sf(W);if(!ye)return;if(B.current=!1,d.length===0){f.appendMessage(s,"ERROR: please paste JSON/XML payload in the input text area");return}let Ee;try{Ee=JSON.stringify(JSON.parse(d))}catch{f.appendMessage(s,"ERROR: payload is not valid JSON — cannot upload");return}fetch(ye,{method:"POST",headers:{"Content-Type":"application/json"},body:Ee}).then(fe=>{if(!fe.ok)throw new Error(`HTTP ${fe.status}`);h("Payload uploaded successfully","success")}).catch(fe=>{f.appendMessage(s,`ERROR: upload failed — ${fe.message}`),h(`Upload failed: ${fe.message}`,"error")})},ee=[b,_,d,s,f,h],n[33]=h,n[34]=b,n[35]=f,n[36]=_,n[37]=d,n[38]=s,n[39]=F,n[40]=ee):(F=n[39],ee=n[40]),T.useEffect(F,ee);let ce;n[41]!==h||n[42]!==f||n[43]!==d||n[44]!==w||n[45]!==s?(ce=()=>{if(w==="connected"){if(d.length===0){h("Nothing to upload — paste a JSON payload first","error");return}B.current=!0,f.send(s,"upload")}},n[41]=h,n[42]=f,n[43]=d,n[44]=w,n[45]=s,n[46]=ce):ce=n[46];const se=ce;let ne;n[47]!==f||n[48]!==w||n[49]!==s?(ne=W=>{w==="connected"&&f.send(s,W)},n[47]=f,n[48]=w,n[49]=s,n[50]=ne):ne=n[50];const ge=ne;let de;n[51]!==h||n[52]!==_?(de=()=>{navigator.clipboard.writeText(_.map(Gy).join(`
`)),h("Console copied to clipboard!","success")},n[51]=h,n[52]=_,n[53]=de):de=n[53];const me=de;let Me;n[54]!==h||n[55]!==f||n[56]!==s?(Me=()=>{f.clearMessages(s),h("Console cleared","info")},n[54]=h,n[55]=f,n[56]=s,n[57]=Me):Me=n[57];const He=Me;let Se;n[58]!==f||n[59]!==s?(Se=W=>{f.appendMessage(s,W)},n[58]=f,n[59]=s,n[60]=Se):Se=n[60];const Oe=Se;let oe;n[61]===Symbol.for("react.memo_cache_sentinel")?(oe=W=>x({type:"SET_COMMAND",value:W}),n[61]=oe):oe=n[61];const pe=oe;let be;return n[62]!==Oe||n[63]!==He||n[64]!==y||n[65]!==Z||n[66]!==E||n[67]!==M||n[68]!==me||n[69]!==P||n[70]!==z||n[71]!==k||n[72]!==_||n[73]!==te||n[74]!==ge||n[75]!==se?(be={connected:E,connecting:M,messages:_,command:y,setCommand:pe,connect:Z,disconnect:P,sendCommand:te,handleKeyDown:z,consoleRef:C,copyMessages:me,clearMessages:He,uploadPayload:se,sendRawText:ge,appendMessage:Oe,history:k},n[62]=Oe,n[63]=He,n[64]=y,n[65]=Z,n[66]=E,n[67]=M,n[68]=me,n[69]=P,n[70]=z,n[71]=k,n[72]=_,n[73]=te,n[74]=ge,n[75]=se,n[76]=be):be=n[76],be}function Gy(r){return r.raw}function Uy(r){const n=Te.c(5);let s;n[0]!==r?(s=()=>window.matchMedia(r).matches,n[0]=r,n[1]=s):s=n[1];const[u,d]=T.useState(s);let h,b;return n[2]!==r?(h=()=>{const g=window.matchMedia(r),f=v=>d(v.matches);return g.addEventListener("change",f),()=>g.removeEventListener("change",f)},b=[r],n[2]=r,n[3]=h,n[4]=b):(h=n[3],b=n[4]),T.useEffect(h,b),u}function kh(r){return typeof r!="object"||r===null?!1:Array.isArray(r.nodes)}function ic(r,n,s){const u=n.includes(s)?s:n[0]??"graph";return typeof r=="string"&&n.includes(r)?r:u}function Ly(r,n,s,u,d){const[h,b]=T.useState(null),[g,f]=ia(d,s),v=ic(g,u,s),[w,_]=T.useState(!1),E=T.useCallback(y=>{f(N=>{const O=ic(N,u,s),k=typeof y=="function"?y(O):y;return ic(k,u,s)})},[f,u,s]);T.useEffect(()=>{g!==v&&f(v)},[g,v,f]);const M=T.useRef(r);T.useEffect(()=>{M.current=r},[r]);const j=T.useRef(null);T.useEffect(()=>{if(!r)return;const y=new AbortController;return b(null),fetch(r,{signal:y.signal}).then(N=>{if(!N.ok)throw new Error(`HTTP ${N.status}`);return N.json()}).then(N=>{kh(N)&&(b(N),E("graph"))}).catch(N=>{N.name!=="AbortError"&&n(`Graph fetch failed: ${N.message}`,"error")}),()=>{y.abort()}},[r,n]);const x=T.useCallback(()=>{var O;const y=M.current;if(!y)return;(O=j.current)==null||O.abort();const N=new AbortController;j.current=N,_(!0),fetch(y,{signal:N.signal}).then(k=>{if(!k.ok)throw new Error(`HTTP ${k.status}`);return k.json()}).then(k=>{kh(k)&&b(k),_(!1)}).catch(k=>{k.name!=="AbortError"&&(n(`Graph refresh failed: ${k.message}`,"error"),_(!1))})},[]);return T.useEffect(()=>()=>{var y;(y=j.current)==null||y.abort()},[]),{graphData:h,setGraphData:b,rightTab:v,setRightTab:E,isRefreshing:w,refetchGraph:x}}function Yy(r){const n=Te.c(22),{bus:s,pinnedGraphPath:u,setPinnedGraphPath:d,connected:h,sendRawText:b,addToast:g}=r,f=T.useRef(null),v=T.useRef(!1),w=T.useRef(u),_=T.useRef(h),E=T.useRef(b);let M,j;n[0]!==u?(M=()=>{w.current=u},j=[u],n[0]=u,n[1]=M,n[2]=j):(M=n[1],j=n[2]),T.useEffect(M,j);let x,y;n[3]!==h?(x=()=>{_.current=h},y=[h],n[3]=h,n[4]=x,n[5]=y):(x=n[4],y=n[5]),T.useEffect(x,y);let N,O;n[6]!==b?(N=()=>{E.current=b},O=[b],n[6]=b,n[7]=N,n[8]=O):(N=n[7],O=n[8]),T.useEffect(N,O);let k,Y;n[9]!==h?(k=()=>{h||(v.current=!1,f.current!==null&&(clearTimeout(f.current),f.current=null))},Y=[h],n[9]=h,n[10]=k,n[11]=Y):(k=n[10],Y=n[11]),T.useEffect(k,Y);let C,B;n[12]!==s||n[13]!==d?(B=()=>s.on("graph.link",K=>{v.current&&(v.current=!1,d(K.apiPath))}),C=[s,d],n[12]=s,n[13]=d,n[14]=C,n[15]=B):(C=n[14],B=n[15]),T.useEffect(B,C);let R,I;n[16]!==g||n[17]!==s?(R=()=>s.on("graph.mutation",K=>{if(_.current){if(K.mutationType==="import-graph"){f.current!==null&&(clearTimeout(f.current),f.current=null),v.current=!0,E.current("describe graph"),g("Graph imported — refreshing view…","info");return}f.current!==null&&clearTimeout(f.current),f.current=setTimeout(()=>{f.current=null,_.current&&(v.current=!0,E.current("describe graph"),g(w.current!==null?"Graph updated — refreshing…":"Graph updated — opening Graph tab…","info"))},300)}}),I=[s,g],n[16]=g,n[17]=s,n[18]=R,n[19]=I):(R=n[18],I=n[19]),T.useEffect(R,I);let J,Z;n[20]===Symbol.for("react.memo_cache_sentinel")?(J=()=>()=>{f.current!==null&&clearTimeout(f.current)},Z=[],n[20]=J,n[21]=Z):(J=n[20],Z=n[21]),T.useEffect(J,Z)}const qy=`Connect two nodes together
--------------------------
1. Each connection is directional. Connect A to B is different from B to A.
2. A node must connect to one or more nodes. When a graph has orphan nodes, you cannot export the graph for deployment.

Syntax
------
\`\`\`
connect {node-A} to {node-B} with {relation}
\`\`\`
`,Iy=`Create a new node
-----------------
1. Root node must use the name 'root' and end node must use 'end'.
2. Skill is a property with the name 'skill'. A node has zero or one skill.
3. The 'create node' is a multi-line command 
4. Properties are optional for a graph model. If present, they are used as default value. 
5. For each property, you can use the "triple single quotes" to enter a multi-line value if needed. 
6. Node name and type should use lower case characters and hyphen only
7. Type and key-values will be used and validated by the node's skill function if any
8. The key of a property can be a composable key using the dot-bracket format.
   The value may use Event Script's constant syntax.

Syntax
------
\`\`\`
create node {name}
with type {type}
with properties
{key1}={value1}
{key2}={value2}
...
\`\`\`

Best practice
-------------
For root node, we recommend adding a "name" property as the graph name and "purpose" property to describe
the use case as a one-liner.

Example
-------
\`\`\`
create node root
with type Root
with properties
name=helloworld
purpose=Demo graph
...
\`\`\`
`,Xy=`Data Dictionary
---------------
Based on the MiniGraph technology, the data dictionary method requires (1) Data Dictionary items,
(2) Data Providers and (3) API Fetchers.

1. You can create a node holding a data dictionary item
2. A data dictionary item presents a data attribute that can be retrieved from a data provider using an API fetcher
3. It has 'input' and 'output' statements to define input parameter(s) and output data mapping respectively
4. Default value is supported using the colon (':') character (see example below)

Syntax
------
\`\`\`
create node {name}
with type Dictionary
with properties
purpose={something about this data dictionary item}
provider={data provider}
input[]={parameter}
output[]={data mapping from response object to result set}
\`\`\`

Example
-------
\`\`\`
create node person-name
with type Dictionary
with properties
purpose=name of a person
provider=mdm-profile
input[]=person_id
input[]=detail:true
output[]=response.profile.name -> result.person_name
\`\`\`

Data dictionary node holds key-values and it does not execute by itself. It is used by an API fetcher node.
Instead, the result set will be saved in the API fetcher node.

One or more data dictionary items can share the same data provider. For example, a complex data structure
is returned by a data provider, a single data dictionary item will get one or more data attributes.
If the same input key-values are applied to the same data provider, the API fetcher will only issue a single
API request.

Data Provider
-------------
1. A data provider is also a node
2. It describes the communication protocol with a target system providing a set of data attributes
3. It has 'url', 'method', 'feature', 'and 'input' statements

Syntax
------
\`\`\`
create node {name}
with type Provider
with properties
purpose={something about this provider if any}
url={url to target system}
method={GET | POST | PUT | PATCH | HEAD, etc.}
feature[]={authentication mechanism, encryption, etc.}
input[]={source -> target}
\`\`\`

Feature
-------
The list contains one of more optional features that an API fetcher using this provider must support.

Two built-in features are \`log-request-headers\` and \`log-response-headers\`. When these features are included, 
the fetcher will log request/response headers into the "header" section of its properties.

Input data mapping
------------------
The input data mapping is designed to do simple mapping with the following restriction:
- The left hand side (source) is limited to parameter of the data dictionary item or constants
- The right hand side (target) is allowed to use the following namespaces:

*Left hand side*

1. Constant
2. Input parameter for a data dictionary
3. Other value that is available in the state machine. e.g. "model." namespace.

*Right hand side*

1. \`body.\` - request body
2. \`header.\` - request header
3. \`query.\` - request query parameter
4. \`path_parameter.\` - URI path parameter

The following two examples illustrate a data provider configuration for a hypothetical profile management system

Example one
-----------
In the first example, it maps the parameter 'person_id' of the data dictionary to the path parameter 'id'.
It also maps the parameter 'detail' of the data dictionary to the query parameter 'id'

\`\`\`
create node mdm-profile
with type Provider
with properties
purpose=MDM profile management system
url=\${HOST}/api/mdm/profile/{id}
method=GET
feature[]=oauth-bearer
input[]=text(application/json) -> header.accept
input[]=person_id -> path_parameter.id
input[]=detail -> query.detail
\`\`\`

Example two
-----------
In the second example, it uses POST method and expects a request body containing the 'person_id' parameter.
Since it is a POST request, it requires the configuration of 'content-type' in the header section.
The 'body.' namespace is used to tell the system to map the input parameter in the API request body.
For some use cases, you may set the input parameter as the whole 'body'.
e.g. setting a string or an array as request body instead of key-values.

The 'feature' statement section contains 'oauth-bearer'. Therefore, you must configure an API fetcher that
supports this feature. Otherwise, the fetcher may throw exception. For demo purpose, we will configure
the 'graph.api.fetcher' that will just print a warning message if the feature is not supported.

Since the MiniGraph Playground system is extensible, you can always write a custom API fetcher to handle
new communication protocols and features.

\`\`\`
create node mdm-profile
with type Provider
with properties
purpose=MDM profile management system
url=\${HOST}/api/mdm/profile
method=POST
feature[]=oauth-bearer
input[]=text(application/json) -> header.accept
input[]=text(application/json) -> header.content-type
input[]=person_id -> body.id
input[]=detail -> query.detail
\`\`\`

API Fetcher
-----------
Data dictionary items are consumed by API fetcher. A built-in API fetcher is called "graph.api.fetcher".

Skill: Graph API Fetcher
------------------------
When a node is configured with this skill of "graph API fetcher", it will make an API call to a backend service
and collect result set into the "result" property of the node. In case of exception, the "status" and "error"
fields will be set to the node's properties and the graph execution will stop.

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.api.fetcher"

Setup
-----
To enable this skill for a node, set "skill=graph.api.fetcher" as a property in a node.
It will find out the data provider from a given data dictionary item to make an outgoing API call.

The following are required in the properties of the node:

1. dictionary - this is a list of valid data dictionary node names configured in the same graph model
2. input - one or more data mapping as input parameters to invoke the API call
3. output - one of more data mapping to map result set to another node or the 'output.' namespace

The parameter name in each mapping statement must match that in the data dictionary item.
Otherwise, execution will fail.

The system uses the same syntax of Event Script for data mapping.

Properties
----------
\`\`\`
skill=graph.api.fetcher
dictionary[]={data dictionary item}
input[]={mapping of key-value from input or another node to input parameter(s) of the data dictionary item(s)}
output[]={optional mapping of result set to one or more variables in the 'model.' or 'output.' namespace}
\`\`\`

Optional properties
-------------------
\`\`\`
for_each[]={map a result parameter that is an array into a model variable for iterative API execution}
concurrency={controls parallel API calls for an "iterative API request". Default 3, max 30}
\`\`\`

Dictionary
----------
This list contains one or more data dictionary item (aka 'data attribute')

Feature
-------
This API fetcher supports features configured in a data provider's node.

There are 2 built-in features that are convenience for development and tests:
- log-request-headers
- log-response-headers

When either or both of these features are added to a data provider's node,
the fetcher will log request/response headers into the "header" section
of its properties.

Input/Output Data mapping
-------------------------
source.composite.key -> target.composite.key

For input data mapping, the source can use a key-value from the \`input.\` namespace or another node.
The target can be a key-value in the state machine (\`model.\` namespace) or an input parameter name of the
data dictionary.

For output data mapping, the source can be a key-value from the result set and the target can use
the \`output.\` or \`model.\` namespace.

Output data mapping is optional because you can use another data mapper to map result set of the fetcher
to another node.

Result set
----------
Upon successful execution, the result set will be stored in the "result" parameter in the properties of
the node. A subsequent data mapper can then map the key-values in the result set to one or more nodes.

Example
-------
\`\`\`
create node fetcher-1
with properties
skill=graph.api.fetcher
dictionary[]=person-name
dictionary[]=person-address
dictionary[]=person-accounts
input[]=input.body.person_id -> person_id
output[]=result.person_name -> output.body.name
output[]=result.person_address -> output.body.address
\`\`\`

Iterative API call
------------------
Using the optional \`for_each\` statement, you can tell the API fetcher to do "fork-n-join" of API requests.

A "for_each" statement extracts the next array element from result set of a prior API call into a model variable.
You can then put the model variable in the "left-hand-side" of an input statement. The API fetcher will then
issue multiple API calls using an iterative stream of the model variable.

If your API call needs more than one parameter, you can configure more than one "for_each" statement.

Example
-------
In this example, the "for_each" statement extracts the "person_accounts" from the result of a prior API call
by "fetcher-1" and map the array into an iterative stream of elements using the model variable "account_id".

The concurrency property tells the API fetcher to limit parallelism to avoid overwhelming the target service.
\`\`\`
create node fetcher-2
with properties
skill=graph.api.fetcher
dictionary[]=person-id
dictionary[]=account-id
for_each[]=fetcher-1.result.person_accounts -> model.account_id
concurrency=3
input[]=input.body.person_id -> person_id
input[]=model.account_id -> account_id
output[]=result.person_name -> output.body.name
output[]=result.person_address -> output.body.address
\`\`\`

- The "[]" syntax is used to create and append a list of one or more data mapping entries
- The "->" signature indicates the direction of mapping where the left-hand-side is a source
  and right-hand-side is a target

Caution
-------
API fetchers can be chained together to make multiple API calls.
However, you should design the API chain to be minimalist.

An overly complex chain of API requests would mean slow performance. Just take the minimal set of data that are
required by your application. Don't abuse the flexibility of the API fetcher.
`,Jy=`Delete a node, a connection or clear cache
------------------------------------------

Syntax
------
Delete a node
\`\`\`
delete node {name}
\`\`\`

Delete the connections between two nodes if any
\`\`\`
delete connection {nodeA} and {nodeB}
\`\`\`

Clear cache for API fetchers
\`\`\`
clear cache
\`\`\`

Alias
-----
\`clear\` is an alias of \`delete\`
`,Zy="Describe graph, node, connection or skill\n-----------------------------------------\n\nSyntax\n------\nShow the structure of the current graph model\n```\ndescribe graph\n```\n\nPrint the structure of a node\n```\ndescribe node {name}\n```\n\nConfirm if there is a connection between node-A and node-B\n```\ndescribe connection {node-A} and {node-B}\n```\n\nSkill description of a specific composable function serving the skill\n```\ndescribe skill {skill.route.name}\n```\n",Qy=`Edit a node
-----------
This is a convenience feature to populate an "update node" command with raw input data.

Syntax
------
\`\`\`
edit node {name}
with type {type}
with properties
{key1}={value1}
{key2}={value2}
...
\`\`\`

Example
-------
\`\`\`
edit node demo-node
...
\`\`\`

The above command will print the raw input data of "demo-node" if it exists.
You can then edit the raw input data and submit the update.

Sample output
-------------
\`\`\`
update node demo-node
with type Demo
with properties
hello=world
test='''
this is a sample multiple key-value
line two
line three
'''
good=day
...
\`\`\`
`,Vy=`Execute a node with a skill
---------------------------
1. Execution is performed only when the node has a skill
2. The skill property must contain only one skill route
3. The system will invoke the skill providing function
4. Graph traversal is disabled to isolate the execution for functional verification

Syntax
------
\`\`\`
execute node {name}
\`\`\`

Short form
----------
\`\`\`
execute {node-name}
\`\`\`
`,Ky=`Export a graph model
--------------------
1. This command exports a graph as a model in JSON format for deployment
2. The name does not require the ".json" extension

Syntax
------
\`\`\`
export graph as {name}
\`\`\`
`,$y=`Skill: Graph API Fetcher
------------------------
When a node is configured with this skill of "graph API fetcher", it will make an API call to a backend service
and collect result set into the "result" property of the node. In case of exception, the "status" and "error"
fields will be set to the node's properties and the graph execution will stop.

Execution will start when the GraphExecutor reaches the node containing this skill.

Pre-requisite
-------------
Please refer to the "data dictionary" documentation using "help data-dictionary" before creating an API fetcher node.

Route name
----------
"graph.api.fetcher"

Setup
-----
To enable this skill for a node, set "skill=graph.api.fetcher" as a property in a node.
It will find out the data provider from a given data dictionary item to make an outgoing API call.

The following are required in the properties of the node:

1. dictionary - this is a list of valid data dictionary node names configured in the same graph model
2. input - one or more data mapping as input parameters to invoke the API call
3. output - one of more data mapping to map result set to another node or the 'output.' namespace

The parameter name in each mapping statement must match that in the data dictionary item.
Otherwise, execution will fail.

The system uses the same syntax of Event Script for data mapping.

Properties
----------
\`\`\`
skill=graph.api.fetcher
dictionary[]={data dictionary item}
input[]={mapping of key-value from input or another node to input parameter(s) of the data dictionary item(s)}
output[]={optional mapping of result set to one or more variables in the 'model.' or 'output.' namespace}
\`\`\`

Optional properties
-------------------
\`\`\`
for_each[]={map an array parameter for iterative API execution}
concurrency={controls parallel API calls for an "iterative API request". Default 3, max 30}
exception={exception-handler-node-name}
\`\`\`

Dictionary
----------
This list contains one or more data dictionary item (aka 'data attribute')

Feature
-------
This API fetcher supports features configured in a data provider's node.

There are 2 built-in features that are convenience for development and tests:
- log-request-headers
- log-response-headers

When either or both of these features are added to a data provider's node, 
the fetcher will log request/response headers into the "header" section
of its properties.

Input/Output Data mapping
-------------------------
source.composite.key -> target.composite.key

For input data mapping, the source can use a key-value from the \`input.\` namespace or another node.
The target can be a key-value in the state machine (\`model.\` namespace) or an input parameter name of the
data dictionary.

For output data mapping, the source can be a key-value from the result set and the target can use
the \`output.\` or \`model.\` namespace.

Output data mapping is optional because you can use another data mapper to map result set of the fetcher
to another node.

Result set
----------
Upon successful execution, the result set will be stored in the "result" parameter in the properties of
the node. A subsequent data mapper can then map the key-values in the result set to one or more nodes.

Example
-------
\`\`\`
create node fetcher-1
with properties
skill=graph.api.fetcher
dictionary[]=person_name
dictionary[]=person_address
dictionary[]=person_accounts
input[]=input.body.person_id -> person_id
output[]=result.person_name -> output.body.name
output[]=result.person_address -> output.body.address
\`\`\`

Iterative API call
------------------
Using the optional \`for_each\` statement, you can tell the API fetcher to do "fork-n-join" of API requests.

A "for_each" statement extracts the next array element from result set of a prior API call into a model variable.
You can then put the model variable in the "left-hand-side" of an input statement. The API fetcher will then
issue multiple API calls using an iterative stream of the model variable.

If your API call needs more than one parameter, you can configure more than one "for_each" statement.

Example
-------
In this example, the "for_each" statement extracts the "person_accounts" from the result of a prior API call
by "fetcher-1" and map the array into an iterative stream of elements using the model variable "account_id".

The concurrency property tells the API fetcher to limit parallelism to avoid overwhelming the target service.
\`\`\`
create node fetcher-2
with properties
skill=graph.api.fetcher
dictionary[]=person_id
dictionary[]=account_id
for_each[]=fetcher-1.result.person_accounts -> model.account_id
concurrency=3
input[]=input.body.person_id -> person_id
input[]=model.account_id -> account_id
output[]=result.person_name -> output.body.name
output[]=result.person_address -> output.body.address
\`\`\`

- The "[]" syntax is used to create and append a list of one or more data mapping entries
- The "->" signature indicates the direction of mapping where the left-hand-side is a source
  and right-hand-side is a target

Custom error handling
---------------------
By default, when an API request fails, the system will abort the graph execution and return the error code
and message to the caller.

If you want to handle the exception in your graph model, you can set the node-name of the error-handler in
the "exception" property to tell the system to traverse to the error-handler node.

To handle an exception, the error-handler node should be a decision-making node using the graph.math or graph.js skill.
It can evaluate the status code and error in the API fetcher node to determine the next step.

Caution
-------
API fetchers can be chained together to make multiple API calls. 
However, you should design the API chain to be minimalist.

An overly complex chain of API requests would mean slow performance. Just take the minimal set of data that are
required by your application. Don't abuse the flexibility of the API fetcher.
`,Wy=`Skill: Graph Data Mapper
------------------------
When a node is configured with this skill of "data mapping", it will execute a set of data mapping entries
to populate data attributes into one or more nodes where each node represents a data entity.

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.data.mapper"

Setup
-----
To enable this skill for a node, set "skill=graph.data.mapper" as a property in a node.
One or more data mapping entries can be added to the property "mapping".

Properties
----------
\`\`\`
skill=graph.data.mapper
mapping[]=source -> target
\`\`\`

The system uses the same syntax of Event Script for data mapping.

Execution
---------
Upon successful execution, key-values will be populated to one or more nodes.

Syntax for mapping
------------------
source.composite.key -> target.composite.key

The source composite key can use the following namespaces:
1. "input." namespace to map key-values from the input header or body of an incoming request
2. Node name (aka 'alias') to map key-values of a node's properties
3. "model." namespace for holding intermediate key-values for simple data transformation

The target composite key can use the following namespaces:
1. "output." namespace to map key-values to the result set to be returned as response to the calling party
2. Node name (aka 'alias') to map key-values of a node's properties
3. "model." namespace for holding intermediate key-values for simple data transformation

Example
-------
\`\`\`
create node my-simple-mapper
with properties
skill=graph.data.mapper
mapping[]=input.body.hr_id -> employee.id
mapping[]=input.body.join_date -> employee.join_date
\`\`\`

The "[]" syntax is used to create and append a list of one or more data mapping entries
The "->" signature indicates the direction of mapping where the left-hand-side is source and right-hand-side is target
`,Py=`Skill: Graph Extension
----------------------
When a node is configured with this skill of "graph extension", it will make an API call to another graph model
(or flow) and collect result set into the "result" property of the node. In case of exception, the "status" and
"result.error" fields will be set to the node's properties and the graph execution will stop.

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.extension"

Setup
-----
To enable this skill for a node, set "skill=graph.extension" as a property in a node.

The following parameters are required in the properties of the node:

1. extension - this should be a valid graph model name or flow identifier in the same memory space
2. input - this should include one or more data mapping as input parameters to invoke the API call

A flow identifier is prefixed by a flow protocol signature "flow://". e.g. "flow://hello-world".

The system uses the same syntax of Event Script for data mapping.

Properties
----------
\`\`\`
skill=graph.extension
extension=graph-id or flow-id
input[]={mapping of key-value from input or another node to input parameter(s) of the data dictionary item(s)}
output[]={optional mapping of result set to one or more variables in the 'model.' or 'output.' namespace}
\`\`\`

Optional properties
-------------------
\`\`\`
for_each[]={map an array parameter for iterative API execution}
concurrency={controls parallel API calls for an "iterative API request". Default 3, max 30}
exception={error-handler-node-name}
\`\`\`

Result set
----------
Upon successful execution, the result set will be stored in the "result" parameter in the properties of
the node. A subsequent data mapper can then map the key-values in the result set to one or more nodes.

Input Data mapping
------------------
source.composite.key -> target.composite.key

For input data mapping, the source can use a key-value from the \`input.\` namespace or another node.
The target can be a key-value in the state machine (\`model.\` namespace) or an input parameter name of the
data dictionary.

Example
-------
\`\`\`
create node performance-evaluator
with properties
skill=graph.extension
extension=evaluate-sales-performance
input[]=input.body.department_id -> id
output[]=result.sales_performance -> output.body.sales_performance
\`\`\`

Iterative API call
------------------
Using the optional \`for_each\` statement, you can tell the "Extension" skill to do "fork-n-join" of API requests.

A "for_each" statement extracts the next array element from a node result set into a model variable.
You can then put the model variable in the "left-hand-side" of the mapping statement. The skill will then
issue multiple API calls using an iterative stream of the model variable.

If your API call needs more than one parameter, you can configure more than one "for_each" statement.

The concurrency property tells the skill to limit parallelism to avoid overwhelming the target service.

The "[]" syntax is used to create and append a list of one or more data mapping entries
The "->" signature indicates the direction of mapping where the left-hand-side is source and right-hand-side is target

Custom error handling
---------------------
By default, when an API request fails, the system will abort the graph execution and return the error code
and message to the caller.

If you want to handle the exception in your graph model, you can set the node-name of the error-handler in
the "exception" property to tell the system to traverse to the error-handler node.

To handle an exception, the error-handler node should be a decision-making node using the graph.math or graph.js skill.
It can evaluate the status code and error in the API fetcher node to determine the next step.
`,Fy=`Skill: Graph Island
-------------------
The purpose of a node with this skill is to tell the system to block graph traversal.

In this way, we can use this node as a connector to data entities and other things that are used to
represent some knowledge. We don't want to system to actively executing the nodes on the "isolated island".

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.island"

Setup
-----
To enable this skill for a node, set "skill=graph.island" as a property in a node.
This node does not require additional properties.

Properties
----------
\`\`\`
skill=graph.island
\`\`\`

Execution
---------
Upon successful execution, a node with this skill will return ".sink" to tell the system
that there is no need for further traversal.
`,e1=`Skill: Graph Join
-----------------
A node with this skill will wait for all connected nodes that join to this node to complete.

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.join"

Setup
-----
To enable this skill for a node, set "skill=graph.join" as a property in a node.
This node does not require additional properties.

Properties
----------
\`\`\`
skill=graph.join
\`\`\`

Execution
---------
Upon successful execution, a node with this skill will return "next" if all connected nodes to finish
processing. Otherwise, it will return ".sink" to tell the system that it is not ready.
`,t1=`Skill: Graph JS
---------------
When a node is configured with this skill of "graph js", it will execute a set of simple JavaScript statements
to return result. For example, doing mathematical calculation or boolean operation for decision-making.

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.js"

Setup
-----
To enable this skill for a node, set "skill=graph.js" as a property in a node.
One or more statements can be added.

There are 5 types of statements:
1. "IF" statement for decision-making
2. "COMPUTE" statement to evaluate a mathematical formula
3. "MAPPING" statement to do data mapping from a source to a target variable
4. "EXECUTE" statement to execute another node with "graph.js" skill
5. "RESET" statement to reset one or more nodes from the state machine

You can configure one or more statements of these 3 types.

The system will reject execution if the node contains only "MAP" statements
because it is more efficient to use the "graph.data.mapper" skills for mapping
only operations.

Statements are executed orderly.

Properties
----------
\`\`\`
skill=graph.js
statement[]=COMPUTE: variable -> mathematical statement
statement[]=IF: if-then-else statement
statement[]=MAPPING: source -> target
statement[]=EXECUTE: another-node
\`\`\`

Node cannot be executed more than once
--------------------------------------
To avoid unintended looping, the system guarantees that a node, that has been "seen", is not executed again.

The \`reset\` command clears the "seen" status and erases its result from the state machine. This is reserved
for advanced use cases that require executing a node more than once. You should use this feature with care.

The following statement resets the node named "previous-node" so that the graph executor can run this node
again when conditional traversal points to the node.

\`\`\`
statement[]=RESET: previous-node
\`\`\`

Optional properties
-------------------
\`\`\`
for_each[]={map an array parameter for iterative statement execution}
statement[]=BEGIN
statement[]=END
statement[]=NEXT: {next-node-name}
statement[]=DELAY: {milliseconds}
\`\`\`

Execution
---------
Upon successful execution of a "COMPUTE" statement, the result set will be stored in the "result" namespace
of the node. A subsequent "MAPPING" statement can map the key-values in the result set to one or more nodes.

For an "IF" statement, the system will execute a boolean operation.
This process will override the natural graph traversal order and jump to a specific node.
If the function returns "next" after evaluation of all statements, the natural graph traversal order
will be preserved.

Iterative Execution and Begin-End
---------------------------------
Using the optional \`for_each\` statement, you can tell the skill module to execute the statements iteratively.

A "for_each" statement extracts the next array element from another array variable into a model variable.
You can then put the model variable in the "left-hand-side" of an input statement. The module will then
execute the statement block using an iterative stream of the model variable.

You can also use the \`BEGIN\` and \`END\` control statements to select a section of the statements for the
iterative execution based on the "for_each" criteria.

Syntax for COMPUTE statement
----------------------------
It will be a regular JavaScript statement with parameter substitution using the bracket syntax where
the enclosed parameter is a reference to a data attributes in the namespace of "input.", "model." or node name.

When you have more than one JavaScript statement, a subsequent statement can use the result of a prior statement
as its parameters.

Each parameter is wrapped by a set of curly brackets.

Override Graph Traversal
------------------------
Normally the next node is the one or more nodes that this node is connected to.
If you want to tell system to jump to a specific "next-node", you can use the "NEXT:" syntax and put the name
of the node to jump to.

Deferred completion
-------------------
You can add an artificial delay to defer completion of the execution of this node. This is useful to simulate
a slow service for performance test and to pause between retries.

Next and Delay statements
-------------------------
It is a good practice to place the next or delay statement, if any, as last one in the block.
However, the placement does not change the behavior because they will only be processed at the end.

Limitation
----------
This skill is designed to execute a simple inline JavaScript statement that uses standard JavaScript library.
Complex functions and variables are not recommended.

Example
-------
\`\`\`
create node demo-js-runner
with properties
skill=graph.js
statement[]=COMPUTE: amount -> (1 - {input.body.discount}) * {book.price}
\`\`\`

The syntax \`{variable_name}\` is used to resolve the value from the variable into the COMPUTE statement.

Syntax for IF statement
-----------------------
Each IF statement is a multiline command:
\`\`\`
IF: JavaScript-statement
THEN: node-name | next
ELSE: node-name | next
\`\`\`

The "next" keyword tells the system to execute the next statement.

The if-then-else is used to select two options after evaluation of the JavaScript statement.
If the JavaScript statement does not return a boolean value, the following resolution would apply:
1. numeric value - true is positive value and false is negative value
2. text value - "true", "yes", "T", "Y" are positive and all other values are false
3. other value will be converted to a text string first

Example
-------
\`\`\`
statement[]='''
IF: (1 - {input.body.discount}) * {book.price} > 5000
THEN: high-price
ELSE: low-price
\`\`\`

The syntax \`{variable_name}\` is used to resolve the value from the variable into the IF statement.

Syntax for MAPPING statement
----------------------------
MAPPING: source.composite.key -> target.composite.key

The source composite key can use the following namespaces:
1. "input." namespace to map key-values from the input header or body of an incoming request
2. Node name (aka 'alias') to map key-values of a node's properties
3. "model." namespace for holding intermediate key-values for simple data transformation

The target composite key can use the following namespaces:
1. "output." namespace to map key-values to the result set to be returned as response to the calling party
2. Node name (aka 'alias') to map key-values of a node's properties
3. "model." namespace for holding intermediate key-values for simple data transformation

Example
-------
\`\`\`
statment[]=MAPPING: input.body.hr_id -> employee.id
statement[]=MAPPING: input.body.join_date -> employee.join_date
\`\`\`

Note that the MAPPING statement operates exactly in the same way as a data-mapper so there is
no need to use curly braces to wrap around variables.

Syntax for EXECUTE statement
----------------------------
EXECUTE: another-node

Example
-------
\`\`\`
statment[]=EXECUTE: js-3
\`\`\`

The "[]" syntax is used to create and append a list of one or more statements
`,n1=`Skill: Graph Math
-----------------
When a node is configured with this skill of "graph math", it will execute a set of simple math or boolean statements
to return result. For example, doing mathematical calculation or boolean operation for decision-making.

While your math and/or boolean statements use JavaScript syntax, this skill does not support full JavaScript language.
Its capability is limited to simple math and boolean operations.

Examples for math statement: 
- \`COMPUTE: Math.sin(Math.PI / 2) + 1\`
- \`COMPUTE: value -> x ** 2 + 10 * {interest.rate}\`

where "interest" is a node-name and "rate" is a property of the node.
The return value is a floating point number with double precision.

Example for boolean statement: 
- \`IF: {member.age} >= 18\`
The return value is true or false to execute the THEN or ELSE path.

For performance reason, you should use this skill instead of the "graph.js" skill.

Execution will start when the GraphExecutor reaches the node containing this skill.

Route name
----------
"graph.math"

Setup
-----
To enable this skill for a node, set "skill=graph.math" as a property in a node.
One or more statements can be added.

There are 5 types of statements:
1. "IF" statement for decision-making
2. "COMPUTE" statement to evaluate a mathematical formula
3. "MAPPING" statement to do data mapping from a source to a target variable
4. "EXECUTE" statement to execute another node with "graph.math" skill
5. "RESET" statement to reset the state machine for one or more nodes

You can configure one or more statements of these 3 types.

The system will reject execution if the node contains only "MAP" statements
because it is more efficient to use the "graph.data.mapper" skills for mapping
only operations.

Statements are executed orderly.

Properties
----------
\`\`\`
skill=graph.math
statement[]=COMPUTE: variable -> mathematical statement
statement[]=IF: if-then-else statement
statement[]=MAPPING: source -> target
statement[]=EXECUTE: another-node
\`\`\`

Node cannot be executed more than once
--------------------------------------
To avoid unintended looping, the system guarantees that a node, that has been "seen", is not executed again.

The \`reset\` command clears the "seen" status and erases its result from the state machine. This is reserved
for advanced use cases that execute a node more than once. *This optional feature must be used with care*.

The following statement resets the node named "previous-node" so that the graph executor can run this node
again when conditional traversal points to the node.

\`\`\`
statement[]=RESET: previous-node
\`\`\`

Optional properties
-------------------
\`\`\`
for_each[]={map an array parameter for iterative statement execution}
statement[]=BEGIN
statement[]=END
statement[]=NEXT: {next-node-name}
statement[]=DELAY: {milliseconds}
\`\`\`

Execution
---------
Upon successful execution of a "COMPUTE" statement, the result set will be stored in the "result" namespace
of the node. A subsequent "MAPPING" statement can map the key-values in the result set to one or more nodes.

For an "IF" statement, the system will execute a boolean operation.
This process will override the natural graph traversal order and jump to a specific node.
If the function returns "next" after evaluation of all statements, the natural graph traversal order
will be preserved.

Iterative Execution and Begin-End
---------------------------------
Using the optional \`for_each\` statement, you can tell the skill module to execute the statements iteratively.

A "for_each" statement extracts the next array element from another array variable into a model variable.
You can then put the model variable in the "left-hand-side" of an input statement. The module will then
execute the statement block using an iterative stream of the model variable.

You can also use the \`BEGIN\` and \`END\` control statements to select a section of the statements for the
iterative execution based on the "for_each" criteria.

Syntax for COMPUTE statement
----------------------------
It will be a regular JavaScript statement with parameter substitution using the bracket syntax where
the enclosed parameter is a reference to a data attributes in the namespace of "input.", "model." or node name.

When you have more than one JavaScript statement, a subsequent statement can use the result of a prior statement
as its parameters.

Each parameter is wrapped by a set of curly brackets.

Override Graph Traversal
------------------------
Normally the next node is the one or more nodes that this node is connected to.
If you want to tell system to jump to a specific "next-node", you can use the "NEXT:" syntax and put the name
of the node to jump to.

Deferred completion
-------------------
You can add an artificial delay to defer completion of the execution of this node. This is useful to simulate
a slow service for performance test and to pause between retries.

Next and Delay statements
-------------------------
It is a good practice to place the next or delay statement, if any, as last one in the statement block.
However, the placement does not change the behavior because they will only be processed at the end.

Limitation
----------
This skill is designed to execute a simple inline mathematics or boolean operations that use JavaScript syntax.
For simplicity and speed of execution, it does not support variables and functions.

Example
-------
\`\`\`
create node demo-math-runner
with properties
skill=graph.math
statement[]=COMPUTE: amount -> (1 - {input.body.discount}) * {book.price}
\`\`\`

The syntax \`{variable_name}\` is used to resolve the value from the variable into the COMPUTE statement.

Syntax for IF statement
-----------------------
Each IF statement is a multiline command:
\`\`\`
IF: Boolean-operation-statement
THEN: node-name | next
ELSE: node-name | next
\`\`\`

The "next" keyword tells the system to execute the next statement.

The if-then-else is used to select two options after evaluation of the boolean operation statement.

Example
-------
\`\`\`
statement[]='''
IF: (1 - {input.body.discount}) * {book.price} > 5000
THEN: high-price
ELSE: low-price
\`\`\`

The syntax \`{variable_name}\` is used to resolve the value from the variable into the IF statement.

Syntax for MAPPING statement
----------------------------
MAPPING: source.composite.key -> target.composite.key

The source composite key can use the following namespaces:
1. "input." namespace to map key-values from the input header or body of an incoming request
2. Node name (aka 'alias') to map key-values of a node's properties
3. "model." namespace for holding intermediate key-values for simple data transformation

The target composite key can use the following namespaces:
1. "output." namespace to map key-values to the result set to be returned as response to the calling party
2. Node name (aka 'alias') to map key-values of a node's properties
3. "model." namespace for holding intermediate key-values for simple data transformation

Example
-------
\`\`\`
statment[]=MAPPING: input.body.hr_id -> employee.id
statement[]=MAPPING: input.body.join_date -> employee.join_date
\`\`\`

Note that the MAPPING statement operates exactly in the same way as a data-mapper so there is
no need to use curly braces to wrap around variables.

Syntax for EXECUTE statement
----------------------------
EXECUTE: another-node

Example
-------
\`\`\`
statment[]=EXECUTE: math-3
\`\`\`

The "[]" syntax is used to create and append a list of one or more statements
`,a1=`Import a graph model
--------------------
1. This command imports a graph as a model for review and update
2. The name does not require the ".json" extension

Syntax
------
\`\`\`
import graph from {name}
\`\`\`

Example
-------
\`\`\`
import graph from helloworld
\`\`\`

Import a node from another graph model
--------------------------------------
You can re-use nodes from another graph.

A best practice is to publish some common graph model holding reusable nodes as modules and skills
so that other members can borrow the nodes for use in their own graph models.

Syntax
------
\`\`\`
import node {node-name} from {graph-name}
\`\`\`

Example
-------
\`\`\`
import node fetcher from helloworld
\`\`\`
`,l1=`Inspect state machine
---------------------
This command inspects the state machine containing properties of nodes, input, output and model namespaces.

Pre-requisite
-------------
A graph instance is created with the "instantiate" command

Syntax
------
\`\`\`
inspect {variable_name}
\`\`\`

Examples
--------
\`\`\`
inspect {input.body.user_id}
inspect {book.price}
inpsect {model.some_variable}
inspect {output.body.some_key}
\`\`\`
`,o1=`Instantiate from a Graph Model
------------------------------
1. This command creates a graph instance with mock input from the current graph model for development and tests
2. You must do this before using "execute", "inspect" and "run" commands
3. The name does not require the ".json" extension
4. You can tell the system to mock one or more constants as input variables
5. The input namespace contains 'body' and 'header'
6. The model namespace is a state machine. It is optional unless you want to emulate some model variables.

Syntax
------
\`\`\`
instantiate graph
{constant} -> input.body.{key}
\`\`\`

Example
-------
\`\`\`
instantiate graph
int(100) -> input.body.profile_id
text(application/json) -> input.header.content-type
text(world) -> model.hello
\`\`\`

Alias
-----
\`start\` is an alias of \`instantiate\`
`,i1=`List nodes or connections
-------------------------
The "list nodes" and "list connections" commands list all the nodes and connections of the current graph model
respectively.

Syntax
------
\`\`\`
list nodes
\`\`\`

\`\`\`
list connections
\`\`\`
`,s1=`Run a graph instance
--------------------
1. This command runs a graph instance from a root node. Using graph traversal, it will execute any node with skill
   configured.
2. Each new instance can only be executed once.
3. You must close the current instance and instantiate a new one for the next "run" command.

Pre-requisite
-------------
A graph instance is created with the "instantiate" command

Syntax
------
\`\`\`
run
\`\`\`
`,r1=`Display nodes that have been 'seen'
-----------------------------------
This command displays the list of nodes that have been seen or executed.

Pre-requisite
-------------
A graph instance is created with the "instantiate" command

Syntax
------
\`\`\`
seen
\`\`\`
`,c1=`Tutorial 1
----------
Welcome to the MiniGraph Playground, the self-service user interface for creating amazing applications
using [Active Knowledge Graph](https://accenture.github.io/mercury-composable/guides/CHAPTER-11/)
(*right-click to open new tab*).

Let's get started.

In this session, you will create the simplest application that returns a "hello world" message.

Exercise
--------
If you can see this page, this means you have successfully started the MiniGraph Playground from a browser
and connected to a designer workbench session.

If your session is disconnected, select the "Tools" dropdown in the top-right corner, click MiniGraph's start
and select "MiniGraph".

Create a starting point of a graph
----------------------------------
**Create a root node** that is the starting point for a graph model.
Select multiline and enter the following command in the bottom-right inbox box.

\`\`\`
create node root
with type Root
with properties
purpose=Tutorial one to return a 'hello world' message
\`\`\`

The console displays:

\`\`\`
> create node root...
Graph with 1 node described in /api/graph/model/ws-875677-2/165-1
\`\`\`

A drawing will be shown on the right hand side under the "Graph" tab.

This means a graph with a single node called "root" has been created.

\`ws-875677-2\` is the session ID of the workbench.
\`165-1\` is a random number for the session that you can ignore.

Create an end node
------------------
An end node is the exit point of a graph model.

Enter the following to create an end node.

\`\`\`
create node end
with type End
with properties
skill=graph.data.mapper
mapping[]=text(hello world) -> output.body
\`\`\`

The console displays:

\`\`\`
> create node end...
Graph with 2 nodes described in /api/graph/model/ws-875677-2/061-2
\`\`\`

The "skill=graph.data.mapper" assigns the data mapper function to the end node.
In a data mapper, you can do data mapping. 

The mapping statement \`mapping[]=text(hello world) -> output.body\` tells the
system to map the constant "hello world" to \`output.body\` that is the response
payload when the graph is executed. The \`[]\` syntax means it is a list of statements.

The MiniGraph system uses the same Event Script's data mapping syntax. For more details, please refer to
[Data Mapping Syntax](https://accenture.github.io/mercury-composable/guides/CHAPTER-4/#tasks-and-data-mapping)
(*right-click to open new tab*).

First attempt to run a graph
----------------------------
To run a graph model, you can use the \`instantiate graph\` command.

The console displays:

\`\`\`
> instantiate graph
Graph instance created. Loaded 0 mock entries, model.ttl = 30000 ms
\`\`\`

When you enter "instantiate graph", you ask the system to create an "instance"
from a graph model.

You can now try to run the graph by entering the "run" command.

The console displays:

\`\`\`
> run
Walk to root
\`\`\`

The system will start running the graph from the starting point. i.e. the root node.
However, nothing happens after that.

What is missing?
----------------
Active Knowledge Graph is a "property graph" that contains one or more "active" nodes.
An active node is associated with a "skill" that is backed by a composable function.

The system performs graph traversal from the root node. There is nothing happened
because there are no further nodes to reach after the root node.

Graph traversal will stop when running in the MiniGraph Playground because the graph
model is incomplete without an "end" node.

Connecting nodes
----------------
Please enter the following command to connect the root node to the end node.

\`\`\`
connect root to end with done
\`\`\`

The console displays:

\`\`\`
> connect root to end with done
node root connected to end
Graph with 2 nodes described in /api/graph/model/ws-875677-2/551-3
\`\`\`

The graph model drawing is updated on the right panel.

Running the graph
-----------------
Now you have a graph that has a start and an ending point where one node contains a skill to do something.
i.e. the end node with a data mapping statement.

You can now instantiate the graph again and run it by entering the following commands.

\`\`\`
instantiate graph
run
\`\`\`

The console displays:

\`\`\`
> instantiate graph
Graph instance created. Loaded 0 mock entries, model.ttl = 30000 ms
> run
Walk to root
Walk to end
Executed end with skill graph.data.mapper in 1.736 ms
{
  "output": {
    "body": "hello world"
  }
}
Graph traversal completed in 9 ms
\`\`\`

Congratulations. You have create your first MiniGraph that works.
It returns "hello world" when it runs.

Export the graph
----------------
You may now export the graph so that you can deploy it to production.

Enter the export command below:

\`\`\`
export graph as tutorial-1
\`\`\`

This will export the graph model in JSON format with the name \`tutorial-1\`
in "/tmp/graph/helloworld.json"

The console displays:

\`\`\`
> export graph as tutorial-1
Added name=tutorial-1 to Root node
Graph exported to /tmp/graph/tutorial-1.json
Described in /api/graph/model/tutorial-1/436-4
\`\`\`

Note that the system will add the graph name (i.e. unique "id") to the root node.
This avoids the user from accidentally overwriting an existing graph model.

Help pages
----------
To display more information about each command that you use in this tutorial,
enter the following:

\`\`\`
help create
help connect
help instantiate
help run
help export
\`\`\`

Summary
-------
In this session, you have created the simplest graph model to return a "hello world" message when the graph
API endpoint is called. You have exported the graph model and tested some help pages.

Well done. Let's move on to "Tutorial 2".
`,u1=`Tutorial 10
-----------
In this session, you will create a graph model to use an extension.

Exercise
--------
You will use an existing graph model as an extension. Then create a new graph model to use the extension.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

What is a graph extension?
--------------------------
A graph extension is a graph model that is built to serve some logic that can be reused by another graph model.

Import tutorial 3 as an extension
---------------------------------
Enter the following to import tutorial 3. Note that tutorial-3.json is preloaded into the main/resources/graph
folder.

\`\`\`
> import graph from tutorial-3
Graph model not found in /tmp/graph/tutorial-3.json
Found deployed graph model in classpath:/graph
Please export an updated version and re-import to instantiate an instance model
Graph model imported as draft
\`\`\`

Once the graph model is imported, start the graph with mock data.

\`\`\`
start graph
int(100) -> input.body.person_id
\`\`\`

Then do a 'dry-run'

\`\`\`
> run
Walk to root
Walk to fetcher
Executed fetcher with skill graph.api.fetcher in 0.982 ms
Walk to end
{
  "output": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter"
    }
  }
}
Graph traversal completed in 2 ms
\`\`\`

You see that it fetches data using the input parameter (person_id=100) and return name and address of the person.

Restart playground session
--------------------------
You will clear the current graph session - click the Tools button in the top-right corner and click the "Stop" 
and "Start" toggle button. A new graph session will start.

Create a root node and an end node
----------------------------------
You will create a new graph model with root node and end node.

\`\`\`
create node root
with type Root
with properties
name=tutorial-10
purpose=Demonstrate the use of graph extension
\`\`\`

\`\`\`
create node end
with type End
\`\`\`

Create a node to use an extension
---------------------------------
Enter the following to create an extension node. The skill is 'extension' and the extension is 'tutorial-3'.

The input mapping sets the input parameter(s) to an extension which is also a graph model.
The output mapping sets the result from the extension to the output payload.

\`\`\`
create node extension
with type Extension
with properties
skill=graph.extension
extension=tutorial-3
input[]=input.body.person_id -> person_id
output[]=result -> output.body
\`\`\`

Connect the nodes to complete the graph model
---------------------------------------------

\`\`\`
connect root to extension with run
connect extension to end with finish
\`\`\`

Test the graph model
--------------------
Enter the following to instantiate the graph model with mock input.

\`\`\`
instantiate graph
int(100) -> input.body.person_id
\`\`\`

Then do a 'dry-run'.

\`\`\`
> run
Walk to root
Walk to extension
Executed extension with skill graph.extension in 19.013 ms
Walk to end
{
  "output": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter"
    }
  }
}
Graph traversal completed in 20 ms
\`\`\`

The input for the current graph instance is mapped as input parameter to the extension 'tutorial-3'.
The result is mapped as output for the graph.

If you inspect the extension node, you will see:

\`\`\`
> inspect extension
{
  "inspect": "extension",
  "outcome": {
    "result": {
      "address": "100 World Blvd",
      "name": "Peter"
    },
    "live": true,
    "target": "tutorial-3",
    "status": 200
  }
}
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter"
    }
  }
}
\`\`\`

Check the application log
-------------------------
Complete telemetry information is shown in the application log. You will see that 'tutorial-3' is invoked
as an extension and it fetches data from the data provider with the input parameter 'person_id'.

\`\`\`
GraphExtension:202 - Call extension tutorial-3, ttl=30000
GraphApiFetcher:410 - GET http://127.0.0.1:8085/api/mdm/profile/100, with [person_id], ttl=30000
\`\`\`

This is a trivial example to demonstrate that you can call an extension from a graph instance.
A typical use case is that the main graph model would use one or more extensions for API data fetching and perform
decision-making using the retrieved data.

Reusability
-----------
Graph extension promotes reusability. Common use cases can be built using graph models that are available as
"extensions" for another graph model to use.

Export the graph model
----------------------
Now you may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-10
Graph exported to /tmp/graph/tutorial-10.json
Described in /api/graph/model/tutorial-10/286-8
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-10.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-10 \\
  -H "Content-Type: application/json" \\
  -d '{ 
    "person_id": 100
}'
\`\`\`

Summary
-------
In this session, you have created a graph model that uses a graph extension.
`,d1=`Tutorial 11
-----------
In this session, you will create a graph model to use an "event flow" as an extension.

Pre-requisite
-------------
You would need some working knowledge with event script. For more details, please refer to
[Event Script Syntax](https://accenture.github.io/mercury-composable/guides/CHAPTER-4).

Assume you already know how to create an event flow (configuration and composable functions as tasks),
it is easy to use event flow as an extension.

What is a flow extension?
-------------------------
A flow extension is an event flow that is built to serve some logic that can be reused by a graph model.

Import graph model from Tutorial-10
-----------------------------------
In tutorial 10, you have created an extension in a main graph to call another graph.

You will update the graph model in tutorial 10 to call a flow as an extension.

\`\`\`
> import graph from tutorial-10
Graph exported to /tmp/graph/tutorial-11.json
Described in /api/graph/model/tutorial-11/431-3
\`\`\`

Edit the root node
------------------
Enter 'edit node root' and copy-n-paste the content into the inbox box. Change the name and purpose for
tutorial 11.

\`\`\`
update node root
with type Root
with properties
name=tutorial-11
purpose=Demonstrate the use of flow extension
\`\`\`

Edit the extension node
-----------------------
Enter 'edit node extension' and copy-n-paste the content into the inbox box. Update the extension to "flow://flow-11"
and change the input statements to pass "hello" and "message" as parameters. The flow protocol prefix tells the
system to execute the flow with the identifier "flow-11".

\`\`\`
update node extension
with type Extension
with properties
extension=flow://flow-11
input[]=input.body.hello -> hello
input[]=input.body.message -> message
output[]=result -> output.body
skill=graph.extension
\`\`\`

About flow 11
-------------
For your convenience, "flow-11" is preloaded. You can review the configuration files "flows.yaml" and "flow-11.yml"
in the resources folder. The event flow "flow-11" is an echo program. The task "no.op" will echo everything from
the input and pass it as output. Below is an extract of the event flow's first task.

\`\`\`yaml
tasks:
  - input:
      # pass all input parameters as arguments
      - 'input.body -> *'
    process: 'no.op'
    output:
      - 'result -> output.body'
    description: 'echo everything in the input payload'
    execution: end
\`\`\`

Perform a dry-run
-----------------
To test the updated graph model, you can instantiate the graph with the two input "hello" and "message" as follows:

\`\`\`
instantiate graph
text(world) -> input.body.hello
text(this is a good day) -> input.body.message
\`\`\`

Then enter 'run' to execute the graph.

\`\`\`
> start graph...
Graph instance created. Loaded 2 mock entries, model.ttl = 30000 ms
> run
Walk to root
Walk to extension
Executed extension with skill graph.extension in 5.46 ms
Walk to end
{
  "output": {
    "body": {
      "hello": "world",
      "message": "this is a good day"
    }
  }
}
Graph traversal completed in 7 ms
\`\`\`

You can also check the application log. Telemetry and tracing information are shown.

\`\`\`
GraphExtension:202 - Call extension flow://flow-11, ttl=30000
Telemetry:81 - {trace={path=/graph/playground, service=graph.extension...
Telemetry:81 - {trace={path=/graph/playground, service=no.op...
Telemetry:81 - {trace={path=/graph/playground, service=task.executor...
Telemetry:81 - {trace={path=/graph/playground, service=event.script.manager...
\`\`\`

This validates that the event flow instance for "flow-11" was executed by the graph instance for tutorial-11.

Export the graph model
----------------------
Now you may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-11
Graph exported to /tmp/graph/tutorial-11.json
Described in /api/graph/model/tutorial-11/794-6
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-11.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-11 \\
  -H "Content-Type: application/json" \\
  -d '{ 
    "hello": "world",
    "message": "this is a good day"
}'
\`\`\`

Summary
-------
In this session, we have discussed the use of an event flow as an extension to a graph model and
the use of the flow protocol prefix "flow://".

Why extending a graph model with event flow?
--------------------------------------------
While graph extension discussed in tutorial 10 can create sophisticated and powerful graph models,
extending a graph with event flow allows us to do things beyond simple API fetching, data mapping, computation
and decision-making.

With event flow, you can model very complex transaction processing with "pro-code". The combined graph modeling
and event script programming provides the best of both worlds in no-code and pro-code to tackle the most
demanding use cases.
`,p1=`Tutorial 10
-----------
In this session, you will create a graph model with custom error handling.

Exercise
--------
You will import tutorial 3 and add an error-handler node to retry an API failure.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

Import tutorial 3 as a template
-------------------------------
Enter the following to import tutorial 3. Note that tutorial-3.json is preloaded into the main/resources/graph
folder.

\`\`\`
> import graph from tutorial-3
Graph model not found in /tmp/graph/tutorial-3.json
Found deployed graph model in classpath:/graph
Please export an updated version and re-import to instantiate an instance model
Graph model imported as draft
\`\`\`

Update the root node
--------------------
Enter the following to update the root node. It assigns the skill "graph.data.mapper" to the node and
maps the input parameter "exception" to the model variable with the same name.

The \`f:defaultValue()\` plugin function sets the variable "model.exception" to false when the input
parameter is not given.

We will use the model.exception parameter to trigger a simulated exception for the mdm-profile service.

\`\`\`
update node root
with type Root
with properties
mapping[]=f:defaultValue(input.body.exception, boolean(false)) -> model.exception
name=tutorial-12
purpose=Demonstrate custom error handling
skill=graph.data.mapper
\`\`\`

Update the dictionary
---------------------
For person-address, you will add the input parameter \`exception:false\` where ":false" is the default value of
the parameter if not given.

\`\`\`
update node person-address
with type Dictionary
with properties
input[]=person_id
input[]=exception:false
output[]=response.profile.address -> result.address
provider=mdm-profile
purpose=address of a person
\`\`\`

and do the same for person-name

\`\`\`
update node person-name
with type Dictionary
with properties
input[]=person_id
input[]=exception:false
output[]=response.profile.name -> result.name
provider=mdm-profile
purpose=name of a person
\`\`\`

Update the data provider
------------------------
You will add the input data mapping \`exception -> header.x-exception\` to the mdm-profile node. The input parameter
"exception" is used to set the HTTP request header "X-Exception".

\`\`\`
update node mdm-profile
with type Provider
with properties
feature[]=log-request-headers
feature[]=log-response-headers
input[]=text(application/json) -> header.accept
input[]=exception -> header.x-exception
input[]=person_id -> path_parameter.id
method=GET
purpose=Master Data Management's profile management endpoint
url=http://127.0.0.1:\${rest.server.port:8080}/api/mdm/profile/{id}
\`\`\`

Update the fetcher node
-----------------------
You will add the input data mapping \`model.exception -> exception\` to set the parameter exception to retrieve
the two data dictionary items (person-name and person-address).

You also add the property \`exception=error-handler\`. This tells the system to route the flow to the "error-handler"
node.

\`\`\`
update node fetcher
with type Fetcher
with properties
dictionary[]=person-name
dictionary[]=person-address
exception=error-handler
input[]=input.body.person_id -> person_id
input[]=model.exception -> exception
output[]=result.name -> output.body.name
output[]=result.address -> output.body.address
skill=graph.api.fetcher
\`\`\`

The mock endpoint contains this:

\`\`\`java
@Override
public Object handleEvent(Map<String, String> headers, AsyncHttpRequest input, int instance) {
    if ("true".equals(input.getHeader("x-exception"))) {
        throw new AppException(401, "simulated exception");
    }
    // for simplicity, business logic not shown here
}
\`\`\`

Create Error-Handler node
-------------------------
You will then create the error-handler node that is referenced in the fetcher node above.

When the "exception" property is configured in a fetcher, the system will not abort the graph traversal, it will
route it to the given error handler.

In the handler, you test the "fetcher.status" variable to see if it is HTTP-200. While an error status is always
a value equals or larger than 200, it is a good practice to do simple validation to avoid unintended configuration
error.

If it is not 200, the statement block will execute. The first 2 mapping statements increment the variable
"model.attempts". The next evaluation statement checks if the maximum attempts have reached, it will clear
the simulated exception by routing to the "clear-exception" node.

The "NEXT: fetcher" statement tells the system to connect to the fetcher again. Since a node cannot be executed twice,
you use the "RESET:" command to clear its states so that it can be executed again.

The "DELAY: 50" means that it will pause for 50 milliseconds before the next retry. This is a best practice because
it avoids very rapid retries that may contribute to a side effect called "recovery storm" or 
"unintended denial-of-service attack".

\`\`\`
create node error-handler
with type Decision
with properties
skill=graph.math
statement[]='''
IF: {fetcher.status} == 200
THEN: end
ELSE: next
'''
statement[]=MAPPING: f:defaultValue(model.attempts, int(0)) -> model.attempts
statement[]=MAPPING: f:add(model.attempts, int(1)) -> model.attempts
statement[]='''
IF: {model.attempts} >= 3
THEN: clear-exception
ELSE: next
'''
statement[]=RESET: fetcher, error-handler
statement[]=NEXT: fetcher
statement[]=DELAY: 50
\`\`\`

Create the clear-exception node
-------------------------------
In the clear-exception node, you add statements to set the variable "model.exception" to false so that
the mock service will return normal response instead of an exception. You also clear the "model.attempts" to zero
and reset the fetcher and the clear-exception nodes so that the system can execute them again.

You will then create new connections to complete the exercise.

\`\`\`
create node clear-exception
with type Decision
with properties
skill=graph.math
statement[]=MAPPING: boolean(false) -> model.exception
statement[]=MAPPING: int(0) -> model.attempts
statement[]=RESET: fetcher, clear-exception
\`\`\`

Connections for error-handler and clear-exception nodes
-------------------------------------------------------

\`\`\`
connect error-handler to fetcher with retry
connect clear-exception to fetcher with reset
\`\`\`

Do a dry-run
------------
Enter the following to start the graph with mock input data. You are setting integer of 100 to person_id
and boolean value of "true" to exception in the input payload.

\`\`\`
start graph
int(100) -> input.body.person_id
boolean(true) -> input.body.exception
\`\`\`

Execute the run command

\`\`\`
> run
Walk to root
Executed root with skill graph.data.mapper in 0.231 ms
Walk to fetcher
Walk to dictionary
Executed dictionary with skill graph.island in 0.014 ms
Executed fetcher with skill graph.api.fetcher in 21.83 ms
Walk to error-handler
Executed error-handler with skill graph.math in 52.242 ms
Walk to fetcher
Executed fetcher with skill graph.api.fetcher in 8.025 ms
Walk to error-handler
Executed error-handler with skill graph.math in 51.824 ms
Walk to fetcher
Executed fetcher with skill graph.api.fetcher in 8.264 ms
Walk to error-handler
Executed error-handler with skill graph.math in 51.837 ms
Walk to clear-exception
Executed clear-exception with skill graph.math in 0.132 ms
Walk to fetcher
Executed fetcher with skill graph.api.fetcher in 0.547 ms
Walk to end
{
  "output": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter"
    }
  }
}
Graph traversal completed in 201 ms
\`\`\`

The graph traversal log shows that the "error-handler" node has been executed for 3 times before
the clear-exception node is executed. After clearing the exception, the mock service returns
a correct result set as "output".

Export the graph model
----------------------
Now you may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-12
Graph exported to /tmp/graph/tutorial-12.json
Described in /api/graph/model/tutorial-12/591-5
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-10.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-12 \\
  -H "Content-Type: application/json" \\
  -d '{ 
    "person_id": 100,
    "exception": true
}'
\`\`\`

Summary
-------
In this session, you have used tutorial-3 as a template and enhanced it with custom error handling.

You have used the keywords "RESET", "NEXT" and "DELAY" to reset the states of the nodes visited, to tell the
graph traversal system to route to a specific node and to introduce an artificial delay to avoid overwhelming
the target service.

IMPORTANT: Graph traversal loops
--------------------------------
The graph traversal system is designed to allow a node to be executed only once.

When using the keyword "RESET: node-name", the "seen" status and all state information are cleared so that the node
can be executed again. This would create a potential endless loop in graph traversal.

Therefore, please pay attention to have some decision logic to stop looping or retries.

As a protection mechanism, the system has a built-in loop detection logic. When a node is executed too frequently,
the graph traversal will be aborted.

The default parameters in \`application.properties\` are 10 visits per second for the same node.

\`\`\`properties
graph.max.loop.interval=1000
graph.node.high.frequency=10
\`\`\`
`,h1=`Tutorial 2
----------
In this session, you will deploy the graph model 'hello world' that you created in tutorial 1.

Exercise
--------
To deploy the graph model from tutorial 1, copy the 'tutorial-1.json' file that was exported earlier.

\`\`\`
cp /tmp/tutorial-1.json ~/sandbox/{your_minigraph_project}/src/main/resources/graph
\`\`\`

The default locations for the temp graph folder and the deployed graph folder are shown in the application.properties
file.

\`\`\`properties
#
# temp graph working location
# (temp graph location must use "file:/" prefix because of READ/WRITE requirements
#
location.graph.temp=file:/tmp/graph
#
# deployed graph model location
# (deployed graph location may use "file:/" or "classpath:/" because it is READ only
#
location.graph.deployed=classpath:/graph
\`\`\`

Invoke the graph API REST endpoint
----------------------------------
The generic graph API endpoint is \`POST /api/graph/{graph_id}\` where 'graph_id' is the name of the graph model.

To make a request to the 'tutorial-1' graph model, please enter the following curl command.

\`\`\`
> curl -X POST http://127.0.0.1:8085/api/graph/tutorial-1
hello world
\`\`\`

It will return 'hello world'.

Since the "hello world" graph model does not require any input parameter, you can also use HTTP-GET to execute
the graph.

\`\`\`
> curl http://127.0.0.1:8085/api/graph/tutorial-1
hello world
\`\`\`

In the application log, you will see the 'telemetry' of the event flow. The HTTP-POST request is received
by the 'http.flow.adapter' that executes a flow called 'graph-executor'.

The Graph Executor creates an instance of the graph, traverses from the "root" node and comes to the "end" node
that contains the "graph.data.mapper" skill. The data mapper sets the output as "hello world" that routes the
result to the "async.http.response" and the curl command receives.

\`\`\`
2026-03-31 15:19:08.052 INFO  org.platformlambda.core.services.Telemetry:81 - 
    {trace={path=POST /api/graph/tutorial-1, service=http.flow.adapter, success=true, 
     origin=20260331aa0d11b425ce44c79f00afa8947885fc, start=2026-03-31T22:19:08.051Z, exec_time=0.12, 
     from=http.request, id=2cc56126d544483abcdbc523f486a232, status=200}}
2026-03-31 15:19:08.055 INFO  org.platformlambda.core.services.Telemetry:81 - 
    {trace={path=POST /api/graph/tutorial-1, service=graph.data.mapper, success=true, 
     origin=20260331aa0d11b425ce44c79f00afa8947885fc, start=2026-03-31T22:19:08.054Z, exec_time=0.074, 
     from=graph.executor, id=2cc56126d544483abcdbc523f486a232, status=200}, annotations={node=end}}
2026-03-31 15:19:08.056 INFO  com.accenture.minigraph.services.GraphHousekeeper:44 - 
    Graph instance 2c1a00d63f7d4ec2b657db4a75021068 for model 'tutorial-1' cleared
2026-03-31 15:19:08.056 INFO  org.platformlambda.core.services.Telemetry:81 - 
    {trace={path=POST /api/graph/tutorial-1, service=task.executor, success=true, 
     origin=20260331aa0d11b425ce44c79f00afa8947885fc, exec_time=4.0, start=2026-03-31T22:19:08.051Z, 
     from=event.script.manager, id=2cc56126d544483abcdbc523f486a232, status=200}, 
     annotations={execution=Run 1 task in 4 ms, tasks=[{spent=3.477, name=graph.executor}], flow=graph-executor}}
2026-03-31 15:19:08.056 INFO  org.platformlambda.core.services.Telemetry:81 - 
    {trace={path=POST /api/graph/tutorial-1, service=async.http.response, success=true, 
    origin=20260331aa0d11b425ce44c79f00afa8947885fc, start=2026-03-31T22:19:08.055Z, exec_time=0.224, 
    from=task.executor, id=2cc56126d544483abcdbc523f486a232, status=200}}
2026-03-31 15:19:08.057 INFO  org.platformlambda.core.services.Telemetry:81 - 
    {trace={path=POST /api/graph/tutorial-1, service=graph.housekeeper, success=true, 
    origin=20260331aa0d11b425ce44c79f00afa8947885fc, start=2026-03-31T22:19:08.056Z, exec_time=0.241, 
    from=task.executor, id=2cc56126d544483abcdbc523f486a232, status=200}}
\`\`\`

Let's enhance the graph model to echo input.

Import the graph model
----------------------
You can import the tutorial-1 graph model like this:

\`\`\`
> import graph from tutorial-1
Graph model imported as draft
\`\`\`

The graph diagram is shown in the right panel under the "Graph" tab.

Edit the nodes
--------------
Enter an "edit node" command to print out the root node content.

\`\`\`
> edit node root
update node root
with type Root
with properties
name=tutorial-1
purpose=Tutorial one to return a 'hello world' message
\`\`\`

You can copy-n-paste the "update node" block into the input box and modify it as:

\`\`\`
update node root
with type Root
with properties
name=tutorial-2
purpose=Tutorial two to echo a user message
\`\`\`

Click enter and you will see:

\`\`\`
> update node root...
node root updated
\`\`\`

Then you will update the end root in the same fashion. Modify its content like this:

\`\`\`
update node end
with type End
with properties
mapping[]=input.body -> output.body
skill=graph.data.mapper
\`\`\`

Perform a Dry-Run
-----------------

To run the updated graph model, you can use the \`instantiate graph\` command with some mock input content.

\`\`\`
> instantiate graph
  text(it works) -> input.body.message
Graph instance created. Loaded 1 mock entry, model.ttl = 30000 ms
\`\`\`

In the above command, you insert the constant value "it works" into the "message" key in the "input.body"
namespace.

Enter "run" to do a dry-run and you will see this:

\`\`\`
> run
Walk to root
Walk to end
Executed end with skill graph.data.mapper in 0.43 ms
{
  "output": {
    "body": {
      "message": "it works"
    }
  }
}
Graph traversal completed in 2 ms
\`\`\`

Export the updated graph model
------------------------------
You may export the updated model graph as "tutorial 2".

\`\`\`
> export graph as tutorial-2
Graph exported to /tmp/graph/tutorial-2.json
Described in /api/graph/model/tutorial-2/235-7
\`\`\`

Deploy the graph model
----------------------
Repeat the deployment step in the beginning of this tutorial and apply it to 'tutorial-2'.

Test the deployed graph model
-----------------------------
Restart your application to load the deployed graphs into memory.

Send the following curl command

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-2 \\
  -H "Content-Type: application/json" \\
  -d '{
    "greeting": "Hello",
    "message": "it is a wonderful day"
  }'
\`\`\`

It will response with:

\`\`\`json
{
  "greeting": "Hello",
  "message": "it is a wonderful day"
}
\`\`\`

Summary
-------
In this session, you have completed the following exercise:

1. deploy the graph model 'tutorial-1' and invoke the API that executes the graph model as an instance
2. enhance the graph model from a simple 'hello world' application to an echo program
3. perform a dry-run with mock input to test the response
4. export the updated graph model as 'tutorial-2'
5. deploy 'tutorial-2' graph model
6. test the 'tutorial-2' graph model using a HTTP-POST command with some input payload
`,f1=`Tutorial 3
----------
In this session, you will learn about the data dictionary method to source data from an external service.

Exercise
--------
You will create a root node, an end node, a data dictionary node, a data provider node and an API fetcher node
as an exercise.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

Create root and end nodes
-------------------------
Enter the "create node" command for "root" and "end" nodes first.

\`\`\`
create node root
with type Root
with properties
name=tutorial-3
purpose=Demonstrate data sourcing using the Data Dictionary method
\`\`\`

\`\`\`
create node end
with type End
\`\`\`

Create data dictionary items
----------------------------
A data dictionary describes a "data attribute" and its "data provider". Please enter the following:

\`\`\`
create node person-name
with type Dictionary
with properties
purpose=name of a person
provider=mdm-profile
input[]=person_id
output[]=response.profile.name -> result.name

create node person-address
with type Dictionary
with properties
purpose=address of a person
provider=mdm-profile
input[]=person_id
output[]=response.profile.address -> result.address
\`\`\`

This command create two nodes called "person-name" and "person-address" with a data provider called "mdm-profile".
The input parameter to retrieve these data attribute from the data provider is "person_id".
The output section contains a data mapping statement that maps the response's key-value(s)
as the data dictionary's result set. The "response." and "result." are namespaces that
represent the response key-values from the data provider and the result key-values obtained
with this data dictionary.

In the "person-name" data dictionary, it tells the system to extract the "profile.name" data attribute from
the response's data structure and map it as the key "name".

Create a data provider
----------------------
The data dictionary assigns a data provider "mdm-profile". We will create a node for the
data provider.

\`\`\`
create node mdm-profile
with type Provider
with properties
purpose=Master Data Management's profile management endpoint
url=http://127.0.0.1:\${rest.server.port:8080}/api/mdm/profile/{id}
method=GET
feature[]=log-request-headers
feature[]=log-response-headers
input[]=text(application/json) -> header.accept
input[]=person_id -> path_parameter.id
\`\`\`

The "url" is the REST endpoint of the target service for "mdm-profile".
The \`\${rest.server.port:8080}\` is used to obtain a key-value from the application.properties or environment variable.
The colon syntax is optional. If yes, you can set a default value.

In this example, the url has a path parameter "id".

The "feature" section tells the system to apply pre-processing and/or post-processing of HTTP request/response.
The "log-request-headers" feature will log request headers, if any and the "log-response-headers" feature will
print the HTTP response headers from the target service. These 2 features are for demonstration purpose.
In real-world use case, you may implement an "oauth2-bearer" feature. We will discuss custom feature in a
subsequent tutorial.

The input section tells the system to map HTTP request headers, path parameter, query and/or body key-values.
The namespaces are:

\`\`\`
header.
query.
path_parameter.
body.
\`\`\`

The left hand side of the input mapping is the input parameter(s) from the associated data dictionary.

Create an API fetcher
---------------------
You will create a fetcher node like this:

\`\`\`
create node fetcher
with type Fetcher
with properties
skill=graph.api.fetcher
dictionary[]=person-name
dictionary[]=person-address
input[]=input.body.person_id -> person_id
output[]=result.name -> output.body.name
output[]=result.address -> output.body.address
\`\`\`

After this step, you will see 6 nodes in the graph diagram on the right panel.

Connect the fetcher
-------------------
You will connect the root node to the fetcher node and then connect it to the end node.

\`\`\`
> connect root to fetcher with fetch
node root connected to fetcher
> connect fetcher to end with complete
node fetcher connected to end
\`\`\`

Export the graph model
----------------------
The graph model is complete. Let's export it as 'tutorial-3'.

\`\`\`
> export graph as tutorial-3
Graph exported to /tmp/graph/tutorial-3.json
Described in /api/graph/model/tutorial-3/849-13
\`\`\`

Test the fetcher node
---------------------
Before you do a dry-run, you can test the fetcher alone because it is self-contained. It maps the input parameter
to 'person_id', makes an outgoing HTTP request using the data dictionary and returns the result as "output.body".

First, you can instantiate the graph model and mock the input parameter like this:

\`\`\`
instantiate graph
int(100) -> input.body.person_id
\`\`\`

The system will acknowledge your command as follows:

\`\`\`
> instantiate graph...
Graph instance created. Loaded 1 mock entry, model.ttl = 30000 ms
\`\`\`

Before you test the fetcher, you can check the input and output key-values with the \`inspect\` command:

\`\`\`
> inspect input
{
  "inspect": "input",
  "outcome": {
    "body": {
      "person_id": 100
    }
  }
}
> inspect output
{
  "inspect": "output",
  "outcome": {}
}
\`\`\`

When a graph model is instantiated, the system creates a temporary "state machine" for each graph instance.
The inspect command allows you to check the current key-values in the "state machine".

The above output shows that "person_id" of integer value 100 is stored in the input.body and there is nothing
in the "output.body".

You can now test the fetcher with the "execute" command:

\`\`\`
> execute fetcher
node fetcher run for 0.266 ms with exit path 'next'
\`\`\`

The system shows that fetcher has been executed and it is ready to continue to the next node.

Now you can inspect the "output" in the state machine again.

\`\`\`
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter"
    }
  }
}
\`\`\`

It shows that the result set contains name and address obtained from the target service correctly.

Dry-Run
-------

We know that the fetcher is configured correctly. You can do a dry-run from the beginning to the end.

You can clear the state machine by instantiating the graph model using the command earlier.

\`\`\`
instantiate graph
int(100) -> input.body.person_id
\`\`\`

\`\`\`
> instantiate graph...
Graph instance created. Loaded 1 mock entry, model.ttl = 30000 ms
\`\`\`

Verify that the output's key-values are cleared when you do \`inspect output\`. Then enter \`run\`.

\`\`\`
> run
Walk to root
Walk to fetcher
Executed fetcher with skill graph.api.fetcher in 14.456 ms
Walk to end
{
  "output": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter"
    }
  }
}
Graph traversal completed in 15 ms
\`\`\`

List nodes and connections
--------------------------
Before we close this session, let's check the nodes and connections for the graph model 'tutorial-3'.

Enter the \`list nodes\` and \`list connections\` commands:

\`\`\`
> list nodes
root [Root]
fetcher [Fetcher]
mdm-profile [Provider]
person-address [Dictionary]
person-name [Dictionary]
end [End]
> list connections
root -[fetch]-> fetcher
fetcher -[complete]-> end
\`\`\`

Note that data dictionary and data provider nodes do not need to be connected. It is because they are
"configuration" nodes. They are not active nodes that can be executed by themselves. The API fetcher node
uses the configuration given in the data dictionary and data provider to make an external API call.

For more details of the data dictionary method, you may enter "help data-dictionary".

Create an island to hold data dictionary
----------------------------------------
The data dictionary and data provider nodes are not connected. To organize, you can create an "island" node
to hold them.

\`\`\`
create node dictionary
with type Island
with properties
skill=graph.island
\`\`\`

Then you can connect the data dictionary nodes and provider node to it.

\`\`\`
> connect root to dictionary with contains
node root connected to dictionary
> connect dictionary to person-name with data
node dictionary connected to person-name
> connect dictionary to person-address with data
node dictionary connected to person-address
> connect person-name to mdm-profile with provider
node person-name connected to mdm-profile
> connect person-address to mdm-profile with provider
node person-address connected to mdm-profile
> list connections
root -[contains]-> dictionary
root -[fetch]-> fetcher
dictionary -[data]-> person-address
dictionary -[data]-> person-name
person-address -[provider]-> mdm-profile
person-name -[provider]-> mdm-profile
fetcher -[complete]-> end
\`\`\`

The purpose of an "island" node is to isolate sub-graph that does not require execution.
The data dictionary and provider nodes hold configuration for the API fetcher.
They are not executable by themselves.

Connecting data dictionary and provider nodes helps to describe the relationships, but this is not mandatory.

However, for data entities such as person, account and order, defining the directional connections with relationships
is a best practice that we recommend. It is because data entities and relationships represent enterprise knowledge.

To save the updated graph model, you should export it again.

\`\`\`
> export graph as tutorial-3
Graph exported to /tmp/graph/tutorial-3.json
Described in /api/graph/model/tutorial-3/287-4
\`\`\`

Deploy the graph model
----------------------
To deploy, you may copy "/tmp/graph/tutorial-3.json" into your application's main/resources/graph folder and
restart the application. You can use the following curl command to invoke the knowledge graph endpoint.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-3 \\
  -H "Content-Type: application/json" \\
  -d '{
    "person_id": 100
  }'
\`\`\`

Note that input parameters, if any, must be submitted as a POST request body with content type "application/json".

You will receive the following response:

\`\`\`json
{
  "address": "100 World Blvd",
  "name": "Peter"
}
\`\`\`

If you change the person_id to 10, you will receive an error because the test profile is set to 100.

\`\`\`json
{
  "message": "Profile 10 not found",
  "type": "error",
  "target": "person-name",
  "status": 400
}
\`\`\`

Well done! You have successfully created a graph model that can fetch external data.

API call optimization
---------------------
If you check the application log, you notice that each graph instance makes one HTTP call to
\`http://127.0.0.1:8085/api/mdm/profile/10\` only.

When the target URL and method for multiple data dictionary items and their input parameter(s)
are the same, the system will avoid making redundant API calls.

Therefore, it is important to configure the data dictionary and provider correctly so that
the system will efficiently fetch data.

Summary
-------
In this session, you have configured data dictionary and data provider. You have defined an API fetcher
node to use the data dictionary and data provider to fetch some data. You have deployed the graph model
and made an API request using CURL command.

You have also learnt how to organize data dictionary and provider nodes in an "island" (aka 'subgraph').
`,m1=`Tutorial 4
----------
In this session, you will setup simple mathematics and boolean operations in a graph model to make decision.

Exercise
--------
You will create a root node, an end node, a decision node as an exercise.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

Create root and end nodes
-------------------------
Enter the "create node" command for "root" and "end" nodes first.

\`\`\`
create node root
with type Root
with properties
name=tutorial-4
purpose=Demonstrate decision making using mathematics and boolean operations
\`\`\`

Assume there are two input parameters (a and b) and the 'decision' node will add the two numbers,
the end node will echo the input parameters and the sum of the two numbers.

\`\`\`
create node end
with type End
with properties
skill=graph.data.mapper
mapping[]=input.body.a -> output.body.a
mapping[]=input.body.b -> output.body.b
mapping[]=decision.result.c -> output.body.sum
\`\`\`

Create a decision node
----------------------
You may create node with skill 'graph.math' to do decision-making.

\`\`\`
create node decision
with type Decision
with properties
skill=graph.math
statement[]=COMPUTE: c -> {input.body.a} + {input.body.b}
statement[]='''
IF: {input.body.a} >= {input.body.b}
THEN: next
ELSE: less-than
'''
statement[]=MAPPING: text(a >= b) -> output.body.message
statement[]=MAPPING: boolean(false) -> output.body.less_than
\`\`\`

The skill "graph.math" supports statements for:

| Type         | Operation                                                    |
|--------------|--------------------------------------------------------------|
| COMPUTE      | to generate a value (LHS) from a mathematics operation (RHS) |
| IF-THEN-ELSE | to evaluate a condition with a boolean operation             |
| MAPPING      | to perform a data mapping operation                          |
| RESET        | to reset the current state of one or more nodes              |

We will discuss 'reset' feature in a more advanced tutorial chapter later.

You can use the 'triple single quote' syntax to create the IF-THEN-ELSE statement.

The IF statement is a boolean operation.
The THEN is the next step or another node when the IF statement is true.
The ELSE is the next step or another node when the IF statement is false.

Statements are evaluated in order. The 'next' statement refers to the one after the current IF-THEN-ELSE.
In the above example, the next statements are doing data mapping to set output key-values.

Create a node to handle the negative case
-----------------------------------------
Let's create a node called "less-than" to handle the negative case from the decision node.

\`\`\`
create node less-than
with type Reject
with properties
mapping[]=text(a < b) -> output.body.message
mapping[]=boolean(true) -> output.body.less_than
skill=graph.data.mapper
\`\`\`

The curly brace syntax \`{}\` is used to tell the system to get the value from the bracketed key.

A mapping statement does not need the curly brace syntax because it is designed for data mapping only where
the left-hand-side is a constant, an input parameter or a model variable and the right-hand-side is a model
variable or an output variable.

Connect the nodes
-----------------

\`\`\`
connect root to decision with evaluate
connect less-than to end with negative
connect decision to end with positive
\`\`\`

The "less-than" node is invoked by the decision node if "a < b". Therefore, it does not need to connect to the "root".
When it finishes execution, it will hand off to the "end" node. If you do a "list connections" command, you will see:

\`\`\`
> list connections
root -[evaluate]-> decision
decision -[positive]-> end
less-than -[negative]-> end
\`\`\`

You can also use the "describe node" command to see connections:

\`\`\`
> describe node decision
{
  "node": {
    "types": [
      "Decision"
    ],
    "alias": "decision",
    "id": "c9b30d7d8a6c4d49a88b5a9254fe44e2",
    "properties": {
      "skill": "graph.math",
      "statement": [
        "COMPUTE: c -> {input.body.a} + {input.body.b}",
        "IF: {input.body.a} > {input.body.b}
         THEN: next
         ELSE: less-than",        
        "MAPPING: text(a >= b) -> output.body.message",
        "MAPPING: boolean(false) -> output.body.less_than"
      ]
    }
  },
  "from": [
    "root"
  ],
  "to": [
    "end"
  ]
}
\`\`\`

Test positive case
------------------
To test a positive case, you can mock input value and instantiate the graph model. 
Note that "start" is an alias of "instantiate".

\`\`\`
start graph
int(100) -> input.body.a
int(50) -> input.body.b
\`\`\`

Then you can test the graph model with the "run" command:

\`\`\`
> run
Walk to root
Walk to decision
Executed decision with skill graph.math in 0.824 ms
Walk to end
Executed end with skill graph.data.mapper in 0.099 ms
{
  "output": {
    "body": {
      "a": 100,
      "b": 50,
      "less_than": false,
      "sum": 150.0,
      "message": "a >= b"
    }
  }
}
Graph traversal completed in 7 ms
\`\`\`

Test negative case
------------------

\`\`\`
start graph
int(180) -> input.body.a
int(250) -> input.body.b
\`\`\`

When you do a dry-run, it shows the following:

\`\`\`
> run
Walk to root
Walk to decision
Executed decision with skill graph.math in 0.394 ms
Walk to less-than
Executed less-than with skill graph.data.mapper in 0.054 ms
Walk to end
Executed end with skill graph.data.mapper in 0.051 ms
{
  "output": {
    "body": {
      "a": 180,
      "b": 250,
      "less_than": true,
      "sum": 430.0,
      "message": "a < b"
    }
  }
}
Graph traversal completed in 2 ms
\`\`\`

Export the graph model
----------------------
You may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-4
Graph exported to /tmp/graph/tutorial-4.json
Described in /api/graph/model/tutorial-4/804-24
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-4.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

Summary
-------
In this session, you have created a graph model to add two numbers together, compare the two numbers and return
a decision.

While this is a trivial example, it demonstrates that you can create very useful computation and evaluation
logic using an Active Knowledge Graph that contains just simple mathematics and boolean operation statements.
`,g1=`Tutorial 5
----------
In this session, we will explore parallel processing and sophisticated graph navigation using a node
with the skill 'graph.join'.

Exercise
--------
You will import the graph model from tutorial-3 and update it to fetch two user profiles at the same time.

Import a graph model
--------------------
Enter 'import graph from tutorial-3'

\`\`\`
> import graph from tutorial-3
Graph model not found in /tmp/graph/tutorial-3.json
Found deployed graph model in classpath:/graph
Please export an updated version and re-import to instantiate an instance model
\`\`\`

If you have not exported tutorial-3 earlier, the system will import it from a demo graph.

Examine the graph model
-----------------------
You can examine the graph model with the 'list nodes' and 'list connections' commands.

\`\`\`
> list nodes
root [Root]
fetcher [Fetcher]
mdm-profile [Provider]
person-address [Dictionary]
person-name [Dictionary]
end [End]
> list connections
root -[fetch]-> fetcher
fetcher -[complete]-> end
\`\`\`

Review the fetcher node
-----------------------
Enter 'edit node fetcher' to review the configuration of the node. The system displays the following:

\`\`\`
update node fetcher
with type Fetcher
with properties
dictionary[]=person-name
dictionary[]=person-address
input[]=input.body.person_id -> person_id
output[]=result.name -> output.body.name
output[]=result.address -> output.body.address
skill=graph.api.fetcher
\`\`\`

Create two new fetchers
-----------------------
Assume the use case that we want to fetch two user profiles at the same time. You will create two fetchers
like this:

\`\`\`
create node fetcher-1
with type Fetcher
with properties
dictionary[]=person-name
dictionary[]=person-address
input[]=input.body.person1 -> person_id
output[]=result.name -> model.fetcher-1.name
output[]=result.address -> model.fetcher-1.address
output[]=model.fetcher-1 -> output.body.profile[]
skill=graph.api.fetcher
\`\`\`

\`\`\`
create node fetcher-2
with type Fetcher
with properties
dictionary[]=person-name
dictionary[]=person-address
input[]=input.body.person2 -> person_id
output[]=result.name -> model.fetcher-2.name
output[]=result.address -> model.fetcher-2.address
output[]=model.fetcher-2 -> output.body.profile[]
skill=graph.api.fetcher
\`\`\`

When two skilled nodes are executed in parallel, we must pay attention to avoid one execution stepping
on the memory space of another one. In this case, we can use two temporary variables in the "state machine".

The state machine uses the namespace "model", we therefore use two variables \`model.fetcher-1\` and \`model.fetcher-2\`
to avoid concurrent updates to the same variable.

The final step of output data mapping is the use of array append syntax \`[]\`. This tells the system to append
the map containing name and address to the variable 'profile'.

Due to parallelism, the order of the array is undetermined. If you want to guarantee person1's result go to array
element-0 and person2 to element-1, set the array element index directly. e.g.

\`\`\`
output[]=model.fetcher-1 -> output.body.profile[0]
\`\`\`

\`\`\`
output[]=model.fetcher-2 -> output.body.profile[1]
\`\`\`

Since profile order does not matter in this tutorial, we will use the array append feature \`[]\`.

Create a join node
------------------
You can now create a "join" node like this:

\`\`\`
create node join
with type Join
with properties
skill=graph.join
\`\`\`

Remove the original fetcher node
--------------------------------
Enter 'delete node fetcher' to remove the original fetcher node.

\`\`\`
> delete node fetcher
node fetcher deleted
\`\`\`

After you have deleted the original fetcher, its connections to the root node and end node will be removed too.

Connect the new fetchers
------------------------
Please enter the following to define the graph navigation.

\`\`\`
connect root to fetcher-1 with one
connect root to fetcher-2 with two
connect fetcher-1 to join with join
connect fetcher-2 to join with join
connect join to end with done
\`\`\`

Do a 'list connections' to confirm the setup.

\`\`\`
> list connections
root -[one]-> fetcher-1
root -[two]-> fetcher-2
fetcher-1 -[join]-> join
fetcher-2 -[join]-> join
join -[done]-> end
\`\`\`

Perform a dry-run
-----------------
You may start the graph model with this mock input:

\`\`\`
start graph
int(100) -> input.body.person1
int(200) -> input.body.person2
\`\`\`

Then enter 'run' to execute the graph instance.

\`\`\`
> run
Walk to root
Walk to fetcher-2
Walk to fetcher-1
Executed fetcher-1 with skill graph.api.fetcher in 1.048 ms
Walk to join
Executed fetcher-2 with skill graph.api.fetcher in 0.931 ms
Walk to join
Executed join with skill graph.join in 0.04 ms
Walk to end
Executed join with skill graph.join in 0.017 ms
{
  "output": {
    "body": {
      "profile": [
        {
          "address": "100 World Blvd",
          "name": "Mary"
        },
        {
          "address": "100 World Blvd",
          "name": "Peter"
        }
      ]
    }
  }
}
Graph traversal completed in 6 ms
\`\`\`

If you check the application log, you will see the two fetchers are executed in parallel.

\`\`\`
2026-04-02 16:47:32.633 INFO  com.accenture.minigraph.skills.GraphApiFetcher:410 - 
           GET http://127.0.0.1:8085/api/mdm/profile/100, with [person_id], ttl=30000
2026-04-02 16:47:32.633 INFO  com.accenture.minigraph.skills.GraphApiFetcher:410 - 
           GET http://127.0.0.1:8085/api/mdm/profile/200, with [person_id], ttl=30000
\`\`\`

Create an island to hold data dictionary
----------------------------------------
Just like tutorial 3, you will create an island node to hold the data dictionary and provider nodes.

\`\`\`
create node dictionary
with type Island
with properties
skill=graph.island
\`\`\`

Then you can connect the data dictionary nodes and provider node to it.

\`\`\`
> connect root to dictionary with contains
node root connected to dictionary
> connect dictionary to person-name with data
node dictionary connected to person-name
> connect dictionary to person-address with data
node dictionary connected to person-address
> connect person-name to mdm-profile with provider
node person-name connected to mdm-profile
> connect person-address to mdm-profile with provider
node person-address connected to mdm-profile
> list connections
root -[contains]-> dictionary
root -[one]-> fetcher-1
root -[two]-> fetcher-2
dictionary -[data]-> person-address
dictionary -[data]-> person-name
fetcher-1 -[join]-> join
fetcher-2 -[join]-> join
person-address -[provider]-> mdm-profile
person-name -[provider]-> mdm-profile
join -[done]-> end
\`\`\`

Export the graph model
----------------------
You may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-5
Graph exported to /tmp/graph/tutorial-5.json
Described in /api/graph/model/tutorial-5/920-28
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-5.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-5 \\
  -H "Content-Type: application/json" \\
  -d '{
    "person_id": 100
  }'
\`\`\`

Summary
-------
In this session, you have created a graph model that is capable of doing parallel processing. It makes two
API requests to fetch data at the same time. The two nodes then converge into a "join" node before reaching
the "end" node.

The execution of a graph instance is guided by "graph traversal". It will follow the connections that you define
for the nodes. If a node has a skill assigned, the graph executor will run the composable function that provides
the skill. If the node does not have a skill, the graph executor will find the next 'downstream' node from there.
`,y1=`Tutorial 6
----------
In this session, we will create a graph model that would fetch an array list from one service and iterate
the elements in the array to fetch more details from another service. We will examine the use of the
"for_each" keyword.

Exercise
--------
You will import the graph model from tutorial-3 as a template and expand it to handle a multi-step
data fetch use case.

Import a graph model
--------------------
Enter 'import graph from tutorial-3'

\`\`\`
> import graph from tutorial-3
Graph model not found in /tmp/graph/tutorial-3.json
Found deployed graph model in classpath:/graph
Please export an updated version and re-import to instantiate an instance model
\`\`\`

If you have not exported tutorial-3 earlier, the system will import it from a demo graph.

Examine the graph model
-----------------------
You can examine the graph model with the 'list nodes' and 'list connections' commands.

\`\`\`
> list nodes
root [Root]
fetcher [Fetcher]
mdm-profile [Provider]
person-address [Dictionary]
person-name [Dictionary]
end [End]
> list connections
root -[fetch]-> fetcher
fetcher -[complete]-> end
\`\`\`

Create a new data dictionary node
---------------------------------
Enter the following to create a new data dictionary node "person-accounts". This uses the same data provider
"mdm-profile" to retrieve a list of accounts for the user. The list of accounts is an array of account numbers.

\`\`\`
create node person-accounts
with type Dictionary
with properties
input[]=person_id
output[]=response.accounts -> result.account_numbers
provider=mdm-profile
purpose=accounts of a person
\`\`\`

Update the fetcher
------------------
Add the dictionary item "person-accounts" in the original fetcher.

\`\`\`
update node fetcher
with type Fetcher
with properties
dictionary[]=person-name
dictionary[]=person-address
dictionary[]=person-accounts
input[]=input.body.person_id -> person_id
output[]=result.name -> output.body.name
output[]=result.address -> output.body.address
skill=graph.api.fetcher
\`\`\`

Create one more data dictionary node
------------------------------------
Create a data dictionary node "account-details" that is associated with the data provider "account-details-provider"
to retrieve account details based on person_id and account_id.

\`\`\`
create node account-details
with type Dictionary
with properties
input[]=person_id
input[]=account_id
output[]=response.account.details -> result.accounts
provider=account-details-provider
purpose=Account details
\`\`\`

Create a new data provider
--------------------------
Enter the following to create a data provider that retrieves account details.
In the feature section, there are oauth2-bearer, log-request-headers and log-response-headers.
The "oauth2-bearer" is a placeholder and you should implement according to your organization
security guideline. Functionally, it would acquire OAuth2 bearer token from a security authority 
using client-id and secret configured in the deployed environment. It should cache and refresh
the access token as required and insert the "authorization" header in a pre-processing step
for the Graph API Fetcher. The log-request-headers and log-response-headers can be used as
templates to implement your own pre-processing and post-processing features.

\`\`\`
create node account-details-provider
with type Provider
with properties
feature[]=oauth2-bearer
feature[]=log-request-headers
feature[]=log-response-headers
input[]=text(application/json) -> header.accept
input[]=text(application/json) -> header.content-type
input[]=person_id -> body.person_id
input[]=account_id -> body.account_id
method=POST
purpose=Account Management Endpoint
url=http://127.0.0.1:\${rest.server.port}/api/account/details
\`\`\`

Create a second fetcher
-----------------------
You will create a second fetcher as follows. You will apply the \`for_each\` statement to iterate
the array in the fetcher's result set and map each element into "model.account_number".

For each element, the input statement block will be executed to populate the input parameter "account_id".

\`\`\`
create node fetcher-2
with type Fetcher
with properties
dictionary[]=account-details
for_each[]=fetcher.result.account_numbers -> model.account_number
input[]=input.body.person_id -> person_id
input[]=model.account_number -> account_id
output[]=result.accounts -> output.body.accounts
skill=graph.api.fetcher
\`\`\`

Rearrange the connections
-------------------------
You will connect the first fetcher to the second fetcher, delete the original connection between fetcher and
the end node. Then connect the second fetcher to the end node.

Then enter 'list connections' to show the updated connections.

\`\`\`
> connect fetcher to fetcher-2 with details
node fetcher connected to fetcher-2
> delete connection fetcher and end
fetcher -> end removed
> connect fetcher-2 to end with complete
node fetcher-2 connected to end
> list connections
root -[fetch]-> fetcher
fetcher -[details]-> fetcher-2
fetcher-2 -[complete]-> end
\`\`\`

Update the root node
--------------------
Since you are using tutorial-3 graph model as a template, it is a good practice to update the root node
to describe the new purpose of tutorial-6. Enter the following.

\`\`\`
update node root
with type Root
with properties
name=tutorial-6
purpose=Demonstrate multi-step API fetching and the "for_each" method
\`\`\`

Perform a dry-run
-----------------
Enter the following to mock the input parameter of "person_id = 100".

\`\`\`
start graph
int(100) -> input.body.person_id
\`\`\`

Then enter \`run\` to do a dry-run.

You will see the following:

\`\`\`
> start graph...
Graph instance created. Loaded 1 mock entry, model.ttl = 30000 ms
> run
Walk to root
Walk to fetcher
Executed fetcher with skill graph.api.fetcher in 12.085 ms
Walk to fetcher-2
Executed fetcher-2 with skill graph.api.fetcher in 14.326 ms
Walk to end
{
  "output": {
    "body": {
      "address": "100 World Blvd",
      "name": "Peter",
      "accounts": [
        {
          "balance": 25032.13,
          "id": "a101",
          "type": "Saving"
        },
        {
          "balance": 6020.68,
          "id": "b202",
          "type": "Current"
        },
        {
          "balance": 120000.0,
          "id": "c303",
          "type": "C/D"
        },
        {
          "balance": 6000.0,
          "id": "d400",
          "type": "apple"
        },
        {
          "balance": 8200.0,
          "id": "e500",
          "type": "google"
        }
      ]
    }
  }
}
Graph traversal completed in 28 ms
\`\`\`

Parallelism
-----------
When using the "for_each" method, the system will perform parallel API fetching. The default concurrency is 3.
If you want to change this value, set "concurrency" in "fetcher-2" to try.

With concurrency of 3 and there are 5 accounts, the system will perform a batch of 3 and a batch of 2 API requests.
When you changed the concurrency setting, you will see the batch size will be adjusted accordingly.

Create an island to hold data dictionary
----------------------------------------
You will create an island node to organize the data dictionary and provider nodes.

\`\`\`
create node dictionary
with type Island
with properties
skill=graph.island
\`\`\`

Then you can connect the data dictionary nodes and provider node to it.

\`\`\`
> connect root to dictionary with contains
node root connected to dictionary
> connect dictionary to person-name with data
node dictionary connected to person-name
> connect dictionary to person-address with data
node dictionary connected to person-address
> connect dictionary to person-accounts with data
node dictionary connected to person-accounts
> connect person-name to mdm-profile with provider
node person-name connected to mdm-profile
> connect person-address to mdm-profile with provider
node person-address connected to mdm-profile
> connect person-accounts to mdm-profile with provider
node person-accounts connected to mdm-profile
> connect dictionary to account-details with data
node dictionary connected to account-details
> connect account-details to account-details-provider with data
node account-details connected to account-details-provider
> list connections
root -[contains]-> dictionary
root -[fetch]-> fetcher
account-details -[provider]-> account-details-provider
dictionary -[data]-> account-details
dictionary -[data]-> person-accounts
dictionary -[data]-> person-address
dictionary -[data]-> person-name
fetcher -[details]-> fetcher-2
person-accounts -[provider]-> mdm-profile
person-address -[provider]-> mdm-profile
person-name -[provider]-> mdm-profile
fetcher-2 -[complete]-> end
\`\`\`

Export the graph model
----------------------
You may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-6
Graph exported to /tmp/graph/tutorial-6.json
Described in /api/graph/model/tutorial-6/775-18
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-6.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-6 \\
  -H "Content-Type: application/json" \\
  -d '{
    "person_id": 100
  }'
\`\`\`

Summary
-------
In this session, you have created a graph model that performs 2 steps of API fetching. The first one gets the
name, address and list of account numbers. The second one uses the account numbers to fetch the account details
for each account using the "for_each" method.
`,v1=`Tutorial 7
----------
In this session, we will discuss data mapping in more details.

Exercise
--------
You will create a new graph model with to test various data mapping methods.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

Create a root node and an end node
----------------------------------
Enter the following to create a root node and an end node

\`\`\`
create node root
with type Root
with properties
name=tutorial-7
purpose=Demonstrate various data mapping methods
\`\`\`

\`\`\`
create node end
with type End
with properties
\`\`\`

Create a data mapper node
-------------------------
Let's try some data mapping methods. Please enter the following:

\`\`\`
create node data-mapper
with type Mapper
with properties
mapping[]=text(world) -> output.body.hello
mapping[]=input.body.profile.name -> output.body.name
mapping[]=model.none -> model.address
mapping[]=input.body.profile.address1 -> model.address[]
mapping[]=input.body.profile.address2 -> model.address[]
mapping[]=model.address -> output.body.address
mapping[]=f:now(text(local)) -> output.body.time
\`\`\`

\`mapping[]\` tells the system to create a data mapping statement in "append mode"
so that the statements will be evaluated in the order that they are provided.

Each data mapping statement has a left-hand-side and right-hand-side separated by the "map to" (\`->\`) indicator.

The value of the left-hand-side will be mapped to the key of the right-hand-side.

The MiniGraph system uses the same Event Script's data mapping syntax. For more details, please refer to
[Data Mapping Syntax](https://accenture.github.io/mercury-composable/guides/CHAPTER-4/#tasks-and-data-mapping)
(*right-click to open new tab*).

*Constant* - 'text(world)' means a constant of "world". \`output.body.\` is the namespace for the output payload
when a graph finishes execution. In this example, the output.body will be populated with "hello=world".

*Input* - \`input.body\` is the namespace for input payload that is provided to a graph instance when it is started.

Assuming the input payload looks like this:

\`\`\`json
{ 
  "profile": {
    "name": "Peter",
    "address1": "100 World Blvd",
    "address2": "New York"
  }
}
\`\`\`

The value "Peter" will be mapped to the "name" field and the address1 and address2 as the first and second element
of an array in "model.address". The \`model.\` namespace refers to a temporal state machine during the execution of 
the graph instance. You can use the model key-values as temporary data buffer for data transformation.

*Output* - the mapping statement \`model.address -> output.body.address\` maps the address array with 2 elements
into the output payload of the graph instance when it finishes execution.

*Idempotent design* - the array append syntax (\`[]\`) would create side effect when the same array key has been used
more than once. For example, during testing, you may execute the same node multiple times. This would create
duplicated entries in the array. To ensure idempotence, you can clear the model array key before you append values.
This is done by mapping an non-existent model key (e.g. \`model.none\`) to the model.address array field.

For this exercise, a better solution would be direct addressing instead of "append" mode:

\`\`\`
mapping[]=input.body.profile.address1 -> model.address[0]
mapping[]=input.body.profile.address2 -> model.address[1]
mapping[]=model.address -> output.body.address
\`\`\`

It achieves the same outcome without using the clear variable method (\`model.none -> model.address\`).

*plugin functions* - the left-hand-side of \`f:now(text(local)) -> output.body.time\` uses the "f:" syntax
to execute a "plugin" function called "now". It takes the constant value of "local" to return a local time stamp.

A number of built-in data mapping plugins are available. Please refer to the Event Script syntax page above for
more details.

Test the data mapper
--------------------
You can test the data mapper before you complete the whole graph model.

Enter the following to instantiate the graph and open a dialog box to enter the mock input data.

\`\`\`
> instantiate graph
Graph instance created. Loaded 0 mock entries, model.ttl = 30000 ms
> upload mock data
Mock data loaded into 'input.body' namespace
\`\`\`

When you enter the "upload mock data" command, an input dialog box will be opened. Please paste the sample
input payload for the "profile" of "Peter" listed above.

To confirm that you have uploaded the mock input. Enter "inspect input".

\`\`\`
> inspect input
{
  "inspect": "input",
  "outcome": {
    "body": {
      "profile": {
        "address2": "New York",
        "address1": "100 World Blvd",
        "name": "Peter"
      }
    }
  }
}
\`\`\`

You can now test the data mapper by "executing" it. Enter "execute data-mapper".

\`\`\`
> execute data-mapper
ERROR: node data-mapper does not have a skill property
\`\`\`

The system rejects the request with an error message telling that the data mapper is missing a skill.

You can update the data-mapper node with the 'edit node data-mapper' command and copy-n-paste the content
to the inbox box for editing. Add "skill=graph.data.mapper" and submit.

\`\`\`
> edit node data-mapper
update node data-mapper
with type Mapper
with properties
mapping[]=text(world) -> output.body.hello
mapping[]=input.body.profile.name -> output.body.name
mapping[]=model.none -> model.address
mapping[]=input.body.profile.address1 -> model.address[]
mapping[]=input.body.profile.address2 -> model.address[]
mapping[]=model.address -> output.body.address
mapping[]=f:now(text(local)) -> output.body.time
skill=graph.data.mapper
\`\`\`

The system will display "node data-mapper updated".

To activate the updated node, you can re-start the graph instance by entering 'instantiate graph' and
'update mock data'. Submit the mock input payload.

Then execute the data-mapper again.

\`\`\`
> execute data-mapper
node data-mapper run for 0.488 ms with exit path 'next'
\`\`\`

The data-mapper runs successfully.

Inspect the model and output
----------------------------
You can inspect the model and the output key-values to see what values are mapped.

\`\`\`
> inspect model
{
  "inspect": "model",
  "outcome": {
    "address": [
      "100 World Blvd",
      "New York"
    ]
  }
}
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "address": [
        "100 World Blvd",
        "New York"
      ],
      "name": "Peter",
      "hello": "world",
      "time": "2026-04-11 19:52:22.527"
    }
  }
}
\`\`\`

Connect the nodes to complete the graph model
---------------------------------------------
Enter the two connect commands below.

\`\`\`
> connect root to data-mapper with mapping
node root connected to data-mapper
> connect data-mapper to end with complete
node data-mapper connected to end
\`\`\`

The graph model will be shown in the right panel.

Export the graph model
----------------------
You may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-7
Graph exported to /tmp/graph/tutorial-7.json
Described in /api/graph/model/tutorial-7/152-13
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-7.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-7 \\
  -H "Content-Type: application/json" \\
  -d '{ 
  "profile": {
    "name": "Peter",
    "address1": "100 World Blvd",
    "address2": "New York"
  }
}'
\`\`\`

Summary
-------
In this session, you have created a graph model that data mapping. You used the array append method to transform
the input address1 and address2 into an array. You learnt how to clear model variable using an non-existing variable
\`model.none\`. You also applied the "f:now()" plugin function to return the current time.
`,b1=`Tutorial 8
----------
In this session, we will use JSON-Path search feature to retrieve key-values from input payload.

Exercise
--------
You will import tutorial-7 and replace some data mapping statements with JSON-Path search requests.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

Import tutorial-7
-----------------
Enter 'import graph from tutorial-7' first.

\`\`\`
> import graph from tutorial-7
Found deployed graph model in classpath:/graph
Please export an updated version and re-import to instantiate an instance model
Graph model imported as draft
\`\`\`

Input payload
-------------
The account holder "Peter" has 2 accounts.
We will assume the following input payload data structure. You would copy-n-paste this JSON dataset
when using the "upload mock data" dialog box in this tutorial exercise.

\`\`\`json
{ 
  "profile": {
    "name": "Peter",
    "account": [
      {
        "id": "100",
        "amount": 18000.30,
        "description": "Time deposit",
        "type": "C/D"
      },
      {
        "id": "200",
        "amount": 62050.80,
        "description": "Saving account",
        "type": "Saving"
      }
    ]
  }
}
\`\`\`

Edit the data mapper node
-------------------------
Let's try some data mapping methods. Please enter the following:

\`\`\`
update node data-mapper
with type Mapper
with properties
mapping[]=input.body.profile.name -> output.body.name
mapping[]=$.input.body.profile.account[*].type -> model.type
mapping[]=$.input.body.profile.account[*].id -> model.id
mapping[]=$.input.body.profile.account[*].amount -> model.amount
skill=graph.data.mapper
\`\`\`

The above data mapping statements extract the type, id and amount from the account list in the
input payload using JSON-Path search syntax.

Test the data mapper
--------------------
Let's test the data mapper first.

Enter the following to instantiate the graph and open a dialog box to enter the mock input data.

\`\`\`
> instantiate graph
Graph instance created. Loaded 0 mock entries, model.ttl = 30000 ms
> upload mock data
Mock data loaded into 'input.body' namespace
\`\`\`

The first data mapping statement maps the input.body.profile.name into the "name" field of the output body.
The subsequent data mapping statements extract the type, id and amount key-values form the account list and
map them into the model variables type, id and amount accordingly.

When you enter the "upload mock data" command, an input dialog box will be opened. Please paste the sample
input payload listed above.

To confirm that you have uploaded the mock input. Enter "inspect input".

\`\`\`
> inspect input
{
  "inspect": "input",
  "outcome": {
    "body": {
      "profile": {
        "name": "Peter",
        "account": [
          {
            "amount": 18000.3,
            "description": "Time deposit",
            "id": "100",
            "type": "C/D"
          },
          {
            "amount": 62050.8,
            "description": "Saving account",
            "id": "200",
            "type": "Saving"
          }
        ]
      }
    }
  }
}
\`\`\`

You can now test the data mapper by "executing" it. Enter "execute data-mapper".

\`\`\`
> execute data-mapper
node data-mapper run for 0.589 ms with exit path 'next'
\`\`\`

The data-mapper runs successfully.

Inspect the model and output
----------------------------
You can inspect the model and the output key-values to see what values are mapped.

\`\`\`
> inspect model
{
  "inspect": "model",
  "outcome": {
    "amount": [
      18000.3,
      62050.8
    ],
    "id": [
      "100",
      "200"
    ],
    "type": [
      "C/D",
      "Saving"
    ]
  }
}
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "name": "Peter"
    }
  }
}
\`\`\`

This confirms that the JSON-Path commands have extracted the key-values from the account list successfully.
However, presenting data in list of key-values in maps is usually not a good schema design. It may be easier
for an application to parse the key-values but it reduces readability for a human operator.

This is just a demo to illustrate that we can use JSON-Path retrieval syntax.

Using the listOfMap plugin
--------------------------
For proper data structure representation, we can use the plugin "f:listOfMap()" to consolidate the map of lists.
You can add a data mapping statement to use the listOfMap plugin like this:

\`\`\`
update node data-mapper
with type Mapper
with properties
mapping[]=input.body.profile.name -> output.body.name
mapping[]=$.input.body.profile.account[*].type -> model.account.type
mapping[]=$.input.body.profile.account[*].id -> model.account.id
mapping[]=$.input.body.profile.account[*].amount -> model.account.amount
mapping[]=f:listOfMap(model.account) -> output.body.account
skill=graph.data.mapper
\`\`\`

Note that you add one level of key called "account" to hold the 3 maps of lists for type, id and amount.
Then you apply the plugin "f:listOfMap()" to consolidate the maps of lists into a list of maps.

When you enter 'inspect model' and 'inspect output', you will see:

\`\`\`
> inspect model
{
  "inspect": "model",
  "outcome": {
    "account": {
      "amount": [
        18000.3,
        62050.8
      ],
      "id": [
        "100",
        "200"
      ],
      "type": [
        "C/D",
        "Saving"
      ]
    }
  }
}
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "name": "Peter",
      "account": [
        {
          "amount": 18000.3,
          "id": "100",
          "type": "C/D"
        },
        {
          "amount": 62050.8,
          "id": "200",
          "type": "Saving"
        }
      ]
    }
  }
}
\`\`\`

This illustrates that the \`listOfMap\` plugin can perform simple data transformation.
This is handy when your graph model uses API fetchers to retrieve data from multiple sources.
Without writing code, you can group data from different data structures.

Using the removeKey plugin
--------------------------
For a single data source, it is indeed easier to use the plugin \`f:removeKey()\` to remove one or more keys
from the data structure.

\`\`\`
mapping[]=f:removeKey(input.body.profile.account, text(description)) -> output.body.account
\`\`\`

Let's prove this by editing the data-mapper again. We add a new data mapping statement at the end to map
the alternative solution to the "account2" field in the output payload.

\`\`\`
update node data-mapper
with type Mapper
with properties
mapping[]=input.body.profile.name -> output.body.name
mapping[]=$.input.body.profile.account[*].type -> model.account.type
mapping[]=$.input.body.profile.account[*].id -> model.account.id
mapping[]=$.input.body.profile.account[*].amount -> model.account.amount
mapping[]=f:listOfMap(model.account) -> output.body.account
mapping[]=f:removeKey(input.body.profile.account, text(description)) -> output.body.account2
skill=graph.data.mapper
\`\`\`

You will do 'instantiate graph' and 'upload mock data' with the same input payload.
Then 'execute data-mapper' and 'inspect output' to see the outcome.

\`\`\`
> execute data-mapper
node data-mapper run for 2.826 ms with exit path 'next'
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "name": "Peter",
      "account2": [
        {
          "amount": 18000.3,
          "id": "100",
          "type": "C/D"
        },
        {
          "amount": 62050.8,
          "id": "200",
          "type": "Saving"
        }
      ],
      "account": [
        {
          "amount": 18000.3,
          "id": "100",
          "type": "C/D"
        },
        {
          "amount": 62050.8,
          "id": "200",
          "type": "Saving"
        }
      ]
    }
  }
}
\`\`\`

Note that "account" and "account2" have the same key-values and data structure. This confirms that
the "description" key-value has been removed from each map in a list successfully.

Export the graph model
----------------------
As a good practice, you may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-8
Graph exported to /tmp/graph/tutorial-8.json
Described in /api/graph/model/tutorial-8/315-6
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-8.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-8 \\
  -H "Content-Type: application/json" \\
  -d '{ 
  "profile": {
    "name": "Peter",
    "account": [
      {
        "id": "100",
        "amount": 18000.30,
        "description": "Time deposit",
        "type": "C/D"
      },
      {
        "id": "200",
        "amount": 62050.80,
        "description": "Saving account",
        "type": "Saving"
      }
    ]
  }
}'
\`\`\`

Summary
-------
In this session, you have created a graph model that uses JSON-Path retrieval and search features. 
You have applied the plugin "f:listOfMap()" to consolidate maps of lists into a list of maps.
You have also tested the plugin "f:removeKey()" to remove unwanted key-values from a list of maps.

Note that JSON-Path retrieval and search syntax supports value comparison for selective key-value retrieval.
Please refer to JSON-Path syntax on the web for more details.
`,_1=`Tutorial 9
----------
In this session, we will discuss the 'reusable module' use case.

Exercise
--------
You will create a reusable module and put it in a common graph model. Then create another graph model and
import the reusable module into the graph model to reuse it.

To clear the previous graph session, click the Tools button in the top-right corner and click the "Stop" and "Start"
toggle button. A new graph session will start.

What is a reusable module?
--------------------------
A module is a node that contains either the graph.js or graph.math skill. For frequently used math formula
or boolean operation, you can save the "common logic" in one or more module nodes and export it as a common graph model.

When you design a new graph model, you can import one or more reusable modules from the common graph model.

This is a best practice for graph modeling of common computation and decision logic so that developers do not need
to re-invent the same logic. This also encourages quality control and governance.

For this tutorial, we will skip the export of the common graph model and focus in creation of a reusable module
and illustration of how to use it in a graph model.

Create a root node and an end node
----------------------------------
Enter the following to create a root node and an end node

\`\`\`
create node root
with type Root
with properties
name=tutorial-9
purpose=Demonstrate use of modules
\`\`\`

\`\`\`
create node end
with type End
\`\`\`

Create a reusable module
-------------------------
You will create a simple "addition" module by adding two numbers and save the result in a variable called "sum".

\`\`\`
create node addition
with type Module
with properties
skill=graph.math
statement[]=COMPUTE: sum -> {model.a} + {model.b}
\`\`\`

Test the module
---------------
Enter the following to start the graph model and set two numbers in variable "a" and "b" in the state machine
"model".

\`\`\`
instantiate graph
int(10) -> model.a
int(20) -> model.b
\`\`\`

You can then test the module using 'execute addition'. 

\`\`\`
> execute addition
node addition run for 0.312 ms with exit path 'next'
\`\`\`

Then you can inspect the node.

\`\`\`
> inspect addition
{
  "inspect": "addition",
  "outcome": {
    "result": {
      "sum": 30.0
    },
    "decision": "next"
  }
}
\`\`\`

You can see the module adds the two numbers and save the result "30.0" into the variable "sum" in the result set
of the node.

Using the new module
--------------------
You will create a new node to use the module.

\`\`\`
create node compute
with type Compute
with properties
skill=graph.math
statement[]=MAPPING: input.body.a -> model.a
statement[]=MAPPING: input.body.b -> model.b
statement[]=EXECUTE: addition
statement[]=MAPPING: compute.result.sum -> output.body.sum
\`\`\`

In this node, it maps the input parameter "a" and "b" into the model variable "a" and "b".
Then it executes the module "addition". The computed result is saved in the "compute" node.
The last statement maps the computed value to the output payload "output.body.sum".

Test the compute node
---------------------
You will instantiate the graph model like this:

\`\`\`
instantiate graph
int(10) -> input.body.a
int(20) -> input.body.b
\`\`\`

Then you enter 'execute compute'. It will invoke the node 'compute' and it maps the input parameters to the model
variables. Then it executes the module "addition" that adds the two model variables together.

Inspect the result
------------------
The result is saved to the variable "sum" under the "compute" node instead of the module "addition".
It is because the compute node is the one that executes the statements.
It just borrows the logic from the module "addition".

\`\`\`
> inspect compute
{
  "inspect": "compute",
  "outcome": {
    "result": {
      "sum": 30.0
    },
    "decision": "next"
  }
}
> inspect model
{
  "inspect": "model",
  "outcome": {
    "a": 10,
    "b": 20
  }
}
> inspect addition
{
  "inspect": "addition",
  "outcome": {}
}
> inspect output
{
  "inspect": "output",
  "outcome": {
    "body": {
      "sum": 30.0
    }
  }
}
\`\`\`

Now the module works as expected.

Connect the nodes
-----------------
You will connect the nodes with the following commands:

\`\`\`
connect root to compute with calculate
connect compute to end with finish
\`\`\`

Test the completed model
------------------------
You will enter the following to test the whole model.

\`\`\`
start graph
int(10) -> input.body.a
int(20) -> input.body.b
\`\`\`

and enter 'run' to do a 'dry-run' from the root to the end node.

\`\`\`
> run
Walk to root
Walk to compute
Executed compute with skill graph.math in 0.387 ms
Walk to end
{
  "output": {
    "body": {
      "sum": 30.0
    }
  }
}
Graph traversal completed in 7 ms
\`\`\`

Check the nodes and connections
-------------------------------
Enter the following to show the nodes and connections

\`\`\`
> list nodes
root [Root]
addition [Module]
compute [Compute]
end [End]
> list connections
root -[calculate]-> compute
compute -[finish]-> end
\`\`\`

Note that the module "addition" does not need to be connected because it is a reusable module. The node that executes
it must be connected so that the graph executor can execute it when the graph traversal starts.

Create an island to hold modules
--------------------------------
You will create an island node to organize one or more module nodes.

\`\`\`
create node modules
with type Island
with properties
skill=graph.island
\`\`\`

Then you can connect the data dictionary nodes and provider node to it.

\`\`\`
> connect root to modules with contains
node root connected to modules
> connect modules to addition with contains
node modules connected to addition
> list connections
root -[calculate]-> compute
root -[contains]-> modules
modules -[contains]-> addition
compute -[finish]-> end
\`\`\`

Export the graph model
----------------------
As a good practice, you may save the graph model by exporting it.

\`\`\`
> export graph as tutorial-9
Graph exported to /tmp/graph/tutorial-9.json
Described in /api/graph/model/tutorial-9/359-15
\`\`\`

Deploy the graph model
----------------------
To deploy the graph model, copy "/tmp/graph/tutorial-9.json" to your application's \`main/resources/graph\` folder.
You can then test the deployed model with a curl command.

\`\`\`
curl -X POST http://127.0.0.1:8085/api/graph/tutorial-9 \\
  -H "Content-Type: application/json" \\
  -d '{ 
    "a": 10,
    "b": 20
}'
\`\`\`

Summary
-------
In this session, you have created a graph model that contains a compute node that executes a reusable module.
`,x1=`Update a node
-------------
1. Root node must use the name 'root'
2. Skill is a property with the name 'skill'. A node has zero or one skill.
3. The 'update node' is a multi-line command
4. Properties are optional for a graph model. If present, they are used as default value.
5. For each property, you can use the "triple single quotes" to enter a multi-line value if needed.
6. Node name and type should use lower case characters and hyphen only
7. Type and key-values will be used and validated by the node's skill function if any
8. The key of a property can be a composable key using the dot-bracket format.
   The value may use Event Script's constant syntax.

Syntax
------
\`\`\`
update node {name}
with type={type}
with properties
{key1}={value1}
{key2}={value2}
...
\`\`\`
`,S1=`Upload mock data to current graph instance
------------------------------------------
When the following command is entered, the system will print out a URL for you to upload
a JSON payload to the current graph instance.

Syntax
------
\`\`\`
upload mock data
\`\`\`

Upon receiving a HTTP POST request to the given URL, the JSON request payload will be used
as mock "input.body".

If you want to mock some input headers or the state machine, please use the "instantiate graph" command
before uploading.
`,w1=`MiniGraph
---------
A mini-graph is a property graph that is designed to run entirely in memory.
It is recommended that you limit the number of nodes to less than 750.

Graph Model is used to describe a business use case using graph methodology.
Optionally, you may configure a nodes to have a special skill to react to incoming events.

Instance Model is an instance of a graph model that is used to process a specific business use case
or transaction. It is created when an incoming event arrives. It will map data attributes from input
of a request to properties of one or more nodes.

Execution of an instance model will start from the root node of a graph until it reaches the end node.
Result of the end node will be returned to the calling party.

For a model to be meaningful, you must configure at least one node to have a skill to process the data
attributes of some nodes (aka "data entities"). A skill is a property with the label "skill" and the
value is a composable function route name.

For more information about each feature, try the following help topics.

For graph model
---------------
- help create (node)
- help delete (node, connection or cache)
- help update (node)
- help edit (node)
- help connect (node-A to node-B)
- help list (node or connection)
- help export
- help import (graph or node)
- help describe (graph, node, connection or skill)
- help data-dictionary

For instance model
------------------
- help instantiate (create an instance from a graph model)
- help upload (mock data)
- help execute (skill of a specific node. Graph traversal is paused to enable functional test in isolation.)
- help inspect (state-machine for properties of nodes, input, output and model namespaces)
- help run (execute a graph instance from a root node to the end node, if any, using graph traversal.)
- help seen (display the nodes that have been seen or executed)

Built-in skills
---------------
1. graph.data.mapper - map data from one node to another
2. graph.math - perform simple math function and boolean operation using native Java
3. graph.js - handle simple math function and boolean operation using a JavaScript engine
4. graph.api.fetcher - make API call to other systems
5. graph.extension - issue API call to another graph model
6. graph.island - this indicates that the node leads to isolated nodes and graph traversal would pause
7. graph.join - a node with this skill will wait for completion of all nodes that connect to it

Tutorials
---------
- help tutorial 1 (your first 'hello world' graph model)
- help tutorial 2 (deploying a graph model)
- help tutorial 3 (data dictionary, provider and API fetcher)
- help tutorial 4 (decision-making using mathematics and boolean operations)
- help tutorial 5 (more sophisticated graph navigation)
- help tutorial 6 (iterative API fetching using the 'for_each' keyword)
- help tutorial 7 (data mapping)
- help tutorial 8 (JSON-Path key-value retrieval and search)
- help tutorial 9 (reusable 'modules')
- help tutorial 10 (graph extension)
- help tutorial 11 (flow extension)
- help tutorial 12 (custom error handling)
`,T1=Object.assign({"../../../src/main/resources/help/help connect.md":qy,"../../../src/main/resources/help/help create.md":Iy,"../../../src/main/resources/help/help data-dictionary.md":Xy,"../../../src/main/resources/help/help delete.md":Jy,"../../../src/main/resources/help/help describe.md":Zy,"../../../src/main/resources/help/help edit.md":Qy,"../../../src/main/resources/help/help execute.md":Vy,"../../../src/main/resources/help/help export.md":Ky,"../../../src/main/resources/help/help graph-api-fetcher.md":$y,"../../../src/main/resources/help/help graph-data-mapper.md":Wy,"../../../src/main/resources/help/help graph-extension.md":Py,"../../../src/main/resources/help/help graph-island.md":Fy,"../../../src/main/resources/help/help graph-join.md":e1,"../../../src/main/resources/help/help graph-js.md":t1,"../../../src/main/resources/help/help graph-math.md":n1,"../../../src/main/resources/help/help import.md":a1,"../../../src/main/resources/help/help inspect.md":l1,"../../../src/main/resources/help/help instantiate.md":o1,"../../../src/main/resources/help/help list.md":i1,"../../../src/main/resources/help/help run.md":s1,"../../../src/main/resources/help/help seen.md":r1,"../../../src/main/resources/help/help tutorial 1.md":c1,"../../../src/main/resources/help/help tutorial 10.md":u1,"../../../src/main/resources/help/help tutorial 11.md":d1,"../../../src/main/resources/help/help tutorial 12.md":p1,"../../../src/main/resources/help/help tutorial 2.md":h1,"../../../src/main/resources/help/help tutorial 3.md":f1,"../../../src/main/resources/help/help tutorial 4.md":m1,"../../../src/main/resources/help/help tutorial 5.md":g1,"../../../src/main/resources/help/help tutorial 6.md":y1,"../../../src/main/resources/help/help tutorial 7.md":v1,"../../../src/main/resources/help/help tutorial 8.md":b1,"../../../src/main/resources/help/help tutorial 9.md":_1,"../../../src/main/resources/help/help update.md":x1,"../../../src/main/resources/help/help upload.md":S1,"../../../src/main/resources/help/help.md":w1});function E1(r){const n=r.split("/");return(n[n.length-1]??r).replace(/\.md$/,"")}const rf=Object.fromEntries(Object.entries(T1).map(([r,n])=>[E1(r),n]));function zi(r){const n=r===""?"help":`help ${r}`;return rf[n]??null}const A1=Object.keys(rf).filter(r=>r!=="help").map(r=>r.replace(/^help\s+/,"")).sort(),hc=[{id:"overview",label:"Overview"},{id:"graph-model",label:"Graph Model"},{id:"graph-skills",label:"Graph Skills"},{id:"instance-model",label:"Instance Model"},{id:"tutorials",label:"Tutorials",chipStripLabel:"Chapters"}],N1=new Set(["execute","inspect","instantiate","run","seen","upload"]);function cf(r){return r===""?"overview":r.startsWith("tutorial ")?"tutorials":r.startsWith("graph-")?"graph-skills":N1.has(r)?"instance-model":"graph-model"}function fc(r){if(r==="overview")return[""];const n=A1.filter(s=>cf(s)===r);return r==="tutorials"?[...n].sort((s,u)=>{const d=parseInt(s.replace(/^tutorial\s+/,""),10),h=parseInt(u.replace(/^tutorial\s+/,""),10);return d-h}):n}function C1(r,n){return r===""?"Overview":n==="tutorials"?r.replace(/^tutorial\s+/,""):r}const fl=hc.flatMap(r=>fc(r.id));function uf(r){return r.replace(/^help\s*/i,"").trim().toLowerCase()}function j1(r){const n=Te.c(6),{bus:s,setHelpTopic:u,onTabSwitch:d}=r,h=T.useRef(d);let b;n[0]!==d?(b=()=>{h.current=d},n[0]=d,n[1]=b):b=n[1],T.useEffect(b);let g,f;n[2]!==s||n[3]!==u?(g=()=>s.on("command.helpOrDescribe",v=>{if(!v.commandText.trim().toLowerCase().startsWith("help"))return;const _=uf(v.commandText);zi(_)!==null&&(u(_),h.current())}),f=[s,u],n[2]=s,n[3]=u,n[4]=g,n[5]=f):(g=n[4],f=n[5]),T.useEffect(g,f)}function M1(r){const n=Te.c(12),{ctx:s,navigate:u,addToast:d,wsPath:h}=r;let b;n[0]===Symbol.for("react.memo_cache_sentinel")?(b=Rn.find(k1),n[0]=b):b=n[0];const g=b,f=T.useRef(null),v=g==null?void 0:g.wsPath;let w,_;n[1]!==d||n[2]!==s||n[3]!==u?(w=()=>{if(!v||!f.current)return;if(s.getSlot(v).phase==="connected"){const{wsPath:N,json:O}=f.current;f.current=null,s.setPendingPayload(N,O),u(g.path),d("JSON loaded into JSON-Path editor ✓","success")}},_=[v,s,u,d,g],n[1]=d,n[2]=s,n[3]=u,n[4]=w,n[5]=_):(w=n[4],_=n[5]),T.useEffect(w,_);let E;n[6]!==d||n[7]!==s||n[8]!==u?(E=y=>{if(!g)return;const N=s.getSlot(g.wsPath);N.phase==="connected"?(s.setPendingPayload(g.wsPath,y),u(g.path),d("JSON loaded into JSON-Path editor ✓","success")):N.phase==="connecting"?(f.current={wsPath:g.wsPath,json:y},d("Updated pending JSON transfer — latest payload will open when connected","info")):(f.current={wsPath:g.wsPath,json:y},s.connect(g.wsPath,d),d("Connecting to JSON-Path Playground…","info"))},n[6]=d,n[7]=s,n[8]=u,n[9]=E):E=n[9];const M=E,j=g&&h!==g.wsPath?M:void 0;let x;return n[10]!==j?(x={handleSendToJsonPath:j},n[10]=j,n[11]=x):x=n[11],x}function k1(r){return r.tabs.includes("payload")&&r.supportsUpload}function D1(r){const n=Te.c(7),{bus:s,onOpenModal:u,modalOpen:d}=r,h=T.useRef(!1);let b,g;n[0]!==d?(b=()=>{d||(h.current=!1)},g=[d],n[0]=d,n[1]=b,n[2]=g):(b=n[1],g=n[2]),T.useEffect(b,g);let f,v;n[3]!==s||n[4]!==u?(f=()=>s.on("upload.invitation",w=>{h.current||(h.current=!0,u(w.uploadPath))}),v=[s,u],n[3]=s,n[4]=u,n[5]=f,n[6]=v):(f=n[5],v=n[6]),T.useEffect(f,v)}function O1(r){const n=Te.c(17),{bus:s,addToast:u}=r,[d,h]=T.useState(null),b=T.useRef(null);let g;n[0]===Symbol.for("react.memo_cache_sentinel")?(g=new Set,n[0]=g):g=n[0];const[f,v]=T.useState(g);let w;n[1]===Symbol.for("react.memo_cache_sentinel")?(w=R=>{b.current=document.activeElement,h(R)},n[1]=w):w=n[1];const _=w;let E;n[2]===Symbol.for("react.memo_cache_sentinel")?(E=()=>{h(null),setTimeout(()=>{var R;return(R=b.current)==null?void 0:R.focus()},0)},n[2]=E):E=n[2];const M=E;let j;n[3]!==u||n[4]!==d?(j=R=>{v(I=>new Set([...I,d])),h(null),setTimeout(()=>{var I;return(I=b.current)==null?void 0:I.focus()},0),u("Mock data uploaded successfully ✓","success")},n[3]=u,n[4]=d,n[5]=j):j=n[5];const x=j;let y;n[6]!==u?(y=R=>{u(`Upload failed: ${R}`,"error")},n[6]=u,n[7]=y):y=n[7];const N=y;let O;n[8]===Symbol.for("react.memo_cache_sentinel")?(O=()=>{v(new Set)},n[8]=O):O=n[8];const k=O,Y=d!==null;let C;n[9]!==s||n[10]!==Y?(C={bus:s,onOpenModal:_,modalOpen:Y},n[9]=s,n[10]=Y,n[11]=C):C=n[11],D1(C);let B;return n[12]!==N||n[13]!==x||n[14]!==d||n[15]!==f?(B={modalUploadPath:d,successfulUploadPaths:f,handleOpenUploadModal:_,handleCloseUploadModal:M,handleUploadSuccess:x,handleUploadError:N,resetSuccessfulPaths:k},n[12]=N,n[13]=x,n[14]=d,n[15]=f,n[16]=B):B=n[16],B}function R1(r){const n=Te.c(14),{bus:s,connected:u,appendMessage:d,addToast:h}=r,b=T.useRef(null),g=T.useRef(!1),f=T.useRef(d);let v,w;n[0]!==d?(v=()=>{f.current=d},w=[d],n[0]=d,n[1]=v,n[2]=w):(v=n[1],w=n[2]),T.useEffect(v,w);const _=T.useRef(h);let E,M;n[3]!==h?(E=()=>{_.current=h},M=[h],n[3]=h,n[4]=E,n[5]=M):(E=n[4],M=n[5]),T.useEffect(E,M);let j,x;n[6]!==u?(j=()=>{var Y;u||((Y=b.current)==null||Y.abort(),b.current=null,g.current=!1)},x=[u],n[6]=u,n[7]=j,n[8]=x):(j=n[7],x=n[8]),T.useEffect(j,x);let y,N;n[9]===Symbol.for("react.memo_cache_sentinel")?(y=()=>()=>{var Y;(Y=b.current)==null||Y.abort()},N=[],n[9]=y,n[10]=N):(y=n[9],N=n[10]),T.useEffect(y,N);let O,k;n[11]!==s?(k=()=>s.on("payload.large",Y=>{var J;if(g.current)return;const{apiPath:C,byteSize:B}=Y;(J=b.current)==null||J.abort();const R=new AbortController;b.current=R;const I=(B/1048576).toFixed(2);_.current(`Fetching large payload (${I} MB)…`,"info"),g.current=!0,fetch(C,{signal:R.signal}).then(z1).then(Z=>{if(!Z.trim())throw new Error("empty response body");let K=Z;try{K=JSON.stringify(JSON.parse(Z),null,2)}catch{}f.current(K),g.current=!1,b.current=null}).catch(Z=>{Z.name!=="AbortError"&&(g.current=!1,b.current=null,f.current(`ERROR: payload fetch failed — ${Z.message}`),_.current(`Payload fetch failed: ${Z.message}`,"error"))})}),O=[s],n[11]=s,n[12]=O,n[13]=k):(O=n[12],k=n[13]),T.useEffect(k,O)}function z1(r){if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.text()}function B1(r){const n=Te.c(14);let s;n[0]===Symbol.for("react.memo_cache_sentinel")?(s={},n[0]=s):s=n[0];const[u,d]=ia(r,s);let h;n[1]!==d?(h=j=>{d(x=>({...x,[j]:{name:j,savedAt:new Date().toISOString()}}))},n[1]=d,n[2]=h):h=n[2];const b=h;let g;n[3]!==d?(g=j=>{d(x=>{const y={...x};return delete y[j],y})},n[3]=d,n[4]=g):g=n[4];const f=g;let v;n[5]!==u?(v=j=>Object.prototype.hasOwnProperty.call(u,j),n[5]=u,n[6]=v):v=n[6];const w=v;let _;n[7]!==u?(_=Object.values(u).sort(H1),n[7]=u,n[8]=_):_=n[8];const E=_;let M;return n[9]!==f||n[10]!==w||n[11]!==b||n[12]!==E?(M={savedGraphs:E,saveGraph:b,deleteGraph:f,hasGraph:w},n[9]=f,n[10]=w,n[11]=b,n[12]=E,n[13]=M):M=n[13],M}function H1(r,n){return new Date(n.savedAt).getTime()-new Date(r.savedAt).getTime()}function G1(r,n){const s=Te.c(11),[u,d]=ia(r,1),h=T.useRef(!1),[b,g]=T.useState(null),[f,v]=T.useState(null);let w,_;s[0]!==n?(w=()=>n.on("command.importGraph",O=>{g(O.graphName),v(null)}),_=[n],s[0]=n,s[1]=w,s[2]=_):(w=s[1],_=s[2]),T.useEffect(w,_);let E;s[3]!==u?(E=O=>{v(O),O===`untitled-${u}`&&(h.current=!0)},s[3]=u,s[4]=E):E=s[4];const M=E;let j;s[5]!==d?(j=()=>{g(null),v(null),h.current&&d(U1),h.current=!1},s[5]=d,s[6]=j):j=s[6];const x=j,y=f??b??`untitled-${u}`;let N;return s[7]!==y||s[8]!==x||s[9]!==M?(N={defaultName:y,setLastSavedName:M,resetName:x},s[7]=y,s[8]=x,s[9]=M,s[10]=N):N=s[10],N}function U1(r){return r+1}function L1(r){const n=Te.c(27),{bus:s,connected:u,sendRawText:d,saveGraph:h,setLastSavedName:b,addToast:g}=r,f=T.useRef(null);let v;n[0]!==g||n[1]!==u||n[2]!==d?(v=B=>{if(!u){g("Save failed: connection required to export graph","error");return}const R=setTimeout(()=>{f.current!==null&&(f.current=null,g("Save failed: export confirmation timed out","error"))},1e4);f.current={graphName:B,timeoutId:R},d(`export graph as ${B}`)},n[0]=g,n[1]=u,n[2]=d,n[3]=v):v=n[3];const w=v;let _,E;n[4]!==g||n[5]!==s||n[6]!==h||n[7]!==b?(_=()=>s.on("graph.exported",B=>{if(f.current===null||B.graphName!==f.current.graphName)return;clearTimeout(f.current.timeoutId);const R=f.current.graphName;f.current=null,h(R),b(R),g(`Graph saved as "${R}"`,"success")}),E=[s,h,b,g],n[4]=g,n[5]=s,n[6]=h,n[7]=b,n[8]=_,n[9]=E):(_=n[8],E=n[9]),T.useEffect(_,E);let M,j;n[10]!==g||n[11]!==s?(M=()=>s.on("graph.export.failed",B=>{f.current!==null&&(clearTimeout(f.current.timeoutId),f.current=null,B.reason==="invalid-name"?g("Save failed: invalid filename (a–z, A–Z, 0–9, hyphen only)","error"):g("Save failed: root node name does not match existing graph","error"))}),j=[s,g],n[10]=g,n[11]=s,n[12]=M,n[13]=j):(M=n[12],j=n[13]),T.useEffect(M,j);let x,y;n[14]!==g||n[15]!==u?(x=()=>{!u&&f.current!==null&&(clearTimeout(f.current.timeoutId),f.current=null,g("Save failed: connection closed before export confirmation","error"))},y=[u,g],n[14]=g,n[15]=u,n[16]=x,n[17]=y):(x=n[16],y=n[17]),T.useEffect(x,y);let N,O;n[18]===Symbol.for("react.memo_cache_sentinel")?(N=()=>()=>{f.current!==null&&clearTimeout(f.current.timeoutId)},O=[],n[18]=N,n[19]=O):(N=n[18],O=n[19]),T.useEffect(N,O);let k;n[20]!==g||n[21]!==u||n[22]!==d?(k=B=>{u&&(d(`import graph from ${B}`),g(`Importing graph "${B}"…`,"info"))},n[20]=g,n[21]=u,n[22]=d,n[23]=k):k=n[23];const Y=k;let C;return n[24]!==Y||n[25]!==w?(C={handleSaveGraph:w,handleLoadGraph:Y},n[24]=Y,n[25]=w,n[26]=C):C=n[26],C}const sc=new Map;function Y1(r){const n=Te.c(7);let s;n[0]!==r?(s=()=>sc.get(r)??null,n[0]=r,n[1]=s):s=n[1];const[u,d]=T.useState(s);let h;n[2]!==r?(h=f=>{d(f),f===null?sc.delete(r):sc.set(r,f)},n[2]=r,n[3]=h):h=n[3];const b=h;let g;return n[4]!==u||n[5]!==b?(g=[u,b],n[4]=u,n[5]=b,n[6]=g):g=n[6],g}function Dh(r){if(r==null)return"";const n=typeof r=="string"?r:JSON.stringify(r);return n.includes("'''")&&console.warn(`[commandBuilder] Property value contains "'''" which cannot be escaped in the backend grammar. The value may be truncated on paste.`),n.includes(`
`)?`'''
${n}
'''`:n}function q1(r,n){const s=[`${r} node ${n.alias}`];n.types.length>0&&s.push(`with type ${n.types[0]}`);const u=Object.entries(n.properties).filter(([,d])=>d!=null);if(u.length>0){s.push("with properties");for(const[d,h]of u)if(Array.isArray(h))for(const b of h)s.push(`${d}[]=${Dh(b)}`);else s.push(`${d}[]=${Dh(h)}`)}return s.join(`
`)}const I1="_toastContainer_hhy5k_1",X1="_toast_hhy5k_1",J1="_slideIn_hhy5k_1",Z1="_success_hhy5k_36",Q1="_error_hhy5k_40",V1="_info_hhy5k_44",K1="_toastIcon_hhy5k_48",$1="_toastMessage_hhy5k_53",uo={toastContainer:I1,toast:X1,slideIn:J1,success:Z1,error:Q1,info:V1,toastIcon:K1,toastMessage:$1},W1=r=>{const n=Te.c(7),{toasts:s,onRemove:u}=r;if(s.length===0)return null;let d;if(n[0]!==u||n[1]!==s){let b;n[3]!==u?(b=g=>m.jsxs("div",{className:`${uo.toast} ${uo[g.type]}`,onClick:()=>u(g.id),children:[m.jsxs("span",{className:uo.toastIcon,children:[g.type==="success"&&"✅",g.type==="error"&&"❌",g.type==="info"&&"ℹ️"]}),m.jsx("span",{className:uo.toastMessage,children:g.message})]},g.id),n[3]=u,n[4]=b):b=n[4],d=s.map(b),n[0]=u,n[1]=s,n[2]=d}else d=n[2];let h;return n[5]!==d?(h=m.jsx("div",{className:uo.toastContainer,children:d}),n[5]=d,n[6]=h):h=n[6],h},P1="_container_9dbh2_3",F1="_trigger_9dbh2_7",e0="_chevron_9dbh2_37",t0="_chevronOpen_9dbh2_43",n0="_dot_9dbh2_49",a0="_dotIdle_9dbh2_56",l0="_dotConnecting_9dbh2_57",o0="_dotConnected_9dbh2_58",i0="_dotPartial_9dbh2_59",s0="_dropdown_9dbh2_65",pn={container:P1,trigger:F1,chevron:e0,chevronOpen:t0,dot:n0,dotIdle:a0,dotConnecting:l0,dotConnected:o0,dotPartial:i0,dropdown:s0};function mc(r){const n=Te.c(23),{label:s,dotStatus:u,children:d}=r,[h,b]=T.useState(!1),g=T.useRef(null);let f,v;n[0]!==h?(f=()=>{if(!h)return;const C=B=>{g.current&&!g.current.contains(B.target)&&b(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},v=[h],n[0]=h,n[1]=f,n[2]=v):(f=n[1],v=n[2]),T.useEffect(f,v);let w;n[3]===Symbol.for("react.memo_cache_sentinel")?(w=C=>{var B,R;C.key==="Escape"&&(b(!1),(R=(B=g.current)==null?void 0:B.querySelector("button[aria-haspopup]"))==null||R.focus())},n[3]=w):w=n[3];const _=w,E=u==="connected"?pn.dotConnected:u==="connecting"?pn.dotConnecting:u==="partial"?pn.dotPartial:u==="idle"?pn.dotIdle:void 0;let M;n[4]===Symbol.for("react.memo_cache_sentinel")?(M=()=>b(r0),n[4]=M):M=n[4];let j;n[5]!==E||n[6]!==u?(j=u!==void 0&&m.jsx("span",{className:`${pn.dot} ${E??""}`,"aria-hidden":"true"}),n[5]=E,n[6]=u,n[7]=j):j=n[7];let x;n[8]!==s?(x=m.jsx("span",{children:s}),n[8]=s,n[9]=x):x=n[9];const y=`${pn.chevron} ${h?pn.chevronOpen:""}`;let N;n[10]!==y?(N=m.jsx("span",{className:y,"aria-hidden":"true",children:"▾"}),n[10]=y,n[11]=N):N=n[11];let O;n[12]!==h||n[13]!==j||n[14]!==x||n[15]!==N?(O=m.jsxs("button",{className:pn.trigger,onClick:M,"aria-haspopup":"true","aria-expanded":h,children:[j,x,N]}),n[12]=h,n[13]=j,n[14]=x,n[15]=N,n[16]=O):O=n[16];let k;n[17]!==d||n[18]!==h?(k=h&&m.jsx("div",{className:pn.dropdown,role:"menu",children:d}),n[17]=d,n[18]=h,n[19]=k):k=n[19];let Y;return n[20]!==k||n[21]!==O?(Y=m.jsxs("div",{className:pn.container,ref:g,onKeyDown:_,children:[O,k]}),n[20]=k,n[21]=O,n[22]=Y):Y=n[22],Y}function r0(r){return!r}const c0="_nav_1hfby_3",u0="_menuList_1hfby_11",d0="_menuItem_1hfby_19",p0="_toolRow_1hfby_56",h0="_toolLink_1hfby_67",f0="_toolLinkActive_1hfby_92",m0="_toolDot_1hfby_99",g0="_toolDotIdle_1hfby_106",y0="_toolDotConnecting_1hfby_107",v0="_toolDotConnected_1hfby_108",b0="_connectAllRow_1hfby_112",_0="_connectAllBtn_1hfby_118",x0="_connectAllBtnStop_1hfby_142",S0="_toolConnectBtn_1hfby_154",w0="_toolConnectBtnStop_1hfby_180",T0="_externalIcon_1hfby_192",mt={nav:c0,menuList:u0,menuItem:d0,toolRow:p0,toolLink:h0,toolLinkActive:f0,toolDot:m0,toolDotIdle:g0,toolDotConnecting:y0,toolDotConnected:v0,connectAllRow:b0,connectAllBtn:_0,connectAllBtnStop:x0,toolConnectBtn:S0,toolConnectBtnStop:w0,externalIcon:T0};function E0(r){return r.every(n=>n==="connected")?"connected":r.every(n=>n==="idle")?"idle":r.some(n=>n==="connecting")?"connecting":"partial"}function A0(r){return r==="connected"?"connected":r==="connecting"?"connecting":"idle"}const N0=[{href:"/info",label:"Info"},{href:"/info/lib",label:"Libraries"},{href:"/info/routes",label:"Services"},{href:"/health",label:"Health"},{href:"/env",label:"Environment"},{href:"http://localhost:8085/api/ws/json",label:"Legacy JSON"},{href:"http://localhost:8085/api/ws/graph",label:"Legacy Graph"}];function C0(r){const n=Te.c(27),{addToast:s}=r,u=Ec();let d,h,b;if(n[0]!==u){const B=Rn.map(R=>u.getSlot(R.wsPath).phase);b=E0(B),d=B.every(D0),h=B.some(k0),n[0]=u,n[1]=d,n[2]=h,n[3]=b}else d=n[1],h=n[2],b=n[3];const g=h;let f;n[4]!==s||n[5]!==u?(f=function(){Rn.forEach(R=>{u.getSlot(R.wsPath).phase==="idle"&&u.connect(R.wsPath,s)})},n[4]=s,n[5]=u,n[6]=f):f=n[6];const v=f;let w;n[7]!==u?(w=function(){Rn.forEach(R=>{const{phase:I}=u.getSlot(R.wsPath);(I==="connected"||I==="connecting")&&u.disconnect(R.wsPath)})},n[7]=u,n[8]=w):w=n[8];const _=w,E=`${mt.connectAllBtn} ${d?mt.connectAllBtnStop:""}`,M=d?_:v,j=g?"Connecting…":d?"Disconnect all WebSockets":"Connect all WebSockets",x=g?"Connecting…":d?"Disconnect All":"Connect All";let y;n[9]!==g||n[10]!==E||n[11]!==M||n[12]!==j||n[13]!==x?(y=m.jsx("div",{className:mt.connectAllRow,children:m.jsx("button",{className:E,onClick:M,disabled:g,"aria-label":j,children:x})}),n[9]=g,n[10]=E,n[11]=M,n[12]=j,n[13]=x,n[14]=y):y=n[14];let N;n[15]!==s||n[16]!==u?(N=Rn.map(B=>{const{phase:R}=u.getSlot(B.wsPath),I=A0(R),J=R==="connected",Z=R==="connecting",K=I==="connected"?mt.toolDotConnected:I==="connecting"?mt.toolDotConnecting:mt.toolDotIdle;return m.jsxs("li",{role:"none",className:mt.toolRow,children:[m.jsxs(Og,{to:B.path,role:"menuitem",className:M0,children:[m.jsx("span",{className:`${mt.toolDot} ${K}`,"aria-hidden":"true"}),m.jsx("span",{className:mt.toolLabel,children:B.label})]}),m.jsx("button",{className:`${mt.toolConnectBtn} ${J?mt.toolConnectBtnStop:""}`,onClick:()=>J||Z?u.disconnect(B.wsPath):u.connect(B.wsPath,s),disabled:Z,"aria-label":Z?"Connecting…":J?`Disconnect ${B.label}`:`Connect ${B.label}`,title:Z?"Connecting…":af(B.wsPath),children:Z?"…":J?"Stop":"Start"})]},B.path)}),n[15]=s,n[16]=u,n[17]=N):N=n[17];let O;n[18]!==N?(O=m.jsx("ul",{className:mt.menuList,role:"none",children:N}),n[18]=N,n[19]=O):O=n[19];let k;n[20]!==O||n[21]!==y||n[22]!==b?(k=m.jsxs(mc,{label:"Tools",dotStatus:b,children:[y,O]}),n[20]=O,n[21]=y,n[22]=b,n[23]=k):k=n[23];let Y;n[24]===Symbol.for("react.memo_cache_sentinel")?(Y=m.jsx(mc,{label:"Quick Links",children:m.jsx("ul",{className:mt.menuList,role:"none",children:N0.map(j0)})}),n[24]=Y):Y=n[24];let C;return n[25]!==k?(C=m.jsxs("nav",{className:mt.nav,"aria-label":"Main navigation",children:[k,Y]}),n[25]=k,n[26]=C):C=n[26],C}function j0(r){return m.jsx("li",{role:"none",children:m.jsxs("a",{href:r.href,role:"menuitem",className:mt.menuItem,target:"_blank",rel:"noopener noreferrer",children:[r.label,m.jsx("span",{className:mt.externalIcon,"aria-hidden":"true",children:"↗"})]})},r.href)}function M0(r){const{isActive:n}=r;return`${mt.toolLink} ${n?mt.toolLinkActive:""}`}function k0(r){return r==="connecting"}function D0(r){return r==="connected"}const O0="_saveBtn_1xd2l_3",R0="_saveForm_1xd2l_33",z0="_saveInput_1xd2l_39",B0="_saveInputWarn_1xd2l_55",H0="_saveWarnLabel_1xd2l_59",G0="_saveActionBtn_1xd2l_65",Ca={saveBtn:O0,saveForm:R0,saveInput:z0,saveInputWarn:B0,saveWarnLabel:H0,saveActionBtn:G0};function U0(r){const n=Te.c(33),{disabled:s,defaultName:u,onSave:d,nameExists:h,connected:b}=r,g=b===void 0?!1:b,[f,v]=T.useState(!1),[w,_]=T.useState(""),E=T.useRef(null);let M;n[0]!==u?(M=()=>{_(u),v(!0)},n[0]=u,n[1]=M):M=n[1];const j=M;let x;n[2]===Symbol.for("react.memo_cache_sentinel")?(x=()=>{v(!1),_("")},n[2]=x):x=n[2];const y=x;let N;n[3]!==d||n[4]!==w?(N=()=>{const Z=w.trim();Z&&(d(Z),v(!1),_(""))},n[3]=d,n[4]=w,n[5]=N):N=n[5];const O=N;let k;n[6]!==O?(k=Z=>{Z.key==="Enter"&&(Z.preventDefault(),O()),Z.key==="Escape"&&(Z.preventDefault(),y())},n[6]=O,n[7]=k):k=n[7];const Y=k;let C,B;if(n[8]!==f?(C=()=>{var Z;f&&((Z=E.current)==null||Z.focus())},B=[f],n[8]=f,n[9]=C,n[10]=B):(C=n[9],B=n[10]),T.useEffect(C,B),f){const Z=`${Ca.saveInput}${h!=null&&h(w.trim())?` ${Ca.saveInputWarn}`:""}`;let K;n[11]===Symbol.for("react.memo_cache_sentinel")?(K=F=>_(F.target.value),n[11]=K):K=n[11];let P;n[12]!==Y||n[13]!==w||n[14]!==Z?(P=m.jsx("input",{ref:E,className:Z,type:"text",value:w,onChange:K,onKeyDown:Y,placeholder:"Enter a name…","aria-label":"Graph save name",maxLength:80}),n[12]=Y,n[13]=w,n[14]=Z,n[15]=P):P=n[15];let le;n[16]!==h||n[17]!==w?(le=(h==null?void 0:h(w.trim()))&&m.jsx("span",{className:Ca.saveWarnLabel,role:"status",children:"Overwrite?"}),n[16]=h,n[17]=w,n[18]=le):le=n[18];let te;n[19]!==w?(te=w.trim(),n[19]=w,n[20]=te):te=n[20];const re=!te;let z;n[21]!==O||n[22]!==re?(z=m.jsx("button",{className:Ca.saveActionBtn,onClick:O,disabled:re,"aria-label":"Confirm save",children:"✅"}),n[21]=O,n[22]=re,n[23]=z):z=n[23];let U;n[24]===Symbol.for("react.memo_cache_sentinel")?(U=m.jsx("button",{className:Ca.saveActionBtn,onClick:y,"aria-label":"Cancel save",children:"❌"}),n[24]=U):U=n[24];let $;return n[25]!==P||n[26]!==le||n[27]!==z?($=m.jsxs("div",{className:Ca.saveForm,children:[P,le,z,U]}),n[25]=P,n[26]=le,n[27]=z,n[28]=$):$=n[28],$}const R=s||!g,I=s?"No graph loaded":g?"Export graph snapshot to server and save bookmark":"Connect first to save";let J;return n[29]!==j||n[30]!==R||n[31]!==I?(J=m.jsx("button",{className:Ca.saveBtn,onClick:j,disabled:R,title:I,"aria-label":"Save graph snapshot",children:"💾 Save Graph"}),n[29]=j,n[30]=R,n[31]=I,n[32]=J):J=n[32],J}const L0="_empty_tpeii_3",Y0="_hint_tpeii_12",q0="_list_tpeii_21",I0="_row_tpeii_31",X0="_rowInfo_tpeii_50",J0="_rowName_tpeii_58",Z0="_rowMeta_tpeii_67",Q0="_rowActions_tpeii_78",V0="_loadBtn_tpeii_84",K0="_deleteBtn_tpeii_85",hn={empty:L0,hint:Y0,list:q0,row:I0,rowInfo:X0,rowName:J0,rowMeta:Z0,rowActions:Q0,loadBtn:V0,deleteBtn:K0};function $0(r){const n=Te.c(8),{savedGraphs:s,onLoad:u,onDelete:d,connected:h}=r,b=s.length>0?`Load Graph (${s.length})`:"Load Graph";let g;n[0]!==h||n[1]!==d||n[2]!==u||n[3]!==s?(g=s.length===0?m.jsx("p",{className:hn.empty,children:"No saved graphs yet."}):m.jsxs(m.Fragment,{children:[!h&&m.jsx("p",{className:hn.hint,children:"Connect to load a graph"}),m.jsx("ul",{className:hn.list,role:"list",children:s.map(v=>m.jsxs("li",{className:hn.row,children:[m.jsxs("div",{className:hn.rowInfo,children:[m.jsx("span",{className:hn.rowName,title:v.name,children:v.name}),m.jsx("span",{className:hn.rowMeta,children:new Date(v.savedAt).toLocaleString()})]}),m.jsxs("div",{className:hn.rowActions,children:[m.jsx("button",{className:hn.loadBtn,onClick:()=>u(v.name),disabled:!h,title:h?`Run: import graph from ${v.name}`:"Connect to the playground first","aria-label":`Load graph ${v.name}`,children:"Load"}),m.jsx("button",{className:hn.deleteBtn,onClick:()=>d(v.name),title:`Remove "${v.name}" from local storage`,"aria-label":`Delete saved graph ${v.name}`,children:"Delete"})]})]},v.name))})]}),n[0]=h,n[1]=d,n[2]=u,n[3]=s,n[4]=g):g=n[4];let f;return n[5]!==b||n[6]!==g?(f=m.jsx(mc,{label:b,children:g}),n[5]=b,n[6]=g,n[7]=f):f=n[7],f}const W0="_payloadRoot_6u47x_2",P0="_labelRow_6u47x_10",F0="_label_6u47x_10",ev="_payloadControls_6u47x_26",tv="_charCounter_6u47x_32",nv="_typeIndicator_6u47x_38",av="_validationIcon_6u47x_49",lv="_formatButton_6u47x_53",ov="_uploadButton_6u47x_67",iv="_textarea_6u47x_82",sv="_textareaError_6u47x_107",rv="_errorMessage_6u47x_109",cv="_sampleButtonsRow_6u47x_117",uv="_sampleButtons_6u47x_117",dv="_sampleLabel_6u47x_130",pv="_sampleGroup_6u47x_136",hv="_sampleGroupLabel_6u47x_143",fv="_sampleButton_6u47x_117",at={payloadRoot:W0,labelRow:P0,label:F0,payloadControls:ev,charCounter:tv,typeIndicator:nv,validationIcon:av,formatButton:lv,uploadButton:ov,textarea:iv,textareaError:sv,errorMessage:rv,sampleButtonsRow:cv,sampleButtons:uv,sampleLabel:dv,sampleGroup:pv,sampleGroupLabel:hv,sampleButton:fv};function mv(r){const n=Te.c(21),{onLoad:s}=r;let u,d,h,b,g,f;if(n[0]!==s){const _=Object.keys(Di).filter(vv),E=Object.keys(Di).filter(yv),M=gv;b=at.sampleButtons,n[7]===Symbol.for("react.memo_cache_sentinel")?(g=m.jsx("span",{className:at.sampleLabel,children:"Quick load:"}),n[7]=g):g=n[7];let j;n[8]===Symbol.for("react.memo_cache_sentinel")?(j=m.jsx("span",{className:at.sampleGroupLabel,children:"JSON:"}),n[8]=j):j=n[8];const x=_.map(y=>m.jsx("button",{className:at.sampleButton,onClick:()=>s(Di[y]),children:M(y)},y));n[9]!==x?(f=m.jsxs("div",{className:at.sampleGroup,children:[j,x]}),n[9]=x,n[10]=f):f=n[10],u=at.sampleGroup,n[11]===Symbol.for("react.memo_cache_sentinel")?(d=m.jsx("span",{className:at.sampleGroupLabel,children:"XML:"}),n[11]=d):d=n[11],h=E.map(y=>m.jsx("button",{className:at.sampleButton,onClick:()=>s(Di[y]),children:M(y)},y)),n[0]=s,n[1]=u,n[2]=d,n[3]=h,n[4]=b,n[5]=g,n[6]=f}else u=n[1],d=n[2],h=n[3],b=n[4],g=n[5],f=n[6];let v;n[12]!==u||n[13]!==d||n[14]!==h?(v=m.jsxs("div",{className:u,children:[d,h]}),n[12]=u,n[13]=d,n[14]=h,n[15]=v):v=n[15];let w;return n[16]!==b||n[17]!==g||n[18]!==f||n[19]!==v?(w=m.jsxs("div",{className:b,children:[g,f,v]}),n[16]=b,n[17]=g,n[18]=f,n[19]=v,n[20]=w):w=n[20],w}function gv(r){return r.replace(/^(json|xml)_/,"").replace(/_/g," ")}function yv(r){return r.startsWith("xml_")}function vv(r){return r.startsWith("json_")}function bv(r){const n=Te.c(40),{payload:s,onChange:u,validation:d,onFormat:h,onUpload:b}=r;let g;n[0]===Symbol.for("react.memo_cache_sentinel")?(g=m.jsx("label",{htmlFor:"payload",className:at.label,children:"JSON/XML Payload"}),n[0]=g):g=n[0];let f;n[1]!==s.length?(f=m.jsxs("span",{className:at.charCounter,children:["size: ",s.length]}),n[1]=s.length,n[2]=f):f=n[2];let v;n[3]!==s||n[4]!==d.type?(v=s&&d.type&&m.jsx("span",{className:at.typeIndicator,children:d.type.toUpperCase()}),n[3]=s,n[4]=d.type,n[5]=v):v=n[5];let w;n[6]!==s||n[7]!==d.valid?(w=s&&m.jsx("span",{className:at.validationIcon,children:d.valid?"✅":"❌"}),n[6]=s,n[7]=d.valid,n[8]=w):w=n[8];const _=!s||d.type!=="json",E=d.type==="xml"?"Format only available for JSON":"Format JSON";let M;n[9]!==h||n[10]!==_||n[11]!==E?(M=m.jsx("button",{className:at.formatButton,onClick:h,disabled:_,title:E,children:"Format"}),n[9]=h,n[10]=_,n[11]=E,n[12]=M):M=n[12];let j;n[13]!==b||n[14]!==s||n[15]!==d.type||n[16]!==d.valid?(j=b!==void 0&&m.jsx("button",{className:at.uploadButton,onClick:b,disabled:!s||!d.valid||d.type!=="json",title:"Upload JSON payload to current session via REST",children:"Upload"}),n[13]=b,n[14]=s,n[15]=d.type,n[16]=d.valid,n[17]=j):j=n[17];let x;n[18]!==f||n[19]!==v||n[20]!==w||n[21]!==M||n[22]!==j?(x=m.jsxs("div",{className:at.labelRow,children:[g,m.jsxs("div",{className:at.payloadControls,children:[f,v,w,M,j]})]}),n[18]=f,n[19]=v,n[20]=w,n[21]=M,n[22]=j,n[23]=x):x=n[23];const y=`${at.textarea} ${d.valid?"":at.textareaError}`;let N;n[24]!==u?(N=B=>u(B.target.value),n[24]=u,n[25]=N):N=n[25];let O;n[26]!==s||n[27]!==y||n[28]!==N?(O=m.jsx("textarea",{id:"payload",className:y,placeholder:"Paste your JSON/XML payload here",value:s,onChange:N}),n[26]=s,n[27]=y,n[28]=N,n[29]=O):O=n[29];let k;n[30]!==d.error||n[31]!==d.valid?(k=!d.valid&&m.jsx("div",{className:at.errorMessage,children:d.error}),n[30]=d.error,n[31]=d.valid,n[32]=k):k=n[32];let Y;n[33]!==u?(Y=m.jsx("div",{className:at.sampleButtonsRow,children:m.jsx(mv,{onLoad:u})}),n[33]=u,n[34]=Y):Y=n[34];let C;return n[35]!==O||n[36]!==k||n[37]!==Y||n[38]!==x?(C=m.jsxs("div",{className:at.payloadRoot,children:[x,O,k,Y]}),n[35]=O,n[36]=k,n[37]=Y,n[38]=x,n[39]=C):C=n[39],C}const _v="_content_138ap_8",xv="_header_138ap_22",Sv="_icon_138ap_42",wv="_alias_138ap_47",Tv="_badge_138ap_53",Ev="_body_138ap_65",Av="_row_138ap_70",Nv="_label_138ap_83",Cv="_value_138ap_89",jv="_edgeHandle_138ap_103",It={content:_v,header:xv,icon:Sv,alias:wv,badge:Tv,body:Ev,row:Av,label:Nv,value:Cv,edgeHandle:jv},Mv={Root:{icon:"🚀",label:"Root"},End:{icon:"🏁",label:"End"},Fetcher:{icon:"🌐",label:"Fetcher"},mapper:{icon:"🗺️",label:"Mapper"},Math:{icon:"🔢",label:"Math"},JavaScript:{icon:"📜",label:"JavaScript"},Provider:{icon:"🔌",label:"Provider"},Dictionary:{icon:"📖",label:"Dictionary"},Join:{icon:"🔀",label:"Join"},Extension:{icon:"🧩",label:"Extension"},Island:{icon:"🏝️",label:"Island"},Decision:{icon:"❓",label:"Decision"}};function kv(r){return Mv[r]??{icon:"📦",label:r}}function Oh(r){const n=Te.c(7),{label:s,value:u}=r;let d;n[0]!==s?(d=m.jsx("span",{className:It.label,children:s}),n[0]=s,n[1]=d):d=n[1];let h;n[2]!==u?(h=m.jsx("span",{className:It.value,title:u,children:u}),n[2]=u,n[3]=h):h=n[3];let b;return n[4]!==d||n[5]!==h?(b=m.jsxs("div",{className:It.row,children:[d,h]}),n[4]=d,n[5]=h,n[6]=b):b=n[6],b}function Dv(r){const n=Te.c(3),{properties:s}=r;let u,d;if(n[0]!==s){d=Symbol.for("react.early_return_sentinel");e:{const h=Object.entries(s).filter(Rv);if(h.length===0){d=null;break e}u=m.jsx(m.Fragment,{children:h.map(Ov)})}n[0]=s,n[1]=u,n[2]=d}else u=n[1],d=n[2];return d!==Symbol.for("react.early_return_sentinel")?d:u}function Ov(r){const[n,s]=r;if(Array.isArray(s))return s.map((d,h)=>{const b=typeof d=="string"?d:JSON.stringify(d);return m.jsx(Oh,{label:h===0?n:"",value:b},`${n}-${h}`)});const u=typeof s=="string"?s:JSON.stringify(s);return m.jsx(Oh,{label:n,value:u},n)}function Rv(r){const[,n]=r;return n!=null}function Yt(r){const n=Te.c(47),{data:s,isConnectable:u,selected:d}=r;let h;n[0]!==s.nodeType?(h=kv(s.nodeType),n[0]=s.nodeType,n[1]=h):h=n[1];const b=h;let g;n[2]!==s.minHeight||n[3]!==d?(g=m.jsx(Gg,{minWidth:180,minHeight:s.minHeight,isVisible:d}),n[2]=s.minHeight,n[3]=d,n[4]=g):g=n[4];let f;if(n[5]!==s.targetHandles||n[6]!==u){let k;n[8]!==u?(k=Y=>{const{id:C,offset:B}=Y;return m.jsx(Mi,{id:C,type:"target",position:ki.Left,isConnectable:u,className:It.edgeHandle,style:{top:`calc(50% + ${B}px)`}},C)},n[8]=u,n[9]=k):k=n[9],f=s.targetHandles.map(k),n[5]=s.targetHandles,n[6]=u,n[7]=f}else f=n[7];let v;if(n[10]!==s.backSourceHandles||n[11]!==u){let k;n[13]!==u?(k=Y=>{const{id:C,offset:B}=Y;return m.jsx(Mi,{id:C,type:"source",position:ki.Left,isConnectable:u,className:It.edgeHandle,style:{top:`calc(50% + ${B}px)`}},C)},n[13]=u,n[14]=k):k=n[14],v=s.backSourceHandles.map(k),n[10]=s.backSourceHandles,n[11]=u,n[12]=v}else v=n[12];let w;n[15]!==b.icon?(w=m.jsx("span",{className:It.icon,children:b.icon}),n[15]=b.icon,n[16]=w):w=n[16];let _;n[17]!==s.alias?(_=m.jsx("span",{className:It.alias,children:s.alias}),n[17]=s.alias,n[18]=_):_=n[18];let E;n[19]!==b.label?(E=m.jsx("span",{className:It.badge,children:b.label}),n[19]=b.label,n[20]=E):E=n[20];let M;n[21]!==w||n[22]!==_||n[23]!==E?(M=m.jsxs("div",{className:It.header,children:[w,_,E]}),n[21]=w,n[22]=_,n[23]=E,n[24]=M):M=n[24];let j;n[25]!==s.properties?(j=m.jsx("div",{className:It.body,children:m.jsx(Dv,{properties:s.properties})}),n[25]=s.properties,n[26]=j):j=n[26];let x;n[27]!==M||n[28]!==j?(x=m.jsxs("div",{className:It.content,children:[M,j]}),n[27]=M,n[28]=j,n[29]=x):x=n[29];let y;if(n[30]!==s.sourceHandles||n[31]!==u){let k;n[33]!==u?(k=Y=>{const{id:C,offset:B}=Y;return m.jsx(Mi,{id:C,type:"source",position:ki.Right,isConnectable:u,className:It.edgeHandle,style:{top:`calc(50% + ${B}px)`}},C)},n[33]=u,n[34]=k):k=n[34],y=s.sourceHandles.map(k),n[30]=s.sourceHandles,n[31]=u,n[32]=y}else y=n[32];let N;if(n[35]!==s.backTargetHandles||n[36]!==u){let k;n[38]!==u?(k=Y=>{const{id:C,offset:B}=Y;return m.jsx(Mi,{id:C,type:"target",position:ki.Right,isConnectable:u,className:It.edgeHandle,style:{top:`calc(50% + ${B}px)`}},C)},n[38]=u,n[39]=k):k=n[39],N=s.backTargetHandles.map(k),n[35]=s.backTargetHandles,n[36]=u,n[37]=N}else N=n[37];let O;return n[40]!==x||n[41]!==y||n[42]!==N||n[43]!==g||n[44]!==f||n[45]!==v?(O=m.jsxs(m.Fragment,{children:[g,f,v,x,y,N]}),n[40]=x,n[41]=y,n[42]=N,n[43]=g,n[44]=f,n[45]=v,n[46]=O):O=n[46],O}const zv={Root:Yt,End:Yt,Fetcher:Yt,mapper:Yt,Math:Yt,JavaScript:Yt,Provider:Yt,Dictionary:Yt,Join:Yt,Extension:Yt,Island:Yt,Decision:Yt,default:Yt},Bv="_graphWrapper_191wx_15",Hv="_empty_191wx_22",Gv="_emptyIcon_191wx_35",Uv="_refreshingOverlay_191wx_69",Lv="_refreshingSpinner_191wx_85",Yv="_contextMenu_191wx_100",qv="_contextMenuItem_191wx_110",ln={graphWrapper:Bv,empty:Hv,emptyIcon:Gv,refreshingOverlay:Uv,refreshingSpinner:Lv,contextMenu:Yv,contextMenuItem:qv};class Iv extends T.Component{constructor(){super(...arguments),this.state={caughtError:null}}static getDerivedStateFromError(n){return{caughtError:n instanceof Error?n.message:String(n)}}componentDidCatch(n,s){var d,h;const u=n instanceof Error?n.message:String(n);console.error("[GraphView] Render error:",u,s.componentStack),(h=(d=this.props).onRenderError)==null||h.call(d,`Graph render failed: ${u}`)}render(){return this.state.caughtError?m.jsxs("div",{className:ln.empty,children:[m.jsx("span",{className:ln.emptyIcon,children:"⚠️"}),m.jsx("span",{children:"Graph could not be rendered."}),m.jsx("span",{children:this.state.caughtError})]}):this.props.children}}const gc=240,gl=100,Rh=60,zh=120,Xv=120,Jv=80,Zv={boxSizing:"border-box",borderRadius:"8px",borderWidth:"1.5px",borderStyle:"solid",background:"var(--bg-secondary, #1e1e2e)",color:"var(--text-primary, #cdd6f4)",fontSize:"0.75rem",boxShadow:"0 2px 8px rgba(0,0,0,0.45)",overflow:"visible",padding:0},Qv={Root:"#15803d",End:"#dc2626",Fetcher:"#2563eb",mapper:"#ea580c",Math:"#a16207",JavaScript:"#7e22ce",Provider:"#be185d",Dictionary:"#0e7490",Join:"#65a30d",Extension:"#4338ca",Island:"#475569",Decision:"#b45309"},Vv="#6c7086",yc="rgba(148, 163, 184, 0.42)",Kv="var(--bg-secondary)",Ri=24,$v=32,Bh=["#0369a1","#15803d","#b45309","#7e22ce","#b91c1c","#0f766e","#c2410c","#a16207"],Wv={fetch:"#0369a1",details:"#0369a1","ext-call":"#0369a1",mapping:"#b45309",compute:"#b45309",calculate:"#b45309",evaluate:"#b45309",fork:"#7e22ce",join:"#7e22ce",one:"#7e22ce",two:"#6d28d9",three:"#5b21b6",more:"#4c1d95",done:"#15803d",complete:"#15803d",finish:"#15803d",positive:"#15803d",negative:"#b91c1c"};function Pv(r){let n=0;for(let s=0;s<r.length;s++)n=(n<<5)-n+r.charCodeAt(s),n|=0;return Math.abs(n)}function Fv(r){if(r.length===0)return yc;const n=r[0].trim().toLowerCase(),s=Wv[n];return s||Bh[Pv(n)%Bh.length]}function eb(r){return`source-${r}`}function tb(r){return`target-${r}`}function nb(r){return`back-source-${r}`}function ab(r){return`back-target-${r}`}function Hh(r,n){return n<=1?0:n===2?r===0?-Ri:Ri:(r-(n-1)/2)*Ri}function Gh(r){return r<=1?gl:Math.max(gl,(r-1)*Ri+$v*2)}function lb(r){const n=Qv[r]??Vv;return{...Zv,borderColor:n,"--node-accent":n}}const ob=new Set(["graph.math","graph.js"]),Uh=["Dictionary","Provider","Module","Entity"];function ib(r,n){if(n.has(r.alias))return"flow";const u=r.types[0]??"",d=typeof r.properties.skill=="string"?r.properties.skill:void 0;return u==="Dictionary"?"Dictionary":u==="Provider"?"Provider":d&&ob.has(d)?"Module":d?"__unknown__":"Entity"}function sb(r,n,s){var Y;const u=new Set;for(const C of n??[])u.add(C.source),u.add(C.target);const d=[],h=[],b=new Map;for(const C of r){const B=ib(C,u);b.set(C.alias,B),B==="flow"?d.push(C):h.push(C)}const g=new Set(d.map(C=>C.alias)),f=new Map,v=new Map;for(const C of d)f.set(C.alias,[]),v.set(C.alias,0);for(const C of n??[])!g.has(C.source)||!g.has(C.target)||((Y=f.get(C.source))==null||Y.push(C.target),v.set(C.target,(v.get(C.target)??0)+1));const w=d.filter(C=>v.get(C.alias)===0||C.types.includes("entry_point")).map(C=>C.alias),_=new Set;{let C=function(Z){if(J.get(Z)!==B)return;J.set(Z,R);const K=[{node:Z,childIdx:0}];for(;K.length>0;){const P=K[K.length-1],le=f.get(P.node)??[];if(P.childIdx>=le.length){J.set(P.node,I),K.pop();continue}const te=le[P.childIdx++],re=J.get(te);re===R?_.add(`${P.node}	${te}`):re===B&&(J.set(te,R),K.push({node:te,childIdx:0}))}};const B=0,R=1,I=2,J=new Map;for(const Z of d)J.set(Z.alias,0);for(const Z of w)C(Z);for(const Z of d)C(Z.alias)}const E=new Map,M=[...w];for(w.forEach(C=>E.set(C,0));M.length>0;){const C=M.shift(),B=E.get(C)??0;for(const R of f.get(C)??[])_.has(`${C}	${R}`)||(!E.has(R)||E.get(R)<=B)&&(E.set(R,B+1),M.push(R))}const j=E.size>0?Math.max(...E.values()):0;for(const C of d)E.has(C.alias)||E.set(C.alias,j+1);const x=new Map;for(const[C,B]of E)x.has(B)||x.set(B,[]),x.get(B).push(C);const y=new Map;for(const[C,B]of x){let I=-(B.reduce((J,Z)=>J+(s.get(Z)??gl),0)+Math.max(0,B.length-1)*Rh)/2;B.forEach(J=>{const Z=s.get(J)??gl;y.set(J,{x:C*(gc+zh),y:I}),I+=Z+Rh})}let N=0;for(const[C,B]of y)N=Math.max(N,B.y+(s.get(C)??gl));let O=N+(y.size>0?Xv:0);const k=new Map;for(const C of Uh)k.set(C,[]);k.set("__unknown__",[]);for(const C of h){const B=b.get(C.alias);k.get(B).push(C.alias)}for(const C of[...Uh,"__unknown__"]){const B=(k.get(C)??[]).slice().sort();if(B.length===0)continue;const R=0,I=B.reduce((J,Z)=>Math.max(J,s.get(Z)??gl),0);B.forEach((J,Z)=>{y.set(J,{x:R+Z*(gc+zh),y:O})}),O+=I+Jv}return{positions:y,levelOf:E}}function rb(r){const n=r.connections??[],s=new Map,u=new Map;for(const x of n)s.set(x.source,(s.get(x.source)??0)+1),u.set(x.target,(u.get(x.target)??0)+1);const d=new Map(r.nodes.map(x=>[x.alias,Gh(Math.max(s.get(x.alias)??0,u.get(x.alias)??0))])),{positions:h,levelOf:b}=sb(r.nodes,n,d),g=new Set;for(const[x,y]of n.entries()){const N=b.get(y.source),O=b.get(y.target);N!==void 0&&O!==void 0&&N>=O&&g.add(x)}const f=new Map,v=new Map;for(const x of r.nodes)f.set(x.alias,[]),v.set(x.alias,[]);for(const[x,y]of n.entries())g.has(x)?(v.get(y.source).push({connIndex:x,peerAlias:y.target,isBack:!0}),f.get(y.target).push({connIndex:x,peerAlias:y.source,isBack:!0})):(f.get(y.source).push({connIndex:x,peerAlias:y.target,isBack:!1}),v.get(y.target).push({connIndex:x,peerAlias:y.source,isBack:!1}));const w=x=>{var y;return((y=h.get(x))==null?void 0:y.y)??0};for(const x of f.values())x.sort((y,N)=>w(y.peerAlias)-w(N.peerAlias));for(const x of v.values())x.sort((y,N)=>w(y.peerAlias)-w(N.peerAlias));const _=new Map,E=new Map,M=r.nodes.map(x=>{const y=f.get(x.alias)??[],N=v.get(x.alias)??[],O=Gh(Math.max(y.length,N.length)),k=[],Y=[];let C=0,B=0;for(let K=0;K<y.length;K++){const P=y[K],le=Hh(K,y.length);if(P.isBack){const te=ab(B++);Y.push({id:te,offset:le}),E.set(P.connIndex,te)}else{const te=eb(C++);k.push({id:te,offset:le}),_.set(P.connIndex,te)}}const R=[],I=[];let J=0,Z=0;for(let K=0;K<N.length;K++){const P=N[K],le=Hh(K,N.length);if(P.isBack){const te=nb(Z++);I.push({id:te,offset:le}),_.set(P.connIndex,te)}else{const te=tb(J++);R.push({id:te,offset:le}),E.set(P.connIndex,te)}}return{id:x.alias,type:x.types[0]??"default",position:h.get(x.alias)??{x:0,y:0},width:gc,height:O,style:lb(x.types[0]??"unknown"),data:{alias:x.alias,nodeType:x.types[0]??"unknown",properties:x.properties,sourceHandles:k,targetHandles:R,backSourceHandles:I,backTargetHandles:Y,minHeight:O}}}),j=[];for(const[x,y]of n.entries()){const N=y.relations.map(Y=>Y.type),O=`${y.source}__${y.target}__${x}`,k=Fv(N);j.push({id:O,source:y.source,target:y.target,sourceHandle:_.get(x),targetHandle:E.get(x),label:N.join(", "),type:"bezier",markerEnd:{type:Ug.ArrowClosed,width:16,height:16,color:yc},style:{stroke:yc,strokeWidth:2},labelStyle:{fill:k,fontSize:10,fontWeight:700},labelBgStyle:{fill:Kv,fillOpacity:.94,stroke:"rgba(15, 23, 42, 0.16)",strokeWidth:1},labelBgPadding:[5,2],labelBgBorderRadius:6,data:{relationTypes:N}})}return{nodes:M,edges:j}}function cb(r,n){return r.nodes.find(s=>s.alias===n)}function ub(r,n){return(r.connections??[]).filter(s=>s.source!==s.target&&(s.source===n||s.target===n))}const db="_toolbar_117v8_2",pb="_nameGroup_117v8_13",hb="_graphName_117v8_20",fb="_stats_117v8_29",mb="_toolbarActions_117v8_49",gb="_toolbarButton_117v8_55",ml={toolbar:db,nameGroup:pb,graphName:hb,stats:fb,toolbarActions:mb,toolbarButton:gb};function df(r){const n=Te.c(24),{graphData:s,graphName:u,onCopySuccess:d,onCopyError:h,extraActions:b}=r;let g;n[0]!==s||n[1]!==h||n[2]!==d?(g=()=>{s&&navigator.clipboard.writeText(JSON.stringify(s,null,2)).then(()=>d==null?void 0:d()).catch(()=>h==null?void 0:h())},n[0]=s,n[1]=h,n[2]=d,n[3]=g):g=n[3];const f=g,v=(s==null?void 0:s.nodes.length)??0;let w;n[4]!==(s==null?void 0:s.connections)?(w=(s==null?void 0:s.connections)??[],n[4]=s==null?void 0:s.connections,n[5]=w):w=n[5];const _=w.length,E=u??"Untitled";let M;n[6]!==E?(M=m.jsx("span",{className:ml.graphName,children:E}),n[6]=E,n[7]=M):M=n[7];const j=v!==1?"s":"",x=_!==1?"s":"";let y;n[8]!==_||n[9]!==v||n[10]!==j||n[11]!==x?(y=m.jsxs("span",{className:ml.stats,children:[v," node",j," · ",_," connection",x]}),n[8]=_,n[9]=v,n[10]=j,n[11]=x,n[12]=y):y=n[12];let N;n[13]!==M||n[14]!==y?(N=m.jsxs("div",{className:ml.nameGroup,children:[M,y]}),n[13]=M,n[14]=y,n[15]=N):N=n[15];let O;n[16]!==f?(O=m.jsx("button",{className:ml.toolbarButton,onClick:f,title:"Copy raw graph JSON to clipboard","aria-label":"Copy raw graph JSON to clipboard",children:"📑"}),n[16]=f,n[17]=O):O=n[17];let k;n[18]!==b||n[19]!==O?(k=m.jsxs("div",{className:ml.toolbarActions,children:[b,O]}),n[18]=b,n[19]=O,n[20]=k):k=n[20];let Y;return n[21]!==k||n[22]!==N?(Y=m.jsxs("div",{className:ml.toolbar,children:[N,k]}),n[21]=k,n[22]=N,n[23]=Y):Y=n[23],Y}const Lh=[],Yh=[];function yb(r){const n=Te.c(66),{graphData:s,graphName:u,onCopySuccess:d,onCopyError:h,onRenderError:b,isRefreshing:g,onClipNode:f}=r,v=g===void 0?!1:g,[w,_]=T.useState(null),E=T.useRef(null);let M,j;n[0]!==w?(M=()=>{if(!w)return;const oe=be=>{E.current&&!E.current.contains(be.target)&&_(null)},pe=be=>{be.key==="Escape"&&_(null)};return document.addEventListener("mousedown",oe),document.addEventListener("keydown",pe),()=>{document.removeEventListener("mousedown",oe),document.removeEventListener("keydown",pe)}},j=[w],n[0]=w,n[1]=M,n[2]=j):(M=n[1],j=n[2]),T.useEffect(M,j);const x=T.useRef(b);let y,N;n[3]!==b?(y=()=>{x.current=b},N=[b],n[3]=b,n[4]=y,n[5]=N):(y=n[4],N=n[5]),T.useEffect(y,N);let O;e:{if(!s){let oe;n[6]===Symbol.for("react.memo_cache_sentinel")?(oe={nodes:Lh,edges:Yh,transformError:null},n[6]=oe):oe=n[6],O=oe;break e}try{let oe;n[7]!==s?(oe=rb(s),n[7]=s,n[8]=oe):oe=n[8];const pe=oe;let be;n[9]!==pe?(be={...pe,transformError:null},n[9]=pe,n[10]=be):be=n[10],O=be}catch(oe){const pe=oe,be=pe instanceof Error?pe.message:String(pe);let W;n[11]===Symbol.for("react.memo_cache_sentinel")?(W={nodes:Lh,edges:Yh,transformError:be},n[11]=W):W=n[11],O=W}}const{nodes:k,edges:Y,transformError:C}=O;let B,R;n[12]!==C?(B=()=>{var oe;C&&((oe=x.current)==null||oe.call(x,`Graph render failed: ${C}`))},R=[C],n[12]=C,n[13]=B,n[14]=R):(B=n[13],R=n[14]),T.useEffect(B,R);let I;n[15]!==s?(I=s?JSON.stringify(s.nodes.map(bb)):"empty",n[15]=s,n[16]=I):I=n[16];const J=I,[Z,K,P]=Lg(k),[le,te,re]=Yg(Y);let z,U;if(n[17]!==Y||n[18]!==k||n[19]!==te||n[20]!==K?(z=()=>{K(k),te(Y)},U=[k,Y,K,te],n[17]=Y,n[18]=k,n[19]=te,n[20]=K,n[21]=z,n[22]=U):(z=n[21],U=n[22]),T.useEffect(z,U),C){let oe,pe;n[23]===Symbol.for("react.memo_cache_sentinel")?(oe=m.jsx("span",{className:ln.emptyIcon,children:"⚠️"}),pe=m.jsx("span",{children:"Graph could not be rendered."}),n[23]=oe,n[24]=pe):(oe=n[23],pe=n[24]);let be;return n[25]!==C?(be=m.jsxs("div",{className:ln.empty,children:[oe,pe,m.jsx("span",{children:C})]}),n[25]=C,n[26]=be):be=n[26],be}if(!s||s.nodes.length===0){let oe,pe;n[27]===Symbol.for("react.memo_cache_sentinel")?(oe=m.jsx("span",{className:ln.emptyIcon,children:"🕸️"}),pe=m.jsx("span",{children:"No graph data yet."}),n[27]=oe,n[28]=pe):(oe=n[27],pe=n[28]);let be;n[29]===Symbol.for("react.memo_cache_sentinel")?(be=m.jsx("strong",{children:"describe graph"}),n[29]=be):be=n[29];let W;return n[30]===Symbol.for("react.memo_cache_sentinel")?(W=m.jsxs("div",{className:ln.empty,children:[oe,pe,m.jsxs("span",{children:["Run ",be," or ",m.jsx("strong",{children:"export graph"})," in the playground."]})]}),n[30]=W):W=n[30],W}let $;n[31]!==s||n[32]!==u||n[33]!==h||n[34]!==d?($=m.jsx(df,{graphData:s,graphName:u,onCopySuccess:d,onCopyError:h}),n[31]=s,n[32]=u,n[33]=h,n[34]=d,n[35]=$):$=n[35];let F;n[36]===Symbol.for("react.memo_cache_sentinel")?(F={padding:.25},n[36]=F):F=n[36];let ee;n[37]===Symbol.for("react.memo_cache_sentinel")?(ee={hideAttribution:!1},n[37]=ee):ee=n[37];let ce;n[38]!==f?(ce=(oe,pe)=>{f&&(oe.preventDefault(),_({x:oe.clientX,y:oe.clientY,nodeAlias:pe.data.alias}))},n[38]=f,n[39]=ce):ce=n[39];let se,ne,ge;n[40]===Symbol.for("react.memo_cache_sentinel")?(se=()=>_(null),ne=m.jsx(qg,{variant:Ig.Dots,gap:18,size:1,color:"rgba(255,255,255,0.07)"}),ge=m.jsx(Xg,{showInteractive:!1}),n[40]=se,n[41]=ne,n[42]=ge):(se=n[40],ne=n[41],ge=n[42]);let de;n[43]===Symbol.for("react.memo_cache_sentinel")?(de=m.jsx(Jg,{nodeColor:vb,maskColor:"rgba(0,0,0,0.3)",style:{background:"#fff"}}),n[43]=de):de=n[43];let me;n[44]!==le||n[45]!==Z||n[46]!==re||n[47]!==P||n[48]!==ce?(me=m.jsxs(Zg,{nodes:Z,edges:le,onNodesChange:P,onEdgesChange:re,nodeTypes:zv,fitView:!0,fitViewOptions:F,minZoom:.2,maxZoom:2.5,proOptions:ee,onNodeContextMenu:ce,onPaneClick:se,children:[ne,ge,de]}),n[44]=le,n[45]=Z,n[46]=re,n[47]=P,n[48]=ce,n[49]=me):me=n[49];let Me;n[50]!==v?(Me=v&&m.jsx("div",{className:ln.refreshingOverlay,children:m.jsx("div",{className:ln.refreshingSpinner,role:"status","aria-label":"Graph refreshing"})}),n[50]=v,n[51]=Me):Me=n[51];let He;n[52]!==w||n[53]!==s||n[54]!==f?(He=w&&f&&s&&m.jsx("div",{ref:E,className:ln.contextMenu,style:{position:"fixed",top:w.y,left:w.x},role:"menu",children:m.jsx("button",{role:"menuitem",autoFocus:!0,className:ln.contextMenuItem,onClick:()=>{const oe=cb(s,w.nodeAlias);if(oe){const pe=ub(s,w.nodeAlias);f(oe,pe)}_(null)},children:"Clip to Clipboard"})}),n[52]=w,n[53]=s,n[54]=f,n[55]=He):He=n[55];let Se;n[56]!==v||n[57]!==$||n[58]!==me||n[59]!==Me||n[60]!==He?(Se=m.jsxs("div",{className:ln.graphWrapper,"aria-busy":v,children:[$,me,Me,He]}),n[56]=v,n[57]=$,n[58]=me,n[59]=Me,n[60]=He,n[61]=Se):Se=n[61];let Oe;return n[62]!==J||n[63]!==b||n[64]!==Se?(Oe=m.jsx(Iv,{onRenderError:b,children:Se},J),n[62]=J,n[63]=b,n[64]=Se,n[65]=Oe):Oe=n[65],Oe}function vb(r){return{Root:"#15803d",End:"#dc2626",Fetcher:"#2563eb",mapper:"#ea580c",Math:"#a16207",JavaScript:"#7e22ce",Provider:"#be185d",Dictionary:"#0e7490",Join:"#65a30d",Extension:"#4338ca",Island:"#475569",Decision:"#b45309"}[r.type??""]??"#6c7086"}function bb(r){return r.alias}const _b="_root_1yhjs_2",xb="_empty_1yhjs_10",Sb="_emptyIcon_1yhjs_23",wb="_toolbarButton_1yhjs_29 _toolbarButton_117v8_55",Tb="_scrollBody_1yhjs_34",Eb="_jsonContainer_1yhjs_45",Ab="_jsonLabel_1yhjs_46",Nb="_jsonString_1yhjs_47",Cb="_jsonNumber_1yhjs_48",jb="_jsonBoolean_1yhjs_49",Mb="_jsonNull_1yhjs_50",qt={root:_b,empty:xb,emptyIcon:Sb,toolbarButton:wb,scrollBody:Tb,jsonContainer:Eb,jsonLabel:Ab,jsonString:Nb,jsonNumber:Cb,jsonBoolean:jb,jsonNull:Mb},kb=Vg,Db=Qg,Ob=r=>r<3,Rb={default:Ob,all:kb,none:Db};function zb(r){const n=Te.c(23),{graphData:s,graphName:u,onCopySuccess:d,onCopyError:h}=r,[b,g]=T.useState("all");if(!s){let C;return n[0]===Symbol.for("react.memo_cache_sentinel")?(C=m.jsx("div",{className:qt.root,children:m.jsxs("div",{className:qt.empty,children:[m.jsx("span",{className:qt.emptyIcon,children:"🕸️"}),m.jsx("span",{children:"No graph data yet."}),m.jsx("span",{children:"Pin a graph-link message in the Console to load the raw data here."})]})}),n[0]=C):C=n[0],C}let f;n[1]===Symbol.for("react.memo_cache_sentinel")?(f=()=>g("all"),n[1]=f):f=n[1];const v=b==="all";let w;n[2]!==v?(w=m.jsx("button",{className:qt.toolbarButton,onClick:f,title:"Expand all nodes","aria-label":"Expand all JSON nodes","aria-pressed":v,children:"➖"}),n[2]=v,n[3]=w):w=n[3];let _;n[4]===Symbol.for("react.memo_cache_sentinel")?(_=()=>g("none"),n[4]=_):_=n[4];const E=b==="none";let M;n[5]!==E?(M=m.jsx("button",{className:qt.toolbarButton,onClick:_,title:"Collapse all nodes","aria-label":"Collapse all JSON nodes","aria-pressed":E,children:"➕"}),n[5]=E,n[6]=M):M=n[6];let j;n[7]!==w||n[8]!==M?(j=m.jsxs(m.Fragment,{children:[w,M]}),n[7]=w,n[8]=M,n[9]=j):j=n[9];let x;n[10]!==s||n[11]!==u||n[12]!==h||n[13]!==d||n[14]!==j?(x=m.jsx(df,{graphData:s,graphName:u,onCopySuccess:d,onCopyError:h,extraActions:j}),n[10]=s,n[11]=u,n[12]=h,n[13]=d,n[14]=j,n[15]=x):x=n[15];const y=s,N=Rb[b];let O;n[16]===Symbol.for("react.memo_cache_sentinel")?(O={...ho,container:`${ho.container} ${qt.jsonContainer}`,label:qt.jsonLabel,stringValue:qt.jsonString,numberValue:qt.jsonNumber,booleanValue:qt.jsonBoolean,nullValue:qt.jsonNull},n[16]=O):O=n[16];let k;n[17]!==N||n[18]!==y?(k=m.jsx("div",{className:qt.scrollBody,children:m.jsx(Tc,{data:y,shouldExpandNode:N,style:O})}),n[17]=N,n[18]=y,n[19]=k):k=n[19];let Y;return n[20]!==k||n[21]!==x?(Y=m.jsxs("div",{className:qt.root,children:[x,k]}),n[20]=k,n[21]=x,n[22]=Y):Y=n[22],Y}const Bb="_rightPanel_19vt8_2",Hb="_tabStrip_19vt8_10",Gb="_tab_19vt8_10",Ub="_tabActive_19vt8_38",Lb="_tabBadge_19vt8_42",Yb="_tabBody_19vt8_48",qb="_tabBodyHidden_19vt8_57",Ib="_rightPanelGroup_19vt8_62",Xb="_verticalResizeHandle_19vt8_70",xt={rightPanel:Bb,tabStrip:Hb,tab:Gb,tabActive:Ub,tabBadge:Lb,tabBody:Yb,tabBodyHidden:qb,rightPanelGroup:Ib,verticalResizeHandle:Xb},qh="help-split-percent",rc="help-split-maximized",Jb=45,Zb=98;function Qb({tabs:r,payload:n,onChange:s,validation:u,onFormat:d,onUpload:h,graphData:b,graphName:g,activeTab:f,onTabChange:v,onGraphRenderError:w,onGraphDataCopySuccess:_,onGraphDataCopyError:E,isGraphRefreshing:M,onClipNode:j,helpPanel:x}){const y=T.useId(),N=`${y}-tab-payload`,O=`${y}-tab-graph`,k=`${y}-tab-graph-data`,Y=m.jsxs("div",{className:xt.rightPanel,children:[m.jsxs("div",{className:xt.tabStrip,role:"tablist","aria-label":"Right panel tabs",children:[r.includes("payload")&&m.jsx("button",{role:"tab","aria-selected":f==="payload","aria-controls":N,className:`${xt.tab}${f==="payload"?` ${xt.tabActive}`:""}`,onClick:()=>v("payload"),children:"Payload Editor"}),r.includes("graph")&&m.jsxs("button",{role:"tab","aria-selected":f==="graph","aria-controls":O,className:`${xt.tab}${f==="graph"?` ${xt.tabActive}`:""}`,onClick:()=>v("graph"),children:["Graph",b!==null&&m.jsx("span",{className:xt.tabBadge,"aria-label":"Graph data available",children:"🕸️"})]}),r.includes("graph-data")&&m.jsx("button",{role:"tab","aria-selected":f==="graph-data","aria-controls":k,className:`${xt.tab}${f==="graph-data"?` ${xt.tabActive}`:""}`,onClick:()=>v("graph-data"),children:"Graph Data (Raw)"})]}),r.includes("payload")&&m.jsx("div",{role:"tabpanel",id:N,tabIndex:f==="payload"?0:-1,className:`${xt.tabBody}${f!=="payload"?` ${xt.tabBodyHidden}`:""}`,children:m.jsx(bv,{payload:n,onChange:s,validation:u,onFormat:d,onUpload:h})}),r.includes("graph")&&m.jsx("div",{role:"tabpanel",id:O,tabIndex:f==="graph"?0:-1,className:`${xt.tabBody}${f!=="graph"?` ${xt.tabBodyHidden}`:""}`,children:m.jsx(yb,{graphData:b,graphName:g,onRenderError:w,isRefreshing:M,onCopySuccess:_,onCopyError:E,onClipNode:j})}),r.includes("graph-data")&&m.jsx("div",{role:"tabpanel",id:k,tabIndex:f==="graph-data"?0:-1,className:`${xt.tabBody}${f!=="graph-data"?` ${xt.tabBodyHidden}`:""}`,children:m.jsx(zb,{graphData:b,graphName:g,onCopySuccess:_,onCopyError:E})})]}),C=T.useRef(Number(sessionStorage.getItem(qh))||Jb),B=T.useRef(null),R=T.useRef(null),[I,J]=T.useState(()=>sessionStorage.getItem(rc)==="1"),Z=T.useRef(I),K=T.useCallback($=>{const F=$["help-split-help"];if(F===void 0)return;const ee=F>=Zb;ee!==Z.current&&(Z.current=ee,J(ee),sessionStorage.setItem(rc,ee?"1":"0")),ee||(C.current=F,sessionStorage.setItem(qh,String(F)))},[]),P=T.useCallback(()=>{var F,ee,ce,se;const $=!Z.current;if(Z.current=$,J($),sessionStorage.setItem(rc,$?"1":"0"),$)(F=R.current)==null||F.resize("0%"),(ee=B.current)==null||ee.resize("100%");else{const ne=C.current;(ce=B.current)==null||ce.resize(`${ne}%`),(se=R.current)==null||se.resize(`${100-ne}%`)}},[]),le=!!x;if(T.useEffect(()=>{le&&Z.current&&requestAnimationFrame(()=>{var $,F;($=R.current)==null||$.resize("0%"),(F=B.current)==null||F.resize("100%")})},[le]),!x)return Y;const te=typeof x=="function"?x(P,I):x,z=Z.current?100:C.current,U=100-z;return m.jsxs(Fh,{orientation:"vertical",className:xt.rightPanelGroup,onLayoutChanged:K,children:[m.jsx(po,{panelRef:R,defaultSize:`${U}%`,minSize:"0%",children:Y}),m.jsx(dc,{className:xt.verticalResizeHandle,"aria-label":"Resize help panel"}),m.jsx(po,{id:"help-split-help",panelRef:B,defaultSize:`${z}%`,minSize:"15%",children:te})]})}class Vb extends tf.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,s){console.error("[ConsoleErrorBoundary] Failed to render message:",n,s.componentStack)}render(){return this.state.hasError?m.jsx("span",{children:this.props.fallback}):this.props.children}}const Kb=2e3,$b=(r={})=>{const{onSuccess:n,onError:s}=r,[u,d]=T.useState(!1),h=T.useRef(null);return T.useEffect(()=>()=>{h.current!==null&&clearTimeout(h.current)},[]),{copy:T.useCallback(async g=>{if(!navigator.clipboard)return console.warn("useCopyToClipboard: Clipboard API not available in this browser."),s==null||s(),!1;try{return await navigator.clipboard.writeText(g),d(!0),h.current!==null&&clearTimeout(h.current),h.current=setTimeout(()=>{h.current=null,d(!1)},Kb),n==null||n(),!0}catch(f){return console.error("useCopyToClipboard: Failed to write to clipboard.",f),s==null||s(),!1}},[n,s]),copied:u}},Wb="_consoleRoot_1lgp1_2",Pb="_consoleHeader_1lgp1_10",Fb="_consoleTitle_1lgp1_20",e2="_consoleControls_1lgp1_25",t2="_controlButton_1lgp1_30",n2="_console_1lgp1_2",a2="_emptyConsole_1lgp1_67",l2="_consoleMessage_1lgp1_80",o2="_consoleMessageActivatable_1lgp1_94",i2="_consoleMessageGraphLink_1lgp1_104",s2="_consoleMessageLargePayload_1lgp1_115",r2="_consoleMessageMockUpload_1lgp1_122",c2="_uploadMockButton_1lgp1_131",u2="_copyButton_1lgp1_172",d2="_copyButtonCopied_1lgp1_225",p2="_sendToJsonPathButton_1lgp1_234",h2="_messageIcon_1lgp1_268",f2="_messageContent_1lgp1_272",m2="_messageText_1lgp1_278",g2="_messageTime_1lgp1_283",y2="_jsonViewWrapper_1lgp1_295",v2="_jsonContainer_1lgp1_301",b2="_jsonLabel_1lgp1_302",_2="_jsonString_1lgp1_303",x2="_jsonNumber_1lgp1_304",S2="_jsonBoolean_1lgp1_305",w2="_jsonNull_1lgp1_306",Ye={consoleRoot:Wb,consoleHeader:Pb,consoleTitle:Fb,consoleControls:e2,controlButton:t2,console:n2,emptyConsole:a2,consoleMessage:l2,consoleMessageActivatable:o2,consoleMessageGraphLink:i2,consoleMessageLargePayload:s2,consoleMessageMockUpload:r2,uploadMockButton:c2,copyButton:u2,copyButtonCopied:d2,sendToJsonPathButton:p2,messageIcon:h2,messageContent:f2,messageText:m2,messageTime:g2,"messageType-error":"_messageType-error_1lgp1_290","messageType-info":"_messageType-info_1lgp1_291","messageType-welcome":"_messageType-welcome_1lgp1_292",jsonViewWrapper:y2,jsonContainer:v2,jsonLabel:b2,jsonString:_2,jsonNumber:x2,jsonBoolean:S2,jsonNull:w2};function T2(r){var ra;const n=Te.c(77),{message:s,msgId:u,classificationMap:d,onGraphLink:h,onCopyMessage:b,onSendToJsonPath:g,onUploadMockData:f,successfulUploadPaths:v}=r;let w,_,E;n[0]!==s?(_=Ay(s),w=Ny(_.type),E=fo(_.message),n[0]=s,n[1]=w,n[2]=_,n[3]=E):(w=n[1],_=n[2],E=n[3]);const M=E;let j,x,y,N,O,k;if(n[4]!==d||n[5]!==u||n[6]!==f||n[7]!==v){const ve=(u!==void 0?d==null?void 0:d.get(u):void 0)??[];x=ve.some(j2),y=ve.some(C2),N=ve.some(N2),O=((ra=ve.find(A2))==null?void 0:ra.uploadPath)??null,j=!!f&&N&&O!==null,k=j&&!!(v!=null&&v.has(O)),n[4]=d,n[5]=u,n[6]=f,n[7]=v,n[8]=j,n[9]=x,n[10]=y,n[11]=N,n[12]=O,n[13]=k}else j=n[8],x=n[9],y=n[10],N=n[11],O=n[12],k=n[13];const Y=k,C=!!h&&x&&!N&&!y,B=!!g&&M.isJSON;let R;n[14]!==b?(R={onSuccess:b},n[14]=b,n[15]=R):R=n[15];const{copy:I,copied:J}=$b(R);let Z;n[16]!==I||n[17]!==s?(Z=ve=>{ve.stopPropagation(),I(s)},n[16]=I,n[17]=s,n[18]=Z):Z=n[18];const K=Z;let P;n[19]!==I||n[20]!==s?(P=ve=>{(ve.key==="Enter"||ve.key===" ")&&(ve.preventDefault(),ve.stopPropagation(),I(s))},n[19]=I,n[20]=s,n[21]=P):P=n[21];const le=P;let te;n[22]!==M.data||n[23]!==M.isJSON||n[24]!==g?(te=ve=>{if(ve.stopPropagation(),!g||!M.isJSON)return;const fn=JSON.stringify(M.data,null,2);g(fn)},n[22]=M.data,n[23]=M.isJSON,n[24]=g,n[25]=te):te=n[25];const re=te;let z;n[26]!==O||n[27]!==f?(z=ve=>{ve.stopPropagation(),!(!f||!O)&&f(O)},n[26]=O,n[27]=f,n[28]=z):z=n[28];const U=z,$=Ye[`messageType-${_.type}`],F=C?Ye.consoleMessageActivatable:"",ee=x?Ye.consoleMessageGraphLink:"",ce=y?Ye.consoleMessageLargePayload:"",se=N?Ye.consoleMessageMockUpload:"";let ne;n[29]!==ee||n[30]!==ce||n[31]!==se||n[32]!==$||n[33]!==F?(ne=[Ye.consoleMessage,$,F,ee,ce,se].filter(Boolean),n[29]=ee,n[30]=ce,n[31]=se,n[32]=$,n[33]=F,n[34]=ne):ne=n[34];const ge=ne.join(" ");let de;n[35]!==C||n[36]!==h?(de=C?()=>h():void 0,n[35]=C,n[36]=h,n[37]=de):de=n[37];const me=C?"Click to load graph in Graph View":void 0,Me=C?"button":void 0,He=C?0:void 0;let Se;n[38]!==C||n[39]!==h?(Se=C?ve=>{(ve.key==="Enter"||ve.key===" ")&&(ve.preventDefault(),h())}:void 0,n[38]=C,n[39]=h,n[40]=Se):Se=n[40];const Oe=C?"Load graph in Graph View":void 0,oe=N?"⬆️":y?"⬇️":x?"🕸️":w;let pe;n[41]!==oe?(pe=m.jsx("span",{className:Ye.messageIcon,children:oe}),n[41]=oe,n[42]=pe):pe=n[42];let be;n[43]!==M.data||n[44]!==M.isJSON||n[45]!==_.message||n[46]!==Y?(be=m.jsx("div",{className:Ye.messageContent,children:M.isJSON?m.jsx("div",{className:Ye.jsonViewWrapper,children:m.jsx(Tc,{data:M.data,shouldExpandNode:E2,style:{...ho,container:`${ho.container} ${Ye.jsonContainer}`,label:Ye.jsonLabel,stringValue:Ye.jsonString,numberValue:Ye.jsonNumber,booleanValue:Ye.jsonBoolean,nullValue:Ye.jsonNull}})}):m.jsxs("span",{className:Ye.messageText,children:[_.message,Y&&m.jsx("span",{title:"Upload succeeded",children:" ✅"})]})}),n[43]=M.data,n[44]=M.isJSON,n[45]=_.message,n[46]=Y,n[47]=be):be=n[47];const W=`${Ye.copyButton} ${J?Ye.copyButtonCopied:""}`,ye=J?"Copied!":"Copy message",Ee=J?"Copied to clipboard":"Copy message to clipboard",fe=J?"✅":"📄";let De;n[48]!==K||n[49]!==le||n[50]!==W||n[51]!==ye||n[52]!==Ee||n[53]!==fe?(De=m.jsx("button",{className:W,onClick:K,onKeyDown:le,title:ye,"aria-label":Ee,tabIndex:0,children:fe}),n[48]=K,n[49]=le,n[50]=W,n[51]=ye,n[52]=Ee,n[53]=fe,n[54]=De):De=n[54];let Ge;n[55]!==B||n[56]!==re?(Ge=B&&m.jsx("button",{className:Ye.sendToJsonPathButton,onClick:re,onKeyDown:ve=>{(ve.key==="Enter"||ve.key===" ")&&re(ve)},title:"Open in JSON-Path Playground","aria-label":"Open this JSON in the JSON-Path Playground",tabIndex:0,children:"➡️"}),n[55]=B,n[56]=re,n[57]=Ge):Ge=n[57];let dt;n[58]!==j||n[59]!==U?(dt=j&&m.jsx("button",{className:Ye.uploadMockButton,onClick:U,onKeyDown:ve=>{(ve.key==="Enter"||ve.key===" ")&&U(ve)},title:"Re-open upload dialog","aria-label":"Re-open mock data upload dialog",tabIndex:0,children:"⬆️ Upload JSON…"}),n[58]=j,n[59]=U,n[60]=dt):dt=n[60];let et;n[61]!==_.time?(et=_.time&&m.jsx("span",{className:Ye.messageTime,children:_.time}),n[61]=_.time,n[62]=et):et=n[62];let ct;return n[63]!==ge||n[64]!==de||n[65]!==me||n[66]!==Me||n[67]!==He||n[68]!==Se||n[69]!==Oe||n[70]!==pe||n[71]!==be||n[72]!==De||n[73]!==Ge||n[74]!==dt||n[75]!==et?(ct=m.jsxs("div",{className:ge,onClick:de,title:me,role:Me,tabIndex:He,onKeyDown:Se,"aria-label":Oe,children:[pe,be,De,Ge,dt,et]}),n[63]=ge,n[64]=de,n[65]=me,n[66]=Me,n[67]=He,n[68]=Se,n[69]=Oe,n[70]=pe,n[71]=be,n[72]=De,n[73]=Ge,n[74]=dt,n[75]=et,n[76]=ct):ct=n[76],ct}function E2(r){return r<1}function A2(r){return r.kind==="upload.invitation"}function N2(r){return r.kind==="upload.invitation"}function C2(r){return r.kind==="payload.large"}function j2(r){return r.kind==="graph.link"}function M2(r){const n=Te.c(32),{messages:s,classificationMap:u,onCopy:d,onClear:h,consoleRef:b,onGraphLinkMessage:g,onCopyMessage:f,onSendToJsonPath:v,onUploadMockData:w,successfulUploadPaths:_}=r;let E;n[0]===Symbol.for("react.memo_cache_sentinel")?(E=m.jsx("span",{className:Ye.consoleTitle,children:"Console Output"}),n[0]=E):E=n[0];let M;n[1]!==d?(M=m.jsx("button",{className:Ye.controlButton,onClick:d,title:"Copy console output","aria-label":"Copy console output to clipboard",children:"📑"}),n[1]=d,n[2]=M):M=n[2];let j;n[3]!==h?(j=m.jsx("button",{className:Ye.controlButton,onClick:h,title:"Clear console","aria-label":"Clear console",children:"🗑️"}),n[3]=h,n[4]=j):j=n[4];let x;n[5]!==M||n[6]!==j?(x=m.jsxs("div",{className:Ye.consoleHeader,children:[E,m.jsxs("div",{className:Ye.consoleControls,children:[M,j]})]}),n[5]=M,n[6]=j,n[7]=x):x=n[7];let y;if(n[8]!==u||n[9]!==s||n[10]!==f||n[11]!==g||n[12]!==v||n[13]!==w||n[14]!==_){let Y;n[16]!==u||n[17]!==f||n[18]!==g||n[19]!==v||n[20]!==w||n[21]!==_?(Y=C=>m.jsx(Vb,{fallback:C.raw,children:m.jsx(T2,{message:C.raw,msgId:C.id,classificationMap:u,onGraphLink:g?()=>g(C):void 0,onCopyMessage:f,onSendToJsonPath:v,onUploadMockData:w,successfulUploadPaths:_})},C.id),n[16]=u,n[17]=f,n[18]=g,n[19]=v,n[20]=w,n[21]=_,n[22]=Y):Y=n[22],y=s.map(Y),n[8]=u,n[9]=s,n[10]=f,n[11]=g,n[12]=v,n[13]=w,n[14]=_,n[15]=y}else y=n[15];let N;n[23]!==s.length?(N=s.length===0&&m.jsxs("div",{className:Ye.emptyConsole,children:["No messages yet. Use the ",m.jsx("strong",{children:"Start"})," button in the header to connect."]}),n[23]=s.length,n[24]=N):N=n[24];let O;n[25]!==b||n[26]!==y||n[27]!==N?(O=m.jsxs("div",{className:Ye.console,ref:b,role:"log","aria-live":"polite",children:[y,N]}),n[25]=b,n[26]=y,n[27]=N,n[28]=O):O=n[28];let k;return n[29]!==x||n[30]!==O?(k=m.jsxs("div",{className:Ye.consoleRoot,children:[x,O]}),n[29]=x,n[30]=O,n[31]=k):k=n[31],k}const k2="_commandInput_j85f1_2",D2="_labelRow_j85f1_8",O2="_labelGroup_j85f1_16",R2="_label_j85f1_8",z2="_infoWrapper_j85f1_28",B2="_paletteToggle_j85f1_34",H2="_paletteToggleActive_j85f1_66",G2="_popover_j85f1_73",U2="_popoverOpen_j85f1_95",L2="_popoverTitle_j85f1_121",Y2="_popoverRow_j85f1_135",q2="_popoverKeyword_j85f1_156",I2="_popoverDesc_j85f1_168",X2="_popoverAlias_j85f1_174",J2="_inputRow_j85f1_181",Z2="_inputWrapper_j85f1_187",Q2="_textarea_j85f1_197",V2="_sendButton_j85f1_226",K2="_hint_j85f1_243",$2="_dropup_j85f1_251",W2="_dropupHeader_j85f1_266",P2="_dropupItem_j85f1_282",F2="_dropupItemText_j85f1_305",e_="_matchHighlight_j85f1_313",t_="_multilineIndicator_j85f1_319",Ke={commandInput:k2,labelRow:D2,labelGroup:O2,label:R2,infoWrapper:z2,paletteToggle:B2,paletteToggleActive:H2,popover:G2,popoverOpen:U2,popoverTitle:L2,popoverRow:Y2,popoverKeyword:q2,popoverDesc:I2,popoverAlias:X2,inputRow:J2,inputWrapper:Z2,textarea:Q2,sendButton:V2,hint:K2,dropup:$2,dropupHeader:W2,dropupItem:P2,dropupItemText:F2,matchHighlight:e_,multilineIndicator:t_},n_=[{keyword:"help",description:"List all help topics, or get help for a specific command",template:"help"},{keyword:"create",description:"Create a new graph node",template:`create node {name}
with type {type}
with properties
{key}={value}`,multiline:!0},{keyword:"update",description:"Update an existing node",template:`update node {name}
with type {type}
with properties
{key}={value}`,multiline:!0},{keyword:"edit",description:"Print raw node data ready for editing and re-submitting",template:"edit node {name}"},{keyword:"delete node",description:"Delete a node by name",alias:"clear node",template:"delete node {name}"},{keyword:"delete connection",description:"Delete connection(s) between two nodes",alias:"clear connection",template:"delete connection {nodeA} and {nodeB}"},{keyword:"delete cache",description:"Clear cached API fetcher results",alias:"clear cache",template:"delete cache"},{keyword:"connect",description:"Connect two nodes with a named relation",template:"connect {node-A} to {node-B} with {relation}"},{keyword:"list nodes",description:"List all nodes in the current graph",template:"list nodes"},{keyword:"list connections",description:"List all connections in the current graph",template:"list connections"},{keyword:"describe graph",description:"Describe the current graph model",template:"describe graph"},{keyword:"describe node",description:"Describe a specific node and its connections",template:"describe node {name}"},{keyword:"describe connection",description:"Describe connection(s) between two nodes",template:"describe connection {nodeA} and {nodeB}"},{keyword:"describe skill",description:"Show documentation for a skill by route name",template:"describe skill {skill.route}"},{keyword:"export",description:"Export the graph model to a JSON file",template:"export graph as {name}"},{keyword:"import graph",description:"Import a graph model from a saved file",template:"import graph from {name}"},{keyword:"import node",description:"Import a single node from another saved graph",template:"import node {node-name} from {graph-name}"},{keyword:"instantiate",description:"Create a runnable graph instance with mock input",alias:"start",template:`instantiate graph
{constant} -> input.body.{key}`,multiline:!0},{keyword:"upload mock data",description:"Print the URL to POST a JSON payload as mock input.body",template:"upload mock data"},{keyword:"execute",description:"Execute a single node skill in isolation",template:"execute node {name}"},{keyword:"inspect",description:"Inspect a state-machine variable",template:"inspect {variable_name}"},{keyword:"run",description:"Run the graph instance from root to end",template:"run"}];function a_(r,n){const s=Te.c(22),[u,d]=T.useState(!1),[h,b]=T.useState(-1);let g;if(s[0]!==n||s[1]!==r){e:{const Y=n.trimStart();if(Y.length===0){let J;s[3]===Symbol.for("react.memo_cache_sentinel")?(J=[],s[3]=J):J=s[3],g=J;break e}const C=Y.toLowerCase(),B=r.filter(J=>J.toLowerCase().startsWith(C)),R=new Set;g=B.filter(J=>R.has(J)?!1:(R.add(J),!0)).slice(0,Sy)}s[0]=n,s[1]=r,s[2]=g}else g=s[2];const f=g;let v;s[4]===Symbol.for("react.memo_cache_sentinel")?(v=()=>{d(!0),b(-1)},s[4]=v):v=s[4];const w=v;let _;s[5]!==f?(_=Y=>{const C=f.length;C!==0&&b(B=>Y===1?B<0?0:(B+1)%C:B<=0?C-1:B-1)},s[5]=f,s[6]=_):_=s[6];const E=_;let M;s[7]!==f?(M=(Y,C)=>{Y>=0&&Y<f.length&&C(f[Y]),d(!1),b(-1)},s[7]=f,s[8]=M):M=s[8];const j=M;let x;s[9]!==j||s[10]!==h||s[11]!==u||s[12]!==f?(x=Y=>{if(!u||f.length===0)return;const C=h>=0?h:0;j(C,Y)},s[9]=j,s[10]=h,s[11]=u,s[12]=f,s[13]=x):x=s[13];const y=x;let N;s[14]===Symbol.for("react.memo_cache_sentinel")?(N=()=>{d(!1),b(-1)},s[14]=N):N=s[14];const O=N;let k;return s[15]!==j||s[16]!==h||s[17]!==u||s[18]!==E||s[19]!==y||s[20]!==f?(k={suggestions:f,isOpen:u,activeIndex:h,onCommandChange:w,navigate:E,accept:j,onTab:y,dismiss:O},s[15]=j,s[16]=h,s[17]=u,s[18]=E,s[19]=y,s[20]=f,s[21]=k):k=s[21],k}const l_=r=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",width:14,height:14,stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",...r},T.createElement("polyline",{points:"2,4 6,8 2,12"}),T.createElement("line",{x1:7,y1:12,x2:14,y2:12}));function o_(r){const n=Te.c(70),{command:s,onChange:u,onKeyDown:d,onSend:h,sendDisabled:b,disabled:g,history:f}=r,v=T.useRef(null),w=T.useRef(null),_=T.useRef(null),[E,M]=T.useState(!1);let j,x;n[0]!==E?(j=()=>{if(!E)return;const W=ye=>{w.current&&!w.current.contains(ye.target)&&M(!1)};return document.addEventListener("mousedown",W),()=>document.removeEventListener("mousedown",W)},x=[E],n[0]=E,n[1]=j,n[2]=x):(j=n[1],x=n[2]),T.useEffect(j,x);const y=a_(f,s);let N;n[3]===Symbol.for("react.memo_cache_sentinel")?(N=()=>{const W=v.current;W&&(W.style.height="auto",W.style.height=`${W.scrollHeight}px`)},n[3]=N):N=n[3];let O;n[4]!==s?(O=[s],n[4]=s,n[5]=O):O=n[5],T.useEffect(N,O);const k=g?"Not connected":"Enter command (Enter to send · Shift+Enter for new line)",Y=g?"Enter your test message once it is connected":"Enter to send · Shift+Enter for new line · ↑↓ for history";let C;n[6]!==y||n[7]!==u||n[8]!==d||n[9]!==h?(C=W=>{var ye,Ee;if(W.key==="Tab"){W.preventDefault(),y.isOpen&&y.suggestions.length>0&&(y.onTab(fe=>u(fe)),requestAnimationFrame(()=>{const fe=v.current;fe&&(fe.selectionStart=fe.selectionEnd=fe.value.length)}));return}if(W.key==="Enter"){if(W.shiftKey)return;if(W.preventDefault(),y.isOpen&&y.activeIndex>=0){y.accept(y.activeIndex,fe=>u(fe)),requestAnimationFrame(()=>{const fe=v.current;fe&&(fe.selectionStart=fe.selectionEnd=fe.value.length)}),(ye=v.current)==null||ye.focus();return}h(),(Ee=v.current)==null||Ee.focus();return}if(W.key==="Escape"){if(y.isOpen){y.dismiss(),W.preventDefault();return}return}if(W.key==="ArrowUp"||W.key==="ArrowDown"){if(y.isOpen&&y.suggestions.length>0){W.preventDefault(),y.navigate(W.key==="ArrowDown"?1:-1);return}const fe=v.current;if(fe){const{selectionStart:De,value:Ge}=fe,et=!Ge.slice(0,De).includes(`
`),ct=!Ge.slice(De).includes(`
`);if(!(W.key==="ArrowUp"&&et||W.key==="ArrowDown"&&ct))return}d(W),requestAnimationFrame(()=>{const De=v.current;De&&(De.selectionStart=De.selectionEnd=De.value.length)});return}d(W)},n[6]=y,n[7]=u,n[8]=d,n[9]=h,n[10]=C):C=n[10];const B=C;let R;n[11]===Symbol.for("react.memo_cache_sentinel")?(R=m.jsx("label",{htmlFor:"command",className:Ke.label,children:"Command"}),n[11]=R):R=n[11];const I=`${Ke.paletteToggle}${E?` ${Ke.paletteToggleActive}`:""}`;let J;n[12]===Symbol.for("react.memo_cache_sentinel")?(J=()=>M(r_),n[12]=J):J=n[12];let Z;n[13]!==E?(Z=W=>{var ye;if(W.key==="ArrowDown"&&E){W.preventDefault();const Ee=(ye=_.current)==null?void 0:ye.querySelector('[role="option"]');Ee==null||Ee.focus()}},n[13]=E,n[14]=Z):Z=n[14];let K;n[15]===Symbol.for("react.memo_cache_sentinel")?(K=m.jsx(l_,{"aria-hidden":"true",focusable:"false"}),n[15]=K):K=n[15];let P;n[16]!==E||n[17]!==I||n[18]!==Z?(P=m.jsx("button",{type:"button",className:I,"aria-label":"Toggle command palette","aria-expanded":E,"aria-controls":"command-palette",onClick:J,onKeyDown:Z,title:"Command palette",children:K}),n[16]=E,n[17]=I,n[18]=Z,n[19]=P):P=n[19];const le=`${Ke.popover}${E?` ${Ke.popoverOpen}`:""}`;let te,re;n[20]===Symbol.for("react.memo_cache_sentinel")?(te=W=>{var ye,Ee;if(W.key==="ArrowDown"||W.key==="ArrowUp"){W.preventDefault();const fe=(ye=_.current)==null?void 0:ye.querySelectorAll('[role="option"]');if(!fe||fe.length===0)return;const De=Array.from(fe).indexOf(document.activeElement);W.key==="ArrowDown"?fe[De<0?0:(De+1)%fe.length].focus():fe[De<=0?fe.length-1:De-1].focus()}else W.key==="Escape"&&(W.preventDefault(),M(!1),(Ee=v.current)==null||Ee.focus())},re=m.jsx("p",{className:Ke.popoverTitle,children:"Command palette — click to insert"}),n[20]=te,n[21]=re):(te=n[20],re=n[21]);let z;n[22]!==E||n[23]!==u?(z=n_.map(W=>{const{keyword:ye,alias:Ee,description:fe,template:De}=W;return m.jsxs("div",{className:Ke.popoverRow,role:"option","aria-selected":!1,tabIndex:E?0:-1,onMouseDown:s_,onClick:()=>{var Ge;u(De),M(!1),(Ge=v.current)==null||Ge.focus()},onKeyDown:Ge=>{var dt;(Ge.key==="Enter"||Ge.key===" ")&&(Ge.preventDefault(),u(De),M(!1),(dt=v.current)==null||dt.focus())},children:[m.jsx("span",{className:Ke.popoverKeyword,children:ye}),m.jsxs("span",{className:Ke.popoverDesc,children:[fe,Ee&&m.jsxs("span",{className:Ke.popoverAlias,children:[" · alias: ",Ee]})]})]},ye)}),n[22]=E,n[23]=u,n[24]=z):z=n[24];let U;n[25]!==le||n[26]!==z?(U=m.jsxs("div",{id:"command-palette",ref:_,className:le,role:"listbox","aria-label":"Command palette",onKeyDown:te,children:[re,z]}),n[25]=le,n[26]=z,n[27]=U):U=n[27];let $;n[28]!==P||n[29]!==U?($=m.jsx("div",{className:Ke.labelRow,children:m.jsxs("div",{className:Ke.labelGroup,children:[R,m.jsxs("span",{ref:w,className:Ke.infoWrapper,children:[P,U]})]})}),n[28]=P,n[29]=U,n[30]=$):$=n[30];const F=!(y.isOpen&&y.suggestions.length>0);let ee;n[31]===Symbol.for("react.memo_cache_sentinel")?(ee=m.jsx("div",{className:Ke.dropupHeader,"aria-hidden":"true",children:"Recent Commands"}),n[31]=ee):ee=n[31];let ce;n[32]!==y||n[33]!==s||n[34]!==u?(ce=y.isOpen&&y.suggestions.length>0&&y.suggestions.map((W,ye)=>{const Ee=W.split(`
`)[0],fe=W.includes(`
`),De=s.trimStart().split(`
`)[0],Ge=Math.min(De.length,Ee.length),dt=Ee.slice(0,Ge),et=Ee.slice(Ge);return m.jsxs("div",{id:`history-option-${ye}`,role:"option","aria-selected":ye===y.activeIndex,className:Ke.dropupItem,onMouseDown:i_,onClick:()=>{y.accept(ye,ct=>u(ct)),requestAnimationFrame(()=>{const ct=v.current;ct&&(ct.selectionStart=ct.selectionEnd=ct.value.length)})},children:[m.jsxs("span",{className:Ke.dropupItemText,children:[Ge>0&&m.jsx("strong",{className:Ke.matchHighlight,children:dt}),et,fe?"…":""]}),fe&&m.jsx("span",{className:Ke.multilineIndicator,"aria-label":"multi-line command",children:"↵"})]},W)}),n[32]=y,n[33]=s,n[34]=u,n[35]=ce):ce=n[35];let se;n[36]!==F||n[37]!==ce?(se=m.jsxs("div",{id:"history-dropup",role:"listbox","aria-label":"Command history suggestions",className:Ke.dropup,hidden:F,children:[ee,ce]}),n[36]=F,n[37]=ce,n[38]=se):se=n[38];const ne=y.isOpen&&y.suggestions.length>0,ge=y.isOpen&&y.suggestions.length>0&&y.activeIndex>=0?`history-option-${y.activeIndex}`:void 0;let de;n[39]!==y||n[40]!==u?(de=W=>{u(W.target.value),y.onCommandChange()},n[39]=y,n[40]=u,n[41]=de):de=n[41];let me;n[42]!==y?(me=()=>y.dismiss(),n[42]=y,n[43]=me):me=n[43];let Me;n[44]!==s||n[45]!==g||n[46]!==B||n[47]!==k||n[48]!==ne||n[49]!==ge||n[50]!==de||n[51]!==me?(Me=m.jsx("textarea",{ref:v,id:"command",role:"combobox","aria-expanded":ne,"aria-haspopup":"listbox","aria-controls":"history-dropup","aria-activedescendant":ge,"aria-autocomplete":"list",className:Ke.textarea,rows:1,placeholder:k,value:s,disabled:g,onChange:de,onKeyDown:B,onBlur:me,autoComplete:"off",autoCorrect:"off",spellCheck:!1}),n[44]=s,n[45]=g,n[46]=B,n[47]=k,n[48]=ne,n[49]=ge,n[50]=de,n[51]=me,n[52]=Me):Me=n[52];let He;n[53]!==se||n[54]!==Me?(He=m.jsxs("div",{className:Ke.inputWrapper,children:[se,Me]}),n[53]=se,n[54]=Me,n[55]=He):He=n[55];let Se;n[56]!==h?(Se=()=>{var W;h(),(W=v.current)==null||W.focus()},n[56]=h,n[57]=Se):Se=n[57];let Oe;n[58]!==b||n[59]!==Se?(Oe=m.jsx("button",{className:Ke.sendButton,onClick:Se,disabled:b,"aria-label":"Send command",children:"Send"}),n[58]=b,n[59]=Se,n[60]=Oe):Oe=n[60];let oe;n[61]!==He||n[62]!==Oe?(oe=m.jsxs("div",{className:Ke.inputRow,children:[He,Oe]}),n[61]=He,n[62]=Oe,n[63]=oe):oe=n[63];let pe;n[64]!==Y?(pe=m.jsx("p",{className:Ke.hint,children:Y}),n[64]=Y,n[65]=pe):pe=n[65];let be;return n[66]!==$||n[67]!==oe||n[68]!==pe?(be=m.jsxs("div",{className:Ke.commandInput,children:[$,oe,pe]}),n[66]=$,n[67]=oe,n[68]=pe,n[69]=be):be=n[69],be}function i_(r){return r.preventDefault()}function s_(r){return r.preventDefault()}function r_(r){return!r}const c_="_root_1ac49_1",u_={root:c_};function d_(r){const n=Te.c(22),{messages:s,classificationMap:u,onCopy:d,onClear:h,consoleRef:b,onGraphLinkMessage:g,onCopyMessage:f,onSendToJsonPath:v,onUploadMockData:w,successfulUploadPaths:_,command:E,onCommandChange:M,onCommandKeyDown:j,onSend:x,sendDisabled:y,inputDisabled:N,commandHistory:O}=r;let k;n[0]!==u||n[1]!==b||n[2]!==s||n[3]!==h||n[4]!==d||n[5]!==f||n[6]!==g||n[7]!==v||n[8]!==w||n[9]!==_?(k=m.jsx(M2,{messages:s,classificationMap:u,onCopy:d,onClear:h,consoleRef:b,onGraphLinkMessage:g,onCopyMessage:f,onSendToJsonPath:v,onUploadMockData:w,successfulUploadPaths:_}),n[0]=u,n[1]=b,n[2]=s,n[3]=h,n[4]=d,n[5]=f,n[6]=g,n[7]=v,n[8]=w,n[9]=_,n[10]=k):k=n[10];let Y;n[11]!==E||n[12]!==O||n[13]!==N||n[14]!==M||n[15]!==j||n[16]!==x||n[17]!==y?(Y=m.jsx(o_,{command:E,onChange:M,onKeyDown:j,onSend:x,disabled:N,sendDisabled:y,history:O}),n[11]=E,n[12]=O,n[13]=N,n[14]=M,n[15]=j,n[16]=x,n[17]=y,n[18]=Y):Y=n[18];let C;return n[19]!==k||n[20]!==Y?(C=m.jsxs("div",{className:u_.root,children:[k,Y]}),n[19]=k,n[20]=Y,n[21]=C):C=n[21],C}const p_="_dialog_g80bk_4",h_="_modalInner_g80bk_26",f_="_modalHeader_g80bk_34",m_="_modalTitleGroup_g80bk_44",g_="_modalTitle_g80bk_44",y_="_modalPath_g80bk_57",v_="_closeButton_g80bk_64",b_="_modalBody_g80bk_95",__="_dropZone_g80bk_105",x_="_dropZoneActive_g80bk_127",S_="_dropZoneIcon_g80bk_133",w_="_dropZoneText_g80bk_139",T_="_dropZoneOr_g80bk_152",E_="_browseButton_g80bk_159",A_="_fileInputHidden_g80bk_188",N_="_fileError_g80bk_193",C_="_textareaLabel_g80bk_198",j_="_textarea_g80bk_198",M_="_validationError_g80bk_226",k_="_keyboardHint_g80bk_231",D_="_errorBanner_g80bk_236",O_="_modalFooter_g80bk_247",R_="_footerActions_g80bk_257",z_="_formatButton_g80bk_263",B_="_cancelButton_g80bk_264",H_="_uploadButton_g80bk_265",G_="_spinner_g80bk_332",Ze={dialog:p_,modalInner:h_,modalHeader:f_,modalTitleGroup:m_,modalTitle:g_,modalPath:y_,closeButton:v_,modalBody:b_,dropZone:__,dropZoneActive:x_,dropZoneIcon:S_,dropZoneText:w_,dropZoneOr:T_,browseButton:E_,fileInputHidden:A_,fileError:N_,textareaLabel:C_,textarea:j_,validationError:M_,keyboardHint:k_,errorBanner:D_,modalFooter:O_,footerActions:R_,formatButton:z_,cancelButton:B_,uploadButton:H_,spinner:G_};function U_(r){const n=Te.c(9),{uploadPath:s,json:u,onSuccess:d,onError:h}=r,[b,g]=T.useState(!1),f=T.useRef(null);let v;n[0]===Symbol.for("react.memo_cache_sentinel")?(v=()=>{var j;(j=f.current)==null||j.abort(),f.current=null,g(!1)},n[0]=v):v=n[0];const w=v;let _;n[1]!==u||n[2]!==h||n[3]!==d||n[4]!==s?(_=async()=>{var x;(x=f.current)==null||x.abort();const j=new AbortController;f.current=j,g(!0);try{const y=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:u,signal:j.signal}),N=await y.text();if(!y.ok){g(!1),h(`HTTP ${y.status} — ${N}`);return}g(!1),d(N)}catch(y){const N=y;if(N.name==="AbortError"){g(!1);return}g(!1),h(N.message??"Network error")}},n[1]=u,n[2]=h,n[3]=d,n[4]=s,n[5]=_):_=n[5];const E=_;let M;return n[6]!==b||n[7]!==E?(M={isUploading:b,upload:E,cancel:w},n[6]=b,n[7]=E,n[8]=M):M=n[8],M}var Ph;const L_=(((Ph=navigator.userAgentData)==null?void 0:Ph.platform)??navigator.platform).toLowerCase().includes("mac");function Y_(r){return new Promise((n,s)=>{const u=new FileReader;u.onload=()=>n(u.result),u.onerror=()=>s(new Error(`Could not read file "${r.name}"`)),u.readAsText(r,"utf-8")})}function q_(r){const n=r.name.toLowerCase().endsWith(".json"),s=r.type==="application/json"||r.type==="text/plain";return!n&&!s?`"${r.name}" does not appear to be a JSON file. Only .json files are accepted.`:null}function I_({uploadPath:r,onSuccess:n,onClose:s,onError:u}){const[d,h]=T.useState(""),[b,g]=T.useState(null),[f,v]=T.useState(null),[w,_]=T.useState(!1),E=T.useRef(null),M=T.useRef(null),j=T.useRef(null),y=fo(d).isJSON,N=y&&d.trim()!=="",{isUploading:O,upload:k,cancel:Y}=U_({uploadPath:r,json:d,onSuccess:n,onError:U=>{g(U),u(U)}});T.useEffect(()=>{var $;const U=E.current;if(U)return U.open||U.showModal(),($=M.current)==null||$.focus(),()=>{U.open&&U.close()}},[]);const C=T.useCallback(()=>{Y(),s()},[Y,s]),B=T.useCallback(U=>{U.target===E.current&&C()},[C]),R=T.useCallback(U=>{U.preventDefault(),C()},[C]),I=T.useCallback(()=>{g(null),k()},[k]),J=T.useCallback(U=>{U.key==="Enter"&&(U.ctrlKey||U.metaKey)&&(U.preventDefault(),N&&!O&&I())},[N,O,I]),Z=T.useCallback(()=>{y&&h(pc(d))},[y,d]),K=T.useCallback(async U=>{var F;v(null),g(null);const $=q_(U);if($){v($);return}try{const ee=await Y_(U);if(!fo(ee).isJSON){v(`"${U.name}" contains invalid JSON.`);return}h(pc(ee)),(F=M.current)==null||F.focus()}catch(ee){v(ee.message)}},[]),P=T.useCallback(U=>{U.preventDefault(),U.stopPropagation(),w||_(!0)},[w]),le=T.useCallback(U=>{U.preventDefault(),U.stopPropagation(),(U.currentTarget===U.target||!U.currentTarget.contains(U.relatedTarget))&&_(!1)},[]),te=T.useCallback(U=>{U.preventDefault(),U.stopPropagation(),_(!1);const $=U.dataTransfer.files[0];$&&K($)},[K]),re=T.useCallback(U=>{var F;const $=(F=U.target.files)==null?void 0:F[0];$&&(K($),U.target.value="")},[K]),z=!y&&d.trim()!=="";return m.jsx("dialog",{ref:E,className:Ze.dialog,"aria-modal":"true","aria-labelledby":"mock-upload-modal-title",onClick:B,onCancel:R,children:m.jsxs("div",{className:Ze.modalInner,onClick:U=>U.stopPropagation(),children:[m.jsxs("div",{className:Ze.modalHeader,children:[m.jsxs("div",{className:Ze.modalTitleGroup,children:[m.jsx("span",{id:"mock-upload-modal-title",className:Ze.modalTitle,children:"⬆️ Upload Mock Data"}),m.jsx("span",{className:Ze.modalPath,children:r})]}),m.jsx("button",{className:Ze.closeButton,onClick:C,"aria-label":"Close upload modal",title:"Close",disabled:O,children:"✕"})]}),m.jsxs("div",{className:Ze.modalBody,children:[m.jsxs("div",{className:`${Ze.dropZone} ${w?Ze.dropZoneActive:""}`,onDragOver:P,onDragLeave:le,onDrop:te,"aria-label":"Drop a JSON file here",children:[m.jsx("span",{className:Ze.dropZoneIcon,children:"📂"}),m.jsxs("span",{className:Ze.dropZoneText,children:["Drop a ",m.jsx("code",{children:".json"})," file here"]}),m.jsx("span",{className:Ze.dropZoneOr,children:"— or —"}),m.jsx("input",{ref:j,type:"file",accept:".json,application/json",className:Ze.fileInputHidden,"aria-hidden":"true",tabIndex:-1,onChange:re}),m.jsx("button",{type:"button",className:Ze.browseButton,onClick:()=>{var U;return(U=j.current)==null?void 0:U.click()},disabled:O,"aria-label":"Browse for a JSON file",children:"Browse file…"})]}),f&&m.jsxs("span",{className:Ze.fileError,role:"alert",children:["⚠️ ",f]}),m.jsx("label",{htmlFor:"mock-upload-textarea",className:Ze.textareaLabel,children:"JSON Payload"}),m.jsx("textarea",{id:"mock-upload-textarea",ref:M,className:Ze.textarea,value:d,onChange:U=>{h(U.target.value),v(null)},onKeyDown:J,placeholder:"Paste JSON here, or drop / browse a .json file above",rows:10,spellCheck:!1,"aria-describedby":z?"mock-upload-validation":void 0}),z&&m.jsx("span",{id:"mock-upload-validation",className:Ze.validationError,role:"status",children:"⚠️ Invalid JSON — check syntax"}),m.jsx("span",{className:Ze.keyboardHint,children:L_?"⌘+Enter to upload":"Ctrl+Enter to upload"}),b&&m.jsxs("div",{className:Ze.errorBanner,role:"alert",children:["❌ Upload failed: ",b]})]}),m.jsxs("div",{className:Ze.modalFooter,children:[m.jsx("button",{className:Ze.formatButton,onClick:Z,disabled:!y||O,title:"Format JSON","aria-label":"Format JSON",children:"Format"}),m.jsxs("div",{className:Ze.footerActions,children:[m.jsx("button",{className:Ze.cancelButton,onClick:C,disabled:O,children:"Cancel"}),m.jsx("button",{className:Ze.uploadButton,onClick:I,disabled:!N||O,"aria-busy":O,children:O?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:Ze.spinner,"aria-hidden":"true"})," Uploading…"]}):"Upload ▶"})]})]})]})})}const vc=(r,n)=>n.some(s=>r instanceof s);let Ih,Xh;function X_(){return Ih||(Ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J_(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bc=new WeakMap,cc=new WeakMap,Bi=new WeakMap;function Z_(r){const n=new Promise((s,u)=>{const d=()=>{r.removeEventListener("success",h),r.removeEventListener("error",b)},h=()=>{s(sa(r.result)),d()},b=()=>{u(r.error),d()};r.addEventListener("success",h),r.addEventListener("error",b)});return Bi.set(n,r),n}function Q_(r){if(bc.has(r))return;const n=new Promise((s,u)=>{const d=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",b),r.removeEventListener("abort",b)},h=()=>{s(),d()},b=()=>{u(r.error||new DOMException("AbortError","AbortError")),d()};r.addEventListener("complete",h),r.addEventListener("error",b),r.addEventListener("abort",b)});bc.set(r,n)}let _c={get(r,n,s){if(r instanceof IDBTransaction){if(n==="done")return bc.get(r);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return sa(r[n])},set(r,n,s){return r[n]=s,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function pf(r){_c=r(_c)}function V_(r){return J_().includes(r)?function(...n){return r.apply(xc(this),n),sa(this.request)}:function(...n){return sa(r.apply(xc(this),n))}}function K_(r){return typeof r=="function"?V_(r):(r instanceof IDBTransaction&&Q_(r),vc(r,X_())?new Proxy(r,_c):r)}function sa(r){if(r instanceof IDBRequest)return Z_(r);if(cc.has(r))return cc.get(r);const n=K_(r);return n!==r&&(cc.set(r,n),Bi.set(n,r)),n}const xc=r=>Bi.get(r);function $_(r,n,{blocked:s,upgrade:u,blocking:d,terminated:h}={}){const b=indexedDB.open(r,n),g=sa(b);return u&&b.addEventListener("upgradeneeded",f=>{u(sa(b.result),f.oldVersion,f.newVersion,sa(b.transaction),f)}),s&&b.addEventListener("blocked",f=>s(f.oldVersion,f.newVersion,f)),g.then(f=>{h&&f.addEventListener("close",()=>h()),d&&f.addEventListener("versionchange",v=>d(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}function W_(r,{blocked:n}={}){const s=indexedDB.deleteDatabase(r);return n&&s.addEventListener("blocked",u=>n(u.oldVersion,u)),sa(s).then(()=>{})}const P_=["get","getKey","getAll","getAllKeys","count"],F_=["put","add","delete","clear"],uc=new Map;function Jh(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(uc.get(n))return uc.get(n);const s=n.replace(/FromIndex$/,""),u=n!==s,d=F_.includes(s);if(!(s in(u?IDBIndex:IDBObjectStore).prototype)||!(d||P_.includes(s)))return;const h=async function(b,...g){const f=this.transaction(b,d?"readwrite":"readonly");let v=f.store;return u&&(v=v.index(g.shift())),(await Promise.all([v[s](...g),d&&f.done]))[0]};return uc.set(n,h),h}pf(r=>({...r,get:(n,s,u)=>Jh(n,s)||r.get(n,s,u),has:(n,s)=>!!Jh(n,s)||r.has(n,s)}));const ex=["continue","continuePrimaryKey","advance"],Zh={},Sc=new WeakMap,hf=new WeakMap,tx={get(r,n){if(!ex.includes(n))return r[n];let s=Zh[n];return s||(s=Zh[n]=function(...u){Sc.set(this,hf.get(this)[n](...u))}),s}};async function*nx(...r){let n=this;if(n instanceof IDBCursor||(n=await n.openCursor(...r)),!n)return;n=n;const s=new Proxy(n,tx);for(hf.set(s,n),Bi.set(s,xc(n));n;)yield s,n=await(Sc.get(s)||n.continue()),Sc.delete(s)}function Qh(r,n){return n===Symbol.asyncIterator&&vc(r,[IDBIndex,IDBObjectStore,IDBCursor])||n==="iterate"&&vc(r,[IDBIndex,IDBObjectStore])}pf(r=>({...r,get(n,s,u){return Qh(n,s)?nx:r.get(n,s,u)},has(n,s){return Qh(n,s)||r.has(n,s)}}));const ff="minigraph-clipboard",ax=1,zn="items";let Oi=null;function Vh(){return $_(ff,ax,{upgrade(r){r.objectStoreNames.contains(zn)&&r.deleteObjectStore(zn);const n=r.createObjectStore(zn,{keyPath:"id"});n.createIndex("by-alias","node.alias",{unique:!0}),n.createIndex("by-clippedAt","clippedAt")}})}function yl(){return Oi||(Oi=Vh().catch(async r=>(console.warn("[clipboard/db] openDB failed, deleting and recreating:",r),Oi=null,await W_(ff),Vh()))),Oi}async function lx(){return(await(await yl()).getAllFromIndex(zn,"by-clippedAt")).reverse()}async function Kh(r){return(await yl()).getFromIndex(zn,"by-alias",r)}async function ox(r){await(await yl()).add(zn,r)}async function ix(r,n){const u=(await yl()).transaction(zn,"readwrite");await u.store.delete(r),await u.store.add(n),await u.done}async function sx(r){await(await yl()).delete(zn,r)}async function rx(){await(await yl()).clear(zn)}const cx="minigraph-clipboard-sync";function ux(){return new BroadcastChannel(cx)}function dx(r,n){switch(n.type){case"HYDRATE":return{items:n.items,isLoading:!1};case"ITEM_ADDED":return{...r,items:[n.item,...r.items]};case"ITEM_REPLACED":{const s=r.items.filter(u=>u.id!==n.previousId);return{...r,items:[n.item,...s]}}case"ITEM_REMOVED":return{...r,items:r.items.filter(s=>s.id!==n.id)};case"ITEMS_CLEARED":return{...r,items:[]};default:return r}}const mf=T.createContext(null);function px({children:r}){const[n,s]=T.useReducer(dx,{items:[],isLoading:!0}),u=T.useRef(null);T.useEffect(()=>{lx().then(v=>s({type:"HYDRATE",items:v}))},[]),T.useEffect(()=>{let v;try{v=ux()}catch{return}return u.current=v,v.onmessage=w=>{const _=w.data;switch(_.type){case"item-added":s({type:"ITEM_ADDED",item:_.item});break;case"item-replaced":s({type:"ITEM_REPLACED",item:_.item,previousId:_.previousId});break;case"item-removed":s({type:"ITEM_REMOVED",id:_.id});break;case"items-cleared":s({type:"ITEMS_CLEARED"});break}},()=>{v.close(),u.current=null}},[]);const d=T.useCallback(v=>{var w;(w=u.current)==null||w.postMessage(v)},[]),h=T.useCallback(async(v,w,_)=>{try{const E={id:crypto.randomUUID(),clippedAt:new Date().toISOString(),sourceWsPath:_.sourceWsPath,sourceLabel:_.sourceLabel,node:v,connections:w},M=await Kh(v.alias);if(M)return{status:"duplicate",existingItem:M,pendingItem:E};try{await ox(E)}catch(j){if(j instanceof DOMException&&j.name==="ConstraintError"){const x=await Kh(v.alias);if(x)return{status:"duplicate",existingItem:x,pendingItem:E}}throw j}return s({type:"ITEM_ADDED",item:E}),d({type:"item-added",item:E}),{status:"added"}}catch(E){return{status:"error",message:E instanceof Error?E.message:String(E)}}},[d]),b=T.useCallback(async(v,w)=>{await ix(w,v),s({type:"ITEM_REPLACED",item:v,previousId:w}),d({type:"item-replaced",item:v,previousId:w})},[d]),g=T.useCallback(async v=>{await sx(v),s({type:"ITEM_REMOVED",id:v}),d({type:"item-removed",id:v})},[d]),f=T.useCallback(async()=>{await rx(),s({type:"ITEMS_CLEARED"}),d({type:"items-cleared"})},[d]);return m.jsx(mf.Provider,{value:{items:n.items,isLoading:n.isLoading,clipNode:h,confirmReplace:b,removeItem:g,clearAll:f},children:r})}function gf(){const r=T.useContext(mf);if(!r)throw new Error("useClipboardContext must be used inside <ClipboardProvider>");return r}function yf(r){const n=Date.now(),s=new Date(r).getTime(),u=n-s;if(u<0)return"just now";const d=Math.floor(u/1e3);if(d<60)return"just now";const h=Math.floor(d/60);if(h<60)return`${h} min ago`;const b=Math.floor(h/60);if(b<24)return`${b} hour${b>1?"s":""} ago`;const g=Math.floor(b/24);return g===1?"yesterday":g<30?`${g} days ago`:new Date(r).toLocaleDateString()}const hx="_card_3lfqf_2",fx="_alias_3lfqf_10",mx="_meta_3lfqf_18",gx="_propsLine_3lfqf_24",yx="_timestamp_3lfqf_32",vx="_actions_3lfqf_39",bx="_pasteBtn_3lfqf_45",_x="_inspectBtn_3lfqf_46",xx="_removeBtn_3lfqf_47",en={card:hx,alias:fx,meta:mx,propsLine:gx,timestamp:yx,actions:vx,pasteBtn:bx,inspectBtn:_x,removeBtn:xx};function Sx(r){const n=Te.c(55),{item:s,connected:u,onPaste:d,onRemove:h,onInspect:b}=r,{node:g,connections:f,clippedAt:v,sourceLabel:w}=s,_=g.types[0]??"—",E=g.properties.skill??"—";let M;n[0]!==g.properties?(M=Object.entries(g.properties).filter(Tx).map(wx),n[0]=g.properties,n[1]=M):M=n[1];const j=M,x=j.length>0?j.join(", "):"—";let y;if(n[2]!==f||n[3]!==g.alias){let ne;n[5]!==g.alias?(ne=ge=>ge.source===g.alias,n[5]=g.alias,n[6]=ne):ne=n[6],y=f.filter(ne),n[2]=f,n[3]=g.alias,n[4]=y}else y=n[4];const N=y.length;let O;if(n[7]!==f||n[8]!==g.alias){let ne;n[10]!==g.alias?(ne=ge=>ge.target===g.alias,n[10]=g.alias,n[11]=ne):ne=n[11],O=f.filter(ne),n[7]=f,n[8]=g.alias,n[9]=O}else O=n[9];const k=O.length,Y=`${f.length} (${N} out, ${k} in)`;let C;n[12]!==g.alias?(C=m.jsx("div",{className:en.alias,children:g.alias}),n[12]=g.alias,n[13]=C):C=n[13];let B;n[14]!==_?(B=m.jsxs("div",{className:en.meta,children:["Type: ",_]}),n[14]=_,n[15]=B):B=n[15];let R;n[16]!==E?(R=m.jsxs("div",{className:en.meta,children:["Skill: ",E]}),n[16]=E,n[17]=R):R=n[17];let I;n[18]!==x?(I=m.jsxs("span",{className:en.propsLine,children:["Props: ",x]}),n[18]=x,n[19]=I):I=n[19];let J;n[20]!==x||n[21]!==I?(J=m.jsx("div",{className:en.meta,title:x,children:I}),n[20]=x,n[21]=I,n[22]=J):J=n[22];let Z;n[23]!==Y?(Z=m.jsxs("div",{className:en.meta,children:["Connections: ",Y]}),n[23]=Y,n[24]=Z):Z=n[24];let K;n[25]!==v?(K=yf(v),n[25]=v,n[26]=K):K=n[26];let P;n[27]!==w||n[28]!==K?(P=m.jsxs("div",{className:en.timestamp,children:["Clipped ",K," from ",w]}),n[27]=w,n[28]=K,n[29]=P):P=n[29];let le;n[30]!==s||n[31]!==d?(le=()=>d(s),n[30]=s,n[31]=d,n[32]=le):le=n[32];const te=!u,re=`Paste node ${g.alias}`;let z;n[33]!==le||n[34]!==te||n[35]!==re?(z=m.jsx("button",{className:en.pasteBtn,onClick:le,disabled:te,"aria-label":re,children:"Paste"}),n[33]=le,n[34]=te,n[35]=re,n[36]=z):z=n[36];const U=`Inspect node ${g.alias}`;let $;n[37]!==b||n[38]!==U?($=m.jsx("button",{className:en.inspectBtn,onClick:b,"aria-label":U,children:"Describe"}),n[37]=b,n[38]=U,n[39]=$):$=n[39];const F=`Remove node ${g.alias} from clipboard`;let ee;n[40]!==h||n[41]!==F?(ee=m.jsx("button",{className:en.removeBtn,onClick:h,"aria-label":F,children:"Remove"}),n[40]=h,n[41]=F,n[42]=ee):ee=n[42];let ce;n[43]!==z||n[44]!==$||n[45]!==ee?(ce=m.jsxs("div",{className:en.actions,children:[z,$,ee]}),n[43]=z,n[44]=$,n[45]=ee,n[46]=ce):ce=n[46];let se;return n[47]!==P||n[48]!==ce||n[49]!==C||n[50]!==B||n[51]!==R||n[52]!==J||n[53]!==Z?(se=m.jsxs("div",{className:en.card,children:[C,B,R,J,Z,P,ce]}),n[47]=P,n[48]=ce,n[49]=C,n[50]=B,n[51]=R,n[52]=J,n[53]=Z,n[54]=se):se=n[54],se}function wx(r){const[n,s]=r,u=typeof s=="string"?s:JSON.stringify(s);return`${n}=${u&&u.length>30?u.slice(0,30)+"…":u}`}function Tx(r){const[n]=r;return n!=="skill"}const Ex="_sidebar_nf394_2",Ax="_header_nf394_12",Nx="_headerTitle_nf394_22",Cx="_clearBtn_nf394_29",jx="_itemList_nf394_45",Mx="_loading_nf394_55",kx="_emptyState_nf394_65",Dx="_emptyIcon_nf394_78",Ox="_emptyTitle_nf394_83",Rx="_emptyHint_nf394_87",zx="_inspectPanel_nf394_93",Bx="_inspectHeader_nf394_101",Hx="_inspectClose_nf394_115",Gx="_inspectBody_nf394_129",Ux="_dialog_nf394_135",Lx="_dialogTitle_nf394_150",Yx="_dialogBody_nf394_157",qx="_dialogActions_nf394_164",Ix="_cancelBtn_nf394_171",Xx="_replaceBtn_nf394_185",lt={sidebar:Ex,header:Ax,headerTitle:Nx,clearBtn:Cx,itemList:jx,loading:Mx,emptyState:kx,emptyIcon:Dx,emptyTitle:Ox,emptyHint:Rx,inspectPanel:zx,inspectHeader:Bx,inspectClose:Hx,inspectBody:Gx,dialog:Ux,dialogTitle:Lx,dialogBody:Yx,dialogActions:qx,cancelBtn:Ix,replaceBtn:Xx};function Jx(){const r=Te.c(1);let n;return r[0]===Symbol.for("react.memo_cache_sentinel")?(n=m.jsxs("div",{className:lt.emptyState,children:[m.jsx("span",{className:lt.emptyIcon,children:"📋"}),m.jsx("span",{className:lt.emptyTitle,children:"No items clipped yet."}),m.jsx("span",{className:lt.emptyHint,children:"Right-click a node in the Graph view to get started."})]}),r[0]=n):n=r[0],n}function Zx(r){const n=Te.c(18),{connected:s,onPaste:u}=r,d=gf(),[h,b]=T.useState(null);let g;n[0]===Symbol.for("react.memo_cache_sentinel")?(g=m.jsx("span",{className:lt.headerTitle,children:"Clipboard"}),n[0]=g):g=n[0];let f;n[1]!==d?(f=d.items.length>0&&m.jsx("button",{className:lt.clearBtn,onClick:()=>d.clearAll(),"aria-label":"Clear all clipboard items",children:"Clear"}),n[1]=d,n[2]=f):f=n[2];let v;n[3]!==f?(v=m.jsxs("div",{className:lt.header,children:[g,f]}),n[3]=f,n[4]=v):v=n[4];let w;n[5]!==d||n[6]!==s||n[7]!==(h==null?void 0:h.id)||n[8]!==u?(w=d.isLoading?m.jsx("div",{className:lt.loading,children:"Loading…"}):d.items.length===0?m.jsx(Jx,{}):d.items.map(j=>m.jsx(Sx,{item:j,connected:s,onPaste:u,onRemove:()=>d.removeItem(j.id),onInspect:()=>b((h==null?void 0:h.id)===j.id?null:j)},j.id)),n[5]=d,n[6]=s,n[7]=h==null?void 0:h.id,n[8]=u,n[9]=w):w=n[9];let _;n[10]!==w?(_=m.jsx("div",{className:lt.itemList,children:w}),n[10]=w,n[11]=_):_=n[11];let E;n[12]!==h?(E=h&&m.jsxs("div",{className:lt.inspectPanel,children:[m.jsxs("div",{className:lt.inspectHeader,children:[m.jsxs("span",{children:["Describe node ",h.node.alias]}),m.jsx("button",{className:lt.inspectClose,onClick:()=>b(null),"aria-label":"Close inspect panel",children:"✕"})]}),m.jsx("div",{className:lt.inspectBody,children:m.jsx(Tc,{data:{node:h.node,connections:h.connections},style:ho})})]}),n[12]=h,n[13]=E):E=n[13];let M;return n[14]!==v||n[15]!==_||n[16]!==E?(M=m.jsxs("div",{className:lt.sidebar,children:[v,_,E]}),n[14]=v,n[15]=_,n[16]=E,n[17]=M):M=n[17],M}const $h=120,Wh=18,Qx=180,Vx=650;function Kx(r){const{wheelTargetRef:n,scrollRef:s,contentWrapperRef:u,currentIndex:d,totalPages:h,onNavigatePrev:b,onNavigateNext:g}=r,f=T.useRef(0),v=T.useRef(null),w=T.useRef(!1),_=T.useRef(null),E=T.useRef(b),M=T.useRef(g),j=T.useRef(d),x=T.useRef(h);T.useEffect(()=>{E.current=b}),T.useEffect(()=>{M.current=g}),T.useEffect(()=>{j.current=d}),T.useEffect(()=>{x.current=h}),T.useEffect(()=>{_.current!==null&&(clearTimeout(_.current),_.current=null),u.current&&(u.current.style.transition="none",u.current.style.transform="translateY(0)"),f.current=0,v.current=null},[d]),T.useEffect(()=>{const y=n.current;if(!y)return;function N(){f.current=0,v.current=null,u.current&&(u.current.style.transition="transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)",u.current.style.transform="translateY(0)")}function O(k){if(k.deltaY===0)return;const Y=s.current;if(!Y)return;const C=Y.scrollTop<=0,B=Y.scrollTop+Y.clientHeight>=Y.scrollHeight-1,R=k.deltaY<0,I=k.deltaY>0,J=C&&R,Z=B&&I;if(!J&&!Z){N();return}if(w.current)return;const K=j.current,P=x.current;if(J&&K===0||Z&&K===P-1)return;const le=J?"prev":"next";if(v.current!==null&&v.current!==le&&N(),v.current=le,f.current+=Math.abs(k.deltaY),u.current){const te=le==="prev"?-1:1,re=f.current*(Wh/$h),z=Math.min(re,Wh)*te;u.current.style.transition="none",u.current.style.transform=`translateY(${z}px)`}if(_.current!==null&&clearTimeout(_.current),_.current=setTimeout(N,Qx),f.current>=$h){_.current!==null&&clearTimeout(_.current);const te=v.current;N(),w.current=!0,te==="prev"?E.current():M.current(),setTimeout(()=>{w.current=!1},Vx)}}return y.addEventListener("wheel",O,{passive:!0}),()=>{_.current!==null&&clearTimeout(_.current),y.removeEventListener("wheel",O)}},[])}const $x="_helpRoot_18tja_2",Wx="_categoryNav_18tja_11",Px="_categoryTabScroller_18tja_21",Fx="_categoryTab_18tja_21",e3="_categoryTabActive_18tja_71",t3="_maximizeButton_18tja_78",n3="_closeButton_18tja_100",a3="_helpBody_18tja_122",l3="_emptyFallback_18tja_130",o3="_helpContent_18tja_147",i3="_topicLink_18tja_226",s3="_helpBodyContent_18tja_271",r3="_chipStrip_18tja_276",c3="_chipStripLabel_18tja_294",u3="_topicChip_18tja_310",d3="_topicChipActive_18tja_338",St={helpRoot:$x,categoryNav:Wx,categoryTabScroller:Px,categoryTab:Fx,categoryTabActive:e3,maximizeButton:t3,closeButton:n3,helpBody:a3,emptyFallback:l3,helpContent:o3,topicLink:i3,helpBodyContent:s3,chipStrip:r3,chipStripLabel:c3,topicChip:u3,topicChipActive:d3};function wc(r){return typeof r=="string"?r:typeof r=="number"?String(r):Array.isArray(r)?r.map(wc).join(""):tf.isValidElement(r)?wc(r.props.children):""}function p3(r){if(!r.trim().toLowerCase().startsWith("help "))return null;const u=r.trim().slice(5).replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase();return u.length>0?u:null}function h3(r){var ge;const n=Te.c(53),{activeTopic:s,onNavigate:u,onClose:d,onToggleMaximize:h,isMaximized:b}=r,g=T.useRef(null),f=T.useRef(null),v=T.useRef(null),w=T.useRef(null);let _;n[0]===Symbol.for("react.memo_cache_sentinel")?(_=()=>{g.current&&(g.current.scrollTop=0)},n[0]=_):_=n[0];let E;n[1]!==s?(E=[s],n[1]=s,n[2]=E):E=n[2],T.useEffect(_,E);let M;n[3]===Symbol.for("react.memo_cache_sentinel")?(M=()=>{const de=w.current;if(!de)return;const me=de.querySelector('[aria-current="step"]');me&&me.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},n[3]=M):M=n[3];let j;n[4]!==s?(j=[s],n[4]=s,n[5]=j):j=n[5],T.useEffect(M,j);let x;n[6]!==s?(x=cf(s),n[6]=s,n[7]=x):x=n[7];const y=x;let N;n[8]!==y?(N=fc(y),n[8]=y,n[9]=N):N=n[9];const O=N,k=O.length;let Y;n[10]!==y?(Y=((ge=hc.find(de=>de.id===y))==null?void 0:ge.chipStripLabel)??null,n[10]=y,n[11]=Y):Y=n[11];const C=Y,B=fl.indexOf(s),R=B<0?0:B,I=fl.length;let J,Z;n[12]!==u||n[13]!==R?(J=()=>u(fl[R-1]??""),Z=()=>u(fl[R+1]??fl[fl.length-1]),n[12]=u,n[13]=R,n[14]=J,n[15]=Z):(J=n[14],Z=n[15]);let K;n[16]!==R||n[17]!==J||n[18]!==Z?(K={wheelTargetRef:f,scrollRef:g,contentWrapperRef:v,currentIndex:R,totalPages:I,onNavigatePrev:J,onNavigateNext:Z},n[16]=R,n[17]=J,n[18]=Z,n[19]=K):K=n[19],Kx(K);let P;n[20]!==s?(P=zi(s),n[20]=s,n[21]=P):P=n[21];const le=P;let te;n[22]!==u?(te=de=>{const{children:me,...Me}=de,He=wc(me).trim(),Se=p3(He);return Se!==null&&zi(Se)!==null?m.jsx("li",{...Me,children:m.jsx("button",{className:St.topicLink,"aria-label":`Open help topic: ${Se}`,onClick:()=>u(Se),children:me})}):m.jsx("li",{...Me,children:me})},n[22]=u,n[23]=te):te=n[23];const re=te;let z;n[24]!==y||n[25]!==u?(z=hc.map(de=>m.jsx("button",{className:[St.categoryTab,de.id===y?St.categoryTabActive:""].join(" ").trim(),"aria-current":de.id===y?"true":void 0,onClick:()=>{const me=fc(de.id);u(me[0]??"")},children:de.label},de.id)),n[24]=y,n[25]=u,n[26]=z):z=n[26];let U;n[27]!==z?(U=m.jsx("div",{className:St.categoryTabScroller,children:z}),n[27]=z,n[28]=U):U=n[28];let $;n[29]!==b||n[30]!==h?($=h&&m.jsx("button",{className:St.maximizeButton,onClick:h,"aria-label":b?"Restore help panel":"Maximize help panel",children:b?"⊞":"⛶"}),n[29]=b,n[30]=h,n[31]=$):$=n[31];let F;n[32]!==d?(F=d&&m.jsx("button",{className:St.closeButton,onClick:d,"aria-label":"Close help panel",children:"×"}),n[32]=d,n[33]=F):F=n[33];let ee;n[34]!==U||n[35]!==$||n[36]!==F?(ee=m.jsxs("nav",{className:St.categoryNav,"aria-label":"Help categories",children:[U,$,F]}),n[34]=U,n[35]=$,n[36]=F,n[37]=ee):ee=n[37];let ce;n[38]!==y||n[39]!==s||n[40]!==O||n[41]!==k||n[42]!==C||n[43]!==u?(ce=k>1&&m.jsxs("div",{className:St.chipStrip,ref:w,children:[C!==null&&m.jsx("span",{className:St.chipStripLabel,children:C}),O.map(de=>{const me=de===s,Me=C1(de,y);return m.jsx("button",{className:[St.topicChip,me?St.topicChipActive:""].join(" ").trim(),"aria-current":me?"step":void 0,onClick:()=>u(de),children:Me},de)})]}),n[38]=y,n[39]=s,n[40]=O,n[41]=k,n[42]=C,n[43]=u,n[44]=ce):ce=n[44];let se;n[45]!==s||n[46]!==le||n[47]!==re?(se=m.jsx("div",{className:St.helpBody,ref:g,children:m.jsx("div",{className:St.helpBodyContent,ref:v,children:le===null?m.jsxs("div",{className:St.emptyFallback,children:[m.jsxs("code",{children:["help ",s||""]}),"  not found in the local bundle."]}):m.jsx("div",{className:St.helpContent,children:m.jsx(Kg,{remarkPlugins:[$g],components:s===""?{li:re}:void 0,children:le})})})}),n[45]=s,n[46]=le,n[47]=re,n[48]=se):se=n[48];let ne;return n[49]!==ee||n[50]!==ce||n[51]!==se?(ne=m.jsxs("div",{className:St.helpRoot,role:"region","aria-label":"Help browser",ref:f,children:[ee,ce,se]}),n[49]=ee,n[50]=ce,n[51]=se,n[52]=ne):ne=n[52],ne}function f3(r){const n=Te.c(22),{existingItem:s,pendingItem:u,onReplace:d,onCancel:h}=r,b=T.useRef(null);let g,f;n[0]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{const O=b.current;O&&!O.open&&O.showModal()},f=[],n[0]=g,n[1]=f):(g=n[0],f=n[1]),T.useEffect(g,f);let v;n[2]===Symbol.for("react.memo_cache_sentinel")?(v=m.jsx("h2",{id:"duplicate-dialog-title",className:lt.dialogTitle,children:"Duplicate Node"}),n[2]=v):v=n[2];let w;n[3]!==u.node.alias?(w=m.jsxs("strong",{children:['"',u.node.alias,'"']}),n[3]=u.node.alias,n[4]=w):w=n[4];let _;n[5]!==s.clippedAt?(_=yf(s.clippedAt),n[5]=s.clippedAt,n[6]=_):_=n[6];let E;n[7]!==w||n[8]!==_?(E=m.jsxs("p",{className:lt.dialogBody,children:["A clipboard item with alias ",w," already exists (clipped ",_,")."]}),n[7]=w,n[8]=_,n[9]=E):E=n[9];let M;n[10]===Symbol.for("react.memo_cache_sentinel")?(M=m.jsx("p",{className:lt.dialogBody,children:"Replace it with the new snapshot?"}),n[10]=M):M=n[10];let j;n[11]!==h?(j=m.jsx("button",{className:lt.cancelBtn,onClick:h,children:"Cancel"}),n[11]=h,n[12]=j):j=n[12];let x;n[13]!==d?(x=m.jsx("button",{className:lt.replaceBtn,onClick:d,children:"Replace"}),n[13]=d,n[14]=x):x=n[14];let y;n[15]!==j||n[16]!==x?(y=m.jsxs("div",{className:lt.dialogActions,children:[j,x]}),n[15]=j,n[16]=x,n[17]=y):y=n[17];let N;return n[18]!==h||n[19]!==y||n[20]!==E?(N=m.jsxs("dialog",{ref:b,className:lt.dialog,onClose:h,"aria-labelledby":"duplicate-dialog-title",children:[v,E,M,y]}),n[18]=h,n[19]=y,n[20]=E,n[21]=N):N=n[21],N}function m3(r,n){if(!n)return null;const s=r.trim().toLowerCase();if(s!=="help"&&!s.startsWith("help "))return null;const u=uf(r);return zi(u)!==null?u:null}class g3{constructor(){this.listeners=new Map}on(n,s){const u=n;return this.listeners.has(u)||this.listeners.set(u,new Set),this.listeners.get(u).add(s),()=>{var d;(d=this.listeners.get(u))==null||d.delete(s)}}emit(n){const s=this.listeners.get(n.kind);s&&s.forEach(u=>{try{u(n)}catch(d){console.error(`[ProtocolBus] listener for '${n.kind}' threw:`,d)}})}clear(){this.listeners.clear()}}const y3=new Set(["info","error","ping","welcome"]);function v3(r,n){const s=[],u={msgId:r,raw:n};let d=!1,h=!1,b=!1,g=!1,f=!1;const v=fo(n);if(v.isJSON){const y=v.data;if(typeof y.type=="string"){const N=y.type;return s.push({...u,kind:"lifecycle",type:N,knownType:y3.has(N),message:typeof y.message=="string"?y.message:n,time:y.time??null}),s.length>0?s:[{...u,kind:"unclassified"}]}return s.push({...u,kind:"json.response",data:v.data}),s.length>0?s:[{...u,kind:"unclassified"}]}const w=My(n);w&&(f=!0,s.push({...u,kind:"payload.large",apiPath:w.apiPath,byteSize:w.byteSize,filename:w.filename}));const _=ky(n);_&&(b=!0,s.push({...u,kind:"upload.invitation",uploadPath:_}));const E=sf(n);if(E&&(g=!0,s.push({...u,kind:"upload.contentPath",uploadPath:E})),of(n)){h=!0;const y=Nc(n);y&&s.push({...u,kind:"graph.link",apiPath:y})}if(h){const y=Cy(n);y&&s.push({...u,kind:"graph.exported",graphName:y.graphName,apiPath:y.apiPath})}const M=Ry(n);M&&s.push({...u,kind:"graph.mutation",mutationType:M}),n.startsWith("> ")&&(d=!0,s.push({...u,kind:"command.echo",commandText:n.slice(2)})),Dy(n)&&s.push({...u,kind:"command.helpOrDescribe",commandText:n.slice(2)});const j=Oy(n);j&&s.push({...u,kind:"command.importGraph",graphName:j});const x=jy(n);return x&&s.push({...u,kind:"graph.export.failed",reason:x.reason}),!d&&!h&&!b&&!g&&!f&&Ac(n)&&s.push({...u,kind:"docs.response",isMarkdown:!0}),s.length===0&&s.push({...u,kind:"unclassified"}),s}function b3(r){const n=Te.c(12),{messages:s,bus:u}=r,d=T.useRef(-1);let h;n[0]!==s?(h=()=>{s.length>0&&(d.current=s[s.length-1].id)},n[0]=s,n[1]=h):h=n[1];let b;n[2]===Symbol.for("react.memo_cache_sentinel")?(b=[],n[2]=b):b=n[2],T.useEffect(h,b);let g;if(n[3]!==s){g=new Map;for(const E of s)g.set(E.id,v3(E.id,E.raw));n[3]=s,n[4]=g}else g=n[4];const f=g;let v,w;n[5]!==u||n[6]!==f||n[7]!==s?(v=()=>{if(s.length===0)return;const E=s.filter(M=>M.id>d.current);if(E.length!==0){d.current=s[s.length-1].id;for(const M of E){const j=f.get(M.id);if(j)for(const x of j)u.emit(x)}}},w=[s,u,f],n[5]=u,n[6]=f,n[7]=s,n[8]=v,n[9]=w):(v=n[8],w=n[9]),T.useEffect(v,w);let _;return n[10]!==f?(_={classificationMap:f},n[10]=f,n[11]=_):_=n[11],_}function _3({config:r}){const{title:n,wsPath:s,storageKeyPayload:u,storageKeyHistory:d,storageKeyTab:h,storageKeySavedGraphs:b,supportsUpload:g,supportsClipboard:f,supportsHelp:v,tabs:w}=r,_=Rg(),[E,M]=ia(u,""),j=Ec(),[x,y]=T.useState(()=>j.peekPendingPayload(s)),{takePendingPayload:N}=j;T.useEffect(()=>{const we=N(s);we!==null&&y(we)},[N,s]);const O=x??E,k=T.useCallback(we=>{y(null),M(we)},[M]),Y=T.useMemo(()=>O?by(O):{valid:!0,error:null,type:null},[O]),{toasts:C,addToast:B,removeToast:R}=_y(),J=T.useRef(new g3).current,Z=T.useCallback(we=>m3(we,v===!0)!==null,[v]),K=Hy({wsPath:s,storageKeyHistory:d,payload:O,addToast:B,bus:J,handleLocalCommand:Z}),{classificationMap:P}=b3({messages:K.messages,bus:J}),[le,te]=Y1(s),{graphData:re,setGraphData:z,rightTab:U,setRightTab:$,isRefreshing:F}=Ly(le,B,w[0],w,h),{modalUploadPath:ee,successfulUploadPaths:ce,handleOpenUploadModal:se,handleCloseUploadModal:ne,handleUploadSuccess:ge,handleUploadError:de,resetSuccessfulPaths:me}=O1({bus:J,addToast:B});Yy({bus:J,pinnedGraphPath:le,setPinnedGraphPath:te,connected:K.connected,sendRawText:K.sendRawText,addToast:B});const Me=T.useRef(!1);T.useEffect(()=>{Me.current&&!K.connected&&(te(null),z(null)),Me.current=K.connected},[K.connected,te,z]);const[He,Se]=ia(r.storageKeyHelpTopic??"help-topic-fallback",""),[Oe,oe]=ia("help-panel-open",!1),[pe,be]=T.useState(()=>!!v&&!Oe),[W,ye]=T.useState(!1),Ee=T.useRef(null),fe=T.useCallback(()=>{pe&&(ye(!0),Ee.current=setTimeout(()=>be(!1),400))},[pe]);T.useEffect(()=>{if(!pe||W)return;const we=setTimeout(fe,3e3);return()=>clearTimeout(we)},[pe,W,fe]),T.useEffect(()=>{Oe&&pe&&fe()},[Oe,pe,fe]),T.useEffect(()=>()=>{Ee.current&&clearTimeout(Ee.current)},[]),T.useEffect(()=>{if(!v)return;const we=pt=>{pt.ctrlKey&&pt.key==="`"&&(pt.preventDefault(),oe($e=>!$e))};return window.addEventListener("keydown",we),()=>window.removeEventListener("keydown",we)},[v,oe]),j1({bus:J,setHelpTopic:Se,onTabSwitch:v?()=>oe(!0):()=>{}}),R1({bus:J,connected:K.connected,appendMessage:K.appendMessage,addToast:B});const De=gf(),[Ge,dt]=ia("clipboard-sidebar-open",!1),[et,ct]=T.useState(null),ra=T.useCallback(we=>{const $e=(re==null?void 0:re.nodes.some(mn=>mn.alias===we.node.alias))??!1?"update":"create",sn=q1($e,we.node);K.setCommand(sn),B(`${$e==="create"?"Create":"Update"} command for "${we.node.alias}" pasted to input`,"info")},[re,K.setCommand,B]),ve=T.useCallback(async(we,pt)=>{try{const $e=await De.clipNode(we,pt,{sourceWsPath:s,sourceLabel:r.label});switch($e.status){case"added":B(`Node "${we.alias}" clipped to clipboard`,"success");break;case"duplicate":ct({pendingItem:$e.pendingItem,existingItem:$e.existingItem});break;case"error":B(`Clip failed: ${$e.message}`,"error");break}}catch($e){B(`Clip failed: ${$e instanceof Error?$e.message:String($e)}`,"error")}},[De,s,r.label,B]),fn=B1(b??""),{defaultName:ja,setLastSavedName:mo,resetName:ca}=G1(b?`${b}-untitled-counter`:"untitled-counter",J),Hi=T.useMemo(()=>{var $e;const we=re==null?void 0:re.nodes.find(sn=>sn.types.includes("Root"));return(typeof(($e=we==null?void 0:we.properties)==null?void 0:$e.name)=="string"?we.properties.name:void 0)??ja},[re,ja]),{handleSaveGraph:go,handleLoadGraph:Gi}=L1({bus:J,connected:K.connected,sendRawText:K.sendRawText,saveGraph:fn.saveGraph,setLastSavedName:mo,addToast:B}),Ui=T.useCallback(we=>{const pt=P.get(we.id),$e=pt==null?void 0:pt.find(sn=>sn.kind==="graph.link");$e&&te($e.apiPath)},[P]),{handleSendToJsonPath:ua}=M1({ctx:j,navigate:_,addToast:B,wsPath:s}),wt=Uy("(max-width: 768px)"),{defaultLayout:on,onLayoutChanged:Tt}=kg({id:r.path+"-panel-split",storage:localStorage}),Li=T.useCallback(()=>k(pc(O)),[O]),Yi=T.useCallback(()=>{K.clearMessages(),te(null),z(null),me(),ca()},[K.clearMessages,z,me,ca]);return m.jsxs("div",{className:Ot.wrapper,children:[m.jsx(W1,{toasts:C,onRemove:R}),ee&&m.jsx(I_,{uploadPath:ee,onSuccess:ge,onClose:ne,onError:de}),m.jsxs("header",{className:Ot.header,children:[m.jsx("h1",{className:Ot.title,children:n}),m.jsxs("div",{className:Ot.headerActions,children:[b&&m.jsx(U0,{disabled:!re,defaultName:ja,onSave:go,nameExists:fn.hasGraph,connected:K.connected}),b&&fn.savedGraphs.length>0&&m.jsx($0,{savedGraphs:fn.savedGraphs,onLoad:Gi,onDelete:fn.deleteGraph,connected:K.connected}),f&&m.jsxs("button",{className:Ot.clipboardToggle,onClick:()=>dt(we=>!we),"aria-label":Ge?"Close clipboard sidebar":"Open clipboard sidebar","aria-pressed":Ge,children:["Clipboard",De.items.length>0?` (${De.items.length})`:""]}),m.jsx(C0,{addToast:B}),v&&m.jsxs("div",{className:Ot.helpButtonWrapper,children:[m.jsx("button",{className:`${Ot.helpToggle}${pe&&!W?` ${Ot.helpTogglePulsing}`:""}`,onClick:()=>oe(we=>!we),"aria-label":Oe?"Close help panel":"Open help panel","aria-pressed":Oe,children:"?"}),pe&&m.jsxs("div",{className:`${Ot.helpHint}${W?` ${Ot.helpHintFading}`:""}`,onClick:fe,role:"status",children:[m.jsx("kbd",{className:Ot.helpHintKbd,children:"Ctrl + `"})," to toggle help"]})]})]})]}),et&&m.jsx(f3,{existingItem:et.existingItem,pendingItem:et.pendingItem,onReplace:async()=>{try{await De.confirmReplace(et.pendingItem,et.existingItem.id),ct(null),B(`Clipboard item "${et.pendingItem.node.alias}" replaced`,"success")}catch(we){B(`Replace failed: ${we instanceof Error?we.message:String(we)}`,"error")}},onCancel:()=>{ct(null),B("Clip cancelled","info")}}),m.jsxs(Fh,{className:Ot.panelGroup,orientation:wt?"vertical":"horizontal",defaultLayout:on,onLayoutChanged:Tt,children:[m.jsx(po,{defaultSize:Oe||Ge?"50%":"60%",minSize:"25%",children:m.jsx(d_,{messages:K.messages,classificationMap:P,onCopy:K.copyMessages,onClear:Yi,consoleRef:K.consoleRef,command:K.command,onCommandChange:K.setCommand,onCommandKeyDown:K.handleKeyDown,onSend:K.sendCommand,sendDisabled:!K.connected||!K.command.trim(),inputDisabled:!K.connected,commandHistory:K.history,onGraphLinkMessage:Ui,onCopyMessage:()=>B("Copied to clipboard","success"),onSendToJsonPath:ua,onUploadMockData:se,successfulUploadPaths:ce})}),m.jsx(dc,{className:Ot.resizeHandle,"aria-label":"Resize panels"}),m.jsx(po,{defaultSize:Oe?"50%":Ge?"30%":"40%",minSize:"20%",children:m.jsx(Qb,{tabs:w,payload:O,onChange:k,validation:Y,onFormat:Li,onUpload:g?K.uploadPayload:void 0,graphData:re,graphName:Hi,activeTab:U,onTabChange:$,onGraphRenderError:we=>B(we,"error"),onGraphDataCopySuccess:()=>B("Graph JSON copied to clipboard!","success"),onGraphDataCopyError:()=>B("Copy failed","error"),isGraphRefreshing:F,onClipNode:f?ve:void 0,helpPanel:v&&Oe?(we,pt)=>m.jsx(h3,{activeTopic:He,onNavigate:Se,onClose:()=>oe(!1),onToggleMaximize:we,isMaximized:pt}):void 0})}),f&&Ge&&m.jsxs(m.Fragment,{children:[m.jsx(dc,{className:Ot.resizeHandle,"aria-label":"Resize clipboard"}),m.jsx(po,{defaultSize:"20%",minSize:"10%",maxSize:"40%",children:m.jsx(Zx,{connected:K.connected,onPaste:ra})})]})]})]})}function x3(){const r=Te.c(2),n=Rn[0].path;let s;r[0]===Symbol.for("react.memo_cache_sentinel")?(s=Rn.map(S3),r[0]=s):s=r[0];let u;return r[1]===Symbol.for("react.memo_cache_sentinel")?(u=m.jsx(Ey,{children:m.jsx(px,{children:m.jsx(zg,{children:m.jsxs(Bg,{children:[s,m.jsx(nf,{path:"*",element:m.jsx(Hg,{to:n,replace:!0})})]})})})}),r[1]=u):u=r[1],u}function S3(r){return m.jsx(nf,{path:r.path,element:m.jsx(_3,{config:r},r.path)},r.path)}ty.createRoot(document.getElementById("root")).render(m.jsx(T.StrictMode,{children:m.jsx(x3,{})}));
//# sourceMappingURL=index-DJ-mQ5wV.js.map
