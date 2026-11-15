(function() {
  const T = document.createElement("link").relList;
  if (T && T.supports && T.supports("modulepreload")) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) o(z);
  new MutationObserver(z => {
    for (const _ of z)
      if (_.type === "childList")
        for (const C of _.addedNodes) C.tagName === "LINK" && C.rel === "modulepreload" && o(C)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function A(z) {
    const _ = {};
    return z.integrity && (_.integrity = z.integrity), z.referrerPolicy && (_.referrerPolicy = z.referrerPolicy), z.crossOrigin === "use-credentials" ? _.credentials = "include" : z.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _
  }

  function o(z) {
    if (z.ep) return;
    z.ep = !0;
    const _ = A(z);
    fetch(z.href, _)
  }
})();
var vf = {
    exports: {}
  },
  Tu = {};
var Or;

function hy() {
  if (Or) return Tu;
  Or = 1;
  var p = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.fragment");

  function A(o, z, _) {
    var C = null;
    if (_ !== void 0 && (C = "" + _), z.key !== void 0 && (C = "" + z.key), "key" in z) {
      _ = {};
      for (var M in z) M !== "key" && (_[M] = z[M])
    } else _ = z;
    return z = _.ref, {
      $$typeof: p,
      type: o,
      key: C,
      ref: z !== void 0 ? z : null,
      props: _
    }
  }
  return Tu.Fragment = T, Tu.jsx = A, Tu.jsxs = A, Tu
}
var Mr;

function yy() {
  return Mr || (Mr = 1, vf.exports = hy()), vf.exports
}
var c = yy(),
  bf = {
    exports: {}
  },
  P = {};
var Dr;

function vy() {
  if (Dr) return P;
  Dr = 1;
  var p = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    _ = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    D = Symbol.for("react.activity"),
    W = Symbol.iterator;

  function w(r) {
    return r === null || typeof r != "object" ? null : (r = W && r[W] || r["@@iterator"], typeof r == "function" ? r : null)
  }
  var Z = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    K = Object.assign,
    q = {};

  function k(r, E, R) {
    this.props = r, this.context = E, this.refs = q, this.updater = R || Z
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(r, E) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, E, "setState")
  }, k.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate")
  };

  function $() {}
  $.prototype = k.prototype;

  function ul(r, E, R) {
    this.props = r, this.context = E, this.refs = q, this.updater = R || Z
  }
  var H = ul.prototype = new $;
  H.constructor = ul, K(H, k.prototype), H.isPureReactComponent = !0;
  var fl = Array.isArray;

  function al() {}
  var I = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    Cl = Object.prototype.hasOwnProperty;

  function vt(r, E, R) {
    var B = R.ref;
    return {
      $$typeof: p,
      type: r,
      key: E,
      ref: B !== void 0 ? B : null,
      props: R
    }
  }

  function le(r, E) {
    return vt(r.type, E, r.props)
  }

  function nt(r) {
    return typeof r == "object" && r !== null && r.$$typeof === p
  }

  function Vl(r) {
    var E = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function(R) {
      return E[R]
    })
  }
  var F = /\/+/g;

  function Kl(r, E) {
    return typeof r == "object" && r !== null && r.key != null ? Vl("" + r.key) : E.toString(36)
  }

  function Fl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(al, al) : (r.status = "pending", r.then(function(E) {
            r.status === "pending" && (r.status = "fulfilled", r.value = E)
          }, function(E) {
            r.status === "pending" && (r.status = "rejected", r.reason = E)
          })), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason
        }
    }
    throw r
  }

  function x(r, E, R, B, ll) {
    var nl = typeof r;
    (nl === "undefined" || nl === "boolean") && (r = null);
    var yl = !1;
    if (r === null) yl = !0;
    else switch (nl) {
      case "bigint":
      case "string":
      case "number":
        yl = !0;
        break;
      case "object":
        switch (r.$$typeof) {
          case p:
          case T:
            yl = !0;
            break;
          case Q:
            return yl = r._init, x(yl(r._payload), E, R, B, ll)
        }
    }
    if (yl) return ll = ll(r), yl = B === "" ? "." + Kl(r, 0) : B, fl(ll) ? (R = "", yl != null && (R = yl.replace(F, "$&/") + "/"), x(ll, E, R, "", function(Ca) {
      return Ca
    })) : ll != null && (nt(ll) && (ll = le(ll, R + (ll.key == null || r && r.key === ll.key ? "" : ("" + ll.key).replace(F, "$&/") + "/") + yl)), E.push(ll)), 1;
    yl = 0;
    var Wl = B === "" ? "." : B + ":";
    if (fl(r))
      for (var Ml = 0; Ml < r.length; Ml++) B = r[Ml], nl = Wl + Kl(B, Ml), yl += x(B, E, R, nl, ll);
    else if (Ml = w(r), typeof Ml == "function")
      for (r = Ml.call(r), Ml = 0; !(B = r.next()).done;) B = B.value, nl = Wl + Kl(B, Ml++), yl += x(B, E, R, nl, ll);
    else if (nl === "object") {
      if (typeof r.then == "function") return x(Fl(r), E, R, B, ll);
      throw E = String(r), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
    }
    return yl
  }

  function U(r, E, R) {
    if (r == null) return r;
    var B = [],
      ll = 0;
    return x(r, B, "", "", function(nl) {
      return E.call(R, nl, ll++)
    }), B
  }

  function V(r) {
    if (r._status === -1) {
      var E = r._result;
      E = E(), E.then(function(R) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = R)
      }, function(R) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = R)
      }), r._status === -1 && (r._status = 0, r._result = E)
    }
    if (r._status === 1) return r._result.default;
    throw r._result
  }
  var gl = typeof reportError == "function" ? reportError : function(r) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var E = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
          error: r
        });
        if (!window.dispatchEvent(E)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", r);
        return
      }
      console.error(r)
    },
    jl = {
      map: U,
      forEach: function(r, E, R) {
        U(r, function() {
          E.apply(this, arguments)
        }, R)
      },
      count: function(r) {
        var E = 0;
        return U(r, function() {
          E++
        }), E
      },
      toArray: function(r) {
        return U(r, function(E) {
          return E
        }) || []
      },
      only: function(r) {
        if (!nt(r)) throw Error("React.Children.only expected to receive a single React element child.");
        return r
      }
    };
  return P.Activity = D, P.Children = jl, P.Component = k, P.Fragment = A, P.Profiler = z, P.PureComponent = ul, P.StrictMode = o, P.Suspense = O, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return I.H.useMemoCache(r)
    }
  }, P.cache = function(r) {
    return function() {
      return r.apply(null, arguments)
    }
  }, P.cacheSignal = function() {
    return null
  }, P.cloneElement = function(r, E, R) {
    if (r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
    var B = K({}, r.props),
      ll = r.key;
    if (E != null)
      for (nl in E.key !== void 0 && (ll = "" + E.key), E) !Cl.call(E, nl) || nl === "key" || nl === "__self" || nl === "__source" || nl === "ref" && E.ref === void 0 || (B[nl] = E[nl]);
    var nl = arguments.length - 2;
    if (nl === 1) B.children = R;
    else if (1 < nl) {
      for (var yl = Array(nl), Wl = 0; Wl < nl; Wl++) yl[Wl] = arguments[Wl + 2];
      B.children = yl
    }
    return vt(r.type, ll, B)
  }, P.createContext = function(r) {
    return r = {
      $$typeof: C,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: _,
      _context: r
    }, r
  }, P.createElement = function(r, E, R) {
    var B, ll = {},
      nl = null;
    if (E != null)
      for (B in E.key !== void 0 && (nl = "" + E.key), E) Cl.call(E, B) && B !== "key" && B !== "__self" && B !== "__source" && (ll[B] = E[B]);
    var yl = arguments.length - 2;
    if (yl === 1) ll.children = R;
    else if (1 < yl) {
      for (var Wl = Array(yl), Ml = 0; Ml < yl; Ml++) Wl[Ml] = arguments[Ml + 2];
      ll.children = Wl
    }
    if (r && r.defaultProps)
      for (B in yl = r.defaultProps, yl) ll[B] === void 0 && (ll[B] = yl[B]);
    return vt(r, nl, ll)
  }, P.createRef = function() {
    return {
      current: null
    }
  }, P.forwardRef = function(r) {
    return {
      $$typeof: M,
      render: r
    }
  }, P.isValidElement = nt, P.lazy = function(r) {
    return {
      $$typeof: Q,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: V
    }
  }, P.memo = function(r, E) {
    return {
      $$typeof: g,
      type: r,
      compare: E === void 0 ? null : E
    }
  }, P.startTransition = function(r) {
    var E = I.T,
      R = {};
    I.T = R;
    try {
      var B = r(),
        ll = I.S;
      ll !== null && ll(R, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(al, gl)
    } catch (nl) {
      gl(nl)
    } finally {
      E !== null && R.types !== null && (E.types = R.types), I.T = E
    }
  }, P.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh()
  }, P.use = function(r) {
    return I.H.use(r)
  }, P.useActionState = function(r, E, R) {
    return I.H.useActionState(r, E, R)
  }, P.useCallback = function(r, E) {
    return I.H.useCallback(r, E)
  }, P.useContext = function(r) {
    return I.H.useContext(r)
  }, P.useDebugValue = function() {}, P.useDeferredValue = function(r, E) {
    return I.H.useDeferredValue(r, E)
  }, P.useEffect = function(r, E) {
    return I.H.useEffect(r, E)
  }, P.useEffectEvent = function(r) {
    return I.H.useEffectEvent(r)
  }, P.useId = function() {
    return I.H.useId()
  }, P.useImperativeHandle = function(r, E, R) {
    return I.H.useImperativeHandle(r, E, R)
  }, P.useInsertionEffect = function(r, E) {
    return I.H.useInsertionEffect(r, E)
  }, P.useLayoutEffect = function(r, E) {
    return I.H.useLayoutEffect(r, E)
  }, P.useMemo = function(r, E) {
    return I.H.useMemo(r, E)
  }, P.useOptimistic = function(r, E) {
    return I.H.useOptimistic(r, E)
  }, P.useReducer = function(r, E, R) {
    return I.H.useReducer(r, E, R)
  }, P.useRef = function(r) {
    return I.H.useRef(r)
  }, P.useState = function(r) {
    return I.H.useState(r)
  }, P.useSyncExternalStore = function(r, E, R) {
    return I.H.useSyncExternalStore(r, E, R)
  }, P.useTransition = function() {
    return I.H.useTransition()
  }, P.version = "19.2.6", P
}
var Ur;

function Tf() {
  return Ur || (Ur = 1, bf.exports = vy()), bf.exports
}
var X = Tf(),
  gf = {
    exports: {}
  },
  Au = {},
  xf = {
    exports: {}
  },
  pf = {};
var Cr;

function by() {
  return Cr || (Cr = 1, (function(p) {
    function T(x, U) {
      var V = x.length;
      x.push(U);
      l: for (; 0 < V;) {
        var gl = V - 1 >>> 1,
          jl = x[gl];
        if (0 < z(jl, U)) x[gl] = U, x[V] = jl, V = gl;
        else break l
      }
    }

    function A(x) {
      return x.length === 0 ? null : x[0]
    }

    function o(x) {
      if (x.length === 0) return null;
      var U = x[0],
        V = x.pop();
      if (V !== U) {
        x[0] = V;
        l: for (var gl = 0, jl = x.length, r = jl >>> 1; gl < r;) {
          var E = 2 * (gl + 1) - 1,
            R = x[E],
            B = E + 1,
            ll = x[B];
          if (0 > z(R, V)) B < jl && 0 > z(ll, R) ? (x[gl] = ll, x[B] = V, gl = B) : (x[gl] = R, x[E] = V, gl = E);
          else if (B < jl && 0 > z(ll, V)) x[gl] = ll, x[B] = V, gl = B;
          else break l
        }
      }
      return U
    }

    function z(x, U) {
      var V = x.sortIndex - U.sortIndex;
      return V !== 0 ? V : x.id - U.id
    }
    if (p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      p.unstable_now = function() {
        return _.now()
      }
    } else {
      var C = Date,
        M = C.now();
      p.unstable_now = function() {
        return C.now() - M
      }
    }
    var O = [],
      g = [],
      Q = 1,
      D = null,
      W = 3,
      w = !1,
      Z = !1,
      K = !1,
      q = !1,
      k = typeof setTimeout == "function" ? setTimeout : null,
      $ = typeof clearTimeout == "function" ? clearTimeout : null,
      ul = typeof setImmediate < "u" ? setImmediate : null;

    function H(x) {
      for (var U = A(g); U !== null;) {
        if (U.callback === null) o(g);
        else if (U.startTime <= x) o(g), U.sortIndex = U.expirationTime, T(O, U);
        else break;
        U = A(g)
      }
    }

    function fl(x) {
      if (K = !1, H(x), !Z)
        if (A(O) !== null) Z = !0, al || (al = !0, Vl());
        else {
          var U = A(g);
          U !== null && Fl(fl, U.startTime - x)
        }
    }
    var al = !1,
      I = -1,
      Cl = 5,
      vt = -1;

    function le() {
      return q ? !0 : !(p.unstable_now() - vt < Cl)
    }

    function nt() {
      if (q = !1, al) {
        var x = p.unstable_now();
        vt = x;
        var U = !0;
        try {
          l: {
            Z = !1,
            K && (K = !1, $(I), I = -1),
            w = !0;
            var V = W;
            try {
              t: {
                for (H(x), D = A(O); D !== null && !(D.expirationTime > x && le());) {
                  var gl = D.callback;
                  if (typeof gl == "function") {
                    D.callback = null, W = D.priorityLevel;
                    var jl = gl(D.expirationTime <= x);
                    if (x = p.unstable_now(), typeof jl == "function") {
                      D.callback = jl, H(x), U = !0;
                      break t
                    }
                    D === A(O) && o(O), H(x)
                  } else o(O);
                  D = A(O)
                }
                if (D !== null) U = !0;
                else {
                  var r = A(g);
                  r !== null && Fl(fl, r.startTime - x), U = !1
                }
              }
              break l
            }
            finally {
              D = null, W = V, w = !1
            }
            U = void 0
          }
        }
        finally {
          U ? Vl() : al = !1
        }
      }
    }
    var Vl;
    if (typeof ul == "function") Vl = function() {
      ul(nt)
    };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel,
        Kl = F.port2;
      F.port1.onmessage = nt, Vl = function() {
        Kl.postMessage(null)
      }
    } else Vl = function() {
      k(nt, 0)
    };

    function Fl(x, U) {
      I = k(function() {
        x(p.unstable_now())
      }, U)
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(x) {
      x.callback = null
    }, p.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Cl = 0 < x ? Math.floor(1e3 / x) : 5
    }, p.unstable_getCurrentPriorityLevel = function() {
      return W
    }, p.unstable_next = function(x) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = W
      }
      var V = W;
      W = U;
      try {
        return x()
      } finally {
        W = V
      }
    }, p.unstable_requestPaint = function() {
      q = !0
    }, p.unstable_runWithPriority = function(x, U) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3
      }
      var V = W;
      W = x;
      try {
        return U()
      } finally {
        W = V
      }
    }, p.unstable_scheduleCallback = function(x, U, V) {
      var gl = p.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? gl + V : gl) : V = gl, x) {
        case 1:
          var jl = -1;
          break;
        case 2:
          jl = 250;
          break;
        case 5:
          jl = 1073741823;
          break;
        case 4:
          jl = 1e4;
          break;
        default:
          jl = 5e3
      }
      return jl = V + jl, x = {
        id: Q++,
        callback: U,
        priorityLevel: x,
        startTime: V,
        expirationTime: jl,
        sortIndex: -1
      }, V > gl ? (x.sortIndex = V, T(g, x), A(O) === null && x === A(g) && (K ? ($(I), I = -1) : K = !0, Fl(fl, V - gl))) : (x.sortIndex = jl, T(O, x), Z || w || (Z = !0, al || (al = !0, Vl()))), x
    }, p.unstable_shouldYield = le, p.unstable_wrapCallback = function(x) {
      var U = W;
      return function() {
        var V = W;
        W = U;
        try {
          return x.apply(this, arguments)
        } finally {
          W = V
        }
      }
    }
  })(pf)), pf
}
var Rr;

function gy() {
  return Rr || (Rr = 1, xf.exports = by()), xf.exports
}
var Sf = {
    exports: {}
  },
  Jl = {};
var Hr;

function xy() {
  if (Hr) return Jl;
  Hr = 1;
  var p = Tf();

  function T(O) {
    var g = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++) g += "&args[]=" + encodeURIComponent(arguments[Q])
    }
    return "Minified React error #" + O + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function A() {}
  var o = {
      d: {
        f: A,
        r: function() {
          throw Error(T(522))
        },
        D: A,
        C: A,
        L: A,
        m: A,
        X: A,
        S: A,
        M: A
      },
      p: 0,
      findDOMNode: null
    },
    z = Symbol.for("react.portal");

  function _(O, g, Q) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: D == null ? null : "" + D,
      children: O,
      containerInfo: g,
      implementation: Q
    }
  }
  var C = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function M(O, g) {
    if (O === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : ""
  }
  return Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Jl.createPortal = function(O, g) {
    var Q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(T(299));
    return _(O, g, null, Q)
  }, Jl.flushSync = function(O) {
    var g = C.T,
      Q = o.p;
    try {
      if (C.T = null, o.p = 2, O) return O()
    } finally {
      C.T = g, o.p = Q, o.d.f()
    }
  }, Jl.preconnect = function(O, g) {
    typeof O == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(O, g))
  }, Jl.prefetchDNS = function(O) {
    typeof O == "string" && o.d.D(O)
  }, Jl.preinit = function(O, g) {
    if (typeof O == "string" && g && typeof g.as == "string") {
      var Q = g.as,
        D = M(Q, g.crossOrigin),
        W = typeof g.integrity == "string" ? g.integrity : void 0,
        w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      Q === "style" ? o.d.S(O, typeof g.precedence == "string" ? g.precedence : void 0, {
        crossOrigin: D,
        integrity: W,
        fetchPriority: w
      }) : Q === "script" && o.d.X(O, {
        crossOrigin: D,
        integrity: W,
        fetchPriority: w,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      })
    }
  }, Jl.preinitModule = function(O, g) {
    if (typeof O == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var Q = M(g.as, g.crossOrigin);
          o.d.M(O, {
            crossOrigin: Q,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          })
        }
      } else g == null && o.d.M(O)
  }, Jl.preload = function(O, g) {
    if (typeof O == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var Q = g.as,
        D = M(Q, g.crossOrigin);
      o.d.L(O, Q, {
        crossOrigin: D,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      })
    }
  }, Jl.preloadModule = function(O, g) {
    if (typeof O == "string")
      if (g) {
        var Q = M(g.as, g.crossOrigin);
        o.d.m(O, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: Q,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        })
      } else o.d.m(O)
  }, Jl.requestFormReset = function(O) {
    o.d.r(O)
  }, Jl.unstable_batchedUpdates = function(O, g) {
    return O(g)
  }, Jl.useFormState = function(O, g, Q) {
    return C.H.useFormState(O, g, Q)
  }, Jl.useFormStatus = function() {
    return C.H.useHostTransitionStatus()
  }, Jl.version = "19.2.6", Jl
}
var Yr;

function py() {
  if (Yr) return Sf.exports;
  Yr = 1;

  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)
    } catch (T) {
      console.error(T)
    }
  }
  return p(), Sf.exports = xy(), Sf.exports
}
var qr;

function Sy() {
  if (qr) return Au;
  qr = 1;
  var p = gy(),
    T = Tf(),
    A = py();

  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e])
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function z(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
  }

  function _(l) {
    var t = l,
      e = l;
    if (l.alternate)
      for (; t.return;) t = t.return;
    else {
      l = t;
      do t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return; while (l)
    }
    return t.tag === 3 ? e : null
  }

  function C(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function M(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function O(l) {
    if (_(l) !== l) throw Error(o(188))
  }

  function g(l) {
    var t = l.alternate;
    if (!t) {
      if (t = _(l), t === null) throw Error(o(188));
      return t !== l ? null : l
    }
    for (var e = l, a = t;;) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue
        }
        break
      }
      if (u.child === n.child) {
        for (n = u.child; n;) {
          if (n === e) return O(u), l;
          if (n === a) return O(u), t;
          n = n.sibling
        }
        throw Error(o(188))
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, f = u.child; f;) {
          if (f === e) {
            i = !0, e = u, a = n;
            break
          }
          if (f === a) {
            i = !0, a = u, e = n;
            break
          }
          f = f.sibling
        }
        if (!i) {
          for (f = n.child; f;) {
            if (f === e) {
              i = !0, e = n, a = u;
              break
            }
            if (f === a) {
              i = !0, a = n, e = u;
              break
            }
            f = f.sibling
          }
          if (!i) throw Error(o(189))
        }
      }
      if (e.alternate !== a) throw Error(o(190))
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? l : t
  }

  function Q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null;) {
      if (t = Q(l), t !== null) return t;
      l = l.sibling
    }
    return null
  }
  var D = Object.assign,
    W = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    Z = Symbol.for("react.portal"),
    K = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    $ = Symbol.for("react.consumer"),
    ul = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    fl = Symbol.for("react.suspense"),
    al = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Cl = Symbol.for("react.lazy"),
    vt = Symbol.for("react.activity"),
    le = Symbol.for("react.memo_cache_sentinel"),
    nt = Symbol.iterator;

  function Vl(l) {
    return l === null || typeof l != "object" ? null : (l = nt && l[nt] || l["@@iterator"], typeof l == "function" ? l : null)
  }
  var F = Symbol.for("react.client.reference");

  function Kl(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === F ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case K:
        return "Fragment";
      case k:
        return "Profiler";
      case q:
        return "StrictMode";
      case fl:
        return "Suspense";
      case al:
        return "SuspenseList";
      case vt:
        return "Activity"
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Z:
        return "Portal";
      case ul:
        return l.displayName || "Context";
      case $:
        return (l._context.displayName || "Context") + ".Consumer";
      case H:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case I:
        return t = l.displayName || null, t !== null ? t : Kl(l.type) || "Memo";
      case Cl:
        t = l._payload, l = l._init;
        try {
          return Kl(l(t))
        } catch {}
    }
    return null
  }
  var Fl = Array.isArray,
    x = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    gl = [],
    jl = -1;

  function r(l) {
    return {
      current: l
    }
  }

  function E(l) {
    0 > jl || (l.current = gl[jl], gl[jl] = null, jl--)
  }

  function R(l, t) {
    jl++, gl[jl] = l.current, l.current = t
  }
  var B = r(null),
    ll = r(null),
    nl = r(null),
    yl = r(null);

  function Wl(l, t) {
    switch (R(nl, t), R(ll, l), R(B, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Id(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = Id(t), l = Pd(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0
        }
    }
    E(B), R(B, l)
  }

  function Ml() {
    E(B), E(ll), E(nl)
  }

  function Ca(l) {
    l.memoizedState !== null && R(yl, l);
    var t = B.current,
      e = Pd(t, l.type);
    t !== e && (R(ll, l), R(B, e))
  }

  function Ou(l) {
    ll.current === l && (E(B), E(ll)), yl.current === l && (E(yl), ju._currentValue = V)
  }
  var Fn, Af;

  function Te(l) {
    if (Fn === void 0) try {
      throw Error()
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Fn = t && t[1] || "", Af = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + Fn + l + Af
  }
  var In = !1;

  function Pn(l, t) {
    if (!l || In) return "";
    In = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var N = function() {
                throw Error()
              };
              if (Object.defineProperty(N.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, [])
                } catch (b) {
                  var v = b
                }
                Reflect.construct(l, [], N)
              } else {
                try {
                  N.call()
                } catch (b) {
                  v = b
                }
                l.call(N.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (b) {
                v = b
              }(N = l()) && typeof N.catch == "function" && N.catch(function() {})
            }
          } catch (b) {
            if (b && v && typeof b.stack == "string") return [b.stack, v.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var s = i.split(`
`),
          y = f.split(`
`);
        for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot");) a++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot");) u++;
        if (a === s.length || u === y.length)
          for (a = s.length - 1, u = y.length - 1; 1 <= a && 0 <= u && s[a] !== y[u];) u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== y[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || s[a] !== y[u]) {
                  var S = `
` + s[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S
                } while (1 <= a && 0 <= u);
            break
          }
      }
    } finally {
      In = !1, Error.prepareStackTrace = e
    }
    return (e = l ? l.displayName || l.name : "") ? Te(e) : ""
  }

  function Lr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Te(l.type);
      case 16:
        return Te("Lazy");
      case 13:
        return l.child !== t && t !== null ? Te("Suspense Fallback") : Te("Suspense");
      case 19:
        return Te("SuspenseList");
      case 0:
      case 15:
        return Pn(l.type, !1);
      case 11:
        return Pn(l.type.render, !1);
      case 1:
        return Pn(l.type, !0);
      case 31:
        return Te("Activity");
      default:
        return ""
    }
  }

  function _f(l) {
    try {
      var t = "",
        e = null;
      do t += Lr(l, e), e = l, l = l.return; while (l);
      return t
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack
    }
  }
  var li = Object.prototype.hasOwnProperty,
    ti = p.unstable_scheduleCallback,
    ei = p.unstable_cancelCallback,
    Vr = p.unstable_shouldYield,
    Kr = p.unstable_requestPaint,
    it = p.unstable_now,
    Jr = p.unstable_getCurrentPriorityLevel,
    Of = p.unstable_ImmediatePriority,
    Mf = p.unstable_UserBlockingPriority,
    Mu = p.unstable_NormalPriority,
    Wr = p.unstable_LowPriority,
    Df = p.unstable_IdlePriority,
    $r = p.log,
    Fr = p.unstable_setDisableYieldValue,
    Ra = null,
    ct = null;

  function te(l) {
    if (typeof $r == "function" && Fr(l), ct && typeof ct.setStrictMode == "function") try {
      ct.setStrictMode(Ra, l)
    } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : lm,
    Ir = Math.log,
    Pr = Math.LN2;

  function lm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ir(l) / Pr | 0) | 0
  }
  var Du = 256,
    Uu = 262144,
    Cu = 4194304;

  function Ae(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l
    }
  }

  function Ru(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? u = Ae(a) : (i &= f, i !== 0 ? u = Ae(i) : e || (e = f & ~l, e !== 0 && (u = Ae(e))))) : (f = a & ~n, f !== 0 ? u = Ae(f) : i !== 0 ? u = Ae(i) : e || (e = a & ~l, e !== 0 && (u = Ae(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
  }

  function Ha(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
  }

  function tm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Uf() {
    var l = Cu;
    return Cu <<= 1, (Cu & 62914560) === 0 && (Cu = 4194304), l
  }

  function ai(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t
  }

  function Ya(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
  }

  function em(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var f = l.entanglements,
      s = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e;) {
      var S = 31 - ft(e),
        N = 1 << S;
      f[S] = 0, s[S] = -1;
      var v = y[S];
      if (v !== null)
        for (y[S] = null, S = 0; S < v.length; S++) {
          var b = v[S];
          b !== null && (b.lane &= -536870913)
        }
      e &= ~N
    }
    a !== 0 && Cf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
  }

  function Cf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ft(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930
  }

  function Rf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e;) {
      var a = 31 - ft(e),
        u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u
    }
  }

  function Hf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : ui(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
  }

  function ui(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0
    }
    return l
  }

  function ni(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function Yf() {
    var l = U.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : jr(l.type))
  }

  function qf(l, t) {
    var e = U.p;
    try {
      return U.p = l, t()
    } finally {
      U.p = e
    }
  }
  var ee = Math.random().toString(36).slice(2),
    Ql = "__reactFiber$" + ee,
    Il = "__reactProps$" + ee,
    Ve = "__reactContainer$" + ee,
    ii = "__reactEvents$" + ee,
    am = "__reactListeners$" + ee,
    um = "__reactHandles$" + ee,
    Bf = "__reactResources$" + ee,
    qa = "__reactMarker$" + ee;

  function ci(l) {
    delete l[Ql], delete l[Il], delete l[ii], delete l[am], delete l[um]
  }

  function Ke(l) {
    var t = l[Ql];
    if (t) return t;
    for (var e = l.parentNode; e;) {
      if (t = e[Ve] || e[Ql]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = ir(l); l !== null;) {
            if (e = l[Ql]) return e;
            l = ir(l)
          }
        return t
      }
      l = e, e = l.parentNode
    }
    return null
  }

  function Je(l) {
    if (l = l[Ql] || l[Ve]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l
    }
    return null
  }

  function Ba(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33))
  }

  function We(l) {
    var t = l[Bf];
    return t || (t = l[Bf] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), t
  }

  function Gl(l) {
    l[qa] = !0
  }
  var Gf = new Set,
    Xf = {};

  function _e(l, t) {
    $e(l, t), $e(l + "Capture", t)
  }

  function $e(l, t) {
    for (Xf[l] = t, l = 0; l < t.length; l++) Gf.add(t[l])
  }
  var nm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Qf = {},
    kf = {};

  function im(l) {
    return li.call(kf, l) ? !0 : li.call(Qf, l) ? !1 : nm.test(l) ? kf[l] = !0 : (Qf[l] = !0, !1)
  }

  function Hu(l, t, e) {
    if (im(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return
            }
        }
        l.setAttribute(t, "" + e)
      }
  }

  function Yu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return
      }
      l.setAttribute(t, "" + e)
    }
  }

  function Yt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return
      }
      l.setAttributeNS(t, e, "" + a)
    }
  }

  function bt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return ""
    }
  }

  function Zf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function cm(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get,
        n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this)
        },
        set: function(i) {
          e = "" + i, n.call(this, i)
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e
        },
        setValue: function(i) {
          e = "" + i
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t]
        }
      }
    }
  }

  function fi(l) {
    if (!l._valueTracker) {
      var t = Zf(l) ? "checked" : "value";
      l._valueTracker = cm(l, t, "" + l[t])
    }
  }

  function wf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return l && (a = Zf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1
  }

  function qu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body
    } catch {
      return l.body
    }
  }
  var fm = /[\n"\\]/g;

  function gt(l) {
    return l.replace(fm, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }

  function si(l, t, e, a, u, n, i, f) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + bt(t)) : l.value !== "" + bt(t) && (l.value = "" + bt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? oi(l, i, bt(t)) : e != null ? oi(l, i, bt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + bt(f) : l.removeAttribute("name")
  }

  function Lf(l, t, e, a, u, n, i, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        fi(l);
        return
      }
      e = e != null ? "" + bt(e) : "", t = t != null ? "" + bt(t) : e, f || t === l.value || (l.value = t), l.defaultValue = t
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = f ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), fi(l)
  }

  function oi(l, t, e) {
    t === "number" && qu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
  }

  function Fe(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0)
    } else {
      for (e = "" + bt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = !0, a && (l[u].defaultSelected = !0);
          return
        }
        t !== null || l[u].disabled || (t = l[u])
      }
      t !== null && (t.selected = !0)
    }
  }

  function Vf(l, t, e) {
    if (t != null && (t = "" + bt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return
    }
    l.defaultValue = e != null ? "" + bt(e) : ""
  }

  function Kf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (Fl(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0]
        }
        e = a
      }
      e == null && (e = ""), t = e
    }
    e = bt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), fi(l)
  }

  function Ie(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return
      }
    }
    l.textContent = t
  }
  var sm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function Jf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || sm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
  }

  function Wf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && Jf(l, u, a)
    } else
      for (var n in t) t.hasOwnProperty(n) && Jf(l, n, t[n])
  }

  function di(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var om = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    dm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function Bu(l) {
    return dm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
  }

  function qt() {}
  var ri = null;

  function mi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
  }
  var Pe = null,
    la = null;

  function $f(l) {
    var t = Je(l);
    if (t && (l = t.stateNode)) {
      var e = l[Il] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (si(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode;) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + gt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Il] || null;
                if (!u) throw Error(o(90));
                si(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
              }
            }
            for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && wf(a)
          }
          break l;
        case "textarea":
          Vf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Fe(l, !!e.multiple, t, !1)
      }
    }
  }
  var hi = !1;

  function Ff(l, t, e) {
    if (hi) return l(t, e);
    hi = !0;
    try {
      var a = l(t);
      return a
    } finally {
      if (hi = !1, (Pe !== null || la !== null) && (Tn(), Pe && (t = Pe, l = la, la = Pe = null, $f(t), l)))
        for (t = 0; t < l.length; t++) $f(l[t])
    }
  }

  function Ga(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Il] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(o(231, t, typeof e));
    return e
  }
  var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    yi = !1;
  if (Bt) try {
    var Xa = {};
    Object.defineProperty(Xa, "passive", {
      get: function() {
        yi = !0
      }
    }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa)
  } catch {
    yi = !1
  }
  var ae = null,
    vi = null,
    Gu = null;

  function If() {
    if (Gu) return Gu;
    var l, t = vi,
      e = t.length,
      a, u = "value" in ae ? ae.value : ae.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return Gu = u.slice(l, 1 < a ? 1 - a : void 0)
  }

  function Xu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
  }

  function Qu() {
    return !0
  }

  function Pf() {
    return !1
  }

  function Pl(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var f in l) l.hasOwnProperty(f) && (e = l[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Qu : Pf, this.isPropagationStopped = Pf, this
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Qu)
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Qu)
      },
      persist: function() {},
      isPersistent: Qu
    }), t
  }
  var Oe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    ku = Pl(Oe),
    Qa = D({}, Oe, {
      view: 0,
      detail: 0
    }),
    rm = Pl(Qa),
    bi, gi, ka, Zu = D({}, Qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pi,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== ka && (ka && l.type === "mousemove" ? (bi = l.screenX - ka.screenX, gi = l.screenY - ka.screenY) : gi = bi = 0, ka = l), bi)
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : gi
      }
    }),
    ls = Pl(Zu),
    mm = D({}, Zu, {
      dataTransfer: 0
    }),
    hm = Pl(mm),
    ym = D({}, Qa, {
      relatedTarget: 0
    }),
    xi = Pl(ym),
    vm = D({}, Oe, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    bm = Pl(vm),
    gm = D({}, Oe, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData
      }
    }),
    xm = Pl(gm),
    pm = D({}, Oe, {
      data: 0
    }),
    ts = Pl(pm),
    Sm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    jm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    Nm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function zm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Nm[l]) ? !!t[l] : !1
  }

  function pi() {
    return zm
  }
  var Em = D({}, Qa, {
      key: function(l) {
        if (l.key) {
          var t = Sm[l.key] || l.key;
          if (t !== "Unidentified") return t
        }
        return l.type === "keypress" ? (l = Xu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? jm[l.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pi,
      charCode: function(l) {
        return l.type === "keypress" ? Xu(l) : 0
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
      },
      which: function(l) {
        return l.type === "keypress" ? Xu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
      }
    }),
    Tm = Pl(Em),
    Am = D({}, Zu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    es = Pl(Am),
    _m = D({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pi
    }),
    Om = Pl(_m),
    Mm = D({}, Oe, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Dm = Pl(Mm),
    Um = D({}, Zu, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Cm = Pl(Um),
    Rm = D({}, Oe, {
      newState: 0,
      oldState: 0
    }),
    Hm = Pl(Rm),
    Ym = [9, 13, 27, 32],
    Si = Bt && "CompositionEvent" in window,
    Za = null;
  Bt && "documentMode" in document && (Za = document.documentMode);
  var qm = Bt && "TextEvent" in window && !Za,
    as = Bt && (!Si || Za && 8 < Za && 11 >= Za),
    us = " ",
    ns = !1;

  function is(l, t) {
    switch (l) {
      case "keyup":
        return Ym.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function cs(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
  }
  var ta = !1;

  function Bm(l, t) {
    switch (l) {
      case "compositionend":
        return cs(t);
      case "keypress":
        return t.which !== 32 ? null : (ns = !0, us);
      case "textInput":
        return l = t.data, l === us && ns ? null : l;
      default:
        return null
    }
  }

  function Gm(l, t) {
    if (ta) return l === "compositionend" || !Si && is(l, t) ? (l = If(), Gu = vi = ae = null, ta = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
        }
        return null;
      case "compositionend":
        return as && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var Xm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };

  function fs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Xm[l.type] : t === "textarea"
  }

  function ss(l, t, e, a) {
    Pe ? la ? la.push(a) : la = [a] : Pe = a, t = Cn(t, "onChange"), 0 < t.length && (e = new ku("onChange", "change", null, e, a), l.push({
      event: e,
      listeners: t
    }))
  }
  var wa = null,
    La = null;

  function Qm(l) {
    Vd(l, 0)
  }

  function wu(l) {
    var t = Ba(l);
    if (wf(t)) return l
  }

  function os(l, t) {
    if (l === "change") return t
  }
  var ds = !1;
  if (Bt) {
    var ji;
    if (Bt) {
      var Ni = "oninput" in document;
      if (!Ni) {
        var rs = document.createElement("div");
        rs.setAttribute("oninput", "return;"), Ni = typeof rs.oninput == "function"
      }
      ji = Ni
    } else ji = !1;
    ds = ji && (!document.documentMode || 9 < document.documentMode)
  }

  function ms() {
    wa && (wa.detachEvent("onpropertychange", hs), La = wa = null)
  }

  function hs(l) {
    if (l.propertyName === "value" && wu(La)) {
      var t = [];
      ss(t, La, l, mi(l)), Ff(Qm, t)
    }
  }

  function km(l, t, e) {
    l === "focusin" ? (ms(), wa = t, La = e, wa.attachEvent("onpropertychange", hs)) : l === "focusout" && ms()
  }

  function Zm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return wu(La)
  }

  function wm(l, t) {
    if (l === "click") return wu(t)
  }

  function Lm(l, t) {
    if (l === "input" || l === "change") return wu(t)
  }

  function Vm(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
  }
  var st = typeof Object.is == "function" ? Object.is : Vm;

  function Va(l, t) {
    if (st(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!li.call(t, u) || !st(l[u], t[u])) return !1
    }
    return !0
  }

  function ys(l) {
    for (; l && l.firstChild;) l = l.firstChild;
    return l
  }

  function vs(l, t) {
    var e = ys(l);
    l = 0;
    for (var a; e;) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t) return {
          node: e,
          offset: t - l
        };
        l = a
      }
      l: {
        for (; e;) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l
          }
          e = e.parentNode
        }
        e = void 0
      }
      e = ys(e)
    }
  }

  function bs(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function gs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = qu(l.document); t instanceof l.HTMLIFrameElement;) {
      try {
        var e = typeof t.contentWindow.location.href == "string"
      } catch {
        e = !1
      }
      if (e) l = t.contentWindow;
      else break;
      t = qu(l.document)
    }
    return t
  }

  function zi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
  }
  var Km = Bt && "documentMode" in document && 11 >= document.documentMode,
    ea = null,
    Ei = null,
    Ka = null,
    Ti = !1;

  function xs(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ti || ea == null || ea !== qu(a) || (a = ea, "selectionStart" in a && zi(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ka && Va(Ka, a) || (Ka = a, a = Cn(Ei, "onSelect"), 0 < a.length && (t = new ku("onSelect", "select", null, t, e), l.push({
      event: t,
      listeners: a
    }), t.target = ea)))
  }

  function Me(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e
  }
  var aa = {
      animationend: Me("Animation", "AnimationEnd"),
      animationiteration: Me("Animation", "AnimationIteration"),
      animationstart: Me("Animation", "AnimationStart"),
      transitionrun: Me("Transition", "TransitionRun"),
      transitionstart: Me("Transition", "TransitionStart"),
      transitioncancel: Me("Transition", "TransitionCancel"),
      transitionend: Me("Transition", "TransitionEnd")
    },
    Ai = {},
    ps = {};
  Bt && (ps = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);

  function De(l) {
    if (Ai[l]) return Ai[l];
    if (!aa[l]) return l;
    var t = aa[l],
      e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in ps) return Ai[l] = t[e];
    return l
  }
  var Ss = De("animationend"),
    js = De("animationiteration"),
    Ns = De("animationstart"),
    Jm = De("transitionrun"),
    Wm = De("transitionstart"),
    $m = De("transitioncancel"),
    zs = De("transitionend"),
    Es = new Map,
    _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  _i.push("scrollEnd");

  function At(l, t) {
    Es.set(l, t), _e(t, [l])
  }
  var Lu = typeof reportError == "function" ? reportError : function(l) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
          error: l
        });
        if (!window.dispatchEvent(t)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", l);
        return
      }
      console.error(l)
    },
    xt = [],
    ua = 0,
    Oi = 0;

  function Vu() {
    for (var l = ua, t = Oi = ua = 0; t < l;) {
      var e = xt[t];
      xt[t++] = null;
      var a = xt[t];
      xt[t++] = null;
      var u = xt[t];
      xt[t++] = null;
      var n = xt[t];
      if (xt[t++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u
      }
      n !== 0 && Ts(e, u, n)
    }
  }

  function Ku(l, t, e, a) {
    xt[ua++] = l, xt[ua++] = t, xt[ua++] = e, xt[ua++] = a, Oi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a)
  }

  function Mi(l, t, e, a) {
    return Ku(l, t, e, a), Ju(l)
  }

  function Ue(l, t) {
    return Ku(l, null, null, t), Ju(l)
  }

  function Ts(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null;) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ft(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null
  }

  function Ju(l) {
    if (50 < yu) throw yu = 0, Gc = null, Error(o(185));
    for (var t = l.return; t !== null;) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null
  }
  var na = {};

  function Fm(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function ot(l, t, e, a) {
    return new Fm(l, t, e, a)
  }

  function Di(l) {
    return l = l.prototype, !(!l || !l.isReactComponent)
  }

  function Gt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ot(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e
  }

  function As(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l
  }

  function Wu(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") Di(l) && (i = 1);
    else if (typeof l == "string") i = ey(l, e, B.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case vt:
        return l = ot(31, e, t, u), l.elementType = vt, l.lanes = n, l;
      case K:
        return Ce(e.children, u, n, t);
      case q:
        i = 8, u |= 24;
        break;
      case k:
        return l = ot(12, e, t, u | 2), l.elementType = k, l.lanes = n, l;
      case fl:
        return l = ot(13, e, t, u), l.elementType = fl, l.lanes = n, l;
      case al:
        return l = ot(19, e, t, u), l.elementType = al, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case ul:
            i = 10;
            break l;
          case $:
            i = 9;
            break l;
          case H:
            i = 11;
            break l;
          case I:
            i = 14;
            break l;
          case Cl:
            i = 16, a = null;
            break l
        }
        i = 29, e = Error(o(130, l === null ? "null" : typeof l, "")), a = null
    }
    return t = ot(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t
  }

  function Ce(l, t, e, a) {
    return l = ot(7, l, a, t), l.lanes = e, l
  }

  function Ui(l, t, e) {
    return l = ot(6, l, null, t), l.lanes = e, l
  }

  function _s(l) {
    var t = ot(18, null, null, 0);
    return t.stateNode = l, t
  }

  function Ci(l, t, e) {
    return t = ot(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t
  }
  var Os = new WeakMap;

  function pt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Os.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: _f(t)
      }, Os.set(l, t), t)
    }
    return {
      value: l,
      source: t,
      stack: _f(t)
    }
  }
  var ia = [],
    ca = 0,
    $u = null,
    Ja = 0,
    St = [],
    jt = 0,
    ue = null,
    Mt = 1,
    Dt = "";

  function Xt(l, t) {
    ia[ca++] = Ja, ia[ca++] = $u, $u = l, Ja = t
  }

  function Ms(l, t, e) {
    St[jt++] = Mt, St[jt++] = Dt, St[jt++] = ue, ue = l;
    var a = Mt;
    l = Dt;
    var u = 32 - ft(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - ft(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Mt = 1 << 32 - ft(t) + u | e << u | a, Dt = n + l
    } else Mt = 1 << n | e << u | a, Dt = l
  }

  function Ri(l) {
    l.return !== null && (Xt(l, 1), Ms(l, 1, 0))
  }

  function Hi(l) {
    for (; l === $u;) $u = ia[--ca], ia[ca] = null, Ja = ia[--ca], ia[ca] = null;
    for (; l === ue;) ue = St[--jt], St[jt] = null, Dt = St[--jt], St[jt] = null, Mt = St[--jt], St[jt] = null
  }

  function Ds(l, t) {
    St[jt++] = Mt, St[jt++] = Dt, St[jt++] = ue, Mt = t.id, Dt = t.overflow, ue = l
  }
  var kl = null,
    El = null,
    dl = !1,
    ne = null,
    Nt = !1,
    Yi = Error(o(519));

  function ie(l) {
    var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Wa(pt(t, l)), Yi
  }

  function Us(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (t[Ql] = l, t[Il] = a, e) {
      case "dialog":
        cl("cancel", t), cl("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        cl("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bu.length; e++) cl(bu[e], t);
        break;
      case "source":
        cl("error", t);
        break;
      case "img":
      case "image":
      case "link":
        cl("error", t), cl("load", t);
        break;
      case "details":
        cl("toggle", t);
        break;
      case "input":
        cl("invalid", t), Lf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case "select":
        cl("invalid", t);
        break;
      case "textarea":
        cl("invalid", t), Kf(t, a.value, a.defaultValue, a.children)
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || $d(t.textContent, e) ? (a.popover != null && (cl("beforetoggle", t), cl("toggle", t)), a.onScroll != null && cl("scroll", t), a.onScrollEnd != null && cl("scrollend", t), a.onClick != null && (t.onclick = qt), t = !0) : t = !1, t || ie(l, !0)
  }

  function Cs(l) {
    for (kl = l.return; kl;) switch (kl.tag) {
      case 5:
      case 31:
      case 13:
        Nt = !1;
        return;
      case 27:
      case 3:
        Nt = !0;
        return;
      default:
        kl = kl.return
    }
  }

  function fa(l) {
    if (l !== kl) return !1;
    if (!dl) return Cs(l), dl = !0, !1;
    var t = l.tag,
      e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || lf(l.type, l.memoizedProps)), e = !e), e && El && ie(l), Cs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      El = nr(l)
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      El = nr(l)
    } else t === 27 ? (t = El, pe(l.type) ? (l = nf, nf = null, El = l) : El = t) : El = kl ? Et(l.stateNode.nextSibling) : null;
    return !0
  }

  function Re() {
    El = kl = null, dl = !1
  }

  function qi() {
    var l = ne;
    return l !== null && (at === null ? at = l : at.push.apply(at, l), ne = null), l
  }

  function Wa(l) {
    ne === null ? ne = [l] : ne.push(l)
  }
  var Bi = r(null),
    He = null,
    Qt = null;

  function ce(l, t, e) {
    R(Bi, t._currentValue), t._currentValue = e
  }

  function kt(l) {
    l._currentValue = Bi.current, E(Bi)
  }

  function Gi(l, t, e) {
    for (; l !== null;) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return
    }
  }

  function Xi(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null;) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null;) {
          var f = n;
          n = u;
          for (var s = 0; s < t.length; s++)
            if (f.context === t[s]) {
              n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), Gi(n.return, e, l), a || (i = null);
              break l
            } n = f.next
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(o(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Gi(i, e, l), i = null
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null;) {
          if (i === l) {
            i = null;
            break
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break
          }
          i = i.return
        }
      u = i
    }
  }

  function sa(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null;) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var f = u.type;
          st(u.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [f])
        }
      } else if (u === yl.current) {
        if (i = u.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(ju) : l = [ju])
      }
      u = u.return
    }
    l !== null && Xi(t, l, e, a), t.flags |= 262144
  }

  function Fu(l) {
    for (l = l.firstContext; l !== null;) {
      if (!st(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next
    }
    return !1
  }

  function Ye(l) {
    He = l, Qt = null, l = l.dependencies, l !== null && (l.firstContext = null)
  }

  function Zl(l) {
    return Rs(He, l)
  }

  function Iu(l, t) {
    return He === null && Ye(l), Rs(l, t)
  }

  function Rs(l, t) {
    var e = t._currentValue;
    if (t = {
        context: t,
        memoizedValue: e,
        next: null
      }, Qt === null) {
      if (l === null) throw Error(o(308));
      Qt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288
    } else Qt = Qt.next = t;
    return e
  }
  var Im = typeof AbortController < "u" ? AbortController : function() {
      var l = [],
        t = this.signal = {
          aborted: !1,
          addEventListener: function(e, a) {
            l.push(a)
          }
        };
      this.abort = function() {
        t.aborted = !0, l.forEach(function(e) {
          return e()
        })
      }
    },
    Pm = p.unstable_scheduleCallback,
    lh = p.unstable_NormalPriority,
    Rl = {
      $$typeof: ul,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Qi() {
    return {
      controller: new Im,
      data: new Map,
      refCount: 0
    }
  }

  function $a(l) {
    l.refCount--, l.refCount === 0 && Pm(lh, function() {
      l.controller.abort()
    })
  }
  var Fa = null,
    ki = 0,
    oa = 0,
    da = null;

  function th(l, t) {
    if (Fa === null) {
      var e = Fa = [];
      ki = 0, oa = Lc(), da = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a)
        }
      }
    }
    return ki++, t.then(Hs, Hs), t
  }

  function Hs() {
    if (--ki === 0 && Fa !== null) {
      da !== null && (da.status = "fulfilled");
      var l = Fa;
      Fa = null, oa = 0, da = null;
      for (var t = 0; t < l.length; t++)(0, l[t])()
    }
  }

  function eh(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(u) {
          e.push(u)
        }
      };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var u = 0; u < e.length; u++)(0, e[u])(t)
    }, function(u) {
      for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)(0, e[u])(void 0)
    }), a
  }
  var Ys = x.S;
  x.S = function(l, t) {
    pd = it(), typeof t == "object" && t !== null && typeof t.then == "function" && th(l, t), Ys !== null && Ys(l, t)
  };
  var qe = r(null);

  function Zi() {
    var l = qe.current;
    return l !== null ? l : Nl.pooledCache
  }

  function Pu(l, t) {
    t === null ? R(qe, qe.current) : R(qe, t.pool)
  }

  function qs() {
    var l = Zi();
    return l === null ? null : {
      parent: Rl._currentValue,
      pool: l
    }
  }
  var ra = Error(o(460)),
    wi = Error(o(474)),
    ln = Error(o(542)),
    tn = {
      then: function() {}
    };

  function Bs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected"
  }

  function Gs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(qt, qt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Qs(l), l;
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (l = Nl, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var u = t;
              u.status = "fulfilled", u.value = a
            }
          }, function(a) {
            if (t.status === "pending") {
              var u = t;
              u.status = "rejected", u.reason = a
            }
          })
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Qs(l), l
        }
        throw Ge = t, ra
    }
  }

  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload)
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ge = e, ra) : e
    }
  }
  var Ge = null;

  function Xs() {
    if (Ge === null) throw Error(o(459));
    var l = Ge;
    return Ge = null, l
  }

  function Qs(l) {
    if (l === ra || l === ln) throw Error(o(483))
  }
  var ma = null,
    Ia = 0;

  function en(l) {
    var t = Ia;
    return Ia += 1, ma === null && (ma = []), Gs(ma, l, t)
  }

  function Pa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null
  }

  function an(l, t) {
    throw t.$$typeof === W ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
  }

  function ks(l) {
    function t(m, d) {
      if (l) {
        var h = m.deletions;
        h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d)
      }
    }

    function e(m, d) {
      if (!l) return null;
      for (; d !== null;) t(m, d), d = d.sibling;
      return null
    }

    function a(m) {
      for (var d = new Map; m !== null;) m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
      return d
    }

    function u(m, d) {
      return m = Gt(m, d), m.index = 0, m.sibling = null, m
    }

    function n(m, d, h) {
      return m.index = h, l ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 67108866, d) : h) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d)
    }

    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m
    }

    function f(m, d, h, j) {
      return d === null || d.tag !== 6 ? (d = Ui(h, m.mode, j), d.return = m, d) : (d = u(d, h), d.return = m, d)
    }

    function s(m, d, h, j) {
      var L = h.type;
      return L === K ? S(m, d, h.props.children, j, h.key) : d !== null && (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Cl && Be(L) === d.type) ? (d = u(d, h.props), Pa(d, h), d.return = m, d) : (d = Wu(h.type, h.key, h.props, null, m.mode, j), Pa(d, h), d.return = m, d)
    }

    function y(m, d, h, j) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Ci(h, m.mode, j), d.return = m, d) : (d = u(d, h.children || []), d.return = m, d)
    }

    function S(m, d, h, j, L) {
      return d === null || d.tag !== 7 ? (d = Ce(h, m.mode, j, L), d.return = m, d) : (d = u(d, h), d.return = m, d)
    }

    function N(m, d, h) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Ui("" + d, m.mode, h), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case w:
            return h = Wu(d.type, d.key, d.props, null, m.mode, h), Pa(h, d), h.return = m, h;
          case Z:
            return d = Ci(d, m.mode, h), d.return = m, d;
          case Cl:
            return d = Be(d), N(m, d, h)
        }
        if (Fl(d) || Vl(d)) return d = Ce(d, m.mode, h, null), d.return = m, d;
        if (typeof d.then == "function") return N(m, en(d), h);
        if (d.$$typeof === ul) return N(m, Iu(m, d), h);
        an(m, d)
      }
      return null
    }

    function v(m, d, h, j) {
      var L = d !== null ? d.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return L !== null ? null : f(m, d, "" + h, j);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case w:
            return h.key === L ? s(m, d, h, j) : null;
          case Z:
            return h.key === L ? y(m, d, h, j) : null;
          case Cl:
            return h = Be(h), v(m, d, h, j)
        }
        if (Fl(h) || Vl(h)) return L !== null ? null : S(m, d, h, j, null);
        if (typeof h.then == "function") return v(m, d, en(h), j);
        if (h.$$typeof === ul) return v(m, d, Iu(m, h), j);
        an(m, h)
      }
      return null
    }

    function b(m, d, h, j, L) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return m = m.get(h) || null, f(d, m, "" + j, L);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case w:
            return m = m.get(j.key === null ? h : j.key) || null, s(d, m, j, L);
          case Z:
            return m = m.get(j.key === null ? h : j.key) || null, y(d, m, j, L);
          case Cl:
            return j = Be(j), b(m, d, h, j, L)
        }
        if (Fl(j) || Vl(j)) return m = m.get(h) || null, S(d, m, j, L, null);
        if (typeof j.then == "function") return b(m, d, h, en(j), L);
        if (j.$$typeof === ul) return b(m, d, h, Iu(d, j), L);
        an(d, j)
      }
      return null
    }

    function Y(m, d, h, j) {
      for (var L = null, rl = null, G = d, el = d = 0, ol = null; G !== null && el < h.length; el++) {
        G.index > el ? (ol = G, G = null) : ol = G.sibling;
        var ml = v(m, G, h[el], j);
        if (ml === null) {
          G === null && (G = ol);
          break
        }
        l && G && ml.alternate === null && t(m, G), d = n(ml, d, el), rl === null ? L = ml : rl.sibling = ml, rl = ml, G = ol
      }
      if (el === h.length) return e(m, G), dl && Xt(m, el), L;
      if (G === null) {
        for (; el < h.length; el++) G = N(m, h[el], j), G !== null && (d = n(G, d, el), rl === null ? L = G : rl.sibling = G, rl = G);
        return dl && Xt(m, el), L
      }
      for (G = a(G); el < h.length; el++) ol = b(G, m, el, h[el], j), ol !== null && (l && ol.alternate !== null && G.delete(ol.key === null ? el : ol.key), d = n(ol, d, el), rl === null ? L = ol : rl.sibling = ol, rl = ol);
      return l && G.forEach(function(Ee) {
        return t(m, Ee)
      }), dl && Xt(m, el), L
    }

    function J(m, d, h, j) {
      if (h == null) throw Error(o(151));
      for (var L = null, rl = null, G = d, el = d = 0, ol = null, ml = h.next(); G !== null && !ml.done; el++, ml = h.next()) {
        G.index > el ? (ol = G, G = null) : ol = G.sibling;
        var Ee = v(m, G, ml.value, j);
        if (Ee === null) {
          G === null && (G = ol);
          break
        }
        l && G && Ee.alternate === null && t(m, G), d = n(Ee, d, el), rl === null ? L = Ee : rl.sibling = Ee, rl = Ee, G = ol
      }
      if (ml.done) return e(m, G), dl && Xt(m, el), L;
      if (G === null) {
        for (; !ml.done; el++, ml = h.next()) ml = N(m, ml.value, j), ml !== null && (d = n(ml, d, el), rl === null ? L = ml : rl.sibling = ml, rl = ml);
        return dl && Xt(m, el), L
      }
      for (G = a(G); !ml.done; el++, ml = h.next()) ml = b(G, m, el, ml.value, j), ml !== null && (l && ml.alternate !== null && G.delete(ml.key === null ? el : ml.key), d = n(ml, d, el), rl === null ? L = ml : rl.sibling = ml, rl = ml);
      return l && G.forEach(function(my) {
        return t(m, my)
      }), dl && Xt(m, el), L
    }

    function Sl(m, d, h, j) {
      if (typeof h == "object" && h !== null && h.type === K && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case w:
            l: {
              for (var L = h.key; d !== null;) {
                if (d.key === L) {
                  if (L = h.type, L === K) {
                    if (d.tag === 7) {
                      e(m, d.sibling), j = u(d, h.props.children), j.return = m, m = j;
                      break l
                    }
                  } else if (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Cl && Be(L) === d.type) {
                    e(m, d.sibling), j = u(d, h.props), Pa(j, h), j.return = m, m = j;
                    break l
                  }
                  e(m, d);
                  break
                } else t(m, d);
                d = d.sibling
              }
              h.type === K ? (j = Ce(h.props.children, m.mode, j, h.key), j.return = m, m = j) : (j = Wu(h.type, h.key, h.props, null, m.mode, j), Pa(j, h), j.return = m, m = j)
            }
            return i(m);
          case Z:
            l: {
              for (L = h.key; d !== null;) {
                if (d.key === L)
                  if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                    e(m, d.sibling), j = u(d, h.children || []), j.return = m, m = j;
                    break l
                  } else {
                    e(m, d);
                    break
                  }
                else t(m, d);
                d = d.sibling
              }
              j = Ci(h, m.mode, j),
              j.return = m,
              m = j
            }
            return i(m);
          case Cl:
            return h = Be(h), Sl(m, d, h, j)
        }
        if (Fl(h)) return Y(m, d, h, j);
        if (Vl(h)) {
          if (L = Vl(h), typeof L != "function") throw Error(o(150));
          return h = L.call(h), J(m, d, h, j)
        }
        if (typeof h.then == "function") return Sl(m, d, en(h), j);
        if (h.$$typeof === ul) return Sl(m, d, Iu(m, h), j);
        an(m, h)
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(m, d.sibling), j = u(d, h), j.return = m, m = j) : (e(m, d), j = Ui(h, m.mode, j), j.return = m, m = j), i(m)) : e(m, d)
    }
    return function(m, d, h, j) {
      try {
        Ia = 0;
        var L = Sl(m, d, h, j);
        return ma = null, L
      } catch (G) {
        if (G === ra || G === ln) throw G;
        var rl = ot(29, G, null, m.mode);
        return rl.lanes = j, rl.return = m, rl
      }
    }
  }
  var Xe = ks(!0),
    Zs = ks(!1),
    fe = !1;

  function Li(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function Vi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    })
  }

  function se(l) {
    return {
      lane: l,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function oe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (hl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Ju(l), Ts(l, null, e), t
    }
    return Ku(l, a, t, e), Ju(l)
  }

  function lu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Rf(l, e)
    }
  }

  function Ki(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null,
        n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t
      } else u = n = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t
  }
  var Ji = !1;

  function tu() {
    if (Ji) {
      var l = da;
      if (l !== null) throw l
    }
  }

  function eu(l, t, e, a) {
    Ji = !1;
    var u = l.updateQueue;
    fe = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var s = f,
        y = s.next;
      s.next = null, i === null ? n = y : i.next = y, i = s;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, f = S.lastBaseUpdate, f !== i && (f === null ? S.firstBaseUpdate = y : f.next = y, S.lastBaseUpdate = s))
    }
    if (n !== null) {
      var N = u.baseState;
      i = 0, S = y = s = null, f = n;
      do {
        var v = f.lane & -536870913,
          b = v !== f.lane;
        if (b ? (sl & v) === v : (a & v) === v) {
          v !== 0 && v === oa && (Ji = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var Y = l,
              J = f;v = t;
            var Sl = e;
            switch (J.tag) {
              case 1:
                if (Y = J.payload, typeof Y == "function") {
                  N = Y.call(Sl, N, v);
                  break l
                }
                N = Y;
                break l;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = J.payload, v = typeof Y == "function" ? Y.call(Sl, N, v) : Y, v == null) break l;
                N = D({}, N, v);
                break l;
              case 2:
                fe = !0
            }
          }
          v = f.callback, v !== null && (l.flags |= 64, b && (l.flags |= 8192), b = u.callbacks, b === null ? u.callbacks = [v] : b.push(v))
        } else b = {
          lane: v,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, S === null ? (y = S = b, s = N) : S = S.next = b, i |= v;
        if (f = f.next, f === null) {
          if (f = u.shared.pending, f === null) break;
          b = f, f = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null
        }
      } while (!0);
      S === null && (s = N), u.baseState = s, u.firstBaseUpdate = y, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), ye |= i, l.lanes = i, l.memoizedState = N
    }
  }

  function ws(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t)
  }

  function Ls(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) ws(e[l], t)
  }
  var ha = r(null),
    un = r(0);

  function Vs(l, t) {
    l = Ft, R(un, l), R(ha, t), Ft = l | t.baseLanes
  }

  function Wi() {
    R(un, Ft), R(ha, ha.current)
  }

  function $i() {
    Ft = un.current, E(ha), E(un)
  }
  var dt = r(null),
    zt = null;

  function de(l) {
    var t = l.alternate;
    R(Dl, Dl.current & 1), R(dt, l), zt === null && (t === null || ha.current !== null || t.memoizedState !== null) && (zt = l)
  }

  function Fi(l) {
    R(Dl, Dl.current), R(dt, l), zt === null && (zt = l)
  }

  function Ks(l) {
    l.tag === 22 ? (R(Dl, Dl.current), R(dt, l), zt === null && (zt = l)) : re()
  }

  function re() {
    R(Dl, Dl.current), R(dt, dt.current)
  }

  function rt(l) {
    E(dt), zt === l && (zt = null), E(Dl)
  }
  var Dl = r(0);

  function nn(l) {
    for (var t = l; t !== null;) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || af(e) || uf(e))) return t
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === l) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === l) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }
  var Zt = 0,
    tl = null,
    xl = null,
    Hl = null,
    cn = !1,
    ya = !1,
    Qe = !1,
    fn = 0,
    au = 0,
    va = null,
    ah = 0;

  function _l() {
    throw Error(o(321))
  }

  function Ii(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!st(l[e], t[e])) return !1;
    return !0
  }

  function Pi(l, t, e, a, u, n) {
    return Zt = n, tl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = l === null || l.memoizedState === null ? Do : hc, Qe = !1, n = e(a, u), Qe = !1, ya && (n = Ws(t, e, a, u)), Js(l), n
  }

  function Js(l) {
    x.H = iu;
    var t = xl !== null && xl.next !== null;
    if (Zt = 0, Hl = xl = tl = null, cn = !1, au = 0, va = null, t) throw Error(o(300));
    l === null || Yl || (l = l.dependencies, l !== null && Fu(l) && (Yl = !0))
  }

  function Ws(l, t, e, a) {
    tl = l;
    var u = 0;
    do {
      if (ya && (va = null), au = 0, ya = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Hl = xl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
      }
      x.H = Uo, n = t(e, a)
    } while (ya);
    return n
  }

  function uh() {
    var l = x.H,
      t = l.useState()[0];
    return t = typeof t.then == "function" ? uu(t) : t, l = l.useState()[0], (xl !== null ? xl.memoizedState : null) !== l && (tl.flags |= 1024), t
  }

  function lc() {
    var l = fn !== 0;
    return fn = 0, l
  }

  function tc(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e
  }

  function ec(l) {
    if (cn) {
      for (l = l.memoizedState; l !== null;) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next
      }
      cn = !1
    }
    Zt = 0, Hl = xl = tl = null, ya = !1, au = fn = 0, va = null
  }

  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Hl === null ? tl.memoizedState = Hl = l : Hl = Hl.next = l, Hl
  }

  function Ul() {
    if (xl === null) {
      var l = tl.alternate;
      l = l !== null ? l.memoizedState : null
    } else l = xl.next;
    var t = Hl === null ? tl.memoizedState : Hl.next;
    if (t !== null) Hl = t, xl = l;
    else {
      if (l === null) throw tl.alternate === null ? Error(o(467)) : Error(o(310));
      xl = l, l = {
        memoizedState: xl.memoizedState,
        baseState: xl.baseState,
        baseQueue: xl.baseQueue,
        queue: xl.queue,
        next: null
      }, Hl === null ? tl.memoizedState = Hl = l : Hl = Hl.next = l
    }
    return Hl
  }

  function sn() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function uu(l) {
    var t = au;
    return au += 1, va === null && (va = []), l = Gs(va, l, t), t = tl, (Hl === null ? t.memoizedState : Hl.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? Do : hc), l
  }

  function on(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return uu(l);
      if (l.$$typeof === ul) return Zl(l)
    }
    throw Error(o(438, String(l)))
  }

  function ac(l) {
    var t = null,
      e = tl.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = tl.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice()
        }),
        index: 0
      })))
    }
    if (t == null && (t = {
        data: [],
        index: 0
      }), e === null && (e = sn(), tl.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = le;
    return t.index++, e
  }

  function wt(l, t) {
    return typeof t == "function" ? t(l) : t
  }

  function dn(l) {
    var t = Ul();
    return uc(t, xl, l)
  }

  function uc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i
      }
      t.baseQueue = u = n, a.pending = null
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var f = i = null,
        s = null,
        y = t,
        S = !1;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (sl & N) === N : (Zt & N) === N) {
          var v = y.revertLane;
          if (v === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }), N === oa && (S = !0);
          else if ((Zt & v) === v) {
            y = y.next, v === oa && (S = !0);
            continue
          } else N = {
            lane: 0,
            revertLane: y.revertLane,
            gesture: null,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, s === null ? (f = s = N, i = n) : s = s.next = N, tl.lanes |= v, ye |= v;
          N = y.action, Qe && e(n, N), n = y.hasEagerState ? y.eagerState : e(n, N)
        } else v = {
          lane: N,
          revertLane: y.revertLane,
          gesture: y.gesture,
          action: y.action,
          hasEagerState: y.hasEagerState,
          eagerState: y.eagerState,
          next: null
        }, s === null ? (f = s = v, i = n) : s = s.next = v, tl.lanes |= N, ye |= N;
        y = y.next
      } while (y !== null && y !== t);
      if (s === null ? i = n : s.next = f, !st(n, l.memoizedState) && (Yl = !0, S && (e = da, e !== null))) throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, a.lastRenderedState = n
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]
  }

  function nc(l) {
    var t = Ul(),
      e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do n = l(n, i.action), i = i.next; while (i !== u);
      st(n, t.memoizedState) || (Yl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n
    }
    return [n, a]
  }

  function $s(l, t, e) {
    var a = tl,
      u = Ul(),
      n = dl;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e()
    } else e = t();
    var i = !st((xl || u).memoizedState, e);
    if (i && (u.memoizedState = e, Yl = !0), u = u.queue, fc(Ps.bind(null, a, u, l), [l]), u.getSnapshot !== t || i || Hl !== null && Hl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ba(9, {
          destroy: void 0
        }, Is.bind(null, a, u, e, t), null), Nl === null) throw Error(o(349));
      n || (Zt & 127) !== 0 || Fs(a, t, e)
    }
    return e
  }

  function Fs(l, t, e) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: e
    }, t = tl.updateQueue, t === null ? (t = sn(), tl.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l))
  }

  function Is(l, t, e, a) {
    t.value = e, t.getSnapshot = a, lo(t) && to(l)
  }

  function Ps(l, t, e) {
    return e(function() {
      lo(t) && to(l)
    })
  }

  function lo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !st(l, e)
    } catch {
      return !0
    }
  }

  function to(l) {
    var t = Ue(l, 2);
    t !== null && ut(t, l, 2)
  }

  function ic(l) {
    var t = $l();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Qe) {
        te(!0);
        try {
          e()
        } finally {
          te(!1)
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wt,
      lastRenderedState: l
    }, t
  }

  function eo(l, t, e, a) {
    return l.baseState = e, uc(l, xl, typeof a == "function" ? a : wt)
  }

  function nh(l, t, e, a, u) {
    if (hn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i)
        }
      };
      x.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, ao(t, n)) : (n.next = e.next, t.pending = e.next = n)
    }
  }

  function ao(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = x.T,
        i = {};
      x.T = i;
      try {
        var f = e(u, a),
          s = x.S;
        s !== null && s(i, f), uo(l, t, f)
      } catch (y) {
        cc(l, t, y)
      } finally {
        n !== null && i.types !== null && (n.types = i.types), x.T = n
      }
    } else try {
      n = e(u, a), uo(l, t, n)
    } catch (y) {
      cc(l, t, y)
    }
  }

  function uo(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
      no(l, t, a)
    }, function(a) {
      return cc(l, t, a)
    }) : no(l, t, e)
  }

  function no(l, t, e) {
    t.status = "fulfilled", t.value = e, io(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ao(l, e)))
  }

  function cc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do t.status = "rejected", t.reason = e, io(t), t = t.next; while (t !== a)
    }
    l.action = null
  }

  function io(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++)(0, l[t])()
  }

  function co(l, t) {
    return t
  }

  function fo(l, t) {
    if (dl) {
      var e = Nl.formState;
      if (e !== null) {
        l: {
          var a = tl;
          if (dl) {
            if (El) {
              t: {
                for (var u = El, n = Nt; u.nodeType !== 8;) {
                  if (!n) {
                    u = null;
                    break t
                  }
                  if (u = Et(u.nextSibling), u === null) {
                    u = null;
                    break t
                  }
                }
                n = u.data,
                u = n === "F!" || n === "F" ? u : null
              }
              if (u) {
                El = Et(u.nextSibling), a = u.data === "F!";
                break l
              }
            }
            ie(a)
          }
          a = !1
        }
        a && (t = e[0])
      }
    }
    return e = $l(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: co,
      lastRenderedState: t
    }, e.queue = a, e = _o.bind(null, tl, a), a.dispatch = e, a = ic(!1), n = mc.bind(null, tl, !1, a.queue), a = $l(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = nh.bind(null, tl, u, n, e), u.dispatch = e, a.memoizedState = l, [t, e, !1]
  }

  function so(l) {
    var t = Ul();
    return oo(t, xl, l)
  }

  function oo(l, t, e) {
    if (t = uc(l, t, co)[0], l = dn(wt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = uu(t)
    } catch (i) {
      throw i === ra ? ln : i
    } else a = t;
    t = Ul();
    var u = t.queue,
      n = u.dispatch;
    return e !== t.memoizedState && (tl.flags |= 2048, ba(9, {
      destroy: void 0
    }, ih.bind(null, u, e), null)), [a, n, l]
  }

  function ih(l, t) {
    l.action = t
  }

  function ro(l) {
    var t = Ul(),
      e = xl;
    if (e !== null) return oo(t, e, l);
    Ul(), t = t.memoizedState, e = Ul();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1]
  }

  function ba(l, t, e, a) {
    return l = {
      tag: l,
      create: e,
      deps: a,
      inst: t,
      next: null
    }, t = tl.updateQueue, t === null && (t = sn(), tl.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l
  }

  function mo() {
    return Ul().memoizedState
  }

  function rn(l, t, e, a) {
    var u = $l();
    tl.flags |= l, u.memoizedState = ba(1 | t, {
      destroy: void 0
    }, e, a === void 0 ? null : a)
  }

  function mn(l, t, e, a) {
    var u = Ul();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    xl !== null && a !== null && Ii(a, xl.memoizedState.deps) ? u.memoizedState = ba(t, n, e, a) : (tl.flags |= l, u.memoizedState = ba(1 | t, n, e, a))
  }

  function ho(l, t) {
    rn(8390656, 8, l, t)
  }

  function fc(l, t) {
    mn(2048, 8, l, t)
  }

  function ch(l) {
    tl.flags |= 4;
    var t = tl.updateQueue;
    if (t === null) t = sn(), tl.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l)
    }
  }

  function yo(l) {
    var t = Ul().memoizedState;
    return ch({
        ref: t,
        nextImpl: l
      }),
      function() {
        if ((hl & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments)
      }
  }

  function vo(l, t) {
    return mn(4, 2, l, t)
  }

  function bo(l, t) {
    return mn(4, 4, l, t)
  }

  function go(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null)
      }
    }
    if (t != null) return l = l(), t.current = l,
      function() {
        t.current = null
      }
  }

  function xo(l, t, e) {
    e = e != null ? e.concat([l]) : null, mn(4, 4, go.bind(null, t, l), e)
  }

  function sc() {}

  function po(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Ii(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l)
  }

  function So(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Ii(t, a[1])) return a[0];
    if (a = l(), Qe) {
      te(!0);
      try {
        l()
      } finally {
        te(!1)
      }
    }
    return e.memoizedState = [a, t], a
  }

  function oc(l, t, e) {
    return e === void 0 || (Zt & 1073741824) !== 0 && (sl & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = jd(), tl.lanes |= l, ye |= l, e)
  }

  function jo(l, t, e, a) {
    return st(e, t) ? e : ha.current !== null ? (l = oc(l, e, a), st(l, t) || (Yl = !0), l) : (Zt & 42) === 0 || (Zt & 1073741824) !== 0 && (sl & 261930) === 0 ? (Yl = !0, l.memoizedState = e) : (l = jd(), tl.lanes |= l, ye |= l, t)
  }

  function No(l, t, e, a, u) {
    var n = U.p;
    U.p = n !== 0 && 8 > n ? n : 8;
    var i = x.T,
      f = {};
    x.T = f, mc(l, !1, t, e);
    try {
      var s = u(),
        y = x.S;
      if (y !== null && y(f, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var S = eh(s, a);
        nu(l, t, S, yt(l))
      } else nu(l, t, a, yt(l))
    } catch (N) {
      nu(l, t, {
        then: function() {},
        status: "rejected",
        reason: N
      }, yt())
    } finally {
      U.p = n, i !== null && f.types !== null && (i.types = f.types), x.T = i
    }
  }

  function fh() {}

  function dc(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = zo(l).queue;
    No(l, u, t, V, e === null ? fh : function() {
      return Eo(l), e(a)
    })
  }

  function zo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: V
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
  }

  function Eo(l) {
    var t = zo(l);
    t.next === null && (t = l.alternate.memoizedState), nu(l, t.next.queue, {}, yt())
  }

  function rc() {
    return Zl(ju)
  }

  function To() {
    return Ul().memoizedState
  }

  function Ao() {
    return Ul().memoizedState
  }

  function sh(l) {
    for (var t = l.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = yt();
          l = se(e);
          var a = oe(t, l, e);
          a !== null && (ut(a, t, e), lu(a, t, e)), t = {
            cache: Qi()
          }, l.payload = t;
          return
      }
      t = t.return
    }
  }

  function oh(l, t, e) {
    var a = yt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hn(l) ? Oo(t, e) : (e = Mi(l, t, e, a), e !== null && (ut(e, l, a), Mo(e, t, a)))
  }

  function _o(l, t, e) {
    var a = yt();
    nu(l, t, e, a)
  }

  function nu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hn(l)) Oo(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var i = t.lastRenderedState,
          f = n(i, e);
        if (u.hasEagerState = !0, u.eagerState = f, st(f, i)) return Ku(l, t, u, 0), Nl === null && Vu(), !1
      } catch {}
      if (e = Mi(l, t, u, a), e !== null) return ut(e, l, a), Mo(e, t, a), !0
    }
    return !1
  }

  function mc(l, t, e, a) {
    if (a = {
        lane: 2,
        revertLane: Lc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, hn(l)) {
      if (t) throw Error(o(479))
    } else t = Mi(l, e, a, 2), t !== null && ut(t, l, 2)
  }

  function hn(l) {
    var t = l.alternate;
    return l === tl || t !== null && t === tl
  }

  function Oo(l, t) {
    ya = cn = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t
  }

  function Mo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Rf(l, e)
    }
  }
  var iu = {
    readContext: Zl,
    use: on,
    useCallback: _l,
    useContext: _l,
    useEffect: _l,
    useImperativeHandle: _l,
    useLayoutEffect: _l,
    useInsertionEffect: _l,
    useMemo: _l,
    useReducer: _l,
    useRef: _l,
    useState: _l,
    useDebugValue: _l,
    useDeferredValue: _l,
    useTransition: _l,
    useSyncExternalStore: _l,
    useId: _l,
    useHostTransitionStatus: _l,
    useFormState: _l,
    useActionState: _l,
    useOptimistic: _l,
    useMemoCache: _l,
    useCacheRefresh: _l
  };
  iu.useEffectEvent = _l;
  var Do = {
      readContext: Zl,
      use: on,
      useCallback: function(l, t) {
        return $l().memoizedState = [l, t === void 0 ? null : t], l
      },
      useContext: Zl,
      useEffect: ho,
      useImperativeHandle: function(l, t, e) {
        e = e != null ? e.concat([l]) : null, rn(4194308, 4, go.bind(null, t, l), e)
      },
      useLayoutEffect: function(l, t) {
        return rn(4194308, 4, l, t)
      },
      useInsertionEffect: function(l, t) {
        rn(4, 2, l, t)
      },
      useMemo: function(l, t) {
        var e = $l();
        t = t === void 0 ? null : t;
        var a = l();
        if (Qe) {
          te(!0);
          try {
            l()
          } finally {
            te(!1)
          }
        }
        return e.memoizedState = [a, t], a
      },
      useReducer: function(l, t, e) {
        var a = $l();
        if (e !== void 0) {
          var u = e(t);
          if (Qe) {
            te(!0);
            try {
              e(t)
            } finally {
              te(!1)
            }
          }
        } else u = t;
        return a.memoizedState = a.baseState = u, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: u
        }, a.queue = l, l = l.dispatch = oh.bind(null, tl, l), [a.memoizedState, l]
      },
      useRef: function(l) {
        var t = $l();
        return l = {
          current: l
        }, t.memoizedState = l
      },
      useState: function(l) {
        l = ic(l);
        var t = l.queue,
          e = _o.bind(null, tl, t);
        return t.dispatch = e, [l.memoizedState, e]
      },
      useDebugValue: sc,
      useDeferredValue: function(l, t) {
        var e = $l();
        return oc(e, l, t)
      },
      useTransition: function() {
        var l = ic(!1);
        return l = No.bind(null, tl, l.queue, !0, !1), $l().memoizedState = l, [!1, l]
      },
      useSyncExternalStore: function(l, t, e) {
        var a = tl,
          u = $l();
        if (dl) {
          if (e === void 0) throw Error(o(407));
          e = e()
        } else {
          if (e = t(), Nl === null) throw Error(o(349));
          (sl & 127) !== 0 || Fs(a, t, e)
        }
        u.memoizedState = e;
        var n = {
          value: e,
          getSnapshot: t
        };
        return u.queue = n, ho(Ps.bind(null, a, n, l), [l]), a.flags |= 2048, ba(9, {
          destroy: void 0
        }, Is.bind(null, a, n, e, t), null), e
      },
      useId: function() {
        var l = $l(),
          t = Nl.identifierPrefix;
        if (dl) {
          var e = Dt,
            a = Mt;
          e = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = fn++, 0 < e && (t += "H" + e.toString(32)), t += "_"
        } else e = ah++, t = "_" + t + "r_" + e.toString(32) + "_";
        return l.memoizedState = t
      },
      useHostTransitionStatus: rc,
      useFormState: fo,
      useActionState: fo,
      useOptimistic: function(l) {
        var t = $l();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = e, t = mc.bind(null, tl, !0, e), e.dispatch = t, [l, t]
      },
      useMemoCache: ac,
      useCacheRefresh: function() {
        return $l().memoizedState = sh.bind(null, tl)
      },
      useEffectEvent: function(l) {
        var t = $l(),
          e = {
            impl: l
          };
        return t.memoizedState = e,
          function() {
            if ((hl & 2) !== 0) throw Error(o(440));
            return e.impl.apply(void 0, arguments)
          }
      }
    },
    hc = {
      readContext: Zl,
      use: on,
      useCallback: po,
      useContext: Zl,
      useEffect: fc,
      useImperativeHandle: xo,
      useInsertionEffect: vo,
      useLayoutEffect: bo,
      useMemo: So,
      useReducer: dn,
      useRef: mo,
      useState: function() {
        return dn(wt)
      },
      useDebugValue: sc,
      useDeferredValue: function(l, t) {
        var e = Ul();
        return jo(e, xl.memoizedState, l, t)
      },
      useTransition: function() {
        var l = dn(wt)[0],
          t = Ul().memoizedState;
        return [typeof l == "boolean" ? l : uu(l), t]
      },
      useSyncExternalStore: $s,
      useId: To,
      useHostTransitionStatus: rc,
      useFormState: so,
      useActionState: so,
      useOptimistic: function(l, t) {
        var e = Ul();
        return eo(e, xl, l, t)
      },
      useMemoCache: ac,
      useCacheRefresh: Ao
    };
  hc.useEffectEvent = yo;
  var Uo = {
    readContext: Zl,
    use: on,
    useCallback: po,
    useContext: Zl,
    useEffect: fc,
    useImperativeHandle: xo,
    useInsertionEffect: vo,
    useLayoutEffect: bo,
    useMemo: So,
    useReducer: nc,
    useRef: mo,
    useState: function() {
      return nc(wt)
    },
    useDebugValue: sc,
    useDeferredValue: function(l, t) {
      var e = Ul();
      return xl === null ? oc(e, l, t) : jo(e, xl.memoizedState, l, t)
    },
    useTransition: function() {
      var l = nc(wt)[0],
        t = Ul().memoizedState;
      return [typeof l == "boolean" ? l : uu(l), t]
    },
    useSyncExternalStore: $s,
    useId: To,
    useHostTransitionStatus: rc,
    useFormState: ro,
    useActionState: ro,
    useOptimistic: function(l, t) {
      var e = Ul();
      return xl !== null ? eo(e, xl, l, t) : (e.baseState = l, [l, e.queue.dispatch])
    },
    useMemoCache: ac,
    useCacheRefresh: Ao
  };
  Uo.useEffectEvent = yo;

  function yc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : D({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e)
  }
  var vc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = yt(),
        u = se(a);
      u.payload = t, e != null && (u.callback = e), t = oe(l, u, a), t !== null && (ut(t, l, a), lu(t, l, a))
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = yt(),
        u = se(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = oe(l, u, a), t !== null && (ut(t, l, a), lu(t, l, a))
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = yt(),
        a = se(e);
      a.tag = 2, t != null && (a.callback = t), t = oe(l, a, e), t !== null && (ut(t, l, e), lu(t, l, e))
    }
  };

  function Co(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Va(e, a) || !Va(u, n) : !0
  }

  function Ro(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && vc.enqueueReplaceState(t, t.state, null)
  }

  function ke(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a])
    }
    if (l = l.defaultProps) {
      e === t && (e = D({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u])
    }
    return e
  }

  function Ho(l) {
    Lu(l)
  }

  function Yo(l) {
    console.error(l)
  }

  function qo(l) {
    Lu(l)
  }

  function yn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, {
        componentStack: t.stack
      })
    } catch (a) {
      setTimeout(function() {
        throw a
      })
    }
  }

  function Bo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (u) {
      setTimeout(function() {
        throw u
      })
    }
  }

  function bc(l, t, e) {
    return e = se(e), e.tag = 3, e.payload = {
      element: null
    }, e.callback = function() {
      yn(l, t)
    }, e
  }

  function Go(l) {
    return l = se(l), l.tag = 3, l
  }

  function Xo(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n)
      }, l.callback = function() {
        Bo(t, e, a)
      }
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Bo(t, e, a), typeof u != "function" && (ve === null ? ve = new Set([this]) : ve.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      })
    })
  }

  function dh(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && sa(t, e, u, !0), e = dt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return zt === null ? An() : e.alternate === null && Ol === 0 && (Ol = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([a]) : t.add(a), kc(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([a]) : e.add(a)), kc(l, a, u)), !1
        }
        throw Error(o(435, e.tag))
      }
      return kc(l, a, u), An(), !1
    }
    if (dl) return t = dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Yi && (l = Error(o(422), {
      cause: a
    }), Wa(pt(l, e)))) : (a !== Yi && (t = Error(o(423), {
      cause: a
    }), Wa(pt(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = pt(a, e), u = bc(l.stateNode, a, u), Ki(l, u), Ol !== 4 && (Ol = 2)), !1;
    var n = Error(o(520), {
      cause: a
    });
    if (n = pt(n, e), hu === null ? hu = [n] : hu.push(n), Ol !== 4 && (Ol = 2), t === null) return !0;
    a = pt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = bc(e.stateNode, a, l), Ki(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ve === null || !ve.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Go(u), Xo(u, l, e, a), Ki(e, u), !1
      }
      e = e.return
    } while (e !== null);
    return !1
  }
  var gc = Error(o(461)),
    Yl = !1;

  function wl(l, t, e, a) {
    t.child = l === null ? Zs(t, null, e, a) : Xe(t, l.child, e, a)
  }

  function Qo(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f])
    } else i = a;
    return Ye(t), a = Pi(l, t, e, i, n, u), f = lc(), l !== null && !Yl ? (tc(l, t, u), Lt(l, t, u)) : (dl && f && Ri(t), t.flags |= 1, wl(l, t, a, u), t.child)
  }

  function ko(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Di(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Zo(l, t, n, a, u)) : (l = Wu(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l)
    }
    if (n = l.child, !Tc(l, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Va, e(i, a) && l.ref === t.ref) return Lt(l, t, u)
    }
    return t.flags |= 1, l = Gt(n, a), l.ref = t.ref, l.return = t, t.child = l
  }

  function Zo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Va(n, a) && l.ref === t.ref)
        if (Yl = !1, t.pendingProps = a = n, Tc(l, u))(l.flags & 131072) !== 0 && (Yl = !0);
        else return t.lanes = l.lanes, Lt(l, t, u)
    }
    return xc(l, t, e, a, u)
  }

  function wo(l, t, e, a) {
    var u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null;) u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n
        } else a = 0, t.child = null;
        return Lo(l, t, n, e, a)
      }
      if ((e & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l !== null && Pu(t, n !== null ? n.cachePool : null), n !== null ? Vs(t, n) : Wi(), Ks(t);
      else return a = t.lanes = 536870912, Lo(l, t, n !== null ? n.baseLanes | e : e, e, a)
    } else n !== null ? (Pu(t, n.cachePool), Vs(t, n), re(), t.memoizedState = null) : (l !== null && Pu(t, null), Wi(), re());
    return wl(l, t, u, e), t.child
  }

  function cu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling
  }

  function Lo(l, t, e, a, u) {
    var n = Zi();
    return n = n === null ? null : {
      parent: Rl._currentValue,
      pool: n
    }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && Pu(t, null), Wi(), Ks(t), l !== null && sa(l, t, a, !0), t.childLanes = u, null
  }

  function vn(l, t) {
    return t = gn({
      mode: t.mode,
      children: t.children
    }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t
  }

  function Vo(l, t, e) {
    return Xe(t, l.child, null, e), l = vn(t, t.pendingProps), l.flags |= 2, rt(t), t.memoizedState = null, l
  }

  function rh(l, t, e) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (dl) {
        if (a.mode === "hidden") return l = vn(t, a), t.lanes = 536870912, cu(null, l);
        if (Fi(t), (l = El) ? (l = ur(l, Nt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: ue !== null ? {
              id: Mt,
              overflow: Dt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = _s(l), e.return = t, t.child = e, kl = t, El = null)) : l = null, l === null) throw ie(t);
        return t.lanes = 536870912, null
      }
      return vn(t, a)
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Fi(t), u)
        if (t.flags & 256) t.flags &= -257, t = Vo(l, t, e);
        else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (Yl || sa(l, t, e, !1), u = (e & l.childLanes) !== 0, Yl || u) {
        if (a = Nl, a !== null && (i = Hf(a, e), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Ue(l, i), ut(a, l, i), gc;
        An(), t = Vo(l, t, e)
      } else l = n.treeContext, El = Et(i.nextSibling), kl = t, dl = !0, ne = null, Nt = !1, l !== null && Ds(t, l), t = vn(t, a), t.flags |= 4096;
      return t
    }
    return l = Gt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l
  }

  function bn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(o(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816)
    }
  }

  function xc(l, t, e, a, u) {
    return Ye(t), e = Pi(l, t, e, a, void 0, u), a = lc(), l !== null && !Yl ? (tc(l, t, u), Lt(l, t, u)) : (dl && a && Ri(t), t.flags |= 1, wl(l, t, e, u), t.child)
  }

  function Ko(l, t, e, a, u, n) {
    return Ye(t), t.updateQueue = null, e = Ws(t, a, e, u), Js(l), a = lc(), l !== null && !Yl ? (tc(l, t, n), Lt(l, t, n)) : (dl && a && Ri(t), t.flags |= 1, wl(l, t, e, n), t.child)
  }

  function Jo(l, t, e, a, u) {
    if (Ye(t), t.stateNode === null) {
      var n = na,
        i = e.contextType;
      typeof i == "object" && i !== null && (n = Zl(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Li(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Zl(i) : na, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (yc(t, e, i, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && vc.enqueueReplaceState(n, n.state, null), eu(t, a, n, u), tu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        s = ke(e, f);
      n.props = s;
      var y = n.context,
        S = e.contextType;
      i = na, typeof S == "object" && S !== null && (i = Zl(S));
      var N = e.getDerivedStateFromProps;
      S = typeof N == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || y !== i) && Ro(t, n, a, i), fe = !1;
      var v = t.memoizedState;
      n.state = v, eu(t, a, n, u), tu(), y = t.memoizedState, f || v !== y || fe ? (typeof N == "function" && (yc(t, e, N, a), y = t.memoizedState), (s = fe || Co(t, e, s, a, v, y, i)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
    } else {
      n = t.stateNode, Vi(l, t), i = t.memoizedProps, S = ke(e, i), n.props = S, N = t.pendingProps, v = n.context, y = e.contextType, s = na, typeof y == "object" && y !== null && (s = Zl(y)), f = e.getDerivedStateFromProps, (y = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== N || v !== s) && Ro(t, n, a, s), fe = !1, v = t.memoizedState, n.state = v, eu(t, a, n, u), tu();
      var b = t.memoizedState;
      i !== N || v !== b || fe || l !== null && l.dependencies !== null && Fu(l.dependencies) ? (typeof f == "function" && (yc(t, e, f, a), b = t.memoizedState), (S = fe || Co(t, e, S, a, v, b, s) || l !== null && l.dependencies !== null && Fu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, b, s)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), n.props = a, n.state = b, n.context = s, a = S) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1)
    }
    return n = a, bn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Xe(t, l.child, null, u), t.child = Xe(t, null, e, u)) : wl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Lt(l, t, u), l
  }

  function Wo(l, t, e, a) {
    return Re(), t.flags |= 256, wl(l, t, e, a), t.child
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function Sc(l) {
    return {
      baseLanes: l,
      cachePool: qs()
    }
  }

  function jc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ht), l
  }

  function $o(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (dl) {
        if (u ? de(t) : re(), (l = El) ? (l = ur(l, Nt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: ue !== null ? {
              id: Mt,
              overflow: Dt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = _s(l), e.return = t, t.child = e, kl = t, El = null)) : l = null, l === null) throw ie(t);
        return uf(l) ? t.lanes = 32 : t.lanes = 536870912, null
      }
      var f = a.children;
      return a = a.fallback, u ? (re(), u = t.mode, f = gn({
        mode: "hidden",
        children: f
      }, u), a = Ce(a, u, e, null), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = Sc(e), a.childLanes = jc(l, i, e), t.memoizedState = pc, cu(null, a)) : (de(t), Nc(t, f))
    }
    var s = l.memoizedState;
    if (s !== null && (f = s.dehydrated, f !== null)) {
      if (n) t.flags & 256 ? (de(t), t.flags &= -257, t = zc(l, t, e)) : t.memoizedState !== null ? (re(), t.child = l.child, t.flags |= 128, t = null) : (re(), f = a.fallback, u = t.mode, a = gn({
        mode: "visible",
        children: a.children
      }, u), f = Ce(f, u, e, null), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Xe(t, l.child, null, e), a = t.child, a.memoizedState = Sc(e), a.childLanes = jc(l, i, e), t.memoizedState = pc, t = cu(null, a));
      else if (de(t), uf(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(o(419)), a.stack = "", a.digest = i, Wa({
          value: a,
          source: null,
          stack: null
        }), t = zc(l, t, e)
      } else if (Yl || sa(l, t, e, !1), i = (e & l.childLanes) !== 0, Yl || i) {
        if (i = Nl, i !== null && (a = Hf(i, e), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ue(l, a), ut(i, l, a), gc;
        af(f) || An(), t = zc(l, t, e)
      } else af(f) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, El = Et(f.nextSibling), kl = t, dl = !0, ne = null, Nt = !1, l !== null && Ds(t, l), t = Nc(t, a.children), t.flags |= 4096);
      return t
    }
    return u ? (re(), f = a.fallback, u = t.mode, s = l.child, y = s.sibling, a = Gt(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? f = Gt(y, f) : (f = Ce(f, u, e, null), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, cu(null, a), a = t.child, f = l.child.memoizedState, f === null ? f = Sc(e) : (u = f.cachePool, u !== null ? (s = Rl._currentValue, u = u.parent !== s ? {
      parent: s,
      pool: s
    } : u) : u = qs(), f = {
      baseLanes: f.baseLanes | e,
      cachePool: u
    }), a.memoizedState = f, a.childLanes = jc(l, i, e), t.memoizedState = pc, cu(l.child, a)) : (de(t), e = l.child, l = e.sibling, e = Gt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e)
  }

  function Nc(l, t) {
    return t = gn({
      mode: "visible",
      children: t
    }, l.mode), t.return = l, l.child = t
  }

  function gn(l, t) {
    return l = ot(22, l, null, t), l.lanes = 0, l
  }

  function zc(l, t, e) {
    return Xe(t, l.child, null, e), l = Nc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
  }

  function Fo(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Gi(l.return, t, e)
  }

  function Ec(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n)
  }

  function Io(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = Dl.current,
      f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, R(Dl, i), wl(l, t, a, e), a = dl ? Ja : 0, !f && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
      if (l.tag === 13) l.memoizedState !== null && Fo(l, e, t);
      else if (l.tag === 19) Fo(l, e, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue
      }
      if (l === t) break l;
      for (; l.sibling === null;) {
        if (l.return === null || l.return === t) break l;
        l = l.return
      }
      l.sibling.return = l.return, l = l.sibling
    }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null;) l = e.alternate, l !== null && nn(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Ec(t, !1, u, e, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null;) {
          if (l = u.alternate, l !== null && nn(l) === null) {
            t.child = u;
            break
          }
          l = u.sibling, u.sibling = e, e = u, u = l
        }
        Ec(t, !0, e, null, n, a);
        break;
      case "together":
        Ec(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function Lt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), ye |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (sa(l, t, e, !1), (e & t.childLanes) === 0) return null
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, e = Gt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;) l = l.sibling, e = e.sibling = Gt(l, l.pendingProps), e.return = t;
      e.sibling = null
    }
    return t.child
  }

  function Tc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Fu(l)))
  }

  function mh(l, t, e) {
    switch (t.tag) {
      case 3:
        Wl(t, t.stateNode.containerInfo), ce(t, Rl, l.memoizedState.cache), Re();
        break;
      case 27:
      case 5:
        Ca(t);
        break;
      case 4:
        Wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ce(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Fi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (de(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? $o(l, t, e) : (de(t), l = Lt(l, t, e), l !== null ? l.sibling : null);
        de(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (sa(l, t, e, !1), a = (e & t.childLanes) !== 0), u) {
          if (a) return Io(l, t, e);
          t.flags |= 128
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), R(Dl, Dl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, wo(l, t, e, t.pendingProps);
      case 24:
        ce(t, Rl, l.memoizedState.cache)
    }
    return Lt(l, t, e)
  }

  function Po(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Yl = !0;
      else {
        if (!Tc(l, e) && (t.flags & 128) === 0) return Yl = !1, mh(l, t, e);
        Yl = (l.flags & 131072) !== 0
      }
    else Yl = !1, dl && (t.flags & 1048576) !== 0 && Ms(t, Ja, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Be(t.elementType), t.type = l, typeof l == "function") Di(l) ? (a = ke(l, a), t.tag = 1, t = Jo(null, t, l, a, e)) : (t.tag = 0, t = xc(null, t, l, a, e));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === H) {
                t.tag = 11, t = Qo(null, t, l, a, e);
                break l
              } else if (u === I) {
                t.tag = 14, t = ko(null, t, l, a, e);
                break l
              }
            }
            throw t = Kl(l) || l, Error(o(306, t, ""))
          }
        }
        return t;
      case 0:
        return xc(l, t, t.type, t.pendingProps, e);
      case 1:
        return a = t.type, u = ke(a, t.pendingProps), Jo(l, t, a, u, e);
      case 3:
        l: {
          if (Wl(t, t.stateNode.containerInfo), l === null) throw Error(o(387));a = t.pendingProps;
          var n = t.memoizedState;u = n.element,
          Vi(l, t),
          eu(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ce(t, Rl, a), a !== n.cache && Xi(t, [Rl], e, !0), tu(), a = i.element, n.isDehydrated)
            if (n = {
                element: a,
                isDehydrated: !1,
                cache: i.cache
              }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Wo(l, t, a, e);
              break l
            } else if (a !== u) {
            u = pt(Error(o(424)), t), Wa(u), t = Wo(l, t, a, e);
            break l
          } else
            for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, El = Et(l.firstChild), kl = t, dl = !0, ne = null, Nt = !0, e = Zs(t, null, a, e), t.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Re(), a === u) {
              t = Lt(l, t, e);
              break l
            }
            wl(l, t, a, e)
          }
          t = t.child
        }
        return t;
      case 26:
        return bn(l, t), l === null ? (e = or(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : dl || (e = t.type, l = t.pendingProps, a = Rn(nl.current).createElement(e), a[Ql] = t, a[Il] = l, Ll(a, e, l), Gl(a), t.stateNode = a) : t.memoizedState = or(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ca(t), l === null && dl && (a = t.stateNode = cr(t.type, t.pendingProps, nl.current), kl = t, Nt = !0, u = El, pe(t.type) ? (nf = u, El = Et(a.firstChild)) : El = u), wl(l, t, t.pendingProps.children, e), bn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && dl && ((u = a = El) && (a = Zh(a, t.type, t.pendingProps, Nt), a !== null ? (t.stateNode = a, kl = t, El = Et(a.firstChild), Nt = !1, u = !0) : u = !1), u || ie(t)), Ca(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, lf(u, n) ? a = null : i !== null && lf(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Pi(l, t, uh, null, null, e), ju._currentValue = u), bn(l, t), wl(l, t, a, e), t.child;
      case 6:
        return l === null && dl && ((l = e = El) && (e = wh(e, t.pendingProps, Nt), e !== null ? (t.stateNode = e, kl = t, El = null, l = !0) : l = !1), l || ie(t)), null;
      case 13:
        return $o(l, t, e);
      case 4:
        return Wl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Xe(t, null, a, e) : wl(l, t, a, e), t.child;
      case 11:
        return Qo(l, t, t.type, t.pendingProps, e);
      case 7:
        return wl(l, t, t.pendingProps, e), t.child;
      case 8:
        return wl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return wl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return a = t.pendingProps, ce(t, t.type, a.value), wl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, Ye(t), u = Zl(u), a = a(u), t.flags |= 1, wl(l, t, a, e), t.child;
      case 14:
        return ko(l, t, t.type, t.pendingProps, e);
      case 15:
        return Zo(l, t, t.type, t.pendingProps, e);
      case 19:
        return Io(l, t, e);
      case 31:
        return rh(l, t, e);
      case 22:
        return wo(l, t, e, t.pendingProps);
      case 24:
        return Ye(t), a = Zl(Rl), l === null ? (u = Zi(), u === null && (u = Nl, n = Qi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = {
          parent: a,
          cache: u
        }, Li(t), ce(t, Rl, u)) : ((l.lanes & e) !== 0 && (Vi(l, t), eu(t, null, null, e), tu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = {
          parent: a,
          cache: a
        }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ce(t, Rl, a)) : (a = n.cache, ce(t, Rl, a), a !== u.cache && Xi(t, [Rl], e, !0))), wl(l, t, t.pendingProps.children, e), t.child;
      case 29:
        throw t.pendingProps
    }
    throw Error(o(156, t.tag))
  }

  function Vt(l) {
    l.flags |= 4
  }

  function Ac(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Td()) l.flags |= 8192;
      else throw Ge = tn, wi
    } else l.flags &= -16777217
  }

  function ld(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !yr(t))
      if (Td()) l.flags |= 8192;
      else throw Ge = tn, wi
  }

  function xn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Uf() : 536870912, l.lanes |= t, Sa |= t)
  }

  function fu(l, t) {
    if (!dl) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var e = null; t !== null;) t.alternate !== null && (e = t), t = t.sibling;
        e === null ? l.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = l.tail;
        for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
    }
  }

  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t
  }

  function hh(l, t, e) {
    var a = t.pendingProps;
    switch (Hi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), kt(Rl), Ml(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (fa(t) ? Vt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, qi())), Tl(t), null;
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return l === null ? (Vt(t), n !== null ? (Tl(t), ld(t, n)) : (Tl(t), Ac(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Vt(t), Tl(t), ld(t, n)) : (Tl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Vt(t), Tl(t), Ac(t, u, l, a, e)), null;
      case 27:
        if (Ou(t), e = nl.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Tl(t), null
          }
          l = B.current, fa(t) ? Us(t) : (l = cr(u, a, e), t.stateNode = l, Vt(t))
        }
        return Tl(t), null;
      case 5:
        if (Ou(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Tl(t), null
          }
          if (n = B.current, fa(t)) Us(t);
          else {
            var i = Rn(nl.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, {
                      is: a.is
                    }) : i.createElement(u)
                }
            }
            n[Ql] = t, n[Il] = a;
            l: for (i = t.child; i !== null;) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue
              }
              if (i === t) break l;
              for (; i.sibling === null;) {
                if (i.return === null || i.return === t) break l;
                i = i.return
              }
              i.sibling.return = i.return, i = i.sibling
            }
            t.stateNode = n;
            l: switch (Ll(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1
            }
            a && Vt(t)
          }
        }
        return Tl(t), Ac(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (l = nl.current, fa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = kl, u !== null) switch (u.tag) {
              case 27:
              case 5:
                a = u.memoizedProps
            }
            l[Ql] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || $d(l.nodeValue, e)), l || ie(t, !0)
          } else l = Rn(l).createTextNode(a), l[Ql] = t, t.stateNode = l
        }
        return Tl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = fa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Ql] = t
            } else Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), l = !1
          } else e = qi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l) return t.flags & 256 ? (rt(t), t) : (rt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558))
        }
        return Tl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = fa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Ql] = t
            } else Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), u = !1
          } else u = qi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u) return t.flags & 256 ? (rt(t), t) : (rt(t), null)
        }
        return rt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), xn(t, t.updateQueue), Tl(t), null);
      case 4:
        return Ml(), l === null && Wc(t.stateNode.containerInfo), Tl(t), null;
      case 10:
        return kt(t.type), Tl(t), null;
      case 19:
        if (E(Dl), a = t.memoizedState, a === null) return Tl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) fu(a, !1);
          else {
            if (Ol !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null;) {
                if (n = nn(l), n !== null) {
                  for (t.flags |= 128, fu(a, !1), l = n.updateQueue, t.updateQueue = l, xn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;) As(e, l), e = e.sibling;
                  return R(Dl, Dl.current & 1 | 2), dl && Xt(t, a.treeForkCount), t.child
                }
                l = l.sibling
              }
            a.tail !== null && it() > zn && (t.flags |= 128, u = !0, fu(a, !1), t.lanes = 4194304)
          }
        else {
          if (!u)
            if (l = nn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, xn(t, l), fu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !dl) return Tl(t), null
            } else 2 * it() - a.renderingStartTime > zn && e !== 536870912 && (t.flags |= 128, u = !0, fu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n)
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = it(), l.sibling = null, e = Dl.current, R(Dl, u ? e & 1 | 2 : e & 1), dl && Xt(t, a.treeForkCount), l) : (Tl(t), null);
      case 22:
      case 23:
        return rt(t), $i(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t), e = t.updateQueue, e !== null && xn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && E(qe), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), kt(Rl), Tl(t), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(o(156, t.tag))
  }

  function yh(l, t) {
    switch (Hi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return kt(Rl), Ml(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ou(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (rt(t), t.alternate === null) throw Error(o(340));
          Re()
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (rt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Re()
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(Dl), null;
      case 4:
        return Ml(), null;
      case 10:
        return kt(t.type), null;
      case 22:
      case 23:
        return rt(t), $i(), l !== null && E(qe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return kt(Rl), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function td(l, t) {
    switch (Hi(t), t.tag) {
      case 3:
        kt(Rl), Ml();
        break;
      case 26:
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Ml();
        break;
      case 31:
        t.memoizedState !== null && rt(t);
        break;
      case 13:
        rt(t);
        break;
      case 19:
        E(Dl);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        rt(t), $i(), l !== null && E(qe);
        break;
      case 24:
        kt(Rl)
    }
  }

  function su(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            a = n(), i.destroy = a
          }
          e = e.next
        } while (e !== u)
      }
    } catch (f) {
      bl(t, t.return, f)
    }
  }

  function me(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, u = t;
              var s = e,
                y = f;
              try {
                y()
              } catch (S) {
                bl(u, s, S)
              }
            }
          }
          a = a.next
        } while (a !== n)
      }
    } catch (S) {
      bl(t, t.return, S)
    }
  }

  function ed(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Ls(t, e)
      } catch (a) {
        bl(l, l.return, a)
      }
    }
  }

  function ad(l, t, e) {
    e.props = ke(l.type, l.memoizedProps), e.state = l.memoizedState;
    try {
      e.componentWillUnmount()
    } catch (a) {
      bl(l, t, a)
    }
  }

  function ou(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a
      }
    } catch (u) {
      bl(l, t, u)
    }
  }

  function Ut(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function") try {
        a()
      } catch (u) {
        bl(l, t, u)
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
      } else if (typeof e == "function") try {
        e(null)
      } catch (u) {
        bl(l, t, u)
      } else e.current = null
  }

  function ud(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
      }
    }
    catch (u) {
      bl(l, l.return, u)
    }
  }

  function _c(l, t, e) {
    try {
      var a = l.stateNode;
      qh(a, l.type, e, t), a[Il] = t
    } catch (u) {
      bl(l, l.return, u)
    }
  }

  function nd(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && pe(l.type) || l.tag === 4
  }

  function Oc(l) {
    l: for (;;) {
      for (; l.sibling === null;) {
        if (l.return === null || nd(l.return)) return null;
        l = l.return
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
        if (l.tag === 27 && pe(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child
      }
      if (!(l.flags & 2)) return l.stateNode
    }
  }

  function Mc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = qt));
    else if (a !== 4 && (a === 27 && pe(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Mc(l, t, e), l = l.sibling; l !== null;) Mc(l, t, e), l = l.sibling
  }

  function pn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && pe(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (pn(l, t, e), l = l.sibling; l !== null;) pn(l, t, e), l = l.sibling
  }

  function id(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length;) t.removeAttributeNode(u[0]);
      Ll(t, a, e), t[Ql] = l, t[Il] = e
    } catch (n) {
      bl(l, l.return, n)
    }
  }
  var Kt = !1,
    ql = !1,
    Dc = !1,
    cd = typeof WeakSet == "function" ? WeakSet : Set,
    Xl = null;

  function vh(l, t) {
    if (l = l.containerInfo, Ic = Qn, l = gs(l), zi(l)) {
      if ("selectionStart" in l) var e = {
        start: l.selectionStart,
        end: l.selectionEnd
      };
      else l: {
        e = (e = l.ownerDocument) && e.defaultView || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var u = a.anchorOffset,
            n = a.focusNode;
          a = a.focusOffset;
          try {
            e.nodeType, n.nodeType
          } catch {
            e = null;
            break l
          }
          var i = 0,
            f = -1,
            s = -1,
            y = 0,
            S = 0,
            N = l,
            v = null;
          t: for (;;) {
            for (var b; N !== e || u !== 0 && N.nodeType !== 3 || (f = i + u), N !== n || a !== 0 && N.nodeType !== 3 || (s = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (b = N.firstChild) !== null;) v = N, N = b;
            for (;;) {
              if (N === l) break t;
              if (v === e && ++y === u && (f = i), v === n && ++S === a && (s = i), (b = N.nextSibling) !== null) break;
              N = v, v = N.parentNode
            }
            N = b
          }
          e = f === -1 || s === -1 ? null : {
            start: f,
            end: s
          }
        } else e = null
      }
      e = e || {
        start: 0,
        end: 0
      }
    } else e = null;
    for (Pc = {
        focusedElem: l,
        selectionRange: e
      }, Qn = !1, Xl = t; Xl !== null;)
      if (t = Xl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Xl = l;
      else
        for (; Xl !== null;) {
          switch (t = Xl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++) u = l[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var Y = ke(e.type, u);
                  l = a.getSnapshotBeforeUpdate(Y, n), a.__reactInternalSnapshotBeforeUpdate = l
                } catch (J) {
                  bl(e, e.return, J)
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) ef(l);
                else if (e === 1) switch (l.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    ef(l);
                    break;
                  default:
                    l.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163))
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Xl = l;
            break
          }
          Xl = t.return
        }
  }

  function fd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wt(l, e), a & 4 && su(5, e);
        break;
      case 1:
        if (Wt(l, e), a & 4)
          if (l = e.stateNode, t === null) try {
            l.componentDidMount()
          } catch (i) {
            bl(e, e.return, i)
          } else {
            var u = ke(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
            } catch (i) {
              bl(e, e.return, i)
            }
          }
        a & 64 && ed(e), a & 512 && ou(e, e.return);
        break;
      case 3:
        if (Wt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              t = e.child.stateNode;
              break;
            case 1:
              t = e.child.stateNode
          }
          try {
            Ls(l, t)
          } catch (i) {
            bl(e, e.return, i)
          }
        }
        break;
      case 27:
        t === null && a & 4 && id(e);
      case 26:
      case 5:
        Wt(l, e), t === null && a & 4 && ud(e), a & 512 && ou(e, e.return);
        break;
      case 12:
        Wt(l, e);
        break;
      case 31:
        Wt(l, e), a & 4 && dd(l, e);
        break;
      case 13:
        Wt(l, e), a & 4 && rd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Eh.bind(null, e), Lh(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Kt, !a) {
          t = t !== null && t.memoizedState !== null || ql, u = Kt;
          var n = ql;
          Kt = a, (ql = t) && !n ? $t(l, e, (e.subtreeFlags & 8772) !== 0) : Wt(l, e), Kt = u, ql = n
        }
        break;
      case 30:
        break;
      default:
        Wt(l, e)
    }
  }

  function sd(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, sd(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ci(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
  }
  var Al = null,
    lt = !1;

  function Jt(l, t, e) {
    for (e = e.child; e !== null;) od(l, t, e), e = e.sibling
  }

  function od(l, t, e) {
    if (ct && typeof ct.onCommitFiberUnmount == "function") try {
      ct.onCommitFiberUnmount(Ra, e)
    } catch {}
    switch (e.tag) {
      case 26:
        ql || Ut(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        ql || Ut(e, t);
        var a = Al,
          u = lt;
        pe(e.type) && (Al = e.stateNode, lt = !1), Jt(l, t, e), xu(e.stateNode), Al = a, lt = u;
        break;
      case 5:
        ql || Ut(e, t);
      case 6:
        if (a = Al, u = lt, Al = null, Jt(l, t, e), Al = a, lt = u, Al !== null)
          if (lt) try {
            (Al.nodeType === 9 ? Al.body : Al.nodeName === "HTML" ? Al.ownerDocument.body : Al).removeChild(e.stateNode)
          } catch (n) {
            bl(e, t, n)
          } else try {
            Al.removeChild(e.stateNode)
          } catch (n) {
            bl(e, t, n)
          }
        break;
      case 18:
        Al !== null && (lt ? (l = Al, er(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Oa(l)) : er(Al, e.stateNode));
        break;
      case 4:
        a = Al, u = lt, Al = e.stateNode.containerInfo, lt = !0, Jt(l, t, e), Al = a, lt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        me(2, e, t), ql || me(4, e, t), Jt(l, t, e);
        break;
      case 1:
        ql || (Ut(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && ad(e, t, a)), Jt(l, t, e);
        break;
      case 21:
        Jt(l, t, e);
        break;
      case 22:
        ql = (a = ql) || e.memoizedState !== null, Jt(l, t, e), ql = a;
        break;
      default:
        Jt(l, t, e)
    }
  }

  function dd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Oa(l)
      } catch (e) {
        bl(t, t.return, e)
      }
    }
  }

  function rd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Oa(l)
    } catch (e) {
      bl(t, t.return, e)
    }
  }

  function bh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new cd), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new cd), t;
      default:
        throw Error(o(435, l.tag))
    }
  }

  function Sn(l, t) {
    var e = bh(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Th.bind(null, l, a);
        a.then(u, u)
      }
    })
  }

  function tt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          i = t,
          f = i;
        l: for (; f !== null;) {
          switch (f.tag) {
            case 27:
              if (pe(f.type)) {
                Al = f.stateNode, lt = !1;
                break l
              }
              break;
            case 5:
              Al = f.stateNode, lt = !1;
              break l;
            case 3:
            case 4:
              Al = f.stateNode.containerInfo, lt = !0;
              break l
          }
          f = f.return
        }
        if (Al === null) throw Error(o(160));
        od(n, i, u), Al = null, lt = !1, n = u.alternate, n !== null && (n.return = null), u.return = null
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) md(t, l), t = t.sibling
  }
  var _t = null;

  function md(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tt(t, l), et(l), a & 4 && (me(3, l, l.return), su(3, l), me(5, l, l.return));
        break;
      case 1:
        tt(t, l), et(l), a & 512 && (ql || e === null || Ut(e, e.return)), a & 64 && Kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = _t;
        if (tt(t, l), et(l), a & 512 && (ql || e === null || Ut(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type,
                  e = l.memoizedProps,
                  u = u.ownerDocument || u;t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[qa] || n[Ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Ll(n, a, e), n[Ql] = l, Gl(n), a = n;
                      break l;
                    case "link":
                      var i = mr("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(f, 1);
                            break t
                          }
                      }
                      n = u.createElement(a), Ll(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = mr("meta", "content", u).get(a + (e.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(f, 1);
                            break t
                          }
                      }
                      n = u.createElement(a), Ll(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a))
                  }
                  n[Ql] = l,
                  Gl(n),
                  a = n
                }
                l.stateNode = a
              }
          else hr(u, l.type, l.stateNode);
          else l.stateNode = rr(u, a, l.memoizedProps);
          else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? hr(u, l.type, l.stateNode) : rr(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && _c(l, l.memoizedProps, e.memoizedProps)
        }
        break;
      case 27:
        tt(t, l), et(l), a & 512 && (ql || e === null || Ut(e, e.return)), e !== null && a & 4 && _c(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (tt(t, l), et(l), a & 512 && (ql || e === null || Ut(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Ie(u, "")
          } catch (Y) {
            bl(l, l.return, Y)
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, _c(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Dc = !0);
        break;
      case 6:
        if (tt(t, l), et(l), a & 4) {
          if (l.stateNode === null) throw Error(o(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a
          } catch (Y) {
            bl(l, l.return, Y)
          }
        }
        break;
      case 3:
        if (qn = null, u = _t, _t = Hn(t.containerInfo), tt(t, l), _t = u, et(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Oa(t.containerInfo)
        } catch (Y) {
          bl(l, l.return, Y)
        }
        Dc && (Dc = !1, hd(l));
        break;
      case 4:
        a = _t, _t = Hn(l.stateNode.containerInfo), tt(t, l), et(l), _t = a;
        break;
      case 12:
        tt(t, l), et(l);
        break;
      case 31:
        tt(t, l), et(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
        break;
      case 13:
        tt(t, l), et(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Nn = it()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          y = Kt,
          S = ql;
        if (Kt = y || u, ql = S || s, tt(t, l), ql = S, Kt = y, et(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || Kt || ql || Ze(l)), e = null, t = l;;) {
          if (t.tag === 5 || t.tag === 26) {
            if (e === null) {
              s = e = t;
              try {
                if (n = s.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  f = s.stateNode;
                  var N = s.memoizedProps.style,
                    v = N != null && N.hasOwnProperty("display") ? N.display : null;
                  f.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim()
                }
              } catch (Y) {
                bl(s, s.return, Y)
              }
            }
          } else if (t.tag === 6) {
            if (e === null) {
              s = t;
              try {
                s.stateNode.nodeValue = u ? "" : s.memoizedProps
              } catch (Y) {
                bl(s, s.return, Y)
              }
            }
          } else if (t.tag === 18) {
            if (e === null) {
              s = t;
              try {
                var b = s.stateNode;
                u ? ar(b, !0) : ar(s.stateNode, !1)
              } catch (Y) {
                bl(s, s.return, Y)
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === l) break l;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === l) break l;
            e === t && (e = null), t = t.return
          }
          e === t && (e = null), t.sibling.return = t.return, t = t.sibling
        }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Sn(l, e))));
        break;
      case 19:
        tt(t, l), et(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        tt(t, l), et(l)
    }
  }

  function et(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null;) {
          if (nd(a)) {
            e = a;
            break
          }
          a = a.return
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = Oc(l);
            pn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Ie(i, ""), e.flags &= -33);
            var f = Oc(l);
            pn(l, f, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              y = Oc(l);
            Mc(l, y, s);
            break;
          default:
            throw Error(o(161))
        }
      } catch (S) {
        bl(l, l.return, S)
      }
      l.flags &= -3
    }
    t & 4096 && (l.flags &= -4097)
  }

  function hd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null;) {
        var t = l;
        hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
      }
  }

  function Wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) fd(l, t.alternate, t), t = t.sibling
  }

  function Ze(l) {
    for (l = l.child; l !== null;) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, t, t.return), Ze(t);
          break;
        case 1:
          Ut(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && ad(t, t.return, e), Ze(t);
          break;
        case 27:
          xu(t.stateNode);
        case 26:
        case 5:
          Ut(t, t.return), Ze(t);
          break;
        case 22:
          t.memoizedState === null && Ze(t);
          break;
        case 30:
          Ze(t);
          break;
        default:
          Ze(t)
      }
      l = l.sibling
    }
  }

  function $t(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          $t(u, n, e), su(4, n);
          break;
        case 1:
          if ($t(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount()
          } catch (y) {
            bl(a, a.return, y)
          }
          if (a = n, u = a.updateQueue, u !== null) {
            var f = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) ws(s[u], f)
            } catch (y) {
              bl(a, a.return, y)
            }
          }
          e && i & 64 && ed(n), ou(n, n.return);
          break;
        case 27:
          id(n);
        case 26:
        case 5:
          $t(u, n, e), e && a === null && i & 4 && ud(n), ou(n, n.return);
          break;
        case 12:
          $t(u, n, e);
          break;
        case 31:
          $t(u, n, e), e && i & 4 && dd(u, n);
          break;
        case 13:
          $t(u, n, e), e && i & 4 && rd(u, n);
          break;
        case 22:
          n.memoizedState === null && $t(u, n, e), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          $t(u, n, e)
      }
      t = t.sibling
    }
  }

  function Uc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && $a(e))
  }

  function Cc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l))
  }

  function Ot(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) yd(l, t, e, a), t = t.sibling
  }

  function yd(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ot(l, t, e, a), u & 2048 && su(9, t);
        break;
      case 1:
        Ot(l, t, e, a);
        break;
      case 3:
        Ot(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l)));
        break;
      case 12:
        if (u & 2048) {
          Ot(l, t, e, a), l = t.stateNode;
          try {
            var n = t.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" && f(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
          } catch (s) {
            bl(t, t.return, s)
          }
        } else Ot(l, t, e, a);
        break;
      case 31:
        Ot(l, t, e, a);
        break;
      case 13:
        Ot(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ot(l, t, e, a) : du(l, t) : n._visibility & 2 ? Ot(l, t, e, a) : (n._visibility |= 2, ga(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Uc(i, t);
        break;
      case 24:
        Ot(l, t, e, a), u & 2048 && Cc(t.alternate, t);
        break;
      default:
        Ot(l, t, e, a)
    }
  }

  function ga(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
      var n = l,
        i = t,
        f = e,
        s = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ga(n, i, f, s, u), su(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? ga(n, i, f, s, u) : du(n, i) : (S._visibility |= 2, ga(n, i, f, s, u)), u && y & 2048 && Uc(i.alternate, i);
          break;
        case 24:
          ga(n, i, f, s, u), u && y & 2048 && Cc(i.alternate, i);
          break;
        default:
          ga(n, i, f, s, u)
      }
      t = t.sibling
    }
  }

  function du(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            du(e, a), u & 2048 && Uc(a.alternate, a);
            break;
          case 24:
            du(e, a), u & 2048 && Cc(a.alternate, a);
            break;
          default:
            du(e, a)
        }
        t = t.sibling
      }
  }
  var ru = 8192;

  function xa(l, t, e) {
    if (l.subtreeFlags & ru)
      for (l = l.child; l !== null;) vd(l, t, e), l = l.sibling
  }

  function vd(l, t, e) {
    switch (l.tag) {
      case 26:
        xa(l, t, e), l.flags & ru && l.memoizedState !== null && ay(e, _t, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        xa(l, t, e);
        break;
      case 3:
      case 4:
        var a = _t;
        _t = Hn(l.stateNode.containerInfo), xa(l, t, e), _t = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ru, ru = 16777216, xa(l, t, e), ru = a) : xa(l, t, e));
        break;
      default:
        xa(l, t, e)
    }
  }

  function bd(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do t = l.sibling, l.sibling = null, l = t; while (l !== null)
    }
  }

  function mu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Xl = a, xd(a, l)
        }
      bd(l)
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) gd(l), l = l.sibling
  }

  function gd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        mu(l), l.flags & 2048 && me(9, l, l.return);
        break;
      case 3:
        mu(l);
        break;
      case 12:
        mu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, jn(l)) : mu(l);
        break;
      default:
        mu(l)
    }
  }

  function jn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Xl = a, xd(a, l)
        }
      bd(l)
    }
    for (l = l.child; l !== null;) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          me(8, t, t.return), jn(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, jn(t));
          break;
        default:
          jn(t)
      }
      l = l.sibling
    }
  }

  function xd(l, t) {
    for (; Xl !== null;) {
      var e = Xl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          me(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          $a(e.memoizedState.cache)
      }
      if (a = e.child, a !== null) a.return = e, Xl = a;
      else l: for (e = l; Xl !== null;) {
        a = Xl;
        var u = a.sibling,
          n = a.return;
        if (sd(a), a === e) {
          Xl = null;
          break l
        }
        if (u !== null) {
          u.return = n, Xl = u;
          break l
        }
        Xl = n
      }
    }
  }
  var gh = {
      getCacheForType: function(l) {
        var t = Zl(Rl),
          e = t.data.get(l);
        return e === void 0 && (e = l(), t.data.set(l, e)), e
      },
      cacheSignal: function() {
        return Zl(Rl).controller.signal
      }
    },
    xh = typeof WeakMap == "function" ? WeakMap : Map,
    hl = 0,
    Nl = null,
    il = null,
    sl = 0,
    vl = 0,
    mt = null,
    he = !1,
    pa = !1,
    Rc = !1,
    Ft = 0,
    Ol = 0,
    ye = 0,
    we = 0,
    Hc = 0,
    ht = 0,
    Sa = 0,
    hu = null,
    at = null,
    Yc = !1,
    Nn = 0,
    pd = 0,
    zn = 1 / 0,
    En = null,
    ve = null,
    Bl = 0,
    be = null,
    ja = null,
    It = 0,
    qc = 0,
    Bc = null,
    Sd = null,
    yu = 0,
    Gc = null;

  function yt() {
    return (hl & 2) !== 0 && sl !== 0 ? sl & -sl : x.T !== null ? Lc() : Yf()
  }

  function jd() {
    if (ht === 0)
      if ((sl & 536870912) === 0 || dl) {
        var l = Uu;
        Uu <<= 1, (Uu & 3932160) === 0 && (Uu = 262144), ht = l
      } else ht = 536870912;
    return l = dt.current, l !== null && (l.flags |= 32), ht
  }

  function ut(l, t, e) {
    (l === Nl && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null) && (Na(l, 0), ge(l, sl, ht, !1)), Ya(l, e), ((hl & 2) === 0 || l !== Nl) && (l === Nl && ((hl & 2) === 0 && (we |= e), Ol === 4 && ge(l, sl, ht, !1)), Ct(l))
  }

  function Nd(l, t, e) {
    if ((hl & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ha(l, t),
      u = a ? jh(l, t) : Qc(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        pa && !a && ge(l, t, 0, !1);
        break
      } else {
        if (e = l.current.alternate, n && !ph(e)) {
          u = Qc(l, t, !1), n = !1;
          continue
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var f = l;u = hu;
              var s = f.current.memoizedState.isDehydrated;
              if (s && (Na(f, i).flags |= 256), i = Qc(f, i, !1), i !== 2) {
                if (Rc && !s) {
                  f.errorRecoveryDisabledLanes |= n, we |= n, u = 4;
                  break l
                }
                n = at, at = u, n !== null && (at === null ? at = n : at.push.apply(at, n))
              }
              u = i
            }
            if (n = !1, u !== 2) continue
          }
        }
        if (u === 1) {
          Na(l, 0), ge(l, t, 0, !0);
          break
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ge(a, t, ht, !he);
              break l;
            case 2:
              at = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329))
          }
          if ((t & 62914560) === t && (u = Nn + 300 - it(), 10 < u)) {
            if (ge(a, t, ht, !he), Ru(a, 0, !0) !== 0) break l;
            It = t, a.timeoutHandle = lr(zd.bind(null, a, e, at, En, Yc, t, ht, we, Sa, he, n, "Throttled", -0, 0), u);
            break l
          }
          zd(a, e, at, En, Yc, t, ht, we, Sa, he, n, null, -0, 0)
        }
      }
      break
    } while (!0);
    Ct(l)
  }

  function zd(l, t, e, a, u, n, i, f, s, y, S, N, v, b) {
    if (l.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt
      }, vd(t, n, N);
      var Y = (n & 62914560) === n ? Nn - it() : (n & 4194048) === n ? pd - it() : 0;
      if (Y = uy(N, Y), Y !== null) {
        It = n, l.cancelPendingCommit = Y(Ud.bind(null, l, t, n, e, a, u, i, f, s, S, N, null, v, b)), ge(l, n, i, !y);
        return
      }
    }
    Ud(l, t, n, e, a, u, i, f, s)
  }

  function ph(l) {
    for (var t = l;;) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!st(n(), u)) return !1
          } catch {
            return !1
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) return !0;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return !0
  }

  function ge(l, t, e, a) {
    t &= ~Hc, t &= ~we, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u;) {
      var n = 31 - ft(u),
        i = 1 << n;
      a[n] = -1, u &= ~i
    }
    e !== 0 && Cf(l, e, t)
  }

  function Tn() {
    return (hl & 6) === 0 ? (vu(0), !1) : !0
  }

  function Xc() {
    if (il !== null) {
      if (vl === 0) var l = il.return;
      else l = il, Qt = He = null, ec(l), ma = null, Ia = 0, l = il;
      for (; l !== null;) td(l.alternate, l), l = l.return;
      il = null
    }
  }

  function Na(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Xh(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), It = 0, Xc(), Nl = l, il = e = Gt(l.current, null), sl = t, vl = 0, mt = null, he = !1, pa = Ha(l, t), Rc = !1, Sa = ht = Hc = we = ye = Ol = 0, at = hu = null, Yc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a;) {
        var u = 31 - ft(a),
          n = 1 << u;
        t |= l[u], a &= ~n
      }
    return Ft = t, Vu(), e
  }

  function Ed(l, t) {
    tl = null, x.H = iu, t === ra || t === ln ? (t = Xs(), vl = 3) : t === wi ? (t = Xs(), vl = 4) : vl = t === gc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mt = t, il === null && (Ol = 1, yn(l, pt(t, l.current)))
  }

  function Td() {
    var l = dt.current;
    return l === null ? !0 : (sl & 4194048) === sl ? zt === null : (sl & 62914560) === sl || (sl & 536870912) !== 0 ? l === zt : !1
  }

  function Ad() {
    var l = x.H;
    return x.H = iu, l === null ? iu : l
  }

  function _d() {
    var l = x.A;
    return x.A = gh, l
  }

  function An() {
    Ol = 4, he || (sl & 4194048) !== sl && dt.current !== null || (pa = !0), (ye & 134217727) === 0 && (we & 134217727) === 0 || Nl === null || ge(Nl, sl, ht, !1)
  }

  function Qc(l, t, e) {
    var a = hl;
    hl |= 2;
    var u = Ad(),
      n = _d();
    (Nl !== l || sl !== t) && (En = null, Na(l, t)), t = !1;
    var i = Ol;
    l: do try {
        if (vl !== 0 && il !== null) {
          var f = il,
            s = mt;
          switch (vl) {
            case 8:
              Xc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              dt.current === null && (t = !0);
              var y = vl;
              if (vl = 0, mt = null, za(l, f, s, y), e && pa) {
                i = 0;
                break l
              }
              break;
            default:
              y = vl, vl = 0, mt = null, za(l, f, s, y)
          }
        }
        Sh(), i = Ol;
        break
      } catch (S) {
        Ed(l, S)
      }
      while (!0);
      return t && l.shellSuspendCounter++, Qt = He = null, hl = a, x.H = u, x.A = n, il === null && (Nl = null, sl = 0, Vu()), i
  }

  function Sh() {
    for (; il !== null;) Od(il)
  }

  function jh(l, t) {
    var e = hl;
    hl |= 2;
    var a = Ad(),
      u = _d();
    Nl !== l || sl !== t ? (En = null, zn = it() + 500, Na(l, t)) : pa = Ha(l, t);
    l: do try {
        if (vl !== 0 && il !== null) {
          t = il;
          var n = mt;
          t: switch (vl) {
            case 1:
              vl = 0, mt = null, za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Bs(n)) {
                vl = 0, mt = null, Md(t);
                break
              }
              t = function() {
                vl !== 2 && vl !== 9 || Nl !== l || (vl = 7), Ct(l)
              }, n.then(t, t);
              break l;
            case 3:
              vl = 7;
              break l;
            case 4:
              vl = 5;
              break l;
            case 7:
              Bs(n) ? (vl = 0, mt = null, Md(t)) : (vl = 0, mt = null, za(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (il.tag) {
                case 26:
                  i = il.memoizedState;
                case 5:
                case 27:
                  var f = il;
                  if (i ? yr(i) : f.stateNode.complete) {
                    vl = 0, mt = null;
                    var s = f.sibling;
                    if (s !== null) il = s;
                    else {
                      var y = f.return;
                      y !== null ? (il = y, _n(y)) : il = null
                    }
                    break t
                  }
              }
              vl = 0, mt = null, za(l, t, n, 5);
              break;
            case 6:
              vl = 0, mt = null, za(l, t, n, 6);
              break;
            case 8:
              Xc(), Ol = 6;
              break l;
            default:
              throw Error(o(462))
          }
        }
        Nh();
        break
      } catch (S) {
        Ed(l, S)
      }
      while (!0);
      return Qt = He = null, x.H = a, x.A = u, hl = e, il !== null ? 0 : (Nl = null, sl = 0, Vu(), Ol)
  }

  function Nh() {
    for (; il !== null && !Vr();) Od(il)
  }

  function Od(l) {
    var t = Po(l.alternate, l, Ft);
    l.memoizedProps = l.pendingProps, t === null ? _n(l) : il = t
  }

  function Md(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ko(e, t, t.pendingProps, t.type, void 0, sl);
        break;
      case 11:
        t = Ko(e, t, t.pendingProps, t.type.render, t.ref, sl);
        break;
      case 5:
        ec(t);
      default:
        td(e, t), t = il = As(t, Ft), t = Po(e, t, Ft)
    }
    l.memoizedProps = l.pendingProps, t === null ? _n(l) : il = t
  }

  function za(l, t, e, a) {
    Qt = He = null, ec(t), ma = null, Ia = 0;
    var u = t.return;
    try {
      if (dh(l, u, t, e, sl)) {
        Ol = 1, yn(l, pt(e, l.current)), il = null;
        return
      }
    } catch (n) {
      if (u !== null) throw il = u, n;
      Ol = 1, yn(l, pt(e, l.current)), il = null;
      return
    }
    t.flags & 32768 ? (dl || a === 1 ? l = !0 : pa || (sl & 536870912) !== 0 ? l = !1 : (he = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = dt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Dd(t, l)) : _n(t)
  }

  function _n(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Dd(t, he);
        return
      }
      l = t.return;
      var e = hh(t.alternate, t, Ft);
      if (e !== null) {
        il = e;
        return
      }
      if (t = t.sibling, t !== null) {
        il = t;
        return
      }
      il = t = l
    } while (t !== null);
    Ol === 0 && (Ol = 5)
  }

  function Dd(l, t) {
    do {
      var e = yh(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, il = e;
        return
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        il = l;
        return
      }
      il = l = e
    } while (l !== null);
    Ol = 6, il = null
  }

  function Ud(l, t, e, a, u, n, i, f, s) {
    l.cancelPendingCommit = null;
    do On(); while (Bl !== 0);
    if ((hl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Oi, em(l, e, n, i, f, s), l === Nl && (il = Nl = null, sl = 0), ja = t, be = l, It = e, qc = n, Bc = u, Sd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ah(Mu, function() {
          return qd(), null
        })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = x.T, x.T = null, u = U.p, U.p = 2, i = hl, hl |= 4;
        try {
          vh(l, t, e)
        } finally {
          hl = i, U.p = u, x.T = a
        }
      }
      Bl = 1, Cd(), Rd(), Hd()
    }
  }

  function Cd() {
    if (Bl === 1) {
      Bl = 0;
      var l = be,
        t = ja,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = x.T, x.T = null;
        var a = U.p;
        U.p = 2;
        var u = hl;
        hl |= 4;
        try {
          md(t, l);
          var n = Pc,
            i = gs(l.containerInfo),
            f = n.focusedElem,
            s = n.selectionRange;
          if (i !== f && f && f.ownerDocument && bs(f.ownerDocument.documentElement, f)) {
            if (s !== null && zi(f)) {
              var y = s.start,
                S = s.end;
              if (S === void 0 && (S = y), "selectionStart" in f) f.selectionStart = y, f.selectionEnd = Math.min(S, f.value.length);
              else {
                var N = f.ownerDocument || document,
                  v = N && N.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(),
                    Y = f.textContent.length,
                    J = Math.min(s.start, Y),
                    Sl = s.end === void 0 ? J : Math.min(s.end, Y);
                  !b.extend && J > Sl && (i = Sl, Sl = J, J = i);
                  var m = vs(f, J),
                    d = vs(f, Sl);
                  if (m && d && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var h = N.createRange();
                    h.setStart(m.node, m.offset), b.removeAllRanges(), J > Sl ? (b.addRange(h), b.extend(d.node, d.offset)) : (h.setEnd(d.node, d.offset), b.addRange(h))
                  }
                }
              }
            }
            for (N = [], b = f; b = b.parentNode;) b.nodeType === 1 && N.push({
              element: b,
              left: b.scrollLeft,
              top: b.scrollTop
            });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < N.length; f++) {
              var j = N[f];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top
            }
          }
          Qn = !!Ic, Pc = Ic = null
        } finally {
          hl = u, U.p = a, x.T = e
        }
      }
      l.current = t, Bl = 2
    }
  }

  function Rd() {
    if (Bl === 2) {
      Bl = 0;
      var l = be,
        t = ja,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = x.T, x.T = null;
        var a = U.p;
        U.p = 2;
        var u = hl;
        hl |= 4;
        try {
          fd(l, t.alternate, t)
        } finally {
          hl = u, U.p = a, x.T = e
        }
      }
      Bl = 3
    }
  }

  function Hd() {
    if (Bl === 4 || Bl === 3) {
      Bl = 0, Kr();
      var l = be,
        t = ja,
        e = It,
        a = Sd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Bl = 5 : (Bl = 0, ja = be = null, Yd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (ve = null), ni(e), t = t.stateNode, ct && typeof ct.onCommitFiberRoot == "function") try {
        ct.onCommitFiberRoot(Ra, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        t = x.T, u = U.p, U.p = 2, x.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, {
              componentStack: f.stack
            })
          }
        } finally {
          x.T = t, U.p = u
        }
      }(It & 3) !== 0 && On(), Ct(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Gc ? yu++ : (yu = 0, Gc = l) : yu = 0, vu(0)
    }
  }

  function Yd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, $a(t)))
  }

  function On() {
    return Cd(), Rd(), Hd(), qd()
  }

  function qd() {
    if (Bl !== 5) return !1;
    var l = be,
      t = qc;
    qc = 0;
    var e = ni(It),
      a = x.T,
      u = U.p;
    try {
      U.p = 32 > e ? 32 : e, x.T = null, e = Bc, Bc = null;
      var n = be,
        i = It;
      if (Bl = 0, ja = be = null, It = 0, (hl & 6) !== 0) throw Error(o(331));
      var f = hl;
      if (hl |= 4, gd(n.current), yd(n, n.current, i, e), hl = f, vu(0, !1), ct && typeof ct.onPostCommitFiberRoot == "function") try {
        ct.onPostCommitFiberRoot(Ra, n)
      } catch {}
      return !0
    } finally {
      U.p = u, x.T = a, Yd(l, t)
    }
  }

  function Bd(l, t, e) {
    t = pt(e, t), t = bc(l.stateNode, t, 2), l = oe(l, t, 2), l !== null && (Ya(l, 2), Ct(l))
  }

  function bl(l, t, e) {
    if (l.tag === 3) Bd(l, l, e);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Bd(t, l, e);
          break
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ve === null || !ve.has(a))) {
            l = pt(e, l), e = Go(2), a = oe(t, e, 2), a !== null && (Xo(e, a, t, l), Ya(a, 2), Ct(a));
            break
          }
        }
        t = t.return
      }
  }

  function kc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new xh;
      var u = new Set;
      a.set(t, u)
    } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
    u.has(e) || (Rc = !0, u.add(e), l = zh.bind(null, l, t, e), t.then(l, l))
  }

  function zh(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, Nl === l && (sl & e) === e && (Ol === 4 || Ol === 3 && (sl & 62914560) === sl && 300 > it() - Nn ? (hl & 2) === 0 && Na(l, 0) : Hc |= e, Sa === sl && (Sa = 0)), Ct(l)
  }

  function Gd(l, t) {
    t === 0 && (t = Uf()), l = Ue(l, t), l !== null && (Ya(l, t), Ct(l))
  }

  function Eh(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), Gd(l, e)
  }

  function Th(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314))
    }
    a !== null && a.delete(t), Gd(l, e)
  }

  function Ah(l, t) {
    return ti(l, t)
  }
  var Mn = null,
    Ea = null,
    Zc = !1,
    Dn = !1,
    wc = !1,
    xe = 0;

  function Ct(l) {
    l !== Ea && l.next === null && (Ea === null ? Mn = Ea = l : Ea = Ea.next = l), Dn = !0, Zc || (Zc = !0, Oh())
  }

  function vu(l, t) {
    if (!wc && Dn) {
      wc = !0;
      do
        for (var e = !1, a = Mn; a !== null;) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              n = (1 << 31 - ft(42 | l) + 1) - 1, n &= u & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
            }
            n !== 0 && (e = !0, Zd(a, n))
          } else n = sl, n = Ru(a, a === Nl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ha(a, n) || (e = !0, Zd(a, n));
          a = a.next
        }
      while (e);
      wc = !1
    }
  }

  function _h() {
    Xd()
  }

  function Xd() {
    Dn = Zc = !1;
    var l = 0;
    xe !== 0 && Gh() && (l = xe);
    for (var t = it(), e = null, a = Mn; a !== null;) {
      var u = a.next,
        n = Qd(a, t);
      n === 0 ? (a.next = null, e === null ? Mn = u : e.next = u, u === null && (Ea = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Dn = !0)), a = u
    }
    Bl !== 0 && Bl !== 5 || vu(l), xe !== 0 && (xe = 0)
  }

  function Qd(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
      var i = 31 - ft(n),
        f = 1 << i,
        s = u[i];
      s === -1 ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = tm(f, t)) : s <= t && (l.expiredLanes |= f), n &= ~f
    }
    if (t = Nl, e = sl, e = Ru(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && ei(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ha(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ei(a), ni(e)) {
        case 2:
        case 8:
          e = Mf;
          break;
        case 32:
          e = Mu;
          break;
        case 268435456:
          e = Df;
          break;
        default:
          e = Mu
      }
      return a = kd.bind(null, l), e = ti(e, a), l.callbackPriority = t, l.callbackNode = e, t
    }
    return a !== null && a !== null && ei(a), l.callbackPriority = 2, l.callbackNode = null, 2
  }

  function kd(l, t) {
    if (Bl !== 0 && Bl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (On() && l.callbackNode !== e) return null;
    var a = sl;
    return a = Ru(l, l === Nl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (Nd(l, a, t), Qd(l, it()), l.callbackNode != null && l.callbackNode === e ? kd.bind(null, l) : null)
  }

  function Zd(l, t) {
    if (On()) return null;
    Nd(l, t, !0)
  }

  function Oh() {
    Qh(function() {
      (hl & 6) !== 0 ? ti(Of, _h) : Xd()
    })
  }

  function Lc() {
    if (xe === 0) {
      var l = oa;
      l === 0 && (l = Du, Du <<= 1, (Du & 261888) === 0 && (Du = 256)), xe = l
    }
    return xe
  }

  function wd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Bu("" + l)
  }

  function Ld(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l
  }

  function Mh(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = wd((u[Il] || null).action),
        i = a.submitter;
      i && (t = (t = i[Il] || null) ? wd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var f = new ku("action", "action", null, a, u);
      l.push({
        event: f,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (xe !== 0) {
                var s = i ? Ld(u, i) : new FormData(u);
                dc(e, {
                  pending: !0,
                  data: s,
                  method: u.method,
                  action: n
                }, null, s)
              }
            } else typeof n == "function" && (f.preventDefault(), s = i ? Ld(u, i) : new FormData(u), dc(e, {
              pending: !0,
              data: s,
              method: u.method,
              action: n
            }, n, s))
          },
          currentTarget: u
        }]
      })
    }
  }
  for (var Vc = 0; Vc < _i.length; Vc++) {
    var Kc = _i[Vc],
      Dh = Kc.toLowerCase(),
      Uh = Kc[0].toUpperCase() + Kc.slice(1);
    At(Dh, "on" + Uh)
  }
  At(Ss, "onAnimationEnd"), At(js, "onAnimationIteration"), At(Ns, "onAnimationStart"), At("dblclick", "onDoubleClick"), At("focusin", "onFocus"), At("focusout", "onBlur"), At(Jm, "onTransitionRun"), At(Wm, "onTransitionStart"), At($m, "onTransitionCancel"), At(zs, "onTransitionEnd"), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ch = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bu));

  function Vd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              y = f.currentTarget;
            if (f = f.listener, s !== n && u.isPropagationStopped()) break l;
            n = f, u.currentTarget = y;
            try {
              n(u)
            } catch (S) {
              Lu(S)
            }
            u.currentTarget = null, n = s
          } else
            for (i = 0; i < a.length; i++) {
              if (f = a[i], s = f.instance, y = f.currentTarget, f = f.listener, s !== n && u.isPropagationStopped()) break l;
              n = f, u.currentTarget = y;
              try {
                n(u)
              } catch (S) {
                Lu(S)
              }
              u.currentTarget = null, n = s
            }
      }
    }
  }

  function cl(l, t) {
    var e = t[ii];
    e === void 0 && (e = t[ii] = new Set);
    var a = l + "__bubble";
    e.has(a) || (Kd(t, l, 2, !1), e.add(a))
  }

  function Jc(l, t, e) {
    var a = 0;
    t && (a |= 4), Kd(e, l, a, t)
  }
  var Un = "_reactListening" + Math.random().toString(36).slice(2);

  function Wc(l) {
    if (!l[Un]) {
      l[Un] = !0, Gf.forEach(function(e) {
        e !== "selectionchange" && (Ch.has(e) || Jc(e, !1, l), Jc(e, !0, l))
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Un] || (t[Un] = !0, Jc("selectionchange", !1, t))
    }
  }

  function Kd(l, t, e, a) {
    switch (jr(t)) {
      case 2:
        var u = cy;
        break;
      case 8:
        u = fy;
        break;
      default:
        u = df
    }
    e = u.bind(null, t, e, l), u = void 0, !yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1)
  }

  function $c(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (;;) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var f = a.stateNode.containerInfo;
        if (f === u) break;
        if (i === 4)
          for (i = a.return; i !== null;) {
            var s = i.tag;
            if ((s === 3 || s === 4) && i.stateNode.containerInfo === u) return;
            i = i.return
          }
        for (; f !== null;) {
          if (i = Ke(f), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            a = n = i;
            continue l
          }
          f = f.parentNode
        }
      }
      a = a.return
    }
    Ff(function() {
      var y = n,
        S = mi(e),
        N = [];
      l: {
        var v = Es.get(l);
        if (v !== void 0) {
          var b = ku,
            Y = l;
          switch (l) {
            case "keypress":
              if (Xu(e) === 0) break l;
            case "keydown":
            case "keyup":
              b = Tm;
              break;
            case "focusin":
              Y = "focus", b = xi;
              break;
            case "focusout":
              Y = "blur", b = xi;
              break;
            case "beforeblur":
            case "afterblur":
              b = xi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = hm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Om;
              break;
            case Ss:
            case js:
            case Ns:
              b = bm;
              break;
            case zs:
              b = Dm;
              break;
            case "scroll":
            case "scrollend":
              b = rm;
              break;
            case "wheel":
              b = Cm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = xm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = es;
              break;
            case "toggle":
            case "beforetoggle":
              b = Hm
          }
          var J = (t & 4) !== 0,
            Sl = !J && (l === "scroll" || l === "scrollend"),
            m = J ? v !== null ? v + "Capture" : null : v;
          J = [];
          for (var d = y, h; d !== null;) {
            var j = d;
            if (h = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || h === null || m === null || (j = Ga(d, m), j != null && J.push(gu(d, j, h))), Sl) break;
            d = d.return
          }
          0 < J.length && (v = new b(v, Y, null, e, S), N.push({
            event: v,
            listeners: J
          }))
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", v && e !== ri && (Y = e.relatedTarget || e.fromElement) && (Ke(Y) || Y[Ve])) break l;
          if ((b || v) && (v = S.window === S ? S : (v = S.ownerDocument) ? v.defaultView || v.parentWindow : window, b ? (Y = e.relatedTarget || e.toElement, b = y, Y = Y ? Ke(Y) : null, Y !== null && (Sl = _(Y), J = Y.tag, Y !== Sl || J !== 5 && J !== 27 && J !== 6) && (Y = null)) : (b = null, Y = y), b !== Y)) {
            if (J = ls, j = "onMouseLeave", m = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (J = es, j = "onPointerLeave", m = "onPointerEnter", d = "pointer"), Sl = b == null ? v : Ba(b), h = Y == null ? v : Ba(Y), v = new J(j, d + "leave", b, e, S), v.target = Sl, v.relatedTarget = h, j = null, Ke(S) === y && (J = new J(m, d + "enter", Y, e, S), J.target = h, J.relatedTarget = Sl, j = J), Sl = j, b && Y) t: {
              for (J = Rh, m = b, d = Y, h = 0, j = m; j; j = J(j)) h++;j = 0;
              for (var L = d; L; L = J(L)) j++;
              for (; 0 < h - j;) m = J(m),
              h--;
              for (; 0 < j - h;) d = J(d),
              j--;
              for (; h--;) {
                if (m === d || d !== null && m === d.alternate) {
                  J = m;
                  break t
                }
                m = J(m), d = J(d)
              }
              J = null
            }
            else J = null;
            b !== null && Jd(N, v, b, J, !1), Y !== null && Sl !== null && Jd(N, Sl, Y, J, !0)
          }
        }
        l: {
          if (v = y ? Ba(y) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file") var rl = os;
          else if (fs(v))
            if (ds) rl = Lm;
            else {
              rl = Zm;
              var G = km
            }
          else b = v.nodeName,
          !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && di(y.elementType) && (rl = os) : rl = wm;
          if (rl && (rl = rl(l, y))) {
            ss(N, rl, e, S);
            break l
          }
          G && G(l, v, y),
          l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && oi(v, "number", v.value)
        }
        switch (G = y ? Ba(y) : window, l) {
          case "focusin":
            (fs(G) || G.contentEditable === "true") && (ea = G, Ei = y, Ka = null);
            break;
          case "focusout":
            Ka = Ei = ea = null;
            break;
          case "mousedown":
            Ti = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ti = !1, xs(N, e, S);
            break;
          case "selectionchange":
            if (Km) break;
          case "keydown":
          case "keyup":
            xs(N, e, S)
        }
        var el;
        if (Si) l: {
          switch (l) {
            case "compositionstart":
              var ol = "onCompositionStart";
              break l;
            case "compositionend":
              ol = "onCompositionEnd";
              break l;
            case "compositionupdate":
              ol = "onCompositionUpdate";
              break l
          }
          ol = void 0
        }
        else ta ? is(l, e) && (ol = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (ol = "onCompositionStart");ol && (as && e.locale !== "ko" && (ta || ol !== "onCompositionStart" ? ol === "onCompositionEnd" && ta && (el = If()) : (ae = S, vi = "value" in ae ? ae.value : ae.textContent, ta = !0)), G = Cn(y, ol), 0 < G.length && (ol = new ts(ol, l, null, e, S), N.push({
          event: ol,
          listeners: G
        }), el ? ol.data = el : (el = cs(e), el !== null && (ol.data = el)))),
        (el = qm ? Bm(l, e) : Gm(l, e)) && (ol = Cn(y, "onBeforeInput"), 0 < ol.length && (G = new ts("onBeforeInput", "beforeinput", null, e, S), N.push({
          event: G,
          listeners: ol
        }), G.data = el)),
        Mh(N, l, y, e, S)
      }
      Vd(N, t)
    })
  }

  function gu(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    }
  }

  function Cn(l, t) {
    for (var e = t + "Capture", a = []; l !== null;) {
      var u = l,
        n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ga(l, e), u != null && a.unshift(gu(l, u, n)), u = Ga(l, t), u != null && a.push(gu(l, u, n))), l.tag === 3) return a;
      l = l.return
    }
    return []
  }

  function Rh(l) {
    if (l === null) return null;
    do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
    return l || null
  }

  function Jd(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a;) {
      var f = e,
        s = f.alternate,
        y = f.stateNode;
      if (f = f.tag, s !== null && s === a) break;
      f !== 5 && f !== 26 && f !== 27 || y === null || (s = y, u ? (y = Ga(e, n), y != null && i.unshift(gu(e, y, s))) : u || (y = Ga(e, n), y != null && i.push(gu(e, y, s)))), e = e.return
    }
    i.length !== 0 && l.push({
      event: t,
      listeners: i
    })
  }
  var Hh = /\r\n?/g,
    Yh = /\u0000|\uFFFD/g;

  function Wd(l) {
    return (typeof l == "string" ? l : "" + l).replace(Hh, `
`).replace(Yh, "")
  }

  function $d(l, t) {
    return t = Wd(t), Wd(l) === t
  }

  function pl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ie(l, "" + a);
        break;
      case "className":
        Yu(l, "class", a);
        break;
      case "tabIndex":
        Yu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(l, e, a);
        break;
      case "style":
        Wf(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Yu(l, "data", a);
          break
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break
        }
        a = Bu("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else typeof n == "function" && (e === "formAction" ? (t !== "input" && pl(l, t, "name", u.name, u, null), pl(l, t, "formEncType", u.formEncType, u, null), pl(l, t, "formMethod", u.formMethod, u, null), pl(l, t, "formTarget", u.formTarget, u, null)) : (pl(l, t, "encType", u.encType, u, null), pl(l, t, "method", u.method, u, null), pl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break
        }
        a = Bu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "onScroll":
        a != null && cl("scroll", l);
        break;
      case "onScrollEnd":
        a != null && cl("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = e
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break
        }
        e = Bu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        cl("beforetoggle", l), cl("toggle", l), Hu(l, "popover", a);
        break;
      case "xlinkActuate":
        Yt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Yt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Yt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Yt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Yt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Yt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Yt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Yt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Yt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Hu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = om.get(e) || e, Hu(l, e, a))
    }
  }

  function Fc(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Wf(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = e
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
        break;
      case "onScroll":
        a != null && cl("scroll", l);
        break;
      case "onScrollEnd":
        a != null && cl("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xf.hasOwnProperty(e)) l: {
          if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Il] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
            typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
            break l
          }
          e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Hu(l, e, a)
        }
    }
  }

  function Ll(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        cl("error", l), cl("load", l);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null) switch (n) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                u = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                pl(l, t, n, i, e, null)
            }
          } u && pl(l, t, "srcSet", e.srcSet, e, null), a && pl(l, t, "src", e.src, e, null);
        return;
      case "input":
        cl("invalid", l);
        var f = n = i = u = null,
          s = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null) switch (a) {
              case "name":
                u = S;
                break;
              case "type":
                i = S;
                break;
              case "checked":
                s = S;
                break;
              case "defaultChecked":
                y = S;
                break;
              case "value":
                n = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(137, t));
                break;
              default:
                pl(l, t, a, S, e, null)
            }
          } Lf(l, n, f, s, y, i, u, !1);
        return;
      case "select":
        cl("invalid", l), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (f = e[u], f != null)) switch (u) {
            case "value":
              n = f;
              break;
            case "defaultValue":
              i = f;
              break;
            case "multiple":
              a = f;
            default:
              pl(l, t, u, f, e, null)
          }
        t = n, e = i, l.multiple = !!a, t != null ? Fe(l, !!a, t, !1) : e != null && Fe(l, !!a, e, !0);
        return;
      case "textarea":
        cl("invalid", l), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (f = e[i], f != null)) switch (i) {
            case "value":
              a = f;
              break;
            case "defaultValue":
              u = f;
              break;
            case "children":
              n = f;
              break;
            case "dangerouslySetInnerHTML":
              if (f != null) throw Error(o(91));
              break;
            default:
              pl(l, t, i, f, e, null)
          }
        Kf(l, a, u, n);
        return;
      case "option":
        for (s in e) e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : pl(l, t, s, a, e, null));
        return;
      case "dialog":
        cl("beforetoggle", l), cl("toggle", l), cl("cancel", l), cl("close", l);
        break;
      case "iframe":
      case "object":
        cl("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bu.length; a++) cl(bu[a], l);
        break;
      case "image":
        cl("error", l), cl("load", l);
        break;
      case "details":
        cl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        cl("error", l), cl("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && (a = e[y], a != null)) switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              pl(l, t, y, a, e, null)
          }
        return;
      default:
        if (di(t)) {
          for (S in e) e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Fc(l, t, S, a, e, void 0));
          return
        }
    }
    for (f in e) e.hasOwnProperty(f) && (a = e[f], a != null && pl(l, t, f, a, e, null))
  }

  function qh(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          f = null,
          s = null,
          y = null,
          S = null;
        for (b in e) {
          var N = e[b];
          if (e.hasOwnProperty(b) && N != null) switch (b) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = N;
            default:
              a.hasOwnProperty(b) || pl(l, t, b, null, a, N)
          }
        }
        for (var v in a) {
          var b = a[v];
          if (N = e[v], a.hasOwnProperty(v) && (b != null || N != null)) switch (v) {
            case "type":
              n = b;
              break;
            case "name":
              u = b;
              break;
            case "checked":
              y = b;
              break;
            case "defaultChecked":
              S = b;
              break;
            case "value":
              i = b;
              break;
            case "defaultValue":
              f = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(o(137, t));
              break;
            default:
              b !== N && pl(l, t, v, b, a, N)
          }
        }
        si(l, i, f, s, y, S, n, u);
        return;
      case "select":
        b = i = f = v = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null) switch (n) {
            case "value":
              break;
            case "multiple":
              b = s;
            default:
              a.hasOwnProperty(n) || pl(l, t, n, null, a, s)
          }
        for (u in a)
          if (n = a[u], s = e[u], a.hasOwnProperty(u) && (n != null || s != null)) switch (u) {
            case "value":
              v = n;
              break;
            case "defaultValue":
              f = n;
              break;
            case "multiple":
              i = n;
            default:
              n !== s && pl(l, t, u, n, a, s)
          }
        t = f, e = i, a = b, v != null ? Fe(l, !!e, v, !1) : !!a != !!e && (t != null ? Fe(l, !!e, t, !0) : Fe(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (f in e)
          if (u = e[f], e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f)) switch (f) {
            case "value":
              break;
            case "children":
              break;
            default:
              pl(l, t, f, null, a, u)
          }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
            case "value":
              v = u;
              break;
            case "defaultValue":
              b = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(o(91));
              break;
            default:
              u !== n && pl(l, t, i, u, a, n)
          }
        Vf(l, v, b);
        return;
      case "option":
        for (var Y in e) v = e[Y], e.hasOwnProperty(Y) && v != null && !a.hasOwnProperty(Y) && (Y === "selected" ? l.selected = !1 : pl(l, t, Y, null, a, v));
        for (s in a) v = a[s], b = e[s], a.hasOwnProperty(s) && v !== b && (v != null || b != null) && (s === "selected" ? l.selected = v && typeof v != "function" && typeof v != "symbol" : pl(l, t, s, v, a, b));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in e) v = e[J], e.hasOwnProperty(J) && v != null && !a.hasOwnProperty(J) && pl(l, t, J, null, a, v);
        for (y in a)
          if (v = a[y], b = e[y], a.hasOwnProperty(y) && v !== b && (v != null || b != null)) switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (v != null) throw Error(o(137, t));
              break;
            default:
              pl(l, t, y, v, a, b)
          }
        return;
      default:
        if (di(t)) {
          for (var Sl in e) v = e[Sl], e.hasOwnProperty(Sl) && v !== void 0 && !a.hasOwnProperty(Sl) && Fc(l, t, Sl, void 0, a, v);
          for (S in a) v = a[S], b = e[S], !a.hasOwnProperty(S) || v === b || v === void 0 && b === void 0 || Fc(l, t, S, v, a, b);
          return
        }
    }
    for (var m in e) v = e[m], e.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && pl(l, t, m, null, a, v);
    for (N in a) v = a[N], b = e[N], !a.hasOwnProperty(N) || v === b || v == null && b == null || pl(l, t, N, v, a, b)
  }

  function Fd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1
    }
  }

  function Bh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          f = u.duration;
        if (n && f && Fd(i)) {
          for (i = 0, f = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              y = s.startTime;
            if (y > f) break;
            var S = s.transferSize,
              N = s.initiatorType;
            S && Fd(N) && (s = s.responseEnd, i += S * (s < f ? 1 : (f - y) / (s - y)))
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break
        }
      }
      if (0 < l) return t / l / 1e6
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5
  }
  var Ic = null,
    Pc = null;

  function Rn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument
  }

  function Id(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function Pd(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return l === 1 && t === "foreignObject" ? 0 : l
  }

  function lf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var tf = null;

  function Gh() {
    var l = window.event;
    return l && l.type === "popstate" ? l === tf ? !1 : (tf = l, !0) : (tf = null, !1)
  }
  var lr = typeof setTimeout == "function" ? setTimeout : void 0,
    Xh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tr = typeof Promise == "function" ? Promise : void 0,
    Qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof tr < "u" ? function(l) {
      return tr.resolve(null).then(l).catch(kh)
    } : lr;

  function kh(l) {
    setTimeout(function() {
      throw l
    })
  }

  function pe(l) {
    return l === "head"
  }

  function er(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Oa(t);
            return
          }
          a--
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
      else if (e === "html") xu(l.ownerDocument.documentElement);
      else if (e === "head") {
        e = l.ownerDocument.head, xu(e);
        for (var n = e.firstChild; n;) {
          var i = n.nextSibling,
            f = n.nodeName;
          n[qa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i
        }
      } else e === "body" && xu(l.ownerDocument.body);
      e = u
    } while (e);
    Oa(t)
  }

  function ar(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--
        } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a
    } while (e)
  }

  function ef(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ef(e), ci(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue
      }
      l.removeChild(e)
    }
  }

  function Zh(l, t, e, a) {
    for (; l.nodeType === 1;) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
      } else if (a) {
        if (!l[qa]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l
      } else return l;
      if (l = Et(l.nextSibling), l === null) break
    }
    return null
  }

  function wh(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3;)
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Et(l.nextSibling), l === null)) return null;
    return l
  }

  function ur(l, t) {
    for (; l.nodeType !== 8;)
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Et(l.nextSibling), l === null)) return null;
    return l
  }

  function af(l) {
    return l.data === "$?" || l.data === "$~"
  }

  function uf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
  }

  function Lh(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a)
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a
    }
  }

  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null
      }
    }
    return l
  }
  var nf = null;

  function nr(l) {
    l = l.nextSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return Et(l.nextSibling);
          t--
        } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++
      }
      l = l.nextSibling
    }
    return null
  }

  function ir(l) {
    l = l.previousSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--
        } else e !== "/$" && e !== "/&" || t++
      }
      l = l.previousSibling
    }
    return null
  }

  function cr(l, t, e) {
    switch (t = Rn(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451))
    }
  }

  function xu(l) {
    for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
    ci(l)
  }
  var Tt = new Map,
    fr = new Set;

  function Hn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
  }
  var Pt = U.d;
  U.d = {
    f: Vh,
    r: Kh,
    D: Jh,
    C: Wh,
    L: $h,
    m: Fh,
    X: Ph,
    S: Ih,
    M: ly
  };

  function Vh() {
    var l = Pt.f(),
      t = Tn();
    return l || t
  }

  function Kh(l) {
    var t = Je(l);
    t !== null && t.tag === 5 && t.type === "form" ? Eo(t) : Pt.r(l)
  }
  var Ta = typeof document > "u" ? null : document;

  function sr(l, t, e) {
    var a = Ta;
    if (a && typeof t == "string" && t) {
      var u = gt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), fr.has(u) || (fr.add(u), l = {
        rel: l,
        crossOrigin: e,
        href: t
      }, a.querySelector(u) === null && (t = a.createElement("link"), Ll(t, "link", l), Gl(t), a.head.appendChild(t)))
    }
  }

  function Jh(l) {
    Pt.D(l), sr("dns-prefetch", l, null)
  }

  function Wh(l, t) {
    Pt.C(l, t), sr("preconnect", l, t)
  }

  function $h(l, t, e) {
    Pt.L(l, t, e);
    var a = Ta;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + gt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + gt(e.imageSizes) + '"]')) : u += '[href="' + gt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Aa(l);
          break;
        case "script":
          n = _a(l)
      }
      Tt.has(n) || (l = D({
        rel: "preload",
        href: t === "image" && e && e.imageSrcSet ? void 0 : l,
        as: t
      }, e), Tt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(pu(n)) || t === "script" && a.querySelector(Su(n)) || (t = a.createElement("link"), Ll(t, "link", l), Gl(t), a.head.appendChild(t)))
    }
  }

  function Fh(l, t) {
    Pt.m(l, t);
    var e = Ta;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u = 'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _a(l)
      }
      if (!Tt.has(n) && (l = D({
          rel: "modulepreload",
          href: l
        }, t), Tt.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Su(n))) return
        }
        a = e.createElement("link"), Ll(a, "link", l), Gl(a), e.head.appendChild(a)
      }
    }
  }

  function Ih(l, t, e) {
    Pt.S(l, t, e);
    var a = Ta;
    if (a && l) {
      var u = We(a).hoistableStyles,
        n = Aa(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var f = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(pu(n))) f.loading = 5;
        else {
          l = D({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, e), (e = Tt.get(n)) && cf(l, e);
          var s = i = a.createElement("link");
          Gl(s), Ll(s, "link", l), s._p = new Promise(function(y, S) {
            s.onload = y, s.onerror = S
          }), s.addEventListener("load", function() {
            f.loading |= 1
          }), s.addEventListener("error", function() {
            f.loading |= 2
          }), f.loading |= 4, Yn(i, t, a)
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, u.set(n, i)
      }
    }
  }

  function Ph(l, t) {
    Pt.X(l, t);
    var e = Ta;
    if (e && l) {
      var a = We(e).hoistableScripts,
        u = _a(l),
        n = a.get(u);
      n || (n = e.querySelector(Su(u)), n || (l = D({
        src: l,
        async: !0
      }, t), (t = Tt.get(u)) && ff(l, t), n = e.createElement("script"), Gl(n), Ll(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n))
    }
  }

  function ly(l, t) {
    Pt.M(l, t);
    var e = Ta;
    if (e && l) {
      var a = We(e).hoistableScripts,
        u = _a(l),
        n = a.get(u);
      n || (n = e.querySelector(Su(u)), n || (l = D({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = Tt.get(u)) && ff(l, t), n = e.createElement("script"), Gl(n), Ll(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n))
    }
  }

  function or(l, t, e, a) {
    var u = (u = nl.current) ? Hn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Aa(e.href), e = We(u).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Aa(e.href);
          var n = We(u).hoistableStyles,
            i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, n.set(l, i), (n = u.querySelector(pu(l))) && !n._p && (i.instance = n, i.state.loading = 5), Tt.has(l) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, Tt.set(l, e), n || ty(u, l, e, i.state))), t && a === null) throw Error(o(528, ""));
          return i
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(e), e = We(u).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(o(444, l))
    }
  }

  function Aa(l) {
    return 'href="' + gt(l) + '"'
  }

  function pu(l) {
    return 'link[rel="stylesheet"][' + l + "]"
  }

  function dr(l) {
    return D({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    })
  }

  function ty(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1
    }), t.addEventListener("error", function() {
      return a.loading |= 2
    }), Ll(t, "link", e), Gl(t), l.head.appendChild(t))
  }

  function _a(l) {
    return '[src="' + gt(l) + '"]'
  }

  function Su(l) {
    return "script[async]" + l
  }

  function rr(l, t, e) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + gt(e.href) + '"]');
        if (a) return t.instance = a, Gl(a), a;
        var u = D({}, e, {
          "data-href": e.href,
          "data-precedence": e.precedence,
          href: null,
          precedence: null
        });
        return a = (l.ownerDocument || l).createElement("style"), Gl(a), Ll(a, "style", u), Yn(a, e.precedence, l), t.instance = a;
      case "stylesheet":
        u = Aa(e.href);
        var n = l.querySelector(pu(u));
        if (n) return t.state.loading |= 4, t.instance = n, Gl(n), n;
        a = dr(e), (u = Tt.get(u)) && cf(a, u), n = (l.ownerDocument || l).createElement("link"), Gl(n);
        var i = n;
        return i._p = new Promise(function(f, s) {
          i.onload = f, i.onerror = s
        }), Ll(n, "link", a), t.state.loading |= 4, Yn(n, e.precedence, l), t.instance = n;
      case "script":
        return n = _a(e.src), (u = l.querySelector(Su(n))) ? (t.instance = u, Gl(u), u) : (a = e, (u = Tt.get(n)) && (a = D({}, e), ff(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Gl(u), Ll(u, "link", a), l.head.appendChild(u), t.instance = u);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type))
    } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Yn(a, e.precedence, l));
    return t.instance
  }

  function Yn(l, t, e) {
    for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var f = a[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild))
  }

  function cf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
  }

  function ff(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
  }
  var qn = null;

  function mr(l, t, e) {
    if (qn === null) {
      var a = new Map,
        u = qn = new Map;
      u.set(e, a)
    } else u = qn, a = u.get(e), a || (a = new Map, u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[qa] || n[Ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n])
      }
    }
    return a
  }

  function hr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
  }

  function ey(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
    }
    return !1
  }

  function yr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
  }

  function ay(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Aa(a.href),
          n = t.querySelector(pu(u));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Bn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Gl(n);
          return
        }
        n = t.ownerDocument || t, a = dr(a), (u = Tt.get(u)) && cf(a, u), n = n.createElement("link"), Gl(n);
        var i = n;
        i._p = new Promise(function(f, s) {
          i.onload = f, i.onerror = s
        }), Ll(n, "link", a), e.instance = n
      }
      l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Bn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e))
    }
  }
  var sf = 0;

  function uy(l, t) {
    return l.stylesheets && l.count === 0 && Xn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Xn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n()
        }
      }, 6e4 + t);
      0 < l.imgBytes && sf === 0 && (sf = 62500 * Bh());
      var u = setTimeout(function() {
        if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Xn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n()
        }
      }, (l.imgBytes > sf ? 50 : 800) + t);
      return l.unsuspend = e,
        function() {
          l.unsuspend = null, clearTimeout(a), clearTimeout(u)
        }
    } : null
  }

  function Bn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l()
      }
    }
  }
  var Gn = null;

  function Xn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Gn = new Map, t.forEach(ny, l), Gn = null, Bn.call(l))
  }

  function ny(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Gn.get(l);
      if (e) var a = e.get(null);
      else {
        e = new Map, Gn.set(l, e);
        for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i)
        }
        a && e.set(null, a)
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Bn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4
    }
  }
  var ju = {
    $$typeof: ul,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };

  function iy(l, t, e, a, u, n, i, f, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ai(0), this.hiddenUpdates = ai(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = new Map
  }

  function vr(l, t, e, a, u, n, i, f, s, y, S, N) {
    return l = new iy(l, t, e, i, s, y, S, N, f), t = 1, n === !0 && (t |= 24), n = ot(3, null, null, t), l.current = n, n.stateNode = l, t = Qi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Li(n), l
  }

  function br(l) {
    return l ? (l = na, l) : na
  }

  function gr(l, t, e, a, u, n) {
    u = br(u), a.context === null ? a.context = u : a.pendingContext = u, a = se(t), a.payload = {
      element: e
    }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = oe(l, a, t), e !== null && (ut(e, l, t), lu(e, l, t))
  }

  function xr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t
    }
  }

  function of(l, t) {
    xr(l, t), (l = l.alternate) && xr(l, t)
  }

  function pr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ue(l, 67108864);
      t !== null && ut(t, l, 67108864), of(l, 67108864)
    }
  }

  function Sr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = yt();
      t = ui(t);
      var e = Ue(l, t);
      e !== null && ut(e, l, t), of(l, t)
    }
  }
  var Qn = !0;

  function cy(l, t, e, a) {
    var u = x.T;
    x.T = null;
    var n = U.p;
    try {
      U.p = 2, df(l, t, e, a)
    } finally {
      U.p = n, x.T = u
    }
  }

  function fy(l, t, e, a) {
    var u = x.T;
    x.T = null;
    var n = U.p;
    try {
      U.p = 8, df(l, t, e, a)
    } finally {
      U.p = n, x.T = u
    }
  }

  function df(l, t, e, a) {
    if (Qn) {
      var u = rf(a);
      if (u === null) $c(l, t, a, kn, e), Nr(l, a);
      else if (oy(u, l, t, e, a)) a.stopPropagation();
      else if (Nr(l, a), t & 4 && -1 < sy.indexOf(l)) {
        for (; u !== null;) {
          var n = Je(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var i = Ae(n.pendingLanes);
                if (i !== 0) {
                  var f = n;
                  for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                    var s = 1 << 31 - ft(i);
                    f.entanglements[1] |= s, i &= ~s
                  }
                  Ct(n), (hl & 6) === 0 && (zn = it() + 500, vu(0))
                }
              }
              break;
            case 31:
            case 13:
              f = Ue(n, 2), f !== null && ut(f, n, 2), Tn(), of(n, 2)
          }
          if (n = rf(a), n === null && $c(l, t, a, kn, e), n === u) break;
          u = n
        }
        u !== null && a.stopPropagation()
      } else $c(l, t, a, null, e)
    }
  }

  function rf(l) {
    return l = mi(l), mf(l)
  }
  var kn = null;

  function mf(l) {
    if (kn = null, l = Ke(l), l !== null) {
      var t = _(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = C(t), l !== null) return l;
          l = null
        } else if (e === 31) {
          if (l = M(t), l !== null) return l;
          l = null
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null
        } else t !== l && (l = null)
      }
    }
    return kn = l, null
  }

  function jr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Jr()) {
          case Of:
            return 2;
          case Mf:
            return 8;
          case Mu:
          case Wr:
            return 32;
          case Df:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var hf = !1,
    Se = null,
    je = null,
    Ne = null,
    Nu = new Map,
    zu = new Map,
    ze = [],
    sy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function Nr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Se = null;
        break;
      case "dragenter":
      case "dragleave":
        je = null;
        break;
      case "mouseover":
      case "mouseout":
        Ne = null;
        break;
      case "pointerover":
      case "pointerout":
        Nu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zu.delete(t.pointerId)
    }
  }

  function Eu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = Je(t), t !== null && pr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l)
  }

  function oy(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Se = Eu(Se, l, t, e, a, u), !0;
      case "dragenter":
        return je = Eu(je, l, t, e, a, u), !0;
      case "mouseover":
        return Ne = Eu(Ne, l, t, e, a, u), !0;
      case "pointerover":
        var n = u.pointerId;
        return Nu.set(n, Eu(Nu.get(n) || null, l, t, e, a, u)), !0;
      case "gotpointercapture":
        return n = u.pointerId, zu.set(n, Eu(zu.get(n) || null, l, t, e, a, u)), !0
    }
    return !1
  }

  function zr(l) {
    var t = Ke(l.target);
    if (t !== null) {
      var e = _(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = C(e), t !== null) {
            l.blockedOn = t, qf(l.priority, function() {
              Sr(e)
            });
            return
          }
        } else if (t === 31) {
          if (t = M(e), t !== null) {
            l.blockedOn = t, qf(l.priority, function() {
              Sr(e)
            });
            return
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return
        }
      }
    }
    l.blockedOn = null
  }

  function Zn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length;) {
      var e = rf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ri = a, e.target.dispatchEvent(a), ri = null
      } else return t = Je(e), t !== null && pr(t), l.blockedOn = e, !1;
      t.shift()
    }
    return !0
  }

  function Er(l, t, e) {
    Zn(l) && e.delete(t)
  }

  function dy() {
    hf = !1, Se !== null && Zn(Se) && (Se = null), je !== null && Zn(je) && (je = null), Ne !== null && Zn(Ne) && (Ne = null), Nu.forEach(Er), zu.forEach(Er)
  }

  function wn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, hf || (hf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, dy)))
  }
  var Ln = null;

  function Tr(l) {
    Ln !== l && (Ln = l, p.unstable_scheduleCallback(p.unstable_NormalPriority, function() {
      Ln === l && (Ln = null);
      for (var t = 0; t < l.length; t += 3) {
        var e = l[t],
          a = l[t + 1],
          u = l[t + 2];
        if (typeof a != "function") {
          if (mf(a || e) === null) continue;
          break
        }
        var n = Je(e);
        n !== null && (l.splice(t, 3), t -= 3, dc(n, {
          pending: !0,
          data: u,
          method: e.method,
          action: a
        }, a, u))
      }
    }))
  }

  function Oa(l) {
    function t(s) {
      return wn(s, l)
    }
    Se !== null && wn(Se, l), je !== null && wn(je, l), Ne !== null && wn(Ne, l), Nu.forEach(t), zu.forEach(t);
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null)
    }
    for (; 0 < ze.length && (e = ze[0], e.blockedOn === null);) zr(e), e.blockedOn === null && ze.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Il] || null;
        if (typeof n == "function") i || Tr(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Il] || null) f = i.formAction;
            else if (mf(u) !== null) continue
          } else f = i.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), Tr(e)
        }
      }
  }

  function Ar() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i
          })
        },
        focusReset: "manual",
        scroll: "manual"
      })
    }

    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20)
    }

    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        })
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100),
        function() {
          a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null)
        }
    }
  }

  function yf(l) {
    this._internalRoot = l
  }
  Vn.prototype.render = yf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current,
      a = yt();
    gr(e, a, l, t, null, null)
  }, Vn.prototype.unmount = yf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      gr(l.current, 2, null, l, null, null), Tn(), t[Ve] = null
    }
  };

  function Vn(l) {
    this._internalRoot = l
  }
  Vn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Yf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++);
      ze.splice(e, 0, l), e === 0 && zr(l)
    }
  };
  var _r = T.version;
  if (_r !== "19.2.6") throw Error(o(527, _r, "19.2.6"));
  U.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = g(t), l = l !== null ? Q(l) : null, l = l === null ? null : l.stateNode, l
  };
  var ry = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kn.isDisabled && Kn.supportsFiber) try {
      Ra = Kn.inject(ry), ct = Kn
    } catch {}
  }
  return Au.createRoot = function(l, t) {
    if (!z(l)) throw Error(o(299));
    var e = !1,
      a = "",
      u = Ho,
      n = Yo,
      i = qo;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = vr(l, 1, !1, null, null, e, a, null, u, n, i, Ar), l[Ve] = t.current, Wc(l), new yf(t)
  }, Au.hydrateRoot = function(l, t, e) {
    if (!z(l)) throw Error(o(299));
    var a = !1,
      u = "",
      n = Ho,
      i = Yo,
      f = qo,
      s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = vr(l, 1, !0, t, e ?? null, a, u, s, n, i, f, Ar), t.context = br(null), e = t.current, a = yt(), a = ui(a), u = se(a), u.callback = null, oe(e, u, a), e = a, t.current.lanes = e, Ya(t, e), Ct(t), l[Ve] = t.current, Wc(l), new Vn(t)
  }, Au.version = "19.2.6", Au
}
var Br;

function jy() {
  if (Br) return gf.exports;
  Br = 1;

  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)
    } catch (T) {
      console.error(T)
    }
  }
  return p(), gf.exports = Sy(), gf.exports
}
var Ny = jy();
const Da = [{
    id: "lambs",
    emoji: "🐑",
    titleEn: "Lambs",
    titleRu: "Ягнята",
    mission: "feed the lambs",
    missionRu: "покормить ягнят",
    image: "./images/zone-lambs.jpg",
    activity: 2
  }, {
    id: "strawberries",
    emoji: "🍓",
    titleEn: "Strawberries",
    titleRu: "Клубника",
    mission: "pick some strawberries",
    missionRu: "собрать клубнику",
    image: "./images/zone-strawberries.jpg",
    activity: 3
  }, {
    id: "goats",
    emoji: "🐐",
    titleEn: "Goats",
    titleRu: "Козы",
    mission: "see the goats",
    missionRu: "посмотреть на коз",
    image: "./images/zone-goats.jpg",
    activity: 4
  }, {
    id: "tractor",
    emoji: "🚜",
    titleEn: "Tractor",
    titleRu: "Трактор",
    mission: "ride on a tractor",
    missionRu: "прокатиться на тракторе",
    image: "./images/zone-tractor.jpg",
    activity: 5
  }],
  Gr = [{
    id: 1,
    key: "welcome",
    titleEn: "Welcome Gate",
    titleRu: "Калитка приветствия",
    minutes: "0–6 мин",
    goal: "Собери диалог-модель из карточек",
    stamp: null
  }, {
    id: 2,
    key: "keys",
    titleEn: "Activity Keys",
    titleRu: "Ключи активностей",
    minutes: "6–14 мин",
    goal: "Выбери правильный вопрос и открой печать «Ягнята»",
    stamp: "lambs"
  }, {
    id: 3,
    key: "response",
    titleEn: "Response Lab",
    titleRu: "Лаборатория ответов",
    minutes: "14–21 мин",
    goal: "Сопоставь приглашение и ответ — печать «Клубника»",
    stamp: "strawberries"
  }, {
    id: 4,
    key: "unjumble",
    titleEn: "Build the Sentence",
    titleRu: "Собери предложение",
    minutes: "21–29 мин",
    goal: "Составь 8 фраз по порядку — печать «Козы»",
    stamp: "goats"
  }, {
    id: 5,
    key: "choice",
    titleEn: "Choice Mission",
    titleRu: "Миссия выбора",
    minutes: "29–37 мин",
    goal: "Выбери зону и построй приглашение — печать «Трактор»",
    stamp: "tractor"
  }, {
    id: 6,
    key: "final",
    titleEn: "Final Farm Tour",
    titleRu: "Финальная экскурсия",
    minutes: "37–45 мин",
    goal: "Заполни пропуски в диалоге на 8 реплик",
    stamp: null
  }],
  Jn = [{
    title: "Структура",
    badge: "1",
    body: [{
      en: "Would you like to + verb?",
      ru: "вежливое приглашение сделать действие"
    }, {
      en: "I’d like to + verb.",
      ru: "I would like to — вежливое желание"
    }],
    note: "После to всегда идёт глагол в начальной форме: feed, pick, see, ride."
  }, {
    title: "Примеры с фермы",
    badge: "2",
    body: [{
      en: "Would you like to feed the lambs?",
      ru: "Хочешь покормить ягнят?"
    }, {
      en: "Would you like to pick some strawberries?",
      ru: "Хочешь собрать клубнику?"
    }, {
      en: "Would you like to see the goats?",
      ru: "Хочешь посмотреть на коз?"
    }, {
      en: "I’d like to ride on a tractor.",
      ru: "Я бы хотел прокатиться на тракторе."
    }]
  }, {
    title: "Ответы",
    badge: "3",
    body: [{
      en: "Yes, please.",
      ru: "Да, пожалуйста."
    }, {
      en: "Yes, please. I’d like to…",
      ru: "Да, пожалуйста. Я бы хотел…"
    }, {
      en: "No, thanks.",
      ru: "Нет, спасибо."
    }, {
      en: "No, thanks. I don’t like…",
      ru: "Нет, спасибо. Я не люблю…"
    }]
  }, {
    title: "Зачем так говорим",
    badge: "4",
    note: "Would you like to…? = вежливое приглашение сделать что-то. Это мягче и добрее, чем Do you want to…?",
    extra: "На ферме гид всегда предлагает гостям активности вежливо."
  }, {
    title: "Еда или действие?",
    badge: "5",
    compare: [{
      kind: "еда / вещь",
      en: "Would you like some strawberries?",
      ru: "some + существительное (клубника)"
    }, {
      kind: "действие",
      en: "Would you like to pick some strawberries?",
      ru: "to + глагол (собрать)"
    }]
  }],
  Ma = [{
    id: "w1",
    speaker: "Guide",
    speakerRu: "Гид",
    text: "Hello! Welcome to City Farm. I'm your Junior Farm Guide."
  }, {
    id: "w2",
    speaker: "Maya",
    speakerRu: "Майя",
    text: "Hello! It's so beautiful here!"
  }, {
    id: "w3",
    speaker: "Guide",
    speakerRu: "Гид",
    text: "Would you like to feed the lambs?"
  }, {
    id: "w4",
    speaker: "Maya",
    speakerRu: "Майя",
    text: "Yes, please! I like lambs."
  }, {
    id: "w5",
    speaker: "Guide",
    speakerRu: "Гид",
    text: "Would you like to pick some strawberries?"
  }, {
    id: "w6",
    speaker: "Leo",
    speakerRu: "Лео",
    text: "Yes, please. I'd like to pick some strawberries."
  }, {
    id: "w7",
    speaker: "Leo",
    speakerRu: "Лео",
    text: "I'd like to ride on a tractor too!"
  }, {
    id: "w8",
    speaker: "Guide",
    speakerRu: "Гид",
    text: "Great! Let's start our tour."
  }],
  Wn = [{
    id: "k1",
    image: "./images/zone-lambs.jpg",
    promptRu: "Выбери правильный вопрос про ягнят.",
    options: ["Would you like to feed the lambs?", "Would you like some lambs?", "Would you like feed the lambs?"],
    answer: 0,
    explain: "Действие = to + verb. Feed — глагол, поэтому: Would you like to feed…?"
  }, {
    id: "k2",
    image: "./images/zone-strawberries.jpg",
    promptRu: "Выбери правильный вопрос про клубнику (действие).",
    options: ["Would you like pick strawberries?", "Would you like to pick some strawberries?", "Would you like to strawberries?"],
    answer: 1,
    explain: "Нужен to перед глаголом pick."
  }, {
    id: "k3",
    image: "./images/zone-goats.jpg",
    promptRu: "Выбери правильный вопрос про коз.",
    options: ["Would you like see the goats?", "Would you like some goats?", "Would you like to see the goats?"],
    answer: 2,
    explain: "See — действие, поэтому to see."
  }, {
    id: "k4",
    image: "./images/zone-tractor.jpg",
    promptRu: "Выбери правильный вопрос про трактор.",
    options: ["Would you like to ride on a tractor?", "Would you like ride a tractor?", "I'd like ride on a tractor?"],
    answer: 0,
    explain: "Вопрос гостю: Would you like to + verb."
  }, {
    id: "k5",
    image: "./images/zone-lambs.jpg",
    promptRu: "Гид: Would you like to feed the lambs? Что ответит гость?",
    options: ["Yes, please. I'd like to feed the lambs.", "Yes, I like. Feed the lambs.", "Yes please I like feed."],
    answer: 0,
    explain: "Вежливый ответ: Yes, please. I'd like to + verb."
  }, {
    id: "k6",
    image: "./images/zone-strawberries.jpg",
    promptRu: "Это еда или действие? «Would you like some strawberries?»",
    options: ["Еда / вещь (noun)", "Действие (verb)"],
    answer: 0,
    explain: "some strawberries — это еда, без to + verb."
  }, {
    id: "k7",
    image: "./images/zone-goats.jpg",
    promptRu: "Это еда или действие? «Would you like to see the goats?»",
    options: ["Еда / вещь (noun)", "Действие (verb)"],
    answer: 1,
    explain: "to see — глагол, это приглашение к действию."
  }, {
    id: "k8",
    image: "./images/zone-tractor.jpg",
    promptRu: "Вставь слово: I'd like _____ ride on a tractor.",
    options: ["to", "too", "two"],
    answer: 0,
    explain: "I'd like to + infinitive. to — частица, не too и не two."
  }],
  jf = [{
    id: "m1",
    left: "Would you like to feed the lambs?",
    right: "Yes, please. I like lambs."
  }, {
    id: "m2",
    left: "Would you like to pick some strawberries?",
    right: "Yes, please. I'd like to pick some strawberries."
  }, {
    id: "m3",
    left: "Would you like to see the goats?",
    right: "No, thanks. I don't like goats."
  }, {
    id: "m4",
    left: "Would you like to ride on a tractor?",
    right: "Yes, please! That's fun!"
  }, {
    id: "m5",
    left: "Would you like some strawberries?",
    right: "Yes, please. I'm hungry."
  }, {
    id: "m6",
    left: "Would you like to help on the farm?",
    right: "No, thanks. I'm tired."
  }, {
    id: "m7",
    left: "Would you like some milk?",
    right: "No, thanks. I don't like milk."
  }, {
    id: "m8",
    left: "Would you like to take a photo?",
    right: "Yes, please. I'd like to take a photo."
  }],
  _u = [{
    id: "u1",
    words: ["Would", "you", "like", "to", "feed", "the", "lambs", "?"],
    answer: "Would you like to feed the lambs?",
    hintRu: "Приглашение покормить ягнят"
  }, {
    id: "u2",
    words: ["I'd", "like", "to", "pick", "some", "strawberries", "."],
    answer: "I'd like to pick some strawberries.",
    hintRu: "Желание собрать клубнику"
  }, {
    id: "u3",
    words: ["Would", "you", "like", "to", "see", "the", "goats", "?"],
    answer: "Would you like to see the goats?",
    hintRu: "Приглашение посмотреть на коз"
  }, {
    id: "u4",
    words: ["I'd", "like", "to", "ride", "on", "a", "tractor", "."],
    answer: "I'd like to ride on a tractor.",
    hintRu: "Желание прокатиться на тракторе"
  }, {
    id: "u5",
    words: ["No,", "thanks.", "I", "don't", "like", "goats", "."],
    answer: "No, thanks. I don't like goats.",
    hintRu: "Вежливый отказ"
  }, {
    id: "u6",
    words: ["Yes,", "please.", "I'd", "like", "to", "feed", "the", "lambs", "."],
    answer: "Yes, please. I'd like to feed the lambs.",
    hintRu: "Согласие + I'd like to"
  }, {
    id: "u7",
    words: ["Would", "you", "like", "some", "strawberries", "?"],
    answer: "Would you like some strawberries?",
    hintRu: "Предложение еды (без to)"
  }, {
    id: "u8",
    words: ["I'd", "like", "to", "take", "a", "photo", "of", "the", "farm", "."],
    answer: "I'd like to take a photo of the farm.",
    hintRu: "Сфотографировать ферму"
  }],
  Nf = [{
    id: "lambs",
    titleRu: "Загон ягнят",
    titleEn: "Lamb Pen",
    image: "./images/zone-lambs.jpg",
    verb: "feed the lambs",
    question: "Would you like to feed the lambs?",
    yes: "Yes, please. I'd like to feed the lambs.",
    no: "No, thanks. I don't like lambs."
  }, {
    id: "strawberries",
    titleRu: "Клубничное поле",
    titleEn: "Strawberry Field",
    image: "./images/zone-strawberries.jpg",
    verb: "pick some strawberries",
    question: "Would you like to pick some strawberries?",
    yes: "Yes, please. I'd like to pick some strawberries.",
    no: "No, thanks. I don't like strawberries."
  }, {
    id: "goats",
    titleRu: "Холм с козами",
    titleEn: "Goat Hill",
    image: "./images/zone-goats.jpg",
    verb: "see the goats",
    question: "Would you like to see the goats?",
    yes: "Yes, please. I'd like to see the goats.",
    no: "No, thanks. I don't like goats."
  }, {
    id: "tractor",
    titleRu: "Дорога с трактором",
    titleEn: "Tractor Path",
    image: "./images/zone-tractor.jpg",
    verb: "ride on a tractor",
    question: "Would you like to ride on a tractor?",
    yes: "Yes, please. I'd like to ride on a tractor.",
    no: "No, thanks. I don't like tractors."
  }],
  zy = ["Would", "you", "like", "to"],
  Le = [{
    id: "f1",
    speaker: "Guide",
    speakerRu: "Гид",
    before: "Hello! ",
    after: " you like to start our farm tour?",
    answer: "Would"
  }, {
    id: "f2",
    speaker: "Maya",
    speakerRu: "Майя",
    before: "Yes, ",
    after: "! I like farms!",
    answer: "please"
  }, {
    id: "f3",
    speaker: "Guide",
    speakerRu: "Гид",
    before: "Would you like ",
    after: " feed the lambs?",
    answer: "to"
  }, {
    id: "f4",
    speaker: "Leo",
    speakerRu: "Лео",
    before: "Yes, please. I'd like to ",
    after: " the lambs.",
    answer: "feed"
  }, {
    id: "f5",
    speaker: "Guide",
    speakerRu: "Гид",
    before: "Would you like to ",
    after: " some strawberries?",
    answer: "pick"
  }, {
    id: "f6",
    speaker: "Maya",
    speakerRu: "Майя",
    before: "Yes, please. ",
    after: " like to pick some strawberries.",
    answer: "I'd"
  }, {
    id: "f7",
    speaker: "Guide",
    speakerRu: "Гид",
    before: "Would you like to see the ",
    after: "?",
    answer: "goats"
  }, {
    id: "f8",
    speaker: "Leo",
    speakerRu: "Лео",
    before: "No, thanks. I don't like goats. I'd like to ",
    after: " on a tractor!",
    answer: "ride"
  }],
  Ey = ["Would", "please", "to", "feed", "pick", "I'd", "goats", "ride"],
  Xr = [{
    id: "h1",
    wrong: "Would you like feed the lambs?",
    right: "Would you like to feed the lambs?"
  }, {
    id: "h2",
    wrong: "I'd like pick some strawberries.",
    right: "I'd like to pick some strawberries."
  }, {
    id: "h3",
    wrong: "Would you like to some goats?",
    right: "Would you like to see the goats?"
  }, {
    id: "h4",
    wrong: "Would you like ride on a tractor?",
    right: "Would you like to ride on a tractor?"
  }, {
    id: "h5",
    wrong: "Yes please I like feed.",
    right: "Yes, please. I'd like to feed the lambs."
  }, {
    id: "h6",
    wrong: "No thanks I don't like.",
    right: "No, thanks. I don't like goats."
  }, {
    id: "h7",
    wrong: "Would you like some to strawberries?",
    right: "Would you like some strawberries?"
  }, {
    id: "h8",
    wrong: "I'd like to seeing the goats.",
    right: "I'd like to see the goats."
  }],
  Qr = [{
    id: "p1",
    image: "./images/zone-lambs.jpg",
    label: "lambs",
    hint: "feed the lambs"
  }, {
    id: "p2",
    image: "./images/zone-strawberries.jpg",
    label: "strawberries",
    hint: "pick some strawberries"
  }, {
    id: "p3",
    image: "./images/zone-goats.jpg",
    label: "goats",
    hint: "see the goats"
  }, {
    id: "p4",
    image: "./images/zone-tractor.jpg",
    label: "tractor",
    hint: "ride on a tractor"
  }, {
    id: "p5",
    image: "./images/kids-guests.jpg",
    label: "friends",
    hint: "take a photo"
  }, {
    id: "p6",
    image: "./images/farm-map.jpg",
    label: "farm",
    hint: "help on the farm"
  }];

function $n(p) {
  const T = [...p];
  for (let A = T.length - 1; A > 0; A--) {
    const o = Math.floor(Math.random() * (A + 1));
    [T[A], T[o]] = [T[o], T[A]]
  }
  return T
}

function Rt(p) {
  if (typeof window > "u" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const T = new SpeechSynthesisUtterance(p);
  T.lang = "en-GB", T.rate = .92, T.pitch = 1.05, window.speechSynthesis.speak(T)
}

function kr(p) {
  return p.trim().replace(/\s+/g, " ").replace(/[’]/g, "'").replace(/[?.!,]+$/g, T => T).toLowerCase().replace(/[.,!?]/g, "").trim()
}

function zf(p, T) {
  return kr(p) === kr(T)
}

function Ty({
  onStart: p
}) {
  const [T, A] = X.useState("");
  return c.jsxs("div", {
    className: "relative min-h-screen overflow-hidden",
    children: [c.jsx("img", {
      src: "./images/hero-farm.jpg",
      alt: "City Farm: гид встречает гостей у калитки, ягнята, клубника, козы и трактор",
      className: "absolute inset-0 h-full w-full object-cover"
    }), c.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-t from-[#1d3b12]/85 via-[#1d3b12]/25 to-sky-deep/20"
    }), c.jsxs("div", {
      className: "relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-4 py-6 sm:px-8",
      children: [c.jsxs("header", {
        className: "flex flex-wrap items-center justify-between gap-3",
        children: [c.jsx("div", {
          className: "wood-sign rounded-2xl px-4 py-2 text-sm font-extrabold tracking-wide",
          children: "Academy Stars 2 · Unit 8 · Lesson 6"
        }), c.jsxs("div", {
          className: "flex gap-2",
          children: [c.jsx("span", {
            className: "rounded-full bg-white/90 px-3 py-1 text-sm font-extrabold text-[#3d7a28] shadow",
            children: "⏱ 45 минут"
          }), c.jsx("span", {
            className: "rounded-full bg-[#f5c842] px-3 py-1 text-sm font-extrabold text-[#5a3e10] shadow",
            children: "Language in use"
          })]
        })]
      }), c.jsx("div", {
        className: "mx-auto w-full max-w-2xl",
        children: c.jsxs("div", {
          className: "wood-sign rounded-[32px] px-6 py-7 text-center sm:px-10 sm:py-9",
          children: [c.jsx("p", {
            className: "mb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#fff3c4]",
            children: "City Farm Tour"
          }), c.jsx("h1", {
            className: "font-display text-4xl font-semibold leading-tight sm:text-5xl",
            children: "Would you like to…?"
          }), c.jsx("p", {
            className: "mt-2 font-display text-xl text-[#fff3c4]",
            children: "I’d like to + infinitive"
          }), c.jsxs("p", {
            className: "mx-auto mt-4 max-w-lg text-base font-semibold text-[#fff8e7]/90",
            children: ["Ты — Junior Farm Guide. Проведи гостей Майю и Лео по ферме и собери", " ", c.jsx("b", {
              children: "4 печати активностей"
            }), ": ягнята, клубника, козы и трактор."]
          }), c.jsx("div", {
            className: "mx-auto mt-6 grid max-w-md grid-cols-4 gap-2",
            children: [
              ["🐑", "Lambs"],
              ["🍓", "Berries"],
              ["🐐", "Goats"],
              ["🚜", "Tractor"]
            ].map(([o, z]) => c.jsxs("div", {
              className: "rounded-2xl bg-[#fff8e7] px-1 py-2 text-[#6b4226] shadow-inner",
              children: [c.jsx("div", {
                className: "text-2xl",
                children: o
              }), c.jsx("div", {
                className: "text-[11px] font-extrabold",
                children: z
              })]
            }, z))
          }), c.jsxs("label", {
            className: "mt-6 block text-left text-sm font-bold text-[#fff3c4]",
            children: ["Как зовут гида?", c.jsx("input", {
              value: T,
              onChange: o => A(o.target.value),
              placeholder: "Например, Саша",
              maxLength: 20,
              className: "mt-1 w-full rounded-2xl border-3 border-[#6b4226] bg-[#fff8e7] px-4 py-3 text-lg font-extrabold text-[#3a2a1a]"
            })]
          }), c.jsx("button", {
            type: "button",
            onClick: () => p(T.trim() || "Guide"),
            className: "grass-btn mt-5 w-full rounded-2xl py-4 font-display text-2xl font-semibold",
            children: "Начать экскурсию →"
          }), c.jsx("p", {
            className: "mt-3 text-xs font-semibold text-[#fff8e7]",
            children: "Правила можно открыть в любой момент · 6 заданий · 4 печати"
          })]
        })
      }), c.jsx("p", {
        className: "text-center text-xs font-bold text-white/80",
        children: "Дружелюбный игровой урок · без лишней мишуры · would like to + verb"
      })]
    })]
  })
}

function Ay({
  onClose: p
}) {
  const [T, A] = X.useState(0), o = Jn[T];
  return c.jsx("div", {
    className: "fixed inset-0 z-50 grid place-items-center bg-[#1d3b12]/55 p-3 backdrop-blur-sm",
    children: c.jsxs("div", {
      className: "rules-card relative w-full max-w-xl p-5 sm:p-7 fade-up",
      children: [c.jsx("button", {
        type: "button",
        onClick: p,
        className: "absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#e53935] font-extrabold text-white shadow",
        "aria-label": "Закрыть",
        children: "✕"
      }), c.jsxs("p", {
        className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
        children: ["Карточки правил · ", T + 1, " / ", Jn.length]
      }), c.jsxs("h2", {
        className: "font-display mt-1 text-3xl text-[#6b4226]",
        children: [c.jsx("span", {
          className: "mr-2 inline-grid h-9 w-9 place-items-center rounded-full bg-[#f5c842] text-lg",
          children: o.badge
        }), o.title]
      }), c.jsxs("div", {
        className: "mt-5 space-y-3",
        children: [o.body?.map(z => c.jsxs("div", {
          className: "flex items-start justify-between gap-3 rounded-2xl border-2 border-[#c4a574] bg-white px-4 py-3",
          children: [c.jsxs("div", {
            children: [c.jsx("p", {
              className: "font-extrabold text-[#1b679e]",
              children: z.en
            }), c.jsx("p", {
              className: "text-sm font-semibold text-[#6b4226]/80",
              children: z.ru
            })]
          }), c.jsx("button", {
            type: "button",
            className: "shrink-0 text-lg",
            onClick: () => Rt(z.en),
            "aria-label": "Слушать",
            children: "🔊"
          })]
        }, z.en)), o.note && c.jsx("p", {
          className: "rounded-2xl bg-[#e8f5d4] px-4 py-3 font-bold text-[#2d5a18]",
          children: o.note
        }), o.extra && c.jsx("p", {
          className: "font-semibold text-[#6b4226]",
          children: o.extra
        }), o.compare && c.jsx("div", {
          className: "grid gap-3 sm:grid-cols-2",
          children: o.compare.map(z => c.jsxs("div", {
            className: "rounded-2xl border-3 border-[#8b5e3c] bg-white p-4",
            children: [c.jsx("p", {
              className: "text-xs font-extrabold uppercase tracking-wide text-[#e53935]",
              children: z.kind
            }), c.jsx("p", {
              className: "mt-1 font-extrabold text-[#1b679e]",
              children: z.en
            }), c.jsx("p", {
              className: "text-sm font-semibold text-[#6b4226]",
              children: z.ru
            }), c.jsx("button", {
              type: "button",
              className: "mt-2 text-sm font-extrabold text-sky-deep",
              onClick: () => Rt(z.en),
              children: "🔊 Слушать"
            })]
          }, z.kind))
        })]
      }), c.jsxs("div", {
        className: "mt-6 flex items-center justify-between",
        children: [c.jsx("button", {
          type: "button",
          disabled: T === 0,
          onClick: () => A(z => z - 1),
          className: "straw-btn rounded-2xl px-4 py-2 font-extrabold disabled:opacity-40",
          children: "← Назад"
        }), c.jsx("div", {
          className: "flex gap-1.5",
          children: Jn.map((z, _) => c.jsx("button", {
            type: "button",
            onClick: () => A(_),
            className: `h-2.5 rounded-full ${_===T?"w-6 bg-[#3d7a28]":"w-2.5 bg-[#e6d3b1]"}`
          }, _))
        }), T < Jn.length - 1 ? c.jsx("button", {
          type: "button",
          onClick: () => A(z => z + 1),
          className: "grass-btn rounded-2xl px-4 py-2 font-extrabold",
          children: "Дальше →"
        }) : c.jsx("button", {
          type: "button",
          onClick: p,
          className: "grass-btn rounded-2xl px-4 py-2 font-extrabold",
          children: "К уроку"
        })]
      })]
    })
  })
}

function zl({
  children: p,
  onClick: T,
  disabled: A,
  className: o = "",
  type: z = "button"
}) {
  return c.jsx("button", {
    type: z,
    disabled: A,
    onClick: T,
    className: `grass-btn rounded-2xl px-6 py-3 text-lg font-extrabold tracking-wide ${o}`,
    children: p
  })
}

function Ht({
  ok: p,
  text: T
}) {
  return p === null ? null : c.jsxs("div", {
    className: `fade-up rounded-2xl border-3 px-4 py-3 font-bold ${p?"border-[#3d7a28] bg-[#e8f5d4] text-[#2d5a18]":"border-[#e53935] bg-[#ffe6e4] text-[#8e1c18]"}`,
    children: [p ? "🌟 Отлично! " : "🌱 Почти! ", T]
  })
}

function wr() {
  const p = ["#e53935", "#f5c842", "#8bc34a", "#4ba3d9", "#ab47bc", "#fff"];
  return c.jsx(c.Fragment, {
    children: Array.from({
      length: 42
    }).map((T, A) => c.jsx("span", {
      className: "confetti-piece",
      style: {
        left: `${A*7.3%100}%`,
        background: p[A % p.length],
        animationDelay: `${A%12*.07}s`,
        transform: `rotate(${A*18}deg)`
      }
    }, A))
  })
}

function Ef({
  who: p
}) {
  const A = {
    Guide: {
      bg: "bg-[#5c7a3a]",
      emoji: "🧢"
    },
    Maya: {
      bg: "bg-[#7b5ea7]",
      emoji: "🎒"
    },
    Leo: {
      bg: "bg-[#1b679e]",
      emoji: "🧢"
    },
    Guests: {
      bg: "bg-[#c4845a]",
      emoji: "👫"
    }
  } [p] ?? {
    bg: "bg-[#8b5e3c]",
    emoji: "💬"
  };
  return c.jsxs("span", {
    className: `inline-flex items-center gap-1 rounded-full ${A.bg} px-2.5 py-0.5 text-xs font-extrabold text-white`,
    children: [c.jsx("span", {
      children: A.emoji
    }), " ", p]
  })
}

function Ua({
  total: p,
  current: T
}) {
  return c.jsx("div", {
    className: "flex items-center gap-1.5",
    children: Array.from({
      length: p
    }).map((A, o) => c.jsx("span", {
      className: `h-2.5 rounded-full transition-all ${o===T?"w-7 bg-[#3d7a28]":o<T?"w-2.5 bg-[#f5c842]":"w-2.5 bg-[#e6d3b1]"}`
    }, o))
  })
}

function _y({
  onComplete: p
}) {
  const T = X.useMemo(() => ttcGetOrShuffle("welcome", Ma, q => q.id), []),
    [A, o] = X.useState(() => {
      const q = ((wy() || {}).task || {}).welcomeSlots;
      return Array.isArray(q) && q.length === 8 ? q : Array(8).fill(null)
    }),
    [z, _] = X.useState(null),
    [C, M] = X.useState(!1),
    [O, g] = X.useState(!1),
    Q = new Set(A.filter(Boolean));
  X.useEffect(() => {
    ttcPatch({
      task: {
        welcomeSlots: A
      }
    })
  }, [A]);

  function D(q, k) {
    C || (o($ => {
      const ul = [...$],
        H = ul.findIndex(fl => fl === q);
      return H >= 0 && (ul[H] = null), ul[k] = q, ul
    }), _(null))
  }

  function W(q) {
    if (!C) {
      if (z) {
        D(z, q);
        return
      }
      A[q] && o(k => {
        const $ = [...k];
        return $[q] = null, $
      })
    }
  }

  function w() {
    const q = A.every((k, $) => k === Ma[$].id);
    M(!0), g(q)
  }
  const Z = A.every(Boolean),
    K = Object.fromEntries(Ma.map(q => [q.id, q]));
  return c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4 flex flex-wrap items-start justify-between gap-3",
      children: [c.jsxs("div", {
        children: [c.jsx("p", {
          className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
          children: "Задание 1 из 6"
        }), c.jsx("h2", {
          className: "font-display text-3xl text-[#3d7a28]",
          children: "Welcome Gate"
        }), c.jsx("p", {
          className: "font-semibold text-[#6b4226]",
          children: "Прослушай модель и собери диалог по порядку. Нажми на карточку, затем на слот."
        })]
      }), c.jsx(Ua, {
        total: 6,
        current: 0
      })]
    }), c.jsx("div", {
      className: "mb-4 overflow-hidden rounded-3xl ring-4 ring-[#8b5e3c]",
      children: c.jsx("img", {
        src: "./images/hero-farm.jpg",
        alt: "Гид встречает Майю и Лео у калитки City Farm",
        className: "h-40 w-full object-cover object-center sm:h-52"
      })
    }), c.jsxs("div", {
      className: "mb-4 flex flex-col gap-3",
      children: [c.jsxs("div", {
        className: "farm-audio-player w-full rounded-2xl bg-[#e8f5d4] p-3 ring-2 ring-[#3d7a28]",
        children: [c.jsx("p", {
          className: "mb-2 text-sm font-extrabold text-[#2d5a18]",
          children: "🔊 Прослушать весь диалог"
        }), c.jsx("audio", {
          id: "farm-dialogue-audio",
          src: TTC_AUDIO,
          controls: !0,
          preload: "metadata",
          "data-testid": "farm-dialogue-audio",
          className: "w-full"
        })]
      }), c.jsxs("div", {
        className: "flex flex-wrap items-center gap-2 text-sm font-bold text-[#8b5e3c]",
        children: [c.jsx("img", {
          src: "./images/guide-portrait.jpg",
          alt: "Guide",
          className: "h-8 w-8 rounded-full object-cover ring-2 ring-[#5c7a3a]"
        }), "Гид", c.jsx("img", {
          src: "./images/kids-guests.jpg",
          alt: "Maya and Leo",
          className: "h-8 w-12 rounded-full object-cover ring-2 ring-[#7b5ea7]"
        }), "Майя и Лео"]
      })]
    }), c.jsxs("div", {
      className: "grid gap-5 lg:grid-cols-2",
      children: [c.jsxs("div", {
        children: [c.jsx("p", {
          className: "mb-2 text-sm font-extrabold text-[#8b5e3c]",
          children: "Карточки реплик"
        }), c.jsx("div", {
          className: "flex flex-col gap-2",
          children: T.map(q => {
            const k = Q.has(q.id),
              $ = z === q.id;
            return c.jsxs("button", {
              type: "button",
              draggable: !k && !C,
              disabled: k || C,
              onDragStart: ul => {
                ul.dataTransfer.setData("text/plain", q.id), _(q.id)
              },
              onClick: () => _($ ? null : q.id),
              className: `chip flex items-start gap-2 rounded-2xl px-3 py-2 text-left ${k?"used":""} ${$?"ring-4 ring-[#4ba3d9]":""}`,
              children: [c.jsx(Ef, {
                who: q.speaker
              }), c.jsx("span", {
                className: "font-bold text-[#3a2a1a]",
                children: q.text
              })]
            }, q.id)
          })
        })]
      }), c.jsxs("div", {
        children: [c.jsx("p", {
          className: "mb-2 text-sm font-extrabold text-[#8b5e3c]",
          children: "Собери диалог"
        }), c.jsx("ol", {
          className: "flex flex-col gap-2",
          children: A.map((q, k) => {
            const $ = q ? K[q] : null,
              ul = C && q === Ma[k].id,
              H = C && q && q !== Ma[k].id;
            return c.jsxs("li", {
              className: "flex items-center gap-2",
              children: [c.jsx("span", {
                className: "w-6 text-center font-extrabold text-[#8b5e3c]",
                children: k + 1
              }), c.jsx("button", {
                type: "button",
                onClick: () => W(k),
                onDragOver: fl => fl.preventDefault(),
                onDrop: fl => {
                  fl.preventDefault();
                  const al = fl.dataTransfer.getData("text/plain");
                  al && D(al, k)
                },
                className: `slot flex w-full items-start gap-2 px-3 py-2 text-left ${$?"filled":""} ${ul?"correct":""} ${H?"wrong":""}`,
                children: $ ? c.jsxs(c.Fragment, {
                  children: [c.jsx(Ef, {
                    who: $.speaker
                  }), c.jsx("span", {
                    className: "font-bold",
                    children: $.text
                  })]
                }) : c.jsx("span", {
                  className: "text-sm font-semibold text-[#6b4226]",
                  children: z ? "Поставь карточку сюда" : "Пустой слот"
                })
              })]
            }, k)
          })
        })]
      })]
    }), c.jsxs("div", {
      className: "mt-5 flex flex-wrap items-center gap-3",
      children: [!C && c.jsx(zl, {
        disabled: !Z,
        onClick: w,
        children: "Проверить"
      }), C && !O && c.jsx(zl, {
        onClick: () => {
          M(!1), g(!1), o(Array(8).fill(null))
        },
        children: "Попробовать снова"
      }), C && O && c.jsx(zl, {
        onClick: () => p(8),
        children: "Дальше к ягнятам →"
      }), C && c.jsx(Ht, {
        ok: O,
        text: O ? "Диалог собран верно. Гости готовы к экскурсии!" : "Посмотри на порядок: сначала приветствие, потом приглашения и ответы."
      })]
    })]
  })
}

function Oy({
  onComplete: p
}) {
  const [T, A] = X.useState(0), [o, z] = X.useState(null), [_, C] = X.useState(!1), [M, O] = X.useState(0), [g, Q] = X.useState(!1), D = Wn[T], W = T === Wn.length - 1;

  function w(K) {
    _ || (z(K), C(!0), K === D.answer && O(q => q + 1))
  }

  function Z() {
    W ? Q(!0) : (A(K => K + 1), z(null), C(!1))
  }
  if (g) {
    const K = M >= 6;
    return c.jsxs("div", {
      className: "fade-up text-center",
      children: [c.jsx("img", {
        src: "./images/zone-lambs.jpg",
        alt: "Ягнята",
        className: "mx-auto h-40 w-40 rounded-full object-cover ring-8 ring-[#f5c842]"
      }), c.jsx("h2", {
        className: "font-display mt-4 text-3xl text-[#3d7a28]",
        children: "Activity Keys"
      }), c.jsxs("p", {
        className: "mt-2 text-xl font-extrabold",
        children: ["Результат: ", M, " / ", Wn.length]
      }), c.jsx(Ht, {
        ok: K,
        text: K ? "Печать «Ягнята» твоя! Would you like to feed the lambs? — ты знаешь, как спросить." : "Нужно минимум 6 верных ответов. Повтори ключи ещё раз."
      }), c.jsx("div", {
        className: "mt-5 flex justify-center gap-3",
        children: K ? c.jsx(zl, {
          onClick: () => p(M),
          children: "Забрать печать 🐑"
        }) : c.jsx(zl, {
          onClick: () => {
            Q(!1), A(0), O(0), z(null), C(!1)
          },
          children: "Ещё раз"
        })
      })]
    })
  }
  return c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4 flex flex-wrap items-start justify-between gap-3",
      children: [c.jsxs("div", {
        children: [c.jsxs("p", {
          className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
          children: ["Задание 2 из 6 · вопрос ", T + 1, " / ", Wn.length]
        }), c.jsx("h2", {
          className: "font-display text-3xl text-[#3d7a28]",
          children: "Activity Keys"
        }), c.jsx("p", {
          className: "font-semibold text-[#6b4226]",
          children: D.promptRu
        })]
      }), c.jsx(Ua, {
        total: 6,
        current: 1
      })]
    }), c.jsxs("div", {
      className: "grid gap-5 md:grid-cols-[280px_1fr]",
      children: [c.jsx("img", {
        src: D.image,
        alt: "",
        className: "h-52 w-full rounded-3xl object-cover ring-4 ring-[#8b5e3c] md:h-full"
      }), c.jsxs("div", {
        className: "flex flex-col gap-3",
        children: [D.options.map((K, q) => {
          let k = "mc-option";
          return _ && q === D.answer ? k += " good" : _ && q === o && q !== D.answer ? k += " bad" : q === o && (k += " picked"), c.jsxs("button", {
            type: "button",
            disabled: _,
            onClick: () => w(q),
            className: `${k} rounded-2xl px-4 py-3 text-left font-extrabold`,
            children: [c.jsx("span", {
              className: "mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-[#fff3c4] text-sm",
              children: String.fromCharCode(65 + q)
            }), K]
          }, K)
        }), _ && c.jsxs("div", {
          className: "flex flex-wrap items-center gap-2",
          children: [c.jsx("button", {
            type: "button",
            className: "text-sm font-extrabold text-sky-deep",
            onClick: () => Rt(D.options[D.answer]),
            children: "🔊 Правильная фраза"
          }), c.jsx(Ht, {
            ok: o === D.answer,
            text: D.explain
          })]
        })]
      })]
    }), c.jsx("div", {
      className: "mt-5",
      children: c.jsx(zl, {
        disabled: !_,
        onClick: Z,
        children: W ? "К печати" : "Следующий вопрос →"
      })
    })]
  })
}

function My({
  onComplete: p
}) {
  const T = X.useMemo(() => ttcGetOrShuffle("matchLeft", jf, q => q.id), []),
    A = X.useMemo(() => ttcGetOrShuffle("matchRight", jf, q => q.id), []),
    [o, z] = X.useState(null),
    [_, C] = X.useState(null),
    [M, O] = X.useState({}),
    [g, Q] = X.useState(null),
    [D, W] = X.useState(0),
    [w, Z] = X.useState(!1),
    K = Object.keys(M).length;

  function q(H) {
    M[H] || w || (z(H), Q(null), _ && $(H, _))
  }

  function k(H) {
    Object.values(M).includes(H) || w || (C(H), Q(null), o && $(o, H))
  }

  function $(H, fl) {
    W(al => al + 1), H === fl ? (O(al => ({
      ...al,
      [H]: fl
    })), z(null), C(null)) : (Q(H + "|" + fl), setTimeout(() => {
      Q(null), z(null), C(null)
    }, 700))
  }
  const ul = K === jf.length;
  return c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4 flex flex-wrap items-start justify-between gap-3",
      children: [c.jsxs("div", {
        children: [c.jsxs("p", {
          className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
          children: ["Задание 3 из 6 · пары ", K, " / 8"]
        }), c.jsx("h2", {
          className: "font-display text-3xl text-[#3d7a28]",
          children: "Response Lab"
        }), c.jsx("p", {
          className: "font-semibold text-[#6b4226]",
          children: "Сопоставь приглашение и правильный ответ. Сначала нажми слева, потом справа."
        })]
      }), c.jsx(Ua, {
        total: 6,
        current: 2
      })]
    }), c.jsxs("div", {
      className: "grid gap-4 md:grid-cols-2",
      children: [c.jsxs("div", {
        className: "space-y-2",
        children: [c.jsx("p", {
          className: "text-sm font-extrabold text-[#8b5e3c]",
          children: "Приглашения"
        }), T.map(H => {
          const fl = !!M[H.id],
            al = o === H.id,
            I = g?.startsWith(H.id);
          return c.jsxs("button", {
            type: "button",
            onClick: () => q(H.id),
            className: `match-item flex w-full items-center justify-between gap-2 rounded-2xl px-3 py-3 text-left font-bold ${fl?"matched":I?"miss":al?"selected":""}`,
            children: [c.jsx("span", {
              children: H.left
            }), c.jsx("span", {
              role: "img",
              "aria-label": "слушать",
              className: "shrink-0",
              onClick: Cl => {
                Cl.stopPropagation(), Rt(H.left)
              },
              children: "🔊"
            })]
          }, H.id)
        })]
      }), c.jsxs("div", {
        className: "space-y-2",
        children: [c.jsx("p", {
          className: "text-sm font-extrabold text-[#8b5e3c]",
          children: "Ответы"
        }), A.map(H => {
          const fl = Object.values(M).includes(H.id),
            al = _ === H.id,
            I = g?.endsWith(H.id);
          return c.jsxs("button", {
            type: "button",
            onClick: () => k(H.id),
            className: `match-item flex w-full items-center justify-between gap-2 rounded-2xl px-3 py-3 text-left font-bold ${fl?"matched":I?"miss":al?"selected":""}`,
            children: [c.jsx("span", {
              children: H.right
            }), c.jsx("span", {
              role: "img",
              "aria-label": "слушать",
              className: "shrink-0",
              onClick: Cl => {
                Cl.stopPropagation(), Rt(H.right)
              },
              children: "🔊"
            })]
          }, H.id)
        })]
      })]
    }), c.jsxs("div", {
      className: "mt-5 space-y-3",
      children: [ul && !w && c.jsxs(c.Fragment, {
        children: [c.jsx(Ht, {
          ok: !0,
          text: "Все 8 пар на месте. Гости знают, как отвечать!"
        }), c.jsx(zl, {
          onClick: () => {
            Z(!0), p(K)
          },
          children: "Забрать печать 🍓"
        })]
      }), !ul && D > 0 && c.jsxs("p", {
        className: "text-sm font-bold text-[#8b5e3c]",
        children: ["Попыток: ", D]
      })]
    })]
  })
}

function Dy({
  onComplete: p
}) {
  const [T, A] = X.useState(0), [o, z] = X.useState([]), [_, C] = X.useState(!1), [M, O] = X.useState(!1), [g, Q] = X.useState(0), [D, W] = X.useState(!1), w = _u[T], Z = X.useMemo(() => ttcGetOrShuffleWords(w.id, w.words), [w.id]);

  function K(H, fl) {
    if (_) return;
    const al = H + "#" + fl;
    o.includes(al) || z(I => [...I, al])
  }

  function q(H) {
    _ || z(fl => fl.filter(al => al !== H))
  }
  const k = o.map(H => H.split("#")[0]).join(" ");

  function $() {
    const H = zf(k, w.answer);
    C(!0), O(H), H && Q(fl => fl + 1)
  }

  function ul() {
    T < _u.length - 1 ? (A(H => H + 1), z([]), C(!1), O(!1)) : W(!0)
  }
  if (D) {
    const H = g >= 6;
    return c.jsxs("div", {
      className: "fade-up text-center",
      children: [c.jsx("img", {
        src: "./images/zone-goats.jpg",
        alt: "Козы",
        className: "mx-auto h-40 w-40 rounded-full object-cover ring-8 ring-[#f5c842]"
      }), c.jsx("h2", {
        className: "font-display mt-4 text-3xl text-[#3d7a28]",
        children: "Build the Sentence"
      }), c.jsxs("p", {
        className: "mt-2 text-xl font-extrabold",
        children: [g, " / ", _u.length, " верно"]
      }), c.jsx(Ht, {
        ok: H,
        text: H ? "Печать «Козы» открыта!" : "Собери ещё раз — нужно 6 из 8."
      }), c.jsx("div", {
        className: "mt-5 flex justify-center",
        children: H ? c.jsx(zl, {
          onClick: () => p(g),
          children: "Забрать печать 🐐"
        }) : c.jsx(zl, {
          onClick: () => {
            W(!1), A(0), Q(0), z([]), C(!1)
          },
          children: "Ещё раз"
        })
      })]
    })
  }
  return c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4 flex flex-wrap items-start justify-between gap-3",
      children: [c.jsxs("div", {
        children: [c.jsxs("p", {
          className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
          children: ["Задание 4 из 6 · фраза ", T + 1, " / ", _u.length]
        }), c.jsx("h2", {
          className: "font-display text-3xl text-[#3d7a28]",
          children: "Build the Sentence"
        }), c.jsxs("p", {
          className: "font-semibold text-[#6b4226]",
          children: ["Составь фразу: нажимай слова по порядку. Подсказка: ", w.hintRu]
        })]
      }), c.jsx(Ua, {
        total: 6,
        current: 3
      })]
    }), c.jsx("div", {
      className: `slot min-h-20 w-full p-3 ${_?M?"correct":"wrong":"filled"}`,
      children: o.length === 0 ? c.jsx("span", {
        className: "font-semibold text-[#6b4226]",
        children: "Собери предложение здесь…"
      }) : c.jsx("div", {
        className: "flex flex-wrap gap-2",
        children: o.map(H => c.jsx("button", {
          type: "button",
          onClick: () => q(H),
          className: "rounded-xl bg-[#3d7a28] px-3 py-1.5 font-extrabold text-white",
          children: H.split("#")[0]
        }, H))
      })
    }), c.jsx("div", {
      className: "mt-4 flex flex-wrap gap-2",
      children: Z.map((H, fl) => {
        const al = H + "#" + fl,
          I = o.includes(al);
        return c.jsx("button", {
          type: "button",
          disabled: I || _,
          onClick: () => K(H, fl),
          className: `chip rounded-xl px-3 py-2 font-extrabold ${I?"used":""}`,
          children: H
        }, al)
      })
    }), c.jsxs("div", {
      className: "mt-5 flex flex-wrap items-center gap-3",
      children: [!_ && c.jsxs(c.Fragment, {
        children: [c.jsx(zl, {
          disabled: o.length === 0,
          onClick: $,
          children: "Проверить"
        }), c.jsx("button", {
          type: "button",
          className: "font-extrabold text-[#8b5e3c]",
          onClick: () => z([]),
          children: "Сбросить"
        })]
      }), _ && c.jsxs(c.Fragment, {
        children: [c.jsx(Ht, {
          ok: M,
          text: M ? w.answer : `Правильно: ${w.answer}`
        }), c.jsx("button", {
          type: "button",
          className: "sky-btn rounded-2xl px-3 py-2 font-extrabold",
          onClick: () => Rt(w.answer),
          children: "🔊"
        }), c.jsx(zl, {
          onClick: ul,
          children: T === _u.length - 1 ? "К печати" : "Дальше →"
        })]
      })]
    })]
  })
}
const Uy = Nf.map(p => p.verb);

function Cy({
  onComplete: p
}) {
  const [T, A] = X.useState(null), [o, z] = X.useState(() => ((wy() || {}).task || {}).choiceDone || []), [_, C] = X.useState(1), [M, O] = X.useState(null), [g, Q] = X.useState(null), [D, W] = X.useState(!1), w = Nf.find($ => $.id === T) ?? null, Z = w && M === w.verb;
  X.useEffect(() => {
    ttcPatch({
      task: {
        choiceDone: o
      }
    })
  }, [o]);

  function K() {
    A(null), C(1), O(null), Q(null), W(!1)
  }

  function q() {
    w && (o.includes(w.id) || z($ => [...$, w.id]), K())
  }
  const k = o.length === 4;
  return c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4 flex flex-wrap items-start justify-between gap-3",
      children: [c.jsxs("div", {
        children: [c.jsxs("p", {
          className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
          children: ["Задание 5 из 6 · зоны ", o.length, " / 4"]
        }), c.jsx("h2", {
          className: "font-display text-3xl text-[#3d7a28]",
          children: "Choice Mission"
        }), c.jsx("p", {
          className: "font-semibold text-[#6b4226]",
          children: "Ты гид. Выбери зону на карте, собери приглашение и ответ гостя."
        })]
      }), c.jsx(Ua, {
        total: 6,
        current: 4
      })]
    }), c.jsxs("div", {
      className: "relative mb-4 overflow-hidden rounded-3xl ring-4 ring-[#8b5e3c]",
      children: [c.jsx("img", {
        src: "./images/farm-map.jpg",
        alt: "Карта фермы",
        className: "h-48 w-full object-cover sm:h-64"
      }), c.jsx("p", {
        className: "absolute bottom-2 left-3 rounded-full bg-[#fff8e7]/90 px-3 py-1 text-xs font-extrabold text-[#6b4226]",
        children: "City Farm Map"
      })]
    }), c.jsx("div", {
      className: "grid gap-4 sm:grid-cols-2",
      children: Nf.map($ => {
        const ul = o.includes($.id);
        return c.jsxs("button", {
          type: "button",
          onClick: () => !k && A($.id),
          className: `zone-card rounded-3xl text-left ${ul?"done":""}`,
          children: [c.jsx("img", {
            src: $.image,
            alt: $.titleEn,
            className: "h-36 w-full object-cover"
          }), c.jsxs("div", {
            className: "bg-[#fff8e7] px-4 py-3",
            children: [c.jsxs("p", {
              className: "font-display text-xl text-[#3d7a28]",
              children: [ul ? "✅ " : "", $.titleRu]
            }), c.jsx("p", {
              className: "text-sm font-bold text-[#8b5e3c]",
              children: $.titleEn
            })]
          })]
        }, $.id)
      })
    }), k && c.jsxs("div", {
      className: "mt-5 space-y-3",
      children: [c.jsx(Ht, {
        ok: !0,
        text: "Все зоны пройдены. Печать «Трактор» ждёт тебя!"
      }), c.jsx(zl, {
        onClick: () => p(8),
        children: "Забрать печать 🚜"
      })]
    }), w && c.jsx("div", {
      className: "fixed inset-0 z-40 grid place-items-center bg-[#1d3b12]/55 p-3 backdrop-blur-sm",
      children: c.jsxs("div", {
        className: "paper-card relative w-full max-w-lg rounded-3xl p-5 fade-up",
        children: [c.jsx("button", {
          type: "button",
          onClick: K,
          className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[#e53935] font-extrabold text-white",
          children: "✕"
        }), c.jsx("img", {
          src: w.image,
          alt: "",
          className: "h-32 w-full rounded-2xl object-cover"
        }), c.jsx("h3", {
          className: "font-display mt-3 text-2xl text-[#3d7a28]",
          children: w.titleRu
        }), _ === 1 && c.jsxs(c.Fragment, {
          children: [c.jsx("p", {
            className: "mt-1 font-semibold text-[#6b4226]",
            children: "Собери вопрос: Would you like to + действие этой зоны."
          }), c.jsxs("p", {
            className: "mt-3 rounded-2xl bg-[#fff3c4] px-3 py-2 font-extrabold text-[#3a2a1a]",
            children: [zy.join(" "), " ", M ?? "________", "?"]
          }), c.jsx("div", {
            className: "mt-3 flex flex-wrap gap-2",
            children: Uy.map($ => c.jsx("button", {
              type: "button",
              onClick: () => O($),
              className: `chip rounded-xl px-3 py-2 font-extrabold ${M===$?"ring-4 ring-[#4ba3d9]":""}`,
              children: $
            }, $))
          }), D && c.jsx("div", {
            className: "mt-3",
            children: c.jsx(Ht, {
              ok: !!Z,
              text: Z ? w.question : `Для этой зоны: ${w.question}`
            })
          }), c.jsx("div", {
            className: "mt-4 flex gap-2",
            children: D ? c.jsx(zl, {
              onClick: () => {
                Z ? (C(2), W(!1)) : (W(!1), O(null))
              },
              children: Z ? "К ответу гостя →" : "Исправить"
            }) : c.jsx(zl, {
              disabled: !M,
              onClick: () => W(!0),
              children: "Проверить вопрос"
            })
          })]
        }), _ === 2 && c.jsxs(c.Fragment, {
          children: [c.jsx("p", {
            className: "mt-2 font-extrabold text-[#1b679e]",
            children: w.question
          }), c.jsx("button", {
            type: "button",
            className: "text-sm font-extrabold text-sky-deep",
            onClick: () => Rt(w.question),
            children: "🔊 Слушать приглашение"
          }), c.jsx("p", {
            className: "mt-3 font-semibold text-[#6b4226]",
            children: "Что ответит гость?"
          }), c.jsxs("div", {
            className: "mt-2 space-y-2",
            children: [c.jsx("button", {
              type: "button",
              onClick: () => Q("yes"),
              className: `mc-option w-full rounded-2xl px-4 py-3 text-left font-extrabold ${g==="yes"?"picked":""}`,
              children: w.yes
            }), c.jsx("button", {
              type: "button",
              onClick: () => Q("no"),
              className: `mc-option w-full rounded-2xl px-4 py-3 text-left font-extrabold ${g==="no"?"picked":""}`,
              children: w.no
            })]
          }), c.jsx("p", {
            className: "mt-2 text-sm font-semibold text-[#8b5e3c]",
            children: "Оба ответа грамматически верны. Выбери любой — и зона будет пройдена."
          }), c.jsx("div", {
            className: "mt-4",
            children: c.jsx(zl, {
              disabled: !g,
              onClick: q,
              children: "Готово ✓"
            })
          })]
        })]
      })
    })]
  })
}

function Ry({
  onComplete: p
}) {
  const [T, A] = X.useState(() => ((wy() || {}).task || {}).finalGaps || {}), [o, z] = X.useState(Le[0].id), [_, C] = X.useState(!1), [M, O] = X.useState(0), [g, Q] = X.useState(!1);
  X.useEffect(() => {
    ttcPatch({
      task: {
        finalGaps: T
      }
    })
  }, [T]);

  function D(Z) {
    if (_) return;
    A(k => ({
      ...k,
      [o]: Z
    }));
    const K = Le.findIndex(k => k.id === o),
      q = Le[K + 1];
    q && z(q.id)
  }

  function W() {
    let Z = 0;
    Le.forEach(K => {
      zf(T[K.id] || "", K.answer) && (Z += 1)
    }), O(Z), C(!0)
  }
  const w = new Set(Object.values(T));
  return g ? c.jsxs("div", {
    className: "fade-up text-center",
    children: [c.jsx("img", {
      src: "./images/hero-farm.jpg",
      alt: "Ферма",
      className: "mx-auto h-44 w-full max-w-lg rounded-3xl object-cover ring-4 ring-[#f5c842]"
    }), c.jsx("h2", {
      className: "font-display mt-4 text-3xl text-[#3d7a28]",
      children: "Экскурсия завершена!"
    }), c.jsxs("p", {
      className: "mt-2 text-xl font-extrabold",
      children: [M, " / ", Le.length, " пропусков верно"]
    }), c.jsx(zl, {
      className: "mt-4",
      onClick: () => p(M),
      children: "К домашнему заданию →"
    })]
  }) : c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4 flex flex-wrap items-start justify-between gap-3",
      children: [c.jsxs("div", {
        children: [c.jsx("p", {
          className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
          children: "Задание 6 из 6 · финал"
        }), c.jsx("h2", {
          className: "font-display text-3xl text-[#3d7a28]",
          children: "Final Farm Tour"
        }), c.jsx("p", {
          className: "font-semibold text-[#6b4226]",
          children: "Заполни пропуски в диалоге. Нажми на пропуск, затем на слово из банка."
        })]
      }), c.jsx(Ua, {
        total: 6,
        current: 5
      })]
    }), c.jsx("div", {
      className: "space-y-3",
      children: Le.map(Z => {
        const K = T[Z.id],
          q = _ && K === Z.answer,
          k = _ && K !== Z.answer;
        return c.jsxs("div", {
          className: `rounded-2xl border-3 px-3 py-3 ${q?"border-[#3d7a28] bg-[#e8f5d4]":k?"border-[#e53935] bg-[#ffe6e4]":"border-[#c4a574] bg-white"}`,
          children: [c.jsx(Ef, {
            who: Z.speaker
          }), c.jsxs("p", {
            className: "mt-1 text-lg font-bold leading-relaxed",
            children: [Z.before, c.jsx("button", {
              type: "button",
              onClick: () => !_ && z(Z.id),
              className: `blank ${K?"filled":""} ${o===Z.id&&!_?"active":""}`,
              children: K || "____"
            }), Z.after, _ && k && c.jsxs("span", {
              className: "ml-2 text-sm font-extrabold text-[#3d7a28]",
              children: ["→ ", Z.answer]
            })]
          })]
        }, Z.id)
      })
    }), !_ && c.jsxs("div", {
      className: "mt-4",
      children: [c.jsx("p", {
        className: "mb-2 text-sm font-extrabold text-[#8b5e3c]",
        children: "Банк слов"
      }), c.jsx("div", {
        className: "flex flex-wrap gap-2",
        children: Ey.map(Z => c.jsx("button", {
          type: "button",
          disabled: w.has(Z),
          onClick: () => D(Z),
          className: `chip rounded-xl px-3 py-2 font-extrabold ${w.has(Z)?"used":""}`,
          children: Z
        }, Z))
      })]
    }), c.jsxs("div", {
      className: "mt-5 flex flex-wrap items-center gap-3",
      children: [!_ && c.jsx(zl, {
        disabled: Object.keys(T).length < 8,
        onClick: W,
        children: "Проверить диалог"
      }), _ && c.jsxs(c.Fragment, {
        children: [c.jsx(Ht, {
          ok: M >= 6,
          text: M >= 6 ? "Тур получился вежливым и правильным!" : "Посмотри зелёные подсказки и запомни формы."
        }), c.jsx("button", {
          type: "button",
          className: "sky-btn rounded-2xl px-4 py-2 font-extrabold",
          onClick: () => Rt(Le.map(Z => Z.before + Z.answer + Z.after).join(" ")),
          children: "🔊 Весь диалог"
        }), c.jsx(zl, {
          onClick: () => Q(!0),
          children: "Завершить урок"
        })]
      })]
    })]
  })
}
const Hy = [{
  id: 1,
  title: "Мини-диалог"
}, {
  id: 2,
  title: "6 картинок"
}, {
  id: 3,
  title: "Исправь ошибки"
}, {
  id: 4,
  title: "Пригласи друга"
}, {
  id: 5,
  title: "8 вопросов"
}];

function Yy({
  name: p,
  onFinish: T
}) {
  const [A, o] = X.useState(() => ((wy() || {}).homework || {}).tab || 1), [z, _] = X.useState(() => ((wy() || {}).homework || {}).done || {}), C = Object.values(z).filter(Boolean).length;
  X.useEffect(() => {
    ttcPatch({
      homework: {
        tab: A,
        done: z
      }
    })
  }, [A, z]);
  return c.jsxs("div", {
    className: "fade-up",
    children: [c.jsxs("div", {
      className: "mb-4",
      children: [c.jsx("p", {
        className: "text-sm font-extrabold uppercase tracking-widest text-[#8b5e3c]",
        children: "Домашнее задание · не как на уроке"
      }), c.jsx("h2", {
        className: "font-display text-3xl text-[#3d7a28]",
        children: "Homework Farm"
      }), c.jsx("p", {
        className: "font-semibold text-[#6b4226]",
        children: "Пять заданий на дом. Выполни сколько успеешь — можно вернуться."
      }), c.jsx("p", {
        className: "mt-2 text-sm font-bold text-[#2d5a18]",
        children: "Homework (Grade 6 · English): five tasks in a different format from the lesson. Write a short farm dialogue, six invitations, corrected sentences, a message to a friend, and eight questions (four with some and four with to + verb). You can come back later."
      })]
    }), c.jsx("div", {
      className: "mb-4 flex flex-wrap gap-2",
      children: Hy.map(M => c.jsxs("button", {
        type: "button",
        onClick: () => o(M.id),
        className: `rounded-full px-3 py-1.5 text-sm font-extrabold ${A===M.id?"bg-[#3d7a28] text-white":z[M.id]?"bg-[#e8f5d4] text-[#2d5a18]":"bg-[#fff3c4] text-[#6b4226]"}`,
        children: [z[M.id] ? "✓ " : `${M.id}. `, M.title]
      }, M.id))
    }), A === 1 && c.jsx(qy, {
      name: p,
      onDone: () => _(M => ({
        ...M,
        1: !0
      }))
    }), A === 2 && c.jsx(By, {
      onDone: () => _(M => ({
        ...M,
        2: !0
      }))
    }), A === 3 && c.jsx(Gy, {
      onDone: () => _(M => ({
        ...M,
        3: !0
      }))
    }), A === 4 && c.jsx(Xy, {
      name: p,
      onDone: () => _(M => ({
        ...M,
        4: !0
      }))
    }), A === 5 && c.jsx(Qy, {
      onDone: () => _(M => ({
        ...M,
        5: !0
      }))
    }), c.jsxs("div", {
      className: "mt-8 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-[#c4a574] pt-4",
      children: [c.jsxs("p", {
        className: "font-bold text-[#6b4226]",
        children: ["Готово заданий: ", C, " / 5"]
      }), c.jsx(zl, {
        onClick: T,
        children: "Получить сертификат гида →"
      })]
    })]
  })
}

function qy({
  name: p,
  onDone: T
}) {
  const [A, o] = X.useState(() => {
    const z = ((wy() || {}).homework || {}).qyText;
    return typeof z == "string" ? z : `${p}: Hello! Welcome to City Farm.
Friend: Hello!
${p}: Would you like to 
Friend: `
  }), z = A.split(`
`).filter(O => O.trim()), _ = /would you like to/i.test(A), C = /i['’]d like to/i.test(A), M = z.length >= 4 && _;
  X.useEffect(() => {
    ttcPatch({
      homework: {
        qyText: A
      }
    })
  }, [A]);
  return c.jsxs("div", {
    className: "paper-card rounded-3xl p-5",
    children: [c.jsx("h3", {
      className: "font-display text-2xl text-[#6b4226]",
      children: "Напиши мини-диалог (4–6 реплик)"
    }), c.jsx("p", {
      className: "font-semibold text-[#8b5e3c]",
      children: "Используй Would you like to…? и I’d like to… На ферме, со своим другом."
    }), c.jsx("p", {
      className: "mt-1 text-sm font-bold text-[#2d5a18]",
      children: "Write a 4–6 line dialogue on the farm with a friend. Use Would you like to…? and I’d like to…"
    }), c.jsx("textarea", {
      rows: 8,
      value: A,
      onChange: O => o(O.target.value),
      className: "mt-3 w-full font-bold"
    }), c.jsxs("p", {
      className: "mt-2 text-sm font-bold",
      children: ["Реплик: ", z.length, " ", _ ? "· есть Would you like to" : "· добавь Would you like to", " ", C ? "· есть I’d like to" : ""]
    }), c.jsx(zl, {
      className: "mt-3",
      disabled: !M,
      onClick: T,
      children: "Сохранить диалог"
    })]
  })
}

function By({
  onDone: p
}) {
  const [T, A] = X.useState(() => ((wy() || {}).homework || {}).byAnswers || {}), o = Qr.filter(z => (T[z.id] || "").trim().length > 8).length;
  X.useEffect(() => {
    ttcPatch({
      homework: {
        byAnswers: T
      }
    })
  }, [T]);
  return c.jsxs("div", {
    className: "paper-card rounded-3xl p-5",
    children: [c.jsx("h3", {
      className: "font-display text-2xl text-[#6b4226]",
      children: "6 картинок — 6 приглашений"
    }), c.jsx("p", {
      className: "font-semibold text-[#8b5e3c]",
      children: "Напиши Would you like to…? к каждой картинке."
    }), c.jsx("p", {
      className: "mt-1 text-sm font-bold text-[#2d5a18]",
      children: "Write a Would you like to…? invitation for each of the six pictures."
    }), c.jsx("div", {
      className: "mt-4 grid gap-4 sm:grid-cols-2",
      children: Qr.map(z => c.jsxs("div", {
        className: "overflow-hidden rounded-2xl border-3 border-[#c4a574] bg-white",
        children: [c.jsx("img", {
          src: z.image,
          alt: z.label,
          className: "h-32 w-full object-cover"
        }), c.jsxs("div", {
          className: "p-3",
          children: [c.jsx("p", {
            className: "text-xs font-extrabold uppercase text-[#8b5e3c]",
            children: z.label
          }), c.jsx("input", {
            value: T[z.id] || "",
            placeholder: `Would you like to ${z.hint}?`,
            onChange: _ => A(C => ({
              ...C,
              [z.id]: _.target.value
            })),
            className: "mt-1 w-full font-bold"
          })]
        })]
      }, z.id))
    }), c.jsxs(zl, {
      className: "mt-4",
      disabled: o < 6,
      onClick: p,
      children: ["Сохранить приглашения (", o, "/6)"]
    })]
  })
}

function Gy({
  onDone: p
}) {
  const [T, A] = X.useState(() => ((wy() || {}).homework || {}).gyAnswers || {}), [o, z] = X.useState(!1);
  X.useEffect(() => {
    ttcPatch({
      homework: {
        gyAnswers: T
      }
    })
  }, [T]);
  let _ = 0;
  return o && Xr.forEach(C => {
    zf(T[C.id] || "", C.right) && (_ += 1)
  }), c.jsxs("div", {
    className: "paper-card rounded-3xl p-5",
    children: [c.jsx("h3", {
      className: "font-display text-2xl text-[#6b4226]",
      children: "Исправь 8 предложений"
    }), c.jsx("p", {
      className: "font-semibold text-[#8b5e3c]",
      children: "Перепиши каждую фразу правильно."
    }), c.jsx("p", {
      className: "mt-1 text-sm font-bold text-[#2d5a18]",
      children: "Rewrite each sentence correctly. Check your work when you are ready."
    }), c.jsx("div", {
      className: "mt-3 space-y-3",
      children: Xr.map((C, M) => {
        const O = o && zf(T[C.id] || "", C.right),
          g = o && !O;
        return c.jsxs("div", {
          className: `rounded-2xl p-3 ${O?"hw-done":""} border-2 border-[#c4a574]`,
          children: [c.jsxs("p", {
            className: "font-extrabold text-[#e53935]",
            children: [M + 1, ". ", C.wrong]
          }), c.jsx("input", {
            value: T[C.id] || "",
            onChange: Q => A(D => ({
              ...D,
              [C.id]: Q.target.value
            })),
            placeholder: "Правильный вариант…",
            className: "mt-2 w-full font-bold"
          }), g && c.jsxs("p", {
            className: "mt-1 text-sm font-bold text-[#3d7a28]",
            children: ["→ ", C.right]
          })]
        }, C.id)
      })
    }), o ? c.jsxs("div", {
      className: "mt-4 space-y-2",
      children: [c.jsx(Ht, {
        ok: _ >= 6,
        text: `Верно ${_} из 8`
      }), c.jsx(zl, {
        onClick: p,
        children: "Сохранить"
      })]
    }) : c.jsx(zl, {
      className: "mt-4",
      onClick: () => z(!0),
      children: "Проверить"
    })]
  })
}

function Xy({
  name: p,
  onDone: T
}) {
  const [A, o] = X.useState(() => {
    const z = ((wy() || {}).homework || {}).xyText;
    return typeof z == "string" ? z : `Hi! I'm ${p}, a Junior Farm Guide. Would you like to come to City Farm with me? I'd like to `
  }), z = /would you like to/i.test(A) && A.trim().length > 40;
  X.useEffect(() => {
    ttcPatch({
      homework: {
        xyText: A
      }
    })
  }, [A]);
  return c.jsxs("div", {
    className: "paper-card rounded-3xl p-5",
    children: [c.jsx("h3", {
      className: "font-display text-2xl text-[#6b4226]",
      children: "Пригласи друга на ферму"
    }), c.jsx("p", {
      className: "font-semibold text-[#8b5e3c]",
      children: "Напиши (или прочитай вслух) приглашение. Можно нажать 🔊 и послушать свою фразу."
    }), c.jsx("p", {
      className: "mt-1 text-sm font-bold text-[#2d5a18]",
      children: "Write (or read aloud) an invitation to a friend. You can tap 🔊 to hear your sentence."
    }), c.jsx("textarea", {
      rows: 5,
      value: A,
      onChange: _ => o(_.target.value),
      className: "mt-3 w-full font-bold"
    }), c.jsxs("div", {
      className: "mt-3 flex flex-wrap gap-2",
      children: [c.jsx("button", {
        type: "button",
        className: "sky-btn rounded-2xl px-4 py-2 font-extrabold",
        onClick: () => Rt(A),
        children: "🔊 Прослушать"
      }), c.jsx(zl, {
        disabled: !z,
        onClick: T,
        children: "Сохранить приглашение"
      })]
    })]
  })
}

function Qy({
  onDone: p
}) {
  const [T, A] = X.useState(() => {
    const M = ((wy() || {}).homework || {}).qSome;
    return Array.isArray(M) && M.length === 4 ? M : ["", "", "", ""]
  }), [o, z] = X.useState(() => {
    const M = ((wy() || {}).homework || {}).qTo;
    return Array.isArray(M) && M.length === 4 ? M : ["", "", "", ""]
  }), _ = T.filter(M => /would you like some /i.test(M)).length, C = o.filter(M => /would you like to /i.test(M)).length;
  X.useEffect(() => {
    ttcPatch({
      homework: {
        qSome: T,
        qTo: o
      }
    })
  }, [T, o]);
  return c.jsxs("div", {
    className: "paper-card rounded-3xl p-5",
    children: [c.jsx("h3", {
      className: "font-display text-2xl text-[#6b4226]",
      children: "8 вопросов: еда и действие"
    }), c.jsx("p", {
      className: "mt-1 text-sm font-bold text-[#2d5a18]",
      children: "Write eight questions: four with Would you like some…? (food) and four with Would you like to…? (action)."
    }), c.jsxs("div", {
      className: "mt-4 grid gap-5 md:grid-cols-2",
      children: [c.jsxs("div", {
        children: [c.jsx("p", {
          className: "font-extrabold text-[#e53935]",
          children: "Would you like some…? (еда)"
        }), T.map((M, O) => c.jsx("input", {
          value: M,
          placeholder: "Would you like some strawberries?",
          onChange: g => A(Q => Q.map((D, W) => W === O ? g.target.value : D)),
          className: "mt-2 w-full font-bold"
        }, O)), c.jsxs("p", {
          className: "mt-1 text-sm font-bold",
          children: [_, " / 4 с some"]
        })]
      }), c.jsxs("div", {
        children: [c.jsx("p", {
          className: "font-extrabold text-[#3d7a28]",
          children: "Would you like to…? (действие)"
        }), o.map((M, O) => c.jsx("input", {
          value: M,
          placeholder: "Would you like to feed the lambs?",
          onChange: g => z(Q => Q.map((D, W) => W === O ? g.target.value : D)),
          className: "mt-2 w-full font-bold"
        }, O)), c.jsxs("p", {
          className: "mt-1 text-sm font-bold",
          children: [C, " / 4 с to + verb"]
        })]
      })]
    }), c.jsx(zl, {
      className: "mt-4",
      disabled: _ < 4 || C < 4,
      onClick: p,
      children: "Сохранить 8 вопросов"
    })]
  })
}

function ky({
  name: p,
  stamps: T,
  onHome: A
}) {
  const o = Object.values(T).filter(Boolean).length;
  return c.jsxs("div", {
    className: "farm-bg relative min-h-screen px-4 py-10",
    children: [c.jsx(wr, {}), c.jsx("div", {
      className: "relative z-10 mx-auto max-w-2xl fade-up",
      children: c.jsxs("div", {
        className: "overflow-hidden rounded-[32px] border-4 border-[#8b5e3c] bg-[#fff8e7] shadow-[0_16px_0_#6b4226]",
        children: [c.jsx("img", {
          src: "./images/certificate.jpg",
          alt: "",
          className: "h-44 w-full object-cover"
        }), c.jsxs("div", {
          className: "px-6 py-7 text-center sm:px-10",
          children: [c.jsx("p", {
            className: "text-sm font-extrabold uppercase tracking-[0.25em] text-[#8b5e3c]",
            children: "City Farm Certificate"
          }), c.jsx("h1", {
            className: "font-display mt-1 text-4xl text-[#3d7a28]",
            children: "Junior Farm Guide"
          }), c.jsx("p", {
            className: "mt-3 text-lg font-bold text-[#6b4226]",
            children: "Этот сертификат подтверждает, что"
          }), c.jsx("p", {
            className: "font-display my-2 text-3xl text-[#8b5e3c]",
            children: p
          }), c.jsxs("p", {
            className: "font-bold text-[#6b4226]",
            children: ["умеет вежливо приглашать:", " ", c.jsx("span", {
              className: "text-[#1b679e]",
              children: "Would you like to + verb?"
            }), c.jsx("br", {}), "и отвечать: ", c.jsx("span", {
              className: "text-[#1b679e]",
              children: "I’d like to + verb."
            })]
          }), c.jsx("div", {
            className: "mx-auto mt-6 grid max-w-sm grid-cols-4 gap-2",
            children: Da.map(z => c.jsxs("div", {
              className: "text-center",
              children: [c.jsx("div", {
                className: `stamp-seal mx-auto ${T[z.id]?"unlocked":"locked"}`,
                children: c.jsx("span", {
                  className: "text-3xl",
                  children: z.emoji
                })
              }), c.jsx("p", {
                className: "mt-1 text-[11px] font-extrabold",
                children: z.titleRu
              })]
            }, z.id))
          }), c.jsxs("p", {
            className: "mt-5 font-extrabold text-[#3d7a28]",
            children: ["Печатей собрано: ", o, " / 4"]
          }), c.jsx("p", {
            className: "mt-1 text-sm font-semibold text-[#8b5e3c]",
            children: "Academy Stars 2 · Unit 8 · Lesson 6 · Language in use"
          }), c.jsx(zl, {
            className: "mt-6",
            onClick: A,
            children: "Начать урок заново"
          })]
        })]
      })
    })]
  })
}
const Zr = 2700,
  Zy = {
    2: "lambs",
    3: "strawberries",
    4: "goats",
    5: "tractor"
  };

const TTC_KEY = "tutorcall-city-farm-tour-v1";
const TTC_AUDIO = "./audio/city-farm-dialogue.mp3";

function wy() {
  try {
    const p = localStorage.getItem(TTC_KEY);
    return p ? JSON.parse(p) : null
  } catch {
    return null
  }
}

function ttcPatch(p) {
  try {
    const A = wy() || {};
    const o = {
      ...A,
      ...p
    };
    if (p && p.orders) o.orders = {
      ...(A.orders || {}),
      ...p.orders
    };
    if (p && p.homework) o.homework = {
      ...(A.homework || {}),
      ...p.homework
    };
    if (p && p.task) o.task = {
      ...(A.task || {}),
      ...p.task
    };
    localStorage.setItem(TTC_KEY, JSON.stringify(o));
    return o
  } catch {
    return wy()
  }
}

function ttcConfirmReset() {
  if (!confirm("Начать заново? Весь прогресс по уроку и домашнему заданию будет удалён.")) return;
  try {
    localStorage.removeItem(TTC_KEY)
  } catch {}
  location.reload()
}

function ttcGetOrShuffle(p, T, A) {
  const o = ((wy() || {}).orders || {})[p],
    z = Object.fromEntries(T.map(_ => [A(_), _]));
  if (Array.isArray(o) && o.length === T.length && o.every(_ => z[_])) return o.map(_ => z[_]);
  const C = $n(T);
  ttcPatch({
    orders: {
      [p]: C.map(A)
    }
  });
  return C
}

function ttcGetOrShuffleWords(p, T) {
  const A = ((wy() || {}).orders || {}).unjumble || {},
    o = A[p],
    z = [...T].slice().sort().join("\0"),
    _ = Array.isArray(o) && o.length === T.length && [...o].slice().sort().join("\0") === z;
  if (_) return o;
  const C = $n(T);
  ttcPatch({
    orders: {
      unjumble: {
        ...A,
        [p]: C
      }
    }
  });
  return C
}

function playFarmDialogue() {
  try {
    window.speechSynthesis && window.speechSynthesis.cancel()
  } catch {}
  const p = document.getElementById("farm-dialogue-audio");
  if (p) {
    try {
      p.currentTime = 0
    } catch {}
    const T = p.play();
    T && T.catch && T.catch(() => {})
  }
}

function Ly() {
  const p = X.useMemo(() => wy(), []),
    [T, A] = X.useState(p?.screen ?? "welcome"),
    [o, z] = X.useState(p?.name ?? ""),
    [_, C] = X.useState(p?.activity ?? 1),
    [M, O] = X.useState(p?.completed ?? []),
    [g, Q] = X.useState(p?.stamps ?? {
      lambs: !1,
      strawberries: !1,
      goats: !1,
      tractor: !1
    }),
    [D, W] = X.useState(!1),
    [w, Z] = X.useState(p?.seconds ?? Zr),
    [K, q] = X.useState(T === "lesson"),
    [k, $] = X.useState(null),
    [ul, H] = X.useState(p?.maxReached ?? 1);
  X.useEffect(() => {
    const F = wy() || {};
    localStorage.setItem(TTC_KEY, JSON.stringify({
      ...F,
      screen: T,
      name: o,
      activity: _,
      completed: M,
      stamps: g,
      seconds: w,
      maxReached: ul
    }))
  }, [T, o, _, M, g, w, ul]), X.useEffect(() => {
    if (!K) return;
    const F = setInterval(() => {
      Z(Kl => Math.max(0, Kl - 1))
    }, 1e3);
    return () => clearInterval(F)
  }, [K]);

  function fl(F) {
    try {
      localStorage.removeItem(TTC_KEY)
    } catch {}
    z(F), A("lesson"), q(!0), C(1), O([]), Q({
      lambs: !1,
      strawberries: !1,
      goats: !1,
      tractor: !1
    }), Z(Zr), H(1)
  }

  function al(F, Kl) {
    if (!M.includes(F)) {
      O(V => [...V, F]);
      const U = Zy[F];
      U && (Q(V => ({
        ...V,
        [U]: !0
      })), $(U))
    }
    const x = Math.min(6, F + 1);
    H(U => Math.max(U, x)), F === 6 ? (q(!1), A("homework")) : C(x), window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  if (T === "welcome") return c.jsx(Ty, {
    onStart: fl
  });
  if (T === "done") return c.jsx(ky, {
    name: o,
    stamps: g,
    onHome: () => {
      ttcConfirmReset()
    }
  });
  const I = String(Math.floor(w / 60)).padStart(2, "0"),
    Cl = String(w % 60).padStart(2, "0"),
    vt = w < 180 ? "hot" : w < 600 ? "warn" : "",
    le = (M.length + (T === "homework" ? 1 : 0)) / 7 * 100,
    nt = Gr.find(F => F.id === _),
    Vl = Object.values(g).filter(Boolean).length;
  return c.jsxs("div", {
    className: "farm-bg min-h-screen",
    children: [k && c.jsx(wr, {}), c.jsxs("header", {
      className: "sticky top-0 z-30 border-b-4 border-[#6b4226] bg-[#fff8e7]/95 backdrop-blur",
      children: [c.jsxs("div", {
        className: "mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-3 py-2 sm:px-6",
        children: [c.jsxs("div", {
          className: "flex items-center gap-2 font-display text-lg text-[#3d7a28]",
          children: [c.jsx("img", {
            src: "./images/guide-portrait.jpg",
            alt: "",
            className: "h-10 w-10 rounded-full object-cover ring-2 ring-[#8b5e3c]"
          }), c.jsx("span", {
            className: "hidden sm:inline",
            children: "City Farm"
          })]
        }), c.jsx("div", {
          className: "flex flex-1 items-center justify-center gap-2 sm:gap-3",
          children: Da.map(F => c.jsxs("div", {
            className: "flex flex-col items-center",
            title: F.missionRu,
            children: [c.jsx("div", {
              className: `stamp-seal h-12 w-12 sm:h-[68px] sm:w-[68px] ${g[F.id]?"unlocked":"locked"}`,
              children: c.jsx("span", {
                className: "text-xl sm:text-3xl",
                children: F.emoji
              })
            }), c.jsx("span", {
              className: "hidden text-[10px] font-extrabold text-[#6b4226] sm:block",
              children: F.titleRu
            })]
          }, F.id))
        }), c.jsxs("div", {
          className: `timer-pill shrink-0 rounded-full px-3 py-1 font-extrabold ${vt}`,
          children: ["⏱ ", I, ":", Cl]
        }), c.jsx("button", {
          type: "button",
          onClick: () => W(!0),
          className: "straw-btn shrink-0 rounded-full px-4 py-2 text-sm font-extrabold",
          children: "Правила"
        }), c.jsx("button", {
          type: "button",
          onClick: ttcConfirmReset,
          className: "ttc-reset shrink-0 rounded-full px-4 py-2 text-sm font-extrabold",
          children: "↺ Начать заново"
        })]
      }), c.jsx("div", {
        className: "progress-track mx-auto max-w-6xl",
        children: c.jsx("div", {
          className: "progress-fill",
          style: {
            width: `${le}%`
          }
        })
      })]
    }), c.jsxs("div", {
      className: "mx-auto grid max-w-6xl gap-5 px-3 py-5 sm:px-6 lg:grid-cols-[220px_1fr]",
      children: [c.jsxs("aside", {
        className: "paper-card h-fit rounded-3xl p-4",
        children: [c.jsxs("div", {
          className: "flex items-center gap-2",
          children: [c.jsx("img", {
            src: "./images/guide-portrait.jpg",
            alt: "",
            className: "h-12 w-12 rounded-full object-cover ring-2 ring-[#f5c842]"
          }), c.jsxs("div", {
            children: [c.jsx("p", {
              className: "text-xs font-extrabold uppercase text-[#8b5e3c]",
              children: "Junior Guide"
            }), c.jsx("p", {
              className: "font-display text-lg leading-tight text-[#3d7a28]",
              children: o
            })]
          })]
        }), c.jsxs("p", {
          className: "mt-3 text-sm font-bold text-[#6b4226]",
          children: ["Печати ", Vl, "/4"]
        }), c.jsxs("nav", {
          className: "mt-3 flex flex-col gap-1.5",
          children: [Gr.map(F => {
            const Kl = F.id > ul,
              Fl = T === "lesson" && _ === F.id,
              x = M.includes(F.id);
            return c.jsxs("button", {
              type: "button",
              disabled: Kl,
              onClick: () => {
                A("lesson"), C(F.id), q(!0)
              },
              className: `rounded-xl px-3 py-2 text-left text-sm font-extrabold transition ${Fl?"bg-[#3d7a28] text-white":x?"bg-[#e8f5d4] text-[#2d5a18]":Kl?"cursor-not-allowed bg-[#efe6d6] text-[#6b4226]":"bg-white text-[#6b4226] hover:bg-[#fff3c4]"}`,
              children: [x ? "✓ " : Kl ? "🔒 " : `${F.id}. `, F.titleRu]
            }, F.id)
          }), c.jsxs("button", {
            type: "button",
            onClick: () => {
              M.includes(6) && (A("homework"), q(!1))
            },
            disabled: !M.includes(6),
            className: `rounded-xl px-3 py-2 text-left text-sm font-extrabold ${T==="homework"?"bg-[#3d7a28] text-white":M.includes(6)?"bg-[#fff3c4] text-[#6b4226]":"cursor-not-allowed bg-[#efe6d6] text-[#6b4226]"}`,
            children: [M.includes(6) ? "🏡 " : "🔒 ", "Домашнее задание"]
          })]
        }), c.jsx("p", {
          className: "mt-3 text-[11px] font-bold leading-snug text-[#8b5e3c]",
          children: "Урок 45 минут. Карточки «Правила» всегда доступны. Форматы: drag & drop, тест, matching, unjumble, выбор, пропуски."
        }), c.jsx("img", {
          src: "./images/kids-guests.jpg",
          alt: "Майя и Лео — гости фермы",
          className: "mt-3 h-24 w-full rounded-2xl object-cover ring-2 ring-[#c4a574]"
        })]
      }), c.jsx("main", {
        className: "paper-card rounded-3xl p-4 sm:p-6",
        children: T === "homework" ? c.jsx(Yy, {
          name: o,
          onFinish: () => A("done")
        }) : c.jsxs(c.Fragment, {
          children: [c.jsxs("div", {
            className: "mb-4 flex flex-wrap items-center gap-2 rounded-2xl bg-[#e8f5d4] px-3 py-2 text-sm font-bold text-[#2d5a18]",
            children: [c.jsxs("span", {
              children: ["🎯 ", nt.goal]
            }), c.jsx("span", {
              className: "ml-auto text-[#6b4226]",
              children: nt.minutes
            })]
          }), _ === 1 && c.jsx(_y, {
            onComplete: F => al(1)
          }), _ === 2 && c.jsx(Oy, {
            onComplete: F => al(2)
          }), _ === 3 && c.jsx(My, {
            onComplete: F => al(3)
          }), _ === 4 && c.jsx(Dy, {
            onComplete: F => al(4)
          }), _ === 5 && c.jsx(Cy, {
            onComplete: F => al(5)
          }), _ === 6 && c.jsx(Ry, {
            onComplete: F => al(6)
          })]
        })
      })]
    }), w === 0 && T === "lesson" && c.jsx("div", {
      className: "fixed bottom-4 left-1/2 z-40 w-[min(92%,420px)] -translate-x-1/2 rounded-2xl border-3 border-[#8b5e3c] bg-[#fff3c4] px-4 py-3 text-center font-extrabold text-[#6b4226] shadow-xl",
      children: "45 минут прошли — можно закончить или доделать задания."
    }), c.jsxs("footer", {
      className: "relative mt-4 overflow-hidden pb-6 pt-8 text-center",
      children: [c.jsx("div", {
        className: "pointer-events-none absolute inset-x-0 top-0 h-10 bg-[radial-gradient(ellipse_at_top,_#3d7a28_0,_#3d7a28_40%,_transparent_42%)] opacity-40"
      }), c.jsx("p", {
        className: "relative text-sm font-extrabold text-[#3d7a28]",
        children: "🐑 🍓 🐐 🚜 City Farm · Would you like to…? · I’d like to…"
      })]
    }), D && c.jsx(Ay, {
      onClose: () => W(!1)
    }), k && c.jsx("div", {
      className: "fixed inset-0 z-50 grid place-items-center bg-[#1d3b12]/50 p-4",
      children: c.jsxs("div", {
        className: "paper-card w-full max-w-sm rounded-3xl p-6 text-center fade-up",
        children: [c.jsx("div", {
          className: "stamp-seal unlocked mx-auto h-24 w-24",
          children: c.jsx("span", {
            className: "text-5xl",
            children: Da.find(F => F.id === k)?.emoji
          })
        }), c.jsx("h3", {
          className: "font-display mt-4 text-3xl text-[#3d7a28]",
          children: "Печать открыта!"
        }), c.jsxs("p", {
          className: "mt-1 font-extrabold text-[#6b4226]",
          children: [Da.find(F => F.id === k)?.titleRu, " —", " ", Da.find(F => F.id === k)?.missionRu]
        }), c.jsxs("p", {
          className: "mt-2 font-bold text-[#1b679e]",
          children: ["Would you like to ", Da.find(F => F.id === k)?.mission, "?"]
        }), c.jsx("button", {
          type: "button",
          className: "grass-btn mt-5 rounded-2xl px-6 py-3 font-extrabold",
          onClick: () => $(null),
          children: "Продолжить тур"
        })]
      })
    })]
  })
}
Ny.createRoot(document.getElementById("root")).render(c.jsx(X.StrictMode, {
  children: c.jsx(Ly, {})
}));