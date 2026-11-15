(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))o(y);new MutationObserver(y=>{for(const M of y)if(M.type==="childList")for(const _ of M.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function d(y){const M={};return y.integrity&&(M.integrity=y.integrity),y.referrerPolicy&&(M.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?M.credentials="include":y.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function o(y){if(y.ep)return;y.ep=!0;const M=d(y);fetch(y.href,M)}})();var Ds={exports:{}},Ln={};var Fd;function Pp(){if(Fd)return Ln;Fd=1;var f=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function d(o,y,M){var _=null;if(M!==void 0&&(_=""+M),y.key!==void 0&&(_=""+y.key),"key"in y){M={};for(var U in y)U!=="key"&&(M[U]=y[U])}else M=y;return y=M.ref,{$$typeof:f,type:o,key:_,ref:y!==void 0?y:null,props:M}}return Ln.Fragment=v,Ln.jsx=d,Ln.jsxs=d,Ln}var $d;function ex(){return $d||($d=1,Ds.exports=Pp()),Ds.exports}var i=ex(),Us={exports:{}},ne={};var Id;function tx(){if(Id)return ne;Id=1;var f=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),_=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),W=Symbol.iterator;function le(h){return h===null||typeof h!="object"?null:(h=W&&h[W]||h["@@iterator"],typeof h=="function"?h:null)}var se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,N={};function G(h,w,H){this.props=h,this.context=w,this.refs=N,this.updater=H||se}G.prototype.isReactComponent={},G.prototype.setState=function(h,w){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,w,"setState")},G.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function B(){}B.prototype=G.prototype;function L(h,w,H){this.props=h,this.context=w,this.refs=N,this.updater=H||se}var D=L.prototype=new B;D.constructor=L,C(D,G.prototype),D.isPureReactComponent=!0;var ae=Array.isArray;function re(){}var F={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function we(h,w,H){var X=H.ref;return{$$typeof:f,type:h,key:w,ref:X!==void 0?X:null,props:H}}function Gt(h,w){return we(h.type,w,h.props)}function ft(h){return typeof h=="object"&&h!==null&&h.$$typeof===f}function Xe(h){var w={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(H){return w[H]})}var kt=/\/+/g;function ot(h,w){return typeof h=="object"&&h!==null&&h.key!=null?Xe(""+h.key):w.toString(36)}function Ze(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(re,re):(h.status="pending",h.then(function(w){h.status==="pending"&&(h.status="fulfilled",h.value=w)},function(w){h.status==="pending"&&(h.status="rejected",h.reason=w)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function A(h,w,H,X,te){var ce=typeof h;(ce==="undefined"||ce==="boolean")&&(h=null);var ee=!1;if(h===null)ee=!0;else switch(ce){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(h.$$typeof){case f:case v:ee=!0;break;case Y:return ee=h._init,A(ee(h._payload),w,H,X,te)}}if(ee)return te=te(h),ee=X===""?"."+ot(h,0):X,ae(te)?(H="",ee!=null&&(H=ee.replace(kt,"$&/")+"/"),A(te,w,H,"",function(Rt){return Rt})):te!=null&&(ft(te)&&(te=Gt(te,H+(te.key==null||h&&h.key===te.key?"":(""+te.key).replace(kt,"$&/")+"/")+ee)),w.push(te)),1;ee=0;var Ve=X===""?".":X+":";if(ae(h))for(var Me=0;Me<h.length;Me++)X=h[Me],ce=Ve+ot(X,Me),ee+=A(X,w,H,ce,te);else if(Me=le(h),typeof Me=="function")for(h=Me.call(h),Me=0;!(X=h.next()).done;)X=X.value,ce=Ve+ot(X,Me++),ee+=A(X,w,H,ce,te);else if(ce==="object"){if(typeof h.then=="function")return A(Ze(h),w,H,X,te);throw w=String(h),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return ee}function q(h,w,H){if(h==null)return h;var X=[],te=0;return A(h,X,"","",function(ce){return w.call(H,ce,te++)}),X}function R(h){if(h._status===-1){var w=h._result;w=w(),w.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H)},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H)}),h._status===-1&&(h._status=0,h._result=w)}if(h._status===1)return h._result.default;throw h._result}var ve=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},je={map:q,forEach:function(h,w,H){q(h,function(){w.apply(this,arguments)},H)},count:function(h){var w=0;return q(h,function(){w++}),w},toArray:function(h){return q(h,function(w){return w})||[]},only:function(h){if(!ft(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return ne.Activity=k,ne.Children=je,ne.Component=G,ne.Fragment=d,ne.Profiler=y,ne.PureComponent=L,ne.StrictMode=o,ne.Suspense=j,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ne.__COMPILER_RUNTIME={__proto__:null,c:function(h){return F.H.useMemoCache(h)}},ne.cache=function(h){return function(){return h.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(h,w,H){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var X=C({},h.props),te=h.key;if(w!=null)for(ce in w.key!==void 0&&(te=""+w.key),w)!Q.call(w,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&w.ref===void 0||(X[ce]=w[ce]);var ce=arguments.length-2;if(ce===1)X.children=H;else if(1<ce){for(var ee=Array(ce),Ve=0;Ve<ce;Ve++)ee[Ve]=arguments[Ve+2];X.children=ee}return we(h.type,te,X)},ne.createContext=function(h){return h={$$typeof:_,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:M,_context:h},h},ne.createElement=function(h,w,H){var X,te={},ce=null;if(w!=null)for(X in w.key!==void 0&&(ce=""+w.key),w)Q.call(w,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=w[X]);var ee=arguments.length-2;if(ee===1)te.children=H;else if(1<ee){for(var Ve=Array(ee),Me=0;Me<ee;Me++)Ve[Me]=arguments[Me+2];te.children=Ve}if(h&&h.defaultProps)for(X in ee=h.defaultProps,ee)te[X]===void 0&&(te[X]=ee[X]);return we(h,ce,te)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(h){return{$$typeof:U,render:h}},ne.isValidElement=ft,ne.lazy=function(h){return{$$typeof:Y,_payload:{_status:-1,_result:h},_init:R}},ne.memo=function(h,w){return{$$typeof:x,type:h,compare:w===void 0?null:w}},ne.startTransition=function(h){var w=F.T,H={};F.T=H;try{var X=h(),te=F.S;te!==null&&te(H,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(re,ve)}catch(ce){ve(ce)}finally{w!==null&&H.types!==null&&(w.types=H.types),F.T=w}},ne.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ne.use=function(h){return F.H.use(h)},ne.useActionState=function(h,w,H){return F.H.useActionState(h,w,H)},ne.useCallback=function(h,w){return F.H.useCallback(h,w)},ne.useContext=function(h){return F.H.useContext(h)},ne.useDebugValue=function(){},ne.useDeferredValue=function(h,w){return F.H.useDeferredValue(h,w)},ne.useEffect=function(h,w){return F.H.useEffect(h,w)},ne.useEffectEvent=function(h){return F.H.useEffectEvent(h)},ne.useId=function(){return F.H.useId()},ne.useImperativeHandle=function(h,w,H){return F.H.useImperativeHandle(h,w,H)},ne.useInsertionEffect=function(h,w){return F.H.useInsertionEffect(h,w)},ne.useLayoutEffect=function(h,w){return F.H.useLayoutEffect(h,w)},ne.useMemo=function(h,w){return F.H.useMemo(h,w)},ne.useOptimistic=function(h,w){return F.H.useOptimistic(h,w)},ne.useReducer=function(h,w,H){return F.H.useReducer(h,w,H)},ne.useRef=function(h){return F.H.useRef(h)},ne.useState=function(h){return F.H.useState(h)},ne.useSyncExternalStore=function(h,w,H){return F.H.useSyncExternalStore(h,w,H)},ne.useTransition=function(){return F.H.useTransition()},ne.version="19.2.6",ne}var Pd;function Zs(){return Pd||(Pd=1,Us.exports=tx()),Us.exports}var oe=Zs(),ks={exports:{}},Qn={},Rs={exports:{}},Hs={};var em;function lx(){return em||(em=1,(function(f){function v(A,q){var R=A.length;A.push(q);e:for(;0<R;){var ve=R-1>>>1,je=A[ve];if(0<y(je,q))A[ve]=q,A[R]=je,R=ve;else break e}}function d(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var q=A[0],R=A.pop();if(R!==q){A[0]=R;e:for(var ve=0,je=A.length,h=je>>>1;ve<h;){var w=2*(ve+1)-1,H=A[w],X=w+1,te=A[X];if(0>y(H,R))X<je&&0>y(te,H)?(A[ve]=te,A[X]=R,ve=X):(A[ve]=H,A[w]=R,ve=w);else if(X<je&&0>y(te,R))A[ve]=te,A[X]=R,ve=X;else break e}}return q}function y(A,q){var R=A.sortIndex-q.sortIndex;return R!==0?R:A.id-q.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;f.unstable_now=function(){return M.now()}}else{var _=Date,U=_.now();f.unstable_now=function(){return _.now()-U}}var j=[],x=[],Y=1,k=null,W=3,le=!1,se=!1,C=!1,N=!1,G=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(A){for(var q=d(x);q!==null;){if(q.callback===null)o(x);else if(q.startTime<=A)o(x),q.sortIndex=q.expirationTime,v(j,q);else break;q=d(x)}}function ae(A){if(C=!1,D(A),!se)if(d(j)!==null)se=!0,re||(re=!0,Xe());else{var q=d(x);q!==null&&Ze(ae,q.startTime-A)}}var re=!1,F=-1,Q=5,we=-1;function Gt(){return N?!0:!(f.unstable_now()-we<Q)}function ft(){if(N=!1,re){var A=f.unstable_now();we=A;var q=!0;try{e:{se=!1,C&&(C=!1,B(F),F=-1),le=!0;var R=W;try{t:{for(D(A),k=d(j);k!==null&&!(k.expirationTime>A&&Gt());){var ve=k.callback;if(typeof ve=="function"){k.callback=null,W=k.priorityLevel;var je=ve(k.expirationTime<=A);if(A=f.unstable_now(),typeof je=="function"){k.callback=je,D(A),q=!0;break t}k===d(j)&&o(j),D(A)}else o(j);k=d(j)}if(k!==null)q=!0;else{var h=d(x);h!==null&&Ze(ae,h.startTime-A),q=!1}}break e}finally{k=null,W=R,le=!1}q=void 0}}finally{q?Xe():re=!1}}}var Xe;if(typeof L=="function")Xe=function(){L(ft)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,ot=kt.port2;kt.port1.onmessage=ft,Xe=function(){ot.postMessage(null)}}else Xe=function(){G(ft,0)};function Ze(A,q){F=G(function(){A(f.unstable_now())},q)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(A){A.callback=null},f.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<A?Math.floor(1e3/A):5},f.unstable_getCurrentPriorityLevel=function(){return W},f.unstable_next=function(A){switch(W){case 1:case 2:case 3:var q=3;break;default:q=W}var R=W;W=q;try{return A()}finally{W=R}},f.unstable_requestPaint=function(){N=!0},f.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=W;W=A;try{return q()}finally{W=R}},f.unstable_scheduleCallback=function(A,q,R){var ve=f.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ve+R:ve):R=ve,A){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=R+je,A={id:Y++,callback:q,priorityLevel:A,startTime:R,expirationTime:je,sortIndex:-1},R>ve?(A.sortIndex=R,v(x,A),d(j)===null&&A===d(x)&&(C?(B(F),F=-1):C=!0,Ze(ae,R-ve))):(A.sortIndex=je,v(j,A),se||le||(se=!0,re||(re=!0,Xe()))),A},f.unstable_shouldYield=Gt,f.unstable_wrapCallback=function(A){var q=W;return function(){var R=W;W=q;try{return A.apply(this,arguments)}finally{W=R}}}})(Hs)),Hs}var tm;function ax(){return tm||(tm=1,Rs.exports=lx()),Rs.exports}var Bs={exports:{}},et={};var lm;function nx(){if(lm)return et;lm=1;var f=Zs();function v(j){var x="https://react.dev/errors/"+j;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)x+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+j+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(v(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},y=Symbol.for("react.portal");function M(j,x,Y){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:k==null?null:""+k,children:j,containerInfo:x,implementation:Y}}var _=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function U(j,x){if(j==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,et.createPortal=function(j,x){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(v(299));return M(j,x,null,Y)},et.flushSync=function(j){var x=_.T,Y=o.p;try{if(_.T=null,o.p=2,j)return j()}finally{_.T=x,o.p=Y,o.d.f()}},et.preconnect=function(j,x){typeof j=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(j,x))},et.prefetchDNS=function(j){typeof j=="string"&&o.d.D(j)},et.preinit=function(j,x){if(typeof j=="string"&&x&&typeof x.as=="string"){var Y=x.as,k=U(Y,x.crossOrigin),W=typeof x.integrity=="string"?x.integrity:void 0,le=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;Y==="style"?o.d.S(j,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:k,integrity:W,fetchPriority:le}):Y==="script"&&o.d.X(j,{crossOrigin:k,integrity:W,fetchPriority:le,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},et.preinitModule=function(j,x){if(typeof j=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var Y=U(x.as,x.crossOrigin);o.d.M(j,{crossOrigin:Y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(j)},et.preload=function(j,x){if(typeof j=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var Y=x.as,k=U(Y,x.crossOrigin);o.d.L(j,Y,{crossOrigin:k,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},et.preloadModule=function(j,x){if(typeof j=="string")if(x){var Y=U(x.as,x.crossOrigin);o.d.m(j,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:Y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(j)},et.requestFormReset=function(j){o.d.r(j)},et.unstable_batchedUpdates=function(j,x){return j(x)},et.useFormState=function(j,x,Y){return _.H.useFormState(j,x,Y)},et.useFormStatus=function(){return _.H.useHostTransitionStatus()},et.version="19.2.6",et}var am;function ux(){if(am)return Bs.exports;am=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(v){console.error(v)}}return f(),Bs.exports=nx(),Bs.exports}var nm;function ix(){if(nm)return Qn;nm=1;var f=ax(),v=Zs(),d=ux();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(M(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return j(n),e;if(u===a)return j(n),t;u=u.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=u;else{for(var c=!1,s=n.child;s;){if(s===l){c=!0,l=n,a=u;break}if(s===a){c=!0,a=n,l=u;break}s=s.sibling}if(!c){for(s=u.child;s;){if(s===l){c=!0,l=u,a=n;break}if(s===a){c=!0,a=u,l=n;break}s=s.sibling}if(!c)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function Y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,W=Symbol.for("react.element"),le=Symbol.for("react.transitional.element"),se=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Gt=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var kt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===kt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case G:return"Profiler";case N:return"StrictMode";case ae:return"Suspense";case re:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case se:return"Portal";case L:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ot(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ot(e(t))}catch{}}return null}var Ze=Array.isArray,A=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},ve=[],je=-1;function h(e){return{current:e}}function w(e){0>je||(e.current=ve[je],ve[je]=null,je--)}function H(e,t){je++,ve[je]=e.current,e.current=t}var X=h(null),te=h(null),ce=h(null),ee=h(null);function Ve(e,t){switch(H(ce,t),H(te,e),H(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gd(t),e=vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(X),H(X,e)}function Me(){w(X),w(te),w(ce)}function Rt(e){e.memoizedState!==null&&H(ee,e);var t=X.current,l=vd(t,e.type);t!==l&&(H(te,e),H(X,l))}function sl(e){te.current===e&&(w(X),w(te)),ee.current===e&&(w(ee),qn._currentValue=R)}var fl,Ks;function Bl(e){if(fl===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||"",Ks=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fl+e+Ks}var xi=!1;function yi(e,t){if(!e||xi)return"";xi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(T){var S=T}Reflect.construct(e,[],O)}else{try{O.call()}catch(T){S=T}e.call(O.prototype)}}else{try{throw Error()}catch(T){S=T}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(T){if(T&&S&&typeof T.stack=="string")return[T.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),c=u[0],s=u[1];if(c&&s){var r=c.split(`
`),g=s.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===g.length)for(a=r.length-1,n=g.length-1;1<=a&&0<=n&&r[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==g[n]){var z=`
`+r[a].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=a&&0<=n);break}}}finally{xi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Bl(l):""}function wm(e,t){switch(e.tag){case 26:case 27:case 5:return Bl(e.type);case 16:return Bl("Lazy");case 13:return e.child!==t&&t!==null?Bl("Suspense Fallback"):Bl("Suspense");case 19:return Bl("SuspenseList");case 0:case 15:return yi(e.type,!1);case 11:return yi(e.type.render,!1);case 1:return yi(e.type,!0);case 31:return Bl("Activity");default:return""}}function Js(e){try{var t="",l=null;do t+=wm(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var bi=Object.prototype.hasOwnProperty,gi=f.unstable_scheduleCallback,vi=f.unstable_cancelCallback,Om=f.unstable_shouldYield,Cm=f.unstable_requestPaint,rt=f.unstable_now,Dm=f.unstable_getCurrentPriorityLevel,Ws=f.unstable_ImmediatePriority,Fs=f.unstable_UserBlockingPriority,Jn=f.unstable_NormalPriority,Um=f.unstable_LowPriority,$s=f.unstable_IdlePriority,km=f.log,Rm=f.unstable_setDisableYieldValue,Fa=null,dt=null;function ol(e){if(typeof km=="function"&&Rm(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Fa,e)}catch{}}var mt=Math.clz32?Math.clz32:qm,Hm=Math.log,Bm=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Hm(e)/Bm|0)|0}var Wn=256,Fn=262144,$n=4194304;function ql(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~u,a!==0?n=ql(a):(c&=s,c!==0?n=ql(c):l||(l=s&~e,l!==0&&(n=ql(l))))):(s=a&~u,s!==0?n=ql(s):c!==0?n=ql(c):l||(l=a&~e,l!==0&&(n=ql(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function $a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ym(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Is(){var e=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),e}function Si(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ia(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gm(e,t,l,a,n,u){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(l=c&~l;0<l;){var z=31-mt(l),O=1<<z;s[z]=0,r[z]=-1;var S=g[z];if(S!==null)for(g[z]=null,z=0;z<S.length;z++){var T=S[z];T!==null&&(T.lane&=-536870913)}l&=~O}a!==0&&Ps(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(c&~t))}function Ps(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-mt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function ef(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-mt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function tf(e,t){var l=t&-t;return l=(l&42)!==0?1:ji(l),(l&(e.suspendedLanes|t))!==0?0:l}function ji(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ni(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lf(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Ld(e.type))}function af(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var rl=Math.random().toString(36).slice(2),We="__reactFiber$"+rl,lt="__reactProps$"+rl,ca="__reactContainer$"+rl,Ti="__reactEvents$"+rl,Xm="__reactListeners$"+rl,Lm="__reactHandles$"+rl,nf="__reactResources$"+rl,Pa="__reactMarker$"+rl;function Ai(e){delete e[We],delete e[lt],delete e[Ti],delete e[Xm],delete e[Lm]}function sa(e){var t=e[We];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ca]||l[We]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=zd(e);e!==null;){if(l=e[We])return l;e=zd(e)}return t}e=l,l=e.parentNode}return null}function fa(e){if(e=e[We]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function en(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function oa(e){var t=e[nf];return t||(t=e[nf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Pa]=!0}var uf=new Set,cf={};function Yl(e,t){ra(e,t),ra(e+"Capture",t)}function ra(e,t){for(cf[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var Qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sf={},ff={};function Zm(e){return bi.call(ff,e)?!0:bi.call(sf,e)?!1:Qm.test(e)?ff[e]=!0:(sf[e]=!0,!1)}function Pn(e,t,l){if(Zm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function eu(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Xt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){if(!e._valueTracker){var t=of(e)?"checked":"value";e._valueTracker=Vm(e,t,""+e[t])}}function rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=of(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function tu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Km=/[\n"\\]/g;function jt(e){return e.replace(Km,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zi(e,t,l,a,n,u,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Ei(e,c,St(t)):l!=null?Ei(e,c,St(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+St(s):e.removeAttribute("name")}function df(e,t,l,a,n,u,c,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){_i(e);return}l=l!=null?""+St(l):"",t=t!=null?""+St(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),_i(e)}function Ei(e,t,l){t==="number"&&tu(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function da(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+St(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function mf(e,t,l){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+St(l):""}function hf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(o(92));if(Ze(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=St(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),_i(e)}function ma(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Jm.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function xf(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&pf(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&pf(e,u,t[u])}function Mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lu(e){return Fm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Lt(){}var wi=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,pa=null;function yf(e){var t=fa(e);if(t&&(e=t.stateNode)){var l=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(zi(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[lt]||null;if(!n)throw Error(o(90));zi(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&rf(a)}break e;case"textarea":mf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&da(e,!!l.multiple,t,!1)}}}var Ci=!1;function bf(e,t,l){if(Ci)return e(t,l);Ci=!0;try{var a=e(t);return a}finally{if(Ci=!1,(ha!==null||pa!==null)&&(Lu(),ha&&(t=ha,e=pa,pa=ha=null,yf(t),e)))for(t=0;t<e.length;t++)yf(e[t])}}function tn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[lt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Di=!1;if(Qt)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){Di=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{Di=!1}var dl=null,Ui=null,au=null;function gf(){if(au)return au;var e,t=Ui,l=t.length,a,n="value"in dl?dl.value:dl.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[u-a];a++);return au=n.slice(e,1<a?1-a:void 0)}function nu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uu(){return!0}function vf(){return!1}function at(e){function t(l,a,n,u,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?uu:vf,this.isPropagationStopped=vf,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),t}var Gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=at(Gl),an=k({},Gl,{view:0,detail:0}),$m=at(an),ki,Ri,nn,cu=k({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&e.type==="mousemove"?(ki=e.screenX-nn.screenX,Ri=e.screenY-nn.screenY):Ri=ki=0,nn=e),ki)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),Sf=at(cu),Im=k({},cu,{dataTransfer:0}),Pm=at(Im),eh=k({},an,{relatedTarget:0}),Hi=at(eh),th=k({},Gl,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=at(th),ah=k({},Gl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nh=at(ah),uh=k({},Gl,{data:0}),jf=at(uh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Bi(){return fh}var oh=k({},an,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?nu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rh=at(oh),dh=k({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=at(dh),mh=k({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),hh=at(mh),ph=k({},Gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=at(ph),yh=k({},cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=at(yh),gh=k({},Gl,{newState:0,oldState:0}),vh=at(gh),Sh=[9,13,27,32],qi=Qt&&"CompositionEvent"in window,un=null;Qt&&"documentMode"in document&&(un=document.documentMode);var jh=Qt&&"TextEvent"in window&&!un,Tf=Qt&&(!qi||un&&8<un&&11>=un),Af=" ",_f=!1;function zf(e,t){switch(e){case"keyup":return Sh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xa=!1;function Nh(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(_f=!0,Af);case"textInput":return e=t.data,e===Af&&_f?null:e;default:return null}}function Th(e,t){if(xa)return e==="compositionend"||!qi&&zf(e,t)?(e=gf(),au=Ui=dl=null,xa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ah[e.type]:t==="textarea"}function wf(e,t,l,a){ha?pa?pa.push(a):pa=[a]:ha=a,t=Fu(t,"onChange"),0<t.length&&(l=new iu("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var cn=null,sn=null;function _h(e){md(e,0)}function su(e){var t=en(e);if(rf(t))return e}function Of(e,t){if(e==="change")return t}var Cf=!1;if(Qt){var Yi;if(Qt){var Gi="oninput"in document;if(!Gi){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Gi=typeof Df.oninput=="function"}Yi=Gi}else Yi=!1;Cf=Yi&&(!document.documentMode||9<document.documentMode)}function Uf(){cn&&(cn.detachEvent("onpropertychange",kf),sn=cn=null)}function kf(e){if(e.propertyName==="value"&&su(sn)){var t=[];wf(t,sn,e,Oi(e)),bf(_h,t)}}function zh(e,t,l){e==="focusin"?(Uf(),cn=t,sn=l,cn.attachEvent("onpropertychange",kf)):e==="focusout"&&Uf()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return su(sn)}function Mh(e,t){if(e==="click")return su(t)}function wh(e,t){if(e==="input"||e==="change")return su(t)}function Oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Oh;function fn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!bi.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hf(e,t){var l=Rf(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Rf(l)}}function Bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tu(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=tu(e.document)}return t}function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ch=Qt&&"documentMode"in document&&11>=document.documentMode,ya=null,Li=null,on=null,Qi=!1;function Yf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qi||ya==null||ya!==tu(a)||(a=ya,"selectionStart"in a&&Xi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),on&&fn(on,a)||(on=a,a=Fu(Li,"onSelect"),0<a.length&&(t=new iu("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ya)))}function Xl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ba={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionrun:Xl("Transition","TransitionRun"),transitionstart:Xl("Transition","TransitionStart"),transitioncancel:Xl("Transition","TransitionCancel"),transitionend:Xl("Transition","TransitionEnd")},Zi={},Gf={};Qt&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Ll(e){if(Zi[e])return Zi[e];if(!ba[e])return e;var t=ba[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Gf)return Zi[e]=t[l];return e}var Xf=Ll("animationend"),Lf=Ll("animationiteration"),Qf=Ll("animationstart"),Dh=Ll("transitionrun"),Uh=Ll("transitionstart"),kh=Ll("transitioncancel"),Zf=Ll("transitionend"),Vf=new Map,Vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vi.push("scrollEnd");function Ct(e,t){Vf.set(e,t),Yl(t,[e])}var fu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],ga=0,Ki=0;function ou(){for(var e=ga,t=Ki=ga=0;t<e;){var l=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var u=Nt[t];if(Nt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}u!==0&&Kf(l,n,u)}}function ru(e,t,l,a){Nt[ga++]=e,Nt[ga++]=t,Nt[ga++]=l,Nt[ga++]=a,Ki|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ji(e,t,l,a){return ru(e,t,l,a),du(e)}function Ql(e,t){return ru(e,null,null,t),du(e)}function Kf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-mt(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function du(e){if(50<Cn)throw Cn=0,as=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var va={};function Rh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,l,a){return new Rh(e,t,l,a)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var l=e.alternate;return l===null?(l=pt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Jf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mu(e,t,l,a,n,u){var c=0;if(a=e,typeof e=="function")Wi(e)&&(c=1);else if(typeof e=="string")c=Gp(e,l,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=pt(31,l,t,n),e.elementType=we,e.lanes=u,e;case C:return Zl(l.children,n,u,t);case N:c=8,n|=24;break;case G:return e=pt(12,l,t,n|2),e.elementType=G,e.lanes=u,e;case ae:return e=pt(13,l,t,n),e.elementType=ae,e.lanes=u,e;case re:return e=pt(19,l,t,n),e.elementType=re,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:c=10;break e;case B:c=9;break e;case D:c=11;break e;case F:c=14;break e;case Q:c=16,a=null;break e}c=29,l=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=pt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function Zl(e,t,l,a){return e=pt(7,e,a,t),e.lanes=l,e}function Fi(e,t,l){return e=pt(6,e,null,t),e.lanes=l,e}function Wf(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function $i(e,t,l){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ff=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var l=Ff.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Js(t)},Ff.set(e,t),t)}return{value:e,source:t,stack:Js(t)}}var Sa=[],ja=0,hu=null,rn=0,At=[],_t=0,ml=null,Ht=1,Bt="";function Vt(e,t){Sa[ja++]=rn,Sa[ja++]=hu,hu=e,rn=t}function $f(e,t,l){At[_t++]=Ht,At[_t++]=Bt,At[_t++]=ml,ml=e;var a=Ht;e=Bt;var n=32-mt(a)-1;a&=~(1<<n),l+=1;var u=32-mt(t)+n;if(30<u){var c=n-n%5;u=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Ht=1<<32-mt(t)+n|l<<n|a,Bt=u+e}else Ht=1<<u|l<<n|a,Bt=e}function Ii(e){e.return!==null&&(Vt(e,1),$f(e,1,0))}function Pi(e){for(;e===hu;)hu=Sa[--ja],Sa[ja]=null,rn=Sa[--ja],Sa[ja]=null;for(;e===ml;)ml=At[--_t],At[_t]=null,Bt=At[--_t],At[_t]=null,Ht=At[--_t],At[_t]=null}function If(e,t){At[_t++]=Ht,At[_t++]=Bt,At[_t++]=ml,Ht=t.id,Bt=t.overflow,ml=e}var Fe=null,Oe=null,ye=!1,hl=null,zt=!1,ec=Error(o(519));function pl(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dn(Tt(t,e)),ec}function Pf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[We]=e,t[lt]=a,l){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(l=0;l<Un.length;l++)me(Un[l],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),df(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),hf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||yd(t.textContent,l)?(a.popover!=null&&(me("beforetoggle",t),me("toggle",t)),a.onScroll!=null&&me("scroll",t),a.onScrollEnd!=null&&me("scrollend",t),a.onClick!=null&&(t.onclick=Lt),t=!0):t=!1,t||pl(e,!0)}function eo(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:Fe=Fe.return}}function Na(e){if(e!==Fe)return!1;if(!ye)return eo(e),ye=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||bs(e.type,e.memoizedProps)),l=!l),l&&Oe&&pl(e),eo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=_d(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=_d(e)}else t===27?(t=Oe,Ml(e.type)?(e=Ns,Ns=null,Oe=e):Oe=t):Oe=Fe?Mt(e.stateNode.nextSibling):null;return!0}function Vl(){Oe=Fe=null,ye=!1}function tc(){var e=hl;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),hl=null),e}function dn(e){hl===null?hl=[e]:hl.push(e)}var lc=h(null),Kl=null,Kt=null;function xl(e,t,l){H(lc,t._currentValue),t._currentValue=l}function Jt(e){e._currentValue=lc.current,w(lc)}function ac(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function nc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var c=n.child;u=u.firstContext;e:for(;u!==null;){var s=u;u=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),ac(u.return,l,e),a||(c=null);break e}u=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),ac(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Ta(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var s=n.type;ht(n.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(n===ee.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(qn):e=[qn])}n=n.return}e!==null&&nc(t,e,l,a),t.flags|=262144}function pu(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jl(e){Kl=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return to(Kl,e)}function xu(e,t){return Kl===null&&Jl(e),to(e,t)}function to(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Kt===null){if(e===null)throw Error(o(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return l}var Hh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Bh=f.unstable_scheduleCallback,qh=f.unstable_NormalPriority,Be={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new Hh,data:new Map,refCount:0}}function mn(e){e.refCount--,e.refCount===0&&Bh(qh,function(){e.controller.abort()})}var hn=null,ic=0,Aa=0,_a=null;function Yh(e,t){if(hn===null){var l=hn=[];ic=0,Aa=fs(),_a={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ic++,t.then(lo,lo),t}function lo(){if(--ic===0&&hn!==null){_a!==null&&(_a.status="fulfilled");var e=hn;hn=null,Aa=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var ao=A.S;A.S=function(e,t){Gr=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yh(e,t),ao!==null&&ao(e,t)};var Wl=h(null);function cc(){var e=Wl.current;return e!==null?e:Ee.pooledCache}function yu(e,t){t===null?H(Wl,Wl.current):H(Wl,t.pool)}function no(){var e=cc();return e===null?null:{parent:Be._currentValue,pool:e}}var za=Error(o(460)),sc=Error(o(474)),bu=Error(o(542)),gu={then:function(){}};function uo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function io(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Lt,Lt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,so(e),e;default:if(typeof t.status=="string")t.then(Lt,Lt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,so(e),e}throw $l=t,za}}function Fl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?($l=l,za):l}}var $l=null;function co(){if($l===null)throw Error(o(459));var e=$l;return $l=null,e}function so(e){if(e===za||e===bu)throw Error(o(483))}var Ea=null,pn=0;function vu(e){var t=pn;return pn+=1,Ea===null&&(Ea=[]),io(Ea,e,t)}function xn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Su(e,t){throw t.$$typeof===W?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fo(e){function t(p,m){if(e){var b=p.deletions;b===null?(p.deletions=[m],p.flags|=16):b.push(m)}}function l(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function a(p){for(var m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function n(p,m){return p=Zt(p,m),p.index=0,p.sibling=null,p}function u(p,m,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<m?(p.flags|=67108866,m):b):(p.flags|=67108866,m)):(p.flags|=1048576,m)}function c(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function s(p,m,b,E){return m===null||m.tag!==6?(m=Fi(b,p.mode,E),m.return=p,m):(m=n(m,b),m.return=p,m)}function r(p,m,b,E){var I=b.type;return I===C?z(p,m,b.props.children,E,b.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Q&&Fl(I)===m.type)?(m=n(m,b.props),xn(m,b),m.return=p,m):(m=mu(b.type,b.key,b.props,null,p.mode,E),xn(m,b),m.return=p,m)}function g(p,m,b,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=$i(b,p.mode,E),m.return=p,m):(m=n(m,b.children||[]),m.return=p,m)}function z(p,m,b,E,I){return m===null||m.tag!==7?(m=Zl(b,p.mode,E,I),m.return=p,m):(m=n(m,b),m.return=p,m)}function O(p,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Fi(""+m,p.mode,b),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case le:return b=mu(m.type,m.key,m.props,null,p.mode,b),xn(b,m),b.return=p,b;case se:return m=$i(m,p.mode,b),m.return=p,m;case Q:return m=Fl(m),O(p,m,b)}if(Ze(m)||Xe(m))return m=Zl(m,p.mode,b,null),m.return=p,m;if(typeof m.then=="function")return O(p,vu(m),b);if(m.$$typeof===L)return O(p,xu(p,m),b);Su(p,m)}return null}function S(p,m,b,E){var I=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return I!==null?null:s(p,m,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case le:return b.key===I?r(p,m,b,E):null;case se:return b.key===I?g(p,m,b,E):null;case Q:return b=Fl(b),S(p,m,b,E)}if(Ze(b)||Xe(b))return I!==null?null:z(p,m,b,E,null);if(typeof b.then=="function")return S(p,m,vu(b),E);if(b.$$typeof===L)return S(p,m,xu(p,b),E);Su(p,b)}return null}function T(p,m,b,E,I){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return p=p.get(b)||null,s(m,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case le:return p=p.get(E.key===null?b:E.key)||null,r(m,p,E,I);case se:return p=p.get(E.key===null?b:E.key)||null,g(m,p,E,I);case Q:return E=Fl(E),T(p,m,b,E,I)}if(Ze(E)||Xe(E))return p=p.get(b)||null,z(m,p,E,I,null);if(typeof E.then=="function")return T(p,m,b,vu(E),I);if(E.$$typeof===L)return T(p,m,b,xu(m,E),I);Su(m,E)}return null}function Z(p,m,b,E){for(var I=null,be=null,J=m,ie=m=0,pe=null;J!==null&&ie<b.length;ie++){J.index>ie?(pe=J,J=null):pe=J.sibling;var ge=S(p,J,b[ie],E);if(ge===null){J===null&&(J=pe);break}e&&J&&ge.alternate===null&&t(p,J),m=u(ge,m,ie),be===null?I=ge:be.sibling=ge,be=ge,J=pe}if(ie===b.length)return l(p,J),ye&&Vt(p,ie),I;if(J===null){for(;ie<b.length;ie++)J=O(p,b[ie],E),J!==null&&(m=u(J,m,ie),be===null?I=J:be.sibling=J,be=J);return ye&&Vt(p,ie),I}for(J=a(J);ie<b.length;ie++)pe=T(J,p,ie,b[ie],E),pe!==null&&(e&&pe.alternate!==null&&J.delete(pe.key===null?ie:pe.key),m=u(pe,m,ie),be===null?I=pe:be.sibling=pe,be=pe);return e&&J.forEach(function(Ul){return t(p,Ul)}),ye&&Vt(p,ie),I}function P(p,m,b,E){if(b==null)throw Error(o(151));for(var I=null,be=null,J=m,ie=m=0,pe=null,ge=b.next();J!==null&&!ge.done;ie++,ge=b.next()){J.index>ie?(pe=J,J=null):pe=J.sibling;var Ul=S(p,J,ge.value,E);if(Ul===null){J===null&&(J=pe);break}e&&J&&Ul.alternate===null&&t(p,J),m=u(Ul,m,ie),be===null?I=Ul:be.sibling=Ul,be=Ul,J=pe}if(ge.done)return l(p,J),ye&&Vt(p,ie),I;if(J===null){for(;!ge.done;ie++,ge=b.next())ge=O(p,ge.value,E),ge!==null&&(m=u(ge,m,ie),be===null?I=ge:be.sibling=ge,be=ge);return ye&&Vt(p,ie),I}for(J=a(J);!ge.done;ie++,ge=b.next())ge=T(J,p,ie,ge.value,E),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?ie:ge.key),m=u(ge,m,ie),be===null?I=ge:be.sibling=ge,be=ge);return e&&J.forEach(function(Ip){return t(p,Ip)}),ye&&Vt(p,ie),I}function ze(p,m,b,E){if(typeof b=="object"&&b!==null&&b.type===C&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case le:e:{for(var I=b.key;m!==null;){if(m.key===I){if(I=b.type,I===C){if(m.tag===7){l(p,m.sibling),E=n(m,b.props.children),E.return=p,p=E;break e}}else if(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Q&&Fl(I)===m.type){l(p,m.sibling),E=n(m,b.props),xn(E,b),E.return=p,p=E;break e}l(p,m);break}else t(p,m);m=m.sibling}b.type===C?(E=Zl(b.props.children,p.mode,E,b.key),E.return=p,p=E):(E=mu(b.type,b.key,b.props,null,p.mode,E),xn(E,b),E.return=p,p=E)}return c(p);case se:e:{for(I=b.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){l(p,m.sibling),E=n(m,b.children||[]),E.return=p,p=E;break e}else{l(p,m);break}else t(p,m);m=m.sibling}E=$i(b,p.mode,E),E.return=p,p=E}return c(p);case Q:return b=Fl(b),ze(p,m,b,E)}if(Ze(b))return Z(p,m,b,E);if(Xe(b)){if(I=Xe(b),typeof I!="function")throw Error(o(150));return b=I.call(b),P(p,m,b,E)}if(typeof b.then=="function")return ze(p,m,vu(b),E);if(b.$$typeof===L)return ze(p,m,xu(p,b),E);Su(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(l(p,m.sibling),E=n(m,b),E.return=p,p=E):(l(p,m),E=Fi(b,p.mode,E),E.return=p,p=E),c(p)):l(p,m)}return function(p,m,b,E){try{pn=0;var I=ze(p,m,b,E);return Ea=null,I}catch(J){if(J===za||J===bu)throw J;var be=pt(29,J,null,p.mode);return be.lanes=E,be.return=p,be}}}var Il=fo(!0),oo=fo(!1),yl=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Se&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=du(e),Kf(e,null,l),t}return ru(e,a,t,l),du(e)}function yn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ef(e,l)}}function rc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=c:u=u.next=c,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var dc=!1;function bn(){if(dc){var e=_a;if(e!==null)throw e}}function gn(e,t,l,a){dc=!1;var n=e.updateQueue;yl=!1;var u=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,g=r.next;r.next=null,c===null?u=g:c.next=g,c=r;var z=e.alternate;z!==null&&(z=z.updateQueue,s=z.lastBaseUpdate,s!==c&&(s===null?z.firstBaseUpdate=g:s.next=g,z.lastBaseUpdate=r))}if(u!==null){var O=n.baseState;c=0,z=g=r=null,s=u;do{var S=s.lane&-536870913,T=S!==s.lane;if(T?(he&S)===S:(a&S)===S){S!==0&&S===Aa&&(dc=!0),z!==null&&(z=z.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var Z=e,P=s;S=t;var ze=l;switch(P.tag){case 1:if(Z=P.payload,typeof Z=="function"){O=Z.call(ze,O,S);break e}O=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=P.payload,S=typeof Z=="function"?Z.call(ze,O,S):Z,S==null)break e;O=k({},O,S);break e;case 2:yl=!0}}S=s.callback,S!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[S]:T.push(S))}else T={lane:S,tag:s.tag,payload:s.payload,callback:s.callback,next:null},z===null?(g=z=T,r=O):z=z.next=T,c|=S;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;T=s,s=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);z===null&&(r=O),n.baseState=r,n.firstBaseUpdate=g,n.lastBaseUpdate=z,u===null&&(n.shared.lanes=0),Tl|=c,e.lanes=c,e.memoizedState=O}}function ro(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function mo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)ro(l[e],t)}var Ma=h(null),ju=h(0);function ho(e,t){e=al,H(ju,e),H(Ma,t),al=e|t.baseLanes}function mc(){H(ju,al),H(Ma,Ma.current)}function hc(){al=ju.current,w(Ma),w(ju)}var xt=h(null),Et=null;function vl(e){var t=e.alternate;H(Re,Re.current&1),H(xt,e),Et===null&&(t===null||Ma.current!==null||t.memoizedState!==null)&&(Et=e)}function pc(e){H(Re,Re.current),H(xt,e),Et===null&&(Et=e)}function po(e){e.tag===22?(H(Re,Re.current),H(xt,e),Et===null&&(Et=e)):Sl()}function Sl(){H(Re,Re.current),H(xt,xt.current)}function yt(e){w(xt),Et===e&&(Et=null),w(Re)}var Re=h(0);function Nu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ss(l)||js(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wt=0,ue=null,Ae=null,qe=null,Tu=!1,wa=!1,Pl=!1,Au=0,vn=0,Oa=null,Xh=0;function Ue(){throw Error(o(321))}function xc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ht(e[l],t[l]))return!1;return!0}function yc(e,t,l,a,n,u){return Wt=u,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Io:Cc,Pl=!1,u=l(a,n),Pl=!1,wa&&(u=yo(t,l,a,n)),xo(e),u}function xo(e){A.H=Nn;var t=Ae!==null&&Ae.next!==null;if(Wt=0,qe=Ae=ue=null,Tu=!1,vn=0,Oa=null,t)throw Error(o(300));e===null||Ye||(e=e.dependencies,e!==null&&pu(e)&&(Ye=!0))}function yo(e,t,l,a){ue=e;var n=0;do{if(wa&&(Oa=null),vn=0,wa=!1,25<=n)throw Error(o(301));if(n+=1,qe=Ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}A.H=Po,u=t(l,a)}while(wa);return u}function Lh(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Sn(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(ue.flags|=1024),t}function bc(){var e=Au!==0;return Au=0,e}function gc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function vc(e){if(Tu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Tu=!1}Wt=0,qe=Ae=ue=null,wa=!1,vn=Au=0,Oa=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ue.memoizedState=qe=e:qe=qe.next=e,qe}function He(){if(Ae===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=qe===null?ue.memoizedState:qe.next;if(t!==null)qe=t,Ae=e;else{if(e===null)throw ue.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},qe===null?ue.memoizedState=qe=e:qe=qe.next=e}return qe}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sn(e){var t=vn;return vn+=1,Oa===null&&(Oa=[]),e=io(Oa,e,t),t=ue,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Io:Cc),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sn(e);if(e.$$typeof===L)return $e(e)}throw Error(o(438,String(e)))}function Sc(e){var t=null,l=ue.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=_u(),ue.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Gt;return t.index++,l}function Ft(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=He();return jc(t,Ae,e)}function jc(e,t,l){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var c=n.next;n.next=u.next,u.next=c}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var s=c=null,r=null,g=t,z=!1;do{var O=g.lane&-536870913;if(O!==g.lane?(he&O)===O:(Wt&O)===O){var S=g.revertLane;if(S===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),O===Aa&&(z=!0);else if((Wt&S)===S){g=g.next,S===Aa&&(z=!0);continue}else O={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=O,c=u):r=r.next=O,ue.lanes|=S,Tl|=S;O=g.action,Pl&&l(u,O),u=g.hasEagerState?g.eagerState:l(u,O)}else S={lane:O,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=S,c=u):r=r.next=S,ue.lanes|=O,Tl|=O;g=g.next}while(g!==null&&g!==t);if(r===null?c=u:r.next=s,!ht(u,e.memoizedState)&&(Ye=!0,z&&(l=_a,l!==null)))throw l;e.memoizedState=u,e.baseState=c,e.baseQueue=r,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Nc(e){var t=He(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do u=e(u,c.action),c=c.next;while(c!==n);ht(u,t.memoizedState)||(Ye=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function bo(e,t,l){var a=ue,n=He(),u=ye;if(u){if(l===void 0)throw Error(o(407));l=l()}else l=t();var c=!ht((Ae||n).memoizedState,l);if(c&&(n.memoizedState=l,Ye=!0),n=n.queue,_c(So.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||qe!==null&&qe.memoizedState.tag&1){if(a.flags|=2048,Ca(9,{destroy:void 0},vo.bind(null,a,n,l,t),null),Ee===null)throw Error(o(349));u||(Wt&127)!==0||go(a,t,l)}return l}function go(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ue.updateQueue,t===null?(t=_u(),ue.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function vo(e,t,l,a){t.value=l,t.getSnapshot=a,jo(t)&&No(e)}function So(e,t,l){return l(function(){jo(t)&&No(e)})}function jo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ht(e,l)}catch{return!0}}function No(e){var t=Ql(e,2);t!==null&&st(t,e,2)}function Tc(e){var t=tt();if(typeof e=="function"){var l=e;if(e=l(),Pl){ol(!0);try{l()}finally{ol(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function To(e,t,l,a){return e.baseState=l,jc(e,Ae,typeof a=="function"?a:Ft)}function Qh(e,t,l,a,n){if(Ou(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};A.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Ao(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Ao(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=A.T,c={};A.T=c;try{var s=l(n,a),r=A.S;r!==null&&r(c,s),_o(e,t,s)}catch(g){Ac(e,t,g)}finally{u!==null&&c.types!==null&&(u.types=c.types),A.T=u}}else try{u=l(n,a),_o(e,t,u)}catch(g){Ac(e,t,g)}}function _o(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){zo(e,t,a)},function(a){return Ac(e,t,a)}):zo(e,t,l)}function zo(e,t,l){t.status="fulfilled",t.value=l,Eo(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Ao(e,l)))}function Ac(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Eo(t),t=t.next;while(t!==a)}e.action=null}function Eo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Mo(e,t){return t}function wo(e,t){if(ye){var l=Ee.formState;if(l!==null){e:{var a=ue;if(ye){if(Oe){t:{for(var n=Oe,u=zt;n.nodeType!==8;){if(!u){n=null;break t}if(n=Mt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Oe=Mt(n.nextSibling),a=n.data==="F!";break e}}pl(a)}a=!1}a&&(t=l[0])}}return l=tt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},l.queue=a,l=Wo.bind(null,ue,a),a.dispatch=l,a=Tc(!1),u=Oc.bind(null,ue,!1,a.queue),a=tt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Qh.bind(null,ue,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Oo(e){var t=He();return Co(t,Ae,e)}function Co(e,t,l){if(t=jc(e,t,Mo)[0],e=Eu(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Sn(t)}catch(c){throw c===za?bu:c}else a=t;t=He();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(ue.flags|=2048,Ca(9,{destroy:void 0},Zh.bind(null,n,l),null)),[a,u,e]}function Zh(e,t){e.action=t}function Do(e){var t=He(),l=Ae;if(l!==null)return Co(t,l,e);He(),t=t.memoizedState,l=He();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ca(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=_u(),ue.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Uo(){return He().memoizedState}function Mu(e,t,l,a){var n=tt();ue.flags|=e,n.memoizedState=Ca(1|t,{destroy:void 0},l,a===void 0?null:a)}function wu(e,t,l,a){var n=He();a=a===void 0?null:a;var u=n.memoizedState.inst;Ae!==null&&a!==null&&xc(a,Ae.memoizedState.deps)?n.memoizedState=Ca(t,u,l,a):(ue.flags|=e,n.memoizedState=Ca(1|t,u,l,a))}function ko(e,t){Mu(8390656,8,e,t)}function _c(e,t){wu(2048,8,e,t)}function Vh(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=_u(),ue.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Ro(e){var t=He().memoizedState;return Vh({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ho(e,t){return wu(4,2,e,t)}function Bo(e,t){return wu(4,4,e,t)}function qo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yo(e,t,l){l=l!=null?l.concat([e]):null,wu(4,4,qo.bind(null,t,e),l)}function zc(){}function Go(e,t){var l=He();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&xc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Xo(e,t){var l=He();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&xc(t,a[1]))return a[0];if(a=e(),Pl){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[a,t],a}function Ec(e,t,l){return l===void 0||(Wt&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Lr(),ue.lanes|=e,Tl|=e,l)}function Lo(e,t,l,a){return ht(l,t)?l:Ma.current!==null?(e=Ec(e,l,a),ht(e,t)||(Ye=!0),e):(Wt&42)===0||(Wt&1073741824)!==0&&(he&261930)===0?(Ye=!0,e.memoizedState=l):(e=Lr(),ue.lanes|=e,Tl|=e,t)}function Qo(e,t,l,a,n){var u=q.p;q.p=u!==0&&8>u?u:8;var c=A.T,s={};A.T=s,Oc(e,!1,t,l);try{var r=n(),g=A.S;if(g!==null&&g(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var z=Gh(r,a);jn(e,t,z,vt(e))}else jn(e,t,a,vt(e))}catch(O){jn(e,t,{then:function(){},status:"rejected",reason:O},vt())}finally{q.p=u,c!==null&&s.types!==null&&(c.types=s.types),A.T=c}}function Kh(){}function Mc(e,t,l,a){if(e.tag!==5)throw Error(o(476));var n=Zo(e).queue;Qo(e,n,t,R,l===null?Kh:function(){return Vo(e),l(a)})}function Zo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:R},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vo(e){var t=Zo(e);t.next===null&&(t=e.alternate.memoizedState),jn(e,t.next.queue,{},vt())}function wc(){return $e(qn)}function Ko(){return He().memoizedState}function Jo(){return He().memoizedState}function Jh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=vt();e=bl(l);var a=gl(t,e,l);a!==null&&(st(a,t,l),yn(a,t,l)),t={cache:uc()},e.payload=t;return}t=t.return}}function Wh(e,t,l){var a=vt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ou(e)?Fo(t,l):(l=Ji(e,t,l,a),l!==null&&(st(l,e,a),$o(l,t,a)))}function Wo(e,t,l){var a=vt();jn(e,t,l,a)}function jn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))Fo(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,s=u(c,l);if(n.hasEagerState=!0,n.eagerState=s,ht(s,c))return ru(e,t,n,0),Ee===null&&ou(),!1}catch{}if(l=Ji(e,t,n,a),l!==null)return st(l,e,a),$o(l,t,a),!0}return!1}function Oc(e,t,l,a){if(a={lane:2,revertLane:fs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ou(e)){if(t)throw Error(o(479))}else t=Ji(e,l,a,2),t!==null&&st(t,e,2)}function Ou(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Fo(e,t){wa=Tu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function $o(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ef(e,l)}}var Nn={readContext:$e,use:zu,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Nn.useEffectEvent=Ue;var Io={readContext:$e,use:zu,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:ko,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Mu(4194308,4,qo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Mu(4194308,4,e,t)},useInsertionEffect:function(e,t){Mu(4,2,e,t)},useMemo:function(e,t){var l=tt();t=t===void 0?null:t;var a=e();if(Pl){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=tt();if(l!==void 0){var n=l(t);if(Pl){ol(!0);try{l(t)}finally{ol(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Wh.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Tc(e);var t=e.queue,l=Wo.bind(null,ue,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:zc,useDeferredValue:function(e,t){var l=tt();return Ec(l,e,t)},useTransition:function(){var e=Tc(!1);return e=Qo.bind(null,ue,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ue,n=tt();if(ye){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),Ee===null)throw Error(o(349));(he&127)!==0||go(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,ko(So.bind(null,a,u,e),[e]),a.flags|=2048,Ca(9,{destroy:void 0},vo.bind(null,a,u,l,t),null),l},useId:function(){var e=tt(),t=Ee.identifierPrefix;if(ye){var l=Bt,a=Ht;l=(a&~(1<<32-mt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Au++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Xh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:wo,useActionState:wo,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Oc.bind(null,ue,!0,l),l.dispatch=t,[e,t]},useMemoCache:Sc,useCacheRefresh:function(){return tt().memoizedState=Jh.bind(null,ue)},useEffectEvent:function(e){var t=tt(),l={impl:e};return t.memoizedState=l,function(){if((Se&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},Cc={readContext:$e,use:zu,useCallback:Go,useContext:$e,useEffect:_c,useImperativeHandle:Yo,useInsertionEffect:Ho,useLayoutEffect:Bo,useMemo:Xo,useReducer:Eu,useRef:Uo,useState:function(){return Eu(Ft)},useDebugValue:zc,useDeferredValue:function(e,t){var l=He();return Lo(l,Ae.memoizedState,e,t)},useTransition:function(){var e=Eu(Ft)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:bo,useId:Ko,useHostTransitionStatus:wc,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var l=He();return To(l,Ae,e,t)},useMemoCache:Sc,useCacheRefresh:Jo};Cc.useEffectEvent=Ro;var Po={readContext:$e,use:zu,useCallback:Go,useContext:$e,useEffect:_c,useImperativeHandle:Yo,useInsertionEffect:Ho,useLayoutEffect:Bo,useMemo:Xo,useReducer:Nc,useRef:Uo,useState:function(){return Nc(Ft)},useDebugValue:zc,useDeferredValue:function(e,t){var l=He();return Ae===null?Ec(l,e,t):Lo(l,Ae.memoizedState,e,t)},useTransition:function(){var e=Nc(Ft)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:bo,useId:Ko,useHostTransitionStatus:wc,useFormState:Do,useActionState:Do,useOptimistic:function(e,t){var l=He();return Ae!==null?To(l,Ae,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Sc,useCacheRefresh:Jo};Po.useEffectEvent=Ro;function Dc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:k({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Uc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=vt(),n=bl(a);n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(st(t,e,a),yn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=vt(),n=bl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=gl(e,n,a),t!==null&&(st(t,e,a),yn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=vt(),a=bl(l);a.tag=2,t!=null&&(a.callback=t),t=gl(e,a,l),t!==null&&(st(t,e,l),yn(t,e,l))}};function er(e,t,l,a,n,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,c):t.prototype&&t.prototype.isPureReactComponent?!fn(l,a)||!fn(n,u):!0}function tr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Uc.enqueueReplaceState(t,t.state,null)}function ea(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=k({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function lr(e){fu(e)}function ar(e){console.error(e)}function nr(e){fu(e)}function Cu(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ur(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function kc(e,t,l){return l=bl(l),l.tag=3,l.payload={element:null},l.callback=function(){Cu(e,t)},l}function ir(e){return e=bl(e),e.tag=3,e}function cr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){ur(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){ur(t,l,a),typeof n!="function"&&(Al===null?Al=new Set([this]):Al.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Fh(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ta(t,l,n,!0),l=xt.current,l!==null){switch(l.tag){case 31:case 13:return Et===null?Qu():l.alternate===null&&ke===0&&(ke=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===gu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),is(e,a,n)),!1;case 22:return l.flags|=65536,a===gu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),is(e,a,n)),!1}throw Error(o(435,l.tag))}return is(e,a,n),Qu(),!1}if(ye)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==ec&&(e=Error(o(422),{cause:a}),dn(Tt(e,l)))):(a!==ec&&(t=Error(o(423),{cause:a}),dn(Tt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Tt(a,l),n=kc(e.stateNode,a,n),rc(e,n),ke!==4&&(ke=2)),!1;var u=Error(o(520),{cause:a});if(u=Tt(u,l),On===null?On=[u]:On.push(u),ke!==4&&(ke=2),t===null)return!0;a=Tt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=kc(l.stateNode,a,e),rc(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Al===null||!Al.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=ir(n),cr(n,e,l,a),rc(l,n),!1}l=l.return}while(l!==null);return!1}var Rc=Error(o(461)),Ye=!1;function Ie(e,t,l,a){t.child=e===null?oo(t,null,l,a):Il(t,e.child,l,a)}function sr(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var c={};for(var s in a)s!=="ref"&&(c[s]=a[s])}else c=a;return Jl(t),a=yc(e,t,l,c,u,n),s=bc(),e!==null&&!Ye?(gc(e,t,n),$t(e,t,n)):(ye&&s&&Ii(t),t.flags|=1,Ie(e,t,a,n),t.child)}function fr(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!Wi(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,or(e,t,u,a,n)):(e=mu(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Qc(e,n)){var c=u.memoizedProps;if(l=l.compare,l=l!==null?l:fn,l(c,a)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Zt(u,a),e.ref=t.ref,e.return=t,t.child=e}function or(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(fn(u,a)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=a=u,Qc(e,n))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,$t(e,t,n)}return Hc(e,t,l,a,n)}function rr(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return dr(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yu(t,u!==null?u.cachePool:null),u!==null?ho(t,u):mc(),po(t);else return a=t.lanes=536870912,dr(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(yu(t,u.cachePool),ho(t,u),Sl(),t.memoizedState=null):(e!==null&&yu(t,null),mc(),Sl());return Ie(e,t,n,l),t.child}function Tn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dr(e,t,l,a,n){var u=cc();return u=u===null?null:{parent:Be._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&yu(t,null),mc(),po(t),e!==null&&Ta(e,t,a,!0),t.childLanes=n,null}function Du(e,t){return t=ku({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mr(e,t,l){return Il(t,e.child,null,l),e=Du(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function $h(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(a.mode==="hidden")return e=Du(t,a),t.lanes=536870912,Tn(null,e);if(pc(t),(e=Oe)?(e=Ad(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ml!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},l=Wf(e),l.return=t,t.child=l,Fe=t,Oe=null)):e=null,e===null)throw pl(t);return t.lanes=536870912,null}return Du(t,a)}var u=e.memoizedState;if(u!==null){var c=u.dehydrated;if(pc(t),n)if(t.flags&256)t.flags&=-257,t=mr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ye||Ta(e,t,l,!1),n=(l&e.childLanes)!==0,Ye||n){if(a=Ee,a!==null&&(c=tf(a,l),c!==0&&c!==u.retryLane))throw u.retryLane=c,Ql(e,c),st(a,e,c),Rc;Qu(),t=mr(e,t,l)}else e=u.treeContext,Oe=Mt(c.nextSibling),Fe=t,ye=!0,hl=null,zt=!1,e!==null&&If(t,e),t=Du(t,a),t.flags|=4096;return t}return e=Zt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Uu(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Hc(e,t,l,a,n){return Jl(t),l=yc(e,t,l,a,void 0,n),a=bc(),e!==null&&!Ye?(gc(e,t,n),$t(e,t,n)):(ye&&a&&Ii(t),t.flags|=1,Ie(e,t,l,n),t.child)}function hr(e,t,l,a,n,u){return Jl(t),t.updateQueue=null,l=yo(t,a,l,n),xo(e),a=bc(),e!==null&&!Ye?(gc(e,t,u),$t(e,t,u)):(ye&&a&&Ii(t),t.flags|=1,Ie(e,t,l,u),t.child)}function pr(e,t,l,a,n){if(Jl(t),t.stateNode===null){var u=va,c=l.contextType;typeof c=="object"&&c!==null&&(u=$e(c)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Uc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},fc(t),c=l.contextType,u.context=typeof c=="object"&&c!==null?$e(c):va,u.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Dc(t,l,c,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&Uc.enqueueReplaceState(u,u.state,null),gn(t,a,u,n),bn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var s=t.memoizedProps,r=ea(l,s);u.props=r;var g=u.context,z=l.contextType;c=va,typeof z=="object"&&z!==null&&(c=$e(z));var O=l.getDerivedStateFromProps;z=typeof O=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||g!==c)&&tr(t,u,a,c),yl=!1;var S=t.memoizedState;u.state=S,gn(t,a,u,n),bn(),g=t.memoizedState,s||S!==g||yl?(typeof O=="function"&&(Dc(t,l,O,a),g=t.memoizedState),(r=yl||er(t,l,r,a,S,g,c))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=g),u.props=a,u.state=g,u.context=c,a=r):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,oc(e,t),c=t.memoizedProps,z=ea(l,c),u.props=z,O=t.pendingProps,S=u.context,g=l.contextType,r=va,typeof g=="object"&&g!==null&&(r=$e(g)),s=l.getDerivedStateFromProps,(g=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==O||S!==r)&&tr(t,u,a,r),yl=!1,S=t.memoizedState,u.state=S,gn(t,a,u,n),bn();var T=t.memoizedState;c!==O||S!==T||yl||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof s=="function"&&(Dc(t,l,s,a),T=t.memoizedState),(z=yl||er(t,l,z,a,S,T,r)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(g||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,T,r),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,T,r)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=T),u.props=a,u.state=T,u.context=r,a=z):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,Uu(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Il(t,e.child,null,n),t.child=Il(t,null,l,n)):Ie(e,t,l,n),t.memoizedState=u.state,e=t.child):e=$t(e,t,n),e}function xr(e,t,l,a){return Vl(),t.flags|=256,Ie(e,t,l,a),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:no()}}function Yc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=gt),e}function yr(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(n?vl(t):Sl(),(e=Oe)?(e=Ad(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ml!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},l=Wf(e),l.return=t,t.child=l,Fe=t,Oe=null)):e=null,e===null)throw pl(t);return js(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(Sl(),n=t.mode,s=ku({mode:"hidden",children:s},n),a=Zl(a,n,l,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=qc(l),a.childLanes=Yc(e,c,l),t.memoizedState=Bc,Tn(null,a)):(vl(t),Gc(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(u)t.flags&256?(vl(t),t.flags&=-257,t=Xc(e,t,l)):t.memoizedState!==null?(Sl(),t.child=e.child,t.flags|=128,t=null):(Sl(),s=a.fallback,n=t.mode,a=ku({mode:"visible",children:a.children},n),s=Zl(s,n,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Il(t,e.child,null,l),a=t.child,a.memoizedState=qc(l),a.childLanes=Yc(e,c,l),t.memoizedState=Bc,t=Tn(null,a));else if(vl(t),js(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var g=c.dgst;c=g,a=Error(o(419)),a.stack="",a.digest=c,dn({value:a,source:null,stack:null}),t=Xc(e,t,l)}else if(Ye||Ta(e,t,l,!1),c=(l&e.childLanes)!==0,Ye||c){if(c=Ee,c!==null&&(a=tf(c,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,Ql(e,a),st(c,e,a),Rc;Ss(s)||Qu(),t=Xc(e,t,l)}else Ss(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,Oe=Mt(s.nextSibling),Fe=t,ye=!0,hl=null,zt=!1,e!==null&&If(t,e),t=Gc(t,a.children),t.flags|=4096);return t}return n?(Sl(),s=a.fallback,n=t.mode,r=e.child,g=r.sibling,a=Zt(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,g!==null?s=Zt(g,s):(s=Zl(s,n,l,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,Tn(null,a),a=t.child,s=e.child.memoizedState,s===null?s=qc(l):(n=s.cachePool,n!==null?(r=Be._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=no(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=Yc(e,c,l),t.memoizedState=Bc,Tn(e.child,a)):(vl(t),l=e.child,e=l.sibling,l=Zt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Gc(e,t){return t=ku({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ku(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function Xc(e,t,l){return Il(t,e.child,null,l),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function br(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ac(e.return,t,l)}function Lc(e,t,l,a,n,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=u)}function gr(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var c=Re.current,s=(c&2)!==0;if(s?(c=c&1|2,t.flags|=128):c&=1,H(Re,c),Ie(e,t,a,l),a=ye?rn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&br(e,l,t);else if(e.tag===19)br(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Nu(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Lc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Nu(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Lc(t,!0,l,null,u,a);break;case"together":Lc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function $t(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ta(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=Zt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Zt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Qc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function Ih(e,t,l){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),xl(t,Be,e.memoizedState.cache),Vl();break;case 27:case 5:Rt(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:xl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(vl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?yr(e,t,l):(vl(t),e=$t(e,t,l),e!==null?e.sibling:null);vl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Ta(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return gr(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Re,Re.current),a)break;return null;case 22:return t.lanes=0,rr(e,t,l,t.pendingProps);case 24:xl(t,Be,e.memoizedState.cache)}return $t(e,t,l)}function vr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Qc(e,l)&&(t.flags&128)===0)return Ye=!1,Ih(e,t,l);Ye=(e.flags&131072)!==0}else Ye=!1,ye&&(t.flags&1048576)!==0&&$f(t,rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Fl(t.elementType),t.type=e,typeof e=="function")Wi(e)?(a=ea(e,a),t.tag=1,t=pr(null,t,e,a,l)):(t.tag=0,t=Hc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===D){t.tag=11,t=sr(null,t,e,a,l);break e}else if(n===F){t.tag=14,t=fr(null,t,e,a,l);break e}}throw t=ot(e)||e,Error(o(306,t,""))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ea(a,t.pendingProps),pr(e,t,a,n,l);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,oc(e,t),gn(t,a,null,l);var c=t.memoizedState;if(a=c.cache,xl(t,Be,a),a!==u.cache&&nc(t,[Be],l,!0),bn(),a=c.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=xr(e,t,a,l);break e}else if(a!==n){n=Tt(Error(o(424)),t),dn(n),t=xr(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Mt(e.firstChild),Fe=t,ye=!0,hl=null,zt=!0,l=oo(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Vl(),a===n){t=$t(e,t,l);break e}Ie(e,t,a,l)}t=t.child}return t;case 26:return Uu(e,t),e===null?(l=Od(t.type,null,t.pendingProps,null))?t.memoizedState=l:ye||(l=t.type,e=t.pendingProps,a=$u(ce.current).createElement(l),a[We]=t,a[lt]=e,Pe(a,l,e),Ke(a),t.stateNode=a):t.memoizedState=Od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Rt(t),e===null&&ye&&(a=t.stateNode=Ed(t.type,t.pendingProps,ce.current),Fe=t,zt=!0,n=Oe,Ml(t.type)?(Ns=n,Oe=Mt(a.firstChild)):Oe=n),Ie(e,t,t.pendingProps.children,l),Uu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((n=a=Oe)&&(a=Ep(a,t.type,t.pendingProps,zt),a!==null?(t.stateNode=a,Fe=t,Oe=Mt(a.firstChild),zt=!1,n=!0):n=!1),n||pl(t)),Rt(t),n=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,a=u.children,bs(n,u)?a=null:c!==null&&bs(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=yc(e,t,Lh,null,null,l),qn._currentValue=n),Uu(e,t),Ie(e,t,a,l),t.child;case 6:return e===null&&ye&&((e=l=Oe)&&(l=Mp(l,t.pendingProps,zt),l!==null?(t.stateNode=l,Fe=t,Oe=null,e=!0):e=!1),e||pl(t)),null;case 13:return yr(e,t,l);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Il(t,null,a,l):Ie(e,t,a,l),t.child;case 11:return sr(e,t,t.type,t.pendingProps,l);case 7:return Ie(e,t,t.pendingProps,l),t.child;case 8:return Ie(e,t,t.pendingProps.children,l),t.child;case 12:return Ie(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,xl(t,t.type,a.value),Ie(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Jl(t),n=$e(n),a=a(n),t.flags|=1,Ie(e,t,a,l),t.child;case 14:return fr(e,t,t.type,t.pendingProps,l);case 15:return or(e,t,t.type,t.pendingProps,l);case 19:return gr(e,t,l);case 31:return $h(e,t,l);case 22:return rr(e,t,l,t.pendingProps);case 24:return Jl(t),a=$e(Be),e===null?(n=cc(),n===null&&(n=Ee,u=uc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},fc(t),xl(t,Be,n)):((e.lanes&l)!==0&&(oc(e,t),gn(t,null,null,l),bn()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),xl(t,Be,a)):(a=u.cache,xl(t,Be,a),a!==n.cache&&nc(t,[Be],l,!0))),Ie(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function It(e){e.flags|=4}function Zc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Kr())e.flags|=8192;else throw $l=gu,sc}else e.flags&=-16777217}function Sr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rd(t))if(Kr())e.flags|=8192;else throw $l=gu,sc}function Ru(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Is():536870912,e.lanes|=t,Ra|=t)}function An(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Ph(e,t,l){var a=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Be),Me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Na(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tc())),Ce(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(It(t),u!==null?(Ce(t),Sr(t,u)):(Ce(t),Zc(t,n,null,a,l))):u?u!==e.memoizedState?(It(t),Ce(t),Sr(t,u)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&It(t),Ce(t),Zc(t,n,e,a,l)),null;case 27:if(sl(t),l=ce.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ce(t),null}e=X.current,Na(t)?Pf(t):(e=Ed(n,a,l),t.stateNode=e,It(t))}return Ce(t),null;case 5:if(sl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ce(t),null}if(u=X.current,Na(t))Pf(t);else{var c=$u(ce.current);switch(u){case 1:u=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=c.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}u[We]=t,u[lt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)u.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=u;e:switch(Pe(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&It(t)}}return Ce(t),Zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=ce.current,Na(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||yd(e.nodeValue,l)),e||pl(t,!0)}else e=$u(e).createTextNode(a),e[We]=t,t.stateNode=e}return Ce(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Na(t),l!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[We]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else l=tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ce(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Na(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[We]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),n=!1}else n=tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ru(t,t.updateQueue),Ce(t),null);case 4:return Me(),e===null&&ms(t.stateNode.containerInfo),Ce(t),null;case 10:return Jt(t.type),Ce(t),null;case 19:if(w(Re),a=t.memoizedState,a===null)return Ce(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)An(a,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Nu(e),u!==null){for(t.flags|=128,An(a,!1),e=u.updateQueue,t.updateQueue=e,Ru(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Jf(l,e),l=l.sibling;return H(Re,Re.current&1|2),ye&&Vt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&rt()>Gu&&(t.flags|=128,n=!0,An(a,!1),t.lanes=4194304)}else{if(!n)if(e=Nu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ru(t,e),An(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ye)return Ce(t),null}else 2*rt()-a.renderingStartTime>Gu&&l!==536870912&&(t.flags|=128,n=!0,An(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rt(),e.sibling=null,l=Re.current,H(Re,n?l&1|2:l&1),ye&&Vt(t,a.treeForkCount),e):(Ce(t),null);case 22:case 23:return yt(t),hc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),l=t.updateQueue,l!==null&&Ru(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&w(Wl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jt(Be),Ce(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ep(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Be),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sl(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(Re),null;case 4:return Me(),null;case 10:return Jt(t.type),null;case 22:case 23:return yt(t),hc(),e!==null&&w(Wl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Be),null;case 25:return null;default:return null}}function jr(e,t){switch(Pi(t),t.tag){case 3:Jt(Be),Me();break;case 26:case 27:case 5:sl(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:w(Re);break;case 10:Jt(t.type);break;case 22:case 23:yt(t),hc(),e!==null&&w(Wl);break;case 24:Jt(Be)}}function _n(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,c=l.inst;a=u(),c.destroy=a}l=l.next}while(l!==n)}}catch(s){Te(t,t.return,s)}}function jl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var c=a.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=t;var r=l,g=s;try{g()}catch(z){Te(n,r,z)}}}a=a.next}while(a!==u)}}catch(z){Te(t,t.return,z)}}function Nr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{mo(t,l)}catch(a){Te(e,e.return,a)}}}function Tr(e,t,l){l.props=ea(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Te(e,t,a)}}function zn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Te(e,t,n)}}function qt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Te(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Te(e,t,n)}else l.current=null}function Ar(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Te(e,e.return,n)}}function Vc(e,t,l){try{var a=e.stateNode;jp(a,e.type,l,t),a[lt]=t}catch(n){Te(e,e.return,n)}}function _r(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ml(e.type)||e.tag===4}function Kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_r(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ml(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Lt));else if(a!==4&&(a===27&&Ml(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Jc(e,t,l),e=e.sibling;e!==null;)Jc(e,t,l),e=e.sibling}function Hu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Ml(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Hu(e,t,l),e=e.sibling;e!==null;)Hu(e,t,l),e=e.sibling}function zr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pe(t,a,l),t[We]=e,t[lt]=l}catch(u){Te(e,e.return,u)}}var Pt=!1,Ge=!1,Wc=!1,Er=typeof WeakSet=="function"?WeakSet:Set,Je=null;function tp(e,t){if(e=e.containerInfo,xs=ni,e=qf(e),Xi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var c=0,s=-1,r=-1,g=0,z=0,O=e,S=null;t:for(;;){for(var T;O!==l||n!==0&&O.nodeType!==3||(s=c+n),O!==u||a!==0&&O.nodeType!==3||(r=c+a),O.nodeType===3&&(c+=O.nodeValue.length),(T=O.firstChild)!==null;)S=O,O=T;for(;;){if(O===e)break t;if(S===l&&++g===n&&(s=c),S===u&&++z===a&&(r=c),(T=O.nextSibling)!==null)break;O=S,S=O.parentNode}O=T}l=s===-1||r===-1?null:{start:s,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(ys={focusedElem:e,selectionRange:l},ni=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var Z=ea(l.type,n);e=a.getSnapshotBeforeUpdate(Z,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(P){Te(l,l.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)vs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Mr(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:tl(e,l),a&4&&_n(5,l);break;case 1:if(tl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Te(l,l.return,c)}else{var n=ea(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Te(l,l.return,c)}}a&64&&Nr(l),a&512&&zn(l,l.return);break;case 3:if(tl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{mo(e,t)}catch(c){Te(l,l.return,c)}}break;case 27:t===null&&a&4&&zr(l);case 26:case 5:tl(e,l),t===null&&a&4&&Ar(l),a&512&&zn(l,l.return);break;case 12:tl(e,l);break;case 31:tl(e,l),a&4&&Cr(e,l);break;case 13:tl(e,l),a&4&&Dr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=op.bind(null,l),wp(e,l))));break;case 22:if(a=l.memoizedState!==null||Pt,!a){t=t!==null&&t.memoizedState!==null||Ge,n=Pt;var u=Ge;Pt=a,(Ge=t)&&!u?ll(e,l,(l.subtreeFlags&8772)!==0):tl(e,l),Pt=n,Ge=u}break;case 30:break;default:tl(e,l)}}function wr(e){var t=e.alternate;t!==null&&(e.alternate=null,wr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ai(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,nt=!1;function el(e,t,l){for(l=l.child;l!==null;)Or(e,t,l),l=l.sibling}function Or(e,t,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Fa,l)}catch{}switch(l.tag){case 26:Ge||qt(l,t),el(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ge||qt(l,t);var a=De,n=nt;Ml(l.type)&&(De=l.stateNode,nt=!1),el(e,t,l),Rn(l.stateNode),De=a,nt=n;break;case 5:Ge||qt(l,t);case 6:if(a=De,n=nt,De=null,el(e,t,l),De=a,nt=n,De!==null)if(nt)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(l.stateNode)}catch(u){Te(l,t,u)}else try{De.removeChild(l.stateNode)}catch(u){Te(l,t,u)}break;case 18:De!==null&&(nt?(e=De,Nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Qa(e)):Nd(De,l.stateNode));break;case 4:a=De,n=nt,De=l.stateNode.containerInfo,nt=!0,el(e,t,l),De=a,nt=n;break;case 0:case 11:case 14:case 15:jl(2,l,t),Ge||jl(4,l,t),el(e,t,l);break;case 1:Ge||(qt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Tr(l,t,a)),el(e,t,l);break;case 21:el(e,t,l);break;case 22:Ge=(a=Ge)||l.memoizedState!==null,el(e,t,l),Ge=a;break;default:el(e,t,l)}}function Cr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qa(e)}catch(l){Te(t,t.return,l)}}}function Dr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qa(e)}catch(l){Te(t,t.return,l)}}function lp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Er),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Er),t;default:throw Error(o(435,e.tag))}}function Bu(e,t){var l=lp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=rp.bind(null,e,a);a.then(n,n)}})}function ut(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(Ml(s.type)){De=s.stateNode,nt=!1;break e}break;case 5:De=s.stateNode,nt=!1;break e;case 3:case 4:De=s.stateNode.containerInfo,nt=!0;break e}s=s.return}if(De===null)throw Error(o(160));Or(u,c,n),De=null,nt=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ur(t,e),t=t.sibling}var Dt=null;function Ur(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),it(e),a&4&&(jl(3,e,e.return),_n(3,e),jl(5,e,e.return));break;case 1:ut(t,e),it(e),a&512&&(Ge||l===null||qt(l,l.return)),a&64&&Pt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Dt;if(ut(t,e),it(e),a&512&&(Ge||l===null||qt(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Pa]||u[We]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Pe(u,a,l),u[We]=e,Ke(u),a=u;break e;case"link":var c=Ud("link","href",n).get(a+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(u=c[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break t}}u=n.createElement(a),Pe(u,a,l),n.head.appendChild(u);break;case"meta":if(c=Ud("meta","content",n).get(a+(l.content||""))){for(s=0;s<c.length;s++)if(u=c[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break t}}u=n.createElement(a),Pe(u,a,l),n.head.appendChild(u);break;default:throw Error(o(468,a))}u[We]=e,Ke(u),a=u}e.stateNode=a}else kd(n,e.type,e.stateNode);else e.stateNode=Dd(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?kd(n,e.type,e.stateNode):Dd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vc(e,e.memoizedProps,l.memoizedProps)}break;case 27:ut(t,e),it(e),a&512&&(Ge||l===null||qt(l,l.return)),l!==null&&a&4&&Vc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ut(t,e),it(e),a&512&&(Ge||l===null||qt(l,l.return)),e.flags&32){n=e.stateNode;try{ma(n,"")}catch(Z){Te(e,e.return,Z)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Vc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Wc=!0);break;case 6:if(ut(t,e),it(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Z){Te(e,e.return,Z)}}break;case 3:if(ei=null,n=Dt,Dt=Iu(t.containerInfo),ut(t,e),Dt=n,it(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Qa(t.containerInfo)}catch(Z){Te(e,e.return,Z)}Wc&&(Wc=!1,kr(e));break;case 4:a=Dt,Dt=Iu(e.stateNode.containerInfo),ut(t,e),it(e),Dt=a;break;case 12:ut(t,e),it(e);break;case 31:ut(t,e),it(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bu(e,a)));break;case 13:ut(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Yu=rt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bu(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,g=Pt,z=Ge;if(Pt=g||n,Ge=z||r,ut(t,e),Ge=z,Pt=g,it(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||Pt||Ge||ta(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(u=r.stateNode,n)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=r.stateNode;var O=r.memoizedProps.style,S=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Z){Te(r,r.return,Z)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(Z){Te(r,r.return,Z)}}}else if(t.tag===18){if(l===null){r=t;try{var T=r.stateNode;n?Td(T,!0):Td(r.stateNode,!1)}catch(Z){Te(r,r.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Bu(e,l))));break;case 19:ut(t,e),it(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bu(e,a)));break;case 30:break;case 21:break;default:ut(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(_r(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,u=Kc(e);Hu(e,u,n);break;case 5:var c=l.stateNode;l.flags&32&&(ma(c,""),l.flags&=-33);var s=Kc(e);Hu(e,s,c);break;case 3:case 4:var r=l.stateNode.containerInfo,g=Kc(e);Jc(e,g,r);break;default:throw Error(o(161))}}catch(z){Te(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function tl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mr(e,t.alternate,t),t=t.sibling}function ta(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:jl(4,t,t.return),ta(t);break;case 1:qt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Tr(t,t.return,l),ta(t);break;case 27:Rn(t.stateNode);case 26:case 5:qt(t,t.return),ta(t);break;case 22:t.memoizedState===null&&ta(t);break;case 30:ta(t);break;default:ta(t)}e=e.sibling}}function ll(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,c=u.flags;switch(u.tag){case 0:case 11:case 15:ll(n,u,l),_n(4,u);break;case 1:if(ll(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){Te(a,a.return,g)}if(a=u,n=a.updateQueue,n!==null){var s=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)ro(r[n],s)}catch(g){Te(a,a.return,g)}}l&&c&64&&Nr(u),zn(u,u.return);break;case 27:zr(u);case 26:case 5:ll(n,u,l),l&&a===null&&c&4&&Ar(u),zn(u,u.return);break;case 12:ll(n,u,l);break;case 31:ll(n,u,l),l&&c&4&&Cr(n,u);break;case 13:ll(n,u,l),l&&c&4&&Dr(n,u);break;case 22:u.memoizedState===null&&ll(n,u,l),zn(u,u.return);break;case 30:break;default:ll(n,u,l)}t=t.sibling}}function Fc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&mn(l))}function $c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e))}function Ut(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rr(e,t,l,a),t=t.sibling}function Rr(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,l,a),n&2048&&_n(9,t);break;case 1:Ut(e,t,l,a);break;case 3:Ut(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e)));break;case 12:if(n&2048){Ut(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,c=u.id,s=u.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){Te(t,t.return,r)}}else Ut(e,t,l,a);break;case 31:Ut(e,t,l,a);break;case 13:Ut(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,c=t.alternate,t.memoizedState!==null?u._visibility&2?Ut(e,t,l,a):En(e,t):u._visibility&2?Ut(e,t,l,a):(u._visibility|=2,Da(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Fc(c,t);break;case 24:Ut(e,t,l,a),n&2048&&$c(t.alternate,t);break;default:Ut(e,t,l,a)}}function Da(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,c=t,s=l,r=a,g=c.flags;switch(c.tag){case 0:case 11:case 15:Da(u,c,s,r,n),_n(8,c);break;case 23:break;case 22:var z=c.stateNode;c.memoizedState!==null?z._visibility&2?Da(u,c,s,r,n):En(u,c):(z._visibility|=2,Da(u,c,s,r,n)),n&&g&2048&&Fc(c.alternate,c);break;case 24:Da(u,c,s,r,n),n&&g&2048&&$c(c.alternate,c);break;default:Da(u,c,s,r,n)}t=t.sibling}}function En(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:En(l,a),n&2048&&Fc(a.alternate,a);break;case 24:En(l,a),n&2048&&$c(a.alternate,a);break;default:En(l,a)}t=t.sibling}}var Mn=8192;function Ua(e,t,l){if(e.subtreeFlags&Mn)for(e=e.child;e!==null;)Hr(e,t,l),e=e.sibling}function Hr(e,t,l){switch(e.tag){case 26:Ua(e,t,l),e.flags&Mn&&e.memoizedState!==null&&Xp(l,Dt,e.memoizedState,e.memoizedProps);break;case 5:Ua(e,t,l);break;case 3:case 4:var a=Dt;Dt=Iu(e.stateNode.containerInfo),Ua(e,t,l),Dt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Mn,Mn=16777216,Ua(e,t,l),Mn=a):Ua(e,t,l));break;default:Ua(e,t,l)}}function Br(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Je=a,Yr(a,e)}Br(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qr(e),e=e.sibling}function qr(e){switch(e.tag){case 0:case 11:case 15:wn(e),e.flags&2048&&jl(9,e,e.return);break;case 3:wn(e);break;case 12:wn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qu(e)):wn(e);break;default:wn(e)}}function qu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Je=a,Yr(a,e)}Br(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:jl(8,t,t.return),qu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,qu(t));break;default:qu(t)}e=e.sibling}}function Yr(e,t){for(;Je!==null;){var l=Je;switch(l.tag){case 0:case 11:case 15:jl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:mn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Je=a;else e:for(l=e;Je!==null;){a=Je;var n=a.sibling,u=a.return;if(wr(a),a===l){Je=null;break e}if(n!==null){n.return=u,Je=n;break e}Je=u}}}var ap={getCacheForType:function(e){var t=$e(Be),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return $e(Be).controller.signal}},np=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ee=null,de=null,he=0,Ne=0,bt=null,Nl=!1,ka=!1,Ic=!1,al=0,ke=0,Tl=0,la=0,Pc=0,gt=0,Ra=0,On=null,ct=null,es=!1,Yu=0,Gr=0,Gu=1/0,Xu=null,Al=null,Le=0,_l=null,Ha=null,nl=0,ts=0,ls=null,Xr=null,Cn=0,as=null;function vt(){return(Se&2)!==0&&he!==0?he&-he:A.T!==null?fs():lf()}function Lr(){if(gt===0)if((he&536870912)===0||ye){var e=Fn;Fn<<=1,(Fn&3932160)===0&&(Fn=262144),gt=e}else gt=536870912;return e=xt.current,e!==null&&(e.flags|=32),gt}function st(e,t,l){(e===Ee&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Ba(e,0),zl(e,he,gt,!1)),Ia(e,l),((Se&2)===0||e!==Ee)&&(e===Ee&&((Se&2)===0&&(la|=l),ke===4&&zl(e,he,gt,!1)),Yt(e))}function Qr(e,t,l){if((Se&6)!==0)throw Error(o(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||$a(e,t),n=a?cp(e,t):us(e,t,!0),u=a;do{if(n===0){ka&&!a&&zl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!up(l)){n=us(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var s=e;n=On;var r=s.current.memoizedState.isDehydrated;if(r&&(Ba(s,c).flags|=256),c=us(s,c,!1),c!==2){if(Ic&&!r){s.errorRecoveryDisabledLanes|=u,la|=u,n=4;break e}u=ct,ct=n,u!==null&&(ct===null?ct=u:ct.push.apply(ct,u))}n=c}if(u=!1,n!==2)continue}}if(n===1){Ba(e,0),zl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:zl(a,t,gt,!Nl);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Yu+300-rt(),10<n)){if(zl(a,t,gt,!Nl),In(a,0,!0)!==0)break e;nl=t,a.timeoutHandle=Sd(Zr.bind(null,a,l,ct,Xu,es,t,gt,la,Ra,Nl,u,"Throttled",-0,0),n);break e}Zr(a,l,ct,Xu,es,t,gt,la,Ra,Nl,u,null,-0,0)}}break}while(!0);Yt(e)}function Zr(e,t,l,a,n,u,c,s,r,g,z,O,S,T){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Lt},Hr(t,u,O);var Z=(u&62914560)===u?Yu-rt():(u&4194048)===u?Gr-rt():0;if(Z=Lp(O,Z),Z!==null){nl=u,e.cancelPendingCommit=Z(Pr.bind(null,e,t,u,l,a,n,c,s,r,z,O,null,S,T)),zl(e,u,c,!g);return}}Pr(e,t,u,l,a,n,c,s,r)}function up(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!ht(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zl(e,t,l,a){t&=~Pc,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-mt(n),c=1<<u;a[u]=-1,n&=~c}l!==0&&Ps(e,l,t)}function Lu(){return(Se&6)===0?(Dn(0),!1):!0}function ns(){if(de!==null){if(Ne===0)var e=de.return;else e=de,Kt=Kl=null,vc(e),Ea=null,pn=0,e=de;for(;e!==null;)jr(e.alternate,e),e=e.return;de=null}}function Ba(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Ap(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),nl=0,ns(),Ee=e,de=l=Zt(e.current,null),he=t,Ne=0,bt=null,Nl=!1,ka=$a(e,t),Ic=!1,Ra=gt=Pc=la=Tl=ke=0,ct=On=null,es=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-mt(a),u=1<<n;t|=e[n],a&=~u}return al=t,ou(),l}function Vr(e,t){ue=null,A.H=Nn,t===za||t===bu?(t=co(),Ne=3):t===sc?(t=co(),Ne=4):Ne=t===Rc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,de===null&&(ke=1,Cu(e,Tt(t,e.current)))}function Kr(){var e=xt.current;return e===null?!0:(he&4194048)===he?Et===null:(he&62914560)===he||(he&536870912)!==0?e===Et:!1}function Jr(){var e=A.H;return A.H=Nn,e===null?Nn:e}function Wr(){var e=A.A;return A.A=ap,e}function Qu(){ke=4,Nl||(he&4194048)!==he&&xt.current!==null||(ka=!0),(Tl&134217727)===0&&(la&134217727)===0||Ee===null||zl(Ee,he,gt,!1)}function us(e,t,l){var a=Se;Se|=2;var n=Jr(),u=Wr();(Ee!==e||he!==t)&&(Xu=null,Ba(e,t)),t=!1;var c=ke;e:do try{if(Ne!==0&&de!==null){var s=de,r=bt;switch(Ne){case 8:ns(),c=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var g=Ne;if(Ne=0,bt=null,qa(e,s,r,g),l&&ka){c=0;break e}break;default:g=Ne,Ne=0,bt=null,qa(e,s,r,g)}}ip(),c=ke;break}catch(z){Vr(e,z)}while(!0);return t&&e.shellSuspendCounter++,Kt=Kl=null,Se=a,A.H=n,A.A=u,de===null&&(Ee=null,he=0,ou()),c}function ip(){for(;de!==null;)Fr(de)}function cp(e,t){var l=Se;Se|=2;var a=Jr(),n=Wr();Ee!==e||he!==t?(Xu=null,Gu=rt()+500,Ba(e,t)):ka=$a(e,t);e:do try{if(Ne!==0&&de!==null){t=de;var u=bt;t:switch(Ne){case 1:Ne=0,bt=null,qa(e,t,u,1);break;case 2:case 9:if(uo(u)){Ne=0,bt=null,$r(t);break}t=function(){Ne!==2&&Ne!==9||Ee!==e||(Ne=7),Yt(e)},u.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:uo(u)?(Ne=0,bt=null,$r(t)):(Ne=0,bt=null,qa(e,t,u,7));break;case 5:var c=null;switch(de.tag){case 26:c=de.memoizedState;case 5:case 27:var s=de;if(c?Rd(c):s.stateNode.complete){Ne=0,bt=null;var r=s.sibling;if(r!==null)de=r;else{var g=s.return;g!==null?(de=g,Zu(g)):de=null}break t}}Ne=0,bt=null,qa(e,t,u,5);break;case 6:Ne=0,bt=null,qa(e,t,u,6);break;case 8:ns(),ke=6;break e;default:throw Error(o(462))}}sp();break}catch(z){Vr(e,z)}while(!0);return Kt=Kl=null,A.H=a,A.A=n,Se=l,de!==null?0:(Ee=null,he=0,ou(),ke)}function sp(){for(;de!==null&&!Om();)Fr(de)}function Fr(e){var t=vr(e.alternate,e,al);e.memoizedProps=e.pendingProps,t===null?Zu(e):de=t}function $r(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=hr(l,t,t.pendingProps,t.type,void 0,he);break;case 11:t=hr(l,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:vc(t);default:jr(l,t),t=de=Jf(t,al),t=vr(l,t,al)}e.memoizedProps=e.pendingProps,t===null?Zu(e):de=t}function qa(e,t,l,a){Kt=Kl=null,vc(t),Ea=null,pn=0;var n=t.return;try{if(Fh(e,n,t,l,he)){ke=1,Cu(e,Tt(l,e.current)),de=null;return}}catch(u){if(n!==null)throw de=n,u;ke=1,Cu(e,Tt(l,e.current)),de=null;return}t.flags&32768?(ye||a===1?e=!0:ka||(he&536870912)!==0?e=!1:(Nl=e=!0,(a===2||a===9||a===3||a===6)&&(a=xt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ir(t,e)):Zu(t)}function Zu(e){var t=e;do{if((t.flags&32768)!==0){Ir(t,Nl);return}e=t.return;var l=Ph(t.alternate,t,al);if(l!==null){de=l;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ke===0&&(ke=5)}function Ir(e,t){do{var l=ep(e.alternate,e);if(l!==null){l.flags&=32767,de=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=l}while(e!==null);ke=6,de=null}function Pr(e,t,l,a,n,u,c,s,r){e.cancelPendingCommit=null;do Vu();while(Le!==0);if((Se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Ki,Gm(e,l,u,c,s,r),e===Ee&&(de=Ee=null,he=0),Ha=t,_l=e,nl=l,ts=u,ls=n,Xr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dp(Jn,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,n=q.p,q.p=2,c=Se,Se|=4;try{tp(e,t,l)}finally{Se=c,q.p=n,A.T=a}}Le=1,ed(),td(),ld()}}function ed(){if(Le===1){Le=0;var e=_l,t=Ha,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=A.T,A.T=null;var a=q.p;q.p=2;var n=Se;Se|=4;try{Ur(t,e);var u=ys,c=qf(e.containerInfo),s=u.focusedElem,r=u.selectionRange;if(c!==s&&s&&s.ownerDocument&&Bf(s.ownerDocument.documentElement,s)){if(r!==null&&Xi(s)){var g=r.start,z=r.end;if(z===void 0&&(z=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(z,s.value.length);else{var O=s.ownerDocument||document,S=O&&O.defaultView||window;if(S.getSelection){var T=S.getSelection(),Z=s.textContent.length,P=Math.min(r.start,Z),ze=r.end===void 0?P:Math.min(r.end,Z);!T.extend&&P>ze&&(c=ze,ze=P,P=c);var p=Hf(s,P),m=Hf(s,ze);if(p&&m&&(T.rangeCount!==1||T.anchorNode!==p.node||T.anchorOffset!==p.offset||T.focusNode!==m.node||T.focusOffset!==m.offset)){var b=O.createRange();b.setStart(p.node,p.offset),T.removeAllRanges(),P>ze?(T.addRange(b),T.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),T.addRange(b))}}}}for(O=[],T=s;T=T.parentNode;)T.nodeType===1&&O.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var E=O[s];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}ni=!!xs,ys=xs=null}finally{Se=n,q.p=a,A.T=l}}e.current=t,Le=2}}function td(){if(Le===2){Le=0;var e=_l,t=Ha,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=A.T,A.T=null;var a=q.p;q.p=2;var n=Se;Se|=4;try{Mr(e,t.alternate,t)}finally{Se=n,q.p=a,A.T=l}}Le=3}}function ld(){if(Le===4||Le===3){Le=0,Cm();var e=_l,t=Ha,l=nl,a=Xr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,Ha=_l=null,ad(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Al=null),Ni(l),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=A.T,n=q.p,q.p=2,A.T=null;try{for(var u=e.onRecoverableError,c=0;c<a.length;c++){var s=a[c];u(s.value,{componentStack:s.stack})}}finally{A.T=t,q.p=n}}(nl&3)!==0&&Vu(),Yt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===as?Cn++:(Cn=0,as=e):Cn=0,Dn(0)}}function ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mn(t)))}function Vu(){return ed(),td(),ld(),nd()}function nd(){if(Le!==5)return!1;var e=_l,t=ts;ts=0;var l=Ni(nl),a=A.T,n=q.p;try{q.p=32>l?32:l,A.T=null,l=ls,ls=null;var u=_l,c=nl;if(Le=0,Ha=_l=null,nl=0,(Se&6)!==0)throw Error(o(331));var s=Se;if(Se|=4,qr(u.current),Rr(u,u.current,c,l),Se=s,Dn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Fa,u)}catch{}return!0}finally{q.p=n,A.T=a,ad(e,t)}}function ud(e,t,l){t=Tt(l,t),t=kc(e.stateNode,t,2),e=gl(e,t,2),e!==null&&(Ia(e,2),Yt(e))}function Te(e,t,l){if(e.tag===3)ud(e,e,l);else for(;t!==null;){if(t.tag===3){ud(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Al===null||!Al.has(a))){e=Tt(l,e),l=ir(2),a=gl(t,l,2),a!==null&&(cr(l,a,t,e),Ia(a,2),Yt(a));break}}t=t.return}}function is(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new np;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Ic=!0,n.add(l),e=fp.bind(null,e,t,l),t.then(e,e))}function fp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ee===e&&(he&l)===l&&(ke===4||ke===3&&(he&62914560)===he&&300>rt()-Yu?(Se&2)===0&&Ba(e,0):Pc|=l,Ra===he&&(Ra=0)),Yt(e)}function id(e,t){t===0&&(t=Is()),e=Ql(e,t),e!==null&&(Ia(e,t),Yt(e))}function op(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),id(e,l)}function rp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),id(e,l)}function dp(e,t){return gi(e,t)}var Ku=null,Ya=null,cs=!1,Ju=!1,ss=!1,El=0;function Yt(e){e!==Ya&&e.next===null&&(Ya===null?Ku=Ya=e:Ya=Ya.next=e),Ju=!0,cs||(cs=!0,hp())}function Dn(e,t){if(!ss&&Ju){ss=!0;do for(var l=!1,a=Ku;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var c=a.suspendedLanes,s=a.pingedLanes;u=(1<<31-mt(42|e)+1)-1,u&=n&~(c&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,od(a,u))}else u=he,u=In(a,a===Ee?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||$a(a,u)||(l=!0,od(a,u));a=a.next}while(l);ss=!1}}function mp(){cd()}function cd(){Ju=cs=!1;var e=0;El!==0&&Tp()&&(e=El);for(var t=rt(),l=null,a=Ku;a!==null;){var n=a.next,u=sd(a,t);u===0?(a.next=null,l===null?Ku=n:l.next=n,n===null&&(Ya=l)):(l=a,(e!==0||(u&3)!==0)&&(Ju=!0)),a=n}Le!==0&&Le!==5||Dn(e),El!==0&&(El=0)}function sd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var c=31-mt(u),s=1<<c,r=n[c];r===-1?((s&l)===0||(s&a)!==0)&&(n[c]=Ym(s,t)):r<=t&&(e.expiredLanes|=s),u&=~s}if(t=Ee,l=he,l=In(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&vi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||$a(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&vi(a),Ni(l)){case 2:case 8:l=Fs;break;case 32:l=Jn;break;case 268435456:l=$s;break;default:l=Jn}return a=fd.bind(null,e),l=gi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&vi(a),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Vu()&&e.callbackNode!==l)return null;var a=he;return a=In(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Qr(e,a,t),sd(e,rt()),e.callbackNode!=null&&e.callbackNode===l?fd.bind(null,e):null)}function od(e,t){if(Vu())return null;Qr(e,t,!0)}function hp(){_p(function(){(Se&6)!==0?gi(Ws,mp):cd()})}function fs(){if(El===0){var e=Aa;e===0&&(e=Wn,Wn<<=1,(Wn&261888)===0&&(Wn=256)),El=e}return El}function rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lu(""+e)}function dd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function pp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=rd((n[lt]||null).action),c=a.submitter;c&&(t=(t=c[lt]||null)?rd(t.formAction):c.getAttribute("formAction"),t!==null&&(u=t,c=null));var s=new iu("action","action",null,a,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(El!==0){var r=c?dd(n,c):new FormData(n);Mc(l,{pending:!0,data:r,method:n.method,action:u},null,r)}}else typeof u=="function"&&(s.preventDefault(),r=c?dd(n,c):new FormData(n),Mc(l,{pending:!0,data:r,method:n.method,action:u},u,r))},currentTarget:n}]})}}for(var os=0;os<Vi.length;os++){var rs=Vi[os],xp=rs.toLowerCase(),yp=rs[0].toUpperCase()+rs.slice(1);Ct(xp,"on"+yp)}Ct(Xf,"onAnimationEnd"),Ct(Lf,"onAnimationIteration"),Ct(Qf,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Dh,"onTransitionRun"),Ct(Uh,"onTransitionStart"),Ct(kh,"onTransitionCancel"),Ct(Zf,"onTransitionEnd"),ra("onMouseEnter",["mouseout","mouseover"]),ra("onMouseLeave",["mouseout","mouseover"]),ra("onPointerEnter",["pointerout","pointerover"]),ra("onPointerLeave",["pointerout","pointerover"]),Yl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Un));function md(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var c=a.length-1;0<=c;c--){var s=a[c],r=s.instance,g=s.currentTarget;if(s=s.listener,r!==u&&n.isPropagationStopped())break e;u=s,n.currentTarget=g;try{u(n)}catch(z){fu(z)}n.currentTarget=null,u=r}else for(c=0;c<a.length;c++){if(s=a[c],r=s.instance,g=s.currentTarget,s=s.listener,r!==u&&n.isPropagationStopped())break e;u=s,n.currentTarget=g;try{u(n)}catch(z){fu(z)}n.currentTarget=null,u=r}}}}function me(e,t){var l=t[Ti];l===void 0&&(l=t[Ti]=new Set);var a=e+"__bubble";l.has(a)||(hd(t,e,2,!1),l.add(a))}function ds(e,t,l){var a=0;t&&(a|=4),hd(l,e,a,t)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[Wu]){e[Wu]=!0,uf.forEach(function(l){l!=="selectionchange"&&(bp.has(l)||ds(l,!1,e),ds(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wu]||(t[Wu]=!0,ds("selectionchange",!1,t))}}function hd(e,t,l,a){switch(Ld(t)){case 2:var n=Vp;break;case 8:n=Kp;break;default:n=Es}l=n.bind(null,t,l,e),n=void 0,!Di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function hs(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var s=a.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=a.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=sa(s),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){a=u=c;continue e}s=s.parentNode}}a=a.return}bf(function(){var g=u,z=Oi(l),O=[];e:{var S=Vf.get(e);if(S!==void 0){var T=iu,Z=e;switch(e){case"keypress":if(nu(l)===0)break e;case"keydown":case"keyup":T=rh;break;case"focusin":Z="focus",T=Hi;break;case"focusout":Z="blur",T=Hi;break;case"beforeblur":case"afterblur":T=Hi;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=hh;break;case Xf:case Lf:case Qf:T=lh;break;case Zf:T=xh;break;case"scroll":case"scrollend":T=$m;break;case"wheel":T=bh;break;case"copy":case"cut":case"paste":T=nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Nf;break;case"toggle":case"beforetoggle":T=vh}var P=(t&4)!==0,ze=!P&&(e==="scroll"||e==="scrollend"),p=P?S!==null?S+"Capture":null:S;P=[];for(var m=g,b;m!==null;){var E=m;if(b=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||b===null||p===null||(E=tn(m,p),E!=null&&P.push(kn(m,E,b))),ze)break;m=m.return}0<P.length&&(S=new T(S,Z,null,l,z),O.push({event:S,listeners:P}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",S&&l!==wi&&(Z=l.relatedTarget||l.fromElement)&&(sa(Z)||Z[ca]))break e;if((T||S)&&(S=z.window===z?z:(S=z.ownerDocument)?S.defaultView||S.parentWindow:window,T?(Z=l.relatedTarget||l.toElement,T=g,Z=Z?sa(Z):null,Z!==null&&(ze=M(Z),P=Z.tag,Z!==ze||P!==5&&P!==27&&P!==6)&&(Z=null)):(T=null,Z=g),T!==Z)){if(P=Sf,E="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(P=Nf,E="onPointerLeave",p="onPointerEnter",m="pointer"),ze=T==null?S:en(T),b=Z==null?S:en(Z),S=new P(E,m+"leave",T,l,z),S.target=ze,S.relatedTarget=b,E=null,sa(z)===g&&(P=new P(p,m+"enter",Z,l,z),P.target=b,P.relatedTarget=ze,E=P),ze=E,T&&Z)t:{for(P=gp,p=T,m=Z,b=0,E=p;E;E=P(E))b++;E=0;for(var I=m;I;I=P(I))E++;for(;0<b-E;)p=P(p),b--;for(;0<E-b;)m=P(m),E--;for(;b--;){if(p===m||m!==null&&p===m.alternate){P=p;break t}p=P(p),m=P(m)}P=null}else P=null;T!==null&&pd(O,S,T,P,!1),Z!==null&&ze!==null&&pd(O,ze,Z,P,!0)}}e:{if(S=g?en(g):window,T=S.nodeName&&S.nodeName.toLowerCase(),T==="select"||T==="input"&&S.type==="file")var be=Of;else if(Mf(S))if(Cf)be=wh;else{be=Eh;var J=zh}else T=S.nodeName,!T||T.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?g&&Mi(g.elementType)&&(be=Of):be=Mh;if(be&&(be=be(e,g))){wf(O,be,l,z);break e}J&&J(e,S,g),e==="focusout"&&g&&S.type==="number"&&g.memoizedProps.value!=null&&Ei(S,"number",S.value)}switch(J=g?en(g):window,e){case"focusin":(Mf(J)||J.contentEditable==="true")&&(ya=J,Li=g,on=null);break;case"focusout":on=Li=ya=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,Yf(O,l,z);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Yf(O,l,z)}var ie;if(qi)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else xa?zf(e,l)&&(pe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(pe="onCompositionStart");pe&&(Tf&&l.locale!=="ko"&&(xa||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&xa&&(ie=gf()):(dl=z,Ui="value"in dl?dl.value:dl.textContent,xa=!0)),J=Fu(g,pe),0<J.length&&(pe=new jf(pe,e,null,l,z),O.push({event:pe,listeners:J}),ie?pe.data=ie:(ie=Ef(l),ie!==null&&(pe.data=ie)))),(ie=jh?Nh(e,l):Th(e,l))&&(pe=Fu(g,"onBeforeInput"),0<pe.length&&(J=new jf("onBeforeInput","beforeinput",null,l,z),O.push({event:J,listeners:pe}),J.data=ie)),pp(O,e,g,l,z)}md(O,t)})}function kn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Fu(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=tn(e,l),n!=null&&a.unshift(kn(e,n,u)),n=tn(e,t),n!=null&&a.push(kn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function gp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pd(e,t,l,a,n){for(var u=t._reactName,c=[];l!==null&&l!==a;){var s=l,r=s.alternate,g=s.stateNode;if(s=s.tag,r!==null&&r===a)break;s!==5&&s!==26&&s!==27||g===null||(r=g,n?(g=tn(l,u),g!=null&&c.unshift(kn(l,g,r))):n||(g=tn(l,u),g!=null&&c.push(kn(l,g,r)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var vp=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(Sp,"")}function yd(e,t){return t=xd(t),xd(e)===t}function _e(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ma(e,""+a);break;case"className":eu(e,"class",a);break;case"tabIndex":eu(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":eu(e,l,a);break;case"style":xf(e,a,u);break;case"data":if(t!=="object"){eu(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=lu(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&_e(e,t,"name",n.name,n,null),_e(e,t,"formEncType",n.formEncType,n,null),_e(e,t,"formMethod",n.formMethod,n,null),_e(e,t,"formTarget",n.formTarget,n,null)):(_e(e,t,"encType",n.encType,n,null),_e(e,t,"method",n.method,n,null),_e(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=lu(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Lt);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=lu(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":me("beforetoggle",e),me("toggle",e),Pn(e,"popover",a);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Pn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Wm.get(l)||l,Pn(e,l,a))}}function ps(e,t,l,a,n,u){switch(l){case"style":xf(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Lt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[lt]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Pn(e,l,a)}}}function Pe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var c=l[u];if(c!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,u,c,l,null)}}n&&_e(e,t,"srcSet",l.srcSet,l,null),a&&_e(e,t,"src",l.src,l,null);return;case"input":me("invalid",e);var s=u=c=n=null,r=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var z=l[a];if(z!=null)switch(a){case"name":n=z;break;case"type":c=z;break;case"checked":r=z;break;case"defaultChecked":g=z;break;case"value":u=z;break;case"defaultValue":s=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:_e(e,t,a,z,l,null)}}df(e,u,s,r,g,c,n,!1);return;case"select":me("invalid",e),a=c=u=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":u=s;break;case"defaultValue":c=s;break;case"multiple":a=s;default:_e(e,t,n,s,l,null)}t=u,l=c,e.multiple=!!a,t!=null?da(e,!!a,t,!1):l!=null&&da(e,!!a,l,!0);return;case"textarea":me("invalid",e),u=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":a=s;break;case"defaultValue":n=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:_e(e,t,c,s,l,null)}hf(e,a,n,u);return;case"option":for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null)&&(r==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":_e(e,t,r,a,l,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(a=0;a<Un.length;a++)me(Un[a],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,g,a,l,null)}return;default:if(Mi(t)){for(z in l)l.hasOwnProperty(z)&&(a=l[z],a!==void 0&&ps(e,t,z,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&_e(e,t,s,a,l,null))}function jp(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,c=null,s=null,r=null,g=null,z=null;for(T in l){var O=l[T];if(l.hasOwnProperty(T)&&O!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":r=O;default:a.hasOwnProperty(T)||_e(e,t,T,null,a,O)}}for(var S in a){var T=a[S];if(O=l[S],a.hasOwnProperty(S)&&(T!=null||O!=null))switch(S){case"type":u=T;break;case"name":n=T;break;case"checked":g=T;break;case"defaultChecked":z=T;break;case"value":c=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:T!==O&&_e(e,t,S,T,a,O)}}zi(e,c,s,r,g,z,u,n);return;case"select":T=c=s=S=null;for(u in l)if(r=l[u],l.hasOwnProperty(u)&&r!=null)switch(u){case"value":break;case"multiple":T=r;default:a.hasOwnProperty(u)||_e(e,t,u,null,a,r)}for(n in a)if(u=a[n],r=l[n],a.hasOwnProperty(n)&&(u!=null||r!=null))switch(n){case"value":S=u;break;case"defaultValue":s=u;break;case"multiple":c=u;default:u!==r&&_e(e,t,n,u,a,r)}t=s,l=c,a=T,S!=null?da(e,!!l,S,!1):!!a!=!!l&&(t!=null?da(e,!!l,t,!0):da(e,!!l,l?[]:"",!1));return;case"textarea":T=S=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:_e(e,t,s,null,a,n)}for(c in a)if(n=a[c],u=l[c],a.hasOwnProperty(c)&&(n!=null||u!=null))switch(c){case"value":S=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==u&&_e(e,t,c,n,a,u)}mf(e,S,T);return;case"option":for(var Z in l)S=l[Z],l.hasOwnProperty(Z)&&S!=null&&!a.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:_e(e,t,Z,null,a,S));for(r in a)S=a[r],T=l[r],a.hasOwnProperty(r)&&S!==T&&(S!=null||T!=null)&&(r==="selected"?e.selected=S&&typeof S!="function"&&typeof S!="symbol":_e(e,t,r,S,a,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in l)S=l[P],l.hasOwnProperty(P)&&S!=null&&!a.hasOwnProperty(P)&&_e(e,t,P,null,a,S);for(g in a)if(S=a[g],T=l[g],a.hasOwnProperty(g)&&S!==T&&(S!=null||T!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(137,t));break;default:_e(e,t,g,S,a,T)}return;default:if(Mi(t)){for(var ze in l)S=l[ze],l.hasOwnProperty(ze)&&S!==void 0&&!a.hasOwnProperty(ze)&&ps(e,t,ze,void 0,a,S);for(z in a)S=a[z],T=l[z],!a.hasOwnProperty(z)||S===T||S===void 0&&T===void 0||ps(e,t,z,S,a,T);return}}for(var p in l)S=l[p],l.hasOwnProperty(p)&&S!=null&&!a.hasOwnProperty(p)&&_e(e,t,p,null,a,S);for(O in a)S=a[O],T=l[O],!a.hasOwnProperty(O)||S===T||S==null&&T==null||_e(e,t,O,S,a,T)}function bd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Np(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,c=n.initiatorType,s=n.duration;if(u&&s&&bd(c)){for(c=0,s=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],g=r.startTime;if(g>s)break;var z=r.transferSize,O=r.initiatorType;z&&bd(O)&&(r=r.responseEnd,c+=z*(r<s?1:(s-g)/(r-g)))}if(--a,t+=8*(u+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xs=null,ys=null;function $u(e){return e.nodeType===9?e:e.ownerDocument}function gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var Sd=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,_p=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(zp)}:Sd;function zp(e){setTimeout(function(){throw e})}function Ml(e){return e==="head"}function Nd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Qa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Rn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Rn(l);for(var u=l.firstChild;u;){var c=u.nextSibling,s=u.nodeName;u[Pa]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}else l==="body"&&Rn(e.ownerDocument.body);l=n}while(l);Qa(t)}function Td(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vs(l),Ai(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ep(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Pa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function Mp(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Mt(e.nextSibling),e===null))return null;return e}function Ad(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Ss(e){return e.data==="$?"||e.data==="$~"}function js(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wp(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ns=null;function _d(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Mt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Ed(e,t,l){switch(t=$u(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Rn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ai(e)}var wt=new Map,Md=new Set;function Iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ul=q.d;q.d={f:Op,r:Cp,D:Dp,C:Up,L:kp,m:Rp,X:Bp,S:Hp,M:qp};function Op(){var e=ul.f(),t=Lu();return e||t}function Cp(e){var t=fa(e);t!==null&&t.tag===5&&t.type==="form"?Vo(t):ul.r(e)}var Ga=typeof document>"u"?null:document;function wd(e,t,l){var a=Ga;if(a&&typeof t=="string"&&t){var n=jt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Md.has(n)||(Md.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Pe(t,"link",e),Ke(t),a.head.appendChild(t)))}}function Dp(e){ul.D(e),wd("dns-prefetch",e,null)}function Up(e,t){ul.C(e,t),wd("preconnect",e,t)}function kp(e,t,l){ul.L(e,t,l);var a=Ga;if(a&&e&&t){var n='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+jt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+jt(l.imageSizes)+'"]')):n+='[href="'+jt(e)+'"]';var u=n;switch(t){case"style":u=Xa(e);break;case"script":u=La(e)}wt.has(u)||(e=k({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),wt.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Hn(u))||t==="script"&&a.querySelector(Bn(u))||(t=a.createElement("link"),Pe(t,"link",e),Ke(t),a.head.appendChild(t)))}}function Rp(e,t){ul.m(e,t);var l=Ga;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+jt(a)+'"][href="'+jt(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=La(e)}if(!wt.has(u)&&(e=k({rel:"modulepreload",href:e},t),wt.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Bn(u)))return}a=l.createElement("link"),Pe(a,"link",e),Ke(a),l.head.appendChild(a)}}}function Hp(e,t,l){ul.S(e,t,l);var a=Ga;if(a&&e){var n=oa(a).hoistableStyles,u=Xa(e);t=t||"default";var c=n.get(u);if(!c){var s={loading:0,preload:null};if(c=a.querySelector(Hn(u)))s.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},l),(l=wt.get(u))&&Ts(e,l);var r=c=a.createElement("link");Ke(r),Pe(r,"link",e),r._p=new Promise(function(g,z){r.onload=g,r.onerror=z}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Pu(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(u,c)}}}function Bp(e,t){ul.X(e,t);var l=Ga;if(l&&e){var a=oa(l).hoistableScripts,n=La(e),u=a.get(n);u||(u=l.querySelector(Bn(n)),u||(e=k({src:e,async:!0},t),(t=wt.get(n))&&As(e,t),u=l.createElement("script"),Ke(u),Pe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function qp(e,t){ul.M(e,t);var l=Ga;if(l&&e){var a=oa(l).hoistableScripts,n=La(e),u=a.get(n);u||(u=l.querySelector(Bn(n)),u||(e=k({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&As(e,t),u=l.createElement("script"),Ke(u),Pe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Od(e,t,l,a){var n=(n=ce.current)?Iu(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Xa(l.href),l=oa(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Xa(l.href);var u=oa(n).hoistableStyles,c=u.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,c),(u=n.querySelector(Hn(e)))&&!u._p&&(c.instance=u,c.state.loading=5),wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},wt.set(e,l),u||Yp(n,e,l,c.state))),t&&a===null)throw Error(o(528,""));return c}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=La(l),l=oa(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Xa(e){return'href="'+jt(e)+'"'}function Hn(e){return'link[rel="stylesheet"]['+e+"]"}function Cd(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Yp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Pe(t,"link",l),Ke(t),e.head.appendChild(t))}function La(e){return'[src="'+jt(e)+'"]'}function Bn(e){return"script[async]"+e}function Dd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+jt(l.href)+'"]');if(a)return t.instance=a,Ke(a),a;var n=k({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ke(a),Pe(a,"style",n),Pu(a,l.precedence,e),t.instance=a;case"stylesheet":n=Xa(l.href);var u=e.querySelector(Hn(n));if(u)return t.state.loading|=4,t.instance=u,Ke(u),u;a=Cd(l),(n=wt.get(n))&&Ts(a,n),u=(e.ownerDocument||e).createElement("link"),Ke(u);var c=u;return c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Pe(u,"link",a),t.state.loading|=4,Pu(u,l.precedence,e),t.instance=u;case"script":return u=La(l.src),(n=e.querySelector(Bn(u)))?(t.instance=n,Ke(n),n):(a=l,(n=wt.get(u))&&(a=k({},l),As(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ke(n),Pe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Pu(a,l.precedence,e));return t.instance}function Pu(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,c=0;c<a.length;c++){var s=a[c];if(s.dataset.precedence===t)u=s;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function As(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ei=null;function Ud(e,t,l){if(ei===null){var a=new Map,n=ei=new Map;n.set(l,a)}else n=ei,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[Pa]||u[We]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(t)||"";c=e+c;var s=a.get(c);s?s.push(u):a.set(c,[u])}}return a}function kd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Gp(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xp(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Xa(a.href),u=t.querySelector(Hn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ti.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Ke(u);return}u=t.ownerDocument||t,a=Cd(a),(n=wt.get(n))&&Ts(a,n),u=u.createElement("link"),Ke(u);var c=u;c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Pe(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=ti.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var _s=0;function Lp(e,t){return e.stylesheets&&e.count===0&&ai(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ai(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&_s===0&&(_s=62500*Np());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ai(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>_s?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function ti(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ai(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var li=null;function ai(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,li=new Map,t.forEach(Qp,e),li=null,ti.call(e))}function Qp(e,t){if(!(t.state.loading&4)){var l=li.get(e);if(l)var a=l.get(null);else{l=new Map,li.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var c=n[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),u=l.get(c)||a,u===a&&l.set(null,n),l.set(c,n),this.count++,a=ti.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var qn={$$typeof:L,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Zp(e,t,l,a,n,u,c,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.hiddenUpdates=Si(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Hd(e,t,l,a,n,u,c,s,r,g,z,O){return e=new Zp(e,t,l,c,r,g,z,O,s),t=1,u===!0&&(t|=24),u=pt(3,null,null,t),e.current=u,u.stateNode=e,t=uc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},fc(u),e}function Bd(e){return e?(e=va,e):va}function qd(e,t,l,a,n,u){n=Bd(n),a.context===null?a.context=n:a.pendingContext=n,a=bl(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=gl(e,a,t),l!==null&&(st(l,e,t),yn(l,e,t))}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function zs(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function Gd(e){if(e.tag===13||e.tag===31){var t=Ql(e,67108864);t!==null&&st(t,e,67108864),zs(e,67108864)}}function Xd(e){if(e.tag===13||e.tag===31){var t=vt();t=ji(t);var l=Ql(e,t);l!==null&&st(l,e,t),zs(e,t)}}var ni=!0;function Vp(e,t,l,a){var n=A.T;A.T=null;var u=q.p;try{q.p=2,Es(e,t,l,a)}finally{q.p=u,A.T=n}}function Kp(e,t,l,a){var n=A.T;A.T=null;var u=q.p;try{q.p=8,Es(e,t,l,a)}finally{q.p=u,A.T=n}}function Es(e,t,l,a){if(ni){var n=Ms(a);if(n===null)hs(e,t,a,ui,l),Qd(e,a);else if(Wp(n,e,t,l,a))a.stopPropagation();else if(Qd(e,a),t&4&&-1<Jp.indexOf(e)){for(;n!==null;){var u=fa(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=ql(u.pendingLanes);if(c!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var r=1<<31-mt(c);s.entanglements[1]|=r,c&=~r}Yt(u),(Se&6)===0&&(Gu=rt()+500,Dn(0))}}break;case 31:case 13:s=Ql(u,2),s!==null&&st(s,u,2),Lu(),zs(u,2)}if(u=Ms(a),u===null&&hs(e,t,a,ui,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else hs(e,t,a,null,l)}}function Ms(e){return e=Oi(e),ws(e)}var ui=null;function ws(e){if(ui=null,e=sa(e),e!==null){var t=M(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=_(t),e!==null)return e;e=null}else if(l===31){if(e=U(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ui=e,null}function Ld(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dm()){case Ws:return 2;case Fs:return 8;case Jn:case Um:return 32;case $s:return 268435456;default:return 32}default:return 32}}var Os=!1,wl=null,Ol=null,Cl=null,Yn=new Map,Gn=new Map,Dl=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":wl=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Cl=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Xn(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=fa(t),t!==null&&Gd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Wp(e,t,l,a,n){switch(t){case"focusin":return wl=Xn(wl,e,t,l,a,n),!0;case"dragenter":return Ol=Xn(Ol,e,t,l,a,n),!0;case"mouseover":return Cl=Xn(Cl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return Yn.set(u,Xn(Yn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Gn.set(u,Xn(Gn.get(u)||null,e,t,l,a,n)),!0}return!1}function Zd(e){var t=sa(e.target);if(t!==null){var l=M(t);if(l!==null){if(t=l.tag,t===13){if(t=_(l),t!==null){e.blockedOn=t,af(e.priority,function(){Xd(l)});return}}else if(t===31){if(t=U(l),t!==null){e.blockedOn=t,af(e.priority,function(){Xd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ms(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);wi=a,l.target.dispatchEvent(a),wi=null}else return t=fa(l),t!==null&&Gd(t),e.blockedOn=l,!1;t.shift()}return!0}function Vd(e,t,l){ii(e)&&l.delete(t)}function Fp(){Os=!1,wl!==null&&ii(wl)&&(wl=null),Ol!==null&&ii(Ol)&&(Ol=null),Cl!==null&&ii(Cl)&&(Cl=null),Yn.forEach(Vd),Gn.forEach(Vd)}function ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Os||(Os=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,Fp)))}var si=null;function Kd(e){si!==e&&(si=e,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){si===e&&(si=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(ws(a||l)===null)continue;break}var u=fa(l);u!==null&&(e.splice(t,3),t-=3,Mc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Qa(e){function t(r){return ci(r,e)}wl!==null&&ci(wl,e),Ol!==null&&ci(Ol,e),Cl!==null&&ci(Cl,e),Yn.forEach(t),Gn.forEach(t);for(var l=0;l<Dl.length;l++){var a=Dl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Dl.length&&(l=Dl[0],l.blockedOn===null);)Zd(l),l.blockedOn===null&&Dl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],c=n[lt]||null;if(typeof u=="function")c||Kd(l);else if(c){var s=null;if(u&&u.hasAttribute("formAction")){if(n=u,c=u[lt]||null)s=c.formAction;else if(ws(n)!==null)continue}else s=c.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),Kd(l)}}}function Jd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Cs(e){this._internalRoot=e}fi.prototype.render=Cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,a=vt();qd(l,a,e,t,null,null)},fi.prototype.unmount=Cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qd(e.current,2,null,e,null,null),Lu(),t[ca]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Dl.length&&t!==0&&t<Dl[l].priority;l++);Dl.splice(l,0,e),l===0&&Zd(e)}};var Wd=v.version;if(Wd!=="19.2.6")throw Error(o(527,Wd,"19.2.6"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?Y(e):null,e=e===null?null:e.stateNode,e};var $p={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{Fa=oi.inject($p),dt=oi}catch{}}return Qn.createRoot=function(e,t){if(!y(e))throw Error(o(299));var l=!1,a="",n=lr,u=ar,c=nr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Hd(e,1,!1,null,null,l,a,null,n,u,c,Jd),e[ca]=t.current,ms(e),new Cs(t)},Qn.hydrateRoot=function(e,t,l){if(!y(e))throw Error(o(299));var a=!1,n="",u=lr,c=ar,s=nr,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=Hd(e,1,!0,t,l??null,a,n,r,u,c,s,Jd),t.context=Bd(null),l=t.current,a=vt(),a=ji(a),n=bl(a),n.callback=null,gl(l,n,a),l=a,t.current.lanes=l,Ia(t,l),Yt(t),e[ca]=t.current,ms(e),new fi(t)},Qn.version="19.2.6",Qn}var um;function cx(){if(um)return ks.exports;um=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(v){console.error(v)}}return f(),ks.exports=ix(),ks.exports}var sx=cx();function ym(f){var v,d,o="";if(typeof f=="string"||typeof f=="number")o+=f;else if(typeof f=="object")if(Array.isArray(f)){var y=f.length;for(v=0;v<y;v++)f[v]&&(d=ym(f[v]))&&(o&&(o+=" "),o+=d)}else for(d in f)f[d]&&(o&&(o+=" "),o+=d);return o}function fx(){for(var f,v,d=0,o="",y=arguments.length;d<y;d++)(f=arguments[d])&&(v=ym(f))&&(o&&(o+=" "),o+=v);return o}const ox=(f,v)=>{const d=new Array(f.length+v.length);for(let o=0;o<f.length;o++)d[o]=f[o];for(let o=0;o<v.length;o++)d[f.length+o]=v[o];return d},rx=(f,v)=>({classGroupId:f,validator:v}),bm=(f=new Map,v=null,d)=>({nextPart:f,validators:v,classGroupId:d}),hi="-",im=[],dx="arbitrary..",mx=f=>{const v=px(f),{conflictingClassGroups:d,conflictingClassGroupModifiers:o}=f;return{getClassGroupId:_=>{if(_.startsWith("[")&&_.endsWith("]"))return hx(_);const U=_.split(hi),j=U[0]===""&&U.length>1?1:0;return gm(U,j,v)},getConflictingClassGroupIds:(_,U)=>{if(U){const j=o[_],x=d[_];return j?x?ox(x,j):j:x||im}return d[_]||im}}},gm=(f,v,d)=>{if(f.length-v===0)return d.classGroupId;const y=f[v],M=d.nextPart.get(y);if(M){const x=gm(f,v+1,M);if(x)return x}const _=d.validators;if(_===null)return;const U=v===0?f.join(hi):f.slice(v).join(hi),j=_.length;for(let x=0;x<j;x++){const Y=_[x];if(Y.validator(U))return Y.classGroupId}},hx=f=>f.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const v=f.slice(1,-1),d=v.indexOf(":"),o=v.slice(0,d);return o?dx+o:void 0})(),px=f=>{const{theme:v,classGroups:d}=f;return xx(d,v)},xx=(f,v)=>{const d=bm();for(const o in f){const y=f[o];Vs(y,d,o,v)}return d},Vs=(f,v,d,o)=>{const y=f.length;for(let M=0;M<y;M++){const _=f[M];yx(_,v,d,o)}},yx=(f,v,d,o)=>{if(typeof f=="string"){bx(f,v,d);return}if(typeof f=="function"){gx(f,v,d,o);return}vx(f,v,d,o)},bx=(f,v,d)=>{const o=f===""?v:vm(v,f);o.classGroupId=d},gx=(f,v,d,o)=>{if(Sx(f)){Vs(f(o),v,d,o);return}v.validators===null&&(v.validators=[]),v.validators.push(rx(d,f))},vx=(f,v,d,o)=>{const y=Object.entries(f),M=y.length;for(let _=0;_<M;_++){const[U,j]=y[_];Vs(j,vm(v,U),d,o)}},vm=(f,v)=>{let d=f;const o=v.split(hi),y=o.length;for(let M=0;M<y;M++){const _=o[M];let U=d.nextPart.get(_);U||(U=bm(),d.nextPart.set(_,U)),d=U}return d},Sx=f=>"isThemeGetter"in f&&f.isThemeGetter===!0,jx=f=>{if(f<1)return{get:()=>{},set:()=>{}};let v=0,d=Object.create(null),o=Object.create(null);const y=(M,_)=>{d[M]=_,v++,v>f&&(v=0,o=d,d=Object.create(null))};return{get(M){let _=d[M];if(_!==void 0)return _;if((_=o[M])!==void 0)return y(M,_),_},set(M,_){M in d?d[M]=_:y(M,_)}}},Qs="!",cm=":",Nx=[],sm=(f,v,d,o,y)=>({modifiers:f,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:o,isExternal:y}),Tx=f=>{const{prefix:v,experimentalParseClassName:d}=f;let o=y=>{const M=[];let _=0,U=0,j=0,x;const Y=y.length;for(let C=0;C<Y;C++){const N=y[C];if(_===0&&U===0){if(N===cm){M.push(y.slice(j,C)),j=C+1;continue}if(N==="/"){x=C;continue}}N==="["?_++:N==="]"?_--:N==="("?U++:N===")"&&U--}const k=M.length===0?y:y.slice(j);let W=k,le=!1;k.endsWith(Qs)?(W=k.slice(0,-1),le=!0):k.startsWith(Qs)&&(W=k.slice(1),le=!0);const se=x&&x>j?x-j:void 0;return sm(M,le,W,se)};if(v){const y=v+cm,M=o;o=_=>_.startsWith(y)?M(_.slice(y.length)):sm(Nx,!1,_,void 0,!0)}if(d){const y=o;o=M=>d({className:M,parseClassName:y})}return o},Ax=f=>{const v=new Map;return f.orderSensitiveModifiers.forEach((d,o)=>{v.set(d,1e6+o)}),d=>{const o=[];let y=[];for(let M=0;M<d.length;M++){const _=d[M],U=_[0]==="[",j=v.has(_);U||j?(y.length>0&&(y.sort(),o.push(...y),y=[]),o.push(_)):y.push(_)}return y.length>0&&(y.sort(),o.push(...y)),o}},_x=f=>({cache:jx(f.cacheSize),parseClassName:Tx(f),sortModifiers:Ax(f),...mx(f)}),zx=/\s+/,Ex=(f,v)=>{const{parseClassName:d,getClassGroupId:o,getConflictingClassGroupIds:y,sortModifiers:M}=v,_=[],U=f.trim().split(zx);let j="";for(let x=U.length-1;x>=0;x-=1){const Y=U[x],{isExternal:k,modifiers:W,hasImportantModifier:le,baseClassName:se,maybePostfixModifierPosition:C}=d(Y);if(k){j=Y+(j.length>0?" "+j:j);continue}let N=!!C,G=o(N?se.substring(0,C):se);if(!G){if(!N){j=Y+(j.length>0?" "+j:j);continue}if(G=o(se),!G){j=Y+(j.length>0?" "+j:j);continue}N=!1}const B=W.length===0?"":W.length===1?W[0]:M(W).join(":"),L=le?B+Qs:B,D=L+G;if(_.indexOf(D)>-1)continue;_.push(D);const ae=y(G,N);for(let re=0;re<ae.length;++re){const F=ae[re];_.push(L+F)}j=Y+(j.length>0?" "+j:j)}return j},Mx=(...f)=>{let v=0,d,o,y="";for(;v<f.length;)(d=f[v++])&&(o=Sm(d))&&(y&&(y+=" "),y+=o);return y},Sm=f=>{if(typeof f=="string")return f;let v,d="";for(let o=0;o<f.length;o++)f[o]&&(v=Sm(f[o]))&&(d&&(d+=" "),d+=v);return d},wx=(f,...v)=>{let d,o,y,M;const _=j=>{const x=v.reduce((Y,k)=>k(Y),f());return d=_x(x),o=d.cache.get,y=d.cache.set,M=U,U(j)},U=j=>{const x=o(j);if(x)return x;const Y=Ex(j,d);return y(j,Y),Y};return M=_,(...j)=>M(Mx(...j))},Ox=[],Qe=f=>{const v=d=>d[f]||Ox;return v.isThemeGetter=!0,v},jm=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Nm=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Cx=/^\d+\/\d+$/,Dx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ux=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,kx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Rx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Hx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Za=f=>Cx.test(f),fe=f=>!!f&&!Number.isNaN(Number(f)),kl=f=>!!f&&Number.isInteger(Number(f)),qs=f=>f.endsWith("%")&&fe(f.slice(0,-1)),il=f=>Dx.test(f),Bx=()=>!0,qx=f=>Ux.test(f)&&!kx.test(f),Tm=()=>!1,Yx=f=>Rx.test(f),Gx=f=>Hx.test(f),Xx=f=>!V(f)&&!K(f),Lx=f=>Ka(f,zm,Tm),V=f=>jm.test(f),aa=f=>Ka(f,Em,qx),Ys=f=>Ka(f,Jx,fe),fm=f=>Ka(f,Am,Tm),Qx=f=>Ka(f,_m,Gx),ri=f=>Ka(f,Mm,Yx),K=f=>Nm.test(f),Zn=f=>Ja(f,Em),Zx=f=>Ja(f,Wx),om=f=>Ja(f,Am),Vx=f=>Ja(f,zm),Kx=f=>Ja(f,_m),di=f=>Ja(f,Mm,!0),Ka=(f,v,d)=>{const o=jm.exec(f);return o?o[1]?v(o[1]):d(o[2]):!1},Ja=(f,v,d=!1)=>{const o=Nm.exec(f);return o?o[1]?v(o[1]):d:!1},Am=f=>f==="position"||f==="percentage",_m=f=>f==="image"||f==="url",zm=f=>f==="length"||f==="size"||f==="bg-size",Em=f=>f==="length",Jx=f=>f==="number",Wx=f=>f==="family-name",Mm=f=>f==="shadow",Fx=()=>{const f=Qe("color"),v=Qe("font"),d=Qe("text"),o=Qe("font-weight"),y=Qe("tracking"),M=Qe("leading"),_=Qe("breakpoint"),U=Qe("container"),j=Qe("spacing"),x=Qe("radius"),Y=Qe("shadow"),k=Qe("inset-shadow"),W=Qe("text-shadow"),le=Qe("drop-shadow"),se=Qe("blur"),C=Qe("perspective"),N=Qe("aspect"),G=Qe("ease"),B=Qe("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ae=()=>[...D(),K,V],re=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],Q=()=>[K,V,j],we=()=>[Za,"full","auto",...Q()],Gt=()=>[kl,"none","subgrid",K,V],ft=()=>["auto",{span:["full",kl,K,V]},kl,K,V],Xe=()=>[kl,"auto",K,V],kt=()=>["auto","min","max","fr",K,V],ot=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ze=()=>["start","end","center","stretch","center-safe","end-safe"],A=()=>["auto",...Q()],q=()=>[Za,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Q()],R=()=>[f,K,V],ve=()=>[...D(),om,fm,{position:[K,V]}],je=()=>["no-repeat",{repeat:["","x","y","space","round"]}],h=()=>["auto","cover","contain",Vx,Lx,{size:[K,V]}],w=()=>[qs,Zn,aa],H=()=>["","none","full",x,K,V],X=()=>["",fe,Zn,aa],te=()=>["solid","dashed","dotted","double"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ee=()=>[fe,qs,om,fm],Ve=()=>["","none",se,K,V],Me=()=>["none",fe,K,V],Rt=()=>["none",fe,K,V],sl=()=>[fe,K,V],fl=()=>[Za,"full",...Q()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[il],breakpoint:[il],color:[Bx],container:[il],"drop-shadow":[il],ease:["in","out","in-out"],font:[Xx],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[il],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[il],shadow:[il],spacing:["px",fe],text:[il],"text-shadow":[il],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Za,V,K,N]}],container:["container"],columns:[{columns:[fe,V,K,U]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ae()}],overflow:[{overflow:re()}],"overflow-x":[{"overflow-x":re()}],"overflow-y":[{"overflow-y":re()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:we()}],"inset-x":[{"inset-x":we()}],"inset-y":[{"inset-y":we()}],start:[{start:we()}],end:[{end:we()}],top:[{top:we()}],right:[{right:we()}],bottom:[{bottom:we()}],left:[{left:we()}],visibility:["visible","invisible","collapse"],z:[{z:[kl,"auto",K,V]}],basis:[{basis:[Za,"full","auto",U,...Q()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[fe,Za,"auto","initial","none",V]}],grow:[{grow:["",fe,K,V]}],shrink:[{shrink:["",fe,K,V]}],order:[{order:[kl,"first","last","none",K,V]}],"grid-cols":[{"grid-cols":Gt()}],"col-start-end":[{col:ft()}],"col-start":[{"col-start":Xe()}],"col-end":[{"col-end":Xe()}],"grid-rows":[{"grid-rows":Gt()}],"row-start-end":[{row:ft()}],"row-start":[{"row-start":Xe()}],"row-end":[{"row-end":Xe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":kt()}],"auto-rows":[{"auto-rows":kt()}],gap:[{gap:Q()}],"gap-x":[{"gap-x":Q()}],"gap-y":[{"gap-y":Q()}],"justify-content":[{justify:[...ot(),"normal"]}],"justify-items":[{"justify-items":[...Ze(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ze()]}],"align-content":[{content:["normal",...ot()]}],"align-items":[{items:[...Ze(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ze(),{baseline:["","last"]}]}],"place-content":[{"place-content":ot()}],"place-items":[{"place-items":[...Ze(),"baseline"]}],"place-self":[{"place-self":["auto",...Ze()]}],p:[{p:Q()}],px:[{px:Q()}],py:[{py:Q()}],ps:[{ps:Q()}],pe:[{pe:Q()}],pt:[{pt:Q()}],pr:[{pr:Q()}],pb:[{pb:Q()}],pl:[{pl:Q()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":Q()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Q()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[U,"screen",...q()]}],"min-w":[{"min-w":[U,"screen","none",...q()]}],"max-w":[{"max-w":[U,"screen","none","prose",{screen:[_]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",d,Zn,aa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,K,Ys]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",qs,V]}],"font-family":[{font:[Zx,V,v]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[y,K,V]}],"line-clamp":[{"line-clamp":[fe,"none",K,Ys]}],leading:[{leading:[M,...Q()]}],"list-image":[{"list-image":["none",K,V]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,V]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...te(),"wavy"]}],"text-decoration-thickness":[{decoration:[fe,"from-font","auto",K,aa]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[fe,"auto",K,V]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ve()}],"bg-repeat":[{bg:je()}],"bg-size":[{bg:h()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},kl,K,V],radial:["",K,V],conic:[kl,K,V]},Kx,Qx]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:w()}],"gradient-via-pos":[{via:w()}],"gradient-to-pos":[{to:w()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:H()}],"rounded-s":[{"rounded-s":H()}],"rounded-e":[{"rounded-e":H()}],"rounded-t":[{"rounded-t":H()}],"rounded-r":[{"rounded-r":H()}],"rounded-b":[{"rounded-b":H()}],"rounded-l":[{"rounded-l":H()}],"rounded-ss":[{"rounded-ss":H()}],"rounded-se":[{"rounded-se":H()}],"rounded-ee":[{"rounded-ee":H()}],"rounded-es":[{"rounded-es":H()}],"rounded-tl":[{"rounded-tl":H()}],"rounded-tr":[{"rounded-tr":H()}],"rounded-br":[{"rounded-br":H()}],"rounded-bl":[{"rounded-bl":H()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...te(),"hidden","none"]}],"divide-style":[{divide:[...te(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...te(),"none","hidden"]}],"outline-offset":[{"outline-offset":[fe,K,V]}],"outline-w":[{outline:["",fe,Zn,aa]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",Y,di,ri]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",k,di,ri]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[fe,aa]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",W,di,ri]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[fe,K,V]}],"mix-blend":[{"mix-blend":[...ce(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ce()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[fe]}],"mask-image-linear-from-pos":[{"mask-linear-from":ee()}],"mask-image-linear-to-pos":[{"mask-linear-to":ee()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":ee()}],"mask-image-t-to-pos":[{"mask-t-to":ee()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":ee()}],"mask-image-r-to-pos":[{"mask-r-to":ee()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":ee()}],"mask-image-b-to-pos":[{"mask-b-to":ee()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":ee()}],"mask-image-l-to-pos":[{"mask-l-to":ee()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":ee()}],"mask-image-x-to-pos":[{"mask-x-to":ee()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":ee()}],"mask-image-y-to-pos":[{"mask-y-to":ee()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[K,V]}],"mask-image-radial-from-pos":[{"mask-radial-from":ee()}],"mask-image-radial-to-pos":[{"mask-radial-to":ee()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":D()}],"mask-image-conic-pos":[{"mask-conic":[fe]}],"mask-image-conic-from-pos":[{"mask-conic-from":ee()}],"mask-image-conic-to-pos":[{"mask-conic-to":ee()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ve()}],"mask-repeat":[{mask:je()}],"mask-size":[{mask:h()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,V]}],filter:[{filter:["","none",K,V]}],blur:[{blur:Ve()}],brightness:[{brightness:[fe,K,V]}],contrast:[{contrast:[fe,K,V]}],"drop-shadow":[{"drop-shadow":["","none",le,di,ri]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",fe,K,V]}],"hue-rotate":[{"hue-rotate":[fe,K,V]}],invert:[{invert:["",fe,K,V]}],saturate:[{saturate:[fe,K,V]}],sepia:[{sepia:["",fe,K,V]}],"backdrop-filter":[{"backdrop-filter":["","none",K,V]}],"backdrop-blur":[{"backdrop-blur":Ve()}],"backdrop-brightness":[{"backdrop-brightness":[fe,K,V]}],"backdrop-contrast":[{"backdrop-contrast":[fe,K,V]}],"backdrop-grayscale":[{"backdrop-grayscale":["",fe,K,V]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[fe,K,V]}],"backdrop-invert":[{"backdrop-invert":["",fe,K,V]}],"backdrop-opacity":[{"backdrop-opacity":[fe,K,V]}],"backdrop-saturate":[{"backdrop-saturate":[fe,K,V]}],"backdrop-sepia":[{"backdrop-sepia":["",fe,K,V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Q()}],"border-spacing-x":[{"border-spacing-x":Q()}],"border-spacing-y":[{"border-spacing-y":Q()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,V]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[fe,"initial",K,V]}],ease:[{ease:["linear","initial",G,K,V]}],delay:[{delay:[fe,K,V]}],animate:[{animate:["none",B,K,V]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,K,V]}],"perspective-origin":[{"perspective-origin":ae()}],rotate:[{rotate:Me()}],"rotate-x":[{"rotate-x":Me()}],"rotate-y":[{"rotate-y":Me()}],"rotate-z":[{"rotate-z":Me()}],scale:[{scale:Rt()}],"scale-x":[{"scale-x":Rt()}],"scale-y":[{"scale-y":Rt()}],"scale-z":[{"scale-z":Rt()}],"scale-3d":["scale-3d"],skew:[{skew:sl()}],"skew-x":[{"skew-x":sl()}],"skew-y":[{"skew-y":sl()}],transform:[{transform:[K,V,"","none","gpu","cpu"]}],"transform-origin":[{origin:ae()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:fl()}],"translate-x":[{"translate-x":fl()}],"translate-y":[{"translate-y":fl()}],"translate-z":[{"translate-z":fl()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,V]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Q()}],"scroll-mx":[{"scroll-mx":Q()}],"scroll-my":[{"scroll-my":Q()}],"scroll-ms":[{"scroll-ms":Q()}],"scroll-me":[{"scroll-me":Q()}],"scroll-mt":[{"scroll-mt":Q()}],"scroll-mr":[{"scroll-mr":Q()}],"scroll-mb":[{"scroll-mb":Q()}],"scroll-ml":[{"scroll-ml":Q()}],"scroll-p":[{"scroll-p":Q()}],"scroll-px":[{"scroll-px":Q()}],"scroll-py":[{"scroll-py":Q()}],"scroll-ps":[{"scroll-ps":Q()}],"scroll-pe":[{"scroll-pe":Q()}],"scroll-pt":[{"scroll-pt":Q()}],"scroll-pr":[{"scroll-pr":Q()}],"scroll-pb":[{"scroll-pb":Q()}],"scroll-pl":[{"scroll-pl":Q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,V]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[fe,Zn,aa,Ys]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},$x=wx(Fx);function xe(...f){return $x(fx(f))}
const Va = ["countries", "colour", "pack", "cubs", "height", "weight", "speed", "food"],
  cl = {
    countries: {
      id: "countries",
      icon: "globe",
      ru: "Где живут волки?",
      label: "Where",
      value: "Cold countries: Canada, America, Europe and Asia",
      short: "Canada · America · Europe · Asia"
    },
    colour: {
      id: "colour",
      icon: "drop",
      ru: "Какого цвета шерсть у волка?",
      label: "Fur colour",
      value: "grey, black or white",
      short: "grey · black · white"
    },
    pack: {
      id: "pack",
      icon: "paw",
      ru: "Сколько волков в стае?",
      label: "Pack size",
      value: "forty-two wolves in a typical pack",
      short: "42 wolves"
    },
    cubs: {
      id: "cubs",
      icon: "cub",
      ru: "Сколько волчат в помёте?",
      label: "Cubs",
      value: "four cubs in a litter",
      short: "4 cubs"
    },
    height: {
      id: "height",
      icon: "tall",
      ru: "Какова высота волка в холке?",
      label: "Height",
      value: "about a hundred centimetres tall",
      short: "100 cm"
    },
    weight: {
      id: "weight",
      icon: "weight",
      ru: "Сколько весит волк?",
      label: "Weight",
      value: "about sixty kilograms",
      short: "60 kg"
    },
    speed: {
      id: "speed",
      icon: "bolt",
      ru: "С какой скоростью бегут волки?",
      label: "Top speed",
      value: "up to sixty-five kilometres an hour",
      short: "65 kph"
    },
    food: {
      id: "food",
      icon: "fish",
      ru: "Что едят волки?",
      label: "Food",
      value: "meat: deer, rabbits and fish",
      short: "deer · rabbits · fish"
    }
  },
  Ix = ["weight", "pack", "height", "speed", "cubs", "countries", "colour", "food"],
  Px = [
    [{
      t: "Wolves are wild animals. Wolves live in "
    }, {
      t: "cold countries. There are wolves in Canada, in America, in Europe and in Asia",
      fact: "countries"
    }, {
      t: "."
    }],
    [{
      t: "A wolf's fur is "
    }, {
      t: "grey, black or white",
      fact: "colour"
    }, {
      t: ". It is warm, because it is winter in the north."
    }],
    [{
      t: "A wolf's family is a pack. A typical pack is very big — there are "
    }, {
      t: "forty-two wolves in a pack",
      fact: "pack"
    }, {
      t: "! The parents and the babies live together in a den. Wolf babies are called cubs. There are "
    }, {
      t: "four cubs in a litter",
      fact: "cubs"
    }, {
      t: "."
    }],
    [{
      t: "Wolves are big and strong. A wolf is about "
    }, {
      t: "a hundred centimetres tall",
      fact: "height"
    }, {
      t: " and it weighs about "
    }, {
      t: "sixty kilograms",
      fact: "weight"
    }, {
      t: "."
    }],
    [{
      t: "Wolves run very fast — up to "
    }, {
      t: "sixty-five kilometres an hour",
      fact: "speed"
    }, {
      t: " (65 kph)! Their ears are very good: they can hear a sound from fifty kilometres away."
    }],
    [{
      t: "Wolves are hunters. They eat "
    }, {
      t: "deer, rabbits and fish",
      fact: "food"
    }, {
      t: ". There is meat in their food. There aren't any vegetables in their food. Wolves sleep in the day and hunt in the night."
    }]
  ],
  ey = ["pack", "forty-two", "cubs", "four", "a hundred", "sixty", "sixty-five", "meat", "grey", "kph"],
  na = [{
    text: "A wolf's family is a ____.",
    answer: "pack"
  }, {
    text: "There are ____ wolves in a typical pack.",
    answer: "forty-two"
  }, {
    text: "Wolf babies are called ____.",
    answer: "cubs"
  }, {
    text: "There are ____ cubs in a litter.",
    answer: "four"
  }, {
    text: "A wolf is about ____ centimetres tall.",
    answer: "a hundred"
  }, {
    text: "A wolf weighs about ____ kilograms.",
    answer: "sixty"
  }, {
    text: "Wolves run up to ____ kph.",
    answer: "sixty-five"
  }, {
    text: "There is ____ in a wolf's food.",
    answer: "meat"
  }],
  rm = ["Where do wolves live?", "What colour is a wolf's fur?", "What is a wolf's family called?", "How many wolves are in a typical pack?", "How many cubs are in a litter?", "How tall is a wolf?", "How fast can wolves run?", "What do wolves eat?"],
  ty = ["about a hundred cm", "deer, rabbits and fish", "a pack", "up to 65 kph", "grey, black or white", "four", "forty-two", "Canada, America, Europe and Asia"],
  ly = [7, 4, 2, 6, 5, 0, 3, 1],
  ua = [{
    s: "Wolves live in cold countries.",
    t: !0
  }, {
    s: "A typical pack has forty-two wolves.",
    t: !0
  }, {
    s: "A wolf's fur is always white.",
    t: !1,
    corr: ["red and brown", "grey, black or white", "always white"],
    corrIdx: 1
  }, {
    s: "Wolf babies are called cubs.",
    t: !0
  }, {
    s: "There are ten cubs in a litter.",
    t: !1,
    corr: ["ten", "four", "twenty"],
    corrIdx: 1
  }, {
    s: "A wolf weighs about sixty kilograms.",
    t: !0
  }, {
    s: "There aren't any vegetables in a wolf's food.",
    t: !0
  }, {
    s: "Wolves run very slowly.",
    t: !1,
    corr: ["up to 5 kph", "they can't run", "up to 65 kph"],
    corrIdx: 2
  }],
  ay = ["speed", "cubs", "colour", "weight", "pack", "countries", "food", "height"],
  ia = [{
    frame: "Wolves live in ____.",
    opts: ["hot countries", "cold countries", "the sea"],
    idx: 1
  }, {
    frame: "A wolf's family is called a ____.",
    opts: ["pack", "house", "school"],
    idx: 0
  }, {
    frame: "There are ____ wolves in a typical pack.",
    opts: ["twenty", "two", "forty-two"],
    idx: 2
  }, {
    frame: "A wolf is about ____ centimetres tall.",
    opts: ["a hundred", "ten", "five"],
    idx: 0
  }, {
    frame: "Wolves can run up to ____.",
    opts: ["two kph", "sixty-five kph", "five kph"],
    idx: 1
  }, {
    frame: "Wolves eat ____.",
    opts: ["apples", "deer, rabbits and fish", "chocolate"],
    idx: 1
  }],
  dm = [{
    q: "Какой факт тебе показался самым интересным?",
    opts: Va.map(f => cl[f].short),
    reply: "Отличный выбор! Волки — удивительные звери: быстрые, умные и очень семейные."
  }, {
    q: "Что помогало находить улики в тексте?",
    opts: ["Числа: 60, 100, 42, 65", "Цвета и названия стран", "Еда и скорость", "Все подсказки вместе!"],
    reply: "Всё верно! Числа, цвета, страны, еда и скорость — вот все ключевые факты. Ты читал(а) как настоящий детектив!"
  }],
  Gs = [{
    fact: "There are forty-two wolves in a typical pack.",
    opts: ["There are forty-two cubs in a litter.", "A wolf has forty-two ears.", "A typical pack has forty-two wolves."],
    idx: 2
  }, {
    fact: "A wolf weighs about sixty kilograms.",
    opts: ["A wolf has sixty cubs.", "A wolf is about sixty kilos heavy.", "A wolf is sixty metres tall."],
    idx: 1
  }, {
    fact: "Wolves run up to sixty-five kilometres an hour.",
    opts: ["Wolves can fly very high.", "Wolves can be very fast.", "Wolves can't move at all."],
    idx: 1
  }, {
    fact: "There are four cubs in a litter.",
    opts: ["A wolf has four babies.", "A wolf has four big ears.", "A pack lives in four countries."],
    idx: 0
  }, {
    fact: "A wolf is about a hundred centimetres tall.",
    opts: ["A wolf is quite small.", "A wolf is quite big and strong.", "A wolf is a hundred years old."],
    idx: 1
  }, {
    fact: "There aren't any vegetables in their food.",
    opts: ["Wolves eat a lot of apples.", "Wolves eat meat, not vegetables.", "Wolves eat cake and soup."],
    idx: 1
  }],
  Xs = [{
    frame: "____ any vegetables in a wolf's food.",
    opts: ["There are", "There aren't", "There is"],
    idx: 1
  }, {
    frame: "____ forty-two wolves in a typical pack.",
    opts: ["There are", "There aren't any", "There isn't"],
    idx: 0
  }, {
    frame: "____ any chocolate in their food.",
    opts: ["There are", "There is", "There isn't"],
    idx: 2
  }, {
    frame: "____ four cubs in a litter.",
    opts: ["There aren't any", "There are", "There is"],
    idx: 1
  }, {
    frame: "____ wolves in warm countries. They live in cold countries.",
    opts: ["There are", "There is", "There aren't any"],
    idx: 2
  }, {
    frame: "____ meat in a wolf's food.",
    opts: ["There is", "There aren't any", "There are"],
    idx: 0
  }],
  Vn = [{
    q: "How many wolves are in a typical pack?",
    opts: ["42", "4", "60"],
    idx: 0
  }, {
    q: "What are wolf babies called?",
    opts: ["kittens", "cubs", "pigs"],
    idx: 1
  }, {
    q: "How tall is a wolf?",
    opts: ["about 100 cm", "about 10 cm", "about 100 m"],
    idx: 0
  }, {
    q: "How fast can wolves run?",
    opts: ["up to 5 kph", "up to 65 kph", "up to 2 kph"],
    idx: 1
  }, {
    q: "What do wolves eat?",
    opts: ["bread and cheese", "bananas", "deer, rabbits and fish"],
    idx: 2
  }, {
    q: "Where do wolves live?",
    opts: ["in cold countries", "in hot countries", "in the sea"],
    idx: 0
  }],
  mm = ["Я могу назвать, сколько волков в стае (42).", "Я помню, как зовут волчат (cubs).", "Я помню рост и вес волка (100 cm, 60 kg).", "Я помню скорость волка (65 kph).", "Я знаю, что едят волки и чего в их еде нет.", "Я знаю, в каких странах живут волки."],
  hm = ["#E8A23C", "#4F7A4C", "#D9604A", "#129E93", "#7A5230", "#5B7DB1", "#B06AB3", "#8A9A3B"],
  pm = {
    paw: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        fill: "currentColor",
        stroke: "none",
        d: "M12 10.2c-3.4 0-6.3 2.5-6.3 5.2 0 1.9 1.5 3.2 3.3 3.2 1.2 0 2-.5 3-.5s1.8.5 3 .5c1.8 0 3.3-1.3 3.3-3.2 0-2.7-2.9-5.2-6.3-5.2Z"
      }), i.jsx("circle", {
        fill: "currentColor",
        stroke: "none",
        cx: "6.1",
        cy: "6.9",
        r: "2.1"
      }), i.jsx("circle", {
        fill: "currentColor",
        stroke: "none",
        cx: "12",
        cy: "5",
        r: "2.1"
      }), i.jsx("circle", {
        fill: "currentColor",
        stroke: "none",
        cx: "17.9",
        cy: "6.9",
        r: "2.1"
      })]
    }),
    search: i.jsxs(i.Fragment, {
      children: [i.jsx("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), i.jsx("path", {
        d: "m20.5 20.5-4-4"
      })]
    }),
    bolt: i.jsx("path", {
      fill: "currentColor",
      stroke: "none",
      d: "M13.4 2 4.5 13.5h5.6L10.6 22l8.9-11.5h-5.6L13.4 2Z"
    }),
    mountain: i.jsx("path", {
      d: "m3 19 6-11 4 7 2.5-4.5L21 19H3Z"
    }),
    tall: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M12 4.5v15"
      }), i.jsx("path", {
        d: "m8 8 4-4 4 4"
      }), i.jsx("path", {
        d: "m8 16 4 4 4-4"
      })]
    }),
    weight: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M7 8v8M4 9.8v4.4M17 8v8M20 9.8v4.4"
      }), i.jsx("path", {
        d: "M7 12h10"
      })]
    }),
    fish: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M3.5 12s3-4.5 7.5-4.5S18.5 12 18.5 12s-3.5 4.5-8 4.5S3.5 12 3.5 12Z"
      }), i.jsx("path", {
        d: "m18.5 12 3.5-2.8v5.6L18.5 12Z"
      }), i.jsx("circle", {
        fill: "currentColor",
        stroke: "none",
        cx: "8.5",
        cy: "11",
        r: "0.9"
      })]
    }),
    globe: i.jsxs(i.Fragment, {
      children: [i.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "8.5"
      }), i.jsx("path", {
        d: "M3.5 12h17"
      }), i.jsx("path", {
        d: "M12 3.5c-4.4 4.6-4.4 12.4 0 17"
      }), i.jsx("path", {
        d: "M12 3.5c4.4 4.6 4.4 12.4 0 17"
      })]
    }),
    drop: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M12 3.5c3.5 4 6 7.2 6 10.4a6 6 0 0 1-12 0c0-3.2 2.5-6.4 6-10.4Z"
      }), i.jsx("path", {
        d: "M9.5 13.5a2.8 2.8 0 0 0 2 2.7"
      })]
    }),
    cub: i.jsxs(i.Fragment, {
      children: [i.jsx("circle", {
        cx: "12",
        cy: "10",
        r: "5.5"
      }), i.jsx("path", {
        d: "m8.5 5.5-1-2M15.5 5.5l1-2"
      }), i.jsx("circle", {
        fill: "currentColor",
        stroke: "none",
        cx: "10",
        cy: "9.5",
        r: "0.9"
      }), i.jsx("circle", {
        fill: "currentColor",
        stroke: "none",
        cx: "14",
        cy: "9.5",
        r: "0.9"
      }), i.jsx("path", {
        d: "M10.8 12.2c.7.7 1.7.7 2.4 0"
      }), i.jsx("path", {
        d: "M7 20c1-2.5 2.8-4 5-4s4 1.5 5 4"
      })]
    }),
    star: i.jsx("path", {
      fill: "currentColor",
      stroke: "none",
      d: "m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.3l-5.8 3 1.1-6.4L2.6 9.3l6.5-.9L12 2.5Z"
    }),
    box: i.jsxs(i.Fragment, {
      children: [i.jsx("rect", {
        x: "3.5",
        y: "8",
        width: "17",
        height: "12",
        rx: "2"
      }), i.jsx("path", {
        d: "M3.5 12h17"
      }), i.jsx("path", {
        d: "M12 12v3"
      }), i.jsx("path", {
        d: "M7 8V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V8"
      })]
    }),
    check: i.jsx("path", {
      d: "m4.5 12.5 5 5L19.5 7"
    }),
    x: i.jsx("path", {
      d: "m6 6 12 12M18 6 6 18"
    }),
    sparkle: i.jsx("path", {
      fill: "currentColor",
      stroke: "none",
      d: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
    }),
    bulb: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M9 18h6M10 21h4"
      }), i.jsx("path", {
        d: "M12 3a6 6 0 0 0-3.5 10.9c.9.7 1.5 1.5 1.5 2.1h4c0-.6.6-1.4 1.5-2.1A6 6 0 0 0 12 3Z"
      })]
    }),
    book: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M12 6.5C10.5 5 8.4 4.5 5.5 4.5c-1 0-2 .1-2.5.3v14c.5-.2 1.5-.3 2.5-.3 2.9 0 5 .5 6.5 2 1.5-1.5 3.6-2 6.5-2 1 0 2 .1 2.5.3v-14c-.5-.2-1.5-.3-2.5-.3-2.9 0-5 .5-6.5 2Z"
      }), i.jsx("path", {
        d: "M12 6.5v14"
      })]
    }),
    card: i.jsxs(i.Fragment, {
      children: [i.jsx("rect", {
        x: "3.5",
        y: "5.5",
        width: "17",
        height: "13",
        rx: "2.5"
      }), i.jsx("path", {
        d: "M7 9.5h5M7 12.5h10M7 15.5h7"
      })]
    }),
    pen: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M12.5 20.5H21"
      }), i.jsx("path", {
        d: "M16.7 3.8a2.3 2.3 0 0 1 3.3 3.3L8.2 18.9 4 20l1.1-4.2L16.7 3.8Z"
      })]
    }),
    clock: i.jsxs(i.Fragment, {
      children: [i.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "8.5"
      }), i.jsx("path", {
        d: "M12 7.5V12l3 2"
      })]
    }),
    flag: i.jsxs(i.Fragment, {
      children: [i.jsx("path", {
        d: "M5.5 21V4"
      }), i.jsx("path", {
        d: "M5.5 4.5c2.5-1.6 5-1.6 7.5 0s5 1.6 6.5.5v9c-1.5 1.1-4 1.1-6.5-.5s-5-1.6-7.5 0"
      })]
    })
  };

function $({
  name: f,
  className: v,
  strokeWidth: d = 2
}) {
  return i.jsx("svg", {
    viewBox: "0 0 24 24",
    className: v,
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: d,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: pm[f] ?? pm.paw
  })
}

function Ot({
  children: f,
  className: v,
  delay: d = 0,
  dir: o
}) {
  const y = oe.useRef(null);
  return oe.useEffect(() => {
    const M = y.current;
    if (!M) return;
    const _ = new IntersectionObserver(U => {
      U[0].isIntersecting && (M.classList.add("is-in"), _.disconnect())
    }, {
      threshold: .12,
      rootMargin: "0px 0px -6% 0px"
    });
    return _.observe(M), () => _.disconnect()
  }, []), i.jsx("div", {
    ref: y,
    className: xe("reveal", v),
    "data-dir": o,
    style: d ? {
      transitionDelay: `${d}ms`
    } : void 0,
    children: f
  })
}

function Wa({
  id: f,
  num: v,
  title: d,
  sub: o,
  desc: y,
  done: M,
  doneText: _,
  children: U
}) {
  return i.jsx("section", {
    id: f,
    className: "scroll-mt-36",
    children: i.jsx(Ot, {
      children: i.jsxs("div", {
        className: "card overflow-hidden",
        children: [i.jsxs("div", {
          className: "flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-dashed border-pine/20 bg-pine/[0.045] px-5 py-4 sm:px-7",
          children: [i.jsx("span", {
            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-honey font-display text-lg font-bold text-night shadow-[0_3px_0_var(--color-honey-deep)]",
            children: v
          }), i.jsxs("div", {
            className: "min-w-0",
            children: [i.jsx("h3", {
              className: "font-display text-xl font-bold leading-tight text-pine sm:text-[22px]",
              children: d
            }), i.jsx("p", {
              className: "text-sm font-bold italic text-moss",
              children: o
            })]
          }), M && i.jsxs("span", {
            className: "pop-in ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#e4f0dd] px-3 py-1.5 text-sm font-extrabold text-[#2c5427]",
            children: [i.jsx($, {
              name: "star",
              className: "h-4 w-4 text-honey-deep"
            }), _ ?? "Задание выполнено"]
          })]
        }), i.jsxs("div", {
          className: "px-5 py-6 sm:px-7",
          children: [i.jsxs("p", {
            className: "mb-6 flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/80",
            children: [i.jsx($, {
              name: "search",
              className: "mt-0.5 h-5 w-5 shrink-0 text-holo-deep"
            }), i.jsx("span", {
              children: y
            })]
          }), U]
        })]
      })
    })
  })
}

function Kn({
  state: f = "idle",
  small: v,
  onClick: d,
  disabled: o,
  children: y
}) {
  return i.jsx("button", {
    type: "button",
    className: xe("opt", v && "opt-sm", f === "sel" && "opt-sel", f === "good" && "opt-good", f === "bad" && "opt-bad"),
    onClick: d,
    disabled: o,
    children: y
  })
}

function Rl({
  onClick: f,
  disabled: v,
  label: d = "Проверить",
  className: o
}) {
  return i.jsxs("button", {
    type: "button",
    className: xe("btn btn-honey px-6 py-3 text-base", o),
    onClick: f,
    disabled: v,
    children: [i.jsx($, {
      name: "star",
      className: "h-5 w-5"
    }), d]
  })
}

function Hl({
  children: f
}) {
  return i.jsxs("div", {
    className: "pop-in mt-5 flex items-center gap-3 rounded-2xl border-2 border-moss/40 bg-[#e4f0dd] px-4 py-3 text-[15px] font-bold text-[#2c5427]",
    children: [i.jsx("span", {
      className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-moss text-paper",
      children: i.jsx($, {
        name: "check",
        className: "h-5 w-5",
        strokeWidth: 3
      })
    }), f]
  })
}

function pi({
  placed: f,
  submitted: v,
  interactive: d,
  selectedChip: o,
  onCellClick: y,
  className: M,
  compact: _
}) {
  return i.jsxs("div", {
    className: xe("holo p-4 sm:p-5", M),
    children: [i.jsx("div", {
      className: "holo-grid"
    }), i.jsx("div", {
      className: "holo-scan"
    }), i.jsxs("div", {
      className: "relative",
      children: [i.jsxs("div", {
        className: "mb-3 flex items-center justify-between gap-2",
        children: [i.jsxs("div", {
          className: "flex items-center gap-2.5",
          children: [i.jsx("span", {
            className: "flex h-9 w-9 items-center justify-center rounded-lg bg-holo/20 text-holo",
            children: i.jsx($, {
              name: "paw",
              className: "h-5 w-5"
            })
          }), i.jsxs("div", {
            children: [i.jsx("p", {
              className: "font-display text-lg font-bold leading-none text-holo",
              children: "WOLF FACTS"
            }), i.jsx("p", {
              className: "mt-1 text-[11px] font-semibold tracking-[0.14em] text-holo/70 uppercase",
              children: "Information card · досье"
            })]
          })]
        }), v ? i.jsx("span", {
          className: "stamp text-xs",
          children: "Сдано в архив"
        }) : i.jsxs("span", {
          className: "rounded-full border border-holo/40 bg-holo/10 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-holo/90",
          children: [Object.keys(f).length, "/8 ячеек"]
        })]
      }), i.jsx("div", {
        className: xe("grid gap-2.5", _ ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"),
        children: Ix.map(U => {
          const j = cl[U],
            x = f[U];
          return i.jsxs("button", {
            type: "button",
            onClick: d && y ? () => y(U) : void 0,
            className: xe("holo-cell flex flex-col items-start gap-1 px-3 py-2.5 text-left", !x && "holo-cell-empty", d && y && "holo-cell-click", d && o && !x && "holo-cell-glow"),
            "aria-label": j.label,
            children: [i.jsxs("span", {
              className: "flex w-full items-center gap-1.5 text-[10px] font-extrabold tracking-[0.12em] text-holo/70 uppercase",
              children: [i.jsx($, {
                name: j.icon,
                className: "h-3.5 w-3.5 shrink-0"
              }), j.label]
            }), x ? i.jsx("span", {
              className: "pop-in font-display text-[15px] leading-snug font-bold text-[#eafff9]",
              children: cl[x].short
            }) : i.jsx("span", {
              className: "font-display text-[15px] leading-snug font-bold text-holo/40",
              children: "? ? ?"
            })]
          }, U)
        })
      })]
    })]
  })
}

function xm({
  found: f,
  className: v
}) {
  const d = Object.values(f).filter(Boolean).length;
  return i.jsxs("div", {
    className: xe("card lift px-4 py-4", v),
    children: [i.jsxs("div", {
      className: "mb-3 flex items-center justify-between",
      children: [i.jsxs("p", {
        className: "flex items-center gap-2 font-display text-[15px] font-bold text-pine",
        children: [i.jsx("span", {
          className: "flex h-8 w-8 items-center justify-center rounded-full bg-honey-soft text-honey-deep",
          children: i.jsx($, {
            name: "box",
            className: "h-4.5 w-4.5"
          })
        }), "Улики в кармане"]
      }), i.jsxs("span", {
        className: xe("rounded-full px-2.5 py-1 text-xs font-extrabold", d === 8 ? "bg-moss text-paper" : "bg-pine/10 text-pine"),
        children: [d, "/8"]
      })]
    }), i.jsx("div", {
      className: "flex flex-wrap gap-1.5",
      children: Object.values(cl).map(o => f[o.id] ? i.jsxs("span", {
        className: "pop-in inline-flex items-center gap-1.5 rounded-full border-2 border-holo-deep/50 bg-holo/15 px-2.5 py-1 text-xs font-extrabold text-pine",
        title: o.value,
        children: [i.jsx($, {
          name: o.icon,
          className: "h-3.5 w-3.5 text-holo-deep"
        }), o.short]
      }, o.id) : i.jsx("span", {
        className: "inline-flex h-7 w-9 items-center justify-center rounded-full border-2 border-dashed border-pine/25 text-pine/35",
        title: o.ru,
        children: i.jsx($, {
          name: "paw",
          className: "h-3.5 w-3.5"
        })
      }, o.id))
    })]
  })
}
const ny = [{
    id: "how",
    label: "Как искать факты",
    icon: "search"
  }, {
    id: "there",
    label: "There are / aren't",
    icon: "book"
  }, {
    id: "nums",
    label: "Важные числа",
    icon: "star"
  }, {
    id: "dict",
    label: "Словарик",
    icon: "card"
  }],
  uy = [{
    icon: "tall",
    text: "Ищи ЧИСЛА — 60, 100, 42, 65, 4. Числа — самые громкие улики!"
  }, {
    icon: "drop",
    text: "Ищи ЦВЕТА — grey, black, white."
  }, {
    icon: "globe",
    text: "Ищи СТРАНЫ — Canada, America, Europe, Asia."
  }, {
    icon: "weight",
    text: "Ищи РАЗМЕРЫ — кг, см, kph (вес, рост, скорость)."
  }, {
    icon: "fish",
    text: "Ищи ЕДУ — что волк ест, а чего у него нет."
  }, {
    icon: "paw",
    text: "Ищи СЕМЬЮ — pack (стая), cubs (волчата)."
  }],
  iy = [{
    en: "pack",
    ru: "стая — волчья семья"
  }, {
    en: "cubs",
    ru: "волчата — детёныши волка"
  }, {
    en: "kph",
    ru: "kilometres per hour — километров в час"
  }, {
    en: "cm",
    ru: "centimetres — сантиметры"
  }, {
    en: "kg",
    ru: "kilograms — килограммы"
  }, {
    en: "den",
    ru: "логово"
  }, {
    en: "fur",
    ru: "шерсть"
  }, {
    en: "hunter",
    ru: "охотник"
  }],
  cy = [{
    word: "sixty",
    num: "60"
  }, {
    word: "a hundred",
    num: "100"
  }, {
    word: "fifty",
    num: "50"
  }, {
    word: "forty-two",
    num: "42"
  }, {
    word: "sixty-five",
    num: "65"
  }];


const Yo = "tutorcall-wolf-key-facts-v1";

function shuffleCopy(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

function defaultState() {
  return {
    found: Object.fromEntries(Va.map(id => [id, !1])),
    placed: {},
    lockedCells: {},
    submitted: !1,
    done: {
      t2: !1,
      t3: !1,
      t4: !1,
      t6: !1,
      hw: !1
    },
    eyOrder: shuffleCopy(ey),
    tyPerm: shuffleCopy([...Array(ty.length).keys()]),
    ayOrder: shuffleCopy(ay),
    t2slots: na.map(() => null),
    t2ok: na.map(() => !1),
    t2sel: null,
    t2bad: [],
    t2checked: !1,
    t3pairs: {},
    t3ok: rm.map(() => !1),
    t3sel: null,
    t3flash: null,
    t4tf: ua.map(() => null),
    t4corr: ua.map(() => null),
    t4ok: ua.map(() => !1),
    t4bad: [],
    t6ans: ia.map(() => null),
    t6shown: !1,
    refl: dm.map(() => null),
    hwAAns: Array.from({
      length: Gs.length
    }, () => null),
    hwAOk: Array.from({
      length: Gs.length
    }, () => !1),
    hwABad: [],
    hwBAns: Array.from({
      length: Xs.length
    }, () => null),
    hwBOk: Array.from({
      length: Xs.length
    }, () => !1),
    hwBBad: [],
    hwCAns: Array.from({
      length: Vn.length
    }, () => null),
    hwCOk: Array.from({
      length: Vn.length
    }, () => !1),
    hwCBad: [],
    hwCchecked: !1,
    hwDchecks: mm.map(() => !1),
    hwDtext: "",
    hwDsaved: !1
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(Yo);
    if (!raw) return defaultState();
    const saved = JSON.parse(raw);
    const base = defaultState();
    const out = {
      ...base,
      ...saved
    };
    // keep fresh shuffles only when a persisted order is missing or invalid
    if (!Array.isArray(out.eyOrder) || out.eyOrder.length !== ey.length || !ey.every(w => out.eyOrder.includes(w))) out.eyOrder = base.eyOrder;
    if (!Array.isArray(out.tyPerm) || out.tyPerm.length !== ty.length || new Set(out.tyPerm).size !== ty.length) out.tyPerm = base.tyPerm;
    if (!Array.isArray(out.ayOrder) || out.ayOrder.length !== ay.length || !ay.every(w => out.ayOrder.includes(w))) out.ayOrder = base.ayOrder;
    return out;
  } catch (e) {
    return defaultState();
  }
}

function saveState(s) {
  try {
    localStorage.setItem(Yo, JSON.stringify(s));
  } catch (e) {}
}

function usePersisted(key, fallback) {
  const [val, setVal] = oe.useState(() => {
    const s = loadState();
    if (s[key] !== undefined) return s[key];
    return typeof fallback === "function" ? fallback() : fallback;
  });
  const set = oe.useCallback(next => {
    setVal(prev => {
      const v = typeof next === "function" ? next(prev) : next;
      const s = loadState();
      s[key] = v;
      saveState(s);
      return v;
    });
  }, [key]);
  return [val, set];
}

function Ky() {
  const [boot, setBoot] = oe.useState(0);
  const onReset = () => {
    if (!window.confirm("Начать урок заново? Весь прогресс будет удалён.")) return;
    saveState(defaultState());
    setBoot(n => n + 1);
  };
  return i.jsx(Sy, {
    key: boot,
    onReset
  });
}


function sy({
  open: f,
  onClose: v
}) {
  const [d, o] = oe.useState("how");
  return oe.useEffect(() => {
    if (!f) return;
    const y = M => {
      M.key === "Escape" && v()
    };
    return document.addEventListener("keydown", y), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = ""
    }
  }, [f, v]), f ? i.jsx("div", {
    className: "fixed inset-0 z-50 flex items-end justify-center bg-pine-deep/70 p-0 backdrop-blur-[3px] sm:items-center sm:p-6",
    onClick: v,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Подсказка и правила",
    children: i.jsxs("div", {
      className: "pop-in max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-paper p-5 shadow-2xl sm:rounded-3xl sm:p-7",
      onClick: y => y.stopPropagation(),
      children: [i.jsxs("div", {
        className: "mb-5 flex items-start justify-between gap-3",
        children: [i.jsxs("div", {
          children: [i.jsxs("p", {
            className: "flex items-center gap-2 font-display text-2xl font-bold text-pine",
            children: [i.jsx("span", {
              className: "flex h-10 w-10 items-center justify-center rounded-full bg-honey text-night shadow-[0_3px_0_var(--color-honey-deep)]",
              children: i.jsx($, {
                name: "bulb",
                className: "h-5.5 w-5.5"
              })
            }), "Подсказка и правила"]
          }), i.jsx("p", {
            className: "mt-1 text-sm font-semibold text-ink/70",
            children: "Эти карточки всегда рядом — в любом задании урока и дома."
          })]
        }), i.jsx("button", {
          type: "button",
          onClick: v,
          className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-pine/20 text-pine transition hover:rotate-90 hover:border-berry hover:text-berry",
          "aria-label": "Закрыть",
          children: i.jsx($, {
            name: "x",
            className: "h-5 w-5",
            strokeWidth: 2.6
          })
        })]
      }), i.jsx("div", {
        className: "mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
        children: ny.map(y => i.jsxs("button", {
          type: "button",
          onClick: () => o(y.id),
          className: xe("btn flex-col gap-1 rounded-2xl px-2 py-2.5 text-xs leading-tight", d === y.id ? "bg-pine text-paper shadow-[0_3px_0_#0b1f16]" : "bg-pine/[0.06] text-pine hover:bg-pine/[0.12]"),
          children: [i.jsx($, {
            name: y.icon,
            className: "h-5 w-5"
          }), y.label]
        }, y.id))
      }), d === "how" && i.jsxs("div", {
        children: [i.jsx("p", {
          className: "mb-4 rounded-2xl bg-holo/15 px-4 py-3 text-sm font-bold text-pine-deep",
          children: "Ключевые факты — это конкретные детали: числа, цвета, страны, размеры, скорость, еда и семья. Ищи их глазами детектива!"
        }), i.jsx("ul", {
          className: "grid gap-2.5 sm:grid-cols-2",
          children: uy.map(y => i.jsxs("li", {
            className: "flex items-start gap-3 rounded-2xl border-2 border-pine/12 bg-cream/60 px-3.5 py-3 text-sm font-bold text-pine transition hover:-translate-y-0.5 hover:border-honey-deep",
            children: [i.jsx("span", {
              className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey-soft text-honey-deep",
              children: i.jsx($, {
                name: y.icon,
                className: "h-4.5 w-4.5"
              })
            }), y.text]
          }, y.text))
        })]
      }), d === "there" && i.jsxs("div", {
        className: "space-y-3",
        children: [i.jsxs("div", {
          className: "rounded-2xl border-2 border-moss/30 bg-[#e9f2e2] px-4 py-3.5",
          children: [i.jsx("p", {
            className: "font-display text-lg font-bold text-[#2c5427]",
            children: "There are + множественное число"
          }), i.jsxs("p", {
            className: "mt-1 text-[15px] font-bold text-pine",
            children: [i.jsx("span", {
              className: "text-holo-deep",
              children: "There are"
            }), " forty-two wolves in a typical pack."]
          }), i.jsx("p", {
            className: "text-sm font-semibold text-ink/70",
            children: "— В типичной стае сорок два волка."
          })]
        }), i.jsxs("div", {
          className: "rounded-2xl border-2 border-berry/30 bg-[#fbe9e5] px-4 py-3.5",
          children: [i.jsx("p", {
            className: "font-display text-lg font-bold text-[#8f3527]",
            children: "There isn't any + единственное число"
          }), i.jsxs("p", {
            className: "mt-1 text-[15px] font-bold text-pine",
            children: [i.jsx("span", {
              className: "text-berry",
              children: "There isn't any"
            }), " chocolate in their food."]
          }), i.jsx("p", {
            className: "text-sm font-semibold text-ink/70",
            children: "— Шоколада в их еде нет."
          })]
        }), i.jsxs("div", {
          className: "rounded-2xl border-2 border-berry/30 bg-[#fbe9e5] px-4 py-3.5",
          children: [i.jsx("p", {
            className: "font-display text-lg font-bold text-[#8f3527]",
            children: "There aren't any + множественное число"
          }), i.jsxs("p", {
            className: "mt-1 text-[15px] font-bold text-pine",
            children: [i.jsx("span", {
              className: "text-berry",
              children: "There aren't any"
            }), " vegetables in their food."]
          }), i.jsx("p", {
            className: "text-sm font-semibold text-ink/70",
            children: "— Овощей в их еде нет."
          })]
        }), i.jsxs("p", {
          className: "rounded-2xl bg-honey-soft/60 px-4 py-3 text-sm font-bold text-[#6b4a12]",
          children: ["Лайфхак: слова ", i.jsx("b", {
            children: "There are"
          }), " и", " ", i.jsx("b", {
            children: "There aren't any"
          }), " — это тоже улики! Они говорят, что в тексте ЕСТЬ или ЧЕГО НЕТ."]
        })]
      }), d === "nums" && i.jsxs("div", {
        children: [i.jsx("p", {
          className: "mb-4 text-sm font-bold text-ink/70",
          children: "В тексте живут большие числа. Разберём их на части:"
        }), i.jsxs("div", {
          className: "grid gap-2.5 sm:grid-cols-2",
          children: [cy.map(y => i.jsxs("div", {
            className: "flex items-center justify-between rounded-2xl border-2 border-pine/12 bg-cream/60 px-4 py-3 transition hover:-translate-y-0.5 hover:border-holo-deep",
            children: [i.jsx("span", {
              className: "font-display text-lg font-bold text-pine",
              children: y.word
            }), i.jsxs("span", {
              className: "flex items-center gap-1 text-holo-deep",
              children: [i.jsx($, {
                name: "sparkle",
                className: "h-4 w-4"
              }), i.jsx("span", {
                className: "font-display text-xl font-bold",
                children: y.num
              })]
            })]
          }, y.word)), i.jsxs("div", {
            className: "flex items-center justify-between rounded-2xl border-2 border-honey/40 bg-honey-soft/50 px-4 py-3",
            children: [i.jsx("span", {
              className: "font-display text-lg font-bold text-pine",
              children: "forty + two"
            }), i.jsx("span", {
              className: "font-display text-xl font-bold text-honey-deep",
              children: "= 42"
            })]
          })]
        })]
      }), d === "dict" && i.jsx("div", {
        className: "grid gap-2 sm:grid-cols-2",
        children: iy.map(y => i.jsxs("div", {
          className: "flex items-center gap-3 rounded-2xl border-2 border-pine/12 bg-cream/60 px-3.5 py-2.5 transition hover:-translate-y-0.5 hover:border-moss",
          children: [i.jsx("span", {
            className: "flex h-9 w-12 shrink-0 items-center justify-center rounded-xl bg-pine font-display text-sm font-bold text-honey",
            children: y.en
          }), i.jsx("span", {
            className: "text-sm font-bold text-pine",
            children: y.ru
          })]
        }, y.en))
      }), i.jsxs("div", {
        className: "mt-6 flex items-center justify-between gap-3",
        children: [i.jsxs("p", {
          className: "text-sm font-semibold text-ink/60",
          children: [i.jsx($, {
            name: "paw",
            className: "mr-1.5 inline h-4 w-4 text-honey-deep"
          }), "Совет: вернись к тексту — все улики там."]
        }), i.jsx("button", {
          type: "button",
          className: "btn btn-pine px-5 py-2.5 text-sm",
          onClick: v,
          children: "Вернуться к заданию"
        })]
      })]
    })
  }) : null
}

function fy({
  found: f,
  onFound: v,
  done: d
}) {
  const [o, y] = oe.useState(!1), M = oe.useMemo(() => Va.filter(U => f[U]).length, [f]), _ = () => {
    if (o) {
      y(!1);
      return
    }
    y(!0), window.setTimeout(() => y(!1), 4e3)
  };
  return i.jsxs(Wa, {
    id: "task-1",
    num: "1",
    title: "Читаем текст и ищем улики",
    sub: "Read and find the key facts",
    desc: "Прочитай текст о волках. В нём спрятано 8 ключевых фактов — они под пунктирной линией. Нажимай на каждый факт, чтобы собрать его в карман. Все 8 — и задание выполнено!",
    done: d,
    children: [i.jsxs("div", {
      className: "grid gap-5 lg:grid-cols-[1.35fr_1fr]",
      children: [i.jsx(Ot, {
        dir: "left",
        children: i.jsxs("article", {
          className: "relative rounded-2xl border-2 border-bark/25 bg-[#fff9e8] p-5 shadow-inner sm:p-7",
          children: [i.jsx("span", {
            className: "absolute -top-3 left-6 rounded-full bg-bark px-3 py-1 font-display text-xs font-bold tracking-widest text-paper uppercase",
            children: "Reading · стр. 24"
          }), i.jsx("h4", {
            className: "mb-4 mt-2 font-display text-3xl font-bold tracking-wide text-pine",
            children: "WOLVES"
          }), i.jsx("div", {
            className: "space-y-4 text-[17px] leading-relaxed font-semibold text-ink/90 sm:text-lg",
            children: Px.map((U, j) => i.jsx("p", {
              children: U.map((x, Y) => x.fact ? i.jsx("button", {
                type: "button",
                onClick: () => v(x.fact),
                className: xe("fact-hit", f[x.fact] && "fact-found", o && !f[x.fact] && "fact-peek"),
                children: x.t
              }, Y) : i.jsx("span", {
                children: x.t
              }, Y))
            }, j))
          })]
        })
      }), i.jsx(Ot, {
        dir: "right",
        delay: 120,
        children: i.jsxs("div", {
          className: "card flex h-full flex-col px-4 py-5 sm:px-5",
          children: [i.jsxs("div", {
            className: "mb-4 flex items-center justify-between",
            children: [i.jsx("p", {
              className: "font-display text-lg font-bold text-pine",
              children: "Найди и собери"
            }), i.jsxs("span", {
              className: xe("rounded-full px-3 py-1 font-display text-sm font-bold", M === 8 ? "bg-moss text-paper" : "bg-honey-soft text-honey-deep"),
              children: [M, " / 8"]
            })]
          }), i.jsx("ul", {
            className: "flex flex-1 flex-col gap-2",
            children: Va.map(U => i.jsxs("li", {
              className: xe("flex items-center gap-2.5 rounded-xl border-2 px-3 py-2 transition", f[U] ? "border-holo-deep/50 bg-holo/10" : "border-dashed border-pine/25 bg-cream/50"),
              children: [i.jsx("span", {
                className: xe("flex h-7 w-7 shrink-0 items-center justify-center rounded-full", f[U] ? "pop-in bg-holo-deep text-paper" : "bg-pine/10 text-pine/40"),
                children: i.jsx($, {
                  name: f[U] ? "check" : cl[U].icon,
                  className: "h-4 w-4",
                  strokeWidth: f[U] ? 3 : 2
                })
              }), i.jsx("span", {
                className: "min-w-0 flex-1 text-sm font-bold text-pine",
                children: cl[U].ru
              }), f[U] && i.jsx("span", {
                className: "pop-in hidden shrink-0 rounded-full bg-paper px-2 py-0.5 text-xs font-extrabold text-holo-deep sm:inline",
                children: cl[U].short
              })]
            }, U))
          }), i.jsxs("div", {
            className: "mt-4 flex flex-wrap items-center gap-2",
            children: [i.jsxs("button", {
              type: "button",
              onClick: _,
              className: "btn btn-ghost px-4 py-2 text-sm",
              children: [i.jsx($, {
                name: "bulb",
                className: "h-4.5 w-4.5"
              }), o ? "Готово!" : "Подсвети улики"]
            }), i.jsx("p", {
              className: "text-xs font-bold text-ink/55",
              children: "Подсказка: улики — числа, цвета, страны, размеры, еда…"
            })]
          })]
        })
      })]
    }), M < 8 ? i.jsxs("div", {
      className: "mt-5 flex flex-wrap items-center gap-3",
      children: [i.jsx(Rl, {
        label: `Найдено ${M} из 8`,
        disabled: !0,
        onClick: () => {}
      }), i.jsx("p", {
        className: "text-sm font-bold text-ink/60",
        children: M === 8 ? "" : "Ищи пунктирные слова в тексте — они и есть ключевые факты."
      })]
    }) : i.jsx(Hl, {
      children: "Все 8 улик в кармане! Глянь на досье справа — оно уже начинает наполняться."
    })]
  })
}

function oy({
  done: f,
  onDone: v
}) {
  const [d, o] = usePersisted("t2slots", () => na.map(() => null)), [y, M] = usePersisted("t2ok", () => na.map(() => !1)), [_, U] = usePersisted("t2sel", null), [j, x] = usePersisted("t2bad", []), [Y, k] = usePersisted("t2checked", !1), [eyOrder] = usePersisted("eyOrder", () => shuffleCopy(ey)), W = new Set(d.filter(Boolean)), le = y.every(Boolean), se = L => {
    W.has(L) && !d.includes(L) || d.includes(L) || U(D => D === L ? null : L)
  }, C = L => {
    y[L] || (_ ? (o(D => {
      const ae = [...D];
      return ae[L] = _, ae
    }), U(null)) : d[L] && o(D => {
      const ae = [...D];
      return ae[L] = null, ae
    }))
  }, N = () => {
    const L = [],
      D = y.map((ae, re) => ae || d[re] === na[re].answer);
    na.forEach((ae, re) => {
      !D[re] && d[re] && L.push(re)
    }), M(D), x(L), k(!0), D.every(Boolean) && v?.(), window.setTimeout(() => x([]), 700)
  }, G = () => {
    o(na.map(() => null)), M(na.map(() => !1)), k(!1)
  }, B = le;
  return i.jsxs(Wa, {
    id: "task-2",
    num: "2",
    title: "Заполни улики",
    sub: "Complete the clues with words from the text",
    desc: "В каждой карточке-улике пропало слово. Выбери слово из ящика и нажми на пустое место, чтобы его положить. Проверь себя — правильные улики закрепятся зелёной меткой.",
    done: f,
    children: [i.jsxs("div", {
      className: "mb-6 rounded-2xl border-2 border-dashed border-bark/40 bg-[#f6ead2] px-4 py-3.5",
      children: [i.jsxs("p", {
        className: "mb-2.5 flex items-center gap-2 font-display text-sm font-bold tracking-wide text-bark uppercase",
        children: [i.jsx($, {
          name: "box",
          className: "h-4.5 w-4.5"
        }), "Ящик со словами из текста"]
      }), i.jsx("div", {
        className: "flex flex-wrap gap-2",
        children: eyOrder.map(L => {
          const D = d.includes(L);
          return i.jsxs("button", {
            type: "button",
            onClick: () => se(L),
            disabled: D,
            className: xe("clue-chip", _ === L && "clue-chip-sel", D && "clue-chip-off"),
            children: [_ === L && i.jsx($, {
              name: "sparkle",
              className: "h-3.5 w-3.5 text-honey-deep"
            }), L]
          }, L)
        })
      })]
    }), i.jsx("ol", {
      className: "grid gap-3 md:grid-cols-2",
      children: na.map((L, D) => i.jsxs("li", {
        className: xe("card lift flex items-center gap-3 px-4 py-3.5", j.includes(D) && "border-berry", y[D] && "border-moss/60 bg-[#eef6e7]"),
        children: [i.jsx("span", {
          className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine font-display text-sm font-bold text-honey",
          children: D + 1
        }), i.jsx("p", {
          className: "text-[15px] leading-snug font-bold text-ink",
          children: L.text.split("____").map((ae, re, F) => i.jsxs("span", {
            children: [ae, re < F.length - 1 && i.jsx("button", {
              type: "button",
              onClick: () => C(D),
              className: xe("mx-1 inline-flex min-w-24 items-center justify-center rounded-lg border-2 border-dashed px-2 py-0.5 align-baseline text-sm font-extrabold transition", d[D] ? y[D] ? "border-moss bg-moss/15 text-[#2c5427]" : "border-honey-deep bg-honey-soft text-honey-deep" : "border-pine/35 bg-cream text-pine/45 hover:border-honey-deep hover:bg-honey-soft/60"),
              children: d[D] ?? "…"
            })]
          }, re))
        }), y[D] && i.jsx("span", {
          className: "pop-in ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss text-paper",
          children: i.jsx($, {
            name: "check",
            className: "h-4 w-4",
            strokeWidth: 3
          })
        })]
      }, D))
    }), i.jsxs("div", {
      className: "mt-6 flex flex-wrap items-center gap-3",
      children: [i.jsx(Rl, {
        onClick: N,
        disabled: d.some(L => !L) || B,
        label: B ? "Готово!" : "Проверить"
      }), !B && Y && i.jsxs("button", {
        type: "button",
        onClick: G,
        className: "btn btn-ghost px-4 py-2.5 text-sm",
        children: [i.jsx($, {
          name: "x",
          className: "h-4 w-4"
        }), "Попробовать заново"]
      }), i.jsx("p", {
        className: "text-sm font-bold text-ink/60",
        children: _ ? "Теперь нажми на пустое место в предложении." : "Сначала выбери слово из ящика."
      })]
    }), B && i.jsx(Hl, {
      children: "Все 8 улик собраны из слов текста! Числа из рассказа — надёжные следы."
    })]
  })
}

function ry({
  done: f,
  onDone: v
}) {
  const [d, o] = usePersisted("t3pairs", {}), [y, M] = usePersisted("t3ok", () => rm.map(() => !1)), [_, U] = usePersisted("t3sel", null), [j, x] = oe.useState(null), [tyPerm] = usePersisted("tyPerm", () => shuffleCopy([...Array(ty.length).keys()])), tyView = tyPerm.map(C => ({
    orig: C,
    text: ty[C]
  })), Y = y.every(Boolean), k = C => {
    if (y[C]) return;
    if (d[C] !== void 0) {
      o(G => {
        const B = {
          ...G
        };
        return delete B[C], B
      });
      return
    }
    U(G => G === C ? null : C)
  }, W = C => {
    if (_ === null || y[_]) return;
    const N = Object.keys(d).map(Number).find(G => d[G] === C);
    N !== void 0 && !y[N] || (o(G => {
      const B = {
        ...G
      };
      return N !== void 0 && delete B[N], B[_] = C, B
    }), U(null))
  }, le = () => {
    const C = y.map((G, B) => G || d[B] !== void 0 && d[B] === ly[B]),
      N = {};
    if (Object.entries(d).forEach(([G, B]) => {
        const L = Number(G);
        C[L] && (N[L] = B)
      }), !C.every(Boolean)) {
      const G = Object.keys(N).map(Number);
      G.length > 0 && (x(String(G[0])), window.setTimeout(() => x(null), 700))
    }
    o(N), M(C), C.every(Boolean) && v?.()
  }, se = C => hm[C % hm.length];
  return i.jsxs(Wa, {
    id: "task-3",
    num: "3",
    title: "Соедини факт и улику",
    sub: "Match the fact with the clue",
    desc: "Слева — вопросы-факты, справа — улики, перемешанные вперемешку. Нажми на вопрос, потом на его ответ: они соединятся цветным меткой. Нажми на пару, чтобы разорвать её.",
    done: f,
    children: [i.jsxs("div", {
      className: "grid gap-5 md:grid-cols-2",
      children: [i.jsxs("div", {
        className: "space-y-2.5",
        children: [i.jsx("p", {
          className: "font-display text-sm font-bold tracking-wide text-bark uppercase",
          children: "Факты из текста"
        }), rm.map((C, N) => {
          const G = d[N],
            B = j === String(N);
          return i.jsxs("button", {
            type: "button",
            onClick: () => k(N),
            className: xe("flex w-full items-center gap-2.5 rounded-2xl border-2 bg-paper px-4 py-3 text-left text-[15px] font-bold text-pine transition hover:-translate-y-0.5", y[N] ? "border-moss/60 bg-[#eef6e7]" : _ === N ? "border-honey-deep bg-honey-soft shadow-[0_0_0_3px_rgba(232,162,60,0.25)]" : B ? "animate-[shake_0.4s_ease] border-berry bg-[#fbe9e5]" : "border-pine/15 hover:border-moss"),
            children: [i.jsx("span", {
              className: "h-3.5 w-3.5 shrink-0 rounded-full",
              style: {
                background: G !== void 0 ? se(N) : "rgba(29,70,52,0.15)"
              }
            }), i.jsx("span", {
              className: "flex-1",
              children: C
            }), y[N] && i.jsx($, {
              name: "check",
              className: "h-5 w-5 shrink-0 text-moss",
              strokeWidth: 3
            })]
          }, N)
        })]
      }), i.jsxs("div", {
        className: "space-y-2.5",
        children: [i.jsx("p", {
          className: "font-display text-sm font-bold tracking-wide text-holo-deep uppercase",
          children: "Улики"
        }), tyView.map(C => {
          const N = C.orig,
            G = Object.keys(d).map(Number).find(L => d[L] === N),
            B = G !== void 0 && y[G];
          return i.jsxs("button", {
            type: "button",
            onClick: () => W(N),
            disabled: B,
            className: xe("flex w-full items-center gap-2.5 rounded-2xl border-2 px-4 py-3 text-left text-[15px] font-bold transition hover:-translate-y-0.5", G !== void 0 ? B ? "border-moss/60 bg-[#eef6e7] text-[#2c5427]" : "border-holo-deep/60 bg-holo/10 text-pine-deep" : "border-dashed border-pine/25 bg-cream/50 text-pine hover:border-holo-deep hover:bg-holo/10"),
            children: [i.jsx("span", {
              className: "h-3.5 w-3.5 shrink-0 rounded-full",
              style: {
                background: G !== void 0 ? se(G) : "rgba(29,70,52,0.12)"
              }
            }), i.jsx("span", {
              className: "flex-1",
              children: C.text
            }), B && i.jsx($, {
              name: "check",
              className: "h-5 w-5 shrink-0 text-moss",
              strokeWidth: 3
            })]
          }, N)
        })]
      })]
    }), i.jsxs("div", {
      className: "mt-6 flex flex-wrap items-center gap-3",
      children: [i.jsx(Rl, {
        onClick: le,
        disabled: Y,
        label: Y ? "Готово!" : "Проверить пары"
      }), i.jsx("p", {
        className: "text-sm font-bold text-ink/60",
        children: _ !== null ? "Отлично! Теперь выбери подходящую улику справа." : "Выбери вопрос слева, чтобы начать."
      })]
    }), Y && i.jsx(Hl, {
      children: "Все 8 пар сошлись! Ты отлично читаешь вопросы по тексту."
    })]
  })
}

function dy({
  done: f,
  onDone: v
}) {
  const [d, o] = usePersisted("t4tf", () => ua.map(() => null)), [y, M] = usePersisted("t4corr", () => ua.map(() => null)), [_, U] = usePersisted("t4ok", () => ua.map(() => !1)), [j, x] = usePersisted("t4bad", []), Y = _.every(Boolean), k = ua.every((C, N) => C.t ? d[N] === "T" : d[N] === "F" && y[N] !== null), W = (C, N) => {
    _[C] || o(G => {
      const B = [...G];
      return B[C] = B[C] === N ? null : N, B
    })
  }, le = (C, N) => {
    _[C] || M(G => {
      const B = [...G];
      return B[C] = B[C] === N ? null : N, B
    })
  }, se = () => {
    const C = _.map((G, B) => {
        if (G) return !0;
        const L = ua[B];
        return L.t ? d[B] === "T" : d[B] === "F" && y[B] === L.corrIdx
      }),
      N = ua.map((G, B) => B).filter(G => !C[G]);
    U(C), x(N), C.every(Boolean) && v?.(), window.setTimeout(() => x([]), 700)
  };
  return i.jsxs(Wa, {
    id: "task-4",
    num: "4",
    title: "Правда или нет?",
    sub: "True or false? Correct the false ones",
    desc: "Прочитай утверждение. Нажми «Правда», если так и есть в тексте. Если «Нет» — выбери, как правильно: исправь утверждение по тексту.",
    done: f,
    children: [i.jsx("div", {
      className: "grid gap-3",
      children: ua.map((C, N) => {
        const G = d[N],
          B = j.includes(N);
        return i.jsxs("div", {
          className: xe("card lift px-4 py-4 sm:px-5", _[N] && "border-moss/60 bg-[#eef6e7]", B && "animate-[shake_0.4s_ease] border-berry"),
          children: [i.jsxs("div", {
            className: "flex flex-wrap items-center gap-x-3 gap-y-2.5",
            children: [i.jsx("span", {
              className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine font-display text-sm font-bold text-honey",
              children: N + 1
            }), i.jsxs("p", {
              className: "min-w-0 flex-1 text-[15px] font-bold text-ink",
              children: ["“", C.s, "”"]
            }), _[N] && i.jsxs("span", {
              className: "pop-in flex items-center gap-1.5 rounded-full bg-moss px-3 py-1 text-xs font-extrabold text-paper",
              children: [i.jsx($, {
                name: "check",
                className: "h-3.5 w-3.5",
                strokeWidth: 3
              }), "верно"]
            }), i.jsxs("div", {
              className: "flex gap-2",
              children: [i.jsxs("button", {
                type: "button",
                onClick: () => W(N, "T"),
                disabled: _[N],
                className: xe("btn rounded-xl px-4 py-2 text-sm", G === "T" ? "bg-moss text-paper shadow-[0_3px_0_#2c5427]" : "bg-pine/[0.07] text-pine hover:bg-moss/20"),
                children: [i.jsx($, {
                  name: "check",
                  className: "h-4 w-4",
                  strokeWidth: 3
                }), "Правда"]
              }), i.jsxs("button", {
                type: "button",
                onClick: () => W(N, "F"),
                disabled: _[N],
                className: xe("btn rounded-xl px-4 py-2 text-sm", G === "F" ? "bg-berry text-paper shadow-[0_3px_0_#8f3527]" : "bg-pine/[0.07] text-pine hover:bg-berry/15"),
                children: [i.jsx($, {
                  name: "x",
                  className: "h-4 w-4",
                  strokeWidth: 3
                }), "Нет"]
              })]
            })]
          }), G === "F" && C.corr && i.jsxs("div", {
            className: "pop-in mt-3 flex flex-wrap items-center gap-2 border-t border-dashed border-pine/15 pt-3",
            children: [i.jsx("span", {
              className: "text-sm font-extrabold text-berry",
              children: "Исправь: правильно…"
            }), C.corr.map((L, D) => i.jsx("button", {
              type: "button",
              onClick: () => le(N, D),
              disabled: _[N],
              className: xe("opt opt-sm", y[N] === D && !_[N] && "opt-sel", _[N] && D === C.corrIdx && "opt-good"),
              children: L
            }, D))]
          })]
        }, N)
      })
    }), i.jsxs("div", {
      className: "mt-6 flex flex-wrap items-center gap-3",
      children: [i.jsx(Rl, {
        onClick: se,
        disabled: !k || Y,
        label: Y ? "Готово!" : "Проверить"
      }), i.jsx("p", {
        className: "text-sm font-bold text-ink/60",
        children: k ? "Все утверждения разобраны — жми «Проверить»." : "Ответь на все 8 утверждений, чтобы проверить."
      })]
    }), Y && i.jsx(Hl, {
      children: "Молодец! Ловушки с «ten cubs» и «run slowly» тебе не страшны."
    })]
  })
}
const my = [{
  left: "6%",
  delay: "0s",
  dur: "2.4s",
  color: "#E8A23C"
}, {
  left: "16%",
  delay: "0.25s",
  dur: "2.9s",
  color: "#43DCCB"
}, {
  left: "27%",
  delay: "0.1s",
  dur: "2.5s",
  color: "#7FA864"
}, {
  left: "38%",
  delay: "0.4s",
  dur: "3s",
  color: "#D9604A"
}, {
  left: "49%",
  delay: "0.05s",
  dur: "2.6s",
  color: "#E8A23C"
}, {
  left: "58%",
  delay: "0.3s",
  dur: "2.8s",
  color: "#43DCCB"
}, {
  left: "68%",
  delay: "0.15s",
  dur: "2.4s",
  color: "#B06AB3"
}, {
  left: "77%",
  delay: "0.45s",
  dur: "3.1s",
  color: "#7FA864"
}, {
  left: "86%",
  delay: "0.2s",
  dur: "2.7s",
  color: "#E8A23C"
}, {
  left: "94%",
  delay: "0.35s",
  dur: "2.5s",
  color: "#43DCCB"
}];

function hy({
  placed: f,
  locked: v,
  submitted: d,
  onPlace: o,
  onCheck: y,
  onSubmitted: M,
  done: _
}) {
  const [U, j] = oe.useState(null), [x, Y] = oe.useState(!1), [ayOrder] = usePersisted("ayOrder", () => shuffleCopy(ay)), k = oe.useMemo(() => new Set(Object.values(f).filter(Boolean)), [f]), W = Object.keys(f).length, le = N => {
    k.has(N) || (j(G => G === N ? null : N), Y(!1))
  }, se = N => {
    v[N] || d || U && (o(N, U), j(null))
  }, C = () => {
    const N = y();
    Y(!N), N && M()
  };
  return i.jsxs(Wa, {
    id: "task-5",
    num: "5",
    title: "Собери Информационную карточку",
    sub: "Build the wolf information card",
    desc: "В кармане 8 собранных улик. Выбери улику и нажми на нужную ячейку карточки (Weight, Pack size, Height…). Когда все 8 улик на своих местах — жми «Сдать в архив».",
    done: _,
    doneText: "Карточка в архиве!",
    children: [i.jsxs("div", {
      className: "mb-5 rounded-2xl border-2 border-dashed border-holo-deep/40 bg-holo/[0.07] px-4 py-3.5",
      children: [i.jsxs("p", {
        className: "mb-2.5 flex items-center gap-2 font-display text-sm font-bold tracking-wide text-holo-deep uppercase",
        children: [i.jsx($, {
          name: "box",
          className: "h-4.5 w-4.5"
        }), "Улики из кармана — ", W, "/8 на карточке"]
      }), i.jsx("div", {
        className: "flex flex-wrap gap-2",
        children: ayOrder.map(N => i.jsxs("button", {
          type: "button",
          onClick: () => le(N),
          disabled: k.has(N) || d,
          className: xe("clue-chip", U === N && "clue-chip-sel", k.has(N) && "clue-chip-off", U === N && "glow-pulse"),
          children: [i.jsx($, {
            name: cl[N].icon,
            className: "h-4 w-4 text-holo-deep"
          }), cl[N].short]
        }, N))
      })]
    }), i.jsxs("div", {
      className: "relative",
      children: [i.jsx(pi, {
        placed: f,
        submitted: d,
        interactive: !d,
        selectedChip: U,
        onCellClick: se
      }), d && i.jsxs(i.Fragment, {
        children: [my.map((N, G) => i.jsx("span", {
          className: "confetti-paw",
          style: {
            left: N.left,
            animationDelay: N.delay,
            animationDuration: N.dur,
            color: N.color
          },
          children: i.jsx($, {
            name: "paw",
            className: "h-6 w-6"
          })
        }, G)), i.jsx("div", {
          className: "pointer-events-none absolute inset-0 flex items-center justify-center",
          children: i.jsx("span", {
            className: "stamp bg-paper/90 px-8 py-4 text-2xl shadow-xl",
            children: "Сдано в архив ★"
          })
        })]
      })]
    }), i.jsxs("div", {
      className: "mt-6 flex flex-wrap items-center gap-3",
      children: [i.jsx(Rl, {
        onClick: C,
        disabled: W < 8 || d,
        label: d ? "В архиве!" : "Проверить и сдать в архив"
      }), x && !d && i.jsxs("span", {
        className: "pop-in flex items-center gap-2 text-sm font-extrabold text-berry",
        children: [i.jsx($, {
          name: "x",
          className: "h-4.5 w-4.5",
          strokeWidth: 3
        }), "Где-то улика не на своём месте — неверные вернулись в карман. Попробуй ещё раз!"]
      }), d && i.jsxs("span", {
        className: "flex items-center gap-2 text-sm font-extrabold text-[#2c5427]",
        children: [i.jsx($, {
          name: "star",
          className: "h-5 w-5 text-honey-deep"
        }), "Карточка заполнена и отправлена в архив!"]
      })]
    }), !d && i.jsx("p", {
      className: "mt-3 text-sm font-bold text-ink/60",
      children: U ? "Отлично! Теперь нажми на ячейку, куда нужно положить улику." : "Сначала выбери улику выше."
    }), d && i.jsx(Hl, {
      children: "Миссия почти выполнена! Ниже — итог урока и рефлексия."
    })]
  })
}

function py({
  done: f,
  onDone: v
}) {
  const [d, o] = usePersisted("t6ans", () => ia.map(() => null)), [y, M] = usePersisted("t6shown", !1), _ = d.every(j => j !== null), U = y && d.every((j, x) => j === ia[x].idx);
  return i.jsxs(Wa, {
    id: "task-6",
    num: "6",
    title: "Мой доклад о волках",
    sub: "My short report about wolves",
    desc: "Собери короткий доклад из 6 предложений: выбери правильный факт для каждого пропуска. Затем жми «Прочитать доклад» и скажи его вслух, как настоящий исследователь.",
    done: f,
    children: [i.jsx("div", {
      className: "grid gap-3",
      children: ia.map((j, x) => i.jsxs("div", {
        className: "card lift px-4 py-3.5 sm:px-5",
        children: [i.jsxs("div", {
          className: "flex flex-wrap items-center gap-x-3 gap-y-2",
          children: [i.jsx("span", {
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine font-display text-sm font-bold text-honey",
            children: x + 1
          }), i.jsx("p", {
            className: "text-[15px] font-bold text-ink",
            children: j.frame.split("____").map((Y, k, W) => i.jsxs("span", {
              children: [Y, k < W.length - 1 && i.jsx("span", {
                className: xe("mx-1 rounded-md border-b-2 border-dashed border-pine/40 px-1.5 font-extrabold", d[x] !== null ? "text-holo-deep" : "text-pine/40"),
                children: d[x] !== null ? j.opts[d[x]] : "…"
              })]
            }, k))
          }), y && i.jsx("span", {
            className: xe("pop-in ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-paper", d[x] === j.idx ? "bg-moss" : "bg-berry"),
            children: i.jsx("svg", {
              viewBox: "0 0 24 24",
              className: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 3,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: d[x] === j.idx ? i.jsx("path", {
                d: "m4.5 12.5 5 5L19.5 7"
              }) : i.jsx("path", {
                d: "m6 6 12 12M18 6 6 18"
              })
            })
          })]
        }), i.jsx("div", {
          className: "mt-2.5 flex flex-wrap gap-2 pl-11",
          children: j.opts.map((Y, k) => i.jsx(Kn, {
            small: !0,
            onClick: () => o(W => {
              const le = [...W];
              return le[x] = le[x] === k ? null : k, le
            }),
            disabled: y,
            state: y ? k === ia[x].idx ? "good" : d[x] === k ? "bad" : "idle" : d[x] === k ? "sel" : "idle",
            children: Y
          }, k))
        })]
      }, x))
    }), i.jsxs("div", {
      className: "mt-6 flex flex-wrap items-center gap-3",
      children: [y ? i.jsx("button", {
        type: "button",
        className: "btn btn-ghost px-5 py-3 text-sm",
        onClick: () => {
          M(!1), o(ia.map(() => null))
        },
        children: "Поправить доклад"
      }) : i.jsx("button", {
        type: "button",
        className: "btn btn-pine px-6 py-3 text-base",
        disabled: !_,
        onClick: () => {
          const j = d.every((x, Y) => x === ia[Y].idx);
          M(!0), j && v?.()
        },
        children: "Прочитать мой доклад"
      }), i.jsx("p", {
        className: "text-sm font-bold text-ink/60",
        children: _ ? "Все 6 фактов выбраны — можно собирать!" : "Выбери вариант для каждого из 6 предложений."
      })]
    }), y && i.jsx(Ot, {
      delay: 100,
      children: i.jsxs("div", {
        className: "relative mt-6 rounded-3xl border-2 border-honey/60 bg-[#fff6df] p-5 shadow-inner sm:p-7",
        children: [i.jsx("span", {
          className: "absolute -top-3.5 left-6 rounded-full bg-honey px-3.5 py-1 font-display text-xs font-bold tracking-widest text-night uppercase shadow-[0_2px_0_var(--color-honey-deep)]",
          children: "Мой доклад"
        }), i.jsxs("p", {
          className: "mt-2 font-display text-lg leading-relaxed font-bold text-pine sm:text-xl",
          children: ["“I am a junior researcher. Today I want to tell you about wolves.", i.jsx("br", {}), ia.map((j, x) => {
            const Y = d[x],
              k = Y === j.idx;
            return i.jsxs("span", {
              className: xe("mx-0.5 rounded px-0.5", !k && "bg-berry/20 text-berry"),
              children: [j.frame.replace("____", Y !== null ? j.opts[Y] : "…"), " "]
            }, x)
          }), "Do you want to be my friend in the forest?”"]
        }), !U && i.jsx("p", {
          className: "mt-3 text-sm font-extrabold text-berry",
          children: "Красные факты не совпадают с текстом. Жми «Поправить доклад» и проверь себя по тексту!"
        })]
      })
    }), U && i.jsx(Hl, {
      children: "Идеальный доклад из 6 фактов! Скажи его вслух родителям или одноклассникам."
    })]
  })
}

function xy({
  placed: f,
  submitted: v,
  done: d
}) {
  const [o, y] = usePersisted("refl", () => dm.map(() => null)), M = Object.values(d).filter(Boolean).length;
  return i.jsx("section", {
    id: "final",
    className: "scroll-mt-36",
    children: i.jsx(Ot, {
      children: i.jsxs("div", {
        className: "card overflow-hidden",
        children: [i.jsxs("div", {
          className: "flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-dashed border-pine/20 bg-pine/[0.045] px-5 py-4 sm:px-7",
          children: [i.jsx("span", {
            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine text-honey shadow-[0_3px_0_#0b1f16]",
            children: i.jsx($, {
              name: "box",
              className: "h-6 w-6"
            })
          }), i.jsxs("div", {
            children: [i.jsx("h3", {
              className: "font-display text-xl font-bold leading-tight text-pine sm:text-[22px]",
              children: "Итог урока и рефлексия"
            }), i.jsx("p", {
              className: "text-sm font-bold italic text-moss",
              children: "Mission review"
            })]
          }), i.jsxs("span", {
            className: "ml-auto flex items-center gap-1.5 rounded-full bg-honey-soft px-3.5 py-1.5 font-display text-sm font-bold text-honey-deep",
            children: [i.jsx($, {
              name: "star",
              className: "h-4.5 w-4.5"
            }), M, " / 6 звёзд за урок"]
          })]
        }), i.jsxs("div", {
          className: "grid gap-6 px-5 py-6 sm:px-7 lg:grid-cols-2",
          children: [i.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [i.jsx(Ot, {
              dir: "left",
              children: i.jsxs("figure", {
                className: "relative overflow-hidden rounded-2xl border-2 border-bark/30 shadow-lg",
                children: [i.jsx("img", {
                  src: "images/wolves.jpg",
                  alt: "Волчица и два волчонка в тёплом лесу",
                  className: "h-56 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-64"
                }), i.jsxs("figcaption", {
                  className: "absolute right-3 bottom-3 left-3 flex items-center gap-2 rounded-xl bg-pine-deep/80 px-3 py-2 text-xs font-bold text-holo backdrop-blur-sm",
                  children: [i.jsx($, {
                    name: "paw",
                    className: "h-4 w-4 shrink-0"
                  }), "Дело закрыто! Спасибо, юный исследователь!"]
                })]
              })
            }), i.jsx(Ot, {
              dir: "left",
              delay: 120,
              children: i.jsxs("div", {
                className: "card px-4 py-4",
                children: [i.jsx("p", {
                  className: "mb-3 font-display text-[15px] font-bold text-pine",
                  children: "Рефлексия: 2 вопроса для себя"
                }), i.jsx("div", {
                  className: "space-y-4",
                  children: dm.map((_, U) => i.jsxs("div", {
                    children: [i.jsxs("p", {
                      className: "mb-2 text-sm font-extrabold text-ink/80",
                      children: [U + 1, ". ", _.q]
                    }), i.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: _.opts.map((j, x) => i.jsx(Kn, {
                        small: !0,
                        state: o[U] === j ? "sel" : "idle",
                        onClick: () => y(Y => {
                          const k = [...Y];
                          return k[U] = k[U] === j ? null : j, k
                        }),
                        children: j
                      }, x))
                    }), o[U] !== null && i.jsx("p", {
                      className: "pop-in mt-2 rounded-xl bg-holo/15 px-3 py-2 text-sm font-bold text-pine-deep",
                      children: _.reply
                    })]
                  }, U))
                })]
              })
            })]
          }), i.jsx("div", {
            children: i.jsxs(Ot, {
              dir: "right",
              children: [i.jsx("p", {
                className: "mb-3 font-display text-[15px] font-bold text-pine",
                children: "Твоя карточка в архиве"
              }), v ? i.jsx(pi, {
                placed: f,
                submitted: !0,
                compact: !0
              }) : i.jsxs("div", {
                className: "rounded-2xl border-2 border-dashed border-honey-deep/50 bg-honey-soft/40 px-5 py-8 text-center",
                children: [i.jsx($, {
                  name: "card",
                  className: "mx-auto mb-3 h-10 w-10 text-honey-deep"
                }), i.jsx("p", {
                  className: "font-display text-lg font-bold text-[#6b4a12]",
                  children: "Карточка ещё не сдана"
                }), i.jsx("p", {
                  className: "mx-auto mt-1.5 max-w-sm text-sm font-bold text-ink/65",
                  children: "Вернись в задание 5 «Собери Информационную карточку» — когда все 8 улик будут на местах, карточка появится здесь с печатью «Сдано в архив»."
                }), i.jsx("a", {
                  href: "#task-5",
                  className: "btn btn-honey mt-4 px-5 py-2.5 text-sm",
                  children: "К заданию 5"
                })]
              }), i.jsxs("div", {
                className: xe("mt-4 flex items-center gap-3 rounded-2xl px-4 py-3", v ? "bg-[#e4f0dd] text-[#2c5427]" : "bg-cream/70 text-ink/60"),
                children: [i.jsx($, {
                  name: v ? "sparkle" : "clock",
                  className: "h-6 w-6 shrink-0"
                }), i.jsx("p", {
                  className: "text-sm font-extrabold",
                  children: v ? "Урок окончен: 45 минут, 8 улик, 6 заданий, 1 досье в архиве. Домашнее задание — ниже!" : "45 минут урока, 8 улик и 6 заданий. Закончи задание 5, чтобы закрыть дело."
                })]
              })]
            })
          })]
        })]
      })
    })
  })
}

function Ls(f) {
  const [v, d] = oe.useState(Array.from({
    length: f
  }, () => null)), [o, y] = oe.useState(Array.from({
    length: f
  }, () => !1)), [M, _] = oe.useState([]);
  return {
    answers: v,
    setAnswers: d,
    locked: o,
    setLocked: y,
    bad: M,
    setBad: _
  }
}

function mi({
  letter: f,
  title: v,
  desc: d,
  children: o,
  done: y,
  delay: M = 0
}) {
  return i.jsx(Ot, {
    delay: M,
    children: i.jsxs("div", {
      className: "card h-full overflow-hidden",
      children: [i.jsxs("div", {
        className: "flex items-center gap-3 border-b border-dashed border-pine/20 bg-pine/[0.045] px-5 py-3.5",
        children: [i.jsx("span", {
          className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bark font-display text-base font-bold text-paper shadow-[0_2px_0_#54371d]",
          children: f
        }), i.jsx("p", {
          className: "font-display text-[15px] leading-tight font-bold text-pine",
          children: v
        }), y && i.jsx("span", {
          className: "pop-in ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-moss text-paper",
          children: i.jsx($, {
            name: "check",
            className: "h-4 w-4",
            strokeWidth: 3
          })
        })]
      }), i.jsxs("div", {
        className: "px-5 py-4",
        children: [i.jsx("p", {
          className: "mb-3.5 text-sm leading-relaxed font-semibold text-ink/70",
          children: d
        }), o]
      })]
    })
  })
}


function useHwBank(ansKey, okKey, badKey, len) {
  const [answers, setAnswers] = usePersisted(ansKey, () => Array.from({
    length: len
  }, () => null));
  const [locked, setLocked] = usePersisted(okKey, () => Array.from({
    length: len
  }, () => !1));
  const [bad, setBad] = usePersisted(badKey, []);
  return {
    answers,
    setAnswers,
    locked,
    setLocked,
    bad,
    setBad
  };
}

function yy() {
  const f = useHwBank("hwAAns", "hwAOk", "hwABad", Gs.length),
    v = useHwBank("hwBAns", "hwBOk", "hwBBad", Xs.length),
    d = useHwBank("hwCAns", "hwCOk", "hwCBad", Vn.length),
    [o, y] = usePersisted("hwCchecked", !1),
    [M, _] = usePersisted("hwDchecks", () => mm.map(() => !1)),
    [U, j] = usePersisted("hwDtext", ""),
    [x, Y] = usePersisted("hwDsaved", !1),
    k = f.locked.every(Boolean),
    W = v.locked.every(Boolean),
    le = o ? Vn.filter((C, N) => d.answers[N] === C.idx).length : null,
    se = (C, N, G) => {
      const B = C.locked.map((L, D) => L || C.answers[D] === N[D].idx);
      C.setLocked(B), C.setBad(N.map((L, D) => D).filter(L => !B[L])), window.setTimeout(() => C.setBad([]), 700), G && G()
    };
  return i.jsx("section", {
    id: "hw",
    className: "scroll-mt-36",
    children: i.jsx(Ot, {
      children: i.jsxs("div", {
        className: "card overflow-hidden",
        children: [i.jsxs("div", {
          className: "flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-dashed border-pine/20 bg-pine/[0.045] px-5 py-4 sm:px-7",
          children: [i.jsx("span", {
            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bark text-paper shadow-[0_3px_0_#54371d]",
            children: i.jsx($, {
              name: "pen",
              className: "h-5.5 w-5.5"
            })
          }), i.jsxs("div", {
            children: [i.jsx("h3", {
              className: "font-display text-xl font-bold leading-tight text-pine sm:text-[22px]",
              children: "Домашнее задание"
            }), i.jsx("p", {
              className: "text-sm font-bold italic text-moss",
              children: "Homework · 10–12 минут"
            })]
          }), i.jsxs("p", {
            className: "ml-auto flex items-center gap-2 rounded-full bg-holo/15 px-3.5 py-1.5 text-xs font-extrabold text-pine-deep",
            children: [i.jsx($, {
              name: "bulb",
              className: "h-4 w-4 text-holo-deep"
            }), "Правила и подсказки работают и дома"]
          })]
        }), i.jsxs("div", {
          className: "px-5 py-6 sm:px-7",
          children: [i.jsxs("p", {
            className: "mb-6 flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/80",
            children: [i.jsx($, {
              name: "flag",
              className: "mt-0.5 h-5 w-5 shrink-0 text-bark"
            }), i.jsx("span", {
              children: "Homework: do these tasks in a different way from the lesson — from memory and in your own words, without looking at the classwork answers. A: choose the sentence that means the same. B: complete with There are / There isn’t / There aren’t any. C: answer six questions from memory. D: tick what you can say and write two sentences of your own with There are… and There aren’t any…. Use Check to see which answers are right. Дома задания другие — без подсказок из экрана, на память и со своими словами."
            })]
          }), i.jsxs("div", {
            className: "grid gap-5 xl:grid-cols-2",
            children: [i.jsxs(mi, {
              letter: "A",
              title: "Скажи иначе",
              desc: "Какой вариант говорит ТО ЖЕ САМОЕ, что и факт? Это не True/False — здесь нужно понять смысл.",
              done: k,
              children: [i.jsx("div", {
                className: "space-y-3",
                children: Gs.map((C, N) => i.jsxs("div", {
                  className: xe("rounded-xl border-2 px-3.5 py-3 transition", f.locked[N] ? "border-moss/50 bg-[#eef6e7]" : f.bad.includes(N) ? "animate-[shake_0.4s_ease] border-berry bg-[#fbe9e5]" : "border-pine/12 bg-cream/40"),
                  children: [i.jsxs("p", {
                    className: "mb-2 text-sm font-extrabold text-pine",
                    children: ["«", C.fact, "»"]
                  }), i.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: C.opts.map((G, B) => i.jsx(Kn, {
                      small: !0,
                      disabled: f.locked[N],
                      state: f.locked[N] ? B === C.idx ? "good" : "idle" : f.answers[N] === B ? "sel" : "idle",
                      onClick: () => f.setAnswers(L => {
                        const D = [...L];
                        return D[N] = D[N] === B ? null : B, D
                      }),
                      children: G
                    }, B))
                  })]
                }, N))
              }), i.jsx("div", {
                className: "mt-3.5",
                children: i.jsx(Rl, {
                  label: k ? "Готово!" : "Проверить",
                  disabled: k || f.answers.some(C => C === null),
                  onClick: () => se(f, Gs)
                })
              }), k && i.jsx(Hl, {
                children: "Смысл фактов ты ловишь на лету!"
              })]
            }), i.jsxs(mi, {
              letter: "B",
              title: "There are / There aren't any",
              desc: "Вставь в пропуск: There are, There isn't или There aren't (any). Помогут карточки правил!",
              done: W,
              delay: 80,
              children: [i.jsx("div", {
                className: "space-y-3",
                children: Xs.map((C, N) => i.jsxs("div", {
                  className: xe("flex flex-wrap items-center gap-2 rounded-xl border-2 px-3.5 py-3 transition", v.locked[N] ? "border-moss/50 bg-[#eef6e7]" : v.bad.includes(N) ? "animate-[shake_0.4s_ease] border-berry bg-[#fbe9e5]" : "border-pine/12 bg-cream/40"),
                  children: [i.jsx("p", {
                    className: "w-full text-sm font-extrabold text-pine",
                    children: C.frame.replace("____", "▁▁▁▁")
                  }), i.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: C.opts.map((G, B) => i.jsx(Kn, {
                      small: !0,
                      disabled: v.locked[N],
                      state: v.locked[N] ? B === C.idx ? "good" : "idle" : v.answers[N] === B ? "sel" : "idle",
                      onClick: () => v.setAnswers(L => {
                        const D = [...L];
                        return D[N] = D[N] === B ? null : B, D
                      }),
                      children: G
                    }, B))
                  })]
                }, N))
              }), i.jsx("div", {
                className: "mt-3.5",
                children: i.jsx(Rl, {
                  label: W ? "Готово!" : "Проверить",
                  disabled: W || v.answers.some(C => C === null),
                  onClick: () => se(v, Xs)
                })
              }), W && i.jsx(Hl, {
                children: "There are / There aren't any — твой конёк!"
              })]
            }), i.jsxs(mi, {
              letter: "C",
              title: "Вопросы без подглядывания",
              desc: "Открой это задание и НЕ заглядывай в текст! Ответь по памяти, проверь себя и посчитай баллы.",
              done: o && le === Vn.length,
              delay: 80,
              children: [i.jsx("div", {
                className: "space-y-3",
                children: Vn.map((C, N) => i.jsxs("div", {
                  className: xe("rounded-xl border-2 px-3.5 py-3 transition", o ? d.answers[N] === C.idx ? "border-moss/50 bg-[#eef6e7]" : "border-berry/50 bg-[#fbe9e5]" : d.bad.includes(N) ? "animate-[shake_0.4s_ease] border-berry bg-[#fbe9e5]" : "border-pine/12 bg-cream/40"),
                  children: [i.jsxs("p", {
                    className: "mb-2 text-sm font-extrabold text-pine",
                    children: [N + 1, ". ", C.q]
                  }), i.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: C.opts.map((G, B) => i.jsx(Kn, {
                      small: !0,
                      disabled: o,
                      state: o ? B === C.idx ? "good" : d.answers[N] === B ? "bad" : "idle" : d.answers[N] === B ? "sel" : "idle",
                      onClick: () => d.setAnswers(L => {
                        const D = [...L];
                        return D[N] = D[N] === B ? null : B, D
                      }),
                      children: G
                    }, B))
                  })]
                }, N))
              }), i.jsxs("div", {
                className: "mt-3.5 flex flex-wrap items-center gap-3",
                children: [i.jsx(Rl, {
                  label: o ? "Проверено" : "Проверить по памяти",
                  disabled: o || d.answers.some(C => C === null),
                  onClick: () => se(d, Vn, () => y(!0))
                }), le !== null && i.jsxs("span", {
                  className: xe("pop-in rounded-full px-3.5 py-1.5 font-display text-sm font-bold", le === 6 ? "bg-moss text-paper" : le >= 4 ? "bg-honey-soft text-honey-deep" : "bg-[#fbe9e5] text-berry"),
                  children: [le, " / 6 —", " ", le === 6 ? "идеально, все на память!" : le >= 4 ? "отлично! перечитай текст и повтори" : "вернись к тексту и попробуй ещё раз"]
                })]
              })]
            }), i.jsxs(mi, {
              letter: "D",
              title: "Моя карточка по памяти",
              desc: "Сначала закрой экран. Отметь, что ты можешь назвать сам(а), и напиши 2 предложения о волках своими словами.",
              done: M.every(Boolean) && x,
              delay: 120,
              children: [i.jsx("ul", {
                className: "space-y-2",
                children: mm.map((C, N) => i.jsx("li", {
                  children: i.jsxs("button", {
                    type: "button",
                    onClick: () => _(G => {
                      const B = [...G];
                      return B[N] = !B[N], B
                    }),
                    className: xe("flex w-full items-center gap-2.5 rounded-xl border-2 px-3.5 py-2.5 text-left text-sm font-bold transition hover:-translate-y-0.5", M[N] ? "border-moss/60 bg-[#eef6e7] text-[#2c5427]" : "border-dashed border-pine/25 bg-cream/40 text-pine"),
                    children: [i.jsx("span", {
                      className: xe("flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition", M[N] ? "border-moss bg-moss text-paper" : "border-pine/30 bg-paper"),
                      children: M[N] && i.jsx($, {
                        name: "check",
                        className: "h-4 w-4",
                        strokeWidth: 3
                      })
                    }), C]
                  })
                }, N))
              }), i.jsxs("label", {
                className: "mt-4 block",
                children: [i.jsxs("span", {
                  className: "mb-1.5 flex items-center gap-2 text-sm font-extrabold text-pine",
                  children: [i.jsx($, {
                    name: "pen",
                    className: "h-4 w-4 text-bark"
                  }), "Напиши 2 предложения (There are… / There aren't any…):"]
                }), i.jsx("textarea", {
                  value: U,
                  onChange: C => {
                    j(C.target.value), Y(!1)
                  },
                  rows: 3,
                  placeholder: "Example: There are forty-two wolves in a pack. There aren't any vegetables in their food.",
                  className: "w-full resize-none rounded-xl border-2 border-pine/20 bg-cream/40 px-3.5 py-2.5 text-sm font-bold text-pine placeholder:font-semibold placeholder:text-pine/35 focus:border-honey-deep focus:ring-4 focus:ring-honey/20 focus:outline-none"
                })]
              }), i.jsxs("div", {
                className: "mt-3 flex items-center gap-3",
                children: [i.jsxs("button", {
                  type: "button",
                  className: "btn btn-honey px-5 py-2.5 text-sm",
                  onClick: () => Y(!0),
                  disabled: U.trim().length < 10,
                  children: [i.jsx($, {
                    name: "check",
                    className: "h-4 w-4",
                    strokeWidth: 3
                  }), "Сохранить"]
                }), x && i.jsx("span", {
                  className: "pop-in text-sm font-extrabold text-[#2c5427]",
                  children: "Сохранено! Покажи маме или папе."
                })]
              })]
            })]
          })]
        })]
      })
    })
  })
}
const by = [{
    href: "#task-1",
    label: "1 · Текст",
    key: "t1"
  }, {
    href: "#task-2",
    label: "2 · Пропуски",
    key: "t2"
  }, {
    href: "#task-3",
    label: "3 · Соедини",
    key: "t3"
  }, {
    href: "#task-4",
    label: "4 · Правда или нет",
    key: "t4"
  }, {
    href: "#task-5",
    label: "5 · Карточка",
    key: "t5"
  }, {
    href: "#task-6",
    label: "6 · Доклад",
    key: "t6"
  }, {
    href: "#final",
    label: "Итог урока",
    key: "final"
  }, {
    href: "#hw",
    label: "Домашнее задание",
    key: "hw"
  }],
  gy = [{
    n: "1",
    t: "Читай",
    d: "внимательно, как детектив",
    icon: "book"
  }, {
    n: "2",
    t: "Ищи улики",
    d: "числа, цвета, страны, еду",
    icon: "search"
  }, {
    n: "3",
    t: "Заполняй досье",
    d: "8 ячеек — 8 фактов",
    icon: "card"
  }],
  vy = [{
    top: "12%",
    left: "8%",
    delay: "0s"
  }, {
    top: "28%",
    left: "82%",
    delay: "1.2s"
  }, {
    top: "62%",
    left: "14%",
    delay: "2.1s"
  }, {
    top: "75%",
    left: "70%",
    delay: "0.7s"
  }, {
    top: "18%",
    left: "55%",
    delay: "3s"
  }];

function Sy({
  onReset: onReset
}) {
  const [f, v] = usePersisted("found", () => Object.fromEntries(Va.map(D => [D, !1]))), [d, o] = usePersisted("placed", {}), [y, M] = usePersisted("lockedCells", {}), [_, U] = usePersisted("submitted", !1), [j, x] = usePersisted("done", {
    t2: !1,
    t3: !1,
    t4: !1,
    t6: !1,
    hw: !1
  }), [Y, k] = oe.useState(!1), W = Va.filter(D => f[D]).length, le = W === 8, se = {
    t1: le,
    ...j,
    t5: _,
    final: _,
    hw: !!(j.hw || (loadState().hwDsaved && loadState().hwAOk && loadState().hwAOk.every(Boolean) && loadState().hwBOk && loadState().hwBOk.every(Boolean) && loadState().hwCchecked))
  }, C = ["t1", "t2", "t3", "t4", "t5", "t6"].filter(D => se[D]).length, N = D => {
    f[D] || v(ae => ({
      ...ae,
      [D]: !0
    }))
  }, G = D => x(ae => ae[D] ? ae : {
    ...ae,
    [D]: !0
  }), B = (D, ae) => {
    o(re => {
      const F = {
        ...re
      };
      return ae === null ? delete F[D] : (Object.keys(F).forEach(Q => {
        F[Q] === ae && delete F[Q]
      }), F[D] = ae), F
    })
  }, L = () => {
    const D = Object.keys(d);
    let ae = D.length === 8;
    const re = {
      ...y
    };
    return D.forEach(F => {
      d[F] === F ? re[F] = !0 : ae = !1
    }), ae || o(F => {
      const Q = {
        ...F
      };
      return Object.keys(Q).forEach(we => {
        Q[we] !== we && !y[we] && delete Q[we]
      }), Q
    }), M(re), ae
  };
  return i.jsxs("div", {
    className: "min-h-screen",
    children: [i.jsx("header", {
      className: "sticky top-0 z-40 bg-night text-cream shadow-lg",
      children: i.jsxs("div", {
        className: "mx-auto flex h-16 max-w-[1240px] items-center gap-3 px-4 sm:px-6",
        children: [i.jsxs("a", {
          href: "#top",
          className: "flex items-center gap-2.5",
          children: [i.jsx("span", {
            className: "flex h-10 w-10 items-center justify-center rounded-full bg-honey text-night shadow-[0_3px_0_var(--color-honey-deep)]",
            children: i.jsx($, {
              name: "paw",
              className: "h-6 w-6"
            })
          }), i.jsxs("span", {
            className: "leading-tight",
            children: [i.jsx("span", {
              className: "block font-display text-[15px] font-bold text-honey",
              children: "Academy Stars 2"
            }), i.jsx("span", {
              className: "block text-[11px] font-bold tracking-wide text-cream/70",
              children: "Unit 1 · Lesson 4 · Reading"
            })]
          })]
        }), i.jsxs("p", {
          className: "ml-2 hidden font-display text-lg font-bold text-cream/95 md:block",
          children: ["Find the key facts", " ", i.jsx("span", {
            className: "text-holo",
            children: "·"
          }), " ", i.jsx("span", {
            className: "text-cream/60",
            children: "Волки"
          })]
        }), i.jsxs("div", {
          className: "ml-auto flex items-center gap-2 sm:gap-3",
          children: [i.jsx("div", {
            className: "hidden items-center gap-0.5 rounded-full bg-pine-deep/70 px-3 py-1.5 sm:flex",
            title: `Звёзды за задания: ${C} из 6`,
            children: [0, 1, 2, 3, 4, 5].map(D => i.jsx($, {
              name: "star",
              className: xe("h-4 w-4", D < C ? "text-honey" : "text-cream/20", D < C && "pop-in")
            }, D))
          }), i.jsxs("div", {
            className: "flex items-center gap-1 rounded-full bg-pine-deep/70 px-3 py-1.5",
            title: `Улик собрано: ${W} из 8`,
            children: [Va.map(D => i.jsx($, {
              name: "paw",
              className: xe("h-3.5 w-3.5", f[D] ? "text-holo" : "text-cream/25", f[D] && "pop-in")
            }, D)), i.jsxs("span", {
              className: "ml-1 font-display text-xs font-bold text-holo",
              children: [W, "/8"]
            })]
          }), i.jsxs("button", {
            type: "button",
            onClick: () => k(!0),
            className: "btn btn-honey px-4 py-2 text-sm",
            children: [i.jsx($, {
              name: "bulb",
              className: "h-4.5 w-4.5"
            }), i.jsx("span", {
              className: "hidden sm:inline",
              children: "Подсказка / Правила"
            }), i.jsx("span", {
              className: "sm:hidden",
              children: "Правила"
            })]
          })]
        })]
      })
    }), i.jsx("nav", {
      className: "sticky top-16 z-30 border-b border-pine/10 bg-cream/90 backdrop-blur-md",
      children: i.jsx("div", {
        className: "scroll-row mx-auto flex max-w-[1240px] gap-2 overflow-x-auto px-4 py-2.5 sm:px-6",
        children: [by.map(D => i.jsxs("a", {
          href: D.href,
          className: "navchip shrink-0",
          children: [se[D.key] && D.key !== "hw" && i.jsx($, {
            name: "check",
            className: "h-3.5 w-3.5 text-moss",
            strokeWidth: 3.2
          }), D.label]
        }, D.key)), i.jsx("button", {
          type: "button",
          className: "ttc-reset navchip shrink-0 ml-auto",
          onClick: onReset,
          children: "↺ Начать заново"
        })]
      })
    }), i.jsxs("main", {
      id: "top",
      className: "mx-auto max-w-[1240px] px-4 pt-6 pb-16 sm:px-6",
      children: [i.jsx("section", {
        className: "card overflow-hidden",
        children: i.jsxs("div", {
          className: "grid lg:grid-cols-[1.05fr_1fr]",
          children: [i.jsxs("div", {
            className: "relative flex flex-col justify-center px-5 py-7 sm:px-8 lg:px-10",
            children: [i.jsxs("div", {
              className: "mb-4 flex flex-wrap items-center gap-2",
              children: [i.jsx("span", {
                className: "stamp px-3 py-1 text-[11px]",
                children: "Mission brief"
              }), i.jsx("span", {
                className: "rounded-full bg-pine px-3 py-1 text-xs font-extrabold tracking-wide text-honey",
                children: "READING · 45 MINUTES"
              }), i.jsx("span", {
                className: "rounded-full bg-holo/20 px-3 py-1 text-xs font-extrabold tracking-wide text-pine-deep",
                children: "A1 · 7–9 лет"
              })]
            }), i.jsx("h1", {
              id: "screen-title",
              tabIndex: -1,
              className: "font-display text-4xl leading-[1.05] font-bold text-pine sm:text-5xl",
              children: "Find the key facts"
            }), i.jsx("p", {
              className: "mt-2 font-display text-xl font-bold text-holo-deep",
              children: "Найди ключевые факты о волках"
            }), i.jsxs("p", {
              className: "mt-4 max-w-xl text-[15px] leading-relaxed font-semibold text-ink/80",
              children: ["Ты — ", i.jsx("b", {
                children: "юный исследователь"
              }), " лесной экспедиции. В архиве не хватает", " ", i.jsx("b", {
                children: "Информационной карточки о волке"
              }), ". Прочитай текст и собери 8 улик: числа, цвета, страны, размеры, скорость, семью и еду. Каждая улика займёт своё место в досье!"]
            }), i.jsx("div", {
              className: "mt-5 grid gap-2.5 sm:grid-cols-3",
              children: gy.map(D => i.jsxs("div", {
                className: "lift flex items-start gap-2.5 rounded-2xl border-2 border-pine/12 bg-cream/60 px-3.5 py-3",
                children: [i.jsx("span", {
                  className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey font-display text-sm font-bold text-night shadow-[0_2px_0_var(--color-honey-deep)]",
                  children: D.n
                }), i.jsxs("span", {
                  children: [i.jsx("span", {
                    className: "block text-sm font-extrabold text-pine",
                    children: D.t
                  }), i.jsx("span", {
                    className: "block text-xs font-bold text-ink/60",
                    children: D.d
                  })]
                })]
              }, D.n))
            }), i.jsxs("div", {
              className: "mt-6 flex flex-wrap items-center gap-3",
              children: [i.jsxs("a", {
                href: "#task-1",
                className: "btn btn-honey px-6 py-3 text-base",
                children: [i.jsx($, {
                  name: "search",
                  className: "h-5 w-5"
                }), "Начать миссию"]
              }), i.jsxs("a", {
                href: "#task-5",
                className: "btn btn-ghost px-5 py-3 text-sm",
                children: [i.jsx($, {
                  name: "card",
                  className: "h-4.5 w-4.5"
                }), "Сразу к досье"]
              })]
            })]
          }), i.jsxs("div", {
            className: "relative min-h-[300px] overflow-hidden lg:min-h-[440px]",
            children: [i.jsx("img", {
              src: "images/hero.jpg",
              alt: "Юная исследовательница с голографической карточкой Wolf Facts, волчица и два волчонка в тёплом лесу",
              className: "absolute inset-0 h-full w-full object-cover"
            }), i.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-pine-deep/50 via-transparent to-transparent"
            }), vy.map((D, ae) => i.jsx("span", {
              className: "firefly",
              style: {
                top: D.top,
                left: D.left,
                animationDelay: D.delay
              }
            }, ae)), i.jsxs("div", {
              className: "floaty absolute right-4 bottom-4 flex items-center gap-2.5 rounded-2xl bg-pine-deep/85 px-4 py-3 text-cream shadow-xl backdrop-blur-sm",
              children: [i.jsx("span", {
                className: "flex h-9 w-9 items-center justify-center rounded-xl bg-holo/20 text-holo",
                children: i.jsx($, {
                  name: "paw",
                  className: "h-5 w-5"
                })
              }), i.jsxs("span", {
                className: "leading-tight",
                children: [i.jsx("span", {
                  className: "block font-display text-sm font-bold text-holo",
                  children: "WOLF FACTS"
                }), i.jsxs("span", {
                  className: "block text-[11px] font-bold text-cream/75",
                  children: ["досье · 8 ячеек · ", W, " найдено"]
                })]
              })]
            })]
          })]
        })
      }), i.jsxs("div", {
        className: "mt-6 space-y-4 lg:hidden",
        children: [i.jsx(Ot, {
          children: i.jsx(pi, {
            placed: d,
            submitted: _,
            compact: !0
          })
        }), i.jsx(Ot, {
          delay: 100,
          children: i.jsx(xm, {
            found: f
          })
        })]
      }), i.jsxs("div", {
        className: "mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_350px]",
        children: [i.jsxs("div", {
          className: "space-y-8",
          children: [i.jsx(fy, {
            found: f,
            onFound: N,
            done: le
          }), i.jsx(oy, {
            done: j.t2,
            onDone: () => G("t2")
          }), i.jsx(ry, {
            done: j.t3,
            onDone: () => G("t3")
          }), i.jsx(dy, {
            done: j.t4,
            onDone: () => G("t4")
          }), i.jsx(hy, {
            placed: d,
            locked: y,
            submitted: _,
            onPlace: B,
            onCheck: L,
            onSubmitted: () => {
              U(!0), G("t5")
            },
            done: _
          }), i.jsx(py, {
            done: j.t6,
            onDone: () => G("t6")
          }), i.jsx(xy, {
            placed: d,
            submitted: _,
            done: se
          }), i.jsx(yy, {})]
        }), i.jsxs("aside", {
          className: "sticky top-[120px] hidden space-y-4 lg:block",
          children: [i.jsxs("p", {
            className: "flex items-center gap-2 px-1 font-display text-sm font-bold tracking-wide text-bark uppercase",
            children: [i.jsx($, {
              name: "box",
              className: "h-4.5 w-4.5"
            }), "Твоё досье · обновляется само"]
          }), i.jsx(pi, {
            placed: d,
            submitted: _,
            compact: !0
          }), i.jsx(xm, {
            found: f
          }), i.jsxs("div", {
            className: "card flex items-center justify-between px-4 py-3.5",
            children: [i.jsxs("span", {
              className: "flex items-center gap-2 text-sm font-extrabold text-pine",
              children: [i.jsx($, {
                name: "star",
                className: xe("h-5 w-5", C > 0 ? "text-honey-deep" : "text-pine/25")
              }), "Звёзды за задание"]
            }), i.jsxs("span", {
              className: "font-display text-lg font-bold text-honey-deep",
              children: [C, " / 6"]
            })]
          }), i.jsxs("button", {
            type: "button",
            onClick: () => k(!0),
            className: "btn btn-ghost w-full px-4 py-3 text-sm",
            children: [i.jsx($, {
              name: "bulb",
              className: "h-4.5 w-4.5"
            }), "Подсказка / Правила"]
          })]
        })]
      })]
    }), i.jsx("footer", {
      className: "bg-night text-cream",
      children: i.jsxs("div", {
        className: "mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-4 py-8 text-center sm:px-6",
        children: [i.jsxs("div", {
          className: "flex items-center gap-2",
          children: [i.jsx($, {
            name: "paw",
            className: "h-5 w-5 text-honey"
          }), i.jsx("span", {
            className: "font-display text-lg font-bold text-honey",
            children: "Academy Stars 2"
          }), i.jsx($, {
            name: "paw",
            className: "h-5 w-5 text-holo"
          })]
        }), i.jsx("p", {
          className: "max-w-xl text-sm font-bold text-cream/70",
          children: "Unit 1 · Lesson 4 · Reading — Find the key facts. Интерактивный урок на 45 минут · уровень A1 · 7–9 лет. Все факты — из текста «Wolves»."
        }), i.jsx("p", {
          className: "text-xs font-bold text-cream/40",
          children: "Карточка в архиве, а волки продолжают свой бег со скоростью 65 kph. Удачной экспедиции, исследователь!"
        })]
      })
    }), i.jsx(sy, {
      open: Y,
      onClose: () => k(!1)
    })]
  })
}
sx.createRoot(document.getElementById("root")).render(i.jsx(oe.StrictMode, {
  children: i.jsx(Ky, {})
}));