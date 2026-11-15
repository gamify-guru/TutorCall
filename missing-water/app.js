(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))m(R);new MutationObserver(R=>{for(const F of R)if(F.type==="childList")for(const ue of F.addedNodes)ue.tagName==="LINK"&&ue.rel==="modulepreload"&&m(ue)}).observe(document,{childList:!0,subtree:!0});function G(R){const F={};return R.integrity&&(F.integrity=R.integrity),R.referrerPolicy&&(F.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?F.credentials="include":R.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function m(R){if(R.ep)return;R.ep=!0;const F=G(R);fetch(R.href,F)}})();var Ji={exports:{}},En={};var tx;function pp(){if(tx)return En;tx=1;var O=Symbol.for("react.transitional.element"),H=Symbol.for("react.fragment");function G(m,R,F){var ue=null;if(F!==void 0&&(ue=""+F),R.key!==void 0&&(ue=""+R.key),"key"in R){F={};for(var ae in R)ae!=="key"&&(F[ae]=R[ae])}else F=R;return R=F.ref,{$$typeof:O,type:m,key:ue,ref:R!==void 0?R:null,props:F}}return En.Fragment=H,En.jsx=G,En.jsxs=G,En}var lx;function mp(){return lx||(lx=1,Ji.exports=pp()),Ji.exports}var n=mp(),Ui={exports:{}},xe={};var ax;function bp(){if(ax)return xe;ax=1;var O=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),E=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=E&&i[E]||i["@@iterator"],typeof i=="function"?i:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,_={};function me(i,h,w){this.props=i,this.context=h,this.refs=_,this.updater=w||te}me.prototype.isReactComponent={},me.prototype.setState=function(i,h){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,h,"setState")},me.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function Ne(){}Ne.prototype=me.prototype;function de(i,h,w){this.props=i,this.context=h,this.refs=_,this.updater=w||te}var z=de.prototype=new Ne;z.constructor=de,se(z,me.prototype),z.isPureReactComponent=!0;var ce=Array.isArray;function ee(){}var J={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function g(i,h,w){var V=w.ref;return{$$typeof:O,type:i,key:h,ref:V!==void 0?V:null,props:w}}function M(i,h){return g(i.type,h,i.props)}function I(i){return typeof i=="object"&&i!==null&&i.$$typeof===O}function Y(i){var h={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(w){return h[w]})}var Oe=/\/+/g;function be(i,h){return typeof i=="object"&&i!==null&&i.key!=null?Y(""+i.key):h.toString(36)}function W(i){switch(i.status){case"fulfilled":return i.value;case"rejected":throw i.reason;default:switch(typeof i.status=="string"?i.then(ee,ee):(i.status="pending",i.then(function(h){i.status==="pending"&&(i.status="fulfilled",i.value=h)},function(h){i.status==="pending"&&(i.status="rejected",i.reason=h)})),i.status){case"fulfilled":return i.value;case"rejected":throw i.reason}}throw i}function d(i,h,w,V,v){var C=typeof i;(C==="undefined"||C==="boolean")&&(i=null);var P=!1;if(i===null)P=!0;else switch(C){case"bigint":case"string":case"number":P=!0;break;case"object":switch(i.$$typeof){case O:case H:P=!0;break;case B:return P=i._init,d(P(i._payload),h,w,V,v)}}if(P)return v=v(i),P=V===""?"."+be(i,0):V,ce(v)?(w="",P!=null&&(w=P.replace(Oe,"$&/")+"/"),d(v,h,w,"",function(Ve){return Ve})):v!=null&&(I(v)&&(v=M(v,w+(v.key==null||i&&i.key===v.key?"":(""+v.key).replace(Oe,"$&/")+"/")+P)),h.push(v)),1;P=0;var ie=V===""?".":V+":";if(ce(i))for(var re=0;re<i.length;re++)V=i[re],C=ie+be(V,re),P+=d(V,h,w,C,v);else if(re=ne(i),typeof re=="function")for(i=re.call(i),re=0;!(V=i.next()).done;)V=V.value,C=ie+be(V,re++),P+=d(V,h,w,C,v);else if(C==="object"){if(typeof i.then=="function")return d(W(i),h,w,V,v);throw h=String(i),Error("Objects are not valid as a React child (found: "+(h==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":h)+"). If you meant to render a collection of children, use an array instead.")}return P}function r(i,h,w){if(i==null)return i;var V=[],v=0;return d(i,V,"","",function(C){return h.call(w,C,v++)}),V}function q(i){if(i._status===-1){var h=i._result;h=h(),h.then(function(w){(i._status===0||i._status===-1)&&(i._status=1,i._result=w)},function(w){(i._status===0||i._status===-1)&&(i._status=2,i._result=w)}),i._status===-1&&(i._status=0,i._result=h)}if(i._status===1)return i._result.default;throw i._result}var K=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var h=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(h))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},f={map:r,forEach:function(i,h,w){r(i,function(){h.apply(this,arguments)},w)},count:function(i){var h=0;return r(i,function(){h++}),h},toArray:function(i){return r(i,function(h){return h})||[]},only:function(i){if(!I(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};return xe.Activity=Z,xe.Children=f,xe.Component=me,xe.Fragment=G,xe.Profiler=R,xe.PureComponent=de,xe.StrictMode=m,xe.Suspense=U,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,xe.__COMPILER_RUNTIME={__proto__:null,c:function(i){return J.H.useMemoCache(i)}},xe.cache=function(i){return function(){return i.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(i,h,w){if(i==null)throw Error("The argument must be a React element, but you passed "+i+".");var V=se({},i.props),v=i.key;if(h!=null)for(C in h.key!==void 0&&(v=""+h.key),h)!Q.call(h,C)||C==="key"||C==="__self"||C==="__source"||C==="ref"&&h.ref===void 0||(V[C]=h[C]);var C=arguments.length-2;if(C===1)V.children=w;else if(1<C){for(var P=Array(C),ie=0;ie<C;ie++)P[ie]=arguments[ie+2];V.children=P}return g(i.type,v,V)},xe.createContext=function(i){return i={$$typeof:ue,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider=i,i.Consumer={$$typeof:F,_context:i},i},xe.createElement=function(i,h,w){var V,v={},C=null;if(h!=null)for(V in h.key!==void 0&&(C=""+h.key),h)Q.call(h,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(v[V]=h[V]);var P=arguments.length-2;if(P===1)v.children=w;else if(1<P){for(var ie=Array(P),re=0;re<P;re++)ie[re]=arguments[re+2];v.children=ie}if(i&&i.defaultProps)for(V in P=i.defaultProps,P)v[V]===void 0&&(v[V]=P[V]);return g(i,C,v)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(i){return{$$typeof:ae,render:i}},xe.isValidElement=I,xe.lazy=function(i){return{$$typeof:B,_payload:{_status:-1,_result:i},_init:q}},xe.memo=function(i,h){return{$$typeof:S,type:i,compare:h===void 0?null:h}},xe.startTransition=function(i){var h=J.T,w={};J.T=w;try{var V=i(),v=J.S;v!==null&&v(w,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ee,K)}catch(C){K(C)}finally{h!==null&&w.types!==null&&(h.types=w.types),J.T=h}},xe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},xe.use=function(i){return J.H.use(i)},xe.useActionState=function(i,h,w){return J.H.useActionState(i,h,w)},xe.useCallback=function(i,h){return J.H.useCallback(i,h)},xe.useContext=function(i){return J.H.useContext(i)},xe.useDebugValue=function(){},xe.useDeferredValue=function(i,h){return J.H.useDeferredValue(i,h)},xe.useEffect=function(i,h){return J.H.useEffect(i,h)},xe.useEffectEvent=function(i){return J.H.useEffectEvent(i)},xe.useId=function(){return J.H.useId()},xe.useImperativeHandle=function(i,h,w){return J.H.useImperativeHandle(i,h,w)},xe.useInsertionEffect=function(i,h){return J.H.useInsertionEffect(i,h)},xe.useLayoutEffect=function(i,h){return J.H.useLayoutEffect(i,h)},xe.useMemo=function(i,h){return J.H.useMemo(i,h)},xe.useOptimistic=function(i,h){return J.H.useOptimistic(i,h)},xe.useReducer=function(i,h,w){return J.H.useReducer(i,h,w)},xe.useRef=function(i){return J.H.useRef(i)},xe.useState=function(i){return J.H.useState(i)},xe.useSyncExternalStore=function(i,h,w){return J.H.useSyncExternalStore(i,h,w)},xe.useTransition=function(){return J.H.useTransition()},xe.version="19.2.6",xe}var nx;function _i(){return nx||(nx=1,Ui.exports=bp()),Ui.exports}var L=_i(),zi={exports:{}},Bn={},Gi={exports:{}},vi={};var cx;function jp(){return cx||(cx=1,(function(O){function H(d,r){var q=d.length;d.push(r);e:for(;0<q;){var K=q-1>>>1,f=d[K];if(0<R(f,r))d[K]=r,d[q]=f,q=K;else break e}}function G(d){return d.length===0?null:d[0]}function m(d){if(d.length===0)return null;var r=d[0],q=d.pop();if(q!==r){d[0]=q;e:for(var K=0,f=d.length,i=f>>>1;K<i;){var h=2*(K+1)-1,w=d[h],V=h+1,v=d[V];if(0>R(w,q))V<f&&0>R(v,w)?(d[K]=v,d[V]=q,K=V):(d[K]=w,d[h]=q,K=h);else if(V<f&&0>R(v,q))d[K]=v,d[V]=q,K=V;else break e}}return r}function R(d,r){var q=d.sortIndex-r.sortIndex;return q!==0?q:d.id-r.id}if(O.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var F=performance;O.unstable_now=function(){return F.now()}}else{var ue=Date,ae=ue.now();O.unstable_now=function(){return ue.now()-ae}}var U=[],S=[],B=1,Z=null,E=3,ne=!1,te=!1,se=!1,_=!1,me=typeof setTimeout=="function"?setTimeout:null,Ne=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function z(d){for(var r=G(S);r!==null;){if(r.callback===null)m(S);else if(r.startTime<=d)m(S),r.sortIndex=r.expirationTime,H(U,r);else break;r=G(S)}}function ce(d){if(se=!1,z(d),!te)if(G(U)!==null)te=!0,ee||(ee=!0,Y());else{var r=G(S);r!==null&&W(ce,r.startTime-d)}}var ee=!1,J=-1,Q=5,g=-1;function M(){return _?!0:!(O.unstable_now()-g<Q)}function I(){if(_=!1,ee){var d=O.unstable_now();g=d;var r=!0;try{e:{te=!1,se&&(se=!1,Ne(J),J=-1),ne=!0;var q=E;try{t:{for(z(d),Z=G(U);Z!==null&&!(Z.expirationTime>d&&M());){var K=Z.callback;if(typeof K=="function"){Z.callback=null,E=Z.priorityLevel;var f=K(Z.expirationTime<=d);if(d=O.unstable_now(),typeof f=="function"){Z.callback=f,z(d),r=!0;break t}Z===G(U)&&m(U),z(d)}else m(U);Z=G(U)}if(Z!==null)r=!0;else{var i=G(S);i!==null&&W(ce,i.startTime-d),r=!1}}break e}finally{Z=null,E=q,ne=!1}r=void 0}}finally{r?Y():ee=!1}}}var Y;if(typeof de=="function")Y=function(){de(I)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,be=Oe.port2;Oe.port1.onmessage=I,Y=function(){be.postMessage(null)}}else Y=function(){me(I,0)};function W(d,r){J=me(function(){d(O.unstable_now())},r)}O.unstable_IdlePriority=5,O.unstable_ImmediatePriority=1,O.unstable_LowPriority=4,O.unstable_NormalPriority=3,O.unstable_Profiling=null,O.unstable_UserBlockingPriority=2,O.unstable_cancelCallback=function(d){d.callback=null},O.unstable_forceFrameRate=function(d){0>d||125<d?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<d?Math.floor(1e3/d):5},O.unstable_getCurrentPriorityLevel=function(){return E},O.unstable_next=function(d){switch(E){case 1:case 2:case 3:var r=3;break;default:r=E}var q=E;E=r;try{return d()}finally{E=q}},O.unstable_requestPaint=function(){_=!0},O.unstable_runWithPriority=function(d,r){switch(d){case 1:case 2:case 3:case 4:case 5:break;default:d=3}var q=E;E=d;try{return r()}finally{E=q}},O.unstable_scheduleCallback=function(d,r,q){var K=O.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?K+q:K):q=K,d){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=q+f,d={id:B++,callback:r,priorityLevel:d,startTime:q,expirationTime:f,sortIndex:-1},q>K?(d.sortIndex=q,H(S,d),G(U)===null&&d===G(S)&&(se?(Ne(J),J=-1):se=!0,W(ce,q-K))):(d.sortIndex=f,H(U,d),te||ne||(te=!0,ee||(ee=!0,Y()))),d},O.unstable_shouldYield=M,O.unstable_wrapCallback=function(d){var r=E;return function(){var q=E;E=r;try{return d.apply(this,arguments)}finally{E=q}}}})(vi)),vi}var sx;function yp(){return sx||(sx=1,Gi.exports=jp()),Gi.exports}var Zi={exports:{}},ut={};var ux;function kp(){if(ux)return ut;ux=1;var O=_i();function H(U){var S="https://react.dev/errors/"+U;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)S+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+U+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(){}var m={d:{f:G,r:function(){throw Error(H(522))},D:G,C:G,L:G,m:G,X:G,S:G,M:G},p:0,findDOMNode:null},R=Symbol.for("react.portal");function F(U,S,B){var Z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:Z==null?null:""+Z,children:U,containerInfo:S,implementation:B}}var ue=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ae(U,S){if(U==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ut.createPortal=function(U,S){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(H(299));return F(U,S,null,B)},ut.flushSync=function(U){var S=ue.T,B=m.p;try{if(ue.T=null,m.p=2,U)return U()}finally{ue.T=S,m.p=B,m.d.f()}},ut.preconnect=function(U,S){typeof U=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,m.d.C(U,S))},ut.prefetchDNS=function(U){typeof U=="string"&&m.d.D(U)},ut.preinit=function(U,S){if(typeof U=="string"&&S&&typeof S.as=="string"){var B=S.as,Z=ae(B,S.crossOrigin),E=typeof S.integrity=="string"?S.integrity:void 0,ne=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;B==="style"?m.d.S(U,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:Z,integrity:E,fetchPriority:ne}):B==="script"&&m.d.X(U,{crossOrigin:Z,integrity:E,fetchPriority:ne,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},ut.preinitModule=function(U,S){if(typeof U=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var B=ae(S.as,S.crossOrigin);m.d.M(U,{crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&m.d.M(U)},ut.preload=function(U,S){if(typeof U=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var B=S.as,Z=ae(B,S.crossOrigin);m.d.L(U,B,{crossOrigin:Z,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},ut.preloadModule=function(U,S){if(typeof U=="string")if(S){var B=ae(S.as,S.crossOrigin);m.d.m(U,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else m.d.m(U)},ut.requestFormReset=function(U){m.d.r(U)},ut.unstable_batchedUpdates=function(U,S){return U(S)},ut.useFormState=function(U,S,B){return ue.H.useFormState(U,S,B)},ut.useFormStatus=function(){return ue.H.useHostTransitionStatus()},ut.version="19.2.6",ut}var ix;function Sp(){if(ix)return Zi.exports;ix=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(H){console.error(H)}}return O(),Zi.exports=kp(),Zi.exports}var ox;function wp(){if(ox)return Bn;ox=1;var O=yp(),H=_i(),G=Sp();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function F(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ue(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ae(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(F(e)!==e)throw Error(m(188))}function S(e){var t=e.alternate;if(!t){if(t=F(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var c=l.return;if(c===null)break;var s=c.alternate;if(s===null){if(a=c.return,a!==null){l=a;continue}break}if(c.child===s.child){for(s=c.child;s;){if(s===l)return U(c),e;if(s===a)return U(c),t;s=s.sibling}throw Error(m(188))}if(l.return!==a.return)l=c,a=s;else{for(var u=!1,o=c.child;o;){if(o===l){u=!0,l=c,a=s;break}if(o===a){u=!0,a=c,l=s;break}o=o.sibling}if(!u){for(o=s.child;o;){if(o===l){u=!0,l=s,a=c;break}if(o===a){u=!0,a=s,l=c;break}o=o.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var Z=Object.assign,E=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),te=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),Ne=Symbol.for("react.consumer"),de=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case me:return"Profiler";case _:return"StrictMode";case ce:return"Suspense";case ee:return"SuspenseList";case g:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case te:return"Portal";case de:return e.displayName||"Context";case Ne:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var W=Array.isArray,d=H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,r=G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},K=[],f=-1;function i(e){return{current:e}}function h(e){0>f||(e.current=K[f],K[f]=null,f--)}function w(e,t){f++,K[f]=e.current,e.current=t}var V=i(null),v=i(null),C=i(null),P=i(null);function ie(e,t){switch(w(C,t),w(v,e),w(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?O0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=O0(t),e=g0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}h(V),w(V,e)}function re(){h(V),h(v),h(C)}function Ve(e){e.memoizedState!==null&&w(P,e);var t=V.current,l=g0(t,e.type);t!==l&&(w(v,e),w(V,l))}function Re(e){v.current===e&&(h(V),h(v)),P.current===e&&(h(P),Pn._currentValue=q)}var ve,Be;function he(e){if(ve===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||"",Be=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ve+e+Be}var _e=!1;function it(e,t){if(!e||_e)return"";_e=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(N){var k=N}Reflect.construct(e,[],D)}else{try{D.call()}catch(N){k=N}e.call(D.prototype)}}else{try{throw Error()}catch(N){k=N}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(N){if(N&&k&&typeof N.stack=="string")return[N.stack,k.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),u=s[0],o=s[1];if(u&&o){var x=u.split(`
`),y=o.split(`
`);for(c=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;c<y.length&&!y[c].includes("DetermineComponentFrameRoot");)c++;if(a===x.length||c===y.length)for(a=x.length-1,c=y.length-1;1<=a&&0<=c&&x[a]!==y[c];)c--;for(;1<=a&&0<=c;a--,c--)if(x[a]!==y[c]){if(a!==1||c!==1)do if(a--,c--,0>c||x[a]!==y[c]){var T=`
`+x[a].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=a&&0<=c);break}}}finally{_e=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?he(l):""}function jt(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==t&&t!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return he("Activity");default:return""}}function Tt(e){try{var t="",l=null;do t+=jt(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Pt=Object.prototype.hasOwnProperty,rt=O.unstable_scheduleCallback,Ia=O.unstable_cancelCallback,bs=O.unstable_shouldYield,js=O.unstable_requestPaint,st=O.unstable_now,ys=O.unstable_getCurrentPriorityLevel,Qa=O.unstable_ImmediatePriority,Qn=O.unstable_UserBlockingPriority,ua=O.unstable_NormalPriority,Xn=O.unstable_LowPriority,Xa=O.unstable_IdlePriority,Ya=O.log,ks=O.unstable_setDisableYieldValue,Kl=null,yt=null;function hl(e){if(typeof Ya=="function"&&ks(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Kl,e)}catch{}}var kt=Math.clz32?Math.clz32:ef,_x=Math.log,$x=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(_x(e)/$x|0)|0}var Yn=256,_n=262144,$n=4194304;function Pl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ec(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var c=0,s=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~s,a!==0?c=Pl(a):(u&=o,u!==0?c=Pl(u):l||(l=o&~e,l!==0&&(c=Pl(l))))):(o=a&~s,o!==0?c=Pl(o):u!==0?c=Pl(u):l||(l=a&~e,l!==0&&(c=Pl(l)))),c===0?0:t!==0&&t!==c&&(t&s)===0&&(s=c&-c,l=t&-t,s>=l||s===32&&(l&4194048)!==0)?t:c}function _a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function no(){var e=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),e}function Ss(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function $a(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lf(e,t,l,a,c,s){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,x=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var T=31-kt(l),D=1<<T;o[T]=0,x[T]=-1;var k=y[T];if(k!==null)for(y[T]=null,T=0;T<k.length;T++){var N=k[T];N!==null&&(N.lane&=-536870913)}l&=~D}a!==0&&co(e,a,0),s!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~t))}function co(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-kt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function so(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-kt(l),c=1<<a;c&t|e[a]&t&&(e[a]|=t),l&=~c}}function uo(e,t){var l=t&-t;return l=(l&42)!==0?1:ws(l),(l&(e.suspendedLanes|t))!==0?0:l}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function io(){var e=r.p;return e!==0?e:(e=window.event,e===void 0?32:I0(e.type))}function oo(e,t){var l=r.p;try{return r.p=e,t()}finally{r.p=l}}var pl=Math.random().toString(36).slice(2),tt="__reactFiber$"+pl,dt="__reactProps$"+pl,ia="__reactContainer$"+pl,Os="__reactEvents$"+pl,af="__reactListeners$"+pl,nf="__reactHandles$"+pl,ro="__reactResources$"+pl,en="__reactMarker$"+pl;function gs(e){delete e[tt],delete e[dt],delete e[Os],delete e[af],delete e[nf]}function oa(e){var t=e[tt];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ia]||l[tt]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=V0(e);e!==null;){if(l=e[tt])return l;e=V0(e)}return t}e=l,l=e.parentNode}return null}function ra(e){if(e=e[tt]||e[ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function da(e){var t=e[ro];return t||(t=e[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[en]=!0}var xo=new Set,fo={};function Ml(e,t){xa(e,t),xa(e+"Capture",t)}function xa(e,t){for(fo[e]=t,e=0;e<t.length;e++)xo.add(t[e])}var cf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},po={};function sf(e){return Pt.call(po,e)?!0:Pt.call(ho,e)?!1:cf.test(e)?po[e]=!0:(ho[e]=!0,!1)}function tc(e,t,l){if(sf(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function lc(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Xt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(u){l=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){if(!e._valueTracker){var t=mo(e)?"checked":"value";e._valueTracker=uf(e,t,""+e[t])}}function bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=mo(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ac(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var of=/[\n"\\]/g;function At(e){return e.replace(of,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qs(e,t,l,a,c,s,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Ts(e,u,Rt(t)):l!=null?Ts(e,u,Rt(l)):a!=null&&e.removeAttribute("value"),c==null&&s!=null&&(e.defaultChecked=!!s),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Rt(o):e.removeAttribute("name")}function jo(e,t,l,a,c,s,u,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Hs(e);return}l=l!=null?""+Rt(l):"",t=t!=null?""+Rt(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??c,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Hs(e)}function Ts(e,t,l){t==="number"&&ac(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function fa(e,t,l,a){if(e=e.options,t){t={};for(var c=0;c<l.length;c++)t["$"+l[c]]=!0;for(l=0;l<e.length;l++)c=t.hasOwnProperty("$"+e[l].value),e[l].selected!==c&&(e[l].selected=c),c&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Rt(l),t=null,c=0;c<e.length;c++){if(e[c].value===l){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function yo(e,t,l){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Rt(l):""}function ko(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(W(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Rt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Hs(e)}function ha(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var rf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function So(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||rf.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function wo(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var c in t)a=t[c],t.hasOwnProperty(c)&&l[c]!==a&&So(e,c,a)}else for(var s in t)t.hasOwnProperty(s)&&So(e,s,t[s])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nc(e){return xf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var As=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ma=null;function No(e){var t=ra(e);if(t&&(e=t.stateNode)){var l=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(qs(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var c=a[dt]||null;if(!c)throw Error(m(90));qs(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&bo(a)}break e;case"textarea":yo(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&fa(e,!!l.multiple,t,!1)}}}var Vs=!1;function Oo(e,t,l){if(Vs)return e(t,l);Vs=!0;try{var a=e(t);return a}finally{if(Vs=!1,(pa!==null||ma!==null)&&(Bc(),pa&&(t=pa,e=ma,ma=pa=null,No(t),e)))for(t=0;t<e.length;t++)No(e[t])}}function ln(e,t){var l=e.stateNode;if(l===null)return null;var a=l[dt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=!1;if(_t)try{var an={};Object.defineProperty(an,"passive",{get:function(){Js=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Js=!1}var ml=null,Us=null,cc=null;function go(){if(cc)return cc;var e,t=Us,l=t.length,a,c="value"in ml?ml.value:ml.textContent,s=c.length;for(e=0;e<l&&t[e]===c[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===c[s-a];a++);return cc=c.slice(e,1<a?1-a:void 0)}function sc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uc(){return!0}function Ho(){return!1}function xt(e){function t(l,a,c,s,u){this._reactName=l,this._targetInst=c,this.type=a,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uc:Ho,this.isPropagationStopped=Ho,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),t}var Cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=xt(Cl),nn=Z({},Cl,{view:0,detail:0}),ff=xt(nn),zs,Gs,cn,oc=Z({},nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cn&&(cn&&e.type==="mousemove"?(zs=e.screenX-cn.screenX,Gs=e.screenY-cn.screenY):Gs=zs=0,cn=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),qo=xt(oc),hf=Z({},oc,{dataTransfer:0}),pf=xt(hf),mf=Z({},nn,{relatedTarget:0}),vs=xt(mf),bf=Z({},Cl,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=xt(bf),yf=Z({},Cl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kf=xt(yf),Sf=Z({},Cl,{data:0}),To=xt(Sf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function Zs(){return gf}var Hf=Z({},nn,{key:function(e){if(e.key){var t=wf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?sc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qf=xt(Hf),Tf=Z({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=xt(Tf),Rf=Z({},nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Af=xt(Rf),Df=Z({},Cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=xt(Df),Jf=Z({},oc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=xt(Jf),zf=Z({},Cl,{newState:0,oldState:0}),Gf=xt(zf),vf=[9,13,27,32],Ks=_t&&"CompositionEvent"in window,sn=null;_t&&"documentMode"in document&&(sn=document.documentMode);var Zf=_t&&"TextEvent"in window&&!sn,Ao=_t&&(!Ks||sn&&8<sn&&11>=sn),Do=" ",Vo=!1;function Jo(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function Kf(e,t){switch(e){case"compositionend":return Uo(t);case"keypress":return t.which!==32?null:(Vo=!0,Do);case"textInput":return e=t.data,e===Do&&Vo?null:e;default:return null}}function Pf(e,t){if(ba)return e==="compositionend"||!Ks&&Jo(e,t)?(e=go(),cc=Us=ml=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ao&&t.locale!=="ko"?null:t.data;default:return null}}var Mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mf[e.type]:t==="textarea"}function Go(e,t,l,a){pa?ma?ma.push(a):ma=[a]:pa=a,t=_c(t,"onChange"),0<t.length&&(l=new ic("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var un=null,on=null;function Cf(e){j0(e,0)}function rc(e){var t=tn(e);if(bo(t))return e}function vo(e,t){if(e==="change")return t}var Zo=!1;if(_t){var Ps;if(_t){var Ms="oninput"in document;if(!Ms){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),Ms=typeof Ko.oninput=="function"}Ps=Ms}else Ps=!1;Zo=Ps&&(!document.documentMode||9<document.documentMode)}function Po(){un&&(un.detachEvent("onpropertychange",Mo),on=un=null)}function Mo(e){if(e.propertyName==="value"&&rc(on)){var t=[];Go(t,on,e,Ds(e)),Oo(Cf,t)}}function Lf(e,t,l){e==="focusin"?(Po(),un=t,on=l,un.attachEvent("onpropertychange",Mo)):e==="focusout"&&Po()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rc(on)}function Bf(e,t){if(e==="click")return rc(t)}function Wf(e,t){if(e==="input"||e==="change")return rc(t)}function Ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Ff;function rn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var c=l[a];if(!Pt.call(t,c)||!St(e[c],t[c]))return!1}return!0}function Co(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lo(e,t){var l=Co(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Co(l)}}function Eo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ac(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ac(e.document)}return t}function Cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var If=_t&&"documentMode"in document&&11>=document.documentMode,ja=null,Ls=null,dn=null,Es=!1;function Wo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Es||ja==null||ja!==ac(a)||(a=ja,"selectionStart"in a&&Cs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dn&&rn(dn,a)||(dn=a,a=_c(Ls,"onSelect"),0<a.length&&(t=new ic("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ja)))}function Ll(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ya={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionrun:Ll("Transition","TransitionRun"),transitionstart:Ll("Transition","TransitionStart"),transitioncancel:Ll("Transition","TransitionCancel"),transitionend:Ll("Transition","TransitionEnd")},Bs={},Fo={};_t&&(Fo=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function El(e){if(Bs[e])return Bs[e];if(!ya[e])return e;var t=ya[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Fo)return Bs[e]=t[l];return e}var Io=El("animationend"),Qo=El("animationiteration"),Xo=El("animationstart"),Qf=El("transitionrun"),Xf=El("transitionstart"),Yf=El("transitioncancel"),Yo=El("transitionend"),_o=new Map,Ws="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ws.push("scrollEnd");function Mt(e,t){_o.set(e,t),Ml(t,[e])}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],ka=0,Fs=0;function xc(){for(var e=ka,t=Fs=ka=0;t<e;){var l=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var c=Dt[t];Dt[t++]=null;var s=Dt[t];if(Dt[t++]=null,a!==null&&c!==null){var u=a.pending;u===null?c.next=c:(c.next=u.next,u.next=c),a.pending=c}s!==0&&$o(l,c,s)}}function fc(e,t,l,a){Dt[ka++]=e,Dt[ka++]=t,Dt[ka++]=l,Dt[ka++]=a,Fs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Is(e,t,l,a){return fc(e,t,l,a),hc(e)}function Bl(e,t){return fc(e,null,null,t),hc(e)}function $o(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var c=!1,s=e.return;s!==null;)s.childLanes|=l,a=s.alternate,a!==null&&(a.childLanes|=l),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(c=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,c&&t!==null&&(c=31-kt(l),e=s.hiddenUpdates,a=e[c],a===null?e[c]=[t]:a.push(t),t.lane=l|536870912),s):null}function hc(e){if(50<Jn)throw Jn=0,ai=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sa={};function _f(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,l,a){return new _f(e,t,l,a)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $t(e,t){var l=e.alternate;return l===null?(l=wt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function er(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pc(e,t,l,a,c,s){var u=0;if(a=e,typeof e=="function")Qs(e)&&(u=1);else if(typeof e=="string")u=ap(e,l,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return e=wt(31,l,t,c),e.elementType=g,e.lanes=s,e;case se:return Wl(l.children,c,s,t);case _:u=8,c|=24;break;case me:return e=wt(12,l,t,c|2),e.elementType=me,e.lanes=s,e;case ce:return e=wt(13,l,t,c),e.elementType=ce,e.lanes=s,e;case ee:return e=wt(19,l,t,c),e.elementType=ee,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:u=10;break e;case Ne:u=9;break e;case z:u=11;break e;case J:u=14;break e;case Q:u=16,a=null;break e}u=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=wt(u,l,t,c),t.elementType=e,t.type=a,t.lanes=s,t}function Wl(e,t,l,a){return e=wt(7,e,a,t),e.lanes=l,e}function Xs(e,t,l){return e=wt(6,e,null,t),e.lanes=l,e}function tr(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function Ys(e,t,l){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lr=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var l=lr.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Tt(t)},lr.set(e,t),t)}return{value:e,source:t,stack:Tt(t)}}var wa=[],Na=0,mc=null,xn=0,Jt=[],Ut=0,bl=null,Et=1,Bt="";function el(e,t){wa[Na++]=xn,wa[Na++]=mc,mc=e,xn=t}function ar(e,t,l){Jt[Ut++]=Et,Jt[Ut++]=Bt,Jt[Ut++]=bl,bl=e;var a=Et;e=Bt;var c=32-kt(a)-1;a&=~(1<<c),l+=1;var s=32-kt(t)+c;if(30<s){var u=c-c%5;s=(a&(1<<u)-1).toString(32),a>>=u,c-=u,Et=1<<32-kt(t)+c|l<<c|a,Bt=s+e}else Et=1<<s|l<<c|a,Bt=e}function _s(e){e.return!==null&&(el(e,1),ar(e,1,0))}function $s(e){for(;e===mc;)mc=wa[--Na],wa[Na]=null,xn=wa[--Na],wa[Na]=null;for(;e===bl;)bl=Jt[--Ut],Jt[Ut]=null,Bt=Jt[--Ut],Jt[Ut]=null,Et=Jt[--Ut],Jt[Ut]=null}function nr(e,t){Jt[Ut++]=Et,Jt[Ut++]=Bt,Jt[Ut++]=bl,Et=t.id,Bt=t.overflow,bl=e}var lt=null,Ze=null,we=!1,jl=null,zt=!1,eu=Error(m(519));function yl(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fn(Vt(t,e)),eu}function cr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[tt]=e,t[dt]=a,l){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(l=0;l<zn.length;l++)ye(zn[l],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),jo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),ko(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||w0(t.textContent,l)?(a.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),a.onScroll!=null&&ye("scroll",t),a.onScrollEnd!=null&&ye("scrollend",t),a.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||yl(e,!0)}function sr(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:lt=lt.return}}function Oa(e){if(e!==lt)return!1;if(!we)return sr(e),we=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ji(e.type,e.memoizedProps)),l=!l),l&&Ze&&yl(e),sr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));Ze=D0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));Ze=D0(e)}else t===27?(t=Ze,Jl(e.type)?(e=Ni,Ni=null,Ze=e):Ze=t):Ze=lt?vt(e.stateNode.nextSibling):null;return!0}function Fl(){Ze=lt=null,we=!1}function tu(){var e=jl;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),jl=null),e}function fn(e){jl===null?jl=[e]:jl.push(e)}var lu=i(null),Il=null,tl=null;function kl(e,t,l){w(lu,t._currentValue),t._currentValue=l}function ll(e){e._currentValue=lu.current,h(lu)}function au(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function nu(e,t,l,a){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var s=c.dependencies;if(s!==null){var u=c.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=c;for(var x=0;x<t.length;x++)if(o.context===t[x]){s.lanes|=l,o=s.alternate,o!==null&&(o.lanes|=l),au(s.return,l,e),a||(u=null);break e}s=o.next}}else if(c.tag===18){if(u=c.return,u===null)throw Error(m(341));u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),au(u,l,e),u=null}else u=c.child;if(u!==null)u.return=c;else for(u=c;u!==null;){if(u===e){u=null;break}if(c=u.sibling,c!==null){c.return=u.return,u=c;break}u=u.return}c=u}}function ga(e,t,l,a){e=null;for(var c=t,s=!1;c!==null;){if(!s){if((c.flags&524288)!==0)s=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var u=c.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var o=c.type;St(c.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(c===P.current){if(u=c.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Pn):e=[Pn])}c=c.return}e!==null&&nu(t,e,l,a),t.flags|=262144}function bc(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ql(e){Il=e,tl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return ur(Il,e)}function jc(e,t){return Il===null&&Ql(e),ur(e,t)}function ur(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},tl===null){if(e===null)throw Error(m(308));tl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else tl=tl.next=t;return l}var $f=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},eh=O.unstable_scheduleCallback,th=O.unstable_NormalPriority,We={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new $f,data:new Map,refCount:0}}function hn(e){e.refCount--,e.refCount===0&&eh(th,function(){e.controller.abort()})}var pn=null,su=0,Ha=0,qa=null;function lh(e,t){if(pn===null){var l=pn=[];su=0,Ha=oi(),qa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return su++,t.then(ir,ir),t}function ir(){if(--su===0&&pn!==null){qa!==null&&(qa.status="fulfilled");var e=pn;pn=null,Ha=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ah(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(c){l.push(c)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var c=0;c<l.length;c++)(0,l[c])(t)},function(c){for(a.status="rejected",a.reason=c,c=0;c<l.length;c++)(0,l[c])(void 0)}),a}var or=d.S;d.S=function(e,t){Wd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lh(e,t),or!==null&&or(e,t)};var Xl=i(null);function uu(){var e=Xl.current;return e!==null?e:Ge.pooledCache}function yc(e,t){t===null?w(Xl,Xl.current):w(Xl,t.pool)}function rr(){var e=uu();return e===null?null:{parent:We._currentValue,pool:e}}var Ta=Error(m(460)),iu=Error(m(474)),kc=Error(m(542)),Sc={then:function(){}};function dr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xr(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Yt,Yt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hr(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=a}},function(a){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hr(e),e}throw _l=t,Ta}}function Yl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(_l=l,Ta):l}}var _l=null;function fr(){if(_l===null)throw Error(m(459));var e=_l;return _l=null,e}function hr(e){if(e===Ta||e===kc)throw Error(m(483))}var Ra=null,mn=0;function wc(e){var t=mn;return mn+=1,Ra===null&&(Ra=[]),xr(Ra,e,t)}function bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nc(e,t){throw t.$$typeof===E?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pr(e){function t(b,p){if(e){var j=b.deletions;j===null?(b.deletions=[p],b.flags|=16):j.push(p)}}function l(b,p){if(!e)return null;for(;p!==null;)t(b,p),p=p.sibling;return null}function a(b){for(var p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function c(b,p){return b=$t(b,p),b.index=0,b.sibling=null,b}function s(b,p,j){return b.index=j,e?(j=b.alternate,j!==null?(j=j.index,j<p?(b.flags|=67108866,p):j):(b.flags|=67108866,p)):(b.flags|=1048576,p)}function u(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,p,j,A){return p===null||p.tag!==6?(p=Xs(j,b.mode,A),p.return=b,p):(p=c(p,j),p.return=b,p)}function x(b,p,j,A){var le=j.type;return le===se?T(b,p,j.props.children,A,j.key):p!==null&&(p.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Q&&Yl(le)===p.type)?(p=c(p,j.props),bn(p,j),p.return=b,p):(p=pc(j.type,j.key,j.props,null,b.mode,A),bn(p,j),p.return=b,p)}function y(b,p,j,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==j.containerInfo||p.stateNode.implementation!==j.implementation?(p=Ys(j,b.mode,A),p.return=b,p):(p=c(p,j.children||[]),p.return=b,p)}function T(b,p,j,A,le){return p===null||p.tag!==7?(p=Wl(j,b.mode,A,le),p.return=b,p):(p=c(p,j),p.return=b,p)}function D(b,p,j){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Xs(""+p,b.mode,j),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ne:return j=pc(p.type,p.key,p.props,null,b.mode,j),bn(j,p),j.return=b,j;case te:return p=Ys(p,b.mode,j),p.return=b,p;case Q:return p=Yl(p),D(b,p,j)}if(W(p)||Y(p))return p=Wl(p,b.mode,j,null),p.return=b,p;if(typeof p.then=="function")return D(b,wc(p),j);if(p.$$typeof===de)return D(b,jc(b,p),j);Nc(b,p)}return null}function k(b,p,j,A){var le=p!==null?p.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return le!==null?null:o(b,p,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:return j.key===le?x(b,p,j,A):null;case te:return j.key===le?y(b,p,j,A):null;case Q:return j=Yl(j),k(b,p,j,A)}if(W(j)||Y(j))return le!==null?null:T(b,p,j,A,null);if(typeof j.then=="function")return k(b,p,wc(j),A);if(j.$$typeof===de)return k(b,p,jc(b,j),A);Nc(b,j)}return null}function N(b,p,j,A,le){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return b=b.get(j)||null,o(p,b,""+A,le);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ne:return b=b.get(A.key===null?j:A.key)||null,x(p,b,A,le);case te:return b=b.get(A.key===null?j:A.key)||null,y(p,b,A,le);case Q:return A=Yl(A),N(b,p,j,A,le)}if(W(A)||Y(A))return b=b.get(j)||null,T(p,b,A,le,null);if(typeof A.then=="function")return N(b,p,j,wc(A),le);if(A.$$typeof===de)return N(b,p,j,jc(p,A),le);Nc(p,A)}return null}function X(b,p,j,A){for(var le=null,He=null,$=p,pe=p=0,Se=null;$!==null&&pe<j.length;pe++){$.index>pe?(Se=$,$=null):Se=$.sibling;var qe=k(b,$,j[pe],A);if(qe===null){$===null&&($=Se);break}e&&$&&qe.alternate===null&&t(b,$),p=s(qe,p,pe),He===null?le=qe:He.sibling=qe,He=qe,$=Se}if(pe===j.length)return l(b,$),we&&el(b,pe),le;if($===null){for(;pe<j.length;pe++)$=D(b,j[pe],A),$!==null&&(p=s($,p,pe),He===null?le=$:He.sibling=$,He=$);return we&&el(b,pe),le}for($=a($);pe<j.length;pe++)Se=N($,b,pe,j[pe],A),Se!==null&&(e&&Se.alternate!==null&&$.delete(Se.key===null?pe:Se.key),p=s(Se,p,pe),He===null?le=Se:He.sibling=Se,He=Se);return e&&$.forEach(function(Zl){return t(b,Zl)}),we&&el(b,pe),le}function oe(b,p,j,A){if(j==null)throw Error(m(151));for(var le=null,He=null,$=p,pe=p=0,Se=null,qe=j.next();$!==null&&!qe.done;pe++,qe=j.next()){$.index>pe?(Se=$,$=null):Se=$.sibling;var Zl=k(b,$,qe.value,A);if(Zl===null){$===null&&($=Se);break}e&&$&&Zl.alternate===null&&t(b,$),p=s(Zl,p,pe),He===null?le=Zl:He.sibling=Zl,He=Zl,$=Se}if(qe.done)return l(b,$),we&&el(b,pe),le;if($===null){for(;!qe.done;pe++,qe=j.next())qe=D(b,qe.value,A),qe!==null&&(p=s(qe,p,pe),He===null?le=qe:He.sibling=qe,He=qe);return we&&el(b,pe),le}for($=a($);!qe.done;pe++,qe=j.next())qe=N($,b,pe,qe.value,A),qe!==null&&(e&&qe.alternate!==null&&$.delete(qe.key===null?pe:qe.key),p=s(qe,p,pe),He===null?le=qe:He.sibling=qe,He=qe);return e&&$.forEach(function(hp){return t(b,hp)}),we&&el(b,pe),le}function ze(b,p,j,A){if(typeof j=="object"&&j!==null&&j.type===se&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:e:{for(var le=j.key;p!==null;){if(p.key===le){if(le=j.type,le===se){if(p.tag===7){l(b,p.sibling),A=c(p,j.props.children),A.return=b,b=A;break e}}else if(p.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Q&&Yl(le)===p.type){l(b,p.sibling),A=c(p,j.props),bn(A,j),A.return=b,b=A;break e}l(b,p);break}else t(b,p);p=p.sibling}j.type===se?(A=Wl(j.props.children,b.mode,A,j.key),A.return=b,b=A):(A=pc(j.type,j.key,j.props,null,b.mode,A),bn(A,j),A.return=b,b=A)}return u(b);case te:e:{for(le=j.key;p!==null;){if(p.key===le)if(p.tag===4&&p.stateNode.containerInfo===j.containerInfo&&p.stateNode.implementation===j.implementation){l(b,p.sibling),A=c(p,j.children||[]),A.return=b,b=A;break e}else{l(b,p);break}else t(b,p);p=p.sibling}A=Ys(j,b.mode,A),A.return=b,b=A}return u(b);case Q:return j=Yl(j),ze(b,p,j,A)}if(W(j))return X(b,p,j,A);if(Y(j)){if(le=Y(j),typeof le!="function")throw Error(m(150));return j=le.call(j),oe(b,p,j,A)}if(typeof j.then=="function")return ze(b,p,wc(j),A);if(j.$$typeof===de)return ze(b,p,jc(b,j),A);Nc(b,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,p!==null&&p.tag===6?(l(b,p.sibling),A=c(p,j),A.return=b,b=A):(l(b,p),A=Xs(j,b.mode,A),A.return=b,b=A),u(b)):l(b,p)}return function(b,p,j,A){try{mn=0;var le=ze(b,p,j,A);return Ra=null,le}catch($){if($===Ta||$===kc)throw $;var He=wt(29,$,null,b.mode);return He.lanes=A,He.return=b,He}}}var $l=pr(!0),mr=pr(!1),Sl=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,t=hc(e),$o(e,null,l),t}return fc(e,a,t,l),hc(e)}function jn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,so(e,l)}}function du(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var c=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?c=s=u:s=s.next=u,l=l.next}while(l!==null);s===null?c=s=t:s=s.next=t}else c=s=t;l={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var xu=!1;function yn(){if(xu){var e=qa;if(e!==null)throw e}}function kn(e,t,l,a){xu=!1;var c=e.updateQueue;Sl=!1;var s=c.firstBaseUpdate,u=c.lastBaseUpdate,o=c.shared.pending;if(o!==null){c.shared.pending=null;var x=o,y=x.next;x.next=null,u===null?s=y:u.next=y,u=x;var T=e.alternate;T!==null&&(T=T.updateQueue,o=T.lastBaseUpdate,o!==u&&(o===null?T.firstBaseUpdate=y:o.next=y,T.lastBaseUpdate=x))}if(s!==null){var D=c.baseState;u=0,T=y=x=null,o=s;do{var k=o.lane&-536870913,N=k!==o.lane;if(N?(ke&k)===k:(a&k)===k){k!==0&&k===Ha&&(xu=!0),T!==null&&(T=T.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var X=e,oe=o;k=t;var ze=l;switch(oe.tag){case 1:if(X=oe.payload,typeof X=="function"){D=X.call(ze,D,k);break e}D=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=oe.payload,k=typeof X=="function"?X.call(ze,D,k):X,k==null)break e;D=Z({},D,k);break e;case 2:Sl=!0}}k=o.callback,k!==null&&(e.flags|=64,N&&(e.flags|=8192),N=c.callbacks,N===null?c.callbacks=[k]:N.push(k))}else N={lane:k,tag:o.tag,payload:o.payload,callback:o.callback,next:null},T===null?(y=T=N,x=D):T=T.next=N,u|=k;if(o=o.next,o===null){if(o=c.shared.pending,o===null)break;N=o,o=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);T===null&&(x=D),c.baseState=x,c.firstBaseUpdate=y,c.lastBaseUpdate=T,s===null&&(c.shared.lanes=0),Tl|=u,e.lanes=u,e.memoizedState=D}}function br(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function jr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)br(l[e],t)}var Aa=i(null),Oc=i(0);function yr(e,t){e=dl,w(Oc,e),w(Aa,t),dl=e|t.baseLanes}function fu(){w(Oc,dl),w(Aa,Aa.current)}function hu(){dl=Oc.current,h(Aa),h(Oc)}var Nt=i(null),Gt=null;function Ol(e){var t=e.alternate;w(Le,Le.current&1),w(Nt,e),Gt===null&&(t===null||Aa.current!==null||t.memoizedState!==null)&&(Gt=e)}function pu(e){w(Le,Le.current),w(Nt,e),Gt===null&&(Gt=e)}function kr(e){e.tag===22?(w(Le,Le.current),w(Nt,e),Gt===null&&(Gt=e)):gl()}function gl(){w(Le,Le.current),w(Nt,Nt.current)}function Ot(e){h(Nt),Gt===e&&(Gt=null),h(Le)}var Le=i(0);function gc(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Si(l)||wi(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=0,fe=null,Je=null,Fe=null,Hc=!1,Da=!1,ea=!1,qc=0,Sn=0,Va=null,nh=0;function Me(){throw Error(m(321))}function mu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!St(e[l],t[l]))return!1;return!0}function bu(e,t,l,a,c,s){return al=s,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,d.H=e===null||e.memoizedState===null?ad:Vu,ea=!1,s=l(a,c),ea=!1,Da&&(s=wr(t,l,a,c)),Sr(e),s}function Sr(e){d.H=On;var t=Je!==null&&Je.next!==null;if(al=0,Fe=Je=fe=null,Hc=!1,Sn=0,Va=null,t)throw Error(m(300));e===null||Ie||(e=e.dependencies,e!==null&&bc(e)&&(Ie=!0))}function wr(e,t,l,a){fe=e;var c=0;do{if(Da&&(Va=null),Sn=0,Da=!1,25<=c)throw Error(m(301));if(c+=1,Fe=Je=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}d.H=nd,s=t(l,a)}while(Da);return s}function ch(){var e=d.H,t=e.useState()[0];return t=typeof t.then=="function"?wn(t):t,e=e.useState()[0],(Je!==null?Je.memoizedState:null)!==e&&(fe.flags|=1024),t}function ju(){var e=qc!==0;return qc=0,e}function yu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function ku(e){if(Hc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hc=!1}al=0,Fe=Je=fe=null,Da=!1,Sn=qc=0,Va=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?fe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ee(){if(Je===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=Fe===null?fe.memoizedState:Fe.next;if(t!==null)Fe=t,Je=e;else{if(e===null)throw fe.alternate===null?Error(m(467)):Error(m(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Fe===null?fe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wn(e){var t=Sn;return Sn+=1,Va===null&&(Va=[]),e=xr(Va,e,t),t=fe,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,d.H=t===null||t.memoizedState===null?ad:Vu),e}function Rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wn(e);if(e.$$typeof===de)return at(e)}throw Error(m(438,String(e)))}function Su(e){var t=null,l=fe.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Tc(),fe.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=M;return t.index++,l}function nl(e,t){return typeof t=="function"?t(e):t}function Ac(e){var t=Ee();return wu(t,Je,e)}function wu(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var c=e.baseQueue,s=a.pending;if(s!==null){if(c!==null){var u=c.next;c.next=s.next,s.next=u}t.baseQueue=c=s,a.pending=null}if(s=e.baseState,c===null)e.memoizedState=s;else{t=c.next;var o=u=null,x=null,y=t,T=!1;do{var D=y.lane&-536870913;if(D!==y.lane?(ke&D)===D:(al&D)===D){var k=y.revertLane;if(k===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),D===Ha&&(T=!0);else if((al&k)===k){y=y.next,k===Ha&&(T=!0);continue}else D={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},x===null?(o=x=D,u=s):x=x.next=D,fe.lanes|=k,Tl|=k;D=y.action,ea&&l(s,D),s=y.hasEagerState?y.eagerState:l(s,D)}else k={lane:D,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},x===null?(o=x=k,u=s):x=x.next=k,fe.lanes|=D,Tl|=D;y=y.next}while(y!==null&&y!==t);if(x===null?u=s:x.next=o,!St(s,e.memoizedState)&&(Ie=!0,T&&(l=qa,l!==null)))throw l;e.memoizedState=s,e.baseState=u,e.baseQueue=x,a.lastRenderedState=s}return c===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Nu(e){var t=Ee(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,c=l.pending,s=t.memoizedState;if(c!==null){l.pending=null;var u=c=c.next;do s=e(s,u.action),u=u.next;while(u!==c);St(s,t.memoizedState)||(Ie=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),l.lastRenderedState=s}return[s,a]}function Nr(e,t,l){var a=fe,c=Ee(),s=we;if(s){if(l===void 0)throw Error(m(407));l=l()}else l=t();var u=!St((Je||c).memoizedState,l);if(u&&(c.memoizedState=l,Ie=!0),c=c.queue,Hu(Hr.bind(null,a,c,e),[e]),c.getSnapshot!==t||u||Fe!==null&&Fe.memoizedState.tag&1){if(a.flags|=2048,Ja(9,{destroy:void 0},gr.bind(null,a,c,l,t),null),Ge===null)throw Error(m(349));s||(al&127)!==0||Or(a,t,l)}return l}function Or(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=fe.updateQueue,t===null?(t=Tc(),fe.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function gr(e,t,l,a){t.value=l,t.getSnapshot=a,qr(t)&&Tr(e)}function Hr(e,t,l){return l(function(){qr(t)&&Tr(e)})}function qr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!St(e,l)}catch{return!0}}function Tr(e){var t=Bl(e,2);t!==null&&bt(t,e,2)}function Ou(e){var t=ot();if(typeof e=="function"){var l=e;if(e=l(),ea){hl(!0);try{l()}finally{hl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:e},t}function Rr(e,t,l,a){return e.baseState=l,wu(e,Je,typeof a=="function"?a:nl)}function sh(e,t,l,a,c){if(Jc(e))throw Error(m(485));if(e=t.action,e!==null){var s={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};d.T!==null?l(!0):s.isTransition=!1,a(s),l=t.pending,l===null?(s.next=t.pending=s,Ar(t,s)):(s.next=l.next,t.pending=l.next=s)}}function Ar(e,t){var l=t.action,a=t.payload,c=e.state;if(t.isTransition){var s=d.T,u={};d.T=u;try{var o=l(c,a),x=d.S;x!==null&&x(u,o),Dr(e,t,o)}catch(y){gu(e,t,y)}finally{s!==null&&u.types!==null&&(s.types=u.types),d.T=s}}else try{s=l(c,a),Dr(e,t,s)}catch(y){gu(e,t,y)}}function Dr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Vr(e,t,a)},function(a){return gu(e,t,a)}):Vr(e,t,l)}function Vr(e,t,l){t.status="fulfilled",t.value=l,Jr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Ar(e,l)))}function gu(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Jr(t),t=t.next;while(t!==a)}e.action=null}function Jr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ur(e,t){return t}function zr(e,t){if(we){var l=Ge.formState;if(l!==null){e:{var a=fe;if(we){if(Ze){t:{for(var c=Ze,s=zt;c.nodeType!==8;){if(!s){c=null;break t}if(c=vt(c.nextSibling),c===null){c=null;break t}}s=c.data,c=s==="F!"||s==="F"?c:null}if(c){Ze=vt(c.nextSibling),a=c.data==="F!";break e}}yl(a)}a=!1}a&&(t=l[0])}}return l=ot(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:t},l.queue=a,l=ed.bind(null,fe,a),a.dispatch=l,a=Ou(!1),s=Du.bind(null,fe,!1,a.queue),a=ot(),c={state:t,dispatch:null,action:e,pending:null},a.queue=c,l=sh.bind(null,fe,c,s,l),c.dispatch=l,a.memoizedState=e,[t,l,!1]}function Gr(e){var t=Ee();return vr(t,Je,e)}function vr(e,t,l){if(t=wu(e,t,Ur)[0],e=Ac(nl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=wn(t)}catch(u){throw u===Ta?kc:u}else a=t;t=Ee();var c=t.queue,s=c.dispatch;return l!==t.memoizedState&&(fe.flags|=2048,Ja(9,{destroy:void 0},uh.bind(null,c,l),null)),[a,s,e]}function uh(e,t){e.action=t}function Zr(e){var t=Ee(),l=Je;if(l!==null)return vr(t,l,e);Ee(),t=t.memoizedState,l=Ee();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ja(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Tc(),fe.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Kr(){return Ee().memoizedState}function Dc(e,t,l,a){var c=ot();fe.flags|=e,c.memoizedState=Ja(1|t,{destroy:void 0},l,a===void 0?null:a)}function Vc(e,t,l,a){var c=Ee();a=a===void 0?null:a;var s=c.memoizedState.inst;Je!==null&&a!==null&&mu(a,Je.memoizedState.deps)?c.memoizedState=Ja(t,s,l,a):(fe.flags|=e,c.memoizedState=Ja(1|t,s,l,a))}function Pr(e,t){Dc(8390656,8,e,t)}function Hu(e,t){Vc(2048,8,e,t)}function ih(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=Tc(),fe.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Mr(e){var t=Ee().memoizedState;return ih({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function Cr(e,t){return Vc(4,2,e,t)}function Lr(e,t){return Vc(4,4,e,t)}function Er(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Br(e,t,l){l=l!=null?l.concat([e]):null,Vc(4,4,Er.bind(null,t,e),l)}function qu(){}function Wr(e,t){var l=Ee();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&mu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Fr(e,t){var l=Ee();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&mu(t,a[1]))return a[0];if(a=e(),ea){hl(!0);try{e()}finally{hl(!1)}}return l.memoizedState=[a,t],a}function Tu(e,t,l){return l===void 0||(al&1073741824)!==0&&(ke&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Id(),fe.lanes|=e,Tl|=e,l)}function Ir(e,t,l,a){return St(l,t)?l:Aa.current!==null?(e=Tu(e,l,a),St(e,t)||(Ie=!0),e):(al&42)===0||(al&1073741824)!==0&&(ke&261930)===0?(Ie=!0,e.memoizedState=l):(e=Id(),fe.lanes|=e,Tl|=e,t)}function Qr(e,t,l,a,c){var s=r.p;r.p=s!==0&&8>s?s:8;var u=d.T,o={};d.T=o,Du(e,!1,t,l);try{var x=c(),y=d.S;if(y!==null&&y(o,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var T=ah(x,a);Nn(e,t,T,qt(e))}else Nn(e,t,a,qt(e))}catch(D){Nn(e,t,{then:function(){},status:"rejected",reason:D},qt())}finally{r.p=s,u!==null&&o.types!==null&&(u.types=o.types),d.T=u}}function oh(){}function Ru(e,t,l,a){if(e.tag!==5)throw Error(m(476));var c=Xr(e).queue;Qr(e,c,t,q,l===null?oh:function(){return Yr(e),l(a)})}function Xr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:q},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yr(e){var t=Xr(e);t.next===null&&(t=e.alternate.memoizedState),Nn(e,t.next.queue,{},qt())}function Au(){return at(Pn)}function _r(){return Ee().memoizedState}function $r(){return Ee().memoizedState}function rh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=qt();e=wl(l);var a=Nl(t,e,l);a!==null&&(bt(a,t,l),jn(a,t,l)),t={cache:cu()},e.payload=t;return}t=t.return}}function dh(e,t,l){var a=qt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Jc(e)?td(t,l):(l=Is(e,t,l,a),l!==null&&(bt(l,e,a),ld(l,t,a)))}function ed(e,t,l){var a=qt();Nn(e,t,l,a)}function Nn(e,t,l,a){var c={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Jc(e))td(t,c);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,o=s(u,l);if(c.hasEagerState=!0,c.eagerState=o,St(o,u))return fc(e,t,c,0),Ge===null&&xc(),!1}catch{}if(l=Is(e,t,c,a),l!==null)return bt(l,e,a),ld(l,t,a),!0}return!1}function Du(e,t,l,a){if(a={lane:2,revertLane:oi(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jc(e)){if(t)throw Error(m(479))}else t=Is(e,l,a,2),t!==null&&bt(t,e,2)}function Jc(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function td(e,t){Da=Hc=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function ld(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,so(e,l)}}var On={readContext:at,use:Rc,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};On.useEffectEvent=Me;var ad={readContext:at,use:Rc,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Pr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Dc(4194308,4,Er.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Dc(4194308,4,e,t)},useInsertionEffect:function(e,t){Dc(4,2,e,t)},useMemo:function(e,t){var l=ot();t=t===void 0?null:t;var a=e();if(ea){hl(!0);try{e()}finally{hl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ot();if(l!==void 0){var c=l(t);if(ea){hl(!0);try{l(t)}finally{hl(!1)}}}else c=t;return a.memoizedState=a.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},a.queue=e,e=e.dispatch=dh.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Ou(e);var t=e.queue,l=ed.bind(null,fe,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:qu,useDeferredValue:function(e,t){var l=ot();return Tu(l,e,t)},useTransition:function(){var e=Ou(!1);return e=Qr.bind(null,fe,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=fe,c=ot();if(we){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),Ge===null)throw Error(m(349));(ke&127)!==0||Or(a,t,l)}c.memoizedState=l;var s={value:l,getSnapshot:t};return c.queue=s,Pr(Hr.bind(null,a,s,e),[e]),a.flags|=2048,Ja(9,{destroy:void 0},gr.bind(null,a,s,l,t),null),l},useId:function(){var e=ot(),t=Ge.identifierPrefix;if(we){var l=Bt,a=Et;l=(a&~(1<<32-kt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=qc++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=nh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Au,useFormState:zr,useActionState:zr,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Du.bind(null,fe,!0,l),l.dispatch=t,[e,t]},useMemoCache:Su,useCacheRefresh:function(){return ot().memoizedState=rh.bind(null,fe)},useEffectEvent:function(e){var t=ot(),l={impl:e};return t.memoizedState=l,function(){if((Te&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},Vu={readContext:at,use:Rc,useCallback:Wr,useContext:at,useEffect:Hu,useImperativeHandle:Br,useInsertionEffect:Cr,useLayoutEffect:Lr,useMemo:Fr,useReducer:Ac,useRef:Kr,useState:function(){return Ac(nl)},useDebugValue:qu,useDeferredValue:function(e,t){var l=Ee();return Ir(l,Je.memoizedState,e,t)},useTransition:function(){var e=Ac(nl)[0],t=Ee().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:Nr,useId:_r,useHostTransitionStatus:Au,useFormState:Gr,useActionState:Gr,useOptimistic:function(e,t){var l=Ee();return Rr(l,Je,e,t)},useMemoCache:Su,useCacheRefresh:$r};Vu.useEffectEvent=Mr;var nd={readContext:at,use:Rc,useCallback:Wr,useContext:at,useEffect:Hu,useImperativeHandle:Br,useInsertionEffect:Cr,useLayoutEffect:Lr,useMemo:Fr,useReducer:Nu,useRef:Kr,useState:function(){return Nu(nl)},useDebugValue:qu,useDeferredValue:function(e,t){var l=Ee();return Je===null?Tu(l,e,t):Ir(l,Je.memoizedState,e,t)},useTransition:function(){var e=Nu(nl)[0],t=Ee().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:Nr,useId:_r,useHostTransitionStatus:Au,useFormState:Zr,useActionState:Zr,useOptimistic:function(e,t){var l=Ee();return Je!==null?Rr(l,Je,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Su,useCacheRefresh:$r};nd.useEffectEvent=Mr;function Ju(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:Z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Uu={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=qt(),c=wl(a);c.payload=t,l!=null&&(c.callback=l),t=Nl(e,c,a),t!==null&&(bt(t,e,a),jn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=qt(),c=wl(a);c.tag=1,c.payload=t,l!=null&&(c.callback=l),t=Nl(e,c,a),t!==null&&(bt(t,e,a),jn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=qt(),a=wl(l);a.tag=2,t!=null&&(a.callback=t),t=Nl(e,a,l),t!==null&&(bt(t,e,l),jn(t,e,l))}};function cd(e,t,l,a,c,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,u):t.prototype&&t.prototype.isPureReactComponent?!rn(l,a)||!rn(c,s):!0}function sd(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Uu.enqueueReplaceState(t,t.state,null)}function ta(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=Z({},l));for(var c in e)l[c]===void 0&&(l[c]=e[c])}return l}function ud(e){dc(e)}function id(e){console.error(e)}function od(e){dc(e)}function Uc(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function rd(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function zu(e,t,l){return l=wl(l),l.tag=3,l.payload={element:null},l.callback=function(){Uc(e,t)},l}function dd(e){return e=wl(e),e.tag=3,e}function xd(e,t,l,a){var c=l.type.getDerivedStateFromError;if(typeof c=="function"){var s=a.value;e.payload=function(){return c(s)},e.callback=function(){rd(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){rd(t,l,a),typeof c!="function"&&(Rl===null?Rl=new Set([this]):Rl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function xh(e,t,l,a,c){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ga(t,l,c,!0),l=Nt.current,l!==null){switch(l.tag){case 31:case 13:return Gt===null?Wc():l.alternate===null&&Ce===0&&(Ce=3),l.flags&=-257,l.flags|=65536,l.lanes=c,a===Sc?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),si(e,a,c)),!1;case 22:return l.flags|=65536,a===Sc?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),si(e,a,c)),!1}throw Error(m(435,l.tag))}return si(e,a,c),Wc(),!1}if(we)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,a!==eu&&(e=Error(m(422),{cause:a}),fn(Vt(e,l)))):(a!==eu&&(t=Error(m(423),{cause:a}),fn(Vt(t,l))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,a=Vt(a,l),c=zu(e.stateNode,a,c),du(e,c),Ce!==4&&(Ce=2)),!1;var s=Error(m(520),{cause:a});if(s=Vt(s,l),Vn===null?Vn=[s]:Vn.push(s),Ce!==4&&(Ce=2),t===null)return!0;a=Vt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=c&-c,l.lanes|=e,e=zu(l.stateNode,a,e),du(l,e),!1;case 1:if(t=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Rl===null||!Rl.has(s))))return l.flags|=65536,c&=-c,l.lanes|=c,c=dd(c),xd(c,e,l,a),du(l,c),!1}l=l.return}while(l!==null);return!1}var Gu=Error(m(461)),Ie=!1;function nt(e,t,l,a){t.child=e===null?mr(t,null,l,a):$l(t,e.child,l,a)}function fd(e,t,l,a,c){l=l.render;var s=t.ref;if("ref"in a){var u={};for(var o in a)o!=="ref"&&(u[o]=a[o])}else u=a;return Ql(t),a=bu(e,t,l,u,s,c),o=ju(),e!==null&&!Ie?(yu(e,t,c),cl(e,t,c)):(we&&o&&_s(t),t.flags|=1,nt(e,t,a,c),t.child)}function hd(e,t,l,a,c){if(e===null){var s=l.type;return typeof s=="function"&&!Qs(s)&&s.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=s,pd(e,t,s,a,c)):(e=pc(l.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Eu(e,c)){var u=s.memoizedProps;if(l=l.compare,l=l!==null?l:rn,l(u,a)&&e.ref===t.ref)return cl(e,t,c)}return t.flags|=1,e=$t(s,a),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,l,a,c){if(e!==null){var s=e.memoizedProps;if(rn(s,a)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=a=s,Eu(e,c))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,cl(e,t,c)}return vu(e,t,l,a,c)}function md(e,t,l,a){var c=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|l:l,e!==null){for(a=t.child=e.child,c=0;a!==null;)c=c|a.lanes|a.childLanes,a=a.sibling;a=c&~s}else a=0,t.child=null;return bd(e,t,s,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yc(t,s!==null?s.cachePool:null),s!==null?yr(t,s):fu(),kr(t);else return a=t.lanes=536870912,bd(e,t,s!==null?s.baseLanes|l:l,l,a)}else s!==null?(yc(t,s.cachePool),yr(t,s),gl(),t.memoizedState=null):(e!==null&&yc(t,null),fu(),gl());return nt(e,t,c,l),t.child}function gn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bd(e,t,l,a,c){var s=uu();return s=s===null?null:{parent:We._currentValue,pool:s},t.memoizedState={baseLanes:l,cachePool:s},e!==null&&yc(t,null),fu(),kr(t),e!==null&&ga(e,t,a,!0),t.childLanes=c,null}function zc(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jd(e,t,l){return $l(t,e.child,null,l),e=zc(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function fh(e,t,l){var a=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(a.mode==="hidden")return e=zc(t,a),t.lanes=536870912,gn(null,e);if(pu(t),(e=Ze)?(e=A0(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bl!==null?{id:Et,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},l=tr(e),l.return=t,t.child=l,lt=t,Ze=null)):e=null,e===null)throw yl(t);return t.lanes=536870912,null}return zc(t,a)}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(pu(t),c)if(t.flags&256)t.flags&=-257,t=jd(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Ie||ga(e,t,l,!1),c=(l&e.childLanes)!==0,Ie||c){if(a=Ge,a!==null&&(u=uo(a,l),u!==0&&u!==s.retryLane))throw s.retryLane=u,Bl(e,u),bt(a,e,u),Gu;Wc(),t=jd(e,t,l)}else e=s.treeContext,Ze=vt(u.nextSibling),lt=t,we=!0,jl=null,zt=!1,e!==null&&nr(t,e),t=zc(t,a),t.flags|=4096;return t}return e=$t(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gc(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function vu(e,t,l,a,c){return Ql(t),l=bu(e,t,l,a,void 0,c),a=ju(),e!==null&&!Ie?(yu(e,t,c),cl(e,t,c)):(we&&a&&_s(t),t.flags|=1,nt(e,t,l,c),t.child)}function yd(e,t,l,a,c,s){return Ql(t),t.updateQueue=null,l=wr(t,a,l,c),Sr(e),a=ju(),e!==null&&!Ie?(yu(e,t,s),cl(e,t,s)):(we&&a&&_s(t),t.flags|=1,nt(e,t,l,s),t.child)}function kd(e,t,l,a,c){if(Ql(t),t.stateNode===null){var s=Sa,u=l.contextType;typeof u=="object"&&u!==null&&(s=at(u)),s=new l(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Uu,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ou(t),u=l.contextType,s.context=typeof u=="object"&&u!==null?at(u):Sa,s.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Ju(t,l,u,a),s.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&Uu.enqueueReplaceState(s,s.state,null),kn(t,a,s,c),yn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,x=ta(l,o);s.props=x;var y=s.context,T=l.contextType;u=Sa,typeof T=="object"&&T!==null&&(u=at(T));var D=l.getDerivedStateFromProps;T=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,T||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||y!==u)&&sd(t,s,a,u),Sl=!1;var k=t.memoizedState;s.state=k,kn(t,a,s,c),yn(),y=t.memoizedState,o||k!==y||Sl?(typeof D=="function"&&(Ju(t,l,D,a),y=t.memoizedState),(x=Sl||cd(t,l,x,a,k,y,u))?(T||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),s.props=a,s.state=y,s.context=u,a=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,ru(e,t),u=t.memoizedProps,T=ta(l,u),s.props=T,D=t.pendingProps,k=s.context,y=l.contextType,x=Sa,typeof y=="object"&&y!==null&&(x=at(y)),o=l.getDerivedStateFromProps,(y=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==D||k!==x)&&sd(t,s,a,x),Sl=!1,k=t.memoizedState,s.state=k,kn(t,a,s,c),yn();var N=t.memoizedState;u!==D||k!==N||Sl||e!==null&&e.dependencies!==null&&bc(e.dependencies)?(typeof o=="function"&&(Ju(t,l,o,a),N=t.memoizedState),(T=Sl||cd(t,l,T,a,k,N,x)||e!==null&&e.dependencies!==null&&bc(e.dependencies))?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,N,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,N,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=N),s.props=a,s.state=N,s.context=x,a=T):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Gc(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=$l(t,e.child,null,c),t.child=$l(t,null,l,c)):nt(e,t,l,c),t.memoizedState=s.state,e=t.child):e=cl(e,t,c),e}function Sd(e,t,l,a){return Fl(),t.flags|=256,nt(e,t,l,a),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(e){return{baseLanes:e,cachePool:rr()}}function Pu(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ht),e}function wd(e,t,l){var a=t.pendingProps,c=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),u&&(c=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(c?Ol(t):gl(),(e=Ze)?(e=A0(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bl!==null?{id:Et,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},l=tr(e),l.return=t,t.child=l,lt=t,Ze=null)):e=null,e===null)throw yl(t);return wi(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,c?(gl(),c=t.mode,o=vc({mode:"hidden",children:o},c),a=Wl(a,c,l,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=Ku(l),a.childLanes=Pu(e,u,l),t.memoizedState=Zu,gn(null,a)):(Ol(t),Mu(t,o))}var x=e.memoizedState;if(x!==null&&(o=x.dehydrated,o!==null)){if(s)t.flags&256?(Ol(t),t.flags&=-257,t=Cu(e,t,l)):t.memoizedState!==null?(gl(),t.child=e.child,t.flags|=128,t=null):(gl(),o=a.fallback,c=t.mode,a=vc({mode:"visible",children:a.children},c),o=Wl(o,c,l,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,$l(t,e.child,null,l),a=t.child,a.memoizedState=Ku(l),a.childLanes=Pu(e,u,l),t.memoizedState=Zu,t=gn(null,a));else if(Ol(t),wi(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(m(419)),a.stack="",a.digest=u,fn({value:a,source:null,stack:null}),t=Cu(e,t,l)}else if(Ie||ga(e,t,l,!1),u=(l&e.childLanes)!==0,Ie||u){if(u=Ge,u!==null&&(a=uo(u,l),a!==0&&a!==x.retryLane))throw x.retryLane=a,Bl(e,a),bt(u,e,a),Gu;Si(o)||Wc(),t=Cu(e,t,l)}else Si(o)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ze=vt(o.nextSibling),lt=t,we=!0,jl=null,zt=!1,e!==null&&nr(t,e),t=Mu(t,a.children),t.flags|=4096);return t}return c?(gl(),o=a.fallback,c=t.mode,x=e.child,y=x.sibling,a=$t(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,y!==null?o=$t(y,o):(o=Wl(o,c,l,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,gn(null,a),a=t.child,o=e.child.memoizedState,o===null?o=Ku(l):(c=o.cachePool,c!==null?(x=We._currentValue,c=c.parent!==x?{parent:x,pool:x}:c):c=rr(),o={baseLanes:o.baseLanes|l,cachePool:c}),a.memoizedState=o,a.childLanes=Pu(e,u,l),t.memoizedState=Zu,gn(e.child,a)):(Ol(t),l=e.child,e=l.sibling,l=$t(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Mu(e,t){return t=vc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Cu(e,t,l){return $l(t,e.child,null,l),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),au(e.return,t,l)}function Lu(e,t,l,a,c,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:c,treeForkCount:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=c,u.treeForkCount=s)}function Od(e,t,l){var a=t.pendingProps,c=a.revealOrder,s=a.tail;a=a.children;var u=Le.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,w(Le,u),nt(e,t,a,l),a=we?xn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,l,t);else if(e.tag===19)Nd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(l=t.child,c=null;l!==null;)e=l.alternate,e!==null&&gc(e)===null&&(c=l),l=l.sibling;l=c,l===null?(c=t.child,t.child=null):(c=l.sibling,l.sibling=null),Lu(t,!1,c,l,s,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&gc(e)===null){t.child=c;break}e=c.sibling,c.sibling=l,l=c,c=e}Lu(t,!0,l,null,s,a);break;case"together":Lu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function cl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ga(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=$t(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=$t(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Eu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bc(e)))}function hh(e,t,l){switch(t.tag){case 3:ie(t,t.stateNode.containerInfo),kl(t,We,e.memoizedState.cache),Fl();break;case 27:case 5:Ve(t);break;case 4:ie(t,t.stateNode.containerInfo);break;case 10:kl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?wd(e,t,l):(Ol(t),e=cl(e,t,l),e!==null?e.sibling:null);Ol(t);break;case 19:var c=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ga(e,t,l,!1),a=(l&t.childLanes)!==0),c){if(a)return Od(e,t,l);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),w(Le,Le.current),a)break;return null;case 22:return t.lanes=0,md(e,t,l,t.pendingProps);case 24:kl(t,We,e.memoizedState.cache)}return cl(e,t,l)}function gd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Eu(e,l)&&(t.flags&128)===0)return Ie=!1,hh(e,t,l);Ie=(e.flags&131072)!==0}else Ie=!1,we&&(t.flags&1048576)!==0&&ar(t,xn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Yl(t.elementType),t.type=e,typeof e=="function")Qs(e)?(a=ta(e,a),t.tag=1,t=kd(null,t,e,a,l)):(t.tag=0,t=vu(null,t,e,a,l));else{if(e!=null){var c=e.$$typeof;if(c===z){t.tag=11,t=fd(null,t,e,a,l);break e}else if(c===J){t.tag=14,t=hd(null,t,e,a,l);break e}}throw t=be(e)||e,Error(m(306,t,""))}}return t;case 0:return vu(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,c=ta(a,t.pendingProps),kd(e,t,a,c,l);case 3:e:{if(ie(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var s=t.memoizedState;c=s.element,ru(e,t),kn(t,a,null,l);var u=t.memoizedState;if(a=u.cache,kl(t,We,a),a!==s.cache&&nu(t,[We],l,!0),yn(),a=u.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Sd(e,t,a,l);break e}else if(a!==c){c=Vt(Error(m(424)),t),fn(c),t=Sd(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=vt(e.firstChild),lt=t,we=!0,jl=null,zt=!0,l=mr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fl(),a===c){t=cl(e,t,l);break e}nt(e,t,a,l)}t=t.child}return t;case 26:return Gc(e,t),e===null?(l=G0(t.type,null,t.pendingProps,null))?t.memoizedState=l:we||(l=t.type,e=t.pendingProps,a=$c(C.current).createElement(l),a[tt]=t,a[dt]=e,ct(a,l,e),$e(a),t.stateNode=a):t.memoizedState=G0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ve(t),e===null&&we&&(a=t.stateNode=J0(t.type,t.pendingProps,C.current),lt=t,zt=!0,c=Ze,Jl(t.type)?(Ni=c,Ze=vt(a.firstChild)):Ze=c),nt(e,t,t.pendingProps.children,l),Gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((c=a=Ze)&&(a=Eh(a,t.type,t.pendingProps,zt),a!==null?(t.stateNode=a,lt=t,Ze=vt(a.firstChild),zt=!1,c=!0):c=!1),c||yl(t)),Ve(t),c=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,a=s.children,ji(c,s)?a=null:u!==null&&ji(c,u)&&(t.flags|=32),t.memoizedState!==null&&(c=bu(e,t,ch,null,null,l),Pn._currentValue=c),Gc(e,t),nt(e,t,a,l),t.child;case 6:return e===null&&we&&((e=l=Ze)&&(l=Bh(l,t.pendingProps,zt),l!==null?(t.stateNode=l,lt=t,Ze=null,e=!0):e=!1),e||yl(t)),null;case 13:return wd(e,t,l);case 4:return ie(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=$l(t,null,a,l):nt(e,t,a,l),t.child;case 11:return fd(e,t,t.type,t.pendingProps,l);case 7:return nt(e,t,t.pendingProps,l),t.child;case 8:return nt(e,t,t.pendingProps.children,l),t.child;case 12:return nt(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,kl(t,t.type,a.value),nt(e,t,a.children,l),t.child;case 9:return c=t.type._context,a=t.pendingProps.children,Ql(t),c=at(c),a=a(c),t.flags|=1,nt(e,t,a,l),t.child;case 14:return hd(e,t,t.type,t.pendingProps,l);case 15:return pd(e,t,t.type,t.pendingProps,l);case 19:return Od(e,t,l);case 31:return fh(e,t,l);case 22:return md(e,t,l,t.pendingProps);case 24:return Ql(t),a=at(We),e===null?(c=uu(),c===null&&(c=Ge,s=cu(),c.pooledCache=s,s.refCount++,s!==null&&(c.pooledCacheLanes|=l),c=s),t.memoizedState={parent:a,cache:c},ou(t),kl(t,We,c)):((e.lanes&l)!==0&&(ru(e,t),kn(t,null,null,l),yn()),c=e.memoizedState,s=t.memoizedState,c.parent!==a?(c={parent:a,cache:a},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),kl(t,We,a)):(a=s.cache,kl(t,We,a),a!==c.cache&&nu(t,[We],l,!0))),nt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function sl(e){e.flags|=4}function Bu(e,t,l,a,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(_d())e.flags|=8192;else throw _l=Sc,iu}else e.flags&=-16777217}function Hd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M0(t))if(_d())e.flags|=8192;else throw _l=Sc,iu}function Zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?no():536870912,e.lanes|=t,va|=t)}function Hn(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var c=e.child;c!==null;)l|=c.lanes|c.childLanes,a|=c.subtreeFlags&65011712,a|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)l|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function ph(e,t,l){var a=t.pendingProps;switch($s(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ll(We),re(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Oa(t)?sl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tu())),Ke(t),null;case 26:var c=t.type,s=t.memoizedState;return e===null?(sl(t),s!==null?(Ke(t),Hd(t,s)):(Ke(t),Bu(t,c,null,a,l))):s?s!==e.memoizedState?(sl(t),Ke(t),Hd(t,s)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&sl(t),Ke(t),Bu(t,c,e,a,l)),null;case 27:if(Re(t),l=C.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sl(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return Ke(t),null}e=V.current,Oa(t)?cr(t):(e=J0(c,a,l),t.stateNode=e,sl(t))}return Ke(t),null;case 5:if(Re(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sl(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return Ke(t),null}if(s=V.current,Oa(t))cr(t);else{var u=$c(C.current);switch(s){case 1:s=u.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:s=u.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":s=u.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":s=u.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":s=u.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?u.createElement(c,{is:a.is}):u.createElement(c)}}s[tt]=t,s[dt]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=s;e:switch(ct(s,c,a),c){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&sl(t)}}return Ke(t),Bu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&sl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=C.current,Oa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,c=lt,c!==null)switch(c.tag){case 27:case 5:a=c.memoizedProps}e[tt]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||w0(e.nodeValue,l)),e||yl(t,!0)}else e=$c(e).createTextNode(a),e[tt]=t,t.stateNode=e}return Ke(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Oa(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[tt]=t}else Fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else l=tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(m(558))}return Ke(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Oa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(m(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(m(317));c[tt]=t}else Fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),c=!1}else c=tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,c=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(c=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==c&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Zc(t,t.updateQueue),Ke(t),null);case 4:return re(),e===null&&fi(t.stateNode.containerInfo),Ke(t),null;case 10:return ll(t.type),Ke(t),null;case 19:if(h(Le),a=t.memoizedState,a===null)return Ke(t),null;if(c=(t.flags&128)!==0,s=a.rendering,s===null)if(c)Hn(a,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=gc(e),s!==null){for(t.flags|=128,Hn(a,!1),e=s.updateQueue,t.updateQueue=e,Zc(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)er(l,e),l=l.sibling;return w(Le,Le.current&1|2),we&&el(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&st()>Lc&&(t.flags|=128,c=!0,Hn(a,!1),t.lanes=4194304)}else{if(!c)if(e=gc(s),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Zc(t,e),Hn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!we)return Ke(t),null}else 2*st()-a.renderingStartTime>Lc&&l!==536870912&&(t.flags|=128,c=!0,Hn(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=st(),e.sibling=null,l=Le.current,w(Le,c?l&1|2:l&1),we&&el(t,a.treeForkCount),e):(Ke(t),null);case 22:case 23:return Ot(t),hu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),l=t.updateQueue,l!==null&&Zc(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&h(Xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ll(We),Ke(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function mh(e,t){switch($s(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ll(We),re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Re(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(m(340));Fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return h(Le),null;case 4:return re(),null;case 10:return ll(t.type),null;case 22:case 23:return Ot(t),hu(),e!==null&&h(Xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ll(We),null;case 25:return null;default:return null}}function qd(e,t){switch($s(t),t.tag){case 3:ll(We),re();break;case 26:case 27:case 5:Re(t);break;case 4:re();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:h(Le);break;case 10:ll(t.type);break;case 22:case 23:Ot(t),hu(),e!==null&&h(Xl);break;case 24:ll(We)}}function qn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var c=a.next;l=c;do{if((l.tag&e)===e){a=void 0;var s=l.create,u=l.inst;a=s(),u.destroy=a}l=l.next}while(l!==c)}}catch(o){De(t,t.return,o)}}function Hl(e,t,l){try{var a=t.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var s=c.next;a=s;do{if((a.tag&e)===e){var u=a.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,c=t;var x=l,y=o;try{y()}catch(T){De(c,x,T)}}}a=a.next}while(a!==s)}}catch(T){De(t,t.return,T)}}function Td(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{jr(t,l)}catch(a){De(e,e.return,a)}}}function Rd(e,t,l){l.props=ta(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){De(e,t,a)}}function Tn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(c){De(e,t,c)}}function Wt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(c){De(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(c){De(e,t,c)}else l.current=null}function Ad(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(c){De(e,e.return,c)}}function Wu(e,t,l){try{var a=e.stateNode;Zh(a,e.type,l,t),a[dt]=t}catch(c){De(e,e.return,c)}}function Dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jl(e.type)||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Yt));else if(a!==4&&(a===27&&Jl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Iu(e,t,l),e=e.sibling;e!==null;)Iu(e,t,l),e=e.sibling}function Kc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Jl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Kc(e,t,l),e=e.sibling;e!==null;)Kc(e,t,l),e=e.sibling}function Vd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ct(t,a,l),t[tt]=e,t[dt]=l}catch(s){De(e,e.return,s)}}var ul=!1,Qe=!1,Qu=!1,Jd=typeof WeakSet=="function"?WeakSet:Set,et=null;function bh(e,t){if(e=e.containerInfo,mi=ss,e=Bo(e),Cs(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var c=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var u=0,o=-1,x=-1,y=0,T=0,D=e,k=null;t:for(;;){for(var N;D!==l||c!==0&&D.nodeType!==3||(o=u+c),D!==s||a!==0&&D.nodeType!==3||(x=u+a),D.nodeType===3&&(u+=D.nodeValue.length),(N=D.firstChild)!==null;)k=D,D=N;for(;;){if(D===e)break t;if(k===l&&++y===c&&(o=u),k===s&&++T===a&&(x=u),(N=D.nextSibling)!==null)break;D=k,k=D.parentNode}D=N}l=o===-1||x===-1?null:{start:o,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(bi={focusedElem:e,selectionRange:l},ss=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)c=e[l],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,l=t,c=s.memoizedProps,s=s.memoizedState,a=l.stateNode;try{var X=ta(l.type,c);e=a.getSnapshotBeforeUpdate(X,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){De(l,l.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)ki(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ki(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Ud(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ol(e,l),a&4&&qn(5,l);break;case 1:if(ol(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){De(l,l.return,u)}else{var c=ta(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){De(l,l.return,u)}}a&64&&Td(l),a&512&&Tn(l,l.return);break;case 3:if(ol(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{jr(e,t)}catch(u){De(l,l.return,u)}}break;case 27:t===null&&a&4&&Vd(l);case 26:case 5:ol(e,l),t===null&&a&4&&Ad(l),a&512&&Tn(l,l.return);break;case 12:ol(e,l);break;case 31:ol(e,l),a&4&&vd(e,l);break;case 13:ol(e,l),a&4&&Zd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Hh.bind(null,l),Wh(e,l))));break;case 22:if(a=l.memoizedState!==null||ul,!a){t=t!==null&&t.memoizedState!==null||Qe,c=ul;var s=Qe;ul=a,(Qe=t)&&!s?rl(e,l,(l.subtreeFlags&8772)!==0):ol(e,l),ul=c,Qe=s}break;case 30:break;default:ol(e,l)}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,ft=!1;function il(e,t,l){for(l=l.child;l!==null;)Gd(e,t,l),l=l.sibling}function Gd(e,t,l){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Kl,l)}catch{}switch(l.tag){case 26:Qe||Wt(l,t),il(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Qe||Wt(l,t);var a=Pe,c=ft;Jl(l.type)&&(Pe=l.stateNode,ft=!1),il(e,t,l),vn(l.stateNode),Pe=a,ft=c;break;case 5:Qe||Wt(l,t);case 6:if(a=Pe,c=ft,Pe=null,il(e,t,l),Pe=a,ft=c,Pe!==null)if(ft)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(l.stateNode)}catch(s){De(l,t,s)}else try{Pe.removeChild(l.stateNode)}catch(s){De(l,t,s)}break;case 18:Pe!==null&&(ft?(e=Pe,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ba(e)):T0(Pe,l.stateNode));break;case 4:a=Pe,c=ft,Pe=l.stateNode.containerInfo,ft=!0,il(e,t,l),Pe=a,ft=c;break;case 0:case 11:case 14:case 15:Hl(2,l,t),Qe||Hl(4,l,t),il(e,t,l);break;case 1:Qe||(Wt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Rd(l,t,a)),il(e,t,l);break;case 21:il(e,t,l);break;case 22:Qe=(a=Qe)||l.memoizedState!==null,il(e,t,l),Qe=a;break;default:il(e,t,l)}}function vd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ba(e)}catch(l){De(t,t.return,l)}}}function Zd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ba(e)}catch(l){De(t,t.return,l)}}function jh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jd),t;default:throw Error(m(435,e.tag))}}function Pc(e,t){var l=jh(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var c=qh.bind(null,e,a);a.then(c,c)}})}function ht(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var c=l[a],s=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(Jl(o.type)){Pe=o.stateNode,ft=!1;break e}break;case 5:Pe=o.stateNode,ft=!1;break e;case 3:case 4:Pe=o.stateNode.containerInfo,ft=!0;break e}o=o.return}if(Pe===null)throw Error(m(160));Gd(s,u,c),Pe=null,ft=!1,s=c.alternate,s!==null&&(s.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}var Ct=null;function Kd(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),pt(e),a&4&&(Hl(3,e,e.return),qn(3,e),Hl(5,e,e.return));break;case 1:ht(t,e),pt(e),a&512&&(Qe||l===null||Wt(l,l.return)),a&64&&ul&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var c=Ct;if(ht(t,e),pt(e),a&512&&(Qe||l===null||Wt(l,l.return)),a&4){var s=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,c=c.ownerDocument||c;t:switch(a){case"title":s=c.getElementsByTagName("title")[0],(!s||s[en]||s[tt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(a),c.head.insertBefore(s,c.querySelector("head > title"))),ct(s,a,l),s[tt]=e,$e(s),a=s;break e;case"link":var u=K0("link","href",c).get(a+(l.href||""));if(u){for(var o=0;o<u.length;o++)if(s=u[o],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(o,1);break t}}s=c.createElement(a),ct(s,a,l),c.head.appendChild(s);break;case"meta":if(u=K0("meta","content",c).get(a+(l.content||""))){for(o=0;o<u.length;o++)if(s=u[o],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(o,1);break t}}s=c.createElement(a),ct(s,a,l),c.head.appendChild(s);break;default:throw Error(m(468,a))}s[tt]=e,$e(s),a=s}e.stateNode=a}else P0(c,e.type,e.stateNode);else e.stateNode=Z0(c,a,e.memoizedProps);else s!==a?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,a===null?P0(c,e.type,e.stateNode):Z0(c,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Wu(e,e.memoizedProps,l.memoizedProps)}break;case 27:ht(t,e),pt(e),a&512&&(Qe||l===null||Wt(l,l.return)),l!==null&&a&4&&Wu(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ht(t,e),pt(e),a&512&&(Qe||l===null||Wt(l,l.return)),e.flags&32){c=e.stateNode;try{ha(c,"")}catch(X){De(e,e.return,X)}}a&4&&e.stateNode!=null&&(c=e.memoizedProps,Wu(e,c,l!==null?l.memoizedProps:c)),a&1024&&(Qu=!0);break;case 6:if(ht(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(X){De(e,e.return,X)}}break;case 3:if(ls=null,c=Ct,Ct=es(t.containerInfo),ht(t,e),Ct=c,pt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(X){De(e,e.return,X)}Qu&&(Qu=!1,Pd(e));break;case 4:a=Ct,Ct=es(e.stateNode.containerInfo),ht(t,e),pt(e),Ct=a;break;case 12:ht(t,e),pt(e);break;case 31:ht(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pc(e,a)));break;case 13:ht(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Cc=st()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pc(e,a)));break;case 22:c=e.memoizedState!==null;var x=l!==null&&l.memoizedState!==null,y=ul,T=Qe;if(ul=y||c,Qe=T||x,ht(t,e),Qe=T,ul=y,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(l===null||x||ul||Qe||la(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){x=l=t;try{if(s=x.stateNode,c)u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=x.stateNode;var D=x.memoizedProps.style,k=D!=null&&D.hasOwnProperty("display")?D.display:null;o.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(X){De(x,x.return,X)}}}else if(t.tag===6){if(l===null){x=t;try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(X){De(x,x.return,X)}}}else if(t.tag===18){if(l===null){x=t;try{var N=x.stateNode;c?R0(N,!0):R0(x.stateNode,!1)}catch(X){De(x,x.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Pc(e,l))));break;case 19:ht(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pc(e,a)));break;case 30:break;case 21:break;default:ht(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Dd(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var c=l.stateNode,s=Fu(e);Kc(e,s,c);break;case 5:var u=l.stateNode;l.flags&32&&(ha(u,""),l.flags&=-33);var o=Fu(e);Kc(e,o,u);break;case 3:case 4:var x=l.stateNode.containerInfo,y=Fu(e);Iu(e,y,x);break;default:throw Error(m(161))}}catch(T){De(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ol(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ud(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hl(4,t,t.return),la(t);break;case 1:Wt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Rd(t,t.return,l),la(t);break;case 27:vn(t.stateNode);case 26:case 5:Wt(t,t.return),la(t);break;case 22:t.memoizedState===null&&la(t);break;case 30:la(t);break;default:la(t)}e=e.sibling}}function rl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,c=e,s=t,u=s.flags;switch(s.tag){case 0:case 11:case 15:rl(c,s,l),qn(4,s);break;case 1:if(rl(c,s,l),a=s,c=a.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(y){De(a,a.return,y)}if(a=s,c=a.updateQueue,c!==null){var o=a.stateNode;try{var x=c.shared.hiddenCallbacks;if(x!==null)for(c.shared.hiddenCallbacks=null,c=0;c<x.length;c++)br(x[c],o)}catch(y){De(a,a.return,y)}}l&&u&64&&Td(s),Tn(s,s.return);break;case 27:Vd(s);case 26:case 5:rl(c,s,l),l&&a===null&&u&4&&Ad(s),Tn(s,s.return);break;case 12:rl(c,s,l);break;case 31:rl(c,s,l),l&&u&4&&vd(c,s);break;case 13:rl(c,s,l),l&&u&4&&Zd(c,s);break;case 22:s.memoizedState===null&&rl(c,s,l),Tn(s,s.return);break;case 30:break;default:rl(c,s,l)}t=t.sibling}}function Xu(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&hn(l))}function Yu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hn(e))}function Lt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Md(e,t,l,a),t=t.sibling}function Md(e,t,l,a){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,l,a),c&2048&&qn(9,t);break;case 1:Lt(e,t,l,a);break;case 3:Lt(e,t,l,a),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hn(e)));break;case 12:if(c&2048){Lt(e,t,l,a),e=t.stateNode;try{var s=t.memoizedProps,u=s.id,o=s.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){De(t,t.return,x)}}else Lt(e,t,l,a);break;case 31:Lt(e,t,l,a);break;case 13:Lt(e,t,l,a);break;case 23:break;case 22:s=t.stateNode,u=t.alternate,t.memoizedState!==null?s._visibility&2?Lt(e,t,l,a):Rn(e,t):s._visibility&2?Lt(e,t,l,a):(s._visibility|=2,Ua(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Xu(u,t);break;case 24:Lt(e,t,l,a),c&2048&&Yu(t.alternate,t);break;default:Lt(e,t,l,a)}}function Ua(e,t,l,a,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,u=t,o=l,x=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:Ua(s,u,o,x,c),qn(8,u);break;case 23:break;case 22:var T=u.stateNode;u.memoizedState!==null?T._visibility&2?Ua(s,u,o,x,c):Rn(s,u):(T._visibility|=2,Ua(s,u,o,x,c)),c&&y&2048&&Xu(u.alternate,u);break;case 24:Ua(s,u,o,x,c),c&&y&2048&&Yu(u.alternate,u);break;default:Ua(s,u,o,x,c)}t=t.sibling}}function Rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,c=a.flags;switch(a.tag){case 22:Rn(l,a),c&2048&&Xu(a.alternate,a);break;case 24:Rn(l,a),c&2048&&Yu(a.alternate,a);break;default:Rn(l,a)}t=t.sibling}}var An=8192;function za(e,t,l){if(e.subtreeFlags&An)for(e=e.child;e!==null;)Cd(e,t,l),e=e.sibling}function Cd(e,t,l){switch(e.tag){case 26:za(e,t,l),e.flags&An&&e.memoizedState!==null&&np(l,Ct,e.memoizedState,e.memoizedProps);break;case 5:za(e,t,l);break;case 3:case 4:var a=Ct;Ct=es(e.stateNode.containerInfo),za(e,t,l),Ct=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=An,An=16777216,za(e,t,l),An=a):za(e,t,l));break;default:za(e,t,l)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];et=a,Bd(a,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ed(e),e=e.sibling}function Ed(e){switch(e.tag){case 0:case 11:case 15:Dn(e),e.flags&2048&&Hl(9,e,e.return);break;case 3:Dn(e);break;case 12:Dn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mc(e)):Dn(e);break;default:Dn(e)}}function Mc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];et=a,Bd(a,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hl(8,t,t.return),Mc(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Mc(t));break;default:Mc(t)}e=e.sibling}}function Bd(e,t){for(;et!==null;){var l=et;switch(l.tag){case 0:case 11:case 15:Hl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:hn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,et=a;else e:for(l=e;et!==null;){a=et;var c=a.sibling,s=a.return;if(zd(a),a===l){et=null;break e}if(c!==null){c.return=s,et=c;break e}et=s}}}var yh={getCacheForType:function(e){var t=at(We),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return at(We).controller.signal}},kh=typeof WeakMap=="function"?WeakMap:Map,Te=0,Ge=null,je=null,ke=0,Ae=0,gt=null,ql=!1,Ga=!1,_u=!1,dl=0,Ce=0,Tl=0,aa=0,$u=0,Ht=0,va=0,Vn=null,mt=null,ei=!1,Cc=0,Wd=0,Lc=1/0,Ec=null,Rl=null,Xe=0,Al=null,Za=null,xl=0,ti=0,li=null,Fd=null,Jn=0,ai=null;function qt(){return(Te&2)!==0&&ke!==0?ke&-ke:d.T!==null?oi():io()}function Id(){if(Ht===0)if((ke&536870912)===0||we){var e=_n;_n<<=1,(_n&3932160)===0&&(_n=262144),Ht=e}else Ht=536870912;return e=Nt.current,e!==null&&(e.flags|=32),Ht}function bt(e,t,l){(e===Ge&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),Dl(e,ke,Ht,!1)),$a(e,l),((Te&2)===0||e!==Ge)&&(e===Ge&&((Te&2)===0&&(aa|=l),Ce===4&&Dl(e,ke,Ht,!1)),Ft(e))}function Qd(e,t,l){if((Te&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||_a(e,t),c=a?Nh(e,t):ci(e,t,!0),s=a;do{if(c===0){Ga&&!a&&Dl(e,t,0,!1);break}else{if(l=e.current.alternate,s&&!Sh(l)){c=ci(e,t,!1),s=!1;continue}if(c===2){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;c=Vn;var x=o.current.memoizedState.isDehydrated;if(x&&(Ka(o,u).flags|=256),u=ci(o,u,!1),u!==2){if(_u&&!x){o.errorRecoveryDisabledLanes|=s,aa|=s,c=4;break e}s=mt,mt=c,s!==null&&(mt===null?mt=s:mt.push.apply(mt,s))}c=u}if(s=!1,c!==2)continue}}if(c===1){Ka(e,0),Dl(e,t,0,!0);break}e:{switch(a=e,s=c,s){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:Dl(a,t,Ht,!ql);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(c=Cc+300-st(),10<c)){if(Dl(a,t,Ht,!ql),ec(a,0,!0)!==0)break e;xl=t,a.timeoutHandle=H0(Xd.bind(null,a,l,mt,Ec,ei,t,Ht,aa,va,ql,s,"Throttled",-0,0),c);break e}Xd(a,l,mt,Ec,ei,t,Ht,aa,va,ql,s,null,-0,0)}}break}while(!0);Ft(e)}function Xd(e,t,l,a,c,s,u,o,x,y,T,D,k,N){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Cd(t,s,D);var X=(s&62914560)===s?Cc-st():(s&4194048)===s?Wd-st():0;if(X=cp(D,X),X!==null){xl=s,e.cancelPendingCommit=X(n0.bind(null,e,t,s,l,a,c,u,o,x,T,D,null,k,N)),Dl(e,s,u,!y);return}}n0(e,t,s,l,a,c,u,o,x)}function Sh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var c=l[a],s=c.getSnapshot;c=c.value;try{if(!St(s(),c))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dl(e,t,l,a){t&=~$u,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var c=t;0<c;){var s=31-kt(c),u=1<<s;a[s]=-1,c&=~u}l!==0&&co(e,l,t)}function Bc(){return(Te&6)===0?(Un(0),!1):!0}function ni(){if(je!==null){if(Ae===0)var e=je.return;else e=je,tl=Il=null,ku(e),Ra=null,mn=0,e=je;for(;e!==null;)qd(e.alternate,e),e=e.return;je=null}}function Ka(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Mh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),xl=0,ni(),Ge=e,je=l=$t(e.current,null),ke=t,Ae=0,gt=null,ql=!1,Ga=_a(e,t),_u=!1,va=Ht=$u=aa=Tl=Ce=0,mt=Vn=null,ei=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var c=31-kt(a),s=1<<c;t|=e[c],a&=~s}return dl=t,xc(),l}function Yd(e,t){fe=null,d.H=On,t===Ta||t===kc?(t=fr(),Ae=3):t===iu?(t=fr(),Ae=4):Ae=t===Gu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,je===null&&(Ce=1,Uc(e,Vt(t,e.current)))}function _d(){var e=Nt.current;return e===null?!0:(ke&4194048)===ke?Gt===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Gt:!1}function $d(){var e=d.H;return d.H=On,e===null?On:e}function e0(){var e=d.A;return d.A=yh,e}function Wc(){Ce=4,ql||(ke&4194048)!==ke&&Nt.current!==null||(Ga=!0),(Tl&134217727)===0&&(aa&134217727)===0||Ge===null||Dl(Ge,ke,Ht,!1)}function ci(e,t,l){var a=Te;Te|=2;var c=$d(),s=e0();(Ge!==e||ke!==t)&&(Ec=null,Ka(e,t)),t=!1;var u=Ce;e:do try{if(Ae!==0&&je!==null){var o=je,x=gt;switch(Ae){case 8:ni(),u=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var y=Ae;if(Ae=0,gt=null,Pa(e,o,x,y),l&&Ga){u=0;break e}break;default:y=Ae,Ae=0,gt=null,Pa(e,o,x,y)}}wh(),u=Ce;break}catch(T){Yd(e,T)}while(!0);return t&&e.shellSuspendCounter++,tl=Il=null,Te=a,d.H=c,d.A=s,je===null&&(Ge=null,ke=0,xc()),u}function wh(){for(;je!==null;)t0(je)}function Nh(e,t){var l=Te;Te|=2;var a=$d(),c=e0();Ge!==e||ke!==t?(Ec=null,Lc=st()+500,Ka(e,t)):Ga=_a(e,t);e:do try{if(Ae!==0&&je!==null){t=je;var s=gt;t:switch(Ae){case 1:Ae=0,gt=null,Pa(e,t,s,1);break;case 2:case 9:if(dr(s)){Ae=0,gt=null,l0(t);break}t=function(){Ae!==2&&Ae!==9||Ge!==e||(Ae=7),Ft(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:dr(s)?(Ae=0,gt=null,l0(t)):(Ae=0,gt=null,Pa(e,t,s,7));break;case 5:var u=null;switch(je.tag){case 26:u=je.memoizedState;case 5:case 27:var o=je;if(u?M0(u):o.stateNode.complete){Ae=0,gt=null;var x=o.sibling;if(x!==null)je=x;else{var y=o.return;y!==null?(je=y,Fc(y)):je=null}break t}}Ae=0,gt=null,Pa(e,t,s,5);break;case 6:Ae=0,gt=null,Pa(e,t,s,6);break;case 8:ni(),Ce=6;break e;default:throw Error(m(462))}}Oh();break}catch(T){Yd(e,T)}while(!0);return tl=Il=null,d.H=a,d.A=c,Te=l,je!==null?0:(Ge=null,ke=0,xc(),Ce)}function Oh(){for(;je!==null&&!bs();)t0(je)}function t0(e){var t=gd(e.alternate,e,dl);e.memoizedProps=e.pendingProps,t===null?Fc(e):je=t}function l0(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=yd(l,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=yd(l,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:ku(t);default:qd(l,t),t=je=er(t,dl),t=gd(l,t,dl)}e.memoizedProps=e.pendingProps,t===null?Fc(e):je=t}function Pa(e,t,l,a){tl=Il=null,ku(t),Ra=null,mn=0;var c=t.return;try{if(xh(e,c,t,l,ke)){Ce=1,Uc(e,Vt(l,e.current)),je=null;return}}catch(s){if(c!==null)throw je=c,s;Ce=1,Uc(e,Vt(l,e.current)),je=null;return}t.flags&32768?(we||a===1?e=!0:Ga||(ke&536870912)!==0?e=!1:(ql=e=!0,(a===2||a===9||a===3||a===6)&&(a=Nt.current,a!==null&&a.tag===13&&(a.flags|=16384))),a0(t,e)):Fc(t)}function Fc(e){var t=e;do{if((t.flags&32768)!==0){a0(t,ql);return}e=t.return;var l=ph(t.alternate,t,dl);if(l!==null){je=l;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ce===0&&(Ce=5)}function a0(e,t){do{var l=mh(e.alternate,e);if(l!==null){l.flags&=32767,je=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=l}while(e!==null);Ce=6,je=null}function n0(e,t,l,a,c,s,u,o,x){e.cancelPendingCommit=null;do Ic();while(Xe!==0);if((Te&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(s=t.lanes|t.childLanes,s|=Fs,lf(e,l,s,u,o,x),e===Ge&&(je=Ge=null,ke=0),Za=t,Al=e,xl=l,ti=s,li=c,Fd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Th(ua,function(){return o0(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=d.T,d.T=null,c=r.p,r.p=2,u=Te,Te|=4;try{bh(e,t,l)}finally{Te=u,r.p=c,d.T=a}}Xe=1,c0(),s0(),u0()}}function c0(){if(Xe===1){Xe=0;var e=Al,t=Za,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=d.T,d.T=null;var a=r.p;r.p=2;var c=Te;Te|=4;try{Kd(t,e);var s=bi,u=Bo(e.containerInfo),o=s.focusedElem,x=s.selectionRange;if(u!==o&&o&&o.ownerDocument&&Eo(o.ownerDocument.documentElement,o)){if(x!==null&&Cs(o)){var y=x.start,T=x.end;if(T===void 0&&(T=y),"selectionStart"in o)o.selectionStart=y,o.selectionEnd=Math.min(T,o.value.length);else{var D=o.ownerDocument||document,k=D&&D.defaultView||window;if(k.getSelection){var N=k.getSelection(),X=o.textContent.length,oe=Math.min(x.start,X),ze=x.end===void 0?oe:Math.min(x.end,X);!N.extend&&oe>ze&&(u=ze,ze=oe,oe=u);var b=Lo(o,oe),p=Lo(o,ze);if(b&&p&&(N.rangeCount!==1||N.anchorNode!==b.node||N.anchorOffset!==b.offset||N.focusNode!==p.node||N.focusOffset!==p.offset)){var j=D.createRange();j.setStart(b.node,b.offset),N.removeAllRanges(),oe>ze?(N.addRange(j),N.extend(p.node,p.offset)):(j.setEnd(p.node,p.offset),N.addRange(j))}}}}for(D=[],N=o;N=N.parentNode;)N.nodeType===1&&D.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<D.length;o++){var A=D[o];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}ss=!!mi,bi=mi=null}finally{Te=c,r.p=a,d.T=l}}e.current=t,Xe=2}}function s0(){if(Xe===2){Xe=0;var e=Al,t=Za,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=d.T,d.T=null;var a=r.p;r.p=2;var c=Te;Te|=4;try{Ud(e,t.alternate,t)}finally{Te=c,r.p=a,d.T=l}}Xe=3}}function u0(){if(Xe===4||Xe===3){Xe=0,js();var e=Al,t=Za,l=xl,a=Fd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Za=Al=null,i0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Rl=null),Ns(l),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=d.T,c=r.p,r.p=2,d.T=null;try{for(var s=e.onRecoverableError,u=0;u<a.length;u++){var o=a[u];s(o.value,{componentStack:o.stack})}}finally{d.T=t,r.p=c}}(xl&3)!==0&&Ic(),Ft(e),c=e.pendingLanes,(l&261930)!==0&&(c&42)!==0?e===ai?Jn++:(Jn=0,ai=e):Jn=0,Un(0)}}function i0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hn(t)))}function Ic(){return c0(),s0(),u0(),o0()}function o0(){if(Xe!==5)return!1;var e=Al,t=ti;ti=0;var l=Ns(xl),a=d.T,c=r.p;try{r.p=32>l?32:l,d.T=null,l=li,li=null;var s=Al,u=xl;if(Xe=0,Za=Al=null,xl=0,(Te&6)!==0)throw Error(m(331));var o=Te;if(Te|=4,Ed(s.current),Md(s,s.current,u,l),Te=o,Un(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Kl,s)}catch{}return!0}finally{r.p=c,d.T=a,i0(e,t)}}function r0(e,t,l){t=Vt(l,t),t=zu(e.stateNode,t,2),e=Nl(e,t,2),e!==null&&($a(e,2),Ft(e))}function De(e,t,l){if(e.tag===3)r0(e,e,l);else for(;t!==null;){if(t.tag===3){r0(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rl===null||!Rl.has(a))){e=Vt(l,e),l=dd(2),a=Nl(t,l,2),a!==null&&(xd(l,a,t,e),$a(a,2),Ft(a));break}}t=t.return}}function si(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new kh;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(l)||(_u=!0,c.add(l),e=gh.bind(null,e,t,l),t.then(e,e))}function gh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ge===e&&(ke&l)===l&&(Ce===4||Ce===3&&(ke&62914560)===ke&&300>st()-Cc?(Te&2)===0&&Ka(e,0):$u|=l,va===ke&&(va=0)),Ft(e)}function d0(e,t){t===0&&(t=no()),e=Bl(e,t),e!==null&&($a(e,t),Ft(e))}function Hh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),d0(e,l)}function qh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(l=c.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),d0(e,l)}function Th(e,t){return rt(e,t)}var Qc=null,Ma=null,ui=!1,Xc=!1,ii=!1,Vl=0;function Ft(e){e!==Ma&&e.next===null&&(Ma===null?Qc=Ma=e:Ma=Ma.next=e),Xc=!0,ui||(ui=!0,Ah())}function Un(e,t){if(!ii&&Xc){ii=!0;do for(var l=!1,a=Qc;a!==null;){if(e!==0){var c=a.pendingLanes;if(c===0)var s=0;else{var u=a.suspendedLanes,o=a.pingedLanes;s=(1<<31-kt(42|e)+1)-1,s&=c&~(u&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,p0(a,s))}else s=ke,s=ec(a,a===Ge?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||_a(a,s)||(l=!0,p0(a,s));a=a.next}while(l);ii=!1}}function Rh(){x0()}function x0(){Xc=ui=!1;var e=0;Vl!==0&&Ph()&&(e=Vl);for(var t=st(),l=null,a=Qc;a!==null;){var c=a.next,s=f0(a,t);s===0?(a.next=null,l===null?Qc=c:l.next=c,c===null&&(Ma=l)):(l=a,(e!==0||(s&3)!==0)&&(Xc=!0)),a=c}Xe!==0&&Xe!==5||Un(e),Vl!==0&&(Vl=0)}function f0(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-kt(s),o=1<<u,x=c[u];x===-1?((o&l)===0||(o&a)!==0)&&(c[u]=tf(o,t)):x<=t&&(e.expiredLanes|=o),s&=~o}if(t=Ge,l=ke,l=ec(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ia(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||_a(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ia(a),Ns(l)){case 2:case 8:l=Qn;break;case 32:l=ua;break;case 268435456:l=Xa;break;default:l=ua}return a=h0.bind(null,e),l=rt(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ia(a),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ic()&&e.callbackNode!==l)return null;var a=ke;return a=ec(e,e===Ge?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Qd(e,a,t),f0(e,st()),e.callbackNode!=null&&e.callbackNode===l?h0.bind(null,e):null)}function p0(e,t){if(Ic())return null;Qd(e,t,!0)}function Ah(){Ch(function(){(Te&6)!==0?rt(Qa,Rh):x0()})}function oi(){if(Vl===0){var e=Ha;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),Vl=e}return Vl}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nc(""+e)}function b0(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Dh(e,t,l,a,c){if(t==="submit"&&l&&l.stateNode===c){var s=m0((c[dt]||null).action),u=a.submitter;u&&(t=(t=u[dt]||null)?m0(t.formAction):u.getAttribute("formAction"),t!==null&&(s=t,u=null));var o=new ic("action","action",null,a,c);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Vl!==0){var x=u?b0(c,u):new FormData(c);Ru(l,{pending:!0,data:x,method:c.method,action:s},null,x)}}else typeof s=="function"&&(o.preventDefault(),x=u?b0(c,u):new FormData(c),Ru(l,{pending:!0,data:x,method:c.method,action:s},s,x))},currentTarget:c}]})}}for(var ri=0;ri<Ws.length;ri++){var di=Ws[ri],Vh=di.toLowerCase(),Jh=di[0].toUpperCase()+di.slice(1);Mt(Vh,"on"+Jh)}Mt(Io,"onAnimationEnd"),Mt(Qo,"onAnimationIteration"),Mt(Xo,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Qf,"onTransitionRun"),Mt(Xf,"onTransitionStart"),Mt(Yf,"onTransitionCancel"),Mt(Yo,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn));function j0(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],c=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var u=a.length-1;0<=u;u--){var o=a[u],x=o.instance,y=o.currentTarget;if(o=o.listener,x!==s&&c.isPropagationStopped())break e;s=o,c.currentTarget=y;try{s(c)}catch(T){dc(T)}c.currentTarget=null,s=x}else for(u=0;u<a.length;u++){if(o=a[u],x=o.instance,y=o.currentTarget,o=o.listener,x!==s&&c.isPropagationStopped())break e;s=o,c.currentTarget=y;try{s(c)}catch(T){dc(T)}c.currentTarget=null,s=x}}}}function ye(e,t){var l=t[Os];l===void 0&&(l=t[Os]=new Set);var a=e+"__bubble";l.has(a)||(y0(t,e,2,!1),l.add(a))}function xi(e,t,l){var a=0;t&&(a|=4),y0(l,e,a,t)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[Yc]){e[Yc]=!0,xo.forEach(function(l){l!=="selectionchange"&&(Uh.has(l)||xi(l,!1,e),xi(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yc]||(t[Yc]=!0,xi("selectionchange",!1,t))}}function y0(e,t,l,a){switch(I0(t)){case 2:var c=ip;break;case 8:c=op;break;default:c=Ti}l=c.bind(null,t,l,e),c=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,l,{capture:!0,passive:c}):e.addEventListener(t,l,!0):c!==void 0?e.addEventListener(t,l,{passive:c}):e.addEventListener(t,l,!1)}function hi(e,t,l,a,c){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var o=a.stateNode.containerInfo;if(o===c)break;if(u===4)for(u=a.return;u!==null;){var x=u.tag;if((x===3||x===4)&&u.stateNode.containerInfo===c)return;u=u.return}for(;o!==null;){if(u=oa(o),u===null)return;if(x=u.tag,x===5||x===6||x===26||x===27){a=s=u;continue e}o=o.parentNode}}a=a.return}Oo(function(){var y=s,T=Ds(l),D=[];e:{var k=_o.get(e);if(k!==void 0){var N=ic,X=e;switch(e){case"keypress":if(sc(l)===0)break e;case"keydown":case"keyup":N=qf;break;case"focusin":X="focus",N=vs;break;case"focusout":X="blur",N=vs;break;case"beforeblur":case"afterblur":N=vs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Af;break;case Io:case Qo:case Xo:N=jf;break;case Yo:N=Vf;break;case"scroll":case"scrollend":N=ff;break;case"wheel":N=Uf;break;case"copy":case"cut":case"paste":N=kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Ro;break;case"toggle":case"beforetoggle":N=Gf}var oe=(t&4)!==0,ze=!oe&&(e==="scroll"||e==="scrollend"),b=oe?k!==null?k+"Capture":null:k;oe=[];for(var p=y,j;p!==null;){var A=p;if(j=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||j===null||b===null||(A=ln(p,b),A!=null&&oe.push(Gn(p,A,j))),ze)break;p=p.return}0<oe.length&&(k=new N(k,X,null,l,T),D.push({event:k,listeners:oe}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",k&&l!==As&&(X=l.relatedTarget||l.fromElement)&&(oa(X)||X[ia]))break e;if((N||k)&&(k=T.window===T?T:(k=T.ownerDocument)?k.defaultView||k.parentWindow:window,N?(X=l.relatedTarget||l.toElement,N=y,X=X?oa(X):null,X!==null&&(ze=F(X),oe=X.tag,X!==ze||oe!==5&&oe!==27&&oe!==6)&&(X=null)):(N=null,X=y),N!==X)){if(oe=qo,A="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Ro,A="onPointerLeave",b="onPointerEnter",p="pointer"),ze=N==null?k:tn(N),j=X==null?k:tn(X),k=new oe(A,p+"leave",N,l,T),k.target=ze,k.relatedTarget=j,A=null,oa(T)===y&&(oe=new oe(b,p+"enter",X,l,T),oe.target=j,oe.relatedTarget=ze,A=oe),ze=A,N&&X)t:{for(oe=zh,b=N,p=X,j=0,A=b;A;A=oe(A))j++;A=0;for(var le=p;le;le=oe(le))A++;for(;0<j-A;)b=oe(b),j--;for(;0<A-j;)p=oe(p),A--;for(;j--;){if(b===p||p!==null&&b===p.alternate){oe=b;break t}b=oe(b),p=oe(p)}oe=null}else oe=null;N!==null&&k0(D,k,N,oe,!1),X!==null&&ze!==null&&k0(D,ze,X,oe,!0)}}e:{if(k=y?tn(y):window,N=k.nodeName&&k.nodeName.toLowerCase(),N==="select"||N==="input"&&k.type==="file")var He=vo;else if(zo(k))if(Zo)He=Wf;else{He=Ef;var $=Lf}else N=k.nodeName,!N||N.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?y&&Rs(y.elementType)&&(He=vo):He=Bf;if(He&&(He=He(e,y))){Go(D,He,l,T);break e}$&&$(e,k,y),e==="focusout"&&y&&k.type==="number"&&y.memoizedProps.value!=null&&Ts(k,"number",k.value)}switch($=y?tn(y):window,e){case"focusin":(zo($)||$.contentEditable==="true")&&(ja=$,Ls=y,dn=null);break;case"focusout":dn=Ls=ja=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,Wo(D,l,T);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Wo(D,l,T)}var pe;if(Ks)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else ba?Jo(e,l)&&(Se="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Se="onCompositionStart");Se&&(Ao&&l.locale!=="ko"&&(ba||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&ba&&(pe=go()):(ml=T,Us="value"in ml?ml.value:ml.textContent,ba=!0)),$=_c(y,Se),0<$.length&&(Se=new To(Se,e,null,l,T),D.push({event:Se,listeners:$}),pe?Se.data=pe:(pe=Uo(l),pe!==null&&(Se.data=pe)))),(pe=Zf?Kf(e,l):Pf(e,l))&&(Se=_c(y,"onBeforeInput"),0<Se.length&&($=new To("onBeforeInput","beforeinput",null,l,T),D.push({event:$,listeners:Se}),$.data=pe)),Dh(D,e,y,l,T)}j0(D,t)})}function Gn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function _c(e,t){for(var l=t+"Capture",a=[];e!==null;){var c=e,s=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||s===null||(c=ln(e,l),c!=null&&a.unshift(Gn(e,c,s)),c=ln(e,t),c!=null&&a.push(Gn(e,c,s))),e.tag===3)return a;e=e.return}return[]}function zh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k0(e,t,l,a,c){for(var s=t._reactName,u=[];l!==null&&l!==a;){var o=l,x=o.alternate,y=o.stateNode;if(o=o.tag,x!==null&&x===a)break;o!==5&&o!==26&&o!==27||y===null||(x=y,c?(y=ln(l,s),y!=null&&u.unshift(Gn(l,y,x))):c||(y=ln(l,s),y!=null&&u.push(Gn(l,y,x)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Gh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(vh,"")}function w0(e,t){return t=S0(t),S0(e)===t}function Ue(e,t,l,a,c,s){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ha(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ha(e,""+a);break;case"className":lc(e,"class",a);break;case"tabIndex":lc(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":lc(e,l,a);break;case"style":wo(e,a,s);break;case"data":if(t!=="object"){lc(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=nc(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(t!=="input"&&Ue(e,t,"name",c.name,c,null),Ue(e,t,"formEncType",c.formEncType,c,null),Ue(e,t,"formMethod",c.formMethod,c,null),Ue(e,t,"formTarget",c.formTarget,c,null)):(Ue(e,t,"encType",c.encType,c,null),Ue(e,t,"method",c.method,c,null),Ue(e,t,"target",c.target,c,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=nc(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Yt);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(c.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=nc(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),tc(e,"popover",a);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":tc(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=df.get(l)||l,tc(e,l,a))}}function pi(e,t,l,a,c,s){switch(l){case"style":wo(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(c.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ha(e,a):(typeof a=="number"||typeof a=="bigint")&&ha(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(c=l.endsWith("Capture"),t=l.slice(2,c?l.length-7:void 0),s=e[dt]||null,s=s!=null?s[l]:null,typeof s=="function"&&e.removeEventListener(t,s,c),typeof a=="function")){typeof s!="function"&&s!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,c);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):tc(e,l,a)}}}function ct(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,c=!1,s;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];if(u!=null)switch(s){case"src":a=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Ue(e,t,s,u,l,null)}}c&&Ue(e,t,"srcSet",l.srcSet,l,null),a&&Ue(e,t,"src",l.src,l,null);return;case"input":ye("invalid",e);var o=s=u=c=null,x=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var T=l[a];if(T!=null)switch(a){case"name":c=T;break;case"type":u=T;break;case"checked":x=T;break;case"defaultChecked":y=T;break;case"value":s=T;break;case"defaultValue":o=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(m(137,t));break;default:Ue(e,t,a,T,l,null)}}jo(e,s,o,x,y,u,c,!1);return;case"select":ye("invalid",e),a=u=s=null;for(c in l)if(l.hasOwnProperty(c)&&(o=l[c],o!=null))switch(c){case"value":s=o;break;case"defaultValue":u=o;break;case"multiple":a=o;default:Ue(e,t,c,o,l,null)}t=s,l=u,e.multiple=!!a,t!=null?fa(e,!!a,t,!1):l!=null&&fa(e,!!a,l,!0);return;case"textarea":ye("invalid",e),s=c=a=null;for(u in l)if(l.hasOwnProperty(u)&&(o=l[u],o!=null))switch(u){case"value":a=o;break;case"defaultValue":c=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(m(91));break;default:Ue(e,t,u,o,l,null)}ko(e,a,c,s);return;case"option":for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!=null)&&(x==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ue(e,t,x,a,l,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<zn.length;a++)ye(zn[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Ue(e,t,y,a,l,null)}return;default:if(Rs(t)){for(T in l)l.hasOwnProperty(T)&&(a=l[T],a!==void 0&&pi(e,t,T,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&Ue(e,t,o,a,l,null))}function Zh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,s=null,u=null,o=null,x=null,y=null,T=null;for(N in l){var D=l[N];if(l.hasOwnProperty(N)&&D!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":x=D;default:a.hasOwnProperty(N)||Ue(e,t,N,null,a,D)}}for(var k in a){var N=a[k];if(D=l[k],a.hasOwnProperty(k)&&(N!=null||D!=null))switch(k){case"type":s=N;break;case"name":c=N;break;case"checked":y=N;break;case"defaultChecked":T=N;break;case"value":u=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(m(137,t));break;default:N!==D&&Ue(e,t,k,N,a,D)}}qs(e,u,o,x,y,T,s,c);return;case"select":N=u=o=k=null;for(s in l)if(x=l[s],l.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":N=x;default:a.hasOwnProperty(s)||Ue(e,t,s,null,a,x)}for(c in a)if(s=a[c],x=l[c],a.hasOwnProperty(c)&&(s!=null||x!=null))switch(c){case"value":k=s;break;case"defaultValue":o=s;break;case"multiple":u=s;default:s!==x&&Ue(e,t,c,s,a,x)}t=o,l=u,a=N,k!=null?fa(e,!!l,k,!1):!!a!=!!l&&(t!=null?fa(e,!!l,t,!0):fa(e,!!l,l?[]:"",!1));return;case"textarea":N=k=null;for(o in l)if(c=l[o],l.hasOwnProperty(o)&&c!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ue(e,t,o,null,a,c)}for(u in a)if(c=a[u],s=l[u],a.hasOwnProperty(u)&&(c!=null||s!=null))switch(u){case"value":k=c;break;case"defaultValue":N=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:c!==s&&Ue(e,t,u,c,a,s)}yo(e,k,N);return;case"option":for(var X in l)k=l[X],l.hasOwnProperty(X)&&k!=null&&!a.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:Ue(e,t,X,null,a,k));for(x in a)k=a[x],N=l[x],a.hasOwnProperty(x)&&k!==N&&(k!=null||N!=null)&&(x==="selected"?e.selected=k&&typeof k!="function"&&typeof k!="symbol":Ue(e,t,x,k,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in l)k=l[oe],l.hasOwnProperty(oe)&&k!=null&&!a.hasOwnProperty(oe)&&Ue(e,t,oe,null,a,k);for(y in a)if(k=a[y],N=l[y],a.hasOwnProperty(y)&&k!==N&&(k!=null||N!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(m(137,t));break;default:Ue(e,t,y,k,a,N)}return;default:if(Rs(t)){for(var ze in l)k=l[ze],l.hasOwnProperty(ze)&&k!==void 0&&!a.hasOwnProperty(ze)&&pi(e,t,ze,void 0,a,k);for(T in a)k=a[T],N=l[T],!a.hasOwnProperty(T)||k===N||k===void 0&&N===void 0||pi(e,t,T,k,a,N);return}}for(var b in l)k=l[b],l.hasOwnProperty(b)&&k!=null&&!a.hasOwnProperty(b)&&Ue(e,t,b,null,a,k);for(D in a)k=a[D],N=l[D],!a.hasOwnProperty(D)||k===N||k==null&&N==null||Ue(e,t,D,k,a,N)}function N0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var c=l[a],s=c.transferSize,u=c.initiatorType,o=c.duration;if(s&&o&&N0(u)){for(u=0,o=c.responseEnd,a+=1;a<l.length;a++){var x=l[a],y=x.startTime;if(y>o)break;var T=x.transferSize,D=x.initiatorType;T&&N0(D)&&(x=x.responseEnd,u+=T*(x<o?1:(o-y)/(x-y)))}if(--a,t+=8*(s+u)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mi=null,bi=null;function $c(e){return e.nodeType===9?e:e.ownerDocument}function O0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=null;function Ph(){var e=window.event;return e&&e.type==="popstate"?e===yi?!1:(yi=e,!0):(yi=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(e){return q0.resolve(null).then(e).catch(Lh)}:H0;function Lh(e){setTimeout(function(){throw e})}function Jl(e){return e==="head"}function T0(e,t){var l=t,a=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(c),Ba(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")vn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,vn(l);for(var s=l.firstChild;s;){var u=s.nextSibling,o=s.nodeName;s[en]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=u}}else l==="body"&&vn(e.ownerDocument.body);l=c}while(l);Ba(t)}function R0(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function ki(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ki(l),gs(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Eh(e,t,l,a){for(;e.nodeType===1;){var c=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[en])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Bh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=vt(e.nextSibling),e===null))return null;return e}function A0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Si(e){return e.data==="$?"||e.data==="$~"}function wi(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ni=null;function D0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return vt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function V0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function J0(e,t,l){switch(t=$c(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gs(e)}var Zt=new Map,U0=new Set;function es(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fl=r.d;r.d={f:Fh,r:Ih,D:Qh,C:Xh,L:Yh,m:_h,X:ep,S:$h,M:tp};function Fh(){var e=fl.f(),t=Bc();return e||t}function Ih(e){var t=ra(e);t!==null&&t.tag===5&&t.type==="form"?Yr(t):fl.r(e)}var Ca=typeof document>"u"?null:document;function z0(e,t,l){var a=Ca;if(a&&typeof t=="string"&&t){var c=At(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof l=="string"&&(c+='[crossorigin="'+l+'"]'),U0.has(c)||(U0.add(c),e={rel:e,crossOrigin:l,href:t},a.querySelector(c)===null&&(t=a.createElement("link"),ct(t,"link",e),$e(t),a.head.appendChild(t)))}}function Qh(e){fl.D(e),z0("dns-prefetch",e,null)}function Xh(e,t){fl.C(e,t),z0("preconnect",e,t)}function Yh(e,t,l){fl.L(e,t,l);var a=Ca;if(a&&e&&t){var c='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&l&&l.imageSrcSet?(c+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(c+='[imagesizes="'+At(l.imageSizes)+'"]')):c+='[href="'+At(e)+'"]';var s=c;switch(t){case"style":s=La(e);break;case"script":s=Ea(e)}Zt.has(s)||(e=Z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Zt.set(s,e),a.querySelector(c)!==null||t==="style"&&a.querySelector(Zn(s))||t==="script"&&a.querySelector(Kn(s))||(t=a.createElement("link"),ct(t,"link",e),$e(t),a.head.appendChild(t)))}}function _h(e,t){fl.m(e,t);var l=Ca;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+At(a)+'"][href="'+At(e)+'"]',s=c;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ea(e)}if(!Zt.has(s)&&(e=Z({rel:"modulepreload",href:e},t),Zt.set(s,e),l.querySelector(c)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Kn(s)))return}a=l.createElement("link"),ct(a,"link",e),$e(a),l.head.appendChild(a)}}}function $h(e,t,l){fl.S(e,t,l);var a=Ca;if(a&&e){var c=da(a).hoistableStyles,s=La(e);t=t||"default";var u=c.get(s);if(!u){var o={loading:0,preload:null};if(u=a.querySelector(Zn(s)))o.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Zt.get(s))&&Oi(e,l);var x=u=a.createElement("link");$e(x),ct(x,"link",e),x._p=new Promise(function(y,T){x.onload=y,x.onerror=T}),x.addEventListener("load",function(){o.loading|=1}),x.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ts(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:o},c.set(s,u)}}}function ep(e,t){fl.X(e,t);var l=Ca;if(l&&e){var a=da(l).hoistableScripts,c=Ea(e),s=a.get(c);s||(s=l.querySelector(Kn(c)),s||(e=Z({src:e,async:!0},t),(t=Zt.get(c))&&gi(e,t),s=l.createElement("script"),$e(s),ct(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(c,s))}}function tp(e,t){fl.M(e,t);var l=Ca;if(l&&e){var a=da(l).hoistableScripts,c=Ea(e),s=a.get(c);s||(s=l.querySelector(Kn(c)),s||(e=Z({src:e,async:!0,type:"module"},t),(t=Zt.get(c))&&gi(e,t),s=l.createElement("script"),$e(s),ct(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(c,s))}}function G0(e,t,l,a){var c=(c=C.current)?es(c):null;if(!c)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=La(l.href),l=da(c).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=La(l.href);var s=da(c).hoistableStyles,u=s.get(e);if(u||(c=c.ownerDocument||c,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=c.querySelector(Zn(e)))&&!s._p&&(u.instance=s,u.state.loading=5),Zt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Zt.set(e,l),s||lp(c,e,l,u.state))),t&&a===null)throw Error(m(528,""));return u}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ea(l),l=da(c).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function La(e){return'href="'+At(e)+'"'}function Zn(e){return'link[rel="stylesheet"]['+e+"]"}function v0(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function lp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ct(t,"link",l),$e(t),e.head.appendChild(t))}function Ea(e){return'[src="'+At(e)+'"]'}function Kn(e){return"script[async]"+e}function Z0(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+At(l.href)+'"]');if(a)return t.instance=a,$e(a),a;var c=Z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),$e(a),ct(a,"style",c),ts(a,l.precedence,e),t.instance=a;case"stylesheet":c=La(l.href);var s=e.querySelector(Zn(c));if(s)return t.state.loading|=4,t.instance=s,$e(s),s;a=v0(l),(c=Zt.get(c))&&Oi(a,c),s=(e.ownerDocument||e).createElement("link"),$e(s);var u=s;return u._p=new Promise(function(o,x){u.onload=o,u.onerror=x}),ct(s,"link",a),t.state.loading|=4,ts(s,l.precedence,e),t.instance=s;case"script":return s=Ea(l.src),(c=e.querySelector(Kn(s)))?(t.instance=c,$e(c),c):(a=l,(c=Zt.get(s))&&(a=Z({},l),gi(a,c)),e=e.ownerDocument||e,c=e.createElement("script"),$e(c),ct(c,"link",a),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ts(a,l.precedence,e));return t.instance}function ts(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=a.length?a[a.length-1]:null,s=c,u=0;u<a.length;u++){var o=a[u];if(o.dataset.precedence===t)s=o;else if(s!==c)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Oi(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gi(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ls=null;function K0(e,t,l){if(ls===null){var a=new Map,c=ls=new Map;c.set(l,a)}else c=ls,a=c.get(l),a||(a=new Map,c.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),c=0;c<l.length;c++){var s=l[c];if(!(s[en]||s[tt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(t)||"";u=e+u;var o=a.get(u);o?o.push(s):a.set(u,[s])}}return a}function P0(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function ap(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function M0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function np(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var c=La(a.href),s=t.querySelector(Zn(c));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=as.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=s,$e(s);return}s=t.ownerDocument||t,a=v0(a),(c=Zt.get(c))&&Oi(a,c),s=s.createElement("link"),$e(s);var u=s;u._p=new Promise(function(o,x){u.onload=o,u.onerror=x}),ct(s,"link",a),l.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=as.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Hi=0;function cp(e,t){return e.stylesheets&&e.count===0&&cs(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&cs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Hi===0&&(Hi=62500*Kh());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Hi?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(c)}}:null}function as(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ns=null;function cs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ns=new Map,t.forEach(sp,e),ns=null,as.call(e))}function sp(e,t){if(!(t.state.loading&4)){var l=ns.get(e);if(l)var a=l.get(null);else{l=new Map,ns.set(e,l);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<c.length;s++){var u=c[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}c=t.instance,u=c.getAttribute("data-precedence"),s=l.get(u)||a,s===a&&l.set(null,c),l.set(u,c),this.count++,a=as.bind(this),c.addEventListener("load",a),c.addEventListener("error",a),s?s.parentNode.insertBefore(c,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Pn={$$typeof:de,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function up(e,t,l,a,c,s,u,o,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=a,this.onUncaughtError=c,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function C0(e,t,l,a,c,s,u,o,x,y,T,D){return e=new up(e,t,l,u,x,y,T,D,o),t=1,s===!0&&(t|=24),s=wt(3,null,null,t),e.current=s,s.stateNode=e,t=cu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:l,cache:t},ou(s),e}function L0(e){return e?(e=Sa,e):Sa}function E0(e,t,l,a,c,s){c=L0(c),a.context===null?a.context=c:a.pendingContext=c,a=wl(t),a.payload={element:l},s=s===void 0?null:s,s!==null&&(a.callback=s),l=Nl(e,a,t),l!==null&&(bt(l,e,t),jn(l,e,t))}function B0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function qi(e,t){B0(e,t),(e=e.alternate)&&B0(e,t)}function W0(e){if(e.tag===13||e.tag===31){var t=Bl(e,67108864);t!==null&&bt(t,e,67108864),qi(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var t=qt();t=ws(t);var l=Bl(e,t);l!==null&&bt(l,e,t),qi(e,t)}}var ss=!0;function ip(e,t,l,a){var c=d.T;d.T=null;var s=r.p;try{r.p=2,Ti(e,t,l,a)}finally{r.p=s,d.T=c}}function op(e,t,l,a){var c=d.T;d.T=null;var s=r.p;try{r.p=8,Ti(e,t,l,a)}finally{r.p=s,d.T=c}}function Ti(e,t,l,a){if(ss){var c=Ri(a);if(c===null)hi(e,t,a,us,l),Q0(e,a);else if(dp(c,e,t,l,a))a.stopPropagation();else if(Q0(e,a),t&4&&-1<rp.indexOf(e)){for(;c!==null;){var s=ra(c);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=Pl(s.pendingLanes);if(u!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var x=1<<31-kt(u);o.entanglements[1]|=x,u&=~x}Ft(s),(Te&6)===0&&(Lc=st()+500,Un(0))}}break;case 31:case 13:o=Bl(s,2),o!==null&&bt(o,s,2),Bc(),qi(s,2)}if(s=Ri(a),s===null&&hi(e,t,a,us,l),s===c)break;c=s}c!==null&&a.stopPropagation()}else hi(e,t,a,null,l)}}function Ri(e){return e=Ds(e),Ai(e)}var us=null;function Ai(e){if(us=null,e=oa(e),e!==null){var t=F(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ue(t),e!==null)return e;e=null}else if(l===31){if(e=ae(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return us=e,null}function I0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ys()){case Qa:return 2;case Qn:return 8;case ua:case Xn:return 32;case Xa:return 268435456;default:return 32}default:return 32}}var Di=!1,Ul=null,zl=null,Gl=null,Mn=new Map,Cn=new Map,vl=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(e,t){switch(e){case"focusin":case"focusout":Ul=null;break;case"dragenter":case"dragleave":zl=null;break;case"mouseover":case"mouseout":Gl=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Ln(e,t,l,a,c,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:s,targetContainers:[c]},t!==null&&(t=ra(t),t!==null&&W0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function dp(e,t,l,a,c){switch(t){case"focusin":return Ul=Ln(Ul,e,t,l,a,c),!0;case"dragenter":return zl=Ln(zl,e,t,l,a,c),!0;case"mouseover":return Gl=Ln(Gl,e,t,l,a,c),!0;case"pointerover":var s=c.pointerId;return Mn.set(s,Ln(Mn.get(s)||null,e,t,l,a,c)),!0;case"gotpointercapture":return s=c.pointerId,Cn.set(s,Ln(Cn.get(s)||null,e,t,l,a,c)),!0}return!1}function X0(e){var t=oa(e.target);if(t!==null){var l=F(t);if(l!==null){if(t=l.tag,t===13){if(t=ue(l),t!==null){e.blockedOn=t,oo(e.priority,function(){F0(l)});return}}else if(t===31){if(t=ae(l),t!==null){e.blockedOn=t,oo(e.priority,function(){F0(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ri(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);As=a,l.target.dispatchEvent(a),As=null}else return t=ra(l),t!==null&&W0(t),e.blockedOn=l,!1;t.shift()}return!0}function Y0(e,t,l){is(e)&&l.delete(t)}function xp(){Di=!1,Ul!==null&&is(Ul)&&(Ul=null),zl!==null&&is(zl)&&(zl=null),Gl!==null&&is(Gl)&&(Gl=null),Mn.forEach(Y0),Cn.forEach(Y0)}function os(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,O.unstable_scheduleCallback(O.unstable_NormalPriority,xp)))}var rs=null;function _0(e){rs!==e&&(rs=e,O.unstable_scheduleCallback(O.unstable_NormalPriority,function(){rs===e&&(rs=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],c=e[t+2];if(typeof a!="function"){if(Ai(a||l)===null)continue;break}var s=ra(l);s!==null&&(e.splice(t,3),t-=3,Ru(s,{pending:!0,data:c,method:l.method,action:a},a,c))}}))}function Ba(e){function t(x){return os(x,e)}Ul!==null&&os(Ul,e),zl!==null&&os(zl,e),Gl!==null&&os(Gl,e),Mn.forEach(t),Cn.forEach(t);for(var l=0;l<vl.length;l++){var a=vl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<vl.length&&(l=vl[0],l.blockedOn===null);)X0(l),l.blockedOn===null&&vl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var c=l[a],s=l[a+1],u=c[dt]||null;if(typeof s=="function")u||_0(l);else if(u){var o=null;if(s&&s.hasAttribute("formAction")){if(c=s,u=s[dt]||null)o=u.formAction;else if(Ai(c)!==null)continue}else o=u.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),_0(l)}}}function $0(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(u){return c=u})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Vi(e){this._internalRoot=e}ds.prototype.render=Vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=qt();E0(l,a,e,t,null,null)},ds.prototype.unmount=Vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;E0(e.current,2,null,e,null,null),Bc(),t[ia]=null}};function ds(e){this._internalRoot=e}ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=io();e={blockedOn:null,target:e,priority:t};for(var l=0;l<vl.length&&t!==0&&t<vl[l].priority;l++);vl.splice(l,0,e),l===0&&X0(e)}};var ex=H.version;if(ex!=="19.2.6")throw Error(m(527,ex,"19.2.6"));r.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=S(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var fp={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:d,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Kl=xs.inject(fp),yt=xs}catch{}}return Bn.createRoot=function(e,t){if(!R(e))throw Error(m(299));var l=!1,a="",c=ud,s=id,u=od;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=C0(e,1,!1,null,null,l,a,null,c,s,u,$0),e[ia]=t.current,fi(e),new Vi(t)},Bn.hydrateRoot=function(e,t,l){if(!R(e))throw Error(m(299));var a=!1,c="",s=ud,u=id,o=od,x=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(c=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(x=l.formState)),t=C0(e,1,!0,t,l??null,a,c,x,s,u,o,$0),t.context=L0(null),l=t.current,a=qt(),a=ws(a),c=wl(a),c.callback=null,Nl(l,c,a),l=a,t.current.lanes=l,$a(t,l),Ft(t),e[ia]=t.current,fi(e),new ds(t)},Bn.version="19.2.6",Bn}var rx;function Np(){if(rx)return zi.exports;rx=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(H){console.error(H)}}return O(),zi.exports=wp(),zi.exports}var Op=Np();const gp=O=>O?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Hp(O,H,G=[]){if(H==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:gp(O),size:24,node:H,...G.length>0?{aliases:G}:{}}}const qp=O=>{let H="",G=!1;for(const m of O){if(m==="-"||m==="_"||m<=" "){G=H.length>0;continue}H.length===0?H+=m.toLowerCase():H+=G?m.toUpperCase():m,G=!1}return H};const Tp=O=>{const H=qp(O);return H.charAt(0).toUpperCase()+H.slice(1)};const Qi=(...O)=>O.filter((H,G,m)=>!!H&&H.trim()!==""&&m.indexOf(H)===G).join(" ").trim();const na={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Ki(O){return O!=null}function Rp(O,H={}){const G=H.attributeNames??{},m=E=>G[E]??E,R=O.size??O.width??na.width,F=O.size??O.height??na.height,ue=O.aliases?.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`)??[],ae=[...O.name?[`lucide-${O.name}`]:[],...ue],U=H.className?.split(" ").filter(Boolean)??[],S=H.includeDefaultClasses===!1?Qi(...U):Qi("lucide",...ae,...U),B=H.absoluteStrokeWidth?Number(H.strokeWidth??na["stroke-width"])*Number(O.size??O.width??na.width)/Number(H.size??H.width??na.width):H.strokeWidth??na["stroke-width"];return["svg",{...Object.entries(na).reduce((E,[ne,te])=>(E[m(ne)]=te,E),{}),..."color"in H&&H.color&&{[m("stroke")]:H.color},..."size"in H&&Ki(H.size)&&{[m("width")]:H.size,[m("height")]:H.size},..."width"in H&&Ki(H.width)&&{[m("width")]:H.width},..."height"in H&&Ki(H.height)&&{[m("height")]:H.height},[m("stroke-width")]:B,...S&&{[m("class")]:S},[m("viewBox")]:`0 0 ${R} ${F}`,...H.hasA11yProp===!1?{[m("aria-hidden")]:"true"}:{},..."attributes"in H&&H.attributes},O.node.map(E=>{const[ne,te,se]=E,_=H.nonScalingStroke?{[m("vector-effect")]:"non-scaling-stroke",...te}:te;return se?[ne,_,se]:[ne,_]})]}function Ap(O,H={}){return Rp(O,{...H,attributeNames:{...H.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}const Dp=O=>{for(const H in O)if(H.startsWith("aria-")||H==="role"||H==="title")return!0;return!1},Vp=L.createContext({}),Jp=()=>L.useContext(Vp),Up=L.forwardRef(({color:O,size:H,width:G,height:m,strokeWidth:R,absoluteStrokeWidth:F,nonScalingStroke:ue,className:ae="",children:U,iconNode:S=[],icon:B={node:S,aliases:[],size:24},...Z},E)=>{const{size:ne=24,strokeWidth:te=2,absoluteStrokeWidth:se=!1,nonScalingStroke:_=!1,color:me="currentColor",className:Ne=""}=Jp()??{},de=!!U||Dp(Z),[z,ce,ee=[]]=Ap(B,{color:O??me,width:G??H??ne,height:m??H??ne,strokeWidth:R??te,absoluteStrokeWidth:F??se,nonScalingStroke:ue??_,className:Qi(Ne,ae),hasA11yProp:de,attributes:Z});return L.createElement(z,{ref:E,...ce},[...ee.map(([J,Q])=>L.createElement(J,Q)),...Array.isArray(U)?U:[U]])});function ge(O,H=[],G=[]){const m=typeof O=="string"?Hp(O,H,G):O,R=L.forwardRef(({className:F,...ue},ae)=>L.createElement(Up,{ref:ae,icon:m,className:F,...ue}));return m.name&&(R.displayName=Tp(m.name)),R}const fx={name:"arrow-left-right",size:24,node:[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]};fx.node;const zp=ge(fx);const hx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};hx.node;const $i=ge(hx);const px={name:"arrow-up-down",size:24,node:[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]};px.node;const dx=ge(px);const mx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};mx.node;const Gp=ge(mx);const bx={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};bx.node;const In=ge(bx);const jx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};jx.node;const yx=ge(jx);const kx={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};kx.node;const vp=ge(kx);const Sx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Sx.node;const Zp=ge(Sx);const wx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};wx.node;const Ye=ge(wx);const Nx={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5",key:"1awbb0"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Nx.node;const Kp=ge(Nx);const Ox={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Ox.node;const Pp=ge(Ox);const gx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};gx.node;const Hx=ge(gx);const qx={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};qx.node;const eo=ge(qx);const Tx={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Tx.node;const to=ge(Tx);const Rx={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};Rx.node;const Mp=ge(Rx);const Ax={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Ax.node;const lo=ge(Ax);const Dx={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};Dx.node;const Cp=ge(Dx);const Vx={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};Vx.node;const Xi=ge(Vx);const Jx={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};Jx.node;const Lp=ge(Jx);const Ux={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};Ux.node;const zx=ge(Ux);const Gx={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Gx.node;const Ep=ge(Gx);const vx={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};vx.node;const Bp=ge(vx);const Zx={name:"puzzle",size:24,node:[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]};Zx.node;const Kx=ge(Zx);const Px={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Px.node;const Qt=ge(Px);const Mx={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Mx.node;const Cx=ge(Mx);const Lx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Lx.node;const sa=ge(Lx);const Ex={name:"spell-check",size:24,node:[["path",{d:"m20 15-5.5 5.5L12 18",key:"6ytzne"}],["path",{d:"m4 16 6-12 5.115 10.23",key:"fyukjg"}],["path",{d:"M6 12h8",key:"1hdiqa"}]]};Ex.node;const Wp=ge(Ex);const Bx={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Bx.node;const Fp=ge(Bx);const Wx={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};Wx.node;const Ip=ge(Wx);const Fx={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};Fx.node;const Qp=ge(Fx);const Ix={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};Ix.node;const Xp=ge(Ix);const Qx={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Qx.node;const Yp=ge(Qx);const Xx={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Xx.node;const Yx=ge(Xx);
const Yo = "tutorcall-missing-water-v1";

function defaultState() {
  return {
    screen: "lesson",
    stage: 1,
    completed: [],
    hotspots: [],
    activeCard: null,
    timer: 2700,
    timerOn: false,
    eiLetters: null,
    iiWords: null
  }
}

function loadState() {
  try {
    const n = localStorage.getItem(Yo);
    if (!n) return defaultState();
    const r = JSON.parse(n);
    return { ...defaultState(), ...r,
      completed: Array.isArray(r.completed) ? r.completed : [],
      hotspots: Array.isArray(r.hotspots) ? r.hotspots : []
    }
  } catch {
    return defaultState()
  }
}

function saveState(st) {
  try { localStorage.setItem(Yo, JSON.stringify(st)) } catch {}
}

function shuffleCopy(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t
  }
  return a
}

function normAns(s) {
  return String(s || "").trim().toLowerCase()
    .replace(/[’‘]/g, "'").replace(/'/g, "")
    .replace(/[!.?,]/g, "").replace(/\s+/g, " ").trim()
}

function usePersisted(key, fallback) {
  const [v, setV] = L.useState(() => {
    const s = loadState();
    return s[key] !== undefined ? s[key] : (typeof fallback === "function" ? fallback() : fallback)
  });
  const set = n => {
    setV(prev => {
      const next = typeof n === "function" ? n(prev) : n;
      const s = loadState();
      s[key] = next;
      saveState(s);
      return next
    })
  };
  return [v, set]
}

function applyBankShuffles(force) {
  const s = loadState();
  if (force || !s.eiLetters) {
    s.eiLetters = {};
    Ei.forEach(x => {
      const src = x._origLetters || x.letters;
      s.eiLetters[x.id] = shuffleCopy(src)
    })
  }
  if (force || !s.iiWords) {
    s.iiWords = {};
    Ii.forEach(x => {
      const src = x._origWords || x.words;
      s.iiWords[x.id] = shuffleCopy(src)
    })
  }
  saveState(s);
  Ei.forEach(x => {
    if (s.eiLetters && s.eiLetters[x.id]) x.letters = s.eiLetters[x.id]
  });
  Ii.forEach(x => {
    if (s.iiWords && s.iiWords[x.id]) x.words = s.iiWords[x.id]
  })
}

const It = [{
    id: "dishwasher",
    word: "dishwasher",
    transcription: "/ˈdɪʃˌwɒʃə/",
    translation: "посудомоечная машина",
    category: "noun",
    cropPosition: "23% 58%",
    exampleEn: "Always fill the dishwasher with plates before you turn it on.",
    exampleRu: "Всегда полностью заполняй посудомоечную машину тарелками перед включением.",
    detectiveClue: "Открыта на кухне слева от детектива; внутри стоят белые и зелёные тарелки."
  }, {
    id: "washing machine",
    word: "washing machine",
    transcription: "/ˈwɒʃɪŋ məˌʃiːn/",
    translation: "стиральная машина",
    category: "noun",
    cropPosition: "4% 55%",
    exampleEn: "There are blue clothes inside the washing machine.",
    exampleRu: "Внутри стиральной машины находится синяя одежда.",
    detectiveClue: "Стоит у левой стены рядом с посудомоечной машиной; через круглое окно видно бельё."
  }, {
    id: "tap",
    word: "tap",
    transcription: "/tæp/",
    translation: "водопроводный кран",
    category: "noun",
    cropPosition: "73% 24%",
    exampleEn: "Turn off the tap! Water is dripping into the sink.",
    exampleRu: "Закрой кран! Вода капает в раковину.",
    detectiveClue: "Высокий металлический кран над раковиной справа; из него течёт вода прямо вниз."
  }, {
    id: "bucket",
    word: "bucket",
    transcription: "/ˈbʌkɪt/",
    translation: "ведро",
    category: "noun",
    cropPosition: "71% 72%",
    exampleEn: "Put the blue bucket below the dripping tap to save water.",
    exampleRu: "Поставь синее ведро под капающий кран, чтобы сохранить воду.",
    detectiveClue: "Синее пластиковое ведро на полу под раковиной; оно уже почти полное воды."
  }, {
    id: "watering can",
    word: "watering can",
    transcription: "/ˈwɔːtərɪŋ kæn/",
    translation: "лейка",
    category: "noun",
    cropPosition: "86% 85%",
    exampleEn: "Use a green watering can to water the flowers in the garden.",
    exampleRu: "Используй зелёную лейку, чтобы полить цветы в саду.",
    detectiveClue: "Зелёная садовая лейка с длинным носиком на полу справа рядом с синим ведром."
  }, {
    id: "fill",
    word: "fill",
    transcription: "/fɪl/",
    translation: "наполнять",
    category: "verb",
    cropPosition: "71% 66%",
    exampleEn: "Fill the dishwasher and the washing machine before you turn them on.",
    exampleRu: "Наполняй посудомоечную и стиральную машину перед тем, как включить их.",
    detectiveClue: "Когда капли падают сверху, они постепенно наполняют синее ведро до краёв.",
    opposite: "empty"
  }, {
    id: "empty",
    word: "empty",
    transcription: "/ˈempti/",
    translation: "опустошать / выливать (или пустой)",
    category: "verb",
    cropPosition: "85% 82%",
    exampleEn: "Empty the water from the bucket into the watering can.",
    exampleRu: "Перелей (опустоши) воду из ведра в садовую лейку.",
    detectiveClue: "Нельзя включать технику, когда она пустая, а воду из ведра можно перелить в лейку.",
    opposite: "fill"
  }, {
    id: "waste",
    word: "waste",
    transcription: "/weɪst/",
    translation: "тратить зря (впустую)",
    category: "verb",
    cropPosition: "44% 92%",
    exampleEn: "Don’t waste water! Look at the puddles on the kitchen floor.",
    exampleRu: "Не трать воду зря! Посмотри на лужи на кухонном полу.",
    detectiveClue: "Лужи чистой воды на плиточном полу перед ботинками детектива — это потерянная зря вода!",
    opposite: "save"
  }, {
    id: "save",
    word: "save",
    transcription: "/seɪv/",
    translation: "беречь / экономить / сохранять",
    category: "verb",
    cropPosition: "72% 70%",
    exampleEn: "We can save a lot of water in the kitchen, bathroom, and garden.",
    exampleRu: "Мы можем сэкономить много воды на кухне, в ванной и в саду.",
    detectiveClue: "Главная цель нашего расследования — научиться беречь каждую каплю воды!",
    opposite: "waste"
  }, {
    id: "turn on",
    word: "turn on",
    transcription: "/tɜːn ɒn/",
    translation: "включать (прибор) / открывать (кран)",
    category: "verb",
    cropPosition: "6% 35%",
    exampleEn: "Only turn on the washing machine when it is full of clothes.",
    exampleRu: "Включай стиральную машину только тогда, когда она полна одежды.",
    detectiveClue: "Нажать кнопку старта на панели машины или повернуть ручку крана, чтобы пошла вода.",
    opposite: "turn off"
  }, {
    id: "turn off",
    word: "turn off",
    transcription: "/tɜːn ɒf/",
    translation: "выключать (прибор) / закрывать (кран)",
    category: "verb",
    cropPosition: "74% 28%",
    exampleEn: "Always turn off the tap while you brush your teeth.",
    exampleRu: "Всегда закрывай кран, пока чистишь зубы.",
    detectiveClue: "Крепко повернуть ручку крана обратно, чтобы вода перестала капать!",
    opposite: "turn on"
  }],
  Wn = [{
    id: "hs-washing-machine",
    number: 1,
    labelEn: "washing machine",
    labelRu: "Стиральная машина",
    x: 7,
    y: 54,
    prepositionNote: "It is BELOW the wooden shelf and NEXT TO the dishwasher.",
    questionEn: "What is inside the washing machine?",
    sampleAnswerEn: "I can see a washing machine. It is full of blue clothes!",
    vocabId: "washing machine"
  }, {
    id: "hs-dishwasher",
    number: 2,
    labelEn: "dishwasher",
    labelRu: "Посудомоечная машина",
    x: 24,
    y: 52,
    prepositionNote: "It is NEXT TO the washing machine.",
    questionEn: "Is the dishwasher full or empty?",
    sampleAnswerEn: "The dishwasher is open. Scientists/People filled it with white and green plates and bowls!",
    vocabId: "dishwasher"
  }, {
    id: "hs-plant-shelf",
    number: 3,
    labelEn: "green plant on the shelf (above)",
    labelRu: "Растение на полке (над машиной)",
    x: 10,
    y: 13,
    prepositionNote: "The green plant on the shelf is ABOVE the washing machine.",
    questionEn: "Where is the green potted plant?",
    sampleAnswerEn: "The green plant is on the shelf ABOVE the washing machine.",
    vocabId: "save"
  }, {
    id: "hs-detective",
    number: 4,
    labelEn: "boy detective with a magnifying glass",
    labelRu: "Детектив с лупой",
    x: 47,
    y: 48,
    prepositionNote: "The detective is between the dishwasher and the blue bucket.",
    questionEn: "What is the detective doing?",
    sampleAnswerEn: "He is looking at the water puddles on the floor with his magnifying glass.",
    vocabId: "save"
  }, {
    id: "hs-puddles",
    number: 5,
    labelEn: "water puddles on the floor (waste!)",
    labelRu: "Лужи воды на полу (трата воды!)",
    x: 44,
    y: 91,
    prepositionNote: "The puddles are on the floor BELOW the magnifying glass.",
    questionEn: "Is this saving water or wasting water?",
    sampleAnswerEn: "Oh no! Puddles on the floor waste water. Don’t waste water!",
    vocabId: "waste"
  }, {
    id: "hs-tap",
    number: 6,
    labelEn: "dripping tap",
    labelRu: "Капающий / текущий кран",
    x: 72,
    y: 23,
    prepositionNote: "The tap is ABOVE the sink and ABOVE the blue bucket.",
    questionEn: "What do we need to do with the dripping tap?",
    sampleAnswerEn: "Water is pouring from the tap! We must TURN OFF the tap.",
    vocabId: "tap"
  }, {
    id: "hs-bucket",
    number: 7,
    labelEn: "blue bucket",
    labelRu: "Синее ведро с водой",
    x: 71,
    y: 71,
    prepositionNote: "The blue bucket is BELOW the dripping tap and NEXT TO the watering can.",
    questionEn: "Why is the blue bucket below the tap?",
    sampleAnswerEn: "The dripping water fills the blue bucket so we can SAVE water!",
    vocabId: "bucket"
  }, {
    id: "hs-watering-can",
    number: 8,
    labelEn: "green watering can",
    labelRu: "Зелёная садовая лейка",
    x: 86,
    y: 83,
    prepositionNote: "The green watering can is NEXT TO the blue bucket.",
    questionEn: "How can we use the green watering can?",
    sampleAnswerEn: "We can empty the bucket into the watering can and water the purple flowers in the garden!",
    vocabId: "watering can"
  }],
  fs = [{
    id: "io-1",
    questionEn: "1. Look at the photo on the left. Which two machines can you see in the kitchen?",
    hintRu: "Какие две машины стоят слева на кухне?",
    options: ["A washing machine and a dishwasher", "A fridge and a television", "Two washing machines"],
    correctAnswer: "A washing machine and a dishwasher",
    explanationRu: "Верно! Слева стоят стиральная машина (washing machine) и открытая посудомоечная машина (dishwasher)."
  }, {
    id: "io-2",
    questionEn: "2. Look inside the open dishwasher. Is it full of dishes or empty?",
    hintRu: "Посмотри внутрь посудомоечной машины: она полная или пустая?",
    options: ["It is full of white and green plates and bowls.", "It is completely empty.", "It is full of blue clothes."],
    correctAnswer: "It is full of white and green plates and bowls.",
    explanationRu: "Точно! Внутри стоят белые тарелки и зелёные миски — она заполнена (full)."
  }, {
    id: "io-3",
    questionEn: "3. Look inside the round window of the washing machine. What is inside it?",
    hintRu: "Что видно через круглое окошко стиральной машины?",
    options: ["Blue clothes and soap bubbles", "Plates and cups", "Green garden flowers"],
    correctAnswer: "Blue clothes and soap bubbles",
    explanationRu: "Отличная наблюдательность! Внутри стиральной машины — синее бельё."
  }, {
    id: "io-4",
    questionEn: "4. What is happening at the sink on the right?",
    hintRu: "Что происходит с краном справа?",
    options: ["Water is dripping and splashing from the tap.", "The tap is turned off tightly.", "There is no tap on the sink."],
    correctAnswer: "Water is dripping and splashing from the tap.",
    explanationRu: "Улика найдена! Кран (tap) не закрыт, и вода льётся через край раковины."
  }, {
    id: "io-5",
    questionEn: "5. What container is catching the water on the floor below the tap?",
    hintRu: "Какой предмет на полу под краном собирает капающую воду?",
    options: ["A blue bucket", "A red cup", "A brown box"],
    correctAnswer: "A blue bucket",
    explanationRu: "Верно! Под краном стоит синее ведро (a blue bucket), которое наполняется водой."
  }, {
    id: "io-6",
    questionEn: "6. What green object is standing on the floor next to the blue bucket?",
    hintRu: "Какой зелёный предмет стоит справа рядом с синим ведром?",
    options: ["A green watering can", "A green dishwasher", "A green umbrella"],
    correctAnswer: "A green watering can",
    explanationRu: "Правильно! Это зелёная садовая лейка (a green watering can)."
  }, {
    id: "io-7",
    questionEn: "7. What is the boy detective looking at with his magnifying glass?",
    hintRu: "На что смотрит мальчик-детектив через лупу?",
    options: ["Water puddles on the floor — someone is wasting water!", "A lost cat under the table", "Homework in a notebook"],
    correctAnswer: "Water puddles on the floor — someone is wasting water!",
    explanationRu: "Блестяще! Детектив изучает лужи на полу — кто-то тратит воду зря (wasting water)!"
  }],
  Pi = [{
    id: "dishwasher",
    word: "dishwasher",
    clueRu: "Машина, которая моет тарелки и чашки на кухне",
    sentenceEn: "Put the dirty plates into the dishwasher."
  }, {
    id: "washing machine",
    word: "washing machine",
    clueRu: "Машина с круглым окошком для стирки одежды",
    sentenceEn: "My blue T-shirt is in the washing machine."
  }, {
    id: "tap",
    word: "tap",
    clueRu: "Металлический кран над раковиной, откуда течёт вода",
    sentenceEn: "Water comes out of the tap."
  }, {
    id: "bucket",
    word: "bucket",
    clueRu: "Глубокое синее ведро с ручкой для сбора воды",
    sentenceEn: "The blue bucket is full of water."
  }, {
    id: "watering can",
    word: "watering can",
    clueRu: "Садовая лейка с длинным носиком для полива цветов",
    sentenceEn: "Take the green watering can to the garden."
  }, {
    id: "fill",
    word: "fill",
    clueRu: "Наполнять доверху (антоним к слову empty)",
    sentenceEn: "Fill the bucket with water."
  }, {
    id: "waste",
    word: "waste",
    clueRu: "Тратить воду впустую, оставляя лужи и открытый кран",
    sentenceEn: "Don’t waste clean water!"
  }, {
    id: "turn off",
    word: "turn off",
    clueRu: "Закрыть кран или выключить прибор, чтобы остановить воду",
    sentenceEn: "Please turn off the tap now."
  }],
  Mi = [{
    id: "m1c-1",
    sentenceEn: "1. Look at all these dirty plates and bowls! Let’s put them in the ___.",
    translationRu: "Посмотри на эти грязные тарелки и миски! Давай положим их в посудомоечную машину.",
    options: ["dishwasher", "washing machine", "watering can"],
    correct: "dishwasher"
  }, {
    id: "m1c-2",
    sentenceEn: "2. Your sports jacket and jeans are dirty. Put them in the ___.",
    translationRu: "Твоя спортивная куртка и джинсы грязные. Положи их в стиральную машину.",
    options: ["washing machine", "dishwasher", "tap"],
    correct: "washing machine"
  }, {
    id: "m1c-3",
    sentenceEn: "3. Drip, drop! Water is falling from the kitchen ___.",
    translationRu: "Кап-кап! Вода капает из кухонного крана.",
    options: ["tap", "bucket", "garden"],
    correct: "tap"
  }, {
    id: "m1c-4",
    sentenceEn: "4. Let’s put a blue ___ on the floor to catch the dripping water.",
    translationRu: "Давай поставим синее ведро на пол, чтобы поймать капающую воду.",
    options: ["bucket", "tap", "dishwasher"],
    correct: "bucket"
  }, {
    id: "m1c-5",
    sentenceEn: "5. The purple flowers in the garden are thirsty! Bring the green ___.",
    translationRu: "Фиолетовые цветы в саду хотят пить! Принеси зелёную лейку.",
    options: ["watering can", "washing machine", "tap"],
    correct: "watering can"
  }, {
    id: "m1c-6",
    sentenceEn: "6. When you brush your teeth, always ___ the tap.",
    translationRu: "Когда ты чистишь зубы, всегда закрывай кран.",
    options: ["turn off", "turn on", "waste"],
    correct: "turn off"
  }, {
    id: "m1c-7",
    sentenceEn: "7. Planet Earth needs clean water. We must ___ water every day!",
    translationRu: "Планете Земля нужна чистая вода. Мы должны беречь воду каждый день!",
    options: ["save", "waste", "empty"],
    correct: "save"
  }],
  Wa = [{
    id: "m1cl-1",
    before: "1. Always ",
    after: " the dishwasher with dishes before you start it.",
    hintRu: "наполняй",
    correct: "fill"
  }, {
    id: "m1cl-2",
    before: "2. Only ",
    after: " the washing machine when it is completely full.",
    hintRu: "включай",
    correct: "turn on"
  }, {
    id: "m1cl-3",
    before: "3. Don’t ",
    after: " water when you wash your hands in the bathroom.",
    hintRu: "трать зря",
    correct: "waste"
  }, {
    id: "m1cl-4",
    before: "4. Remember to ",
    after: " the tap tightly so it doesn’t drip.",
    hintRu: "закрыть / выключить",
    correct: "turn off"
  }, {
    id: "m1cl-5",
    before: "5. You can ",
    after: " the water from the blue bucket into the green watering can.",
    hintRu: "перелить / опустошить",
    correct: "empty"
  }, {
    id: "m1cl-6",
    before: "6. Use a ",
    after: " to water the plants outside in the sunny garden.",
    hintRu: "лейку",
    correct: "watering can"
  }, {
    id: "m1cl-7",
    before: "7. Every detective knows how to ",
    after: " water at home!",
    hintRu: "беречь / экономить",
    correct: "save"
  }],
  hs = [{
    id: "m2p-1",
    before: "1. Look at the top left of the photo: the green plant on the wooden shelf is ",
    after: " the washing machine.",
    correct: "above",
    visualClueRu: "Цветок в горшке стоит на полке ВЫШЕ (над) стиральной машиной.",
    zone: "Photo Scene"
  }, {
    id: "m2p-2",
    before: "2. The silver washing machine is right ",
    after: " the wooden shelf with the plant.",
    correct: "below",
    visualClueRu: "Стиральная машина находится НИЖЕ (под) деревянной полкой.",
    zone: "Photo Scene"
  }, {
    id: "m2p-3",
    before: "3. The open dishwasher with plates is ",
    after: " the washing machine.",
    correct: "next to",
    visualClueRu: "Посудомоечная и стиральная машины стоят бок о бок (РЯДОМ друг с другом).",
    zone: "Photo Scene"
  }, {
    id: "m2p-4",
    before: "4. Look at the sink on the right: the dripping tap is ",
    after: " the blue bucket.",
    correct: "above",
    visualClueRu: "Кран расположен ВЫШЕ (над) синим ведром, и вода падает сверху вниз.",
    zone: "Photo Scene"
  }, {
    id: "m2p-5",
    before: "5. The blue bucket is standing on the tiled floor ",
    after: " the dripping tap.",
    correct: "below",
    visualClueRu: "Синее ведро стоит на полу НИЖЕ (под) капающим краном.",
    zone: "Photo Scene"
  }, {
    id: "m2p-6",
    before: "6. The green watering can is on the floor ",
    after: " the blue bucket.",
    correct: "next to",
    visualClueRu: "Зелёная лейка стоит на полу сбоку, РЯДОМ С синим ведром.",
    zone: "Photo Scene"
  }, {
    id: "m2p-7",
    before: "7. Look at the kitchen wall: the brown wooden cupboard is ",
    after: " the sink.",
    correct: "above",
    visualClueRu: "Деревянный шкафчик висит на стене НАД раковиной.",
    zone: "Kitchen"
  }, {
    id: "m2p-8",
    before: "8. Outside in the garden, the purple flowers are growing ",
    after: " the open glass door.",
    correct: "next to",
    visualClueRu: "Фиолетовые цветы растут в саду прямо РЯДОМ С открытой стеклянной дверью.",
    zone: "Garden"
  }],
  Ci = [{
    id: "m2tf-1",
    statementEn: "1. In the photo, the blue bucket is ABOVE the dripping tap.",
    translationRu: "На фото синее ведро находится НАД капающим краном.",
    isTrue: !1,
    correctionEn: "False! The blue bucket is BELOW the dripping tap."
  }, {
    id: "m2tf-2",
    statementEn: "2. The green watering can is NEXT TO the blue bucket.",
    translationRu: "Зелёная лейка стоит РЯДОМ С синим ведром.",
    isTrue: !0,
    correctionEn: "True! They are standing next to each other on the floor."
  }, {
    id: "m2tf-3",
    statementEn: "3. The dishwasher is ABOVE the wooden shelf.",
    translationRu: "Посудомоечная машина находится НАД деревянной полкой.",
    isTrue: !1,
    correctionEn: "False! The dishwasher is BELOW the countertop and NEXT TO the washing machine."
  }, {
    id: "m2tf-4",
    statementEn: "4. The green potted plant is ABOVE the washing machine.",
    translationRu: "Зелёное растение в горшке находится НАД стиральной машиной.",
    isTrue: !0,
    correctionEn: "True! It sits on the high wooden shelf above the washing machine."
  }, {
    id: "m2tf-5",
    statementEn: "5. The water puddles on the floor are BELOW the detective’s magnifying glass.",
    translationRu: "Лужи воды на полу находятся ПОД лупой детектива.",
    isTrue: !0,
    correctionEn: "True! The boy detective is holding his magnifying glass right above the puddles."
  }, {
    id: "m2tf-6",
    statementEn: "6. In a bathroom, the mirror on the wall is usually ABOVE the sink and tap.",
    translationRu: "В ванной комнате зеркало на стене обычно висит НАД раковиной и краном.",
    isTrue: !0,
    correctionEn: "True! The mirror is above the sink, and the floor is below the sink."
  }],
  Li = [{
    id: "m3i-1",
    zone: "Kitchen",
    promptRu: "Инструкция №1 (Кухня): Заполни посудомоечную машину перед включением.",
    beforeEn: "Always",
    blank1Options: ["fill", "empty", "waste"],
    correct1: "fill",
    middleEn: "the dishwasher before you",
    blank2Options: ["turn it on", "turn it off", "waste it"],
    correct2: "turn it on",
    afterEn: ".",
    fullSentenceEn: "Always fill the dishwasher before you turn it on."
  }, {
    id: "m3i-2",
    zone: "Kitchen",
    promptRu: "Инструкция №2 (Стирка): Не включай стиральную машину, когда она пустая.",
    beforeEn: "Don’t",
    blank1Options: ["turn on", "turn off", "save"],
    correct1: "turn on",
    middleEn: "the washing machine when it is",
    blank2Options: ["empty", "full", "above"],
    correct2: "empty",
    afterEn: ".",
    fullSentenceEn: "Don’t turn on the washing machine when it is empty."
  }, {
    id: "m3i-3",
    zone: "Bathroom",
    promptRu: "Инструкция №3 (Ванная): Закрывай кран во время чистки зубов, чтобы беречь воду.",
    beforeEn: "Always",
    blank1Options: ["turn off", "turn on", "fill"],
    correct1: "turn off",
    middleEn: "the tap when you brush your teeth to",
    blank2Options: ["save", "waste", "empty"],
    correct2: "save",
    afterEn: "water.",
    fullSentenceEn: "Always turn off the tap when you brush your teeth to save water."
  }, {
    id: "m3i-4",
    zone: "Kitchen",
    promptRu: "Инструкция №4 (Капающий кран): Поставь ведро под кран и не трать воду зря.",
    beforeEn: "Put a blue",
    blank1Options: ["bucket", "dishwasher", "tap"],
    correct1: "bucket",
    middleEn: "below a dripping tap and don’t",
    blank2Options: ["waste", "save", "turn on"],
    correct2: "waste",
    afterEn: "water!",
    fullSentenceEn: "Put a blue bucket below a dripping tap and don’t waste water!"
  }, {
    id: "m3i-5",
    zone: "Garden",
    promptRu: "Инструкция №5 (Для сада): Перелей воду из ведра в садовую лейку.",
    beforeEn: "Carefully",
    blank1Options: ["empty", "waste", "turn off"],
    correct1: "empty",
    middleEn: "the water from the bucket into the green",
    blank2Options: ["watering can", "washing machine", "dishwasher"],
    correct2: "watering can",
    afterEn: ".",
    fullSentenceEn: "Carefully empty the water from the bucket into the green watering can."
  }, {
    id: "m3i-6",
    zone: "Garden",
    promptRu: "Инструкция №6 (Полив растений): Наполни лейку, чтобы полить цветы в саду.",
    beforeEn: "In the garden,",
    blank1Options: ["fill", "turn off", "waste"],
    correct1: "fill",
    middleEn: "the watering can to",
    blank2Options: ["save", "waste", "empty"],
    correct2: "save",
    afterEn: "water for the flowers.",
    fullSentenceEn: "In the garden, fill the watering can to save water for the flowers."
  }, {
    id: "m3i-7",
    zone: "Bathroom",
    promptRu: "Инструкция №7 (Главное правило): Никогда не оставляй кран открытым!",
    beforeEn: "Never leave the",
    blank1Options: ["tap", "bucket", "watering can"],
    correct1: "tap",
    middleEn: "running — always",
    blank2Options: ["turn it off", "turn it on", "fill it"],
    correct2: "turn it off",
    afterEn: "after washing your hands.",
    fullSentenceEn: "Never leave the tap running — always turn it off after washing your hands."
  }],
  Ei = [{
    id: "scr-1",
    targetWord: "bucket",
    translationRu: "ведро",
    letters: ["c", "b", "k", "u", "t", "e"],
    cropPosition: "71% 72%"
  }, {
    id: "scr-2",
    targetWord: "dishwasher",
    translationRu: "посудомоечная машина",
    letters: ["s", "d", "i", "h", "w", "a", "s", "h", "r", "e"],
    cropPosition: "23% 58%"
  }, {
    id: "scr-3",
    targetWord: "waste",
    translationRu: "тратить зря",
    letters: ["s", "w", "t", "a", "e"],
    cropPosition: "44% 92%"
  }, {
    id: "scr-4",
    targetWord: "empty",
    translationRu: "опустошать / пустой",
    letters: ["p", "e", "m", "y", "t"],
    cropPosition: "85% 82%"
  }, {
    id: "scr-5",
    targetWord: "tap",
    translationRu: "водопроводный кран",
    letters: ["p", "t", "a"],
    cropPosition: "73% 24%"
  }, {
    id: "scr-6",
    targetWord: "fill",
    translationRu: "наполнять",
    letters: ["l", "f", "l", "i"],
    cropPosition: "71% 66%"
  }, {
    id: "scr-7",
    targetWord: "save",
    translationRu: "беречь / сохранять",
    letters: ["v", "s", "e", "a"],
    cropPosition: "72% 70%"
  }],
  Bi = [{
    id: "pd-1",
    targetWord: "dishwasher",
    translationRu: "посудомоечная машина",
    clueEn: "We put dirty plates and bowls inside this kitchen machine.",
    firstLetterHint: "d _ _ _ w _ _ _ _ _"
  }, {
    id: "pd-2",
    targetWord: "washing machine",
    translationRu: "стиральная машина (2 слова)",
    clueEn: "We wash our dirty clothes inside this machine.",
    firstLetterHint: "w _ _ _ _ _ _   m _ _ _ _ _ _"
  }, {
    id: "pd-3",
    targetWord: "watering can",
    translationRu: "лейка (2 слова)",
    clueEn: "A green container with a spout for watering garden plants.",
    firstLetterHint: "w _ _ _ _ _ _ _   c _ _"
  }, {
    id: "pd-4",
    targetWord: "bucket",
    translationRu: "ведро",
    clueEn: "A blue round container standing below the dripping tap.",
    firstLetterHint: "b _ _ _ _ _"
  }, {
    id: "pd-5",
    targetWord: "tap",
    translationRu: "кран",
    clueEn: "Turn it on to get water, and turn it off to stop the water.",
    firstLetterHint: "t _ _"
  }, {
    id: "pd-6",
    targetWord: "turn off",
    translationRu: "выключать / закрывать кран (2 слова)",
    clueEn: "Always ___ ___ the tap when you brush your teeth.",
    firstLetterHint: "t _ _ _   o _ _"
  }, {
    id: "pd-7",
    targetWord: "turn on",
    translationRu: "включать / открывать кран (2 слова)",
    clueEn: "Only ___ ___ the dishwasher when it is full.",
    firstLetterHint: "t _ _ _   o _"
  }],
  Wi = [{
    id: "ec-1",
    sentenceWithMistake: "1. Always fill the DISCHWASHER before you turn it on.",
    wrongWord: "dischwasher",
    correctWord: "dishwasher",
    translationRu: "Всегда наполняй посудомоечную машину перед включением."
  }, {
    id: "ec-2",
    sentenceWithMistake: "2. Put your blue clothes into the WOSHING MACHINE.",
    wrongWord: "woshing machine",
    correctWord: "washing machine",
    translationRu: "Положи синюю одежду в стиральную машину."
  }, {
    id: "ec-3",
    sentenceWithMistake: "3. Put the blue BUKET below the dripping tap.",
    wrongWord: "buket",
    correctWord: "bucket",
    translationRu: "Поставь синее ведро под капающий кран."
  }, {
    id: "ec-4",
    sentenceWithMistake: "4. Take the green WATRING CAN to the garden.",
    wrongWord: "watring can",
    correctWord: "watering can",
    translationRu: "Отнеси зелёную лейку в сад."
  }, {
    id: "ec-5",
    sentenceWithMistake: "5. Don’t WAISTE clean water at home!",
    wrongWord: "waiste",
    correctWord: "waste",
    translationRu: "Не трать чистую воду зря дома!"
  }, {
    id: "ec-6",
    sentenceWithMistake: "6. Please TERN OFF the tap tightly.",
    wrongWord: "tern off",
    correctWord: "turn off",
    translationRu: "Пожалуйста, крепко закрой кран."
  }, {
    id: "ec-7",
    sentenceWithMistake: "7. Never turn on the dishwasher when it is EMTY.",
    wrongWord: "emty",
    correctWord: "empty",
    translationRu: "Никогда не включай посудомоечную машину, когда она пустая."
  }],
  Fn = [{
    id: "rep-1",
    stepNumber: 1,
    zoneBadge: "Вступление (Главное правило)",
    zoneColor: "bg-sky-100 text-sky-800 border-sky-300",
    promptRu: "Начни отчёт с главного призыва детектива о воде:",
    sentenceStarter: "Water is very important, so don’t",
    options: ["waste water at home — always save it!", "turn on all the taps in the house!", "empty water onto the kitchen floor!"],
    correctOption: "waste water at home — always save it!",
    fullModelSentence: "Water is very important, so don’t waste water at home — always save it!"
  }, {
    id: "rep-2",
    stepNumber: 2,
    zoneBadge: "Кухня (Посудомоечная машина)",
    zoneColor: "bg-amber-100 text-amber-800 border-amber-300",
    promptRu: "Правило №1 для кухни (про посудомоечную машину):",
    sentenceStarter: "In the kitchen, always fill the dishwasher with plates",
    options: ["before you turn it on.", "when it is completely empty.", "below the garden flowers."],
    correctOption: "before you turn it on.",
    fullModelSentence: "In the kitchen, always fill the dishwasher with plates before you turn it on."
  }, {
    id: "rep-3",
    stepNumber: 3,
    zoneBadge: "Прачечная / Кухня (Стиральная машина)",
    zoneColor: "bg-amber-100 text-amber-800 border-amber-300",
    promptRu: "Правило №2 для стирки (про стиральную машину рядом с посудомоечной):",
    sentenceStarter: "Look at the washing machine next to the dishwasher: always fill it with clothes",
    options: ["and never turn it on when it is empty.", "and waste a lot of water on the floor.", "above the wooden shelf."],
    correctOption: "and never turn it on when it is empty.",
    fullModelSentence: "Look at the washing machine next to the dishwasher: always fill it with clothes and never turn it on when it is empty."
  }, {
    id: "rep-4",
    stepNumber: 4,
    zoneBadge: "Ванная комната (Кран)",
    zoneColor: "bg-blue-100 text-blue-800 border-blue-300",
    promptRu: "Правило №3 для ванной комнаты (чистка зубов и мытьё рук):",
    sentenceStarter: "In the bathroom, always turn off the tap",
    options: ["when you brush your teeth or wash your hands.", "when you want to fill the bucket.", "when the washing machine is full."],
    correctOption: "when you brush your teeth or wash your hands.",
    fullModelSentence: "In the bathroom, always turn off the tap when you brush your teeth or wash your hands."
  }, {
    id: "rep-5",
    stepNumber: 5,
    zoneBadge: "Спасение капель (Кран + Ведро)",
    zoneColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    promptRu: "Правило №4 по уликам с фото (что делать, если кран капает сверху):",
    sentenceStarter: "If water drips from the tap above the sink, put a bucket",
    options: ["below the tap to catch and save the water.", "above the wooden cupboard.", "inside the dishwasher."],
    correctOption: "below the tap to catch and save the water.",
    fullModelSentence: "If water drips from the tap above the sink, put a bucket below the tap to catch and save the water."
  }, {
    id: "rep-6",
    stepNumber: 6,
    zoneBadge: "Переливание воды (Ведро → Лейка)",
    zoneColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    promptRu: "Правило №5 (как использовать собранную в ведро воду):",
    sentenceStarter: "When the blue bucket is full, empty the water from the bucket",
    options: ["into the green watering can next to it.", "onto the kitchen floor to make puddles.", "into the washing machine."],
    correctOption: "into the green watering can next to it.",
    fullModelSentence: "When the blue bucket is full, empty the water from the bucket into the green watering can next to it."
  }, {
    id: "rep-7",
    stepNumber: 7,
    zoneBadge: "Сад (Полив цветов)",
    zoneColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    promptRu: "Правило №6 для сада (полив цветов из лейки):",
    sentenceStarter: "In the garden, use a watering can instead of a running tap",
    options: ["to water the flowers and plants.", "to wash the dirty plates.", "to brush your teeth."],
    correctOption: "to water the flowers and plants.",
    fullModelSentence: "In the garden, use a watering can instead of a running tap to water the flowers and plants."
  }, {
    id: "rep-8",
    stepNumber: 8,
    zoneBadge: "Заключение детектива",
    zoneColor: "bg-teal-100 text-teal-800 border-teal-300",
    promptRu: "Финальная фраза твоего отчёта (Предложение №8):",
    sentenceStarter: "Follow these easy detective rules every day",
    options: ["to save water and help our Planet Water!", "to waste more water in the kitchen!", "to leave all the taps turned on!"],
    correctOption: "to save water and help our Planet Water!",
    fullModelSentence: "Follow these easy detective rules every day to save water and help our Planet Water!"
  }],
  Fi = [{
    id: "es-1",
    habitEn: "Fill the dishwasher completely before you turn it on.",
    habitRu: "Полностью заполнять посудомоечную машину перед включением.",
    category: "save"
  }, {
    id: "es-2",
    habitEn: "Leave the tap turned on while you brush your teeth.",
    habitRu: "Оставлять кран открытым во время чистки зубов.",
    category: "waste"
  }, {
    id: "es-3",
    habitEn: "Put a blue bucket below a dripping tap.",
    habitRu: "Поставить синее ведро под капающий кран.",
    category: "save"
  }, {
    id: "es-4",
    habitEn: "Turn on the washing machine with only one T-shirt inside.",
    habitRu: "Включать стиральную машину всего с одной футболкой внутри.",
    category: "waste"
  }, {
    id: "es-5",
    habitEn: "Empty the water from the bucket into a watering can for the garden.",
    habitRu: "Переливать воду из ведра в лейку для полива сада.",
    category: "save"
  }, {
    id: "es-6",
    habitEn: "Make big puddles of clean water on the kitchen floor.",
    habitRu: "Разливать лужи чистой воды на кухонном полу.",
    category: "waste"
  }, {
    id: "es-7",
    habitEn: "Turn off the tap tightly after washing your hands.",
    habitRu: "Крепко закрывать кран после мытья рук.",
    category: "save"
  }, {
    id: "es-8",
    habitEn: "Empty a full watering can onto the street instead of watering plants.",
    habitRu: "Выливать полную лейку на асфальт вместо полива растений.",
    category: "waste"
  }],
  Ii = [{
    id: "bsu-1",
    hintRu: "Не трать воду зря дома!",
    words: ["water", "Don’t", "at", "waste", "home!"],
    targetSentence: "Don’t waste water at home!"
  }, {
    id: "bsu-2",
    hintRu: "Всегда закрывай водопроводный кран.",
    words: ["the", "Always", "off", "tap.", "turn"],
    targetSentence: "Always turn off the tap."
  }, {
    id: "bsu-3",
    hintRu: "Наполни посудомоечную машину перед тем, как включить её.",
    words: ["the", "Fill", "before", "dishwasher", "you", "turn it on."],
    targetSentence: "Fill the dishwasher before you turn it on."
  }, {
    id: "bsu-4",
    hintRu: "Синее ведро находится под капающим краном.",
    words: ["below", "The blue bucket", "is", "the dripping tap."],
    targetSentence: "The blue bucket is below the dripping tap."
  }, {
    id: "bsu-5",
    hintRu: "Зелёная лейка стоит рядом с ведром.",
    words: ["next to", "The green watering can", "is", "the bucket."],
    targetSentence: "The green watering can is next to the bucket."
  }, {
    id: "bsu-6",
    hintRu: "Перелей воду из ведра в лейку.",
    words: ["the bucket", "Empty", "into", "the watering can."],
    targetSentence: "Empty the bucket into the watering can."
  }],
  _p = "images/detective-hero.jpg",
  Fa = _p,

  Kt = ({
    id: O,
    className: H = "w-14 h-14"
  }) => {
    switch (O) {
      case "dishwasher":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("rect", {
            x: "8",
            y: "6",
            width: "48",
            height: "52",
            rx: "6",
            fill: "#475569",
            stroke: "#1E293B",
            strokeWidth: "2.5"
          }), n.jsx("rect", {
            x: "12",
            y: "10",
            width: "40",
            height: "8",
            rx: "2",
            fill: "#1E293B"
          }), n.jsx("circle", {
            cx: "18",
            cy: "14",
            r: "2",
            fill: "#38BDF8"
          }), n.jsx("circle", {
            cx: "24",
            cy: "14",
            r: "2",
            fill: "#22C55E"
          }), n.jsx("rect", {
            x: "38",
            y: "12",
            width: "10",
            height: "4",
            rx: "1",
            fill: "#0284C7"
          }), n.jsx("rect", {
            x: "12",
            y: "21",
            width: "40",
            height: "32",
            rx: "3",
            fill: "#E2E8F0",
            stroke: "#334155",
            strokeWidth: "2"
          }), n.jsx("ellipse", {
            cx: "22",
            cy: "30",
            rx: "6",
            ry: "5",
            fill: "#FFFFFF",
            stroke: "#0284C7",
            strokeWidth: "2"
          }), n.jsx("ellipse", {
            cx: "34",
            cy: "30",
            rx: "6",
            ry: "5",
            fill: "#DCFCE7",
            stroke: "#16A34A",
            strokeWidth: "2"
          }), n.jsx("path", {
            d: "M42 26 H50 L48 34 H44 Z",
            fill: "#FEF08A",
            stroke: "#CA8A04",
            strokeWidth: "1.8"
          }), n.jsx("line", {
            x1: "13",
            y1: "35",
            x2: "51",
            y2: "35",
            stroke: "#64748B",
            strokeWidth: "2",
            strokeDasharray: "3 2"
          }), n.jsx("circle", {
            cx: "21",
            cy: "44",
            r: "6",
            fill: "#FFFFFF",
            stroke: "#0284C7",
            strokeWidth: "2"
          }), n.jsx("circle", {
            cx: "27",
            cy: "44",
            r: "6",
            fill: "#FFFFFF",
            stroke: "#0284C7",
            strokeWidth: "2"
          }), n.jsx("circle", {
            cx: "33",
            cy: "44",
            r: "6",
            fill: "#DCFCE7",
            stroke: "#16A34A",
            strokeWidth: "2"
          }), n.jsx("circle", {
            cx: "43",
            cy: "45",
            r: "5",
            fill: "#BAE6FD",
            stroke: "#0284C7",
            strokeWidth: "2"
          }), n.jsx("line", {
            x1: "13",
            y1: "50",
            x2: "51",
            y2: "50",
            stroke: "#64748B",
            strokeWidth: "2"
          })]
        });
      case "washing machine":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("rect", {
            x: "10",
            y: "6",
            width: "44",
            height: "52",
            rx: "6",
            fill: "#F8FAFC",
            stroke: "#334155",
            strokeWidth: "2.5"
          }), n.jsx("line", {
            x1: "10",
            y1: "18",
            x2: "54",
            y2: "18",
            stroke: "#94A3B8",
            strokeWidth: "2"
          }), n.jsx("rect", {
            x: "14",
            y: "10",
            width: "12",
            height: "5",
            rx: "1.5",
            fill: "#E2E8F0",
            stroke: "#64748B",
            strokeWidth: "1.5"
          }), n.jsx("circle", {
            cx: "33",
            cy: "12.5",
            r: "3",
            fill: "#0284C7"
          }), n.jsx("rect", {
            x: "40",
            y: "10",
            width: "10",
            height: "5",
            rx: "1.5",
            fill: "#1E293B"
          }), n.jsx("circle", {
            cx: "32",
            cy: "38",
            r: "15",
            fill: "#94A3B8",
            stroke: "#334155",
            strokeWidth: "2.5"
          }), n.jsx("circle", {
            cx: "32",
            cy: "38",
            r: "11",
            fill: "#0284C7"
          }), n.jsx("path", {
            d: "M21 38 Q27 32 32 38 T43 38 A11 11 0 0 1 21 38 Z",
            fill: "#38BDF8"
          }), n.jsx("circle", {
            cx: "28",
            cy: "34",
            r: "2",
            fill: "#FFFFFF",
            fillOpacity: "0.8"
          }), n.jsx("circle", {
            cx: "36",
            cy: "41",
            r: "1.5",
            fill: "#FFFFFF",
            fillOpacity: "0.8"
          })]
        });
      case "tap":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("path", {
            d: "M16 42 V22 C16 14 23 10 30 10 C37 10 43 15 43 22 V28",
            stroke: "#64748B",
            strokeWidth: "7",
            strokeLinecap: "round"
          }), n.jsx("path", {
            d: "M16 42 V22 C16 14 23 10 30 10 C37 10 43 15 43 22 V28",
            stroke: "#CBD5E1",
            strokeWidth: "3.5",
            strokeLinecap: "round"
          }), n.jsx("rect", {
            x: "10",
            y: "40",
            width: "14",
            height: "6",
            rx: "2",
            fill: "#475569"
          }), n.jsx("rect", {
            x: "20",
            y: "29",
            width: "10",
            height: "4",
            rx: "2",
            fill: "#0284C7"
          }), n.jsx("rect", {
            x: "39",
            y: "27",
            width: "8",
            height: "4",
            rx: "1.5",
            fill: "#475569"
          }), n.jsx("path", {
            d: "M43 35 C43 35 39 41 39 44 C39 46.2 40.8 48 43 48 C45.2 48 47 46.2 47 44 C47 41 43 35 43 35 Z",
            fill: "#0284C7"
          }), n.jsx("path", {
            d: "M43 51 C43 51 40.5 55 40.5 57 C40.5 58.4 41.6 59.5 43 59.5 C44.4 59.5 45.5 58.4 45.5 57 C45.5 55 43 51 43 51 Z",
            fill: "#38BDF8"
          })]
        });
      case "bucket":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("path", {
            d: "M14 22 C14 10 50 10 50 22",
            stroke: "#475569",
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }), n.jsx("path", {
            d: "M14 20 H50 L45 54 C44.5 56 42.5 57 40 57 H24 C21.5 57 19.5 56 19 54 L14 20 Z",
            fill: "#1D4ED8",
            stroke: "#1E3A8A",
            strokeWidth: "2.5"
          }), n.jsx("ellipse", {
            cx: "32",
            cy: "20",
            rx: "19",
            ry: "5",
            fill: "#3B82F6",
            stroke: "#1E3A8A",
            strokeWidth: "2.5"
          }), n.jsx("ellipse", {
            cx: "32",
            cy: "20",
            rx: "15",
            ry: "3",
            fill: "#38BDF8"
          }), n.jsx("path", {
            d: "M23 32 Q32 36 41 32",
            stroke: "#60A5FA",
            strokeWidth: "2",
            strokeLinecap: "round"
          })]
        });
      case "watering can":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("path", {
            d: "M36 20 C48 12 58 24 48 42",
            stroke: "#15803D",
            strokeWidth: "4.5",
            strokeLinecap: "round"
          }), n.jsx("path", {
            d: "M24 22 C24 14 40 14 40 22",
            stroke: "#15803D",
            strokeWidth: "4",
            strokeLinecap: "round"
          }), n.jsx("path", {
            d: "M23 40 L10 26 L13 23 L25 33",
            fill: "#16A34A",
            stroke: "#14532D",
            strokeWidth: "2"
          }), n.jsx("ellipse", {
            cx: "10",
            cy: "24",
            rx: "3",
            ry: "5",
            transform: "rotate(-40 10 24)",
            fill: "#22C55E",
            stroke: "#14532D",
            strokeWidth: "2"
          }), n.jsx("rect", {
            x: "22",
            y: "22",
            width: "24",
            height: "30",
            rx: "4",
            fill: "#16A34A",
            stroke: "#14532D",
            strokeWidth: "2.5"
          }), n.jsx("ellipse", {
            cx: "34",
            cy: "22",
            rx: "12",
            ry: "3.5",
            fill: "#22C55E",
            stroke: "#14532D",
            strokeWidth: "2"
          }), n.jsx("circle", {
            cx: "5",
            cy: "30",
            r: "1.8",
            fill: "#0284C7"
          }), n.jsx("circle", {
            cx: "8",
            cy: "35",
            r: "1.8",
            fill: "#38BDF8"
          })]
        });
      case "fill":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("rect", {
            x: "16",
            y: "18",
            width: "32",
            height: "38",
            rx: "5",
            fill: "#E0F2FE",
            stroke: "#0284C7",
            strokeWidth: "2.5"
          }), n.jsx("path", {
            d: "M18 30 Q25 27 32 30 T46 30 V53 H18 Z",
            fill: "#0284C7"
          }), n.jsx("path", {
            d: "M32 6 V24 M32 24 L26 18 M32 24 L38 18",
            stroke: "#0284C7",
            strokeWidth: "3.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), n.jsx("text", {
            x: "32",
            y: "47",
            textAnchor: "middle",
            fill: "#FFFFFF",
            fontSize: "11",
            fontWeight: "bold",
            children: "100%"
          })]
        });
      case "empty":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("rect", {
            x: "16",
            y: "14",
            width: "32",
            height: "38",
            rx: "5",
            fill: "#F8FAFC",
            stroke: "#64748B",
            strokeWidth: "2.5",
            strokeDasharray: "4 2"
          }), n.jsx("path", {
            d: "M18 46 H46 V50 H18 Z",
            fill: "#BAE6FD"
          }), n.jsx("path", {
            d: "M32 22 V40 M32 40 L26 34 M32 40 L38 34",
            stroke: "#D97706",
            strokeWidth: "3.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), n.jsx("text", {
            x: "32",
            y: "59",
            textAnchor: "middle",
            fill: "#64748B",
            fontSize: "10",
            fontWeight: "bold",
            children: "0%"
          })]
        });
      case "waste":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("circle", {
            cx: "32",
            cy: "32",
            r: "24",
            fill: "#FEE2E2",
            stroke: "#DC2626",
            strokeWidth: "2.5"
          }), n.jsx("path", {
            d: "M32 15 C32 15 21 29 21 37 C21 43 26 48 32 48 C38 48 43 43 43 37 C43 29 32 15 32 15 Z",
            fill: "#38BDF8",
            stroke: "#0284C7",
            strokeWidth: "2"
          }), n.jsx("line", {
            x1: "16",
            y1: "16",
            x2: "48",
            y2: "48",
            stroke: "#DC2626",
            strokeWidth: "4",
            strokeLinecap: "round"
          })]
        });
      case "save":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("circle", {
            cx: "32",
            cy: "32",
            r: "24",
            fill: "#DCFCE7",
            stroke: "#16A34A",
            strokeWidth: "2.5"
          }), n.jsx("path", {
            d: "M32 14 C32 14 21 28 21 36 C21 42 26 47 32 47 C38 47 43 42 43 36 C43 28 32 14 32 14 Z",
            fill: "#0284C7"
          }), n.jsx("path", {
            d: "M26 36 L30 40 L38 31",
            stroke: "#FFFFFF",
            strokeWidth: "3.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        });
      case "turn on":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("rect", {
            x: "8",
            y: "18",
            width: "48",
            height: "28",
            rx: "14",
            fill: "#16A34A",
            stroke: "#14532D",
            strokeWidth: "2.5"
          }), n.jsx("circle", {
            cx: "42",
            cy: "32",
            r: "10",
            fill: "#FFFFFF"
          }), n.jsx("text", {
            x: "21",
            y: "36",
            textAnchor: "middle",
            fill: "#FFFFFF",
            fontSize: "11",
            fontWeight: "bold",
            children: "ON"
          })]
        });
      case "turn off":
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("rect", {
            x: "8",
            y: "18",
            width: "48",
            height: "28",
            rx: "14",
            fill: "#DC2626",
            stroke: "#7F1D1D",
            strokeWidth: "2.5"
          }), n.jsx("circle", {
            cx: "22",
            cy: "32",
            r: "10",
            fill: "#FFFFFF"
          }), n.jsx("text", {
            x: "42",
            y: "36",
            textAnchor: "middle",
            fill: "#FFFFFF",
            fontSize: "10",
            fontWeight: "bold",
            children: "OFF"
          })]
        });
      default:
        return n.jsxs("svg", {
          viewBox: "0 0 64 64",
          fill: "none",
          className: H,
          children: [n.jsx("circle", {
            cx: "32",
            cy: "32",
            r: "24",
            fill: "#E0F2FE",
            stroke: "#0284C7",
            strokeWidth: "2.5"
          }), n.jsx("path", {
            d: "M32 16 C32 16 22 29 22 36 C22 41.5 26.5 46 32 46 C37.5 46 42 41.5 42 36 C42 29 32 16 32 16 Z",
            fill: "#0284C7"
          })]
        })
    }
  },
  ms = ({
    cropPosition: O,
    alt: H,
    className: G = "w-16 h-16 rounded-xl"
  }) => n.jsx("div", {
    className: `relative overflow-hidden border-2 border-[#D6C7B2] shadow-inner bg-[#1E293B] shrink-0 ${G}`,
    children: n.jsx("img", {
      src: Fa,
      alt: H,
      className: "w-full h-full object-cover scale-150 transition-transform duration-300 group-hover:scale-175",
      style: {
        objectPosition: O
      }
    })
  }),
  Yi = [{
    id: "words",
    number: 1,
    title: "Карточка 1: «Новые слова»",
    shortTitle: "1. Новые слова",
    subtitle: "Предметы на фото + картинки + перевод + примеры",
    badgeColor: "bg-sky-600 text-white"
  }, {
    id: "verbs",
    number: 2,
    title: "Карточка 2: «Глаголы действий с водой»",
    shortTitle: "2. Глаголы воды",
    subtitle: "fill / empty / waste / save / turn on / turn off",
    badgeColor: "bg-amber-600 text-white"
  }, {
    id: "report",
    number: 3,
    title: "Карточка 3: «Как составить отчёт»",
    shortTitle: "3. Как составить отчёт",
    subtitle: "Готовая модель из 6–8 предложений по зонам дома",
    badgeColor: "bg-emerald-600 text-white"
  }, {
    id: "prepositions",
    number: 4,
    title: "Карточка 4: «Предлоги места»",
    shortTitle: "4. Предлоги места",
    subtitle: "above (над), below (под), next to (рядом с)",
    badgeColor: "bg-indigo-600 text-white"
  }],
  $p = ({
    activeCard: O,
    onSelectCard: H
  }) => {
    if (!O) return null;
    const G = It.filter(R => R.category === "noun"),
      m = It.filter(R => R.category === "verb");
    return n.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn",
      onClick: () => H(null),
      children: n.jsxs("div", {
        className: "relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl bg-[#FFFDF9] border-2 border-[#C8B9A6] shadow-2xl overflow-hidden",
        onClick: R => R.stopPropagation(),
        children: [n.jsxs("div", {
          className: "bg-[#0F172A] text-white px-5 py-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#D97706]",
          children: [n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsx("div", {
              className: "w-10 h-10 rounded-xl bg-[#D97706] flex items-center justify-center text-white font-bold shadow",
              children: n.jsx(In, {
                className: "w-5 h-5"
              })
            }), n.jsxs("div", {
              children: [n.jsx("div", {
                className: "flex items-center gap-2",
                children: n.jsx("span", {
                  className: "text-xs font-mono-code uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30",
                  children: "Справочник детектива • Academy Stars 4 (Unit 9 Lesson 1)"
                })
              }), n.jsx("h2", {
                className: "text-lg sm:text-xl font-extrabold tracking-tight mt-0.5",
                children: "Карточки с правилами и подсказками"
              })]
            })]
          }), n.jsxs("button", {
            onClick: () => H(null),
            className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold border border-slate-600 transition cursor-pointer",
            children: [n.jsx(Yp, {
              className: "w-4 h-4"
            }), "Закрыть (Esc)"]
          })]
        }), n.jsx("div", {
          className: "bg-[#EDE5D8] px-4 py-2.5 flex flex-wrap gap-2 border-b border-[#D6C7B2]",
          children: Yi.map(R => {
            const F = O === R.id;
            return n.jsxs("button", {
              onClick: () => H(R.id),
              className: `flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer ${F?"bg-[#0284C7] text-white shadow-md scale-[1.01]":"bg-[#FFFDF9] text-slate-700 hover:bg-white border border-[#D6C7B2]"}`,
              children: [n.jsx("span", {
                className: `w-5 h-5 rounded-full text-xs flex items-center justify-center font-mono-code ${F?"bg-white text-[#0284C7]":"bg-slate-200 text-slate-700"}`,
                children: R.number
              }), n.jsx("span", {
                children: R.shortTitle.replace(/^\d+\.\s*/, "")
              })]
            }, R.id)
          })
        }), n.jsxs("div", {
          className: "p-5 sm:p-7 overflow-y-auto space-y-6",
          children: [O === "words" && n.jsxs("div", {
            className: "space-y-5",
            children: [n.jsxs("div", {
              className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-sky-50 border-2 border-sky-200 rounded-2xl p-4",
              children: [n.jsxs("div", {
                children: [n.jsx("span", {
                  className: "text-xs font-mono-code uppercase font-bold text-sky-700",
                  children: "Карточка №1 • Предметы-улики и все новые слова"
                }), n.jsx("h3", {
                  className: "text-xl font-black text-slate-900 mt-0.5",
                  children: "Новые слова урока (New Words — Unit 9 Lesson 1)"
                }), n.jsx("p", {
                  className: "text-sm text-slate-600",
                  children: "У каждого слова есть кадр прямо с места расследования, значок, транскрипция, перевод и пример предложения."
                })]
              }), n.jsx("div", {
                className: "shrink-0 bg-white px-3.5 py-2 rounded-xl border border-sky-200 text-xs font-bold text-sky-800",
                children: "Всего слов: 11 (5 предметов + 6 глаголов)"
              })]
            }), n.jsxs("div", {
              children: [n.jsx("h4", {
                className: "text-sm font-mono-code uppercase tracking-wider text-slate-500 font-bold mb-3",
                children: "Часть А. Предметы на фото (Appliances & Containers — 5 слов)"
              }), n.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: G.map(R => n.jsxs("div", {
                  className: "group bg-white rounded-2xl border-2 border-[#E2D9C8] hover:border-[#0284C7] p-4 shadow-sm transition flex gap-4 items-start",
                  children: [n.jsxs("div", {
                    className: "flex flex-col items-center gap-2 shrink-0",
                    children: [n.jsx(ms, {
                      cropPosition: R.cropPosition,
                      alt: R.word,
                      className: "w-20 h-20 rounded-xl"
                    }), n.jsx(Kt, {
                      id: R.id,
                      className: "w-11 h-11"
                    })]
                  }), n.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [n.jsxs("div", {
                      className: "flex flex-wrap items-baseline gap-2",
                      children: [n.jsx("span", {
                        className: "text-lg font-black text-[#0284C7]",
                        children: R.word
                      }), n.jsx("span", {
                        className: "text-xs font-mono-code text-slate-400",
                        children: R.transcription
                      })]
                    }), n.jsx("div", {
                      className: "text-sm font-bold text-slate-800 mt-0.5",
                      children: R.translation
                    }), n.jsxs("p", {
                      className: "text-xs text-slate-500 mt-1 bg-amber-50/70 border border-amber-200/70 rounded-lg px-2.5 py-1",
                      children: ["🔍 ", n.jsx("strong", {
                        children: "Улика на фото:"
                      }), " ", R.detectiveClue]
                    }), n.jsxs("div", {
                      className: "mt-2.5 pt-2 border-t border-slate-100",
                      children: [n.jsxs("p", {
                        className: "text-xs font-bold text-slate-900",
                        children: ["“", R.exampleEn, "”"]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500 mt-0.5",
                        children: R.exampleRu
                      })]
                    })]
                  })]
                }, R.id))
              })]
            }), n.jsxs("div", {
              children: [n.jsx("h4", {
                className: "text-sm font-mono-code uppercase tracking-wider text-slate-500 font-bold mb-3",
                children: "Часть Б. Глаголы действий с водой (Water Action Verbs — 6 слов)"
              }), n.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5",
                children: m.map(R => n.jsxs("div", {
                  className: "bg-white rounded-2xl border-2 border-[#E2D9C8] p-3.5 flex items-start gap-3",
                  children: [n.jsx(Kt, {
                    id: R.id,
                    className: "w-12 h-12 shrink-0"
                  }), n.jsxs("div", {
                    children: [n.jsxs("div", {
                      className: "flex items-baseline gap-1.5",
                      children: [n.jsx("span", {
                        className: "text-base font-black text-slate-900",
                        children: R.word
                      }), n.jsx("span", {
                        className: "text-xs font-mono-code text-slate-400",
                        children: R.transcription
                      })]
                    }), n.jsx("div", {
                      className: "text-xs font-bold text-amber-700",
                      children: R.translation
                    }), n.jsxs("p", {
                      className: "text-xs text-slate-700 mt-1.5 font-medium",
                      children: ["“", R.exampleEn, "”"]
                    })]
                  })]
                }, R.id))
              })]
            })]
          }), O === "verbs" && n.jsxs("div", {
            className: "space-y-5",
            children: [n.jsxs("div", {
              className: "bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
              children: [n.jsxs("div", {
                children: [n.jsx("span", {
                  className: "text-xs font-mono-code uppercase font-bold text-amber-800",
                  children: "Карточка №2 • Глаголы и команды (Imperatives)"
                }), n.jsx("h3", {
                  className: "text-xl font-black text-slate-900 mt-0.5",
                  children: "Глаголы действий с водой: 3 пары противоположностей"
                }), n.jsx("p", {
                  className: "text-sm text-slate-700",
                  children: "Запомни эти 6 глаголов парами-антонимами — так их очень легко использовать в отчёте!"
                })]
              }), n.jsx(eo, {
                className: "w-10 h-10 text-amber-600 shrink-0 hidden sm:block"
              })]
            }), n.jsxs("div", {
              className: "grid grid-cols-1 gap-4",
              children: [n.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-[#E2D9C8] p-4 shadow-sm",
                children: [n.jsx("div", {
                  className: "text-xs font-mono-code uppercase font-bold text-sky-700 mb-3",
                  children: "Пара №1 • Наполнить ↔ Опустошить"
                }), n.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [n.jsxs("div", {
                    className: "bg-sky-50/70 border border-sky-200 rounded-xl p-3.5 flex gap-3.5 items-start",
                    children: [n.jsx(Kt, {
                      id: "fill",
                      className: "w-14 h-14 shrink-0"
                    }), n.jsxs("div", {
                      children: [n.jsxs("div", {
                        className: "text-lg font-black text-sky-800",
                        children: ["fill ", n.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "/fɪl/"
                        }), " — наполнять"]
                      }), n.jsxs("p", {
                        className: "text-xs text-slate-700 mt-1 font-semibold",
                        children: ["✅ Always ", n.jsx("span", {
                          className: "underline decoration-sky-500 font-black",
                          children: "fill"
                        }), " the dishwasher before you turn it on."]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "Всегда наполняй посудомоечную машину перед включением."
                      })]
                    })]
                  }), n.jsxs("div", {
                    className: "bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex gap-3.5 items-start",
                    children: [n.jsx(Kt, {
                      id: "empty",
                      className: "w-14 h-14 shrink-0"
                    }), n.jsxs("div", {
                      children: [n.jsxs("div", {
                        className: "text-lg font-black text-amber-900",
                        children: ["empty ", n.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "/ˈempti/"
                        }), " — опустошать / пустой"]
                      }), n.jsxs("p", {
                        className: "text-xs text-slate-700 mt-1 font-semibold",
                        children: ["✅ ", n.jsx("span", {
                          className: "underline decoration-amber-500 font-black",
                          children: "Empty"
                        }), " the water from the bucket into the watering can."]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "Перелей (опустоши) воду из ведра в садовую лейку."
                      })]
                    })]
                  })]
                })]
              }), n.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-[#E2D9C8] p-4 shadow-sm",
                children: [n.jsx("div", {
                  className: "text-xs font-mono-code uppercase font-bold text-emerald-700 mb-3",
                  children: "Пара №2 • Беречь воду ↔ Тратить воду зря"
                }), n.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [n.jsxs("div", {
                    className: "bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex gap-3.5 items-start",
                    children: [n.jsx(Kt, {
                      id: "save",
                      className: "w-14 h-14 shrink-0"
                    }), n.jsxs("div", {
                      children: [n.jsxs("div", {
                        className: "text-lg font-black text-emerald-800",
                        children: ["save ", n.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "/seɪv/"
                        }), " — беречь / экономить"]
                      }), n.jsxs("p", {
                        className: "text-xs text-slate-700 mt-1 font-semibold",
                        children: ["✅ Put a bucket below a dripping tap to ", n.jsx("span", {
                          className: "underline decoration-emerald-500 font-black",
                          children: "save"
                        }), " water."]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "Поставь ведро под капающий кран, чтобы сохранить воду."
                      })]
                    })]
                  }), n.jsxs("div", {
                    className: "bg-red-50/70 border border-red-200 rounded-xl p-3.5 flex gap-3.5 items-start",
                    children: [n.jsx(Kt, {
                      id: "waste",
                      className: "w-14 h-14 shrink-0"
                    }), n.jsxs("div", {
                      children: [n.jsxs("div", {
                        className: "text-lg font-black text-red-800",
                        children: ["waste ", n.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "/weɪst/"
                        }), " — тратить зря (впустую)"]
                      }), n.jsxs("p", {
                        className: "text-xs text-slate-700 mt-1 font-semibold",
                        children: ["🚫 Don’t ", n.jsx("span", {
                          className: "underline decoration-red-500 font-black",
                          children: "waste"
                        }), " water in the kitchen or bathroom!"]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "Не трать воду зря на кухне или в ванной!"
                      })]
                    })]
                  })]
                })]
              }), n.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-[#E2D9C8] p-4 shadow-sm",
                children: [n.jsx("div", {
                  className: "text-xs font-mono-code uppercase font-bold text-indigo-700 mb-3",
                  children: "Пара №3 • Включать (открывать) ↔ Выключать (закрывать)"
                }), n.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [n.jsxs("div", {
                    className: "bg-indigo-50/70 border border-indigo-200 rounded-xl p-3.5 flex gap-3.5 items-start",
                    children: [n.jsx(Kt, {
                      id: "turn on",
                      className: "w-14 h-14 shrink-0"
                    }), n.jsxs("div", {
                      children: [n.jsxs("div", {
                        className: "text-lg font-black text-indigo-900",
                        children: ["turn on ", n.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "/tɜːn ɒn/"
                        }), " — включать / открывать"]
                      }), n.jsxs("p", {
                        className: "text-xs text-slate-700 mt-1 font-semibold",
                        children: ["✅ Only ", n.jsx("span", {
                          className: "underline decoration-indigo-500 font-black",
                          children: "turn on"
                        }), " the washing machine when it is full."]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "Включай стиральную машину только тогда, когда она полная."
                      })]
                    })]
                  }), n.jsxs("div", {
                    className: "bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 flex gap-3.5 items-start",
                    children: [n.jsx(Kt, {
                      id: "turn off",
                      className: "w-14 h-14 shrink-0"
                    }), n.jsxs("div", {
                      children: [n.jsxs("div", {
                        className: "text-lg font-black text-rose-900",
                        children: ["turn off ", n.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "/tɜːn ɒf/"
                        }), " — выключать / закрывать"]
                      }), n.jsxs("p", {
                        className: "text-xs text-slate-700 mt-1 font-semibold",
                        children: ["✅ Always ", n.jsx("span", {
                          className: "underline decoration-rose-500 font-black",
                          children: "turn off"
                        }), " the tap when you brush your teeth."]
                      }), n.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "Всегда закрывай кран, когда чистишь зубы."
                      })]
                    })]
                  })]
                })]
              })]
            }), n.jsxs("div", {
              className: "bg-[#0F172A] text-white rounded-2xl p-4 border-2 border-[#0284C7]",
              children: [n.jsx("h4", {
                className: "text-sm font-mono-code uppercase text-sky-300 font-bold",
                children: "💡 Секрет детектива: как давать инструкции (Imperatives)"
              }), n.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2.5 text-sm",
                children: [n.jsxs("div", {
                  className: "bg-slate-800/90 rounded-xl p-3 border border-emerald-500/40",
                  children: [n.jsx("span", {
                    className: "text-emerald-400 font-extrabold",
                    children: "✅ Что НУЖНО делать (Always + V1):"
                  }), n.jsxs("p", {
                    className: "mt-1 text-slate-200",
                    children: ["• ", n.jsx("strong", {
                      children: "Always fill"
                    }), " the dishwasher.", n.jsx("br", {}), "• ", n.jsx("strong", {
                      children: "Always turn off"
                    }), " the tap.", n.jsx("br", {}), "• ", n.jsx("strong", {
                      children: "Empty"
                    }), " the bucket into the watering can."]
                  })]
                }), n.jsxs("div", {
                  className: "bg-slate-800/90 rounded-xl p-3 border border-rose-500/40",
                  children: [n.jsx("span", {
                    className: "text-rose-400 font-extrabold",
                    children: "🚫 Чего НЕЛЬЗЯ делать (Don’t / Never + V1):"
                  }), n.jsxs("p", {
                    className: "mt-1 text-slate-200",
                    children: ["• ", n.jsx("strong", {
                      children: "Don’t waste"
                    }), " water!", n.jsx("br", {}), "• ", n.jsx("strong", {
                      children: "Don’t turn on"
                    }), " an empty washing machine.", n.jsx("br", {}), "• ", n.jsx("strong", {
                      children: "Never leave"
                    }), " the tap running."]
                  })]
                })]
              })]
            })]
          }), O === "report" && n.jsxs("div", {
            className: "space-y-5",
            children: [n.jsxs("div", {
              className: "bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
              children: [n.jsxs("div", {
                children: [n.jsx("span", {
                  className: "text-xs font-mono-code uppercase font-bold text-emerald-800",
                  children: "Карточка №3 • Образец финального отчёта (6–8 предложений)"
                }), n.jsx("h3", {
                  className: "text-xl font-black text-slate-900 mt-0.5",
                  children: "Как составить отчёт детектива: «How to Save Water at Home»"
                }), n.jsx("p", {
                  className: "text-sm text-slate-700",
                  children: "Используй этот план по комнатам (Кухня → Ванная → Сад), чтобы легко составить связный отчёт из 6–8 предложений."
                })]
              }), n.jsx(lo, {
                className: "w-10 h-10 text-emerald-600 shrink-0 hidden sm:block"
              })]
            }), n.jsxs("div", {
              className: "bg-white rounded-2xl border-2 border-[#C8B9A6] p-5 space-y-3.5 shadow-sm",
              children: [n.jsx("div", {
                className: "flex items-center justify-between border-b border-slate-200 pb-3",
                children: n.jsxs("div", {
                  children: [n.jsx("span", {
                    className: "text-xs font-mono-code uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold",
                    children: "OFFICIAL DETECTIVE MODEL • 8 SENTENCES"
                  }), n.jsx("h4", {
                    className: "text-lg font-black text-slate-900 mt-1",
                    children: "Model Report: “How People Can Save Water”"
                  })]
                })
              }), n.jsx("div", {
                className: "space-y-2.5 text-sm",
                children: [{
                  num: 1,
                  zone: "Вступление",
                  zoneCls: "bg-sky-100 text-sky-800",
                  en: "Don’t waste water at home — every drop is important!",
                  ru: "Не тратьте воду зря дома — важна каждая капля!"
                }, {
                  num: 2,
                  zone: "Кухня (Kitchen)",
                  zoneCls: "bg-amber-100 text-amber-800",
                  en: "In the kitchen, always fill the dishwasher with plates before you turn it on.",
                  ru: "На кухне всегда заполняйте посудомоечную машину тарелками перед тем, как включить её."
                }, {
                  num: 3,
                  zone: "Стирка (Utility)",
                  zoneCls: "bg-amber-100 text-amber-800",
                  en: "Look at the washing machine next to the dishwasher: fill it with clothes and don’t turn it on when it is empty.",
                  ru: "Посмотрите на стиральную машину рядом с посудомоечной: наполните её одеждой и не включайте пустой."
                }, {
                  num: 4,
                  zone: "Ванная (Bathroom)",
                  zoneCls: "bg-blue-100 text-blue-800",
                  en: "In the bathroom, always turn off the tap when you brush your teeth.",
                  ru: "В ванной комнате всегда закрывайте кран, когда чистите зубы."
                }, {
                  num: 5,
                  zone: "Спасение капель",
                  zoneCls: "bg-indigo-100 text-indigo-800",
                  en: "If water drips from the tap, put a blue bucket below the tap to save the water.",
                  ru: "Если из крана капает вода, поставьте синее ведро под кран, чтобы сохранить воду."
                }, {
                  num: 6,
                  zone: "Ведро → Лейка",
                  zoneCls: "bg-emerald-100 text-emerald-800",
                  en: "Empty the water from the bucket into the green watering can next to it.",
                  ru: "Перелейте воду из ведра в зелёную лейку, стоящую рядом с ним."
                }, {
                  num: 7,
                  zone: "Сад (Garden)",
                  zoneCls: "bg-emerald-100 text-emerald-800",
                  en: "In the garden, use a watering can instead of a tap to water the flowers.",
                  ru: "В саду используйте лейку вместо крана, чтобы полить цветы."
                }, {
                  num: 8,
                  zone: "Итог (Conclusion)",
                  zoneCls: "bg-teal-100 text-teal-800",
                  en: "Follow these easy rules every day and help save Planet Water!",
                  ru: "Следуйте этим простым правилам каждый день и помогите спасти Планету Воды!"
                }].map(R => n.jsx("div", {
                  className: "p-3 rounded-xl bg-[#FAF6F0] border border-[#E2D9C8] flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                  children: n.jsxs("div", {
                    className: "space-y-0.5",
                    children: [n.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [n.jsx("span", {
                        className: "w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-mono-code font-bold flex items-center justify-center shrink-0",
                        children: R.num
                      }), n.jsx("span", {
                        className: `text-[11px] font-bold px-2 py-0.5 rounded-md ${R.zoneCls}`,
                        children: R.zone
                      }), n.jsx("span", {
                        className: "font-extrabold text-slate-900",
                        children: R.en
                      })]
                    }), n.jsx("p", {
                      className: "text-xs text-slate-500 pl-8",
                      children: R.ru
                    })]
                  })
                }, R.num))
              }), n.jsxs("div", {
                className: "bg-sky-50 rounded-xl p-3.5 border border-sky-200 flex flex-wrap items-center gap-2 text-xs",
                children: [n.jsxs("span", {
                  className: "font-extrabold text-sky-900 flex items-center gap-1",
                  children: [n.jsx(sa, {
                    className: "w-4 h-4 text-sky-600"
                  }), " Полезные слова-связки для отчёта:"]
                }), ["In the kitchen,...", "In the bathroom,...", "In the garden,...", "Always...", "Don’t / Never...", "before you turn it on", "when you brush your teeth", "to save water"].map(R => n.jsx("span", {
                  className: "px-2.5 py-1 rounded-lg bg-white border border-sky-200 font-mono-code font-bold text-sky-800",
                  children: R
                }, R))]
              })]
            })]
          }), O === "prepositions" && n.jsxs("div", {
            className: "space-y-5",
            children: [n.jsxs("div", {
              className: "bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
              children: [n.jsxs("div", {
                children: [n.jsx("span", {
                  className: "text-xs font-mono-code uppercase font-bold text-indigo-800",
                  children: "Карточка №4 • Грамматика пространства (Academy Stars 4)"
                }), n.jsx("h3", {
                  className: "text-xl font-black text-slate-900 mt-0.5",
                  children: "Предлоги места: ABOVE (над), BELOW (под), NEXT TO (рядом с)"
                }), n.jsx("p", {
                  className: "text-sm text-slate-700",
                  children: "С помощью этих трёх предлогов детектив точно описывает, где находятся улики на фотографии!"
                })]
              }), n.jsx(zx, {
                className: "w-10 h-10 text-indigo-600 shrink-0 hidden sm:block"
              })]
            }), n.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4",
              children: [n.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-indigo-200 p-4 shadow-sm flex flex-col justify-between",
                children: [n.jsxs("div", {
                  children: [n.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [n.jsx("span", {
                      className: "text-2xl font-black text-indigo-700",
                      children: "above"
                    }), n.jsx("span", {
                      className: "text-xs font-mono-code px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bold",
                      children: "НАД (выше уровня) ⬆️"
                    })]
                  }), n.jsxs("p", {
                    className: "text-xs text-slate-500 mt-1",
                    children: ["Предмет находится ", n.jsx("strong", {
                      children: "выше"
                    }), " другого предмета (на полке, на стене или вверху)."]
                  }), n.jsxs("div", {
                    className: "my-4 bg-indigo-50/70 rounded-xl p-3 border border-indigo-100 flex flex-col items-center gap-1.5",
                    children: [n.jsx("div", {
                      className: "px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-extrabold shadow",
                      children: "🪴 Shelf / Dripping Tap (ABOVE)"
                    }), n.jsx("div", {
                      className: "text-indigo-400 text-xs font-mono-code",
                      children: "▲ выше ▲"
                    }), n.jsx("div", {
                      className: "px-3 py-1.5 rounded-lg bg-slate-200 text-slate-600 text-xs font-semibold",
                      children: "🧺 Washing Machine / Bucket"
                    })]
                  })]
                }), n.jsxs("div", {
                  className: "space-y-2 pt-2 border-t border-slate-100 text-xs",
                  children: [n.jsxs("p", {
                    className: "font-bold text-slate-900",
                    children: ["1. “The green plant on the shelf is ", n.jsx("span", {
                      className: "text-indigo-700 underline",
                      children: "above"
                    }), " the washing machine.”"]
                  }), n.jsxs("p", {
                    className: "font-bold text-slate-900",
                    children: ["2. “The dripping tap is ", n.jsx("span", {
                      className: "text-indigo-700 underline",
                      children: "above"
                    }), " the blue bucket.”"]
                  })]
                })]
              }), n.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-sky-200 p-4 shadow-sm flex flex-col justify-between",
                children: [n.jsxs("div", {
                  children: [n.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [n.jsx("span", {
                      className: "text-2xl font-black text-sky-700",
                      children: "below"
                    }), n.jsx("span", {
                      className: "text-xs font-mono-code px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 font-bold",
                      children: "ПОД (ниже уровня) ⬇️"
                    })]
                  }), n.jsxs("p", {
                    className: "text-xs text-slate-500 mt-1",
                    children: ["Предмет находится ", n.jsx("strong", {
                      children: "ниже"
                    }), " другого предмета (противоположность слову ", n.jsx("em", {
                      children: "above"
                    }), ")."]
                  }), n.jsxs("div", {
                    className: "my-4 bg-sky-50/70 rounded-xl p-3 border border-sky-100 flex flex-col items-center gap-1.5",
                    children: [n.jsx("div", {
                      className: "px-3 py-1.5 rounded-lg bg-slate-200 text-slate-600 text-xs font-semibold",
                      children: "🚰 Dripping Tap / Wooden Shelf"
                    }), n.jsx("div", {
                      className: "text-sky-500 text-xs font-mono-code",
                      children: "▼ ниже ▼"
                    }), n.jsx("div", {
                      className: "px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-extrabold shadow",
                      children: "🪣 Blue Bucket (BELOW)"
                    })]
                  })]
                }), n.jsxs("div", {
                  className: "space-y-2 pt-2 border-t border-slate-100 text-xs",
                  children: [n.jsxs("p", {
                    className: "font-bold text-slate-900",
                    children: ["1. “The blue bucket is ", n.jsx("span", {
                      className: "text-sky-700 underline",
                      children: "below"
                    }), " the dripping tap.”"]
                  }), n.jsxs("p", {
                    className: "font-bold text-slate-900",
                    children: ["2. “The washing machine is ", n.jsx("span", {
                      className: "text-sky-700 underline",
                      children: "below"
                    }), " the wooden shelf.”"]
                  })]
                })]
              }), n.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-emerald-200 p-4 shadow-sm flex flex-col justify-between",
                children: [n.jsxs("div", {
                  children: [n.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [n.jsx("span", {
                      className: "text-2xl font-black text-emerald-700",
                      children: "next to"
                    }), n.jsx("span", {
                      className: "text-xs font-mono-code px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold",
                      children: "РЯДОМ С (сбоку) ↔️"
                    })]
                  }), n.jsxs("p", {
                    className: "text-xs text-slate-500 mt-1",
                    children: ["Два предмета стоят ", n.jsx("strong", {
                      children: "бок о бок (рядом друг с другом)"
                    }), " на одном уровне."]
                  }), n.jsxs("div", {
                    className: "my-4 bg-emerald-50/70 rounded-xl p-3 border border-emerald-100 flex items-center justify-center gap-2 py-6",
                    children: [n.jsx("div", {
                      className: "px-2.5 py-2 rounded-lg bg-blue-600 text-white text-xs font-extrabold shadow",
                      children: "🪣 Bucket"
                    }), n.jsx($i, {
                      className: "w-4 h-4 text-emerald-600"
                    }), n.jsx("div", {
                      className: "px-2.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-extrabold shadow",
                      children: "🚿 Watering Can"
                    })]
                  })]
                }), n.jsxs("div", {
                  className: "space-y-2 pt-2 border-t border-slate-100 text-xs",
                  children: [n.jsxs("p", {
                    className: "font-bold text-slate-900",
                    children: ["1. “The dishwasher is ", n.jsx("span", {
                      className: "text-emerald-700 underline",
                      children: "next to"
                    }), " the washing machine.”"]
                  }), n.jsxs("p", {
                    className: "font-bold text-slate-900",
                    children: ["2. “The green watering can is ", n.jsx("span", {
                      className: "text-emerald-700 underline",
                      children: "next to"
                    }), " the blue bucket.”"]
                  })]
                })]
              })]
            }), n.jsxs("div", {
              className: "bg-white rounded-2xl border-2 border-[#D6C7B2] p-4 flex flex-col sm:flex-row items-center gap-4",
              children: [n.jsx("img", {
                src: Fa,
                alt: "Crime Scene Prepositions",
                className: "w-full sm:w-56 h-36 object-cover rounded-xl border border-slate-300 shrink-0"
              }), n.jsxs("div", {
                className: "space-y-1.5 text-xs sm:text-sm",
                children: [n.jsxs("div", {
                  className: "font-black text-slate-900 flex items-center gap-1.5",
                  children: [n.jsx(Ye, {
                    className: "w-4 h-4 text-emerald-600"
                  }), "Шпаргалка по главному фото урока:"]
                }), n.jsxs("p", {
                  className: "text-slate-700",
                  children: ["• ", n.jsx("strong", {
                    children: "Слева вверху и внизу:"
                  }), " The plant is ", n.jsx("strong", {
                    children: "above"
                  }), " the washing machine. The washing machine is ", n.jsx("strong", {
                    children: "below"
                  }), " the plant and ", n.jsx("strong", {
                    children: "next to"
                  }), " the dishwasher."]
                }), n.jsxs("p", {
                  className: "text-slate-700",
                  children: ["• ", n.jsx("strong", {
                    children: "Справа вверху и внизу:"
                  }), " The tap is ", n.jsx("strong", {
                    children: "above"
                  }), " the blue bucket. The blue bucket is ", n.jsx("strong", {
                    children: "below"
                  }), " the tap and ", n.jsx("strong", {
                    children: "next to"
                  }), " the green watering can."]
                })]
              })]
            })]
          })]
        })]
      })
    })
  },
  em = ({
    customPhotoUrl: O,
    onUploadCustomPhoto: H,
    inspectedHotspots: G,
    onInspectHotspot: m,
    onCompleteStage: R,
    isStageCompleted: F,
    onOpenRuleCard: ue,
    teacherMode: ae
  }) => {
    const [U, S] = usePersisted("emSpot", Wn[0]), [B, Z] = usePersisted("emSpotOpen", !1), [E, ne] = usePersisted("emMcq", {}), [te, se] = usePersisted("emMcqChecked", !1), [_, me] = usePersisted("emOpenQs", []), Ne = O || Fa, de = g => {
      S(g), Z(!1), m(g.id)
    }, z = g => {
      const M = g.target.files?.[0];
      if (M) {
        const I = URL.createObjectURL(M);
        H(I)
      }
    }, ce = fs.filter(g => E[g.id] === g.correctAnswer).length, ee = () => {
      se(!0), ce >= 5 && R()
    }, J = () => {
      const g = {};
      fs.forEach(M => {
        g[M.id] = M.correctAnswer
      }), ne(g), se(!0), Wn.forEach(M => m(M.id)), R()
    }, Q = g => {
      me(M => M.includes(g) ? M.filter(I => I !== g) : [...M, g])
    };
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-[#D97706] shadow-xl relative overflow-hidden",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-[#D97706] text-white text-xs font-mono-code font-bold uppercase tracking-wider",
                children: "Этап 1 из 6 • Вступление (5 минут)"
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono-code",
                children: "Unit 9 Lesson 1 • Academy Stars 4 • Planet Water"
              })]
            }), n.jsx("h1", {
              id: "screen-title",
              tabIndex: -1,
              className: "text-2xl sm:text-3xl font-black tracking-tight outline-none",
              children: "🕵️‍♂️ Дело о пропавшей воде: Осмотр места происшествия"
            }), n.jsxs("p", {
              className: "text-slate-300 text-sm sm:text-base leading-relaxed",
              children: ["Добро пожаловать в детективное агентство ", n.jsx("strong", {
                className: "text-sky-300",
                children: "Planet Water"
              }), "! В этом доме каждую неделю пропадают литры чистой воды. Твоя задача — изучить главное фото с уликами, назвать все предметы по-английски и к концу урока собрать официальный ", n.jsx("strong", {
                children: "Отчёт детектива (6–8 предложений)"
              }), " о том, как сохранить воду."]
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap sm:flex-nowrap gap-2.5 shrink-0",
            children: [n.jsx("button", {
              onClick: () => ue("words"),
              className: "px-4 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs sm:text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: "📖 Открыть «Новые слова»"
            }), ae && n.jsx("button", {
              onClick: J,
              className: "px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition cursor-pointer",
              children: "👩‍🏫 Показать все ответы"
            })]
          })]
        })
      }), ae && n.jsxs("div", {
        className: "bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 space-y-1",
        children: [n.jsx("div", {
          className: "font-black uppercase font-mono-code text-amber-800",
          children: "👩‍🏫 Подсказка для учителя (Этап 1 — 5 мин):"
        }), n.jsxs("p", {
          children: ["Попросите ученика рассмотреть картинку и ответить на вопросы: ", n.jsx("em", {
            children: "“Look at the boy detective! Where is he? What objects can you see in the picture? Can you find the dishwasher, the washing machine, the dripping tap, the blue bucket, and the green watering can?”"
          }), " Нажимайте вместе на маркеры 1–8 на фото!"]
        })]
      }), n.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
        children: [n.jsxs("div", {
          className: "lg:col-span-7 bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-4 sm:p-5 shadow-md space-y-4",
          children: [n.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-2",
            children: [n.jsxs("div", {
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-[#D97706]",
                children: "Улика №001 • Главное фото расследования"
              }), n.jsx("h2", {
                className: "text-lg sm:text-xl font-black text-slate-900",
                children: "Нажми на все 8 маркеров на фото и назови предметы!"
              })]
            }), n.jsxs("div", {
              className: "flex items-center gap-2",
              children: [n.jsxs("span", {
                className: "px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono-code text-xs font-bold",
                children: ["Изучено улик: ", G.length, " / ", Wn.length]
              }), n.jsxs("label", {
                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer border border-slate-300 transition",
                title: "Загрузить своё фото при необходимости",
                children: [n.jsx(Qp, {
                  className: "w-3.5 h-3.5"
                }), n.jsx("span", {
                  className: "hidden sm:inline",
                  children: "Своё фото"
                }), n.jsx("input", {
                  type: "file",
                  accept: "image/*",
                  onChange: z,
                  className: "hidden"
                })]
              })]
            })]
          }), n.jsxs("div", {
            className: "relative rounded-2xl overflow-hidden border-4 border-[#1E293B] shadow-xl group select-none bg-slate-900",
            children: [n.jsx("img", {
              src: Ne,
              alt: "Дело о пропавшей воде — Мальчик-детектив с лупой на кухне",
              className: "w-full h-auto block object-cover"
            }), n.jsxs("div", {
              className: "absolute top-3 left-3 bg-[#0F172A] text-white px-3 py-1 rounded-lg border border-amber-400/50 text-[11px] font-mono-code font-bold flex items-center gap-1.5 pointer-events-none",
              children: [n.jsx(Cx, {
                className: "w-3.5 h-3.5 text-amber-400"
              }), "CASE #09: PLANET WATER EVIDENCE"]
            }), Wn.map(g => {
              const M = U.id === g.id,
                I = G.includes(g.id);
              return n.jsx("button", {
                onClick: () => de(g),
                style: {
                  left: `${g.x}%`,
                  top: `${g.y}%`
                },
                className: `absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full font-mono-code font-black text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer border-2 ${M?"bg-[#D97706] text-white border-white scale-125 z-30 hotspot-pulse shadow-xl":I?"bg-emerald-600 text-white border-white z-20 shadow-md hover:scale-110":"bg-[#0284C7] text-white border-white z-20 hotspot-pulse-water shadow-lg hover:scale-110"}`,
                title: `${g.number}. ${g.labelEn} (${g.labelRu})`,
                children: g.number
              }, g.id)
            })]
          }), n.jsx("div", {
            className: "flex flex-wrap gap-1.5 pt-1",
            children: Wn.map(g => {
              const M = U.id === g.id,
                I = G.includes(g.id);
              return n.jsxs("button", {
                onClick: () => de(g),
                className: `px-2.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border ${M?"bg-[#0F172A] text-white border-[#0F172A] shadow":I?"bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100":"bg-white text-slate-700 border-[#D6C7B2] hover:bg-slate-50"}`,
                children: [n.jsx("span", {
                  className: "w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 font-mono-code text-[11px] flex items-center justify-center font-extrabold",
                  children: g.number
                }), n.jsx("span", {
                  children: g.labelEn
                }), I && n.jsx(Ye, {
                  className: "w-3.5 h-3.5 text-emerald-600"
                })]
              }, g.id)
            })
          })]
        }), n.jsxs("div", {
          className: "lg:col-span-5 space-y-5",
          children: [n.jsxs("div", {
            className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#D97706] p-5 shadow-lg space-y-4",
            children: [n.jsx("div", {
              className: "flex items-start justify-between gap-3",
              children: n.jsxs("div", {
                className: "flex items-center gap-3",
                children: [n.jsx("div", {
                  className: "w-14 h-14 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center shrink-0",
                  children: n.jsx(Kt, {
                    id: U.vocabId,
                    className: "w-11 h-11"
                  })
                }), n.jsxs("div", {
                  children: [n.jsxs("span", {
                    className: "text-xs font-mono-code uppercase font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900",
                    children: ["Улика #", U.number, " под лупой"]
                  }), n.jsx("h3", {
                    className: "text-xl font-black text-[#0284C7] mt-0.5",
                    children: U.labelEn
                  }), n.jsx("p", {
                    className: "text-sm font-bold text-slate-600",
                    children: U.labelRu
                  })]
                })]
              })
            }), n.jsxs("div", {
              className: "bg-indigo-50 border border-indigo-200 rounded-2xl p-3.5 text-xs sm:text-sm text-indigo-950",
              children: [n.jsx("span", {
                className: "font-mono-code font-bold uppercase text-indigo-700 block text-xs",
                children: "📍 Где находится на фото (Location):"
              }), n.jsx("p", {
                className: "font-bold mt-0.5",
                children: U.prepositionNote
              })]
            }), n.jsxs("div", {
              className: "bg-sky-50 border border-sky-200 rounded-2xl p-4 space-y-2.5",
              children: [n.jsxs("div", {
                className: "flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase text-sky-800",
                children: [n.jsx(Kp, {
                  className: "w-4 h-4 text-sky-600"
                }), "Вопрос детективу (ответь вслух по-английски):"]
              }), n.jsxs("p", {
                className: "text-base font-black text-slate-900",
                children: ["“", U.questionEn, "”"]
              }), B ? n.jsxs("div", {
                className: "bg-white rounded-xl p-3 border border-emerald-300 text-xs sm:text-sm text-emerald-950 font-bold",
                children: ["💬 ", n.jsx("span", {
                  className: "text-emerald-700",
                  children: "Пример ответа:"
                }), " “", U.sampleAnswerEn, "”"]
              }) : n.jsxs("button", {
                onClick: () => Z(!0),
                className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-sky-100 text-sky-800 border border-sky-300 text-xs font-extrabold transition cursor-pointer",
                children: [n.jsx(to, {
                  className: "w-3.5 h-3.5"
                }), "Показать пример ответа"]
              })]
            })]
          }), n.jsxs("div", {
            className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 shadow-sm space-y-3",
            children: [n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [n.jsxs("h3", {
                className: "text-base font-black text-slate-900 flex items-center gap-2",
                children: [n.jsx(sa, {
                  className: "w-4 h-4 text-amber-500"
                }), "Устная разминка: назови 7 фраз по фото!"]
              }), n.jsxs("span", {
                className: "text-xs font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200",
                children: ["Названо: ", _.length, " / 7"]
              })]
            }), n.jsxs("p", {
              className: "text-xs text-slate-600",
              children: ["Скажи по-английски полным предложением ", n.jsx("strong", {
                children: "“I can see a ...”"
              }), " и отметь галочкой каждый предмет:"]
            }), n.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
              children: ["I can see a dishwasher.", "I can see a washing machine.", "I can see a dripping tap.", "I can see a blue bucket.", "I can see a green watering can.", "I can see water puddles (waste!).", "I can see a boy detective."].map(g => {
                const M = _.includes(g);
                return n.jsxs("button", {
                  onClick: () => Q(g),
                  className: `p-2.5 rounded-xl border text-left text-xs font-bold flex items-center gap-2 transition cursor-pointer ${M?"bg-emerald-50 border-emerald-400 text-emerald-900":"bg-white border-slate-200 text-slate-700 hover:border-sky-300"}`,
                  children: [n.jsx("input", {
                    type: "checkbox",
                    checked: M,
                    onChange: () => {},
                    className: "rounded text-emerald-600 pointer-events-none"
                  }), n.jsx("span", {
                    children: g
                  })]
                }, g)
              })
            })]
          })]
        })]
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-[#0284C7]",
              children: "Задание этапа 1 • 7 вопросов по фото-уликам"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Протокол первичного осмотра (Observation Check)"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Внимательно посмотри на главное фото выше и выбери правильный ответ в каждом из 7 пунктов."
            })]
          }), te && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Результат: ", ce, " из ", fs.length, " верно!"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: fs.map(g => {
            const M = E[g.id],
              I = M === g.correctAnswer;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 transition ${te?I?"bg-emerald-50/50 border-emerald-300":"bg-rose-50/50 border-rose-300":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsx("p", {
                className: "text-sm font-black text-slate-900",
                children: g.questionEn
              }), n.jsx("p", {
                className: "text-xs text-slate-500 mt-0.5 mb-3",
                children: g.hintRu
              }), n.jsx("div", {
                className: "space-y-2",
                children: g.options.map(Y => {
                  const Oe = M === Y;
                  let be = "bg-[#FAF6F0] border-[#D6C7B2] text-slate-800 hover:bg-sky-50 hover:border-sky-300";
                  return Oe && !te ? be = "bg-[#0284C7] border-[#0284C7] text-white shadow" : te && (Y === g.correctAnswer ? be = "bg-emerald-600 border-emerald-600 text-white font-black" : Oe && Y !== g.correctAnswer && (be = "bg-rose-600 border-rose-600 text-white")), n.jsx("button", {
                    onClick: () => {
                      ne(W => ({
                        ...W,
                        [g.id]: Y
                      })), se(!1)
                    },
                    className: `w-full text-left px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-bold transition cursor-pointer ${be}`,
                    children: Y
                  }, Y)
                })
              }), te && n.jsx("p", {
                className: `text-xs font-bold mt-2.5 ${I?"text-emerald-800":"text-rose-800"}`,
                children: I ? `✅ ${g.explanationRu}` : `❌ Подсказка: ${g.explanationRu}`
              })]
            }, g.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("div", {
            className: "flex flex-wrap items-center gap-3",
            children: [n.jsxs("button", {
              onClick: ee,
              className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: [n.jsx(Ye, {
                className: "w-4 h-4"
              }), "Проверить протокол осмотра"]
            }), n.jsxs("button", {
              onClick: () => {
                ne({}), se(!1)
              },
              className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(Qt, {
                className: "w-4 h-4"
              }), "Сбросить"]
            })]
          }), F && n.jsxs("div", {
            className: "flex items-center gap-2 text-emerald-700 font-black text-sm bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200",
            children: [n.jsx("span", {
              children: "🎉 Фрагмент отчёта №1 получен! Можно переходить к Миссии 1"
            }), n.jsx($i, {
              className: "w-4 h-4"
            })]
          })]
        })]
      })]
    })
  },
  xx = [{
    id: "fc-1",
    verb: "fill",
    target: "the dishwasher with dirty plates",
    ru: "наполнить посудомоечную машину тарелками"
  }, {
    id: "fc-2",
    verb: "turn off",
    target: "the dripping tap tightly",
    ru: "крепко закрыть капающий кран"
  }, {
    id: "fc-3",
    verb: "empty",
    target: "the blue bucket into the watering can",
    ru: "перелить синее ведро в лейку"
  }, {
    id: "fc-4",
    verb: "turn on",
    target: "the washing machine when it is full",
    ru: "включить стиральную машину, когда она полная"
  }, {
    id: "fc-5",
    verb: "save",
    target: "clean water in the house and garden",
    ru: "беречь чистую воду в доме и в саду"
  }, {
    id: "fc-6",
    verb: "Don’t waste",
    target: "water on the kitchen floor!",
    ru: "не трать воду зря на кухонном полу!"
  }],
  tm = ({
    onCompleteStage: O,
    isStageCompleted: H,
    onOpenRuleCard: G,
    teacherMode: m
  }) => {
    const [R, F] = usePersisted("tmTab", "match"), [ue, ae] = usePersisted("tmMatch", {}), [U, S] = usePersisted("tmMatchChecked", !1), [B, Z] = usePersisted("tmMcq", {}), [E, ne] = usePersisted("tmMcqChecked", !1), [te, se] = usePersisted("tmCloze", {}), [_, me] = usePersisted("tmClozeId", Wa[0].id), [Ne, de] = L.useState(!1), [z, ce] = L.useState(!1), [ee, J] = L.useState({}), [Q, g] = L.useState(!1), M = Pi.filter(r => ue[r.id] === r.word).length, I = Mi.filter(r => B[r.id] === r.correct).length, Y = Wa.filter(r => normAns(te[r.id]) === normAns(r.correct)).length, Oe = (r, q, K) => {
      (r >= 6 || q >= 5 || K >= 5) && (O(), ce(!0))
    }, be = () => {
      const r = {};
      Pi.forEach(f => r[f.id] = f.word), ae(r), S(!0);
      const q = {};
      Mi.forEach(f => q[f.id] = f.correct), Z(q), ne(!0);
      const K = {};
      Wa.forEach(f => K[f.id] = f.correct), se(K), de(!0), O(), ce(!0)
    }, W = ["dishwasher", "washing machine", "tap", "bucket", "watering can", "fill", "waste", "turn off"], d = ["fill", "turn on", "waste", "turn off", "empty", "watering can", "save"];
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-sky-500 shadow-xl",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-mono-code font-bold uppercase",
                children: "Этап 2 из 6 • Миссия 1 (8–10 минут)"
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono-code",
                children: "11 новых слов: dishwasher, washing machine, tap, bucket, watering can + 6 глаголов"
              })]
            }), n.jsx("h1", {
              className: "text-2xl sm:text-3xl font-black tracking-tight",
              children: "🔍 Миссия 1: «Поиск улик» — Ввод новой лексики"
            }), n.jsxs("p", {
              className: "text-slate-300 text-sm sm:text-base",
              children: ["Настоящий детектив знает точное название каждой улики! Пройди 3 формата заданий (сопоставление со снимками, выбор слова и заполнение секретного досье), чтобы получить ", n.jsx("strong", {
                children: "Фрагмент отчёта №2"
              }), "."]
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap gap-2 shrink-0",
            children: [n.jsxs("button", {
              onClick: () => G("words"),
              className: "px-3.5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(In, {
                className: "w-4 h-4"
              }), "Карточка 1: Новые слова"]
            }), n.jsx("button", {
              onClick: () => G("verbs"),
              className: "px-3.5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer flex items-center gap-1.5",
              children: "💧 Карточка 2: Глаголы"
            }), m && n.jsx("button", {
              onClick: be,
              className: "px-3.5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "👩‍🏫 Ответы учителя"
            })]
          })]
        })
      }), H && n.jsx("div", {
        className: "bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-3.5 flex items-center justify-between text-emerald-900 text-xs sm:text-sm font-black",
        children: n.jsx("span", {
          children: "🎉 Отлично! Фрагмент отчёта №2 получен. Можешь пройти остальные форматы или перейти к Миссии 2!"
        })
      }), n.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
        children: [{
          id: "match",
          badge: "Формат А (8 улик)",
          title: "1. Слово — Картинка",
          desc: "Сопоставь снимки улик и слова",
          score: `${M}/8`,
          done: U && M >= 6
        }, {
          id: "choice",
          badge: "Формат Б (7 фраз)",
          title: "2. Выбери правильное слово",
          desc: "Подбери улику по смыслу предложения",
          score: `${I}/7`,
          done: E && I >= 5
        }, {
          id: "cloze",
          badge: "Формат В (7 фраз)",
          title: "3. Пропуски в предложениях",
          desc: "Вставь слова из банка улик в досье",
          score: `${Y}/7`,
          done: Ne && Y >= 5
        }].map(r => {
          const q = R === r.id;
          return n.jsxs("button", {
            onClick: () => F(r.id),
            className: `p-4 rounded-2xl border-2 text-left transition cursor-pointer flex items-center justify-between ${q?"bg-[#0284C7] text-white border-[#0284C7] shadow-lg":"bg-[#FFFDF9] text-slate-800 border-[#C8B9A6] hover:border-sky-400"}`,
            children: [n.jsxs("div", {
              children: [n.jsx("span", {
                className: `text-[11px] font-mono-code uppercase font-bold px-2 py-0.5 rounded ${q?"bg-white/20 text-white":"bg-sky-100 text-sky-800"}`,
                children: r.badge
              }), n.jsx("div", {
                className: "text-base font-black mt-1",
                children: r.title
              }), n.jsx("div", {
                className: `text-xs ${q?"text-sky-100":"text-slate-500"}`,
                children: r.desc
              })]
            }), n.jsx("div", {
              className: `px-2.5 py-1 rounded-xl font-mono-code text-xs font-extrabold ${r.done?"bg-emerald-500 text-white":q?"bg-slate-900/40 text-white":"bg-slate-100 text-slate-700"}`,
              children: r.score
            })]
          }, r.id)
        })
      }), R === "match" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-sky-700",
              children: "Формат А • Сопоставление «Слово — Картинка» (8 заданий)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Подпиши каждую из 8 улик правильным английским словом"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Посмотри на фрагмент главного фото, значок и описание на русском языке, а затем выбери нужное английское слово."
            })]
          }), U && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Верно: ", M, " из 8"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Pi.map((r, q) => {
            const K = It.find(h => h.id === r.id),
              f = ue[r.id] || "",
              i = f === r.word;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 transition flex flex-col justify-between gap-3 ${U?i?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex items-start gap-3.5",
                children: [K && n.jsx(ms, {
                  cropPosition: K.cropPosition,
                  alt: r.word,
                  className: "w-16 h-16 rounded-xl"
                }), n.jsx("div", {
                  className: "w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0",
                  children: n.jsx(Kt, {
                    id: r.id,
                    className: "w-10 h-10"
                  })
                }), n.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [n.jsxs("span", {
                    className: "text-xs font-mono-code font-bold text-amber-700",
                    children: ["Улика #", q + 1]
                  }), n.jsx("p", {
                    className: "text-sm font-extrabold text-slate-900 leading-snug",
                    children: r.clueRu
                  }), n.jsxs("p", {
                    className: "text-xs text-slate-500 italic mt-1",
                    children: ["Пример: “", r.sentenceEn.replace(r.word, "___"), "”"]
                  })]
                })]
              }), n.jsx("div", {
                className: "flex flex-wrap gap-1.5 pt-2 border-t border-slate-100",
                children: W.map(h => {
                  const w = f === h;
                  return n.jsx("button", {
                    onClick: () => {
                      ae(V => ({
                        ...V,
                        [r.id]: h
                      })), S(!1)
                    },
                    className: `px-2.5 py-1 rounded-lg text-xs font-extrabold transition cursor-pointer border ${w?"bg-[#0284C7] text-white border-[#0284C7] shadow-sm":"bg-[#FAF6F0] text-slate-700 border-[#D6C7B2] hover:bg-sky-50"}`,
                    children: h
                  }, h)
                })
              }), U && n.jsx("div", {
                className: `text-xs font-bold ${i?"text-emerald-800":"text-rose-800"}`,
                children: i ? `✅ Отлично! Это "${r.word}" — ${r.sentenceEn}` : `❌ Правильный ответ: "${r.word}"`
              })]
            }, r.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsxs("button", {
              onClick: () => {
                S(!0), Oe(M, I, Y)
              },
              className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: [n.jsx(Ye, {
                className: "w-4 h-4"
              }), "Проверить Формат А (8 улик)"]
            }), n.jsxs("button", {
              onClick: () => {
                ae({}), S(!1)
              },
              className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(Qt, {
                className: "w-4 h-4"
              }), "Сбросить"]
            })]
          }), n.jsx("button", {
            onClick: () => F("choice"),
            className: "px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow transition cursor-pointer",
            children: "Далее: Формат Б (Выбор слова) →"
          })]
        })]
      }), R === "choice" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-amber-700",
              children: "Формат Б • Выбор правильного слова (7 предложений)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Выбери подходящее слово для каждого из 7 предложений"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Прочитай предложение по-английски, воспользуйся переводом-подсказкой и отметь верное слово."
            })]
          }), E && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Верно: ", I, " из 7"]
          })]
        }), n.jsx("div", {
          className: "space-y-3.5",
          children: Mi.map(r => {
            const q = B[r.id],
              K = q === r.correct;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 transition flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${E?K?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "space-y-1",
                children: [n.jsx("p", {
                  className: "text-sm sm:text-base font-black text-slate-900",
                  children: r.sentenceEn
                }), n.jsx("p", {
                  className: "text-xs text-slate-500",
                  children: r.translationRu
                }), E && !K && n.jsxs("p", {
                  className: "text-xs font-bold text-rose-700",
                  children: ["❌ Правильный ответ: ", n.jsx("strong", {
                    children: r.correct
                  })]
                })]
              }), n.jsx("div", {
                className: "flex flex-wrap gap-2 shrink-0",
                children: r.options.map(f => {
                  const i = q === f;
                  let h = "bg-[#FAF6F0] border-[#D6C7B2] text-slate-800 hover:border-sky-400";
                  return i && !E ? h = "bg-[#0284C7] border-[#0284C7] text-white shadow" : E && (f === r.correct ? h = "bg-emerald-600 border-emerald-600 text-white" : i && (h = "bg-rose-600 border-rose-600 text-white")), n.jsx("button", {
                    onClick: () => {
                      Z(w => ({
                        ...w,
                        [r.id]: f
                      })), ne(!1)
                    },
                    className: `px-4 py-2 rounded-xl border text-xs sm:text-sm font-extrabold transition cursor-pointer ${h}`,
                    children: f
                  }, f)
                })
              })]
            }, r.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsxs("button", {
              onClick: () => {
                ne(!0), Oe(M, I, Y)
              },
              className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: [n.jsx(Ye, {
                className: "w-4 h-4"
              }), "Проверить Формат Б (7 фраз)"]
            }), n.jsxs("button", {
              onClick: () => {
                Z({}), ne(!1)
              },
              className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(Qt, {
                className: "w-4 h-4"
              }), "Сбросить"]
            })]
          }), n.jsx("button", {
            onClick: () => F("cloze"),
            className: "px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow transition cursor-pointer",
            children: "Далее: Формат В (Заполни пропуски) →"
          })]
        })]
      }), R === "cloze" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-emerald-700",
              children: "Формат В • Пропуски в предложениях с банком слов (7 предложений)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Вставь пропущенные слова в 7 заметок детектива"
            }), n.jsxs("p", {
              className: "text-sm text-slate-600",
              children: ["Нажми на пустое окошко в предложении, а затем кликни на нужное слово в ", n.jsx("strong", {
                children: "Банке слов"
              }), " (или впиши его с клавиатуры)."]
            })]
          }), Ne && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Верно: ", Y, " из 7"]
          })]
        }), n.jsxs("div", {
          className: "bg-sky-50 border-2 border-sky-200 rounded-2xl p-4 space-y-2",
          children: [n.jsxs("div", {
            className: "text-xs font-mono-code uppercase font-bold text-sky-800 flex items-center gap-1.5",
            children: [n.jsx(sa, {
              className: "w-4 h-4 text-sky-600"
            }), "Банк слов (нажми на слово, чтобы вставить его в выбранную строку):"]
          }), n.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: d.map(r => {
              const q = Object.values(te).some(K => K.trim().toLowerCase() === r.toLowerCase());
              return n.jsx("button", {
                onClick: () => {
                  if (_) {
                    se(i => ({
                      ...i,
                      [_]: r
                    })), de(!1);
                    const K = Wa.findIndex(i => i.id === _),
                      f = Wa[K + 1];
                    f && me(f.id)
                  }
                },
                className: `px-3.5 py-2 rounded-xl font-mono-code text-xs sm:text-sm font-black border-2 transition cursor-pointer ${q?"bg-emerald-100 border-emerald-400 text-emerald-900":"bg-white border-sky-300 text-sky-900 hover:bg-sky-600 hover:text-white shadow-sm"}`,
                children: r
              }, r)
            })
          })]
        }), n.jsx("div", {
          className: "space-y-3",
          children: Wa.map(r => {
            const q = te[r.id] || "",
              K = q.trim().toLowerCase() === r.correct.toLowerCase(),
              f = _ === r.id;
            return n.jsxs("div", {
              onClick: () => me(r.id),
              className: `p-3.5 sm:p-4 rounded-2xl border-2 transition cursor-pointer ${Ne?K?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":f?"bg-sky-50/50 border-[#0284C7] shadow-sm":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-slate-900",
                children: [n.jsx("span", {
                  children: r.before
                }), n.jsx("input", {
                  type: "text",
                  value: q,
                  onFocus: () => me(r.id),
                  onChange: i => {
                    se(h => ({
                      ...h,
                      [r.id]: i.target.value
                    })), de(!1)
                  },
                  placeholder: `(${r.hintRu})`,
                  className: "w-44 sm:w-52 px-3 py-1.5 rounded-xl border-2 border-[#0284C7] bg-white text-center font-mono-code font-black text-[#0284C7] text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                }), n.jsx("span", {
                  children: r.after
                })]
              }), Ne && n.jsx("div", {
                className: `text-xs font-bold mt-2 ${K?"text-emerald-800":"text-rose-800"}`,
                children: K ? "✅ Безупречно!" : `❌ Правильное слово: "${r.correct}" (${r.hintRu})`
              })]
            }, r.id)
          })
        }), n.jsx("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsxs("button", {
              onClick: () => {
                de(!0), Oe(M, I, Y)
              },
              className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: [n.jsx(Ye, {
                className: "w-4 h-4"
              }), "Проверить Формат В (7 пропусков)"]
            }), n.jsxs("button", {
              onClick: () => {
                se({}), de(!1)
              },
              className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(Qt, {
                className: "w-4 h-4"
              }), "Сбросить"]
            })]
          })
        })]
      }), n.jsxs("div", {
        className: "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl border-2 border-amber-300 p-5 sm:p-6 shadow-sm space-y-4",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
          children: [n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsx("div", {
              className: "w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black shadow shrink-0",
              children: n.jsx(Yx, {
                className: "w-6 h-6"
              })
            }), n.jsxs("div", {
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-amber-800",
                children: "⚡ Бонус для быстрого детектива • Автоматическое доп. задание"
              }), n.jsx("h3", {
                className: "text-lg font-black text-slate-900",
                children: "Скоростная сборка 6 секретных фраз (Collocation Builder)"
              })]
            })]
          }), n.jsx("button", {
            onClick: () => ce(!z),
            className: "px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs sm:text-sm transition cursor-pointer shrink-0",
            children: z ? "Скрыть доп. задание" : "Открыть доп. задание (6 фраз)"
          })]
        }), z && n.jsxs("div", {
          className: "space-y-4 pt-2 border-t border-amber-200",
          children: [n.jsx("p", {
            className: "text-xs sm:text-sm text-slate-700",
            children: "Справился раньше времени? Подбери правильный глагол (`fill`, `turn off`, `empty`, `turn on`, `save`, `Don’t waste`) к каждой из 6 фраз для будущего отчёта:"
          }), n.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
            children: xx.map(r => {
              const q = ee[r.id] || "",
                K = q === r.verb;
              return n.jsxs("div", {
                className: `p-3.5 rounded-2xl border bg-white space-y-2 ${Q?K?"border-emerald-400 bg-emerald-50/40":"border-rose-400 bg-rose-50/40":"border-amber-200"}`,
                children: [n.jsxs("div", {
                  className: "text-sm font-black text-slate-900",
                  children: [n.jsx("span", {
                    className: "text-amber-700 underline",
                    children: q || "______"
                  }), " ", r.target]
                }), n.jsx("div", {
                  className: "text-xs text-slate-500",
                  children: r.ru
                }), n.jsx("div", {
                  className: "flex flex-wrap gap-1.5",
                  children: ["fill", "turn off", "empty", "turn on", "save", "Don’t waste"].map(f => n.jsx("button", {
                    onClick: () => {
                      J(i => ({
                        ...i,
                        [r.id]: f
                      })), g(!1)
                    },
                    className: `px-2.5 py-1 rounded-lg text-xs font-bold border transition cursor-pointer ${q===f?"bg-amber-600 text-white border-amber-600":"bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100"}`,
                    children: f
                  }, f))
                })]
              }, r.id)
            })
          }), n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsx("button", {
              onClick: () => g(!0),
              className: "px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs sm:text-sm cursor-pointer",
              children: "Проверить бонус-фразы"
            }), Q && n.jsxs("span", {
              className: "text-xs sm:text-sm font-black text-emerald-800",
              children: ["Верно собрано:", " ", xx.filter(r => ee[r.id] === r.verb).length, " из 6!"]
            })]
          })]
        })]
      })]
    })
  },
  lm = ({
    customPhotoUrl: O,
    onCompleteStage: H,
    isStageCompleted: G,
    onOpenRuleCard: m,
    teacherMode: R
  }) => {
    const [F, ue] = usePersisted("lmPreps", {}), [ae, U] = usePersisted("lmPrepsChecked", !1), [S, B] = usePersisted("lmTF", {}), [Z, E] = usePersisted("lmTFChecked", !1), [ne, te] = usePersisted("lmDone", !1), [se, _] = usePersisted("lmSentences", ["", "", ""]), [me, Ne] = L.useState(null), de = O || Fa, z = hs.filter(g => F[g.id] === g.correct).length, ce = Ci.filter(g => S[g.id] === g.isTrue).length, ee = () => {
      U(!0), z >= 6 && (H(), te(!0))
    }, J = () => {
      E(!0), ce >= 5 && (H(), te(!0))
    }, Q = () => {
      const g = {};
      hs.forEach(I => g[I.id] = I.correct), ue(g), U(!0);
      const M = {};
      Ci.forEach(I => M[I.id] = I.isTrue), B(M), E(!0), H(), te(!0)
    };
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-indigo-500 shadow-xl",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-mono-code font-bold uppercase",
                children: "Этап 3 из 6 • Миссия 2 (7–8 минут)"
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono-code",
                children: "Предлоги места: above (над) • below (под) • next to (рядом с)"
              })]
            }), n.jsx("h1", {
              className: "text-2xl sm:text-3xl font-black tracking-tight",
              children: "🗺️ Миссия 2: «Карта объектов» — Расположение улик на фото и в доме"
            }), n.jsxs("p", {
              className: "text-slate-300 text-sm sm:text-base",
              children: ["Чтобы составить точный отчёт, детектив должен уметь описать, где именно находятся предметы! Используй предлоги ", n.jsx("strong", {
                className: "text-indigo-300",
                children: "above"
              }), ", ", n.jsx("strong", {
                className: "text-sky-300",
                children: "below"
              }), " и ", n.jsx("strong", {
                className: "text-emerald-300",
                children: "next to"
              }), " в 8 фразах по фото и получи ", n.jsx("strong", {
                children: "Фрагмент отчёта №3"
              }), "."]
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap gap-2 shrink-0",
            children: [n.jsxs("button", {
              onClick: () => m("prepositions"),
              className: "px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(zx, {
                className: "w-4 h-4"
              }), "Карточка 4: Предлоги места"]
            }), R && n.jsx("button", {
              onClick: Q,
              className: "px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "👩‍🏫 Ответы учителя"
            })]
          })]
        })
      }), G && n.jsx("div", {
        className: "bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-3.5 text-emerald-900 text-xs sm:text-sm font-black",
        children: "🎉 Отлично! Фрагмент отчёта №3 разблокирован! Ты отлично ориентируешься по карте объектов."
      }), n.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
        children: [n.jsxs("div", {
          className: "lg:col-span-5 bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-4 sm:p-5 shadow-md space-y-4 lg:sticky lg:top-24",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-indigo-700",
              children: "Схема места происшествия"
            }), n.jsx("h2", {
              className: "text-lg font-black text-slate-900",
              children: "Карта улик: ABOVE, BELOW, NEXT TO"
            })]
          }), n.jsxs("div", {
            className: "relative rounded-2xl overflow-hidden border-3 border-[#1E293B] shadow-md",
            children: [n.jsx("img", {
              src: de,
              alt: "Spatial Map of Crime Scene",
              className: "w-full h-auto block"
            }), n.jsx("div", {
              className: "absolute top-2 left-2 bg-indigo-950/85 text-white px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold border border-indigo-400/50",
              children: "⬆️ Plant is ABOVE washing machine"
            }), n.jsx("div", {
              className: "absolute bottom-2 left-2 bg-emerald-950/85 text-white px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold border border-emerald-400/50",
              children: "↔️ Dishwasher is NEXT TO washing machine"
            }), n.jsx("div", {
              className: "absolute top-2 right-2 bg-sky-950/85 text-white px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold border border-sky-400/50",
              children: "⬆️ Tap is ABOVE bucket"
            }), n.jsx("div", {
              className: "absolute bottom-2 right-2 bg-amber-950/85 text-white px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold border border-amber-400/50",
              children: "⬇️ Bucket is BELOW tap & NEXT TO watering can"
            })]
          }), n.jsxs("div", {
            className: "grid grid-cols-3 gap-2 text-center",
            children: [n.jsxs("div", {
              className: "bg-indigo-50 border border-indigo-200 rounded-xl p-2.5",
              children: [n.jsx(dx, {
                className: "w-4 h-4 text-indigo-600 mx-auto"
              }), n.jsx("div", {
                className: "text-sm font-black text-indigo-800 mt-0.5",
                children: "above"
              }), n.jsx("div", {
                className: "text-[11px] font-bold text-slate-600",
                children: "НАД (выше)"
              })]
            }), n.jsxs("div", {
              className: "bg-sky-50 border border-sky-200 rounded-xl p-2.5",
              children: [n.jsx(dx, {
                className: "w-4 h-4 text-sky-600 mx-auto"
              }), n.jsx("div", {
                className: "text-sm font-black text-sky-800 mt-0.5",
                children: "below"
              }), n.jsx("div", {
                className: "text-[11px] font-bold text-slate-600",
                children: "ПОД (ниже)"
              })]
            }), n.jsxs("div", {
              className: "bg-emerald-50 border border-emerald-200 rounded-xl p-2.5",
              children: [n.jsx(zp, {
                className: "w-4 h-4 text-emerald-600 mx-auto"
              }), n.jsx("div", {
                className: "text-sm font-black text-emerald-800 mt-0.5",
                children: "next to"
              }), n.jsx("div", {
                className: "text-[11px] font-bold text-slate-600",
                children: "РЯДОМ С"
              })]
            })]
          })]
        }), n.jsxs("div", {
          className: "lg:col-span-7 bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-6 shadow-md space-y-4",
          children: [n.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E2D9C8] pb-3",
            children: [n.jsxs("div", {
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-indigo-700",
                children: "Часть А • 8 фраз о расположении предметов на фото и в доме"
              }), n.jsx("h2", {
                className: "text-xl font-black text-slate-900",
                children: "Выбери правильный предлог: above, below или next to"
              })]
            }), ae && n.jsxs("span", {
              className: "px-3.5 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-black text-xs sm:text-sm",
              children: ["Верно: ", z, " / ", hs.length]
            })]
          }), n.jsx("div", {
            className: "space-y-3",
            children: hs.map(g => {
              const M = F[g.id],
                I = M === g.correct;
              return n.jsxs("div", {
                className: `p-4 rounded-2xl border-2 transition space-y-2.5 ${ae?I?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
                children: [n.jsx("div", {
                  className: "flex items-center justify-between",
                  children: n.jsxs("span", {
                    className: "text-[11px] font-mono-code font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700",
                    children: ["📍 ", g.zone]
                  })
                }), n.jsxs("p", {
                  className: "text-sm sm:text-base font-bold text-slate-900 leading-relaxed",
                  children: [g.before, n.jsx("span", {
                    className: "inline-block px-2.5 py-0.5 mx-1 rounded-lg bg-indigo-100 text-indigo-900 font-mono-code font-black underline",
                    children: M || "______"
                  }), g.after]
                }), n.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: ["above", "below", "next to"].map(Y => {
                    const Oe = M === Y;
                    let be = "bg-[#FAF6F0] border-[#D6C7B2] text-slate-800 hover:border-indigo-400";
                    return Oe && !ae ? be = "bg-indigo-600 border-indigo-600 text-white shadow" : ae && (Y === g.correct ? be = "bg-emerald-600 border-emerald-600 text-white" : Oe && (be = "bg-rose-600 border-rose-600 text-white")), n.jsx("button", {
                      onClick: () => {
                        ue(W => ({
                          ...W,
                          [g.id]: Y
                        })), U(!1)
                      },
                      className: `px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-black transition cursor-pointer ${be}`,
                      children: Y
                    }, Y)
                  })
                }), ae && n.jsx("p", {
                  className: `text-xs font-bold ${I?"text-emerald-800":"text-rose-800"}`,
                  children: I ? `✅ Верно! ${g.visualClueRu}` : `❌ Правильный ответ: "${g.correct}". ${g.visualClueRu}`
                })]
              }, g.id)
            })
          }), n.jsxs("div", {
            className: "flex flex-wrap items-center gap-3 pt-2 border-t border-[#E2D9C8]",
            children: [n.jsxs("button", {
              onClick: ee,
              className: "px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: [n.jsx(Ye, {
                className: "w-4 h-4"
              }), "Проверить 8 фраз с предлогами"]
            }), n.jsxs("button", {
              onClick: () => {
                ue({}), U(!1)
              },
              className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(Qt, {
                className: "w-4 h-4"
              }), "Сбросить"]
            })]
          })]
        })]
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-4",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2D9C8] pb-3",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-sky-700",
              children: "Часть Б • Детектор правды по карте дома (6 утверждений)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900",
              children: "Правда или ложь? Проверь 6 записей помощника детектива"
            })]
          }), Z && n.jsxs("span", {
            className: "px-3.5 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-black text-xs sm:text-sm",
            children: ["Верно: ", ce, " / 6"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Ci.map(g => {
            const M = S[g.id],
              I = M === g.isTrue;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 flex flex-col justify-between gap-3 ${Z?I?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                children: [n.jsx("p", {
                  className: "text-sm font-black text-slate-900",
                  children: g.statementEn
                }), n.jsx("p", {
                  className: "text-xs text-slate-500 mt-0.5",
                  children: g.translationRu
                })]
              }), n.jsx("div", {
                className: "flex items-center gap-2",
                children: [{
                  label: "TRUE (Правда)",
                  val: !0
                }, {
                  label: "FALSE (Ложь)",
                  val: !1
                }].map(Y => {
                  const Oe = M === Y.val;
                  return n.jsx("button", {
                    onClick: () => {
                      B(be => ({
                        ...be,
                        [g.id]: Y.val
                      })), E(!1)
                    },
                    className: `flex-1 py-2 px-3 rounded-xl text-xs font-black border transition cursor-pointer ${Oe?"bg-[#0284C7] text-white border-[#0284C7]":"bg-[#FAF6F0] text-slate-700 border-[#D6C7B2] hover:bg-sky-50"}`,
                    children: Y.label
                  }, Y.label)
                })
              }), Z && n.jsx("p", {
                className: `text-xs font-bold ${I?"text-emerald-800":"text-rose-800"}`,
                children: I ? `✅ ${g.correctionEn}` : `❌ ${g.correctionEn}`
              })]
            }, g.id)
          })
        }), n.jsx("div", {
          className: "flex items-center gap-3 pt-2",
          children: n.jsxs("button", {
            onClick: J,
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить Часть Б (6 утверждений)"]
          })
        })]
      }), n.jsxs("div", {
        className: "bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 rounded-3xl border-2 border-indigo-300 p-5 space-y-4",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
          children: [n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsx("div", {
              className: "w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black shrink-0",
              children: n.jsx(Yx, {
                className: "w-5 h-5"
              })
            }), n.jsxs("div", {
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-indigo-800",
                children: "⚡ Доп. задание для быстрых учеников"
              }), n.jsx("h3", {
                className: "text-lg font-black text-slate-900",
                children: "Напиши ещё 1–3 своих предложения с above / below / next to о своей комнате или кухне!"
              })]
            })]
          }), n.jsx("button", {
            onClick: () => te(!ne),
            className: "px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs sm:text-sm cursor-pointer shrink-0",
            children: ne ? "Скрыть" : "Открыть мини-практику"
          })]
        }), ne && n.jsxs("div", {
          className: "space-y-3 pt-2 border-t border-indigo-200",
          children: [se.map((g, M) => n.jsxs("div", {
            className: "flex items-center gap-2",
            children: [n.jsx("span", {
              className: "w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-mono-code font-bold flex items-center justify-center shrink-0",
              children: M + 1
            }), n.jsx("input", {
              type: "text",
              value: g,
              onChange: I => {
                const Y = [...se];
                Y[M] = I.target.value, _(Y)
              },
              placeholder: "Например: In my kitchen, the cupboard is above the dishwasher.",
              className: "w-full px-3.5 py-2 rounded-xl bg-white border border-indigo-300 text-xs sm:text-sm font-bold text-slate-800"
            })]
          }, M)), n.jsx("button", {
            onClick: () => {
              const g = se.filter(M => /(above|below|next to)/i.test(M)).length;
              Ne(`Проверено! Предложений с предлогами (above / below / next to): ${g} из 3. Супер-детектив!`)
            },
            className: "px-4 py-2 rounded-xl bg-indigo-700 text-white text-xs font-black cursor-pointer",
            children: "Проверить мои предложения"
          }), me && n.jsx("p", {
            className: "text-xs font-black text-emerald-800",
            children: me
          })]
        })]
      })]
    })
  },
  am = ({
    onCompleteStage: O,
    isStageCompleted: H,
    onOpenRuleCard: G,
    teacherMode: m
  }) => {
    const [R, F] = usePersisted("amTab", "instructions"), [ue, ae] = usePersisted("amBlank1", {}), [U, S] = usePersisted("amBlank2", {}), [B, Z] = usePersisted("amInstChecked", !1), [E, ne] = usePersisted("amTiles", {}), [te, se] = usePersisted("amTilesChecked", !1), [_, me] = usePersisted("amPic", {}), [Ne, de] = usePersisted("amPicChecked", !1), [z, ce] = usePersisted("amPicOn", !1), [ee, J] = usePersisted("amFix", {}), [Q, g] = usePersisted("amFixChecked", !1), M = Li.filter(d => ue[d.id] === d.correct1 && U[d.id] === d.correct2).length, I = (d, r) => (E[d] || []).map(K => r[K]).join(""), Y = Ei.filter(d => normAns(I(d.id, d.letters)) === normAns(d.targetWord)).length, Oe = Bi.filter(d => normAns(_[d.id]) === normAns(d.targetWord)).length, be = Wi.filter(d => normAns(ee[d.id]) === normAns(d.correctWord)).length, W = () => {
      const d = {},
        r = {};
      Li.forEach(i => {
        d[i.id] = i.correct1, r[i.id] = i.correct2
      }), ae(d), S(r), Z(!0);
      const q = {};
      Ei.forEach(i => {
        const h = [];
        for (const w of i.targetWord) {
          const V = i.letters.findIndex((v, C) => v.toLowerCase() === w.toLowerCase() && !h.includes(C));
          V !== -1 && h.push(V)
        }
        q[i.id] = h
      }), ne(q), se(!0);
      const K = {};
      Bi.forEach(i => K[i.id] = i.targetWord), me(K), ce(!0);
      const f = {};
      Wi.forEach(i => f[i.id] = i.correctWord), J(f), g(!0), O()
    };
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-amber-500 shadow-xl",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-mono-code font-bold uppercase",
                children: "Этап 4 из 6 • Миссия 3 (8–10 минут)"
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono-code",
                children: "Глаголы: fill • empty • waste • save • turn on • turn off + Правописание"
              })]
            }), n.jsx("h1", {
              className: "text-2xl sm:text-3xl font-black tracking-tight",
              children: "🔐 Миссия 3: «Секретные инструкции» + Лаборатория написания слов"
            }), n.jsxs("p", {
              className: "text-slate-300 text-sm sm:text-base",
              children: ["Составь 7 главных инструкций по спасению воды, а затем потренируй написание всех новых слов в трёх игровых форматах (буквы-плитки, слово по картинке и исправление ошибок в шифровке), чтобы получить ", n.jsx("strong", {
                children: "Фрагмент отчёта №4"
              }), "!"]
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap gap-2 shrink-0",
            children: [n.jsx("button", {
              onClick: () => G("verbs"),
              className: "px-3.5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "💧 Карточка 2: Глаголы воды"
            }), n.jsx("button", {
              onClick: () => G("words"),
              className: "px-3.5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "📖 Карточка 1: Слова"
            }), m && n.jsx("button", {
              onClick: W,
              className: "px-3.5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "👩‍🏫 Ответы учителя"
            })]
          })]
        })
      }), H && n.jsx("div", {
        className: "bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-3.5 text-emerald-900 text-xs sm:text-sm font-black",
        children: "🎉 Блестяще! Фрагмент отчёта №4 собран! Теперь ты готов к Финальной миссии — сборке полного отчёта детектива."
      }), n.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        children: [{
          id: "instructions",
          icon: Mp,
          badge: "Часть А (7 фраз)",
          title: "1. Секретные инструкции",
          desc: "Выбери глаголы экономии воды",
          score: `${M}/7`
        }, {
          id: "scramble",
          icon: Kx,
          badge: "Игра 1 (7 слов)",
          title: "2. Собери из букв",
          desc: "Перетащи / нажми буквы по порядку",
          score: `${Y}/7`
        }, {
          id: "dictation",
          icon: Lp,
          badge: "Игра 2 (7 слов)",
          title: "3. Слово по картинке",
          desc: "Впиши слово, глядя на улику",
          score: `${Oe}/7`
        }, {
          id: "fixerror",
          icon: Wp,
          badge: "Игра 3 (7 фраз)",
          title: "4. Исправь ошибку",
          desc: "Найди опечатку в секретном коде",
          score: `${be}/7`
        }].map(d => {
          const r = d.icon,
            q = R === d.id;
          return n.jsxs("button", {
            onClick: () => F(d.id),
            className: `p-4 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between gap-2 ${q?"bg-[#0284C7] text-white border-[#0284C7] shadow-lg":"bg-[#FFFDF9] text-slate-800 border-[#C8B9A6] hover:border-sky-400"}`,
            children: [n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [n.jsx("span", {
                className: `text-[11px] font-mono-code uppercase font-bold px-2 py-0.5 rounded ${q?"bg-white/20 text-white":"bg-amber-100 text-amber-900"}`,
                children: d.badge
              }), n.jsx("span", {
                className: `px-2 py-0.5 rounded-lg font-mono-code text-xs font-black ${q?"bg-slate-900/40 text-white":"bg-slate-100 text-slate-700"}`,
                children: d.score
              })]
            }), n.jsxs("div", {
              children: [n.jsxs("div", {
                className: "text-sm sm:text-base font-black flex items-center gap-1.5",
                children: [n.jsx(r, {
                  className: "w-4 h-4 shrink-0"
                }), n.jsx("span", {
                  children: d.title
                })]
              }), n.jsx("p", {
                className: `text-xs mt-0.5 ${q?"text-sky-100":"text-slate-500"}`,
                children: d.desc
              })]
            })]
          }, d.id)
        })
      }), R === "instructions" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-amber-700",
              children: "Часть А • Секретные инструкции по экономии воды (7 предложений)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Составь 7 правильных инструкций с глаголами fill, empty, waste, save, turn on, turn off"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "В каждом предложении выбери 2 правильных слова, чтобы получилась верная инструкция для будущего отчёта!"
            })]
          }), B && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Верно: ", M, " из 7"]
          })]
        }), n.jsx("div", {
          className: "space-y-4",
          children: Li.map(d => {
            const r = ue[d.id],
              q = U[d.id],
              K = r === d.correct1,
              f = q === d.correct2,
              i = K && f;
            return n.jsxs("div", {
              className: `p-4 sm:p-5 rounded-2xl border-2 transition space-y-3 ${B?i?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [n.jsx("span", {
                  className: "text-xs font-bold text-slate-500",
                  children: d.promptRu
                }), n.jsx("span", {
                  className: "text-xs font-mono-code font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800",
                  children: d.zone
                })]
              }), n.jsxs("div", {
                className: "text-base sm:text-lg font-black text-slate-900 flex flex-wrap items-center gap-2 leading-relaxed",
                children: [n.jsx("span", {
                  children: d.beforeEn
                }), n.jsx("span", {
                  className: "px-3 py-1 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-mono-code",
                  children: r || "___ (1) ___"
                }), n.jsx("span", {
                  children: d.middleEn
                }), n.jsx("span", {
                  className: "px-3 py-1 rounded-xl bg-sky-100 border border-sky-300 text-sky-900 font-mono-code",
                  children: q || "___ (2) ___"
                }), n.jsx("span", {
                  children: d.afterEn
                })]
              }), n.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100",
                children: [n.jsxs("div", {
                  className: "space-y-1",
                  children: [n.jsx("span", {
                    className: "text-[11px] font-mono-code uppercase font-bold text-amber-800",
                    children: "Выбор №1:"
                  }), n.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: d.blank1Options.map(h => n.jsx("button", {
                      onClick: () => {
                        ae(w => ({
                          ...w,
                          [d.id]: h
                        })), Z(!1)
                      },
                      className: `px-3 py-1.5 rounded-xl text-xs font-extrabold border transition cursor-pointer ${r===h?"bg-amber-600 text-white border-amber-600 shadow":"bg-[#FAF6F0] text-slate-700 border-[#D6C7B2] hover:bg-amber-50"}`,
                      children: h
                    }, h))
                  })]
                }), n.jsxs("div", {
                  className: "space-y-1",
                  children: [n.jsx("span", {
                    className: "text-[11px] font-mono-code uppercase font-bold text-sky-800",
                    children: "Выбор №2:"
                  }), n.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: d.blank2Options.map(h => n.jsx("button", {
                      onClick: () => {
                        S(w => ({
                          ...w,
                          [d.id]: h
                        })), Z(!1)
                      },
                      className: `px-3 py-1.5 rounded-xl text-xs font-extrabold border transition cursor-pointer ${q===h?"bg-[#0284C7] text-white border-[#0284C7] shadow":"bg-[#FAF6F0] text-slate-700 border-[#D6C7B2] hover:bg-sky-50"}`,
                      children: h
                    }, h))
                  })]
                })]
              }), B && n.jsx("div", {
                className: `text-xs font-bold ${i?"text-emerald-800":"text-rose-800"}`,
                children: i ? `✅ Правильная инструкция: "${d.fullSentenceEn}"` : `❌ Верный вариант: "${d.fullSentenceEn}"`
              })]
            }, d.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsxs("button", {
              onClick: () => {
                Z(!0), M >= 5 && O()
              },
              className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
              children: [n.jsx(Ye, {
                className: "w-4 h-4"
              }), "Проверить 7 секретных инструкций"]
            }), n.jsxs("button", {
              onClick: () => {
                ae({}), S({}), Z(!1)
              },
              className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(Qt, {
                className: "w-4 h-4"
              }), "Сбросить"]
            })]
          }), n.jsx("button", {
            onClick: () => F("scramble"),
            className: "px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow transition cursor-pointer",
            children: "Перейти к Игре 1: Собери слово из букв →"
          })]
        })]
      }), R === "scramble" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-sky-700",
              children: "Игровая практика написания №1 • Плитки с буквами (7 слов)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Собери 7 новых слов из перемешанных букв!"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Нажимай на буквы по порядку, чтобы сложить английское слово. Нажми на собранную букву или кнопку «Очистить», если хочешь исправить."
            })]
          }), te && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Собрано верно: ", Y, " из 7"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Ei.map(d => {
            const r = E[d.id] || [],
              q = I(d.id, d.letters),
              K = q.length === d.targetWord.length,
              f = q.toLowerCase() === d.targetWord.toLowerCase();
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 space-y-3 transition ${te||K?f?"bg-emerald-50/70 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex items-center justify-between gap-3",
                children: [n.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [n.jsx(ms, {
                    cropPosition: d.cropPosition,
                    alt: d.targetWord,
                    className: "w-14 h-14 rounded-xl"
                  }), n.jsxs("div", {
                    children: [n.jsx("span", {
                      className: "text-xs font-mono-code uppercase text-slate-400 font-bold",
                      children: "Перевод улики:"
                    }), n.jsx("div", {
                      className: "text-base font-black text-slate-900",
                      children: d.translationRu
                    })]
                  })]
                }), n.jsx("button", {
                  onClick: () => {
                    ne(i => ({
                      ...i,
                      [d.id]: []
                    })), se(!1)
                  },
                  className: "text-xs font-bold text-slate-500 hover:text-rose-600 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-rose-50 transition cursor-pointer",
                  children: "Очистить"
                })]
              }), n.jsx("div", {
                className: "flex flex-wrap gap-1.5 min-h-[42px] p-2 rounded-xl bg-[#FAF6F0] border border-[#D6C7B2] items-center",
                children: d.targetWord.split("").map((i, h) => {
                  const w = r[h],
                    V = w !== void 0 ? d.letters[w] : "";
                  return n.jsx("button", {
                    disabled: w === void 0,
                    onClick: () => {
                      ne(v => ({
                        ...v,
                        [d.id]: (v[d.id] || []).filter((C, P) => P !== h)
                      })), se(!1)
                    },
                    className: `w-8 h-9 rounded-lg font-mono-code font-black text-sm uppercase flex items-center justify-center border-b-2 transition ${V?"bg-[#0284C7] text-white border-sky-900 cursor-pointer shadow-sm":"bg-white text-slate-300 border-slate-300"}`,
                    children: V || "_"
                  }, h)
                })
              }), n.jsx("div", {
                className: "flex flex-wrap gap-1.5",
                children: d.letters.map((i, h) => {
                  const w = r.includes(h);
                  return n.jsx("button", {
                    disabled: w,
                    onClick: () => {
                      ne(V => ({
                        ...V,
                        [d.id]: [...V[d.id] || [], h]
                      })), se(!1)
                    },
                    className: `w-9 h-10 rounded-xl font-mono-code font-black text-sm uppercase border-b-3 transition ${w?"bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed":"bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-400 cursor-pointer shadow-sm active:translate-y-0.5"}`,
                    children: i
                  }, h)
                })
              }), (te || K) && n.jsx("div", {
                className: `text-xs font-bold ${f?"text-emerald-800":"text-rose-800"}`,
                children: f ? `✅ Правильно! Слово: ${d.targetWord}` : `❌ Попробуй ещё раз! Правильное написание: ${d.targetWord}`
              })]
            }, d.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("button", {
            onClick: () => {
              se(!0), Y >= 5 && O()
            },
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить собранные слова"]
          }), n.jsx("button", {
            onClick: () => F("dictation"),
            className: "px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow transition cursor-pointer",
            children: "Перейти к Игре 2: Впиши слово по картинке →"
          })]
        })]
      }), R === "dictation" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-emerald-700",
              children: "Игровая практика написания №2 • Впиши слово по картинке (7 слов)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Посмотри на картинку-улику и напечатай слово по-английски"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Если забыл первую букву или количество букв, нажми кнопку «Подсказка букв»."
            })]
          }), z && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Верно написано: ", Oe, " из 7"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Bi.map(d => {
            const r = It.find(i => i.id === d.targetWord),
              q = _[d.id] || "",
              K = q.trim().toLowerCase() === d.targetWord.toLowerCase(),
              f = Ne[d.id];
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 space-y-3 transition ${z?K?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex items-start gap-3.5",
                children: [r && n.jsx(ms, {
                  cropPosition: r.cropPosition,
                  alt: d.targetWord,
                  className: "w-16 h-16 rounded-xl"
                }), n.jsx("div", {
                  className: "w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0",
                  children: n.jsx(Kt, {
                    id: d.targetWord,
                    className: "w-10 h-10"
                  })
                }), n.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [n.jsx("div", {
                    className: "text-sm font-black text-slate-900",
                    children: d.translationRu
                  }), n.jsx("p", {
                    className: "text-xs text-slate-500 mt-0.5",
                    children: d.clueEn
                  })]
                })]
              }), n.jsxs("div", {
                className: "flex items-center gap-2",
                children: [n.jsx("input", {
                  type: "text",
                  value: q,
                  onChange: i => {
                    me(h => ({
                      ...h,
                      [d.id]: i.target.value
                    })), ce(!1)
                  },
                  placeholder: "Напечатай слово по-английски...",
                  className: "flex-1 px-3.5 py-2 rounded-xl border-2 border-[#C8B9A6] focus:border-[#0284C7] bg-[#FAF6F0] focus:bg-white font-mono-code font-bold text-sm text-slate-900 focus:outline-none"
                }), n.jsxs("button", {
                  onClick: () => de(i => ({
                    ...i,
                    [d.id]: !i[d.id]
                  })),
                  className: "px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-extrabold cursor-pointer shrink-0 flex items-center gap-1",
                  title: "Показать маску букв",
                  children: [n.jsx(to, {
                    className: "w-3.5 h-3.5"
                  }), "Буквы"]
                })]
              }), f && n.jsxs("div", {
                className: "text-xs font-mono-code font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200",
                children: ["Подсказка: ", d.firstLetterHint]
              }), z && n.jsx("div", {
                className: `text-xs font-bold ${K?"text-emerald-800":"text-rose-800"}`,
                children: K ? `✅ Точно! "${d.targetWord}"` : `❌ Правильное написание: "${d.targetWord}"`
              })]
            }, d.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("button", {
            onClick: () => {
              ce(!0), Oe >= 5 && O()
            },
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить написанные слова"]
          }), n.jsx("button", {
            onClick: () => F("fixerror"),
            className: "px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow transition cursor-pointer",
            children: "Перейти к Игре 3: Исправь ошибку в слове →"
          })]
        })]
      }), R === "fixerror" && n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-rose-700",
              children: "Игровая практика написания №3 • Исправь ошибку в слове (7 фраз)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Помощник детектива допустил опечатки! Исправь выделенное слово"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Найди ошибку в слове, выделенном красным шрифтом, и впиши это слово без ошибок."
            })]
          }), Q && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Исправлено: ", be, " из 7"]
          })]
        }), n.jsx("div", {
          className: "space-y-3.5",
          children: Wi.map(d => {
            const r = ee[d.id] || "",
              q = r.trim().toLowerCase() === d.correctWord.toLowerCase();
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 transition flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${Q?q?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "space-y-1",
                children: [n.jsx("p", {
                  className: "text-sm sm:text-base font-black text-slate-900",
                  children: d.sentenceWithMistake
                }), n.jsx("p", {
                  className: "text-xs text-slate-500",
                  children: d.translationRu
                }), n.jsxs("div", {
                  className: "text-xs font-mono-code text-rose-700 font-bold",
                  children: ["❌ Ошибка в заметке: ", n.jsx("span", {
                    className: "line-through",
                    children: d.wrongWord
                  })]
                })]
              }), n.jsxs("div", {
                className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0",
                children: [n.jsx("input", {
                  type: "text",
                  value: r,
                  onChange: K => {
                    J(f => ({
                      ...f,
                      [d.id]: K.target.value
                    })), g(!1)
                  },
                  placeholder: "Напиши правильно...",
                  className: "w-full sm:w-56 px-3.5 py-2 rounded-xl border-2 border-[#C8B9A6] focus:border-emerald-600 bg-[#FAF6F0] focus:bg-white font-mono-code font-black text-sm text-emerald-900 focus:outline-none"
                }), Q && n.jsx("span", {
                  className: `text-xs font-bold px-2.5 py-1 rounded-lg ${q?"bg-emerald-100 text-emerald-800":"bg-rose-100 text-rose-800"}`,
                  children: q ? "✅ Верно!" : `Ответ: ${d.correctWord}`
                })]
              })]
            }, d.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("button", {
            onClick: () => {
              g(!0), be >= 5 && O()
            },
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить исправленные слова"]
          }), n.jsxs("button", {
            onClick: () => {
              J({}), g(!1)
            },
            className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
            children: [n.jsx(Qt, {
              className: "w-4 h-4"
            }), "Сбросить"]
          })]
        })]
      })]
    })
  };
var ao = {};
(function O(H, G, m, R) {
    var F = !!(H.Worker && H.Blob && H.Promise && H.OffscreenCanvas && H.OffscreenCanvasRenderingContext2D && H.HTMLCanvasElement && H.HTMLCanvasElement.prototype.transferControlToOffscreen && H.URL && H.URL.createObjectURL),
      ue = typeof Path2D == "function" && typeof DOMMatrix == "function",
      ae = (function() {
        if (!H.OffscreenCanvas) return !1;
        try {
          var f = new OffscreenCanvas(1, 1),
            i = f.getContext("2d");
          i.fillRect(0, 0, 1, 1);
          var h = f.transferToImageBitmap();
          i.createPattern(h, "no-repeat")
        } catch {
          return !1
        }
        return !0
      })();

    function U() {}

    function S(f) {
      var i = G.exports.Promise,
        h = i !== void 0 ? i : H.Promise;
      return typeof h == "function" ? new h(f) : (f(U, U), null)
    }
    var B = (function(f, i) {
        return {
          transform: function(h) {
            if (f) return h;
            if (i.has(h)) return i.get(h);
            var w = new OffscreenCanvas(h.width, h.height),
              V = w.getContext("2d");
            return V.drawImage(h, 0, 0), i.set(h, w), w
          },
          clear: function() {
            i.clear()
          }
        }
      })(ae, new Map),
      Z = (function() {
        var f = Math.floor(16.666666666666668),
          i, h, w = {},
          V = 0;
        return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (i = function(v) {
          var C = Math.random();
          return w[C] = requestAnimationFrame(function P(ie) {
            V === ie || V + f - 1 < ie ? (V = ie, delete w[C], v()) : w[C] = requestAnimationFrame(P)
          }), C
        }, h = function(v) {
          w[v] && cancelAnimationFrame(w[v])
        }) : (i = function(v) {
          return setTimeout(v, f)
        }, h = function(v) {
          return clearTimeout(v)
        }), {
          frame: i,
          cancel: h
        }
      })(),
      E = (function() {
        var f, i, h = {};

        function w(V) {
          function v(C, P) {
            V.postMessage({
              options: C || {},
              callback: P
            })
          }
          V.init = function(P) {
            var ie = P.transferControlToOffscreen();
            V.postMessage({
              canvas: ie
            }, [ie])
          }, V.fire = function(P, ie, re) {
            if (i) return v(P, null), i;
            var Ve = Math.random().toString(36).slice(2);
            return i = S(function(Re) {
              function ve(Be) {
                Be.data.callback === Ve && (delete h[Ve], V.removeEventListener("message", ve), i = null, B.clear(), re(), Re())
              }
              V.addEventListener("message", ve), v(P, Ve), h[Ve] = ve.bind(null, {
                data: {
                  callback: Ve
                }
              })
            }), i
          }, V.reset = function() {
            V.postMessage({
              reset: !0
            });
            for (var P in h) h[P](), delete h[P]
          }
        }
        return function() {
          if (f) return f;
          if (!m && F) {
            var V = ["var CONFETTI, SIZE = {}, module = {};", "(" + O.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
            try {
              f = new Worker(URL.createObjectURL(new Blob([V])))
            } catch (v) {
              return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", v), null
            }
            w(f)
          }
          return f
        }
      })(),
      ne = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: .9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: .5,
        y: .5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
        disableForReducedMotion: !1,
        scalar: 1
      };

    function te(f, i) {
      return i ? i(f) : f
    }

    function se(f) {
      return f != null
    }

    function _(f, i, h) {
      return te(f && se(f[i]) ? f[i] : ne[i], h)
    }

    function me(f) {
      return f < 0 ? 0 : Math.floor(f)
    }

    function Ne(f, i) {
      return Math.floor(Math.random() * (i - f)) + f
    }

    function de(f) {
      return parseInt(f, 16)
    }

    function z(f) {
      return f.map(ce)
    }

    function ce(f) {
      var i = String(f).replace(/[^0-9a-f]/gi, "");
      return i.length < 6 && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]), {
        r: de(i.substring(0, 2)),
        g: de(i.substring(2, 4)),
        b: de(i.substring(4, 6))
      }
    }

    function ee(f) {
      var i = _(f, "origin", Object);
      return i.x = _(i, "x", Number), i.y = _(i, "y", Number), i
    }

    function J(f) {
      f.width = document.documentElement.clientWidth, f.height = document.documentElement.clientHeight
    }

    function Q(f) {
      var i = f.getBoundingClientRect();
      f.width = i.width, f.height = i.height
    }

    function g(f) {
      var i = document.createElement("canvas");
      return i.style.position = "fixed", i.style.top = "0px", i.style.left = "0px", i.style.pointerEvents = "none", i.style.zIndex = f, i
    }

    function M(f, i, h, w, V, v, C, P, ie) {
      f.save(), f.translate(i, h), f.rotate(v), f.scale(w, V), f.arc(0, 0, 1, C, P, ie), f.restore()
    }

    function I(f) {
      var i = f.angle * (Math.PI / 180),
        h = f.spread * (Math.PI / 180);
      return {
        x: f.x,
        y: f.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(.11, Math.random() * .1 + .05),
        velocity: f.startVelocity * .5 + Math.random() * f.startVelocity,
        angle2D: -i + (.5 * h - Math.random() * h),
        tiltAngle: (Math.random() * (.75 - .25) + .25) * Math.PI,
        color: f.color,
        shape: f.shape,
        tick: 0,
        totalTicks: f.ticks,
        decay: f.decay,
        drift: f.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: f.gravity * 3,
        ovalScalar: .6,
        scalar: f.scalar,
        flat: f.flat
      }
    }

    function Y(f, i) {
      i.x += Math.cos(i.angle2D) * i.velocity + i.drift, i.y += Math.sin(i.angle2D) * i.velocity + i.gravity, i.velocity *= i.decay, i.flat ? (i.wobble = 0, i.wobbleX = i.x + 10 * i.scalar, i.wobbleY = i.y + 10 * i.scalar, i.tiltSin = 0, i.tiltCos = 0, i.random = 1) : (i.wobble += i.wobbleSpeed, i.wobbleX = i.x + 10 * i.scalar * Math.cos(i.wobble), i.wobbleY = i.y + 10 * i.scalar * Math.sin(i.wobble), i.tiltAngle += .1, i.tiltSin = Math.sin(i.tiltAngle), i.tiltCos = Math.cos(i.tiltAngle), i.random = Math.random() + 2);
      var h = i.tick++/i.totalTicks,w=i.x+i.random*i.tiltCos,V=i.y+i.random*i.tiltSin,v=i.wobbleX+i.random*i.tiltCos,C=i.wobbleY+i.random*i.tiltSin;if(f.fillStyle="rgba("+i.color.r+", "+i.color.g+", "+i.color.b+", "+(1-h)+")",f.beginPath(),ue&&i.shape.type==="path"&&typeof i.shape.path=="string"&&Array.isArray(i.shape.matrix))f.fill(r(i.shape.path,i.shape.matrix,i.x,i.y,Math.abs(v-w)*.1,Math.abs(C-V)*.1,Math.PI/
      10 * i.wobble));
  else if (i.shape.type === "bitmap") {
    var P = Math.PI / 10 * i.wobble,
      ie = Math.abs(v - w) * .1,
      re = Math.abs(C - V) * .1,
      Ve = i.shape.bitmap.width * i.scalar,
      Re = i.shape.bitmap.height * i.scalar,
      ve = new DOMMatrix([Math.cos(P) * ie, Math.sin(P) * ie, -Math.sin(P) * re, Math.cos(P) * re, i.x, i.y]);
    ve.multiplySelf(new DOMMatrix(i.shape.matrix));
    var Be = f.createPattern(B.transform(i.shape.bitmap), "no-repeat");
    Be.setTransform(ve), f.globalAlpha = 1 - h, f.fillStyle = Be, f.fillRect(i.x - Ve / 2, i.y - Re / 2, Ve, Re), f.globalAlpha = 1
  } else if (i.shape === "circle") f.ellipse ? f.ellipse(i.x, i.y, Math.abs(v - w) * i.ovalScalar, Math.abs(C - V) * i.ovalScalar, Math.PI / 10 * i.wobble, 0, 2 * Math.PI) : M(f, i.x, i.y, Math.abs(v - w) * i.ovalScalar, Math.abs(C - V) * i.ovalScalar, Math.PI / 10 * i.wobble, 0, 2 * Math.PI);
  else if (i.shape === "star")
    for (var he = Math.PI / 2 * 3, _e = 4 * i.scalar, it = 8 * i.scalar, jt = i.x, Tt = i.y, Pt = 5, rt = Math.PI / Pt; Pt--;) jt = i.x + Math.cos(he) * it, Tt = i.y + Math.sin(he) * it, f.lineTo(jt, Tt), he += rt, jt = i.x + Math.cos(he) * _e, Tt = i.y + Math.sin(he) * _e, f.lineTo(jt, Tt), he += rt;
  else f.moveTo(Math.floor(i.x), Math.floor(i.y)), f.lineTo(Math.floor(i.wobbleX), Math.floor(V)), f.lineTo(Math.floor(v), Math.floor(C)), f.lineTo(Math.floor(w), Math.floor(i.wobbleY));
  return f.closePath(), f.fill(), i.tick < i.totalTicks
}

function Oe(f, i, h, w, V) {
  var v = i.slice(),
    C = f.getContext("2d"),
    P, ie, re = S(function(Ve) {
      function Re() {
        P = ie = null, C.clearRect(0, 0, w.width, w.height), B.clear(), V(), Ve()
      }

      function ve() {
        m && !(w.width === R.width && w.height === R.height) && (w.width = f.width = R.width, w.height = f.height = R.height), !w.width && !w.height && (h(f), w.width = f.width, w.height = f.height), C.clearRect(0, 0, w.width, w.height), v = v.filter(function(Be) {
          return Y(C, Be)
        }), v.length ? P = Z.frame(ve) : Re()
      }
      P = Z.frame(ve), ie = Re
    });
  return {
    addFettis: function(Ve) {
      return v = v.concat(Ve), re
    },
    canvas: f,
    promise: re,
    reset: function() {
      P && Z.cancel(P), ie && ie()
    }
  }
}

function be(f, i) {
  var h = !f,
    w = !!_(i || {}, "resize"),
    V = !1,
    v = _(i, "disableForReducedMotion", Boolean),
    C = F && !!_(i || {}, "useWorker"),
    P = C ? E() : null,
    ie = h ? J : Q,
    re = f && P ? !!f.__confetti_initialized : !1,
    Ve = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches,
    Re;

  function ve(he, _e, it) {
    for (var jt = _(he, "particleCount", me), Tt = _(he, "angle", Number), Pt = _(he, "spread", Number), rt = _(he, "startVelocity", Number), Ia = _(he, "decay", Number), bs = _(he, "gravity", Number), js = _(he, "drift", Number), st = _(he, "colors", z), ys = _(he, "ticks", Number), Qa = _(he, "shapes"), Qn = _(he, "scalar"), ua = !!_(he, "flat"), Xn = ee(he), Xa = jt, Ya = [], ks = f.width * Xn.x, Kl = f.height * Xn.y; Xa--;) Ya.push(I({
      x: ks,
      y: Kl,
      angle: Tt,
      spread: Pt,
      startVelocity: rt,
      color: st[Xa % st.length],
      shape: Qa[Ne(0, Qa.length)],
      ticks: ys,
      decay: Ia,
      gravity: bs,
      drift: js,
      scalar: Qn,
      flat: ua
    }));
    return Re ? Re.addFettis(Ya) : (Re = Oe(f, Ya, ie, _e, it), Re.promise)
  }

  function Be(he) {
    var _e = v || _(he, "disableForReducedMotion", Boolean),
      it = _(he, "zIndex", Number);
    if (_e && Ve) return S(function(rt) {
      rt()
    });
    h && Re ? f = Re.canvas : h && !f && (f = g(it), document.body.appendChild(f)), w && !re && ie(f);
    var jt = {
      width: f.width,
      height: f.height
    };
    P && !re && P.init(f), re = !0, P && (f.__confetti_initialized = !0);

    function Tt() {
      if (P) {
        var rt = {
          getBoundingClientRect: function() {
            if (!h) return f.getBoundingClientRect()
          }
        };
        ie(rt), P.postMessage({
          resize: {
            width: rt.width,
            height: rt.height
          }
        });
        return
      }
      jt.width = jt.height = null
    }

    function Pt() {
      Re = null, w && (V = !1, H.removeEventListener("resize", Tt)), h && f && (document.body.contains(f) && document.body.removeChild(f), f = null, re = !1)
    }
    return w && !V && (V = !0, H.addEventListener("resize", Tt, !1)), P ? P.fire(he, jt, Pt) : ve(he, jt, Pt)
  }
  return Be.reset = function() {
    P && P.reset(), Re && Re.reset()
  }, Be
}
var W;

function d() {
  return W || (W = be(null, {
    useWorker: !0,
    resize: !0
  })), W
}

function r(f, i, h, w, V, v, C) {
  var P = new Path2D(f),
    ie = new Path2D;
  ie.addPath(P, new DOMMatrix(i));
  var re = new Path2D;
  return re.addPath(ie, new DOMMatrix([Math.cos(C) * V, Math.sin(C) * V, -Math.sin(C) * v, Math.cos(C) * v, h, w])), re
}

function q(f) {
  if (!ue) throw new Error("path confetti are not supported in this browser");
  var i, h;
  typeof f == "string" ? i = f : (i = f.path, h = f.matrix);
  var w = new Path2D(i),
    V = document.createElement("canvas"),
    v = V.getContext("2d");
  if (!h) {
    for (var C = 1e3, P = C, ie = C, re = 0, Ve = 0, Re, ve, Be = 0; Be < C; Be += 2)
      for (var he = 0; he < C; he += 2) v.isPointInPath(w, Be, he, "nonzero") && (P = Math.min(P, Be), ie = Math.min(ie, he), re = Math.max(re, Be), Ve = Math.max(Ve, he));
    Re = re - P, ve = Ve - ie;
    var _e = 10,
      it = Math.min(_e / Re, _e / ve);
    h = [it, 0, 0, it, -Math.round(Re / 2 + P) * it, -Math.round(ve / 2 + ie) * it]
  }
  return {
    type: "path",
    path: i,
    matrix: h
  }
}

function K(f) {
  var i, h = 1,
    w = "#000000",
    V = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
  typeof f == "string" ? i = f : (i = f.text, h = "scalar" in f ? f.scalar : h, V = "fontFamily" in f ? f.fontFamily : V, w = "color" in f ? f.color : w);
  var v = 10 * h,
    C = "" + v + "px " + V,
    P = new OffscreenCanvas(v, v),
    ie = P.getContext("2d");
  ie.font = C;
  var re = ie.measureText(i),
    Ve = Math.ceil(re.actualBoundingBoxRight + re.actualBoundingBoxLeft),
    Re = Math.ceil(re.actualBoundingBoxAscent + re.actualBoundingBoxDescent),
    ve = 2,
    Be = re.actualBoundingBoxLeft + ve,
    he = re.actualBoundingBoxAscent + ve;
  Ve += ve + ve, Re += ve + ve, P = new OffscreenCanvas(Ve, Re), ie = P.getContext("2d"), ie.font = C, ie.fillStyle = w, ie.fillText(i, Be, he);
  var _e = 1 / h;
  return {
    type: "bitmap",
    bitmap: P.transferToImageBitmap(),
    matrix: [_e, 0, 0, _e, -Ve * _e / 2, -Re * _e / 2]
  }
}
G.exports = function() {
return d().apply(this, arguments)
}, G.exports.reset = function() {
d().reset()
}, G.exports.create = be, G.exports.shapeFromPath = q, G.exports.shapeFromText = K
})((function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {}
})(), ao, !1);
const nm = ao.exports;
ao.exports.create;
const cm = ["dishwasher", "washing machine", "tap", "bucket", "watering can", "fill", "empty", "waste", "save", "turn on", "turn off"],
  sm = ["above", "below", "next to"],
  um = ({
    customPhotoUrl: O,
    onCompleteStage: H,
    isStageCompleted: G,
    onOpenRuleCard: m,
    teacherMode: R
  }) => {
    const [F, ue] = usePersisted("umChoices", {}), [ae, U] = usePersisted("umChoicesChecked", !1), [S, B] = usePersisted("umReport", ""), [Z, E] = usePersisted("umBadge", "Junior Water Detective"), [ne, te] = L.useState(!1), [se, _] = L.useState(!1), me = O || Fa, Ne = Fn.filter(W => F[W.id] === W.correctOption).length, z = S.split(new RegExp("(?<=[.!?])\\s+|\\n+")).map(W => W.trim()).filter(W => W.length > 4).length, ce = cm.filter(W => S.toLowerCase().includes(W.toLowerCase())), ee = sm.filter(W => S.toLowerCase().includes(W.toLowerCase())), J = /(kitchen|dishwasher|washing machine)/i.test(S), Q = /(bathroom|teeth|hands|tap)/i.test(S), g = /(garden|watering can|flowers|plants)/i.test(S), M = () => {
      const W = Fn.map(d => {
        const r = F[d.id] || d.correctOption;
        return `${d.sentenceStarter} ${r}`
      });
      B(W.join(`
`)), U(!0)
    }, I = () => {
      const W = {};
      Fn.forEach(r => W[r.id] = r.correctOption), ue(W), U(!0);
      const d = Fn.map(r => r.fullModelSentence);
      B(d.join(`
`)), Y()
    }, Y = () => {
      _(!0), H();
      try {
        nm({
          particleCount: 80,
          spread: 70,
          origin: {
            y: .6
          }
        })
      } catch {}
    }, Oe = () => {
      navigator.clipboard.writeText(`DETECTIVE REPORT: HOW TO SAVE WATER
By: ${Z}

${S}`), te(!0), setTimeout(() => te(!1), 2500)
    }, be = W => {
      B(d => {
        const r = d.trimEnd();
        return r ? `${r} ${W}` : W
      })
    };
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-500 shadow-xl",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-mono-code font-bold uppercase",
                children: "Этап 5 из 6 • Финальная миссия (10–12 минут)"
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono-code",
                children: "Цель: Связный отчёт из 6–8 предложений (Кухня • Ванная • Сад)"
              })]
            }), n.jsx("h1", {
              className: "text-2xl sm:text-3xl font-black tracking-tight",
              children: "📝 Финальная миссия: «Сбор отчёта детектива о спасении воды»"
            }), n.jsx("p", {
              className: "text-slate-300 text-sm sm:text-base",
              children: "Все улики собраны! Сначала собери 8 предложений по зонам дома в конструкторе ниже, а затем отредактируй или дополни свой финальный отчёт (6–8 предложений) с использованием опорных слов и карточек правил."
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap gap-2 shrink-0",
            children: [n.jsxs("button", {
              onClick: () => m("report"),
              className: "px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(In, {
                className: "w-4 h-4"
              }), "Карточка 3: Модель отчёта"]
            }), R && n.jsx("button", {
              onClick: I,
              className: "px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "👩‍🏫 Собрать идеальный отчёт"
            })]
          })]
        })
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-emerald-700",
              children: "Шаг 1 • Конструктор отчёта по зонам (8 предложений)"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Выбери правильное продолжение для каждого из 8 предложений отчёта"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Мы идём по порядку: Вступление → Кухня (посудомоечная и стиральная машины) → Ванная (кран и ведро) → Сад (лейка) → Итог."
            })]
          }), ae && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Собрано верно: ", Ne, " из 8"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Fn.map(W => {
            const d = F[W.id],
              r = d === W.correctOption;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 transition flex flex-col justify-between gap-3 ${ae?r?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "space-y-1.5",
                children: [n.jsxs("div", {
                  className: "flex items-center justify-between gap-2",
                  children: [n.jsx("span", {
                    className: "w-6 h-6 rounded-full bg-[#0F172A] text-white font-mono-code text-xs font-bold flex items-center justify-center",
                    children: W.stepNumber
                  }), n.jsx("span", {
                    className: `text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${W.zoneColor}`,
                    children: W.zoneBadge
                  })]
                }), n.jsx("p", {
                  className: "text-xs text-slate-500",
                  children: W.promptRu
                }), n.jsxs("p", {
                  className: "text-sm sm:text-base font-black text-slate-900",
                  children: [W.sentenceStarter, " ", n.jsx("span", {
                    className: "text-[#0284C7] underline",
                    children: d || "..."
                  })]
                })]
              }), n.jsx("div", {
                className: "space-y-1.5",
                children: W.options.map(q => {
                  const K = d === q;
                  let f = "bg-[#FAF6F0] border-[#D6C7B2] text-slate-800 hover:border-sky-400";
                  return K && !ae ? f = "bg-[#0284C7] border-[#0284C7] text-white shadow" : ae && (q === W.correctOption ? f = "bg-emerald-600 border-emerald-600 text-white" : K && (f = "bg-rose-600 border-rose-600 text-white")), n.jsxs("button", {
                    onClick: () => {
                      ue(i => ({
                        ...i,
                        [W.id]: q
                      })), U(!1)
                    },
                    className: `w-full text-left px-3 py-2 rounded-xl border text-xs font-extrabold transition cursor-pointer ${f}`,
                    children: ["… ", q]
                  }, q)
                })
              })]
            }, W.id)
          })
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2D9C8]",
          children: [n.jsxs("button", {
            onClick: () => U(!0),
            className: "px-5 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-xs sm:text-sm shadow transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить 8 фраз конструктора"]
          }), n.jsxs("button", {
            onClick: M,
            className: "px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Xp, {
              className: "w-4 h-4"
            }), "Перенести собранные 8 предложений в мой отчёт ниже ↓"]
          })]
        })]
      }), n.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
        children: [n.jsxs("div", {
          className: "lg:col-span-5 space-y-5",
          children: [n.jsxs("div", {
            className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-4 shadow-md space-y-3",
            children: [n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-[#D97706]",
                children: "Фото-улика для отчёта"
              }), n.jsx("span", {
                className: "text-xs font-bold text-slate-500",
                children: "Кухня • Ванная • Сад"
              })]
            }), n.jsx("img", {
              src: me,
              alt: "Crime Scene Reference",
              className: "w-full h-48 object-cover rounded-2xl border-2 border-slate-800"
            }), n.jsxs("p", {
              className: "text-xs text-slate-600",
              children: ["Проверь по фото: упомянул ли ты ", n.jsx("strong", {
                children: "dishwasher"
              }), ", ", n.jsx("strong", {
                children: "washing machine"
              }), ", ", n.jsx("strong", {
                children: "tap"
              }), ", ", n.jsx("strong", {
                children: "bucket"
              }), " и ", n.jsx("strong", {
                children: "watering can"
              }), "?"]
            })]
          }), n.jsxs("div", {
            className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 shadow-md space-y-4",
            children: [n.jsxs("div", {
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-sky-700",
                children: "Опорные слова (нажми, чтобы добавить в текст)"
              }), n.jsxs("h3", {
                className: "text-base font-black text-slate-900 mt-0.5",
                children: ["Чек-лист новой лексики в твоём отчёте (", ce.length, "/11)"]
              })]
            }), n.jsx("div", {
              className: "flex flex-wrap gap-1.5",
              children: It.map(W => {
                const d = ce.includes(W.word);
                return n.jsxs("button", {
                  onClick: () => be(W.word),
                  title: `Нажми, чтобы вставить "${W.word}" (${W.translation})`,
                  className: `px-2.5 py-1.5 rounded-xl text-xs font-mono-code font-bold border transition cursor-pointer flex items-center gap-1 ${d?"bg-emerald-100 border-emerald-400 text-emerald-900":"bg-[#FAF6F0] border-[#D6C7B2] text-slate-700 hover:border-sky-400"}`,
                  children: [d && n.jsx(Ye, {
                    className: "w-3.5 h-3.5 text-emerald-600"
                  }), n.jsx("span", {
                    children: W.word
                  })]
                }, W.id)
              })
            }), n.jsxs("div", {
              className: "pt-2 border-t border-slate-100 space-y-2",
              children: [n.jsxs("div", {
                className: "text-xs font-bold text-slate-600",
                children: ["Предлоги места (", ee.length, "/3) и начала фраз:"]
              }), n.jsx("div", {
                className: "flex flex-wrap gap-1.5",
                children: ["above", "below", "next to", "In the kitchen,", "In the bathroom,", "In the garden,", "Always", "Don’t"].map(W => {
                  const d = S.toLowerCase().includes(W.toLowerCase());
                  return n.jsxs("button", {
                    onClick: () => be(W),
                    className: `px-2.5 py-1 rounded-lg text-xs font-bold border transition cursor-pointer ${d?"bg-indigo-100 border-indigo-300 text-indigo-900":"bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                    children: ["+ ", W]
                  }, W)
                })
              })]
            })]
          })]
        }), n.jsxs("div", {
          className: "lg:col-span-7 bg-[#FFFDF9] rounded-3xl border-2 border-[#0F172A] p-5 sm:p-7 shadow-xl space-y-5 relative overflow-hidden",
          children: [se && n.jsx("div", {
            className: "absolute top-5 right-5 z-20 rotate-6 border-4 border-emerald-600 text-emerald-700 bg-emerald-50/95 px-4 py-1.5 rounded-xl font-mono-code font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg",
            children: "★ CASE CLOSED • APPROVED ★"
          }), n.jsxs("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#0F172A] pb-4",
            children: [n.jsxs("div", {
              className: "flex items-center gap-3",
              children: [n.jsx("div", {
                className: "w-11 h-11 rounded-2xl bg-[#0F172A] text-amber-400 flex items-center justify-center shrink-0",
                children: n.jsx(lo, {
                  className: "w-6 h-6"
                })
              }), n.jsxs("div", {
                children: [n.jsx("span", {
                  className: "text-xs font-mono-code uppercase font-bold text-slate-500",
                  children: "OFFICIAL REPORT • PLANET WATER AGENCY"
                }), n.jsx("h2", {
                  className: "text-xl font-black text-slate-900",
                  children: "Отчёт детектива: «How People Can Save Water»"
                })]
              })]
            }), n.jsxs("div", {
              className: "flex items-center gap-2",
              children: [n.jsx("label", {
                className: "text-xs font-bold text-slate-500",
                children: "Детектив:"
              }), n.jsx("input", {
                type: "text",
                value: Z,
                onChange: W => E(W.target.value),
                className: "px-3 py-1.5 rounded-xl border border-[#C8B9A6] bg-[#FAF6F0] text-xs font-black text-slate-900 w-44",
                placeholder: "Твоё имя..."
              })]
            })]
          }), n.jsxs("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
            children: [n.jsxs("div", {
              className: `p-2.5 rounded-xl border text-center ${z>=6&&z<=10?"bg-emerald-50 border-emerald-300 text-emerald-900":"bg-amber-50 border-amber-300 text-amber-900"}`,
              children: [n.jsx("div", {
                className: "text-[11px] font-mono-code uppercase font-bold",
                children: "Предложений"
              }), n.jsx("div", {
                className: "text-lg font-black",
                children: z
              }), n.jsx("div", {
                className: "text-[10px]",
                children: "Цель: 6–8 предложений"
              })]
            }), n.jsxs("div", {
              className: `p-2.5 rounded-xl border text-center ${ce.length>=7?"bg-emerald-50 border-emerald-300 text-emerald-900":"bg-sky-50 border-sky-300 text-sky-900"}`,
              children: [n.jsx("div", {
                className: "text-[11px] font-mono-code uppercase font-bold",
                children: "Новых слов"
              }), n.jsxs("div", {
                className: "text-lg font-black",
                children: [ce.length, " / 11"]
              }), n.jsx("div", {
                className: "text-[10px]",
                children: "Предметы и глаголы"
              })]
            }), n.jsxs("div", {
              className: `p-2.5 rounded-xl border text-center ${ee.length>=2?"bg-emerald-50 border-emerald-300 text-emerald-900":"bg-indigo-50 border-indigo-300 text-indigo-900"}`,
              children: [n.jsx("div", {
                className: "text-[11px] font-mono-code uppercase font-bold",
                children: "Предлоги"
              }), n.jsxs("div", {
                className: "text-lg font-black",
                children: [ee.length, " / 3"]
              }), n.jsx("div", {
                className: "text-[10px]",
                children: "above, below, next to"
              })]
            }), n.jsxs("div", {
              className: `p-2.5 rounded-xl border text-center ${J&&Q&&g?"bg-emerald-50 border-emerald-300 text-emerald-900":"bg-slate-50 border-slate-300 text-slate-700"}`,
              children: [n.jsx("div", {
                className: "text-[11px] font-mono-code uppercase font-bold",
                children: "Зоны дома"
              }), n.jsxs("div", {
                className: "text-xs font-black mt-1",
                children: [J ? "✅Кухня " : "⬜Кухня ", Q ? "✅Ванная " : "⬜Ванная ", g ? "✅Сад" : "⬜Сад"]
              })]
            })]
          }), n.jsxs("div", {
            className: "space-y-1.5",
            children: [n.jsx("label", {
              className: "text-xs font-mono-code uppercase font-bold text-slate-500 block",
              children: "Текст твоего отчёта (6–8 предложений на английском языке):"
            }), n.jsx("textarea", {
              rows: 9,
              value: S,
              onChange: W => B(W.target.value),
              className: "w-full p-4 rounded-2xl border-2 border-[#C8B9A6] focus:border-[#0284C7] lined-report-paper font-semibold text-sm sm:text-base text-slate-900 focus:outline-none resize-y",
              placeholder: "Write your 6-8 sentences here..."
            })]
          }), n.jsx("div", {
            className: "flex flex-wrap items-center justify-between gap-3 pt-2",
            children: n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2.5",
              children: [n.jsxs("button", {
                onClick: Y,
                className: "px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
                children: [n.jsx(Gp, {
                  className: "w-5 h-5"
                }), "Утвердить финальный отчёт и закрыть дело!"]
              }), n.jsx("button", {
                onClick: Oe,
                className: "px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition cursor-pointer flex items-center gap-1.5",
                children: ne ? n.jsxs(n.Fragment, {
                  children: [n.jsx(yx, {
                    className: "w-4 h-4 text-emerald-600"
                  }), "Скопировано!"]
                }) : n.jsxs(n.Fragment, {
                  children: [n.jsx(Hx, {
                    className: "w-4 h-4"
                  }), "Скопировать отчёт"]
                })
              })]
            })
          }), (se || G) && n.jsx("div", {
            className: "bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg",
            children: n.jsxs("div", {
              className: "flex items-center gap-3",
              children: [n.jsx(sa, {
                className: "w-8 h-8 text-amber-300 shrink-0"
              }), n.jsxs("div", {
                children: [n.jsx("div", {
                  className: "text-xs font-mono-code uppercase font-bold text-emerald-100",
                  children: "Удостоверение Водного Патруля выдано!"
                }), n.jsxs("div", {
                  className: "text-base font-black",
                  children: ["Поздравляем, ", Z, "! Дело о пропавшей воде успешно раскрыто (", z, " предл., ", ce.length, " новых слов)!"]
                })]
              })]
            })
          })]
        })]
      })]
    })
  },
  im = ({
    onCompleteStage: O,
    onGoToHomework: H,
    teacherMode: G
  }) => {
    const [m, R] = usePersisted("imSkills", []), [F, ue] = usePersisted("imRating", 0), [ae, U] = usePersisted("imSort", {}), [S, B] = usePersisted("imSortChecked", !1), [Z, E] = usePersisted("imBuild", {}), [ne, te] = usePersisted("imBuildChecked", !1), se = z => {
      R(ce => ce.includes(z) ? ce.filter(ee => ee !== z) : [...ce, z])
    }, _ = Fi.filter(z => ae[z.id] === z.category).length, me = (z, ce) => (Z[z] || []).map(J => ce[J]).join(" "), Ne = Ii.filter(z => normAns(me(z.id, z.words)) === normAns(z.targetSentence)).length, de = () => {
      const z = {};
      Fi.forEach(ee => z[ee.id] = ee.category), U(z), B(!0);
      const ce = {};
      Ii.forEach(ee => {
        const J = ee.targetSentence,
          Q = [];
        let g = J;
        for (; g.length > 0;) {
          const M = ee.words.findIndex((I, Y) => !Q.includes(Y) && g.startsWith(I));
          if (M === -1) break;
          Q.push(M), g = g.slice(ee.words[M].length).trimStart()
        }
        ce[ee.id] = Q
      }), E(ce), te(!0), O()
    };
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-teal-500 shadow-xl",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-mono-code font-bold uppercase",
                children: "Этап 6 из 6 • Рефлексия + Бонусные задания"
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono-code",
                children: "Итоги расследования + 2 супер-игры, если осталось время"
              })]
            }), n.jsx("h1", {
              className: "text-2xl sm:text-3xl font-black tracking-tight",
              children: "🏆 Итоги расследования + Бонусный полигон детектива"
            }), n.jsx("p", {
              className: "text-slate-300 text-sm sm:text-base",
              children: "Оцени свою работу на уроке, а если остались свободные минуты — испытай себя в двух скоростных бонусных играх на сортировку привычек и сборку секретных фраз!"
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap gap-2 shrink-0",
            children: [n.jsxs("button", {
              onClick: H,
              className: "px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition cursor-pointer flex items-center gap-1.5",
              children: ["🏠 Перейти к Домашнему заданию", n.jsx($i, {
                className: "w-4 h-4"
              })]
            }), G && n.jsx("button", {
              onClick: de,
              className: "px-4 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "👩‍🏫 Ответы учителя"
            })]
          })]
        })
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsx("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: n.jsxs("div", {
            className: "flex items-center gap-3",
            children: [n.jsx("div", {
              className: "w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0",
              children: n.jsx(Ip, {
                className: "w-6 h-6"
              })
            }), n.jsxs("div", {
              children: [n.jsx("span", {
                className: "text-xs font-mono-code uppercase font-bold text-amber-800",
                children: "Самооценка детектива • Чему я научился за 45 минут"
              }), n.jsx("h2", {
                className: "text-xl font-black text-slate-900",
                children: "Отметь галочками свои достижения на сегодняшнем уроке:"
              })]
            })]
          })
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-3.5",
          children: [{
            id: "skill-nouns",
            title: "1. Знаю все 5 предметов на фото по-английски:",
            sub: "dishwasher, washing machine, tap, bucket, watering can"
          }, {
            id: "skill-verbs",
            title: "2. Умею использовать 6 глаголов действий с водой:",
            sub: "fill, empty, waste, save, turn on, turn off"
          }, {
            id: "skill-preps",
            title: "3. Могу описать, где находятся предметы, с предлогами:",
            sub: "above (над), below (под), next to (рядом с)"
          }, {
            id: "skill-report",
            title: "4. Умею составлять связный отчёт (6–8 предложений):",
            sub: "Как экономить воду на кухне, в ванной и в саду!"
          }].map(z => {
            const ce = m.includes(z.id);
            return n.jsxs("button", {
              onClick: () => se(z.id),
              className: `p-4 rounded-2xl border-2 text-left transition cursor-pointer flex items-start gap-3 ${ce?"bg-emerald-50 border-emerald-400 text-emerald-950":"bg-white border-slate-200 text-slate-700"}`,
              children: [n.jsx("input", {
                type: "checkbox",
                checked: ce,
                onChange: () => {},
                className: "mt-1 rounded text-emerald-600 pointer-events-none"
              }), n.jsxs("div", {
                children: [n.jsx("div", {
                  className: "text-sm font-black",
                  children: z.title
                }), n.jsx("div", {
                  className: "text-xs font-mono-code text-slate-500 mt-0.5",
                  children: z.sub
                })]
              })]
            }, z.id)
          })
        }), n.jsxs("div", {
          className: "bg-sky-50 border border-sky-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
          children: [n.jsx("div", {
            className: "text-sm font-black text-slate-900",
            children: "Насколько интересно тебе было вести расследование «Дело о пропавшей воде»?"
          }), n.jsx("div", {
            className: "flex items-center gap-2",
            children: [1, 2, 3, 4, 5].map(z => n.jsxs("button", {
              onClick: () => {
                ue(z), O()
              },
              className: `px-3 py-1.5 rounded-xl font-black text-xs sm:text-sm border transition cursor-pointer ${F>=z?"bg-amber-400 border-amber-500 text-slate-950 shadow-sm":"bg-white border-slate-200 text-slate-400"}`,
              children: ["💧 ", z]
            }, z))
          })]
        })]
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsxs("span", {
              className: "text-xs font-mono-code uppercase font-bold text-sky-700 flex items-center gap-1",
              children: [n.jsx(eo, {
                className: "w-3.5 h-3.5"
              }), " Бонусное задание №1 • 8 ситуаций"]
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Блиц-сортировка: «SAVE WATER (Бережём)» или «WASTE WATER (Тратим зря)»?"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Прочитай 8 действий людей дома и определи для каждого: это помогает беречь воду (SAVE) или тратит её впустую (WASTE)?"
            })]
          }), S && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Верно: ", _, " из 8"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Fi.map((z, ce) => {
            const ee = ae[z.id],
              J = ee === z.category;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 flex flex-col justify-between gap-3 transition ${S?J?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                children: [n.jsxs("span", {
                  className: "text-xs font-mono-code font-bold text-slate-400",
                  children: ["Ситуация #", ce + 1]
                }), n.jsx("p", {
                  className: "text-sm font-black text-slate-900 mt-0.5",
                  children: z.habitEn
                }), n.jsx("p", {
                  className: "text-xs text-slate-500 mt-0.5",
                  children: z.habitRu
                })]
              }), n.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [n.jsx("button", {
                  onClick: () => {
                    U(Q => ({
                      ...Q,
                      [z.id]: "save"
                    })), B(!1)
                  },
                  className: `py-2 px-3 rounded-xl text-xs font-black border transition cursor-pointer ${ee==="save"?"bg-emerald-600 text-white border-emerald-600 shadow":"bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100"}`,
                  children: "💧 SAVE WATER"
                }), n.jsx("button", {
                  onClick: () => {
                    U(Q => ({
                      ...Q,
                      [z.id]: "waste"
                    })), B(!1)
                  },
                  className: `py-2 px-3 rounded-xl text-xs font-black border transition cursor-pointer ${ee==="waste"?"bg-rose-600 text-white border-rose-600 shadow":"bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100"}`,
                  children: "🚫 WASTE WATER"
                })]
              })]
            }, z.id)
          })
        }), n.jsxs("div", {
          className: "flex items-center gap-3 pt-2",
          children: [n.jsxs("button", {
            onClick: () => {
              B(!0), _ >= 6 && O()
            },
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить сортировку (8 ситуаций)"]
          }), n.jsxs("button", {
            onClick: () => {
              U({}), B(!1)
            },
            className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
            children: [n.jsx(Qt, {
              className: "w-4 h-4"
            }), "Сбросить"]
          })]
        })]
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsxs("span", {
              className: "text-xs font-mono-code uppercase font-bold text-indigo-700 flex items-center gap-1",
              children: [n.jsx(Kx, {
                className: "w-3.5 h-3.5"
              }), " Бонусное задание №2 • 6 предложений"]
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Расшифруй 6 предложений: нажми на слова в правильном порядке"
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Слова в секретной радиограмме перепутались! Нажимай на карточки со словами по порядку, чтобы получилось правильное английское предложение."
            })]
          }), ne && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Собрано верно: ", Ne, " из 6"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Ii.map((z, ce) => {
            const ee = Z[z.id] || [],
              J = me(z.id, z.words),
              Q = ee.length === z.words.length,
              g = J === z.targetSentence;
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 space-y-3 transition ${ne||Q?g?"bg-emerald-50/70 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex items-center justify-between",
                children: [n.jsxs("span", {
                  className: "text-xs font-bold text-slate-600",
                  children: ["#", ce + 1, ". ", z.hintRu]
                }), n.jsx("button", {
                  onClick: () => {
                    E(M => ({
                      ...M,
                      [z.id]: []
                    })), te(!1)
                  },
                  className: "text-xs font-bold text-slate-500 hover:text-rose-600 px-2 py-0.5 rounded bg-slate-100 cursor-pointer",
                  children: "Сброс"
                })]
              }), n.jsx("div", {
                className: "min-h-[42px] p-2.5 rounded-xl bg-[#FAF6F0] border border-[#D6C7B2] text-sm font-black text-[#0284C7] flex flex-wrap items-center gap-1.5",
                children: ee.length === 0 ? n.jsx("span", {
                  className: "text-xs text-slate-400 font-normal",
                  children: "Нажимай на слова ниже..."
                }) : ee.map((M, I) => n.jsx("button", {
                  onClick: () => {
                    E(Y => ({
                      ...Y,
                      [z.id]: (Y[z.id] || []).filter((Oe, be) => be !== I)
                    }))
                  },
                  className: "px-2.5 py-1 rounded-lg bg-[#0284C7] text-white text-xs font-bold cursor-pointer",
                  children: z.words[M]
                }, I))
              }), n.jsx("div", {
                className: "flex flex-wrap gap-1.5",
                children: z.words.map((M, I) => {
                  const Y = ee.includes(I);
                  return n.jsx("button", {
                    disabled: Y,
                    onClick: () => {
                      E(Oe => ({
                        ...Oe,
                        [z.id]: [...Oe[z.id] || [], I]
                      })), te(!1)
                    },
                    className: `px-3 py-1.5 rounded-xl text-xs font-extrabold border transition ${Y?"bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed":"bg-indigo-50 hover:bg-indigo-100 text-indigo-950 border-indigo-300 cursor-pointer"}`,
                    children: M
                  }, I)
                })
              }), (ne || Q) && n.jsx("p", {
                className: `text-xs font-bold ${g?"text-emerald-800":"text-rose-800"}`,
                children: g ? `✅ Отлично: "${z.targetSentence}"` : `❌ Правильный порядок: "${z.targetSentence}"`
              })]
            }, z.id)
          })
        }), n.jsx("div", {
          className: "flex items-center gap-3 pt-2",
          children: n.jsxs("button", {
            onClick: () => {
              te(!0), O()
            },
            className: "px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm shadow transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(sa, {
              className: "w-4 h-4"
            }), "Проверить собранные фразы"]
          })
        })]
      })]
    })
  },
  ps = [{
    id: "hw-s1",
    num: 1,
    requiredWord: "fill",
    extraHint: "Например, про посудомоечную машину (dishwasher)",
    sampleEn: "Always fill the dishwasher with plates before you turn it on."
  }, {
    id: "hw-s2",
    num: 2,
    requiredWord: "waste",
    extraHint: "Например: Не трать воду зря дома! (Don’t waste...)",
    sampleEn: "Don’t waste clean water in the kitchen or bathroom!"
  }, {
    id: "hw-s3",
    num: 3,
    requiredWord: "save",
    extraHint: "Например, про синее ведро под капающим краном (bucket / tap)",
    sampleEn: "Put a blue bucket below the dripping tap to save water."
  }, {
    id: "hw-s4",
    num: 4,
    requiredWord: "turn off",
    extraHint: "Например, про закрытие крана во время чистки зубов (tap)",
    sampleEn: "Always turn off the tap when you brush your teeth."
  }, {
    id: "hw-s5",
    num: 5,
    requiredWord: "fill",
    extraHint: "Например, про стиральную машину (washing machine) или лейку (watering can)",
    sampleEn: "Fill the washing machine with clothes before you turn it on."
  }, {
    id: "hw-s6",
    num: 6,
    requiredWord: "save",
    extraHint: "Например, про использование лейки в саду (watering can / garden)",
    sampleEn: "Use a green watering can in the garden to save water."
  }],
  om = ({
    customPhotoUrl: O,
    onOpenRuleCard: H,
    teacherMode: G
  }) => {
    const m = O || Fa,
      [R, F] = usePersisted("hwReport", ""),
      [ue, ae] = usePersisted("hwReportChecked", !1),
      [U, S] = usePersisted("hwWords", {}),
      [B, Z] = usePersisted("hwWordFlags", {}),
      [E, ne] = usePersisted("hwWordsChecked", !1),
      [te, se] = usePersisted("hwSents", {}),
      [_, me] = usePersisted("hwSentFlags", {}),
      [Ne, de] = usePersisted("hwSentsChecked", !1),
      [z, ce] = usePersisted("hwPlans", []),
      [ee, J] = usePersisted("hwHomeText", ""),
      [Q, g] = L.useState(!1),
      M = R.split(new RegExp("(?<=[.!?])\\s+|\\n+")).map(r => r.trim()).filter(r => r.length > 4),
      I = It.filter(r => R.toLowerCase().includes(r.word.toLowerCase())),
      Y = It.filter(r => normAns(U[r.id]) === normAns(r.word)).length,
      Oe = ps.filter(r => {
        const q = (te[r.id] || "").trim().toLowerCase();
        return q.length >= 10 && q.includes(r.requiredWord.toLowerCase())
      }).length,
      be = () => {
        F(`Look at the detective photo! We must not waste water at home.
First, the dishwasher is next to the washing machine in the kitchen.
Always fill the dishwasher with plates before you turn it on.
Only turn on the washing machine when it is full of clothes.
Look at the sink: the dripping tap is above the blue bucket.
Put a bucket below a dripping tap to save the water, and then turn off the tap.
Empty the water from the blue bucket into the green watering can next to it.
Use the watering can in the garden to water the purple flowers and save Planet Water!`), ae(!0);
        const r = {};
        It.forEach(K => r[K.id] = K.word), S(r), ne(!0);
        const q = {};
        ps.forEach(K => q[K.id] = K.sampleEn), se(q), de(!0)
      },
      W = () => {
        const r = ["=== ДОМАШНЕЕ ЗАДАНИЕ: ДЕЛО О ПРОПАВШЕЙ ВОДЕ (Unit 9 Lesson 1) ===", "", "--- ЗАДАНИЕ 1: Мой отчёт по фото (6–8 предложений) ---", R || "(не заполнено)", "", `--- ЗАДАНИЕ 2А: Слова по памяти (${Y}/11) ---`, It.map(q => `${q.translation}: ${U[q.id]||"-"}`).join(`
`), "", "--- ЗАДАНИЕ 2Б: 6 предложений с fill, waste, save, turn off ---", ps.map(q => `${q.num} (${q.requiredWord}): ${te[q.id]||"-"}`).join(`
`), "", "--- ЗАДАНИЕ 3 (Бонус): Что я буду делать дома для сохранения воды ---", ee].join(`
`);
        navigator.clipboard.writeText(r), g(!0), setTimeout(() => g(!1), 3e3)
      },
      d = r => {
        ce(q => q.includes(r) ? q.filter(K => K !== r) : [...q, r])
      };
    return n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx("div", {
        className: "bg-[#0F172A] text-white rounded-3xl p-5 sm:p-7 border-2 border-[#D97706] shadow-xl",
        children: n.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          children: [n.jsxs("div", {
            className: "space-y-2 max-w-3xl",
            children: [n.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [n.jsxs("span", {
                className: "px-3 py-1 rounded-full bg-[#D97706] text-white text-xs font-mono-code font-bold uppercase flex items-center gap-1.5",
                children: [n.jsx(Xi, {
                  className: "w-3.5 h-3.5"
                }), "Отдельный блок • Самостоятельное расследование дома"]
              }), n.jsx("span", {
                className: "px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono-code",
                children: "Unit 9 Lesson 1 • Academy Stars 4"
              })]
            }), n.jsx("h1", {
              className: "text-2xl sm:text-3xl font-black tracking-tight",
              children: "Homework: Water detective file"
            }), n.jsxs("p", {
              className: "text-slate-300 text-sm sm:text-base",
              children: ["Do these three tasks at home. They are different from the lesson. Write your own 6–8 sentence report about the photo, write all 11 new words from memory, write 6 sentences with ", n.jsx("strong", {
                className: "text-amber-300",
                children: "fill, waste, save, turn off"
              }), ", and add a short plan for your home."]
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap gap-2 shrink-0",
            children: [n.jsxs("button", {
              onClick: () => H("report"),
              className: "px-3.5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow transition cursor-pointer flex items-center gap-1.5",
              children: [n.jsx(In, {
                className: "w-4 h-4"
              }), "Шпаргалка: Модель отчёта"]
            }), G && n.jsx("button", {
              onClick: be,
              className: "px-3.5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow transition cursor-pointer",
              children: "👩‍🏫 Заполнить образец ДЗ"
            })]
          })]
        })
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-[#0284C7]",
              children: "Homework 1 • Your own report about the photo"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Write your own detective report (6–8 sentences) about the photo"
            }), n.jsxs("p", {
              className: "text-sm text-slate-600",
              children: ["Look at the photo of the boy detective. Write 6–8 of your own sentences. Use the new words and ", n.jsx("em", {
                children: "above, below, next to"
              }), ". This is not the class report — use your own sentences."]
            })]
          }), n.jsx("button", {
            onClick: () => F(`Don’t waste water at home!
In the kitchen, the dishwasher is next to the washing machine.
Always fill the dishwasher before you turn it on.
Fill the washing machine with clothes before you turn it on too.
Look at the sink: the dripping tap is above the blue bucket.
Put a bucket below a dripping tap to save water, and always turn off the tap.
Empty the bucket into the green watering can next to it.
Use the watering can in the garden to water the flowers!`),
            className: "px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-extrabold cursor-pointer shrink-0",
            children: "Вставить шаблон-опору"
          })]
        }), n.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
          children: [n.jsxs("div", {
            className: "lg:col-span-5 space-y-4",
            children: [n.jsx("img", {
              src: m,
              alt: "Detective Crime Scene for Homework",
              className: "w-full h-auto rounded-2xl border-3 border-slate-800 shadow-md"
            }), n.jsxs("div", {
              className: "bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2 text-xs text-slate-700",
              children: [n.jsx("div", {
                className: "font-black text-amber-900 uppercase font-mono-code",
                children: "📋 План-подсказка на 6–8 предложений:"
              }), n.jsxs("p", {
                children: ["1. Главный призыв (", n.jsx("em", {
                  children: "Don’t waste water at home!"
                }), ")"]
              }), n.jsxs("p", {
                children: ["2. Кухня: где стоят ", n.jsx("em", {
                  children: "dishwasher"
                }), " и ", n.jsx("em", {
                  children: "washing machine"
                }), " (", n.jsx("em", {
                  children: "next to"
                }), ")?"]
              }), n.jsxs("p", {
                children: ["3. Правило про посудомоечную машину (", n.jsx("em", {
                  children: "Always fill... before you turn it on"
                }), ")."]
              }), n.jsxs("p", {
                children: ["4. Правило про стиральную машину (", n.jsx("em", {
                  children: "Don’t turn on... when it is empty"
                }), ")."]
              }), n.jsxs("p", {
                children: ["5. Кран и синее ведро (", n.jsx("em", {
                  children: "The tap is above the bucket / Turn off the tap"
                }), ")."]
              }), n.jsxs("p", {
                children: ["6. Переливание воды (", n.jsx("em", {
                  children: "Empty the bucket into the watering can"
                }), ")."]
              }), n.jsxs("p", {
                children: ["7. Сад (", n.jsx("em", {
                  children: "Use the watering can in the garden to save water"
                }), ")."]
              })]
            })]
          }), n.jsxs("div", {
            className: "lg:col-span-7 space-y-4",
            children: [n.jsx("textarea", {
              rows: 9,
              value: R,
              onChange: r => {
                F(r.target.value), ae(!1)
              },
              placeholder: "Напиши здесь свой отчёт из 6–8 предложений на английском языке...",
              className: "w-full p-4 rounded-2xl border-2 border-[#C8B9A6] focus:border-[#0284C7] lined-report-paper font-semibold text-sm sm:text-base text-slate-900 focus:outline-none"
            }), n.jsxs("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [n.jsxs("button", {
                onClick: () => ae(!0),
                className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow transition cursor-pointer flex items-center gap-2",
                children: [n.jsx(Ye, {
                  className: "w-4 h-4"
                }), "Проверить мой отчёт"]
              }), n.jsxs("div", {
                className: "flex flex-wrap items-center gap-2 text-xs font-mono-code font-bold",
                children: [n.jsxs("span", {
                  className: `px-3 py-1.5 rounded-xl border ${M.length>=6?"bg-emerald-50 border-emerald-300 text-emerald-800":"bg-amber-50 border-amber-300 text-amber-800"}`,
                  children: ["Предложений: ", M.length, " (нужно 6–8)"]
                }), n.jsxs("span", {
                  className: "px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800",
                  children: ["Новых слов использовано: ", I.length, " / 11"]
                })]
              })]
            }), ue && n.jsx("div", {
              className: `p-4 rounded-2xl border-2 text-xs sm:text-sm font-bold ${M.length>=6&&I.length>=5?"bg-emerald-50 border-emerald-400 text-emerald-900":"bg-amber-50 border-amber-300 text-amber-900"}`,
              children: M.length >= 6 && I.length >= 5 ? `✅ Великолепный отчёт! Ты написал(а) ${M.length} предл. и использовал(а) слова: ${I.map(r=>r.word).join(", ")}.` : `💡 Хорошее начало! Сейчас у тебя ${M.length} предл. и ${I.length} новых слов. Допиши ещё немного, чтобы получилось 6–8 предложений!`
            })]
          })]
        })]
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-amber-700",
              children: "Homework 2A • 11 words from memory"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Close your book. Write all 11 new words from memory."
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Look at the icon and the Russian translation. Type the English word. Use the eye if you need a hint. Then check yourself."
            })]
          }), E && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Correct from memory: ", Y, " of 11"]
          })]
        }), n.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
          children: It.map((r, q) => {
            const K = U[r.id] || "",
              f = K.trim().toLowerCase() === r.word.toLowerCase(),
              i = B[r.id];
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 space-y-2.5 transition ${E?f?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex items-center gap-3",
                children: [n.jsx("div", {
                  className: "w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0",
                  children: n.jsx(Kt, {
                    id: r.id,
                    className: "w-9 h-9"
                  })
                }), n.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [n.jsxs("span", {
                    className: "text-[11px] font-mono-code font-bold text-slate-400",
                    children: ["Слово #", q + 1]
                  }), n.jsx("div", {
                    className: "text-sm font-black text-slate-900 leading-tight",
                    children: r.translation
                  })]
                }), n.jsx("button", {
                  onClick: () => Z(h => ({
                    ...h,
                    [r.id]: !h[r.id]
                  })),
                  className: "p-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold cursor-pointer",
                  title: "Подсказка первых букв",
                  children: n.jsx(to, {
                    className: "w-4 h-4"
                  })
                })]
              }), i && n.jsxs("div", {
                className: "text-xs font-mono-code font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200",
                children: ["Подсказка: ", r.word[0], r.word.slice(1).replace(/[a-zA-Z]/g, " _")]
              }), n.jsx("input", {
                type: "text",
                value: K,
                onChange: h => {
                  S(w => ({
                    ...w,
                    [r.id]: h.target.value
                  })), ne(!1)
                },
                placeholder: "Впиши по-английски...",
                className: "w-full px-3 py-2 rounded-xl border border-[#C8B9A6] bg-[#FAF6F0] focus:bg-white font-mono-code font-bold text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
              }), E && n.jsx("div", {
                className: `text-xs font-bold ${f?"text-emerald-800":"text-rose-800"}`,
                children: f ? "✅ Отлично!" : `❌ Ответ: ${r.word}`
              })]
            }, r.id)
          })
        }), n.jsxs("div", {
          className: "flex items-center gap-3 pt-2",
          children: [n.jsxs("button", {
            onClick: () => ne(!0),
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-sm shadow transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить все 11 слов по памяти"]
          }), n.jsxs("button", {
            onClick: () => {
              S({}), ne(!1)
            },
            className: "px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5",
            children: [n.jsx(Qt, {
              className: "w-4 h-4"
            }), "Сбросить"]
          })]
        })]
      }), n.jsxs("div", {
        className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2D9C8] pb-4",
          children: [n.jsxs("div", {
            children: [n.jsx("span", {
              className: "text-xs font-mono-code uppercase font-bold text-emerald-700",
              children: "Homework 2B • Six verb sentences"
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900 mt-0.5",
              children: "Write 6 sentences. Use fill, waste, save or turn off in each sentence."
            }), n.jsx("p", {
              className: "text-sm text-slate-600",
              children: "Напиши по одному полному английскому предложению в каждой строке, обязательно используя указанное ключевое слово."
            })]
          }), Ne && n.jsxs("div", {
            className: "px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-black text-sm",
            children: ["Готово: ", Oe, " из 6 предложений"]
          })]
        }), n.jsx("div", {
          className: "space-y-3.5",
          children: ps.map(r => {
            const q = te[r.id] || "",
              K = q.toLowerCase().includes(r.requiredWord.toLowerCase()),
              f = q.trim().length >= 10 && K,
              i = _[r.id];
            return n.jsxs("div", {
              className: `p-4 rounded-2xl border-2 space-y-2 transition ${Ne?f?"bg-emerald-50/60 border-emerald-400":"bg-rose-50/60 border-rose-400":"bg-white border-[#E2D9C8]"}`,
              children: [n.jsxs("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [n.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [n.jsx("span", {
                    className: "w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-mono-code font-bold flex items-center justify-center",
                    children: r.num
                  }), n.jsxs("span", {
                    className: "text-xs font-mono-code uppercase px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-900 font-black",
                    children: ["Обязательное слово: ", r.requiredWord]
                  }), n.jsx("span", {
                    className: "text-xs text-slate-500",
                    children: r.extraHint
                  })]
                }), n.jsx("button", {
                  onClick: () => me(h => ({
                    ...h,
                    [r.id]: !h[r.id]
                  })),
                  className: "text-xs font-bold text-sky-700 hover:underline cursor-pointer",
                  children: i ? "Скрыть пример" : "Показать пример"
                })]
              }), i && n.jsxs("div", {
                className: "text-xs font-bold text-sky-900 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200",
                children: ["💡 Образец: “", r.sampleEn, "”"]
              }), n.jsx("input", {
                type: "text",
                value: q,
                onChange: h => {
                  se(w => ({
                    ...w,
                    [r.id]: h.target.value
                  })), de(!1)
                },
                placeholder: `Напиши предложение со словом "${r.requiredWord}"...`,
                className: "w-full px-3.5 py-2.5 rounded-xl border border-[#C8B9A6] bg-[#FAF6F0] focus:bg-white font-semibold text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
              }), Ne && n.jsx("div", {
                className: `text-xs font-bold ${f?"text-emerald-800":"text-rose-800"}`,
                children: f ? `✅ Принято! Слово "${r.requiredWord}" использовано правильно.` : `❌ Проверь, что предложение полное и содержит слово "${r.requiredWord}".`
              })]
            }, r.id)
          })
        }), n.jsx("div", {
          className: "flex items-center gap-3 pt-2",
          children: n.jsxs("button", {
            onClick: () => de(!0),
            className: "px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow transition cursor-pointer flex items-center gap-2",
            children: [n.jsx(Ye, {
              className: "w-4 h-4"
            }), "Проверить 6 предложений"]
          })
        })]
      }), n.jsxs("div", {
        className: "bg-gradient-to-br from-sky-50 via-white to-emerald-50 rounded-3xl border-2 border-emerald-400 p-5 sm:p-7 shadow-md space-y-5",
        children: [n.jsx("div", {
          className: "flex items-start justify-between gap-3",
          children: n.jsxs("div", {
            className: "space-y-1",
            children: [n.jsxs("span", {
              className: "inline-flex items-center gap-1.5 text-xs font-mono-code uppercase font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full",
              children: [n.jsx(Fp, {
                className: "w-3.5 h-3.5 fill-emerald-700"
              }), "Bonus task"]
            }), n.jsx("h2", {
              className: "text-xl font-black text-slate-900",
              children: "My plan at home: write what you will do to save water. Start with I will…"
            }), n.jsxs("p", {
              className: "text-sm text-slate-600",
              children: ["Отметь обещания Водного Детектива, которые ты будешь выполнять у себя дома, и напиши короткий рассказ со словами ", n.jsx("strong", {
                children: "“At home, I will…”"
              }), "!"]
            })]
          })
        }), n.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-2.5",
          children: ["I will always turn off the tap when I brush my teeth.", "I will help my family fill the dishwasher before we turn it on.", "I will never turn on the washing machine when it is almost empty.", "I will use a watering can to water the plants and flowers.", "I will tell my parents if I see a dripping tap at home.", "I will never waste clean water!"].map(r => {
            const q = z.includes(r);
            return n.jsxs("button", {
              onClick: () => d(r),
              className: `p-3 rounded-xl border text-left text-xs sm:text-sm font-bold flex items-center gap-2.5 transition cursor-pointer ${q?"bg-emerald-600 text-white border-emerald-700 shadow-sm":"bg-white text-slate-700 border-slate-200 hover:border-emerald-300"}`,
              children: [n.jsx(sa, {
                className: "w-4 h-4 shrink-0"
              }), n.jsx("span", {
                children: r
              })]
            }, r)
          })
        }), n.jsxs("div", {
          className: "space-y-2",
          children: [n.jsx("label", {
            className: "text-xs font-mono-code uppercase font-bold text-slate-600 block",
            children: "Мой план спасения воды дома (My Home Water-Saving Plan):"
          }), n.jsx("textarea", {
            rows: 4,
            value: ee,
            onChange: r => J(r.target.value),
            className: "w-full p-4 rounded-2xl border-2 border-emerald-300 bg-white font-semibold text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
          })]
        }), n.jsx("div", {
          className: "flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-emerald-200",
          children: n.jsx("button", {
            onClick: W,
            className: "px-6 py-3.5 rounded-2xl bg-[#0F172A] hover:bg-slate-800 text-white font-black text-sm shadow-lg transition cursor-pointer flex items-center gap-2",
            children: Q ? n.jsxs(n.Fragment, {
              children: [n.jsx(yx, {
                className: "w-4 h-4 text-emerald-400"
              }), "Всё домашнее задание скопировано в буфер обмена!"]
            }) : n.jsxs(n.Fragment, {
              children: [n.jsx(Hx, {
                className: "w-4 h-4 text-amber-400"
              }), "Скопировать всё выполненное ДЗ для отправки учителю"]
            })
          })
        })]
      })]
    })
  },
  ca = [{
    id: 1,
    shortTitle: "1. Фото-улики",
    fullTitle: "Вступление + знакомство с фото-уликами",
    duration: "5 мин",
    fragmentName: "Фрагмент №1: Осмотр кухни",
    dropsReward: 15
  }, {
    id: 2,
    shortTitle: "2. Миссия 1: Слова",
    fullTitle: "Миссия 1. «Поиск улик» — ввод лексики",
    duration: "8–10 мин",
    fragmentName: "Фрагмент №2: 11 улик",
    dropsReward: 25
  }, {
    id: 3,
    shortTitle: "3. Миссия 2: Карта",
    fullTitle: "Миссия 2. «Карта объектов» — предлоги",
    duration: "7–8 мин",
    fragmentName: "Фрагмент №3: Координаты",
    dropsReward: 25
  }, {
    id: 4,
    shortTitle: "4. Миссия 3: Коды",
    fullTitle: "Миссия 3. «Секретные инструкции» + письмо",
    duration: "8–10 мин",
    fragmentName: "Фрагмент №4: Инструкции",
    dropsReward: 30
  }, {
    id: 5,
    shortTitle: "5. Финал: Отчёт",
    fullTitle: "Финальная миссия. «Сбор отчёта» (6–8 фраз)",
    duration: "10–12 мин",
    fragmentName: "Фрагмент №5: Готовый отчёт",
    dropsReward: 35
  }, {
    id: 6,
    shortTitle: "6. Рефлексия + Блиц",
    fullTitle: "Рефлексия + бонусные задания",
    duration: "Бонус",
    fragmentName: "Значок Супер-Детектива",
    dropsReward: 20
  }];

function rm() {
  L.useEffect(() => { applyBankShuffles(!1) }, []);
  const [st, setSt] = L.useState(loadState),
    [boot, setBoot] = L.useState(0);
  L.useEffect(() => { saveState(st) }, [st]);
  const patch = J => setSt(Q => ({ ...Q, ...(typeof J === "function" ? J(Q) : J) })),
    O = st.screen,
    G = st.stage,
    R = st.completed,
    ue = st.hotspots,
    U = st.activeCard,
    B = !1,
    E = st.customPhoto || null,
    te = st.timer,
    _ = st.timerOn,
    H = J => patch({ screen: typeof J === "function" ? J(O) : J }),
    m = J => patch({ stage: typeof J === "function" ? J(G) : J }),
    F = J => patch({ completed: typeof J === "function" ? J(R) : J }),
    ae = J => patch({ hotspots: typeof J === "function" ? J(ue) : J }),
    S = J => patch({ activeCard: typeof J === "function" ? J(U) : J }),
    Z = J => {},
    ne = J => patch({ customPhoto: J }),
    se = J => patch({ timer: typeof J === "function" ? J(te) : J }),
    me = J => patch({ timerOn: typeof J === "function" ? J(_) : J }),
    resetLesson = () => {
      if (!window.confirm("Начать урок заново? Весь прогресс будет удалён.")) return;
      try { localStorage.removeItem(Yo) } catch {}
      const fresh = defaultState();
      saveState(fresh);
      applyBankShuffles(!0);
      setSt(loadState());
      setBoot(Q => Q + 1)
    };
  L.useEffect(() => {
    if (!_) return;
    const J = setInterval(() => {
      se(Q => Q > 0 ? Q - 1 : 0)
    }, 1e3);
    return () => clearInterval(J)
  }, [_]), L.useEffect(() => {
    const J = Q => {
      Q.key === "Escape" && S(null)
    };
    return window.addEventListener("keydown", J), () => window.removeEventListener("keydown", J)
  }, []);
  const Ne = J => {
      const Q = Math.floor(J / 60),
        g = J % 60;
      return `${String(Q).padStart(2,"0")}:${String(g).padStart(2,"0")}`
    },
    de = J => {
      ae(Q => Q.includes(J) ? Q : [...Q, J])
    },
    z = J => {
      F(Q => Q.includes(J) ? Q : [...Q, J])
    },
    ce = ue.length * 2 + R.reduce((J, Q) => {
      const g = ca.find(M => M.id === Q);
      return J + (g ? g.dropsReward : 20)
    }, 0),
    ee = R.filter(J => J <= 5).length;
  return n.jsxs("div", {
    className: "min-h-screen detective-grid-bg flex flex-col",
    children: [n.jsx("header", {
      className: "sticky top-0 z-40 bg-[#0F172A]/95 backdrop-blur-md text-white border-b-2 border-[#D97706] shadow-xl",
      children: n.jsxs("div", {
        className: "max-w-7xl mx-auto px-3 sm:px-6 py-2.5 space-y-2",
        children: [n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3",
          children: [n.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [n.jsx("div", {
              className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D97706] to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0",
              children: n.jsx(Cx, {
                className: "w-5 h-5 stroke-[2.5]"
              })
            }), n.jsxs("div", {
              children: [n.jsxs("div", {
                className: "flex items-center gap-2",
                children: [n.jsx("span", {
                  className: "text-[11px] font-mono-code uppercase tracking-wider text-amber-400 font-bold",
                  children: "Academy Stars 4 • Unit 9 Lesson 1"
                }), n.jsx("span", {
                  className: "hidden md:inline-block text-[11px] font-mono-code px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30",
                  children: "Planet Water • 45 мин"
                })]
              }), n.jsxs("div", {
                className: "text-sm sm:text-base font-black tracking-tight text-white",
                children: ["Дело о пропавшей воде ", n.jsx("span", {
                  className: "text-sky-400 font-normal hidden sm:inline",
                  children: "| The Case of the Missing Water"
                })]
              })]
            })]
          }), n.jsxs("div", {
            className: "flex flex-wrap items-center gap-2 sm:gap-3",
            children: [n.jsxs("div", {
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950/90 border border-sky-500/40 text-xs font-mono-code font-bold text-sky-200",
              title: "Собранные капли спасённой воды",
              children: [n.jsx(eo, {
                className: "w-4 h-4 text-sky-400 fill-sky-400 float-drop"
              }), n.jsxs("span", {
                children: [ce, " капель"]
              })]
            }), n.jsxs("div", {
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-xs font-mono-code font-bold text-emerald-200",
              title: "Собранные фрагменты финального отчёта",
              children: [n.jsx(lo, {
                className: "w-4 h-4 text-emerald-400"
              }), n.jsxs("span", {
                children: ["Отчёт: ", ee, "/5"]
              })]
            }), n.jsxs("div", {
              className: "hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono-code",
              children: [n.jsx(Pp, {
                className: "w-3.5 h-3.5 text-amber-400"
              }), n.jsx("span", {
                className: "font-bold text-white",
                children: Ne(te)
              }), n.jsx("button", {
                onClick: () => me(!_),
                className: "p-1 rounded hover:bg-slate-700 text-amber-300 cursor-pointer",
                title: _ ? "Пауза таймера урока" : "Запустить таймер 45 минут",
                children: _ ? n.jsx(Ep, {
                  className: "w-3 h-3"
                }) : n.jsx(Bp, {
                  className: "w-3 h-3"
                })
              }), n.jsx("button", {
                onClick: () => {
                  me(!1), se(2700)
                },
                className: "p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer",
                title: "Сбросить таймер на 45:00",
                children: n.jsx(Qt, {
                  className: "w-3 h-3"
                })
              })]
            }), n.jsxs("div", {
              className: "flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700",
              children: [n.jsx("button", {
                onClick: () => H("lesson"),
                className: `px-3 py-1 rounded-lg text-xs font-extrabold transition cursor-pointer flex items-center gap-1 ${O==="lesson"?"bg-[#0284C7] text-white shadow":"text-slate-300 hover:text-white"}`,
                children: n.jsx("span", {
                  children: "🕵️‍♂️ На уроке"
                })
              }), n.jsxs("button", {
                onClick: () => H("homework"),
                className: `px-3 py-1 rounded-lg text-xs font-extrabold transition cursor-pointer flex items-center gap-1 ${O==="homework"?"bg-[#D97706] text-white shadow":"text-slate-300 hover:text-white"}`,
                children: [n.jsx(Xi, {
                  className: "w-3.5 h-3.5"
                }), n.jsx("span", {
                  children: "Домашнее задание"
                })]
              })]
            }), n.jsx("button", {
              type: "button",
              onClick: resetLesson,
              className: "ttc-reset px-2.5 py-1.5 rounded-xl text-xs font-extrabold",
              children: "↺ Начать заново"
            })]
          })]
        }), n.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-slate-800",
          children: [n.jsxs("div", {
            className: "flex flex-wrap items-center gap-1.5",
            children: [n.jsxs("span", {
              className: "text-[11px] font-mono-code uppercase text-amber-400 font-bold flex items-center gap-1 mr-1",
              children: [n.jsx(In, {
                className: "w-3.5 h-3.5"
              }), "Правила (всегда доступны 1 кликом):"]
            }), Yi.map(J => n.jsxs("button", {
              onClick: () => S(J.id),
              className: "px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-[#0284C7] text-slate-100 hover:text-white border border-slate-600 hover:border-sky-300 text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 shadow-sm",
              children: [n.jsx("span", {
                className: "w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-mono-code text-[10px] font-black flex items-center justify-center",
                children: J.number
              }), n.jsx("span", {
                children: J.shortTitle.replace(/^\d+\.\s*/, "")
              })]
            }, J.id))]
          }), O === "lesson" && n.jsx("div", {
            className: "flex flex-wrap items-center gap-1",
            children: ca.map(J => {
              const Q = G === J.id,
                g = R.includes(J.id);
              return n.jsxs("button", {
                onClick: () => {
                  m(J.id), window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
                },
                className: `px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition cursor-pointer flex items-center gap-1 ${Q?"bg-[#D97706] text-white shadow":g?"bg-emerald-900/70 text-emerald-200 border border-emerald-600/50 hover:bg-emerald-800":"bg-slate-800/80 text-slate-300 hover:bg-slate-700"}`,
                title: `${J.fullTitle} (${J.duration})`,
                children: [g && n.jsx(Ye, {
                  className: "w-3 h-3 text-emerald-400"
                }), n.jsx("span", {
                  children: J.shortTitle
                })]
              }, J.id)
            })
          })]
        })]
      })
    }), n.jsx("main", {
      className: "flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 space-y-6",
      children: O === "lesson" ? n.jsxs(n.Fragment, {
        key: boot,
        children: [n.jsxs("div", {
          className: "ttc-route-card bg-[#FFFDF9] rounded-2xl border-2 border-[#C8B9A6] p-3.5 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-3",
          children: [n.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [n.jsx(sa, {
              className: "w-5 h-5 text-amber-500 shrink-0"
            }), n.jsx("div", {
              className: "text-xs sm:text-sm font-black text-slate-800",
              children: "Маршрут расследования (45 мин) — вернись к любому этапу в любой момент:"
            })]
          }), n.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 flex-1 max-w-4xl",
            children: ca.map(J => {
              const Q = G === J.id,
                g = R.includes(J.id);
              return n.jsxs("button", {
                onClick: () => m(J.id),
                className: `p-2 rounded-xl border text-left transition cursor-pointer ${Q?"bg-[#0F172A] text-white border-[#0F172A] shadow-md":g?"bg-emerald-50 border-emerald-300 text-emerald-900":"bg-[#FAF6F0] border-[#D6C7B2] text-slate-700 hover:bg-white"}`,
                children: [n.jsxs("div", {
                  className: "flex items-center justify-between text-[10px] font-mono-code font-bold",
                  children: [n.jsx("span", {
                    children: J.duration
                  }), n.jsx("span", {
                    children: g ? "✅ Готово" : `+${J.dropsReward}💧`
                  })]
                }), n.jsx("div", {
                  className: "text-xs font-black truncate mt-0.5",
                  children: J.shortTitle
                })]
              }, J.id)
            })
          })]
        }), G === 1 && n.jsx(em, {
          customPhotoUrl: E,
          onUploadCustomPhoto: ne,
          inspectedHotspots: ue,
          onInspectHotspot: de,
          onCompleteStage: () => z(1),
          isStageCompleted: R.includes(1),
          onOpenRuleCard: S,
          teacherMode: B
        }), G === 2 && n.jsx(tm, {
          onCompleteStage: () => z(2),
          isStageCompleted: R.includes(2),
          onOpenRuleCard: S,
          teacherMode: B
        }), G === 3 && n.jsx(lm, {
          customPhotoUrl: E,
          onCompleteStage: () => z(3),
          isStageCompleted: R.includes(3),
          onOpenRuleCard: S,
          teacherMode: B
        }), G === 4 && n.jsx(am, {
          onCompleteStage: () => z(4),
          isStageCompleted: R.includes(4),
          onOpenRuleCard: S,
          teacherMode: B
        }), G === 5 && n.jsx(um, {
          customPhotoUrl: E,
          onCompleteStage: () => z(5),
          isStageCompleted: R.includes(5),
          onOpenRuleCard: S,
          teacherMode: B
        }), G === 6 && n.jsx(im, {
          onCompleteStage: () => z(6),
          onGoToHomework: () => {
            H("homework"), window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          },
          teacherMode: B
        }), n.jsxs("div", {
          className: "bg-[#FFFDF9] rounded-3xl border-2 border-[#C8B9A6] p-4 sm:p-5 shadow-md flex flex-wrap items-center justify-between gap-3",
          children: [n.jsxs("button", {
            disabled: G === 1,
            onClick: () => {
              m(J => Math.max(1, J - 1)), window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            },
            className: `px-5 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition ${G===1?"bg-slate-100 text-slate-400 cursor-not-allowed":"bg-slate-800 hover:bg-slate-700 text-white cursor-pointer shadow"}`,
            children: [n.jsx(vp, {
              className: "w-4 h-4"
            }), "Предыдущий этап урока"]
          }), n.jsxs("div", {
            className: "text-xs font-mono-code font-bold text-slate-500 text-center",
            children: ["Этап ", G, " из ", ca.length, " •", " ", ca[G - 1].fullTitle]
          }), G < ca.length ? n.jsxs("button", {
            onClick: () => {
              m(J => Math.min(ca.length, J + 1)), window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            },
            className: "px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition cursor-pointer",
            children: [n.jsx("span", {
              children: "Следующая миссия"
            }), n.jsx(Zp, {
              className: "w-4 h-4"
            })]
          }) : n.jsxs("button", {
            onClick: () => {
              H("homework"), window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            },
            className: "px-6 py-3 rounded-2xl bg-[#D97706] hover:bg-amber-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition cursor-pointer",
            children: [n.jsx(Xi, {
              className: "w-4 h-4"
            }), n.jsx("span", {
              children: "Открыть блок «Домашнее задание»"
            })]
          })]
        })]
      }) : n.jsx(om, {
        key: boot,
        customPhotoUrl: E,
        onOpenRuleCard: S,
        teacherMode: B
      })
    }), n.jsx("div", {
      className: "fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2",
      children: n.jsxs("div", {
        className: "bg-[#0F172A]/95 backdrop-blur-md text-white p-2 rounded-2xl border-2 border-[#D97706] shadow-2xl flex items-center gap-1.5",
        children: [n.jsx("span", {
          className: "text-[11px] font-mono-code font-bold text-amber-400 px-2 hidden sm:inline",
          children: "Шпаргалки:"
        }), Yi.map(J => n.jsx("button", {
          onClick: () => S(J.id),
          className: "px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-[#0284C7] text-xs font-extrabold transition cursor-pointer border border-slate-600",
          title: J.title,
          children: J.shortTitle
        }, J.id))]
      })
    }), n.jsx($p, {
      activeCard: U,
      onSelectCard: J => S(J)
    })]
  })
}
Op.createRoot(document.getElementById("root")).render(n.jsx(L.StrictMode, {
  children: n.jsx(rm, {})
}));