(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))i(N);new MutationObserver(N=>{for(const S of N)if(S.type==="childList")for(const h of S.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function y(N){const S={};return N.integrity&&(S.integrity=N.integrity),N.referrerPolicy&&(S.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?S.credentials="include":N.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function i(N){if(N.ep)return;N.ep=!0;const S=y(N);fetch(N.href,S)}})();var Zo={exports:{}},Lu={};var ek;function cN(){if(ek)return Lu;ek=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function y(i,N,S){var h=null;if(S!==void 0&&(h=""+S),N.key!==void 0&&(h=""+N.key),"key"in N){S={};for(var x in N)x!=="key"&&(S[x]=N[x])}else S=N;return N=S.ref,{$$typeof:n,type:i,key:h,ref:N!==void 0?N:null,props:S}}return Lu.Fragment=r,Lu.jsx=y,Lu.jsxs=y,Lu}var tk;function nN(){return tk||(tk=1,Zo.exports=cN()),Zo.exports}var s=nN(),Wo={exports:{}},ee={};var ak;function sN(){if(ak)return ee;ak=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),D=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=D&&j[D]||j["@@iterator"],typeof j=="function"?j:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,me={};function te(j,U,W){this.props=j,this.context=U,this.refs=me,this.updater=W||F}te.prototype.isReactComponent={},te.prototype.setState=function(j,U){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,U,"setState")},te.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function L(){}L.prototype=te.prototype;function le(j,U,W){this.props=j,this.context=U,this.refs=me,this.updater=W||F}var je=le.prototype=new L;je.constructor=le,se(je,te.prototype),je.isPureReactComponent=!0;var X=Array.isArray;function oe(){}var g={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function Ge(j,U,W){var z=W.ref;return{$$typeof:n,type:j,key:U,ref:z!==void 0?z:null,props:W}}function Ot(j,U){return Ge(j.type,U,j.props)}function Me(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function Ke(j){var U={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(W){return U[W]})}var Dt=/\/+/g;function dt(j,U){return typeof j=="object"&&j!==null&&j.key!=null?Ke(""+j.key):U.toString(36)}function Ye(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(oe,oe):(j.status="pending",j.then(function(U){j.status==="pending"&&(j.status="fulfilled",j.value=U)},function(U){j.status==="pending"&&(j.status="rejected",j.reason=U)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function f(j,U,W,z,$){var ce=typeof j;(ce==="undefined"||ce==="boolean")&&(j=null);var v=!1;if(j===null)v=!0;else switch(ce){case"bigint":case"string":case"number":v=!0;break;case"object":switch(j.$$typeof){case n:case r:v=!0;break;case T:return v=j._init,f(v(j._payload),U,W,z,$)}}if(v)return $=$(j),v=z===""?"."+dt(j,0):z,X($)?(W="",v!=null&&(W=v.replace(Dt,"$&/")+"/"),f($,U,W,"",function(At){return At})):$!=null&&(Me($)&&($=Ot($,W+($.key==null||j&&j.key===$.key?"":(""+$.key).replace(Dt,"$&/")+"/")+v)),U.push($)),1;v=0;var Be=z===""?".":z+":";if(X(j))for(var fe=0;fe<j.length;fe++)z=j[fe],ce=Be+dt(z,fe),v+=f(z,U,W,ce,$);else if(fe=_(j),typeof fe=="function")for(j=fe.call(j),fe=0;!(z=j.next()).done;)z=z.value,ce=Be+dt(z,fe++),v+=f(z,U,W,ce,$);else if(ce==="object"){if(typeof j.then=="function")return f(Ye(j),U,W,z,$);throw U=String(j),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return v}function A(j,U,W){if(j==null)return j;var z=[],$=0;return f(j,z,"","",function(ce){return U.call(W,ce,$++)}),z}function Z(j){if(j._status===-1){var U=j._result;U=U(),U.then(function(W){(j._status===0||j._status===-1)&&(j._status=1,j._result=W)},function(W){(j._status===0||j._status===-1)&&(j._status=2,j._result=W)}),j._status===-1&&(j._status=0,j._result=U)}if(j._status===1)return j._result.default;throw j._result}var be=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},Se={map:A,forEach:function(j,U,W){A(j,function(){U.apply(this,arguments)},W)},count:function(j){var U=0;return A(j,function(){U++}),U},toArray:function(j){return A(j,function(U){return U})||[]},only:function(j){if(!Me(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ee.Activity=K,ee.Children=Se,ee.Component=te,ee.Fragment=y,ee.Profiler=N,ee.PureComponent=le,ee.StrictMode=i,ee.Suspense=p,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,ee.__COMPILER_RUNTIME={__proto__:null,c:function(j){return g.H.useMemoCache(j)}},ee.cache=function(j){return function(){return j.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(j,U,W){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var z=se({},j.props),$=j.key;if(U!=null)for(ce in U.key!==void 0&&($=""+U.key),U)!B.call(U,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&U.ref===void 0||(z[ce]=U[ce]);var ce=arguments.length-2;if(ce===1)z.children=W;else if(1<ce){for(var v=Array(ce),Be=0;Be<ce;Be++)v[Be]=arguments[Be+2];z.children=v}return Ge(j.type,$,z)},ee.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:S,_context:j},j},ee.createElement=function(j,U,W){var z,$={},ce=null;if(U!=null)for(z in U.key!==void 0&&(ce=""+U.key),U)B.call(U,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&($[z]=U[z]);var v=arguments.length-2;if(v===1)$.children=W;else if(1<v){for(var Be=Array(v),fe=0;fe<v;fe++)Be[fe]=arguments[fe+2];$.children=Be}if(j&&j.defaultProps)for(z in v=j.defaultProps,v)$[z]===void 0&&($[z]=v[z]);return Ge(j,ce,$)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(j){return{$$typeof:x,render:j}},ee.isValidElement=Me,ee.lazy=function(j){return{$$typeof:T,_payload:{_status:-1,_result:j},_init:Z}},ee.memo=function(j,U){return{$$typeof:b,type:j,compare:U===void 0?null:U}},ee.startTransition=function(j){var U=g.T,W={};g.T=W;try{var z=j(),$=g.S;$!==null&&$(W,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(oe,be)}catch(ce){be(ce)}finally{U!==null&&W.types!==null&&(U.types=W.types),g.T=U}},ee.unstable_useCacheRefresh=function(){return g.H.useCacheRefresh()},ee.use=function(j){return g.H.use(j)},ee.useActionState=function(j,U,W){return g.H.useActionState(j,U,W)},ee.useCallback=function(j,U){return g.H.useCallback(j,U)},ee.useContext=function(j){return g.H.useContext(j)},ee.useDebugValue=function(){},ee.useDeferredValue=function(j,U){return g.H.useDeferredValue(j,U)},ee.useEffect=function(j,U){return g.H.useEffect(j,U)},ee.useEffectEvent=function(j){return g.H.useEffectEvent(j)},ee.useId=function(){return g.H.useId()},ee.useImperativeHandle=function(j,U,W){return g.H.useImperativeHandle(j,U,W)},ee.useInsertionEffect=function(j,U){return g.H.useInsertionEffect(j,U)},ee.useLayoutEffect=function(j,U){return g.H.useLayoutEffect(j,U)},ee.useMemo=function(j,U){return g.H.useMemo(j,U)},ee.useOptimistic=function(j,U){return g.H.useOptimistic(j,U)},ee.useReducer=function(j,U,W){return g.H.useReducer(j,U,W)},ee.useRef=function(j){return g.H.useRef(j)},ee.useState=function(j){return g.H.useState(j)},ee.useSyncExternalStore=function(j,U,W){return g.H.useSyncExternalStore(j,U,W)},ee.useTransition=function(){return g.H.useTransition()},ee.version="19.2.6",ee}var lk;function Bo(){return lk||(lk=1,Wo.exports=sN()),Wo.exports}var Q=Bo(),Do={exports:{}},zu={},Ao={exports:{}},go={};var uk;function oN(){return uk||(uk=1,(function(n){function r(f,A){var Z=f.length;f.push(A);e:for(;0<Z;){var be=Z-1>>>1,Se=f[be];if(0<N(Se,A))f[be]=A,f[Z]=Se,Z=be;else break e}}function y(f){return f.length===0?null:f[0]}function i(f){if(f.length===0)return null;var A=f[0],Z=f.pop();if(Z!==A){f[0]=Z;e:for(var be=0,Se=f.length,j=Se>>>1;be<j;){var U=2*(be+1)-1,W=f[U],z=U+1,$=f[z];if(0>N(W,Z))z<Se&&0>N($,W)?(f[be]=$,f[z]=Z,be=z):(f[be]=W,f[U]=Z,be=U);else if(z<Se&&0>N($,Z))f[be]=$,f[z]=Z,be=z;else break e}}return A}function N(f,A){var Z=f.sortIndex-A.sortIndex;return Z!==0?Z:f.id-A.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;n.unstable_now=function(){return S.now()}}else{var h=Date,x=h.now();n.unstable_now=function(){return h.now()-x}}var p=[],b=[],T=1,K=null,D=3,_=!1,F=!1,se=!1,me=!1,te=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function je(f){for(var A=y(b);A!==null;){if(A.callback===null)i(b);else if(A.startTime<=f)i(b),A.sortIndex=A.expirationTime,r(p,A);else break;A=y(b)}}function X(f){if(se=!1,je(f),!F)if(y(p)!==null)F=!0,oe||(oe=!0,Ke());else{var A=y(b);A!==null&&Ye(X,A.startTime-f)}}var oe=!1,g=-1,B=5,Ge=-1;function Ot(){return me?!0:!(n.unstable_now()-Ge<B)}function Me(){if(me=!1,oe){var f=n.unstable_now();Ge=f;var A=!0;try{e:{F=!1,se&&(se=!1,L(g),g=-1),_=!0;var Z=D;try{t:{for(je(f),K=y(p);K!==null&&!(K.expirationTime>f&&Ot());){var be=K.callback;if(typeof be=="function"){K.callback=null,D=K.priorityLevel;var Se=be(K.expirationTime<=f);if(f=n.unstable_now(),typeof Se=="function"){K.callback=Se,je(f),A=!0;break t}K===y(p)&&i(p),je(f)}else i(p);K=y(p)}if(K!==null)A=!0;else{var j=y(b);j!==null&&Ye(X,j.startTime-f),A=!1}}break e}finally{K=null,D=Z,_=!1}A=void 0}}finally{A?Ke():oe=!1}}}var Ke;if(typeof le=="function")Ke=function(){le(Me)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,dt=Dt.port2;Dt.port1.onmessage=Me,Ke=function(){dt.postMessage(null)}}else Ke=function(){te(Me,0)};function Ye(f,A){g=te(function(){f(n.unstable_now())},A)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(f){f.callback=null},n.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<f?Math.floor(1e3/f):5},n.unstable_getCurrentPriorityLevel=function(){return D},n.unstable_next=function(f){switch(D){case 1:case 2:case 3:var A=3;break;default:A=D}var Z=D;D=A;try{return f()}finally{D=Z}},n.unstable_requestPaint=function(){me=!0},n.unstable_runWithPriority=function(f,A){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var Z=D;D=f;try{return A()}finally{D=Z}},n.unstable_scheduleCallback=function(f,A,Z){var be=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?be+Z:be):Z=be,f){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,f={id:T++,callback:A,priorityLevel:f,startTime:Z,expirationTime:Se,sortIndex:-1},Z>be?(f.sortIndex=Z,r(b,f),y(p)===null&&f===y(b)&&(se?(L(g),g=-1):se=!0,Ye(X,Z-be))):(f.sortIndex=Se,r(p,f),F||_||(F=!0,oe||(oe=!0,Ke()))),f},n.unstable_shouldYield=Ot,n.unstable_wrapCallback=function(f){var A=D;return function(){var Z=D;D=A;try{return f.apply(this,arguments)}finally{D=Z}}}})(go)),go}var ck;function iN(){return ck||(ck=1,Ao.exports=oN()),Ao.exports}var Lo={exports:{}},et={};var nk;function dN(){if(nk)return et;nk=1;var n=Bo();function r(p){var b="https://react.dev/errors/"+p;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)b+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var i={d:{f:y,r:function(){throw Error(r(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},N=Symbol.for("react.portal");function S(p,b,T){var K=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:K==null?null:""+K,children:p,containerInfo:b,implementation:T}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(p,b){if(p==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,et.createPortal=function(p,b){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(r(299));return S(p,b,null,T)},et.flushSync=function(p){var b=h.T,T=i.p;try{if(h.T=null,i.p=2,p)return p()}finally{h.T=b,i.p=T,i.d.f()}},et.preconnect=function(p,b){typeof p=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,i.d.C(p,b))},et.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},et.preinit=function(p,b){if(typeof p=="string"&&b&&typeof b.as=="string"){var T=b.as,K=x(T,b.crossOrigin),D=typeof b.integrity=="string"?b.integrity:void 0,_=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;T==="style"?i.d.S(p,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:K,integrity:D,fetchPriority:_}):T==="script"&&i.d.X(p,{crossOrigin:K,integrity:D,fetchPriority:_,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},et.preinitModule=function(p,b){if(typeof p=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var T=x(b.as,b.crossOrigin);i.d.M(p,{crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&i.d.M(p)},et.preload=function(p,b){if(typeof p=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var T=b.as,K=x(T,b.crossOrigin);i.d.L(p,T,{crossOrigin:K,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},et.preloadModule=function(p,b){if(typeof p=="string")if(b){var T=x(b.as,b.crossOrigin);i.d.m(p,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else i.d.m(p)},et.requestFormReset=function(p){i.d.r(p)},et.unstable_batchedUpdates=function(p,b){return p(b)},et.useFormState=function(p,b,T){return h.H.useFormState(p,b,T)},et.useFormStatus=function(){return h.H.useHostTransitionStatus()},et.version="19.2.6",et}var sk;function rN(){if(sk)return Lo.exports;sk=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Lo.exports=dN(),Lo.exports}var ok;function yN(){if(ok)return zu;ok=1;var n=iN(),r=Bo(),y=rN();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(S(e)!==e)throw Error(i(188))}function b(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(i(188));return t!==e?null:e}for(var a=e,l=t;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),e;if(c===l)return p(u),t;c=c.sibling}throw Error(i(188))}if(a.return!==l.return)a=u,l=c;else{for(var o=!1,d=u.child;d;){if(d===a){o=!0,a=u,l=c;break}if(d===l){o=!0,l=u,a=c;break}d=d.sibling}if(!o){for(d=c.child;d;){if(d===a){o=!0,a=c,l=u;break}if(d===l){o=!0,l=c,a=u;break}d=d.sibling}if(!o)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var K=Object.assign,D=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),le=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),Ge=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var Dt=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case te:return"Profiler";case me:return"StrictMode";case X:return"Suspense";case oe:return"SuspenseList";case Ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case le:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return t=e.displayName||null,t!==null?t:dt(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return dt(e(t))}catch{}}return null}var Ye=Array.isArray,f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},be=[],Se=-1;function j(e){return{current:e}}function U(e){0>Se||(e.current=be[Se],be[Se]=null,Se--)}function W(e,t){Se++,be[Se]=e.current,e.current=t}var z=j(null),$=j(null),ce=j(null),v=j(null);function Be(e,t){switch(W(ce,t),W($,e),W(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ry(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ry(t),e=hy(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(z),W(z,e)}function fe(){U(z),U($),U(ce)}function At(e){e.memoizedState!==null&&W(v,e);var t=z.current,a=hy(t,e.type);t!==a&&(W($,e),W(z,a))}function ia(e){$.current===e&&(U(z),U($)),v.current===e&&(U(v),Wu._currentValue=Z)}var da,$o;function Aa(e){if(da===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);da=t&&t[1]||"",$o=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+da+e+$o}var Nn=!1;function pn(e,t){if(!e||Nn)return"";Nn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(H){var R=H}Reflect.construct(e,[],G)}else{try{G.call()}catch(H){R=H}e.call(G.prototype)}}else{try{throw Error()}catch(H){R=H}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(H){if(H&&R&&typeof H.stack=="string")return[H.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),o=c[0],d=c[1];if(o&&d){var k=o.split(`
`),O=d.split(`
`);for(u=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;u<O.length&&!O[u].includes("DetermineComponentFrameRoot");)u++;if(l===k.length||u===O.length)for(l=k.length-1,u=O.length-1;1<=l&&0<=u&&k[l]!==O[u];)u--;for(;1<=l&&0<=u;l--,u--)if(k[l]!==O[u]){if(l!==1||u!==1)do if(l--,u--,0>u||k[l]!==O[u]){var w=`
`+k[l].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=l&&0<=u);break}}}finally{Nn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Aa(a):""}function Dk(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return pn(e.type,!1);case 11:return pn(e.type.render,!1);case 1:return pn(e.type,!0);case 31:return Aa("Activity");default:return""}}function ei(e){try{var t="",a=null;do t+=Dk(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var bn=Object.prototype.hasOwnProperty,qn=n.unstable_scheduleCallback,Sn=n.unstable_cancelCallback,Ak=n.unstable_shouldYield,gk=n.unstable_requestPaint,rt=n.unstable_now,Lk=n.unstable_getCurrentPriorityLevel,ti=n.unstable_ImmediatePriority,ai=n.unstable_UserBlockingPriority,Iu=n.unstable_NormalPriority,zk=n.unstable_LowPriority,li=n.unstable_IdlePriority,Fk=n.log,Mk=n.unstable_setDisableYieldValue,Cl=null,yt=null;function ra(e){if(typeof Fk=="function"&&Mk(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Cl,e)}catch{}}var kt=Math.clz32?Math.clz32:Yk,Pk=Math.log,Ik=Math.LN2;function Yk(e){return e>>>=0,e===0?32:31-(Pk(e)/Ik|0)|0}var Yu=256,Bu=262144,Cu=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xu(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,c=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~c,l!==0?u=ga(l):(o&=d,o!==0?u=ga(o):a||(a=d&~e,a!==0&&(u=ga(a))))):(d=l&~c,d!==0?u=ga(d):o!==0?u=ga(o):a||(a=l&~e,a!==0&&(u=ga(a)))),u===0?0:t!==0&&t!==u&&(t&c)===0&&(c=u&-u,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:u}function Xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bk(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ui(){var e=Cu;return Cu<<=1,(Cu&62914560)===0&&(Cu=4194304),e}function Vn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function El(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ck(e,t,a,l,u,c){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,k=e.expirationTimes,O=e.hiddenUpdates;for(a=o&~a;0<a;){var w=31-kt(a),G=1<<w;d[w]=0,k[w]=-1;var R=O[w];if(R!==null)for(O[w]=null,w=0;w<R.length;w++){var H=R[w];H!==null&&(H.lane&=-536870913)}a&=~G}l!==0&&ci(e,l,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(o&~t))}function ci(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-kt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ni(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-kt(a),u=1<<l;u&t|e[l]&t&&(e[l]|=t),a&=~u}}function si(e,t){var a=t&-t;return a=(a&42)!==0?1:On(a),(a&(e.suspendedLanes|t))!==0?0:a}function On(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oi(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:Cy(e.type))}function ii(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var ya=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ya,lt="__reactProps$"+ya,ll="__reactContainer$"+ya,hn="__reactEvents$"+ya,Xk="__reactListeners$"+ya,Ek="__reactHandles$"+ya,di="__reactResources$"+ya,Ql="__reactMarker$"+ya;function Hn(e){delete e[Ee],delete e[lt],delete e[hn],delete e[Xk],delete e[Ek]}function ul(e){var t=e[Ee];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[Ee]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Gy(e);e!==null;){if(a=e[Ee])return a;e=Gy(e)}return t}e=a,a=e.parentNode}return null}function cl(e){if(e=e[Ee]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function nl(e){var t=e[di];return t||(t=e[di]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Ql]=!0}var ri=new Set,yi={};function La(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(yi[e]=t,e=0;e<t.length;e++)ri.add(t[e])}var Qk=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ki={},mi={};function vk(e){return bn.call(mi,e)?!0:bn.call(ki,e)?!1:Qk.test(e)?mi[e]=!0:(ki[e]=!0,!1)}function Eu(e,t,a){if(vk(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qu(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ji(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _k(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(o){a=""+o,c.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xn(e){if(!e._valueTracker){var t=ji(e)?"checked":"value";e._valueTracker=_k(e,t,""+e[t])}}function Ni(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=ji(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function vu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $k=/[\n"\\]/g;function ht(e){return e.replace($k,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fn(e,t,a,l,u,c,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?wn(e,o,Rt(t)):a!=null?wn(e,o,Rt(a)):l!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Rt(d):e.removeAttribute("name")}function pi(e,t,a,l,u,c,o,d){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){xn(e);return}a=a!=null?""+Rt(a):"",t=t!=null?""+Rt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),xn(e)}function wn(e,t,a){t==="number"&&vu(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ol(e,t,a,l){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Rt(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function bi(e,t,a){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Rt(a):""}function qi(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(i(92));if(Ye(l)){if(1<l.length)throw Error(i(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Rt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),xn(e)}function il(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Si(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||em.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vi(e,t,a){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in t)l=t[u],t.hasOwnProperty(u)&&a[u]!==l&&Si(e,u,l)}else for(var c in t)t.hasOwnProperty(c)&&Si(e,c,t[c])}function Jn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _u(e){return am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var Un=null;function Gn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,rl=null;function Oi(e){var t=cl(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var u=l[lt]||null;if(!u)throw Error(i(90));fn(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ni(l)}break e;case"textarea":bi(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ol(e,!!a.multiple,t,!1)}}}var Kn=!1;function Ri(e,t,a){if(Kn)return e(t,a);Kn=!0;try{var l=e(t);return l}finally{if(Kn=!1,(dl!==null||rl!==null)&&(Lc(),dl&&(t=dl,e=rl,rl=dl=null,Oi(t),e)))for(t=0;t<e.length;t++)Oi(e[t])}}function _l(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(i(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tn=!1;if(Yt)try{var $l={};Object.defineProperty($l,"passive",{get:function(){Tn=!0}}),window.addEventListener("test",$l,$l),window.removeEventListener("test",$l,$l)}catch{Tn=!1}var ka=null,Zn=null,$u=null;function hi(){if($u)return $u;var e,t=Zn,a=t.length,l,u="value"in ka?ka.value:ka.textContent,c=u.length;for(e=0;e<a&&t[e]===u[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===u[c-l];l++);return $u=u.slice(e,1<l?1-l:void 0)}function ec(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tc(){return!0}function Hi(){return!1}function ut(e){function t(a,l,u,c,o){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=c,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(c):c[d]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?tc:Hi,this.isPropagationStopped=Hi,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=ut(za),eu=K({},za,{view:0,detail:0}),lm=ut(eu),Wn,Dn,tu,lc=K({},eu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tu&&(tu&&e.type==="mousemove"?(Wn=e.screenX-tu.screenX,Dn=e.screenY-tu.screenY):Dn=Wn=0,tu=e),Wn)},movementY:function(e){return"movementY"in e?e.movementY:Dn}}),xi=ut(lc),um=K({},lc,{dataTransfer:0}),cm=ut(um),nm=K({},eu,{relatedTarget:0}),An=ut(nm),sm=K({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),om=ut(sm),im=K({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dm=ut(im),rm=K({},za,{data:0}),fi=ut(rm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function gn(){return jm}var Nm=K({},eu,{key:function(e){if(e.key){var t=ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gn,charCode:function(e){return e.type==="keypress"?ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=ut(Nm),bm=K({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wi=ut(bm),qm=K({},eu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gn}),Sm=ut(qm),Vm=K({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=ut(Vm),Rm=K({},lc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=ut(Rm),Hm=K({},za,{newState:0,oldState:0}),xm=ut(Hm),fm=[9,13,27,32],Ln=Yt&&"CompositionEvent"in window,au=null;Yt&&"documentMode"in document&&(au=document.documentMode);var wm=Yt&&"TextEvent"in window&&!au,Ji=Yt&&(!Ln||au&&8<au&&11>=au),Ui=" ",Gi=!1;function Ki(e,t){switch(e){case"keyup":return fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ti(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yl=!1;function Jm(e,t){switch(e){case"compositionend":return Ti(t);case"keypress":return t.which!==32?null:(Gi=!0,Ui);case"textInput":return e=t.data,e===Ui&&Gi?null:e;default:return null}}function Um(e,t){if(yl)return e==="compositionend"||!Ln&&Ki(e,t)?(e=hi(),$u=Zn=ka=null,yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ji&&t.locale!=="ko"?null:t.data;default:return null}}var Gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gm[e.type]:t==="textarea"}function Wi(e,t,a,l){dl?rl?rl.push(l):rl=[l]:dl=l,t=Bc(t,"onChange"),0<t.length&&(a=new ac("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var lu=null,uu=null;function Km(e){py(e,0)}function uc(e){var t=vl(e);if(Ni(t))return e}function Di(e,t){if(e==="change")return t}var Ai=!1;if(Yt){var zn;if(Yt){var Fn="oninput"in document;if(!Fn){var gi=document.createElement("div");gi.setAttribute("oninput","return;"),Fn=typeof gi.oninput=="function"}zn=Fn}else zn=!1;Ai=zn&&(!document.documentMode||9<document.documentMode)}function Li(){lu&&(lu.detachEvent("onpropertychange",zi),uu=lu=null)}function zi(e){if(e.propertyName==="value"&&uc(uu)){var t=[];Wi(t,uu,e,Gn(e)),Ri(Km,t)}}function Tm(e,t,a){e==="focusin"?(Li(),lu=t,uu=a,lu.attachEvent("onpropertychange",zi)):e==="focusout"&&Li()}function Zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uc(uu)}function Wm(e,t){if(e==="click")return uc(t)}function Dm(e,t){if(e==="input"||e==="change")return uc(t)}function Am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Am;function cu(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!bn.call(t,u)||!mt(e[u],t[u]))return!1}return!0}function Fi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mi(e,t){var a=Fi(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fi(a)}}function Pi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ii(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vu(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=vu(e.document)}return t}function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gm=Yt&&"documentMode"in document&&11>=document.documentMode,kl=null,Pn=null,nu=null,In=!1;function Yi(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;In||kl==null||kl!==vu(l)||(l=kl,"selectionStart"in l&&Mn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nu&&cu(nu,l)||(nu=l,l=Bc(Pn,"onSelect"),0<l.length&&(t=new ac("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=kl)))}function Fa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ml={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Yn={},Bi={};Yt&&(Bi=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function Ma(e){if(Yn[e])return Yn[e];if(!ml[e])return e;var t=ml[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bi)return Yn[e]=t[a];return e}var Ci=Ma("animationend"),Xi=Ma("animationiteration"),Ei=Ma("animationstart"),Lm=Ma("transitionrun"),zm=Ma("transitionstart"),Fm=Ma("transitioncancel"),Qi=Ma("transitionend"),vi=new Map,Bn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bn.push("scrollEnd");function Tt(e,t){vi.set(e,t),La(t,[e])}var cc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],jl=0,Cn=0;function nc(){for(var e=jl,t=Cn=jl=0;t<e;){var a=Ht[t];Ht[t++]=null;var l=Ht[t];Ht[t++]=null;var u=Ht[t];Ht[t++]=null;var c=Ht[t];if(Ht[t++]=null,l!==null&&u!==null){var o=l.pending;o===null?u.next=u:(u.next=o.next,o.next=u),l.pending=u}c!==0&&_i(a,u,c)}}function sc(e,t,a,l){Ht[jl++]=e,Ht[jl++]=t,Ht[jl++]=a,Ht[jl++]=l,Cn|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xn(e,t,a,l){return sc(e,t,a,l),oc(e)}function Pa(e,t){return sc(e,null,null,t),oc(e)}function _i(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&t!==null&&(u=31-kt(a),e=c.hiddenUpdates,l=e[u],l===null?e[u]=[t]:l.push(t),t.lane=a|536870912),c):null}function oc(e){if(50<wu)throw wu=0,lo=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nl={};function Mm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,l){return new Mm(e,t,a,l)}function En(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $i(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ic(e,t,a,l,u,c){var o=0;if(l=e,typeof e=="function")En(e)&&(o=1);else if(typeof e=="string")o=Cj(e,a,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ge:return e=jt(31,a,t,u),e.elementType=Ge,e.lanes=c,e;case se:return Ia(a.children,u,c,t);case me:o=8,u|=24;break;case te:return e=jt(12,a,t,u|2),e.elementType=te,e.lanes=c,e;case X:return e=jt(13,a,t,u),e.elementType=X,e.lanes=c,e;case oe:return e=jt(19,a,t,u),e.elementType=oe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:o=10;break e;case L:o=9;break e;case je:o=11;break e;case g:o=14;break e;case B:o=16,l=null;break e}o=29,a=Error(i(130,e===null?"null":typeof e,"")),l=null}return t=jt(o,a,t,u),t.elementType=e,t.type=l,t.lanes=c,t}function Ia(e,t,a,l){return e=jt(7,e,l,t),e.lanes=a,e}function Qn(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function ed(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function vn(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var td=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=td.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ei(t)},td.set(e,t),t)}return{value:e,source:t,stack:ei(t)}}var pl=[],bl=0,dc=null,su=0,ft=[],wt=0,ma=null,gt=1,Lt="";function Ct(e,t){pl[bl++]=su,pl[bl++]=dc,dc=e,su=t}function ad(e,t,a){ft[wt++]=gt,ft[wt++]=Lt,ft[wt++]=ma,ma=e;var l=gt;e=Lt;var u=32-kt(l)-1;l&=~(1<<u),a+=1;var c=32-kt(t)+u;if(30<c){var o=u-u%5;c=(l&(1<<o)-1).toString(32),l>>=o,u-=o,gt=1<<32-kt(t)+u|a<<u|l,Lt=c+e}else gt=1<<c|a<<u|l,Lt=e}function _n(e){e.return!==null&&(Ct(e,1),ad(e,1,0))}function $n(e){for(;e===dc;)dc=pl[--bl],pl[bl]=null,su=pl[--bl],pl[bl]=null;for(;e===ma;)ma=ft[--wt],ft[wt]=null,Lt=ft[--wt],ft[wt]=null,gt=ft[--wt],ft[wt]=null}function ld(e,t){ft[wt++]=gt,ft[wt++]=Lt,ft[wt++]=ma,gt=t.id,Lt=t.overflow,ma=e}var Qe=null,we=null,ke=!1,ja=null,Jt=!1,es=Error(i(519));function Na(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ou(xt(t,e)),es}function ud(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ee]=e,t[lt]=l,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<Uu.length;a++)de(Uu[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),pi(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),qi(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Vy(t.textContent,a)?(l.popover!=null&&(de("beforetoggle",t),de("toggle",t)),l.onScroll!=null&&de("scroll",t),l.onScrollEnd!=null&&de("scrollend",t),l.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||Na(e,!0)}function cd(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:Qe=Qe.return}}function ql(e){if(e!==Qe)return!1;if(!ke)return cd(e),ke=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qo(e.type,e.memoizedProps)),a=!a),a&&we&&Na(e),cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));we=Uy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));we=Uy(e)}else t===27?(t=we,Ua(e.type)?(e=ho,ho=null,we=e):we=t):we=Qe?Gt(e.stateNode.nextSibling):null;return!0}function Ya(){we=Qe=null,ke=!1}function ts(){var e=ja;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),ja=null),e}function ou(e){ja===null?ja=[e]:ja.push(e)}var as=j(null),Ba=null,Xt=null;function pa(e,t,a){W(as,t._currentValue),t._currentValue=a}function Et(e){e._currentValue=as.current,U(as)}function ls(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function us(e,t,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var o=u.child;c=c.firstContext;e:for(;c!==null;){var d=c;c=u;for(var k=0;k<t.length;k++)if(d.context===t[k]){c.lanes|=a,d=c.alternate,d!==null&&(d.lanes|=a),ls(c.return,a,e),l||(o=null);break e}c=d.next}}else if(u.tag===18){if(o=u.return,o===null)throw Error(i(341));o.lanes|=a,c=o.alternate,c!==null&&(c.lanes|=a),ls(o,a,e),o=null}else o=u.child;if(o!==null)o.return=u;else for(o=u;o!==null;){if(o===e){o=null;break}if(u=o.sibling,u!==null){u.return=o.return,o=u;break}o=o.return}u=o}}function Sl(e,t,a,l){e=null;for(var u=t,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var o=u.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var d=u.type;mt(u.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(u===v.current){if(o=u.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Wu):e=[Wu])}u=u.return}e!==null&&us(t,e,a,l),t.flags|=262144}function rc(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ba=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ve(e){return nd(Ba,e)}function yc(e,t){return Ba===null&&Ca(e),nd(e,t)}function nd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(e===null)throw Error(i(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return a}var Pm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Im=n.unstable_scheduleCallback,Ym=n.unstable_NormalPriority,ge={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cs(){return{controller:new Pm,data:new Map,refCount:0}}function iu(e){e.refCount--,e.refCount===0&&Im(Ym,function(){e.controller.abort()})}var du=null,ns=0,Vl=0,Ol=null;function Bm(e,t){if(du===null){var a=du=[];ns=0,Vl=io(),Ol={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ns++,t.then(sd,sd),t}function sd(){if(--ns===0&&du!==null){Ol!==null&&(Ol.status="fulfilled");var e=du;du=null,Vl=0,Ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var od=f.S;f.S=function(e,t){Yr=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bm(e,t),od!==null&&od(e,t)};var Xa=j(null);function ss(){var e=Xa.current;return e!==null?e:xe.pooledCache}function kc(e,t){t===null?W(Xa,Xa.current):W(Xa,t.pool)}function id(){var e=ss();return e===null?null:{parent:ge._currentValue,pool:e}}var Rl=Error(i(460)),os=Error(i(474)),mc=Error(i(542)),jc={then:function(){}};function dd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(It,It),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=l}},function(l){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e}throw Qa=t,Rl}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,Rl):a}}var Qa=null;function yd(){if(Qa===null)throw Error(i(459));var e=Qa;return Qa=null,e}function kd(e){if(e===Rl||e===mc)throw Error(i(483))}var hl=null,ru=0;function Nc(e){var t=ru;return ru+=1,hl===null&&(hl=[]),rd(hl,e,t)}function yu(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pc(e,t){throw t.$$typeof===D?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function md(e){function t(q,m){if(e){var V=q.deletions;V===null?(q.deletions=[m],q.flags|=16):V.push(m)}}function a(q,m){if(!e)return null;for(;m!==null;)t(q,m),m=m.sibling;return null}function l(q){for(var m=new Map;q!==null;)q.key!==null?m.set(q.key,q):m.set(q.index,q),q=q.sibling;return m}function u(q,m){return q=Bt(q,m),q.index=0,q.sibling=null,q}function c(q,m,V){return q.index=V,e?(V=q.alternate,V!==null?(V=V.index,V<m?(q.flags|=67108866,m):V):(q.flags|=67108866,m)):(q.flags|=1048576,m)}function o(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function d(q,m,V,J){return m===null||m.tag!==6?(m=Qn(V,q.mode,J),m.return=q,m):(m=u(m,V),m.return=q,m)}function k(q,m,V,J){var C=V.type;return C===se?w(q,m,V.props.children,J,V.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===B&&Ea(C)===m.type)?(m=u(m,V.props),yu(m,V),m.return=q,m):(m=ic(V.type,V.key,V.props,null,q.mode,J),yu(m,V),m.return=q,m)}function O(q,m,V,J){return m===null||m.tag!==4||m.stateNode.containerInfo!==V.containerInfo||m.stateNode.implementation!==V.implementation?(m=vn(V,q.mode,J),m.return=q,m):(m=u(m,V.children||[]),m.return=q,m)}function w(q,m,V,J,C){return m===null||m.tag!==7?(m=Ia(V,q.mode,J,C),m.return=q,m):(m=u(m,V),m.return=q,m)}function G(q,m,V){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Qn(""+m,q.mode,V),m.return=q,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _:return V=ic(m.type,m.key,m.props,null,q.mode,V),yu(V,m),V.return=q,V;case F:return m=vn(m,q.mode,V),m.return=q,m;case B:return m=Ea(m),G(q,m,V)}if(Ye(m)||Ke(m))return m=Ia(m,q.mode,V,null),m.return=q,m;if(typeof m.then=="function")return G(q,Nc(m),V);if(m.$$typeof===le)return G(q,yc(q,m),V);pc(q,m)}return null}function R(q,m,V,J){var C=m!==null?m.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return C!==null?null:d(q,m,""+V,J);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return V.key===C?k(q,m,V,J):null;case F:return V.key===C?O(q,m,V,J):null;case B:return V=Ea(V),R(q,m,V,J)}if(Ye(V)||Ke(V))return C!==null?null:w(q,m,V,J,null);if(typeof V.then=="function")return R(q,m,Nc(V),J);if(V.$$typeof===le)return R(q,m,yc(q,V),J);pc(q,V)}return null}function H(q,m,V,J,C){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return q=q.get(V)||null,d(m,q,""+J,C);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return q=q.get(J.key===null?V:J.key)||null,k(m,q,J,C);case F:return q=q.get(J.key===null?V:J.key)||null,O(m,q,J,C);case B:return J=Ea(J),H(q,m,V,J,C)}if(Ye(J)||Ke(J))return q=q.get(V)||null,w(m,q,J,C,null);if(typeof J.then=="function")return H(q,m,V,Nc(J),C);if(J.$$typeof===le)return H(q,m,V,yc(m,J),C);pc(m,J)}return null}function M(q,m,V,J){for(var C=null,Ne=null,Y=m,ue=m=0,ye=null;Y!==null&&ue<V.length;ue++){Y.index>ue?(ye=Y,Y=null):ye=Y.sibling;var pe=R(q,Y,V[ue],J);if(pe===null){Y===null&&(Y=ye);break}e&&Y&&pe.alternate===null&&t(q,Y),m=c(pe,m,ue),Ne===null?C=pe:Ne.sibling=pe,Ne=pe,Y=ye}if(ue===V.length)return a(q,Y),ke&&Ct(q,ue),C;if(Y===null){for(;ue<V.length;ue++)Y=G(q,V[ue],J),Y!==null&&(m=c(Y,m,ue),Ne===null?C=Y:Ne.sibling=Y,Ne=Y);return ke&&Ct(q,ue),C}for(Y=l(Y);ue<V.length;ue++)ye=H(Y,q,ue,V[ue],J),ye!==null&&(e&&ye.alternate!==null&&Y.delete(ye.key===null?ue:ye.key),m=c(ye,m,ue),Ne===null?C=ye:Ne.sibling=ye,Ne=ye);return e&&Y.forEach(function(Wa){return t(q,Wa)}),ke&&Ct(q,ue),C}function E(q,m,V,J){if(V==null)throw Error(i(151));for(var C=null,Ne=null,Y=m,ue=m=0,ye=null,pe=V.next();Y!==null&&!pe.done;ue++,pe=V.next()){Y.index>ue?(ye=Y,Y=null):ye=Y.sibling;var Wa=R(q,Y,pe.value,J);if(Wa===null){Y===null&&(Y=ye);break}e&&Y&&Wa.alternate===null&&t(q,Y),m=c(Wa,m,ue),Ne===null?C=Wa:Ne.sibling=Wa,Ne=Wa,Y=ye}if(pe.done)return a(q,Y),ke&&Ct(q,ue),C;if(Y===null){for(;!pe.done;ue++,pe=V.next())pe=G(q,pe.value,J),pe!==null&&(m=c(pe,m,ue),Ne===null?C=pe:Ne.sibling=pe,Ne=pe);return ke&&Ct(q,ue),C}for(Y=l(Y);!pe.done;ue++,pe=V.next())pe=H(Y,q,ue,pe.value,J),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?ue:pe.key),m=c(pe,m,ue),Ne===null?C=pe:Ne.sibling=pe,Ne=pe);return e&&Y.forEach(function(uN){return t(q,uN)}),ke&&Ct(q,ue),C}function He(q,m,V,J){if(typeof V=="object"&&V!==null&&V.type===se&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case _:e:{for(var C=V.key;m!==null;){if(m.key===C){if(C=V.type,C===se){if(m.tag===7){a(q,m.sibling),J=u(m,V.props.children),J.return=q,q=J;break e}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===B&&Ea(C)===m.type){a(q,m.sibling),J=u(m,V.props),yu(J,V),J.return=q,q=J;break e}a(q,m);break}else t(q,m);m=m.sibling}V.type===se?(J=Ia(V.props.children,q.mode,J,V.key),J.return=q,q=J):(J=ic(V.type,V.key,V.props,null,q.mode,J),yu(J,V),J.return=q,q=J)}return o(q);case F:e:{for(C=V.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===V.containerInfo&&m.stateNode.implementation===V.implementation){a(q,m.sibling),J=u(m,V.children||[]),J.return=q,q=J;break e}else{a(q,m);break}else t(q,m);m=m.sibling}J=vn(V,q.mode,J),J.return=q,q=J}return o(q);case B:return V=Ea(V),He(q,m,V,J)}if(Ye(V))return M(q,m,V,J);if(Ke(V)){if(C=Ke(V),typeof C!="function")throw Error(i(150));return V=C.call(V),E(q,m,V,J)}if(typeof V.then=="function")return He(q,m,Nc(V),J);if(V.$$typeof===le)return He(q,m,yc(q,V),J);pc(q,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,m!==null&&m.tag===6?(a(q,m.sibling),J=u(m,V),J.return=q,q=J):(a(q,m),J=Qn(V,q.mode,J),J.return=q,q=J),o(q)):a(q,m)}return function(q,m,V,J){try{ru=0;var C=He(q,m,V,J);return hl=null,C}catch(Y){if(Y===Rl||Y===mc)throw Y;var Ne=jt(29,Y,null,q.mode);return Ne.lanes=J,Ne.return=q,Ne}}}var va=md(!0),jd=md(!1),ba=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ds(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,t=oc(e),_i(e,null,a),t}return sc(e,l,t,a),oc(e)}function ku(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ni(e,a)}}function rs(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=o:c=c.next=o,a=a.next}while(a!==null);c===null?u=c=t:c=c.next=t}else u=c=t;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ys=!1;function mu(){if(ys){var e=Ol;if(e!==null)throw e}}function ju(e,t,a,l){ys=!1;var u=e.updateQueue;ba=!1;var c=u.firstBaseUpdate,o=u.lastBaseUpdate,d=u.shared.pending;if(d!==null){u.shared.pending=null;var k=d,O=k.next;k.next=null,o===null?c=O:o.next=O,o=k;var w=e.alternate;w!==null&&(w=w.updateQueue,d=w.lastBaseUpdate,d!==o&&(d===null?w.firstBaseUpdate=O:d.next=O,w.lastBaseUpdate=k))}if(c!==null){var G=u.baseState;o=0,w=O=k=null,d=c;do{var R=d.lane&-536870913,H=R!==d.lane;if(H?(re&R)===R:(l&R)===R){R!==0&&R===Vl&&(ys=!0),w!==null&&(w=w.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var M=e,E=d;R=t;var He=a;switch(E.tag){case 1:if(M=E.payload,typeof M=="function"){G=M.call(He,G,R);break e}G=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=E.payload,R=typeof M=="function"?M.call(He,G,R):M,R==null)break e;G=K({},G,R);break e;case 2:ba=!0}}R=d.callback,R!==null&&(e.flags|=64,H&&(e.flags|=8192),H=u.callbacks,H===null?u.callbacks=[R]:H.push(R))}else H={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},w===null?(O=w=H,k=G):w=w.next=H,o|=R;if(d=d.next,d===null){if(d=u.shared.pending,d===null)break;H=d,d=H.next,H.next=null,u.lastBaseUpdate=H,u.shared.pending=null}}while(!0);w===null&&(k=G),u.baseState=k,u.firstBaseUpdate=O,u.lastBaseUpdate=w,c===null&&(u.shared.lanes=0),Ha|=o,e.lanes=o,e.memoizedState=G}}function Nd(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function pd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nd(a[e],t)}var Hl=j(null),bc=j(0);function bd(e,t){e=ua,W(bc,e),W(Hl,t),ua=e|t.baseLanes}function ks(){W(bc,ua),W(Hl,Hl.current)}function ms(){ua=bc.current,U(Hl),U(bc)}var Nt=j(null),Ut=null;function Va(e){var t=e.alternate;W(We,We.current&1),W(Nt,e),Ut===null&&(t===null||Hl.current!==null||t.memoizedState!==null)&&(Ut=e)}function js(e){W(We,We.current),W(Nt,e),Ut===null&&(Ut=e)}function qd(e){e.tag===22?(W(We,We.current),W(Nt,e),Ut===null&&(Ut=e)):Oa()}function Oa(){W(We,We.current),W(Nt,Nt.current)}function pt(e){U(Nt),Ut===e&&(Ut=null),U(We)}var We=j(0);function qc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Oo(a)||Ro(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,ae=null,Re=null,Le=null,Sc=!1,xl=!1,_a=!1,Vc=0,Nu=0,fl=null,Xm=0;function Te(){throw Error(i(321))}function Ns(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!mt(e[a],t[a]))return!1;return!0}function ps(e,t,a,l,u,c){return Qt=c,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,f.H=e===null||e.memoizedState===null?ar:Ks,_a=!1,c=a(l,u),_a=!1,xl&&(c=Vd(t,a,l,u)),Sd(e),c}function Sd(e){f.H=qu;var t=Re!==null&&Re.next!==null;if(Qt=0,Le=Re=ae=null,Sc=!1,Nu=0,fl=null,t)throw Error(i(300));e===null||ze||(e=e.dependencies,e!==null&&rc(e)&&(ze=!0))}function Vd(e,t,a,l){ae=e;var u=0;do{if(xl&&(fl=null),Nu=0,xl=!1,25<=u)throw Error(i(301));if(u+=1,Le=Re=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}f.H=lr,c=t(a,l)}while(xl);return c}function Em(){var e=f.H,t=e.useState()[0];return t=typeof t.then=="function"?pu(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(ae.flags|=1024),t}function bs(){var e=Vc!==0;return Vc=0,e}function qs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ss(e){if(Sc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sc=!1}Qt=0,Le=Re=ae=null,xl=!1,Nu=Vc=0,fl=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ae.memoizedState=Le=e:Le=Le.next=e,Le}function De(){if(Re===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Le===null?ae.memoizedState:Le.next;if(t!==null)Le=t,Re=e;else{if(e===null)throw ae.alternate===null?Error(i(467)):Error(i(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?ae.memoizedState=Le=e:Le=Le.next=e}return Le}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pu(e){var t=Nu;return Nu+=1,fl===null&&(fl=[]),e=rd(fl,e,t),t=ae,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,f.H=t===null||t.memoizedState===null?ar:Ks),e}function Rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pu(e);if(e.$$typeof===le)return ve(e)}throw Error(i(438,String(e)))}function Vs(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Oc(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ot;return t.index++,a}function vt(e,t){return typeof t=="function"?t(e):t}function hc(e){var t=De();return Os(t,Re,e)}function Os(e,t,a){var l=e.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=a;var u=e.baseQueue,c=l.pending;if(c!==null){if(u!==null){var o=u.next;u.next=c.next,c.next=o}t.baseQueue=u=c,l.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{t=u.next;var d=o=null,k=null,O=t,w=!1;do{var G=O.lane&-536870913;if(G!==O.lane?(re&G)===G:(Qt&G)===G){var R=O.revertLane;if(R===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),G===Vl&&(w=!0);else if((Qt&R)===R){O=O.next,R===Vl&&(w=!0);continue}else G={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},k===null?(d=k=G,o=c):k=k.next=G,ae.lanes|=R,Ha|=R;G=O.action,_a&&a(c,G),c=O.hasEagerState?O.eagerState:a(c,G)}else R={lane:G,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},k===null?(d=k=R,o=c):k=k.next=R,ae.lanes|=G,Ha|=G;O=O.next}while(O!==null&&O!==t);if(k===null?o=c:k.next=d,!mt(c,e.memoizedState)&&(ze=!0,w&&(a=Ol,a!==null)))throw a;e.memoizedState=c,e.baseState=o,e.baseQueue=k,l.lastRenderedState=c}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Rs(e){var t=De(),a=t.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,c=t.memoizedState;if(u!==null){a.pending=null;var o=u=u.next;do c=e(c,o.action),o=o.next;while(o!==u);mt(c,t.memoizedState)||(ze=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,l]}function Od(e,t,a){var l=ae,u=De(),c=ke;if(c){if(a===void 0)throw Error(i(407));a=a()}else a=t();var o=!mt((Re||u).memoizedState,a);if(o&&(u.memoizedState=a,ze=!0),u=u.queue,xs(Hd.bind(null,l,u,e),[e]),u.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},hd.bind(null,l,u,a,t),null),xe===null)throw Error(i(349));c||(Qt&127)!==0||Rd(l,t,a)}return a}function Rd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Oc(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function hd(e,t,a,l){t.value=a,t.getSnapshot=l,xd(t)&&fd(e)}function Hd(e,t,a){return a(function(){xd(t)&&fd(e)})}function xd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!mt(e,a)}catch{return!0}}function fd(e){var t=Pa(e,2);t!==null&&it(t,e,2)}function hs(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),_a){ra(!0);try{a()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vt,lastRenderedState:e},t}function wd(e,t,a,l){return e.baseState=a,Os(e,Re,typeof l=="function"?l:vt)}function Qm(e,t,a,l,u){if(fc(e))throw Error(i(485));if(e=t.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){c.listeners.push(o)}};f.T!==null?a(!0):c.isTransition=!1,l(c),a=t.pending,a===null?(c.next=t.pending=c,Jd(t,c)):(c.next=a.next,t.pending=a.next=c)}}function Jd(e,t){var a=t.action,l=t.payload,u=e.state;if(t.isTransition){var c=f.T,o={};f.T=o;try{var d=a(u,l),k=f.S;k!==null&&k(o,d),Ud(e,t,d)}catch(O){Hs(e,t,O)}finally{c!==null&&o.types!==null&&(c.types=o.types),f.T=c}}else try{c=a(u,l),Ud(e,t,c)}catch(O){Hs(e,t,O)}}function Ud(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Gd(e,t,l)},function(l){return Hs(e,t,l)}):Gd(e,t,a)}function Gd(e,t,a){t.status="fulfilled",t.value=a,Kd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Jd(e,a)))}function Hs(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Kd(t),t=t.next;while(t!==l)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Td(e,t){return t}function Zd(e,t){if(ke){var a=xe.formState;if(a!==null){e:{var l=ae;if(ke){if(we){t:{for(var u=we,c=Jt;u.nodeType!==8;){if(!c){u=null;break t}if(u=Gt(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){we=Gt(u.nextSibling),l=u.data==="F!";break e}}Na(l)}l=!1}l&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Td,lastRenderedState:t},a.queue=l,a=$d.bind(null,ae,l),l.dispatch=a,l=hs(!1),c=Gs.bind(null,ae,!1,l.queue),l=at(),u={state:t,dispatch:null,action:e,pending:null},l.queue=u,a=Qm.bind(null,ae,u,c,a),u.dispatch=a,l.memoizedState=e,[t,a,!1]}function Wd(e){var t=De();return Dd(t,Re,e)}function Dd(e,t,a){if(t=Os(e,t,Td)[0],e=hc(vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=pu(t)}catch(o){throw o===Rl?mc:o}else l=t;t=De();var u=t.queue,c=u.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,wl(9,{destroy:void 0},vm.bind(null,u,a),null)),[l,c,e]}function vm(e,t){e.action=t}function Ad(e){var t=De(),a=Re;if(a!==null)return Dd(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function wl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Oc(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function gd(){return De().memoizedState}function Hc(e,t,a,l){var u=at();ae.flags|=e,u.memoizedState=wl(1|t,{destroy:void 0},a,l===void 0?null:l)}function xc(e,t,a,l){var u=De();l=l===void 0?null:l;var c=u.memoizedState.inst;Re!==null&&l!==null&&Ns(l,Re.memoizedState.deps)?u.memoizedState=wl(t,c,a,l):(ae.flags|=e,u.memoizedState=wl(1|t,c,a,l))}function Ld(e,t){Hc(8390656,8,e,t)}function xs(e,t){xc(2048,8,e,t)}function _m(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Oc(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function zd(e){var t=De().memoizedState;return _m({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Fd(e,t){return xc(4,2,e,t)}function Md(e,t){return xc(4,4,e,t)}function Pd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,a){a=a!=null?a.concat([e]):null,xc(4,4,Pd.bind(null,t,e),a)}function fs(){}function Yd(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Ns(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Bd(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Ns(t,l[1]))return l[0];if(l=e(),_a){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l}function ws(e,t,a){return a===void 0||(Qt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Cr(),ae.lanes|=e,Ha|=e,a)}function Cd(e,t,a,l){return mt(a,t)?a:Hl.current!==null?(e=ws(e,a,l),mt(e,t)||(ze=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(re&261930)===0?(ze=!0,e.memoizedState=a):(e=Cr(),ae.lanes|=e,Ha|=e,t)}function Xd(e,t,a,l,u){var c=A.p;A.p=c!==0&&8>c?c:8;var o=f.T,d={};f.T=d,Gs(e,!1,t,a);try{var k=u(),O=f.S;if(O!==null&&O(d,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var w=Cm(k,l);bu(e,t,w,St(e))}else bu(e,t,l,St(e))}catch(G){bu(e,t,{then:function(){},status:"rejected",reason:G},St())}finally{A.p=c,o!==null&&d.types!==null&&(o.types=d.types),f.T=o}}function $m(){}function Js(e,t,a,l){if(e.tag!==5)throw Error(i(476));var u=Ed(e).queue;Xd(e,u,t,Z,a===null?$m:function(){return Qd(e),a(l)})}function Ed(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vt,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qd(e){var t=Ed(e);t.next===null&&(t=e.alternate.memoizedState),bu(e,t.next.queue,{},St())}function Us(){return ve(Wu)}function vd(){return De().memoizedState}function _d(){return De().memoizedState}function ej(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=qa(a);var l=Sa(t,e,a);l!==null&&(it(l,t,a),ku(l,t,a)),t={cache:cs()},e.payload=t;return}t=t.return}}function tj(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fc(e)?er(t,a):(a=Xn(e,t,a,l),a!==null&&(it(a,e,l),tr(a,t,l)))}function $d(e,t,a){var l=St();bu(e,t,a,l)}function bu(e,t,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fc(e))er(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var o=t.lastRenderedState,d=c(o,a);if(u.hasEagerState=!0,u.eagerState=d,mt(d,o))return sc(e,t,u,0),xe===null&&nc(),!1}catch{}if(a=Xn(e,t,u,l),a!==null)return it(a,e,l),tr(a,t,l),!0}return!1}function Gs(e,t,a,l){if(l={lane:2,revertLane:io(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(t)throw Error(i(479))}else t=Xn(e,a,l,2),t!==null&&it(t,e,2)}function fc(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function er(e,t){xl=Sc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function tr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ni(e,a)}}var qu={readContext:ve,use:Rc,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};qu.useEffectEvent=Te;var ar={readContext:ve,use:Rc,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:ve,useEffect:Ld,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Hc(4194308,4,Pd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Hc(4194308,4,e,t)},useInsertionEffect:function(e,t){Hc(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var l=e();if(_a){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=at();if(a!==void 0){var u=a(t);if(_a){ra(!0);try{a(t)}finally{ra(!1)}}}else u=t;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=tj.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=hs(e);var t=e.queue,a=$d.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:fs,useDeferredValue:function(e,t){var a=at();return ws(a,e,t)},useTransition:function(){var e=hs(!1);return e=Xd.bind(null,ae,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,u=at();if(ke){if(a===void 0)throw Error(i(407));a=a()}else{if(a=t(),xe===null)throw Error(i(349));(re&127)!==0||Rd(l,t,a)}u.memoizedState=a;var c={value:a,getSnapshot:t};return u.queue=c,Ld(Hd.bind(null,l,c,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},hd.bind(null,l,c,a,t),null),a},useId:function(){var e=at(),t=xe.identifierPrefix;if(ke){var a=Lt,l=gt;a=(l&~(1<<32-kt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Xm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Us,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gs.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return at().memoizedState=ej.bind(null,ae)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((qe&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}},Ks={readContext:ve,use:Rc,useCallback:Yd,useContext:ve,useEffect:xs,useImperativeHandle:Id,useInsertionEffect:Fd,useLayoutEffect:Md,useMemo:Bd,useReducer:hc,useRef:gd,useState:function(){return hc(vt)},useDebugValue:fs,useDeferredValue:function(e,t){var a=De();return Cd(a,Re.memoizedState,e,t)},useTransition:function(){var e=hc(vt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:pu(e),t]},useSyncExternalStore:Od,useId:vd,useHostTransitionStatus:Us,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var a=De();return wd(a,Re,e,t)},useMemoCache:Vs,useCacheRefresh:_d};Ks.useEffectEvent=zd;var lr={readContext:ve,use:Rc,useCallback:Yd,useContext:ve,useEffect:xs,useImperativeHandle:Id,useInsertionEffect:Fd,useLayoutEffect:Md,useMemo:Bd,useReducer:Rs,useRef:gd,useState:function(){return Rs(vt)},useDebugValue:fs,useDeferredValue:function(e,t){var a=De();return Re===null?ws(a,e,t):Cd(a,Re.memoizedState,e,t)},useTransition:function(){var e=Rs(vt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:pu(e),t]},useSyncExternalStore:Od,useId:vd,useHostTransitionStatus:Us,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var a=De();return Re!==null?wd(a,Re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:_d};lr.useEffectEvent=zd;function Ts(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:K({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zs={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),u=qa(l);u.payload=t,a!=null&&(u.callback=a),t=Sa(e,u,l),t!==null&&(it(t,e,l),ku(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),u=qa(l);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=Sa(e,u,l),t!==null&&(it(t,e,l),ku(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=qa(a);l.tag=2,t!=null&&(l.callback=t),t=Sa(e,l,a),t!==null&&(it(t,e,a),ku(t,e,a))}};function ur(e,t,a,l,u,c,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,o):t.prototype&&t.prototype.isPureReactComponent?!cu(a,l)||!cu(u,c):!0}function cr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Zs.enqueueReplaceState(t,t.state,null)}function $a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=K({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function nr(e){cc(e)}function sr(e){console.error(e)}function or(e){cc(e)}function wc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ir(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ws(e,t,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){wc(e,t)},a}function dr(e){return e=qa(e),e.tag=3,e}function rr(e,t,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=l.value;e.payload=function(){return u(c)},e.callback=function(){ir(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ir(t,a,l),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function aj(e,t,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Sl(t,a,u,!0),a=Nt.current,a!==null){switch(a.tag){case 31:case 13:return Ut===null?zc():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===jc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),no(e,l,u)),!1;case 22:return a.flags|=65536,l===jc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),no(e,l,u)),!1}throw Error(i(435,a.tag))}return no(e,l,u),zc(),!1}if(ke)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,l!==es&&(e=Error(i(422),{cause:l}),ou(xt(e,a)))):(l!==es&&(t=Error(i(423),{cause:l}),ou(xt(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=xt(l,a),u=Ws(e.stateNode,l,u),rs(e,u),Ze!==4&&(Ze=2)),!1;var c=Error(i(520),{cause:l});if(c=xt(c,a),fu===null?fu=[c]:fu.push(c),Ze!==4&&(Ze=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ws(a.stateNode,l,e),rs(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(xa===null||!xa.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dr(u),rr(u,e,a,l),rs(a,u),!1}a=a.return}while(a!==null);return!1}var Ds=Error(i(461)),ze=!1;function _e(e,t,a,l){t.child=e===null?jd(t,null,a,l):va(t,e.child,a,l)}function yr(e,t,a,l,u){a=a.render;var c=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return Ca(t),l=ps(e,t,a,o,c,u),d=bs(),e!==null&&!ze?(qs(e,t,u),_t(e,t,u)):(ke&&d&&_n(t),t.flags|=1,_e(e,t,l,u),t.child)}function kr(e,t,a,l,u){if(e===null){var c=a.type;return typeof c=="function"&&!En(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,mr(e,t,c,l,u)):(e=ic(a.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Is(e,u)){var o=c.memoizedProps;if(a=a.compare,a=a!==null?a:cu,a(o,l)&&e.ref===t.ref)return _t(e,t,u)}return t.flags|=1,e=Bt(c,l),e.ref=t.ref,e.return=t,t.child=e}function mr(e,t,a,l,u){if(e!==null){var c=e.memoizedProps;if(cu(c,l)&&e.ref===t.ref)if(ze=!1,t.pendingProps=l=c,Is(e,u))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,_t(e,t,u)}return As(e,t,a,l,u)}function jr(e,t,a,l){var u=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~c}else l=0,t.child=null;return Nr(e,t,c,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kc(t,c!==null?c.cachePool:null),c!==null?bd(t,c):ks(),qd(t);else return l=t.lanes=536870912,Nr(e,t,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(kc(t,c.cachePool),bd(t,c),Oa(),t.memoizedState=null):(e!==null&&kc(t,null),ks(),Oa());return _e(e,t,u,a),t.child}function Su(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nr(e,t,a,l,u){var c=ss();return c=c===null?null:{parent:ge._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&kc(t,null),ks(),qd(t),e!==null&&Sl(e,t,l,!0),t.childLanes=u,null}function Jc(e,t){return t=Gc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pr(e,t,a){return va(t,e.child,null,a),e=Jc(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function lj(e,t,a){var l=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ke){if(l.mode==="hidden")return e=Jc(t,l),t.lanes=536870912,Su(null,e);if(js(t),(e=we)?(e=Jy(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:gt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=ed(e),a.return=t,t.child=a,Qe=t,we=null)):e=null,e===null)throw Na(t);return t.lanes=536870912,null}return Jc(t,l)}var c=e.memoizedState;if(c!==null){var o=c.dehydrated;if(js(t),u)if(t.flags&256)t.flags&=-257,t=pr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ze||Sl(e,t,a,!1),u=(a&e.childLanes)!==0,ze||u){if(l=xe,l!==null&&(o=si(l,a),o!==0&&o!==c.retryLane))throw c.retryLane=o,Pa(e,o),it(l,e,o),Ds;zc(),t=pr(e,t,a)}else e=c.treeContext,we=Gt(o.nextSibling),Qe=t,ke=!0,ja=null,Jt=!1,e!==null&&ld(t,e),t=Jc(t,l),t.flags|=4096;return t}return e=Bt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Uc(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function As(e,t,a,l,u){return Ca(t),a=ps(e,t,a,l,void 0,u),l=bs(),e!==null&&!ze?(qs(e,t,u),_t(e,t,u)):(ke&&l&&_n(t),t.flags|=1,_e(e,t,a,u),t.child)}function br(e,t,a,l,u,c){return Ca(t),t.updateQueue=null,a=Vd(t,l,a,u),Sd(e),l=bs(),e!==null&&!ze?(qs(e,t,c),_t(e,t,c)):(ke&&l&&_n(t),t.flags|=1,_e(e,t,a,c),t.child)}function qr(e,t,a,l,u){if(Ca(t),t.stateNode===null){var c=Nl,o=a.contextType;typeof o=="object"&&o!==null&&(c=ve(o)),c=new a(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Zs,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},is(t),o=a.contextType,c.context=typeof o=="object"&&o!==null?ve(o):Nl,c.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ts(t,a,o,l),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(o=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),o!==c.state&&Zs.enqueueReplaceState(c,c.state,null),ju(t,l,c,u),mu(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var d=t.memoizedProps,k=$a(a,d);c.props=k;var O=c.context,w=a.contextType;o=Nl,typeof w=="object"&&w!==null&&(o=ve(w));var G=a.getDerivedStateFromProps;w=typeof G=="function"||typeof c.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,w||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d||O!==o)&&cr(t,c,l,o),ba=!1;var R=t.memoizedState;c.state=R,ju(t,l,c,u),mu(),O=t.memoizedState,d||R!==O||ba?(typeof G=="function"&&(Ts(t,a,G,l),O=t.memoizedState),(k=ba||ur(t,a,k,l,R,O,o))?(w||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=O),c.props=l,c.state=O,c.context=o,l=k):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,ds(e,t),o=t.memoizedProps,w=$a(a,o),c.props=w,G=t.pendingProps,R=c.context,O=a.contextType,k=Nl,typeof O=="object"&&O!==null&&(k=ve(O)),d=a.getDerivedStateFromProps,(O=typeof d=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(o!==G||R!==k)&&cr(t,c,l,k),ba=!1,R=t.memoizedState,c.state=R,ju(t,l,c,u),mu();var H=t.memoizedState;o!==G||R!==H||ba||e!==null&&e.dependencies!==null&&rc(e.dependencies)?(typeof d=="function"&&(Ts(t,a,d,l),H=t.memoizedState),(w=ba||ur(t,a,w,l,R,H,k)||e!==null&&e.dependencies!==null&&rc(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,H,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,H,k)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=H),c.props=l,c.state=H,c.context=k,l=w):(typeof c.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,Uc(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=va(t,e.child,null,u),t.child=va(t,null,a,u)):_e(e,t,a,u),t.memoizedState=c.state,e=t.child):e=_t(e,t,u),e}function Sr(e,t,a,l){return Ya(),t.flags|=256,_e(e,t,a,l),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ls(e){return{baseLanes:e,cachePool:id()}}function zs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function Vr(e,t,a){var l=t.pendingProps,u=!1,c=(t.flags&128)!==0,o;if((o=c)||(o=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),o&&(u=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ke){if(u?Va(t):Oa(),(e=we)?(e=Jy(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:gt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=ed(e),a.return=t,t.child=a,Qe=t,we=null)):e=null,e===null)throw Na(t);return Ro(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,u?(Oa(),u=t.mode,d=Gc({mode:"hidden",children:d},u),l=Ia(l,u,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Ls(a),l.childLanes=zs(e,o,a),t.memoizedState=gs,Su(null,l)):(Va(t),Fs(t,d))}var k=e.memoizedState;if(k!==null&&(d=k.dehydrated,d!==null)){if(c)t.flags&256?(Va(t),t.flags&=-257,t=Ms(e,t,a)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),d=l.fallback,u=t.mode,l=Gc({mode:"visible",children:l.children},u),d=Ia(d,u,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,va(t,e.child,null,a),l=t.child,l.memoizedState=Ls(a),l.childLanes=zs(e,o,a),t.memoizedState=gs,t=Su(null,l));else if(Va(t),Ro(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var O=o.dgst;o=O,l=Error(i(419)),l.stack="",l.digest=o,ou({value:l,source:null,stack:null}),t=Ms(e,t,a)}else if(ze||Sl(e,t,a,!1),o=(a&e.childLanes)!==0,ze||o){if(o=xe,o!==null&&(l=si(o,a),l!==0&&l!==k.retryLane))throw k.retryLane=l,Pa(e,l),it(o,e,l),Ds;Oo(d)||zc(),t=Ms(e,t,a)}else Oo(d)?(t.flags|=192,t.child=e.child,t=null):(e=k.treeContext,we=Gt(d.nextSibling),Qe=t,ke=!0,ja=null,Jt=!1,e!==null&&ld(t,e),t=Fs(t,l.children),t.flags|=4096);return t}return u?(Oa(),d=l.fallback,u=t.mode,k=e.child,O=k.sibling,l=Bt(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,O!==null?d=Bt(O,d):(d=Ia(d,u,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Su(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Ls(a):(u=d.cachePool,u!==null?(k=ge._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=id(),d={baseLanes:d.baseLanes|a,cachePool:u}),l.memoizedState=d,l.childLanes=zs(e,o,a),t.memoizedState=gs,Su(e.child,l)):(Va(t),a=e.child,e=a.sibling,a=Bt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Fs(e,t){return t=Gc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gc(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function Ms(e,t,a){return va(t,e.child,null,a),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Or(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ls(e.return,t,a)}function Ps(e,t,a,l,u,c){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:c}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=u,o.treeForkCount=c)}function Rr(e,t,a){var l=t.pendingProps,u=l.revealOrder,c=l.tail;l=l.children;var o=We.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,W(We,o),_e(e,t,l,a),l=ke?su:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Or(e,a,t);else if(e.tag===19)Or(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=t.child,u=null;a!==null;)e=a.alternate,e!==null&&qc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),Ps(t,!1,u,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&qc(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ps(t,!0,a,null,c,l);break;case"together":Ps(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function _t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Sl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,a=Bt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Bt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Is(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rc(e)))}function uj(e,t,a){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),pa(t,ge,e.memoizedState.cache),Ya();break;case 27:case 5:At(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,js(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vr(e,t,a):(Va(t),e=_t(e,t,a),e!==null?e.sibling:null);Va(t);break;case 19:var u=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Sl(e,t,a,!1),l=(a&t.childLanes)!==0),u){if(l)return Rr(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(We,We.current),l)break;return null;case 22:return t.lanes=0,jr(e,t,a,t.pendingProps);case 24:pa(t,ge,e.memoizedState.cache)}return _t(e,t,a)}function hr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!Is(e,a)&&(t.flags&128)===0)return ze=!1,uj(e,t,a);ze=(e.flags&131072)!==0}else ze=!1,ke&&(t.flags&1048576)!==0&&ad(t,su,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")En(e)?(l=$a(e,l),t.tag=1,t=qr(null,t,e,l,a)):(t.tag=0,t=As(null,t,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===je){t.tag=11,t=yr(null,t,e,l,a);break e}else if(u===g){t.tag=14,t=kr(null,t,e,l,a);break e}}throw t=dt(e)||e,Error(i(306,t,""))}}return t;case 0:return As(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,u=$a(l,t.pendingProps),qr(e,t,l,u,a);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));l=t.pendingProps;var c=t.memoizedState;u=c.element,ds(e,t),ju(t,l,null,a);var o=t.memoizedState;if(l=o.cache,pa(t,ge,l),l!==c.cache&&us(t,[ge],a,!0),mu(),l=o.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Sr(e,t,l,a);break e}else if(l!==u){u=xt(Error(i(424)),t),ou(u),t=Sr(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=Gt(e.firstChild),Qe=t,ke=!0,ja=null,Jt=!0,a=jd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===u){t=_t(e,t,a);break e}_e(e,t,l,a)}t=t.child}return t;case 26:return Uc(e,t),e===null?(a=Wy(t.type,null,t.pendingProps,null))?t.memoizedState=a:ke||(a=t.type,e=t.pendingProps,l=Cc(ce.current).createElement(a),l[Ee]=t,l[lt]=e,$e(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=Wy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return At(t),e===null&&ke&&(l=t.stateNode=Ky(t.type,t.pendingProps,ce.current),Qe=t,Jt=!0,u=we,Ua(t.type)?(ho=u,we=Gt(l.firstChild)):we=u),_e(e,t,t.pendingProps.children,a),Uc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ke&&((u=l=we)&&(l=Zj(l,t.type,t.pendingProps,Jt),l!==null?(t.stateNode=l,Qe=t,we=Gt(l.firstChild),Jt=!1,u=!0):u=!1),u||Na(t)),At(t),u=t.type,c=t.pendingProps,o=e!==null?e.memoizedProps:null,l=c.children,qo(u,c)?l=null:o!==null&&qo(u,o)&&(t.flags|=32),t.memoizedState!==null&&(u=ps(e,t,Em,null,null,a),Wu._currentValue=u),Uc(e,t),_e(e,t,l,a),t.child;case 6:return e===null&&ke&&((e=a=we)&&(a=Wj(a,t.pendingProps,Jt),a!==null?(t.stateNode=a,Qe=t,we=null,e=!0):e=!1),e||Na(t)),null;case 13:return Vr(e,t,a);case 4:return Be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=va(t,null,l,a):_e(e,t,l,a),t.child;case 11:return yr(e,t,t.type,t.pendingProps,a);case 7:return _e(e,t,t.pendingProps,a),t.child;case 8:return _e(e,t,t.pendingProps.children,a),t.child;case 12:return _e(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,pa(t,t.type,l.value),_e(e,t,l.children,a),t.child;case 9:return u=t.type._context,l=t.pendingProps.children,Ca(t),u=ve(u),l=l(u),t.flags|=1,_e(e,t,l,a),t.child;case 14:return kr(e,t,t.type,t.pendingProps,a);case 15:return mr(e,t,t.type,t.pendingProps,a);case 19:return Rr(e,t,a);case 31:return lj(e,t,a);case 22:return jr(e,t,a,t.pendingProps);case 24:return Ca(t),l=ve(ge),e===null?(u=ss(),u===null&&(u=xe,c=cs(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),t.memoizedState={parent:l,cache:u},is(t),pa(t,ge,u)):((e.lanes&a)!==0&&(ds(e,t),ju(t,null,null,a),mu()),u=e.memoizedState,c=t.memoizedState,u.parent!==l?(u={parent:l,cache:l},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),pa(t,ge,l)):(l=c.cache,pa(t,ge,l),l!==u.cache&&us(t,[ge],a,!0))),_e(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function $t(e){e.flags|=4}function Ys(e,t,a,l,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(vr())e.flags|=8192;else throw Qa=jc,os}else e.flags&=-16777217}function Hr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zy(t))if(vr())e.flags|=8192;else throw Qa=jc,os}function Kc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ui():536870912,e.lanes|=t,Kl|=t)}function Vu(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function cj(e,t,a){var l=t.pendingProps;switch($n(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Et(ge),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ql(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ts())),Je(t),null;case 26:var u=t.type,c=t.memoizedState;return e===null?($t(t),c!==null?(Je(t),Hr(t,c)):(Je(t),Ys(t,u,null,l,a))):c?c!==e.memoizedState?($t(t),Je(t),Hr(t,c)):(Je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),Je(t),Ys(t,u,e,l,a)),null;case 27:if(ia(t),a=ce.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Je(t),null}e=z.current,ql(t)?ud(t):(e=Ky(u,l,a),t.stateNode=e,$t(t))}return Je(t),null;case 5:if(ia(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(i(166));return Je(t),null}if(c=z.current,ql(t))ud(t);else{var o=Cc(ce.current);switch(c){case 1:c=o.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=o.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=o.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=o.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=o.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?o.createElement(u,{is:l.is}):o.createElement(u)}}c[Ee]=t,c[lt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)c.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=c;e:switch($e(c,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return Je(t),Ys(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(e=ce.current,ql(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,u=Qe,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[Ee]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Vy(e.nodeValue,a)),e||Na(t,!0)}else e=Cc(e).createTextNode(l),e[Ee]=t,t.stateNode=e}return Je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ql(t),a!==null){if(e===null){if(!l)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[Ee]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),e=!1}else a=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(i(558))}return Je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ql(t),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[Ee]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),u=!1}else u=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==u&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Kc(t,t.updateQueue),Je(t),null);case 4:return fe(),e===null&&mo(t.stateNode.containerInfo),Je(t),null;case 10:return Et(t.type),Je(t),null;case 19:if(U(We),l=t.memoizedState,l===null)return Je(t),null;if(u=(t.flags&128)!==0,c=l.rendering,c===null)if(u)Vu(l,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=qc(e),c!==null){for(t.flags|=128,Vu(l,!1),e=c.updateQueue,t.updateQueue=e,Kc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$i(a,e),a=a.sibling;return W(We,We.current&1|2),ke&&Ct(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>Ac&&(t.flags|=128,u=!0,Vu(l,!1),t.lanes=4194304)}else{if(!u)if(e=qc(c),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Kc(t,e),Vu(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ke)return Je(t),null}else 2*rt()-l.renderingStartTime>Ac&&a!==536870912&&(t.flags|=128,u=!0,Vu(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,a=We.current,W(We,u?a&1|2:a&1),ke&&Ct(t,l.treeForkCount),e):(Je(t),null);case 22:case 23:return pt(t),ms(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),a=t.updateQueue,a!==null&&Kc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Et(ge),Je(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function nj(e,t){switch($n(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Et(ge),fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ia(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(i(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(We),null;case 4:return fe(),null;case 10:return Et(t.type),null;case 22:case 23:return pt(t),ms(),e!==null&&U(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Et(ge),null;case 25:return null;default:return null}}function xr(e,t){switch($n(t),t.tag){case 3:Et(ge),fe();break;case 26:case 27:case 5:ia(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:U(We);break;case 10:Et(t.type);break;case 22:case 23:pt(t),ms(),e!==null&&U(Xa);break;case 24:Et(ge)}}function Ou(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var c=a.create,o=a.inst;l=c(),o.destroy=l}a=a.next}while(a!==u)}}catch(d){Oe(t,t.return,d)}}function Ra(e,t,a){try{var l=t.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var c=u.next;l=c;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,u=t;var k=a,O=d;try{O()}catch(w){Oe(u,k,w)}}}l=l.next}while(l!==c)}}catch(w){Oe(t,t.return,w)}}function fr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{pd(t,a)}catch(l){Oe(e,e.return,l)}}}function wr(e,t,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Oe(e,t,l)}}function Ru(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){Oe(e,t,u)}}function zt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Oe(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(e,t,u)}else a.current=null}function Jr(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Oe(e,e.return,u)}}function Bs(e,t,a){try{var l=e.stateNode;wj(l,e.type,a,t),l[lt]=t}catch(u){Oe(e,e.return,u)}}function Ur(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ur(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=It));else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Xs(e,t,a),e=e.sibling;e!==null;)Xs(e,t,a),e=e.sibling}function Tc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tc(e,t,a),e=e.sibling;e!==null;)Tc(e,t,a),e=e.sibling}function Gr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);$e(t,l,a),t[Ee]=e,t[lt]=a}catch(c){Oe(e,e.return,c)}}var ea=!1,Fe=!1,Es=!1,Kr=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function sj(e,t){if(e=e.containerInfo,po=en,e=Ii(e),Mn(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var o=0,d=-1,k=-1,O=0,w=0,G=e,R=null;t:for(;;){for(var H;G!==a||u!==0&&G.nodeType!==3||(d=o+u),G!==c||l!==0&&G.nodeType!==3||(k=o+l),G.nodeType===3&&(o+=G.nodeValue.length),(H=G.firstChild)!==null;)R=G,G=H;for(;;){if(G===e)break t;if(R===a&&++O===u&&(d=o),R===c&&++w===l&&(k=o),(H=G.nextSibling)!==null)break;G=R,R=G.parentNode}G=H}a=d===-1||k===-1?null:{start:d,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(bo={focusedElem:e,selectionRange:a},en=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,u=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var M=$a(a.type,u);e=l.getSnapshotBeforeUpdate(M,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(E){Oe(a,a.return,E)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Tr(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),l&4&&Ou(5,a);break;case 1:if(aa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Oe(a,a.return,o)}else{var u=$a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Oe(a,a.return,o)}}l&64&&fr(a),l&512&&Ru(a,a.return);break;case 3:if(aa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{pd(e,t)}catch(o){Oe(a,a.return,o)}}break;case 27:t===null&&l&4&&Gr(a);case 26:case 5:aa(e,a),t===null&&l&4&&Jr(a),l&512&&Ru(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),l&4&&Dr(e,a);break;case 13:aa(e,a),l&4&&Ar(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nj.bind(null,a),Dj(e,a))));break;case 22:if(l=a.memoizedState!==null||ea,!l){t=t!==null&&t.memoizedState!==null||Fe,u=ea;var c=Fe;ea=l,(Fe=t)&&!c?la(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),ea=u,Fe=c}break;case 30:break;default:aa(e,a)}}function Zr(e){var t=e.alternate;t!==null&&(e.alternate=null,Zr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,ct=!1;function ta(e,t,a){for(a=a.child;a!==null;)Wr(e,t,a),a=a.sibling}function Wr(e,t,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Cl,a)}catch{}switch(a.tag){case 26:Fe||zt(a,t),ta(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||zt(a,t);var l=Ue,u=ct;Ua(a.type)&&(Ue=a.stateNode,ct=!1),ta(e,t,a),Ku(a.stateNode),Ue=l,ct=u;break;case 5:Fe||zt(a,t);case 6:if(l=Ue,u=ct,Ue=null,ta(e,t,a),Ue=l,ct=u,Ue!==null)if(ct)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(c){Oe(a,t,c)}else try{Ue.removeChild(a.stateNode)}catch(c){Oe(a,t,c)}break;case 18:Ue!==null&&(ct?(e=Ue,fy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zl(e)):fy(Ue,a.stateNode));break;case 4:l=Ue,u=ct,Ue=a.stateNode.containerInfo,ct=!0,ta(e,t,a),Ue=l,ct=u;break;case 0:case 11:case 14:case 15:Ra(2,a,t),Fe||Ra(4,a,t),ta(e,t,a);break;case 1:Fe||(zt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wr(a,t,l)),ta(e,t,a);break;case 21:ta(e,t,a);break;case 22:Fe=(l=Fe)||a.memoizedState!==null,ta(e,t,a),Fe=l;break;default:ta(e,t,a)}}function Dr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zl(e)}catch(a){Oe(t,t.return,a)}}}function Ar(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zl(e)}catch(a){Oe(t,t.return,a)}}function oj(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kr),t;default:throw Error(i(435,e.tag))}}function Zc(e,t){var a=oj(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var u=pj.bind(null,e,l);l.then(u,u)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],c=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Ua(d.type)){Ue=d.stateNode,ct=!1;break e}break;case 5:Ue=d.stateNode,ct=!1;break e;case 3:case 4:Ue=d.stateNode.containerInfo,ct=!0;break e}d=d.return}if(Ue===null)throw Error(i(160));Wr(c,o,u),Ue=null,ct=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gr(t,e),t=t.sibling}var Zt=null;function gr(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),st(e),l&4&&(Ra(3,e,e.return),Ou(3,e),Ra(5,e,e.return));break;case 1:nt(t,e),st(e),l&512&&(Fe||a===null||zt(a,a.return)),l&64&&ea&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Zt;if(nt(t,e),st(e),l&512&&(Fe||a===null||zt(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":c=u.getElementsByTagName("title")[0],(!c||c[Ql]||c[Ee]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(l),u.head.insertBefore(c,u.querySelector("head > title"))),$e(c,l,a),c[Ee]=e,Ce(c),l=c;break e;case"link":var o=gy("link","href",u).get(l+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(c=o[d],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}c=u.createElement(l),$e(c,l,a),u.head.appendChild(c);break;case"meta":if(o=gy("meta","content",u).get(l+(a.content||""))){for(d=0;d<o.length;d++)if(c=o[d],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}c=u.createElement(l),$e(c,l,a),u.head.appendChild(c);break;default:throw Error(i(468,l))}c[Ee]=e,Ce(c),l=c}e.stateNode=l}else Ly(u,e.type,e.stateNode);else e.stateNode=Ay(u,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Ly(u,e.type,e.stateNode):Ay(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Bs(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),st(e),l&512&&(Fe||a===null||zt(a,a.return)),a!==null&&l&4&&Bs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),st(e),l&512&&(Fe||a===null||zt(a,a.return)),e.flags&32){u=e.stateNode;try{il(u,"")}catch(M){Oe(e,e.return,M)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Bs(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Es=!0);break;case 6:if(nt(t,e),st(e),l&4){if(e.stateNode===null)throw Error(i(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(M){Oe(e,e.return,M)}}break;case 3:if(Qc=null,u=Zt,Zt=Xc(t.containerInfo),nt(t,e),Zt=u,st(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(t.containerInfo)}catch(M){Oe(e,e.return,M)}Es&&(Es=!1,Lr(e));break;case 4:l=Zt,Zt=Xc(e.stateNode.containerInfo),nt(t,e),st(e),Zt=l;break;case 12:nt(t,e),st(e);break;case 31:nt(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zc(e,l)));break;case 13:nt(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dc=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zc(e,l)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,O=ea,w=Fe;if(ea=O||u,Fe=w||k,nt(t,e),Fe=w,ea=O,st(e),l&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||k||ea||Fe||el(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){k=a=t;try{if(c=k.stateNode,u)o=c.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=k.stateNode;var G=k.memoizedProps.style,R=G!=null&&G.hasOwnProperty("display")?G.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(M){Oe(k,k.return,M)}}}else if(t.tag===6){if(a===null){k=t;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(M){Oe(k,k.return,M)}}}else if(t.tag===18){if(a===null){k=t;try{var H=k.stateNode;u?wy(H,!0):wy(k.stateNode,!1)}catch(M){Oe(k,k.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zc(e,a))));break;case 19:nt(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zc(e,l)));break;case 30:break;case 21:break;default:nt(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ur(l)){a=l;break}l=l.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var u=a.stateNode,c=Cs(e);Tc(e,c,u);break;case 5:var o=a.stateNode;a.flags&32&&(il(o,""),a.flags&=-33);var d=Cs(e);Tc(e,d,o);break;case 3:case 4:var k=a.stateNode.containerInfo,O=Cs(e);Xs(e,O,k);break;default:throw Error(i(161))}}catch(w){Oe(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Lr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tr(e,t.alternate,t),t=t.sibling}function el(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),el(t);break;case 1:zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wr(t,t.return,a),el(t);break;case 27:Ku(t.stateNode);case 26:case 5:zt(t,t.return),el(t);break;case 22:t.memoizedState===null&&el(t);break;case 30:el(t);break;default:el(t)}e=e.sibling}}function la(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,u=e,c=t,o=c.flags;switch(c.tag){case 0:case 11:case 15:la(u,c,a),Ou(4,c);break;case 1:if(la(u,c,a),l=c,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(O){Oe(l,l.return,O)}if(l=c,u=l.updateQueue,u!==null){var d=l.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Nd(k[u],d)}catch(O){Oe(l,l.return,O)}}a&&o&64&&fr(c),Ru(c,c.return);break;case 27:Gr(c);case 26:case 5:la(u,c,a),a&&l===null&&o&4&&Jr(c),Ru(c,c.return);break;case 12:la(u,c,a);break;case 31:la(u,c,a),a&&o&4&&Dr(u,c);break;case 13:la(u,c,a),a&&o&4&&Ar(u,c);break;case 22:c.memoizedState===null&&la(u,c,a),Ru(c,c.return);break;case 30:break;default:la(u,c,a)}t=t.sibling}}function Qs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&iu(a))}function vs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&iu(e))}function Wt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zr(e,t,a,l),t=t.sibling}function zr(e,t,a,l){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,l),u&2048&&Ou(9,t);break;case 1:Wt(e,t,a,l);break;case 3:Wt(e,t,a,l),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&iu(e)));break;case 12:if(u&2048){Wt(e,t,a,l),e=t.stateNode;try{var c=t.memoizedProps,o=c.id,d=c.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Oe(t,t.return,k)}}else Wt(e,t,a,l);break;case 31:Wt(e,t,a,l);break;case 13:Wt(e,t,a,l);break;case 23:break;case 22:c=t.stateNode,o=t.alternate,t.memoizedState!==null?c._visibility&2?Wt(e,t,a,l):hu(e,t):c._visibility&2?Wt(e,t,a,l):(c._visibility|=2,Jl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),u&2048&&Qs(o,t);break;case 24:Wt(e,t,a,l),u&2048&&vs(t.alternate,t);break;default:Wt(e,t,a,l)}}function Jl(e,t,a,l,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,o=t,d=a,k=l,O=o.flags;switch(o.tag){case 0:case 11:case 15:Jl(c,o,d,k,u),Ou(8,o);break;case 23:break;case 22:var w=o.stateNode;o.memoizedState!==null?w._visibility&2?Jl(c,o,d,k,u):hu(c,o):(w._visibility|=2,Jl(c,o,d,k,u)),u&&O&2048&&Qs(o.alternate,o);break;case 24:Jl(c,o,d,k,u),u&&O&2048&&vs(o.alternate,o);break;default:Jl(c,o,d,k,u)}t=t.sibling}}function hu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,u=l.flags;switch(l.tag){case 22:hu(a,l),u&2048&&Qs(l.alternate,l);break;case 24:hu(a,l),u&2048&&vs(l.alternate,l);break;default:hu(a,l)}t=t.sibling}}var Hu=8192;function Ul(e,t,a){if(e.subtreeFlags&Hu)for(e=e.child;e!==null;)Fr(e,t,a),e=e.sibling}function Fr(e,t,a){switch(e.tag){case 26:Ul(e,t,a),e.flags&Hu&&e.memoizedState!==null&&Xj(a,Zt,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,a);break;case 3:case 4:var l=Zt;Zt=Xc(e.stateNode.containerInfo),Ul(e,t,a),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Hu,Hu=16777216,Ul(e,t,a),Hu=l):Ul(e,t,a));break;default:Ul(e,t,a)}}function Mr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Ir(l,e)}Mr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pr(e),e=e.sibling}function Pr(e){switch(e.tag){case 0:case 11:case 15:xu(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:xu(e);break;case 12:xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wc(e)):xu(e);break;default:xu(e)}}function Wc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Ir(l,e)}Mr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),Wc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Wc(t));break;default:Wc(t)}e=e.sibling}}function Ir(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:iu(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var u=l.sibling,c=l.return;if(Zr(l),l===a){Xe=null;break e}if(u!==null){u.return=c,Xe=u;break e}Xe=c}}}var ij={getCacheForType:function(e){var t=ve(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ve(ge).controller.signal}},dj=typeof WeakMap=="function"?WeakMap:Map,qe=0,xe=null,ie=null,re=0,Ve=0,bt=null,ha=!1,Gl=!1,_s=!1,ua=0,Ze=0,Ha=0,tl=0,$s=0,qt=0,Kl=0,fu=null,ot=null,eo=!1,Dc=0,Yr=0,Ac=1/0,gc=null,xa=null,Pe=0,fa=null,Tl=null,ca=0,to=0,ao=null,Br=null,wu=0,lo=null;function St(){return(qe&2)!==0&&re!==0?re&-re:f.T!==null?io():oi()}function Cr(){if(qt===0)if((re&536870912)===0||ke){var e=Bu;Bu<<=1,(Bu&3932160)===0&&(Bu=262144),qt=e}else qt=536870912;return e=Nt.current,e!==null&&(e.flags|=32),qt}function it(e,t,a){(e===xe&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Zl(e,0),wa(e,re,qt,!1)),El(e,a),((qe&2)===0||e!==xe)&&(e===xe&&((qe&2)===0&&(tl|=a),Ze===4&&wa(e,re,qt,!1)),Ft(e))}function Xr(e,t,a){if((qe&6)!==0)throw Error(i(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Xl(e,t),u=l?kj(e,t):co(e,t,!0),c=l;do{if(u===0){Gl&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!rj(a)){u=co(e,t,!1),c=!1;continue}if(u===2){if(c=t,e.errorRecoveryDisabledLanes&c)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;u=fu;var k=d.current.memoizedState.isDehydrated;if(k&&(Zl(d,o).flags|=256),o=co(d,o,!1),o!==2){if(_s&&!k){d.errorRecoveryDisabledLanes|=c,tl|=c,u=4;break e}c=ot,ot=u,c!==null&&(ot===null?ot=c:ot.push.apply(ot,c))}u=o}if(c=!1,u!==2)continue}}if(u===1){Zl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,c=u,c){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,qt,!ha);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(u=Dc+300-rt(),10<u)){if(wa(l,t,qt,!ha),Xu(l,0,!0)!==0)break e;ca=t,l.timeoutHandle=Hy(Er.bind(null,l,a,ot,gc,eo,t,qt,tl,Kl,ha,c,"Throttled",-0,0),u);break e}Er(l,a,ot,gc,eo,t,qt,tl,Kl,ha,c,null,-0,0)}}break}while(!0);Ft(e)}function Er(e,t,a,l,u,c,o,d,k,O,w,G,R,H){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},Fr(t,c,G);var M=(c&62914560)===c?Dc-rt():(c&4194048)===c?Yr-rt():0;if(M=Ej(G,M),M!==null){ca=c,e.cancelPendingCommit=M(ly.bind(null,e,t,c,a,l,u,o,d,k,w,G,null,R,H)),wa(e,c,o,!O);return}}ly(e,t,c,a,l,u,o,d,k)}function rj(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],c=u.getSnapshot;u=u.value;try{if(!mt(c(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~$s,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var u=t;0<u;){var c=31-kt(u),o=1<<c;l[c]=-1,u&=~o}a!==0&&ci(e,a,t)}function Lc(){return(qe&6)===0?(Ju(0),!1):!0}function uo(){if(ie!==null){if(Ve===0)var e=ie.return;else e=ie,Xt=Ba=null,Ss(e),hl=null,ru=0,e=ie;for(;e!==null;)xr(e.alternate,e),e=e.return;ie=null}}function Zl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gj(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,uo(),xe=e,ie=a=Bt(e.current,null),re=t,Ve=0,bt=null,ha=!1,Gl=Xl(e,t),_s=!1,Kl=qt=$s=tl=Ha=Ze=0,ot=fu=null,eo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var u=31-kt(l),c=1<<u;t|=e[u],l&=~c}return ua=t,nc(),a}function Qr(e,t){ae=null,f.H=qu,t===Rl||t===mc?(t=yd(),Ve=3):t===os?(t=yd(),Ve=4):Ve=t===Ds?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,ie===null&&(Ze=1,wc(e,xt(t,e.current)))}function vr(){var e=Nt.current;return e===null?!0:(re&4194048)===re?Ut===null:(re&62914560)===re||(re&536870912)!==0?e===Ut:!1}function _r(){var e=f.H;return f.H=qu,e===null?qu:e}function $r(){var e=f.A;return f.A=ij,e}function zc(){Ze=4,ha||(re&4194048)!==re&&Nt.current!==null||(Gl=!0),(Ha&134217727)===0&&(tl&134217727)===0||xe===null||wa(xe,re,qt,!1)}function co(e,t,a){var l=qe;qe|=2;var u=_r(),c=$r();(xe!==e||re!==t)&&(gc=null,Zl(e,t)),t=!1;var o=Ze;e:do try{if(Ve!==0&&ie!==null){var d=ie,k=bt;switch(Ve){case 8:uo(),o=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var O=Ve;if(Ve=0,bt=null,Wl(e,d,k,O),a&&Gl){o=0;break e}break;default:O=Ve,Ve=0,bt=null,Wl(e,d,k,O)}}yj(),o=Ze;break}catch(w){Qr(e,w)}while(!0);return t&&e.shellSuspendCounter++,Xt=Ba=null,qe=l,f.H=u,f.A=c,ie===null&&(xe=null,re=0,nc()),o}function yj(){for(;ie!==null;)ey(ie)}function kj(e,t){var a=qe;qe|=2;var l=_r(),u=$r();xe!==e||re!==t?(gc=null,Ac=rt()+500,Zl(e,t)):Gl=Xl(e,t);e:do try{if(Ve!==0&&ie!==null){t=ie;var c=bt;t:switch(Ve){case 1:Ve=0,bt=null,Wl(e,t,c,1);break;case 2:case 9:if(dd(c)){Ve=0,bt=null,ty(t);break}t=function(){Ve!==2&&Ve!==9||xe!==e||(Ve=7),Ft(e)},c.then(t,t);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:dd(c)?(Ve=0,bt=null,ty(t)):(Ve=0,bt=null,Wl(e,t,c,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var d=ie;if(o?zy(o):d.stateNode.complete){Ve=0,bt=null;var k=d.sibling;if(k!==null)ie=k;else{var O=d.return;O!==null?(ie=O,Fc(O)):ie=null}break t}}Ve=0,bt=null,Wl(e,t,c,5);break;case 6:Ve=0,bt=null,Wl(e,t,c,6);break;case 8:uo(),Ze=6;break e;default:throw Error(i(462))}}mj();break}catch(w){Qr(e,w)}while(!0);return Xt=Ba=null,f.H=l,f.A=u,qe=a,ie!==null?0:(xe=null,re=0,nc(),Ze)}function mj(){for(;ie!==null&&!Ak();)ey(ie)}function ey(e){var t=hr(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Fc(e):ie=t}function ty(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=br(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=br(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Ss(t);default:xr(a,t),t=ie=$i(t,ua),t=hr(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?Fc(e):ie=t}function Wl(e,t,a,l){Xt=Ba=null,Ss(t),hl=null,ru=0;var u=t.return;try{if(aj(e,u,t,a,re)){Ze=1,wc(e,xt(a,e.current)),ie=null;return}}catch(c){if(u!==null)throw ie=u,c;Ze=1,wc(e,xt(a,e.current)),ie=null;return}t.flags&32768?(ke||l===1?e=!0:Gl||(re&536870912)!==0?e=!1:(ha=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ay(t,e)):Fc(t)}function Fc(e){var t=e;do{if((t.flags&32768)!==0){ay(t,ha);return}e=t.return;var a=cj(t.alternate,t,ua);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ze===0&&(Ze=5)}function ay(e,t){do{var a=nj(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Ze=6,ie=null}function ly(e,t,a,l,u,c,o,d,k){e.cancelPendingCommit=null;do Mc();while(Pe!==0);if((qe&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(c=t.lanes|t.childLanes,c|=Cn,Ck(e,a,c,o,d,k),e===xe&&(ie=xe=null,re=0),Tl=t,fa=e,ca=a,to=c,ao=u,Br=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bj(Iu,function(){return oy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=f.T,f.T=null,u=A.p,A.p=2,o=qe,qe|=4;try{sj(e,t,a)}finally{qe=o,A.p=u,f.T=l}}Pe=1,uy(),cy(),ny()}}function uy(){if(Pe===1){Pe=0;var e=fa,t=Tl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=f.T,f.T=null;var l=A.p;A.p=2;var u=qe;qe|=4;try{gr(t,e);var c=bo,o=Ii(e.containerInfo),d=c.focusedElem,k=c.selectionRange;if(o!==d&&d&&d.ownerDocument&&Pi(d.ownerDocument.documentElement,d)){if(k!==null&&Mn(d)){var O=k.start,w=k.end;if(w===void 0&&(w=O),"selectionStart"in d)d.selectionStart=O,d.selectionEnd=Math.min(w,d.value.length);else{var G=d.ownerDocument||document,R=G&&G.defaultView||window;if(R.getSelection){var H=R.getSelection(),M=d.textContent.length,E=Math.min(k.start,M),He=k.end===void 0?E:Math.min(k.end,M);!H.extend&&E>He&&(o=He,He=E,E=o);var q=Mi(d,E),m=Mi(d,He);if(q&&m&&(H.rangeCount!==1||H.anchorNode!==q.node||H.anchorOffset!==q.offset||H.focusNode!==m.node||H.focusOffset!==m.offset)){var V=G.createRange();V.setStart(q.node,q.offset),H.removeAllRanges(),E>He?(H.addRange(V),H.extend(m.node,m.offset)):(V.setEnd(m.node,m.offset),H.addRange(V))}}}}for(G=[],H=d;H=H.parentNode;)H.nodeType===1&&G.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<G.length;d++){var J=G[d];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}en=!!po,bo=po=null}finally{qe=u,A.p=l,f.T=a}}e.current=t,Pe=2}}function cy(){if(Pe===2){Pe=0;var e=fa,t=Tl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=f.T,f.T=null;var l=A.p;A.p=2;var u=qe;qe|=4;try{Tr(e,t.alternate,t)}finally{qe=u,A.p=l,f.T=a}}Pe=3}}function ny(){if(Pe===4||Pe===3){Pe=0,gk();var e=fa,t=Tl,a=ca,l=Br;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,Tl=fa=null,sy(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(xa=null),Rn(a),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=f.T,u=A.p,A.p=2,f.T=null;try{for(var c=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];c(d.value,{componentStack:d.stack})}}finally{f.T=t,A.p=u}}(ca&3)!==0&&Mc(),Ft(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===lo?wu++:(wu=0,lo=e):wu=0,Ju(0)}}function sy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,iu(t)))}function Mc(){return uy(),cy(),ny(),oy()}function oy(){if(Pe!==5)return!1;var e=fa,t=to;to=0;var a=Rn(ca),l=f.T,u=A.p;try{A.p=32>a?32:a,f.T=null,a=ao,ao=null;var c=fa,o=ca;if(Pe=0,Tl=fa=null,ca=0,(qe&6)!==0)throw Error(i(331));var d=qe;if(qe|=4,Pr(c.current),zr(c,c.current,o,a),qe=d,Ju(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Cl,c)}catch{}return!0}finally{A.p=u,f.T=l,sy(e,t)}}function iy(e,t,a){t=xt(a,t),t=Ws(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(El(e,2),Ft(e))}function Oe(e,t,a){if(e.tag===3)iy(e,e,a);else for(;t!==null;){if(t.tag===3){iy(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))){e=xt(a,e),a=dr(2),l=Sa(t,a,2),l!==null&&(rr(a,l,t,e),El(l,2),Ft(l));break}}t=t.return}}function no(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new dj;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(a)||(_s=!0,u.add(a),e=jj.bind(null,e,t,a),t.then(e,e))}function jj(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(Ze===4||Ze===3&&(re&62914560)===re&&300>rt()-Dc?(qe&2)===0&&Zl(e,0):$s|=a,Kl===re&&(Kl=0)),Ft(e)}function dy(e,t){t===0&&(t=ui()),e=Pa(e,t),e!==null&&(El(e,t),Ft(e))}function Nj(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),dy(e,a)}function pj(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(t),dy(e,a)}function bj(e,t){return qn(e,t)}var Pc=null,Dl=null,so=!1,Ic=!1,oo=!1,Ja=0;function Ft(e){e!==Dl&&e.next===null&&(Dl===null?Pc=Dl=e:Dl=Dl.next=e),Ic=!0,so||(so=!0,Sj())}function Ju(e,t){if(!oo&&Ic){oo=!0;do for(var a=!1,l=Pc;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var c=0;else{var o=l.suspendedLanes,d=l.pingedLanes;c=(1<<31-kt(42|e)+1)-1,c&=u&~(o&~d),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,my(l,c))}else c=re,c=Xu(l,l===xe?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Xl(l,c)||(a=!0,my(l,c));l=l.next}while(a);oo=!1}}function qj(){ry()}function ry(){Ic=so=!1;var e=0;Ja!==0&&Uj()&&(e=Ja);for(var t=rt(),a=null,l=Pc;l!==null;){var u=l.next,c=yy(l,t);c===0?(l.next=null,a===null?Pc=u:a.next=u,u===null&&(Dl=a)):(a=l,(e!==0||(c&3)!==0)&&(Ic=!0)),l=u}Pe!==0&&Pe!==5||Ju(e),Ja!==0&&(Ja=0)}function yy(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var o=31-kt(c),d=1<<o,k=u[o];k===-1?((d&a)===0||(d&l)!==0)&&(u[o]=Bk(d,t)):k<=t&&(e.expiredLanes|=d),c&=~d}if(t=xe,a=re,a=Xu(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Sn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Sn(l),Rn(a)){case 2:case 8:a=ai;break;case 32:a=Iu;break;case 268435456:a=li;break;default:a=Iu}return l=ky.bind(null,e),a=qn(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Sn(l),e.callbackPriority=2,e.callbackNode=null,2}function ky(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Mc()&&e.callbackNode!==a)return null;var l=re;return l=Xu(e,e===xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Xr(e,l,t),yy(e,rt()),e.callbackNode!=null&&e.callbackNode===a?ky.bind(null,e):null)}function my(e,t){if(Mc())return null;Xr(e,t,!0)}function Sj(){Kj(function(){(qe&6)!==0?qn(ti,qj):ry()})}function io(){if(Ja===0){var e=Vl;e===0&&(e=Yu,Yu<<=1,(Yu&261888)===0&&(Yu=256)),Ja=e}return Ja}function jy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_u(""+e)}function Ny(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Vj(e,t,a,l,u){if(t==="submit"&&a&&a.stateNode===u){var c=jy((u[lt]||null).action),o=l.submitter;o&&(t=(t=o[lt]||null)?jy(t.formAction):o.getAttribute("formAction"),t!==null&&(c=t,o=null));var d=new ac("action","action",null,l,u);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ja!==0){var k=o?Ny(u,o):new FormData(u);Js(a,{pending:!0,data:k,method:u.method,action:c},null,k)}}else typeof c=="function"&&(d.preventDefault(),k=o?Ny(u,o):new FormData(u),Js(a,{pending:!0,data:k,method:u.method,action:c},c,k))},currentTarget:u}]})}}for(var ro=0;ro<Bn.length;ro++){var yo=Bn[ro],Oj=yo.toLowerCase(),Rj=yo[0].toUpperCase()+yo.slice(1);Tt(Oj,"on"+Rj)}Tt(Ci,"onAnimationEnd"),Tt(Xi,"onAnimationIteration"),Tt(Ei,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Lm,"onTransitionRun"),Tt(zm,"onTransitionStart"),Tt(Fm,"onTransitionCancel"),Tt(Qi,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uu));function py(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],k=d.instance,O=d.currentTarget;if(d=d.listener,k!==c&&u.isPropagationStopped())break e;c=d,u.currentTarget=O;try{c(u)}catch(w){cc(w)}u.currentTarget=null,c=k}else for(o=0;o<l.length;o++){if(d=l[o],k=d.instance,O=d.currentTarget,d=d.listener,k!==c&&u.isPropagationStopped())break e;c=d,u.currentTarget=O;try{c(u)}catch(w){cc(w)}u.currentTarget=null,c=k}}}}function de(e,t){var a=t[hn];a===void 0&&(a=t[hn]=new Set);var l=e+"__bubble";a.has(l)||(by(t,e,2,!1),a.add(l))}function ko(e,t,a){var l=0;t&&(l|=4),by(a,e,l,t)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Yc]){e[Yc]=!0,ri.forEach(function(a){a!=="selectionchange"&&(hj.has(a)||ko(a,!1,e),ko(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yc]||(t[Yc]=!0,ko("selectionchange",!1,t))}}function by(e,t,a,l){switch(Cy(t)){case 2:var u=_j;break;case 8:u=$j;break;default:u=Jo}a=u.bind(null,t,a,e),u=void 0,!Tn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function jo(e,t,a,l,u){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===u)break;if(o===4)for(o=l.return;o!==null;){var k=o.tag;if((k===3||k===4)&&o.stateNode.containerInfo===u)return;o=o.return}for(;d!==null;){if(o=ul(d),o===null)return;if(k=o.tag,k===5||k===6||k===26||k===27){l=c=o;continue e}d=d.parentNode}}l=l.return}Ri(function(){var O=c,w=Gn(a),G=[];e:{var R=vi.get(e);if(R!==void 0){var H=ac,M=e;switch(e){case"keypress":if(ec(a)===0)break e;case"keydown":case"keyup":H=pm;break;case"focusin":M="focus",H=An;break;case"focusout":M="blur",H=An;break;case"beforeblur":case"afterblur":H=An;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=xi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Sm;break;case Ci:case Xi:case Ei:H=om;break;case Qi:H=Om;break;case"scroll":case"scrollend":H=lm;break;case"wheel":H=hm;break;case"copy":case"cut":case"paste":H=dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=wi;break;case"toggle":case"beforetoggle":H=xm}var E=(t&4)!==0,He=!E&&(e==="scroll"||e==="scrollend"),q=E?R!==null?R+"Capture":null:R;E=[];for(var m=O,V;m!==null;){var J=m;if(V=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||V===null||q===null||(J=_l(m,q),J!=null&&E.push(Gu(m,J,V))),He)break;m=m.return}0<E.length&&(R=new H(R,M,null,a,w),G.push({event:R,listeners:E}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",R&&a!==Un&&(M=a.relatedTarget||a.fromElement)&&(ul(M)||M[ll]))break e;if((H||R)&&(R=w.window===w?w:(R=w.ownerDocument)?R.defaultView||R.parentWindow:window,H?(M=a.relatedTarget||a.toElement,H=O,M=M?ul(M):null,M!==null&&(He=S(M),E=M.tag,M!==He||E!==5&&E!==27&&E!==6)&&(M=null)):(H=null,M=O),H!==M)){if(E=xi,J="onMouseLeave",q="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=wi,J="onPointerLeave",q="onPointerEnter",m="pointer"),He=H==null?R:vl(H),V=M==null?R:vl(M),R=new E(J,m+"leave",H,a,w),R.target=He,R.relatedTarget=V,J=null,ul(w)===O&&(E=new E(q,m+"enter",M,a,w),E.target=V,E.relatedTarget=He,J=E),He=J,H&&M)t:{for(E=Hj,q=H,m=M,V=0,J=q;J;J=E(J))V++;J=0;for(var C=m;C;C=E(C))J++;for(;0<V-J;)q=E(q),V--;for(;0<J-V;)m=E(m),J--;for(;V--;){if(q===m||m!==null&&q===m.alternate){E=q;break t}q=E(q),m=E(m)}E=null}else E=null;H!==null&&qy(G,R,H,E,!1),M!==null&&He!==null&&qy(G,He,M,E,!0)}}e:{if(R=O?vl(O):window,H=R.nodeName&&R.nodeName.toLowerCase(),H==="select"||H==="input"&&R.type==="file")var Ne=Di;else if(Zi(R))if(Ai)Ne=Dm;else{Ne=Zm;var Y=Tm}else H=R.nodeName,!H||H.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&Jn(O.elementType)&&(Ne=Di):Ne=Wm;if(Ne&&(Ne=Ne(e,O))){Wi(G,Ne,a,w);break e}Y&&Y(e,R,O),e==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&wn(R,"number",R.value)}switch(Y=O?vl(O):window,e){case"focusin":(Zi(Y)||Y.contentEditable==="true")&&(kl=Y,Pn=O,nu=null);break;case"focusout":nu=Pn=kl=null;break;case"mousedown":In=!0;break;case"contextmenu":case"mouseup":case"dragend":In=!1,Yi(G,a,w);break;case"selectionchange":if(gm)break;case"keydown":case"keyup":Yi(G,a,w)}var ue;if(Ln)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else yl?Ki(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Ji&&a.locale!=="ko"&&(yl||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&yl&&(ue=hi()):(ka=w,Zn="value"in ka?ka.value:ka.textContent,yl=!0)),Y=Bc(O,ye),0<Y.length&&(ye=new fi(ye,e,null,a,w),G.push({event:ye,listeners:Y}),ue?ye.data=ue:(ue=Ti(a),ue!==null&&(ye.data=ue)))),(ue=wm?Jm(e,a):Um(e,a))&&(ye=Bc(O,"onBeforeInput"),0<ye.length&&(Y=new fi("onBeforeInput","beforeinput",null,a,w),G.push({event:Y,listeners:ye}),Y.data=ue)),Vj(G,e,O,a,w)}py(G,t)})}function Gu(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Bc(e,t){for(var a=t+"Capture",l=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=_l(e,a),u!=null&&l.unshift(Gu(e,u,c)),u=_l(e,t),u!=null&&l.push(Gu(e,u,c))),e.tag===3)return l;e=e.return}return[]}function Hj(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qy(e,t,a,l,u){for(var c=t._reactName,o=[];a!==null&&a!==l;){var d=a,k=d.alternate,O=d.stateNode;if(d=d.tag,k!==null&&k===l)break;d!==5&&d!==26&&d!==27||O===null||(k=O,u?(O=_l(a,c),O!=null&&o.unshift(Gu(a,O,k))):u||(O=_l(a,c),O!=null&&o.push(Gu(a,O,k)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var xj=/\r\n?/g,fj=/\u0000|\uFFFD/g;function Sy(e){return(typeof e=="string"?e:""+e).replace(xj,`
`).replace(fj,"")}function Vy(e,t){return t=Sy(t),Sy(e)===t}function he(e,t,a,l,u,c){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||il(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&il(e,""+l);break;case"className":Qu(e,"class",l);break;case"tabIndex":Qu(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qu(e,a,l);break;case"style":Vi(e,l,c);break;case"data":if(t!=="object"){Qu(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_u(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",u.name,u,null),he(e,t,"formEncType",u.formEncType,u,null),he(e,t,"formMethod",u.formMethod,u,null),he(e,t,"formTarget",u.formTarget,u,null)):(he(e,t,"encType",u.encType,u,null),he(e,t,"method",u.method,u,null),he(e,t,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_u(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=It);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=_u(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":de("beforetoggle",e),de("toggle",e),Eu(e,"popover",l);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Eu(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tm.get(a)||a,Eu(e,a,l))}}function No(e,t,a,l,u,c){switch(a){case"style":Vi(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"children":typeof l=="string"?il(e,l):(typeof l=="number"||typeof l=="bigint")&&il(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yi.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),c=e[lt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,u),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Eu(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var o=a[c];if(o!=null)switch(c){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:he(e,t,c,o,a,null)}}u&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var d=c=o=u=null,k=null,O=null;for(l in a)if(a.hasOwnProperty(l)){var w=a[l];if(w!=null)switch(l){case"name":u=w;break;case"type":o=w;break;case"checked":k=w;break;case"defaultChecked":O=w;break;case"value":c=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(137,t));break;default:he(e,t,l,w,a,null)}}pi(e,c,d,k,O,o,u,!1);return;case"select":de("invalid",e),l=o=c=null;for(u in a)if(a.hasOwnProperty(u)&&(d=a[u],d!=null))switch(u){case"value":c=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:he(e,t,u,d,a,null)}t=c,a=o,e.multiple=!!l,t!=null?ol(e,!!l,t,!1):a!=null&&ol(e,!!l,a,!0);return;case"textarea":de("invalid",e),c=u=l=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":u=d;break;case"children":c=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:he(e,t,o,d,a,null)}qi(e,l,u,c);return;case"option":for(k in a)a.hasOwnProperty(k)&&(l=a[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":he(e,t,k,l,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<Uu.length;l++)de(Uu[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(l=a[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:he(e,t,O,l,a,null)}return;default:if(Jn(t)){for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!==void 0&&No(e,t,w,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&he(e,t,d,l,a,null))}function wj(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,o=null,d=null,k=null,O=null,w=null;for(H in a){var G=a[H];if(a.hasOwnProperty(H)&&G!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":k=G;default:l.hasOwnProperty(H)||he(e,t,H,null,l,G)}}for(var R in l){var H=l[R];if(G=a[R],l.hasOwnProperty(R)&&(H!=null||G!=null))switch(R){case"type":c=H;break;case"name":u=H;break;case"checked":O=H;break;case"defaultChecked":w=H;break;case"value":o=H;break;case"defaultValue":d=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,t));break;default:H!==G&&he(e,t,R,H,l,G)}}fn(e,o,d,k,O,w,c,u);return;case"select":H=o=d=R=null;for(c in a)if(k=a[c],a.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":H=k;default:l.hasOwnProperty(c)||he(e,t,c,null,l,k)}for(u in l)if(c=l[u],k=a[u],l.hasOwnProperty(u)&&(c!=null||k!=null))switch(u){case"value":R=c;break;case"defaultValue":d=c;break;case"multiple":o=c;default:c!==k&&he(e,t,u,c,l,k)}t=d,a=o,l=H,R!=null?ol(e,!!a,R,!1):!!l!=!!a&&(t!=null?ol(e,!!a,t,!0):ol(e,!!a,a?[]:"",!1));return;case"textarea":H=R=null;for(d in a)if(u=a[d],a.hasOwnProperty(d)&&u!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:he(e,t,d,null,l,u)}for(o in l)if(u=l[o],c=a[o],l.hasOwnProperty(o)&&(u!=null||c!=null))switch(o){case"value":R=u;break;case"defaultValue":H=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(i(91));break;default:u!==c&&he(e,t,o,u,l,c)}bi(e,R,H);return;case"option":for(var M in a)R=a[M],a.hasOwnProperty(M)&&R!=null&&!l.hasOwnProperty(M)&&(M==="selected"?e.selected=!1:he(e,t,M,null,l,R));for(k in l)R=l[k],H=a[k],l.hasOwnProperty(k)&&R!==H&&(R!=null||H!=null)&&(k==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":he(e,t,k,R,l,H));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in a)R=a[E],a.hasOwnProperty(E)&&R!=null&&!l.hasOwnProperty(E)&&he(e,t,E,null,l,R);for(O in l)if(R=l[O],H=a[O],l.hasOwnProperty(O)&&R!==H&&(R!=null||H!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(i(137,t));break;default:he(e,t,O,R,l,H)}return;default:if(Jn(t)){for(var He in a)R=a[He],a.hasOwnProperty(He)&&R!==void 0&&!l.hasOwnProperty(He)&&No(e,t,He,void 0,l,R);for(w in l)R=l[w],H=a[w],!l.hasOwnProperty(w)||R===H||R===void 0&&H===void 0||No(e,t,w,R,l,H);return}}for(var q in a)R=a[q],a.hasOwnProperty(q)&&R!=null&&!l.hasOwnProperty(q)&&he(e,t,q,null,l,R);for(G in l)R=l[G],H=a[G],!l.hasOwnProperty(G)||R===H||R==null&&H==null||he(e,t,G,R,l,H)}function Oy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jj(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],c=u.transferSize,o=u.initiatorType,d=u.duration;if(c&&d&&Oy(o)){for(o=0,d=u.responseEnd,l+=1;l<a.length;l++){var k=a[l],O=k.startTime;if(O>d)break;var w=k.transferSize,G=k.initiatorType;w&&Oy(G)&&(k=k.responseEnd,o+=w*(k<d?1:(d-O)/(k-O)))}if(--l,t+=8*(c+o)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var po=null,bo=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function Ry(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=null;function Uj(){var e=window.event;return e&&e.type==="popstate"?e===So?!1:(So=e,!0):(So=null,!1)}var Hy=typeof setTimeout=="function"?setTimeout:void 0,Gj=typeof clearTimeout=="function"?clearTimeout:void 0,xy=typeof Promise=="function"?Promise:void 0,Kj=typeof queueMicrotask=="function"?queueMicrotask:typeof xy<"u"?function(e){return xy.resolve(null).then(e).catch(Tj)}:Hy;function Tj(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function fy(e,t){var a=t,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),zl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Ku(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ku(a);for(var c=a.firstChild;c;){var o=c.nextSibling,d=c.nodeName;c[Ql]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=o}}else a==="body"&&Ku(e.ownerDocument.body);a=u}while(a);zl(t)}function wy(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vo(a),Hn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zj(e,t,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function Wj(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gt(e.nextSibling),e===null))return null;return e}function Jy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Oo(e){return e.data==="$?"||e.data==="$~"}function Ro(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dj(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ho=null;function Uy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Gy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ky(e,t,a){switch(t=Cc(a),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Ku(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hn(e)}var Kt=new Map,Ty=new Set;function Xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=A.d;A.d={f:Aj,r:gj,D:Lj,C:zj,L:Fj,m:Mj,X:Ij,S:Pj,M:Yj};function Aj(){var e=na.f(),t=Lc();return e||t}function gj(e){var t=cl(e);t!==null&&t.tag===5&&t.type==="form"?Qd(t):na.r(e)}var Al=typeof document>"u"?null:document;function Zy(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var u=ht(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ty.has(u)||(Ty.add(u),e={rel:e,crossOrigin:a,href:t},l.querySelector(u)===null&&(t=l.createElement("link"),$e(t,"link",e),Ce(t),l.head.appendChild(t)))}}function Lj(e){na.D(e),Zy("dns-prefetch",e,null)}function zj(e,t){na.C(e,t),Zy("preconnect",e,t)}function Fj(e,t,a){na.L(e,t,a);var l=Al;if(l&&e&&t){var u='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ht(a.imageSizes)+'"]')):u+='[href="'+ht(e)+'"]';var c=u;switch(t){case"style":c=gl(e);break;case"script":c=Ll(e)}Kt.has(c)||(e=K({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Kt.set(c,e),l.querySelector(u)!==null||t==="style"&&l.querySelector(Tu(c))||t==="script"&&l.querySelector(Zu(c))||(t=l.createElement("link"),$e(t,"link",e),Ce(t),l.head.appendChild(t)))}}function Mj(e,t){na.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+ht(l)+'"][href="'+ht(e)+'"]',c=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ll(e)}if(!Kt.has(c)&&(e=K({rel:"modulepreload",href:e},t),Kt.set(c,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zu(c)))return}l=a.createElement("link"),$e(l,"link",e),Ce(l),a.head.appendChild(l)}}}function Pj(e,t,a){na.S(e,t,a);var l=Al;if(l&&e){var u=nl(l).hoistableStyles,c=gl(e);t=t||"default";var o=u.get(c);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Tu(c)))d.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Kt.get(c))&&Ho(e,a);var k=o=l.createElement("link");Ce(k),$e(k,"link",e),k._p=new Promise(function(O,w){k.onload=O,k.onerror=w}),k.addEventListener("load",function(){d.loading|=1}),k.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Ec(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},u.set(c,o)}}}function Ij(e,t){na.X(e,t);var a=Al;if(a&&e){var l=nl(a).hoistableScripts,u=Ll(e),c=l.get(u);c||(c=a.querySelector(Zu(u)),c||(e=K({src:e,async:!0},t),(t=Kt.get(u))&&xo(e,t),c=a.createElement("script"),Ce(c),$e(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function Yj(e,t){na.M(e,t);var a=Al;if(a&&e){var l=nl(a).hoistableScripts,u=Ll(e),c=l.get(u);c||(c=a.querySelector(Zu(u)),c||(e=K({src:e,async:!0,type:"module"},t),(t=Kt.get(u))&&xo(e,t),c=a.createElement("script"),Ce(c),$e(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function Wy(e,t,a,l){var u=(u=ce.current)?Xc(u):null;if(!u)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=gl(a.href),a=nl(u).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gl(a.href);var c=nl(u).hoistableStyles,o=c.get(e);if(o||(u=u.ownerDocument||u,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,o),(c=u.querySelector(Tu(e)))&&!c._p&&(o.instance=c,o.state.loading=5),Kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kt.set(e,a),c||Bj(u,e,a,o.state))),t&&l===null)throw Error(i(528,""));return o}if(t&&l!==null)throw Error(i(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(a),a=nl(u).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function gl(e){return'href="'+ht(e)+'"'}function Tu(e){return'link[rel="stylesheet"]['+e+"]"}function Dy(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function Bj(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Ce(t),e.head.appendChild(t))}function Ll(e){return'[src="'+ht(e)+'"]'}function Zu(e){return"script[async]"+e}function Ay(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var u=K({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),$e(l,"style",u),Ec(l,a.precedence,e),t.instance=l;case"stylesheet":u=gl(a.href);var c=e.querySelector(Tu(u));if(c)return t.state.loading|=4,t.instance=c,Ce(c),c;l=Dy(a),(u=Kt.get(u))&&Ho(l,u),c=(e.ownerDocument||e).createElement("link"),Ce(c);var o=c;return o._p=new Promise(function(d,k){o.onload=d,o.onerror=k}),$e(c,"link",l),t.state.loading|=4,Ec(c,a.precedence,e),t.instance=c;case"script":return c=Ll(a.src),(u=e.querySelector(Zu(c)))?(t.instance=u,Ce(u),u):(l=a,(u=Kt.get(c))&&(l=K({},a),xo(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ce(u),$e(u,"link",l),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ec(l,a.precedence,e));return t.instance}function Ec(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,c=u,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)c=d;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qc=null;function gy(e,t,a){if(Qc===null){var l=new Map,u=Qc=new Map;u.set(a,l)}else u=Qc,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var c=a[u];if(!(c[Ql]||c[Ee]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var o=c.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(c):l.set(o,[c])}}return l}function Ly(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Cj(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xj(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gl(l.href),c=t.querySelector(Tu(u));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,Ce(c);return}c=t.ownerDocument||t,l=Dy(l),(u=Kt.get(u))&&Ho(l,u),c=c.createElement("link"),Ce(c);var o=c;o._p=new Promise(function(d,k){o.onload=d,o.onerror=k}),$e(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var fo=0;function Ej(e,t){return e.stylesheets&&e.count===0&&$c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&fo===0&&(fo=62500*Jj());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>fo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _c=null;function $c(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_c=new Map,t.forEach(Qj,e),_c=null,vc.call(e))}function Qj(e,t){if(!(t.state.loading&4)){var a=_c.get(e);if(a)var l=a.get(null);else{a=new Map,_c.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var o=u[c];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}u=t.instance,o=u.getAttribute("data-precedence"),c=a.get(o)||l,c===l&&a.set(null,u),a.set(o,u),this.count++,l=vc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Wu={$$typeof:le,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function vj(e,t,a,l,u,c,o,d,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.hiddenUpdates=Vn(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Fy(e,t,a,l,u,c,o,d,k,O,w,G){return e=new vj(e,t,a,o,k,O,w,G,d),t=1,c===!0&&(t|=24),c=jt(3,null,null,t),e.current=c,c.stateNode=e,t=cs(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:t},is(c),e}function My(e){return e?(e=Nl,e):Nl}function Py(e,t,a,l,u,c){u=My(u),l.context===null?l.context=u:l.pendingContext=u,l=qa(t),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Sa(e,l,t),a!==null&&(it(a,e,t),ku(a,e,t))}function Iy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function wo(e,t){Iy(e,t),(e=e.alternate)&&Iy(e,t)}function Yy(e){if(e.tag===13||e.tag===31){var t=Pa(e,67108864);t!==null&&it(t,e,67108864),wo(e,67108864)}}function By(e){if(e.tag===13||e.tag===31){var t=St();t=On(t);var a=Pa(e,t);a!==null&&it(a,e,t),wo(e,t)}}var en=!0;function _j(e,t,a,l){var u=f.T;f.T=null;var c=A.p;try{A.p=2,Jo(e,t,a,l)}finally{A.p=c,f.T=u}}function $j(e,t,a,l){var u=f.T;f.T=null;var c=A.p;try{A.p=8,Jo(e,t,a,l)}finally{A.p=c,f.T=u}}function Jo(e,t,a,l){if(en){var u=Uo(l);if(u===null)jo(e,t,l,tn,a),Xy(e,l);else if(tN(u,e,t,a,l))l.stopPropagation();else if(Xy(e,l),t&4&&-1<eN.indexOf(e)){for(;u!==null;){var c=cl(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var o=ga(c.pendingLanes);if(o!==0){var d=c;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var k=1<<31-kt(o);d.entanglements[1]|=k,o&=~k}Ft(c),(qe&6)===0&&(Ac=rt()+500,Ju(0))}}break;case 31:case 13:d=Pa(c,2),d!==null&&it(d,c,2),Lc(),wo(c,2)}if(c=Uo(l),c===null&&jo(e,t,l,tn,a),c===u)break;u=c}u!==null&&l.stopPropagation()}else jo(e,t,l,null,a)}}function Uo(e){return e=Gn(e),Go(e)}var tn=null;function Go(e){if(tn=null,e=ul(e),e!==null){var t=S(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tn=e,null}function Cy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lk()){case ti:return 2;case ai:return 8;case Iu:case zk:return 32;case li:return 268435456;default:return 32}default:return 32}}var Ko=!1,Ga=null,Ka=null,Ta=null,Du=new Map,Au=new Map,Za=[],eN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xy(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":Du.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(t.pointerId)}}function gu(e,t,a,l,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[u]},t!==null&&(t=cl(t),t!==null&&Yy(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function tN(e,t,a,l,u){switch(t){case"focusin":return Ga=gu(Ga,e,t,a,l,u),!0;case"dragenter":return Ka=gu(Ka,e,t,a,l,u),!0;case"mouseover":return Ta=gu(Ta,e,t,a,l,u),!0;case"pointerover":var c=u.pointerId;return Du.set(c,gu(Du.get(c)||null,e,t,a,l,u)),!0;case"gotpointercapture":return c=u.pointerId,Au.set(c,gu(Au.get(c)||null,e,t,a,l,u)),!0}return!1}function Ey(e){var t=ul(e.target);if(t!==null){var a=S(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,ii(e.priority,function(){By(a)});return}}else if(t===31){if(t=x(a),t!==null){e.blockedOn=t,ii(e.priority,function(){By(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function an(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Uo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Un=l,a.target.dispatchEvent(l),Un=null}else return t=cl(a),t!==null&&Yy(t),e.blockedOn=a,!1;t.shift()}return!0}function Qy(e,t,a){an(e)&&a.delete(t)}function aN(){Ko=!1,Ga!==null&&an(Ga)&&(Ga=null),Ka!==null&&an(Ka)&&(Ka=null),Ta!==null&&an(Ta)&&(Ta=null),Du.forEach(Qy),Au.forEach(Qy)}function ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,aN)))}var un=null;function vy(e){un!==e&&(un=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){un===e&&(un=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],u=e[t+2];if(typeof l!="function"){if(Go(l||a)===null)continue;break}var c=cl(a);c!==null&&(e.splice(t,3),t-=3,Js(c,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function zl(e){function t(k){return ln(k,e)}Ga!==null&&ln(Ga,e),Ka!==null&&ln(Ka,e),Ta!==null&&ln(Ta,e),Du.forEach(t),Au.forEach(t);for(var a=0;a<Za.length;a++){var l=Za[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Ey(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],c=a[l+1],o=u[lt]||null;if(typeof c=="function")o||vy(a);else if(o){var d=null;if(c&&c.hasAttribute("formAction")){if(u=c,o=c[lt]||null)d=o.formAction;else if(Go(u)!==null)continue}else d=o.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),vy(a)}}}function _y(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(o){return u=o})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function To(e){this._internalRoot=e}cn.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var a=t.current,l=St();Py(a,l,e,t,null,null)},cn.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Py(e.current,2,null,e,null,null),Lc(),t[ll]=null}};function cn(e){this._internalRoot=e}cn.prototype.unstable_scheduleHydration=function(e){if(e){var t=oi();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Za.length&&t!==0&&t<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Ey(e)}};var $y=r.version;if($y!=="19.2.6")throw Error(i(527,$y,"19.2.6"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=b(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var lN={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:f,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nn.isDisabled&&nn.supportsFiber)try{Cl=nn.inject(lN),yt=nn}catch{}}return zu.createRoot=function(e,t){if(!N(e))throw Error(i(299));var a=!1,l="",u=nr,c=sr,o=or;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Fy(e,1,!1,null,null,a,l,null,u,c,o,_y),e[ll]=t.current,mo(e),new To(t)},zu.hydrateRoot=function(e,t,a){if(!N(e))throw Error(i(299));var l=!1,u="",c=nr,o=sr,d=or,k=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),t=Fy(e,1,!0,t,a??null,l,u,k,c,o,d,_y),t.context=My(null),a=t.current,l=St(),l=On(l),u=qa(l),u.callback=null,Sa(a,u,l),a=l,t.current.lanes=a,El(t,a),Ft(t),e[ll]=t.current,mo(e),new cn(t)},zu.version="19.2.6",zu}var ik;function kN(){if(ik)return Do.exports;ik=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Do.exports=yN(),Do.exports}var mN=kN();const Pu = [{
    label: "SUN",
    bg: "#45c4c0",
    fg: "#2c241c",
    glyph: "sun"
  }, {
    label: "3",
    bg: "#f5a04a",
    fg: "#2c241c",
    glyph: "three"
  }, {
    label: "LEAF",
    bg: "#b08ae8",
    fg: "#2c241c",
    glyph: "leaf"
  }, {
    label: "HOME",
    bg: "#f7b0c8",
    fg: "#543b78",
    glyph: "home"
  }],
  Co = {
    star: {
      bg: "#c9a0e8",
      fg: "#f6c431"
    },
    heart: {
      bg: "#6ec4ea",
      fg: "#f2789f"
    },
    sun: {
      bg: "#45c4c0",
      fg: "#f6c431"
    },
    daily: {
      bg: "#f08a78",
      fg: "#4aa0d8"
    },
    music: {
      bg: "#f5a04a",
      fg: "#1aa39a"
    },
    flower: {
      bg: "#f6d45a",
      fg: "#f278a8"
    },
    cloud: {
      bg: "#f5a0c4",
      fg: "#5eb7e4"
    },
    leaf: {
      bg: "#b08ae8",
      fg: "#5eae68"
    },
    smile: {
      bg: "#f7b0c8",
      fg: "#f6c431"
    }
  },
  jN = ["always", "usually", "sometimes", "never"],
  Xo = [{
    id: "star",
    boardIndex: 0,
    name: "Star Sorter",
    short: "Sort",
    kind: "read",
    minutes: 8,
    blurb: "Choose the sentence with the adverb in the right place.",
    instruction: "Frequency adverbs have a home. They go before the main verb. They go after am, is and are. Choose the correct sentence.",
    example: "I always make the bed.  ·  I am usually tired.",
    reward: "You know where frequency adverbs sit.",
    grammar: "position",
    format: "choice",
    items: [{
      id: "star-1",
      prompt: "always + make the bed",
      success: "Yes. Always goes before make.",
      options: [{
        text: "I always make the bed.",
        ok: !0,
        why: ""
      }, {
        text: "I make always the bed.",
        ok: !1,
        why: "Do not split the verb. Always goes before make."
      }, {
        text: "I always am make the bed.",
        ok: !1,
        why: "You do not need am. Say: I always make the bed."
      }]
    }, {
      id: "star-2",
      prompt: "be + usually",
      success: "Yes. With am, usually goes after.",
      options: [{
        text: "I usually am tired after school.",
        ok: !1,
        why: "With am, the adverb goes after: I am usually tired."
      }, {
        text: "I am usually tired after school.",
        ok: !0,
        why: ""
      }, {
        text: "I am tired usually after school.",
        ok: !1,
        why: "Keep usually next to am: I am usually tired."
      }]
    }, {
      id: "star-3",
      prompt: "often + play chess",
      success: "Yes. Often goes before play.",
      options: [{
        text: "I play often chess.",
        ok: !1,
        why: "Often goes before the verb, not after it."
      }, {
        text: "I often play chess.",
        ok: !0,
        why: ""
      }, {
        text: "I often am play chess.",
        ok: !1,
        why: "You do not need am. Say: I often play chess."
      }]
    }, {
      id: "star-4",
      prompt: "never + wash up",
      success: "Yes. Never goes before washes, and one negative is enough.",
      options: [{
        text: "My brother never washes up.",
        ok: !0,
        why: ""
      }, {
        text: "My brother washes never up.",
        ok: !1,
        why: "Never goes before the verb: never washes."
      }, {
        text: "My brother don't never wash up.",
        ok: !1,
        why: "Never is already negative. He/she uses doesn't, not don't."
      }]
    }, {
      id: "star-5",
      prompt: "sometimes + watch a film",
      success: "Yes. Sometimes goes before watch, and we takes no -s.",
      options: [{
        text: "We sometimes watch a film.",
        ok: !0,
        why: ""
      }, {
        text: "We watch sometimes a film.",
        ok: !1,
        why: "Sometimes goes before watch."
      }, {
        text: "We sometimes watches a film.",
        ok: !1,
        why: "After we, use watch — no -s."
      }]
    }, {
      id: "star-6",
      prompt: "is + always",
      success: "Yes. With is, always goes after.",
      options: [{
        text: "Dad always is happy when I tidy up.",
        ok: !1,
        why: "With is, the adverb goes after: Dad is always happy."
      }, {
        text: "Dad is always happy when I tidy up.",
        ok: !0,
        why: ""
      }, {
        text: "Dad is happy always when I tidy up.",
        ok: !1,
        why: "Keep always next to is."
      }]
    }, {
      id: "star-7",
      prompt: "usually + dust",
      success: "Yes. Usually before dusts, and Mum takes -s.",
      options: [{
        text: "Mum dusts usually the living room.",
        ok: !1,
        why: "Usually goes before dusts."
      }, {
        text: "Mum usually dust the living room.",
        ok: !1,
        why: "After Mum, use dusts."
      }, {
        text: "Mum usually dusts the living room.",
        ok: !0,
        why: ""
      }]
    }, {
      id: "star-8",
      prompt: "is + never",
      success: "Yes. Never goes after is.",
      options: [{
        text: "The kitchen never is dirty.",
        ok: !1,
        why: "With is, never goes after: is never."
      }, {
        text: "The kitchen is dirty never.",
        ok: !1,
        why: "Do not put never at the end here."
      }, {
        text: "The kitchen is never dirty.",
        ok: !0,
        why: ""
      }]
    }]
  }, {
    id: "heart",
    boardIndex: 1,
    name: "Heart Habits",
    short: "Family",
    kind: "read",
    minutes: 8,
    blurb: "Read a family story and choose the adverb that matches the clue.",
    instruction: "Read about the Hart family. The words after the gap tell you the adverb. Choose the best word. Remember: after am, is and are, the adverb comes next.",
    example: "every morning → always    ·    most days → usually",
    reward: "You can hear the difference between always and sometimes.",
    grammar: "list",
    format: "passage",
    lead: "The Hart family lives in Habit House.",
    segments: [{
      kind: "text",
      text: "Mia "
    }, {
      kind: "gap",
      id: "heart-1",
      options: jN,
      answer: "always",
      hint: "Every morning means 100%. That is always."
    }, {
      kind: "text",
      text: " makes the bed. She does it every morning. Leo "
    }, {
      kind: "gap",
      id: "heart-2",
      options: ["always", "usually", "hardly ever", "never"],
      answer: "usually",
      hint: "Most days, but not every day — usually."
    }, {
      kind: "text",
      text: " tidies his room. He does it on most days, but not every day. Dad "
    }, {
      kind: "gap",
      id: "heart-3",
      options: ["often", "never", "hardly ever", "always"],
      answer: "often",
      hint: "Monday, Wednesday and Friday is often — not every day, not never."
    }, {
      kind: "text",
      text: " plays chess. He plays on Monday, Wednesday and Friday. Mum "
    }, {
      kind: "gap",
      id: "heart-4",
      options: ["always", "often", "sometimes", "never"],
      answer: "sometimes",
      hint: "About half the time — sometimes."
    }, {
      kind: "text",
      text: " watches a film on Sunday. About half the time, not every Sunday. Grandma "
    }, {
      kind: "gap",
      id: "heart-5",
      options: ["sometimes", "hardly ever", "never", "usually"],
      answer: "never",
      hint: "She does not like them at all. That is never."
    }, {
      kind: "text",
      text: " plays computer games. She does not like them. Now look at am, is and are. The children are "
    }, {
      kind: "gap",
      id: "heart-6",
      options: ["always", "sometimes", "never", "hardly ever"],
      answer: "always",
      hint: "Every time, and the word goes after are: are always."
    }, {
      kind: "text",
      text: " happy to help. They want to help every time. Leo is "
    }, {
      kind: "gap",
      id: "heart-7",
      options: ["always", "usually", "never", "sometimes"],
      answer: "usually",
      hint: "Most Mondays — usually, after is."
    }, {
      kind: "text",
      text: " tired on Monday. Most Mondays, yes. The kitchen is "
    }, {
      kind: "gap",
      id: "heart-8",
      options: ["always", "often", "sometimes", "never"],
      answer: "never",
      hint: "Mia sweeps every evening, so the kitchen is never dirty."
    }, {
      kind: "text",
      text: " dirty at night, because Mia sweeps the floor every evening."
    }]
  }, {
    id: "sun",
    boardIndex: 2,
    name: "Sunny Schedule",
    short: "Match",
    kind: "read",
    minutes: 8,
    blurb: "Match each clue to a frequency expression.",
    instruction: "Read the clue. Choose the expression that means the same thing. Expressions go at the end or the start of a sentence — not before the verb like always.",
    example: "Tuesday and Friday → twice a week",
    reward: "You can read a clue and name the expression.",
    grammar: "list",
    format: "chips",
    items: [{
      id: "sun-1",
      prompt: "Mia sweeps the floor on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.",
      options: ["every day", "once a week", "twice a day", "three times a month"],
      answer: "every day",
      hint: "Seven days — that is every day.",
      success: "Yes. Seven days a week is every day."
    }, {
      id: "sun-2",
      prompt: "Leo washes his face in the morning and again at night.",
      options: ["twice a day", "twice a week", "every weekend", "once a month"],
      answer: "twice a day",
      hint: "Morning and night are two times in one day. Say twice a day.",
      success: "Yes. Morning and night — twice a day."
    }, {
      id: "sun-3",
      prompt: "Dad sweeps the floor every Sunday. He does not sweep on other days.",
      options: ["once a week", "every day", "three times a week", "twice a day"],
      answer: "once a week",
      hint: "Every Sunday means one time each week.",
      success: "Yes. Every Sunday is once a week."
    }, {
      id: "sun-4",
      prompt: "Mum plays chess on Tuesday and Friday.",
      options: ["twice a week", "twice a day", "once a month", "every day"],
      answer: "twice a week",
      hint: "Two days in the week — twice a week.",
      success: "Yes. Tuesday and Friday — twice a week."
    }, {
      id: "sun-5",
      prompt: "Mia dusts the living room on Monday, Wednesday and Saturday.",
      options: ["three times a week", "three times a month", "once a week", "every weekend"],
      answer: "three times a week",
      hint: "Three different days in one week.",
      success: "Yes. Three days — three times a week."
    }, {
      id: "sun-6",
      prompt: "The family watches a film every Saturday and every Sunday.",
      options: ["every weekend", "every day", "once a month", "twice a day"],
      answer: "every weekend",
      hint: "Saturday and Sunday are the weekend.",
      success: "Yes. Saturday and Sunday — every weekend."
    }, {
      id: "sun-7",
      prompt: "Grandma reads one comic on the first day of the month. Then she waits until next month.",
      options: ["once a month", "once a week", "three times a month", "every day"],
      answer: "once a month",
      hint: "One time each month — once a month.",
      success: "Yes. One comic a month is once a month."
    }, {
      id: "sun-8",
      prompt: "Leo tidies his room on the 5th, the 15th and the 25th.",
      options: ["three times a month", "three times a week", "once a month", "every weekend"],
      answer: "three times a month",
      hint: "Three dates in the month — three times a month.",
      success: "Yes. Three dates — three times a month."
    }]
  }, {
    id: "daily",
    boardIndex: 3,
    name: "Daily Stars",
    short: "Diary",
    kind: "read",
    minutes: 8,
    blurb: "Complete Sam’s diary with adverbs and expressions.",
    instruction: "Sam’s diary is missing words. Use the clue in the same sentence. Some gaps need an adverb (always, usually…). Some need an expression (every day, twice a week…).",
    example: "on Tuesday and Thursday → twice a week",
    reward: "You can mix adverbs and expressions in a real diary.",
    grammar: "examples",
    format: "passage",
    lead: "Sam’s week",
    segments: [{
      kind: "text",
      text: "Monday. I "
    }, {
      kind: "gap",
      id: "daily-1",
      options: ["always", "sometimes", "never", "hardly ever"],
      answer: "always",
      hint: "Every morning = always, before the verb."
    }, {
      kind: "text",
      text: " make the bed. I do it every morning. I walk to school "
    }, {
      kind: "gap",
      id: "daily-2",
      options: ["every day", "once a week", "twice a day", "three times a month"],
      answer: "every day",
      hint: "Monday to Sunday is every day. The expression goes at the end."
    }, {
      kind: "text",
      text: ". I do this seven days a week. Tuesday. I "
    }, {
      kind: "gap",
      id: "daily-3",
      options: ["usually", "never", "always", "hardly ever"],
      answer: "usually",
      hint: "Most days — usually."
    }, {
      kind: "text",
      text: " tidy up after school. Most days, yes. I play chess "
    }, {
      kind: "gap",
      id: "daily-4",
      options: ["twice a week", "once a week", "every day", "three times a month"],
      answer: "twice a week",
      hint: "Tuesday and Thursday are two days. Say twice a week."
    }, {
      kind: "text",
      text: " — on Tuesday and Thursday. Wednesday. I "
    }, {
      kind: "gap",
      id: "daily-5",
      options: ["sometimes", "always", "never", "usually"],
      answer: "sometimes",
      hint: "Some Wednesdays, not most — sometimes."
    }, {
      kind: "text",
      text: " watch a film, but only on some Wednesdays, not most. I "
    }, {
      kind: "gap",
      id: "daily-6",
      options: ["never", "sometimes", "often", "always"],
      answer: "never",
      hint: "A house rule: not before homework. That is never."
    }, {
      kind: "text",
      text: " play computer games before homework. That is a house rule. Thursday. My desk is "
    }, {
      kind: "gap",
      id: "daily-7",
      options: ["always", "never", "sometimes", "hardly ever"],
      answer: "always",
      hint: "After is, and every day — is always."
    }, {
      kind: "text",
      text: " clean. I like it that way every day. I sweep the floor "
    }, {
      kind: "gap",
      id: "daily-8",
      options: ["once a week", "twice a day", "every day", "three times a month"],
      answer: "once a week",
      hint: "Every Thursday is one time each week."
    }, {
      kind: "text",
      text: ", every Thursday evening."
    }]
  }, {
    id: "music",
    boardIndex: 4,
    name: "Music & Moves",
    short: "Write",
    kind: "write",
    minutes: 10,
    blurb: "Write eight true sentences about your free time.",
    instruction: "Write about your real free time. Use Present Simple. Use the frequency word the card asks for. Tap a word chip if you need the spelling.",
    example: "I usually listen to music after school.",
    reward: "You wrote about your free time in Present Simple.",
    grammar: "examples",
    format: "write",
    items: [{
      id: "music-1",
      prompt: "How often do you play computer games? Use always, usually, often, sometimes, never or hardly ever.",
      example: "I sometimes play computer games after homework.",
      model: "I sometimes play computer games after homework.",
      freq: "adverb",
      keys: ["computer", "game"],
      keyHint: "Name the activity: play computer games.",
      channel: "write"
    }, {
      id: "music-2",
      prompt: "How often do you listen to music? Use a frequency adverb.",
      example: "I often listen to music in the evening.",
      model: "I often listen to music in the evening.",
      freq: "adverb",
      keys: ["music"],
      keyHint: "Include music.",
      channel: "write"
    }, {
      id: "music-3",
      prompt: "How often do you watch a film or TV? Use a frequency adverb.",
      example: "I usually watch a film on Friday.",
      model: "I usually watch a film on Friday.",
      freq: "adverb",
      keys: ["film", "movie", "tv"],
      keyHint: "Include film, movie or TV.",
      channel: "write"
    }, {
      id: "music-4",
      prompt: "How often do you read a comic or a book? Use every day, once a week, twice a week… — or never if you do not read.",
      example: "I read a comic twice a week.",
      model: "I read a comic twice a week.",
      freq: "any",
      keys: ["comic", "book", "read"],
      keyHint: "Include read, comic or book.",
      channel: "write"
    }, {
      id: "music-5",
      prompt: "How often do you play chess? Use once, twice, every… — or never if you do not play.",
      example: "I play chess once a week.",
      model: "I play chess once a week.",
      freq: "any",
      keys: ["chess"],
      keyHint: "Include chess.",
      channel: "write"
    }, {
      id: "music-6",
      prompt: "How often do you do sport or ride a bike? Use an adverb or an expression. If you never do it, say never.",
      example: "I ride my bike three times a week.",
      model: "I sometimes ride my bike after school.",
      freq: "any",
      keys: ["sport", "bike", "bicycle", "football", "swim", "run", "dance", "tennis", "basketball"],
      keyHint: "Name a sport, a bike, swimming, football…",
      channel: "write"
    }, {
      id: "music-7",
      prompt: "How often do you meet friends? Use an adverb or an expression.",
      example: "I meet friends every weekend.",
      model: "I meet friends every weekend.",
      freq: "any",
      keys: ["friend"],
      keyHint: "Include friend or friends.",
      channel: "write"
    }, {
      id: "music-8",
      prompt: "How often do you draw, sing, or play an instrument? Use an adverb or an expression.",
      example: "I hardly ever play the guitar.",
      model: "I sometimes draw after dinner.",
      freq: "any",
      keys: ["draw", "sing", "guitar", "piano", "instrument", "paint", "drum", "violin", "music"],
      keyHint: "Name drawing, singing, music or an instrument.",
      channel: "write"
    }]
  }, {
    id: "flower",
    boardIndex: 5,
    name: "Flower Questions",
    short: "Ask",
    kind: "write",
    minutes: 10,
    blurb: "Write eight How often questions. Watch do and does.",
    instruction: "Write a full question for each card. Start with How often. Use do with you. Use does with he, she, Mum, Dad or a friend. After do/does, the verb has no -s. End with a question mark.",
    example: "How often do you make the bed?",
    reward: "You can ask How often questions.",
    grammar: "questions",
    format: "question",
    items: [{
      id: "flower-1",
      prompt: "you / make the bed",
      example: "How often do you make the bed?",
      model: "How often do you make the bed?",
      spec: {
        helper: "do",
        subjects: ["you"],
        subjectHint: "Ask about you.",
        verbs: ["make"],
        verbS: ["makes"],
        verbHint: "Use the verb make.",
        extras: ["bed"],
        extraHint: "Include the bed."
      }
    }, {
      id: "flower-2",
      prompt: "your mum / wash up",
      example: "How often does your mum wash up?",
      model: "How often does your mum wash up?",
      spec: {
        helper: "does",
        subjects: ["mum", "mom", "mother"],
        subjectHint: "Ask about your mum (or mom / mother).",
        verbs: ["wash", "washing"],
        verbS: ["washes"],
        verbHint: "Use wash up or wash the dishes."
      }
    }, {
      id: "flower-3",
      prompt: "your friend / play computer games",
      example: "How often does your friend play computer games?",
      model: "How often does your friend play computer games?",
      spec: {
        helper: "either",
        subjects: ["friend"],
        subjectHint: "Ask about your friend.",
        verbs: ["play"],
        verbS: ["plays"],
        verbHint: "Use the base verb play.",
        extras: ["game"],
        extraHint: "Include computer games."
      }
    }, {
      id: "flower-4",
      prompt: "you / read a comic",
      example: "How often do you read a comic?",
      model: "How often do you read a comic?",
      spec: {
        helper: "do",
        subjects: ["you"],
        subjectHint: "Ask about you.",
        verbs: ["read"],
        verbS: ["reads"],
        verbHint: "Use the verb read.",
        extras: ["comic", "book"],
        extraHint: "Include a comic or a book."
      }
    }, {
      id: "flower-5",
      prompt: "your dad / watch a film",
      example: "How often does your dad watch a film?",
      model: "How often does your dad watch a film?",
      spec: {
        helper: "does",
        subjects: ["dad", "father"],
        subjectHint: "Ask about your dad or father.",
        verbs: ["watch"],
        verbS: ["watches"],
        verbHint: "Use the base verb watch.",
        extras: ["film", "movie", "tv"],
        extraHint: "Include a film, a movie or TV."
      }
    }, {
      id: "flower-6",
      prompt: "you / tidy up",
      example: "How often do you tidy up?",
      model: "How often do you tidy up?",
      spec: {
        helper: "do",
        subjects: ["you"],
        subjectHint: "Ask about you.",
        verbs: ["tidy"],
        verbS: ["tidies"],
        verbHint: "Use tidy."
      }
    }, {
      id: "flower-7",
      prompt: "your brother, sister or friend / play chess",
      example: "How often does your brother play chess?",
      model: "How often does your brother play chess?",
      spec: {
        helper: "does",
        subjects: ["brother", "sister", "friend", "dad", "mum"],
        subjectHint: "Ask about your brother, sister or a friend.",
        verbs: ["play"],
        verbS: ["plays"],
        verbHint: "Use the base verb play.",
        extras: ["chess"],
        extraHint: "Include chess."
      }
    }, {
      id: "flower-8",
      prompt: "you / sweep the floor",
      example: "How often do you sweep the floor?",
      model: "How often do you sweep the floor?",
      spec: {
        helper: "do",
        subjects: ["you"],
        subjectHint: "Ask about you.",
        verbs: ["sweep"],
        verbS: ["sweeps"],
        verbHint: "Use the verb sweep.",
        extras: ["floor", "sweep"],
        extraHint: "Include sweep."
      }
    }]
  }, {
    id: "cloud",
    boardIndex: 6,
    name: "Cloud Compare",
    short: "Compare",
    kind: "write",
    minutes: 10,
    blurb: "Compare eight pairs with more often or less often.",
    instruction: "Write one sentence for each pair. Use more often than or less often than. Either activity can come first — say what is true for you.",
    example: "I play computer games more often than I read a comic.",
    reward: "You can compare habits with more often and less often.",
    grammar: "questions",
    format: "compare",
    items: [{
      id: "cloud-1",
      left: "play computer games",
      right: "read a comic",
      keysA: ["computer", "video game"],
      keysB: ["comic", "book"],
      hintA: "Mention computer games.",
      hintB: "Mention a comic or a book."
    }, {
      id: "cloud-2",
      left: "watch a film",
      right: "play chess",
      keysA: ["film", "movie", "tv"],
      keysB: ["chess"],
      hintA: "Mention a film or TV.",
      hintB: "Mention chess."
    }, {
      id: "cloud-3",
      left: "make the bed",
      right: "sweep the floor",
      keysA: ["bed"],
      keysB: ["sweep"],
      hintA: "Mention the bed.",
      hintB: "Mention sweep."
    }, {
      id: "cloud-4",
      left: "tidy up",
      right: "dust",
      keysA: ["tidy"],
      keysB: ["dust"],
      hintA: "Mention tidy.",
      hintB: "Mention dust."
    }, {
      id: "cloud-5",
      left: "listen to music",
      right: "watch a film",
      keysA: ["music"],
      keysB: ["film", "movie", "tv"],
      hintA: "Mention music.",
      hintB: "Mention a film or TV."
    }, {
      id: "cloud-6",
      left: "wash up",
      right: "make the bed",
      keysA: ["wash"],
      keysB: ["bed"],
      hintA: "Mention wash up or washing.",
      hintB: "Mention the bed."
    }, {
      id: "cloud-7",
      left: "play chess",
      right: "play computer games",
      keysA: ["chess"],
      keysB: ["computer", "video game"],
      hintA: "Mention chess.",
      hintB: "Mention computer games."
    }, {
      id: "cloud-8",
      left: "read a comic",
      right: "tidy up",
      keysA: ["comic", "book"],
      keysB: ["tidy"],
      hintA: "Mention a comic or a book.",
      hintB: "Mention tidy."
    }]
  }, {
    id: "leaf",
    boardIndex: 7,
    name: "Leaf Talk",
    short: "Speak",
    kind: "speak",
    minutes: 10,
    blurb: "Answer eight How often questions. Speak or type.",
    instruction: "Answer each question. Speak, then check the words — or type if there is no microphone. A short answer is fine: Every day. Twice a week. A full sentence is fine too.",
    example: "I usually make the bed.  ·  Every day.",
    reward: "You answered like a real conversation.",
    grammar: "questions",
    format: "speak",
    items: [{
      id: "leaf-1",
      prompt: "How often do you make the bed?",
      example: "I usually make the bed.",
      model: "I usually make the bed.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-2",
      prompt: "How often do you wash up?",
      example: "Twice a week.",
      model: "I sometimes wash up.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-3",
      prompt: "How often do you tidy up?",
      example: "I tidy up every weekend.",
      model: "I tidy up every weekend.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-4",
      prompt: "How often do you sweep the floor or dust?",
      example: "I hardly ever dust.",
      model: "I hardly ever dust.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-5",
      prompt: "How often do you play computer games?",
      example: "I often play computer games.",
      model: "I often play computer games.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-6",
      prompt: "How often do you watch a film?",
      example: "Every weekend.",
      model: "I watch a film every weekend.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-7",
      prompt: "How often do you read a comic?",
      example: "I never read a comic.",
      model: "I sometimes read a comic.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }, {
      id: "leaf-8",
      prompt: "How often do you play chess?",
      example: "Once a month.",
      model: "I play chess once a month.",
      freq: "any",
      allowShort: !0,
      channel: "speak"
    }]
  }, {
    id: "smile",
    boardIndex: 8,
    name: "Smile Stories",
    short: "My week",
    kind: "speak",
    minutes: 10,
    blurb: "Say eight true sentences. A different frequency word each time.",
    instruction: "Each card asks for one frequency word. Say a true sentence, or type it. Use the word on the card — not a different one.",
    example: "I always make the bed in the morning.",
    reward: "You told the truth about your week.",
    grammar: "examples",
    format: "speak",
    items: [{
      id: "smile-1",
      prompt: "Say something you always do in the morning.",
      example: "I always make the bed in the morning.",
      model: "I always make the bed in the morning.",
      freq: "adverb",
      allOf: ["always"],
      allHint: "This card needs the word always.",
      channel: "speak"
    }, {
      id: "smile-2",
      prompt: "Say something you usually do after school.",
      example: "I usually tidy up after school.",
      model: "I usually tidy up after school.",
      freq: "adverb",
      allOf: ["usually"],
      allHint: "This card needs the word usually.",
      channel: "speak"
    }, {
      id: "smile-3",
      prompt: "Say a chore you often do. Name the chore: make the bed, wash up, tidy up, dust, sweep or clean.",
      example: "I often wash up after dinner.",
      model: "I often wash up after dinner.",
      freq: "adverb",
      allOf: ["often"],
      allHint: "This card needs the word often.",
      keys: ["bed", "wash", "tidy", "dust", "sweep", "clean", "shoe"],
      keyHint: "Name a chore: bed, wash up, tidy, dust, sweep or clean.",
      channel: "speak"
    }, {
      id: "smile-4",
      prompt: "Say a free-time activity you sometimes do.",
      example: "I sometimes read a comic.",
      model: "I sometimes read a comic.",
      freq: "adverb",
      allOf: ["sometimes"],
      allHint: "This card needs the word sometimes.",
      keys: ["comic", "film", "chess", "computer", "game", "music", "sport", "bike", "draw", "friend", "tv", "book", "swim"],
      keyHint: "Name a free-time activity: a comic, a film, chess, games, music…",
      channel: "speak"
    }, {
      id: "smile-5",
      prompt: "Say something you never do on a school day.",
      example: "I never play computer games on a school day.",
      model: "I never play computer games on a school day.",
      freq: "adverb",
      allOf: ["never"],
      allHint: "This card needs the word never.",
      channel: "speak"
    }, {
      id: "smile-6",
      prompt: "Say something you do every day.",
      example: "I make the bed every day.",
      model: "I make the bed every day.",
      freq: "any",
      allOf: ["every day"],
      allHint: "Use the expression every day.",
      channel: "speak"
    }, {
      id: "smile-7",
      prompt: "Say something you do twice a week.",
      example: "I play chess twice a week.",
      model: "I play chess twice a week.",
      freq: "any",
      allOf: ["twice a week"],
      allHint: "Use the expression twice a week.",
      channel: "speak"
    }, {
      id: "smile-8",
      prompt: "Say something you do once a month, or something you hardly ever do.",
      example: "I hardly ever dust.",
      model: "I hardly ever dust.",
      freq: "any",
      keys: ["once a month", "hardly ever"],
      keyHint: "Use once a month or hardly ever.",
      channel: "speak"
    }]
  }],
  Mt = [{
    id: "bonus-1",
    wrong: "I always am happy on Saturday.",
    hint: "With am, the adverb goes after am.",
    model: "I am always happy on Saturday.",
    rule: "be-after"
  }, {
    id: "bonus-2",
    wrong: "She play chess twice a week.",
    hint: "After she, the verb needs -s. Keep twice a week.",
    model: "She plays chess twice a week.",
    rule: "she-plays"
  }, {
    id: "bonus-3",
    wrong: "We wash usually up.",
    hint: "Usually goes before the main verb.",
    model: "We usually wash up.",
    rule: "usually-before"
  }, {
    id: "bonus-4",
    wrong: "How often you tidy up?",
    hint: "A question needs do or does.",
    model: "How often do you tidy up?",
    rule: "how-often-do"
  }, {
    id: "bonus-5",
    wrong: "He don't never dust.",
    hint: "Never is already negative. He uses doesn't, not don't.",
    model: "He never dusts.",
    rule: "never-dust"
  }, {
    id: "bonus-6",
    wrong: "They watches a film every weekend.",
    hint: "After they, there is no -s.",
    model: "They watch a film every weekend.",
    rule: "they-watch"
  }, {
    id: "bonus-7",
    wrong: "Mum is often makes the bed.",
    hint: "Do not use is and makes together.",
    model: "Mum often makes the bed.",
    rule: "no-be-verb"
  }, {
    id: "bonus-8",
    wrong: "I read a comic one time a week.",
    hint: "The expression is once a week, not one time.",
    model: "I read a comic once a week.",
    rule: "once-a-week"
  }],
  rn = [{
    id: "final-1",
    prompt: "A chore at home. Use always, usually, often, sometimes, never or hardly ever.",
    example: "I always make the bed.",
    model: "I always make the bed.",
    mode: "habit",
    freq: "adverb",
    keys: ["bed", "wash", "tidy", "dust", "sweep", "clean", "shoe", "car"],
    keyHint: "Name a chore: make the bed, wash up, tidy up, dust, sweep the floor or clean."
  }, {
    id: "final-2",
    prompt: "A free-time activity. Use a frequency adverb.",
    example: "I often play computer games.",
    model: "I often play computer games.",
    mode: "habit",
    freq: "adverb",
    keys: ["comic", "film", "chess", "computer", "game", "music", "sport", "bike", "draw", "friend", "tv", "book", "swim", "football"],
    keyHint: "Name a free-time activity: a film, chess, computer games, music, a comic…"
  }, {
    id: "final-3",
    prompt: "Something you really do. Use every day, once a week, twice a week, twice a day or three times a month.",
    example: "I play chess twice a week.",
    model: "I read a comic once a week.",
    mode: "habit",
    freq: "expression"
  }, {
    id: "final-4",
    prompt: "Use am, is or are, and put a frequency adverb after it.",
    example: "I am usually tired on Monday. / My room is always tidy.",
    model: "I am usually tired after school.",
    mode: "habit",
    freq: "be"
  }, {
    id: "final-5",
    prompt: "Write a How often question about a chore, then answer it in the same box.",
    example: "How often do you wash up? I usually wash up.",
    model: "How often do you wash up? I usually wash up.",
    mode: "qa"
  }],
  Mo = ["always", "usually", "often", "sometimes", "hardly ever", "never", "every day", "once a week", "twice a week", "twice a day", "three times a month", "every weekend"],
  NN = ["make the bed", "wash up", "tidy up", "dust", "sweep the floor", "read a comic", "watch a film", "play chess", "play computer games", "listen to music"],
  pN = ["more often than", "less often than", "I", "than"];

function oa(n) {
  const r = Xo.find(y => y.id === n);
  if (!r) throw new Error(`Unknown mission ${n}`);
  return r
}

function bN(n) {
  return n.format === "passage" ? n.segments.filter(r => r.kind === "gap").map(r => r.id) : n.items.map(r => r.id)
}

function Nk(n) {
  const r = {
    read: 0,
    write: 1,
    speak: 2
  };
  return [...n].sort((y, i) => {
    const N = oa(y),
      S = oa(i);
    return r[N.kind] !== r[S.kind] ? r[N.kind] - r[S.kind] : N.boardIndex - S.boardIndex
  })
}

function Po(n) {
  return n.some(r => oa(r).kind !== "read")
}
const qN = ["make the bed", "wash up", "tidy up", "dust", "clean", "sweep the floor", "read a comic", "watch a film", "play chess", "play computer games"],
  SN = "images/hero.jpg",
  VN = "images/door.jpg",
  ON = "images/open-door.jpg",
  Vt = {
    hero: SN,
    door: VN,
    openDoor: ON
  };

function Pl(n) {
  return n.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ")
}
const RN = ["hardly ever", "always", "usually", "often", "sometimes", "never"],
  hN = ["three times a month", "three times a week", "three times a day", "twice a month", "twice a week", "twice a day", "once a month", "once a week", "once a day", "every weekend", "every morning", "every evening", "every night", "every day", "every week"];

function pk(n) {
  return RN.find(r => n.includes(r)) ?? null
}

function bk(n) {
  const r = hN.find(y => n.includes(y));
  return r || (/\bevery\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/.test(n) ? "every …" : /\b(once|twice|three times)\b/.test(n) ? "once/twice/three times" : null)
}

function HN(n, r) {
  const y = n.length + 1,
    i = r.length + 1,
    N = Array.from({
      length: y
    }, () => Array(i).fill(0));
  for (let S = 0; S < y; S++) N[S][0] = S;
  for (let S = 0; S < i; S++) N[0][S] = S;
  for (let S = 1; S < y; S++)
    for (let h = 1; h < i; h++) {
      const x = n[S - 1] === r[h - 1] ? 0 : 1;
      N[S][h] = Math.min(N[S - 1][h] + 1, N[S][h - 1] + 1, N[S - 1][h - 1] + x)
    }
  return N[n.length][r.length]
}

function Eo(n) {
  const r = n.replace(/[^a-z\s']/g, "").split(" ").filter(Boolean),
    y = ["always", "usually", "often", "sometimes", "never", "hardly"];
  for (const i of r)
    if (!(i.length < 4)) {
      for (const N of y)
        if (i !== N && HN(i, N) === 1) return `Check the spelling: ${N}.`
    } return /\b(one time|1 time)\b/.test(n) ? "Use once, not one time." : /\b(two times|2 times)\b/.test(n) ? "Use twice, not two times." : /\beveryday\b/.test(n) ? "Write every day as two words." : null
}

function kn(n) {
  return /\b(always|usually|often|sometimes|never|hardly ever)\s+(am|is|are|'m|'re)\b/.test(n) ? "With am, is or are, put the adverb after: I am always… / She is usually…" : /\b(don't|do not|doesn't|does not)\s+never\b/.test(n) || /\bnever\s+(don't|doesn't|do not|does not)\b/.test(n) ? "Never is already negative. Do not use don't + never." : /\bi\s+(makes|plays|watches|goes|tidies|washes|reads|dusts|sweeps|cleans|helps)\b/.test(n) ? "After I, use the base verb: I play, I make, I watch." : !/\b(do|does|don't|doesn't|to)\b/.test(n) && /\b(she|he|mum|dad|grandma|brother|sister)\s+(always|usually|often|sometimes|never|hardly ever)?\s*(play|watch|make|tidy|wash|read|dust|sweep|clean|go)\b/.test(n) ? "After he, she, Mum or Dad, add -s: plays, makes, watches." : /\b(make|makes|play|plays|wash|washes|watch|watches|tidy|tidies|read|reads|dust|dusts|sweep|sweeps|clean|cleans)\s+(always|usually|often|sometimes|never)\b/.test(n) ? "Put the adverb before the main verb: I often play chess." : /\b(am|is|are)\s+(always|usually|often|sometimes|never|hardly ever)\s+(make|makes|play|plays|wash|washes|watch|watches|tidy|tidies|read|reads|dust|dusts|sweep|sweeps|clean|cleans|go|goes|do|does)\b/.test(n) ? "Do not use am/is/are and a main verb together. Say: Mum often makes the bed." : null
}

function Ml(n, r) {
  return r.some(y => n.includes(y))
}

function qk(n, r) {
  return null
}

function Sk(n, r) {
  const y = Pl(n),
    i = y.replace(/[^a-z'\s]/g, "").split(" ").filter(Boolean),
    N = r.minWords ?? (r.allowShort ? 1 : 4);
  if (!y) return {
    ok: !1,
    message: "Write your answer first."
  };
  if (i.length < N) return {
    ok: !1,
    message: r.allowShort ? "Add a frequency word: always, every day, twice a week…" : "Write a full sentence — about four words or more."
  };
  const S = Eo(y);
  if (S) return {
    ok: !1,
    message: S
  };
  const h = kn(y);
  if (h) return {
    ok: !1,
    message: h
  };
  const x = pk(y),
    p = bk(y);
  if (r.freq === "adverb" && !x) return {
    ok: !1,
    message: "Add a frequency adverb: always, usually, often, sometimes, never or hardly ever."
  };
  if (r.freq === "expression" && !p) return {
    ok: !1,
    message: "Add an expression: every day, once a week, twice a week, three times a month…"
  };
  if (r.freq === "any" && !x && !p) return {
    ok: !1,
    message: "Add how often: always, often, every day, twice a week…"
  };
  if (r.freq === "be") {
    if (!/\b(am|is|are|'m|'re)\b/.test(y)) return {
      ok: !1,
      message: "Use am, is or are. Example: I am usually tired."
    };
    if (!/\b(am|is|are|'m|'re)\s+(always|usually|often|sometimes|never|hardly ever)\b/.test(y)) return {
      ok: !1,
      message: "Put the adverb after am, is or are: I am always… / My room is never…"
    }
  }
  if (r.keys && r.keys.length && !Ml(y, r.keys)) return {
    ok: !1,
    message: r.keyHint || "Use the activity from the card."
  };
  if (r.allOf && r.allOf.some(_ => !y.includes(_))) return {
    ok: !1,
    message: r.allHint || `Include this word: ${r.allOf.find(_=>!y.includes(_))}.`
  };
  const b = qk(n, r.channel);
  if (b) return {
    ok: !1,
    message: b
  };
  let T;
  const K = y.replace(/[.!?]/g, "").trim();
  return /\b(always|usually|often|sometimes|never)\s*$/.test(K) && (T = "That works. You can also put the adverb before the verb: I often play chess."), {
    ok: !0,
    message: r.freq === "be" ? "Yes. The adverb sits after am, is or are." : r.freq === "expression" ? "Yes. That expression tells us how often." : r.freq === "adverb" ? "Yes. Clear Present Simple, and the adverb is in a good place." : "Yes. That tells us how often.",
    tip: T
  }
}

function xN(n, r) {
  const y = Pl(n);
  if (!y) return {
    ok: !1,
    message: "Write the question first."
  };
  const i = Eo(y);
  if (i) return {
    ok: !1,
    message: i
  };
  if (!y.includes("how often")) return {
    ok: !1,
    message: "Start with How often."
  };
  const N = y.replace(/\?/g, "").trim();
  if (!/^how often (do|does)\b/.test(N)) return {
    ok: !1,
    message: "Start like this: How often do… / How often does…"
  };
  const S = /\bdo\b/.test(y),
    h = /\bdoes\b/.test(y);
  if (r.helper === "do" && h && !/\bdo\b/.test(y.replace("does", ""))) return {
    ok: !1,
    message: "With you, use do — not does."
  };
  if (r.helper === "does" && S && !h) return {
    ok: !1,
    message: "With he, she, Mum or Dad, use does — not do."
  };
  if (!S && !h) return {
    ok: !1,
    message: "Add do or does. How often do you…?"
  };
  if (r.helper === "either") {
    if (y.includes("friends") && h && !/\bdo\b/.test(y.replace("does", ""))) return {
      ok: !1,
      message: "Friends → do, not does."
    };
    if (/\bfriend\b/.test(y) && !y.includes("friends") && !h) return {
      ok: !1,
      message: "One friend → does. How often does your friend…?"
    }
  }
  if (!Ml(y, r.subjects)) return {
    ok: !1,
    message: r.subjectHint
  };
  const x = r.verbS.find(b => new RegExp(`\\b${b}\\b`).test(y));
  if (x) return {
    ok: !1,
    message: `After do or does, use ${r.verbs[0]??x.replace(/es$|s$/,"")}, not ${x}.`
  };
  if (!Ml(y, r.verbs)) return {
    ok: !1,
    message: r.verbHint
  };
  if (r.extras && r.extras.length && !Ml(y, r.extras)) return {
    ok: !1,
    message: r.extraHint || "Include the activity from the card."
  };
  const p = kn(y);
  return p ? {
    ok: !1,
    message: p
  } : {
    ok: !0,
    message: "Yes. That is a clear How often question."
  }
}

function fN(n, r, y, i, N) {
  const S = Pl(n);
  if (!S) return {
    ok: !1,
    message: "Write your comparison first."
  };
  if (S.replace(/[^a-z'\s]/g, "").split(" ").filter(Boolean).length < 6) return {
    ok: !1,
    message: "Write a full sentence with more often or less often."
  };
  const x = Eo(S);
  if (x) return {
    ok: !1,
    message: x
  };
  const p = kn(S);
  if (p) return {
    ok: !1,
    message: p
  };
  if (/\bthen\b/.test(S) && !/\bthan\b/.test(S)) return {
    ok: !1,
    message: "Use than, not then. more often than…"
  };
  if (!/more often|less often/.test(S)) return {
    ok: !1,
    message: "Use more often or less often."
  };
  if (!/\bthan\b/.test(S)) return {
    ok: !1,
    message: "Add than. Example: more often than…"
  };
  if (!Ml(S, r)) return {
    ok: !1,
    message: i
  };
  if (!Ml(S, y)) return {
    ok: !1,
    message: N
  };
  const b = qk(n, "write");
  return b ? {
    ok: !1,
    message: b
  } : {
    ok: !0,
    message: "Yes. That comparison is clear."
  }
}

function wN(n) {
  const r = Pl(n);
  if (!r.includes("how often")) return {
    ok: !1,
    message: "Start with a How often question."
  };
  if (!/^how often (do|does)\b/.test(r.replace(/\?/g, "").trim())) return {
    ok: !1,
    message: "Start like this: How often do you…?"
  };
  if (/\bdoes\s+you\b/.test(r)) return {
    ok: !1,
    message: "With you, use do — not does."
  };
  if (/\bdo\s+(she|he|your mum|your mom|your mother|your dad|your father)\b/.test(r)) return {
    ok: !1,
    message: "With he, she, Mum or Dad, use does — not do."
  };
  let y = "";
  if (r.includes("?")) y = r.split("?").slice(1).join("?");
  else {
    const m = r.match(/^how often (?:do|does)\b.*?\b(?:you|he|she|we|they|your\s+\w+)\b[^?]*?(?=\s+(?:i|my|he|she|we|they|mum|dad|mom)\b)/);
    y = m ? r.slice(m[0].length) : ""
  }
  if (y.trim().split(/\s+/).filter(Boolean).length < 3) return {
    ok: !1,
    message: "Answer your question. Example: I usually wash up."
  };
  if (!pk(y) && !bk(y)) return {
    ok: !1,
    message: "In the answer, add a frequency word: usually, every day, never…"
  };
  const i = kn(r);
  return i ? {
    ok: !1,
    message: i
  } : {
    ok: !0,
    message: "Yes. A real question and a real answer."
  }
}

function JN(n, r) {
  const y = Pl(r);
  if (y.replace(/[^a-z'\s]/g, "").split(" ").filter(Boolean).length < 3) return {
    ok: !1,
    message: "Write the full correct sentence."
  };
  if (!/^[A-Z]/.test(r.trim())) return {
    ok: !1,
    message: "Start with a capital letter."
  };
  if (!/[.!?]$/.test(r.trim())) return {
    ok: !1,
    message: "End with a full stop."
  };
  switch (n) {
    case "be-after":
      return /\b(always|usually|often|sometimes|never)\s+(am|is|are)\b/.test(y) ? {
        ok: !1,
        message: "Put the adverb after am: I am always happy…"
      } : /\b(am|'m)\s+always\s+happy\b/.test(y) ? {
        ok: !0,
        message: "Yes. Always comes after am."
      } : {
        ok: !1,
        message: "Try: I am always happy on Saturday."
      };
    case "she-plays":
      return /\bshe play\b/.test(y) ? {
        ok: !1,
        message: "After she, use plays."
      } : !/\bshe plays chess\b/.test(y) || !/\btwice a week\b/.test(y) ? {
        ok: !1,
        message: "Try: She plays chess twice a week."
      } : {
        ok: !0,
        message: "Yes. plays, and twice a week."
      };
    case "usually-before":
      return /\bwash usually\b/.test(y) ? {
        ok: !1,
        message: "Usually goes before wash: We usually wash up."
      } : /\busually wash/.test(y) ? {
        ok: !0,
        message: "Yes. Usually sits before the verb."
      } : {
        ok: !1,
        message: "Try: We usually wash up."
      };
    case "how-often-do":
      return /^how often do you tidy/.test(y.replace(/\?/g, "").trim()) ? r.includes("?") ? {
        ok: !0,
        message: "Yes. How often do you…?"
      } : {
        ok: !1,
        message: "Add a question mark."
      } : {
        ok: !1,
        message: "Add do: How often do you tidy up?"
      };
    case "never-dust": {
      const N = /\b(don't|doesn't|do not|does not)\b/.test(y),
        S = /\bnever\b/.test(y);
      if (N && S) return {
        ok: !1,
        message: "Do not use don't and never together."
      };
      if (/\bdon't\b/.test(y)) return {
        ok: !1,
        message: "He does not use don't. Use doesn't, or never."
      };
      const h = /\bnever dusts?\b/.test(y),
        x = /\b(doesn't|does not) dust\b/.test(y);
      return h || x ? {
        ok: !0,
        message: "Yes. One negative is enough."
      } : {
        ok: !1,
        message: "Try: He never dusts. Or: He doesn't dust."
      }
    }
    case "they-watch":
      return /\bwatches\b/.test(y) ? {
        ok: !1,
        message: "After they, use watch — no -s."
      } : !/\bthey watch\b/.test(y) || !/\bevery weekend\b/.test(y) ? {
        ok: !1,
        message: "Try: They watch a film every weekend."
      } : {
        ok: !0,
        message: "Yes. they watch, and every weekend."
      };
    case "no-be-verb":
      return /\bis\b/.test(y) && /\bmakes\b/.test(y) ? {
        ok: !1,
        message: "Take out is. Say: Mum often makes the bed."
      } : !/\bmum often makes the bed\b/.test(y) && !/\boften makes the bed\b/.test(y) ? {
        ok: !1,
        message: "Try: Mum often makes the bed."
      } : /\b(am|is|are)\b/.test(y) ? {
        ok: !1,
        message: "You do not need am, is or are here."
      } : {
        ok: !0,
        message: "Yes. Often goes before makes. No extra is."
      };
    case "once-a-week":
      return /\bone time\b/.test(y) ? {
        ok: !1,
        message: "Use once a week, not one time a week."
      } : !/\bonce a week\b/.test(y) || !/\b(read|comic)\b/.test(y) ? {
        ok: !1,
        message: "Try: I read a comic once a week."
      } : {
        ok: !0,
        message: "Yes. once a week is the expression."
      };
    default:
      return {
        ok: !1, message: "Try again."
      }
  }
}

function UN(n) {
  const r = n.map(y => Pl(y)).filter(Boolean);
  return new Set(r).size < r.length
}

function Vk(n) {
  var r, y, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var N = n.length;
      for (r = 0; r < N; r++) n[r] && (y = Vk(n[r])) && (i && (i += " "), i += y)
    } else
      for (y in n) n[y] && (i && (i += " "), i += y);
  return i
}

function GN() {
  for (var n, r, y = 0, i = "", N = arguments.length; y < N; y++)(n = arguments[y]) && (r = Vk(n)) && (i && (i += " "), i += r);
  return i
}
const KN = (n, r) => {
    const y = new Array(n.length + r.length);
    for (let i = 0; i < n.length; i++) y[i] = n[i];
    for (let i = 0; i < r.length; i++) y[n.length + i] = r[i];
    return y
  },
  TN = (n, r) => ({
    classGroupId: n,
    validator: r
  }),
  Ok = (n = new Map, r = null, y) => ({
    nextPart: n,
    validators: r,
    classGroupId: y
  }),
  yn = "-",
  dk = [],
  ZN = "arbitrary..",
  WN = n => {
    const r = AN(n),
      {
        conflictingClassGroups: y,
        conflictingClassGroupModifiers: i
      } = n;
    return {
      getClassGroupId: h => {
        if (h.startsWith("[") && h.endsWith("]")) return DN(h);
        const x = h.split(yn),
          p = x[0] === "" && x.length > 1 ? 1 : 0;
        return Rk(x, p, r)
      },
      getConflictingClassGroupIds: (h, x) => {
        if (x) {
          const p = i[h],
            b = y[h];
          return p ? b ? KN(b, p) : p : b || dk
        }
        return y[h] || dk
      }
    }
  },
  Rk = (n, r, y) => {
    if (n.length - r === 0) return y.classGroupId;
    const N = n[r],
      S = y.nextPart.get(N);
    if (S) {
      const b = Rk(n, r + 1, S);
      if (b) return b
    }
    const h = y.validators;
    if (h === null) return;
    const x = r === 0 ? n.join(yn) : n.slice(r).join(yn),
      p = h.length;
    for (let b = 0; b < p; b++) {
      const T = h[b];
      if (T.validator(x)) return T.classGroupId
    }
  },
  DN = n => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const r = n.slice(1, -1),
      y = r.indexOf(":"),
      i = r.slice(0, y);
    return i ? ZN + i : void 0
  })(),
  AN = n => {
    const {
      theme: r,
      classGroups: y
    } = n;
    return gN(y, r)
  },
  gN = (n, r) => {
    const y = Ok();
    for (const i in n) {
      const N = n[i];
      Qo(N, y, i, r)
    }
    return y
  },
  Qo = (n, r, y, i) => {
    const N = n.length;
    for (let S = 0; S < N; S++) {
      const h = n[S];
      LN(h, r, y, i)
    }
  },
  LN = (n, r, y, i) => {
    if (typeof n == "string") {
      zN(n, r, y);
      return
    }
    if (typeof n == "function") {
      FN(n, r, y, i);
      return
    }
    MN(n, r, y, i)
  },
  zN = (n, r, y) => {
    const i = n === "" ? r : hk(r, n);
    i.classGroupId = y
  },
  FN = (n, r, y, i) => {
    if (PN(n)) {
      Qo(n(i), r, y, i);
      return
    }
    r.validators === null && (r.validators = []), r.validators.push(TN(y, n))
  },
  MN = (n, r, y, i) => {
    const N = Object.entries(n),
      S = N.length;
    for (let h = 0; h < S; h++) {
      const [x, p] = N[h];
      Qo(p, hk(r, x), y, i)
    }
  },
  hk = (n, r) => {
    let y = n;
    const i = r.split(yn),
      N = i.length;
    for (let S = 0; S < N; S++) {
      const h = i[S];
      let x = y.nextPart.get(h);
      x || (x = Ok(), y.nextPart.set(h, x)), y = x
    }
    return y
  },
  PN = n => "isThemeGetter" in n && n.isThemeGetter === !0,
  IN = n => {
    if (n < 1) return {
      get: () => {},
      set: () => {}
    };
    let r = 0,
      y = Object.create(null),
      i = Object.create(null);
    const N = (S, h) => {
      y[S] = h, r++, r > n && (r = 0, i = y, y = Object.create(null))
    };
    return {
      get(S) {
        let h = y[S];
        if (h !== void 0) return h;
        if ((h = i[S]) !== void 0) return N(S, h), h
      },
      set(S, h) {
        S in y ? y[S] = h : N(S, h)
      }
    }
  },
  Io = "!",
  rk = ":",
  YN = [],
  yk = (n, r, y, i, N) => ({
    modifiers: n,
    hasImportantModifier: r,
    baseClassName: y,
    maybePostfixModifierPosition: i,
    isExternal: N
  }),
  BN = n => {
    const {
      prefix: r,
      experimentalParseClassName: y
    } = n;
    let i = N => {
      const S = [];
      let h = 0,
        x = 0,
        p = 0,
        b;
      const T = N.length;
      for (let se = 0; se < T; se++) {
        const me = N[se];
        if (h === 0 && x === 0) {
          if (me === rk) {
            S.push(N.slice(p, se)), p = se + 1;
            continue
          }
          if (me === "/") {
            b = se;
            continue
          }
        }
        me === "[" ? h++ : me === "]" ? h-- : me === "(" ? x++ : me === ")" && x--
      }
      const K = S.length === 0 ? N : N.slice(p);
      let D = K,
        _ = !1;
      K.endsWith(Io) ? (D = K.slice(0, -1), _ = !0) : K.startsWith(Io) && (D = K.slice(1), _ = !0);
      const F = b && b > p ? b - p : void 0;
      return yk(S, _, D, F)
    };
    if (r) {
      const N = r + rk,
        S = i;
      i = h => h.startsWith(N) ? S(h.slice(N.length)) : yk(YN, !1, h, void 0, !0)
    }
    if (y) {
      const N = i;
      i = S => y({
        className: S,
        parseClassName: N
      })
    }
    return i
  },
  CN = n => {
    const r = new Map;
    return n.orderSensitiveModifiers.forEach((y, i) => {
      r.set(y, 1e6 + i)
    }), y => {
      const i = [];
      let N = [];
      for (let S = 0; S < y.length; S++) {
        const h = y[S],
          x = h[0] === "[",
          p = r.has(h);
        x || p ? (N.length > 0 && (N.sort(), i.push(...N), N = []), i.push(h)) : N.push(h)
      }
      return N.length > 0 && (N.sort(), i.push(...N)), i
    }
  },
  XN = n => ({
    cache: IN(n.cacheSize),
    parseClassName: BN(n),
    sortModifiers: CN(n),
    ...WN(n)
  }),
  EN = /\s+/,
  QN = (n, r) => {
    const {
      parseClassName: y,
      getClassGroupId: i,
      getConflictingClassGroupIds: N,
      sortModifiers: S
    } = r, h = [], x = n.trim().split(EN);
    let p = "";
    for (let b = x.length - 1; b >= 0; b -= 1) {
      const T = x[b],
        {
          isExternal: K,
          modifiers: D,
          hasImportantModifier: _,
          baseClassName: F,
          maybePostfixModifierPosition: se
        } = y(T);
      if (K) {
        p = T + (p.length > 0 ? " " + p : p);
        continue
      }
      let me = !!se,
        te = i(me ? F.substring(0, se) : F);
      if (!te) {
        if (!me) {
          p = T + (p.length > 0 ? " " + p : p);
          continue
        }
        if (te = i(F), !te) {
          p = T + (p.length > 0 ? " " + p : p);
          continue
        }
        me = !1
      }
      const L = D.length === 0 ? "" : D.length === 1 ? D[0] : S(D).join(":"),
        le = _ ? L + Io : L,
        je = le + te;
      if (h.indexOf(je) > -1) continue;
      h.push(je);
      const X = N(te, me);
      for (let oe = 0; oe < X.length; ++oe) {
        const g = X[oe];
        h.push(le + g)
      }
      p = T + (p.length > 0 ? " " + p : p)
    }
    return p
  },
  vN = (...n) => {
    let r = 0,
      y, i, N = "";
    for (; r < n.length;)(y = n[r++]) && (i = Hk(y)) && (N && (N += " "), N += i);
    return N
  },
  Hk = n => {
    if (typeof n == "string") return n;
    let r, y = "";
    for (let i = 0; i < n.length; i++) n[i] && (r = Hk(n[i])) && (y && (y += " "), y += r);
    return y
  },
  _N = (n, ...r) => {
    let y, i, N, S;
    const h = p => {
        const b = r.reduce((T, K) => K(T), n());
        return y = XN(b), i = y.cache.get, N = y.cache.set, S = x, x(p)
      },
      x = p => {
        const b = i(p);
        if (b) return b;
        const T = QN(p, y);
        return N(p, T), T
      };
    return S = h, (...p) => S(vN(...p))
  },
  $N = [],
  Ie = n => {
    const r = y => y[n] || $N;
    return r.isThemeGetter = !0, r
  },
  xk = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  fk = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  ep = /^\d+\/\d+$/,
  tp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ap = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  lp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  up = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  cp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Fl = n => ep.test(n),
  ne = n => !!n && !Number.isNaN(Number(n)),
  Da = n => !!n && Number.isInteger(Number(n)),
  zo = n => n.endsWith("%") && ne(n.slice(0, -1)),
  sa = n => tp.test(n),
  np = () => !0,
  sp = n => ap.test(n) && !lp.test(n),
  wk = () => !1,
  op = n => up.test(n),
  ip = n => cp.test(n),
  dp = n => !P(n) && !I(n),
  rp = n => Il(n, Gk, wk),
  P = n => xk.test(n),
  al = n => Il(n, Kk, sp),
  Fo = n => Il(n, Np, ne),
  kk = n => Il(n, Jk, wk),
  yp = n => Il(n, Uk, ip),
  sn = n => Il(n, Tk, op),
  I = n => fk.test(n),
  Fu = n => Yl(n, Kk),
  kp = n => Yl(n, pp),
  mk = n => Yl(n, Jk),
  mp = n => Yl(n, Gk),
  jp = n => Yl(n, Uk),
  on = n => Yl(n, Tk, !0),
  Il = (n, r, y) => {
    const i = xk.exec(n);
    return i ? i[1] ? r(i[1]) : y(i[2]) : !1
  },
  Yl = (n, r, y = !1) => {
    const i = fk.exec(n);
    return i ? i[1] ? r(i[1]) : y : !1
  },
  Jk = n => n === "position" || n === "percentage",
  Uk = n => n === "image" || n === "url",
  Gk = n => n === "length" || n === "size" || n === "bg-size",
  Kk = n => n === "length",
  Np = n => n === "number",
  pp = n => n === "family-name",
  Tk = n => n === "shadow",
  bp = () => {
    const n = Ie("color"),
      r = Ie("font"),
      y = Ie("text"),
      i = Ie("font-weight"),
      N = Ie("tracking"),
      S = Ie("leading"),
      h = Ie("breakpoint"),
      x = Ie("container"),
      p = Ie("spacing"),
      b = Ie("radius"),
      T = Ie("shadow"),
      K = Ie("inset-shadow"),
      D = Ie("text-shadow"),
      _ = Ie("drop-shadow"),
      F = Ie("blur"),
      se = Ie("perspective"),
      me = Ie("aspect"),
      te = Ie("ease"),
      L = Ie("animate"),
      le = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      je = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      X = () => [...je(), I, P],
      oe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      g = () => ["auto", "contain", "none"],
      B = () => [I, P, p],
      Ge = () => [Fl, "full", "auto", ...B()],
      Ot = () => [Da, "none", "subgrid", I, P],
      Me = () => ["auto", {
        span: ["full", Da, I, P]
      }, Da, I, P],
      Ke = () => [Da, "auto", I, P],
      Dt = () => ["auto", "min", "max", "fr", I, P],
      dt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      Ye = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      f = () => ["auto", ...B()],
      A = () => [Fl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()],
      Z = () => [n, I, P],
      be = () => [...je(), mk, kk, {
        position: [I, P]
      }],
      Se = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      j = () => ["auto", "cover", "contain", mp, rp, {
        size: [I, P]
      }],
      U = () => [zo, Fu, al],
      W = () => ["", "none", "full", b, I, P],
      z = () => ["", ne, Fu, al],
      $ = () => ["solid", "dashed", "dotted", "double"],
      ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      v = () => [ne, zo, mk, kk],
      Be = () => ["", "none", F, I, P],
      fe = () => ["none", ne, I, P],
      At = () => ["none", ne, I, P],
      ia = () => [ne, I, P],
      da = () => [Fl, "full", ...B()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [sa],
        breakpoint: [sa],
        color: [np],
        container: [sa],
        "drop-shadow": [sa],
        ease: ["in", "out", "in-out"],
        font: [dp],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [sa],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [sa],
        shadow: [sa],
        spacing: ["px", ne],
        text: [sa],
        "text-shadow": [sa],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", Fl, P, I, me]
        }],
        container: ["container"],
        columns: [{
          columns: [ne, P, I, x]
        }],
        "break-after": [{
          "break-after": le()
        }],
        "break-before": [{
          "break-before": le()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: X()
        }],
        overflow: [{
          overflow: oe()
        }],
        "overflow-x": [{
          "overflow-x": oe()
        }],
        "overflow-y": [{
          "overflow-y": oe()
        }],
        overscroll: [{
          overscroll: g()
        }],
        "overscroll-x": [{
          "overscroll-x": g()
        }],
        "overscroll-y": [{
          "overscroll-y": g()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: Ge()
        }],
        "inset-x": [{
          "inset-x": Ge()
        }],
        "inset-y": [{
          "inset-y": Ge()
        }],
        start: [{
          start: Ge()
        }],
        end: [{
          end: Ge()
        }],
        top: [{
          top: Ge()
        }],
        right: [{
          right: Ge()
        }],
        bottom: [{
          bottom: Ge()
        }],
        left: [{
          left: Ge()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [Da, "auto", I, P]
        }],
        basis: [{
          basis: [Fl, "full", "auto", x, ...B()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [ne, Fl, "auto", "initial", "none", P]
        }],
        grow: [{
          grow: ["", ne, I, P]
        }],
        shrink: [{
          shrink: ["", ne, I, P]
        }],
        order: [{
          order: [Da, "first", "last", "none", I, P]
        }],
        "grid-cols": [{
          "grid-cols": Ot()
        }],
        "col-start-end": [{
          col: Me()
        }],
        "col-start": [{
          "col-start": Ke()
        }],
        "col-end": [{
          "col-end": Ke()
        }],
        "grid-rows": [{
          "grid-rows": Ot()
        }],
        "row-start-end": [{
          row: Me()
        }],
        "row-start": [{
          "row-start": Ke()
        }],
        "row-end": [{
          "row-end": Ke()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": Dt()
        }],
        "auto-rows": [{
          "auto-rows": Dt()
        }],
        gap: [{
          gap: B()
        }],
        "gap-x": [{
          "gap-x": B()
        }],
        "gap-y": [{
          "gap-y": B()
        }],
        "justify-content": [{
          justify: [...dt(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...Ye(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...Ye()]
        }],
        "align-content": [{
          content: ["normal", ...dt()]
        }],
        "align-items": [{
          items: [...Ye(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...Ye(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": dt()
        }],
        "place-items": [{
          "place-items": [...Ye(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...Ye()]
        }],
        p: [{
          p: B()
        }],
        px: [{
          px: B()
        }],
        py: [{
          py: B()
        }],
        ps: [{
          ps: B()
        }],
        pe: [{
          pe: B()
        }],
        pt: [{
          pt: B()
        }],
        pr: [{
          pr: B()
        }],
        pb: [{
          pb: B()
        }],
        pl: [{
          pl: B()
        }],
        m: [{
          m: f()
        }],
        mx: [{
          mx: f()
        }],
        my: [{
          my: f()
        }],
        ms: [{
          ms: f()
        }],
        me: [{
          me: f()
        }],
        mt: [{
          mt: f()
        }],
        mr: [{
          mr: f()
        }],
        mb: [{
          mb: f()
        }],
        ml: [{
          ml: f()
        }],
        "space-x": [{
          "space-x": B()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": B()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: A()
        }],
        w: [{
          w: [x, "screen", ...A()]
        }],
        "min-w": [{
          "min-w": [x, "screen", "none", ...A()]
        }],
        "max-w": [{
          "max-w": [x, "screen", "none", "prose", {
            screen: [h]
          }, ...A()]
        }],
        h: [{
          h: ["screen", "lh", ...A()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...A()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...A()]
        }],
        "font-size": [{
          text: ["base", y, Fu, al]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [i, I, Fo]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", zo, P]
        }],
        "font-family": [{
          font: [kp, P, r]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [N, I, P]
        }],
        "line-clamp": [{
          "line-clamp": [ne, "none", I, Fo]
        }],
        leading: [{
          leading: [S, ...B()]
        }],
        "list-image": [{
          "list-image": ["none", I, P]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", I, P]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: Z()
        }],
        "text-color": [{
          text: Z()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...$(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [ne, "from-font", "auto", I, al]
        }],
        "text-decoration-color": [{
          decoration: Z()
        }],
        "underline-offset": [{
          "underline-offset": [ne, "auto", I, P]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: B()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I, P]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", I, P]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: be()
        }],
        "bg-repeat": [{
          bg: Se()
        }],
        "bg-size": [{
          bg: j()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, Da, I, P],
            radial: ["", I, P],
            conic: [Da, I, P]
          }, jp, yp]
        }],
        "bg-color": [{
          bg: Z()
        }],
        "gradient-from-pos": [{
          from: U()
        }],
        "gradient-via-pos": [{
          via: U()
        }],
        "gradient-to-pos": [{
          to: U()
        }],
        "gradient-from": [{
          from: Z()
        }],
        "gradient-via": [{
          via: Z()
        }],
        "gradient-to": [{
          to: Z()
        }],
        rounded: [{
          rounded: W()
        }],
        "rounded-s": [{
          "rounded-s": W()
        }],
        "rounded-e": [{
          "rounded-e": W()
        }],
        "rounded-t": [{
          "rounded-t": W()
        }],
        "rounded-r": [{
          "rounded-r": W()
        }],
        "rounded-b": [{
          "rounded-b": W()
        }],
        "rounded-l": [{
          "rounded-l": W()
        }],
        "rounded-ss": [{
          "rounded-ss": W()
        }],
        "rounded-se": [{
          "rounded-se": W()
        }],
        "rounded-ee": [{
          "rounded-ee": W()
        }],
        "rounded-es": [{
          "rounded-es": W()
        }],
        "rounded-tl": [{
          "rounded-tl": W()
        }],
        "rounded-tr": [{
          "rounded-tr": W()
        }],
        "rounded-br": [{
          "rounded-br": W()
        }],
        "rounded-bl": [{
          "rounded-bl": W()
        }],
        "border-w": [{
          border: z()
        }],
        "border-w-x": [{
          "border-x": z()
        }],
        "border-w-y": [{
          "border-y": z()
        }],
        "border-w-s": [{
          "border-s": z()
        }],
        "border-w-e": [{
          "border-e": z()
        }],
        "border-w-t": [{
          "border-t": z()
        }],
        "border-w-r": [{
          "border-r": z()
        }],
        "border-w-b": [{
          "border-b": z()
        }],
        "border-w-l": [{
          "border-l": z()
        }],
        "divide-x": [{
          "divide-x": z()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": z()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...$(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...$(), "hidden", "none"]
        }],
        "border-color": [{
          border: Z()
        }],
        "border-color-x": [{
          "border-x": Z()
        }],
        "border-color-y": [{
          "border-y": Z()
        }],
        "border-color-s": [{
          "border-s": Z()
        }],
        "border-color-e": [{
          "border-e": Z()
        }],
        "border-color-t": [{
          "border-t": Z()
        }],
        "border-color-r": [{
          "border-r": Z()
        }],
        "border-color-b": [{
          "border-b": Z()
        }],
        "border-color-l": [{
          "border-l": Z()
        }],
        "divide-color": [{
          divide: Z()
        }],
        "outline-style": [{
          outline: [...$(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [ne, I, P]
        }],
        "outline-w": [{
          outline: ["", ne, Fu, al]
        }],
        "outline-color": [{
          outline: Z()
        }],
        shadow: [{
          shadow: ["", "none", T, on, sn]
        }],
        "shadow-color": [{
          shadow: Z()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", K, on, sn]
        }],
        "inset-shadow-color": [{
          "inset-shadow": Z()
        }],
        "ring-w": [{
          ring: z()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: Z()
        }],
        "ring-offset-w": [{
          "ring-offset": [ne, al]
        }],
        "ring-offset-color": [{
          "ring-offset": Z()
        }],
        "inset-ring-w": [{
          "inset-ring": z()
        }],
        "inset-ring-color": [{
          "inset-ring": Z()
        }],
        "text-shadow": [{
          "text-shadow": ["none", D, on, sn]
        }],
        "text-shadow-color": [{
          "text-shadow": Z()
        }],
        opacity: [{
          opacity: [ne, I, P]
        }],
        "mix-blend": [{
          "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": ce()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [ne]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": v()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": v()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": Z()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": Z()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": v()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": v()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": Z()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": Z()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": v()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": v()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": Z()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": Z()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": v()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": v()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": Z()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": Z()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": v()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": v()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": Z()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": Z()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": v()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": v()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": Z()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": Z()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": v()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": v()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": Z()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": Z()
        }],
        "mask-image-radial": [{
          "mask-radial": [I, P]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": v()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": v()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": Z()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": Z()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": je()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [ne]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": v()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": v()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": Z()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": Z()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: be()
        }],
        "mask-repeat": [{
          mask: Se()
        }],
        "mask-size": [{
          mask: j()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", I, P]
        }],
        filter: [{
          filter: ["", "none", I, P]
        }],
        blur: [{
          blur: Be()
        }],
        brightness: [{
          brightness: [ne, I, P]
        }],
        contrast: [{
          contrast: [ne, I, P]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", _, on, sn]
        }],
        "drop-shadow-color": [{
          "drop-shadow": Z()
        }],
        grayscale: [{
          grayscale: ["", ne, I, P]
        }],
        "hue-rotate": [{
          "hue-rotate": [ne, I, P]
        }],
        invert: [{
          invert: ["", ne, I, P]
        }],
        saturate: [{
          saturate: [ne, I, P]
        }],
        sepia: [{
          sepia: ["", ne, I, P]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", I, P]
        }],
        "backdrop-blur": [{
          "backdrop-blur": Be()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [ne, I, P]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [ne, I, P]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", ne, I, P]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [ne, I, P]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", ne, I, P]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [ne, I, P]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [ne, I, P]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", ne, I, P]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": B()
        }],
        "border-spacing-x": [{
          "border-spacing-x": B()
        }],
        "border-spacing-y": [{
          "border-spacing-y": B()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", I, P]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [ne, "initial", I, P]
        }],
        ease: [{
          ease: ["linear", "initial", te, I, P]
        }],
        delay: [{
          delay: [ne, I, P]
        }],
        animate: [{
          animate: ["none", L, I, P]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [se, I, P]
        }],
        "perspective-origin": [{
          "perspective-origin": X()
        }],
        rotate: [{
          rotate: fe()
        }],
        "rotate-x": [{
          "rotate-x": fe()
        }],
        "rotate-y": [{
          "rotate-y": fe()
        }],
        "rotate-z": [{
          "rotate-z": fe()
        }],
        scale: [{
          scale: At()
        }],
        "scale-x": [{
          "scale-x": At()
        }],
        "scale-y": [{
          "scale-y": At()
        }],
        "scale-z": [{
          "scale-z": At()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: ia()
        }],
        "skew-x": [{
          "skew-x": ia()
        }],
        "skew-y": [{
          "skew-y": ia()
        }],
        transform: [{
          transform: [I, P, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: X()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: da()
        }],
        "translate-x": [{
          "translate-x": da()
        }],
        "translate-y": [{
          "translate-y": da()
        }],
        "translate-z": [{
          "translate-z": da()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: Z()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: Z()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I, P]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": B()
        }],
        "scroll-mx": [{
          "scroll-mx": B()
        }],
        "scroll-my": [{
          "scroll-my": B()
        }],
        "scroll-ms": [{
          "scroll-ms": B()
        }],
        "scroll-me": [{
          "scroll-me": B()
        }],
        "scroll-mt": [{
          "scroll-mt": B()
        }],
        "scroll-mr": [{
          "scroll-mr": B()
        }],
        "scroll-mb": [{
          "scroll-mb": B()
        }],
        "scroll-ml": [{
          "scroll-ml": B()
        }],
        "scroll-p": [{
          "scroll-p": B()
        }],
        "scroll-px": [{
          "scroll-px": B()
        }],
        "scroll-py": [{
          "scroll-py": B()
        }],
        "scroll-ps": [{
          "scroll-ps": B()
        }],
        "scroll-pe": [{
          "scroll-pe": B()
        }],
        "scroll-pt": [{
          "scroll-pt": B()
        }],
        "scroll-pr": [{
          "scroll-pr": B()
        }],
        "scroll-pb": [{
          "scroll-pb": B()
        }],
        "scroll-pl": [{
          "scroll-pl": B()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", I, P]
        }],
        fill: [{
          fill: ["none", ...Z()]
        }],
        "stroke-w": [{
          stroke: [ne, Fu, al, Fo]
        }],
        stroke: [{
          stroke: ["none", ...Z()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
  },
  qp = _N(bp);

function Ae(...n) {
  return qp(GN(n))
}

function jk({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("path", {
      fill: r,
      d: "M32 6l7.2 16.2L57 24.2 43.2 35.4 47.4 54 32 44.6 16.6 54l4.2-18.6L7 24.2l17.8-2z"
    }), s.jsx("path", {
      fill: "rgba(255,255,255,.45)",
      d: "M32 10l4.2 9.4 2.2.3-6.4 8.2 6.4 14.6L32 37.2V10z"
    })]
  })
}

function Sp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("path", {
      fill: r,
      d: "M32 54S8 38.5 8 22.5C8 14.5 14 9 21.2 9c4.4 0 8.2 2.2 10.8 6.2C34.6 11.2 38.4 9 42.8 9 50 9 56 14.5 56 22.5 56 38.5 32 54 32 54z"
    }), s.jsx("ellipse", {
      cx: "24",
      cy: "22",
      rx: "6",
      ry: "4",
      fill: "rgba(255,255,255,.4)",
      transform: "rotate(-20 24 22)"
    })]
  })
}

function Vp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("circle", {
      cx: "32",
      cy: "32",
      r: "12",
      fill: r
    }), s.jsx("g", {
      stroke: r,
      strokeWidth: "4",
      strokeLinecap: "round",
      children: s.jsx("path", {
        d: "M32 8v8M32 48v8M8 32h8M48 32h8M14.5 14.5l5.6 5.6M43.9 43.9l5.6 5.6M14.5 49.5l5.6-5.6M43.9 20.1l5.6-5.6"
      })
    }), s.jsx("circle", {
      cx: "28",
      cy: "28",
      r: "3",
      fill: "rgba(255,255,255,.55)"
    })]
  })
}

function Op({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("path", {
      fill: r,
      d: "M28 10h6v28.2a10 10 0 1 1-6-9.2V10z"
    }), s.jsx("circle", {
      cx: "22",
      cy: "44",
      r: "8",
      fill: r
    }), s.jsx("path", {
      fill: "rgba(255,255,255,.4)",
      d: "M30 12h3v16h-3z"
    })]
  })
}

function Rp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("circle", {
      cx: "32",
      cy: "18",
      r: "8",
      fill: r
    }), s.jsx("circle", {
      cx: "46",
      cy: "28",
      r: "8",
      fill: r
    }), s.jsx("circle", {
      cx: "40",
      cy: "44",
      r: "8",
      fill: r
    }), s.jsx("circle", {
      cx: "24",
      cy: "44",
      r: "8",
      fill: r
    }), s.jsx("circle", {
      cx: "18",
      cy: "28",
      r: "8",
      fill: r
    }), s.jsx("circle", {
      cx: "32",
      cy: "32",
      r: "7",
      fill: "#f6c431"
    }), s.jsx("circle", {
      cx: "30",
      cy: "30",
      r: "2",
      fill: "rgba(255,255,255,.7)"
    })]
  })
}

function hp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("path", {
      fill: r,
      d: "M22 46h26a10 10 0 0 0 1.2-19.9A14 14 0 0 0 24 18a12 12 0 0 0-11.2 16.2A8 8 0 0 0 22 46z"
    }), s.jsx("ellipse", {
      cx: "28",
      cy: "30",
      rx: "7",
      ry: "4",
      fill: "rgba(255,255,255,.4)"
    })]
  })
}

function Hp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("path", {
      fill: r,
      d: "M14 40c2-16 16-28 36-30-2 20-14 34-30 36-2-2-4-4-6-6z"
    }), s.jsx("path", {
      d: "M20 42c8-8 16-14 26-18",
      stroke: "rgba(255,255,255,.55)",
      strokeWidth: "3",
      fill: "none",
      strokeLinecap: "round"
    })]
  })
}

function xp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("circle", {
      cx: "32",
      cy: "32",
      r: "22",
      fill: r
    }), s.jsx("circle", {
      cx: "24",
      cy: "28",
      r: "3",
      fill: "#2c241c"
    }), s.jsx("circle", {
      cx: "40",
      cy: "28",
      r: "3",
      fill: "#2c241c"
    }), s.jsx("path", {
      d: "M22 36c3 6 17 6 20 0",
      stroke: "#2c241c",
      strokeWidth: "3",
      fill: "none",
      strokeLinecap: "round"
    }), s.jsx("circle", {
      cx: "24",
      cy: "24",
      r: "1.4",
      fill: "white"
    })]
  })
}

function fp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: [s.jsx("path", {
      fill: r,
      d: "M8 30L32 10l24 20v24H38V38H26v16H8V30z"
    }), s.jsx("path", {
      fill: "rgba(255,255,255,.4)",
      d: "M32 14l16 13v4L32 18 16 31v-4z"
    })]
  })
}

function wp({
  className: n,
  color: r = "currentColor"
}) {
  return s.jsx("svg", {
    viewBox: "0 0 64 64",
    className: n,
    "aria-hidden": "true",
    children: s.jsx("text", {
      x: "32",
      y: "46",
      textAnchor: "middle",
      fontFamily: "Nunito, sans-serif",
      fontSize: "42",
      fontWeight: "800",
      fill: r,
      children: "3"
    })
  })
}

function Bl({
  id: n,
  className: r,
  color: y
}) {
  return {
    star: s.jsx(jk, {
      className: r,
      color: y
    }),
    heart: s.jsx(Sp, {
      className: r,
      color: y
    }),
    sun: s.jsx(Vp, {
      className: r,
      color: y
    }),
    daily: s.jsx(jk, {
      className: r,
      color: y
    }),
    music: s.jsx(Op, {
      className: r,
      color: y
    }),
    flower: s.jsx(Rp, {
      className: r,
      color: y
    }),
    cloud: s.jsx(hp, {
      className: r,
      color: y
    }),
    leaf: s.jsx(Hp, {
      className: r,
      color: y
    }),
    smile: s.jsx(xp, {
      className: r,
      color: y
    }),
    home: s.jsx(fp, {
      className: r,
      color: y
    }),
    three: s.jsx(wp, {
      className: r,
      color: y
    })
  } [n] ?? null
}

function Jp({
  className: n
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 24 24",
    className: n,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true",
    children: [s.jsx("rect", {
      x: "5",
      y: "10",
      width: "14",
      height: "10",
      rx: "2"
    }), s.jsx("path", {
      d: "M8 10V7a4 4 0 0 1 8 0v3",
      strokeLinecap: "round"
    })]
  })
}

function Up({
  className: n
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 24 24",
    className: n,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true",
    children: [s.jsx("rect", {
      x: "9",
      y: "3",
      width: "6",
      height: "11",
      rx: "3"
    }), s.jsx("path", {
      d: "M6 11a6 6 0 0 0 12 0M12 17v4M8 21h8",
      strokeLinecap: "round"
    })]
  })
}

function Gp({
  className: n
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 24 24",
    className: n,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true",
    children: [s.jsx("path", {
      d: "M4 10h3l5-4v12l-5-4H4V10z",
      strokeLinejoin: "round"
    }), s.jsx("path", {
      d: "M16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10",
      strokeLinecap: "round"
    })]
  })
}

function Kp({
  className: n
}) {
  return s.jsxs("svg", {
    viewBox: "0 0 24 24",
    className: n,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true",
    children: [s.jsx("path", {
      d: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5z"
    }), s.jsx("path", {
      d: "M4 19.2A2.5 2.5 0 0 1 6.5 17H20"
    })]
  })
}

function Tp({
  dramatic: n,
  image: r
}) {
  return s.jsxs("div", {
    className: "fixed inset-0 -z-10",
    "aria-hidden": "true",
    children: [s.jsx("img", {
      src: r ?? Vt.hero,
      alt: "",
      className: "h-full w-full object-cover"
    }), s.jsx("div", {
      className: Ae("absolute inset-0", n ? "bg-gradient-to-b from-[#2c241c]/15 via-[#2c241c]/28 to-[#2c241c]/50" : "bg-[#f4e7d6]/84 backdrop-blur-[5px]")
    })]
  })
}

function Zp({
  unlocked: n,
  placed: r,
  size: y = "md"
}) {
  return s.jsx("ol", {
    className: "flex items-center gap-1.5",
    "aria-label": "Escape code",
    children: Pu.map((i, N) => {
      const S = N < n,
        h = r !== void 0 && N < r;
      return s.jsx("li", {
        children: s.jsx("span", {
          className: Ae("grid place-items-center rounded-full font-extrabold shadow-sm", y === "sm" ? "h-9 w-9 text-[10px]" : "h-11 w-11 text-[11px]", S ? "flip-in" : "border border-dashed border-[#c9b49a] bg-white/70 text-[#8a7b6c]"),
          style: S ? {
            background: i.bg,
            color: i.fg
          } : void 0,
          title: S ? `Part ${N+1}: ${i.label}` : `Part ${N+1} locked`,
          "aria-label": S ? `Code part ${N+1}: ${i.label}` : `Code part ${N+1}, locked`,
          children: S ? s.jsxs("span", {
            className: "flex flex-col items-center leading-none",
            children: [s.jsx(Bl, {
              id: i.glyph,
              className: y === "sm" ? "h-4 w-4" : "h-5 w-5",
              color: i.fg
            }), s.jsx("span", {
              className: "mt-0.5",
              children: h || y === "md" ? i.label : ""
            })]
          }) : s.jsx(Jp, {
            className: "h-3.5 w-3.5"
          })
        })
      }, i.label)
    })
  })
}

function Wp(n) {
  const r = Math.max(0, Math.floor(n / 1e3)),
    y = Math.floor(r / 60),
    i = r % 60;
  return `${y}:${i.toString().padStart(2,"0")}`
}

function Dp({
  name: n,
  unlocked: r,
  startedAt: y,
  step: i,
  onGrammar: N,
  onReset: h
}) {
  const [x, p] = Q.useState(Date.now()), [b, T] = Q.useState(!1);
  Q.useEffect(() => {
    if (!y) return;
    const _ = window.setInterval(() => p(Date.now()), 1e3);
    return () => window.clearInterval(_)
  }, [y]);
  const K = y ? x - y : 0,
    D = y ? K > 2400 * 1e3 : !1;
  return s.jsxs("header", {
    className: "sticky top-0 z-40 border-b border-white/50 bg-[#f4e7d6]/80 backdrop-blur-md",
    children: [s.jsxs("div", {
      className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
      children: [s.jsxs("div", {
        className: "flex min-w-0 items-center gap-2.5",
        children: [s.jsx("span", {
          className: "grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[#6d4f97] shadow-md",
          children: s.jsx("img", {
            src: Vt.hero,
            alt: "",
            className: "h-full w-full object-cover object-[center_18%]"
          })
        }), s.jsxs("div", {
          className: "min-w-0",
          children: [s.jsx("p", {
            className: "font-display text-lg leading-none text-ink",
            children: "Habit House"
          }), s.jsx("p", {
            className: "truncate text-xs font-bold text-ink-soft",
            children: n || "Academy Stars 3 · Unit 2"
          })]
        })]
      }), s.jsxs("div", {
        className: "ml-auto flex items-center gap-2",
        children: [s.jsx("p", {
          className: Ae("hidden rounded-full px-3 py-1 text-xs font-extrabold sm:block", D ? "bg-[#f3d2b0] text-[#7a4520]" : "bg-white/80 text-ink-soft"),
          "aria-live": "polite",
          children: y ? `Time in the house ${Wp(K)}` : "About 45 minutes"
        }), s.jsxs("button", {
          type: "button",
          className: "btn-secondary !px-3 !py-2 text-sm",
          onClick: N,
          children: [s.jsx(Kp, {
            className: "h-4 w-4 text-[#543b78]"
          }), s.jsx("span", {
            className: "hidden sm:inline",
            children: "Grammar Rules"
          }), s.jsx("span", {
            className: "sm:hidden",
            children: "Rules"
          })]
        }), s.jsx("button", {
          type: "button",
          className: "ttc-reset hidden rounded-full px-3 py-2 text-sm font-extrabold sm:inline-flex",
          onClick: h,
          children: "↺ Начать заново"
        }), s.jsxs("div", {
          className: "relative",
          children: [s.jsx("button", {
            type: "button",
            className: "grid h-10 w-10 place-items-center rounded-full border border-[#e4d3bf] bg-white/80 font-extrabold text-ink",
            "aria-expanded": b,
            "aria-label": "Lesson menu",
            onClick: () => T(_ => !_),
            children: "···"
          }), b && s.jsx("div", {
            className: "absolute right-0 z-50 mt-2 w-52 rounded-2xl border border-[#eadccb] bg-white p-1.5 shadow-xl",
            children: s.jsx("button", {
              type: "button",
              className: "ttc-reset block w-full rounded-xl px-3 py-2 text-left text-sm font-bold",
              onClick: () => {
                T(!1), h()
              },
              children: "↺ Начать заново"
            })
          })]
        })]
      })]
    }), s.jsxs("div", {
      className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pb-3",
      children: [s.jsx(Zp, {
        unlocked: r,
        size: "sm"
      }), s.jsx("p", {
        className: "hidden max-w-[48%] truncate text-right text-xs font-bold text-ink-soft min-[420px]:block",
        children: i
      })]
    })]
  })
}

function vo({
  text: n,
  label: r = "Listen"
}) {
  const [y, i] = Q.useState(!1);
  return s.jsxs("button", {
    type: "button",
    className: "chip",
    onClick: () => {
      if (!window.speechSynthesis) return;
      if (y) {
        window.speechSynthesis.cancel(), i(!1);
        return
      }
      window.speechSynthesis.cancel();
      const N = new SpeechSynthesisUtterance(n);
      N.lang = "en-GB", N.rate = .92, N.onend = () => i(!1), i(!0), window.speechSynthesis.speak(N)
    },
    children: [s.jsx(Gp, {
      className: "mr-1 inline h-3.5 w-3.5"
    }), y ? "Stop" : r]
  })
}

function tt({
  ok: n,
  message: r,
  tip: y
}) {
  return s.jsxs("div", {
    role: "status",
    "aria-live": "polite",
    className: Ae("mt-3 rounded-2xl border px-4 py-3 text-sm font-bold leading-relaxed", n ? "border-[#b7e0c4] bg-[#f1faf4] text-[#1f6b45]" : "border-[#f0c2b8] bg-[#fff5f2] text-[#8a3d32]"),
    children: [s.jsx("p", {
      children: r
    }), y && s.jsx("p", {
      className: "mt-1 font-semibold text-ink-soft",
      children: y
    })]
  })
}

function mn({
  words: n,
  onInsert: r
}) {
  return s.jsxs("div", {
    className: "mt-3",
    children: [s.jsx("p", {
      className: "text-xs font-extrabold uppercase tracking-wide text-ink-soft",
      children: "Tap a word to add it"
    }), s.jsx("div", {
      className: "mt-2 flex flex-wrap gap-1.5",
      children: n.map(y => s.jsx("button", {
        type: "button",
        className: "chip",
        onClick: () => r(y),
        children: y
      }, y))
    })]
  })
}
const dn = [{
  word: "always",
  pct: "100%",
  line: "I always make the bed."
}, {
  word: "usually",
  pct: "most days",
  line: "I usually tidy up after school."
}, {
  word: "often",
  pct: "many times",
  line: "Dad often plays chess."
}, {
  word: "sometimes",
  pct: "about half",
  line: "We sometimes watch a film."
}, {
  word: "hardly ever",
  pct: "almost never",
  line: "I hardly ever dust."
}, {
  word: "never",
  pct: "0%",
  line: "Grandma never plays computer games."
}];

function Ap({
  open: n,
  onClose: r,
  focus: y
}) {
  const i = Q.useRef(null),
    [N, S] = Q.useState(dn[0].word),
    h = Q.useId();
  if (Q.useEffect(() => {
      n && i.current?.focus()
    }, [n]), !n) return null;
  const x = dn.find(p => p.word === N) ?? dn[0];
  return s.jsxs("div", {
    className: "fixed inset-0 z-[70] flex justify-end",
    children: [s.jsx("button", {
      type: "button",
      className: "absolute inset-0 bg-[#2c241c]/40",
      "aria-label": "Close grammar rules",
      onClick: r
    }), s.jsxs("aside", {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": h,
      className: "drawer-scroll relative flex h-full w-full max-w-md flex-col overflow-y-auto bg-[#fffaf4] shadow-2xl",
      children: [s.jsxs("div", {
        className: "sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-[#eadccb] bg-[#fffaf4]/95 px-5 py-4 backdrop-blur",
        children: [s.jsxs("div", {
          children: [s.jsx("p", {
            className: "text-xs font-extrabold uppercase tracking-wide text-[#543b78]",
            children: "Always open"
          }), s.jsx("h2", {
            id: h,
            ref: i,
            tabIndex: -1,
            className: "font-display text-3xl outline-none",
            children: "Grammar Rules"
          })]
        }), s.jsx("button", {
          type: "button",
          className: "btn-secondary !px-3 !py-2",
          onClick: r,
          children: "Close"
        })]
      }), s.jsxs("div", {
        className: "space-y-4 px-5 py-5",
        children: [s.jsxs("article", {
          className: Ae("paper reveal p-5", y === "position" && "ring-2 ring-[#6d4f97]"),
          style: {
            animationDelay: "0.02s"
          },
          children: [s.jsx("h3", {
            className: "font-display text-2xl",
            children: "Where does the adverb go?"
          }), s.jsxs("ul", {
            className: "mt-3 space-y-3 text-[15px] leading-relaxed",
            children: [s.jsxs("li", {
              children: [s.jsx("span", {
                className: "font-extrabold",
                children: "Before the main verb."
              }), " I ", s.jsx("em", {
                children: "always make"
              }), " the bed. She", " ", s.jsx("em", {
                children: "usually plays"
              }), " chess."]
            }), s.jsxs("li", {
              children: [s.jsx("span", {
                className: "font-extrabold",
                children: "After am / is / are."
              }), " I ", s.jsx("em", {
                children: "am always"
              }), " tired. The kitchen", " ", s.jsx("em", {
                children: "is never"
              }), " dirty."]
            }), s.jsxs("li", {
              children: [s.jsx("span", {
                className: "font-extrabold",
                children: "Expressions"
              }), " (once a week, every day) go at the end or the start. I wash up", " ", s.jsx("em", {
                children: "every day"
              }), ". ", s.jsx("em", {
                children: "Twice a week"
              }), ", I play chess."]
            })]
          })]
        }), s.jsxs("article", {
          className: Ae("paper reveal p-5", y === "list" && "ring-2 ring-[#6d4f97]"),
          style: {
            animationDelay: "0.08s"
          },
          children: [s.jsx("h3", {
            className: "font-display text-2xl",
            children: "The frequency line"
          }), s.jsx("p", {
            className: "mt-1 text-sm text-ink-soft",
            children: "Tap a word. Read the example."
          }), s.jsx("div", {
            className: "mt-3 flex flex-wrap gap-1.5",
            children: dn.map(p => s.jsx("button", {
              type: "button",
              onClick: () => S(p.word),
              className: Ae("chip", N === p.word && "!border-[#6d4f97] !bg-[#f3e9fb]"),
              children: p.word
            }, p.word))
          }), s.jsxs("p", {
            className: "mt-3 rounded-2xl bg-[#f6efe6] px-4 py-3 font-bold",
            children: [x.pct, " — ", x.line]
          }), s.jsx("p", {
            className: "mt-3 text-sm font-bold text-ink-soft",
            children: "Expressions"
          }), s.jsx("p", {
            className: "mt-1 text-sm leading-relaxed",
            children: "every day · twice a day · once a week · twice a week · three times a week · every weekend · once a month · three times a month"
          })]
        }), s.jsxs("article", {
          className: Ae("paper reveal p-5", y === "examples" && "ring-2 ring-[#6d4f97]"),
          style: {
            animationDelay: "0.14s"
          },
          children: [s.jsx("h3", {
            className: "font-display text-2xl",
            children: "Chores and free time"
          }), s.jsxs("div", {
            className: "mt-3 grid gap-3 sm:grid-cols-2",
            children: [s.jsxs("div", {
              children: [s.jsx("p", {
                className: "text-xs font-extrabold uppercase tracking-wide text-[#543b78]",
                children: "Chores"
              }), s.jsxs("ul", {
                className: "mt-1 space-y-1 text-sm font-semibold",
                children: [s.jsx("li", {
                  children: "I always make the bed."
                }), s.jsx("li", {
                  children: "Mum usually washes up."
                }), s.jsx("li", {
                  children: "We sometimes sweep the floor."
                }), s.jsx("li", {
                  children: "Dad hardly ever dusts."
                }), s.jsx("li", {
                  children: "I tidy up three times a week."
                })]
              })]
            }), s.jsxs("div", {
              children: [s.jsx("p", {
                className: "text-xs font-extrabold uppercase tracking-wide text-[#543b78]",
                children: "Free time"
              }), s.jsxs("ul", {
                className: "mt-1 space-y-1 text-sm font-semibold",
                children: [s.jsx("li", {
                  children: "I often play computer games."
                }), s.jsx("li", {
                  children: "She sometimes reads a comic."
                }), s.jsx("li", {
                  children: "We watch a film every weekend."
                }), s.jsx("li", {
                  children: "He plays chess twice a week."
                }), s.jsx("li", {
                  children: "I never play chess before homework."
                })]
              })]
            })]
          })]
        }), s.jsxs("article", {
          className: Ae("paper reveal p-5", y === "questions" && "ring-2 ring-[#6d4f97]"),
          style: {
            animationDelay: "0.2s"
          },
          children: [s.jsx("h3", {
            className: "font-display text-2xl",
            children: "Questions and compare"
          }), s.jsxs("ul", {
            className: "mt-3 space-y-2 text-sm font-semibold leading-relaxed",
            children: [s.jsxs("li", {
              children: ["How often ", s.jsx("em", {
                children: "do you"
              }), " make the bed?"]
            }), s.jsxs("li", {
              children: ["How often ", s.jsx("em", {
                children: "does she"
              }), " play chess?"]
            }), s.jsx("li", {
              children: "After do/does, no -s: does she play, not does she plays."
            }), s.jsxs("li", {
              children: ["I play computer games ", s.jsx("em", {
                children: "more often than"
              }), " I read a comic."]
            }), s.jsxs("li", {
              children: ["I dust ", s.jsx("em", {
                children: "less often than"
              }), " I wash up."]
            })]
          })]
        }), s.jsxs("article", {
          className: Ae("paper reveal p-5", y === "mistakes" && "ring-2 ring-[#6d4f97]"),
          style: {
            animationDelay: "0.26s"
          },
          children: [s.jsx("h3", {
            className: "font-display text-2xl",
            children: "Common mistakes"
          }), s.jsx("ul", {
            className: "mt-3 space-y-2 text-sm",
            children: [
              ["I always am happy.", "I am always happy."],
              ["She plays usually chess.", "She usually plays chess."],
              ["He don't tidy up.", "He doesn't tidy up."],
              ["Do you often plays games?", "Do you often play games?"],
              ["How often you wash up?", "How often do you wash up?"],
              ["I don't never dust.", "I never dust."],
              ["I play chess one time a week.", "I play chess once a week."]
            ].map(([p, b]) => s.jsxs("li", {
              className: "rounded-2xl bg-[#f6efe6] px-3 py-2",
              children: [s.jsx("p", {
                className: "font-semibold text-[#8a3d32] line-through decoration-[#d4655a]",
                children: p
              }), s.jsx("p", {
                className: "font-extrabold text-[#1f6b45]",
                children: b
              })]
            }, p))
          })]
        }), s.jsx("p", {
          className: "pb-6 text-center text-xs font-bold text-ink-soft",
          children: "You can open this from every screen. Press Esc to close."
        })]
      })]
    })]
  })
}

function Zk({
  kind: n
}) {
  const r = n === "read" ? "Read" : n === "write" ? "Write" : "Speak",
    y = n === "read" ? "bg-[#e7f4fb] text-[#1d6380]" : n === "write" ? "bg-[#fdecd8] text-[#8a4e12]" : "bg-[#f3e9fb] text-[#5d3f86]";
  return s.jsx("span", {
    className: Ae("rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide", y),
    children: r
  })
}

function Lp() {
  const n = window;
  return n.SpeechRecognition ?? n.webkitSpeechRecognition ?? null
}

function _o(n, r) {
  const y = n.replace(/\s+$/, "");
  return y ? `${y} ${r}` : r.charAt(0).toUpperCase() + r.slice(1)
}

function Wk({
  total: n,
  done: r
}) {
  return s.jsx("div", {
    className: "flex flex-wrap gap-1.5",
    "aria-label": `${r} of ${n} complete`,
    children: Array.from({
      length: n
    }, (y, i) => s.jsx("span", {
      className: Ae("h-2.5 w-2.5 rounded-full", i < r ? "bg-[#6d4f97]" : "bg-[#e4d3bf]")
    }, i))
  })
}

function jn({
  show: n,
  model: r,
  onUse: y
}) {
  return n ? s.jsxs("div", {
    className: "mt-3 rounded-2xl bg-[#f6efe6] px-4 py-3 text-sm",
    children: [s.jsx("p", {
      className: "font-extrabold",
      children: "A model, after two tries"
    }), s.jsx("p", {
      className: "mt-1 font-semibold",
      children: r
    }), s.jsx("button", {
      type: "button",
      className: "chip mt-2",
      onClick: () => y(r),
      children: "Put the model in the box"
    }), s.jsx("p", {
      className: "mt-2 text-xs font-semibold text-ink-soft",
      children: "If it is not true for you, change it — then check again."
    })]
  }) : null
}

function zp({
  item: n,
  draft: r,
  attempts: y,
  solved: i,
  onDraft: N,
  onSolve: S,
  onAttempt: h,
  speak: x
}) {
  const [p, b] = Q.useState(null), [T, K] = Q.useState(!1), [D, _] = Q.useState(""), F = Q.useRef(null);
  Q.useEffect(() => {
    b(null), _("")
  }, [n.id]), Q.useEffect(() => () => F.current?.stop(), []);

  function se(te) {
    const L = Sk(te, {
      channel: n.channel,
      freq: n.freq,
      keys: n.keys,
      keyHint: n.keyHint,
      allOf: n.allOf,
      allHint: n.allHint,
      allowShort: n.allowShort
    });
    b(L), L.ok ? S() : h()
  }

  function me() {
    const te = Lp();
    if (!te) {
      _("No microphone here. Type your answer — that is fine.");
      return
    }
    if (T && F.current) {
      F.current.stop(), K(!1);
      return
    }
    const L = new te;
    L.lang = "en-GB", L.interimResults = !0, L.continuous = !1, L.onresult = le => {
      let je = "";
      for (let X = 0; X < le.results.length; X++) je += le.results[X][0].transcript;
      N(je.charAt(0).toUpperCase() + je.slice(1))
    }, L.onerror = () => {
      _("The microphone did not start. Type your answer."), K(!1)
    }, L.onend = () => K(!1), F.current = L, K(!0), _(""), L.start()
  }
  return s.jsxs("div", {
    children: [s.jsxs("div", {
      className: "flex flex-wrap items-start justify-between gap-2",
      children: [s.jsx("h3", {
        className: "font-display text-2xl leading-snug sm:text-3xl",
        children: n.prompt
      }), s.jsx(vo, {
        text: n.prompt
      })]
    }), s.jsxs("p", {
      className: "mt-2 text-sm font-semibold text-ink-soft",
      children: ["Example: ", n.example]
    }), x && s.jsxs("div", {
      className: "mt-3 flex flex-wrap items-center gap-2",
      children: [s.jsxs("button", {
        type: "button",
        className: Ae("btn-secondary", T && "pulse-ring"),
        onClick: me,
        children: [s.jsx(Up, {
          className: "h-4 w-4"
        }), T ? "Stop" : "Speak"]
      }), s.jsx("p", {
        className: "text-xs font-bold text-ink-soft",
        children: "Or type. Classroom and quiet rooms can skip the mic."
      })]
    }), D && s.jsx("p", {
      className: "mt-2 text-sm font-bold text-[#8a4e12]",
      children: D
    }), s.jsx("label", {
      className: "mt-3 block text-sm font-extrabold",
      htmlFor: n.id,
      children: "Your answer"
    }), s.jsx("textarea", {
      id: n.id,
      value: r,
      readOnly: i,
      rows: 3,
      onChange: te => N(te.target.value),
      className: "mt-1 w-full resize-y rounded-2xl border border-[#eadccb] bg-[#fffaf4] px-4 py-3 text-lg font-semibold text-ink shadow-inner outline-none focus:border-[#6d4f97]",
      placeholder: "Write here…"
    }), !i && s.jsx(mn, {
      words: [...Mo, ...NN],
      onInsert: te => N(_o(r, te))
    }), !i && s.jsx("button", {
      type: "button",
      className: "btn-primary mt-4",
      onClick: () => se(r),
      children: "Check sentence"
    }), p && !i && s.jsx(tt, {
      ok: p.ok,
      message: p.message,
      tip: p.tip
    }), i && s.jsx(tt, {
      ok: !0,
      message: "Locked in. This one is part of the code."
    }), s.jsx(jn, {
      show: !i && y >= 2,
      model: n.model,
      onUse: te => N(te)
    })]
  })
}

function Fp({
  mission: n,
  index: r,
  total: y,
  solved: i,
  drafts: N,
  attempts: S,
  onDraft: h,
  onSolve: x,
  onAttempt: p,
  onComplete: b
}) {
  const T = Q.useMemo(() => n.format === "passage" ? n.segments.filter(g => g.kind === "gap").map(g => g.id) : n.items.map(g => g.id), [n]),
    K = T.filter(g => i.includes(g)).length,
    D = T.findIndex(g => !i.includes(g)),
    _ = D === -1 ? Math.max(T.length - 1, 0) : D,
    [F, se] = Q.useState(_),
    [me, te] = Q.useState(n.id),
    [L, le] = Q.useState(""),
    [je, X] = Q.useState("");
  me !== n.id && (te(n.id), se(_));
  const oe = Co[n.id];
  return s.jsxs("section", {
    className: "screen-enter mx-auto w-full max-w-3xl px-4 py-6 sm:py-8",
    children: [s.jsxs("div", {
      className: "mb-4 flex items-start gap-3",
      children: [s.jsx("span", {
        className: "grid h-14 w-14 shrink-0 place-items-center rounded-[22%] shadow-md",
        style: {
          background: oe.bg
        },
        children: s.jsx(Bl, {
          id: n.id,
          className: "h-8 w-8",
          color: oe.fg
        })
      }), s.jsxs("div", {
        className: "min-w-0 flex-1",
        children: [s.jsxs("div", {
          className: "flex flex-wrap items-center gap-2",
          children: [s.jsx(Zk, {
            kind: n.kind
          }), s.jsxs("span", {
            className: "text-xs font-extrabold text-ink-soft",
            children: ["Mission ", r + 1, " of ", y, " · about ", n.minutes, " min"]
          })]
        }), s.jsx("h1", {
          id: "screen-title",
          tabIndex: -1,
          className: "font-display text-3xl outline-none sm:text-4xl",
          children: n.name
        })]
      })]
    }), s.jsxs("div", {
      className: "paper overflow-hidden",
      children: [s.jsx("img", {
        src: Vt.hero,
        alt: "",
        className: "h-20 w-full object-cover object-[center_22%] sm:h-24"
      }), s.jsxs("div", {
        className: "p-5 sm:p-7",
        children: [s.jsx("p", {
          className: "text-base font-semibold leading-relaxed sm:text-lg",
          children: n.instruction
        }), s.jsxs("p", {
          className: "mt-2 text-sm font-bold text-[#543b78]",
          children: ["Example: ", n.example]
        }), s.jsxs("div", {
          className: "mt-4 flex items-center justify-between gap-3",
          children: [s.jsx(Wk, {
            total: T.length,
            done: K
          }), s.jsxs("span", {
            className: "text-sm font-extrabold text-ink-soft",
            children: [K, "/", T.length]
          })]
        }), s.jsxs("div", {
          className: "mt-5",
          children: [n.format === "choice" && s.jsx(Mp, {
            item: n.items[F],
            solved: i.includes(n.items[F].id),
            shake: L === n.items[F].id,
            onCorrect: () => x(n.items[F].id),
            onWrong: () => {
              p(n.items[F].id), le(n.items[F].id), window.setTimeout(() => le(""), 400)
            }
          }), n.format === "chips" && s.jsx(Pp, {
            item: n.items[F],
            solved: i.includes(n.items[F].id),
            onCorrect: () => x(n.items[F].id),
            onWrong: () => p(n.items[F].id)
          }), n.format === "passage" && s.jsxs("div", {
            children: [s.jsx("p", {
              className: "font-display text-xl",
              children: n.lead
            }), s.jsx("p", {
              className: "mt-3 text-lg font-semibold leading-9",
              children: n.segments.map((g, B) => {
                if (g.kind === "text") return s.jsx("span", {
                  children: g.text
                }, B);
                const Ge = N[g.id] ?? "",
                  Ot = i.includes(g.id);
                return s.jsxs("select", {
                  "aria-label": "Choose a frequency word",
                  value: Ge,
                  disabled: Ot,
                  onChange: Me => {
                    const Ke = Me.target.value;
                    h(g.id, Ke), Ke === g.answer ? (x(g.id), X("")) : Ke && (p(g.id), X(g.hint))
                  },
                  className: Ae("mx-1 inline-block rounded-full border px-2 py-1 text-base font-extrabold", Ot ? "border-[#b7e0c4] bg-[#f1faf4] text-[#1f6b45]" : Ge ? "border-[#f0c2b8] bg-[#fff5f2]" : "border-[#e4d3bf] bg-white"),
                  children: [s.jsx("option", {
                    value: "",
                    children: "choose"
                  }), g.options.map(Me => s.jsx("option", {
                    value: Me,
                    children: Me
                  }, Me))]
                }, g.id)
              })
            }), je && s.jsx(tt, {
              ok: !1,
              message: je
            }), K === T.length && s.jsx(tt, {
              ok: !0,
              message: "All eight are in the right place."
            })]
          }), (n.format === "write" || n.format === "speak") && s.jsx(zp, {
            item: n.items[F],
            draft: N[n.items[F].id] ?? "",
            attempts: S[n.items[F].id] ?? 0,
            solved: i.includes(n.items[F].id),
            speak: n.format === "speak",
            onDraft: g => h(n.items[F].id, g),
            onSolve: () => x(n.items[F].id),
            onAttempt: () => p(n.items[F].id)
          }), n.format === "question" && s.jsx(Ip, {
            item: n.items[F],
            draft: N[n.items[F].id] ?? "",
            attempts: S[n.items[F].id] ?? 0,
            solved: i.includes(n.items[F].id),
            onDraft: g => h(n.items[F].id, g),
            onSolve: () => x(n.items[F].id),
            onAttempt: () => p(n.items[F].id)
          }), n.format === "compare" && s.jsx(Yp, {
            item: n.items[F],
            draft: N[n.items[F].id] ?? "",
            attempts: S[n.items[F].id] ?? 0,
            solved: i.includes(n.items[F].id),
            onDraft: g => h(n.items[F].id, g),
            onSolve: () => x(n.items[F].id),
            onAttempt: () => p(n.items[F].id)
          })]
        }), n.format !== "passage" && s.jsxs("div", {
          className: "mt-5 flex flex-wrap items-center justify-between gap-3",
          children: [s.jsx("button", {
            type: "button",
            className: "btn-secondary",
            disabled: F === 0,
            onClick: () => se(g => Math.max(0, g - 1)),
            children: "Back"
          }), K === T.length ? s.jsx("button", {
            type: "button",
            className: "btn-primary",
            onClick: b,
            children: "Collect code part"
          }) : s.jsx("button", {
            type: "button",
            className: "btn-primary",
            disabled: !i.includes(T[F]) || F >= T.length - 1,
            onClick: () => se(g => Math.min(T.length - 1, g + 1)),
            children: "Next"
          })]
        }), n.format === "passage" && K === T.length && s.jsx("button", {
          type: "button",
          className: "btn-primary mt-5",
          onClick: b,
          children: "Collect code part"
        })]
      })]
    })]
  })
}

function Mp({
  item: n,
  solved: r,
  shake: y,
  onCorrect: i,
  onWrong: N
}) {
  const [S, h] = Q.useState(null), [x, p] = Q.useState([]), [b, T] = Q.useState("");
  return Q.useEffect(() => {
    h(null), p([]), T("")
  }, [n.id]), s.jsxs("div", {
    className: y ? "shake" : void 0,
    children: [s.jsx("h3", {
      className: "font-display text-2xl",
      children: n.prompt
    }), s.jsx("div", {
      className: "mt-3 grid gap-2",
      children: n.options.map((K, D) => {
        const _ = S === D || x.includes(D) || r && K.ok;
        return s.jsx("button", {
          type: "button",
          disabled: r || x.includes(D),
          className: Ae("option-card", _ && K.ok && "!border-[#b7e0c4] !bg-[#f1faf4]", (S === D || x.includes(D)) && !K.ok && "!border-[#f0c2b8] !bg-[#fff5f2] opacity-70"),
          onClick: () => {
            h(D), K.ok ? (T(""), i()) : (p(F => [...F, D]), T(K.why), N())
          },
          children: K.text
        }, K.text)
      })
    }), b && s.jsx(tt, {
      ok: !1,
      message: b
    }), r && s.jsx(tt, {
      ok: !0,
      message: n.success
    })]
  })
}

function Pp({
  item: n,
  solved: r,
  onCorrect: y,
  onWrong: i
}) {
  const [N, S] = Q.useState([]), [h, x] = Q.useState("");
  return Q.useEffect(() => {
    S([]), x("")
  }, [n.id]), s.jsxs("div", {
    children: [s.jsxs("div", {
      className: "flex flex-wrap items-start justify-between gap-2",
      children: [s.jsx("h3", {
        className: "font-display text-2xl leading-snug sm:text-3xl",
        children: n.prompt
      }), s.jsx(vo, {
        text: n.prompt
      })]
    }), s.jsx("div", {
      className: "mt-4 grid gap-2 sm:grid-cols-2",
      children: n.options.map(p => {
        const b = N.includes(p),
          T = r && p === n.answer;
        return s.jsx("button", {
          type: "button",
          disabled: r || b,
          className: Ae("option-card text-center", T && "!border-[#b7e0c4] !bg-[#f1faf4]", b && "opacity-50 line-through"),
          onClick: () => {
            p === n.answer ? (x(""), y()) : (S(K => [...K, p]), x(n.hint), i())
          },
          children: p
        }, p)
      })
    }), h && !r && s.jsx(tt, {
      ok: !1,
      message: h
    }), r && s.jsx(tt, {
      ok: !0,
      message: n.success
    })]
  })
}

function Ip({
  item: n,
  draft: r,
  attempts: y,
  solved: i,
  onDraft: N,
  onSolve: S,
  onAttempt: h
}) {
  const [x, p] = Q.useState(null);
  return Q.useEffect(() => p(null), [n.id]), s.jsxs("div", {
    children: [s.jsx("p", {
      className: "text-xs font-extrabold uppercase tracking-wide text-[#543b78]",
      children: "Make the question"
    }), s.jsx("h3", {
      className: "mt-1 font-display text-3xl",
      children: n.prompt
    }), s.jsxs("p", {
      className: "mt-2 text-sm font-semibold text-ink-soft",
      children: ["Example: ", n.example]
    }), s.jsx("label", {
      className: "mt-3 block text-sm font-extrabold",
      htmlFor: n.id,
      children: "Your question"
    }), s.jsx("textarea", {
      id: n.id,
      value: r,
      readOnly: i,
      rows: 2,
      onChange: b => N(b.target.value),
      className: "mt-1 w-full resize-y rounded-2xl border border-[#eadccb] bg-[#fffaf4] px-4 py-3 text-lg font-semibold outline-none focus:border-[#6d4f97]"
    }), !i && s.jsx(mn, {
      words: ["How often", "do", "does", "you", "your mum", "your dad", "your friend", "make the bed", "wash up", "play chess", "read a comic", "watch a film", "play computer games", "tidy up", "sweep the floor"],
      onInsert: b => N(_o(r, b))
    }), !i && s.jsx("button", {
      type: "button",
      className: "btn-primary mt-4",
      onClick: () => {
        const b = xN(r, n.spec);
        p(b), b.ok ? S() : h()
      },
      children: "Check question"
    }), x && !i && s.jsx(tt, {
      ok: x.ok,
      message: x.message
    }), i && s.jsx(tt, {
      ok: !0,
      message: "Locked in. Clear question."
    }), s.jsx(jn, {
      show: !i && y >= 2,
      model: n.model,
      onUse: N
    })]
  })
}

function Yp({
  item: n,
  draft: r,
  attempts: y,
  solved: i,
  onDraft: N,
  onSolve: S,
  onAttempt: h
}) {
  const [x, p] = Q.useState(null);
  Q.useEffect(() => p(null), [n.id]);
  const b = `I ${n.left} more often than I ${n.right}.`;
  return s.jsxs("div", {
    children: [s.jsx("p", {
      className: "text-xs font-extrabold uppercase tracking-wide text-[#543b78]",
      children: "Compare"
    }), s.jsxs("div", {
      className: "mt-2 grid gap-2 sm:grid-cols-2",
      children: [s.jsx("p", {
        className: "rounded-2xl bg-[#f6efe6] px-4 py-3 font-extrabold",
        children: n.left
      }), s.jsx("p", {
        className: "rounded-2xl bg-[#f3e9fb] px-4 py-3 font-extrabold",
        children: n.right
      })]
    }), s.jsx("label", {
      className: "mt-3 block text-sm font-extrabold",
      htmlFor: n.id,
      children: "Your sentence"
    }), s.jsx("textarea", {
      id: n.id,
      value: r,
      readOnly: i,
      rows: 3,
      onChange: T => N(T.target.value),
      className: "mt-1 w-full resize-y rounded-2xl border border-[#eadccb] bg-[#fffaf4] px-4 py-3 text-lg font-semibold outline-none focus:border-[#6d4f97]"
    }), !i && s.jsx(mn, {
      words: [...pN, n.left, n.right],
      onInsert: T => N(_o(r, T))
    }), !i && s.jsx("button", {
      type: "button",
      className: "btn-primary mt-4",
      onClick: () => {
        const T = fN(r, n.keysA, n.keysB, n.hintA, n.hintB);
        p(T), T.ok ? S() : h()
      },
      children: "Check sentence"
    }), x && !i && s.jsx(tt, {
      ok: x.ok,
      message: x.message
    }), i && s.jsx(tt, {
      ok: !0,
      message: "Locked in. That comparison works."
    }), s.jsx(jn, {
      show: !i && y >= 2,
      model: b,
      onUse: N
    })]
  })
}

function Bp({
  solved: n,
  drafts: r,
  attempts: y,
  onDraft: i,
  onSolve: N,
  onAttempt: S,
  onDone: h
}) {
  const x = Mt.filter(K => n.includes(K.id)).length,
    [p, b] = Q.useState(Math.min(x, Mt.length - 1)),
    T = Mt[p];
  return s.jsxs("section", {
    className: "screen-enter mx-auto w-full max-w-3xl px-4 py-6",
    children: [s.jsx("p", {
      className: "text-xs font-extrabold uppercase tracking-wide text-[#8a4e12]",
      children: "Fast finisher · not needed for the door"
    }), s.jsx("h1", {
      id: "screen-title",
      tabIndex: -1,
      className: "font-display text-4xl outline-none",
      children: "Broom Bonus"
    }), s.jsx("p", {
      className: "mt-2 max-w-prose font-semibold leading-relaxed",
      children: "Eight dusty sentences. Write each one correctly. Same grammar, same chores, same free time."
    }), s.jsxs("div", {
      className: "paper mt-4 p-5 sm:p-7",
      children: [s.jsxs("div", {
        className: "mb-4 flex items-center justify-between",
        children: [s.jsx(Wk, {
          total: Mt.length,
          done: x
        }), s.jsxs("span", {
          className: "text-sm font-extrabold text-ink-soft",
          children: [x, "/", Mt.length]
        })]
      }), s.jsx(Cp, {
        item: T,
        draft: r[T.id] ?? "",
        attempts: y[T.id] ?? 0,
        solved: n.includes(T.id),
        onDraft: K => i(T.id, K),
        onSolve: () => N(T.id),
        onAttempt: () => S(T.id)
      }), s.jsxs("div", {
        className: "mt-5 flex flex-wrap justify-between gap-3",
        children: [s.jsx("button", {
          type: "button",
          className: "btn-secondary",
          disabled: p === 0,
          onClick: () => b(K => K - 1),
          children: "Back"
        }), x === Mt.length ? s.jsx("button", {
          type: "button",
          className: "btn-primary",
          onClick: h,
          children: "Take the gold star"
        }) : s.jsx("button", {
          type: "button",
          className: "btn-primary",
          disabled: !n.includes(T.id) || p >= Mt.length - 1,
          onClick: () => b(K => K + 1),
          children: "Next"
        })]
      })]
    })]
  })
}

function Cp({
  item: n,
  draft: r,
  attempts: y,
  solved: i,
  onDraft: N,
  onSolve: S,
  onAttempt: h
}) {
  const [x, p] = Q.useState(null);
  return Q.useEffect(() => p(null), [n.id]), s.jsxs("div", {
    children: [s.jsx("p", {
      className: "text-xs font-extrabold uppercase tracking-wide text-[#8a3d32]",
      children: "Fix this"
    }), s.jsx("p", {
      className: "mt-1 font-display text-2xl text-[#8a3d32] line-through decoration-[#d4655a]",
      children: n.wrong
    }), s.jsx("label", {
      className: "mt-3 block text-sm font-extrabold",
      htmlFor: n.id,
      children: "Correct sentence"
    }), s.jsx("textarea", {
      id: n.id,
      value: r,
      readOnly: i,
      rows: 2,
      onChange: b => N(b.target.value),
      className: "mt-1 w-full resize-y rounded-2xl border border-[#eadccb] bg-[#fffaf4] px-4 py-3 text-lg font-semibold outline-none focus:border-[#6d4f97]"
    }), !i && s.jsx("button", {
      type: "button",
      className: "btn-primary mt-4",
      onClick: () => {
        const b = JN(n.rule, r);
        p(b), b.ok ? S() : h()
      },
      children: "Check"
    }), x && !i && s.jsx(tt, {
      ok: x.ok,
      message: x.message
    }), i && s.jsx(tt, {
      ok: !0,
      message: "Clean. The dust is gone."
    }), s.jsx(jn, {
      show: !i && y >= 2,
      model: n.model,
      onUse: N
    }), !i && y === 1 && s.jsxs("p", {
      className: "mt-2 text-sm font-semibold text-ink-soft",
      children: ["Hint: ", n.hint]
    })]
  })
}
const Yo = "tutorcall-habit-house-v1",
  Xp = ["opening", "choose", "brief", "mission", "reveal", "bonusGate", "bonus", "escape", "success"],
  Mu = {
    name: "",
    screen: "opening",
    selected: [],
    solved: [],
    drafts: {},
    attempts: {},
    codePlaced: 0,
    finalOk: !1,
    startedAt: null,
    missionCursor: 0
  };

function Ep() {
  try {
    const n = localStorage.getItem(Yo);
    if (!n) return Mu;
    const r = JSON.parse(n);
    return !r || typeof r.name != "string" || !r.screen || !Xp.includes(r.screen) ? Mu : {
      ...Mu,
      ...r,
      selected: (r.selected ?? []).filter(y => Xo.some(i => i.id === y)),
      solved: r.solved ?? [],
      drafts: r.drafts ?? {},
      attempts: r.attempts ?? {}
    }
  } catch {
    return Mu
  }
}

function Qp(n, r) {
  return n.filter(y => bN(oa(y)).every(i => r.includes(i))).length
}

function vp(n, r, y) {
  return n === "opening" ? "Step 1 of 4 · The story" : n === "choose" || n === "brief" ? "Step 2 of 4 · The board" : n === "escape" || n === "success" ? "Step 4 of 4 · The door" : n === "bonus" || n === "bonusGate" ? "Step 3 of 4 · Bonus" : n === "reveal" ? "Step 3 of 4 · Code part" : `Step 3 of 4 · ${y[r]?oa(y[r]).name:"Missions"}`
}

function _p() {
  const [n, r] = Q.useState(Ep), [y, i] = Q.useState(!1), [N, S] = Q.useState(!1), [h, x] = Q.useState(""), [p, b] = Q.useState(n.name), [T, K] = Q.useState("");
  Q.useEffect(() => {
    localStorage.setItem(Yo, JSON.stringify(n))
  }, [n]), Q.useEffect(() => {
    function L(le) {
      le.key === "Escape" && (i(!1), S(!1))
    }
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L)
  }, []), Q.useEffect(() => {
    if (!h) return;
    const L = window.setTimeout(() => x(""), 2400);
    return () => window.clearTimeout(L)
  }, [h]), Q.useEffect(() => {
    document.getElementById("screen-title")?.focus()
  }, [n.screen, n.missionCursor]);

  function D(L) {
    r(le => ({
      ...le,
      ...L
    }))
  }

  function _() {
    window.confirm("Начать урок заново? Весь прогресс и части кода исчезнут.") && (localStorage.removeItem(Yo), r(Mu), b(""))
  }
  const F = Math.min(3, Qp(n.selected, n.solved)) + (n.finalOk ? 1 : 0),
    se = n.screen === "reveal" || n.screen === "bonusGate" || n.screen === "success",
    me = n.screen === "success" ? Vt.openDoor : n.screen === "escape" ? Vt.door : Vt.hero,
    te = n.selected[n.missionCursor] ? oa(n.selected[n.missionCursor]) : null;
  return s.jsxs("div", {
    className: "min-h-dvh text-ink",
    children: [s.jsx("a", {
      href: "#main",
      className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-3 focus:py-2",
      children: "Skip to lesson"
    }), s.jsx(Tp, {
      dramatic: se,
      image: me
    }), s.jsx("div", {
      className: "grain"
    }), s.jsx(Dp, {
      name: n.name,
      unlocked: F,
      startedAt: n.startedAt,
      step: vp(n.screen, n.missionCursor, n.selected),
      onGrammar: () => i(!0),
      onReset: _
    }), s.jsxs("main", {
      id: "main",
      children: [n.screen === "opening" && s.jsx($p, {
        name: p,
        error: T,
        onName: b,
        onStart: () => {
          const L = p.trim().replace(/\s+/g, " ");
          if (L.length < 2) {
            K("Tell the house your name — at least two letters.");
            return
          }
          K(""), D({
            name: L,
            screen: "choose",
            startedAt: n.startedAt ?? Date.now()
          })
        }
      }), n.screen === "choose" && s.jsx(eb, {
        picked: n.selected,
        onToggle: L => {
          n.selected.includes(L) ? D({
            selected: n.selected.filter(je => je !== L)
          }) : n.selected.length >= 3 ? x("Three missions only. Deselect one first.") : D({
            selected: [...n.selected, L]
          })
        },
        onLock: () => {
          if (n.selected.length !== 3) {
            x("Choose exactly three missions.");
            return
          }
          if (!Po(n.selected)) {
            x("At least one mission must be Write or Speak.");
            return
          }
          D({
            selected: Nk(n.selected),
            screen: "brief"
          })
        }
      }), n.screen === "brief" && s.jsx(ob, {
        name: n.name,
        ids: n.selected,
        onBack: () => D({
          screen: "choose"
        }),
        onStart: () => D({
          screen: "mission",
          missionCursor: 0
        })
      }), n.screen === "mission" && te && s.jsx(Fp, {
        mission: te,
        index: n.missionCursor,
        total: n.selected.length,
        solved: n.solved,
        drafts: n.drafts,
        attempts: n.attempts,
        onDraft: (L, le) => D({
          drafts: {
            ...n.drafts,
            [L]: le
          }
        }),
        onSolve: L => {
          n.solved.includes(L) || D({
            solved: [...n.solved, L]
          })
        },
        onAttempt: L => D({
          attempts: {
            ...n.attempts,
            [L]: (n.attempts[L] ?? 0) + 1
          }
        }),
        onComplete: () => D({
          screen: "reveal"
        })
      }), n.screen === "reveal" && te && s.jsx(ib, {
        mission: te,
        part: Math.min(n.missionCursor, 2),
        last: n.missionCursor >= n.selected.length - 1,
        onNext: () => {
          n.missionCursor >= n.selected.length - 1 ? D({
            screen: "bonusGate"
          }) : D({
            screen: "mission",
            missionCursor: n.missionCursor + 1
          })
        }
      }), n.screen === "bonusGate" && s.jsx(db, {
        done: Mt.every(L => n.solved.includes(L.id)),
        onBonus: () => D({
          screen: "bonus"
        }),
        onDoor: () => D({
          screen: "escape"
        })
      }), n.screen === "bonus" && s.jsx(Bp, {
        solved: n.solved,
        drafts: n.drafts,
        attempts: n.attempts,
        onDraft: (L, le) => D({
          drafts: {
            ...n.drafts,
            [L]: le
          }
        }),
        onSolve: L => {
          n.solved.includes(L) || D({
            solved: [...n.solved, L]
          })
        },
        onAttempt: L => D({
          attempts: {
            ...n.attempts,
            [L]: (n.attempts[L] ?? 0) + 1
          }
        }),
        onDone: () => D({
          screen: "escape"
        })
      }), n.screen === "escape" && s.jsx(rb, {
        name: n.name,
        placed: n.codePlaced,
        solved: n.solved,
        drafts: n.drafts,
        attempts: n.attempts,
        onPlace: L => D({
          codePlaced: L
        }),
        onDraft: (L, le) => {
          const je = n.solved.filter(X => X !== L);
          D({
            drafts: {
              ...n.drafts,
              [L]: le
            },
            solved: je
          })
        },
        onSolve: L => {
          n.solved.includes(L) || D({
            solved: [...n.solved, L]
          })
        },
        onAttempt: L => D({
          attempts: {
            ...n.attempts,
            [L]: (n.attempts[L] ?? 0) + 1
          }
        }),
        onOpen: () => D({
          finalOk: !0,
          screen: "success"
        }),
        onBonus: () => D({
          screen: "bonus"
        }),
        bonusDone: Mt.every(L => n.solved.includes(L.id))
      }), n.screen === "success" && s.jsx(kb, {
        name: n.name,
        drafts: n.drafts,
        bonus: Mt.every(L => n.solved.includes(L.id)),
        onGrammar: () => i(!0),
        onBonus: () => D({
          screen: "bonus"
        }),
        onReset: _
      })]
    }), h && s.jsx("p", {
      role: "status",
      className: "fixed bottom-5 left-1/2 z-50 max-w-[90vw] -translate-x-1/2 rounded-full bg-[#2c241c] px-4 py-2 text-center text-sm font-bold text-white shadow-xl",
      children: h
    }), s.jsx(Ap, {
      open: y,
      onClose: () => i(!1),
      focus: te && (n.screen === "mission" || n.screen === "reveal") ? te.grammar : void 0
    })]
  })
}

function $p({
  name: n,
  error: r,
  onName: y,
  onStart: i
}) {
  const S = ["You are inside Habit House. The front door is locked.", "There is no key — only a code with four parts. Three parts are hidden in missions. The last part appears when you write about your own week.", "Choose three missions from the board. At least one must be writing or speaking. You make the English.", "Grammar Rules stay open the whole time. Use them."],
    h = S.join(" ");
  return s.jsxs("div", {
    className: "mx-auto grid max-w-6xl items-stretch gap-5 px-4 py-5 lg:grid-cols-12 lg:py-8",
    children: [s.jsxs("figure", {
      className: "relative overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(70,40,20,0.28)] lg:col-span-7",
      children: [s.jsx("img", {
        src: Vt.hero,
        alt: "A girl in a purple hoodie holds a colourful 3 by 3 mission board in a sunny living room. A broom, a bed, a sink, a chessboard, a comic and computer screens float around her.",
        className: "aspect-[4/3] h-full w-full object-cover object-[center_20%] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[640px]"
      }), s.jsxs("figcaption", {
        className: "hero-caption absolute inset-x-0 bottom-0 p-5 text-white sm:p-7",
        children: [s.jsx("p", {
          className: "text-xs font-extrabold uppercase tracking-[0.18em] text-white",
          children: "Academy Stars 3 · Unit 2"
        }), s.jsx("p", {
          className: "font-display text-3xl leading-tight sm:text-4xl",
          children: "The board is the way out."
        })]
      })]
    }), s.jsxs("section", {
      className: "paper flex flex-col p-6 sm:p-8 lg:col-span-5",
      children: [s.jsx("p", {
        className: "text-xs font-extrabold uppercase tracking-[0.16em] text-[#543b78]",
        children: "45-minute escape · A1+ / A2"
      }), s.jsx("h1", {
        id: "screen-title",
        tabIndex: -1,
        className: "mt-2 font-display text-5xl leading-none outline-none sm:text-6xl",
        children: "Habit House"
      }), s.jsx("div", {
        className: "mt-4 space-y-3 text-base font-semibold leading-relaxed text-ink sm:text-lg",
        children: S.map(x => s.jsx("p", {
          children: x
        }, x))
      }), s.jsx("div", {
        className: "mt-3",
        children: s.jsx(vo, {
          text: h,
          label: "Read this to me"
        })
      }), s.jsx("div", {
        className: "mt-4 flex flex-wrap gap-1.5",
        children: qN.map(x => s.jsx("span", {
          className: "rounded-full bg-[#f6efe6] px-2.5 py-1 text-xs font-extrabold text-ink-soft",
          children: x
        }, x))
      }), s.jsxs("form", {
        className: "mt-6",
        onSubmit: x => {
          x.preventDefault(), i()
        },
        children: [s.jsx("label", {
          htmlFor: "hero-name",
          className: "text-sm font-extrabold",
          children: "What should the house call you?"
        }), s.jsx("input", {
          id: "hero-name",
          value: n,
          autoComplete: "given-name",
          maxLength: 18,
          onChange: x => y(x.target.value),
          className: "mt-2 w-full rounded-2xl border border-[#eadccb] bg-white px-4 py-3 text-lg font-bold outline-none focus:border-[#6d4f97]",
          placeholder: "Your name"
        }), r && s.jsx("p", {
          className: "mt-2 text-sm font-bold text-[#8a3d32]",
          children: r
        }), s.jsx("button", {
          type: "submit",
          className: "btn-primary mt-4 w-full",
          children: "Enter the house"
        })]
      }), s.jsx("p", {
        className: "mt-4 text-xs font-bold text-ink-soft",
        children: "Opening 3 min · 3 missions · door. Progress saves on this device."
      })]
    })]
  })
}

function eb({
  picked: n,
  onToggle: r,
  onLock: y
}) {
  const [i, N] = Q.useState(n[0] ?? "sun"), S = oa(i), h = n.length === 3 && Po(n), x = Nk(n);
  return s.jsxs("div", {
    className: "screen-enter relative mx-auto max-w-5xl px-4 py-6 sm:py-8",
    children: [s.jsx(tb, {}), s.jsxs("div", {
      className: "relative mx-auto max-w-xl text-center",
      children: [s.jsx("p", {
        className: "text-xs font-extrabold uppercase tracking-[0.16em] text-[#543b78]",
        children: "The choice board"
      }), s.jsx("h1", {
        id: "screen-title",
        tabIndex: -1,
        className: "mt-1 font-display text-4xl outline-none sm:text-5xl",
        children: "Choose three missions"
      }), s.jsx("p", {
        className: "mx-auto mt-2 max-w-lg font-semibold leading-relaxed",
        children: "At least one must be Write or Speak. Reading missions come first, then writing, then speaking."
      }), s.jsxs("div", {
        className: "mt-3 flex flex-wrap justify-center gap-2 text-xs font-extrabold",
        children: [s.jsx("span", {
          className: "rounded-full bg-[#e7f4fb] px-3 py-1 text-[#1d6380]",
          children: "R · Read"
        }), s.jsx("span", {
          className: "rounded-full bg-[#fdecd8] px-3 py-1 text-[#8a4e12]",
          children: "W · Write"
        }), s.jsx("span", {
          className: "rounded-full bg-[#f3e9fb] px-3 py-1 text-[#5d3f86]",
          children: "S · Speak"
        })]
      })]
    }), s.jsx("div", {
      className: "relative mx-auto mt-6 mb-6 w-full max-w-[520px]",
      children: s.jsx("div", {
        className: "board-frame",
        children: s.jsx("div", {
          className: "board-face",
          children: Xo.map((p, b) => {
            const T = n.includes(p.id),
              K = Co[p.id],
              D = n.length >= 3 && !T;
            return s.jsxs("div", {
              className: "reveal flex flex-col gap-1",
              style: {
                animationDelay: `${b*45}ms`
              },
              children: [s.jsxs("button", {
                type: "button",
                className: Ae("choice-tile w-full", D && "choice-tile-dim"),
                style: {
                  background: K.bg
                },
                "aria-pressed": T,
                "aria-disabled": D,
                "aria-label": `${p.name}, ${p.kind}${T?", selected":""}`,
                onMouseEnter: () => N(p.id),
                onFocus: () => N(p.id),
                onClick: () => {
                  N(p.id), r(p.id)
                },
                children: [s.jsx("span", {
                  className: "choice-badge absolute left-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-extrabold text-[#2c241c]",
                  children: p.kind === "read" ? "R" : p.kind === "write" ? "W" : "S"
                }), T && s.jsx("span", {
                  className: "absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[#543b78] text-[11px] font-extrabold text-white",
                  children: "✓"
                }), s.jsx(Bl, {
                  id: p.id,
                  className: "h-11 w-11 sm:h-16 sm:w-16",
                  color: K.fg
                })]
              }), s.jsx("span", {
                className: "text-center text-[10px] font-extrabold leading-tight text-ink-soft sm:text-[11px]",
                children: p.short
              })]
            }, p.id)
          })
        })
      })
    }), s.jsxs("article", {
      className: "paper mx-auto mt-6 max-w-xl p-4 sm:p-5",
      children: [s.jsxs("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [s.jsx(Zk, {
          kind: S.kind
        }), s.jsx("h2", {
          className: "font-display text-2xl",
          children: S.name
        }), s.jsxs("span", {
          className: "text-xs font-extrabold text-ink-soft",
          children: ["about ", S.minutes, " min"]
        })]
      }), s.jsx("p", {
        className: "mt-2 font-semibold leading-relaxed",
        children: S.blurb
      })]
    }), s.jsxs("div", {
      className: "mx-auto mt-4 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
      children: [s.jsxs("div", {
        children: [s.jsxs("p", {
          className: "text-sm font-extrabold",
          children: [n.length, " of 3 selected", n.length === 3 && !Po(n) ? " · add a Write or Speak mission" : ""]
        }), x.length > 0 && s.jsxs("p", {
          className: "text-sm font-semibold text-ink-soft",
          children: ["Path: ", x.map(p => oa(p).name).join(" → ")]
        })]
      }), s.jsx("button", {
        type: "button",
        className: Ae("btn-primary", h && "pulse-ring"),
        disabled: !h,
        onClick: y,
        children: "Lock in my path"
      })]
    })]
  })
}

function tb() {
  const n = [{
    label: "Sweep",
    node: s.jsx(ab, {}),
    className: "left-[1%] top-[16%]"
  }, {
    label: "Bed",
    node: s.jsx(lb, {}),
    className: "left-[4%] top-[52%]"
  }, {
    label: "Wash up",
    node: s.jsx(ub, {}),
    className: "left-[7%] bottom-[6%]"
  }, {
    label: "Chess",
    node: s.jsx(cb, {}),
    className: "right-[2%] top-[12%]"
  }, {
    label: "Comic",
    node: s.jsx(nb, {}),
    className: "right-[6%] top-[46%]"
  }, {
    label: "Games",
    node: s.jsx(sb, {}),
    className: "right-[1%] bottom-[10%]"
  }];
  return s.jsx("div", {
    className: "pointer-events-none absolute inset-0 hidden xl:block",
    "aria-hidden": "true",
    children: n.map((r, y) => s.jsx("span", {
      className: Ae("floaty absolute drop-shadow-xl", r.className),
      style: {
        animationDelay: `${y*.45}s`
      },
      children: r.node
    }, r.label))
  })
}

function ab() {
  return s.jsxs("svg", {
    width: "72",
    height: "88",
    viewBox: "0 0 72 88",
    "aria-hidden": "true",
    children: [s.jsx("path", {
      d: "M18 8l8 46",
      stroke: "#c4a574",
      strokeWidth: "6",
      strokeLinecap: "round"
    }), s.jsx("path", {
      d: "M10 52c6 4 14 6 22 4 2 10 0 22-8 28-8-2-16-12-14-32z",
      fill: "#e6c27a"
    }), s.jsx("path", {
      d: "M16 58c4 8 6 18 4 26",
      stroke: "#c9a15a",
      strokeWidth: "2"
    }), s.jsx("path", {
      d: "M14 48h16",
      stroke: "#3aa0c8",
      strokeWidth: "4",
      strokeLinecap: "round"
    })]
  })
}

function lb() {
  return s.jsxs("svg", {
    width: "92",
    height: "64",
    viewBox: "0 0 92 64",
    "aria-hidden": "true",
    children: [s.jsx("rect", {
      x: "8",
      y: "28",
      width: "76",
      height: "24",
      rx: "4",
      fill: "#d7a56a"
    }), s.jsx("rect", {
      x: "14",
      y: "18",
      width: "22",
      height: "14",
      rx: "3",
      fill: "#f7f1e6"
    }), s.jsx("path", {
      d: "M12 30h68v16H12z",
      fill: "#6ea8d8"
    }), s.jsx("circle", {
      cx: "62",
      cy: "26",
      r: "8",
      fill: "#c6864a"
    }), s.jsx("circle", {
      cx: "60",
      cy: "24",
      r: "2",
      fill: "#2c241c"
    })]
  })
}

function ub() {
  return s.jsxs("svg", {
    width: "88",
    height: "64",
    viewBox: "0 0 88 64",
    "aria-hidden": "true",
    children: [s.jsx("path", {
      d: "M8 28h52c4 16 2 26-8 28H18C6 52 4 40 8 28z",
      fill: "#d5dde3"
    }), s.jsx("path", {
      d: "M30 8v16",
      stroke: "#b7c3cc",
      strokeWidth: "4",
      strokeLinecap: "round"
    }), s.jsx("circle", {
      cx: "58",
      cy: "40",
      r: "10",
      fill: "#7dbe6a"
    }), s.jsx("circle", {
      cx: "24",
      cy: "36",
      r: "3",
      fill: "#9fd7f2"
    }), s.jsx("circle", {
      cx: "34",
      cy: "30",
      r: "2",
      fill: "#9fd7f2"
    })]
  })
}

function cb() {
  return s.jsxs("svg", {
    width: "78",
    height: "78",
    viewBox: "0 0 78 78",
    "aria-hidden": "true",
    children: [s.jsx("rect", {
      x: "6",
      y: "10",
      width: "64",
      height: "64",
      rx: "4",
      fill: "#e6c48a"
    }), Array.from({
      length: 16
    }, (n, r) => s.jsx("rect", {
      x: 10 + r % 4 * 14,
      y: 14 + Math.floor(r / 4) * 14,
      width: "14",
      height: "14",
      fill: (r % 4 + Math.floor(r / 4)) % 2 === 0 ? "#f7f1e6" : "#6b4a32"
    }, r))]
  })
}

function nb() {
  return s.jsxs("svg", {
    width: "78",
    height: "60",
    viewBox: "0 0 78 60",
    "aria-hidden": "true",
    children: [s.jsx("path", {
      d: "M8 12h28c4 8 4 28 0 36H8c4-8 4-28 0-36z",
      fill: "#f4d35e"
    }), s.jsx("path", {
      d: "M40 12h28c-4 8-4 28 0 36H40c-4-8-4-28 0-36z",
      fill: "#ef8b78"
    }), s.jsx("path", {
      d: "M14 20h16M14 28h14M44 20h16M44 28h12",
      stroke: "#2c241c",
      strokeWidth: "2",
      opacity: ".35"
    })]
  })
}

function sb() {
  return s.jsxs("svg", {
    width: "86",
    height: "68",
    viewBox: "0 0 86 68",
    "aria-hidden": "true",
    children: [s.jsx("rect", {
      x: "6",
      y: "6",
      width: "74",
      height: "46",
      rx: "6",
      fill: "#2c241c"
    }), s.jsx("rect", {
      x: "12",
      y: "12",
      width: "62",
      height: "34",
      rx: "3",
      fill: "#7ec8ea"
    }), s.jsx("path", {
      d: "M20 40l12-14 10 10 8-8 16 12H20z",
      fill: "#6fbf73"
    }), s.jsx("circle", {
      cx: "52",
      cy: "20",
      r: "4",
      fill: "#f6c431"
    }), s.jsx("rect", {
      x: "36",
      y: "52",
      width: "14",
      height: "8",
      fill: "#5c5148"
    })]
  })
}

function ob({
  name: n,
  ids: r,
  onBack: y,
  onStart: i
}) {
  return s.jsxs("div", {
    className: "screen-enter mx-auto grid max-w-5xl gap-5 px-4 py-6 lg:grid-cols-2 lg:py-10",
    children: [s.jsx("figure", {
      className: "overflow-hidden rounded-[32px] shadow-2xl",
      children: s.jsx("img", {
        src: Vt.hero,
        alt: "The girl waits with the mission board while you lock in your path.",
        className: "h-64 w-full object-cover object-[center_18%] sm:h-80 lg:h-full"
      })
    }), s.jsxs("section", {
      className: "paper p-6 sm:p-8",
      children: [s.jsx("p", {
        className: "text-xs font-extrabold uppercase tracking-[0.16em] text-[#543b78]",
        children: "Your path"
      }), s.jsxs("h1", {
        id: "screen-title",
        tabIndex: -1,
        className: "mt-1 font-display text-4xl outline-none",
        children: [n, ", the door is listening."]
      }), s.jsx("p", {
        className: "mt-3 font-semibold leading-relaxed",
        children: "Three missions. Three code parts. Then five sentences about your real week open the last part. Grammar Rules stay in the header."
      }), s.jsx("ol", {
        className: "mt-5 space-y-3",
        children: r.map((N, S) => {
          const h = oa(N),
            x = Co[h.id];
          return s.jsxs("li", {
            className: "flex items-center gap-3 rounded-2xl bg-[#f6efe6] p-3",
            children: [s.jsx("span", {
              className: "grid h-12 w-12 shrink-0 place-items-center rounded-[22%]",
              style: {
                background: x.bg
              },
              children: s.jsx(Bl, {
                id: h.id,
                className: "h-7 w-7",
                color: x.fg
              })
            }), s.jsxs("div", {
              children: [s.jsxs("p", {
                className: "text-xs font-extrabold text-ink-soft",
                children: ["Mission ", S + 1, " · ", h.kind, " · ", h.minutes, " min"]
              }), s.jsx("p", {
                className: "font-extrabold",
                children: h.name
              })]
            })]
          }, N)
        })
      }), s.jsxs("div", {
        className: "mt-6 flex flex-wrap gap-2",
        children: [s.jsx("button", {
          type: "button",
          className: "btn-secondary",
          onClick: y,
          children: "Change missions"
        }), s.jsx("button", {
          type: "button",
          className: "btn-primary",
          onClick: i,
          children: "Start mission 1"
        })]
      })]
    })]
  })
}

function ib({
  mission: n,
  part: r,
  last: y,
  onNext: i
}) {
  const N = Pu[r];
  return s.jsx("div", {
    className: "screen-enter mx-auto flex min-h-[70dvh] max-w-xl items-center px-4 py-8",
    children: s.jsxs("div", {
      className: "paper w-full overflow-hidden text-center",
      children: [s.jsx("img", {
        src: Vt.hero,
        alt: "The girl in the living room, waiting while the next code part appears.",
        className: "h-44 w-full object-cover object-[center_18%] sm:h-56"
      }), s.jsxs("div", {
        className: "p-6 sm:p-8",
        children: [s.jsx("p", {
          className: "text-xs font-extrabold uppercase tracking-[0.18em] text-[#543b78]",
          children: "Mission complete"
        }), s.jsx("h1", {
          id: "screen-title",
          tabIndex: -1,
          className: "mt-2 font-display text-4xl outline-none sm:text-5xl",
          children: n.name
        }), s.jsx("p", {
          className: "mt-3 font-semibold leading-relaxed",
          children: n.reward
        }), s.jsxs("div", {
          className: "flip-in mx-auto mt-6 grid h-32 w-32 place-items-center rounded-[28%] shadow-xl",
          style: {
            background: N.bg,
            color: N.fg
          },
          children: [s.jsx(Bl, {
            id: N.glyph,
            className: "h-12 w-12",
            color: N.fg
          }), s.jsx("span", {
            className: "text-sm font-extrabold",
            children: N.label
          })]
        }), s.jsxs("p", {
          className: "mt-4 font-extrabold",
          children: ["Part ", r + 1, " of 4 · ", N.label]
        }), s.jsx("button", {
          type: "button",
          className: "btn-primary mt-6",
          onClick: i,
          children: y ? "Continue" : "Next mission"
        })]
      })]
    })
  })
}

function db({
  done: n,
  onBonus: r,
  onDoor: y
}) {
  return s.jsx("div", {
    className: "screen-enter mx-auto flex min-h-[70dvh] max-w-xl flex-col items-center justify-center px-4 py-10 text-center",
    children: s.jsxs("div", {
      className: "paper p-6 text-ink sm:p-8",
      children: [s.jsx("p", {
        className: "text-xs font-extrabold uppercase tracking-[0.16em] text-[#543b78]",
        children: "Three parts collected"
      }), s.jsx("h1", {
        id: "screen-title",
        tabIndex: -1,
        className: "mt-2 font-display text-4xl outline-none",
        children: "The door is close."
      }), s.jsx("img", {
        src: Vt.hero,
        alt: "The girl holds the board, ready for the last part of the code.",
        className: "mx-auto mt-4 h-40 w-full rounded-3xl object-cover object-[center_18%]"
      }), s.jsx("p", {
        className: "mt-4 font-semibold leading-relaxed",
        children: "If you still have time, the Broom Bonus fixes eight sentences and gives a gold star. You do not need the star to escape."
      }), s.jsxs("div", {
        className: "mt-5 flex flex-wrap justify-center gap-2",
        children: [!n && s.jsx("button", {
          type: "button",
          className: "btn-secondary",
          onClick: r,
          children: "Bonus mission"
        }), s.jsx("button", {
          type: "button",
          className: "btn-primary",
          onClick: y,
          children: "Go to the door"
        })]
      })]
    })
  })
}

function rb({
  name: n,
  placed: r,
  solved: y,
  drafts: i,
  attempts: N,
  onPlace: S,
  onDraft: h,
  onSolve: x,
  onAttempt: p,
  onOpen: b,
  onBonus: T,
  bonusDone: K
}) {
  const [D, _] = Q.useState(""), [F, se] = Q.useState(!1), [me, te] = Q.useState(!1), L = rn.every(X => y.includes(X.id));

  function le(X) {
    if (!(X < r)) {
      if (X === r) {
        S(r + 1), _("");
        return
      }
      se(!0), _("Place them in order: SUN, then 3, then LEAF."), window.setTimeout(() => se(!1), 400)
    }
  }

  function je() {
    if (me) return;
    if (r < 3) {
      _("Place your three code parts on the door first.");
      return
    }
    if (!L) {
      _("Check all five sentences first. Each one needs a green yes.");
      return
    }
    const X = rn.map(oe => i[oe.id] ?? "");
    if (UN(X)) {
      _("Use five different sentences. The door can tell a copy.");
      return
    }
    te(!0), window.setTimeout(b, 1100)
  }
  return s.jsxs("div", {
    className: "screen-enter mx-auto grid max-w-6xl gap-5 px-4 py-6 lg:grid-cols-12",
    children: [s.jsxs("div", {
      className: "lg:col-span-5",
      children: [s.jsxs("div", {
        className: "relative overflow-hidden rounded-[28px] shadow-2xl",
        children: [s.jsx("img", {
          src: Vt.door,
          alt: "A wooden front door with four empty code slots.",
          className: "w-full object-cover"
        }), s.jsx("div", {
          className: "absolute left-1/2 top-[47%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#5f758c]/85 p-1.5 shadow-lg backdrop-blur-[1px]",
          children: s.jsx("div", {
            className: "grid grid-cols-4 gap-1",
            children: Pu.map((X, oe) => {
              const g = oe < r || oe === 3 && me;
              return s.jsx("span", {
                className: Ae("grid aspect-square place-items-center rounded-full text-[9px] font-extrabold sm:text-[10px]", g ? "flip-in" : "bg-white/25 text-white"),
                style: g ? {
                  background: X.bg,
                  color: X.fg
                } : void 0,
                children: g ? X.label : oe + 1
              }, X.label)
            })
          })
        })]
      }), s.jsxs("div", {
        className: Ae("paper mt-4 p-4", F && "shake"),
        children: [s.jsx("p", {
          className: "text-sm font-extrabold",
          children: "Place the parts in the order you collected them."
        }), s.jsx("div", {
          className: "mt-3 flex flex-wrap gap-2",
          children: Pu.slice(0, 3).map((X, oe) => s.jsxs("button", {
            type: "button",
            disabled: oe < r,
            onClick: () => le(oe),
            className: "chip !px-3 !py-2",
            style: oe < r ? {
              background: X.bg
            } : void 0,
            children: [oe + 1, " · ", X.label]
          }, X.label))
        }), s.jsx("p", {
          className: "mt-2 text-xs font-bold text-ink-soft",
          children: "HOME stays dark until your five sentences pass."
        })]
      })]
    }), s.jsxs("section", {
      className: "paper p-5 sm:p-7 lg:col-span-7",
      children: [s.jsx("p", {
        className: "text-xs font-extrabold uppercase tracking-[0.16em] text-[#543b78]",
        children: "Final escape · about 6 minutes"
      }), s.jsxs("h1", {
        id: "screen-title",
        tabIndex: -1,
        className: "mt-1 font-display text-4xl outline-none",
        children: [n, ", tell the door your week."]
      }), s.jsx("p", {
        className: "mt-2 font-semibold leading-relaxed",
        children: "Five true sentences. Use different frequency words. Then turn the key."
      }), s.jsx("div", {
        className: "mt-5 space-y-6",
        children: rn.map((X, oe) => s.jsx(yb, {
          index: oe + 1,
          item: X,
          draft: i[X.id] ?? "",
          attempts: N[X.id] ?? 0,
          solved: y.includes(X.id),
          onDraft: g => h(X.id, g),
          onSolve: () => x(X.id),
          onAttempt: () => p(X.id)
        }, X.id))
      }), D && s.jsx(tt, {
        ok: !1,
        message: D
      }), s.jsxs("div", {
        className: "mt-6 flex flex-wrap gap-2",
        children: [s.jsx("button", {
          type: "button",
          className: "btn-primary",
          disabled: me,
          onClick: je,
          children: me ? "The lock is turning…" : "Turn the key"
        }), !K && s.jsx("button", {
          type: "button",
          className: "btn-secondary",
          onClick: T,
          children: "I finished early — bonus"
        })]
      })]
    })]
  })
}

function yb({
  index: n,
  item: r,
  draft: y,
  attempts: i,
  solved: N,
  onDraft: S,
  onSolve: h,
  onAttempt: x
}) {
  const [p, b] = Q.useState(null);

  function T() {
    const K = r.mode === "qa" ? wN(y) : Sk(y, {
      channel: "write",
      freq: r.freq ?? "any",
      keys: r.keys,
      keyHint: r.keyHint
    });
    b(K), K.ok ? h() : x()
  }
  return s.jsxs("div", {
    className: "scroll-drift rounded-3xl border border-[#eadccb] bg-white/70 p-4",
    children: [s.jsxs("p", {
      className: "text-xs font-extrabold text-[#543b78]",
      children: ["Sentence ", n]
    }), s.jsx("h2", {
      className: "mt-1 font-display text-2xl leading-snug",
      children: r.prompt
    }), s.jsxs("p", {
      className: "mt-1 text-sm font-semibold text-ink-soft",
      children: ["Example: ", r.example]
    }), s.jsx("textarea", {
      value: y,
      readOnly: N,
      rows: r.mode === "qa" ? 3 : 2,
      onChange: K => {
        b(null), S(K.target.value)
      },
      className: "mt-2 w-full resize-y rounded-2xl border border-[#eadccb] bg-[#fffaf4] px-4 py-3 text-base font-semibold outline-none focus:border-[#6d4f97]"
    }), !N && s.jsx(mn, {
      words: r.mode === "qa" ? ["How often do you", "How often does", "I usually", "I always", ...Mo] : Mo,
      onInsert: K => S(y ? `${y.replace(/\s+$/,"")} ${K}` : K)
    }), !N && s.jsx("button", {
      type: "button",
      className: "btn-secondary mt-3",
      onClick: T,
      children: "Check"
    }), p && !N && s.jsx(tt, {
      ok: p.ok,
      message: p.message,
      tip: p.tip
    }), N && s.jsxs("div", {
      className: "mt-2 flex flex-wrap items-center gap-3",
      children: [s.jsx("p", {
        className: "text-sm font-extrabold text-[#1f6b45]",
        children: "Yes. The door heard that one."
      }), s.jsx("button", {
        type: "button",
        className: "text-sm font-extrabold text-[#543b78] underline",
        onClick: () => S(y),
        children: "Edit"
      })]
    }), !N && i >= 2 && s.jsxs("p", {
      className: "mt-2 text-sm font-semibold text-ink-soft",
      children: ["Model: ", r.model, " ", s.jsx("button", {
        type: "button",
        className: "font-extrabold text-[#543b78] underline",
        onClick: () => S(r.model),
        children: "Use it"
      })]
    })]
  })
}

function kb({
  name: n,
  drafts: r,
  bonus: y,
  onGrammar: i,
  onBonus: N,
  onReset: S
}) {
  const h = rn.map(x => r[x.id]).filter(Boolean);
  return s.jsxs("div", {
    className: "screen-enter mx-auto grid max-w-6xl gap-5 px-4 py-6 lg:grid-cols-2 lg:py-10",
    children: [s.jsxs("figure", {
      className: "relative overflow-hidden rounded-[32px] shadow-2xl",
      children: [s.jsx("img", {
        src: Vt.openDoor,
        alt: "The front door stands open onto a sunny garden.",
        className: "h-72 w-full object-cover sm:h-96 lg:h-full"
      }), s.jsx("div", {
        className: "pointer-events-none absolute inset-0",
        children: Array.from({
          length: 8
        }, (x, p) => s.jsx("span", {
          className: "mote absolute h-1.5 w-1.5 rounded-full bg-[#f6c431]",
          style: {
            left: `${12+p*10}%`,
            bottom: "18%",
            animationDelay: `${p*.35}s`
          }
        }, p))
      })]
    }), s.jsxs("section", {
      className: "paper scroll-drift p-6 text-ink sm:p-8",
      children: [s.jsx("p", {
        className: "text-xs font-extrabold uppercase tracking-[0.16em] text-[#1f6b45]",
        children: "Code accepted"
      }), s.jsxs("h1", {
        id: "screen-title",
        tabIndex: -1,
        className: "mt-1 font-display text-5xl outline-none",
        children: [n, ", the door is open."]
      }), s.jsx("img", {
        src: Vt.hero,
        alt: "The girl smiles, the mission board still in her hands.",
        className: "mt-4 h-36 w-full rounded-3xl object-cover object-[center_16%]"
      }), s.jsx("p", {
        className: "mt-4 text-lg font-semibold leading-relaxed",
        children: "You used Present Simple, frequency adverbs and your own habits to leave Habit House. You did not only finish a worksheet. You used English."
      }), s.jsxs("div", {
        className: "mt-4 flex flex-wrap gap-2",
        children: [Pu.map(x => s.jsxs("span", {
          className: "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-extrabold",
          style: {
            background: x.bg,
            color: x.fg
          },
          children: [s.jsx(Bl, {
            id: x.glyph,
            className: "h-4 w-4",
            color: x.fg
          }), x.label]
        }, x.label)), y && s.jsx("span", {
          className: "rounded-full bg-[#f6c431] px-3 py-1 text-sm font-extrabold",
          children: "Gold star"
        })]
      }), s.jsx("h2", {
        className: "mt-6 font-display text-2xl",
        children: "Your week"
      }), s.jsx("ul", {
        className: "mt-2 space-y-2",
        children: h.map(x => s.jsx("li", {
          className: "rounded-2xl bg-[#f6efe6] px-3 py-2 font-semibold",
          children: x
        }, x))
      }), s.jsxs("div", {
        className: "mt-6 flex flex-wrap gap-2",
        children: [s.jsx("button", {
          type: "button",
          className: "btn-secondary",
          onClick: i,
          children: "Grammar Rules"
        }), !y && s.jsx("button", {
          type: "button",
          className: "btn-secondary",
          onClick: N,
          children: "Bonus mission"
        }), s.jsx("button", {
          type: "button",
          className: "btn-primary",
          onClick: S,
          children: "↺ Начать заново"
        })]
      })]
    })]
  })
}
mN.createRoot(document.getElementById("root")).render(s.jsx(Q.StrictMode, {
  children: s.jsx(_p, {})
}));