(function() {
  const b = document.createElement("link").relList;
  if (b && b.supports && b.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) d(R);
  new MutationObserver(R => {
    for (const O of R)
      if (O.type === "childList")
        for (const Y of O.addedNodes) Y.tagName === "LINK" && Y.rel === "modulepreload" && d(Y)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function z(R) {
    const O = {};
    return R.integrity && (O.integrity = R.integrity), R.referrerPolicy && (O.referrerPolicy = R.referrerPolicy), R.crossOrigin === "use-credentials" ? O.credentials = "include" : R.crossOrigin === "anonymous" ? O.credentials = "omit" : O.credentials = "same-origin", O
  }

  function d(R) {
    if (R.ep) return;
    R.ep = !0;
    const O = z(R);
    fetch(R.href, O)
  }
})();
var Mu = {
    exports: {}
  },
  Gn = {};
var Ud;

function Jm() {
  if (Ud) return Gn;
  Ud = 1;
  var y = Symbol.for("react.transitional.element"),
    b = Symbol.for("react.fragment");

  function z(d, R, O) {
    var Y = null;
    if (O !== void 0 && (Y = "" + O), R.key !== void 0 && (Y = "" + R.key), "key" in R) {
      O = {};
      for (var P in R) P !== "key" && (O[P] = R[P])
    } else O = R;
    return R = O.ref, {
      $$typeof: y,
      type: d,
      key: Y,
      ref: R !== void 0 ? R : null,
      props: O
    }
  }
  return Gn.Fragment = b, Gn.jsx = z, Gn.jsxs = z, Gn
}
var Hd;

function Wm() {
  return Hd || (Hd = 1, Mu.exports = Jm()), Mu.exports
}
var i = Wm(),
  Cu = {
    exports: {}
  },
  te = {};
var qd;

function $m() {
  if (qd) return te;
  qd = 1;
  var y = Symbol.for("react.transitional.element"),
    b = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    O = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    _ = Symbol.for("react.activity"),
    L = Symbol.iterator;

  function ne(u) {
    return u === null || typeof u != "object" ? null : (u = L && u[L] || u["@@iterator"], typeof u == "function" ? u : null)
  }
  var ce = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    $ = Object.assign,
    ae = {};

  function ee(u, m, S) {
    this.props = u, this.context = m, this.refs = ae, this.updater = S || ce
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(u, m) {
    if (typeof u != "object" && typeof u != "function" && u != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, u, m, "setState")
  }, ee.prototype.forceUpdate = function(u) {
    this.updater.enqueueForceUpdate(this, u, "forceUpdate")
  };

  function Se() {}
  Se.prototype = ee.prototype;

  function me(u, m, S) {
    this.props = u, this.context = m, this.refs = ae, this.updater = S || ce
  }
  var ze = me.prototype = new Se;
  ze.constructor = me, $(ze, ee.prototype), ze.isPureReactComponent = !0;
  var ke = Array.isArray;

  function de() {}
  var W = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    Ue = Object.prototype.hasOwnProperty;

  function it(u, m, S) {
    var C = S.ref;
    return {
      $$typeof: y,
      type: u,
      key: m,
      ref: C !== void 0 ? C : null,
      props: S
    }
  }

  function Mt(u, m) {
    return it(u.type, m, u.props)
  }

  function ct(u) {
    return typeof u == "object" && u !== null && u.$$typeof === y
  }

  function Qe(u) {
    var m = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + u.replace(/[=:]/g, function(S) {
      return m[S]
    })
  }
  var Yt = /\/+/g;

  function ut(u, m) {
    return typeof u == "object" && u !== null && u.key != null ? Qe("" + u.key) : m.toString(36)
  }

  function Ze(u) {
    switch (u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw u.reason;
      default:
        switch (typeof u.status == "string" ? u.then(de, de) : (u.status = "pending", u.then(function(m) {
            u.status === "pending" && (u.status = "fulfilled", u.value = m)
          }, function(m) {
            u.status === "pending" && (u.status = "rejected", u.reason = m)
          })), u.status) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw u.reason
        }
    }
    throw u
  }

  function N(u, m, S, C, k) {
    var H = typeof u;
    (H === "undefined" || H === "boolean") && (u = null);
    var U = !1;
    if (u === null) U = !0;
    else switch (H) {
      case "bigint":
      case "string":
      case "number":
        U = !0;
        break;
      case "object":
        switch (u.$$typeof) {
          case y:
          case b:
            U = !0;
            break;
          case X:
            return U = u._init, N(U(u._payload), m, S, C, k)
        }
    }
    if (U) return k = k(u), U = C === "" ? "." + ut(u, 0) : C, ke(k) ? (S = "", U != null && (S = U.replace(Yt, "$&/") + "/"), N(k, m, S, "", function(Ne) {
      return Ne
    })) : k != null && (ct(k) && (k = Mt(k, S + (k.key == null || u && u.key === k.key ? "" : ("" + k.key).replace(Yt, "$&/") + "/") + U)), m.push(k)), 1;
    U = 0;
    var K = C === "" ? "." : C + ":";
    if (ke(u))
      for (var F = 0; F < u.length; F++) C = u[F], H = K + ut(C, F), U += N(C, m, S, H, k);
    else if (F = ne(u), typeof F == "function")
      for (u = F.call(u), F = 0; !(C = u.next()).done;) C = C.value, H = K + ut(C, F++), U += N(C, m, S, H, k);
    else if (H === "object") {
      if (typeof u.then == "function") return N(Ze(u), m, S, C, k);
      throw m = String(u), Error("Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead.")
    }
    return U
  }

  function q(u, m, S) {
    if (u == null) return u;
    var C = [],
      k = 0;
    return N(u, C, "", "", function(H) {
      return m.call(S, H, k++)
    }), C
  }

  function Z(u) {
    if (u._status === -1) {
      var m = u._result;
      m = m(), m.then(function(S) {
        (u._status === 0 || u._status === -1) && (u._status = 1, u._result = S)
      }, function(S) {
        (u._status === 0 || u._status === -1) && (u._status = 2, u._result = S)
      }), u._status === -1 && (u._status = 0, u._result = m)
    }
    if (u._status === 1) return u._result.default;
    throw u._result
  }
  var E = typeof reportError == "function" ? reportError : function(u) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var m = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof u == "object" && u !== null && typeof u.message == "string" ? String(u.message) : String(u),
          error: u
        });
        if (!window.dispatchEvent(m)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", u);
        return
      }
      console.error(u)
    },
    f = {
      map: q,
      forEach: function(u, m, S) {
        q(u, function() {
          m.apply(this, arguments)
        }, S)
      },
      count: function(u) {
        var m = 0;
        return q(u, function() {
          m++
        }), m
      },
      toArray: function(u) {
        return q(u, function(m) {
          return m
        }) || []
      },
      only: function(u) {
        if (!ct(u)) throw Error("React.Children.only expected to receive a single React element child.");
        return u
      }
    };
  return te.Activity = _, te.Children = f, te.Component = ee, te.Fragment = z, te.Profiler = R, te.PureComponent = me, te.StrictMode = d, te.Suspense = D, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(u) {
      return W.H.useMemoCache(u)
    }
  }, te.cache = function(u) {
    return function() {
      return u.apply(null, arguments)
    }
  }, te.cacheSignal = function() {
    return null
  }, te.cloneElement = function(u, m, S) {
    if (u == null) throw Error("The argument must be a React element, but you passed " + u + ".");
    var C = $({}, u.props),
      k = u.key;
    if (m != null)
      for (H in m.key !== void 0 && (k = "" + m.key), m) !Ue.call(m, H) || H === "key" || H === "__self" || H === "__source" || H === "ref" && m.ref === void 0 || (C[H] = m[H]);
    var H = arguments.length - 2;
    if (H === 1) C.children = S;
    else if (1 < H) {
      for (var U = Array(H), K = 0; K < H; K++) U[K] = arguments[K + 2];
      C.children = U
    }
    return it(u.type, k, C)
  }, te.createContext = function(u) {
    return u = {
      $$typeof: Y,
      _currentValue: u,
      _currentValue2: u,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, u.Provider = u, u.Consumer = {
      $$typeof: O,
      _context: u
    }, u
  }, te.createElement = function(u, m, S) {
    var C, k = {},
      H = null;
    if (m != null)
      for (C in m.key !== void 0 && (H = "" + m.key), m) Ue.call(m, C) && C !== "key" && C !== "__self" && C !== "__source" && (k[C] = m[C]);
    var U = arguments.length - 2;
    if (U === 1) k.children = S;
    else if (1 < U) {
      for (var K = Array(U), F = 0; F < U; F++) K[F] = arguments[F + 2];
      k.children = K
    }
    if (u && u.defaultProps)
      for (C in U = u.defaultProps, U) k[C] === void 0 && (k[C] = U[C]);
    return it(u, H, k)
  }, te.createRef = function() {
    return {
      current: null
    }
  }, te.forwardRef = function(u) {
    return {
      $$typeof: P,
      render: u
    }
  }, te.isValidElement = ct, te.lazy = function(u) {
    return {
      $$typeof: X,
      _payload: {
        _status: -1,
        _result: u
      },
      _init: Z
    }
  }, te.memo = function(u, m) {
    return {
      $$typeof: T,
      type: u,
      compare: m === void 0 ? null : m
    }
  }, te.startTransition = function(u) {
    var m = W.T,
      S = {};
    W.T = S;
    try {
      var C = u(),
        k = W.S;
      k !== null && k(S, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(de, E)
    } catch (H) {
      E(H)
    } finally {
      m !== null && S.types !== null && (m.types = S.types), W.T = m
    }
  }, te.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh()
  }, te.use = function(u) {
    return W.H.use(u)
  }, te.useActionState = function(u, m, S) {
    return W.H.useActionState(u, m, S)
  }, te.useCallback = function(u, m) {
    return W.H.useCallback(u, m)
  }, te.useContext = function(u) {
    return W.H.useContext(u)
  }, te.useDebugValue = function() {}, te.useDeferredValue = function(u, m) {
    return W.H.useDeferredValue(u, m)
  }, te.useEffect = function(u, m) {
    return W.H.useEffect(u, m)
  }, te.useEffectEvent = function(u) {
    return W.H.useEffectEvent(u)
  }, te.useId = function() {
    return W.H.useId()
  }, te.useImperativeHandle = function(u, m, S) {
    return W.H.useImperativeHandle(u, m, S)
  }, te.useInsertionEffect = function(u, m) {
    return W.H.useInsertionEffect(u, m)
  }, te.useLayoutEffect = function(u, m) {
    return W.H.useLayoutEffect(u, m)
  }, te.useMemo = function(u, m) {
    return W.H.useMemo(u, m)
  }, te.useOptimistic = function(u, m) {
    return W.H.useOptimistic(u, m)
  }, te.useReducer = function(u, m, S) {
    return W.H.useReducer(u, m, S)
  }, te.useRef = function(u) {
    return W.H.useRef(u)
  }, te.useState = function(u) {
    return W.H.useState(u)
  }, te.useSyncExternalStore = function(u, m, S) {
    return W.H.useSyncExternalStore(u, m, S)
  }, te.useTransition = function() {
    return W.H.useTransition()
  }, te.version = "19.2.6", te
}
var Bd;

function ku() {
  return Bd || (Bd = 1, Cu.exports = $m()), Cu.exports
}
var I = ku(),
  zu = {
    exports: {}
  },
  Vn = {},
  Eu = {
    exports: {}
  },
  _u = {};
var Yd;

function Fm() {
  return Yd || (Yd = 1, (function(y) {
    function b(N, q) {
      var Z = N.length;
      N.push(q);
      e: for (; 0 < Z;) {
        var E = Z - 1 >>> 1,
          f = N[E];
        if (0 < R(f, q)) N[E] = q, N[Z] = f, Z = E;
        else break e
      }
    }

    function z(N) {
      return N.length === 0 ? null : N[0]
    }

    function d(N) {
      if (N.length === 0) return null;
      var q = N[0],
        Z = N.pop();
      if (Z !== q) {
        N[0] = Z;
        e: for (var E = 0, f = N.length, u = f >>> 1; E < u;) {
          var m = 2 * (E + 1) - 1,
            S = N[m],
            C = m + 1,
            k = N[C];
          if (0 > R(S, Z)) C < f && 0 > R(k, S) ? (N[E] = k, N[C] = Z, E = C) : (N[E] = S, N[m] = Z, E = m);
          else if (C < f && 0 > R(k, Z)) N[E] = k, N[C] = Z, E = C;
          else break e
        }
      }
      return q
    }

    function R(N, q) {
      var Z = N.sortIndex - q.sortIndex;
      return Z !== 0 ? Z : N.id - q.id
    }
    if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      y.unstable_now = function() {
        return O.now()
      }
    } else {
      var Y = Date,
        P = Y.now();
      y.unstable_now = function() {
        return Y.now() - P
      }
    }
    var D = [],
      T = [],
      X = 1,
      _ = null,
      L = 3,
      ne = !1,
      ce = !1,
      $ = !1,
      ae = !1,
      ee = typeof setTimeout == "function" ? setTimeout : null,
      Se = typeof clearTimeout == "function" ? clearTimeout : null,
      me = typeof setImmediate < "u" ? setImmediate : null;

    function ze(N) {
      for (var q = z(T); q !== null;) {
        if (q.callback === null) d(T);
        else if (q.startTime <= N) d(T), q.sortIndex = q.expirationTime, b(D, q);
        else break;
        q = z(T)
      }
    }

    function ke(N) {
      if ($ = !1, ze(N), !ce)
        if (z(D) !== null) ce = !0, de || (de = !0, Qe());
        else {
          var q = z(T);
          q !== null && Ze(ke, q.startTime - N)
        }
    }
    var de = !1,
      W = -1,
      Ue = 5,
      it = -1;

    function Mt() {
      return ae ? !0 : !(y.unstable_now() - it < Ue)
    }

    function ct() {
      if (ae = !1, de) {
        var N = y.unstable_now();
        it = N;
        var q = !0;
        try {
          e: {
            ce = !1,
            $ && ($ = !1, Se(W), W = -1),
            ne = !0;
            var Z = L;
            try {
              t: {
                for (ze(N), _ = z(D); _ !== null && !(_.expirationTime > N && Mt());) {
                  var E = _.callback;
                  if (typeof E == "function") {
                    _.callback = null, L = _.priorityLevel;
                    var f = E(_.expirationTime <= N);
                    if (N = y.unstable_now(), typeof f == "function") {
                      _.callback = f, ze(N), q = !0;
                      break t
                    }
                    _ === z(D) && d(D), ze(N)
                  } else d(D);
                  _ = z(D)
                }
                if (_ !== null) q = !0;
                else {
                  var u = z(T);
                  u !== null && Ze(ke, u.startTime - N), q = !1
                }
              }
              break e
            }
            finally {
              _ = null, L = Z, ne = !1
            }
            q = void 0
          }
        }
        finally {
          q ? Qe() : de = !1
        }
      }
    }
    var Qe;
    if (typeof me == "function") Qe = function() {
      me(ct)
    };
    else if (typeof MessageChannel < "u") {
      var Yt = new MessageChannel,
        ut = Yt.port2;
      Yt.port1.onmessage = ct, Qe = function() {
        ut.postMessage(null)
      }
    } else Qe = function() {
      ee(ct, 0)
    };

    function Ze(N, q) {
      W = ee(function() {
        N(y.unstable_now())
      }, q)
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(N) {
      N.callback = null
    }, y.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ue = 0 < N ? Math.floor(1e3 / N) : 5
    }, y.unstable_getCurrentPriorityLevel = function() {
      return L
    }, y.unstable_next = function(N) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = L
      }
      var Z = L;
      L = q;
      try {
        return N()
      } finally {
        L = Z
      }
    }, y.unstable_requestPaint = function() {
      ae = !0
    }, y.unstable_runWithPriority = function(N, q) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3
      }
      var Z = L;
      L = N;
      try {
        return q()
      } finally {
        L = Z
      }
    }, y.unstable_scheduleCallback = function(N, q, Z) {
      var E = y.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? E + Z : E) : Z = E, N) {
        case 1:
          var f = -1;
          break;
        case 2:
          f = 250;
          break;
        case 5:
          f = 1073741823;
          break;
        case 4:
          f = 1e4;
          break;
        default:
          f = 5e3
      }
      return f = Z + f, N = {
        id: X++,
        callback: q,
        priorityLevel: N,
        startTime: Z,
        expirationTime: f,
        sortIndex: -1
      }, Z > E ? (N.sortIndex = Z, b(T, N), z(D) === null && N === z(T) && ($ ? (Se(W), W = -1) : $ = !0, Ze(ke, Z - E))) : (N.sortIndex = f, b(D, N), ce || ne || (ce = !0, de || (de = !0, Qe()))), N
    }, y.unstable_shouldYield = Mt, y.unstable_wrapCallback = function(N) {
      var q = L;
      return function() {
        var Z = L;
        L = q;
        try {
          return N.apply(this, arguments)
        } finally {
          L = Z
        }
      }
    }
  })(_u)), _u
}
var Gd;

function Im() {
  return Gd || (Gd = 1, Eu.exports = Fm()), Eu.exports
}
var Ou = {
    exports: {}
  },
  lt = {};
var Vd;

function Pm() {
  if (Vd) return lt;
  Vd = 1;
  var y = ku();

  function b(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++) T += "&args[]=" + encodeURIComponent(arguments[X])
    }
    return "Minified React error #" + D + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function z() {}
  var d = {
      d: {
        f: z,
        r: function() {
          throw Error(b(522))
        },
        D: z,
        C: z,
        L: z,
        m: z,
        X: z,
        S: z,
        M: z
      },
      p: 0,
      findDOMNode: null
    },
    R = Symbol.for("react.portal");

  function O(D, T, X) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: _ == null ? null : "" + _,
      children: D,
      containerInfo: T,
      implementation: X
    }
  }
  var Y = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function P(D, T) {
    if (D === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : ""
  }
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, lt.createPortal = function(D, T) {
    var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(b(299));
    return O(D, T, null, X)
  }, lt.flushSync = function(D) {
    var T = Y.T,
      X = d.p;
    try {
      if (Y.T = null, d.p = 2, D) return D()
    } finally {
      Y.T = T, d.p = X, d.d.f()
    }
  }, lt.preconnect = function(D, T) {
    typeof D == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, d.d.C(D, T))
  }, lt.prefetchDNS = function(D) {
    typeof D == "string" && d.d.D(D)
  }, lt.preinit = function(D, T) {
    if (typeof D == "string" && T && typeof T.as == "string") {
      var X = T.as,
        _ = P(X, T.crossOrigin),
        L = typeof T.integrity == "string" ? T.integrity : void 0,
        ne = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      X === "style" ? d.d.S(D, typeof T.precedence == "string" ? T.precedence : void 0, {
        crossOrigin: _,
        integrity: L,
        fetchPriority: ne
      }) : X === "script" && d.d.X(D, {
        crossOrigin: _,
        integrity: L,
        fetchPriority: ne,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      })
    }
  }, lt.preinitModule = function(D, T) {
    if (typeof D == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var X = P(T.as, T.crossOrigin);
          d.d.M(D, {
            crossOrigin: X,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          })
        }
      } else T == null && d.d.M(D)
  }, lt.preload = function(D, T) {
    if (typeof D == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var X = T.as,
        _ = P(X, T.crossOrigin);
      d.d.L(D, X, {
        crossOrigin: _,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      })
    }
  }, lt.preloadModule = function(D, T) {
    if (typeof D == "string")
      if (T) {
        var X = P(T.as, T.crossOrigin);
        d.d.m(D, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: X,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        })
      } else d.d.m(D)
  }, lt.requestFormReset = function(D) {
    d.d.r(D)
  }, lt.unstable_batchedUpdates = function(D, T) {
    return D(T)
  }, lt.useFormState = function(D, T, X) {
    return Y.H.useFormState(D, T, X)
  }, lt.useFormStatus = function() {
    return Y.H.useHostTransitionStatus()
  }, lt.version = "19.2.6", lt
}
var Xd;

function ex() {
  if (Xd) return Ou.exports;
  Xd = 1;

  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)
    } catch (b) {
      console.error(b)
    }
  }
  return y(), Ou.exports = Pm(), Ou.exports
}
var Ld;

function tx() {
  if (Ld) return Vn;
  Ld = 1;
  var y = Im(),
    b = ku(),
    z = ex();

  function d(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function R(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function O(e) {
    var t = e,
      a = e;
    if (e.alternate)
      for (; t.return;) t = t.return;
    else {
      e = t;
      do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? a : null
  }

  function Y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function P(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function D(e) {
    if (O(e) !== e) throw Error(d(188))
  }

  function T(e) {
    var t = e.alternate;
    if (!t) {
      if (t = O(e), t === null) throw Error(d(188));
      return t !== e ? null : e
    }
    for (var a = e, l = t;;) {
      var n = a.return;
      if (n === null) break;
      var s = n.alternate;
      if (s === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue
        }
        break
      }
      if (n.child === s.child) {
        for (s = n.child; s;) {
          if (s === a) return D(n), e;
          if (s === l) return D(n), t;
          s = s.sibling
        }
        throw Error(d(188))
      }
      if (a.return !== l.return) a = n, l = s;
      else {
        for (var c = !1, r = n.child; r;) {
          if (r === a) {
            c = !0, a = n, l = s;
            break
          }
          if (r === l) {
            c = !0, l = n, a = s;
            break
          }
          r = r.sibling
        }
        if (!c) {
          for (r = s.child; r;) {
            if (r === a) {
              c = !0, a = s, l = n;
              break
            }
            if (r === l) {
              c = !0, l = s, a = n;
              break
            }
            r = r.sibling
          }
          if (!c) throw Error(d(189))
        }
      }
      if (a.alternate !== l) throw Error(d(190))
    }
    if (a.tag !== 3) throw Error(d(188));
    return a.stateNode.current === a ? e : t
  }

  function X(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (t = X(e), t !== null) return t;
      e = e.sibling
    }
    return null
  }
  var _ = Object.assign,
    L = Symbol.for("react.element"),
    ne = Symbol.for("react.transitional.element"),
    ce = Symbol.for("react.portal"),
    $ = Symbol.for("react.fragment"),
    ae = Symbol.for("react.strict_mode"),
    ee = Symbol.for("react.profiler"),
    Se = Symbol.for("react.consumer"),
    me = Symbol.for("react.context"),
    ze = Symbol.for("react.forward_ref"),
    ke = Symbol.for("react.suspense"),
    de = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    Ue = Symbol.for("react.lazy"),
    it = Symbol.for("react.activity"),
    Mt = Symbol.for("react.memo_cache_sentinel"),
    ct = Symbol.iterator;

  function Qe(e) {
    return e === null || typeof e != "object" ? null : (e = ct && e[ct] || e["@@iterator"], typeof e == "function" ? e : null)
  }
  var Yt = Symbol.for("react.client.reference");

  function ut(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case ee:
        return "Profiler";
      case ae:
        return "StrictMode";
      case ke:
        return "Suspense";
      case de:
        return "SuspenseList";
      case it:
        return "Activity"
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return "Portal";
      case me:
        return e.displayName || "Context";
      case Se:
        return (e._context.displayName || "Context") + ".Consumer";
      case ze:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case W:
        return t = e.displayName || null, t !== null ? t : ut(e.type) || "Memo";
      case Ue:
        t = e._payload, e = e._init;
        try {
          return ut(e(t))
        } catch {}
    }
    return null
  }
  var Ze = Array.isArray,
    N = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    E = [],
    f = -1;

  function u(e) {
    return {
      current: e
    }
  }

  function m(e) {
    0 > f || (e.current = E[f], E[f] = null, f--)
  }

  function S(e, t) {
    f++, E[f] = e.current, e.current = t
  }
  var C = u(null),
    k = u(null),
    H = u(null),
    U = u(null);

  function K(e, t) {
    switch (S(H, t), S(k, e), S(C, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? sd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = sd(t), e = id(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0
        }
    }
    m(C), S(C, e)
  }

  function F() {
    m(C), m(k), m(H)
  }

  function Ne(e) {
    e.memoizedState !== null && S(U, e);
    var t = C.current,
      a = id(t, e.type);
    t !== a && (S(k, e), S(C, a))
  }

  function ye(e) {
    k.current === e && (m(C), m(k)), U.current === e && (m(U), Hn._currentValue = Z)
  }
  var Ce, Be;

  function se(e) {
    if (Ce === void 0) try {
      throw Error()
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Ce = t && t[1] || "", Be = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + Ce + e + Be
  }
  var Ke = !1;

  function nt(e, t) {
    if (!e || Ke) return "";
    Ke = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error()
              };
              if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, [])
                } catch (j) {
                  var v = j
                }
                Reflect.construct(e, [], M)
              } else {
                try {
                  M.call()
                } catch (j) {
                  v = j
                }
                e.call(M.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (j) {
                v = j
              }(M = e()) && typeof M.catch == "function" && M.catch(function() {})
            }
          } catch (j) {
            if (j && v && typeof j.stack == "string") return [j.stack, v.stack]
          }
          return [null, null]
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var s = l.DetermineComponentFrameRoot(),
        c = s[0],
        r = s[1];
      if (c && r) {
        var o = c.split(`
`),
          p = r.split(`
`);
        for (n = l = 0; l < o.length && !o[l].includes("DetermineComponentFrameRoot");) l++;
        for (; n < p.length && !p[n].includes("DetermineComponentFrameRoot");) n++;
        if (l === o.length || n === p.length)
          for (l = o.length - 1, n = p.length - 1; 1 <= l && 0 <= n && o[l] !== p[n];) n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (o[l] !== p[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || o[l] !== p[n]) {
                  var w = `
` + o[l].replace(" at new ", " at ");
                  return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w
                } while (1 <= l && 0 <= n);
            break
          }
      }
    } finally {
      Ke = !1, Error.prepareStackTrace = a
    }
    return (a = e ? e.displayName || e.name : "") ? se(a) : ""
  }

  function gt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return se(e.type);
      case 16:
        return se("Lazy");
      case 13:
        return e.child !== t && t !== null ? se("Suspense Fallback") : se("Suspense");
      case 19:
        return se("SuspenseList");
      case 0:
      case 15:
        return nt(e.type, !1);
      case 11:
        return nt(e.type.render, !1);
      case 1:
        return nt(e.type, !0);
      case 31:
        return se("Activity");
      default:
        return ""
    }
  }

  function Ct(e) {
    try {
      var t = "",
        a = null;
      do t += gt(e, a), a = e, e = e.return; while (e);
      return t
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack
    }
  }
  var Gt = Object.prototype.hasOwnProperty,
    rt = y.unstable_scheduleCallback,
    Ql = y.unstable_cancelCallback,
    fi = y.unstable_shouldYield,
    di = y.unstable_requestPaint,
    at = y.unstable_now,
    hi = y.unstable_getCurrentPriorityLevel,
    Zl = y.unstable_ImmediatePriority,
    Ln = y.unstable_UserBlockingPriority,
    il = y.unstable_NormalPriority,
    Qn = y.unstable_LowPriority,
    Kl = y.unstable_IdlePriority,
    Jl = y.log,
    mi = y.unstable_setDisableYieldValue,
    qa = null,
    pt = null;

  function ha(e) {
    if (typeof Jl == "function" && mi(e), pt && typeof pt.setStrictMode == "function") try {
      pt.setStrictMode(qa, e)
    } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : D0,
    O0 = Math.log,
    R0 = Math.LN2;

  function D0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (O0(e) / R0 | 0) | 0
  }
  var Zn = 256,
    Kn = 262144,
    Jn = 4194304;

  function Ba(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e
    }
  }

  function Wn(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0,
      s = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~s, l !== 0 ? n = Ba(l) : (c &= r, c !== 0 ? n = Ba(c) : a || (a = r & ~e, a !== 0 && (n = Ba(a))))) : (r = l & ~s, r !== 0 ? n = Ba(r) : c !== 0 ? n = Ba(c) : a || (a = l & ~e, a !== 0 && (n = Ba(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & s) === 0 && (s = n & -n, a = t & -t, s >= a || s === 32 && (a & 4194048) !== 0) ? t : n
  }

  function Wl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }

  function k0(e, t) {
    switch (e) {
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

  function qu() {
    var e = Jn;
    return Jn <<= 1, (Jn & 62914560) === 0 && (Jn = 4194304), e
  }

  function xi(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t
  }

  function $l(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
  }

  function U0(e, t, a, l, n, s) {
    var c = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements,
      o = e.expirationTimes,
      p = e.hiddenUpdates;
    for (a = c & ~a; 0 < a;) {
      var w = 31 - yt(a),
        M = 1 << w;
      r[w] = 0, o[w] = -1;
      var v = p[w];
      if (v !== null)
        for (p[w] = null, w = 0; w < v.length; w++) {
          var j = v[w];
          j !== null && (j.lane &= -536870913)
        }
      a &= ~M
    }
    l !== 0 && Bu(e, l, 0), s !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(c & ~t))
  }

  function Bu(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - yt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930
  }

  function Yu(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a;) {
      var l = 31 - yt(a),
        n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n
    }
  }

  function Gu(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : bi(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
  }

  function bi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0
    }
    return e
  }

  function gi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function Vu() {
    var e = q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : zd(e.type))
  }

  function Xu(e, t) {
    var a = q.p;
    try {
      return q.p = e, t()
    } finally {
      q.p = a
    }
  }
  var ma = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + ma,
    ot = "__reactProps$" + ma,
    cl = "__reactContainer$" + ma,
    pi = "__reactEvents$" + ma,
    H0 = "__reactListeners$" + ma,
    q0 = "__reactHandles$" + ma,
    Lu = "__reactResources$" + ma,
    Fl = "__reactMarker$" + ma;

  function yi(e) {
    delete e[Fe], delete e[ot], delete e[pi], delete e[H0], delete e[q0]
  }

  function ul(e) {
    var t = e[Fe];
    if (t) return t;
    for (var a = e.parentNode; a;) {
      if (t = a[cl] || a[Fe]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = hd(e); e !== null;) {
            if (a = e[Fe]) return a;
            e = hd(e)
          }
        return t
      }
      e = a, a = e.parentNode
    }
    return null
  }

  function rl(e) {
    if (e = e[Fe] || e[cl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }

  function Il(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(d(33))
  }

  function ol(e) {
    var t = e[Lu];
    return t || (t = e[Lu] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), t
  }

  function Je(e) {
    e[Fl] = !0
  }
  var Qu = new Set,
    Zu = {};

  function Ya(e, t) {
    fl(e, t), fl(e + "Capture", t)
  }

  function fl(e, t) {
    for (Zu[e] = t, e = 0; e < t.length; e++) Qu.add(t[e])
  }
  var B0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Ku = {},
    Ju = {};

  function Y0(e) {
    return Gt.call(Ju, e) ? !0 : Gt.call(Ku, e) ? !1 : B0.test(e) ? Ju[e] = !0 : (Ku[e] = !0, !1)
  }

  function $n(e, t, a) {
    if (Y0(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return
            }
        }
        e.setAttribute(t, "" + a)
      }
  }

  function Fn(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return
      }
      e.setAttribute(t, "" + a)
    }
  }

  function Wt(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return
      }
      e.setAttributeNS(t, a, "" + l)
    }
  }

  function zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return ""
    }
  }

  function Wu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function G0(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get,
        s = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this)
        },
        set: function(c) {
          a = "" + c, s.call(this, c)
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a
        },
        setValue: function(c) {
          a = "" + c
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t]
        }
      }
    }
  }

  function vi(e) {
    if (!e._valueTracker) {
      var t = Wu(e) ? "checked" : "value";
      e._valueTracker = G0(e, t, "" + e[t])
    }
  }

  function $u(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return e && (l = Wu(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1
  }

  function In(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var V0 = /[\n"\\]/g;

  function Et(e) {
    return e.replace(V0, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }

  function ji(e, t, a, l, n, s, c, r) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Si(e, c, zt(t)) : a != null ? Si(e, c, zt(a)) : l != null && e.removeAttribute("value"), n == null && s != null && (e.defaultChecked = !!s), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + zt(r) : e.removeAttribute("name")
  }

  function Fu(e, t, a, l, n, s, c, r) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || a != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        vi(e);
        return
      }
      a = a != null ? "" + zt(a) : "", t = t != null ? "" + zt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), vi(e)
  }

  function Si(e, t, a) {
    t === "number" && In(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
  }

  function dl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++) n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0)
    } else {
      for (a = "" + zt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = !0, l && (e[n].defaultSelected = !0);
          return
        }
        t !== null || e[n].disabled || (t = e[n])
      }
      t !== null && (t.selected = !0)
    }
  }

  function Iu(e, t, a) {
    if (t != null && (t = "" + zt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return
    }
    e.defaultValue = a != null ? "" + zt(a) : ""
  }

  function Pu(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(d(92));
        if (Ze(l)) {
          if (1 < l.length) throw Error(d(93));
          l = l[0]
        }
        a = l
      }
      a == null && (a = ""), t = a
    }
    a = zt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), vi(e)
  }

  function hl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return
      }
    }
    e.textContent = t
  }
  var X0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function er(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || X0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
  }

  function tr(e, t, a) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (e = e.style, a != null) {
      for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && er(e, n, l)
    } else
      for (var s in t) t.hasOwnProperty(s) && er(e, s, t[s])
  }

  function Ni(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var L0 = new Map([
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
    Q0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function Pn(e) {
    return Q0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
  }

  function $t() {}
  var Ti = null;

  function wi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var ml = null,
    xl = null;

  function ar(e) {
    var t = rl(e);
    if (t && (e = t.stateNode)) {
      var a = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ji(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[ot] || null;
                if (!n) throw Error(d(90));
                ji(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
              }
            }
            for (t = 0; t < a.length; t++) l = a[t], l.form === e.form && $u(l)
          }
          break e;
        case "textarea":
          Iu(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && dl(e, !!a.multiple, t, !1)
      }
    }
  }
  var Ai = !1;

  function lr(e, t, a) {
    if (Ai) return e(t, a);
    Ai = !0;
    try {
      var l = e(t);
      return l
    } finally {
      if (Ai = !1, (ml !== null || xl !== null) && (Ys(), ml && (t = ml, e = xl, xl = ml = null, ar(t), e)))
        for (t = 0; t < e.length; t++) ar(e[t])
    }
  }

  function Pl(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[ot] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(d(231, t, typeof a));
    return a
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Mi = !1;
  if (Ft) try {
    var en = {};
    Object.defineProperty(en, "passive", {
      get: function() {
        Mi = !0
      }
    }), window.addEventListener("test", en, en), window.removeEventListener("test", en, en)
  } catch {
    Mi = !1
  }
  var xa = null,
    Ci = null,
    es = null;

  function nr() {
    if (es) return es;
    var e, t = Ci,
      a = t.length,
      l, n = "value" in xa ? xa.value : xa.textContent,
      s = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++);
    var c = a - e;
    for (l = 1; l <= c && t[a - l] === n[s - l]; l++);
    return es = n.slice(e, 1 < l ? 1 - l : void 0)
  }

  function ts(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }

  function as() {
    return !0
  }

  function sr() {
    return !1
  }

  function ft(e) {
    function t(a, l, n, s, c) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = s, this.target = c, this.currentTarget = null;
      for (var r in e) e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(s) : s[r]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? as : sr, this.isPropagationStopped = sr, this
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = as)
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = as)
      },
      persist: function() {},
      isPersistent: as
    }), t
  }
  var Ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    ls = ft(Ga),
    tn = _({}, Ga, {
      view: 0,
      detail: 0
    }),
    Z0 = ft(tn),
    zi, Ei, an, ns = _({}, tn, {
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
      getModifierState: Oi,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== an && (an && e.type === "mousemove" ? (zi = e.screenX - an.screenX, Ei = e.screenY - an.screenY) : Ei = zi = 0, an = e), zi)
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ei
      }
    }),
    ir = ft(ns),
    K0 = _({}, ns, {
      dataTransfer: 0
    }),
    J0 = ft(K0),
    W0 = _({}, tn, {
      relatedTarget: 0
    }),
    _i = ft(W0),
    $0 = _({}, Ga, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    F0 = ft($0),
    I0 = _({}, Ga, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    P0 = ft(I0),
    eh = _({}, Ga, {
      data: 0
    }),
    cr = ft(eh),
    th = {
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
    ah = {
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
    lh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function nh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lh[e]) ? !!t[e] : !1
  }

  function Oi() {
    return nh
  }
  var sh = _({}, tn, {
      key: function(e) {
        if (e.key) {
          var t = th[e.key] || e.key;
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = ts(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ah[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oi,
      charCode: function(e) {
        return e.type === "keypress" ? ts(e) : 0
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
        return e.type === "keypress" ? ts(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
    ih = ft(sh),
    ch = _({}, ns, {
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
    ur = ft(ch),
    uh = _({}, tn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oi
    }),
    rh = ft(uh),
    oh = _({}, Ga, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    fh = ft(oh),
    dh = _({}, ns, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    hh = ft(dh),
    mh = _({}, Ga, {
      newState: 0,
      oldState: 0
    }),
    xh = ft(mh),
    bh = [9, 13, 27, 32],
    Ri = Ft && "CompositionEvent" in window,
    ln = null;
  Ft && "documentMode" in document && (ln = document.documentMode);
  var gh = Ft && "TextEvent" in window && !ln,
    rr = Ft && (!Ri || ln && 8 < ln && 11 >= ln),
    or = " ",
    fr = !1;

  function dr(e, t) {
    switch (e) {
      case "keyup":
        return bh.indexOf(t.keyCode) !== -1;
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

  function hr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
  }
  var bl = !1;

  function ph(e, t) {
    switch (e) {
      case "compositionend":
        return hr(t);
      case "keypress":
        return t.which !== 32 ? null : (fr = !0, or);
      case "textInput":
        return e = t.data, e === or && fr ? null : e;
      default:
        return null
    }
  }

  function yh(e, t) {
    if (bl) return e === "compositionend" || !Ri && dr(e, t) ? (e = nr(), es = Ci = xa = null, bl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
        }
        return null;
      case "compositionend":
        return rr && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var vh = {
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

  function mr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vh[e.type] : t === "textarea"
  }

  function xr(e, t, a, l) {
    ml ? xl ? xl.push(l) : xl = [l] : ml = l, t = Ks(t, "onChange"), 0 < t.length && (a = new ls("onChange", "change", null, a, l), e.push({
      event: a,
      listeners: t
    }))
  }
  var nn = null,
    sn = null;

  function jh(e) {
    Pf(e, 0)
  }

  function ss(e) {
    var t = Il(e);
    if ($u(t)) return e
  }

  function br(e, t) {
    if (e === "change") return t
  }
  var gr = !1;
  if (Ft) {
    var Di;
    if (Ft) {
      var ki = "oninput" in document;
      if (!ki) {
        var pr = document.createElement("div");
        pr.setAttribute("oninput", "return;"), ki = typeof pr.oninput == "function"
      }
      Di = ki
    } else Di = !1;
    gr = Di && (!document.documentMode || 9 < document.documentMode)
  }

  function yr() {
    nn && (nn.detachEvent("onpropertychange", vr), sn = nn = null)
  }

  function vr(e) {
    if (e.propertyName === "value" && ss(sn)) {
      var t = [];
      xr(t, sn, e, wi(e)), lr(jh, t)
    }
  }

  function Sh(e, t, a) {
    e === "focusin" ? (yr(), nn = t, sn = a, nn.attachEvent("onpropertychange", vr)) : e === "focusout" && yr()
  }

  function Nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ss(sn)
  }

  function Th(e, t) {
    if (e === "click") return ss(t)
  }

  function wh(e, t) {
    if (e === "input" || e === "change") return ss(t)
  }

  function Ah(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  var vt = typeof Object.is == "function" ? Object.is : Ah;

  function cn(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Gt.call(t, n) || !vt(e[n], t[n])) return !1
    }
    return !0
  }

  function jr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function Sr(e, t) {
    var a = jr(e);
    e = 0;
    for (var l; a;) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t) return {
          node: a,
          offset: t - e
        };
        e = l
      }
      e: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e
          }
          a = a.parentNode
        }
        a = void 0
      }
      a = jr(a)
    }
  }

  function Nr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function Tr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = In(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string"
      } catch {
        a = !1
      }
      if (a) e = t.contentWindow;
      else break;
      t = In(e.document)
    }
    return t
  }

  function Ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
  }
  var Mh = Ft && "documentMode" in document && 11 >= document.documentMode,
    gl = null,
    Hi = null,
    un = null,
    qi = !1;

  function wr(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    qi || gl == null || gl !== In(l) || (l = gl, "selectionStart" in l && Ui(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), un && cn(un, l) || (un = l, l = Ks(Hi, "onSelect"), 0 < l.length && (t = new ls("onSelect", "select", null, t, a), e.push({
      event: t,
      listeners: l
    }), t.target = gl)))
  }

  function Va(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a
  }
  var pl = {
      animationend: Va("Animation", "AnimationEnd"),
      animationiteration: Va("Animation", "AnimationIteration"),
      animationstart: Va("Animation", "AnimationStart"),
      transitionrun: Va("Transition", "TransitionRun"),
      transitionstart: Va("Transition", "TransitionStart"),
      transitioncancel: Va("Transition", "TransitionCancel"),
      transitionend: Va("Transition", "TransitionEnd")
    },
    Bi = {},
    Ar = {};
  Ft && (Ar = document.createElement("div").style, "AnimationEvent" in window || (delete pl.animationend.animation, delete pl.animationiteration.animation, delete pl.animationstart.animation), "TransitionEvent" in window || delete pl.transitionend.transition);

  function Xa(e) {
    if (Bi[e]) return Bi[e];
    if (!pl[e]) return e;
    var t = pl[e],
      a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ar) return Bi[e] = t[a];
    return e
  }
  var Mr = Xa("animationend"),
    Cr = Xa("animationiteration"),
    zr = Xa("animationstart"),
    Ch = Xa("transitionrun"),
    zh = Xa("transitionstart"),
    Eh = Xa("transitioncancel"),
    Er = Xa("transitionend"),
    _r = new Map,
    Yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Yi.push("scrollEnd");

  function Vt(e, t) {
    _r.set(e, t), Ya(t, [e])
  }
  var is = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return
      }
      console.error(e)
    },
    _t = [],
    yl = 0,
    Gi = 0;

  function cs() {
    for (var e = yl, t = Gi = yl = 0; t < e;) {
      var a = _t[t];
      _t[t++] = null;
      var l = _t[t];
      _t[t++] = null;
      var n = _t[t];
      _t[t++] = null;
      var s = _t[t];
      if (_t[t++] = null, l !== null && n !== null) {
        var c = l.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n
      }
      s !== 0 && Or(a, n, s)
    }
  }

  function us(e, t, a, l) {
    _t[yl++] = e, _t[yl++] = t, _t[yl++] = a, _t[yl++] = l, Gi |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l)
  }

  function Vi(e, t, a, l) {
    return us(e, t, a, l), rs(e)
  }

  function La(e, t) {
    return us(e, null, null, t), rs(e)
  }

  function Or(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, s = e.return; s !== null;) s.childLanes |= a, l = s.alternate, l !== null && (l.childLanes |= a), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (n = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, n && t !== null && (n = 31 - yt(a), e = s.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), s) : null
  }

  function rs(e) {
    if (50 < En) throw En = 0, Fc = null, Error(d(185));
    for (var t = e.return; t !== null;) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null
  }
  var vl = {};

  function _h(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function jt(e, t, a, l) {
    return new _h(e, t, a, l)
  }

  function Xi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function It(e, t) {
    var a = e.alternate;
    return a === null ? (a = jt(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a
  }

  function Rr(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e
  }

  function os(e, t, a, l, n, s) {
    var c = 0;
    if (l = e, typeof e == "function") Xi(e) && (c = 1);
    else if (typeof e == "string") c = Um(e, a, C.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case it:
        return e = jt(31, a, t, n), e.elementType = it, e.lanes = s, e;
      case $:
        return Qa(a.children, n, s, t);
      case ae:
        c = 8, n |= 24;
        break;
      case ee:
        return e = jt(12, a, t, n | 2), e.elementType = ee, e.lanes = s, e;
      case ke:
        return e = jt(13, a, t, n), e.elementType = ke, e.lanes = s, e;
      case de:
        return e = jt(19, a, t, n), e.elementType = de, e.lanes = s, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case me:
            c = 10;
            break e;
          case Se:
            c = 9;
            break e;
          case ze:
            c = 11;
            break e;
          case W:
            c = 14;
            break e;
          case Ue:
            c = 16, l = null;
            break e
        }
        c = 29, a = Error(d(130, e === null ? "null" : typeof e, "")), l = null
    }
    return t = jt(c, a, t, n), t.elementType = e, t.type = l, t.lanes = s, t
  }

  function Qa(e, t, a, l) {
    return e = jt(7, e, l, t), e.lanes = a, e
  }

  function Li(e, t, a) {
    return e = jt(6, e, null, t), e.lanes = a, e
  }

  function Dr(e) {
    var t = jt(18, null, null, 0);
    return t.stateNode = e, t
  }

  function Qi(e, t, a) {
    return t = jt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
  }
  var kr = new WeakMap;

  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = kr.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Ct(t)
      }, kr.set(e, t), t)
    }
    return {
      value: e,
      source: t,
      stack: Ct(t)
    }
  }
  var jl = [],
    Sl = 0,
    fs = null,
    rn = 0,
    Rt = [],
    Dt = 0,
    ba = null,
    Qt = 1,
    Zt = "";

  function Pt(e, t) {
    jl[Sl++] = rn, jl[Sl++] = fs, fs = e, rn = t
  }

  function Ur(e, t, a) {
    Rt[Dt++] = Qt, Rt[Dt++] = Zt, Rt[Dt++] = ba, ba = e;
    var l = Qt;
    e = Zt;
    var n = 32 - yt(l) - 1;
    l &= ~(1 << n), a += 1;
    var s = 32 - yt(t) + n;
    if (30 < s) {
      var c = n - n % 5;
      s = (l & (1 << c) - 1).toString(32), l >>= c, n -= c, Qt = 1 << 32 - yt(t) + n | a << n | l, Zt = s + e
    } else Qt = 1 << s | a << n | l, Zt = e
  }

  function Zi(e) {
    e.return !== null && (Pt(e, 1), Ur(e, 1, 0))
  }

  function Ki(e) {
    for (; e === fs;) fs = jl[--Sl], jl[Sl] = null, rn = jl[--Sl], jl[Sl] = null;
    for (; e === ba;) ba = Rt[--Dt], Rt[Dt] = null, Zt = Rt[--Dt], Rt[Dt] = null, Qt = Rt[--Dt], Rt[Dt] = null
  }

  function Hr(e, t) {
    Rt[Dt++] = Qt, Rt[Dt++] = Zt, Rt[Dt++] = ba, Qt = t.id, Zt = t.overflow, ba = e
  }
  var Ie = null,
    Ee = null,
    he = !1,
    ga = null,
    kt = !1,
    Ji = Error(d(519));

  function pa(e) {
    var t = Error(d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw on(Ot(t, e)), Ji
  }

  function qr(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (t[Fe] = e, t[ot] = l, a) {
      case "dialog":
        re("cancel", t), re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        re("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < On.length; a++) re(On[a], t);
        break;
      case "source":
        re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        re("error", t), re("load", t);
        break;
      case "details":
        re("toggle", t);
        break;
      case "input":
        re("invalid", t), Fu(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
        break;
      case "select":
        re("invalid", t);
        break;
      case "textarea":
        re("invalid", t), Pu(t, l.value, l.defaultValue, l.children)
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || ld(t.textContent, a) ? (l.popover != null && (re("beforetoggle", t), re("toggle", t)), l.onScroll != null && re("scroll", t), l.onScrollEnd != null && re("scrollend", t), l.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || pa(e, !0)
  }

  function Br(e) {
    for (Ie = e.return; Ie;) switch (Ie.tag) {
      case 5:
      case 31:
      case 13:
        kt = !1;
        return;
      case 27:
      case 3:
        kt = !0;
        return;
      default:
        Ie = Ie.return
    }
  }

  function Nl(e) {
    if (e !== Ie) return !1;
    if (!he) return Br(e), he = !0, !1;
    var t = e.tag,
      a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || du(e.type, e.memoizedProps)), a = !a), a && Ee && pa(e), Br(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      Ee = dd(e)
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      Ee = dd(e)
    } else t === 27 ? (t = Ee, Oa(e.type) ? (e = gu, gu = null, Ee = e) : Ee = t) : Ee = Ie ? Ht(e.stateNode.nextSibling) : null;
    return !0
  }

  function Za() {
    Ee = Ie = null, he = !1
  }

  function Wi() {
    var e = ga;
    return e !== null && (xt === null ? xt = e : xt.push.apply(xt, e), ga = null), e
  }

  function on(e) {
    ga === null ? ga = [e] : ga.push(e)
  }
  var $i = u(null),
    Ka = null,
    ea = null;

  function ya(e, t, a) {
    S($i, t._currentValue), t._currentValue = a
  }

  function ta(e) {
    e._currentValue = $i.current, m($i)
  }

  function Fi(e, t, a) {
    for (; e !== null;) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return
    }
  }

  function Ii(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null;) {
      var s = n.dependencies;
      if (s !== null) {
        var c = n.child;
        s = s.firstContext;
        e: for (; s !== null;) {
          var r = s;
          s = n;
          for (var o = 0; o < t.length; o++)
            if (r.context === t[o]) {
              s.lanes |= a, r = s.alternate, r !== null && (r.lanes |= a), Fi(s.return, a, e), l || (c = null);
              break e
            } s = r.next
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(d(341));
        c.lanes |= a, s = c.alternate, s !== null && (s.lanes |= a), Fi(c, a, e), c = null
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null;) {
          if (c === e) {
            c = null;
            break
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break
          }
          c = c.return
        }
      n = c
    }
  }

  function Tl(e, t, a, l) {
    e = null;
    for (var n = t, s = !1; n !== null;) {
      if (!s) {
        if ((n.flags & 524288) !== 0) s = !0;
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(d(387));
        if (c = c.memoizedProps, c !== null) {
          var r = n.type;
          vt(n.pendingProps.value, c.value) || (e !== null ? e.push(r) : e = [r])
        }
      } else if (n === U.current) {
        if (c = n.alternate, c === null) throw Error(d(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Hn) : e = [Hn])
      }
      n = n.return
    }
    e !== null && Ii(t, e, a, l), t.flags |= 262144
  }

  function ds(e) {
    for (e = e.firstContext; e !== null;) {
      if (!vt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next
    }
    return !1
  }

  function Ja(e) {
    Ka = e, ea = null, e = e.dependencies, e !== null && (e.firstContext = null)
  }

  function Pe(e) {
    return Yr(Ka, e)
  }

  function hs(e, t) {
    return Ka === null && Ja(e), Yr(e, t)
  }

  function Yr(e, t) {
    var a = t._currentValue;
    if (t = {
        context: t,
        memoizedValue: a,
        next: null
      }, ea === null) {
      if (e === null) throw Error(d(308));
      ea = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288
    } else ea = ea.next = t;
    return a
  }
  var Oh = typeof AbortController < "u" ? AbortController : function() {
      var e = [],
        t = this.signal = {
          aborted: !1,
          addEventListener: function(a, l) {
            e.push(l)
          }
        };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a()
        })
      }
    },
    Rh = y.unstable_scheduleCallback,
    Dh = y.unstable_NormalPriority,
    Ye = {
      $$typeof: me,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Pi() {
    return {
      controller: new Oh,
      data: new Map,
      refCount: 0
    }
  }

  function fn(e) {
    e.refCount--, e.refCount === 0 && Rh(Dh, function() {
      e.controller.abort()
    })
  }
  var dn = null,
    ec = 0,
    wl = 0,
    Al = null;

  function kh(e, t) {
    if (dn === null) {
      var a = dn = [];
      ec = 0, wl = lu(), Al = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l)
        }
      }
    }
    return ec++, t.then(Gr, Gr), t
  }

  function Gr() {
    if (--ec === 0 && dn !== null) {
      Al !== null && (Al.status = "fulfilled");
      var e = dn;
      dn = null, wl = 0, Al = null;
      for (var t = 0; t < e.length; t++)(0, e[t])()
    }
  }

  function Uh(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          a.push(n)
        }
      };
    return e.then(function() {
      l.status = "fulfilled", l.value = t;
      for (var n = 0; n < a.length; n++)(0, a[n])(t)
    }, function(n) {
      for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)(0, a[n])(void 0)
    }), l
  }
  var Vr = N.S;
  N.S = function(e, t) {
    Mf = at(), typeof t == "object" && t !== null && typeof t.then == "function" && kh(e, t), Vr !== null && Vr(e, t)
  };
  var Wa = u(null);

  function tc() {
    var e = Wa.current;
    return e !== null ? e : Me.pooledCache
  }

  function ms(e, t) {
    t === null ? S(Wa, Wa.current) : S(Wa, t.pool)
  }

  function Xr() {
    var e = tc();
    return e === null ? null : {
      parent: Ye._currentValue,
      pool: e
    }
  }
  var Ml = Error(d(460)),
    ac = Error(d(474)),
    xs = Error(d(542)),
    bs = {
      then: function() {}
    };

  function Lr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected"
  }

  function Qr(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then($t, $t), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Kr(e), e;
      default:
        if (typeof t.status == "string") t.then($t, $t);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter) throw Error(d(482));
          e = t, e.status = "pending", e.then(function(l) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = l
            }
          }, function(l) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = l
            }
          })
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Kr(e), e
        }
        throw Fa = t, Ml
    }
  }

  function $a(e) {
    try {
      var t = e._init;
      return t(e._payload)
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Fa = a, Ml) : a
    }
  }
  var Fa = null;

  function Zr() {
    if (Fa === null) throw Error(d(459));
    var e = Fa;
    return Fa = null, e
  }

  function Kr(e) {
    if (e === Ml || e === xs) throw Error(d(483))
  }
  var Cl = null,
    hn = 0;

  function gs(e) {
    var t = hn;
    return hn += 1, Cl === null && (Cl = []), Qr(Cl, e, t)
  }

  function mn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null
  }

  function ps(e, t) {
    throw t.$$typeof === L ? Error(d(525)) : (e = Object.prototype.toString.call(t), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  }

  function Jr(e) {
    function t(x, h) {
      if (e) {
        var g = x.deletions;
        g === null ? (x.deletions = [h], x.flags |= 16) : g.push(h)
      }
    }

    function a(x, h) {
      if (!e) return null;
      for (; h !== null;) t(x, h), h = h.sibling;
      return null
    }

    function l(x) {
      for (var h = new Map; x !== null;) x.key !== null ? h.set(x.key, x) : h.set(x.index, x), x = x.sibling;
      return h
    }

    function n(x, h) {
      return x = It(x, h), x.index = 0, x.sibling = null, x
    }

    function s(x, h, g) {
      return x.index = g, e ? (g = x.alternate, g !== null ? (g = g.index, g < h ? (x.flags |= 67108866, h) : g) : (x.flags |= 67108866, h)) : (x.flags |= 1048576, h)
    }

    function c(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x
    }

    function r(x, h, g, A) {
      return h === null || h.tag !== 6 ? (h = Li(g, x.mode, A), h.return = x, h) : (h = n(h, g), h.return = x, h)
    }

    function o(x, h, g, A) {
      var Q = g.type;
      return Q === $ ? w(x, h, g.props.children, A, g.key) : h !== null && (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ue && $a(Q) === h.type) ? (h = n(h, g.props), mn(h, g), h.return = x, h) : (h = os(g.type, g.key, g.props, null, x.mode, A), mn(h, g), h.return = x, h)
    }

    function p(x, h, g, A) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Qi(g, x.mode, A), h.return = x, h) : (h = n(h, g.children || []), h.return = x, h)
    }

    function w(x, h, g, A, Q) {
      return h === null || h.tag !== 7 ? (h = Qa(g, x.mode, A, Q), h.return = x, h) : (h = n(h, g), h.return = x, h)
    }

    function M(x, h, g) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = Li("" + h, x.mode, g), h.return = x, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ne:
            return g = os(h.type, h.key, h.props, null, x.mode, g), mn(g, h), g.return = x, g;
          case ce:
            return h = Qi(h, x.mode, g), h.return = x, h;
          case Ue:
            return h = $a(h), M(x, h, g)
        }
        if (Ze(h) || Qe(h)) return h = Qa(h, x.mode, g, null), h.return = x, h;
        if (typeof h.then == "function") return M(x, gs(h), g);
        if (h.$$typeof === me) return M(x, hs(x, h), g);
        ps(x, h)
      }
      return null
    }

    function v(x, h, g, A) {
      var Q = h !== null ? h.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return Q !== null ? null : r(x, h, "" + g, A);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ne:
            return g.key === Q ? o(x, h, g, A) : null;
          case ce:
            return g.key === Q ? p(x, h, g, A) : null;
          case Ue:
            return g = $a(g), v(x, h, g, A)
        }
        if (Ze(g) || Qe(g)) return Q !== null ? null : w(x, h, g, A, null);
        if (typeof g.then == "function") return v(x, h, gs(g), A);
        if (g.$$typeof === me) return v(x, h, hs(x, g), A);
        ps(x, g)
      }
      return null
    }

    function j(x, h, g, A, Q) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return x = x.get(g) || null, r(h, x, "" + A, Q);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ne:
            return x = x.get(A.key === null ? g : A.key) || null, o(h, x, A, Q);
          case ce:
            return x = x.get(A.key === null ? g : A.key) || null, p(h, x, A, Q);
          case Ue:
            return A = $a(A), j(x, h, g, A, Q)
        }
        if (Ze(A) || Qe(A)) return x = x.get(g) || null, w(h, x, A, Q, null);
        if (typeof A.then == "function") return j(x, h, g, gs(A), Q);
        if (A.$$typeof === me) return j(x, h, g, hs(h, A), Q);
        ps(h, A)
      }
      return null
    }

    function G(x, h, g, A) {
      for (var Q = null, xe = null, V = h, ie = h = 0, fe = null; V !== null && ie < g.length; ie++) {
        V.index > ie ? (fe = V, V = null) : fe = V.sibling;
        var be = v(x, V, g[ie], A);
        if (be === null) {
          V === null && (V = fe);
          break
        }
        e && V && be.alternate === null && t(x, V), h = s(be, h, ie), xe === null ? Q = be : xe.sibling = be, xe = be, V = fe
      }
      if (ie === g.length) return a(x, V), he && Pt(x, ie), Q;
      if (V === null) {
        for (; ie < g.length; ie++) V = M(x, g[ie], A), V !== null && (h = s(V, h, ie), xe === null ? Q = V : xe.sibling = V, xe = V);
        return he && Pt(x, ie), Q
      }
      for (V = l(V); ie < g.length; ie++) fe = j(V, x, ie, g[ie], A), fe !== null && (e && fe.alternate !== null && V.delete(fe.key === null ? ie : fe.key), h = s(fe, h, ie), xe === null ? Q = fe : xe.sibling = fe, xe = fe);
      return e && V.forEach(function(Ha) {
        return t(x, Ha)
      }), he && Pt(x, ie), Q
    }

    function J(x, h, g, A) {
      if (g == null) throw Error(d(151));
      for (var Q = null, xe = null, V = h, ie = h = 0, fe = null, be = g.next(); V !== null && !be.done; ie++, be = g.next()) {
        V.index > ie ? (fe = V, V = null) : fe = V.sibling;
        var Ha = v(x, V, be.value, A);
        if (Ha === null) {
          V === null && (V = fe);
          break
        }
        e && V && Ha.alternate === null && t(x, V), h = s(Ha, h, ie), xe === null ? Q = Ha : xe.sibling = Ha, xe = Ha, V = fe
      }
      if (be.done) return a(x, V), he && Pt(x, ie), Q;
      if (V === null) {
        for (; !be.done; ie++, be = g.next()) be = M(x, be.value, A), be !== null && (h = s(be, h, ie), xe === null ? Q = be : xe.sibling = be, xe = be);
        return he && Pt(x, ie), Q
      }
      for (V = l(V); !be.done; ie++, be = g.next()) be = j(V, x, ie, be.value, A), be !== null && (e && be.alternate !== null && V.delete(be.key === null ? ie : be.key), h = s(be, h, ie), xe === null ? Q = be : xe.sibling = be, xe = be);
      return e && V.forEach(function(Km) {
        return t(x, Km)
      }), he && Pt(x, ie), Q
    }

    function Ae(x, h, g, A) {
      if (typeof g == "object" && g !== null && g.type === $ && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ne:
            e: {
              for (var Q = g.key; h !== null;) {
                if (h.key === Q) {
                  if (Q = g.type, Q === $) {
                    if (h.tag === 7) {
                      a(x, h.sibling), A = n(h, g.props.children), A.return = x, x = A;
                      break e
                    }
                  } else if (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ue && $a(Q) === h.type) {
                    a(x, h.sibling), A = n(h, g.props), mn(A, g), A.return = x, x = A;
                    break e
                  }
                  a(x, h);
                  break
                } else t(x, h);
                h = h.sibling
              }
              g.type === $ ? (A = Qa(g.props.children, x.mode, A, g.key), A.return = x, x = A) : (A = os(g.type, g.key, g.props, null, x.mode, A), mn(A, g), A.return = x, x = A)
            }
            return c(x);
          case ce:
            e: {
              for (Q = g.key; h !== null;) {
                if (h.key === Q)
                  if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                    a(x, h.sibling), A = n(h, g.children || []), A.return = x, x = A;
                    break e
                  } else {
                    a(x, h);
                    break
                  }
                else t(x, h);
                h = h.sibling
              }
              A = Qi(g, x.mode, A),
              A.return = x,
              x = A
            }
            return c(x);
          case Ue:
            return g = $a(g), Ae(x, h, g, A)
        }
        if (Ze(g)) return G(x, h, g, A);
        if (Qe(g)) {
          if (Q = Qe(g), typeof Q != "function") throw Error(d(150));
          return g = Q.call(g), J(x, h, g, A)
        }
        if (typeof g.then == "function") return Ae(x, h, gs(g), A);
        if (g.$$typeof === me) return Ae(x, h, hs(x, g), A);
        ps(x, g)
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, h !== null && h.tag === 6 ? (a(x, h.sibling), A = n(h, g), A.return = x, x = A) : (a(x, h), A = Li(g, x.mode, A), A.return = x, x = A), c(x)) : a(x, h)
    }
    return function(x, h, g, A) {
      try {
        hn = 0;
        var Q = Ae(x, h, g, A);
        return Cl = null, Q
      } catch (V) {
        if (V === Ml || V === xs) throw V;
        var xe = jt(29, V, null, x.mode);
        return xe.lanes = A, xe.return = x, xe
      }
    }
  }
  var Ia = Jr(!0),
    Wr = Jr(!1),
    va = !1;

  function lc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
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

  function nc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    })
  }

  function ja(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function Sa(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (ge & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = rs(e), Or(e, null, a), t
    }
    return us(e, l, t, a), rs(e)
  }

  function xn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Yu(e, a)
    }
  }

  function sc(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null,
        s = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          s === null ? n = s = c : s = s.next = c, a = a.next
        } while (a !== null);
        s === null ? n = s = t : s = s.next = t
      } else n = s = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t
  }
  var ic = !1;

  function bn() {
    if (ic) {
      var e = Al;
      if (e !== null) throw e
    }
  }

  function gn(e, t, a, l) {
    ic = !1;
    var n = e.updateQueue;
    va = !1;
    var s = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var o = r,
        p = o.next;
      o.next = null, c === null ? s = p : c.next = p, c = o;
      var w = e.alternate;
      w !== null && (w = w.updateQueue, r = w.lastBaseUpdate, r !== c && (r === null ? w.firstBaseUpdate = p : r.next = p, w.lastBaseUpdate = o))
    }
    if (s !== null) {
      var M = n.baseState;
      c = 0, w = p = o = null, r = s;
      do {
        var v = r.lane & -536870913,
          j = v !== r.lane;
        if (j ? (oe & v) === v : (l & v) === v) {
          v !== 0 && v === wl && (ic = !0), w !== null && (w = w.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var G = e,
              J = r;v = t;
            var Ae = a;
            switch (J.tag) {
              case 1:
                if (G = J.payload, typeof G == "function") {
                  M = G.call(Ae, M, v);
                  break e
                }
                M = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = J.payload, v = typeof G == "function" ? G.call(Ae, M, v) : G, v == null) break e;
                M = _({}, M, v);
                break e;
              case 2:
                va = !0
            }
          }
          v = r.callback, v !== null && (e.flags |= 64, j && (e.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [v] : j.push(v))
        } else j = {
          lane: v,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null
        }, w === null ? (p = w = j, o = M) : w = w.next = j, c |= v;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null) break;
          j = r, r = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null
        }
      } while (!0);
      w === null && (o = M), n.baseState = o, n.firstBaseUpdate = p, n.lastBaseUpdate = w, s === null && (n.shared.lanes = 0), Ma |= c, e.lanes = c, e.memoizedState = M
    }
  }

  function $r(e, t) {
    if (typeof e != "function") throw Error(d(191, e));
    e.call(t)
  }

  function Fr(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) $r(a[e], t)
  }
  var zl = u(null),
    ys = u(0);

  function Ir(e, t) {
    e = oa, S(ys, e), S(zl, t), oa = e | t.baseLanes
  }

  function cc() {
    S(ys, oa), S(zl, zl.current)
  }

  function uc() {
    oa = ys.current, m(zl), m(ys)
  }
  var St = u(null),
    Ut = null;

  function Na(e) {
    var t = e.alternate;
    S(He, He.current & 1), S(St, e), Ut === null && (t === null || zl.current !== null || t.memoizedState !== null) && (Ut = e)
  }

  function rc(e) {
    S(He, He.current), S(St, e), Ut === null && (Ut = e)
  }

  function Pr(e) {
    e.tag === 22 ? (S(He, He.current), S(St, e), Ut === null && (Ut = e)) : Ta()
  }

  function Ta() {
    S(He, He.current), S(St, St.current)
  }

  function Nt(e) {
    m(St), Ut === e && (Ut = null), m(He)
  }
  var He = u(0);

  function vs(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || xu(a) || bu(a))) return t
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }
  var aa = 0,
    le = null,
    Te = null,
    Ge = null,
    js = !1,
    El = !1,
    Pa = !1,
    Ss = 0,
    pn = 0,
    _l = null,
    Hh = 0;

  function Re() {
    throw Error(d(321))
  }

  function oc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!vt(e[a], t[a])) return !1;
    return !0
  }

  function fc(e, t, a, l, n, s) {
    return aa = s, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? Ho : Ac, Pa = !1, s = a(l, n), Pa = !1, El && (s = to(t, a, l, n)), eo(e), s
  }

  function eo(e) {
    N.H = jn;
    var t = Te !== null && Te.next !== null;
    if (aa = 0, Ge = Te = le = null, js = !1, pn = 0, _l = null, t) throw Error(d(300));
    e === null || Ve || (e = e.dependencies, e !== null && ds(e) && (Ve = !0))
  }

  function to(e, t, a, l) {
    le = e;
    var n = 0;
    do {
      if (El && (_l = null), pn = 0, El = !1, 25 <= n) throw Error(d(301));
      if (n += 1, Ge = Te = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0)
      }
      N.H = qo, s = t(a, l)
    } while (El);
    return s
  }

  function qh() {
    var e = N.H,
      t = e.useState()[0];
    return t = typeof t.then == "function" ? yn(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (le.flags |= 1024), t
  }

  function dc() {
    var e = Ss !== 0;
    return Ss = 0, e
  }

  function hc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a
  }

  function mc(e) {
    if (js) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next
      }
      js = !1
    }
    aa = 0, Ge = Te = le = null, El = !1, pn = Ss = 0, _l = null
  }

  function st() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ge === null ? le.memoizedState = Ge = e : Ge = Ge.next = e, Ge
  }

  function qe() {
    if (Te === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null
    } else e = Te.next;
    var t = Ge === null ? le.memoizedState : Ge.next;
    if (t !== null) Ge = t, Te = e;
    else {
      if (e === null) throw le.alternate === null ? Error(d(467)) : Error(d(310));
      Te = e, e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null
      }, Ge === null ? le.memoizedState = Ge = e : Ge = Ge.next = e
    }
    return Ge
  }

  function Ns() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function yn(e) {
    var t = pn;
    return pn += 1, _l === null && (_l = []), e = Qr(_l, e, t), t = le, (Ge === null ? t.memoizedState : Ge.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? Ho : Ac), e
  }

  function Ts(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return yn(e);
      if (e.$$typeof === me) return Pe(e)
    }
    throw Error(d(438, String(e)))
  }

  function xc(e) {
    var t = null,
      a = le.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = le.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice()
        }),
        index: 0
      })))
    }
    if (t == null && (t = {
        data: [],
        index: 0
      }), a === null && (a = Ns(), le.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Mt;
    return t.index++, a
  }

  function la(e, t) {
    return typeof t == "function" ? t(e) : t
  }

  function ws(e) {
    var t = qe();
    return bc(t, Te, e)
  }

  function bc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue,
      s = l.pending;
    if (s !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = s.next, s.next = c
      }
      t.baseQueue = n = s, l.pending = null
    }
    if (s = e.baseState, n === null) e.memoizedState = s;
    else {
      t = n.next;
      var r = c = null,
        o = null,
        p = t,
        w = !1;
      do {
        var M = p.lane & -536870913;
        if (M !== p.lane ? (oe & M) === M : (aa & M) === M) {
          var v = p.revertLane;
          if (v === 0) o !== null && (o = o.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }), M === wl && (w = !0);
          else if ((aa & v) === v) {
            p = p.next, v === wl && (w = !0);
            continue
          } else M = {
            lane: 0,
            revertLane: p.revertLane,
            gesture: null,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, o === null ? (r = o = M, c = s) : o = o.next = M, le.lanes |= v, Ma |= v;
          M = p.action, Pa && a(s, M), s = p.hasEagerState ? p.eagerState : a(s, M)
        } else v = {
          lane: M,
          revertLane: p.revertLane,
          gesture: p.gesture,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        }, o === null ? (r = o = v, c = s) : o = o.next = v, le.lanes |= M, Ma |= M;
        p = p.next
      } while (p !== null && p !== t);
      if (o === null ? c = s : o.next = r, !vt(s, e.memoizedState) && (Ve = !0, w && (a = Al, a !== null))) throw a;
      e.memoizedState = s, e.baseState = c, e.baseQueue = o, l.lastRenderedState = s
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch]
  }

  function gc(e) {
    var t = qe(),
      a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      n = a.pending,
      s = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var c = n = n.next;
      do s = e(s, c.action), c = c.next; while (c !== n);
      vt(s, t.memoizedState) || (Ve = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), a.lastRenderedState = s
    }
    return [s, l]
  }

  function ao(e, t, a) {
    var l = le,
      n = qe(),
      s = he;
    if (s) {
      if (a === void 0) throw Error(d(407));
      a = a()
    } else a = t();
    var c = !vt((Te || n).memoizedState, a);
    if (c && (n.memoizedState = a, Ve = !0), n = n.queue, vc(so.bind(null, l, n, e), [e]), n.getSnapshot !== t || c || Ge !== null && Ge.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ol(9, {
          destroy: void 0
        }, no.bind(null, l, n, a, t), null), Me === null) throw Error(d(349));
      s || (aa & 127) !== 0 || lo(l, t, a)
    }
    return a
  }

  function lo(e, t, a) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: a
    }, t = le.updateQueue, t === null ? (t = Ns(), le.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e))
  }

  function no(e, t, a, l) {
    t.value = a, t.getSnapshot = l, io(t) && co(e)
  }

  function so(e, t, a) {
    return a(function() {
      io(t) && co(e)
    })
  }

  function io(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !vt(e, a)
    } catch {
      return !0
    }
  }

  function co(e) {
    var t = La(e, 2);
    t !== null && bt(t, e, 2)
  }

  function pc(e) {
    var t = st();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Pa) {
        ha(!0);
        try {
          a()
        } finally {
          ha(!1)
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: la,
      lastRenderedState: e
    }, t
  }

  function uo(e, t, a, l) {
    return e.baseState = a, bc(e, Te, typeof l == "function" ? l : la)
  }

  function Bh(e, t, a, l, n) {
    if (Cs(e)) throw Error(d(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          s.listeners.push(c)
        }
      };
      N.T !== null ? a(!0) : s.isTransition = !1, l(s), a = t.pending, a === null ? (s.next = t.pending = s, ro(t, s)) : (s.next = a.next, t.pending = a.next = s)
    }
  }

  function ro(e, t) {
    var a = t.action,
      l = t.payload,
      n = e.state;
    if (t.isTransition) {
      var s = N.T,
        c = {};
      N.T = c;
      try {
        var r = a(n, l),
          o = N.S;
        o !== null && o(c, r), oo(e, t, r)
      } catch (p) {
        yc(e, t, p)
      } finally {
        s !== null && c.types !== null && (s.types = c.types), N.T = s
      }
    } else try {
      s = a(n, l), oo(e, t, s)
    } catch (p) {
      yc(e, t, p)
    }
  }

  function oo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
      fo(e, t, l)
    }, function(l) {
      return yc(e, t, l)
    }) : fo(e, t, a)
  }

  function fo(e, t, a) {
    t.status = "fulfilled", t.value = a, ho(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ro(e, a)))
  }

  function yc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do t.status = "rejected", t.reason = a, ho(t), t = t.next; while (t !== l)
    }
    e.action = null
  }

  function ho(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++)(0, e[t])()
  }

  function mo(e, t) {
    return t
  }

  function xo(e, t) {
    if (he) {
      var a = Me.formState;
      if (a !== null) {
        e: {
          var l = le;
          if (he) {
            if (Ee) {
              t: {
                for (var n = Ee, s = kt; n.nodeType !== 8;) {
                  if (!s) {
                    n = null;
                    break t
                  }
                  if (n = Ht(n.nextSibling), n === null) {
                    n = null;
                    break t
                  }
                }
                s = n.data,
                n = s === "F!" || s === "F" ? n : null
              }
              if (n) {
                Ee = Ht(n.nextSibling), l = n.data === "F!";
                break e
              }
            }
            pa(l)
          }
          l = !1
        }
        l && (t = a[0])
      }
    }
    return a = st(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: t
    }, a.queue = l, a = Do.bind(null, le, l), l.dispatch = a, l = pc(!1), s = wc.bind(null, le, !1, l.queue), l = st(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = Bh.bind(null, le, n, s, a), n.dispatch = a, l.memoizedState = e, [t, a, !1]
  }

  function bo(e) {
    var t = qe();
    return go(t, Te, e)
  }

  function go(e, t, a) {
    if (t = bc(e, t, mo)[0], e = ws(la)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = yn(t)
    } catch (c) {
      throw c === Ml ? xs : c
    } else l = t;
    t = qe();
    var n = t.queue,
      s = n.dispatch;
    return a !== t.memoizedState && (le.flags |= 2048, Ol(9, {
      destroy: void 0
    }, Yh.bind(null, n, a), null)), [l, s, e]
  }

  function Yh(e, t) {
    e.action = t
  }

  function po(e) {
    var t = qe(),
      a = Te;
    if (a !== null) return go(t, a, e);
    qe(), t = t.memoizedState, a = qe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1]
  }

  function Ol(e, t, a, l) {
    return e = {
      tag: e,
      create: a,
      deps: l,
      inst: t,
      next: null
    }, t = le.updateQueue, t === null && (t = Ns(), le.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e
  }

  function yo() {
    return qe().memoizedState
  }

  function As(e, t, a, l) {
    var n = st();
    le.flags |= e, n.memoizedState = Ol(1 | t, {
      destroy: void 0
    }, a, l === void 0 ? null : l)
  }

  function Ms(e, t, a, l) {
    var n = qe();
    l = l === void 0 ? null : l;
    var s = n.memoizedState.inst;
    Te !== null && l !== null && oc(l, Te.memoizedState.deps) ? n.memoizedState = Ol(t, s, a, l) : (le.flags |= e, n.memoizedState = Ol(1 | t, s, a, l))
  }

  function vo(e, t) {
    As(8390656, 8, e, t)
  }

  function vc(e, t) {
    Ms(2048, 8, e, t)
  }

  function Gh(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null) t = Ns(), le.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e)
    }
  }

  function jo(e) {
    var t = qe().memoizedState;
    return Gh({
        ref: t,
        nextImpl: e
      }),
      function() {
        if ((ge & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments)
      }
  }

  function So(e, t) {
    return Ms(4, 2, e, t)
  }

  function No(e, t) {
    return Ms(4, 4, e, t)
  }

  function To(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null)
      }
    }
    if (t != null) return e = e(), t.current = e,
      function() {
        t.current = null
      }
  }

  function wo(e, t, a) {
    a = a != null ? a.concat([e]) : null, Ms(4, 4, To.bind(null, t, e), a)
  }

  function jc() {}

  function Ao(e, t) {
    var a = qe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && oc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e)
  }

  function Mo(e, t) {
    var a = qe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && oc(t, l[1])) return l[0];
    if (l = e(), Pa) {
      ha(!0);
      try {
        e()
      } finally {
        ha(!1)
      }
    }
    return a.memoizedState = [l, t], l
  }

  function Sc(e, t, a) {
    return a === void 0 || (aa & 1073741824) !== 0 && (oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = zf(), le.lanes |= e, Ma |= e, a)
  }

  function Co(e, t, a, l) {
    return vt(a, t) ? a : zl.current !== null ? (e = Sc(e, a, l), vt(e, t) || (Ve = !0), e) : (aa & 42) === 0 || (aa & 1073741824) !== 0 && (oe & 261930) === 0 ? (Ve = !0, e.memoizedState = a) : (e = zf(), le.lanes |= e, Ma |= e, t)
  }

  function zo(e, t, a, l, n) {
    var s = q.p;
    q.p = s !== 0 && 8 > s ? s : 8;
    var c = N.T,
      r = {};
    N.T = r, wc(e, !1, t, a);
    try {
      var o = n(),
        p = N.S;
      if (p !== null && p(r, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var w = Uh(o, l);
        vn(e, t, w, At(e))
      } else vn(e, t, l, At(e))
    } catch (M) {
      vn(e, t, {
        then: function() {},
        status: "rejected",
        reason: M
      }, At())
    } finally {
      q.p = s, c !== null && r.types !== null && (c.types = r.types), N.T = c
    }
  }

  function Vh() {}

  function Nc(e, t, a, l) {
    if (e.tag !== 5) throw Error(d(476));
    var n = Eo(e).queue;
    zo(e, n, t, Z, a === null ? Vh : function() {
      return _o(e), a(l)
    })
  }

  function Eo(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: Z
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
  }

  function _o(e) {
    var t = Eo(e);
    t.next === null && (t = e.alternate.memoizedState), vn(e, t.next.queue, {}, At())
  }

  function Tc() {
    return Pe(Hn)
  }

  function Oo() {
    return qe().memoizedState
  }

  function Ro() {
    return qe().memoizedState
  }

  function Xh(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = At();
          e = ja(a);
          var l = Sa(t, e, a);
          l !== null && (bt(l, t, a), xn(l, t, a)), t = {
            cache: Pi()
          }, e.payload = t;
          return
      }
      t = t.return
    }
  }

  function Lh(e, t, a) {
    var l = At();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cs(e) ? ko(t, a) : (a = Vi(e, t, a, l), a !== null && (bt(a, e, l), Uo(a, t, l)))
  }

  function Do(e, t, a) {
    var l = At();
    vn(e, t, a, l)
  }

  function vn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cs(e)) ko(t, n);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var c = t.lastRenderedState,
          r = s(c, a);
        if (n.hasEagerState = !0, n.eagerState = r, vt(r, c)) return us(e, t, n, 0), Me === null && cs(), !1
      } catch {}
      if (a = Vi(e, t, n, l), a !== null) return bt(a, e, l), Uo(a, t, l), !0
    }
    return !1
  }

  function wc(e, t, a, l) {
    if (l = {
        lane: 2,
        revertLane: lu(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Cs(e)) {
      if (t) throw Error(d(479))
    } else t = Vi(e, a, l, 2), t !== null && bt(t, e, 2)
  }

  function Cs(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le
  }

  function ko(e, t) {
    El = js = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t
  }

  function Uo(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Yu(e, a)
    }
  }
  var jn = {
    readContext: Pe,
    use: Ts,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useLayoutEffect: Re,
    useInsertionEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useSyncExternalStore: Re,
    useId: Re,
    useHostTransitionStatus: Re,
    useFormState: Re,
    useActionState: Re,
    useOptimistic: Re,
    useMemoCache: Re,
    useCacheRefresh: Re
  };
  jn.useEffectEvent = Re;
  var Ho = {
      readContext: Pe,
      use: Ts,
      useCallback: function(e, t) {
        return st().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: Pe,
      useEffect: vo,
      useImperativeHandle: function(e, t, a) {
        a = a != null ? a.concat([e]) : null, As(4194308, 4, To.bind(null, t, e), a)
      },
      useLayoutEffect: function(e, t) {
        return As(4194308, 4, e, t)
      },
      useInsertionEffect: function(e, t) {
        As(4, 2, e, t)
      },
      useMemo: function(e, t) {
        var a = st();
        t = t === void 0 ? null : t;
        var l = e();
        if (Pa) {
          ha(!0);
          try {
            e()
          } finally {
            ha(!1)
          }
        }
        return a.memoizedState = [l, t], l
      },
      useReducer: function(e, t, a) {
        var l = st();
        if (a !== void 0) {
          var n = a(t);
          if (Pa) {
            ha(!0);
            try {
              a(t)
            } finally {
              ha(!1)
            }
          }
        } else n = t;
        return l.memoizedState = l.baseState = n, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, l.queue = e, e = e.dispatch = Lh.bind(null, le, e), [l.memoizedState, e]
      },
      useRef: function(e) {
        var t = st();
        return e = {
          current: e
        }, t.memoizedState = e
      },
      useState: function(e) {
        e = pc(e);
        var t = e.queue,
          a = Do.bind(null, le, t);
        return t.dispatch = a, [e.memoizedState, a]
      },
      useDebugValue: jc,
      useDeferredValue: function(e, t) {
        var a = st();
        return Sc(a, e, t)
      },
      useTransition: function() {
        var e = pc(!1);
        return e = zo.bind(null, le, e.queue, !0, !1), st().memoizedState = e, [!1, e]
      },
      useSyncExternalStore: function(e, t, a) {
        var l = le,
          n = st();
        if (he) {
          if (a === void 0) throw Error(d(407));
          a = a()
        } else {
          if (a = t(), Me === null) throw Error(d(349));
          (oe & 127) !== 0 || lo(l, t, a)
        }
        n.memoizedState = a;
        var s = {
          value: a,
          getSnapshot: t
        };
        return n.queue = s, vo(so.bind(null, l, s, e), [e]), l.flags |= 2048, Ol(9, {
          destroy: void 0
        }, no.bind(null, l, s, a, t), null), a
      },
      useId: function() {
        var e = st(),
          t = Me.identifierPrefix;
        if (he) {
          var a = Zt,
            l = Qt;
          a = (l & ~(1 << 32 - yt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Ss++, 0 < a && (t += "H" + a.toString(32)), t += "_"
        } else a = Hh++, t = "_" + t + "r_" + a.toString(32) + "_";
        return e.memoizedState = t
      },
      useHostTransitionStatus: Tc,
      useFormState: xo,
      useActionState: xo,
      useOptimistic: function(e) {
        var t = st();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = a, t = wc.bind(null, le, !0, a), a.dispatch = t, [e, t]
      },
      useMemoCache: xc,
      useCacheRefresh: function() {
        return st().memoizedState = Xh.bind(null, le)
      },
      useEffectEvent: function(e) {
        var t = st(),
          a = {
            impl: e
          };
        return t.memoizedState = a,
          function() {
            if ((ge & 2) !== 0) throw Error(d(440));
            return a.impl.apply(void 0, arguments)
          }
      }
    },
    Ac = {
      readContext: Pe,
      use: Ts,
      useCallback: Ao,
      useContext: Pe,
      useEffect: vc,
      useImperativeHandle: wo,
      useInsertionEffect: So,
      useLayoutEffect: No,
      useMemo: Mo,
      useReducer: ws,
      useRef: yo,
      useState: function() {
        return ws(la)
      },
      useDebugValue: jc,
      useDeferredValue: function(e, t) {
        var a = qe();
        return Co(a, Te.memoizedState, e, t)
      },
      useTransition: function() {
        var e = ws(la)[0],
          t = qe().memoizedState;
        return [typeof e == "boolean" ? e : yn(e), t]
      },
      useSyncExternalStore: ao,
      useId: Oo,
      useHostTransitionStatus: Tc,
      useFormState: bo,
      useActionState: bo,
      useOptimistic: function(e, t) {
        var a = qe();
        return uo(a, Te, e, t)
      },
      useMemoCache: xc,
      useCacheRefresh: Ro
    };
  Ac.useEffectEvent = jo;
  var qo = {
    readContext: Pe,
    use: Ts,
    useCallback: Ao,
    useContext: Pe,
    useEffect: vc,
    useImperativeHandle: wo,
    useInsertionEffect: So,
    useLayoutEffect: No,
    useMemo: Mo,
    useReducer: gc,
    useRef: yo,
    useState: function() {
      return gc(la)
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var a = qe();
      return Te === null ? Sc(a, e, t) : Co(a, Te.memoizedState, e, t)
    },
    useTransition: function() {
      var e = gc(la)[0],
        t = qe().memoizedState;
      return [typeof e == "boolean" ? e : yn(e), t]
    },
    useSyncExternalStore: ao,
    useId: Oo,
    useHostTransitionStatus: Tc,
    useFormState: po,
    useActionState: po,
    useOptimistic: function(e, t) {
      var a = qe();
      return Te !== null ? uo(a, Te, e, t) : (a.baseState = e, [e, a.queue.dispatch])
    },
    useMemoCache: xc,
    useCacheRefresh: Ro
  };
  qo.useEffectEvent = jo;

  function Mc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : _({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a)
  }
  var Cc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = At(),
        n = ja(l);
      n.payload = t, a != null && (n.callback = a), t = Sa(e, n, l), t !== null && (bt(t, e, l), xn(t, e, l))
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = At(),
        n = ja(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Sa(e, n, l), t !== null && (bt(t, e, l), xn(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = At(),
        l = ja(a);
      l.tag = 2, t != null && (l.callback = t), t = Sa(e, l, a), t !== null && (bt(t, e, a), xn(t, e, a))
    }
  };

  function Bo(e, t, a, l, n, s, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, c) : t.prototype && t.prototype.isPureReactComponent ? !cn(a, l) || !cn(n, s) : !0
  }

  function Yo(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Cc.enqueueReplaceState(t, t.state, null)
  }

  function el(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l])
    }
    if (e = e.defaultProps) {
      a === t && (a = _({}, a));
      for (var n in e) a[n] === void 0 && (a[n] = e[n])
    }
    return a
  }

  function Go(e) {
    is(e)
  }

  function Vo(e) {
    console.error(e)
  }

  function Xo(e) {
    is(e)
  }

  function zs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, {
        componentStack: t.stack
      })
    } catch (l) {
      setTimeout(function() {
        throw l
      })
    }
  }

  function Lo(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (n) {
      setTimeout(function() {
        throw n
      })
    }
  }

  function zc(e, t, a) {
    return a = ja(a), a.tag = 3, a.payload = {
      element: null
    }, a.callback = function() {
      zs(e, t)
    }, a
  }

  function Qo(e) {
    return e = ja(e), e.tag = 3, e
  }

  function Zo(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var s = l.value;
      e.payload = function() {
        return n(s)
      }, e.callback = function() {
        Lo(t, a, l)
      }
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Lo(t, a, l), typeof n != "function" && (Ca === null ? Ca = new Set([this]) : Ca.add(this));
      var r = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: r !== null ? r : ""
      })
    })
  }

  function Qh(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Tl(t, a, n, !0), a = St.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Ut === null ? Gs() : a.alternate === null && De === 0 && (De = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === bs ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([l]) : t.add(l), eu(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === bs ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([l]) : a.add(l)), eu(e, l, n)), !1
        }
        throw Error(d(435, a.tag))
      }
      return eu(e, l, n), Gs(), !1
    }
    if (he) return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== Ji && (e = Error(d(422), {
      cause: l
    }), on(Ot(e, a)))) : (l !== Ji && (t = Error(d(423), {
      cause: l
    }), on(Ot(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = Ot(l, a), n = zc(e.stateNode, l, n), sc(e, n), De !== 4 && (De = 2)), !1;
    var s = Error(d(520), {
      cause: l
    });
    if (s = Ot(s, a), zn === null ? zn = [s] : zn.push(s), De !== 4 && (De = 2), t === null) return !0;
    l = Ot(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = zc(a.stateNode, l, e), sc(a, e), !1;
        case 1:
          if (t = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Ca === null || !Ca.has(s)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = Qo(n), Zo(n, e, a, l), sc(a, n), !1
      }
      a = a.return
    } while (a !== null);
    return !1
  }
  var Ec = Error(d(461)),
    Ve = !1;

  function et(e, t, a, l) {
    t.child = e === null ? Wr(t, null, a, l) : Ia(t, e.child, a, l)
  }

  function Ko(e, t, a, l, n) {
    a = a.render;
    var s = t.ref;
    if ("ref" in l) {
      var c = {};
      for (var r in l) r !== "ref" && (c[r] = l[r])
    } else c = l;
    return Ja(t), l = fc(e, t, a, c, s, n), r = dc(), e !== null && !Ve ? (hc(e, t, n), na(e, t, n)) : (he && r && Zi(t), t.flags |= 1, et(e, t, l, n), t.child)
  }

  function Jo(e, t, a, l, n) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" && !Xi(s) && s.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = s, Wo(e, t, s, l, n)) : (e = os(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !qc(e, n)) {
      var c = s.memoizedProps;
      if (a = a.compare, a = a !== null ? a : cn, a(c, l) && e.ref === t.ref) return na(e, t, n)
    }
    return t.flags |= 1, e = It(s, l), e.ref = t.ref, e.return = t, t.child = e
  }

  function Wo(e, t, a, l, n) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (cn(s, l) && e.ref === t.ref)
        if (Ve = !1, t.pendingProps = l = s, qc(e, n))(e.flags & 131072) !== 0 && (Ve = !0);
        else return t.lanes = e.lanes, na(e, t, n)
    }
    return _c(e, t, a, l, n)
  }

  function $o(e, t, a, l) {
    var n = l.children,
      s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, n = 0; l !== null;) n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~s
        } else l = 0, t.child = null;
        return Fo(e, t, s, a, l)
      }
      if ((a & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && ms(t, s !== null ? s.cachePool : null), s !== null ? Ir(t, s) : cc(), Pr(t);
      else return l = t.lanes = 536870912, Fo(e, t, s !== null ? s.baseLanes | a : a, a, l)
    } else s !== null ? (ms(t, s.cachePool), Ir(t, s), Ta(), t.memoizedState = null) : (e !== null && ms(t, null), cc(), Ta());
    return et(e, t, n, a), t.child
  }

  function Sn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling
  }

  function Fo(e, t, a, l, n) {
    var s = tc();
    return s = s === null ? null : {
      parent: Ye._currentValue,
      pool: s
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: s
    }, e !== null && ms(t, null), cc(), Pr(t), e !== null && Tl(e, t, l, !0), t.childLanes = n, null
  }

  function Es(e, t) {
    return t = Os({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
  }

  function Io(e, t, a) {
    return Ia(t, e.child, null, a), e = Es(t, t.pendingProps), e.flags |= 2, Nt(t), t.memoizedState = null, e
  }

  function Zh(e, t, a) {
    var l = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (he) {
        if (l.mode === "hidden") return e = Es(t, l), t.lanes = 536870912, Sn(null, e);
        if (rc(t), (e = Ee) ? (e = fd(e, kt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ba !== null ? {
              id: Qt,
              overflow: Zt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, a = Dr(e), a.return = t, t.child = a, Ie = t, Ee = null)) : e = null, e === null) throw pa(t);
        return t.lanes = 536870912, null
      }
      return Es(t, l)
    }
    var s = e.memoizedState;
    if (s !== null) {
      var c = s.dehydrated;
      if (rc(t), n)
        if (t.flags & 256) t.flags &= -257, t = Io(e, t, a);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(d(558));
      else if (Ve || Tl(e, t, a, !1), n = (a & e.childLanes) !== 0, Ve || n) {
        if (l = Me, l !== null && (c = Gu(l, a), c !== 0 && c !== s.retryLane)) throw s.retryLane = c, La(e, c), bt(l, e, c), Ec;
        Gs(), t = Io(e, t, a)
      } else e = s.treeContext, Ee = Ht(c.nextSibling), Ie = t, he = !0, ga = null, kt = !1, e !== null && Hr(t, e), t = Es(t, l), t.flags |= 4096;
      return t
    }
    return e = It(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e
  }

  function _s(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(d(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816)
    }
  }

  function _c(e, t, a, l, n) {
    return Ja(t), a = fc(e, t, a, l, void 0, n), l = dc(), e !== null && !Ve ? (hc(e, t, n), na(e, t, n)) : (he && l && Zi(t), t.flags |= 1, et(e, t, a, n), t.child)
  }

  function Po(e, t, a, l, n, s) {
    return Ja(t), t.updateQueue = null, a = to(t, l, a, n), eo(e), l = dc(), e !== null && !Ve ? (hc(e, t, s), na(e, t, s)) : (he && l && Zi(t), t.flags |= 1, et(e, t, a, s), t.child)
  }

  function ef(e, t, a, l, n) {
    if (Ja(t), t.stateNode === null) {
      var s = vl,
        c = a.contextType;
      typeof c == "object" && c !== null && (s = Pe(c)), s = new a(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Cc, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, lc(t), c = a.contextType, s.context = typeof c == "object" && c !== null ? Pe(c) : vl, s.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Mc(t, a, c, l), s.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (c = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), c !== s.state && Cc.enqueueReplaceState(s, s.state, null), gn(t, l, s, n), bn(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0
    } else if (e === null) {
      s = t.stateNode;
      var r = t.memoizedProps,
        o = el(a, r);
      s.props = o;
      var p = s.context,
        w = a.contextType;
      c = vl, typeof w == "object" && w !== null && (c = Pe(w));
      var M = a.getDerivedStateFromProps;
      w = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, w || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (r || p !== c) && Yo(t, s, l, c), va = !1;
      var v = t.memoizedState;
      s.state = v, gn(t, l, s, n), bn(), p = t.memoizedState, r || v !== p || va ? (typeof M == "function" && (Mc(t, a, M, l), p = t.memoizedState), (o = va || Bo(t, a, o, l, v, p, c)) ? (w || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = p), s.props = l, s.state = p, s.context = c, l = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
    } else {
      s = t.stateNode, nc(e, t), c = t.memoizedProps, w = el(a, c), s.props = w, M = t.pendingProps, v = s.context, p = a.contextType, o = vl, typeof p == "object" && p !== null && (o = Pe(p)), r = a.getDerivedStateFromProps, (p = typeof r == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== M || v !== o) && Yo(t, s, l, o), va = !1, v = t.memoizedState, s.state = v, gn(t, l, s, n), bn();
      var j = t.memoizedState;
      c !== M || v !== j || va || e !== null && e.dependencies !== null && ds(e.dependencies) ? (typeof r == "function" && (Mc(t, a, r, l), j = t.memoizedState), (w = va || Bo(t, a, w, l, v, j, o) || e !== null && e.dependencies !== null && ds(e.dependencies)) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, j, o), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(l, j, o)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = j), s.props = l, s.state = j, s.context = o, l = w) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), l = !1)
    }
    return s = l, _s(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = Ia(t, e.child, null, n), t.child = Ia(t, null, a, n)) : et(e, t, a, n), t.memoizedState = s.state, e = t.child) : e = na(e, t, n), e
  }

  function tf(e, t, a, l) {
    return Za(), t.flags |= 256, et(e, t, a, l), t.child
  }
  var Oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function Rc(e) {
    return {
      baseLanes: e,
      cachePool: Xr()
    }
  }

  function Dc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= wt), e
  }

  function af(e, t, a) {
    var l = t.pendingProps,
      n = !1,
      s = (t.flags & 128) !== 0,
      c;
    if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (n ? Na(t) : Ta(), (e = Ee) ? (e = fd(e, kt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ba !== null ? {
              id: Qt,
              overflow: Zt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, a = Dr(e), a.return = t, t.child = a, Ie = t, Ee = null)) : e = null, e === null) throw pa(t);
        return bu(e) ? t.lanes = 32 : t.lanes = 536870912, null
      }
      var r = l.children;
      return l = l.fallback, n ? (Ta(), n = t.mode, r = Os({
        mode: "hidden",
        children: r
      }, n), l = Qa(l, n, a, null), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = Rc(a), l.childLanes = Dc(e, c, a), t.memoizedState = Oc, Sn(null, l)) : (Na(t), kc(t, r))
    }
    var o = e.memoizedState;
    if (o !== null && (r = o.dehydrated, r !== null)) {
      if (s) t.flags & 256 ? (Na(t), t.flags &= -257, t = Uc(e, t, a)) : t.memoizedState !== null ? (Ta(), t.child = e.child, t.flags |= 128, t = null) : (Ta(), r = l.fallback, n = t.mode, l = Os({
        mode: "visible",
        children: l.children
      }, n), r = Qa(r, n, a, null), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, Ia(t, e.child, null, a), l = t.child, l.memoizedState = Rc(a), l.childLanes = Dc(e, c, a), t.memoizedState = Oc, t = Sn(null, l));
      else if (Na(t), bu(r)) {
        if (c = r.nextSibling && r.nextSibling.dataset, c) var p = c.dgst;
        c = p, l = Error(d(419)), l.stack = "", l.digest = c, on({
          value: l,
          source: null,
          stack: null
        }), t = Uc(e, t, a)
      } else if (Ve || Tl(e, t, a, !1), c = (a & e.childLanes) !== 0, Ve || c) {
        if (c = Me, c !== null && (l = Gu(c, a), l !== 0 && l !== o.retryLane)) throw o.retryLane = l, La(e, l), bt(c, e, l), Ec;
        xu(r) || Gs(), t = Uc(e, t, a)
      } else xu(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = o.treeContext, Ee = Ht(r.nextSibling), Ie = t, he = !0, ga = null, kt = !1, e !== null && Hr(t, e), t = kc(t, l.children), t.flags |= 4096);
      return t
    }
    return n ? (Ta(), r = l.fallback, n = t.mode, o = e.child, p = o.sibling, l = It(o, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = o.subtreeFlags & 65011712, p !== null ? r = It(p, r) : (r = Qa(r, n, a, null), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, Sn(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = Rc(a) : (n = r.cachePool, n !== null ? (o = Ye._currentValue, n = n.parent !== o ? {
      parent: o,
      pool: o
    } : n) : n = Xr(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: n
    }), l.memoizedState = r, l.childLanes = Dc(e, c, a), t.memoizedState = Oc, Sn(e.child, l)) : (Na(t), a = e.child, e = a.sibling, a = It(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a)
  }

  function kc(e, t) {
    return t = Os({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t
  }

  function Os(e, t) {
    return e = jt(22, e, null, t), e.lanes = 0, e
  }

  function Uc(e, t, a) {
    return Ia(t, e.child, null, a), e = kc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
  }

  function lf(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Fi(e.return, t, a)
  }

  function Hc(e, t, a, l, n, s) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: s
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = a, c.tailMode = n, c.treeForkCount = s)
  }

  function nf(e, t, a) {
    var l = t.pendingProps,
      n = l.revealOrder,
      s = l.tail;
    l = l.children;
    var c = He.current,
      r = (c & 2) !== 0;
    if (r ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, S(He, c), et(e, t, l, a), l = he ? rn : 0, !r && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && lf(e, a, t);
      else if (e.tag === 19) lf(e, a, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null;) e = a.alternate, e !== null && vs(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), Hc(t, !1, n, a, s, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null;) {
          if (e = n.alternate, e !== null && vs(e) === null) {
            t.child = n;
            break
          }
          e = n.sibling, n.sibling = a, a = n, n = e
        }
        Hc(t, !0, a, null, s, l);
        break;
      case "together":
        Hc(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function na(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ma |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Tl(e, t, a, !1), (a & t.childLanes) === 0) return null
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, a = It(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;) e = e.sibling, a = a.sibling = It(e, e.pendingProps), a.return = t;
      a.sibling = null
    }
    return t.child
  }

  function qc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ds(e)))
  }

  function Kh(e, t, a) {
    switch (t.tag) {
      case 3:
        K(t, t.stateNode.containerInfo), ya(t, Ye, e.memoizedState.cache), Za();
        break;
      case 27:
      case 5:
        Ne(t);
        break;
      case 4:
        K(t, t.stateNode.containerInfo);
        break;
      case 10:
        ya(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, rc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (Na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? af(e, t, a) : (Na(t), e = na(e, t, a), e !== null ? e.sibling : null);
        Na(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Tl(e, t, a, !1), l = (a & t.childLanes) !== 0), n) {
          if (l) return nf(e, t, a);
          t.flags |= 128
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), S(He, He.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, $o(e, t, a, t.pendingProps);
      case 24:
        ya(t, Ye, e.memoizedState.cache)
    }
    return na(e, t, a)
  }

  function sf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ve = !0;
      else {
        if (!qc(e, a) && (t.flags & 128) === 0) return Ve = !1, Kh(e, t, a);
        Ve = (e.flags & 131072) !== 0
      }
    else Ve = !1, he && (t.flags & 1048576) !== 0 && Ur(t, rn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = $a(t.elementType), t.type = e, typeof e == "function") Xi(e) ? (l = el(e, l), t.tag = 1, t = ef(null, t, e, l, a)) : (t.tag = 0, t = _c(null, t, e, l, a));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ze) {
                t.tag = 11, t = Ko(null, t, e, l, a);
                break e
              } else if (n === W) {
                t.tag = 14, t = Jo(null, t, e, l, a);
                break e
              }
            }
            throw t = ut(e) || e, Error(d(306, t, ""))
          }
        }
        return t;
      case 0:
        return _c(e, t, t.type, t.pendingProps, a);
      case 1:
        return l = t.type, n = el(l, t.pendingProps), ef(e, t, l, n, a);
      case 3:
        e: {
          if (K(t, t.stateNode.containerInfo), e === null) throw Error(d(387));l = t.pendingProps;
          var s = t.memoizedState;n = s.element,
          nc(e, t),
          gn(t, l, null, a);
          var c = t.memoizedState;
          if (l = c.cache, ya(t, Ye, l), l !== s.cache && Ii(t, [Ye], a, !0), bn(), l = c.element, s.isDehydrated)
            if (s = {
                element: l,
                isDehydrated: !1,
                cache: c.cache
              }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = tf(e, t, l, a);
              break e
            } else if (l !== n) {
            n = Ot(Error(d(424)), t), on(n), t = tf(e, t, l, a);
            break e
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ee = Ht(e.firstChild), Ie = t, he = !0, ga = null, kt = !0, a = Wr(t, null, l, a), t.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Za(), l === n) {
              t = na(e, t, a);
              break e
            }
            et(e, t, l, a)
          }
          t = t.child
        }
        return t;
      case 26:
        return _s(e, t), e === null ? (a = gd(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : he || (a = t.type, e = t.pendingProps, l = Js(H.current).createElement(a), l[Fe] = t, l[ot] = e, tt(l, a, e), Je(l), t.stateNode = l) : t.memoizedState = gd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Ne(t), e === null && he && (l = t.stateNode = md(t.type, t.pendingProps, H.current), Ie = t, kt = !0, n = Ee, Oa(t.type) ? (gu = n, Ee = Ht(l.firstChild)) : Ee = n), et(e, t, t.pendingProps.children, a), _s(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && he && ((n = l = Ee) && (l = Nm(l, t.type, t.pendingProps, kt), l !== null ? (t.stateNode = l, Ie = t, Ee = Ht(l.firstChild), kt = !1, n = !0) : n = !1), n || pa(t)), Ne(t), n = t.type, s = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = s.children, du(n, s) ? l = null : c !== null && du(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = fc(e, t, qh, null, null, a), Hn._currentValue = n), _s(e, t), et(e, t, l, a), t.child;
      case 6:
        return e === null && he && ((e = a = Ee) && (a = Tm(a, t.pendingProps, kt), a !== null ? (t.stateNode = a, Ie = t, Ee = null, e = !0) : e = !1), e || pa(t)), null;
      case 13:
        return af(e, t, a);
      case 4:
        return K(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = Ia(t, null, l, a) : et(e, t, l, a), t.child;
      case 11:
        return Ko(e, t, t.type, t.pendingProps, a);
      case 7:
        return et(e, t, t.pendingProps, a), t.child;
      case 8:
        return et(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return et(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return l = t.pendingProps, ya(t, t.type, l.value), et(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, Ja(t), n = Pe(n), l = l(n), t.flags |= 1, et(e, t, l, a), t.child;
      case 14:
        return Jo(e, t, t.type, t.pendingProps, a);
      case 15:
        return Wo(e, t, t.type, t.pendingProps, a);
      case 19:
        return nf(e, t, a);
      case 31:
        return Zh(e, t, a);
      case 22:
        return $o(e, t, a, t.pendingProps);
      case 24:
        return Ja(t), l = Pe(Ye), e === null ? (n = tc(), n === null && (n = Me, s = Pi(), n.pooledCache = s, s.refCount++, s !== null && (n.pooledCacheLanes |= a), n = s), t.memoizedState = {
          parent: l,
          cache: n
        }, lc(t), ya(t, Ye, n)) : ((e.lanes & a) !== 0 && (nc(e, t), gn(t, null, null, a), bn()), n = e.memoizedState, s = t.memoizedState, n.parent !== l ? (n = {
          parent: l,
          cache: l
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ya(t, Ye, l)) : (l = s.cache, ya(t, Ye, l), l !== n.cache && Ii(t, [Ye], a, !0))), et(e, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps
    }
    throw Error(d(156, t.tag))
  }

  function sa(e) {
    e.flags |= 4
  }

  function Bc(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Rf()) e.flags |= 8192;
      else throw Fa = bs, ac
    } else e.flags &= -16777217
  }

  function cf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Sd(t))
      if (Rf()) e.flags |= 8192;
      else throw Fa = bs, ac
  }

  function Rs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? qu() : 536870912, e.lanes |= t, Ul |= t)
  }

  function Nn(e, t) {
    if (!he) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
    }
  }

  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var n = e.child; n !== null;) a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null;) a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t
  }

  function Jh(e, t, a) {
    var l = t.pendingProps;
    switch (Ki(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return _e(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ta(Ye), F(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Nl(t) ? sa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wi())), _e(t), null;
      case 26:
        var n = t.type,
          s = t.memoizedState;
        return e === null ? (sa(t), s !== null ? (_e(t), cf(t, s)) : (_e(t), Bc(t, n, null, l, a))) : s ? s !== e.memoizedState ? (sa(t), _e(t), cf(t, s)) : (_e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && sa(t), _e(t), Bc(t, n, e, l, a)), null;
      case 27:
        if (ye(t), a = H.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && sa(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(d(166));
            return _e(t), null
          }
          e = C.current, Nl(t) ? qr(t) : (e = md(n, l, a), t.stateNode = e, sa(t))
        }
        return _e(t), null;
      case 5:
        if (ye(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && sa(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(d(166));
            return _e(t), null
          }
          if (s = C.current, Nl(t)) qr(t);
          else {
            var c = Js(H.current);
            switch (s) {
              case 1:
                s = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                s = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    s = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    s = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    s = c.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(s.firstChild);
                    break;
                  case "select":
                    s = typeof l.is == "string" ? c.createElement("select", {
                      is: l.is
                    }) : c.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                    break;
                  default:
                    s = typeof l.is == "string" ? c.createElement(n, {
                      is: l.is
                    }) : c.createElement(n)
                }
            }
            s[Fe] = t, s[ot] = l;
            e: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) s.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue
              }
              if (c === t) break e;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === t) break e;
                c = c.return
              }
              c.sibling.return = c.return, c = c.sibling
            }
            t.stateNode = s;
            e: switch (tt(s, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1
            }
            l && sa(t)
          }
        }
        return _e(t), Bc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && sa(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(d(166));
          if (e = H.current, Nl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = Ie, n !== null) switch (n.tag) {
              case 27:
              case 5:
                l = n.memoizedProps
            }
            e[Fe] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || ld(e.nodeValue, a)), e || pa(t, !0)
          } else e = Js(e).createTextNode(l), e[Fe] = t, t.stateNode = e
        }
        return _e(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Nl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(d(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(557));
              e[Fe] = t
            } else Za(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _e(t), e = !1
          } else a = Wi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e) return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558))
        }
        return _e(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Nl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(d(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
              n[Fe] = t
            } else Za(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _e(t), n = !1
          } else n = Wi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n) return t.flags & 256 ? (Nt(t), t) : (Nt(t), null)
        }
        return Nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Rs(t, t.updateQueue), _e(t), null);
      case 4:
        return F(), e === null && cu(t.stateNode.containerInfo), _e(t), null;
      case 10:
        return ta(t.type), _e(t), null;
      case 19:
        if (m(He), l = t.memoizedState, l === null) return _e(t), null;
        if (n = (t.flags & 128) !== 0, s = l.rendering, s === null)
          if (n) Nn(l, !1);
          else {
            if (De !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null;) {
                if (s = vs(e), s !== null) {
                  for (t.flags |= 128, Nn(l, !1), e = s.updateQueue, t.updateQueue = e, Rs(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;) Rr(a, e), a = a.sibling;
                  return S(He, He.current & 1 | 2), he && Pt(t, l.treeForkCount), t.child
                }
                e = e.sibling
              }
            l.tail !== null && at() > qs && (t.flags |= 128, n = !0, Nn(l, !1), t.lanes = 4194304)
          }
        else {
          if (!n)
            if (e = vs(s), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Rs(t, e), Nn(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !he) return _e(t), null
            } else 2 * at() - l.renderingStartTime > qs && a !== 536870912 && (t.flags |= 128, n = !0, Nn(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (e = l.last, e !== null ? e.sibling = s : t.child = s, l.last = s)
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = at(), e.sibling = null, a = He.current, S(He, n ? a & 1 | 2 : a & 1), he && Pt(t, l.treeForkCount), e) : (_e(t), null);
      case 22:
      case 23:
        return Nt(t), uc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), a = t.updateQueue, a !== null && Rs(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && m(Wa), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ta(Ye), _e(t), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(d(156, t.tag))
  }

  function Wh(e, t) {
    switch (Ki(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ta(Ye), F(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ye(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Nt(t), t.alternate === null) throw Error(d(340));
          Za()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Nt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(d(340));
          Za()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return m(He), null;
      case 4:
        return F(), null;
      case 10:
        return ta(t.type), null;
      case 22:
      case 23:
        return Nt(t), uc(), e !== null && m(Wa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ta(Ye), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function uf(e, t) {
    switch (Ki(t), t.tag) {
      case 3:
        ta(Ye), F();
        break;
      case 26:
      case 27:
      case 5:
        ye(t);
        break;
      case 4:
        F();
        break;
      case 31:
        t.memoizedState !== null && Nt(t);
        break;
      case 13:
        Nt(t);
        break;
      case 19:
        m(He);
        break;
      case 10:
        ta(t.type);
        break;
      case 22:
      case 23:
        Nt(t), uc(), e !== null && m(Wa);
        break;
      case 24:
        ta(Ye)
    }
  }

  function Tn(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var s = a.create,
              c = a.inst;
            l = s(), c.destroy = l
          }
          a = a.next
        } while (a !== n)
      }
    } catch (r) {
      je(t, t.return, r)
    }
  }

  function wa(e, t, a) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var s = n.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var c = l.inst,
              r = c.destroy;
            if (r !== void 0) {
              c.destroy = void 0, n = t;
              var o = a,
                p = r;
              try {
                p()
              } catch (w) {
                je(n, o, w)
              }
            }
          }
          l = l.next
        } while (l !== s)
      }
    } catch (w) {
      je(t, t.return, w)
    }
  }

  function rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Fr(t, a)
      } catch (l) {
        je(e, e.return, l)
      }
    }
  }

  function of(e, t, a) {
    a.props = el(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount()
    } catch (l) {
      je(e, t, l)
    }
  }

  function wn(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l
      }
    } catch (n) {
      je(e, t, n)
    }
  }

  function Kt(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function") try {
        l()
      } catch (n) {
        je(e, t, n)
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
      } else if (typeof a == "function") try {
        a(null)
      } catch (n) {
        je(e, t, n)
      } else a.current = null
  }

  function ff(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
      }
    }
    catch (n) {
      je(e, e.return, n)
    }
  }

  function Yc(e, t, a) {
    try {
      var l = e.stateNode;
      gm(l, e.type, a, t), l[ot] = t
    } catch (n) {
      je(e, e.return, n)
    }
  }

  function df(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Oa(e.type) || e.tag === 4
  }

  function Gc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || df(e.return)) return null;
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && Oa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }

  function Vc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = $t));
    else if (l !== 4 && (l === 27 && Oa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Vc(e, t, a), e = e.sibling; e !== null;) Vc(e, t, a), e = e.sibling
  }

  function Ds(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Oa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ds(e, t, a), e = e.sibling; e !== null;) Ds(e, t, a), e = e.sibling
  }

  function hf(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
      tt(t, l, a), t[Fe] = e, t[ot] = a
    } catch (s) {
      je(e, e.return, s)
    }
  }
  var ia = !1,
    Xe = !1,
    Xc = !1,
    mf = typeof WeakSet == "function" ? WeakSet : Set,
    We = null;

  function $h(e, t) {
    if (e = e.containerInfo, ou = ti, e = Tr(e), Ui(e)) {
      if ("selectionStart" in e) var a = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var l = a.getSelection && a.getSelection();
        if (l && l.rangeCount !== 0) {
          a = l.anchorNode;
          var n = l.anchorOffset,
            s = l.focusNode;
          l = l.focusOffset;
          try {
            a.nodeType, s.nodeType
          } catch {
            a = null;
            break e
          }
          var c = 0,
            r = -1,
            o = -1,
            p = 0,
            w = 0,
            M = e,
            v = null;
          t: for (;;) {
            for (var j; M !== a || n !== 0 && M.nodeType !== 3 || (r = c + n), M !== s || l !== 0 && M.nodeType !== 3 || (o = c + l), M.nodeType === 3 && (c += M.nodeValue.length), (j = M.firstChild) !== null;) v = M, M = j;
            for (;;) {
              if (M === e) break t;
              if (v === a && ++p === n && (r = c), v === s && ++w === l && (o = c), (j = M.nextSibling) !== null) break;
              M = v, v = M.parentNode
            }
            M = j
          }
          a = r === -1 || o === -1 ? null : {
            start: r,
            end: o
          }
        } else a = null
      }
      a = a || {
        start: 0,
        end: 0
      }
    } else a = null;
    for (fu = {
        focusedElem: e,
        selectionRange: a
      }, ti = !1, We = t; We !== null;)
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, We = e;
      else
        for (; We !== null;) {
          switch (t = We, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++) n = e[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, a = t, n = s.memoizedProps, s = s.memoizedState, l = a.stateNode;
                try {
                  var G = el(a.type, n);
                  e = l.getSnapshotBeforeUpdate(G, s), l.__reactInternalSnapshotBeforeUpdate = e
                } catch (J) {
                  je(a, a.return, J)
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) mu(e);
                else if (a === 1) switch (e.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    mu(e);
                    break;
                  default:
                    e.textContent = ""
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
              if ((e & 1024) !== 0) throw Error(d(163))
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, We = e;
            break
          }
          We = t.return
        }
  }

  function xf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ua(e, a), l & 4 && Tn(5, a);
        break;
      case 1:
        if (ua(e, a), l & 4)
          if (e = a.stateNode, t === null) try {
            e.componentDidMount()
          } catch (c) {
            je(a, a.return, c)
          } else {
            var n = el(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (c) {
              je(a, a.return, c)
            }
          }
        l & 64 && rf(a), l & 512 && wn(a, a.return);
        break;
      case 3:
        if (ua(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode
          }
          try {
            Fr(e, t)
          } catch (c) {
            je(a, a.return, c)
          }
        }
        break;
      case 27:
        t === null && l & 4 && hf(a);
      case 26:
      case 5:
        ua(e, a), t === null && l & 4 && ff(a), l & 512 && wn(a, a.return);
        break;
      case 12:
        ua(e, a);
        break;
      case 31:
        ua(e, a), l & 4 && pf(e, a);
        break;
      case 13:
        ua(e, a), l & 4 && yf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = sm.bind(null, a), wm(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || ia, !l) {
          t = t !== null && t.memoizedState !== null || Xe, n = ia;
          var s = Xe;
          ia = l, (Xe = t) && !s ? ra(e, a, (a.subtreeFlags & 8772) !== 0) : ua(e, a), ia = n, Xe = s
        }
        break;
      case 30:
        break;
      default:
        ua(e, a)
    }
  }

  function bf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, bf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && yi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }
  var Oe = null,
    dt = !1;

  function ca(e, t, a) {
    for (a = a.child; a !== null;) gf(e, t, a), a = a.sibling
  }

  function gf(e, t, a) {
    if (pt && typeof pt.onCommitFiberUnmount == "function") try {
      pt.onCommitFiberUnmount(qa, a)
    } catch {}
    switch (a.tag) {
      case 26:
        Xe || Kt(a, t), ca(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Xe || Kt(a, t);
        var l = Oe,
          n = dt;
        Oa(a.type) && (Oe = a.stateNode, dt = !1), ca(e, t, a), Dn(a.stateNode), Oe = l, dt = n;
        break;
      case 5:
        Xe || Kt(a, t);
      case 6:
        if (l = Oe, n = dt, Oe = null, ca(e, t, a), Oe = l, dt = n, Oe !== null)
          if (dt) try {
            (Oe.nodeType === 9 ? Oe.body : Oe.nodeName === "HTML" ? Oe.ownerDocument.body : Oe).removeChild(a.stateNode)
          } catch (s) {
            je(a, t, s)
          } else try {
            Oe.removeChild(a.stateNode)
          } catch (s) {
            je(a, t, s)
          }
        break;
      case 18:
        Oe !== null && (dt ? (e = Oe, rd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Ll(e)) : rd(Oe, a.stateNode));
        break;
      case 4:
        l = Oe, n = dt, Oe = a.stateNode.containerInfo, dt = !0, ca(e, t, a), Oe = l, dt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wa(2, a, t), Xe || wa(4, a, t), ca(e, t, a);
        break;
      case 1:
        Xe || (Kt(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && of(a, t, l)), ca(e, t, a);
        break;
      case 21:
        ca(e, t, a);
        break;
      case 22:
        Xe = (l = Xe) || a.memoizedState !== null, ca(e, t, a), Xe = l;
        break;
      default:
        ca(e, t, a)
    }
  }

  function pf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ll(e)
      } catch (a) {
        je(t, t.return, a)
      }
    }
  }

  function yf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Ll(e)
    } catch (a) {
      je(t, t.return, a)
    }
  }

  function Fh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new mf), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new mf), t;
      default:
        throw Error(d(435, e.tag))
    }
  }

  function ks(e, t) {
    var a = Fh(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = im.bind(null, e, l);
        l.then(n, n)
      }
    })
  }

  function ht(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l],
          s = e,
          c = t,
          r = c;
        e: for (; r !== null;) {
          switch (r.tag) {
            case 27:
              if (Oa(r.type)) {
                Oe = r.stateNode, dt = !1;
                break e
              }
              break;
            case 5:
              Oe = r.stateNode, dt = !1;
              break e;
            case 3:
            case 4:
              Oe = r.stateNode.containerInfo, dt = !0;
              break e
          }
          r = r.return
        }
        if (Oe === null) throw Error(d(160));
        gf(s, c, n), Oe = null, dt = !1, s = n.alternate, s !== null && (s.return = null), n.return = null
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) vf(t, e), t = t.sibling
  }
  var Xt = null;

  function vf(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), mt(e), l & 4 && (wa(3, e, e.return), Tn(3, e), wa(5, e, e.return));
        break;
      case 1:
        ht(t, e), mt(e), l & 512 && (Xe || a === null || Kt(a, a.return)), l & 64 && ia && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Xt;
        if (ht(t, e), mt(e), l & 512 && (Xe || a === null || Kt(a, a.return)), l & 4) {
          var s = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type,
                  a = e.memoizedProps,
                  n = n.ownerDocument || n;t: switch (l) {
                    case "title":
                      s = n.getElementsByTagName("title")[0], (!s || s[Fl] || s[Fe] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = n.createElement(l), n.head.insertBefore(s, n.querySelector("head > title"))), tt(s, l, a), s[Fe] = e, Je(s), l = s;
                      break e;
                    case "link":
                      var c = vd("link", "href", n).get(l + (a.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (s = c[r], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            c.splice(r, 1);
                            break t
                          }
                      }
                      s = n.createElement(l), tt(s, l, a), n.head.appendChild(s);
                      break;
                    case "meta":
                      if (c = vd("meta", "content", n).get(l + (a.content || ""))) {
                        for (r = 0; r < c.length; r++)
                          if (s = c[r], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            c.splice(r, 1);
                            break t
                          }
                      }
                      s = n.createElement(l), tt(s, l, a), n.head.appendChild(s);
                      break;
                    default:
                      throw Error(d(468, l))
                  }
                  s[Fe] = e,
                  Je(s),
                  l = s
                }
                e.stateNode = l
              }
          else jd(n, e.type, e.stateNode);
          else e.stateNode = yd(n, l, e.memoizedProps);
          else s !== l ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, l === null ? jd(n, e.type, e.stateNode) : yd(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && Yc(e, e.memoizedProps, a.memoizedProps)
        }
        break;
      case 27:
        ht(t, e), mt(e), l & 512 && (Xe || a === null || Kt(a, a.return)), a !== null && l & 4 && Yc(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (ht(t, e), mt(e), l & 512 && (Xe || a === null || Kt(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            hl(n, "")
          } catch (G) {
            je(e, e.return, G)
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, Yc(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (Xc = !0);
        break;
      case 6:
        if (ht(t, e), mt(e), l & 4) {
          if (e.stateNode === null) throw Error(d(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l
          } catch (G) {
            je(e, e.return, G)
          }
        }
        break;
      case 3:
        if (Fs = null, n = Xt, Xt = Ws(t.containerInfo), ht(t, e), Xt = n, mt(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Ll(t.containerInfo)
        } catch (G) {
          je(e, e.return, G)
        }
        Xc && (Xc = !1, jf(e));
        break;
      case 4:
        l = Xt, Xt = Ws(e.stateNode.containerInfo), ht(t, e), mt(e), Xt = l;
        break;
      case 12:
        ht(t, e), mt(e);
        break;
      case 31:
        ht(t, e), mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ks(e, l)));
        break;
      case 13:
        ht(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Hs = at()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ks(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var o = a !== null && a.memoizedState !== null,
          p = ia,
          w = Xe;
        if (ia = p || n, Xe = w || o, ht(t, e), Xe = w, ia = p, mt(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || o || ia || Xe || tl(e)), a = null, t = e;;) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              o = a = t;
              try {
                if (s = o.stateNode, n) c = s.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  r = o.stateNode;
                  var M = o.memoizedProps.style,
                    v = M != null && M.hasOwnProperty("display") ? M.display : null;
                  r.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim()
                }
              } catch (G) {
                je(o, o.return, G)
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              o = t;
              try {
                o.stateNode.nodeValue = n ? "" : o.memoizedProps
              } catch (G) {
                je(o, o.return, G)
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              o = t;
              try {
                var j = o.stateNode;
                n ? od(j, !0) : od(o.stateNode, !1)
              } catch (G) {
                je(o, o.return, G)
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === e) break e;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) break e;
            a === t && (a = null), t = t.return
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling
        }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, ks(e, a))));
        break;
      case 19:
        ht(t, e), mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ks(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ht(t, e), mt(e)
    }
  }

  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null;) {
          if (df(l)) {
            a = l;
            break
          }
          l = l.return
        }
        if (a == null) throw Error(d(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode,
              s = Gc(e);
            Ds(e, s, n);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (hl(c, ""), a.flags &= -33);
            var r = Gc(e);
            Ds(e, r, c);
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo,
              p = Gc(e);
            Vc(e, p, o);
            break;
          default:
            throw Error(d(161))
        }
      } catch (w) {
        je(e, e.return, w)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }

  function jf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        jf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
      }
  }

  function ua(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) xf(e, t.alternate, t), t = t.sibling
  }

  function tl(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wa(4, t, t.return), tl(t);
          break;
        case 1:
          Kt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && of(t, t.return, a), tl(t);
          break;
        case 27:
          Dn(t.stateNode);
        case 26:
        case 5:
          Kt(t, t.return), tl(t);
          break;
        case 22:
          t.memoizedState === null && tl(t);
          break;
        case 30:
          tl(t);
          break;
        default:
          tl(t)
      }
      e = e.sibling
    }
  }

  function ra(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var l = t.alternate,
        n = e,
        s = t,
        c = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ra(n, s, a), Tn(4, s);
          break;
        case 1:
          if (ra(n, s, a), l = s, n = l.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount()
          } catch (p) {
            je(l, l.return, p)
          }
          if (l = s, n = l.updateQueue, n !== null) {
            var r = l.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++) $r(o[n], r)
            } catch (p) {
              je(l, l.return, p)
            }
          }
          a && c & 64 && rf(s), wn(s, s.return);
          break;
        case 27:
          hf(s);
        case 26:
        case 5:
          ra(n, s, a), a && l === null && c & 4 && ff(s), wn(s, s.return);
          break;
        case 12:
          ra(n, s, a);
          break;
        case 31:
          ra(n, s, a), a && c & 4 && pf(n, s);
          break;
        case 13:
          ra(n, s, a), a && c & 4 && yf(n, s);
          break;
        case 22:
          s.memoizedState === null && ra(n, s, a), wn(s, s.return);
          break;
        case 30:
          break;
        default:
          ra(n, s, a)
      }
      t = t.sibling
    }
  }

  function Lc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && fn(a))
  }

  function Qc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fn(e))
  }

  function Lt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) Sf(e, t, a, l), t = t.sibling
  }

  function Sf(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Lt(e, t, a, l), n & 2048 && Tn(9, t);
        break;
      case 1:
        Lt(e, t, a, l);
        break;
      case 3:
        Lt(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fn(e)));
        break;
      case 12:
        if (n & 2048) {
          Lt(e, t, a, l), e = t.stateNode;
          try {
            var s = t.memoizedProps,
              c = s.id,
              r = s.onPostCommit;
            typeof r == "function" && r(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
          } catch (o) {
            je(t, t.return, o)
          }
        } else Lt(e, t, a, l);
        break;
      case 31:
        Lt(e, t, a, l);
        break;
      case 13:
        Lt(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, c = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Lt(e, t, a, l) : An(e, t) : s._visibility & 2 ? Lt(e, t, a, l) : (s._visibility |= 2, Rl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Lc(c, t);
        break;
      case 24:
        Lt(e, t, a, l), n & 2048 && Qc(t.alternate, t);
        break;
      default:
        Lt(e, t, a, l)
    }
  }

  function Rl(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
      var s = e,
        c = t,
        r = a,
        o = l,
        p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Rl(s, c, r, o, n), Tn(8, c);
          break;
        case 23:
          break;
        case 22:
          var w = c.stateNode;
          c.memoizedState !== null ? w._visibility & 2 ? Rl(s, c, r, o, n) : An(s, c) : (w._visibility |= 2, Rl(s, c, r, o, n)), n && p & 2048 && Lc(c.alternate, c);
          break;
        case 24:
          Rl(s, c, r, o, n), n && p & 2048 && Qc(c.alternate, c);
          break;
        default:
          Rl(s, c, r, o, n)
      }
      t = t.sibling
    }
  }

  function An(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = e,
          l = t,
          n = l.flags;
        switch (l.tag) {
          case 22:
            An(a, l), n & 2048 && Lc(l.alternate, l);
            break;
          case 24:
            An(a, l), n & 2048 && Qc(l.alternate, l);
            break;
          default:
            An(a, l)
        }
        t = t.sibling
      }
  }
  var Mn = 8192;

  function Dl(e, t, a) {
    if (e.subtreeFlags & Mn)
      for (e = e.child; e !== null;) Nf(e, t, a), e = e.sibling
  }

  function Nf(e, t, a) {
    switch (e.tag) {
      case 26:
        Dl(e, t, a), e.flags & Mn && e.memoizedState !== null && Hm(a, Xt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Dl(e, t, a);
        break;
      case 3:
      case 4:
        var l = Xt;
        Xt = Ws(e.stateNode.containerInfo), Dl(e, t, a), Xt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Mn, Mn = 16777216, Dl(e, t, a), Mn = l) : Dl(e, t, a));
        break;
      default:
        Dl(e, t, a)
    }
  }

  function Tf(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do t = e.sibling, e.sibling = null, e = t; while (e !== null)
    }
  }

  function Cn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          We = l, Af(l, e)
        }
      Tf(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) wf(e), e = e.sibling
  }

  function wf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Cn(e), e.flags & 2048 && wa(9, e, e.return);
        break;
      case 3:
        Cn(e);
        break;
      case 12:
        Cn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Us(e)) : Cn(e);
        break;
      default:
        Cn(e)
    }
  }

  function Us(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          We = l, Af(l, e)
        }
      Tf(e)
    }
    for (e = e.child; e !== null;) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          wa(8, t, t.return), Us(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Us(t));
          break;
        default:
          Us(t)
      }
      e = e.sibling
    }
  }

  function Af(e, t) {
    for (; We !== null;) {
      var a = We;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          wa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++
          }
          break;
        case 24:
          fn(a.memoizedState.cache)
      }
      if (l = a.child, l !== null) l.return = a, We = l;
      else e: for (a = e; We !== null;) {
        l = We;
        var n = l.sibling,
          s = l.return;
        if (bf(l), l === a) {
          We = null;
          break e
        }
        if (n !== null) {
          n.return = s, We = n;
          break e
        }
        We = s
      }
    }
  }
  var Ih = {
      getCacheForType: function(e) {
        var t = Pe(Ye),
          a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a
      },
      cacheSignal: function() {
        return Pe(Ye).controller.signal
      }
    },
    Ph = typeof WeakMap == "function" ? WeakMap : Map,
    ge = 0,
    Me = null,
    ue = null,
    oe = 0,
    ve = 0,
    Tt = null,
    Aa = !1,
    kl = !1,
    Zc = !1,
    oa = 0,
    De = 0,
    Ma = 0,
    al = 0,
    Kc = 0,
    wt = 0,
    Ul = 0,
    zn = null,
    xt = null,
    Jc = !1,
    Hs = 0,
    Mf = 0,
    qs = 1 / 0,
    Bs = null,
    Ca = null,
    Le = 0,
    za = null,
    Hl = null,
    fa = 0,
    Wc = 0,
    $c = null,
    Cf = null,
    En = 0,
    Fc = null;

  function At() {
    return (ge & 2) !== 0 && oe !== 0 ? oe & -oe : N.T !== null ? lu() : Vu()
  }

  function zf() {
    if (wt === 0)
      if ((oe & 536870912) === 0 || he) {
        var e = Kn;
        Kn <<= 1, (Kn & 3932160) === 0 && (Kn = 262144), wt = e
      } else wt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), wt
  }

  function bt(e, t, a) {
    (e === Me && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null) && (ql(e, 0), Ea(e, oe, wt, !1)), $l(e, a), ((ge & 2) === 0 || e !== Me) && (e === Me && ((ge & 2) === 0 && (al |= a), De === 4 && Ea(e, oe, wt, !1)), Jt(e))
  }

  function Ef(e, t, a) {
    if ((ge & 6) !== 0) throw Error(d(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Wl(e, t),
      n = l ? am(e, t) : Pc(e, t, !0),
      s = l;
    do {
      if (n === 0) {
        kl && !l && Ea(e, t, 0, !1);
        break
      } else {
        if (a = e.current.alternate, s && !em(a)) {
          n = Pc(e, t, !1), s = !1;
          continue
        }
        if (n === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s) var c = 0;
          else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var r = e;n = zn;
              var o = r.current.memoizedState.isDehydrated;
              if (o && (ql(r, c).flags |= 256), c = Pc(r, c, !1), c !== 2) {
                if (Zc && !o) {
                  r.errorRecoveryDisabledLanes |= s, al |= s, n = 4;
                  break e
                }
                s = xt, xt = n, s !== null && (xt === null ? xt = s : xt.push.apply(xt, s))
              }
              n = c
            }
            if (s = !1, n !== 2) continue
          }
        }
        if (n === 1) {
          ql(e, 0), Ea(e, t, 0, !0);
          break
        }
        e: {
          switch (l = e, s = n, s) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ea(l, t, wt, !Aa);
              break e;
            case 2:
              xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329))
          }
          if ((t & 62914560) === t && (n = Hs + 300 - at(), 10 < n)) {
            if (Ea(l, t, wt, !Aa), Wn(l, 0, !0) !== 0) break e;
            fa = t, l.timeoutHandle = cd(_f.bind(null, l, a, xt, Bs, Jc, t, wt, al, Ul, Aa, s, "Throttled", -0, 0), n);
            break e
          }
          _f(l, a, xt, Bs, Jc, t, wt, al, Ul, Aa, s, null, -0, 0)
        }
      }
      break
    } while (!0);
    Jt(e)
  }

  function _f(e, t, a, l, n, s, c, r, o, p, w, M, v, j) {
    if (e.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $t
      }, Nf(t, s, M);
      var G = (s & 62914560) === s ? Hs - at() : (s & 4194048) === s ? Mf - at() : 0;
      if (G = qm(M, G), G !== null) {
        fa = s, e.cancelPendingCommit = G(Bf.bind(null, e, t, s, a, l, n, c, r, o, w, M, null, v, j)), Ea(e, s, c, !p);
        return
      }
    }
    Bf(e, t, s, a, l, n, c, r, o)
  }

  function em(e) {
    for (var t = e;;) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l],
            s = n.getSnapshot;
          n = n.value;
          try {
            if (!vt(s(), n)) return !1
          } catch {
            return !1
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return !0
  }

  function Ea(e, t, a, l) {
    t &= ~Kc, t &= ~al, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n;) {
      var s = 31 - yt(n),
        c = 1 << s;
      l[s] = -1, n &= ~c
    }
    a !== 0 && Bu(e, a, t)
  }

  function Ys() {
    return (ge & 6) === 0 ? (_n(0), !1) : !0
  }

  function Ic() {
    if (ue !== null) {
      if (ve === 0) var e = ue.return;
      else e = ue, ea = Ka = null, mc(e), Cl = null, hn = 0, e = ue;
      for (; e !== null;) uf(e.alternate, e), e = e.return;
      ue = null
    }
  }

  function ql(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, vm(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), fa = 0, Ic(), Me = e, ue = a = It(e.current, null), oe = t, ve = 0, Tt = null, Aa = !1, kl = Wl(e, t), Zc = !1, Ul = wt = Kc = al = Ma = De = 0, xt = zn = null, Jc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l;) {
        var n = 31 - yt(l),
          s = 1 << n;
        t |= e[n], l &= ~s
      }
    return oa = t, cs(), a
  }

  function Of(e, t) {
    le = null, N.H = jn, t === Ml || t === xs ? (t = Zr(), ve = 3) : t === ac ? (t = Zr(), ve = 4) : ve = t === Ec ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, ue === null && (De = 1, zs(e, Ot(t, e.current)))
  }

  function Rf() {
    var e = St.current;
    return e === null ? !0 : (oe & 4194048) === oe ? Ut === null : (oe & 62914560) === oe || (oe & 536870912) !== 0 ? e === Ut : !1
  }

  function Df() {
    var e = N.H;
    return N.H = jn, e === null ? jn : e
  }

  function kf() {
    var e = N.A;
    return N.A = Ih, e
  }

  function Gs() {
    De = 4, Aa || (oe & 4194048) !== oe && St.current !== null || (kl = !0), (Ma & 134217727) === 0 && (al & 134217727) === 0 || Me === null || Ea(Me, oe, wt, !1)
  }

  function Pc(e, t, a) {
    var l = ge;
    ge |= 2;
    var n = Df(),
      s = kf();
    (Me !== e || oe !== t) && (Bs = null, ql(e, t)), t = !1;
    var c = De;
    e: do try {
        if (ve !== 0 && ue !== null) {
          var r = ue,
            o = Tt;
          switch (ve) {
            case 8:
              Ic(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var p = ve;
              if (ve = 0, Tt = null, Bl(e, r, o, p), a && kl) {
                c = 0;
                break e
              }
              break;
            default:
              p = ve, ve = 0, Tt = null, Bl(e, r, o, p)
          }
        }
        tm(), c = De;
        break
      } catch (w) {
        Of(e, w)
      }
      while (!0);
      return t && e.shellSuspendCounter++, ea = Ka = null, ge = l, N.H = n, N.A = s, ue === null && (Me = null, oe = 0, cs()), c
  }

  function tm() {
    for (; ue !== null;) Uf(ue)
  }

  function am(e, t) {
    var a = ge;
    ge |= 2;
    var l = Df(),
      n = kf();
    Me !== e || oe !== t ? (Bs = null, qs = at() + 500, ql(e, t)) : kl = Wl(e, t);
    e: do try {
        if (ve !== 0 && ue !== null) {
          t = ue;
          var s = Tt;
          t: switch (ve) {
            case 1:
              ve = 0, Tt = null, Bl(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (Lr(s)) {
                ve = 0, Tt = null, Hf(t);
                break
              }
              t = function() {
                ve !== 2 && ve !== 9 || Me !== e || (ve = 7), Jt(e)
              }, s.then(t, t);
              break e;
            case 3:
              ve = 7;
              break e;
            case 4:
              ve = 5;
              break e;
            case 7:
              Lr(s) ? (ve = 0, Tt = null, Hf(t)) : (ve = 0, Tt = null, Bl(e, t, s, 7));
              break;
            case 5:
              var c = null;
              switch (ue.tag) {
                case 26:
                  c = ue.memoizedState;
                case 5:
                case 27:
                  var r = ue;
                  if (c ? Sd(c) : r.stateNode.complete) {
                    ve = 0, Tt = null;
                    var o = r.sibling;
                    if (o !== null) ue = o;
                    else {
                      var p = r.return;
                      p !== null ? (ue = p, Vs(p)) : ue = null
                    }
                    break t
                  }
              }
              ve = 0, Tt = null, Bl(e, t, s, 5);
              break;
            case 6:
              ve = 0, Tt = null, Bl(e, t, s, 6);
              break;
            case 8:
              Ic(), De = 6;
              break e;
            default:
              throw Error(d(462))
          }
        }
        lm();
        break
      } catch (w) {
        Of(e, w)
      }
      while (!0);
      return ea = Ka = null, N.H = l, N.A = n, ge = a, ue !== null ? 0 : (Me = null, oe = 0, cs(), De)
  }

  function lm() {
    for (; ue !== null && !fi();) Uf(ue)
  }

  function Uf(e) {
    var t = sf(e.alternate, e, oa);
    e.memoizedProps = e.pendingProps, t === null ? Vs(e) : ue = t
  }

  function Hf(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Po(a, t, t.pendingProps, t.type, void 0, oe);
        break;
      case 11:
        t = Po(a, t, t.pendingProps, t.type.render, t.ref, oe);
        break;
      case 5:
        mc(t);
      default:
        uf(a, t), t = ue = Rr(t, oa), t = sf(a, t, oa)
    }
    e.memoizedProps = e.pendingProps, t === null ? Vs(e) : ue = t
  }

  function Bl(e, t, a, l) {
    ea = Ka = null, mc(t), Cl = null, hn = 0;
    var n = t.return;
    try {
      if (Qh(e, n, t, a, oe)) {
        De = 1, zs(e, Ot(a, e.current)), ue = null;
        return
      }
    } catch (s) {
      if (n !== null) throw ue = n, s;
      De = 1, zs(e, Ot(a, e.current)), ue = null;
      return
    }
    t.flags & 32768 ? (he || l === 1 ? e = !0 : kl || (oe & 536870912) !== 0 ? e = !1 : (Aa = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = St.current, l !== null && l.tag === 13 && (l.flags |= 16384))), qf(t, e)) : Vs(t)
  }

  function Vs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        qf(t, Aa);
        return
      }
      e = t.return;
      var a = Jh(t.alternate, t, oa);
      if (a !== null) {
        ue = a;
        return
      }
      if (t = t.sibling, t !== null) {
        ue = t;
        return
      }
      ue = t = e
    } while (t !== null);
    De === 0 && (De = 5)
  }

  function qf(e, t) {
    do {
      var a = Wh(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ue = a;
        return
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        ue = e;
        return
      }
      ue = e = a
    } while (e !== null);
    De = 6, ue = null
  }

  function Bf(e, t, a, l, n, s, c, r, o) {
    e.cancelPendingCommit = null;
    do Xs(); while (Le !== 0);
    if ((ge & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === e.current) throw Error(d(177));
      if (s = t.lanes | t.childLanes, s |= Gi, U0(e, a, s, c, r, o), e === Me && (ue = Me = null, oe = 0), Hl = t, za = e, fa = a, Wc = s, $c = n, Cf = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, cm(il, function() {
          return Lf(), null
        })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = N.T, N.T = null, n = q.p, q.p = 2, c = ge, ge |= 4;
        try {
          $h(e, t, a)
        } finally {
          ge = c, q.p = n, N.T = l
        }
      }
      Le = 1, Yf(), Gf(), Vf()
    }
  }

  function Yf() {
    if (Le === 1) {
      Le = 0;
      var e = za,
        t = Hl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null;
        var l = q.p;
        q.p = 2;
        var n = ge;
        ge |= 4;
        try {
          vf(t, e);
          var s = fu,
            c = Tr(e.containerInfo),
            r = s.focusedElem,
            o = s.selectionRange;
          if (c !== r && r && r.ownerDocument && Nr(r.ownerDocument.documentElement, r)) {
            if (o !== null && Ui(r)) {
              var p = o.start,
                w = o.end;
              if (w === void 0 && (w = p), "selectionStart" in r) r.selectionStart = p, r.selectionEnd = Math.min(w, r.value.length);
              else {
                var M = r.ownerDocument || document,
                  v = M && M.defaultView || window;
                if (v.getSelection) {
                  var j = v.getSelection(),
                    G = r.textContent.length,
                    J = Math.min(o.start, G),
                    Ae = o.end === void 0 ? J : Math.min(o.end, G);
                  !j.extend && J > Ae && (c = Ae, Ae = J, J = c);
                  var x = Sr(r, J),
                    h = Sr(r, Ae);
                  if (x && h && (j.rangeCount !== 1 || j.anchorNode !== x.node || j.anchorOffset !== x.offset || j.focusNode !== h.node || j.focusOffset !== h.offset)) {
                    var g = M.createRange();
                    g.setStart(x.node, x.offset), j.removeAllRanges(), J > Ae ? (j.addRange(g), j.extend(h.node, h.offset)) : (g.setEnd(h.node, h.offset), j.addRange(g))
                  }
                }
              }
            }
            for (M = [], j = r; j = j.parentNode;) j.nodeType === 1 && M.push({
              element: j,
              left: j.scrollLeft,
              top: j.scrollTop
            });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < M.length; r++) {
              var A = M[r];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top
            }
          }
          ti = !!ou, fu = ou = null
        } finally {
          ge = n, q.p = l, N.T = a
        }
      }
      e.current = t, Le = 2
    }
  }

  function Gf() {
    if (Le === 2) {
      Le = 0;
      var e = za,
        t = Hl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = N.T, N.T = null;
        var l = q.p;
        q.p = 2;
        var n = ge;
        ge |= 4;
        try {
          xf(e, t.alternate, t)
        } finally {
          ge = n, q.p = l, N.T = a
        }
      }
      Le = 3
    }
  }

  function Vf() {
    if (Le === 4 || Le === 3) {
      Le = 0, di();
      var e = za,
        t = Hl,
        a = fa,
        l = Cf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Le = 5 : (Le = 0, Hl = za = null, Xf(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ca = null), gi(a), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function") try {
        pt.onCommitFiberRoot(qa, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
      if (l !== null) {
        t = N.T, n = q.p, q.p = 2, N.T = null;
        try {
          for (var s = e.onRecoverableError, c = 0; c < l.length; c++) {
            var r = l[c];
            s(r.value, {
              componentStack: r.stack
            })
          }
        } finally {
          N.T = t, q.p = n
        }
      }(fa & 3) !== 0 && Xs(), Jt(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === Fc ? En++ : (En = 0, Fc = e) : En = 0, _n(0)
    }
  }

  function Xf(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, fn(t)))
  }

  function Xs() {
    return Yf(), Gf(), Vf(), Lf()
  }

  function Lf() {
    if (Le !== 5) return !1;
    var e = za,
      t = Wc;
    Wc = 0;
    var a = gi(fa),
      l = N.T,
      n = q.p;
    try {
      q.p = 32 > a ? 32 : a, N.T = null, a = $c, $c = null;
      var s = za,
        c = fa;
      if (Le = 0, Hl = za = null, fa = 0, (ge & 6) !== 0) throw Error(d(331));
      var r = ge;
      if (ge |= 4, wf(s.current), Sf(s, s.current, c, a), ge = r, _n(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function") try {
        pt.onPostCommitFiberRoot(qa, s)
      } catch {}
      return !0
    } finally {
      q.p = n, N.T = l, Xf(e, t)
    }
  }

  function Qf(e, t, a) {
    t = Ot(a, t), t = zc(e.stateNode, t, 2), e = Sa(e, t, 2), e !== null && ($l(e, 2), Jt(e))
  }

  function je(e, t, a) {
    if (e.tag === 3) Qf(e, e, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Qf(t, e, a);
          break
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ca === null || !Ca.has(l))) {
            e = Ot(a, e), a = Qo(2), l = Sa(t, a, 2), l !== null && (Zo(a, l, t, e), $l(l, 2), Jt(l));
            break
          }
        }
        t = t.return
      }
  }

  function eu(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Ph;
      var n = new Set;
      l.set(t, n)
    } else n = l.get(t), n === void 0 && (n = new Set, l.set(t, n));
    n.has(a) || (Zc = !0, n.add(a), e = nm.bind(null, e, t, a), t.then(e, e))
  }

  function nm(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Me === e && (oe & a) === a && (De === 4 || De === 3 && (oe & 62914560) === oe && 300 > at() - Hs ? (ge & 2) === 0 && ql(e, 0) : Kc |= a, Ul === oe && (Ul = 0)), Jt(e)
  }

  function Zf(e, t) {
    t === 0 && (t = qu()), e = La(e, t), e !== null && ($l(e, t), Jt(e))
  }

  function sm(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), Zf(e, a)
  }

  function im(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(d(314))
    }
    l !== null && l.delete(t), Zf(e, a)
  }

  function cm(e, t) {
    return rt(e, t)
  }
  var Ls = null,
    Yl = null,
    tu = !1,
    Qs = !1,
    au = !1,
    _a = 0;

  function Jt(e) {
    e !== Yl && e.next === null && (Yl === null ? Ls = Yl = e : Yl = Yl.next = e), Qs = !0, tu || (tu = !0, rm())
  }

  function _n(e, t) {
    if (!au && Qs) {
      au = !0;
      do
        for (var a = !1, l = Ls; l !== null;) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var s = 0;
            else {
              var c = l.suspendedLanes,
                r = l.pingedLanes;
              s = (1 << 31 - yt(42 | e) + 1) - 1, s &= n & ~(c & ~r), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
            }
            s !== 0 && (a = !0, $f(l, s))
          } else s = oe, s = Wn(l, l === Me ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (s & 3) === 0 || Wl(l, s) || (a = !0, $f(l, s));
          l = l.next
        }
      while (a);
      au = !1
    }
  }

  function um() {
    Kf()
  }

  function Kf() {
    Qs = tu = !1;
    var e = 0;
    _a !== 0 && ym() && (e = _a);
    for (var t = at(), a = null, l = Ls; l !== null;) {
      var n = l.next,
        s = Jf(l, t);
      s === 0 ? (l.next = null, a === null ? Ls = n : a.next = n, n === null && (Yl = a)) : (a = l, (e !== 0 || (s & 3) !== 0) && (Qs = !0)), l = n
    }
    Le !== 0 && Le !== 5 || _n(e), _a !== 0 && (_a = 0)
  }

  function Jf(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s;) {
      var c = 31 - yt(s),
        r = 1 << c,
        o = n[c];
      o === -1 ? ((r & a) === 0 || (r & l) !== 0) && (n[c] = k0(r, t)) : o <= t && (e.expiredLanes |= r), s &= ~r
    }
    if (t = Me, a = oe, a = Wn(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Ql(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Wl(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ql(l), gi(a)) {
        case 2:
        case 8:
          a = Ln;
          break;
        case 32:
          a = il;
          break;
        case 268435456:
          a = Kl;
          break;
        default:
          a = il
      }
      return l = Wf.bind(null, e), a = rt(a, l), e.callbackPriority = t, e.callbackNode = a, t
    }
    return l !== null && l !== null && Ql(l), e.callbackPriority = 2, e.callbackNode = null, 2
  }

  function Wf(e, t) {
    if (Le !== 0 && Le !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Xs() && e.callbackNode !== a) return null;
    var l = oe;
    return l = Wn(e, e === Me ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (Ef(e, l, t), Jf(e, at()), e.callbackNode != null && e.callbackNode === a ? Wf.bind(null, e) : null)
  }

  function $f(e, t) {
    if (Xs()) return null;
    Ef(e, t, !0)
  }

  function rm() {
    jm(function() {
      (ge & 6) !== 0 ? rt(Zl, um) : Kf()
    })
  }

  function lu() {
    if (_a === 0) {
      var e = wl;
      e === 0 && (e = Zn, Zn <<= 1, (Zn & 261888) === 0 && (Zn = 256)), _a = e
    }
    return _a
  }

  function Ff(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pn("" + e)
  }

  function If(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e
  }

  function om(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var s = Ff((n[ot] || null).action),
        c = l.submitter;
      c && (t = (t = c[ot] || null) ? Ff(t.formAction) : c.getAttribute("formAction"), t !== null && (s = t, c = null));
      var r = new ls("action", "action", null, l, n);
      e.push({
        event: r,
        listeners: [{
          instance: null,
          listener: function() {
            if (l.defaultPrevented) {
              if (_a !== 0) {
                var o = c ? If(n, c) : new FormData(n);
                Nc(a, {
                  pending: !0,
                  data: o,
                  method: n.method,
                  action: s
                }, null, o)
              }
            } else typeof s == "function" && (r.preventDefault(), o = c ? If(n, c) : new FormData(n), Nc(a, {
              pending: !0,
              data: o,
              method: n.method,
              action: s
            }, s, o))
          },
          currentTarget: n
        }]
      })
    }
  }
  for (var nu = 0; nu < Yi.length; nu++) {
    var su = Yi[nu],
      fm = su.toLowerCase(),
      dm = su[0].toUpperCase() + su.slice(1);
    Vt(fm, "on" + dm)
  }
  Vt(Mr, "onAnimationEnd"), Vt(Cr, "onAnimationIteration"), Vt(zr, "onAnimationStart"), Vt("dblclick", "onDoubleClick"), Vt("focusin", "onFocus"), Vt("focusout", "onBlur"), Vt(Ch, "onTransitionRun"), Vt(zh, "onTransitionStart"), Vt(Eh, "onTransitionCancel"), Vt(Er, "onTransitionEnd"), fl("onMouseEnter", ["mouseout", "mouseover"]), fl("onMouseLeave", ["mouseout", "mouseover"]), fl("onPointerEnter", ["pointerout", "pointerover"]), fl("onPointerLeave", ["pointerout", "pointerover"]), Ya("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ya("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ya("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ya("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ya("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ya("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var On = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    hm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));

  function Pf(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        n = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var c = l.length - 1; 0 <= c; c--) {
            var r = l[c],
              o = r.instance,
              p = r.currentTarget;
            if (r = r.listener, o !== s && n.isPropagationStopped()) break e;
            s = r, n.currentTarget = p;
            try {
              s(n)
            } catch (w) {
              is(w)
            }
            n.currentTarget = null, s = o
          } else
            for (c = 0; c < l.length; c++) {
              if (r = l[c], o = r.instance, p = r.currentTarget, r = r.listener, o !== s && n.isPropagationStopped()) break e;
              s = r, n.currentTarget = p;
              try {
                s(n)
              } catch (w) {
                is(w)
              }
              n.currentTarget = null, s = o
            }
      }
    }
  }

  function re(e, t) {
    var a = t[pi];
    a === void 0 && (a = t[pi] = new Set);
    var l = e + "__bubble";
    a.has(l) || (ed(t, e, 2, !1), a.add(l))
  }

  function iu(e, t, a) {
    var l = 0;
    t && (l |= 4), ed(a, e, l, t)
  }
  var Zs = "_reactListening" + Math.random().toString(36).slice(2);

  function cu(e) {
    if (!e[Zs]) {
      e[Zs] = !0, Qu.forEach(function(a) {
        a !== "selectionchange" && (hm.has(a) || iu(a, !1, e), iu(a, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Zs] || (t[Zs] = !0, iu("selectionchange", !1, t))
    }
  }

  function ed(e, t, a, l) {
    switch (zd(t)) {
      case 2:
        var n = Gm;
        break;
      case 8:
        n = Vm;
        break;
      default:
        n = Su
    }
    a = n.bind(null, t, a, e), n = void 0, !Mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1)
  }

  function uu(e, t, a, l, n) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
      if (l === null) return;
      var c = l.tag;
      if (c === 3 || c === 4) {
        var r = l.stateNode.containerInfo;
        if (r === n) break;
        if (c === 4)
          for (c = l.return; c !== null;) {
            var o = c.tag;
            if ((o === 3 || o === 4) && c.stateNode.containerInfo === n) return;
            c = c.return
          }
        for (; r !== null;) {
          if (c = ul(r), c === null) return;
          if (o = c.tag, o === 5 || o === 6 || o === 26 || o === 27) {
            l = s = c;
            continue e
          }
          r = r.parentNode
        }
      }
      l = l.return
    }
    lr(function() {
      var p = s,
        w = wi(a),
        M = [];
      e: {
        var v = _r.get(e);
        if (v !== void 0) {
          var j = ls,
            G = e;
          switch (e) {
            case "keypress":
              if (ts(a) === 0) break e;
            case "keydown":
            case "keyup":
              j = ih;
              break;
            case "focusin":
              G = "focus", j = _i;
              break;
            case "focusout":
              G = "blur", j = _i;
              break;
            case "beforeblur":
            case "afterblur":
              j = _i;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = ir;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = J0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = rh;
              break;
            case Mr:
            case Cr:
            case zr:
              j = F0;
              break;
            case Er:
              j = fh;
              break;
            case "scroll":
            case "scrollend":
              j = Z0;
              break;
            case "wheel":
              j = hh;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = P0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = ur;
              break;
            case "toggle":
            case "beforetoggle":
              j = xh
          }
          var J = (t & 4) !== 0,
            Ae = !J && (e === "scroll" || e === "scrollend"),
            x = J ? v !== null ? v + "Capture" : null : v;
          J = [];
          for (var h = p, g; h !== null;) {
            var A = h;
            if (g = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || g === null || x === null || (A = Pl(h, x), A != null && J.push(Rn(h, A, g))), Ae) break;
            h = h.return
          }
          0 < J.length && (v = new j(v, G, null, a, w), M.push({
            event: v,
            listeners: J
          }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", v && a !== Ti && (G = a.relatedTarget || a.fromElement) && (ul(G) || G[cl])) break e;
          if ((j || v) && (v = w.window === w ? w : (v = w.ownerDocument) ? v.defaultView || v.parentWindow : window, j ? (G = a.relatedTarget || a.toElement, j = p, G = G ? ul(G) : null, G !== null && (Ae = O(G), J = G.tag, G !== Ae || J !== 5 && J !== 27 && J !== 6) && (G = null)) : (j = null, G = p), j !== G)) {
            if (J = ir, A = "onMouseLeave", x = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (J = ur, A = "onPointerLeave", x = "onPointerEnter", h = "pointer"), Ae = j == null ? v : Il(j), g = G == null ? v : Il(G), v = new J(A, h + "leave", j, a, w), v.target = Ae, v.relatedTarget = g, A = null, ul(w) === p && (J = new J(x, h + "enter", G, a, w), J.target = g, J.relatedTarget = Ae, A = J), Ae = A, j && G) t: {
              for (J = mm, x = j, h = G, g = 0, A = x; A; A = J(A)) g++;A = 0;
              for (var Q = h; Q; Q = J(Q)) A++;
              for (; 0 < g - A;) x = J(x),
              g--;
              for (; 0 < A - g;) h = J(h),
              A--;
              for (; g--;) {
                if (x === h || h !== null && x === h.alternate) {
                  J = x;
                  break t
                }
                x = J(x), h = J(h)
              }
              J = null
            }
            else J = null;
            j !== null && td(M, v, j, J, !1), G !== null && Ae !== null && td(M, Ae, G, J, !0)
          }
        }
        e: {
          if (v = p ? Il(p) : window, j = v.nodeName && v.nodeName.toLowerCase(), j === "select" || j === "input" && v.type === "file") var xe = br;
          else if (mr(v))
            if (gr) xe = wh;
            else {
              xe = Nh;
              var V = Sh
            }
          else j = v.nodeName,
          !j || j.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? p && Ni(p.elementType) && (xe = br) : xe = Th;
          if (xe && (xe = xe(e, p))) {
            xr(M, xe, a, w);
            break e
          }
          V && V(e, v, p),
          e === "focusout" && p && v.type === "number" && p.memoizedProps.value != null && Si(v, "number", v.value)
        }
        switch (V = p ? Il(p) : window, e) {
          case "focusin":
            (mr(V) || V.contentEditable === "true") && (gl = V, Hi = p, un = null);
            break;
          case "focusout":
            un = Hi = gl = null;
            break;
          case "mousedown":
            qi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qi = !1, wr(M, a, w);
            break;
          case "selectionchange":
            if (Mh) break;
          case "keydown":
          case "keyup":
            wr(M, a, w)
        }
        var ie;
        if (Ri) e: {
          switch (e) {
            case "compositionstart":
              var fe = "onCompositionStart";
              break e;
            case "compositionend":
              fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              fe = "onCompositionUpdate";
              break e
          }
          fe = void 0
        }
        else bl ? dr(e, a) && (fe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (fe = "onCompositionStart");fe && (rr && a.locale !== "ko" && (bl || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && bl && (ie = nr()) : (xa = w, Ci = "value" in xa ? xa.value : xa.textContent, bl = !0)), V = Ks(p, fe), 0 < V.length && (fe = new cr(fe, e, null, a, w), M.push({
          event: fe,
          listeners: V
        }), ie ? fe.data = ie : (ie = hr(a), ie !== null && (fe.data = ie)))),
        (ie = gh ? ph(e, a) : yh(e, a)) && (fe = Ks(p, "onBeforeInput"), 0 < fe.length && (V = new cr("onBeforeInput", "beforeinput", null, a, w), M.push({
          event: V,
          listeners: fe
        }), V.data = ie)),
        om(M, e, p, a, w)
      }
      Pf(M, t)
    })
  }

  function Rn(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    }
  }

  function Ks(e, t) {
    for (var a = t + "Capture", l = []; e !== null;) {
      var n = e,
        s = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || s === null || (n = Pl(e, a), n != null && l.unshift(Rn(e, n, s)), n = Pl(e, t), n != null && l.push(Rn(e, n, s))), e.tag === 3) return l;
      e = e.return
    }
    return []
  }

  function mm(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
    return e || null
  }

  function td(e, t, a, l, n) {
    for (var s = t._reactName, c = []; a !== null && a !== l;) {
      var r = a,
        o = r.alternate,
        p = r.stateNode;
      if (r = r.tag, o !== null && o === l) break;
      r !== 5 && r !== 26 && r !== 27 || p === null || (o = p, n ? (p = Pl(a, s), p != null && c.unshift(Rn(a, p, o))) : n || (p = Pl(a, s), p != null && c.push(Rn(a, p, o)))), a = a.return
    }
    c.length !== 0 && e.push({
      event: t,
      listeners: c
    })
  }
  var xm = /\r\n?/g,
    bm = /\u0000|\uFFFD/g;

  function ad(e) {
    return (typeof e == "string" ? e : "" + e).replace(xm, `
`).replace(bm, "")
  }

  function ld(e, t) {
    return t = ad(t), ad(e) === t
  }

  function we(e, t, a, l, n, s) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || hl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && hl(e, "" + l);
        break;
      case "className":
        Fn(e, "class", l);
        break;
      case "tabIndex":
        Fn(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fn(e, a, l);
        break;
      case "style":
        tr(e, l, s);
        break;
      case "data":
        if (t !== "object") {
          Fn(e, "data", l);
          break
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break
        }
        l = Pn("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else typeof s == "function" && (a === "formAction" ? (t !== "input" && we(e, t, "name", n.name, n, null), we(e, t, "formEncType", n.formEncType, n, null), we(e, t, "formMethod", n.formMethod, n, null), we(e, t, "formTarget", n.formTarget, n, null)) : (we(e, t, "encType", n.encType, n, null), we(e, t, "method", n.method, n, null), we(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break
        }
        l = Pn("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = $t);
        break;
      case "onScroll":
        l != null && re("scroll", e);
        break;
      case "onScrollEnd":
        l != null && re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(d(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(d(60));
            e.innerHTML = a
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break
        }
        a = Pn("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        re("beforetoggle", e), re("toggle", e), $n(e, "popover", l);
        break;
      case "xlinkActuate":
        Wt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Wt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Wt(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Wt(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Wt(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Wt(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Wt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Wt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Wt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        $n(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = L0.get(a) || a, $n(e, a, l))
    }
  }

  function ru(e, t, a, l, n, s) {
    switch (a) {
      case "style":
        tr(e, l, s);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(d(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(d(60));
            e.innerHTML = a
          }
        }
        break;
      case "children":
        typeof l == "string" ? hl(e, l) : (typeof l == "number" || typeof l == "bigint") && hl(e, "" + l);
        break;
      case "onScroll":
        l != null && re("scroll", e);
        break;
      case "onScrollEnd":
        l != null && re("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = $t);
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
        if (!Zu.hasOwnProperty(a)) e: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), s = e[ot] || null, s = s != null ? s[a] : null, typeof s == "function" && e.removeEventListener(t, s, n), typeof l == "function")) {
            typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
            break e
          }
          a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : $n(e, a, l)
        }
    }
  }

  function tt(e, t, a) {
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
        re("error", e), re("load", e);
        var l = !1,
          n = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var c = a[s];
            if (c != null) switch (s) {
              case "src":
                l = !0;
                break;
              case "srcSet":
                n = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                we(e, t, s, c, a, null)
            }
          } n && we(e, t, "srcSet", a.srcSet, a, null), l && we(e, t, "src", a.src, a, null);
        return;
      case "input":
        re("invalid", e);
        var r = s = c = n = null,
          o = null,
          p = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var w = a[l];
            if (w != null) switch (l) {
              case "name":
                n = w;
                break;
              case "type":
                c = w;
                break;
              case "checked":
                o = w;
                break;
              case "defaultChecked":
                p = w;
                break;
              case "value":
                s = w;
                break;
              case "defaultValue":
                r = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(d(137, t));
                break;
              default:
                we(e, t, l, w, a, null)
            }
          } Fu(e, s, r, o, p, c, n, !1);
        return;
      case "select":
        re("invalid", e), l = c = s = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (r = a[n], r != null)) switch (n) {
            case "value":
              s = r;
              break;
            case "defaultValue":
              c = r;
              break;
            case "multiple":
              l = r;
            default:
              we(e, t, n, r, a, null)
          }
        t = s, a = c, e.multiple = !!l, t != null ? dl(e, !!l, t, !1) : a != null && dl(e, !!l, a, !0);
        return;
      case "textarea":
        re("invalid", e), s = n = l = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (r = a[c], r != null)) switch (c) {
            case "value":
              l = r;
              break;
            case "defaultValue":
              n = r;
              break;
            case "children":
              s = r;
              break;
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(d(91));
              break;
            default:
              we(e, t, c, r, a, null)
          }
        Pu(e, l, n, s);
        return;
      case "option":
        for (o in a) a.hasOwnProperty(o) && (l = a[o], l != null) && (o === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : we(e, t, o, l, a, null));
        return;
      case "dialog":
        re("beforetoggle", e), re("toggle", e), re("cancel", e), re("close", e);
        break;
      case "iframe":
      case "object":
        re("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < On.length; l++) re(On[l], e);
        break;
      case "image":
        re("error", e), re("load", e);
        break;
      case "details":
        re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        re("error", e), re("load", e);
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
        for (p in a)
          if (a.hasOwnProperty(p) && (l = a[p], l != null)) switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(d(137, t));
            default:
              we(e, t, p, l, a, null)
          }
        return;
      default:
        if (Ni(t)) {
          for (w in a) a.hasOwnProperty(w) && (l = a[w], l !== void 0 && ru(e, t, w, l, a, void 0));
          return
        }
    }
    for (r in a) a.hasOwnProperty(r) && (l = a[r], l != null && we(e, t, r, l, a, null))
  }

  function gm(e, t, a, l) {
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
        var n = null,
          s = null,
          c = null,
          r = null,
          o = null,
          p = null,
          w = null;
        for (j in a) {
          var M = a[j];
          if (a.hasOwnProperty(j) && M != null) switch (j) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              o = M;
            default:
              l.hasOwnProperty(j) || we(e, t, j, null, l, M)
          }
        }
        for (var v in l) {
          var j = l[v];
          if (M = a[v], l.hasOwnProperty(v) && (j != null || M != null)) switch (v) {
            case "type":
              s = j;
              break;
            case "name":
              n = j;
              break;
            case "checked":
              p = j;
              break;
            case "defaultChecked":
              w = j;
              break;
            case "value":
              c = j;
              break;
            case "defaultValue":
              r = j;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (j != null) throw Error(d(137, t));
              break;
            default:
              j !== M && we(e, t, v, j, l, M)
          }
        }
        ji(e, c, r, o, p, w, s, n);
        return;
      case "select":
        j = c = r = v = null;
        for (s in a)
          if (o = a[s], a.hasOwnProperty(s) && o != null) switch (s) {
            case "value":
              break;
            case "multiple":
              j = o;
            default:
              l.hasOwnProperty(s) || we(e, t, s, null, l, o)
          }
        for (n in l)
          if (s = l[n], o = a[n], l.hasOwnProperty(n) && (s != null || o != null)) switch (n) {
            case "value":
              v = s;
              break;
            case "defaultValue":
              r = s;
              break;
            case "multiple":
              c = s;
            default:
              s !== o && we(e, t, n, s, l, o)
          }
        t = r, a = c, l = j, v != null ? dl(e, !!a, v, !1) : !!l != !!a && (t != null ? dl(e, !!a, t, !0) : dl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        j = v = null;
        for (r in a)
          if (n = a[r], a.hasOwnProperty(r) && n != null && !l.hasOwnProperty(r)) switch (r) {
            case "value":
              break;
            case "children":
              break;
            default:
              we(e, t, r, null, l, n)
          }
        for (c in l)
          if (n = l[c], s = a[c], l.hasOwnProperty(c) && (n != null || s != null)) switch (c) {
            case "value":
              v = n;
              break;
            case "defaultValue":
              j = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(d(91));
              break;
            default:
              n !== s && we(e, t, c, n, l, s)
          }
        Iu(e, v, j);
        return;
      case "option":
        for (var G in a) v = a[G], a.hasOwnProperty(G) && v != null && !l.hasOwnProperty(G) && (G === "selected" ? e.selected = !1 : we(e, t, G, null, l, v));
        for (o in l) v = l[o], j = a[o], l.hasOwnProperty(o) && v !== j && (v != null || j != null) && (o === "selected" ? e.selected = v && typeof v != "function" && typeof v != "symbol" : we(e, t, o, v, l, j));
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
        for (var J in a) v = a[J], a.hasOwnProperty(J) && v != null && !l.hasOwnProperty(J) && we(e, t, J, null, l, v);
        for (p in l)
          if (v = l[p], j = a[p], l.hasOwnProperty(p) && v !== j && (v != null || j != null)) switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (v != null) throw Error(d(137, t));
              break;
            default:
              we(e, t, p, v, l, j)
          }
        return;
      default:
        if (Ni(t)) {
          for (var Ae in a) v = a[Ae], a.hasOwnProperty(Ae) && v !== void 0 && !l.hasOwnProperty(Ae) && ru(e, t, Ae, void 0, l, v);
          for (w in l) v = l[w], j = a[w], !l.hasOwnProperty(w) || v === j || v === void 0 && j === void 0 || ru(e, t, w, v, l, j);
          return
        }
    }
    for (var x in a) v = a[x], a.hasOwnProperty(x) && v != null && !l.hasOwnProperty(x) && we(e, t, x, null, l, v);
    for (M in l) v = l[M], j = a[M], !l.hasOwnProperty(M) || v === j || v == null && j == null || we(e, t, M, v, l, j)
  }

  function nd(e) {
    switch (e) {
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

  function pm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l],
          s = n.transferSize,
          c = n.initiatorType,
          r = n.duration;
        if (s && r && nd(c)) {
          for (c = 0, r = n.responseEnd, l += 1; l < a.length; l++) {
            var o = a[l],
              p = o.startTime;
            if (p > r) break;
            var w = o.transferSize,
              M = o.initiatorType;
            w && nd(M) && (o = o.responseEnd, c += w * (o < r ? 1 : (r - p) / (o - p)))
          }
          if (--l, t += 8 * (s + c) / (n.duration / 1e3), e++, 10 < e) break
        }
      }
      if (0 < e) return t / e / 1e6
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
  }
  var ou = null,
    fu = null;

  function Js(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }

  function sd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function id(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return e === 1 && t === "foreignObject" ? 0 : e
  }

  function du(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var hu = null;

  function ym() {
    var e = window.event;
    return e && e.type === "popstate" ? e === hu ? !1 : (hu = e, !0) : (hu = null, !1)
  }
  var cd = typeof setTimeout == "function" ? setTimeout : void 0,
    vm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ud = typeof Promise == "function" ? Promise : void 0,
    jm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(e) {
      return ud.resolve(null).then(e).catch(Sm)
    } : cd;

  function Sm(e) {
    setTimeout(function() {
      throw e
    })
  }

  function Oa(e) {
    return e === "head"
  }

  function rd(e, t) {
    var a = t,
      l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(n), Ll(t);
            return
          }
          l--
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
      else if (a === "html") Dn(e.ownerDocument.documentElement);
      else if (a === "head") {
        a = e.ownerDocument.head, Dn(a);
        for (var s = a.firstChild; s;) {
          var c = s.nextSibling,
            r = s.nodeName;
          s[Fl] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && s.rel.toLowerCase() === "stylesheet" || a.removeChild(s), s = c
        }
      } else a === "body" && Dn(e.ownerDocument.body);
      a = n
    } while (a);
    Ll(t)
  }

  function od(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (e === 0) break;
          e--
        } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l
    } while (a)
  }

  function mu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mu(a), yi(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue
      }
      e.removeChild(a)
    }
  }

  function Nm(e, t, a, l) {
    for (; e.nodeType === 1;) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
      } else if (l) {
        if (!e[Fl]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (s !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (s = e.getAttribute("src"), (s !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e
        }
      } else if (t === "input" && e.type === "hidden") {
        var s = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === s) return e
      } else return e;
      if (e = Ht(e.nextSibling), e === null) break
    }
    return null
  }

  function Tm(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ht(e.nextSibling), e === null)) return null;
    return e
  }

  function fd(e, t) {
    for (; e.nodeType !== 8;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ht(e.nextSibling), e === null)) return null;
    return e
  }

  function xu(e) {
    return e.data === "$?" || e.data === "$~"
  }

  function bu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
  }

  function wm(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l)
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l
    }
  }

  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null
      }
    }
    return e
  }
  var gu = null;

  function dd(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Ht(e.nextSibling);
          t--
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
      }
      e = e.nextSibling
    }
    return null
  }

  function hd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--
        } else a !== "/$" && a !== "/&" || t++
      }
      e = e.previousSibling
    }
    return null
  }

  function md(e, t, a) {
    switch (t = Js(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(d(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(d(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(d(454));
        return e;
      default:
        throw Error(d(451))
    }
  }

  function Dn(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    yi(e)
  }
  var qt = new Map,
    xd = new Set;

  function Ws(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
  }
  var da = q.d;
  q.d = {
    f: Am,
    r: Mm,
    D: Cm,
    C: zm,
    L: Em,
    m: _m,
    X: Rm,
    S: Om,
    M: Dm
  };

  function Am() {
    var e = da.f(),
      t = Ys();
    return e || t
  }

  function Mm(e) {
    var t = rl(e);
    t !== null && t.tag === 5 && t.type === "form" ? _o(t) : da.r(e)
  }
  var Gl = typeof document > "u" ? null : document;

  function bd(e, t, a) {
    var l = Gl;
    if (l && typeof t == "string" && t) {
      var n = Et(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), xd.has(n) || (xd.add(n), e = {
        rel: e,
        crossOrigin: a,
        href: t
      }, l.querySelector(n) === null && (t = l.createElement("link"), tt(t, "link", e), Je(t), l.head.appendChild(t)))
    }
  }

  function Cm(e) {
    da.D(e), bd("dns-prefetch", e, null)
  }

  function zm(e, t) {
    da.C(e, t), bd("preconnect", e, t)
  }

  function Em(e, t, a) {
    da.L(e, t, a);
    var l = Gl;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Et(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Et(a.imageSizes) + '"]')) : n += '[href="' + Et(e) + '"]';
      var s = n;
      switch (t) {
        case "style":
          s = Vl(e);
          break;
        case "script":
          s = Xl(e)
      }
      qt.has(s) || (e = _({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : e,
        as: t
      }, a), qt.set(s, e), l.querySelector(n) !== null || t === "style" && l.querySelector(kn(s)) || t === "script" && l.querySelector(Un(s)) || (t = l.createElement("link"), tt(t, "link", e), Je(t), l.head.appendChild(t)))
    }
  }

  function _m(e, t) {
    da.m(e, t);
    var a = Gl;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        n = 'link[rel="modulepreload"][as="' + Et(l) + '"][href="' + Et(e) + '"]',
        s = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Xl(e)
      }
      if (!qt.has(s) && (e = _({
          rel: "modulepreload",
          href: e
        }, t), qt.set(s, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Un(s))) return
        }
        l = a.createElement("link"), tt(l, "link", e), Je(l), a.head.appendChild(l)
      }
    }
  }

  function Om(e, t, a) {
    da.S(e, t, a);
    var l = Gl;
    if (l && e) {
      var n = ol(l).hoistableStyles,
        s = Vl(e);
      t = t || "default";
      var c = n.get(s);
      if (!c) {
        var r = {
          loading: 0,
          preload: null
        };
        if (c = l.querySelector(kn(s))) r.loading = 5;
        else {
          e = _({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, a), (a = qt.get(s)) && pu(e, a);
          var o = c = l.createElement("link");
          Je(o), tt(o, "link", e), o._p = new Promise(function(p, w) {
            o.onload = p, o.onerror = w
          }), o.addEventListener("load", function() {
            r.loading |= 1
          }), o.addEventListener("error", function() {
            r.loading |= 2
          }), r.loading |= 4, $s(c, t, l)
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: r
        }, n.set(s, c)
      }
    }
  }

  function Rm(e, t) {
    da.X(e, t);
    var a = Gl;
    if (a && e) {
      var l = ol(a).hoistableScripts,
        n = Xl(e),
        s = l.get(n);
      s || (s = a.querySelector(Un(n)), s || (e = _({
        src: e,
        async: !0
      }, t), (t = qt.get(n)) && yu(e, t), s = a.createElement("script"), Je(s), tt(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(n, s))
    }
  }

  function Dm(e, t) {
    da.M(e, t);
    var a = Gl;
    if (a && e) {
      var l = ol(a).hoistableScripts,
        n = Xl(e),
        s = l.get(n);
      s || (s = a.querySelector(Un(n)), s || (e = _({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = qt.get(n)) && yu(e, t), s = a.createElement("script"), Je(s), tt(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(n, s))
    }
  }

  function gd(e, t, a, l) {
    var n = (n = H.current) ? Ws(n) : null;
    if (!n) throw Error(d(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Vl(a.href), a = ol(n).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Vl(a.href);
          var s = ol(n).hoistableStyles,
            c = s.get(e);
          if (c || (n = n.ownerDocument || n, c = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, s.set(e, c), (s = n.querySelector(kn(e))) && !s._p && (c.instance = s, c.state.loading = 5), qt.has(e) || (a = {
              rel: "preload",
              as: "style",
              href: a.href,
              crossOrigin: a.crossOrigin,
              integrity: a.integrity,
              media: a.media,
              hrefLang: a.hrefLang,
              referrerPolicy: a.referrerPolicy
            }, qt.set(e, a), s || km(n, e, a, c.state))), t && l === null) throw Error(d(528, ""));
          return c
        }
        if (t && l !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xl(a), a = ol(n).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(d(444, e))
    }
  }

  function Vl(e) {
    return 'href="' + Et(e) + '"'
  }

  function kn(e) {
    return 'link[rel="stylesheet"][' + e + "]"
  }

  function pd(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    })
  }

  function km(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1
    }), t.addEventListener("error", function() {
      return l.loading |= 2
    }), tt(t, "link", a), Je(t), e.head.appendChild(t))
  }

  function Xl(e) {
    return '[src="' + Et(e) + '"]'
  }

  function Un(e) {
    return "script[async]" + e
  }

  function yd(e, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var l = e.querySelector('style[data-href~="' + Et(a.href) + '"]');
        if (l) return t.instance = l, Je(l), l;
        var n = _({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return l = (e.ownerDocument || e).createElement("style"), Je(l), tt(l, "style", n), $s(l, a.precedence, e), t.instance = l;
      case "stylesheet":
        n = Vl(a.href);
        var s = e.querySelector(kn(n));
        if (s) return t.state.loading |= 4, t.instance = s, Je(s), s;
        l = pd(a), (n = qt.get(n)) && pu(l, n), s = (e.ownerDocument || e).createElement("link"), Je(s);
        var c = s;
        return c._p = new Promise(function(r, o) {
          c.onload = r, c.onerror = o
        }), tt(s, "link", l), t.state.loading |= 4, $s(s, a.precedence, e), t.instance = s;
      case "script":
        return s = Xl(a.src), (n = e.querySelector(Un(s))) ? (t.instance = n, Je(n), n) : (l = a, (n = qt.get(s)) && (l = _({}, a), yu(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Je(n), tt(n, "link", l), e.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(d(443, t.type))
    } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, $s(l, a.precedence, e));
    return t.instance
  }

  function $s(e, t, a) {
    for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, s = n, c = 0; c < l.length; c++) {
      var r = l[c];
      if (r.dataset.precedence === t) s = r;
      else if (s !== n) break
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild))
  }

  function pu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
  }

  function yu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
  }
  var Fs = null;

  function vd(e, t, a) {
    if (Fs === null) {
      var l = new Map,
        n = Fs = new Map;
      n.set(a, l)
    } else n = Fs, l = n.get(a), l || (l = new Map, n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var s = a[n];
      if (!(s[Fl] || s[Fe] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = s.getAttribute(t) || "";
        c = e + c;
        var r = l.get(c);
        r ? r.push(s) : l.set(c, [s])
      }
    }
    return l
  }

  function jd(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
  }

  function Um(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
    }
    return !1
  }

  function Sd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
  }

  function Hm(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Vl(l.href),
          s = t.querySelector(kn(n));
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Is.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = s, Je(s);
          return
        }
        s = t.ownerDocument || t, l = pd(l), (n = qt.get(n)) && pu(l, n), s = s.createElement("link"), Je(s);
        var c = s;
        c._p = new Promise(function(r, o) {
          c.onload = r, c.onerror = o
        }), tt(s, "link", l), a.instance = s
      }
      e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Is.bind(e), t.addEventListener("load", a), t.addEventListener("error", a))
    }
  }
  var vu = 0;

  function qm(e, t) {
    return e.stylesheets && e.count === 0 && ei(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && ei(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s()
        }
      }, 6e4 + t);
      0 < e.imgBytes && vu === 0 && (vu = 62500 * pm());
      var n = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ei(e, e.stylesheets), e.unsuspend)) {
          var s = e.unsuspend;
          e.unsuspend = null, s()
        }
      }, (e.imgBytes > vu ? 50 : 800) + t);
      return e.unsuspend = a,
        function() {
          e.unsuspend = null, clearTimeout(l), clearTimeout(n)
        }
    } : null
  }

  function Is() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ei(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e()
      }
    }
  }
  var Ps = null;

  function ei(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ps = new Map, t.forEach(Bm, e), Ps = null, Is.call(e))
  }

  function Bm(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ps.get(e);
      if (a) var l = a.get(null);
      else {
        a = new Map, Ps.set(e, a);
        for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < n.length; s++) {
          var c = n[s];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), l = c)
        }
        l && a.set(null, l)
      }
      n = t.instance, c = n.getAttribute("data-precedence"), s = a.get(c) || l, s === l && a.set(null, n), a.set(c, n), this.count++, l = Is.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), s ? s.parentNode.insertBefore(n, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4
    }
  }
  var Hn = {
    $$typeof: me,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };

  function Ym(e, t, a, l, n, s, c, r, o) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xi(0), this.hiddenUpdates = xi(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = s, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = new Map
  }

  function Nd(e, t, a, l, n, s, c, r, o, p, w, M) {
    return e = new Ym(e, t, a, c, o, p, w, M, r), t = 1, s === !0 && (t |= 24), s = jt(3, null, null, t), e.current = s, s.stateNode = e, t = Pi(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, lc(s), e
  }

  function Td(e) {
    return e ? (e = vl, e) : vl
  }

  function wd(e, t, a, l, n, s) {
    n = Td(n), l.context === null ? l.context = n : l.pendingContext = n, l = ja(t), l.payload = {
      element: a
    }, s = s === void 0 ? null : s, s !== null && (l.callback = s), a = Sa(e, l, t), a !== null && (bt(a, e, t), xn(a, e, t))
  }

  function Ad(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t
    }
  }

  function ju(e, t) {
    Ad(e, t), (e = e.alternate) && Ad(e, t)
  }

  function Md(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = La(e, 67108864);
      t !== null && bt(t, e, 67108864), ju(e, 67108864)
    }
  }

  function Cd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = At();
      t = bi(t);
      var a = La(e, t);
      a !== null && bt(a, e, t), ju(e, t)
    }
  }
  var ti = !0;

  function Gm(e, t, a, l) {
    var n = N.T;
    N.T = null;
    var s = q.p;
    try {
      q.p = 2, Su(e, t, a, l)
    } finally {
      q.p = s, N.T = n
    }
  }

  function Vm(e, t, a, l) {
    var n = N.T;
    N.T = null;
    var s = q.p;
    try {
      q.p = 8, Su(e, t, a, l)
    } finally {
      q.p = s, N.T = n
    }
  }

  function Su(e, t, a, l) {
    if (ti) {
      var n = Nu(l);
      if (n === null) uu(e, t, l, ai, a), Ed(e, l);
      else if (Lm(n, e, t, a, l)) l.stopPropagation();
      else if (Ed(e, l), t & 4 && -1 < Xm.indexOf(e)) {
        for (; n !== null;) {
          var s = rl(n);
          if (s !== null) switch (s.tag) {
            case 3:
              if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                var c = Ba(s.pendingLanes);
                if (c !== 0) {
                  var r = s;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; c;) {
                    var o = 1 << 31 - yt(c);
                    r.entanglements[1] |= o, c &= ~o
                  }
                  Jt(s), (ge & 6) === 0 && (qs = at() + 500, _n(0))
                }
              }
              break;
            case 31:
            case 13:
              r = La(s, 2), r !== null && bt(r, s, 2), Ys(), ju(s, 2)
          }
          if (s = Nu(l), s === null && uu(e, t, l, ai, a), s === n) break;
          n = s
        }
        n !== null && l.stopPropagation()
      } else uu(e, t, l, null, a)
    }
  }

  function Nu(e) {
    return e = wi(e), Tu(e)
  }
  var ai = null;

  function Tu(e) {
    if (ai = null, e = ul(e), e !== null) {
      var t = O(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = Y(t), e !== null) return e;
          e = null
        } else if (a === 31) {
          if (e = P(t), e !== null) return e;
          e = null
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null)
      }
    }
    return ai = e, null
  }

  function zd(e) {
    switch (e) {
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
        switch (hi()) {
          case Zl:
            return 2;
          case Ln:
            return 8;
          case il:
          case Qn:
            return 32;
          case Kl:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var wu = !1,
    Ra = null,
    Da = null,
    ka = null,
    qn = new Map,
    Bn = new Map,
    Ua = [],
    Xm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function Ed(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ra = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        ka = null;
        break;
      case "pointerover":
      case "pointerout":
        qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId)
    }
  }

  function Yn(e, t, a, l, n, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [n]
    }, t !== null && (t = rl(t), t !== null && Md(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e)
  }

  function Lm(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Ra = Yn(Ra, e, t, a, l, n), !0;
      case "dragenter":
        return Da = Yn(Da, e, t, a, l, n), !0;
      case "mouseover":
        return ka = Yn(ka, e, t, a, l, n), !0;
      case "pointerover":
        var s = n.pointerId;
        return qn.set(s, Yn(qn.get(s) || null, e, t, a, l, n)), !0;
      case "gotpointercapture":
        return s = n.pointerId, Bn.set(s, Yn(Bn.get(s) || null, e, t, a, l, n)), !0
    }
    return !1
  }

  function _d(e) {
    var t = ul(e.target);
    if (t !== null) {
      var a = O(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = Y(a), t !== null) {
            e.blockedOn = t, Xu(e.priority, function() {
              Cd(a)
            });
            return
          }
        } else if (t === 31) {
          if (t = P(a), t !== null) {
            e.blockedOn = t, Xu(e.priority, function() {
              Cd(a)
            });
            return
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return
        }
      }
    }
    e.blockedOn = null
  }

  function li(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var a = Nu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        Ti = l, a.target.dispatchEvent(l), Ti = null
      } else return t = rl(a), t !== null && Md(t), e.blockedOn = a, !1;
      t.shift()
    }
    return !0
  }

  function Od(e, t, a) {
    li(e) && a.delete(t)
  }

  function Qm() {
    wu = !1, Ra !== null && li(Ra) && (Ra = null), Da !== null && li(Da) && (Da = null), ka !== null && li(ka) && (ka = null), qn.forEach(Od), Bn.forEach(Od)
  }

  function ni(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wu || (wu = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Qm)))
  }
  var si = null;

  function Rd(e) {
    si !== e && (si = e, y.unstable_scheduleCallback(y.unstable_NormalPriority, function() {
      si === e && (si = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t],
          l = e[t + 1],
          n = e[t + 2];
        if (typeof l != "function") {
          if (Tu(l || a) === null) continue;
          break
        }
        var s = rl(a);
        s !== null && (e.splice(t, 3), t -= 3, Nc(s, {
          pending: !0,
          data: n,
          method: a.method,
          action: l
        }, l, n))
      }
    }))
  }

  function Ll(e) {
    function t(o) {
      return ni(o, e)
    }
    Ra !== null && ni(Ra, e), Da !== null && ni(Da, e), ka !== null && ni(ka, e), qn.forEach(t), Bn.forEach(t);
    for (var a = 0; a < Ua.length; a++) {
      var l = Ua[a];
      l.blockedOn === e && (l.blockedOn = null)
    }
    for (; 0 < Ua.length && (a = Ua[0], a.blockedOn === null);) _d(a), a.blockedOn === null && Ua.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l],
          s = a[l + 1],
          c = n[ot] || null;
        if (typeof s == "function") c || Rd(a);
        else if (c) {
          var r = null;
          if (s && s.hasAttribute("formAction")) {
            if (n = s, c = s[ot] || null) r = c.formAction;
            else if (Tu(n) !== null) continue
          } else r = c.action;
          typeof r == "function" ? a[l + 1] = r : (a.splice(l, 3), l -= 3), Rd(a)
        }
      }
  }

  function Dd() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c
          })
        },
        focusReset: "manual",
        scroll: "manual"
      })
    }

    function t() {
      n !== null && (n(), n = null), l || setTimeout(a, 20)
    }

    function a() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        })
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100),
        function() {
          l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null)
        }
    }
  }

  function Au(e) {
    this._internalRoot = e
  }
  ii.prototype.render = Au.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    var a = t.current,
      l = At();
    wd(a, l, e, t, null, null)
  }, ii.prototype.unmount = Au.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wd(e.current, 2, null, e, null, null), Ys(), t[cl] = null
    }
  };

  function ii(e) {
    this._internalRoot = e
  }
  ii.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vu();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var a = 0; a < Ua.length && t !== 0 && t < Ua[a].priority; a++);
      Ua.splice(a, 0, e), a === 0 && _d(e)
    }
  };
  var kd = b.version;
  if (kd !== "19.2.6") throw Error(d(527, kd, "19.2.6"));
  q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = T(t), e = e !== null ? X(e) : null, e = e === null ? null : e.stateNode, e
  };
  var Zm = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ci.isDisabled && ci.supportsFiber) try {
      qa = ci.inject(Zm), pt = ci
    } catch {}
  }
  return Vn.createRoot = function(e, t) {
    if (!R(e)) throw Error(d(299));
    var a = !1,
      l = "",
      n = Go,
      s = Vo,
      c = Xo;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Nd(e, 1, !1, null, null, a, l, null, n, s, c, Dd), e[cl] = t.current, cu(e), new Au(t)
  }, Vn.hydrateRoot = function(e, t, a) {
    if (!R(e)) throw Error(d(299));
    var l = !1,
      n = "",
      s = Go,
      c = Vo,
      r = Xo,
      o = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (r = a.onRecoverableError), a.formState !== void 0 && (o = a.formState)), t = Nd(e, 1, !0, t, a ?? null, l, n, o, s, c, r, Dd), t.context = Td(null), a = t.current, l = At(), l = bi(l), n = ja(l), n.callback = null, Sa(a, n, l), a = l, t.current.lanes = a, $l(t, a), Jt(t), e[cl] = t.current, cu(e), new ii(t)
  }, Vn.version = "19.2.6", Vn
}
var Qd;

function ax() {
  if (Qd) return zu.exports;
  Qd = 1;

  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)
    } catch (b) {
      console.error(b)
    }
  }
  return y(), zu.exports = tx(), zu.exports
}
var lx = ax();
const nx = y => y?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

function sx(y, b, z = []) {
  if (b == null) throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: nx(y),
    size: 24,
    node: b,
    ...z.length > 0 ? {
      aliases: z
    } : {}
  }
}
const ix = y => {
  let b = "",
    z = !1;
  for (const d of y) {
    if (d === "-" || d === "_" || d <= " ") {
      z = b.length > 0;
      continue
    }
    b.length === 0 ? b += d.toLowerCase() : b += z ? d.toUpperCase() : d, z = !1
  }
  return b
};
const cx = y => {
  const b = ix(y);
  return b.charAt(0).toUpperCase() + b.slice(1)
};
const Du = (...y) => y.filter((b, z, d) => !!b && b.trim() !== "" && d.indexOf(b) === z).join(" ").trim();
const ll = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

function Ru(y) {
  return y != null
}

function ux(y, b = {}) {
  const z = b.attributeNames ?? {},
    d = L => z[L] ?? L,
    R = y.size ?? y.width ?? ll.width,
    O = y.size ?? y.height ?? ll.height,
    Y = y.aliases?.filter(L => typeof L == "string" && L.trim() !== "").map(L => `lucide-${L}`) ?? [],
    P = [...y.name ? [`lucide-${y.name}`] : [], ...Y],
    D = b.className?.split(" ").filter(Boolean) ?? [],
    T = b.includeDefaultClasses === !1 ? Du(...D) : Du("lucide", ...P, ...D),
    X = b.absoluteStrokeWidth ? Number(b.strokeWidth ?? ll["stroke-width"]) * Number(y.size ?? y.width ?? ll.width) / Number(b.size ?? b.width ?? ll.width) : b.strokeWidth ?? ll["stroke-width"];
  return ["svg", {
    ...Object.entries(ll).reduce((L, [ne, ce]) => (L[d(ne)] = ce, L), {}),
    ..."color" in b && b.color && {
      [d("stroke")]: b.color
    },
    ..."size" in b && Ru(b.size) && {
      [d("width")]: b.size,
      [d("height")]: b.size
    },
    ..."width" in b && Ru(b.width) && {
      [d("width")]: b.width
    },
    ..."height" in b && Ru(b.height) && {
      [d("height")]: b.height
    },
    [d("stroke-width")]: X,
    ...T && {
      [d("class")]: T
    },
    [d("viewBox")]: `0 0 ${R} ${O}`,
    ...b.hasA11yProp === !1 ? {
      [d("aria-hidden")]: "true"
    } : {},
    ..."attributes" in b && b.attributes
  }, y.node.map(L => {
    const [ne, ce, $] = L, ae = b.nonScalingStroke ? {
      [d("vector-effect")]: "non-scaling-stroke",
      ...ce
    } : ce;
    return $ ? [ne, ae, $] : [ne, ae]
  })]
}

function rx(y, b = {}) {
  return ux(y, {
    ...b,
    attributeNames: {
      ...b.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  })
}
const ox = y => {
    for (const b in y)
      if (b.startsWith("aria-") || b === "role" || b === "title") return !0;
    return !1
  },
  fx = I.createContext({}),
  dx = () => I.useContext(fx),
  hx = I.forwardRef(({
    color: y,
    size: b,
    width: z,
    height: d,
    strokeWidth: R,
    absoluteStrokeWidth: O,
    nonScalingStroke: Y,
    className: P = "",
    children: D,
    iconNode: T = [],
    icon: X = {
      node: T,
      aliases: [],
      size: 24
    },
    ..._
  }, L) => {
    const {
      size: ne = 24,
      strokeWidth: ce = 2,
      absoluteStrokeWidth: $ = !1,
      nonScalingStroke: ae = !1,
      color: ee = "currentColor",
      className: Se = ""
    } = dx() ?? {}, me = !!D || ox(_), [ze, ke, de = []] = rx(X, {
      color: y ?? ee,
      width: z ?? b ?? ne,
      height: d ?? b ?? ne,
      strokeWidth: R ?? ce,
      absoluteStrokeWidth: O ?? $,
      nonScalingStroke: Y ?? ae,
      className: Du(Se, P),
      hasA11yProp: me,
      attributes: _
    });
    return I.createElement(ze, {
      ref: L,
      ...ke
    }, [...de.map(([W, Ue]) => I.createElement(W, Ue)), ...Array.isArray(D) ? D : [D]])
  });

function pe(y, b = [], z = []) {
  const d = typeof y == "string" ? sx(y, b, z) : y,
    R = I.forwardRef(({
      className: O,
      ...Y
    }, P) => I.createElement(hx, {
      ref: P,
      icon: d,
      className: O,
      ...Y
    }));
  return d.name && (R.displayName = cx(d.name)), R
}
const $d = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", {
      d: "m12 19-7-7 7-7",
      key: "1l729n"
    }],
    ["path", {
      d: "M19 12H5",
      key: "x3x0zl"
    }]
  ]
};
$d.node;
const mx = pe($d);
const Fd = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
    }]
  ]
};
Fd.node;
const nl = pe(Fd);
const Id = {
  name: "award",
  size: 24,
  node: [
    ["path", {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }],
    ["circle", {
      cx: "12",
      cy: "8",
      r: "6",
      key: "1vp47v"
    }]
  ]
};
Id.node;
const Uu = pe(Id);
const Pd = {
  name: "book-bookmark",
  size: 24,
  node: [
    ["path", {
      d: "M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2",
      key: "x9x4jl"
    }],
    ["path", {
      d: "M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20",
      key: "1889un"
    }]
  ],
  aliases: ["book-marked"]
};
Pd.node;
const xx = pe(Pd);
const e0 = {
  name: "book-open",
  size: 24,
  node: [
    ["path", {
      d: "M12 5v16",
      key: "1f6ucr"
    }],
    ["path", {
      d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
      key: "1fyvmf"
    }]
  ]
};
e0.node;
const oi = pe(e0);
const t0 = {
  name: "check",
  size: 24,
  node: [
    ["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]
  ]
};
t0.node;
const a0 = pe(t0);
const l0 = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "m16 9-5.5 5.5L8 12",
      key: "xofnsj"
    }]
  ],
  aliases: ["check-circle-2"]
};
l0.node;
const ri = pe(l0);
const n0 = {
  name: "circle-question-mark",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5",
      key: "1awbb0"
    }],
    ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]
  ],
  aliases: ["help-circle", "circle-help"]
};
n0.node;
const bx = pe(n0);
const s0 = {
  name: "circle-x",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "m15 9-6 6",
      key: "1uzhvr"
    }],
    ["path", {
      d: "m9 9 6 6",
      key: "z0biqf"
    }]
  ],
  aliases: ["x-circle"]
};
s0.node;
const gx = pe(s0);
const i0 = {
  name: "clock",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M12 6v6l4 2",
      key: "mmk7yg"
    }]
  ]
};
i0.node;
const px = pe(i0);
const c0 = {
  name: "copy",
  size: 24,
  node: [
    ["rect", {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }],
    ["path", {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }]
  ]
};
c0.node;
const yx = pe(c0);
const u0 = {
  name: "lightbulb",
  size: 24,
  node: [
    ["path", {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }],
    ["path", {
      d: "M9 18h6",
      key: "x1upvd"
    }],
    ["path", {
      d: "M10 22h4",
      key: "ceow96"
    }]
  ]
};
u0.node;
const r0 = pe(u0);
const o0 = {
  name: "lock-open",
  size: 24,
  node: [
    ["rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1"
    }],
    ["path", {
      d: "M7 11V7a5 5 0 0 1 9.9-1",
      key: "1mm8w8"
    }]
  ],
  aliases: ["unlock"]
};
o0.node;
const vx = pe(o0);
const f0 = {
  name: "lock",
  size: 24,
  node: [
    ["rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1"
    }],
    ["path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4",
      key: "fwvmzm"
    }]
  ]
};
f0.node;
const jx = pe(f0);
const d0 = {
  name: "message-square",
  size: 24,
  node: [
    ["path", {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }]
  ]
};
d0.node;
const Sx = pe(d0);
const h0 = {
  name: "mic",
  size: 24,
  node: [
    ["path", {
      d: "M12 19v3",
      key: "npa21l"
    }],
    ["path", {
      d: "M19 10v2a7 7 0 0 1-14 0v-2",
      key: "1vc78b"
    }],
    ["rect", {
      x: "9",
      y: "2",
      width: "6",
      height: "13",
      rx: "3",
      key: "s6n7sd"
    }]
  ]
};
h0.node;
const Nx = pe(h0);
const m0 = {
  name: "pause",
  size: 24,
  node: [
    ["rect", {
      x: "14",
      y: "3",
      width: "5",
      height: "18",
      rx: "1",
      key: "kaeet6"
    }],
    ["rect", {
      x: "5",
      y: "3",
      width: "5",
      height: "18",
      rx: "1",
      key: "1wsw3u"
    }]
  ]
};
m0.node;
const x0 = pe(m0);
const b0 = {
  name: "play",
  size: 24,
  node: [
    ["path", {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }]
  ]
};
b0.node;
const g0 = pe(b0);
const p0 = {
  name: "printer",
  size: 24,
  node: [
    ["path", {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }],
    ["path", {
      d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
      key: "1itne7"
    }],
    ["rect", {
      x: "6",
      y: "14",
      width: "12",
      height: "8",
      rx: "1",
      key: "1ue0tg"
    }]
  ]
};
p0.node;
const y0 = pe(p0);
const v0 = {
  name: "rabbit",
  size: 24,
  node: [
    ["path", {
      d: "M13 16a3 3 0 0 1 2.24 5",
      key: "1epib5"
    }],
    ["path", {
      d: "M18 12h.01",
      key: "yjnet6"
    }],
    ["path", {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
      key: "ue9ozu"
    }],
    ["path", {
      d: "M20 8.54V4a2 2 0 1 0-4 0v3",
      key: "49iql8"
    }],
    ["path", {
      d: "M7.612 12.524a3 3 0 1 0-1.6 4.3",
      key: "1e33i0"
    }]
  ]
};
v0.node;
const Tx = pe(v0);
const j0 = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3"
    }],
    ["path", {
      d: "M3 3v5h5",
      key: "1xhq8a"
    }]
  ]
};
j0.node;
const Xn = pe(j0);
const S0 = {
  name: "shield-check",
  size: 24,
  node: [
    ["path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }],
    ["path", {
      d: "m9 12 2 2 4-4",
      key: "dzmm74"
    }]
  ]
};
S0.node;
const wx = pe(S0);
const N0 = {
  name: "sparkles",
  size: 24,
  node: [
    ["path", {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }],
    ["path", {
      d: "M20 2v4",
      key: "1rf3ol"
    }],
    ["path", {
      d: "M22 4h-4",
      key: "gwowj6"
    }],
    ["circle", {
      cx: "4",
      cy: "20",
      r: "2",
      key: "6kqj1y"
    }]
  ],
  aliases: ["stars"]
};
N0.node;
const Bt = pe(N0);
const T0 = {
  name: "stamp",
  size: 24,
  node: [
    ["path", {
      d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13",
      key: "i9gjdv"
    }],
    ["path", {
      d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
      key: "1vzg3v"
    }],
    ["path", {
      d: "M5 22h14",
      key: "ehvnwv"
    }]
  ]
};
T0.node;
const Ax = pe(T0);
const w0 = {
  name: "star",
  size: 24,
  node: [
    ["path", {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }]
  ]
};
w0.node;
const ui = pe(w0);
const A0 = {
  name: "thumbs-up",
  size: 24,
  node: [
    ["path", {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }],
    ["path", {
      d: "M7 10v12",
      key: "1qc93n"
    }]
  ]
};
A0.node;
const Mx = pe(A0);
const M0 = {
  name: "volume-2",
  size: 24,
  node: [
    ["path", {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }],
    ["path", {
      d: "M16 9a5 5 0 0 1 0 6",
      key: "1q6k2b"
    }],
    ["path", {
      d: "M19.364 18.364a9 9 0 0 0 0-12.728",
      key: "ijwkga"
    }]
  ]
};
M0.node;
const sl = pe(M0);
const C0 = {
  name: "volume-x",
  size: 24,
  node: [
    ["path", {
      d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",
      key: "1p7khw"
    }],
    ["path", {
      d: "m16.5 14.5 5-5",
      key: "cul3yw"
    }],
    ["path", {
      d: "m16.5 9.5 5 5",
      key: "1akey5"
    }]
  ]
};
C0.node;
const Cx = pe(C0);
const z0 = {
  name: "wind",
  size: 24,
  node: [
    ["path", {
      d: "M12.8 19.6A2 2 0 1 0 14 16H2",
      key: "148xed"
    }],
    ["path", {
      d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
      key: "1u4tom"
    }],
    ["path", {
      d: "M9.8 4.4A2 2 0 1 1 11 8H2",
      key: "75valh"
    }]
  ]
};
z0.node;
const zx = pe(z0);
const E0 = {
  name: "x",
  size: 24,
  node: [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ]
};
E0.node;
const Ex = pe(E0);
const _0 = {
  name: "zap",
  size: 24,
  node: [
    ["path", {
      d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
      key: "1v7up4"
    }]
  ]
};
_0.node;
const _x = pe(_0);

const Yo = "tutorcall-missing-morals-v1";

function defaultState() {
  return {
    stage: 0,
    detectiveName: "",
    soundEnabled: true,
    timerSeconds: 0,
    timerOn: true,
    m1frags: [],
    m2frags: [],
    caseStamped: false,
    tab_mission_1: 1,
    tf_mission_1: {},
    tfDone_mission_1: false,
    comp_mission_1: {},
    compDone_mission_1: false,
    seq_mission_1: null,
    seqDone_mission_1: false,
    match_mission_1: {},
    matchDone_mission_1: false,
    tab_mission_2: 1,
    tf_mission_2: {},
    tfDone_mission_2: false,
    comp_mission_2: {},
    compDone_mission_2: false,
    seq_mission_2: null,
    seqDone_mission_2: false,
    match_mission_2: {},
    matchDone_mission_2: false,
    refFluency: 0,
    refGrammar: 0,
    refMoral: 0,
    refHero: "",
    refNote: "",
    refSaved: false,
    hwMorals: {},
    hwMoralsChecked: false,
    hwSentences: {
      faster: "",
      slower: "",
      stronger: "",
      cleverer: ""
    }
  };
}

function loadState() {
  try {
    const n = localStorage.getItem(Yo);
    if (!n) return defaultState();
    const r = JSON.parse(n);
    return { ...defaultState(), ...r };
  } catch {
    return defaultState();
  }
}

function saveState(st) {
  try {
    localStorage.setItem(Yo, JSON.stringify(st));
  } catch {}
}

function shuffleCopy(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

function persistKey(missionId, prefix) {
  return prefix + "_" + String(missionId).replace("-", "_");
}

function usePersisted(key, fallback) {
  const [v, setV] = I.useState(() => {
    const s = loadState();
    if (s[key] !== undefined && s[key] !== null) return s[key];
    const init = typeof fallback === "function" ? fallback() : fallback;
    s[key] = init;
    saveState(s);
    return init;
  });
  const set = n => {
    setV(prev => {
      const next = typeof n === "function" ? n(prev) : n;
      const s = loadState();
      s[key] = next;
      saveState(s);
      return next;
    });
  };
  return [v, set];
}

function hardReset() {
  if (!confirm("Начать заново? Весь прогресс урока будет сброшен.")) return;
  try {
    B.stopSpeaking();
  } catch {}
  try {
    localStorage.removeItem(Yo);
  } catch {}
  if (window.__tcReset) window.__tcReset();
}


class Ox {
  ctx = null;
  soundEnabled = !0;
  getContext() {
    if (typeof window > "u") return null;
    if (!this.ctx) {
      const b = window.AudioContext || window.webkitAudioContext;
      b && (this.ctx = new b)
    }
    return this.ctx && this.ctx.state === "suspended" && this.ctx.resume(), this.ctx
  }
  toggleSound(b) {
    return b !== void 0 ? this.soundEnabled = b : this.soundEnabled = !this.soundEnabled, this.soundEnabled
  }
  isEnabled() {
    return this.soundEnabled
  }
  playClick() {
    if (this.soundEnabled) try {
      const b = this.getContext();
      if (!b) return;
      const z = b.createOscillator(),
        d = b.createGain();
      z.type = "triangle", z.frequency.setValueAtTime(480, b.currentTime), z.frequency.exponentialRampToValueAtTime(180, b.currentTime + .08), d.gain.setValueAtTime(.12, b.currentTime), d.gain.exponentialRampToValueAtTime(.01, b.currentTime + .08), z.connect(d), d.connect(b.destination), z.start(), z.stop(b.currentTime + .08)
    } catch {}
  }
  playSuccess() {
    if (this.soundEnabled) try {
      const b = this.getContext();
      if (!b) return;
      [523.25, 659.25, 783.99, 1046.5].forEach((d, R) => {
        const O = b.createOscillator(),
          Y = b.createGain();
        O.type = "sine", O.frequency.setValueAtTime(d, b.currentTime + R * .08), Y.gain.setValueAtTime(.15, b.currentTime + R * .08), Y.gain.exponentialRampToValueAtTime(.001, b.currentTime + R * .08 + .3), O.connect(Y), Y.connect(b.destination), O.start(b.currentTime + R * .08), O.stop(b.currentTime + R * .08 + .3)
      })
    } catch {}
  }
  playFragmentUnlock() {
    if (this.soundEnabled) try {
      const b = this.getContext();
      if (!b) return;
      [440, 554.37, 659.25, 880, 1108.73].forEach((d, R) => {
        const O = b.createOscillator(),
          Y = b.createGain();
        O.type = "triangle", O.frequency.setValueAtTime(d, b.currentTime + R * .09), Y.gain.setValueAtTime(.2, b.currentTime + R * .09), Y.gain.exponentialRampToValueAtTime(.001, b.currentTime + R * .09 + .45), O.connect(Y), Y.connect(b.destination), O.start(b.currentTime + R * .09), O.stop(b.currentTime + R * .09 + .45)
      })
    } catch {}
  }
  playError() {
    if (this.soundEnabled) try {
      const b = this.getContext();
      if (!b) return;
      const z = b.createOscillator(),
        d = b.createGain();
      z.type = "sawtooth", z.frequency.setValueAtTime(220, b.currentTime), z.frequency.exponentialRampToValueAtTime(140, b.currentTime + .25), d.gain.setValueAtTime(.15, b.currentTime), d.gain.exponentialRampToValueAtTime(.01, b.currentTime + .25), z.connect(d), d.connect(b.destination), z.start(), z.stop(b.currentTime + .25)
    } catch {}
  }
  playFanfare() {
    if (this.soundEnabled) try {
      const b = this.getContext();
      if (!b) return;
      [
        [523.25, 659.25, 783.99],
        [587.33, 739.99, 880],
        [659.25, 830.61, 987.77],
        [783.99, 987.77, 1318.51]
      ].forEach((d, R) => {
        d.forEach(O => {
          const Y = b.createOscillator(),
            P = b.createGain();
          Y.type = "sine", Y.frequency.setValueAtTime(O, b.currentTime + R * .18), P.gain.setValueAtTime(.12, b.currentTime + R * .18), P.gain.exponentialRampToValueAtTime(.001, b.currentTime + R * .18 + .5), Y.connect(P), P.connect(b.destination), Y.start(b.currentTime + R * .18), Y.stop(b.currentTime + R * .18 + .5)
        })
      })
    } catch {}
  }
  speak(b, z) {
    if (typeof window > "u" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const d = new SpeechSynthesisUtterance(b);
    d.lang = "en-US", d.rate = .9, d.pitch = 1.05, z && (d.onend = z, d.onerror = z), window.speechSynthesis.speak(d)
  }
  stopSpeaking() {
    typeof window < "u" && window.speechSynthesis && window.speechSynthesis.cancel()
  }
}
const B = new Ox,
  Rx = ({
    currentStage: y,
    onSelectStage: b,
    onOpenRules: z,
    timerSeconds: d,
    isTimerRunning: R,
    onToggleTimer: O,
    onResetTimer: Y,
    soundEnabled: P,
    onToggleSound: D,
    detectiveName: T,
    totalFragmentsUnlocked: X,
    canVisitStage: vt,
    onHardReset: hr
  }) => {
    const _ = ne => {
        const ce = Math.floor(ne / 60),
          $ = ne % 60;
        return `${ce.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}`
      },
      L = [{
        stage: 0,
        label: "Briefing",
        ru: "Входная сцена",
        icon: "🔍"
      }, {
        stage: 1,
        label: "Mission 1: The Race",
        ru: "Миссия 1 (стр. 92)",
        icon: "🐇🐢"
      }, {
        stage: 2,
        label: "Mission 2: Wind & Sun",
        ru: "Миссия 2 (стр. 93)",
        icon: "💨☀️"
      }, {
        stage: 3,
        label: "Case Closed",
        ru: "Финал моралей",
        icon: "🏆"
      }, {
        stage: 4,
        label: "Reflection",
        ru: "Рефлексия",
        icon: "⭐"
      }, {
        stage: 5,
        label: "Homework",
        ru: "Домашка",
        icon: "📝"
      }];
    return i.jsxs("header", {
      className: "sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 text-slate-100 shadow-xl",
      children: [i.jsxs("div", {
        className: "max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3",
        children: [i.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [i.jsx("div", {
            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 shadow-md font-bold text-lg",
            children: "🕵️"
          }), i.jsxs("div", {
            children: [i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [i.jsx("h1", {
                className: "text-base sm:text-lg font-bold font-detective tracking-wide text-amber-300",
                children: "The Case of the Missing Morals"
              }), i.jsx("span", {
                className: "hidden md:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30",
                children: "Academy Stars 3"
              })]
            }), i.jsxs("p", {
              className: "text-xs text-slate-400 flex items-center gap-1.5",
              children: [i.jsx("span", {
                children: "Unit 7 Reading Time 3 • Developing Reading Fluency"
              }), i.jsx("span", {
                className: "text-amber-500",
                children: "•"
              }), i.jsxs("span", {
                className: "text-amber-200/90 font-medium",
                children: ["Detective: ", T || "Junior Inspector"]
              })]
            })]
          })]
        }), i.jsxs("div", {
          className: "flex items-center flex-wrap gap-2 sm:gap-3",
          children: [i.jsxs("div", {
            className: "px-3 py-1.5 rounded-xl bg-slate-800/90 border border-amber-500/30 flex items-center gap-2 text-xs shadow-inner",
            children: [i.jsx("span", {
              className: "text-amber-400",
              children: "🧩 Clues:"
            }), i.jsxs("span", {
              className: "font-bold text-amber-300 font-mono text-sm",
              children: [X, " / 8"]
            }), i.jsx("div", {
              className: "w-16 h-2 bg-slate-700 rounded-full overflow-hidden",
              children: i.jsx("div", {
                className: "h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500",
                style: {
                  width: `${X/8*100}%`
                }
              })
            })]
          }), i.jsxs("div", {
            className: "flex items-center bg-slate-950/80 px-2.5 py-1 rounded-xl border border-slate-700 text-xs",
            children: [i.jsx(px, {
              className: "w-3.5 h-3.5 text-amber-400 mr-1.5"
            }), i.jsx("span", {
              className: `font-mono font-bold mr-2 text-sm ${d>2400?"text-red-400":"text-slate-200"}`,
              children: _(d)
            }), i.jsx("button", {
              onClick: O,
              className: "p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors",
              title: R ? "Pause Lesson Timer" : "Start Lesson Timer",
              children: R ? i.jsx(x0, {
                className: "w-3.5 h-3.5 text-amber-400"
              }) : i.jsx(g0, {
                className: "w-3.5 h-3.5 text-emerald-400"
              })
            }), i.jsx("button", {
              onClick: Y,
              className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors",
              title: "Reset Timer to 00:00",
              children: i.jsx(Xn, {
                className: "w-3 h-3"
              })
            })]
          }), i.jsxs("button", {
            onClick: () => {
              B.playClick(), z()
            },
            className: "px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer animate-pulse-glow",
            children: [i.jsx(oi, {
              className: "w-3.5 h-3.5"
            }), i.jsx("span", {
              className: "hidden sm:inline",
              children: "Rules & Clues"
            }), i.jsx("span", {
              className: "sm:hidden",
              children: "Rules"
            }), i.jsx(Bt, {
              className: "w-3 h-3 text-amber-900"
            })]
          }), i.jsx("button", {
            onClick: () => {
              D(), B.playClick()
            },
            className: `p-2 rounded-xl border transition-colors ${P?"bg-slate-800 border-amber-500/40 text-amber-300":"bg-slate-800/40 border-slate-700 text-slate-500"}`,
            title: P ? "Mute Sound Effects" : "Enable Sound Effects",
            children: P ? i.jsx(sl, {
              className: "w-4 h-4"
            }) : i.jsx(Cx, {
              className: "w-4 h-4"
            })
          }), i.jsx("button", {
            type: "button",
            onClick: () => {
              B.playClick(), hr && hr()
            },
            className: "ttc-reset px-3 py-1.5 rounded-xl text-xs font-bold",
            children: "↺ Начать заново"
          })]
        })]
      }), i.jsx("nav", {
        className: "bg-slate-950/60 border-t border-slate-800/80 px-2 sm:px-6 overflow-x-auto scrollbar-none",
        children: i.jsx("div", {
          className: "max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-2 py-1.5 min-w-max",
          children: L.map(ne => {
            const ce = y === ne.stage;
            const locked = vt && !vt(ne.stage);
            return i.jsxs("button", {
              type: "button",
              disabled: locked,
              title: locked ? "Сначала закончите предыдущую миссию" : ne.label,
              onClick: () => {
                if (locked) return;
                B.playClick(), b(ne.stage)
              },
              className: `px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${ce?"bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold shadow-sm":locked?"text-slate-600 cursor-not-allowed":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,
              children: [i.jsx("span", {
                children: ne.icon
              }), i.jsx("span", {
                children: ne.label
              })]
            }, ne.stage)
          })
        })
      })]
    })
  },
  Dx = ({
    detectiveName: y,
    onUpdateDetectiveName: b,
    onStartLesson: z,
    onOpenRules: d
  }) => {
    const [R, O] = I.useState(null), [Y, P] = I.useState(!1), D = [{
      id: "faster",
      word: "faster",
      icon: "🐇",
      color: "from-purple-600/90 to-indigo-900/90",
      border: "border-purple-400",
      glow: "glow-purple",
      badgeText: "Story 1 Clue",
      description: "Rabbit hopped quickly! fast → faster → fastest. But is speed enough to win?",
      audioNote: "Faster! Comparative of fast. The rabbit thought he was faster than the tortoise."
    }, {
      id: "slower",
      word: "slower",
      icon: "🐢",
      color: "from-emerald-700/90 to-teal-950/90",
      border: "border-emerald-400",
      glow: "glow-green",
      badgeText: "Story 1 Clue",
      description: "Tortoise walked slowly! slow → slower → slowest. Never stopping wins the prize!",
      audioNote: "Slower! Comparative of slow. The tortoise walked slowly past the sleeping rabbit."
    }, {
      id: "stronger",
      word: "stronger",
      icon: "💨",
      color: "from-sky-700/90 to-blue-950/90",
      border: "border-sky-400",
      glow: "glow-blue",
      badgeText: "Story 2 Clue",
      description: "Wind roared with cold fury! strong → stronger → strongest. But did his force work?",
      audioNote: "Stronger! Comparative of strong. The wind said: I am stronger than you!"
    }, {
      id: "cleverer",
      word: "cleverer",
      icon: "💡",
      color: "from-amber-600/90 to-yellow-950/90",
      border: "border-amber-400",
      glow: "glow-amber",
      badgeText: "Story 2 Clue",
      description: "Sun beamed warm sunshine! clever → cleverer → cleverest. Warmth won the contest!",
      audioNote: "Cleverer! Comparative of clever. The gentle sun was cleverer than the blustering wind."
    }], T = () => {
      if (Y) {
        B.stopSpeaking(), P(!1);
        return
      }
      P(!0), B.playClick(), B.speak("Attention, Junior Detective! We have an emergency at the Academy Stars Library. Two ancient fables on pages 92 and 93 have lost their morals! Someone tore the moral truths into eight secret fragments. Your mission: investigate The Race and The Wind and the Sun, test the clues using comparative adjectives, and restore the missing morals before your 45-minute lesson expires. Good luck, Detective!", () => P(!1))
    }, X = _ => {
      B.playClick(), O(R === _.id ? null : _.id), B.speak(_.audioNote)
    };
    return i.jsxs("div", {
      className: "min-h-[calc(100vh-100px)] py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center",
      children: [i.jsxs("div", {
        className: "text-center mb-6",
        children: [i.jsxs("div", {
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-3",
          children: [i.jsx(Bt, {
            className: "w-4 h-4 text-amber-400"
          }), i.jsx("span", {
            children: "Case File #AS3-U7 • Academy Stars 3 Unit 7 Reading Time 3"
          })]
        }), i.jsx("h1", {
          id: "screen-title",
          tabIndex: -1,
          className: "text-3xl sm:text-5xl font-black font-detective text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-sm tracking-tight",
          children: "The Case of the Missing Morals"
        }), i.jsx("p", {
          className: "mt-2 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto",
          children: "An interactive 45-minute detective reading mystery. Read two fables, uncover key details, compare adjectives, and restore the lost moral truths!"
        })]
      }), i.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-amber-500/30 rounded-3xl p-4 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden",
        children: [i.jsx("div", {
          className: "absolute -top-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        }), i.jsx("div", {
          className: "absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        }), i.jsxs("div", {
          className: "lg:col-span-7 flex flex-col items-center",
          children: [i.jsxs("div", {
            className: "relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl group w-full max-w-xl",
            children: [i.jsx("img", {
              src: "images/detective_cover.jpg",
              alt: "Student Detective in Victorian Library holding The Case of the Missing Morals book",
              className: "w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            }), i.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"
            }), i.jsxs("div", {
              className: "absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/30 text-xs",
              children: [i.jsxs("span", {
                className: "text-amber-300 font-semibold flex items-center gap-1.5",
                children: [i.jsx("span", {
                  children: "🔍"
                }), " Tap any clue card below to hear audio evidence!"]
              }), i.jsx("span", {
                className: "text-[11px] text-slate-400",
                children: "Pages 92 & 93"
              })]
            })]
          }), i.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mt-4",
            children: D.map(_ => {
              const L = R === _.id;
              return i.jsxs("button", {
                onClick: () => X(_),
                className: `p-3 rounded-2xl border-2 transition-all transform hover:-translate-y-1 text-left flex flex-col justify-between ${_.border} bg-gradient-to-b ${_.color} ${L?`${_.glow} ring-2 ring-white`:"shadow-lg"}`,
                children: [i.jsxs("div", {
                  className: "flex items-center justify-between w-full mb-1",
                  children: [i.jsx("span", {
                    className: "text-xl",
                    children: _.icon
                  }), i.jsx("span", {
                    className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-white/90",
                    children: _.badgeText
                  })]
                }), i.jsx("span", {
                  className: "font-mono font-bold text-sm tracking-wide text-white capitalize",
                  children: _.word
                }), i.jsx("p", {
                  className: "text-[11px] text-slate-200/90 leading-tight mt-1 line-clamp-2",
                  children: _.description
                })]
              }, _.id)
            })
          }), R && i.jsxs("div", {
            className: "mt-3 w-full max-w-xl p-3.5 bg-amber-950/40 border border-amber-400/50 rounded-xl text-xs text-amber-200 flex items-start gap-2.5 animate-fadeIn",
            children: [i.jsx("span", {
              className: "text-lg",
              children: "💡"
            }), i.jsxs("div", {
              className: "flex-1",
              children: [i.jsxs("span", {
                className: "font-bold uppercase tracking-wider text-amber-300",
                children: ["Evidence Inspector: ", R]
              }), i.jsx("p", {
                className: "mt-0.5 text-slate-200",
                children: D.find(_ => _.id === R)?.audioNote
              })]
            }), i.jsx("button", {
              onClick: () => {
                const _ = D.find(L => L.id === R);
                _ && B.speak(_.audioNote)
              },
              className: "p-1 rounded bg-amber-500/20 hover:bg-amber-500/40 text-amber-300",
              title: "Replay Audio",
              children: i.jsx(sl, {
                className: "w-4 h-4"
              })
            })]
          })]
        }), i.jsxs("div", {
          className: "lg:col-span-5 flex flex-col justify-between space-y-6",
          children: [i.jsxs("div", {
            className: "bg-slate-950/70 border border-amber-500/30 rounded-2xl p-5 relative shadow-inner",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between mb-3",
              children: [i.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [i.jsx(wx, {
                  className: "w-5 h-5 text-amber-400"
                }), i.jsx("h3", {
                  className: "font-detective font-bold text-amber-300 text-sm",
                  children: "Inspector Chief's Briefing"
                })]
              }), i.jsxs("button", {
                onClick: T,
                className: "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors",
                children: [i.jsx(sl, {
                  className: "w-3.5 h-3.5"
                }), Y ? "Stop Audio" : "Play Voice Briefing"]
              })]
            }), i.jsx("p", {
              className: "text-xs sm:text-sm text-slate-300 leading-relaxed italic",
              children: '"Two ancient moral truths from Academy Stars Unit 7 have vanished! In this 45-minute investigation, you must read the textbook fables, crack 8 reading challenges, and recover all 8 moral fragments. Are you ready?"'
            })]
          }), i.jsxs("div", {
            className: "bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-3",
            children: [i.jsx("label", {
              className: "block text-xs font-bold uppercase tracking-wider text-amber-300",
              children: "Detective Codename (Имя детектива):"
            }), i.jsx("div", {
              className: "flex gap-2",
              children: i.jsx("input", {
                type: "text",
                value: y,
                onChange: _ => b(_.target.value),
                placeholder: "e.g. Detective Alex or Inspector Jane",
                className: "flex-1 bg-slate-900 border border-amber-500/40 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              })
            }), i.jsx("p", {
              className: "text-[11px] text-slate-400",
              children: "Your codename will appear on the official Detective Certificate when both morals are restored!"
            })]
          }), i.jsxs("div", {
            className: "space-y-2 text-xs text-slate-300",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60",
              children: [i.jsxs("span", {
                className: "flex items-center gap-2",
                children: [i.jsx(Tx, {
                  className: "w-4 h-4 text-purple-400"
                }), i.jsxs("span", {
                  children: ["Mission 1: Restore Moral of ", i.jsx("strong", {
                    children: "The Race"
                  }), " (p. 92)"]
                })]
              }), i.jsx("span", {
                className: "text-amber-400 font-mono font-bold",
                children: "4 fragments"
              })]
            }), i.jsxs("div", {
              className: "flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60",
              children: [i.jsxs("span", {
                className: "flex items-center gap-2",
                children: [i.jsx(zx, {
                  className: "w-4 h-4 text-sky-400"
                }), i.jsxs("span", {
                  children: ["Mission 2: Restore Moral of ", i.jsx("strong", {
                    children: "The Wind & Sun"
                  }), " (p. 93)"]
                })]
              }), i.jsx("span", {
                className: "text-amber-400 font-mono font-bold",
                children: "4 fragments"
              })]
            }), i.jsxs("div", {
              className: "flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60",
              children: [i.jsxs("span", {
                className: "flex items-center gap-2",
                children: [i.jsx(r0, {
                  className: "w-4 h-4 text-amber-400"
                }), i.jsx("span", {
                  children: "Final Caseboard & Detective Certificate"
                })]
              }), i.jsx("span", {
                className: "text-emerald-400 font-mono font-bold",
                children: "Certificate"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-3 pt-2",
            children: [i.jsxs("button", {
              onClick: () => {
                B.playClick(), z()
              },
              className: "flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all cursor-pointer font-detective",
              children: [i.jsx(g0, {
                className: "w-4 h-4 fill-slate-950"
              }), i.jsx("span", {
                children: "Begin Investigation (Mission 1)"
              }), i.jsx(nl, {
                className: "w-4 h-4"
              })]
            }), i.jsx("button", {
              onClick: () => {
                B.playClick(), d()
              },
              className: "py-3.5 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer",
              children: i.jsx("span", {
                children: "📖 Open Clue Handbook"
              })
            })]
          })]
        })]
      })]
    })
  },
  Zd = ({
    mission: y,
    unlockedFragments: b,
    onUnlockFragment: z,
    onNextMission: d,
    onOpenRules: R
  }) => {
    const [O, Y] = usePersisted(persistKey(y.id, "tab"), 1), [P, D] = I.useState(null), [T, X] = I.useState(!1), [_, L] = usePersisted(persistKey(y.id, "tf"), {}), [ne, ce] = usePersisted(persistKey(y.id, "tfDone"), !1), [$, ae] = usePersisted(persistKey(y.id, "comp"), {}), [ee, Se] = usePersisted(persistKey(y.id, "compDone"), !1), [me, ze] = usePersisted(persistKey(y.id, "seq"), () => shuffleCopy(y.tasks.task3_sequencing.items.map(E => E.id))), [ke, de] = usePersisted(persistKey(y.id, "seqDone"), !1), [W, Ue] = usePersisted(persistKey(y.id, "match"), {}), [it, Mt] = usePersisted(persistKey(y.id, "matchDone"), !1), ct = E => {
      if (T && P === E) {
        B.stopSpeaking(), X(!1), D(null);
        return
      }
      B.playClick(), D(E), X(!0), B.speak(y.paragraphs[E].text, () => {
        X(!1), D(null)
      })
    }, Qe = () => {
      B.playClick(), X(!0);
      const E = y.paragraphs.map(f => f.text).join(" ");
      B.speak(E, () => {
        X(!1), D(null)
      })
    }, Yt = () => {
      B.playClick(), ce(!0);
      const E = y.tasks.task1_tf.items.every(u => _[u.id] !== void 0),
        f = y.tasks.task1_tf.items.filter(u => _[u.id] === u.isTrue).length;
      E && f === y.tasks.task1_tf.items.length ? (B.playFragmentUnlock(), z(1)) : B.playError()
    }, ut = () => {
      B.playClick(), Se(!0), y.tasks.task2_comparatives.items.every(f => $[f.id] === f.correctAnswer) ? (B.playFragmentUnlock(), z(2)) : B.playError()
    }, Ze = (E, f) => {
      B.playClick();
      const u = [...me],
        m = f === "up" ? E - 1 : E + 1;
      if (m < 0 || m >= u.length) return;
      const S = u[E];
      u[E] = u[m], u[m] = S, ze(u), de(!1)
    }, N = () => {
      B.playClick(), de(!0), me.every((f, u) => y.tasks.task3_sequencing.items.find(S => S.id === f)?.correctPos === u + 1) ? (B.playFragmentUnlock(), z(3)) : B.playError()
    }, q = () => {
      B.playClick(), Mt(!0), y.tasks.task4_matching.items.every(f => W[f.id] === f.right) ? (B.playFragmentUnlock(), z(4)) : B.playError()
    }, Z = [1, 2, 3, 4].every(E => b.includes(E));
    return i.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn",
      children: [i.jsxs("div", {
        className: "bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-500/30 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-wrap items-center justify-between gap-4",
        children: [i.jsxs("div", {
          children: [i.jsxs("div", {
            className: "flex items-center gap-2 mb-1",
            children: [i.jsxs("span", {
              className: "px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30",
              children: ["Page ", y.bookPage, " • Reading Time 3"]
            }), i.jsx("span", {
              className: "text-xs text-slate-400",
              children: "Academy Stars 3"
            })]
          }), i.jsx("h2", {
            className: "text-2xl sm:text-3xl font-black font-detective text-amber-300",
            children: y.storyTitle
          }), i.jsx("p", {
            className: "text-xs sm:text-sm text-slate-300 mt-1",
            children: y.title
          })]
        }), i.jsxs("div", {
          className: "flex items-center gap-2 sm:gap-3",
          children: [i.jsxs("button", {
            onClick: Qe,
            className: "px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-cyan-300 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow",
            children: [i.jsx(sl, {
              className: "w-4 h-4"
            }), i.jsx("span", {
              children: T ? "Stop Audio" : "Read Entire Story Aloud"
            })]
          }), i.jsxs("button", {
            onClick: () => {
              B.playClick(), R()
            },
            className: "px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer",
            children: [i.jsx(oi, {
              className: "w-4 h-4"
            }), i.jsx("span", {
              children: "Grammar Rules"
            })]
          })]
        })]
      }), i.jsxs("div", {
        className: "bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden",
        children: [i.jsxs("div", {
          className: "flex items-center justify-between mb-3",
          children: [i.jsxs("div", {
            className: "flex items-center gap-2",
            children: [i.jsx(Bt, {
              className: "w-5 h-5 text-amber-400"
            }), i.jsx("h3", {
              className: "font-detective font-bold text-amber-300 text-base",
              children: "Missing Moral Restoration Caseboard (4 Fragments)"
            })]
          }), i.jsxs("span", {
            className: "text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 border border-amber-500/30 text-amber-300",
            children: ["Recovered: ", y.moralFragments.filter(E => b.includes(E.fragmentId)).length, " / 4"]
          })]
        }), i.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
          children: y.moralFragments.map(E => {
            const f = b.includes(E.fragmentId);
            return i.jsxs("div", {
              className: `p-3.5 rounded-2xl border transition-all duration-500 relative flex flex-col justify-between ${f?"parchment border-amber-600 text-amber-950 shadow-md transform scale-[1.02]":"bg-slate-950/60 border-dashed border-slate-700 text-slate-500"}`,
              children: [i.jsxs("div", {
                className: "flex items-center justify-between mb-2",
                children: [i.jsxs("span", {
                  className: "text-[10px] font-bold uppercase tracking-wider",
                  children: ["Fragment #", E.fragmentId]
                }), f ? i.jsxs("span", {
                  className: "flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full",
                  children: [i.jsx(vx, {
                    className: "w-3 h-3"
                  }), " Unlocked"]
                }) : i.jsxs("span", {
                  className: "flex items-center gap-1 text-[11px] text-slate-500",
                  children: [i.jsx(jx, {
                    className: "w-3 h-3"
                  }), " Task ", E.unlockedByTask]
                })]
              }), i.jsx("div", {
                className: "py-2",
                children: f ? i.jsxs("p", {
                  className: "font-handwriting text-xl sm:text-2xl font-bold leading-tight text-amber-950",
                  children: ['"', E.text, '"']
                }) : i.jsxs("div", {
                  className: "space-y-1.5 py-1",
                  children: [i.jsx("div", {
                    className: "h-3 bg-slate-800 rounded animate-pulse w-3/4"
                  }), i.jsx("div", {
                    className: "h-3 bg-slate-800 rounded animate-pulse w-1/2"
                  }), i.jsxs("p", {
                    className: "text-[11px] text-slate-500 italic mt-2",
                    children: ["Complete Task ", E.unlockedByTask, " to reveal this fragment!"]
                  })]
                })
              })]
            }, E.fragmentId)
          })
        }), Z && i.jsxs("div", {
          className: "mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 border-2 border-emerald-400 text-white flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn",
          children: [i.jsxs("div", {
            className: "flex items-center gap-3",
            children: [i.jsx("div", {
              className: "w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-2xl",
              children: "🌟"
            }), i.jsxs("div", {
              children: [i.jsxs("div", {
                className: "text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5",
                children: [i.jsx(Uu, {
                  className: "w-4 h-4"
                }), " Moral Fully Restored!"]
              }), i.jsxs("div", {
                className: "text-base sm:text-lg font-bold text-amber-200 font-detective",
                children: ['"', y.finalMoral, '"']
              }), i.jsxs("div", {
                className: "text-xs text-slate-300 italic",
                children: ["🇷🇺 ", y.moralMeaningRu]
              })]
            })]
          }), i.jsxs("button", {
            onClick: () => {
              B.playSuccess(), d()
            },
            className: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap",
            children: [i.jsx("span", {
              children: "Continue Investigation"
            }), i.jsx(nl, {
              className: "w-4 h-4"
            })]
          })]
        })]
      }), i.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
        children: [i.jsx("div", {
          className: "lg:col-span-5 space-y-4",
          children: i.jsxs("div", {
            className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-5 shadow-xl space-y-4",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between pb-3 border-b border-slate-800",
              children: [i.jsxs("div", {
                className: "flex items-center gap-2",
                children: [i.jsx("span", {
                  className: "text-xl",
                  children: "📖"
                }), i.jsxs("h3", {
                  className: "font-detective font-bold text-amber-300 text-sm",
                  children: ["Textbook Evidence (Page ", y.bookPage, ")"]
                })]
              }), i.jsx("span", {
                className: "text-xs text-slate-400",
                children: "Click speaker to hear"
              })]
            }), i.jsx("div", {
              className: "rounded-2xl overflow-hidden border border-slate-700 shadow-md",
              children: i.jsx("img", {
                src: y.coverImage,
                alt: y.storyTitle,
                className: "w-full h-48 object-cover hover:scale-102 transition-transform duration-500"
              })
            }), i.jsx("div", {
              className: "space-y-4",
              children: y.paragraphs.map((E, f) => {
                const u = T && P === f;
                return i.jsxs("div", {
                  className: `p-4 rounded-2xl border transition-all text-sm leading-relaxed ${u?"bg-amber-950/40 border-amber-400 text-white shadow-lg":"bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700"}`,
                  children: [i.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [i.jsxs("span", {
                      className: "text-[11px] font-bold uppercase tracking-wider text-amber-400",
                      children: ["Paragraph ", E.id]
                    }), i.jsxs("button", {
                      onClick: () => ct(f),
                      className: `px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${u?"bg-amber-500 text-slate-950 font-bold":"bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"}`,
                      children: [i.jsx(sl, {
                        className: "w-3.5 h-3.5"
                      }), u ? "Pause" : "Listen"]
                    })]
                  }), i.jsx("p", {
                    className: "text-slate-200",
                    children: E.text
                  }), i.jsx("div", {
                    className: "mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5",
                    children: E.keyVocabulary.map((m, S) => i.jsxs("button", {
                      onClick: () => {
                        B.speak(m.word)
                      },
                      className: "px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 hover:border-amber-400 text-[11px] text-amber-300 font-medium transition-colors flex items-center gap-1",
                      title: `${m.translation} (${m.note})`,
                      children: [i.jsx("span", {
                        children: m.word
                      }), i.jsxs("span", {
                        className: "text-[10px] text-slate-400",
                        children: ["(", m.translation, ")"]
                      })]
                    }, S))
                  })]
                }, E.id)
              })
            })]
          })
        }), i.jsxs("div", {
          className: "lg:col-span-7 space-y-4",
          children: [i.jsx("div", {
            className: "flex bg-slate-900/90 border border-amber-500/30 rounded-2xl p-1.5 gap-1.5 overflow-x-auto",
            children: [{
              id: 1,
              label: "Task 1: True/False",
              icon: "✓✗",
              unlockedFrag: 1
            }, {
              id: 2,
              label: "Task 2: Comparatives",
              icon: "±",
              unlockedFrag: 2
            }, {
              id: 3,
              label: "Task 3: Timeline",
              icon: "123",
              unlockedFrag: 3
            }, {
              id: 4,
              label: "Task 4: Matching",
              icon: "↔",
              unlockedFrag: 4
            }].map(E => {
              const f = O === E.id,
                u = b.includes(E.unlockedFrag);
              return i.jsxs("button", {
                onClick: () => {
                  B.playClick(), Y(E.id)
                },
                className: `flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap ${f?"bg-amber-500 text-slate-950 font-bold shadow":"text-slate-300 hover:text-white hover:bg-slate-800"}`,
                children: [i.jsx("span", {
                  children: E.icon
                }), i.jsx("span", {
                  children: E.label
                }), u && i.jsx(a0, {
                  className: `w-3.5 h-3.5 ${f?"text-slate-950":"text-emerald-400"}`
                })]
              }, E.id)
            })
          }), O === 1 && i.jsxs("div", {
            className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5",
            children: [i.jsxs("div", {
              children: [i.jsxs("div", {
                className: "flex items-center justify-between",
                children: [i.jsx("h3", {
                  className: "font-detective font-bold text-amber-300 text-lg",
                  children: y.tasks.task1_tf.title
                }), i.jsx("span", {
                  className: "text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30",
                  children: "Unlocks Fragment #1"
                })]
              }), i.jsxs("p", {
                className: "text-xs text-slate-300 mt-1",
                children: [y.tasks.task1_tf.instruction, " (7 statements)"]
              })]
            }), i.jsx("div", {
              className: "space-y-3",
              children: y.tasks.task1_tf.items.map(E => {
                const f = _[E.id],
                  u = ne,
                  m = u && f === E.isTrue,
                  S = u && f !== void 0 && f !== E.isTrue;
                return i.jsxs("div", {
                  className: `p-3.5 rounded-2xl border transition-all text-xs sm:text-sm ${m?"bg-emerald-950/30 border-emerald-500/60 text-slate-100":S?"bg-rose-950/30 border-rose-500/60 text-slate-100":"bg-slate-950/60 border-slate-800 text-slate-200"}`,
                  children: [i.jsxs("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",
                    children: [i.jsxs("span", {
                      className: "font-medium flex-1",
                      children: [i.jsxs("strong", {
                        className: "text-amber-400 mr-1.5",
                        children: [E.id, "."]
                      }), E.statement]
                    }), i.jsxs("div", {
                      className: "flex items-center gap-2 shrink-0",
                      children: [i.jsxs("button", {
                        onClick: () => {
                          B.playClick(), L({
                            ..._,
                            [E.id]: !0
                          }), ce(!1)
                        },
                        className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1 ${f===!0?"bg-emerald-500 text-slate-950":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                        children: [i.jsx(ri, {
                          className: "w-3.5 h-3.5"
                        }), i.jsx("span", {
                          children: "True"
                        })]
                      }), i.jsxs("button", {
                        onClick: () => {
                          B.playClick(), L({
                            ..._,
                            [E.id]: !1
                          }), ce(!1)
                        },
                        className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1 ${f===!1?"bg-rose-500 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                        children: [i.jsx(gx, {
                          className: "w-3.5 h-3.5"
                        }), i.jsx("span", {
                          children: "False"
                        })]
                      })]
                    })]
                  }), u && i.jsxs("div", {
                    className: "mt-2 pt-2 border-t border-slate-800/80 text-[11px] flex items-start gap-1.5",
                    children: [i.jsx("span", {
                      className: m ? "text-emerald-400 font-bold" : "text-rose-400 font-bold",
                      children: m ? "✓ Verified:" : "✗ Clue mismatch:"
                    }), i.jsx("span", {
                      className: "text-slate-400 italic",
                      children: E.evidence
                    })]
                  })]
                }, E.id)
              })
            }), i.jsxs("div", {
              className: "flex items-center justify-between pt-3 border-t border-slate-800",
              children: [i.jsxs("button", {
                onClick: () => {
                  B.playClick(), L({}), ce(!1)
                },
                className: "px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1.5",
                children: [i.jsx(Xn, {
                  className: "w-3.5 h-3.5"
                }), i.jsx("span", {
                  children: "Reset"
                })]
              }), i.jsxs("button", {
                onClick: Yt,
                className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer",
                children: [i.jsx(Bt, {
                  className: "w-4 h-4"
                }), i.jsx("span", {
                  children: "Verify Answers & Unlock Fragment #1"
                })]
              })]
            })]
          }), O === 2 && i.jsxs("div", {
            className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5",
            children: [i.jsxs("div", {
              children: [i.jsxs("div", {
                className: "flex items-center justify-between",
                children: [i.jsx("h3", {
                  className: "font-detective font-bold text-amber-300 text-lg",
                  children: y.tasks.task2_comparatives.title
                }), i.jsx("span", {
                  className: "text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                  children: "Unlocks Fragment #2"
                })]
              }), i.jsxs("p", {
                className: "text-xs text-slate-300 mt-1",
                children: [y.tasks.task2_comparatives.instruction, " (7 sentences)"]
              })]
            }), i.jsx("div", {
              className: "space-y-3",
              children: y.tasks.task2_comparatives.items.map(E => {
                const f = $[E.id],
                  u = ee,
                  m = u && f === E.correctAnswer,
                  S = u && f && f !== E.correctAnswer;
                return i.jsxs("div", {
                  className: `p-3.5 rounded-2xl border transition-all text-xs sm:text-sm ${m?"bg-emerald-950/30 border-emerald-500/60":S?"bg-rose-950/30 border-rose-500/60":"bg-slate-950/60 border-slate-800"}`,
                  children: [i.jsxs("div", {
                    className: "mb-2.5 flex items-center flex-wrap gap-1 text-slate-200",
                    children: [i.jsxs("strong", {
                      className: "text-amber-400 mr-1",
                      children: [E.id, "."]
                    }), i.jsx("span", {
                      children: E.sentencePre
                    }), i.jsx("span", {
                      className: "px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono font-bold",
                      children: f || "_______"
                    }), i.jsx("span", {
                      children: E.sentencePost
                    })]
                  }), i.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: E.options.map(C => {
                      const k = f === C;
                      return i.jsx("button", {
                        onClick: () => {
                          B.playClick(), ae({
                            ...$,
                            [E.id]: C
                          }), Se(!1)
                        },
                        className: `px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${k?"bg-amber-400 text-slate-950 ring-2 ring-amber-300 shadow":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                        children: C
                      }, C)
                    })
                  }), u && i.jsxs("div", {
                    className: "mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 italic",
                    children: ["💡 Rule: ", E.explanation]
                  })]
                }, E.id)
              })
            }), i.jsxs("div", {
              className: "flex items-center justify-between pt-3 border-t border-slate-800",
              children: [i.jsxs("button", {
                onClick: () => {
                  B.playClick(), ae({}), Se(!1)
                },
                className: "px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1.5",
                children: [i.jsx(Xn, {
                  className: "w-3.5 h-3.5"
                }), i.jsx("span", {
                  children: "Reset"
                })]
              }), i.jsxs("button", {
                onClick: ut,
                className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer",
                children: [i.jsx(Bt, {
                  className: "w-4 h-4"
                }), i.jsx("span", {
                  children: "Verify Adjectives & Unlock Fragment #2"
                })]
              })]
            })]
          }), O === 3 && i.jsxs("div", {
            className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5",
            children: [i.jsxs("div", {
              children: [i.jsxs("div", {
                className: "flex items-center justify-between",
                children: [i.jsx("h3", {
                  className: "font-detective font-bold text-amber-300 text-lg",
                  children: y.tasks.task3_sequencing.title
                }), i.jsx("span", {
                  className: "text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30",
                  children: "Unlocks Fragment #3"
                })]
              }), i.jsxs("p", {
                className: "text-xs text-slate-300 mt-1",
                children: [y.tasks.task3_sequencing.instruction, " (6 events)"]
              })]
            }), i.jsx("div", {
              className: "space-y-2",
              children: me.map((E, f) => {
                const u = y.tasks.task3_sequencing.items.find(k => k.id === E);
                if (!u) return null;
                const m = ke,
                  S = m && u.correctPos === f + 1,
                  C = m && u.correctPos !== f + 1;
                return i.jsxs("div", {
                  className: `p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${S?"bg-emerald-950/30 border-emerald-500/60 text-slate-100":C?"bg-rose-950/30 border-rose-500/60 text-slate-100":"bg-slate-950/60 border-slate-800 text-slate-200"}`,
                  children: [i.jsxs("div", {
                    className: "flex items-center gap-3 flex-1",
                    children: [i.jsx("span", {
                      className: "w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold font-mono text-amber-300 shrink-0",
                      children: f + 1
                    }), i.jsx("span", {
                      children: u.text
                    })]
                  }), i.jsxs("div", {
                    className: "flex items-center gap-1 shrink-0",
                    children: [i.jsx("button", {
                      disabled: f === 0,
                      onClick: () => Ze(f, "up"),
                      className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",
                      title: "Move earlier",
                      children: i.jsx(mx, {
                        className: "w-3.5 h-3.5 rotate-90"
                      })
                    }), i.jsx("button", {
                      disabled: f === me.length - 1,
                      onClick: () => Ze(f, "down"),
                      className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",
                      title: "Move later",
                      children: i.jsx(nl, {
                        className: "w-3.5 h-3.5 rotate-90"
                      })
                    })]
                  })]
                }, E)
              })
            }), i.jsxs("div", {
              className: "flex items-center justify-between pt-3 border-t border-slate-800",
              children: [i.jsxs("button", {
                onClick: () => {
                  B.playClick(), ze(shuffleCopy(y.tasks.task3_sequencing.items.map(E => E.id))), de(!1)
                },
                className: "px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1.5",
                children: [i.jsx(Xn, {
                  className: "w-3.5 h-3.5"
                }), i.jsx("span", {
                  children: "Shuffle"
                })]
              }), i.jsxs("button", {
                onClick: N,
                className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer",
                children: [i.jsx(Bt, {
                  className: "w-4 h-4"
                }), i.jsx("span", {
                  children: "Verify Timeline & Unlock Fragment #3"
                })]
              })]
            })]
          }), O === 4 && i.jsxs("div", {
            className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5",
            children: [i.jsxs("div", {
              children: [i.jsxs("div", {
                className: "flex items-center justify-between",
                children: [i.jsx("h3", {
                  className: "font-detective font-bold text-amber-300 text-lg",
                  children: y.tasks.task4_matching.title
                }), i.jsx("span", {
                  className: "text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30",
                  children: "Unlocks Fragment #4"
                })]
              }), i.jsxs("p", {
                className: "text-xs text-slate-300 mt-1",
                children: [y.tasks.task4_matching.instruction, " (7 items)"]
              })]
            }), (() => {
              const E = Array.from(new Set(y.tasks.task4_matching.items.map(f => f.right)));
              return i.jsx("div", {
                className: "space-y-3",
                children: y.tasks.task4_matching.items.map((f, u) => {
                  const m = W[f.id],
                    S = it,
                    C = S && m === f.right,
                    k = S && m && m !== f.right;
                  return i.jsxs("div", {
                    className: `p-3.5 rounded-2xl border transition-all text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${C?"bg-emerald-950/30 border-emerald-500/60 text-slate-100":k?"bg-rose-950/30 border-rose-500/60 text-slate-100":"bg-slate-950/60 border-slate-800 text-slate-200"}`,
                    children: [i.jsxs("div", {
                      className: "flex items-center gap-2 flex-1",
                      children: [i.jsxs("span", {
                        className: "font-bold text-amber-400",
                        children: [u + 1, "."]
                      }), i.jsx("span", {
                        className: "italic",
                        children: f.left
                      })]
                    }), i.jsx("div", {
                      className: "flex flex-wrap gap-1.5 shrink-0",
                      children: E.map(H => {
                        const U = m === H;
                        return i.jsx("button", {
                          onClick: () => {
                            B.playClick(), Ue({
                              ...W,
                              [f.id]: H
                            }), Mt(!1)
                          },
                          className: `px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${U?"bg-amber-400 text-slate-950 shadow ring-1 ring-amber-300 font-bold":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                          children: H
                        }, H)
                      })
                    })]
                  }, f.id)
                })
              })
            })(), i.jsxs("div", {
              className: "flex items-center justify-between pt-3 border-t border-slate-800",
              children: [i.jsxs("button", {
                onClick: () => {
                  B.playClick(), Ue({}), Mt(!1)
                },
                className: "px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1.5",
                children: [i.jsx(Xn, {
                  className: "w-3.5 h-3.5"
                }), i.jsx("span", {
                  children: "Reset"
                })]
              }), i.jsxs("button", {
                onClick: q,
                className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer",
                children: [i.jsx(Bt, {
                  className: "w-4 h-4"
                }), i.jsx("span", {
                  children: "Verify Matches & Unlock Fragment #4"
                })]
              })]
            })]
          })]
        })]
      })]
    })
  };
var Hu = {};
(function y(b, z, d, R) {
    var O = !!(b.Worker && b.Blob && b.Promise && b.OffscreenCanvas && b.OffscreenCanvasRenderingContext2D && b.HTMLCanvasElement && b.HTMLCanvasElement.prototype.transferControlToOffscreen && b.URL && b.URL.createObjectURL),
      Y = typeof Path2D == "function" && typeof DOMMatrix == "function",
      P = (function() {
        if (!b.OffscreenCanvas) return !1;
        try {
          var f = new OffscreenCanvas(1, 1),
            u = f.getContext("2d");
          u.fillRect(0, 0, 1, 1);
          var m = f.transferToImageBitmap();
          u.createPattern(m, "no-repeat")
        } catch {
          return !1
        }
        return !0
      })();

    function D() {}

    function T(f) {
      var u = z.exports.Promise,
        m = u !== void 0 ? u : b.Promise;
      return typeof m == "function" ? new m(f) : (f(D, D), null)
    }
    var X = (function(f, u) {
        return {
          transform: function(m) {
            if (f) return m;
            if (u.has(m)) return u.get(m);
            var S = new OffscreenCanvas(m.width, m.height),
              C = S.getContext("2d");
            return C.drawImage(m, 0, 0), u.set(m, S), S
          },
          clear: function() {
            u.clear()
          }
        }
      })(P, new Map),
      _ = (function() {
        var f = Math.floor(16.666666666666668),
          u, m, S = {},
          C = 0;
        return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(k) {
          var H = Math.random();
          return S[H] = requestAnimationFrame(function U(K) {
            C === K || C + f - 1 < K ? (C = K, delete S[H], k()) : S[H] = requestAnimationFrame(U)
          }), H
        }, m = function(k) {
          S[k] && cancelAnimationFrame(S[k])
        }) : (u = function(k) {
          return setTimeout(k, f)
        }, m = function(k) {
          return clearTimeout(k)
        }), {
          frame: u,
          cancel: m
        }
      })(),
      L = (function() {
        var f, u, m = {};

        function S(C) {
          function k(H, U) {
            C.postMessage({
              options: H || {},
              callback: U
            })
          }
          C.init = function(U) {
            var K = U.transferControlToOffscreen();
            C.postMessage({
              canvas: K
            }, [K])
          }, C.fire = function(U, K, F) {
            if (u) return k(U, null), u;
            var Ne = Math.random().toString(36).slice(2);
            return u = T(function(ye) {
              function Ce(Be) {
                Be.data.callback === Ne && (delete m[Ne], C.removeEventListener("message", Ce), u = null, X.clear(), F(), ye())
              }
              C.addEventListener("message", Ce), k(U, Ne), m[Ne] = Ce.bind(null, {
                data: {
                  callback: Ne
                }
              })
            }), u
          }, C.reset = function() {
            C.postMessage({
              reset: !0
            });
            for (var U in m) m[U](), delete m[U]
          }
        }
        return function() {
          if (f) return f;
          if (!d && O) {
            var C = ["var CONFETTI, SIZE = {}, module = {};", "(" + y.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
            try {
              f = new Worker(URL.createObjectURL(new Blob([C])))
            } catch (k) {
              return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", k), null
            }
            S(f)
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

    function ce(f, u) {
      return u ? u(f) : f
    }

    function $(f) {
      return f != null
    }

    function ae(f, u, m) {
      return ce(f && $(f[u]) ? f[u] : ne[u], m)
    }

    function ee(f) {
      return f < 0 ? 0 : Math.floor(f)
    }

    function Se(f, u) {
      return Math.floor(Math.random() * (u - f)) + f
    }

    function me(f) {
      return parseInt(f, 16)
    }

    function ze(f) {
      return f.map(ke)
    }

    function ke(f) {
      var u = String(f).replace(/[^0-9a-f]/gi, "");
      return u.length < 6 && (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]), {
        r: me(u.substring(0, 2)),
        g: me(u.substring(2, 4)),
        b: me(u.substring(4, 6))
      }
    }

    function de(f) {
      var u = ae(f, "origin", Object);
      return u.x = ae(u, "x", Number), u.y = ae(u, "y", Number), u
    }

    function W(f) {
      f.width = document.documentElement.clientWidth, f.height = document.documentElement.clientHeight
    }

    function Ue(f) {
      var u = f.getBoundingClientRect();
      f.width = u.width, f.height = u.height
    }

    function it(f) {
      var u = document.createElement("canvas");
      return u.style.position = "fixed", u.style.top = "0px", u.style.left = "0px", u.style.pointerEvents = "none", u.style.zIndex = f, u
    }

    function Mt(f, u, m, S, C, k, H, U, K) {
      f.save(), f.translate(u, m), f.rotate(k), f.scale(S, C), f.arc(0, 0, 1, H, U, K), f.restore()
    }

    function ct(f) {
      var u = f.angle * (Math.PI / 180),
        m = f.spread * (Math.PI / 180);
      return {
        x: f.x,
        y: f.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(.11, Math.random() * .1 + .05),
        velocity: f.startVelocity * .5 + Math.random() * f.startVelocity,
        angle2D: -u + (.5 * m - Math.random() * m),
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

    function Qe(f, u) {
      u.x += Math.cos(u.angle2D) * u.velocity + u.drift, u.y += Math.sin(u.angle2D) * u.velocity + u.gravity, u.velocity *= u.decay, u.flat ? (u.wobble = 0, u.wobbleX = u.x + 10 * u.scalar, u.wobbleY = u.y + 10 * u.scalar, u.tiltSin = 0, u.tiltCos = 0, u.random = 1) : (u.wobble += u.wobbleSpeed, u.wobbleX = u.x + 10 * u.scalar * Math.cos(u.wobble), u.wobbleY = u.y + 10 * u.scalar * Math.sin(u.wobble), u.tiltAngle += .1, u.tiltSin = Math.sin(u.tiltAngle), u.tiltCos = Math.cos(u.tiltAngle), u.random = Math.random() + 2);
      var m = u.tick++/u.totalTicks,S=u.x+u.random*u.tiltCos,C=u.y+u.random*u.tiltSin,k=u.wobbleX+u.random*u.tiltCos,H=u.wobbleY+u.random*u.tiltSin;if(f.fillStyle="rgba("+u.color.r+", "+u.color.g+", "+u.color.b+", "+(1-m)+")",f.beginPath(),Y&&u.shape.type==="path"&&typeof u.shape.path=="string"&&Array.isArray(u.shape.matrix))f.fill(q(u.shape.path,u.shape.matrix,u.x,u.y,Math.abs(k-S)*.1,Math.abs(H-C)*.1,Math.PI/
      10 * u.wobble));
  else if (u.shape.type === "bitmap") {
    var U = Math.PI / 10 * u.wobble,
      K = Math.abs(k - S) * .1,
      F = Math.abs(H - C) * .1,
      Ne = u.shape.bitmap.width * u.scalar,
      ye = u.shape.bitmap.height * u.scalar,
      Ce = new DOMMatrix([Math.cos(U) * K, Math.sin(U) * K, -Math.sin(U) * F, Math.cos(U) * F, u.x, u.y]);
    Ce.multiplySelf(new DOMMatrix(u.shape.matrix));
    var Be = f.createPattern(X.transform(u.shape.bitmap), "no-repeat");
    Be.setTransform(Ce), f.globalAlpha = 1 - m, f.fillStyle = Be, f.fillRect(u.x - Ne / 2, u.y - ye / 2, Ne, ye), f.globalAlpha = 1
  } else if (u.shape === "circle") f.ellipse ? f.ellipse(u.x, u.y, Math.abs(k - S) * u.ovalScalar, Math.abs(H - C) * u.ovalScalar, Math.PI / 10 * u.wobble, 0, 2 * Math.PI) : Mt(f, u.x, u.y, Math.abs(k - S) * u.ovalScalar, Math.abs(H - C) * u.ovalScalar, Math.PI / 10 * u.wobble, 0, 2 * Math.PI);
  else if (u.shape === "star")
    for (var se = Math.PI / 2 * 3, Ke = 4 * u.scalar, nt = 8 * u.scalar, gt = u.x, Ct = u.y, Gt = 5, rt = Math.PI / Gt; Gt--;) gt = u.x + Math.cos(se) * nt, Ct = u.y + Math.sin(se) * nt, f.lineTo(gt, Ct), se += rt, gt = u.x + Math.cos(se) * Ke, Ct = u.y + Math.sin(se) * Ke, f.lineTo(gt, Ct), se += rt;
  else f.moveTo(Math.floor(u.x), Math.floor(u.y)), f.lineTo(Math.floor(u.wobbleX), Math.floor(C)), f.lineTo(Math.floor(k), Math.floor(H)), f.lineTo(Math.floor(S), Math.floor(u.wobbleY));
  return f.closePath(), f.fill(), u.tick < u.totalTicks
}

function Yt(f, u, m, S, C) {
  var k = u.slice(),
    H = f.getContext("2d"),
    U, K, F = T(function(Ne) {
      function ye() {
        U = K = null, H.clearRect(0, 0, S.width, S.height), X.clear(), C(), Ne()
      }

      function Ce() {
        d && !(S.width === R.width && S.height === R.height) && (S.width = f.width = R.width, S.height = f.height = R.height), !S.width && !S.height && (m(f), S.width = f.width, S.height = f.height), H.clearRect(0, 0, S.width, S.height), k = k.filter(function(Be) {
          return Qe(H, Be)
        }), k.length ? U = _.frame(Ce) : ye()
      }
      U = _.frame(Ce), K = ye
    });
  return {
    addFettis: function(Ne) {
      return k = k.concat(Ne), F
    },
    canvas: f,
    promise: F,
    reset: function() {
      U && _.cancel(U), K && K()
    }
  }
}

function ut(f, u) {
  var m = !f,
    S = !!ae(u || {}, "resize"),
    C = !1,
    k = ae(u, "disableForReducedMotion", Boolean),
    H = O && !!ae(u || {}, "useWorker"),
    U = H ? L() : null,
    K = m ? W : Ue,
    F = f && U ? !!f.__confetti_initialized : !1,
    Ne = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches,
    ye;

  function Ce(se, Ke, nt) {
    for (var gt = ae(se, "particleCount", ee), Ct = ae(se, "angle", Number), Gt = ae(se, "spread", Number), rt = ae(se, "startVelocity", Number), Ql = ae(se, "decay", Number), fi = ae(se, "gravity", Number), di = ae(se, "drift", Number), at = ae(se, "colors", ze), hi = ae(se, "ticks", Number), Zl = ae(se, "shapes"), Ln = ae(se, "scalar"), il = !!ae(se, "flat"), Qn = de(se), Kl = gt, Jl = [], mi = f.width * Qn.x, qa = f.height * Qn.y; Kl--;) Jl.push(ct({
      x: mi,
      y: qa,
      angle: Ct,
      spread: Gt,
      startVelocity: rt,
      color: at[Kl % at.length],
      shape: Zl[Se(0, Zl.length)],
      ticks: hi,
      decay: Ql,
      gravity: fi,
      drift: di,
      scalar: Ln,
      flat: il
    }));
    return ye ? ye.addFettis(Jl) : (ye = Yt(f, Jl, K, Ke, nt), ye.promise)
  }

  function Be(se) {
    var Ke = k || ae(se, "disableForReducedMotion", Boolean),
      nt = ae(se, "zIndex", Number);
    if (Ke && Ne) return T(function(rt) {
      rt()
    });
    m && ye ? f = ye.canvas : m && !f && (f = it(nt), document.body.appendChild(f)), S && !F && K(f);
    var gt = {
      width: f.width,
      height: f.height
    };
    U && !F && U.init(f), F = !0, U && (f.__confetti_initialized = !0);

    function Ct() {
      if (U) {
        var rt = {
          getBoundingClientRect: function() {
            if (!m) return f.getBoundingClientRect()
          }
        };
        K(rt), U.postMessage({
          resize: {
            width: rt.width,
            height: rt.height
          }
        });
        return
      }
      gt.width = gt.height = null
    }

    function Gt() {
      ye = null, S && (C = !1, b.removeEventListener("resize", Ct)), m && f && (document.body.contains(f) && document.body.removeChild(f), f = null, F = !1)
    }
    return S && !C && (C = !0, b.addEventListener("resize", Ct, !1)), U ? U.fire(se, gt, Gt) : Ce(se, gt, Gt)
  }
  return Be.reset = function() {
    U && U.reset(), ye && ye.reset()
  }, Be
}
var Ze;

function N() {
  return Ze || (Ze = ut(null, {
    useWorker: !0,
    resize: !0
  })), Ze
}

function q(f, u, m, S, C, k, H) {
  var U = new Path2D(f),
    K = new Path2D;
  K.addPath(U, new DOMMatrix(u));
  var F = new Path2D;
  return F.addPath(K, new DOMMatrix([Math.cos(H) * C, Math.sin(H) * C, -Math.sin(H) * k, Math.cos(H) * k, m, S])), F
}

function Z(f) {
  if (!Y) throw new Error("path confetti are not supported in this browser");
  var u, m;
  typeof f == "string" ? u = f : (u = f.path, m = f.matrix);
  var S = new Path2D(u),
    C = document.createElement("canvas"),
    k = C.getContext("2d");
  if (!m) {
    for (var H = 1e3, U = H, K = H, F = 0, Ne = 0, ye, Ce, Be = 0; Be < H; Be += 2)
      for (var se = 0; se < H; se += 2) k.isPointInPath(S, Be, se, "nonzero") && (U = Math.min(U, Be), K = Math.min(K, se), F = Math.max(F, Be), Ne = Math.max(Ne, se));
    ye = F - U, Ce = Ne - K;
    var Ke = 10,
      nt = Math.min(Ke / ye, Ke / Ce);
    m = [nt, 0, 0, nt, -Math.round(ye / 2 + U) * nt, -Math.round(Ce / 2 + K) * nt]
  }
  return {
    type: "path",
    path: u,
    matrix: m
  }
}

function E(f) {
  var u, m = 1,
    S = "#000000",
    C = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
  typeof f == "string" ? u = f : (u = f.text, m = "scalar" in f ? f.scalar : m, C = "fontFamily" in f ? f.fontFamily : C, S = "color" in f ? f.color : S);
  var k = 10 * m,
    H = "" + k + "px " + C,
    U = new OffscreenCanvas(k, k),
    K = U.getContext("2d");
  K.font = H;
  var F = K.measureText(u),
    Ne = Math.ceil(F.actualBoundingBoxRight + F.actualBoundingBoxLeft),
    ye = Math.ceil(F.actualBoundingBoxAscent + F.actualBoundingBoxDescent),
    Ce = 2,
    Be = F.actualBoundingBoxLeft + Ce,
    se = F.actualBoundingBoxAscent + Ce;
  Ne += Ce + Ce, ye += Ce + Ce, U = new OffscreenCanvas(Ne, ye), K = U.getContext("2d"), K.font = H, K.fillStyle = S, K.fillText(u, Be, se);
  var Ke = 1 / m;
  return {
    type: "bitmap",
    bitmap: U.transferToImageBitmap(),
    matrix: [Ke, 0, 0, Ke, -Ne * Ke / 2, -ye * Ke / 2]
  }
}
z.exports = function() {
return N().apply(this, arguments)
}, z.exports.reset = function() {
N().reset()
}, z.exports.create = ut, z.exports.shapeFromPath = Z, z.exports.shapeFromText = E
})((function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {}
})(), Hu, !1);
const Kd = Hu.exports;
Hu.exports.create;
const kx = ({
    detectiveName: y,
    totalFragmentsUnlocked: b,
    onProceedToReflection: z
  }) => {
    const [d, R] = usePersisted("caseStamped", !1);
    I.useEffect(() => {
      b >= 8 && (B.playFanfare(), Kd({
        particleCount: 100,
        spread: 70,
        origin: {
          y: .6
        }
      }))
    }, [b]);
    const O = () => {
        B.playClick(), B.playFanfare(), R(!0), Kd({
          particleCount: 150,
          spread: 100,
          origin: {
            y: .5
          }
        })
      },
      Y = () => {
        B.playClick(), window.print()
      };
    return i.jsxs("div", {
      className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn",
      children: [i.jsxs("div", {
        className: "text-center space-y-2",
        children: [i.jsxs("div", {
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold",
          children: [i.jsx(Uu, {
            className: "w-4 h-4 text-emerald-400"
          }), i.jsx("span", {
            children: "Stage 4: Official Case Closure & Final Assembly"
          })]
        }), i.jsx("h2", {
          className: "text-3xl sm:text-4xl font-black font-detective text-amber-300",
          children: "The Restored Morals Caseboard"
        }), i.jsx("p", {
          className: "text-slate-300 text-sm max-w-xl mx-auto",
          children: "Both missing morals from Academy Stars 3 Unit 7 have been successfully recovered from the evidence on pages 92 and 93!"
        })]
      }), i.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: [i.jsxs("div", {
          className: "parchment rounded-3xl p-6 sm:p-7 border-2 border-amber-600 shadow-2xl relative overflow-hidden flex flex-col justify-between",
          children: [i.jsxs("div", {
            className: "space-y-3",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between",
              children: [i.jsx("span", {
                className: "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-900/10 text-amber-900 border border-amber-900/20",
                children: "Moral #1 • The Race (p. 92)"
              }), i.jsx("span", {
                className: "text-2xl",
                children: "🐇🐢"
              })]
            }), i.jsx("h3", {
              className: "text-lg font-bold font-detective text-amber-950",
              children: "The Tortoise & The Rabbit"
            }), i.jsx("blockquote", {
              className: "text-amber-950 font-handwriting text-2xl font-bold leading-relaxed border-l-4 border-amber-700 pl-4 py-1",
              children: '"Slow and steady wins the race. Being clever and patient is better than being fast and careless!"'
            }), i.jsxs("div", {
              className: "pt-2 text-xs text-amber-900/80 space-y-1",
              children: [i.jsxs("p", {
                children: [i.jsx("strong", {
                  children: "Deduction:"
                }), " Speed without patience leads to careless mistakes. Tortoise never stopped, while Rabbit fell asleep."]
              }), i.jsxs("p", {
                children: [i.jsx("strong", {
                  children: "🇷🇺 Значение:"
                }), " Тише едешь — дальше будешь. Терпение и постоянство побеждают хвастовство!"]
              })]
            })]
          }), i.jsxs("div", {
            className: "mt-4 pt-3 border-t border-amber-800/20 flex items-center justify-between text-xs font-bold text-emerald-800",
            children: [i.jsxs("span", {
              className: "flex items-center gap-1",
              children: [i.jsx(ri, {
                className: "w-4 h-4"
              }), " 4 of 4 Fragments Restored"]
            }), i.jsx("span", {
              className: "font-mono",
              children: "Page 92 Solved"
            })]
          })]
        }), i.jsxs("div", {
          className: "parchment rounded-3xl p-6 sm:p-7 border-2 border-sky-600 shadow-2xl relative overflow-hidden flex flex-col justify-between",
          children: [i.jsxs("div", {
            className: "space-y-3",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between",
              children: [i.jsx("span", {
                className: "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-900/10 text-sky-950 border border-sky-900/20",
                children: "Moral #2 • The Wind & The Sun (p. 93)"
              }), i.jsx("span", {
                className: "text-2xl",
                children: "💨☀️"
              })]
            }), i.jsx("h3", {
              className: "text-lg font-bold font-detective text-amber-950",
              children: "The Cold Wind & The Warm Sun"
            }), i.jsx("blockquote", {
              className: "text-amber-950 font-handwriting text-2xl font-bold leading-relaxed border-l-4 border-sky-700 pl-4 py-1",
              children: '"Gentleness and warmth are much stronger than cold force and anger. Kindness always wins!"'
            }), i.jsxs("div", {
              className: "pt-2 text-xs text-amber-900/80 space-y-1",
              children: [i.jsxs("p", {
                children: [i.jsx("strong", {
                  children: "Deduction:"
                }), " The harder the wind blew, the tighter the man held his coat. Warm sunshine gently convinced him to take it off."]
              }), i.jsxs("p", {
                children: [i.jsx("strong", {
                  children: "🇷🇺 Значение:"
                }), " Доброта и тепло сильнее грубой силы и гнева. Лаской добьешься большего, чем криком!"]
              })]
            })]
          }), i.jsxs("div", {
            className: "mt-4 pt-3 border-t border-amber-800/20 flex items-center justify-between text-xs font-bold text-emerald-800",
            children: [i.jsxs("span", {
              className: "flex items-center gap-1",
              children: [i.jsx(ri, {
                className: "w-4 h-4"
              }), " 4 of 4 Fragments Restored"]
            }), i.jsx("span", {
              className: "font-mono",
              children: "Page 93 Solved"
            })]
          })]
        })]
      }), i.jsx("div", {
        className: "text-center py-4",
        children: d ? i.jsxs("div", {
          className: "space-y-6",
          children: [i.jsx("div", {
            className: "inline-block transform -rotate-2 bg-red-700/90 text-white font-black font-detective text-2xl sm:text-3xl px-8 py-3 rounded-2xl border-4 border-dashed border-red-300 shadow-2xl tracking-widest uppercase animate-bounce",
            children: "★ OFFICIAL: CASE CLOSED ★"
          }), i.jsxs("div", {
            className: "max-w-2xl mx-auto parchment border-4 border-double border-amber-700 rounded-3xl p-8 sm:p-10 text-amber-950 shadow-2xl text-center space-y-5 relative",
            children: [i.jsx("div", {
              className: "absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-amber-800/40 flex items-center justify-center text-3xl opacity-75",
              children: "🏛️"
            }), i.jsx("div", {
              className: "text-xs uppercase tracking-widest font-bold text-amber-900/80",
              children: "Academy Stars 3 • Reading Department of Detectives"
            }), i.jsx("h3", {
              className: "text-2xl sm:text-3xl font-black font-detective text-amber-950",
              children: "Master Detective Certificate"
            }), i.jsx("p", {
              className: "text-sm italic text-amber-900",
              children: "This prestigious credential certifies that"
            }), i.jsx("div", {
              className: "text-2xl sm:text-3xl font-bold font-detective text-amber-900 underline decoration-amber-600 decoration-2 underline-offset-8",
              children: y || "Special Junior Inspector"
            }), i.jsxs("p", {
              className: "text-sm text-amber-900/90 max-w-md mx-auto leading-relaxed",
              children: ["has successfully investigated ", i.jsx("strong", {
                children: "The Race"
              }), " and ", i.jsx("strong", {
                children: "The Wind and the Sun"
              }), ", cracked all comparative clues, and fully restored the two missing moral truths."]
            }), i.jsx("div", {
              className: "flex justify-center gap-1 text-amber-500",
              children: [...Array(5)].map((P, D) => i.jsx(ui, {
                className: "w-6 h-6 fill-amber-500"
              }, D))
            }), i.jsxs("div", {
              className: "pt-4 border-t border-amber-800/30 flex justify-between items-center text-xs text-amber-900/80",
              children: [i.jsxs("div", {
                children: [i.jsx("span", {
                  className: "font-bold",
                  children: "Score:"
                }), " 8 / 8 Clues Solved"]
              }), i.jsxs("div", {
                children: [i.jsx("span", {
                  className: "font-bold",
                  children: "Badge:"
                }), " Chief Fable Investigator"]
              })]
            })]
          }), i.jsxs("div", {
            className: "flex justify-center gap-3",
            children: [i.jsxs("button", {
              onClick: Y,
              className: "px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer",
              children: [i.jsx(y0, {
                className: "w-4 h-4"
              }), i.jsx("span", {
                children: "Print Certificate"
              })]
            }), i.jsxs("button", {
              onClick: () => {
                B.playClick(), z()
              },
              className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer",
              children: [i.jsx("span", {
                children: "Proceed to Reflection (Stage 5)"
              }), i.jsx(nl, {
                className: "w-4 h-4"
              })]
            })]
          })]
        }) : i.jsxs("button", {
          onClick: O,
          className: "px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base uppercase tracking-wider flex items-center justify-center gap-3 mx-auto shadow-2xl shadow-amber-500/30 transform hover:scale-105 transition-all cursor-pointer font-detective",
          children: [i.jsx(Ax, {
            className: "w-6 h-6"
          }), i.jsx("span", {
            children: "Apply Official Stamp: Case Closed!"
          }), i.jsx(Bt, {
            className: "w-5 h-5 text-amber-950"
          })]
        })
      })]
    })
  },
  Ux = ({
    detectiveName: y,
    onProceedToHomework: b
  }) => {
    const [z, d] = usePersisted("refFluency", 0), [R, O] = usePersisted("refGrammar", 0), [Y, P] = usePersisted("refMoral", 0), [D, T] = usePersisted("refHero", ""), [X, _] = usePersisted("refNote", ""), [L, ne] = usePersisted("refSaved", !1), ce = $ => {
      $.preventDefault(), B.playSuccess(), ne(!0)
    };
    return i.jsxs("div", {
      className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn",
      children: [i.jsxs("div", {
        className: "text-center space-y-2",
        children: [i.jsxs("div", {
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold",
          children: [i.jsx(Bt, {
            className: "w-4 h-4 text-purple-400"
          }), i.jsx("span", {
            children: "Stage 5: Detective Reflection & Self-Evaluation"
          })]
        }), i.jsx("h2", {
          className: "text-3xl sm:text-4xl font-black font-detective text-amber-300",
          children: "Case Debrief & Personal Reflection"
        }), i.jsxs("p", {
          className: "text-slate-300 text-sm max-w-xl mx-auto",
          children: ["Every great investigator reflects on the case. How did your reading fluency and adjective deduction perform today, Detective ", y || "Inspector", "?"]
        })]
      }), i.jsxs("form", {
        onSubmit: ce,
        className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6",
        children: [i.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: [i.jsxs("div", {
            className: "bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3",
            children: [i.jsxs("div", {
              className: "text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center justify-between",
              children: [i.jsx("span", {
                children: "Reading Fluency"
              }), i.jsxs("span", {
                className: "text-xs text-slate-400 font-mono",
                children: [z, "/5"]
              })]
            }), i.jsx("p", {
              className: "text-xs text-slate-300",
              children: "I read smoothly, paused at full stops, and chunked tricky words."
            }), i.jsx("div", {
              className: "flex gap-1.5 pt-1",
              children: [1, 2, 3, 4, 5].map($ => i.jsx("button", {
                type: "button",
                onClick: () => {
                  B.playClick(), d($)
                },
                className: "p-1 transition-transform hover:scale-110",
                children: i.jsx(ui, {
                  className: `w-6 h-6 ${$<=z?"fill-amber-400 text-amber-400":"text-slate-700"}`
                })
              }, $))
            })]
          }), i.jsxs("div", {
            className: "bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3",
            children: [i.jsxs("div", {
              className: "text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center justify-between",
              children: [i.jsx("span", {
                children: "Comparatives & Superlatives"
              }), i.jsxs("span", {
                className: "text-xs text-slate-400 font-mono",
                children: [R, "/5"]
              })]
            }), i.jsx("p", {
              className: "text-xs text-slate-300",
              children: "I know when to use -er than and the -est (faster, slower, stronger)."
            }), i.jsx("div", {
              className: "flex gap-1.5 pt-1",
              children: [1, 2, 3, 4, 5].map($ => i.jsx("button", {
                type: "button",
                onClick: () => {
                  B.playClick(), O($)
                },
                className: "p-1 transition-transform hover:scale-110",
                children: i.jsx(ui, {
                  className: `w-6 h-6 ${$<=R?"fill-emerald-400 text-emerald-400":"text-slate-700"}`
                })
              }, $))
            })]
          }), i.jsxs("div", {
            className: "bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3",
            children: [i.jsxs("div", {
              className: "text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center justify-between",
              children: [i.jsx("span", {
                children: "Moral Comprehension"
              }), i.jsxs("span", {
                className: "text-xs text-slate-400 font-mono",
                children: [Y, "/5"]
              })]
            }), i.jsx("p", {
              className: "text-xs text-slate-300",
              children: "I understand why patience and kindness win in real life."
            }), i.jsx("div", {
              className: "flex gap-1.5 pt-1",
              children: [1, 2, 3, 4, 5].map($ => i.jsx("button", {
                type: "button",
                onClick: () => {
                  B.playClick(), P($)
                },
                className: "p-1 transition-transform hover:scale-110",
                children: i.jsx(ui, {
                  className: `w-6 h-6 ${$<=Y?"fill-sky-400 text-sky-400":"text-slate-700"}`
                })
              }, $))
            })]
          })]
        }), i.jsxs("div", {
          className: "space-y-3 pt-2",
          children: [i.jsx("label", {
            className: "block text-xs font-bold uppercase tracking-wider text-amber-300",
            children: "Which character's victory inspired you more today?"
          }), i.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [i.jsx("button", {
              type: "button",
              onClick: () => {
                B.playClick(), T("tortoise")
              },
              className: `p-4 rounded-2xl border text-left transition-all ${D==="tortoise"?"bg-amber-950/40 border-amber-400 ring-2 ring-amber-400/50":"bg-slate-950/50 border-slate-800 hover:border-slate-700"}`,
              children: i.jsxs("div", {
                className: "flex items-center gap-3",
                children: [i.jsx("span", {
                  className: "text-3xl",
                  children: "🐢"
                }), i.jsxs("div", {
                  children: [i.jsx("div", {
                    className: "font-bold text-sm text-white",
                    children: "The Clever & Patient Tortoise"
                  }), i.jsx("p", {
                    className: "text-xs text-slate-300 mt-0.5",
                    children: '"I walked slowly, but I never stopped!" Steady work always beats lazy talent.'
                  })]
                })]
              })
            }), i.jsx("button", {
              type: "button",
              onClick: () => {
                B.playClick(), T("sun")
              },
              className: `p-4 rounded-2xl border text-left transition-all ${D==="sun"?"bg-amber-950/40 border-amber-400 ring-2 ring-amber-400/50":"bg-slate-950/50 border-slate-800 hover:border-slate-700"}`,
              children: i.jsxs("div", {
                className: "flex items-center gap-3",
                children: [i.jsx("span", {
                  className: "text-3xl",
                  children: "☀️"
                }), i.jsxs("div", {
                  children: [i.jsx("div", {
                    className: "font-bold text-sm text-white",
                    children: "The Warm & Gentle Sun"
                  }), i.jsx("p", {
                    className: "text-xs text-slate-300 mt-0.5",
                    children: '"Warmth is stronger than fury!" Kindness opens hearts where yelling fails.'
                  })]
                })]
              })
            })]
          })]
        }), i.jsxs("div", {
          className: "space-y-2",
          children: [i.jsxs("label", {
            className: "block text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2",
            children: [i.jsx(Sx, {
              className: "w-4 h-4 text-amber-400"
            }), i.jsx("span", {
              children: "Detective's Case Journal Note (Моя главная мысль урока):"
            })]
          }), i.jsx("textarea", {
            value: X,
            onChange: $ => _($.target.value),
            placeholder: "Write 1-2 sentences: What did you learn today? E.g., Today I learned that being patient and kind is much stronger than rushing and shouting.",
            rows: 3,
            className: "w-full bg-slate-950 border border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          })]
        }), i.jsxs("div", {
          className: "pt-2 flex flex-col sm:flex-row items-center justify-between gap-4",
          children: [L ? i.jsxs("div", {
            className: "flex items-center gap-2 text-emerald-400 font-bold text-sm",
            children: [i.jsx(Mx, {
              className: "w-5 h-5"
            }), i.jsx("span", {
              children: "Reflection Logged in Official Case Records!"
            })]
          }) : i.jsxs("button", {
            type: "submit",
            className: "px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer font-detective",
            children: [i.jsx(Uu, {
              className: "w-4 h-4"
            }), i.jsx("span", {
              children: "Save Reflection"
            })]
          }), i.jsxs("button", {
            type: "button",
            onClick: () => {
              B.playClick(), b()
            },
            className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer",
            children: [i.jsx("span", {
              children: "Proceed to Homework Assignment (Домашка)"
            }), i.jsx(nl, {
              className: "w-4 h-4"
            })]
          })]
        })]
      })]
    })
  },
  Jd = [{
    id: "mission-1",
    title: "Mission 1: The Fast Runner & The Patient Walker",
    storyTitle: "The Race",
    bookPage: 92,
    coverImage: "images/story_the_race.jpg",
    clueBadge: {
      word: "faster & slower",
      icon: "faster",
      color: "purple"
    },
    paragraphs: [{
      id: 1,
      text: "Once upon a time, there was a rabbit and a tortoise. The rabbit said to the tortoise, 'You're the slowest animal in the wood and I'm the fastest!' The tortoise was slow, but he was clever! The tortoise said, 'Let's have a race!' The rabbit was happy. He liked racing.",
      audioCue: "Paragraph 1: The challenge begins in the wood.",
      keyVocabulary: [{
        word: "slowest",
        translation: "самый медленный",
        note: "Superlative of slow"
      }, {
        word: "fastest",
        translation: "самый быстрый",
        note: "Superlative of fast"
      }, {
        word: "clever",
        translation: "умный",
        note: "Smart and quick-thinking"
      }]
    }, {
      id: 2,
      text: "The rabbit hopped quickly, quickly, quickly, and the tortoise walked slowly, slowly, slowly. The rabbit thought, 'This is easy. I'm much faster than that slow, old tortoise! And I'm hungry!' So he sat down under a big tree. He ate carrot sandwiches and drank a cup of tea. 'Yummy, that was good!' said the rabbit. But then the rabbit was sleepy and he fell asleep. The tortoise walked slowly past the rabbit. 'Hmm,' he thought. 'Look at the rabbit sleeping. I'm walking slowly, but I'm not tired!'",
      audioCue: "Paragraph 2: Rabbit takes a nap while Tortoise keeps walking.",
      keyVocabulary: [{
        word: "faster than",
        translation: "быстрее чем",
        note: "Comparative adjective"
      }, {
        word: "hopped quickly",
        translation: "скакал быстро",
        note: "Adverb of manner"
      }, {
        word: "carrot sandwiches",
        translation: "морковные сэндвичи",
        note: "The rabbit's delicious snack"
      }]
    }, {
      id: 3,
      text: "Suddenly, the rabbit woke up. 'Oh no! I was asleep for a long time.' The rabbit hopped quickly, quickly, quickly, but do you know who was at the finishing line? The tortoise! 'Ha! Ha!' laughed all the animals. 'The tortoise is the winner!' The rabbit laughed, too. 'Yes, well done, Tortoise!'",
      audioCue: "Paragraph 3: Tortoise crosses the finish line first!",
      keyVocabulary: [{
        word: "finishing line",
        translation: "финишная черта",
        note: "The end of the race"
      }, {
        word: "the winner",
        translation: "победитель",
        note: "Who wins first place"
      }, {
        word: "well done",
        translation: "молодец",
        note: "Praising a good effort"
      }]
    }],
    tasks: {
      task1_tf: {
        title: "Detective Clue Check: True or False?",
        instruction: "Inspect the evidence from page 92. Are these 7 statements True or False?",
        items: [{
          id: 1,
          statement: "The rabbit told the tortoise that he was the slowest animal in the wood.",
          isTrue: !0,
          evidence: "The rabbit said, 'You're the slowest animal in the wood...'"
        }, {
          id: 2,
          statement: "The tortoise was fast, but not very clever.",
          isTrue: !1,
          evidence: "Text says: 'The tortoise was slow, but he was clever!'"
        }, {
          id: 3,
          statement: "The tortoise suggested having a race.",
          isTrue: !0,
          evidence: "The tortoise said, 'Let's have a race!'"
        }, {
          id: 4,
          statement: "The rabbit sat down under a small bush to eat apples.",
          isTrue: !1,
          evidence: "Rabbit sat under a big tree and ate carrot sandwiches with tea."
        }, {
          id: 5,
          statement: "The rabbit fell asleep after eating his carrot sandwiches.",
          isTrue: !0,
          evidence: "'...then the rabbit was sleepy and he fell asleep.'"
        }, {
          id: 6,
          statement: "The tortoise stopped walking because he felt very tired.",
          isTrue: !1,
          evidence: "Tortoise thought: 'I'm walking slowly, but I'm not tired!'"
        }, {
          id: 7,
          statement: "When the tortoise won, the rabbit got angry and cried.",
          isTrue: !1,
          evidence: "Text says: 'The rabbit laughed, too. Yes, well done, Tortoise!'"
        }]
      },
      task2_comparatives: {
        title: "Grammar Clues: Comparative & Superlative Cards",
        instruction: "Choose the correct comparative or superlative form for each of the 7 detective statements.",
        items: [{
          id: 1,
          sentencePre: "The rabbit said, 'I am the",
          sentencePost: "animal in the wood!'",
          options: ["faster", "fastest", "cleverer"],
          correctAnswer: "fastest",
          explanation: "We use 'the fastest' because he is comparing himself to all animals in the wood (superlative)."
        }, {
          id: 2,
          sentencePre: "The rabbit thought he was much",
          sentencePost: "than the tortoise.",
          options: ["fast", "faster", "fastest"],
          correctAnswer: "faster",
          explanation: "Comparing two animals: 'faster than'."
        }, {
          id: 3,
          sentencePre: "The tortoise was",
          sentencePost: "than the rabbit, but he kept moving.",
          options: ["slower", "slowest", "slow"],
          correctAnswer: "slower",
          explanation: "Comparative with 'than': slower than."
        }, {
          id: 4,
          sentencePre: "The rabbit said the tortoise was the",
          sentencePost: "animal in the wood.",
          options: ["slower", "slowest", "slow"],
          correctAnswer: "slowest",
          explanation: "Superlative with 'the': the slowest."
        }, {
          id: 5,
          sentencePre: "Even though he walked slowly, the tortoise was",
          sentencePost: "than the sleeping rabbit.",
          options: ["cleverer", "cleverest", "clever"],
          correctAnswer: "cleverer",
          explanation: "Comparative: cleverer than (he did not stop to sleep!)."
        }, {
          id: 6,
          sentencePre: "Between the two animals, who hopped",
          sentencePost: "? The rabbit!",
          options: ["faster", "fastest", "slowest"],
          correctAnswer: "faster",
          explanation: "Comparative between two: hopped faster."
        }, {
          id: 7,
          sentencePre: "In the end, the patient tortoise was the",
          sentencePost: "racer to cross the finish line!",
          options: ["first", "fastest", "slower"],
          correctAnswer: "fastest",
          explanation: "Superlative: first / fastest to cross."
        }]
      },
      task3_sequencing: {
        title: "Timeline Reconstruction: Put Events in Order",
        instruction: "Drag or select numbers (1 to 6) to arrange the story events into the correct chronological order.",
        items: [{
          id: "e1",
          text: "The rabbit boasted that he was the fastest animal in the wood.",
          correctPos: 1
        }, {
          id: "e2",
          text: "The tortoise challenged the rabbit to a race.",
          correctPos: 2
        }, {
          id: "e3",
          text: "The rabbit stopped to eat carrot sandwiches and drink tea.",
          correctPos: 3
        }, {
          id: "e4",
          text: "The rabbit fell asleep under the big shady tree.",
          correctPos: 4
        }, {
          id: "e5",
          text: "The tortoise walked slowly past the sleeping rabbit without stopping.",
          correctPos: 5
        }, {
          id: "e6",
          text: "The tortoise reached the finish line and all the animals cheered.",
          correctPos: 6
        }]
      },
      task4_matching: {
        title: "Witness Evidence: Who Did or Said What?",
        instruction: "Match each clue statement or action (1 to 7) to the right character (Rabbit, Tortoise, or All Animals).",
        items: [{
          id: "m1",
          left: "'You're the slowest animal in the wood and I'm the fastest!'",
          right: "The Rabbit"
        }, {
          id: "m2",
          left: "'Let's have a race!'",
          right: "The Tortoise"
        }, {
          id: "m3",
          left: "Ate delicious carrot sandwiches and drank tea under a tree.",
          right: "The Rabbit"
        }, {
          id: "m4",
          left: "'I'm walking slowly, but I'm not tired!'",
          right: "The Tortoise"
        }, {
          id: "m5",
          left: "Fell asleep because he felt very sleepy after eating.",
          right: "The Rabbit"
        }, {
          id: "m6",
          left: "'Ha! Ha! The tortoise is the winner!'",
          right: "All the Animals"
        }, {
          id: "m7",
          left: "'Yes, well done, Tortoise!' (good sport)",
          right: "The Rabbit"
        }]
      }
    },
    moralFragments: [{
      fragmentId: 1,
      text: "Slow and steady...",
      unlockedByTask: 1
    }, {
      fragmentId: 2,
      text: "...wins the race!",
      unlockedByTask: 2
    }, {
      fragmentId: 3,
      text: "Being clever and patient...",
      unlockedByTask: 3
    }, {
      fragmentId: 4,
      text: "...is better than being fast and careless!",
      unlockedByTask: 4
    }],
    finalMoral: "Slow and steady wins the race. Being clever and patient is better than being fast and careless!",
    moralMeaningRu: "Тише едешь — дальше будешь. Терпение и постоянство побеждают хвастовство и лень!",
    moralMeaningEn: "Consistency and patience beat raw speed when speed gets lazy or overconfident!"
  }, {
    id: "mission-2",
    title: "Mission 2: The Mighty Gale & The Warm Beams",
    storyTitle: "The wind and the sun",
    bookPage: 93,
    coverImage: "images/story_wind_and_sun.jpg",
    clueBadge: {
      word: "stronger & cleverer",
      icon: "stronger",
      color: "blue"
    },
    paragraphs: [{
      id: 1,
      text: "This is a story about the wind and the sun. It was a cold day and a man with a coat, a hat and a scarf was in the park. The wind and the sun saw the man. 'I'm stronger than you!' said the wind. 'I can make that man take off his coat.' 'Ha! Ha!' said the sun. 'I don't think so. Let's have a competition! First, you try. Then it's my turn.'",
      audioCue: "Paragraph 1: The contest in the park begins.",
      keyVocabulary: [{
        word: "stronger than",
        translation: "сильнее чем",
        note: "Comparative of strong"
      }, {
        word: "competition",
        translation: "соревнование",
        note: "A test of who is better"
      }, {
        word: "take off",
        translation: "снять (одежду)",
        note: "Opposite of put on"
      }]
    }, {
      id: 2,
      text: "The sun went behind a cloud and the wind blew and blew. The man held onto his hat, his scarf and his coat. The wind was cold and strong but the man's coat, hat and scarf stayed on.",
      audioCue: "Paragraph 2: The wind blows hard, but fails.",
      keyVocabulary: [{
        word: "blew and blew",
        translation: "дул и дул",
        note: "Past of blow"
      }, {
        word: "held onto",
        translation: "держался за",
        note: "Holding tight against the gust"
      }, {
        word: "stayed on",
        translation: "остались на нем",
        note: "Did not come off"
      }]
    }, {
      id: 3,
      text: "'Now it's my turn,' said the sun. The sun shone brightly. The man took off his scarf. 'It's so warm and sunny!' he said. Then he took off his hat. 'It's so warm and sunny!' he said. Then he took off his coat. 'What a beautiful sunny day!' said the man. The sun was very warm. 'Hooray! I'm the winner!' said the sun, and the wind said, 'Yes, you're the winner. Well done, Sun.'",
      audioCue: "Paragraph 3: Warm sunshine wins the competition!",
      keyVocabulary: [{
        word: "shone brightly",
        translation: "ярко сияло",
        note: "Past of shine"
      }, {
        word: "warm and sunny",
        translation: "тепло и солнечно",
        note: "Gentle weather"
      }, {
        word: "the winner",
        translation: "победитель",
        note: "The sun won fair and square"
      }]
    }],
    tasks: {
      task1_tf: {
        title: "Detective Clue Check: Fact Verification",
        instruction: "Inspect the details from page 93. Are these 7 statements True or False?",
        items: [{
          id: 1,
          statement: "The man in the park was wearing a coat, a hat, and a scarf.",
          isTrue: !0,
          evidence: "'...a man with a coat, a hat and a scarf was in the park.'"
        }, {
          id: 2,
          statement: "The wind said, 'I'm warmer than you!'",
          isTrue: !1,
          evidence: "The wind claimed: 'I'm stronger than you!'"
        }, {
          id: 3,
          statement: "The sun proposed having a competition.",
          isTrue: !0,
          evidence: "The sun said: 'Let's have a competition! First, you try.'"
        }, {
          id: 4,
          statement: "When the wind blew hard, the man immediately took off his coat.",
          isTrue: !1,
          evidence: "The man held onto his coat, and it stayed on."
        }, {
          id: 5,
          statement: "The harder the wind blew, the tighter the man held his clothes.",
          isTrue: !0,
          evidence: "'The man held onto his hat, his scarf and his coat.'"
        }, {
          id: 6,
          statement: "The sun made the day very cold and rainy.",
          isTrue: !1,
          evidence: "The sun shone brightly and made it warm and sunny."
        }, {
          id: 7,
          statement: "In the end, the wind agreed that the sun was the winner.",
          isTrue: !0,
          evidence: "The wind said: 'Yes, you're the winner. Well done, Sun.'"
        }]
      },
      task2_comparatives: {
        title: "Deductive Gap-Fill: Adjectives in Action",
        instruction: "Fill in the missing words (7 items) with the correct comparative or key form.",
        items: [{
          id: 1,
          sentencePre: "The wind believed it was",
          sentencePost: "than the gentle sun.",
          options: ["stronger", "strongest", "weaker"],
          correctAnswer: "stronger",
          explanation: "Comparative: 'stronger than'."
        }, {
          id: 2,
          sentencePre: "The sunshine was much",
          sentencePost: "than the freezing wind.",
          options: ["warmer", "warmest", "colder"],
          correctAnswer: "warmer",
          explanation: "Comparative: 'warmer than'."
        }, {
          id: 3,
          sentencePre: "The wind's blast was",
          sentencePost: "than the sun's gentle rays, but it didn't work.",
          options: ["colder", "coldest", "warm"],
          correctAnswer: "colder",
          explanation: "Comparative: colder than."
        }, {
          id: 4,
          sentencePre: "The sun proved that kindness was",
          sentencePost: "than brute force.",
          options: ["cleverer", "cleverest", "slow"],
          correctAnswer: "cleverer",
          explanation: "Comparative: cleverer / smarter approach."
        }, {
          id: 5,
          sentencePre: "The sun is the",
          sentencePost: "of the two competitors.",
          options: ["winner", "loser", "loudest"],
          correctAnswer: "winner",
          explanation: "The sun succeeded in making the man remove his coat."
        }, {
          id: 6,
          sentencePre: "As the sun shone, the weather became",
          sentencePost: "and warmer.",
          options: ["warmer", "colder", "darker"],
          correctAnswer: "warmer",
          explanation: "'warmer and warmer' shows progressive increase."
        }, {
          id: 7,
          sentencePre: "The wind was strong, but the sun's method was",
          sentencePost: "effective.",
          options: ["more", "less", "least"],
          correctAnswer: "more",
          explanation: "The sun's approach was more effective."
        }]
      },
      task3_sequencing: {
        title: "Sequence of the Contest: Order the Steps",
        instruction: "Put the 6 stages of the competition in the right order from 1 to 6.",
        items: [{
          id: "s1",
          text: "The wind and the sun spot a man wearing a coat, hat, and scarf in the park.",
          correctPos: 1
        }, {
          id: "s2",
          text: "The wind boasts that he is stronger and challenges the sun to a contest.",
          correctPos: 2
        }, {
          id: "s3",
          text: "The sun hides behind a cloud while the wind blows with icy force.",
          correctPos: 3
        }, {
          id: "s4",
          text: "The man holds his clothes tightly; his coat stays on.",
          correctPos: 4
        }, {
          id: "s5",
          text: "The sun comes out and shines brightly, warming the air.",
          correctPos: 5
        }, {
          id: "s6",
          text: "The man smiles and takes off his scarf, his hat, and his coat.",
          correctPos: 6
        }]
      },
      task4_matching: {
        title: "Cause & Effect Deductions",
        instruction: "Connect the action or statement to the correct result or speaker.",
        items: [{
          id: "c1",
          left: "Wind blows fiercely with cold gusts",
          right: "Man clutches his coat tightly"
        }, {
          id: "c2",
          left: "Sun shines brightly and warm",
          right: "Man happily takes off his clothes"
        }, {
          id: "c3",
          left: "'I can make that man take off his coat.'",
          right: "The Wind's boast"
        }, {
          id: "c4",
          left: "'Let's have a competition!'",
          right: "The Sun's proposal"
        }, {
          id: "c5",
          left: "First item taken off by the man",
          right: "His warm scarf"
        }, {
          id: "c6",
          left: "Last item taken off by the man",
          right: "His heavy coat"
        }, {
          id: "c7",
          left: "'Yes, you're the winner. Well done, Sun.'",
          right: "The Wind admits defeat"
        }]
      }
    },
    moralFragments: [{
      fragmentId: 1,
      text: "Gentleness and warmth...",
      unlockedByTask: 1
    }, {
      fragmentId: 2,
      text: "...are much stronger...",
      unlockedByTask: 2
    }, {
      fragmentId: 3,
      text: "...than cold force and anger.",
      unlockedByTask: 3
    }, {
      fragmentId: 4,
      text: "Kindness always wins!",
      unlockedByTask: 4
    }],
    finalMoral: "Gentleness and warmth are much stronger than cold force and anger. Kindness always wins!",
    moralMeaningRu: "Доброта и мягкость сильнее грубой силы и гнева. Лаской можно добиться того, чего не добьешься силой!",
    moralMeaningEn: "Kindness and gentleness achieve what shouting and rough force can never accomplish."
  }],
  Wd = [{
    id: "comp-sup-short",
    category: "Grammar Rule",
    title: "Short Adjectives: Comparative & Superlative",
    ruleEn: "Add -er (+ than) when comparing TWO things. Add the + -est when comparing THREE or MORE things.",
    ruleRu: "Для коротких прилагательных (1 слог): добавляем -er (+ than) для сравнения ДВУХ предметов. Добавляем the + -est для превосходной степени.",
    pattern: "adj + er (+ than) | the + adj + est",
    examples: [{
      base: "fast",
      comp: "faster (than)",
      sup: "the fastest",
      note: "Rabbit hopped faster"
    }, {
      base: "slow",
      comp: "slower (than)",
      sup: "the slowest",
      note: "Tortoise walked slower"
    }, {
      base: "strong",
      comp: "stronger (than)",
      sup: "the strongest",
      note: "Wind claimed to be stronger"
    }, {
      base: "clever",
      comp: "cleverer (than)",
      sup: "the cleverest",
      note: "Tortoise was cleverer"
    }, {
      base: "warm",
      comp: "warmer (than)",
      sup: "the warmest",
      note: "Sun was warmer than wind"
    }, {
      base: "cold",
      comp: "colder (than)",
      sup: "the coldest",
      note: "Wind was colder"
    }],
    textbookEvidence: ["Page 92: 'You're the slowest animal in the wood and I'm the fastest!'", "Page 92: 'I'm much faster than that slow, old tortoise!'", "Page 93: 'I'm stronger than you!' said the wind."]
  }, {
    id: "spelling-secrets",
    category: "Spelling Secret",
    title: "Detective Spelling Clues",
    ruleEn: "Special spelling cases for short adjectives:",
    ruleRu: "Особые правила написания при добавлении -er / -est:",
    pattern: "Silent -e -> +r/+st | CVC (consonant-vowel-consonant) -> double letter!",
    examples: [{
      base: "nice",
      comp: "nicer",
      sup: "the nicest",
      note: "Ends in -e -> just add -r / -st"
    }, {
      base: "big",
      comp: "bigger",
      sup: "the biggest",
      note: "b-i-g (CVC) -> double g"
    }, {
      base: "hot",
      comp: "hotter",
      sup: "the hottest",
      note: "h-o-t (CVC) -> double t"
    }],
    textbookEvidence: ["Page 92: 'So he sat down under a big tree.' -> bigger than"]
  }, {
    id: "fluency-tips",
    category: "Reading Fluency",
    title: "Detective Reading Fluency Tips",
    ruleEn: "How to read like a top detective without stumbling:",
    ruleRu: "Подсказки по беглому чтению (что делать, если споткнулся на слове):",
    pattern: "Pause & Chunk -> Sound it out -> Connect the phrase -> Read with expression!",
    examples: [{
      base: "1. Chunking",
      comp: "un-der-stand",
      sup: "car-rot sand-wich-es",
      note: "Break long words into syllables."
    }, {
      base: "2. Expressive Punctuation",
      comp: "!",
      sup: "?",
      note: "Make excitement on ! and lift tone on ?"
    }, {
      base: "3. Meaning Groups",
      comp: "hop-hop-hop",
      sup: "walked slowly past",
      note: "Read 2-3 words together, not word by word."
    }],
    textbookEvidence: ["Page 92: Notice repetition: 'quickly, quickly, quickly' vs 'slowly, slowly, slowly' — say quickly fast and slowly drawn out!", "Page 93: Notice quotes: 'I'm stronger than you!' (bravado voice) vs 'It's so warm and sunny!' (relaxed sigh)."]
  }],
  $e = {
    title: "Detective Headquarters: Homework Assignment",
    subtitle: "Academy Stars 3, Unit 7 Reading Time 3 Practice File",
    section1_retell: {
      title: "Part 1: Story Retelling Scaffold (8 Key Clue Cards)",
      instructions: "Use these 8 prompt cards to retell 'The Race' or 'The Wind and the Sun' to your teacher or family in under 2 minutes!",
      prompts: [{
        num: 1,
        starter: "Once upon a time...",
        hint: "Introduce rabbit and tortoise or wind and sun."
      }, {
        num: 2,
        starter: "The rabbit said...",
        hint: "'I am the fastest, you are the slowest!'"
      }, {
        num: 3,
        starter: "During the race, the rabbit stopped to...",
        hint: "Eat carrot sandwiches and drink tea."
      }, {
        num: 4,
        starter: "While the rabbit was sleeping, the tortoise...",
        hint: "Walked slowly, slowly past him without stopping."
      }, {
        num: 5,
        starter: "At the finishing line...",
        hint: "The tortoise was the winner! All animals cheered."
      }, {
        num: 6,
        starter: "In the second fable, the wind boasted...",
        hint: "'I am stronger than you! I can blow off his coat.'"
      }, {
        num: 7,
        starter: "The wind blew cold and hard, but the man...",
        hint: "Held onto his coat and scarf tightly."
      }, {
        num: 8,
        starter: "Then the sun shone brightly and warmly, so...",
        hint: "The man smiled and took off his scarf, hat, and coat!"
      }]
    },
    section2_sentences: {
      title: "Part 2: Comparative Detective Sentence Writing",
      instructions: "Write your own sentences using the 4 magical detective clue words from the lesson cover:",
      clues: [{
        word: "faster",
        template: "A cheetah / rabbit is faster than _______."
      }, {
        word: "slower",
        template: "A snail / tortoise is slower than _______."
      }, {
        word: "stronger",
        template: "Kindness is stronger than _______."
      }, {
        word: "cleverer",
        template: "A patient student is cleverer than _______."
      }]
    },
    section3_scenarios: {
      title: "Part 3: Match the Moral to Real-Life Mystery Cases",
      instructions: "Read the 3 modern real-life scenarios and match which moral solves the mystery (Moral 1 or Moral 2).",
      scenarios: [{
        id: "sc1",
        title: "Case of the Rushed Maths Test",
        story: "Leo rushed through his 20 maths problems in 3 minutes and got 5 mistakes. Max worked slowly, checked every calculation carefully, and got 100%.",
        correctMoral: 1,
        moralMatch: "Moral 1: Slow and steady wins the race. Patience beats careless speed!"
      }, {
        id: "sc2",
        title: "Case of the Frightened Kitten",
        story: "Tom shouted loudly and pulled roughly to make a scared kitten come out from under the sofa, but it hid deeper. Emma sat down quietly, spoke gently, and offered a warm treat. The kitten purred and walked out.",
        correctMoral: 2,
        moralMatch: "Moral 2: Gentleness and warmth are stronger than cold force and shouting!"
      }, {
        id: "sc3",
        title: "Case of the Messy Bedroom",
        story: "Dan tried to clean his whole room in 30 seconds by kicking everything under the bed. Anna put away one toy box at a time calmly and neatly. By dinner, Anna's room was spotless.",
        correctMoral: 1,
        moralMatch: "Moral 1: Slow and steady wins the race. Steady effort beats rushed mess!"
      }]
    },
    section4_fluency_audio: {
      title: "Part 4: Fluency Audio Challenge (Textbook Paragraph)",
      instructions: "Practice reading Paragraph 2 of 'The Race' or 'The Wind and the Sun'. Use the built-in timer and self-recording checklist to test your speed, expression, and pauses!",
      targetText: "The rabbit hopped quickly, quickly, quickly, and the tortoise walked slowly, slowly, slowly. The rabbit thought, 'This is easy. I'm much faster than that slow, old tortoise! And I'm hungry!' So he sat down under a big tree. He ate carrot sandwiches and drank a cup of tea. 'Yummy, that was good!' said the rabbit. But then the rabbit was sleepy and he fell asleep.",
      wordCount: 68,
      targetTime: "40–50 seconds"
    }
  },
  Hx = () => {
    const [y, b] = I.useState(!1), [z, d] = usePersisted("hwMorals", {}), [R, O] = usePersisted("hwMoralsChecked", !1), [Y, P] = usePersisted("hwSentences", {
      faster: "",
      slower: "",
      stronger: "",
      cleverer: ""
    }), [D, T] = I.useState(!1), [X, _] = I.useState(0), [L, ne] = I.useState(!1);
    I.useEffect(() => {
      let ee;
      return D && (ee = setInterval(() => {
        _(Se => Se + 1)
      }, 1e3)), () => clearInterval(ee)
    }, [D]);
    const ce = () => {
        B.playClick(), D ? (T(!1), ne(!0), B.playSuccess()) : (_(0), T(!0), ne(!1))
      },
      $ = () => {
        B.playClick(), B.speak($e.section4_fluency_audio.targetText)
      },
      ae = () => {
        B.playClick();
        const ee = `
ACADEMY STARS 3 - UNIT 7 READING TIME 3 HOMEWORK FILE
The Case of the Missing Morals

PART 1: RETELLING SCAFFOLD (8 Prompts)
${$e.section1_retell.prompts.map(Se=>`${Se.num}. ${Se.starter} (${Se.hint})`).join(`
`)}

PART 2: COMPARATIVE SENTENCES
- faster: ${Y.faster}
- slower: ${Y.slower}
- stronger: ${Y.stronger}
- cleverer: ${Y.cleverer}

PART 3: REAL-LIFE SCENARIOS
${$e.section3_scenarios.scenarios.map(Se=>`- ${Se.title} -> ${z[Se.id]===1?"Moral 1":z[Se.id]===2?"Moral 2":"(not chosen yet)"}`).join("\n")}

PART 4: FLUENCY READING
Target text read in ${X} seconds with natural pauses and expression.
    `.trim();
        navigator.clipboard.writeText(ee).then(() => {
          b(!0), setTimeout(() => b(!1), 2500)
        })
      };
    return i.jsxs("div", {
      className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn",
      children: [i.jsxs("div", {
        className: "bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
        children: [i.jsxs("div", {
          children: [i.jsxs("div", {
            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-2",
            children: [i.jsx(xx, {
              className: "w-3.5 h-3.5"
            }), i.jsx("span", {
              children: "Dedicated Homework Mission File"
            })]
          }), i.jsx("h2", {
            className: "text-2xl sm:text-3xl font-black font-detective text-amber-300",
            children: $e.title
          }), i.jsxs("p", {
            className: "text-xs sm:text-sm text-slate-300 mt-1",
            children: [$e.subtitle, " • Complete these 4 missions to master reading fluency and comparatives!"]
          }), i.jsx("p", {
            className: "text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed",
            children: "Homework: do these tasks in a different way from the lesson — from memory and in your own words. Retell one fable with the prompt cards, write four new comparative sentences, match each real-life case to a moral, and practise reading Paragraph 2 aloud."
          })]
        }), i.jsxs("div", {
          className: "flex gap-2 shrink-0",
          children: [i.jsxs("button", {
            onClick: ae,
            className: "px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow transition-all cursor-pointer",
            children: [y ? i.jsx(a0, {
              className: "w-4 h-4 text-emerald-300"
            }) : i.jsx(yx, {
              className: "w-4 h-4"
            }), i.jsx("span", {
              children: y ? "Copied to Clipboard!" : "Copy Homework Sheet"
            })]
          }), i.jsx("button", {
            onClick: () => window.print(),
            className: "p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700",
            title: "Print Homework",
            children: i.jsx(y0, {
              className: "w-4 h-4"
            })
          })]
        })]
      }), i.jsxs("div", {
        className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-4",
        children: [i.jsxs("div", {
          className: "flex items-center justify-between",
          children: [i.jsxs("div", {
            className: "flex items-center gap-2",
            children: [i.jsx("span", {
              className: "text-xl",
              children: "🎙️"
            }), i.jsx("h3", {
              className: "font-detective font-bold text-amber-300 text-lg",
              children: $e.section1_retell.title
            })]
          }), i.jsx("span", {
            className: "text-xs text-slate-400",
            children: "8 key clue cards"
          })]
        }), i.jsx("p", {
          className: "text-xs text-slate-300",
          children: $e.section1_retell.instructions
        }), i.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2",
          children: $e.section1_retell.prompts.map(ee => i.jsxs("div", {
            className: "p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between",
            children: [i.jsxs("div", {
              children: [i.jsxs("span", {
                className: "w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-xs flex items-center justify-center mb-2",
                children: ["#", ee.num]
              }), i.jsxs("p", {
                className: "text-xs font-bold text-white",
                children: ['"', ee.starter, '"']
              })]
            }), i.jsxs("p", {
              className: "text-[11px] text-slate-400 italic mt-2 border-t border-slate-800/80 pt-1.5",
              children: ["💡 Hint: ", ee.hint]
            })]
          }, ee.num))
        })]
      }), i.jsxs("div", {
        className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-4",
        children: [i.jsxs("div", {
          className: "flex items-center justify-between",
          children: [i.jsxs("div", {
            className: "flex items-center gap-2",
            children: [i.jsx("span", {
              className: "text-xl",
              children: "✍️"
            }), i.jsx("h3", {
              className: "font-detective font-bold text-amber-300 text-lg",
              children: $e.section2_sentences.title
            })]
          }), i.jsx("span", {
            className: "text-xs text-slate-400",
            children: "Interactive Scratchpad"
          })]
        }), i.jsx("p", {
          className: "text-xs text-slate-300",
          children: $e.section2_sentences.instructions
        }), i.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-1",
          children: $e.section2_sentences.clues.map(ee => i.jsxs("div", {
            className: "p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between",
              children: [i.jsx("span", {
                className: "px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30",
                children: ee.word
              }), i.jsx("span", {
                className: "text-[11px] text-slate-400 italic",
                children: ee.template
              })]
            }), i.jsx("input", {
              type: "text",
              value: Y[ee.word] || "",
              onChange: Se => P({
                ...Y,
                [ee.word]: Se.target.value
              }),
              className: "w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
            })]
          }, ee.word))
        })]
      }), i.jsxs("div", {
        className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-4",
        children: [i.jsxs("div", {
          className: "flex items-center justify-between",
          children: [i.jsxs("div", {
            className: "flex items-center gap-2",
            children: [i.jsx("span", {
              className: "text-xl",
              children: "🔍"
            }), i.jsx("h3", {
              className: "font-detective font-bold text-amber-300 text-lg",
              children: $e.section3_scenarios.title
            })]
          }), i.jsx("span", {
            className: "text-xs text-slate-400",
            children: "Modern Situations"
          })]
        }), i.jsx("p", {
          className: "text-xs text-slate-300",
          children: $e.section3_scenarios.instructions
        }), i.jsx("div", {
          className: "space-y-3 pt-1",
          children: $e.section3_scenarios.scenarios.map((ee, Se) => {
            const me = z[ee.id],
              ze = R,
              ke = ze && me === ee.correctMoral;
            return i.jsxs("div", {
              className: `p-4 rounded-2xl border transition-all text-xs sm:text-sm ${ze?ke?"bg-emerald-950/30 border-emerald-500/60":"bg-rose-950/30 border-rose-500/60":"bg-slate-950/70 border-slate-800"}`,
              children: [i.jsxs("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-3",
                children: [i.jsxs("div", {
                  className: "space-y-1 flex-1",
                  children: [i.jsxs("span", {
                    className: "font-bold text-amber-300",
                    children: ["Case #", Se + 1, ": ", ee.title]
                  }), i.jsx("p", {
                    className: "text-slate-300",
                    children: ee.story
                  })]
                }), i.jsxs("div", {
                  className: "flex items-center gap-2 shrink-0",
                  children: [i.jsx("button", {
                    onClick: () => {
                      B.playClick(), d({
                        ...z,
                        [ee.id]: 1
                      }), O(!1)
                    },
                    className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${me===1?"bg-amber-500 text-slate-950":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                    children: "Moral 1 (Patience)"
                  }), i.jsx("button", {
                    onClick: () => {
                      B.playClick(), d({
                        ...z,
                        [ee.id]: 2
                      }), O(!1)
                    },
                    className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${me===2?"bg-sky-500 text-slate-950":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                    children: "Moral 2 (Gentleness)"
                  })]
                })]
              }), ze && i.jsxs("div", {
                className: "mt-2.5 pt-2 border-t border-slate-800 text-[11px] text-slate-400 italic",
                children: ["💡 Match: ", ee.moralMatch]
              })]
            }, ee.id)
          })
        }), i.jsx("div", {
          className: "flex justify-end pt-2",
          children: i.jsxs("button", {
            onClick: () => {
              B.playClick(), O(!0);
              const allOk = $e.section3_scenarios.scenarios.every(Se => z[Se.id] === Se.correctMoral);
              allOk ? B.playSuccess() : B.playError();
            },
            className: "px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5",
            children: [i.jsx(Bt, {
              className: "w-4 h-4"
            }), i.jsx("span", {
              children: "Check Real-Life Matches"
            })]
          })
        })]
      }), i.jsxs("div", {
        className: "bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-4",
        children: [i.jsxs("div", {
          className: "flex items-center justify-between",
          children: [i.jsxs("div", {
            className: "flex items-center gap-2",
            children: [i.jsx("span", {
              className: "text-xl",
              children: "⏱️"
            }), i.jsx("h3", {
              className: "font-detective font-bold text-amber-300 text-lg",
              children: $e.section4_fluency_audio.title
            })]
          }), i.jsxs("span", {
            className: "text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
            children: ["Target: ", $e.section4_fluency_audio.targetTime]
          })]
        }), i.jsx("p", {
          className: "text-xs text-slate-300",
          children: $e.section4_fluency_audio.instructions
        }), i.jsxs("div", {
          className: "p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-100 text-sm leading-relaxed relative",
          children: [i.jsxs("div", {
            className: "flex justify-between items-center mb-2 pb-2 border-b border-amber-500/20",
            children: [i.jsxs("span", {
              className: "text-[11px] font-bold uppercase tracking-wider text-amber-300",
              children: ["The Race • Paragraph 2 (", $e.section4_fluency_audio.wordCount, " words)"]
            }), i.jsxs("button", {
              onClick: $,
              className: "px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1 transition-colors",
              children: [i.jsx(sl, {
                className: "w-3.5 h-3.5"
              }), i.jsx("span", {
                children: "Hear Model Fluency"
              })]
            })]
          }), i.jsxs("p", {
            className: "italic",
            children: ['"', $e.section4_fluency_audio.targetText, '"']
          })]
        }), i.jsxs("div", {
          className: "p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-wrap items-center justify-between gap-4",
          children: [i.jsxs("div", {
            className: "flex items-center gap-4",
            children: [i.jsx("button", {
              onClick: ce,
              className: `p-4 rounded-full font-bold flex items-center justify-center transition-all ${D?"bg-rose-600 text-white animate-pulse ring-4 ring-rose-500/40":"bg-emerald-500 hover:bg-emerald-400 text-slate-950"}`,
              children: D ? i.jsx(x0, {
                className: "w-6 h-6"
              }) : i.jsx(Nx, {
                className: "w-6 h-6"
              })
            }), i.jsxs("div", {
              children: [i.jsxs("div", {
                className: "font-mono text-2xl font-bold text-white",
                children: [Math.floor(X / 60).toString().padStart(2, "0"), ":", (X % 60).toString().padStart(2, "0")]
              }), i.jsx("p", {
                className: "text-xs text-slate-400",
                children: D ? "Recording your reading... read smoothly!" : L ? "Great reading practice completed!" : "Press microphone to time your reading"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex items-center gap-2 text-xs text-slate-300",
            children: [i.jsx(ri, {
              className: "w-4 h-4 text-emerald-400"
            }), i.jsx("span", {
              children: "Target speed: ~1.2 to 1.5 words per second"
            })]
          })]
        })]
      })]
    })
  },
  qx = ({
    isOpen: y,
    onClose: b
  }) => {
    const [z, d] = I.useState("grammar");
    if (!y) return null;
    const R = O => {
      B.speak(O)
    };
    return i.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn",
      children: i.jsxs("div", {
        className: "relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border-2 border-amber-500/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100",
        role: "dialog",
        "aria-modal": "true",
        children: [i.jsxs("div", {
          className: "flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 border-b border-amber-500/30",
          children: [i.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [i.jsx("div", {
              className: "w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300",
              children: i.jsx(oi, {
                className: "w-5 h-5"
              })
            }), i.jsxs("div", {
              children: [i.jsxs("h2", {
                className: "text-xl font-bold font-detective text-amber-300 flex items-center gap-2",
                children: ["Detective's Handbook & Clue Rules", i.jsx("span", {
                  className: "text-xs font-normal px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30",
                  children: "Правила и подсказки"
                })]
              }), i.jsx("p", {
                className: "text-xs text-slate-400",
                children: "Academy Stars 3 • Unit 7 Reading Time 3"
              })]
            })]
          }), i.jsx("button", {
            onClick: () => {
              B.playClick(), b()
            },
            className: "p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
            "aria-label": "Закрыть",
            children: i.jsx(Ex, {
              className: "w-6 h-6"
            })
          })]
        }), i.jsxs("div", {
          className: "flex border-b border-slate-800 bg-slate-950/50 px-6 gap-2 pt-3 overflow-x-auto",
          children: [i.jsxs("button", {
            onClick: () => {
              B.playClick(), d("grammar")
            },
            className: `px-4 py-2.5 rounded-t-xl font-medium text-sm flex items-center gap-2 transition-all border-b-2 ${z==="grammar"?"bg-slate-900 text-amber-300 border-amber-400 shadow-sm":"text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40"}`,
            children: [i.jsx(Bt, {
              className: "w-4 h-4 text-amber-400"
            }), "Comparative & Superlative"]
          }), i.jsxs("button", {
            onClick: () => {
              B.playClick(), d("spelling")
            },
            className: `px-4 py-2.5 rounded-t-xl font-medium text-sm flex items-center gap-2 transition-all border-b-2 ${z==="spelling"?"bg-slate-900 text-amber-300 border-amber-400 shadow-sm":"text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40"}`,
            children: [i.jsx(_x, {
              className: "w-4 h-4 text-emerald-400"
            }), "Spelling Clues (-er / -est)"]
          }), i.jsxs("button", {
            onClick: () => {
              B.playClick(), d("fluency")
            },
            className: `px-4 py-2.5 rounded-t-xl font-medium text-sm flex items-center gap-2 transition-all border-b-2 ${z==="fluency"?"bg-slate-900 text-amber-300 border-amber-400 shadow-sm":"text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40"}`,
            children: [i.jsx(r0, {
              className: "w-4 h-4 text-cyan-400"
            }), "Reading Fluency Tips"]
          }), i.jsxs("button", {
            onClick: () => {
              B.playClick(), d("morals")
            },
            className: `px-4 py-2.5 rounded-t-xl font-medium text-sm flex items-center gap-2 transition-all border-b-2 ${z==="morals"?"bg-slate-900 text-amber-300 border-amber-400 shadow-sm":"text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40"}`,
            children: [i.jsx(bx, {
              className: "w-4 h-4 text-purple-400"
            }), "Moral Explanations"]
          })]
        }), i.jsxs("div", {
          className: "flex-1 overflow-y-auto p-6 space-y-6",
          children: [z === "grammar" && i.jsxs("div", {
            className: "space-y-6",
            children: [i.jsxs("div", {
              className: "bg-amber-950/20 border border-amber-500/30 rounded-xl p-4",
              children: [i.jsxs("h3", {
                className: "text-base font-bold text-amber-300 mb-1 flex items-center gap-2",
                children: [i.jsx("span", {
                  children: "🎯"
                }), " Key Detective Rule: Short Adjectives (1 syllable)"]
              }), i.jsxs("p", {
                className: "text-sm text-slate-300",
                children: ["When comparing ", i.jsx("strong", {
                  className: "text-amber-200",
                  children: "TWO"
                }), " things, add ", i.jsx("span", {
                  className: "px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold",
                  children: "-er (+ than)"
                }), ". When comparing ", i.jsx("strong", {
                  className: "text-amber-200",
                  children: "THREE OR MORE"
                }), ", add ", i.jsx("span", {
                  className: "px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold",
                  children: "the + -est"
                }), "."]
              }), i.jsx("p", {
                className: "text-xs text-amber-400/80 mt-1 italic",
                children: "💡 Сравниваем двух: -er than (Rabbit is faster than Tortoise). Самый-самый среди всех: the -est (Rabbit thought he was the fastest animal in the wood)."
              })]
            }), i.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-3",
              children: Wd[0].examples.map((O, Y) => i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-3 hover:border-amber-500/40 transition-colors",
                children: [i.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [i.jsxs("span", {
                    className: "text-xs uppercase tracking-wider font-semibold text-slate-400",
                    children: ["Adjective #", Y + 1]
                  }), i.jsxs("button", {
                    onClick: () => R(`${O.base}, ${O.comp}, ${O.sup}`),
                    className: "text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 bg-slate-900/60 px-2 py-1 rounded",
                    children: [i.jsx(sl, {
                      className: "w-3.5 h-3.5"
                    }), "Listen"]
                  })]
                }), i.jsxs("div", {
                  className: "flex items-center justify-between text-sm",
                  children: [i.jsx("span", {
                    className: "font-semibold text-white bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700",
                    children: O.base
                  }), i.jsx(nl, {
                    className: "w-3.5 h-3.5 text-slate-500"
                  }), i.jsx("span", {
                    className: "text-amber-300 font-semibold",
                    children: O.comp
                  }), i.jsx(nl, {
                    className: "w-3.5 h-3.5 text-slate-500"
                  }), i.jsx("span", {
                    className: "text-emerald-300 font-semibold",
                    children: O.sup
                  })]
                }), i.jsxs("p", {
                  className: "text-xs text-slate-400 mt-2 italic",
                  children: ["📖 Evidence: ", O.note]
                })]
              }, Y))
            }), i.jsxs("div", {
              className: "bg-slate-950/60 border border-slate-800 rounded-xl p-4",
              children: [i.jsx("h4", {
                className: "text-xs uppercase font-bold text-slate-400 tracking-wider mb-2",
                children: "Real Evidence Found in Text:"
              }), i.jsx("ul", {
                className: "space-y-1.5 text-xs text-slate-300",
                children: Wd[0].textbookEvidence.map((O, Y) => i.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [i.jsx("span", {
                    className: "text-amber-400",
                    children: "🔍"
                  }), i.jsx("span", {
                    children: O
                  })]
                }, Y))
              })]
            })]
          }), z === "spelling" && i.jsxs("div", {
            className: "space-y-4",
            children: [i.jsxs("div", {
              className: "bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4",
              children: [i.jsxs("h3", {
                className: "text-base font-bold text-emerald-300 mb-1 flex items-center gap-2",
                children: [i.jsx("span", {
                  children: "⚡"
                }), " Spelling Detective Secrets"]
              }), i.jsx("p", {
                className: "text-sm text-slate-300",
                children: "Keep your magnifying glass ready! Watch out for these three spelling traps when adding -er and -est:"
              })]
            }), i.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4",
              children: [i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-2",
                children: [i.jsx("div", {
                  className: "text-amber-400 font-bold text-sm",
                  children: "Rule 1: Regular"
                }), i.jsxs("p", {
                  className: "text-xs text-slate-300",
                  children: ["Just add ", i.jsx("strong", {
                    className: "text-white",
                    children: "-er"
                  }), " or ", i.jsx("strong", {
                    className: "text-white",
                    children: "-est"
                  }), "."]
                }), i.jsxs("div", {
                  className: "bg-slate-900 p-2 rounded text-xs font-mono text-emerald-300",
                  children: ["fast → faster → fastest", i.jsx("br", {}), "slow → slower → slowest"]
                })]
              }), i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-2",
                children: [i.jsx("div", {
                  className: "text-cyan-400 font-bold text-sm",
                  children: "Rule 2: Ends in -e"
                }), i.jsxs("p", {
                  className: "text-xs text-slate-300",
                  children: ["Adjective already has an -e? Just add ", i.jsx("strong", {
                    className: "text-white",
                    children: "-r"
                  }), " or ", i.jsx("strong", {
                    className: "text-white",
                    children: "-st"
                  }), "!"]
                }), i.jsxs("div", {
                  className: "bg-slate-900 p-2 rounded text-xs font-mono text-cyan-300",
                  children: ["nice → nicer → nicest", i.jsx("br", {}), "brave → braver → bravest"]
                })]
              }), i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-2",
                children: [i.jsx("div", {
                  className: "text-pink-400 font-bold text-sm",
                  children: "Rule 3: CVC Double!"
                }), i.jsx("p", {
                  className: "text-xs text-slate-300",
                  children: "Consonant + Vowel + Consonant? Double the last letter!"
                }), i.jsxs("div", {
                  className: "bg-slate-900 p-2 rounded text-xs font-mono text-pink-300",
                  children: ["big → bigger → biggest", i.jsx("br", {}), "hot → hotter → hottest"]
                })]
              })]
            })]
          }), z === "fluency" && i.jsxs("div", {
            className: "space-y-4",
            children: [i.jsxs("div", {
              className: "bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-4",
              children: [i.jsxs("h3", {
                className: "text-base font-bold text-cyan-300 mb-1 flex items-center gap-2",
                children: [i.jsx("span", {
                  children: "🗣️"
                }), " Fluency Secret: What to Do If You Stumble?"]
              }), i.jsx("p", {
                className: "text-sm text-slate-300",
                children: "Top detectives don't panic when they see a tricky word. Use these 4 golden rules to read smoothly!"
              })]
            }), i.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              children: [i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex gap-3 items-start",
                children: [i.jsx("span", {
                  className: "text-2xl",
                  children: "🧩"
                }), i.jsxs("div", {
                  children: [i.jsx("h4", {
                    className: "font-bold text-sm text-white",
                    children: "1. Syllable Chunking"
                  }), i.jsxs("p", {
                    className: "text-xs text-slate-300 mt-1",
                    children: ["Cut long words into friendly bites: ", i.jsx("br", {}), i.jsx("span", {
                      className: "text-amber-300 font-mono",
                      children: "com-pe-ti-tion"
                    }), " (competition), ", i.jsx("br", {}), i.jsx("span", {
                      className: "text-amber-300 font-mono",
                      children: "sand-wich-es"
                    }), " (sandwiches)."]
                  })]
                })]
              }), i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex gap-3 items-start",
                children: [i.jsx("span", {
                  className: "text-2xl",
                  children: "🔗"
                }), i.jsxs("div", {
                  children: [i.jsx("h4", {
                    className: "font-bold text-sm text-white",
                    children: "2. Read in Word Groups"
                  }), i.jsxs("p", {
                    className: "text-xs text-slate-300 mt-1",
                    children: ["Don't read word... by... word. Group 2-3 words together: ", i.jsx("br", {}), i.jsx("span", {
                      className: "text-cyan-300 italic",
                      children: '"under a big tree"'
                    }), ", ", i.jsx("br", {}), i.jsx("span", {
                      className: "text-cyan-300 italic",
                      children: '"held onto his hat"'
                    }), "."]
                  })]
                })]
              }), i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex gap-3 items-start",
                children: [i.jsx("span", {
                  className: "text-2xl",
                  children: "🎭"
                }), i.jsxs("div", {
                  children: [i.jsx("h4", {
                    className: "font-bold text-sm text-white",
                    children: "3. Acting & Tone"
                  }), i.jsxs("p", {
                    className: "text-xs text-slate-300 mt-1",
                    children: ["Notice punctuation! When Rabbit laughs: ", i.jsx("span", {
                      className: "text-emerald-300 italic",
                      children: '"Ha! Ha!"'
                    }), " say it loudly. When Tortoise ponders: ", i.jsx("span", {
                      className: "text-emerald-300 italic",
                      children: '"Hmm..."'
                    }), " speak quietly!"]
                  })]
                })]
              }), i.jsxs("div", {
                className: "bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex gap-3 items-start",
                children: [i.jsx("span", {
                  className: "text-2xl",
                  children: "⏱️"
                }), i.jsxs("div", {
                  children: [i.jsx("h4", {
                    className: "font-bold text-sm text-white",
                    children: "4. Rhythm Over Rush"
                  }), i.jsx("p", {
                    className: "text-xs text-slate-300 mt-1",
                    children: "Being fast isn't fluency — just like in the fable, steady, clear reading is much better than rushing and tripping!"
                  })]
                })]
              })]
            })]
          }), z === "morals" && i.jsxs("div", {
            className: "space-y-4",
            children: [i.jsxs("div", {
              className: "bg-purple-950/20 border border-purple-500/30 rounded-xl p-4",
              children: [i.jsxs("h3", {
                className: "text-base font-bold text-purple-300 mb-1 flex items-center gap-2",
                children: [i.jsx("span", {
                  children: "📜"
                }), " What is a Moral? (Что такое мораль?)"]
              }), i.jsx("p", {
                className: "text-sm text-slate-300",
                children: "A moral is the secret life lesson or detective truth hidden inside a fable! Aesop wrote these fables over 2,500 years ago, and their lessons are still true today."
              })]
            }), i.jsxs("div", {
              className: "bg-slate-800/80 border border-purple-500/30 rounded-xl p-4 space-y-3",
              children: [i.jsxs("div", {
                className: "flex items-center gap-2",
                children: [i.jsx("span", {
                  className: "px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30",
                  children: "Story 1 • The Race"
                }), i.jsx("span", {
                  className: "text-xs text-slate-400",
                  children: "Tortoise & Rabbit"
                })]
              }), i.jsxs("div", {
                className: "p-3 bg-slate-900 rounded-lg border border-purple-500/20",
                children: [i.jsx("div", {
                  className: "text-sm font-bold text-amber-300",
                  children: '"Slow and steady wins the race. Being clever and patient is better than being fast and careless!"'
                }), i.jsxs("div", {
                  className: "text-xs text-slate-400 mt-1",
                  children: ["🇷🇺 ", i.jsx("span", {
                    className: "text-slate-300",
                    children: "Тише едешь — дальше будешь. Терпение и постоянство побеждают хвастовство и лень."
                  })]
                })]
              })]
            }), i.jsxs("div", {
              className: "bg-slate-800/80 border border-blue-500/30 rounded-xl p-4 space-y-3",
              children: [i.jsxs("div", {
                className: "flex items-center gap-2",
                children: [i.jsx("span", {
                  className: "px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30",
                  children: "Story 2 • The Wind and the Sun"
                }), i.jsx("span", {
                  className: "text-xs text-slate-400",
                  children: "Gentle Warmth vs Cold Force"
                })]
              }), i.jsxs("div", {
                className: "p-3 bg-slate-900 rounded-lg border border-blue-500/20",
                children: [i.jsx("div", {
                  className: "text-sm font-bold text-amber-300",
                  children: '"Gentleness and warmth are much stronger than cold force and anger. Kindness always wins!"'
                }), i.jsxs("div", {
                  className: "text-xs text-slate-400 mt-1",
                  children: ["🇷🇺 ", i.jsx("span", {
                    className: "text-slate-300",
                    children: "Доброта и мягкость сильнее грубой силы. Лаской можно добиться того, чего не добьешься криком и напором."
                  })]
                })]
              })]
            })]
          })]
        }), i.jsxs("div", {
          className: "px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center",
          children: [i.jsx("span", {
            className: "text-xs text-slate-400",
            children: "🔍 Always available anytime you need a detective hint!"
          }), i.jsx("button", {
            onClick: () => {
              B.playClick(), b()
            },
            className: "px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors",
            children: "Got it, Return to Investigation"
          })]
        })]
      })
    })
  };

function Bx() {
  const [y, b] = usePersisted("stage", 0), [z, d] = usePersisted("detectiveName", ""), [R, O] = I.useState(!1), [Y, P] = usePersisted("soundEnabled", !0), [D, T] = usePersisted("timerSeconds", 0), [X, _] = usePersisted("timerOn", !0), [L, ne] = usePersisted("m1frags", []), [ce, $] = usePersisted("m2frags", []);
  I.useEffect(() => {
    B.toggleSound(Y);
  }, []);
  I.useEffect(() => {
    let de;
    return X && (de = setInterval(() => {
      T(W => W + 1)
    }, 1e3)), () => clearInterval(de)
  }, [X]);
  const canVisitStage = st => {
    if (st <= 1 || st === 5) return !0;
    if (st === 2) return L.length >= 4;
    if (st >= 3) return L.length >= 4 && ce.length >= 4;
    return !0;
  };
  const ae = () => {
      B.playClick(), _(!X)
    },
    ee = () => {
      B.playClick(), T(0)
    },
    Se = () => {
      const de = B.toggleSound();
      P(de)
    },
    me = de => {
      L.includes(de) || ne(W => [...W, de])
    },
    ze = de => {
      ce.includes(de) || $(W => [...W, de])
    },
    ke = L.length + ce.length;
  return i.jsxs("div", {
    className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950",
    children: [i.jsx(Rx, {
      currentStage: y,
      onSelectStage: de => canVisitStage(de) && b(de),
      onOpenRules: () => O(!0),
      timerSeconds: D,
      isTimerRunning: X,
      onToggleTimer: ae,
      onResetTimer: ee,
      soundEnabled: Y,
      onToggleSound: Se,
      detectiveName: z,
      totalFragmentsUnlocked: ke,
      canVisitStage: canVisitStage,
      onHardReset: hardReset
    }), i.jsx("div", {
      className: "bg-slate-900/60 border-b border-slate-800/80 px-4 py-1.5 text-[11px] text-slate-400",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2",
        children: [i.jsxs("div", {
          className: "flex items-center gap-2",
          children: [i.jsx("span", {
            className: "text-amber-400 font-bold",
            children: "⏱️ 45-Min Pacing:"
          }), i.jsx("span", {
            children: "Intro (2m)"
          }), i.jsx("span", {
            children: "→"
          }), i.jsx("span", {
            className: y === 1 ? "text-amber-300 font-bold" : "",
            children: "Mission 1 (18m)"
          }), i.jsx("span", {
            children: "→"
          }), i.jsx("span", {
            className: y === 2 ? "text-amber-300 font-bold" : "",
            children: "Mission 2 (18m)"
          }), i.jsx("span", {
            children: "→"
          }), i.jsx("span", {
            className: y === 3 ? "text-amber-300 font-bold" : "",
            children: "Assembly (4m)"
          }), i.jsx("span", {
            children: "→"
          }), i.jsx("span", {
            className: y === 4 ? "text-amber-300 font-bold" : "",
            children: "Reflection (3m)"
          })]
        }), i.jsx("div", {
          className: "flex items-center gap-2",
          children: i.jsx("span", {
            className: "text-xs text-amber-300 font-medium",
            children: "Academy Stars 3 • Unit 7 Reading Time 3"
          })
        })]
      })
    }), i.jsxs("main", {
      className: "flex-1 pb-16",
      children: [y === 0 && i.jsx(Dx, {
        detectiveName: z,
        onUpdateDetectiveName: d,
        onStartLesson: () => b(1),
        onOpenRules: () => O(!0)
      }), y === 1 && i.jsx(Zd, {
        key: "mission-1",
        mission: Jd[0],
        unlockedFragments: L,
        onUnlockFragment: me,
        onNextMission: () => b(2),
        onOpenRules: () => O(!0)
      }), y === 2 && i.jsx(Zd, {
        key: "mission-2",
        mission: Jd[1],
        unlockedFragments: ce,
        onUnlockFragment: ze,
        onNextMission: () => b(3),
        onOpenRules: () => O(!0)
      }), y === 3 && i.jsx(kx, {
        detectiveName: z,
        totalFragmentsUnlocked: ke,
        onProceedToReflection: () => b(4)
      }), y === 4 && i.jsx(Ux, {
        detectiveName: z,
        onProceedToHomework: () => b(5)
      }), y === 5 && i.jsx(Hx, {})]
    }), i.jsx("div", {
      className: "fixed bottom-5 right-5 z-40",
      children: i.jsxs("button", {
        onClick: () => {
          B.playClick(), O(!0)
        },
        className: "group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-2xl shadow-amber-500/30 transition-all transform hover:scale-105 cursor-pointer border-2 border-amber-300",
        title: "Open Detective's Grammar & Clue Handbook",
        children: [i.jsx(oi, {
          className: "w-4 h-4"
        }), i.jsx("span", {
          className: "font-bold",
          children: "Rules & Clues"
        }), i.jsx(Bt, {
          className: "w-3.5 h-3.5 text-amber-900 group-hover:rotate-12 transition-transform"
        })]
      })
    }), i.jsx(qx, {
      isOpen: R,
      onClose: () => O(!1)
    })]
  })
}
function Ky() {
  const [boot, setBoot] = I.useState(0);
  I.useEffect(() => {
    window.__tcReset = () => setBoot(n => n + 1);
    return () => {
      delete window.__tcReset;
    };
  }, []);
  return i.jsx(Bx, {
    key: boot
  });
}
lx.createRoot(document.getElementById("root")).render(i.jsx(I.StrictMode, {
  children: i.jsx(Ky, {})
}));